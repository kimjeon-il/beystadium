# Beystadium

빌드 도구 없이 GitHub Pages에서 동작하는 베이블레이드 도감입니다. 개발 명령에는 Node.js 22와 pnpm 10을 사용합니다.

## Local development

```bash
pnpm install
pnpm serve
```

`http://127.0.0.1:4173/`에서 확인합니다. 데이터가 `fetch()`로 지연 로드되므로 `file://`로 직접 열지 않습니다.

## Runtime structure

- `data/source/*.mjs`: 사람이 수정하는 원본 데이터
- `data/runtime/**`: 시리즈, 검색, 상세 복원 단위로 분리한 배포 데이터
- `src/bootstrap.js`: 홈 셸과 데이터 인덱스만 준비하는 진입점
- `src/router.js`: hash 라우팅과 기능 모듈 로더
- `src/release-page.js`, `src/anime.js`: 해당 화면에 들어갈 때 불러오는 기능 모듈
- `src/app-state.js`, `src/app-services.js`: 기능 간 공유 상태와 단방향 서비스 API

데이터 원본을 수정한 뒤 배포 데이터를 갱신합니다.

```bash
pnpm data:build
```

## Validation

```bash
pnpm check
```

ESLint, 데이터 생성물 동기화, 참조 무결성, 데스크톱/모바일 Playwright 스모크 테스트를 실행합니다. 같은 검사는 GitHub Actions에서도 실행됩니다.

## Bey detail relations

The compact detail badges are derived from canonical data, not per-Bey reverse lists:

- Parts use the Bey's `parts` / `bundledParts` IDs and the same localized names as their part-detail headings (including abbreviated drivers, disks, frames, armor, chassis, and X auxiliary blades)
- Products use the selected region's resolved composition and applicable `lineupPool`; random candidates are marked `(랜덤)`. A guaranteed Korean release does not inherit a Japanese random pool
- Users use stable `CHARACTER-*` identities and explicit, verified catalog `beyIds`. A matching model name, parts, or combination never extends a user to another release, set edition, or recolor. For example, 강타 links to BB-28 Storm Pegasis, not BB-32 or BB-44
- Metal usage lives in `data/source/metal-fight-characters.mjs`: `usages` retains per-season provenance; aggregate names/IDs are derived for global lookup. A season filter projects only that season's usage, and character detail groups usage by season. Unmapped combinations remain display text without a target
- Existing X model-name text remains in `data/source/anime.mjs`, but does not produce user badges until exact toy editions are verified and recorded

See [Metal season-two source notes](docs/metal-season-two-characters.md) for verified editions and unmapped combinations. Rebuild runtime data with `pnpm data:build` after source edits. `pnpm test:bey-relations` checks exact-ID resolution, season projection and rendered badge markup.
