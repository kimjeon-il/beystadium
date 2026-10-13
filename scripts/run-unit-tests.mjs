import { spawn } from "node:child_process";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

async function discover(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await discover(path));
    else if (entry.isFile() && entry.name.endsWith(".test.mjs")) files.push(path);
  }
  return files;
}
const files = (await discover("tests")).sort();
if (!files.length) throw new Error("No unit tests discovered");
const child = spawn(process.execPath, ["--test", ...files], { stdio: "inherit" });
child.on("error", error => { console.error(error); process.exitCode = 1; });
child.on("close", code => { process.exitCode = code ?? 1; });
