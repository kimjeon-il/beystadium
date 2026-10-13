import { Buffer } from "node:buffer";

export function observeTextRequests(page, origin) {
  const paths = new Set();
  const sizes = new Map();
  const failures = [];
  const pending = new Map();
  const reads = new Set();
  const measured = request => ["document", "script", "stylesheet", "fetch"].includes(request.resourceType())
    && new URL(request.url()).origin === origin;
  const finish = request => {
    const resolve = pending.get(request)?.resolve;
    pending.delete(request);
    resolve?.();
  };
  page.on("request", request => {
    if (!measured(request)) return;
    paths.add(new URL(request.url()).pathname);
    let resolve;
    const promise = new Promise(done => { resolve = done; });
    pending.set(request, { promise, resolve });
  });
  page.on("response", response => {
    if (!measured(response.request())) return;
    const path = new URL(response.url()).pathname;
    if (!response.ok()) failures.push(`${response.status()} ${path}`);
    const read = response.body()
      .then(bytes => sizes.set(path, (sizes.get(path) || 0) + Buffer.byteLength(bytes.toString("utf8").replace(/\r\n/g, "\n"))))
      .catch(error => failures.push(`${path}: ${error.message}`))
      .finally(() => reads.delete(read));
    reads.add(read);
  });
  page.on("requestfinished", finish);
  page.on("requestfailed", request => {
    if (measured(request)) failures.push(`${request.url()}: ${request.failure()?.errorText}`);
    finish(request);
  });
  return {
    paths, sizes, failures,
    async drain() {
      while (pending.size || reads.size) await Promise.all([...pending.values()].map(entry => entry.promise).concat([...reads]));
    }
  };
}
