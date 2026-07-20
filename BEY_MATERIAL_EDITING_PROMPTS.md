# 베이 이미지 비파괴 레이어 편집 규칙과 프롬프트

이 문서는 서로 다른 베이 이미지에 동일한 편집 품질과 검증 방식을 적용하기 위한 재사용 사양이다. 작업은 `마스크 분리 → 선화·디테일 → 재질 → 합성·검증` 순서로 진행한다.

최종 편집 원본은 실제 8비트 PSD 사용자 마스크가 붙은 레이어 구조이며, 전체 캔버스 RGBA PNG는 레이어 교환과 검수에 사용한다. 생성형 편집 결과는 선화·디테일·재질 표현의 후보로만 사용하고, 원본의 실루엣·알파·문자·스티커를 대신하는 최종 이미지로 사용하지 않는다.

## 1. 규칙 분류

규칙은 다음 세 종류로 분리한다.

| 구분 | 역할 | 베이 전용규칙으로 변경 가능 |
| --- | --- | --- |
| 범용 고정규칙 | 형상·알파·보호 픽셀·비파괴 편집·후보 사용 범위 | 불가능 |
| 범용 기본규칙 | 기본 선 굵기·정면 조명·재질 표현·출력 방식 | 명시적으로만 가능 |
| 베이 전용규칙 | 실제 부품 범위·색상·적층 순서·참고 허용 영역·예외·실패 조건 | 베이마다 필수 작성 |

전용규칙은 범용 기본규칙만 덮어쓸 수 있다. 범용 고정규칙과 충돌하는 전용규칙은 잘못된 설정으로 판정하고 작업을 시작하지 않는다.

## 2. 규칙 적용 우선순위

모든 단계에서 다음 순서를 적용한다.

1. 범용 고정규칙
2. 베이 전용 실제 구조·보존규칙
3. 베이 전용 재질·색상·참고 허용 범위
4. 범용 기본규칙
5. 스타일·부품 참고 이미지
6. 생성형 후보

충돌하면 높은 순위의 조건을 따른다. 참고 이미지나 생성 후보 때문에 원본 외곽, 피사체 크기, 조립 위치, 구멍, 스티커와 다른 부품 영역을 변경하지 않는다.

## 3. 범용 고정규칙

이 절의 규칙은 모든 베이에 예외 없이 적용한다.

### 3.1 원본 형상과 알파

- 원본 캔버스, 중심, 크기, 회전, 여백, 실루엣, 비율과 조립 위치를 변경하지 않는다.
- 홈, 구멍, 톱니, 두께, 부품 경계와 외곽선을 임의로 추가·삭제·이동하지 않는다.
- `task_mode: reference_geometry_correction`이 명시된 작업은 임의 수정이 아니다. 이 모드에서는 전체 조립체의 캔버스·알파·실루엣·실제 구멍·조립 위치를 고정한 상태에서, 전용규칙의 `geometry_edit_roi`와 `reference_permissions`가 함께 허용한 내부 부품 경계만 교정할 수 있다.
- `reference_geometry_correction`에서도 허용 작업영역 밖의 부품 경계, 보호 픽셀과 전체 외곽은 범용 고정규칙으로 유지한다. 전용규칙이 이 범위를 넓히거나 생략할 수 없다.
- 원본이 RGBA라면 모든 알파값과 반투명 가장자리 알파를 픽셀 단위로 보존한다.
- 완전 투명 픽셀의 RGB는 `(0, 0, 0)`으로 정리하되 알파는 변경하지 않는다.
- 원본에 알파가 없다면 배경 분리를 독립 단계로 수행한다. 승인된 알파를 이후 모든 단계의 절대 기준으로 고정한다.
- 실제 구멍과 투명 배경은 어떤 부품 마스크에도 포함하지 않는다.

### 3.2 보호 영역

- 스티커, 로고, 문자, 문양, 도색과 인쇄는 기본적으로 원본 픽셀과 알파를 보존한다.
- 생성형 편집으로 보호 영역을 다시 그리거나 내용을 해석해 재생성하지 않는다.
- 보호 영역 마스크와 생성형 수정 마스크의 교집합은 0픽셀이어야 한다.
- 보호 영역을 수정해야 한다면 일반 재질 작업과 분리된 별도 작업으로 명시하고 승인받는다.

### 3.3 비파괴 PSD 편집

- 원본 PNG와 모든 생성 후보를 원본 상태로 보존한다.
- 물리적 부품마다 독립 그룹을 만들고 기본색, 선화, 그림자, 하이라이트, 반사 또는 투과를 분리한다.
- 작업 레이어마다 원본 해상도의 전체 색상·원본 픽셀 레이어와 별도의 8비트 사용자 마스크를 사용한다.
- 사용자 마스크를 픽셀 투명도에 굽거나 적용한 뒤 다시 래스터화하지 않는다.
- 작업 레이어를 병합하거나 플랫화하지 않는다.
- PSD 안에 합쳐진 미리보기 픽셀 레이어를 만들지 않는다. 검수 PNG는 현재 표시 레이어를 실시간 합성해 외부 파일로 출력한다.
- 모든 개별 PNG 레이어와 마스크는 원본과 같은 전체 캔버스 크기로 저장한다.

### 3.4 참고 이미지와 생성형 후보

- 모든 입력 이미지의 역할을 `편집 대상`, `스타일 참고`, `부품 구조 참고`, `조립 참고` 중 하나로 명시한다.
- 원본에서 확인되는 구조가 가장 높은 구조 기준이다.
- 부품 참고 이미지에서 명확하게 확인되고 전용규칙에서 허용한 구조만 추가할 수 있다.
- 가려지거나 불명확한 구조를 추측하지 않는다.
- 참고 이미지의 원근, 기울기, 흠집, 각인 문자, 색 오염과 배경을 복사하지 않는다.
- 생성형 편집은 한 요청에서 한 부품 또는 한 표현만 처리한다.
- 한 부품·표현당 후보는 최대 3개로 제한한다.
- 후보의 전체 캔버스, 실루엣, 알파, 스티커, 문자, 배경과 다른 부품은 최종본에 사용하지 않는다.
- 선화는 원본과 정렬되는 구간만, 재질은 확정된 부품 마스크 안의 명암·반사 형태만 채택한다.
- 재시도할 때는 이미 통과한 조건을 유지하고 실패한 조건 하나만 수정한다.
- 최종 합성 이미지를 다시 생성형 편집에 넣어 전체적으로 재생성하지 않는다.

## 4. 범용 기본규칙

이 절은 베이 전용규칙에 명시적인 재정의가 없을 때 적용한다.

### 4.1 기본 작업 순서

1. 원본·알파·참고 역할 고정
2. 물리적 부품·보호 영역·구멍 마스크 분리
3. 플랫 기본색과 선화 마스크 작성
4. 확인된 내부 디테일 추가
5. 재질별 명암·반사·투과 적용
6. 공용 경계선·접촉 음영·색상 조정
7. PSD·레이어 PNG·미리보기·manifest 출력과 검증

각 단계는 별도 PSD와 검수 PNG로 저장한다. 이전 단계의 승인된 레이어와 사용자 마스크는 다음 단계에서 수정하지 않고 복제본에 새 레이어를 추가한다.

### 4.2 선화

작업 해상도의 짧은 변을 `S`라고 한다.

- 주요 부품 경계: `round(S × 0.0028)px`, 최소 2px
- 일반 구조선: `round(S × 0.0021)px`, 최소 1px
- 미세 홈·단차선: `round(S × 0.0014)px`, 최소 1px
- 생성 후보 선의 원본 선 중심 이탈 허용치: `S × 0.0028`
- 같은 구조선 위에서 연결 가능한 단절 길이: `S × 0.0083` 이하

추가 규칙:

- 주요 부품 경계는 내부 홈과 단차선보다 강하게 표현한다.
- 블러는 금지하고 안티앨리어싱만 허용한다.
- 그림자, 반사광, 그라데이션과 색상 경계를 구조선으로 분류하지 않는다.
- 공용 경계선은 모든 재질 레이어보다 위에 둔다.
- 25% 축소 화면에서도 주요 부품 경계가 식별돼야 한다.

### 4.3 조명

- 광원은 카메라와 같은 정면 중앙에 둔다.
- 대응하는 좌우·상하 부위에 동일한 조명 강도와 반사 범위를 적용한다.
- 형상이 비대칭이어도 형상을 대칭화하지 않고 조명장만 균일하게 적용한다.
- 한쪽 방향의 하이라이트, 비대칭 그림자, 국소적인 빛 얼룩, bloom, glow와 렌즈 플레어를 사용하지 않는다.
- 실제 굴곡과 확인된 면 분할 안에서만 하이라이트·중간톤·어두운 면을 형성한다.
- 공용 경계선과 내부 선화가 재질 명암에 묻히지 않게 한다.

### 4.4 재질 모듈

#### `metal`

레이어 순서:

```text
기본색 → 어두운 반사면 → 중간 반사면 → 넓은 하이라이트 → 좁은 반사광
```

- 기존 곡률과 면 분할을 따라 3~5단계 톤을 만든다.
- 넓고 은은한 밝은 면과 절제된 어두운 반사면을 함께 사용한다.
- 플라스틱처럼 단색으로 칠하지 않는다.
- 거울 같은 크롬 반사, 과도한 순백색 번쩍임, 노이즈, 스크래치와 브러시 결은 전용규칙에서 허용한 경우에만 사용한다.

#### `clear_plastic`

레이어 순서:

```text
하부 부품 → 기본 틴트 → 투과 그림자 → 돌출부 색 집중 → 가장자리 반사
```

- 얇고 평평한 면에서는 전용규칙의 `visible_through`에 지정된 하부 부품이 비쳐야 한다.
- 외곽, 돌출부, 두꺼운 부분과 홈 주변에는 같은 색 계열의 색 집중과 얇은 반사를 적용한다.
- 전체를 동일한 불투명 단색으로 덮지 않는다.
- 유리처럼 지나치게 투명하거나 금속보다 강한 반사를 적용하지 않는다.
- 후보 이미지의 알파는 최종 알파로 사용하지 않고 확정된 원본 부품 마스크를 사용한다.

#### `opaque_plastic`

레이어 순서:

```text
기본색 → 베벨 그림자 → 중간톤 → 제한적인 하이라이트
```

- 금속성 흰 반사와 투과·굴절을 사용하지 않는다.
- 원본에서 확인되는 곡면과 단차에만 명암을 적용한다.
- 하이라이트 강도와 범위는 금속보다 작아야 한다.

#### `rubber`

레이어 순서:

```text
무광 기본색 → 접촉 그림자 → 넓고 약한 밝은 면
```

- 날카로운 스펙큘러, 유리 광택과 투과를 금지한다.
- 미세 표면 질감은 원본이나 허용된 참고에서 확인될 때만 적용한다.

#### `painted_metal`

- 금속 명암 구조 위에 도색 레이어를 클리핑한다.
- 도색면과 노출 금속을 별도 마스크로 분리한다.
- 도색 벗겨짐과 흠집은 원본에 존재하고 전용규칙이 허용할 때만 유지한다.

#### `sticker_print`

- 원본 픽셀과 알파를 그대로 보존한다.
- 생성형 편집으로 문자·로고·문양을 재생성하지 않는다.
- 화풍 통일이 필요하면 내용 변경 없이 클리핑된 색상 조정만 사용한다.

#### `special`

- 범용 재질 특성을 임의로 적용하지 않는다.
- 전용규칙의 `material_override`에 기본색, 광택, 투과, 질감과 금지 효과를 모두 명시한다.
- 필수 특성이 비어 있으면 작업을 시작하지 않는다.

### 4.5 생성 후보의 분리 배경

- 후보 배경은 대상 부품에 없는 단색을 사용한다.
- 기본값은 `#00FF00`이며, 녹색 계열 부품은 `#FF00FF`를 사용한다.
- 후보 배경에는 그림자, 그라데이션, 질감, 반사와 조명 변화를 넣지 않는다.
- 생성 후보의 배경 제거 결과는 후보 요소 추출에만 사용한다. 최종 투명도는 확정된 원본 마스크로 만든다.
- 원본 배경 분리 자체가 필요한 경우에는 이 후보 절차와 섞지 않고 별도 승인 단계로 처리한다.

## 5. 베이 전용규칙

각 베이 작업 전에 아래 YAML을 작성한다. 필수 항목을 알 수 없으면 `unknown`으로 기록하고 작업을 중단한다. 해당 사항이 없는 선택 항목은 `none` 또는 빈 목록 `[]`으로 기록한다. 전용규칙에 없는 예외를 작업 중 임의로 추가하지 않는다.

```yaml
bey_specific:
  identity:
    bey_id: "{BEY_ID}"
    name: "{BEY_NAME}"
    source_image: "{SOURCE_IMAGE}"
    style_reference: "{STYLE_REFERENCE}"
    assembly_reference: "{ASSEMBLY_REFERENCE_OR_NONE}"
    width: 0
    height: 0
    source_alpha_bbox: [0, 0, 0, 0]
    alpha_policy: "preserve" # preserve | extract_separately

  parts:
    - id: "{PART_ID}"
      name: "{PART_NAME}"
      material: "{MATERIAL_TYPE}"
      stack_order: 0
      base_color: "{HEX_OR_REFERENCE_SAMPLE}"
      line_color: "{HEX}"
      detail_reference: "{REFERENCE_OR_NONE}"
      included_regions:
        - "{REGION_INCLUDED_IN_THIS_PART}"
      excluded_regions:
        - "{REGION_EXCLUDED_FROM_THIS_PART}"
      visible_through:
        - "{LOWER_PART_ID_OR_NONE}"
      material_override: "none"

  protected_regions:
    - id: "{PROTECTED_ID}"
      description: "{STICKER_LOGO_PRINT_OR_TEXT}"
      source_pixels_exact: true

  actual_holes:
    - "{HOLE_OR_EMPTY_REGION}"

  reference_permissions:
    - target_part: "{PART_ID}"
      reference: "{REFERENCE_IMAGE}"
      allowed_details:
        - "{DETAIL_ALLOWED_TO_BE_USED}"
      forbidden_details:
        - "{DETAIL_THAT_MUST_NOT_BE_USED}"

  rule_overrides:
    lighting: "default"
    line_width: "default"

  special_preservation:
    - "{BEY_SPECIFIC_ELEMENT_TO_PRESERVE}"

  failure_conditions:
    - "{BEY_SPECIFIC_FAILURE}"

  output:
    stage1_psd: "{STAGE1_PSD}"
    stage1_preview: "{STAGE1_PREVIEW}"
    stage2_psd: "{STAGE2_PSD}"
    stage2_preview: "{STAGE2_PREVIEW}"
    stage3_psd: "{STAGE3_PSD}"
    stage3_preview: "{STAGE3_PREVIEW}"
    master_psd: "{MASTER_PSD}"
    final_preview: "{FINAL_PREVIEW}"
    layers_dir: "{LAYERS_DIR}"
    candidate_dir: "{CANDIDATE_DIR}"
```

### 5.1 전용규칙에만 기록할 내용

- 실제 부품의 이름·범위와 앞뒤 적층 순서
- 동일한 색이나 재질이지만 서로 다른 물리적 부품인 영역
- 부품별 재질과 정확한 기본색 또는 참고 색상
- 실제 구멍과 단순한 검은색 도색의 구분
- 투명 부품 아래에서 보여야 하는 부품
- 스티커·문자·인쇄의 위치
- 각 참고 이미지에서 사용해도 되는 구조와 금지할 구조
- 해당 베이에만 존재하는 재질·조형 예외
- 해당 베이에 특화된 실패 조건

### 5.2 전용규칙에 반복하지 않을 내용

다음은 범용 고정규칙이므로 전용규칙에 반복하거나 완화하지 않는다.

- 캔버스·실루엣·알파 보존
- 생성 후보를 최종 실루엣이나 알파로 사용하지 않음
- 문자·스티커·로고를 재생성하지 않음
- 마스크 밖을 변경하지 않음
- 사용자 마스크를 굽거나 레이어를 병합하지 않음

### 5.3 작업 시작 전 필수 검증

다음 항목 중 하나라도 누락되거나 `unknown`이면 해당 베이 작업을 시작하지 않는다.

- 원본 파일과 작업 해상도
- 알파 처리 방식
- 모든 눈에 보이는 부품의 소유권과 적층 순서
- 각 부품의 재질 분류
- 실제 구멍과 보호 영역
- 참고 이미지별 역할·허용 디테일·금지 디테일
- 전용 실패 조건

## 6. 단계별 실행 절차

### 0단계: 입력 고정

범용 처리:

- 원본의 파일 체크섬, 해상도, 색상 모드, 알파 경계 상자와 피사체 경계 상자를 기록한다.
- 입력 이미지마다 역할을 부여한다.
- 원본과 스타일 참고를 정렬하더라도 참고 이미지는 숨김 가이드로만 사용한다.

전용 처리:

- `parts`, `protected_regions`, `actual_holes`, `reference_permissions`를 확정한다.
- 전용규칙 필수 검증을 통과하지 못하면 중단한다.

### 1단계: 비파괴 마스크 분리

범용 처리:

- 원본 좌표에서 물리적 부품, 보호 영역과 구멍을 실제 PSD 사용자 마스크로 분리한다.
- 부품마다 서로 다른 진단색을 적용한 검수 PNG를 만든다.
- 마스크 누락, 의도하지 않은 중복, 구멍 침범과 외곽 침범을 검사한다.
- 이 단계에서는 조명, 그림자, 반사, 입체감과 투과를 넣지 않는다.

전용 처리:

- 각 부품의 `included_regions`, `excluded_regions`, `stack_order`를 적용한다.
- 부품 소유권과 재질 분류 예외를 적용한다.

1단계가 승인되기 전에는 다음 단계로 진행하지 않는다.

### 2단계: 선화와 내부 디테일

범용 처리:

- 승인된 1단계 PSD를 복제하고 기존 레이어와 마스크를 수정하지 않는다.
- 범용 선 굵기와 정렬 허용치를 적용한다.
- 주요 경계, 일반 구조선과 미세선을 구분한다.
- 추가 디테일을 부품별 새 레이어와 사용자 마스크로 저장한다.

전용 처리:

- `allowed_details`에 있는 구조만 추가한다.
- `forbidden_details`와 추가 디테일 마스크의 교집합이 0픽셀인지 검사한다.

2단계가 승인되기 전에는 재질 작업을 진행하지 않는다.

### 3단계: 재질과 정면 조명

범용 처리:

- 승인된 2단계 PSD를 복제하고 기존 레이어와 마스크를 수정하지 않는다.
- 부품의 `material`에 해당하는 범용 재질 모듈을 적용한다.
- 재질별 기본색, 어두운 면, 중간톤, 하이라이트와 반사·투과를 별도 레이어로 유지한다.
- 정면 중앙의 균일한 조명과 재질별 반사 강도 차이를 적용한다.

전용 처리:

- 부품별 `base_color`, `visible_through`, `material_override`를 적용한다.
- `rule_overrides`가 있는 항목만 범용 기본값을 변경한다.

### 4단계: 합성·출력·검증

범용 처리:

- 접촉 음영과 공용 경계선을 모든 부품 재질 위에 배치한다.
- 재질 그룹별 클리핑 보정으로 스타일 참고와 색감·명암을 맞춘다.
- PSD, 전체 캔버스 레이어 PNG, 마스크 PNG, 합성 미리보기와 manifest를 출력한다.
- 범용 검증을 실행한다.

전용 처리:

- `special_preservation`과 `failure_conditions`를 항목별로 검사한다.
- 하나라도 실패하면 실패한 부품의 해당 단계로 돌아간다.

## 7. 생성형 프롬프트 조합

모든 생성 요청은 다음 순서로 조합한다.

```text
[범용 고정 프롬프트]
+
[베이 전용 입력 블록]
+
[범용 작업 프롬프트]
+
[해당 재질 모듈 프롬프트: 재질 단계에서만]
```

범용 고정 프롬프트는 수정하지 않는다. 베이마다 바뀌는 사실은 전용 입력 블록에만 넣는다.

### 7.1 범용 고정 프롬프트

```text
Use case: style-transfer
Asset type: front-view Beyblade catalog illustration component

Input images:
- Image 1: edit target and absolute authority for canvas, position, scale, rotation, silhouette, openings, grooves, boundaries, assembly, and protected artwork.
- Image 2: style reference for line weight, palette relationships, tonal structure, lighting, and material rendering only.
- Image 3, when supplied: structural reference for the explicitly allowed target-part details only.

Primary request:
Change only the specified rendering pass inside the specified target-part mask. Keep every other pixel and structural decision unchanged.

Non-negotiable constraints:
- Preserve Image 1's canvas, center, scale, rotation, silhouette, proportions, thickness, openings, teeth, grooves, part boundaries, assembly position, and transparency.
- Do not edit or regenerate stickers, logos, symbols, printed graphics, or text.
- Do not change pixels outside the target-part mask.
- Do not invent unclear, hidden, or missing structures.
- Do not copy the reference image's geometry, perspective, scratches, text, or background.
- Do not add parts, decorations, markings, background elements, or watermarks.
```

### 7.2 베이 전용 입력 블록

```text
Bey: {BEY_NAME}
Target part: {PART_NAME}
Material: {MATERIAL_TYPE}
Base color: {BASE_COLOR}
Line color: {LINE_COLOR}
Extraction background: {KEY_COLOR}

Included regions:
{INCLUDED_REGIONS}

Excluded regions:
{EXCLUDED_REGIONS}

Allowed reference details:
{ALLOWED_DETAILS}

Forbidden reference details:
{FORBIDDEN_DETAILS}

Parts visible through this part:
{VISIBLE_THROUGH}

Bey-specific material override:
{MATERIAL_OVERRIDE}

Bey-specific preservation:
{SPECIAL_PRESERVATION}

Bey-specific failure conditions:
{FAILURE_CONDITIONS}
```

### 7.3 선화 후보 프롬프트

```text
Target pass: linework candidate only.

Create clean, continuous structural linework for the specified target part. Keep major part boundaries stronger than internal grooves and minor step lines. Preserve the original line centers and use the supplied computed line widths.

Do not convert lighting, shadows, reflections, gradients, or color transitions into lines. Add no shading, highlights, material effects, or new geometry.

Use a flat fill inside the target part and a perfectly uniform {KEY_COLOR} outside it. The background must contain no shadow, gradient, texture, reflection, or lighting variation.
```

### 7.4 내부 디테일 후보 프롬프트

```text
Target pass: verified internal-detail candidate only.

Add only the grooves, teeth, spokes, ridges, and step lines explicitly listed under Allowed reference details. Do not infer unclear, hidden, or forbidden structures. Do not change existing silhouettes, openings, boundaries, scale, rotation, or assembly positions.

Render additions as flat linework only, without lighting, shading, bevels, reflections, transparency, refraction, scratches, or text.

Use a perfectly uniform {KEY_COLOR} outside the target part. The background must contain no shadow, gradient, texture, reflection, or lighting variation.
```

### 7.5 재질 후보 공통 프롬프트

```text
Target pass: material-only candidate without linework.

Apply the standard rendering behavior for {MATERIAL_TYPE}. Follow only the existing curvature and verified surface divisions. Use front-centered, spatially even lighting unless the Bey-specific override explicitly states otherwise.

Do not draw new outlines, grooves, scratches, markings, text, or geometry. Do not change the target silhouette, openings, boundaries, or protected artwork.

Use a perfectly uniform {KEY_COLOR} outside the target part. The background must contain no shadow, gradient, texture, reflection, or lighting variation.
```

### 7.6 재질별 삽입 프롬프트

#### `metal`

```text
Material rules:
Render metal with a clear base tone, broad dark reflection planes, controlled midtone reflections, broad soft highlights, and limited narrow specular accents. Follow the verified curvature and face divisions. The material must read as metal rather than flat plastic.

Avoid mirror-chrome reflections, excessive pure-white glare, invented scratches, brushed noise, grain, dirt, and asymmetric lighting.
```

#### `clear_plastic`

```text
Material rules:
Render colored translucent plastic. Let only the listed lower parts remain visible through thin and flat areas. Concentrate color in thick edges, raised areas, grooves, and attachment points, with narrow colored edge reflections. Keep reflection strength lower than metal.

Do not cover the entire part with one opaque color. Avoid colorless glass, excessive transparency, metallic reflection, white glow, fluorescent outlines, halos, and cloudy noise.
```

#### `opaque_plastic`

```text
Material rules:
Render opaque plastic with its specified base color, controlled bevel shadows, restrained midtones, and limited soft highlights that follow verified curvature and steps.

Avoid metallic glare, transmission, refraction, glass reflections, and sharp white specular streaks.
```

#### `rubber`

```text
Material rules:
Render matte or semi-matte rubber with the specified base color, contact shadows, and broad low-intensity highlights. Add surface texture only when explicitly allowed by the Bey-specific rules.

Avoid metallic reflection, glass gloss, transmission, refraction, and sharp specular highlights.
```

#### `painted_metal`

```text
Material rules:
Preserve the underlying metal light structure while applying the specified opaque paint color as a separate coated layer. Show exposed metal only inside explicitly identified exposed-metal masks.

Do not invent chipped paint, scratches, weathering, or exposed edges.
```

#### `sticker_print`

```text
Material rules:
Do not regenerate or reinterpret the artwork. Preserve the source pixels, alpha, typography, symbols, colors, and placement exactly. If explicitly requested, provide only a non-destructive tonal-adjustment suggestion without changing content.
```

#### `special`

```text
Material rules:
Apply only the properties written in the Bey-specific material override. Do not infer any unstated gloss, transparency, texture, reflection, or surface behavior.
```

## 8. PSD 레이어 구조

범용 그룹은 모든 베이에 존재하고, `10_PART_*`와 `80_PROTECTED_ARTWORK` 그룹은 전용규칙의 부품 수·순서대로 반복한다.

```text
00_GLOBAL_REFERENCE
  00_SOURCE_ORIGINAL                    (숨김)
  01_STYLE_REFERENCE                    (숨김)
  02_ALIGNMENT_GUIDE                    (숨김)

05_GLOBAL_MASKS
  05_MASTER_ALPHA
  06_ACTUAL_HOLES
  07_PROTECTED_REGIONS
  08_SHARED_BOUNDARIES

10_PART_{PART_ID}_{PART_NAME}
  10_REGION_MASK
  11_UNDERPART_TRANSMISSION              (필요한 경우만)
  12_BASE_COLOR
  13_SHADOW_OR_DARK_REFLECTION
  14_MIDTONE
  15_HIGHLIGHT
  16_SPECULAR_OR_EDGE_REFLECTION          (재질에 따라 사용)
  17_ADDED_DETAIL
  18_INTERNAL_LINEWORK
  19_PART_BOUNDARY

20_PART_{NEXT_PART_ID}_{NEXT_PART_NAME}
  동일 구조 반복

80_PROTECTED_ARTWORK
  81_{STICKER_ID}_SOURCE_PIXELS
  82_{PRINT_ID}_SOURCE_PIXELS

90_GLOBAL_FINISH
  91_CONTACT_SHADOWS
  92_SHARED_BOUNDARY_LINES
  93_MATERIAL_COLOR_ADJUSTMENTS

99_GLOBAL_VALIDATION
  99_DIFFERENCE_OVERLAY                  (숨김)
  99_MASK_ERROR_OVERLAY                  (숨김)
```

## 9. 출력 규격

```text
{BEY_ID}-01-masks.psd
{BEY_ID}-01-masks-preview.png
{BEY_ID}-02-linework-details.psd
{BEY_ID}-02-linework-details-preview.png
{BEY_ID}-03-materials.psd
{BEY_ID}-03-materials-preview.png
{BEY_ID}-master.psd
{BEY_ID}-preview.png
{BEY_ID}.layers/
  {LAYER_ID}.png
  {MASK_ID}.png
  manifest.json
{BEY_ID}-validation.json
{BEY_ID}-site.png
```

기존 사이트용 이미지는 최종 승인 전까지 덮어쓰지 않는다.

### 9.1 `manifest.json`

```json
{
  "canvas": {
    "width": 0,
    "height": 0
  },
  "source_sha256": "",
  "alpha_policy": "preserve",
  "parts": [
    {
      "id": "",
      "material": "",
      "stack_order": 0,
      "layers": [
        {
          "file": "",
          "mask": "",
          "blend_mode": "normal",
          "opacity": 1.0,
          "visible": true
        }
      ]
    }
  ],
  "protected_regions": [],
  "validation_status": "pending"
}
```

## 10. 검증 체크리스트

### 10.1 범용 검증

#### 형상·알파

- 원본과 결과의 캔버스, 중심, 회전, 피사체 경계 상자와 외곽 위치가 동일하다.
- `alpha_policy: preserve`이면 알파 채널의 픽셀 차이가 0이다.
- 구멍과 투명 배경에 재질 픽셀이 들어가지 않았다.
- 완전 투명 픽셀의 RGB가 모두 `(0, 0, 0)`이다.

#### 마스크·보호 영역

- 부품 마스크의 합집합이 피사체를 빠짐없이 포함한다.
- 투명 재질과 전용규칙에 지정된 겹침을 제외하면 서로 다른 물리적 부품 마스크가 중복되지 않는다.
- 추가 디테일과 재질 효과의 마스크 밖 변경 픽셀은 0이다.
- 보호 영역과 생성형 수정 영역의 교집합은 0픽셀이다.
- 스티커·로고·문자·인쇄의 원본 픽셀과 알파가 동일하다.

#### PSD·레이어

- 원본 참조를 제외한 모든 작업 픽셀 레이어에 실제 8비트 사용자 마스크가 있다.
- 사용자 마스크가 픽셀 투명도에 구워지지 않았다.
- 합쳐진 미리보기 픽셀 레이어가 PSD 안에 없다.
- 개별 레이어 PNG를 manifest 순서대로 합성한 결과와 PSD 검수 PNG의 채널 차이는 최대 1이다.

#### 선화

- 주요 경계·일반 구조선·미세선의 굵기 단계가 유지된다.
- 내부 경계가 25% 축소 화면에서도 식별된다.
- 흐린 선, 이중선, 비정상적인 끊김과 명암에서 파생된 가짜 선이 없다.

#### 재질·조명

- 금속에는 기본색, 밝은 면, 중간톤과 어두운 반사면이 모두 존재한다.
- 클리어 플라스틱에는 허용된 하부 부품 투과와 외곽 색 집중이 모두 존재한다.
- 불투명 플라스틱과 고무에는 금속성 반사가 없다.
- 스타일 참고에서 추출한 대표 톤과 결과의 대응 대표 톤 간 `ΔE2000`은 8 이하를 목표로 한다.
- 대칭 조명이 지정된 대응 영역의 평균 하이라이트 밝기 차이는 5% 이하다.
- 사이트 크기로 축소했을 때 외곽 프린지, 계단 현상과 주요 경계 소실이 없다.

### 10.2 베이 전용 검증

- `failure_conditions`의 각 문장을 독립된 검증 항목으로 검사한다.
- `forbidden_details`와 추가 디테일 마스크의 교집합은 0픽셀이다.
- `visible_through`에 없는 부품이 투명 재질을 통해 보이지 않는다.
- 전용규칙에 지정된 기본색, 적층 순서와 재질 예외가 유지된다.
- `special_preservation`의 모든 요소가 원본과 동일하다.

### 10.3 실패 처리

- 범용 검증 또는 전용 검증이 하나라도 실패하면 해당 후보나 단계 결과를 승인하지 않는다.
- 재시도할 때 범용 고정 프롬프트와 통과한 전용규칙은 변경하지 않는다.
- 실패 항목 하나만 수정하고 다른 부품·레이어·마스크에는 의도적인 변경을 가하지 않는다.

## 부록 A: 보존된 베이 전용규칙 — 리브라 스타일 교정 V1

> 이 블록은 기존 `LIBRA_STYLEMATCH_01` 산출물의 재현을 위해 보존한다. 현재 활성 작업은 부록 B의 V2 규칙이다. 아래 부품명, 좌표, 색상, 참고 허용 범위와 실패 조건은 리브라 전용이며 다른 베이에 적용하지 않는다.

```yaml
bey_specific:
  identity:
    bey_id: "LIBRA_STYLEMATCH_01"
    name: "리브라"
    source_image: "assets/images/beys/dkcjn91-632bfe50-9e4e-4e8d-a06f-a5b1494d71e7.png"
    style_reference: "assets/images/beys/flame-libra.png"
    assembly_reference: "assets/images/beys/flame-libra.png"
    width: 1452
    height: 1440
    source_alpha_bbox: [36, 31, 1416, 1416]
    alpha_policy: "preserve"
    progress_policy: "자동 검증 통과 시 최종 단계까지 진행"

  style_authority:
    alignment_method: "alpha_bbox_lanczos"
    minimum_alpha_iou: 0.99
    palette_source: "aligned_style_reference"
    line_color_source: "aligned_style_reference"
    tonal_structure: "reference_cel_bands"
    source_or_generated_tone_mix: 0
    force_mirrored_lighting: false
    maximum_tone_feather_px: 2
    stop_if_reference_missing_or_alignment_fails: true

  linework:
    major_boundary_px: 4
    structure_line_px: 3
    fine_line_px: 2
    alignment_tolerance_px: 4
    connection_tolerance_px: 12
    line_color: "#202020"
    line_geometry_source: "source_image"
    line_color_and_contrast_source: "aligned_style_reference"

  lighting:
    direction: "front_center"
    symmetry: "left_right_and_top_bottom"
    corresponding_highlight_mean_difference_max_percent: 5
    asymmetric_highlight: false
    local_white_light_blob: false
    reference_relative_quadrant_luma_max_delta: 5
    broad_airbrush_or_glow: false

  parts:
    - id: "FLAME_METAL_WHEEL"
      name: "플레임 메탈휠"
      material: "metal"
      stack_order: 10
      base_color: "#AAA8A7"
      line_color: "#202020"
      palette_priority: "aligned_style_reference_then_fallback"
      palette:
        shadow: "#807B72"
        midtone_dark: "#AAA8A7"
        midtone_light: "#C0BFC0"
        highlight: "#EDEDEE"
      detail_reference: "assets/images/beys/참고-플레임휠.jpg"
      included_regions:
        - "외곽 플레임 메탈휠"
        - "클리어휠 아래의 회색 프레임"
        - "회색 연결부"
      excluded_regions:
        - "12시와 6시의 휘어진 불꽃 바늘 장식"
      visible_through: []
      material_override: "넓고 은은한 금속 하이라이트, 중간톤과 어두운 반사면을 모두 사용한다. 단색 플라스틱처럼 평탄하게 칠하지 않는다."

    - id: "YELLOW_INTERNAL_PARTS"
      name: "네 방향 노란색 하부 부품"
      material: "opaque_plastic"
      stack_order: 15
      base_color: "#FFB900"
      line_color: "#202020"
      palette_priority: "aligned_style_reference_then_fallback"
      detail_reference: "none"
      included_regions:
        - "네 방향 타원형 개구부에서 보이는 노란 하부 부품"
      excluded_regions:
        - "중앙 페이스 볼트"
      visible_through: []
      material_override: "불투명 플라스틱의 얕은 베벨 명암만 적용하며 금속 반사를 사용하지 않는다."

    - id: "LIBRA_CLEAR_WHEEL"
      name: "리브라 클리어휠"
      material: "clear_plastic"
      stack_order: 20
      base_color: "#A1BA2D"
      line_color: "#202020"
      palette_priority: "aligned_style_reference_then_fallback"
      palette:
        deep_surface: "#45491E"
        transmission_shadow: "#596922"
        midtone_min: "#A1BA2D"
        midtone_max: "#ADC633"
        bright_surface: "#B5CD3A"
        pale_transmission: "#C6C87D"
      detail_reference: "assets/images/beys/참고-리브라휠.png"
      included_regions:
        - "황록색 환형 휠"
        - "네 고정부"
        - "12시와 6시의 휘어진 불꽃 바늘 장식"
      excluded_regions:
        - "중앙 페이스 볼트와 Libra 스티커"
        - "회색 금속 연결부"
      visible_through:
        - "FLAME_METAL_WHEEL"
        - "YELLOW_INTERNAL_PARTS"
      material_override: "모든 투과색과 가장자리 집중색은 지정한 황록 팔레트에서 파생한다. 외곽과 돌출부에는 밝은 반사와 색 집중을 만들고 허용된 하부 부품은 비쳐 보이게 한다. 흰색·은색·중립 회색의 넓은 반사와 불투명 단색 처리를 금지한다."

    - id: "FACE_BOLT"
      name: "중앙 페이스 볼트"
      material: "opaque_plastic"
      stack_order: 30
      base_color: "#FFB900"
      line_color: "#202020"
      palette_priority: "aligned_style_reference_then_fallback"
      detail_reference: "none"
      included_regions:
        - "중앙 노란 육각형 본체"
        - "중앙 노란 육각형 베벨"
      excluded_regions:
        - "Libra 스티커 보호 픽셀"
        - "네 방향 노란 하부 부품"
      visible_through: []
      material_override: "불투명 플라스틱의 얕은 베벨 명암만 적용하며 금속 반사를 사용하지 않는다."

    - id: "PROTECTED_ARTWORK"
      name: "원본 보호 스티커와 인쇄"
      material: "sticker_print"
      stack_order: 40
      base_color: "source"
      line_color: "source"
      detail_reference: "none"
      included_regions:
        - "중앙 Libra 스티커"
        - "상단 남색·노란색 인쇄"
        - "하단 남색·노란색 인쇄"
      excluded_regions: []
      visible_through: []
      material_override: "원본 RGBA 픽셀을 그대로 유지하며 생성형 후보의 픽셀을 사용하지 않는다."

  protected_regions:
    - id: "center_libra_sticker"
      description: "중앙 Libra 스티커"
      source_pixels_exact: true
    - id: "top_print"
      description: "상단 남색·노란색 인쇄"
      source_pixels_exact: true
    - id: "bottom_print"
      description: "하단 남색·노란색 인쇄"
      source_pixels_exact: true

  actual_holes:
    - "원본 알파가 0인 외부 배경"
    - "네 방향 타원형 개구부 내부에서 원본 알파가 0인 부분"

  reference_permissions:
    - target_part: "LIBRA_CLEAR_WHEEL"
      reference: "assets/images/beys/참고-리브라휠.png"
      allowed_details:
        - "외곽 환형 밴드의 홈과 세로 슬롯"
        - "가장자리 톱니"
        - "네 외곽 고정부의 면 분할과 원형 고정 홈"
      forbidden_details:
        - "중앙 링과 내부 패널"
        - "내부 개구부와 브리지"
        - "내측 둘레"
        - "위아래 불꽃 조형과 휘어진 바늘"

    - target_part: "FLAME_METAL_WHEEL"
      reference: "assets/images/beys/참고-플레임휠.jpg"
      allowed_details:
        - "현재 메탈 마스크에서 노출된 외곽 날의 능선과 단차"
        - "12시와 6시 팁의 면 분할"
        - "사각 연결부와 네 구멍 사이 회색 프레임의 짧은 단차"
      forbidden_details:
        - "사진의 중앙 보어 전체"
        - "가려진 내부판과 스포크"
        - "각인 문자와 흠집"

  rule_overrides:
    lighting: "정면 중앙의 균일하고 좌우·상하 대칭인 조명"
    line_width: "major 4px, structure 3px, fine 2px"

  special_preservation:
    - "캔버스와 원본 알파"
    - "전체 외곽과 네 구멍"
    - "공용 경계선"
    - "수정 마스크 밖의 원본 가시 픽셀"
    - "중앙 Libra 스티커"
    - "상단과 하단 인쇄"

  failure_conditions:
    - "클리어휠이 페이스 볼트나 스티커 위를 침범함"
    - "페이스 볼트가 노란 하부 부품과 같은 마스크로 합쳐짐"
    - "휘어진 불꽃 바늘이 금속으로 분류됨"
    - "회색 금속 연결부가 클리어 플라스틱으로 분류됨"
    - "기존 실패 결과처럼 과도한 평행선이나 이중선이 추가됨"
    - "내부 경계가 재질 명암에 묻힘"
    - "클리어휠이 불투명 단색이거나 허용된 하부 부품이 전혀 보이지 않음"
    - "금속과 불투명 플라스틱의 반사 차이를 식별할 수 없음"
    - "좌우·상하 비대칭 하이라이트나 국소적인 흰색 빛 얼룩이 발생함"
    - "참고본에 없는 넓은 흰색 광택 띠·에어브러시·글로우·검은 번짐이 발생함"
    - "참고 이미지가 메타데이터에만 기록되고 실제 팔레트·명암·선 대비 계산에 사용되지 않음"
    - "금지된 중앙 링·내부 패널·개구부·브리지·불꽃 조형이 추가 디테일에 들어옴"
    - "보호 픽셀·원본 알파·외곽·구멍 중 하나라도 원본과 다름"
    - "수정 마스크 밖 픽셀이 변경됨"

  style_validation:
    primary_parts: ["FLAME_METAL_WHEEL", "LIBRA_CLEAR_WHEEL"]
    reference_luma_mae_reduction_min_percent: 45
    reference_luma_mae_max: 18
    material_luma_percentile_delta_max: 10
    material_mean_saturation_delta_max: 0.06
    metal_dark_highlight_area_delta_max_percentage_points: 2
    reference_relative_quadrant_luma_max_delta: 5
    generated_candidates: "comparison_only"
    generated_candidate_adoption: "only_if_reference_error_decreases_and_all_fixed_rules_pass"

  output:
    stage1_psd: "assets/images/beys/libra-stylematch-01-masks.psd"
    stage1_preview: "assets/images/beys/libra-stylematch-01-masks-preview.png"
    stage2_psd: "assets/images/beys/libra-stylematch-02-linework.psd"
    stage2_preview: "assets/images/beys/libra-stylematch-02-linework-preview.png"
    stage3_psd: "assets/images/beys/libra-stylematch-03-materials.psd"
    stage3_preview: "assets/images/beys/libra-stylematch-03-materials-preview.png"
    master_psd: "assets/images/beys/libra-stylematch-master.psd"
    final_preview: "assets/images/beys/libra-stylematch-preview.png"
    layers_dir: "assets/images/beys/libra-stylematch.layers/"
    candidate_dir: "tmp/imagegen/libra-stylematch/"
    validation: "tmp/imagegen/libra-stylematch/validation.json"
    style_metrics: "tmp/imagegen/libra-stylematch/style-metrics.json"
    style_comparison: "tmp/imagegen/libra-stylematch/style-comparison.png"
    manifest_schema_version: 2
```

## 부록 B: 활성 베이 전용규칙 — 리브라 조형 참고 V2

> 이 블록은 `LIBRA_STYLEMATCH_02` 전용이다. `참고-리브라휠.png`는 클리어휠 외부조형만, `참고-플레임휠.jpg`는 외부와 조립 상태에서 보이는 내부 메탈 구조까지 제공한다. 두 참고 이미지의 색·조명·문자·표면 손상은 사용할 수 없다.

```yaml
bey_specific:
  identity:
    bey_id: "LIBRA_STYLEMATCH_02"
    name: "리브라 조형 참고 V2"
    task_mode: "reference_geometry_correction"
    source_image: "assets/images/beys/dkcjn91-632bfe50-9e4e-4e8d-a06f-a5b1494d71e7.png"
    style_reference: "assets/images/beys/flame-libra.png"
    width: 1452
    height: 1440
    source_alpha_bbox: [36, 31, 1416, 1416]
    alpha_policy: "preserve_exact"
    output_policy: "new_v2_files_do_not_replace_v1"

  fixed_assembly:
    preserve_exact:
      - "전체 캔버스와 모든 알파값"
      - "전체 조립체 외곽 실루엣"
      - "원본 알파 0인 외부 배경과 네 실제 구멍"
      - "중심·크기·회전·조립 위치"
      - "중앙 페이스 볼트와 Libra 스티커"
      - "상단과 하단 남색·노란색 인쇄"
      - "TRACK 가시 픽셀"

  geometry_edit_roi:
    include:
      - "V1 METAL_WHEEL과 CLEAR_WHEEL의 합집합"
      - "클리어/메탈 공용 경계의 7px 이내 밴드"
      - "클리어휠 아래에서 원본 알파가 255인 내부 가시 영역"
    exclude:
      - "TRACK"
      - "FACE_AND_STICKER"
      - "보호 인쇄"
      - "원본 알파가 0인 모든 픽셀"

  reference_permissions:
    - target_part: "CLEAR_WHEEL"
      reference: "assets/images/beys/참고-리브라휠.png"
      role: "external_geometry_only"
      alignment: "four_mount_centers_and_outer_annular_profile"
      allowed_details:
        - "외곽 환형 밴드의 윤곽과 단차"
        - "세로 슬롯과 가장자리 톱니"
        - "네 고정부의 외곽·면 분할·원형 홈"
        - "전체 알파를 바꾸지 않는 클리어/메탈 부품 경계 교정"
      forbidden_details:
        - "중앙 링"
        - "내부 브리지와 내부 개구부"
        - "참고 이미지의 중앙 패널과 새 불꽃 장식"
        - "참고 이미지의 녹색·조명·재질"

    - target_part: "METAL_WHEEL"
      reference: "assets/images/beys/참고-플레임휠.jpg"
      role: "outer_and_visible_internal_geometry"
      alignment: "outer_circle_and_12_3_6_9_tip_anchors_rear_to_front"
      allowed_details:
        - "외곽 날·팁·능선·단차"
        - "클리어휠 아래에서 보이는 환형 내부판"
        - "네 방향 방사형 지지부와 네 대각선 곡선형 개구부 경계"
        - "정면 조립 상태에서 실제로 보이는 내부 링 단차"
      forbidden_details:
        - "페이스 볼트 아래의 중앙 보어"
        - "BEYBLADE 각인과 모든 새 문자"
        - "흠집·마모·주조 노이즈·얼룩"
        - "사진 배경·원근·후면 조명"

  physical_parts:
    stack_order_bottom_to_top:
      - "TRACK"
      - "METAL_WHEEL"
      - "CLEAR_WHEEL"
      - "FACE_AND_STICKER"
    overlap_policy:
      allowed:
        - "METAL_WHEEL__CLEAR_WHEEL"
      forbidden:
        - "TRACK__METAL_WHEEL"
        - "TRACK__CLEAR_WHEEL"
        - "TRACK__FACE_AND_STICKER"
        - "METAL_WHEEL__FACE_AND_STICKER"
        - "CLEAR_WHEEL__FACE_AND_STICKER"

  linework:
    major_boundary_px: 4
    structure_line_px: 3
    fine_line_px: 2
    alignment_tolerance_px: 4
    color_source: "aligned_style_reference"
    geometry_source: "approved_reference_trace_inside_geometry_edit_roi"

  materials:
    METAL_WHEEL:
      material: "metal"
      palette: ["#807B72", "#AAA8A7", "#C0BFC0", "#EDEDEE"]
      photo_texture_transfer: false
    CLEAR_WHEEL:
      material: "clear_plastic"
      palette: ["#45491E", "#596922", "#A1BA2D", "#ADC633", "#B5CD3A", "#C6C87D"]
      physical_transmission: "show_METAL_WHEEL_below"
    TRACK:
      material: "opaque_plastic"
      source_pixels_exact: true
    FACE_AND_STICKER:
      material: "opaque_plastic_and_sticker_print"
      source_pixels_exact: true

  generated_candidates:
    mode: "comparison_only"
    final_alpha_or_text_usage: false
    clear_candidate: "reject_if_global_geometry_or_protected_pixels_change"
    metal_candidate: "reject_if_topology_is_not_four_direction_or_background_is_generated"

  validation:
    anchor_rms_px_max: 4
    clear_external_edge_coverage_within_4px_min: 0.90
    metal_internal_edge_coverage_within_4px_min: 0.85
    protected_rgba_delta_max: 0
    alpha_delta_max: 0
    parts_png_recomposition_delta_max: 0
    psd_channel_delta_max: 1
    v1_hashes_must_remain_unchanged: true

  failure_conditions:
    - "클리어 참고의 중앙 링·브리지·내부 개구부가 들어옴"
    - "메탈 참고의 중앙 보어·각인·흠집·사진 질감이 들어옴"
    - "메탈 내부 구조가 네 실제 구멍이나 보호 영역을 침범함"
    - "네 방향 내부판·방사형 지지부가 아닌 임의 다중 슬롯 구조가 생성됨"
    - "전체 알파·외곽·구멍·조립 위치 중 하나가 달라짐"
    - "TRACK·FACE_AND_STICKER 원본 픽셀이 달라짐"
    - "허용되지 않은 부품 조합이 중첩됨"

  output:
    stage_prefix: "assets/images/beys/libra-stylematch-v2"
    master_psd: "assets/images/beys/libra-stylematch-v2-master.psd"
    final_preview: "assets/images/beys/libra-stylematch-v2-preview.png"
    layers_dir: "assets/images/beys/libra-stylematch-v2.layers/"
    parts_dir: "assets/images/beys/libra-stylematch-v2.parts/"
    candidate_dir: "tmp/imagegen/libra-stylematch-v2/"
    manifest_schema_version: 2
```
