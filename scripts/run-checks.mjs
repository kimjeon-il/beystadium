import { spawn } from "node:child_process";
import { createWriteStream } from "node:fs";
import { mkdir, readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export async function runCheckGroups(groups, { run, report = console.log, advisory = [] } = {}) {
  if (!Object.keys(groups).length || Object.values(groups).some(checks => !checks.length)) throw new Error("Check groups must not be empty");
  const results = [];
  for (const [group, checks] of Object.entries(groups)) {
    for (const check of checks) {
      let code;
      try { code = await run(check, group); }
      catch (error) { report(`${group}/${check}: ${error.message}`); code = 1; }
      results.push({ group, check, code });
      report(`${group}/${check}: ${code === 0 ? "PASS" : advisory.includes(group) ? "REVIEW REQUIRED" : "FAIL"}`);
    }
  }
  return { results, failed: results.some(entry => entry.code !== 0 && !advisory.includes(entry.group)) };
}

const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isDirectRun) {
  const { scripts } = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
  const groups = {
    structure: ["lint:js", "audit:app", "test:contracts"],
    data: ["data:check", "test:unit", ...Object.entries(scripts).filter(([name, command]) => name.startsWith("test:") && command.startsWith("node scripts/validate-")).map(([name]) => name)],
    behavior: ["test:behavior"],
    visual: ["test:visual"],
    resources: ["test:resources"]
  };
  const requested = process.argv.find(argument => argument.startsWith("--group="))?.slice(8);
  if (requested && !groups[requested]) throw new Error(`Unknown check group: ${requested}`);
  await mkdir(new URL("../.cache/checks/", import.meta.url), { recursive: true });
  const result = await runCheckGroups(requested ? { [requested]: groups[requested] } : groups, {
    advisory: requested ? [] : ["visual"],
    run: (check, group) => new Promise(resolve => {
      const file = new URL(`../.cache/checks/${group}-${check.replace(/:/g, "-")}.log`, import.meta.url);
      const output = createWriteStream(file);
      const child = spawn(process.platform === "win32" ? "pnpm.cmd" : "pnpm", ["run", check], {
        shell: process.platform === "win32", stdio: ["ignore", "pipe", "pipe"]
      });
      child.stdout.pipe(output, { end: false });
      child.stderr.pipe(output, { end: false });
      child.on("error", error => { output.write(error.message); });
      child.on("close", code => output.end(() => {
        console.log(`Log: ${file.pathname}`);
        resolve(code ?? 1);
      }));
    })
  });
  if (result.results.some(entry => entry.group === "visual" && entry.code !== 0)) console.log("Visual contract changes need design review; see the visual log.");
  process.exitCode = result.failed ? 1 : 0;
}
