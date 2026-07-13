# Beystadium

빌드 도구 없이 GitHub Pages에서 동작하는 베이블레이드 도감입니다. 개발 명령에는 Node.js 22와 pnpm 10을 사용합니다.

## Local development

```bash
pnpm install
pnpm serve
```

`http://127.0.0.1:4173/`에서 확인합니다. 데이터가 `fetch()`로 지연 로드되므로 `file://`로 직접 열지 않습니다.

## Generated files

- `data/source/*.mjs`: 사람이 수정하는 원본 데이터
- `data/runtime/**`: 시리즈, 검색, 상세 복원 단위로 분리한 배포 데이터
- `src/ui-core.js` 등 6개 파일: 사람이 수정하는 UI 소스
- `src/app-runtime.js`: 브라우저가 불러오는 단일 ESM 런타임

원본을 수정한 뒤 생성물을 갱신합니다.

```bash
pnpm data:build
pnpm app:build
```

## Validation

```bash
pnpm check
```

ESLint, 생성물 동기화, 데이터 참조 무결성, 데스크톱/모바일 Playwright 스모크 테스트를 실행합니다. 같은 검사는 GitHub Actions에서도 실행됩니다.
