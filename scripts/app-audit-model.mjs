import { access, readdir } from "node:fs/promises";
import { join } from "node:path";
import { Linter } from "eslint";

const parser = new Linter();

export function moduleImports(source) {
  const messages = parser.verify(source, { languageOptions: { ecmaVersion: "latest", sourceType: "module" } });
  const fatal = messages.find(message => message.fatal);
  if (fatal) throw new Error(`Cannot parse module: ${fatal.message}`);
  const result = { static: [], dynamic: [] };
  const pending = [parser.getSourceCode().ast];
  while (pending.length) {
    const node = pending.shift();
    if (["ImportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"].includes(node.type) && node.source) {
      result.static.push(node.source.value);
    } else if (node.type === "ImportExpression") {
      const specifier = node.source.type === "Literal" ? node.source.value
        : node.source.type === "TemplateLiteral" && !node.source.expressions.length ? node.source.quasis[0].value.cooked : null;
      if (typeof specifier === "string") result.dynamic.push(specifier);
      else throw new Error("Dynamic module paths need an explicit manifest for reachability auditing");
    }
    for (const [key, value] of Object.entries(node)) {
      if (["parent", "tokens", "comments", "loc", "range"].includes(key)) continue;
      if (Array.isArray(value)) pending.push(...value.filter(entry => entry?.type));
      else if (value?.type) pending.push(value);
    }
  }
  return result;
}

const htmlAttributes = source => Object.fromEntries([...source.matchAll(/([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
  .map(attribute => [attribute[1].toLowerCase(), attribute[2] ?? attribute[3] ?? attribute[4]]));

export function readImportMap(html) {
  const source = html.replace(/<!--[\s\S]*?-->/g, "");
  for (const match of source.matchAll(/<script\b([^>]*?)>([\s\S]*?)<\/script\s*>/gi)) {
    if (htmlAttributes(match[1]).type?.toLowerCase() === "importmap") return JSON.parse(match[2]).imports || {};
  }
  throw new Error("Import map is missing");
}

export function htmlResources(html) {
  const resources = [];
  const withoutComments = html.replace(/<!--[\s\S]*?-->/g, "");
  for (const match of withoutComments.matchAll(/<(script|link)\b([^>]*?)>/gi)) {
    const entry = { tag: match[1].toLowerCase(), ...htmlAttributes(match[2]) };
    if (entry.src || entry.href) resources.push(entry);
  }
  return resources;
}

export async function sourceModules(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) files.push(...await sourceModules(join(directory, entry.name)));
    else if (entry.isFile() && entry.name.endsWith(".js")) files.push(join(directory, entry.name));
  }
  return files;
}

export async function requireModuleFile(file) {
  try { await access(file); }
  catch { throw new Error(`Missing module: ${file}`); }
}
