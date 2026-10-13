# Adaptive validation implementation plan

> **For agentic workers:** Use superpowers:executing-plans to implement this approved plan inline.

**Goal:** Normal data, layout and internal-module changes should require fewer test edits while real regressions continue to fail.

**Architecture:** Discover mutable inputs from source data and existing manifests. Keep behavioral expectations, reviewed provenance, published addresses and performance budgets independent. Separate visual expectations from functional checks.

**Tech Stack:** Node.js, node:test, Playwright, ESLint, GitHub Actions.

**Spec:** User-approved proposal in this conversation, 2026-10-14.

## Global constraints

- Preserve unrelated `.gitignore` edits and all source data and image files.
- Preserve independently verified product relationships, official episode facts and approved image hashes.
- No automatic baseline regeneration or budget increases.
- Existing tooling; no new product dependencies.
- User approved continuous execution; implement in this checkout on `codex/adaptive-validation`.

## Review focus

- Empty inputs must not silently pass coverage checks.
- Missing, duplicate or unexpected mappings must fail even after numeric totals are removed.
- A stale generated value must fail even though CRLF is accepted.
- Discovery must fail on missing modules instead of omitting them from the graph.
- Theme changes must preserve functional focus and navigation coverage.

## Task 1: Data coverage contracts

- [x] Add failing node tests for added entries, missing/duplicate/empty coverage.
- [x] Implement `assertCoverage(expected, mapped, unavailable, label)` in `scripts/validation-contracts.mjs`.
- [x] Use coverage and independently computed manifest totals instead of historical counts in image validators and data tests. Retain approved fixture facts as required subsets.
- [x] Verify focused node suites and all image validators.

## Task 2: Generated data and audit discovery

- [x] Add failing tests for CRLF acceptance and stale-value detection using injected reads.
- [x] Normalize line endings only in generated-data comparisons.
- [x] Export style metadata directly; resolve home entry files from HTML and use parsed JavaScript imports with recursive discovery.
- [x] Add audit tests for comments, formatting, nested modules and missing targets.
- [x] Verify data:check, audit:app and contract tests.

## Task 3: Behavioral UI helpers

- [x] Replace the hardcoded character page with bounded pagination discovery and verify missing targets fail.
- [x] Remove duplicated image cache versions; inspect URL semantics.
- [x] Use relative modal geometry, semantic current-navigation state and scoped animation readiness for functional assertions.
- [x] Keep theme-specific visual expectations in explicitly tagged visual suites.
- [x] Verify desktop/mobile navigation, details, interface and adaptive helper tests.

## Task 4: Resource loading contracts and CI

- [x] Derive paths from import maps, route style manifests and runtime manifests; retain independent no-eager-detail/no-unrelated-data policies.
- [x] Remove arbitrary waits where observable completion is available.
- [x] Add grouped check commands and an aggregate runner that reports all independent failures.
- [x] Split CI into structure, data/assets, behavior, visual and resource-budget reports, with every required group gating success.

## Task 5: Verification and review

- [x] Run full pnpm check with fresh evidence.
- [x] Run controlled valid-change and invalid-change probes.
- [x] Review the whole diff for weakened assertions and unrelated changes; fix actionable findings.
- [x] Record final checks and remaining explicit design/business contracts.

## Verification record

- `pnpm.cmd check`: every required group passed; 165 unit tests and 182 behavior tests passed, with 76 browser skips for project-specific cases. Image validators and generated data passed.
- The initial visual review warning came from a pointer remaining at the previous layout position. After preparing hover and animation state from observable conditions, `pnpm.cmd check:visual` passed all 37 applicable cases (25 project skips).
- The two affected mixed-flow behavior cases were checked again after their final readiness changes: both passed, with their mobile/desktop exclusions retained. Final JavaScript lint passed.
- Resource measurement passed: 138,016 core bytes and 147,664 requested text bytes. Static core audit: 138,405 bytes, below the unchanged 140,000-byte limit; 47 reachable modules, zero static import cycles.
- Controlled probes cover allowed additions, formatting/import-map changes, nested modules, CRLF, new cache versions, changing pagination controls and changed decoration. Missing/duplicate/overlapping coverage, stale generated values, missing modules, wrong/unversioned assets, missing focus indicators and off-screen shells still fail.
- Independent code review findings were fixed. Required focus checks accept a visible changing outline, border or shadow; precise shape, color, spacing and rotation remain visual contracts.
- No source data, image files, budget values or dependencies changed. The pre-existing `.gitignore` edit is excluded from the commit.
- Production changes only expose existing style metadata and the currently rendered detail identity; their import-map cache versions were updated.