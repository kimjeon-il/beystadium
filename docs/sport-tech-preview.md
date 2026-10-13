# Sport-Tech Archive: full-site light / dark design preview

## Scope

This branch previews **visual styling only** across the existing Beystadium single-page application:

- Overview / global search
- Bey / part / tool catalog and filter controls
- Release listing tables
- Anime characters and episode lists
- Detail modal, popovers and search result views
- Desktop navigation, mobile drawer and bottom navigation

The existing route logic, data, search, grid sizes, responsive breakpoints and modal structure are unchanged. The preview CSS is a final cascade layer loaded on top of the existing lazy-loaded CSS modules.

## How to review

Run the existing local server:

```bash
pnpm install
pnpm serve
```

Then visit:

- Light: `http://127.0.0.1:4173/?theme=light`
- Dark: `http://127.0.0.1:4173/?theme=dark`

A **UI 시안** floating switch lets you compare both without navigation resets. The theme is reflected in the URL for sharing. When no query parameter is supplied, the browser's preferred color scheme is used. The floating switch exists only for design review and can be removed when integrating the approved theme.

## Design system

- Light: background `#F5F7FB`, card `#FFFFFF`, text `#111827`, action blue `#175CD3`
- Dark: background `#080F1F`, card `#172338`, text `#F8FAFC`, action blue `#5AA8FF`
- Shared semantic tokens in `styles/sport-tech-preview.css`; no duplicate page-specific theme sheets
- Clear active states and focus rings, toned-down shadows, product-led cards
- Motion reduced for people who prefer reduced motion

## Implementation safety

- Main branch is untouched.
- All changes are isolated to this design-preview branch.
- No source data, routes, grid structure, breakpoints, or component markup other than stylesheet/script includes is changed.
- Verify light/dark desktop and mobile routes, search, filters, dialogs, keyboard focus, and image contrast before merging.

This is a live-code **concept branch**, not a verified production release.
