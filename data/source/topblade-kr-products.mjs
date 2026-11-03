// Korean release list supplied by the user; no unprovided details are inferred.
const group = (releaseDate, kind, entries, sale = '') => entries.map(([slug, name]) => ({
  id: 'PRODUCT-TOPBLADE-KR-' + slug,
  series: 'topblade',
  releases: { kr: { name, kind, releaseDate, ...(sale ? { sale } : {}) } }
}));

export const topbladeKrProducts = [
  ...group('2001-09', '스타터', [
    ['DRAGON-S', '드래곤S'], ['DRANZER-S', '드랜져S'], ['DRIGER-S', '드래이거S'], ['DRACIEL-S', '드래셀S']
  ]),
  ...group('2001-10', '부스터', [
    ['MEGA-TOP', '메가탑'], ['MECHAN-TOP', '메칸탑'], ['SPARK-TOP', '스파크탑'], ['POLE-TOP', '폴탑']
  ]),
  ...group('2001-10', '세트', [['TOPBLADE-DX-SET', '탑블레이드DX세트']]),
  ...group('2001-10', '슈퍼탑블레이드', [
    ['SUPER-DRAGON-S', '슈퍼드래곤S'], ['SUPER-DRANZER-S', '슈퍼드랜져S']
  ]),
  ...group('2001-10', '기타', [['SPRING-SHOOTER', '스프링슈터']]),
  ...group('2001-11', '변신탑블레이드', [
    ['TRANSFORM-DRAGON-BLUE', '드래곤 블루'], ['TRANSFORM-DRAGON-BLACK', '드래곤블랙'],
    ['TRANSFORM-DRAGON-THUNDER', '드래곤썬더']
  ]),
  ...group('2001-11', '기타', [['DRAGON-SHOOTER', '드래곤슈터'], ['DRIGER-SHOOTER', '드래이거슈터']]),
  ...group('2001-12', '세트', [
    ['ATTACK-DRAGON-SET', '어택 드래곤세트'], ['ATTACK-DRANZER-SET', '어택 드랜져세트'],
    ['ATTACK-DRIGER-SET', '어택 드래이거세트'], ['ATTACK-DRACIEL-SET', '어택 드래셀세트']
  ]),
  ...group('2002-01', '스타터', [
    ['DRAGON-F', '드래곤F'], ['DRANZER-F', '드랜져F'], ['DRIGER-F', '드래이거F'],
    ['DRACIEL-F', '드래셀F'], ['GALEON', '가르온']
  ]),
  ...group('2002-01', '부스터', [
    ['GALZZLY', '가르즈리'], ['GALMAN', '가르만'], ['MASTER-DRACIEL', '마스터드래셀']
  ]),
  ...group('2002-02', '스타터', [['TRYGLE', '트라이글'], ['TRYPIO', '트라이피오']]),
  ...group('2002-02', '부스터', [
    ['WOLBORG', '울보그'], ['SEABORG', '시보그'], ['MASTER-DRAGON', '마스터드래곤'], ['MASTER-DRANZER', '마스터드랜져']
  ]),
  ...group('2002-03', '스타터', [['WOLBORG-2', '울버그2'], ['SEABORG-2', '시보그2']]),
  ...group('2002-03', '세트', [['DYNAMIC-SET', '다이나믹 세트']]),
  ...group('2002-04', '기타', [
    ['DRANZER-SHOOTER', '드랜져슈터'], ['DRAGON-STRATEGY-ANALYZER', '드래곤전략 분석기'],
    ['DRANZER-STRATEGY-ANALYZER', '드랜져 전략분석기']
  ]),
  ...group('2002-08', '스타터', [
    ['DRAGON-V', '드래곤V'], ['DRANZER-V', '드랜져V'], ['DRIGER-V', '드래이거V'], ['DRACIEL-V', '드래셀V']
  ]),
  ...group('2002-08', '부스터', [['BLACK-LEO', '블랙레오'], ['METAL-DRANZER', '메탈드랜져']]),
  ...group('2002-08', '기타', [['MAGNET-STADIUM', '마그넷스타디움']]),
  ...group('2002-09', '스타터', [['CYBER-DRAGON', '사이버드래곤'], ['BLACK-LEO-2', '블랙레오2']]),
  ...group('2002-09', '세트', [['MAGNET-GAME-SET', '마그넷게임세트']]),
  ...group('2002-09', '기타', [['MAGNET-BLOCK-S', '마그넷 블록S'], ['MAGNET-SHOOTER-GRIP', '마그넷슈터그립']]),
  // These three product kinds were explicitly left unknown by the user.
  ...group('2003-01', '', [
    ['SUPER-DRAGON-V', '슈퍼드래곤V'], ['SUPER-DRANZER-V', '슈퍼드랜져V'], ['SUPER-DRIGER-V', '슈퍼드래이거V']
  ]),
  ...group('2003-02', '스타터', [
    ['DRAGON-V2', '드래곤V2'], ['DRANZER-V2', '드랜져V2'], ['DRIGER-V2', '드래이거V2'], ['DRACIEL-V2', '드래셀V2']
  ]),
  ...group('2003-02', 'RC탑블레이드', [
    ['RC-DRAGON-V2', '드래곤V2'], ['RC-DRANZER-V2', '드랜져V2'],
    ['RC-DRIGER-V2', '드래이거V2'], ['RC-DRACIEL-V2', '드래셀V2']
  ]),
  // Domestic exclusives, with release month unknown.
  ...group('', '스타터', [
    ['DRAGON-S-CRYSTAL', '드래곤S 크리스탈'], ['DRANZER-S-CRYSTAL', '드랜져S 크리스탈'],
    ['DRIGER-S-CRYSTAL', '드래이거S 크리스탈'], ['DRACIEL-S-CRYSTAL', '드래셀S 크리스탈']
  ], '국내 한정판')
];
