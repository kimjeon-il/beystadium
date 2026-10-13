# Validation contracts

Run `pnpm.cmd check` on Windows, or `pnpm check` elsewhere. Independent checks continue after an earlier failure. Logs live in `.cache/checks/` and CI uploads a separate artifact for each group.

| Group | Command | Gate |
| --- | --- | --- |
| Structure | `pnpm check:structure` | Required: syntax, imports, stylesheet manifests and tool contracts |
| Data and assets | `pnpm check:data` | Required: generated data, every discovered `.test.mjs`, image coverage and reviewed provenance |
| Behavior | `pnpm check:behavior` | Required: routes, links, recovery, keyboard operation and adaptive UI flows |
| Resources | `pnpm check:resources` | Required: cold-home loading and independent size limits |
| Visual | `pnpm check:visual` | Design review: exact decoration, dimensions and theme conventions |

`check` reports visual failures as **REVIEW REQUIRED** without converting them into functional failures. `check:visual` still exits nonzero on any visual failure, and its CI job reports that result independently. Design changes must be reviewed; never automatically rewrite a baseline. A passing aggregate alone is not evidence that visual checks passed.

Browser checks use two workers. Failure screenshots are always retained; traces are collected on the first retry (CI has one retry). Local retries remain disabled. During this migration, the same X random-booster flow passed in 7.3 seconds with tracing off and timed out during context teardown with `retain-on-failure`. Avoid recording every passing run; when investigating a failure, opt into a focused trace with `pnpm exec playwright test <file> --grep <case> --trace=retain-on-failure`.

`pnpm test:smoke` runs every browser case with design expectations enabled. Focused grouped runs accept ordinary Playwright arguments, for example `pnpm test:behavior -- tests/adaptive-ui.spec.mjs`.

## What follows current code

- Resource paths come from the HTML import map, stylesheet manifest and generated runtime manifest.
- Unit tests are discovered recursively by `.test.mjs`; new tests do not need another command-list entry.
- Image targets come from current catalog IDs or Bey/part contexts. Mapped and explicitly unavailable records must form an exact, disjoint partition. Empty required categories, duplicates and unexpected records fail.
- Required historical character facts remain checked individually, allowing unrelated additions.
- Pagination helpers explore the rendered controls, including visible step buttons when numeric buttons are hidden.
- Asset assertions check the exact path and a nonempty version, allowing cache-version changes and other query parameters.
- Detail assertions wait for the rendered `data-detail-id`, so a new URL cannot accidentally validate the previous modal content. Appearance samples start from a fresh document when navigation only changes the hash.
- Generated data normalizes CRLF to LF only. Values, array order, missing files and stale output still fail.

## What remains independent

Published addresses, known incorrect relationships, official product editions and episode facts, reviewed source/output hashes, minimum primary-navigation/back target dimensions and performance budgets remain explicit expectations. Do not use the application function under test to manufacture its expected result.

Approved source and image reviews are evidence, not runtime discovery. Updating them requires inspecting the new evidence. Counts describing a closed official lineup or an archived review batch can remain fixed; current catalog totals must use coverage instead.

## Resource budget scope

The existing 140,000-byte **core text** policy retains its scope: document, base/mobile CSS, declared module entry, data store, favicon and runtime index. The 60,000-byte base-CSS limit is unchanged. Limits live in `scripts/validation-budgets.mjs`, independently of measured output.

The browser resource test measures cold-home document, script, stylesheet and fetch responses and attaches both core bytes and **all requested text bytes**, including additional theme resources. Image requests, including image-type favicons, are outside this browser text measurement; the static audit still includes the declared favicon. The expanded total is reported separately and is not mislabeled as the existing core budget.

## Adding or changing tests

Use roles and accessible names where possible, then stable domain attributes or explicit test IDs. Keep an independent representative fixture for each required category. Test both a permitted change and a defect when introducing a discovery helper: an additional item versus a missing reference, a new cache version versus the wrong asset, or line endings versus a stale value.

Use `@visual` only for intentional design expectations. Mixed interaction/layout tests use `@design-flow`: their interaction, focus and containment assertions run in the required behavior group; exact presentation assertions run additionally when `VALIDATION_MODE=visual`. The visual group repeats those flows with the original design expectations enabled. Functional flows, focus visibility, recovery and viewport containment need required coverage even when an accompanying visual test checks the same screen. Use `@resources` for controlled network/budget tests. Do not relax budgets, silence exceptions or classify a functional defect as visual to pass CI.
