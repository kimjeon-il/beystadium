import assert from "node:assert/strict";
import test from "node:test";

import { parseRouteFromHash, serializeRoute } from "../src/route-parser.js";
import { searchScopeValues } from "../src/search-scopes.js";

test("every public search scope survives route parsing and serialization", () => {
  for (const scope of searchScopeValues) {
    const hash = serializeRoute({ type: "search", query: "드랜", scope });
    assert.deepEqual(parseRouteFromHash(hash), { type: "search", query: "드랜", scope });
  }
});

test("unknown search scopes normalize to all", () => {
  assert.equal(parseRouteFromHash("#search?q=드랜&scope=unknown").scope, "all");
});
