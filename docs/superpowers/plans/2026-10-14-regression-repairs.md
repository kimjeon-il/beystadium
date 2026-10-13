# Beystadium regression repairs

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task by task in the current checkout. The user authorized the prioritized repairs; preserve existing `.gitignore` changes.

**Goal:** Repair the seven failures in the supplied analysis, starting with actual navigation and rendering defects.

**Architecture:** Keep the existing lazy data loader and route controller authoritative for detail navigation. Include the collection's render context in its cache key. Correct test fixtures and assertions to cover the current design without removing functional or accessibility checks.

**Tech Stack:** Native JavaScript modules, CSS, Node.js, Playwright.

**Spec:** User attachment `C:/Users/taeeu/.codex/attachments/7a3d27bf-9b5e-4903-8b40-a7315aee3e77/붙여넣은 텍스트.txt`.

## Global constraints

- P0 navigation and character usage precede P1 fixture/pagination repairs and P2 visual assertions.
- Preserve source data, current Sport-Tech design, and unrelated working changes.
- Keep lazy loading on home and listings; update affected import-map cache versions.
- Do not delete checks or weaken the 44px minimum touch target.

## Review focus

- A valid detail hash entered after a listing must load its previously unloaded data.
- An unknown detail hash must still return to home; loader failures must retain the error UI.
- Reloaded character details must return to the exact Bey and retain any release-product chain.
- Both hash navigation and season dropdown changes must update cards with identical character IDs.
- Animation completion must precede geometry measurements without disabling motion tests globally.

## Task 1: P0 detail navigation and return

**Files:** `src/detail-controller.js`, `src/route-controller.js`, `src/data-store.js`, `index.html`, `tests/bey-relations.spec.mjs`, `tests/routing-loading.spec.mjs`.

**Interfaces:** Existing `routeIfNeeded(route)` starts authoritative lazy route preparation; exposed `BeystadiumDataStore.ensureRegistry()` distinguishes loading failure from an unknown detail ID. `ensureRoute()` loads canonical data after classification.

- [x] Reproduce existing Gemios navigation and Big Bang/Toby reload return failures on current main.
- [x] Strengthen return checks to require the target Bey modal title and user link, and add late-hash/invalid-hash coverage.
- [x] Route Bey opens before consulting the in-memory map; resolve unknown IDs through the registry before falling back. Preserve the hash on registry failure and guard resolution against a newer hash.
- [x] Run affected relation and routing tests on desktop and mobile (12 passed before adding failure/retry coverage).

## Task 2: P0 seasonal rendering

**Files:** `src/collection-view.js`, `index.html`, `tests/bey-relations.spec.mjs`.

**Interfaces:** `renderCategoryCollection(config)` uses `config.renderKey()` as the context for grid reuse.

- [x] Reproduce season-two still displaying Storm Pegasis in the existing season test.
- [x] Add season dropdown and reverse-transition checks for Kang Ta.
- [x] Include render context in the grid cache key so identical IDs with changed seasonal content rerender.
- [x] Verify seasonal, pagination, and catalog cache tests.

## Task 3: P1 preview fixtures and pagination

**Files:** `tests/helpers/ui-assertions.mjs`, `tests/interface-regression.spec.mjs`, affected preview tests in `tests/detail-regression.spec.mjs`.

- [x] Reproduce preview failures and full-series card lookup failure.
- [x] Match optional cache queries on Storm Pegasis fixture URLs; retain preview image and interaction assertions.
- [x] Navigate the all-series character pagination using the visible next-page control before examining Tae's roleless card.
- [x] Run affected preview and profile-card tests.

## Task 4: P2 visual assertions and stability

**Files:** `styles/base.css`, `src/style-loader.js`, `index.html`, `tests/helpers/ui-assertions.mjs`, `tests/mobile-navigation.spec.mjs`, `tests/responsive-surface.spec.mjs`, `tests/interface-regression.spec.mjs`, `tests/detail-regression.spec.mjs`, `tests/bey-relations.spec.mjs`, `tests/sport-tech-theme.spec.mjs`.

- [x] Inspect current light/dark navigation rules and reproduce outdated expectations.
- [x] Assert current 52px mobile navigation, visible underline selection and theme accent, retaining contrast and minimum-target checks.
- [x] Add an animation-completion helper and use it immediately before modal geometry measurements.
- [x] Check keyboard focus on the actual card surface while requiring the action to remain focused; restore the active navigation button's focus ring.
- [x] Await route readiness before immediate reloads that abort pending data requests; await fonts and panel entry animation before theme geometry comparisons.
- [x] Run focused tests, then `pnpm.cmd check`; inspect all remaining failures and the final diff.

## Execution record

- Branch: `codex/regression-repairs-20261014`; starting commit `8dd1504`. Existing `.gitignore` changes preserved.
- Baseline relation suite: 18 passed, 10 failed. Failures confirmed navigation, seasonal content and animation geometry defects.
- First broad browser verification: 160 passed, 6 failed, 76 skipped. Remaining failures led to complete theme expectation updates, active-navigation focus fix and stable theme geometry measurements.
- Review found that registry failure erased the requested detail hash. New desktop/mobile tests failed with URL `/` before the failure-preserving registry resolution fix; newer-hash race tests passed.
- Generated data check initially rejected Windows CRLF endings. JSON values were identical; `pnpm.cmd data:build` restored expected LF without a Git content diff. No source records changed.
- `pnpm.cmd test:data`: 2850 unique items, 0 missing references. Relation unit suite: 62 passed.
- Final focused registry tests: 6 passed (late detail, failed registry retry, superseding hash on both projects). Theme/filter checks: 3 passed, 1 project-specific skip.
- Independent read-only review: no remaining actionable findings after exposing the registry loader and preserving the failed detail URL.
- Final `pnpm.cmd check`: exit 0; lint, app audit, generated data, source/asset validators and all 152 Node tests passed. Playwright: 170 passed, 0 failed, 76 existing project/viewport skips. Evidence: `.cache/final-check.log`.
- Ruling: Use the existing loader's retry UI and preserve the failed detail URL; do not classify a failed network request as an unknown ID.
- Ruling: Keep finite animations enabled and wait for completion before geometry checks. Keep the original 44px minimum and <1px theme-layout threshold.
- Ruling: Theme layout checks wait only the relevant panel/body animations; waiting on hidden descendant color transitions can stall until those nodes render.
