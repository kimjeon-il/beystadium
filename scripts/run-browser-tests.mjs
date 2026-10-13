import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const mode = process.argv[2];
if (!["all", "behavior", "visual", "resources"].includes(mode)) throw new Error(`Unknown browser check mode: ${mode}`);
const require = createRequire(import.meta.url);
const cli = require.resolve("@playwright/test/cli");
const filters = {
  all: [],
  behavior: ["--grep-invert", "@visual|@resources"],
  visual: ["--grep", "@visual|@design-flow"],
  resources: ["--grep", "@resources"]
};
const forwarded = process.argv.slice(3);
if (forwarded[0] === "--") forwarded.shift();
const child = spawn(process.execPath, [cli, "test", ...filters[mode], ...forwarded], {
  stdio: "inherit", env: { ...process.env, VALIDATION_MODE: mode === "all" ? "visual" : mode }
});
child.on("error", error => { console.error(error); process.exitCode = 1; });
child.on("close", code => { process.exitCode = code ?? 1; });
