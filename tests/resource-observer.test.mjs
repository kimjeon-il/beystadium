import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import { EventEmitter } from "node:events";
import test from "node:test";
const helper = await import("./helpers/resource-observer.mjs").catch(() => ({}));

test("resource observation records requests before delayed headers and drains delayed bodies", async () => {
  assert.equal(typeof helper.observeTextRequests, "function", "resource observer missing");
  const page = new EventEmitter();
  const observer = helper.observeTextRequests(page, "https://measured.invalid");
  const request = { url: () => "https://measured.invalid/data.json", resourceType: () => "fetch" };
  page.emit("request", request);
  assert.ok(observer.paths.has("/data.json"), "late responses must not hide eager requests");
  let complete = false;
  const drained = observer.drain().then(() => { complete = true; });
  await Promise.resolve();
  assert.equal(complete, false);
  let releaseBody;
  const body = new Promise(resolve => { releaseBody = resolve; });
  page.emit("response", { request: () => request, url: request.url, ok: () => true, body: () => body });
  page.emit("requestfinished", request);
  await Promise.resolve();
  assert.equal(complete, false, "request completion must still wait for its body reader");
  releaseBody(Buffer.from("a\r\nb"));
  await drained;
  assert.equal(observer.sizes.get("/data.json"), 3);
});

test("resource observation reports local failures and counts repeated transfers", async () => {
  assert.equal(typeof helper.observeTextRequests, "function", "resource observer missing");
  const page = new EventEmitter();
  const observer = helper.observeTextRequests(page, "https://measured.invalid");
  const failed = { url: () => "https://measured.invalid/missing.js", resourceType: () => "script", failure: () => ({ errorText: "failed" }) };
  page.emit("request", failed);
  page.emit("requestfailed", failed);
  assert.equal(observer.failures.length, 1);
  for (let index = 0; index < 2; index++) {
    const request = { url: () => "https://measured.invalid/a.css", resourceType: () => "stylesheet" };
    page.emit("request", request);
    page.emit("response", { request: () => request, url: request.url, ok: () => true, body: async () => Buffer.from("css") });
    page.emit("requestfinished", request);
  }
  await observer.drain();
  assert.equal(observer.sizes.get("/a.css"), 6);
});
