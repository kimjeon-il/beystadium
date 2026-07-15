const productItems = [
{ id: "PRODUCT-BB-01", series: "metal fight", releases: {
  kr: { no: "BB-01", name: "페가시스 105F", sale: "일반 판매", kind: "리미티드스타터세트", releaseDate: "2008-10", price: "17600", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-01-PEGASIS-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-01", name: "페가시스 105F", sale: "일반 판매", kind: "스타터", releaseDate: "2008-08-09", price: "1544", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-01-PEGASIS-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-02", series: "metal fight", releases: {
  kr: { no: "BB-02", name: "불 125SF", sale: "일반 판매", kind: "리미티드스타터세트", releaseDate: "2008-10", price: "17600", composition: [{ name: "불 125SF", quantity: "1개", target: "BEY-BB-02-BULL-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-02", name: "불 125SF", sale: "일반 판매", kind: "스타터", releaseDate: "2008-08-09", price: "1544", composition: [{ name: "불 125SF", quantity: "1개", target: "BEY-BB-02-BULL-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-03", series: "metal fight", releases: {
  kr: { no: "BB-03", name: "사지타리오 145S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "사지타리오 145S", quantity: "1개", target: "BEY-BB-03-SAGITTARIO-145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-03", name: "사지타리오 145S", sale: "일반 판매", kind: "스타터", releaseDate: "2008-08-09", price: "819", composition: [{ name: "사지타리오 145S", quantity: "1개", target: "BEY-BB-03-SAGITTARIO-145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-04", series: "metal fight", releases: {
  kr: { no: "BB-04", name: "레온 145D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "레온 145D", quantity: "1개", target: "BEY-BB-04-LEONE-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-04", name: "레오네 145D", sale: "일반 판매", kind: "스타터", releaseDate: "2008-08-09", price: "819", composition: [{ name: "레오네 145D", quantity: "1개", target: "BEY-BB-04-LEONE-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-05", series: "metal fight", releases: {
  kr: { no: "BB-05", name: "페가시스 145D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "페가시스 145D", quantity: "1개", target: "BEY-BB-05-PEGASIS-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-05", name: "페가시스 145D", sale: "일반 판매", kind: "부스터", releaseDate: "2008-08-09", price: "630", composition: [{ name: "페가시스 145D", quantity: "1개", target: "BEY-BB-05-PEGASIS-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-06", series: "metal fight", releases: {
  kr: { no: "BB-06", name: "불 145S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "불 145S", quantity: "1개", target: "BEY-BB-06-BULL-145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-06", name: "불 145S", sale: "일반 판매", kind: "부스터", releaseDate: "2008-08-09", price: "630", composition: [{ name: "불 145S", quantity: "1개", target: "BEY-BB-06-BULL-145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-07", series: "metal fight", releases: {
  kr: { no: "BB-07", name: "사지타리오 125SF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "사지타리오 125SF", quantity: "1개", target: "BEY-BB-07-SAGITTARIO-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-07", name: "사지타리오 125SF", sale: "일반 판매", kind: "부스터", releaseDate: "2008-08-09", price: "630", composition: [{ name: "사지타리오 125SF", quantity: "1개", target: "BEY-BB-07-SAGITTARIO-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-08", series: "metal fight", releases: {
  kr: { no: "BB-08", name: "레온 105F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "레온 105F", quantity: "1개", target: "BEY-BB-08-LEONE-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-08", name: "레오네 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2008-08-09", price: "630", composition: [{ name: "레오네 105F", quantity: "1개", target: "BEY-BB-08-LEONE-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-09", series: "metal fight", releases: {
  kr: { no: "BB-09", name: "메탈스피드 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2008-10", price: "25600", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-09-PEGASIS-105F" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "공격형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-09", name: "페가시스 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2008-08-09", price: "3150", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-09-PEGASIS-105F" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "베이포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-10", series: "metal fight", releases: {
  kr: { no: "BB-10", name: "공격형 메탈파이트 스타디움", sale: "일반 판매", releaseDate: "2008-10", price: "6400", composition: [{ name: "공격형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-10", name: "베이스타디움 어택타입", sale: "일반 판매", releaseDate: "2008-08-09", price: "1260", composition: [{ name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-QUETZALCOATL-90WF", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "", name: "케찰코아틀 90WF", sale: "한정 배포", kind: "", releaseDate: "2008-08-09", price: "", composition: [{ name: "케찰코아틀 90WF", quantity: "1개", target: "BEY-QUETZALCOATL-90WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-11", series: "metal fight", releases: {
  kr: { no: "BB-11", name: "울프 D125B", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-12", price: "8000", composition: [{ name: "울프 D125B", quantity: "1개", target: "BEY-BB-11-WOLF-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-11", name: "볼프 D125B", sale: "일반 판매", kind: "스타터", releaseDate: "2008-09-18", price: "819", composition: [{ name: "볼프 D125B", quantity: "1개", target: "BEY-BB-11-WOLF-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-12", series: "metal fight", releases: {
  kr: { no: "BB-12", name: "울프 105F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-12", price: "10400", composition: [{ name: "울프 105F", quantity: "1개", target: "BEY-BB-12-WOLF-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-12", name: "볼프 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2008-09-18", price: "630", composition: [{ name: "볼프 105F", quantity: "1개", target: "BEY-BB-12-WOLF-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-13", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-13", name: "랜덤부스터 Vol.1 시크릿 아리에스", sale: "일반 판매", kind: "부스터", releaseDate: "2008-09-18", price: "630", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-13-ARIES-125D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } }, lineupPool: ["BEY-BB-13-ARIES-125D", "BEY-BB-13-SAGITTARIO-145F", "BEY-BB-13-BULL-105S", "BEY-BB-13-PEGASIS-145SF", "BEY-BB-13-LEONE-125S", "BEY-BB-13-SAGITTARIO-145SF", "BEY-BB-13-BULL-105D", "BEY-BB-13-PEGASIS-145F"] },
{ id: "PRODUCT-BB-14", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-14", name: "베이스타디움 밸런스타입", sale: "일반 판매", releaseDate: "2008-09-18", price: "1260", composition: [{ name: "밸런스형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-BALANCE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-15", series: "metal fight", releases: {
  kr: { no: "BB-15", name: "런처그립", sale: "일반 판매", releaseDate: "2008-12", price: "8000", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] },
  jp: { no: "BB-15", name: "런처그립", sale: "일반 판매", releaseDate: "2008-09-18", price: "525", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] } } },
{ id: "PRODUCT-BB-15-KR-BLUE", series: "metal fight", releases: {
  kr: { no: "BB-15(2)", name: "런처그립(블루)", sale: "일반 판매", kind: "", releaseDate: "2010-07", price: "6400", composition: [{ name: "런처그립(블루)", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] } } },
{ id: "PRODUCT-BB-16", series: "metal fight", releases: {
  kr: { no: "BB-16", name: "포인터", sale: "일반 판매", releaseDate: "2008-12", price: "9600", composition: [{ name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }] },
  jp: { no: "BB-16", name: "베이포인터", sale: "일반 판매", releaseDate: "2008-09-18", price: "1050", composition: [{ name: "베이포인터", quantity: "1개", target: "TOOLS-POINTER" }] } } },
{ id: "PRODUCT-BB-16-KR-BLUE", series: "metal fight", releases: {
  kr: { no: "BB-16(2)", name: "포인터(블루)", sale: "일반 판매", kind: "", releaseDate: "2010-07", price: "12000", composition: [{ name: "포인터(블루)", quantity: "1개", target: "TOOLS-POINTER" }] } } },
{ id: "PRODUCT-BB-17", series: "metal fight", releases: {
  kr: { no: "BB-17", name: "파워런처", sale: "일반 판매", releaseDate: "2008-12", price: "6400", composition: [{ name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-17", name: "베이런처", sale: "일반 판매", releaseDate: "2008-09-18", price: "630", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-18", series: "metal fight", releases: {
  kr: { no: "BB-18", name: "리브라 DF145BS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-12", price: "10400", composition: [{ name: "리브라 DF145BS", quantity: "1개", target: "BEY-BB-18-LIBRA-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-18", name: "리브라 DF145BS", sale: "일반 판매", kind: "부스터", releaseDate: "2008-10-23", price: "630", composition: [{ name: "리브라 DF145BS", quantity: "1개", target: "BEY-BB-18-LIBRA-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-19", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-19", name: "베이스타디움 스태미나타입", sale: "일반 판매", releaseDate: "2008-10-23", price: "1365", composition: [{ name: "스테미너형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-STAMINA-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-20", series: "metal fight", releases: {
  kr: { no: "BB-20", name: "메탈파이트 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2008-12", price: "44000", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-20-PEGASIS-105F" }, { name: "울프 D125B", quantity: "1개", target: "BEY-BB-20-WOLF-D125B" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "포인터", quantity: "2개", target: "TOOLS-POINTER" }, { name: "파워런처", quantity: "2개", target: "TOOLS-POWER-LAUNCHER" }, { name: "밸런스형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-BALANCE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-20", name: "베이 배틀 트라이 세트", sale: "일반 판매", kind: "세트", releaseDate: "2008-10-23", price: "5250", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-20-PEGASIS-105F" }, { name: "볼프 D125B", quantity: "1개", target: "BEY-BB-20-WOLF-D125B" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "베이포인터", quantity: "2개", target: "TOOLS-POINTER" }, { name: "베이런처", quantity: "2개", target: "TOOLS-POWER-LAUNCHER" }, { name: "베이스타디움 밸런스타입", quantity: "1개", target: "TOOLS-BALANCE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-21", series: "metal fight", releases: {
  kr: { no: "BB-21", name: "파워커스터마이즈세트 공격형&밸런스형", sale: "일반 판매", kind: "세트", releaseDate: "2008-12", price: "24000", composition: [{ name: "페가시스 100HF", quantity: "1개", target: "BEY-BB-21-PEGASIS-100HF" }, { name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-21-AQUARIO-105F" }, { name: "울프 125SF", quantity: "1개", target: "BEY-BB-21-WOLF-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-21", name: "베이 개조 세트 어택&밸런스타입", sale: "일반 판매", kind: "세트", releaseDate: "2008-10-23", price: "2625", composition: [{ name: "페가시스 100HF", quantity: "1개", target: "BEY-BB-21-PEGASIS-100HF" }, { name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-21-AQUARIO-105F" }, { name: "볼프 125SF", quantity: "1개", target: "BEY-BB-21-WOLF-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-22", series: "metal fight", releases: {
  kr: { no: "BB-22", name: "액션커스터마이즈세트 스테미너형&방어형", sale: "일반 판매", kind: "세트", releaseDate: "2008-12", price: "24000", composition: [{ name: "비르고 DF145BS", quantity: "1개", target: "BEY-BB-22-VIRGO-DF145BS" }, { name: "리브라 145S", quantity: "1개", target: "BEY-BB-22-LIBRA-145S" }, { name: "레온 D125B", quantity: "1개", target: "BEY-BB-22-LEONE-D125B" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "F 버텀", quantity: "1개", target: "BOTTOM-FLAT" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] },
  jp: { no: "BB-22", name: "베이 개조 세트 스태미나&디펜스타입", sale: "일반 판매", kind: "세트", releaseDate: "2008-10-23", price: "2625", composition: [{ name: "비르고 DF145BS", quantity: "1개", target: "BEY-BB-22-VIRGO-DF145BS" }, { name: "리브라 145S", quantity: "1개", target: "BEY-BB-22-LIBRA-145S" }, { name: "레오네 D125B", quantity: "1개", target: "BEY-BB-22-LEONE-D125B" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "F 버텀", quantity: "1개", target: "BOTTOM-FLAT" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] } } },
{ id: "PRODUCT-BB-23", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-23", name: "엘드라고 105F", sale: "일반 판매", kind: "스타터", releaseDate: "2008-12-25", price: "1344", composition: [{ name: "엘드라고 105F", quantity: "1개", target: "BEY-BB-23-L-DRAGO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] } } },
{ id: "PRODUCT-L-DRAGO-105F-GOLD", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "", name: "엘드라고 105F 골드 Ver.", sale: "한정 배포", kind: "스타터", releaseDate: "2009-01-13", price: "1344", composition: [{ name: "엘드라고 105F 골드 Ver.", quantity: "1개", target: "BEY-BB-23-L-DRAGO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] } } },
{ id: "PRODUCT-BB-24", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-24", name: "에스콜피오 WD145B", sale: "일반 판매", kind: "부스터", releaseDate: "2008-12-25", price: "630", composition: [{ name: "에스콜피오 WD145B", quantity: "1개", target: "BEY-BB-24-ESCOLPIO-WD145B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-25", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-25", name: "랜덤부스터 Vol.2 레전드 파이시즈", sale: "일반 판매", kind: "부스터", releaseDate: "2009-02-22", price: "630", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-25-PISCES-D125BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } }, lineupPool: ["BEY-BB-25-PISCES-D125BS", "BEY-BB-25-AQUARIO-DF145SF", "BEY-BB-25-VIRGO-125BS", "BEY-BB-25-LIBRA-D125HF", "BEY-BB-25-AQUARIO-105B", "BEY-BB-25-VIRGO-100B", "BEY-BB-25-LIBRA-100F", "BEY-BB-25-BULL-DF145HF"] },
{ id: "PRODUCT-BB-26", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-26", name: "제미오스 DF145FS", sale: "일반 판매", kind: "부스터", releaseDate: "2009-02-22", price: "630", composition: [{ name: "제미오스 DF145FS", quantity: "1개", target: "BEY-BB-26-GEMIOS-DF145FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-27", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-27", name: "카프리코네 100HF", sale: "일반 판매", kind: "부스터", releaseDate: "2009-02-22", price: "630", composition: [{ name: "카프리코네 100HF", quantity: "1개", target: "BEY-BB-27-CAPRICORNE-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-28", series: "metal fight", releases: {
  kr: { no: "BB-28", name: "스톰 페가시스 105RF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "12000", composition: [{ name: "스톰 페가시스 105RF", quantity: "1개", target: "BEY-BB-28-STORM-PEGASIS-105RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-28", name: "스톰 페가시스 105RF", sale: "일반 판매", kind: "스타터", releaseDate: "2009-03-28", price: "1260", composition: [{ name: "스톰 페가시스 105RF", quantity: "1개", target: "BEY-BB-28-STORM-PEGASIS-105RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-29", series: "metal fight", releases: {
  kr: { no: "BB-29", name: "다크 울프 DF145FS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "다크 울프 DF145FS", quantity: "1개", target: "BEY-BB-29-DARK-WOLF-DF145FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-29", name: "다크 볼프 DF145FS", sale: "일반 판매", kind: "스타터", releaseDate: "2009-03-28", price: "1260", composition: [{ name: "다크 볼프 DF145FS", quantity: "1개", target: "BEY-BB-29-DARK-WOLF-DF145FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-30", series: "metal fight", releases: {
  kr: { no: "BB-30", name: "로크 레온 145WB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "로크 레온 145WB", quantity: "1개", target: "BEY-BB-30-ROCK-LEONE-145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-30", name: "록 레오네 145WB", sale: "일반 판매", kind: "부스터", releaseDate: "2009-03-28", price: "682", composition: [{ name: "록 레오네 145WB", quantity: "1개", target: "BEY-BB-30-ROCK-LEONE-145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-30-1", series: "metal fight", releases: {
  kr: { no: "BB-30-1", name: "로크 레온 145WB", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-12", price: "6400", composition: [{ name: "로크 레온 145WB", quantity: "1개", target: "BEY-BB-30-ROCK-LEONE-145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { status: "unreleased" }} },
{ id: "PRODUCT-BB-31", series: "metal fight", releases: {
  kr: { no: "BB-31", name: "라이트블레이드 Vol.1", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-23", price: "3200", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-31-MAD-CANCER-CH120FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { no: "BB-31", name: "랜덤부스터 라이트 Vol.1", sale: "일반 판매", kind: "부스터", releaseDate: "2009-03-28", price: "367", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-31-MAD-CANCER-CH120FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: ["BEY-BB-31-MAD-CANCER-CH120FS","BEY-BB-31-HEAT-PEGASIS-100WB", "BEY-BB-31-CLAY-WOLF-145FS", "BEY-BB-31-HEAT-WOLF-WD145SF", "BEY-BB-31-MAD-LEONE-145B", "BEY-BB-31-CLAY-LEONE-DF145WB", "BEY-BB-31-WIND-PEGASIS-DF145B", "BEY-BB-31-WIND-LEONE-D125HF"] },
{ id: "PRODUCT-BB-32", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-32", name: "하이브리드휠 대전 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-03-28", price: "3675", composition: [{ name: "스톰 페가시스 105RF", quantity: "1개", target: "BEY-BB-32-STORM-PEGASIS-105RF" }, { name: "다크 볼프 DF145FS", quantity: "1개", target: "BEY-BB-32-DARK-WOLF-DF145FS" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "2개", target: "TOOLS-POWER-LAUNCHER" }, { name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
{ id: "PRODUCT-BB-33", series: "metal fight", releases: {
  kr: { no: "BB-33", name: "스퀘어형 베이스타디움", sale: "일반 판매", releaseDate: "2011-02", price: "6400", composition: [{ name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-33", name: "베이스타디움 와이드스퀘어타입", sale: "일반 판매", releaseDate: "2009-03-28", price: "1680", composition: [{ name: "베이스타디움 와이드스퀘어타입", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
{ id: "PRODUCT-BB-34", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-34", name: "라이트런처(오렌지)", sale: "일반 판매", releaseDate: "2009-03-28", price: "315", composition: [{ name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-35", series: "metal fight", releases: {
  kr: { no: "BB-35", name: "플레임 사지타리오 C145S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "플레임 사지타리오 C145S", quantity: "1개", target: "BEY-BB-35-FLAME-SAGITTARIO-C145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-35", name: "플레임 사지타리오 C145S", sale: "일반 판매", kind: "부스터", releaseDate: "2009-04-25", price: "787", composition: [{ name: "플레임 사지타리오 C145S", quantity: "1개", target: "BEY-BB-35-FLAME-SAGITTARIO-C145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-36", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-36", name: "메탈페이스", sale: "일반 판매", releaseDate: "2009-04-25", price: "367", composition: [{ name: "메탈페이스", quantity: "2개", target: "FACE-METAL-FACE" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
{ id: "PRODUCT-BB-37", series: "metal fight", releases: {
  kr: { no: "BB-37", name: "라이트블레이드 Vol.2", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-23", price: "3200", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-37-WIND-AQUARIO-100HF-S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { no: "BB-37", name: "랜덤부스터 라이트 Vol.2", sale: "일반 판매", kind: "부스터", releaseDate: "2009-05-23", price: "367", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-37-WIND-AQUARIO-100HF-S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: ["BEY-BB-37-WIND-AQUARIO-100HF-S", "BEY-BB-37-CLAY-WOLF-105B", "BEY-BB-37-CLAY-SAGITTARIO-145B", "BEY-BB-37-HEAT-PEGASIS-DF145WB", "BEY-BB-37-HEAT-LEONE-D125FS", "BEY-BB-37-MAD-SAGITTARIO-DF145HF", "BEY-BB-37-MAD-LEONE-145FS", "BEY-BB-37-WIND-WOLF-WD145WB"] },
{ id: "PRODUCT-BB-38", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-38", name: "베이런처(아이언그레이)", sale: "일반 판매", releaseDate: "2009-05-23", price: "630", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-39", series: "metal fight", releases: {
  kr: { no: "BB-39", name: "카라비나그립", sale: "일반 판매", releaseDate: "2009-09-23", price: "6400", composition: [{ name: "카라비나그립", quantity: "1개", target: "TOOLS-CARABINER-GRIP" }] },
  jp: { no: "BB-39", name: "카라비나그립", sale: "일반 판매", releaseDate: "2009-05-23", price: "630", composition: [{ name: "카라비나그립", quantity: "1개", target: "TOOLS-CARABINER-GRIP" }] }} },
{ id: "PRODUCT-BB-40", series: "metal fight", releases: {
  kr: { no: "BB-40", name: "다크 불 H145SD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "다크 불 H145SD", quantity: "1개", target: "BEY-BB-40-DARK-BULL-H145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-40", name: "다크 불 H145SD", sale: "일반 판매", kind: "부스터", releaseDate: "2009-06-20", price: "682", composition: [{ name: "다크 불 H145SD", quantity: "1개", target: "BEY-BB-40-DARK-BULL-H145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-41", series: "metal fight", releases: {
  kr: { no: "BB-41", name: "초공격형 베이스타디움", sale: "일반 판매", releaseDate: "2009-09-23", price: "6400", composition: [{ name: "초공격형 베이스타디움", quantity: "1개", target: "TOOLS-SUPER-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-41", name: "베이스타디움 슈퍼어택타입", sale: "일반 판매", releaseDate: "2009-06-20", price: "1365", composition: [{ name: "베이스타디움 슈퍼어택타입", quantity: "1개", target: "TOOLS-SUPER-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
{ id: "PRODUCT-BB-42", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-42", name: "베이캐리어 웨이스트타입", sale: "일반 판매", releaseDate: "2009-06-20", price: "1050", composition: [{ name: "베이캐리어 웨이스트타입", quantity: "1개", target: "TOOLS-BEYCARRIER-WAIST" }] }} },
{ id: "PRODUCT-BB-43", series: "metal fight", releases: {
  kr: { no: "BB-43", name: "라이트닝 엘드라고 100HF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "12000", composition: [{ name: "라이트닝 엘드라고 100HF", quantity: "1개", target: "BEY-BB-43-LIGHTNING-L-DRAGO-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] },
  jp: { no: "BB-43", name: "라이트닝 엘드라고 100HF", sale: "일반 판매", kind: "스타터", releaseDate: "2009-07-18", price: "1260", composition: [{ name: "라이트닝 엘드라고 100HF", quantity: "1개", target: "BEY-BB-43-LIGHTNING-L-DRAGO-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] }} },
{ id: "PRODUCT-LIGHTNING-L-DRAGO-100HF-KYOKURYU", series: "metal fight", releases: {
  kr: { no: "", name: "라이트닝 엘드라고 100HF 극룡 Ver.", sale: "한정 판매", kind: "", releaseDate: "2010-08-22", price: "7000", composition: [{ name: "라이트닝 엘드라고 100HF 극룡 Ver.", quantity: "1개", target: "BEY-BB-43-LIGHTNING-L-DRAGO-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { no: "", name: "라이트닝 엘드라고 100HF 극룡 Ver.", sale: "한정 배포", kind: "", releaseDate: "2009-11-05", price: "", composition: [{ name: "라이트닝 엘드라고 100HF 극룡 Ver.", quantity: "1개", target: "BEY-BB-43-LIGHTNING-L-DRAGO-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-44", series: "metal fight", releases: {
  kr: { no: "BB-44", name: "메탈블레이드&런처", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-44-STORM-PEGASIS-100RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-44", name: "랜덤부스터 Vol.3 스타더스트 페가시스", sale: "일반 판매", kind: "부스터", releaseDate: "2009-07-18", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-44-STORM-PEGASIS-100RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: ["BEY-BB-44-STORM-PEGASIS-100RF", "BEY-BB-44-ROCK-WOLF-H145B", "BEY-BB-44-DARK-LEONE-C145B", "BEY-BB-44-FLAME-WOLF-H145S", "BEY-BB-44-STORM-SAGITTARIO-145SD", "BEY-BB-44-ROCK-BULL-WD145HF", "BEY-BB-44-DARK-SAGITTARIO-WD145SD", "BEY-BB-44-FLAME-BULL-105WB"] },
{ id: "PRODUCT-BB-45", series: "metal fight", releases: {
  kr: { no: "BB-45", name: "라이트블레이드 Vol.3", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-23", price: "3200", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-45-CLAY-ARIES-ED145B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { no: "BB-45", name: "랜덤부스터 라이트 Vol.3", sale: "일반 판매", kind: "부스터", releaseDate: "2009-08-08", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-45-CLAY-ARIES-ED145B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: [ "BEY-BB-45-CLAY-ARIES-ED145B", "BEY-BB-45-CLAY-PEGASIS-145S", "BEY-BB-45-MAD-SAGITTARIO-C145SD", "BEY-BB-45-HEAT-BULL-D125WB", "BEY-BB-45-WIND-WOLF-H145D", "BEY-BB-45-HEAT-LEONE-H145S", "BEY-BB-45-MAD-BULL-C145HF", "BEY-BB-45-WIND-SAGITTARIO-100SD"] },
{ id: "PRODUCT-BB-46", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-46", name: "베이스타디움 스탠다드타입", sale: "일반 판매", releaseDate: "2009-08-08", price: "2625", composition: [{ name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-STANDARD-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
{ id: "PRODUCT-BB-47", series: "metal fight", releases: {
  kr: { no: "BB-47", name: "어스 아쿠이라 145WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "어스 아쿠이라 145WD", quantity: "1개", target: "BEY-BB-47-EARTH-AQUILA-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-47", name: "어스 아쿠이라 145WD", sale: "일반 판매", kind: "스타터", releaseDate: "2009-09-19", price: "892", composition: [{ name: "어스 아쿠이라 145WD", quantity: "1개", target: "BEY-BB-47-EARTH-AQUILA-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-47-1", series: "metal fight", releases: {
  kr: { no: "BB-47-1", name: "어스 아쿠이라 145WD", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-12", price: "6400", composition: [{ name: "어스 아쿠이라 145WD", quantity: "1개", target: "BEY-BB-47-EARTH-AQUILA-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { status: "unreleased" }} },
{ id: "PRODUCT-BB-48", series: "metal fight", releases: {
  kr: { no: "BB-48", name: "플레임 리브라 T125ES", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "플레임 리브라 T125ES", quantity: "1개", target: "BEY-BB-48-FLAME-LIBRA-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-48", name: "플레임 리브라 T125ES", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-19", price: "787", composition: [{ name: "플레임 리브라 T125ES", quantity: "1개", target: "BEY-BB-48-FLAME-LIBRA-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-48-1", series: "metal fight", releases: {
  kr: { no: "BB-48-1", name: "플레임 리브라 T125ES", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-12", price: "6400", composition: [{ name: "플레임 리브라 T125ES", quantity: "1개", target: "BEY-BB-48-FLAME-LIBRA-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-METAL-PERFECT-MASTER-SET", series: "metal fight", releases: {
    kr: { no: "", name: "메탈 퍼펙트 마스터 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-09-23", price: "49600", composition: [{ name: "스톰 페가시스 105RF", quantity: "1개", target: "BEY-BB-28-STORM-PEGASIS-105RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "앵글컴파스", quantity: "1개", target: "TOOLS-ANGLE-COMPASS" }, { name: "공격형 베이스타디움", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }, { name: "캐리어케이스", quantity: "1개", target: "TOOLS-CARRIER-CASE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LAUNCHER-GRIP-ANGLE-COMPASS", series: "metal fight", releases: {
    kr: { no: "", name: "런처그립&앵글컴퍼스", sale: "일반 판매", releaseDate: "2010-07", price: "8800", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "앵글컴파스", quantity: "1개", target: "TOOLS-ANGLE-COMPASS" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-49", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-49", name: "앵글컴파스", sale: "일반 판매", releaseDate: "2009-09-19", price: "525", composition: [{ name: "앵글컴파스", quantity: "1개", target: "TOOLS-ANGLE-COMPASS" }] }} },
  { id: "PRODUCT-BB-50", series: "metal fight", releases: {
    kr: { no: "BB-50", name: "스톰 카프리콘 M145Q", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-12-06", price: "8000", composition: [{ name: "스톰 카프리콘 M145Q", quantity: "1개", target: "BEY-BB-50-STORM-CAPRICORNE-M145Q" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-50", name: "스톰 카프리코네 M145Q", sale: "일반 판매", kind: "부스터", releaseDate: "2009-10-24", price: "787", composition: [{ name: "스톰 카프리코네 M145Q", quantity: "1개", target: "BEY-BB-50-STORM-CAPRICORNE-M145Q" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-51", series: "metal fight", releases: {
    kr: { no: "BB-51", name: "익스트림 스타디움 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-12-06", price: "46400", composition: [{ name: "로크 오르소 D125B", quantity: "1개", target: "BEY-BB-51-ROCK-ORSO-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "익스트림 베이스타디움", quantity: "1개", target: "TOOLS-EXTREME-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-51", name: "익스트림 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2009-10-24", price: "5775", composition: [{ name: "록 오르소 D125B", quantity: "1개", target: "BEY-BB-51-ROCK-ORSO-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "익스트림 베이스타디움", quantity: "1개", target: "TOOLS-EXTREME-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BB-52", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-52", name: "베이캐리어 하드타입", sale: "일반 판매", releaseDate: "2009-10-24", price: "1980", composition: [{ name: "베이캐리어 하드타입", quantity: "1개", target: "TOOLS-BEYCARRIER-HARD" }] }} },
  { id: "PRODUCT-BB-53", series: "metal fight", releases: {
    kr: { no: "BB-53", name: "디지털파워런처 페가시스 Ver.", sale: "일반 판매", releaseDate: "2009-12-06", price: "28000", composition: [{ name: "디지털파워런처", quantity: "1개", target: "TOOLS-DIGITAL-POWER-LAUNCHER" }] },
    jp: { no: "BB-53", name: "디지털파워런처 페가시스 Ver.", sale: "일반 판매", releaseDate: "2009-11-14", price: "2100", composition: [{ name: "디지털파워런처", quantity: "1개", target: "TOOLS-DIGITAL-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-54", series: "metal fight", releases: {
    kr: { no: "BB-54", name: "디지털파워런처 엘드라고 Ver.", sale: "일반 판매", releaseDate: "2009-12-06", price: "28000", composition: [{ name: "디지털파워런처", quantity: "1개", target: "TOOLS-DIGITAL-POWER-LAUNCHER" }] },
    jp: { no: "BB-54", name: "디지털파워런처 엘드라고 Ver.", sale: "일반 판매", releaseDate: "2009-11-14", price: "2100", composition: [{ name: "디지털파워런처", quantity: "1개", target: "TOOLS-DIGITAL-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-55", series: "metal fight", releases: {
    kr: { no: "BB-55", name: "다크 캔서 CH120SF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-12-06", price: "8000", composition: [{ name: "다크 캔서 CH120SF", quantity: "1개", target: "BEY-BB-55-DARK-CANCER-CH120SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-55", name: "다크 캔서 CH120SF", sale: "일반 판매", kind: "부스터", releaseDate: "2009-11-21", price: "682", composition: [{ name: "다크 캔서 CH120SF", quantity: "1개", target: "BEY-BB-55-DARK-CANCER-CH120SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-56", series: "metal fight", releases: {
    kr: { no: "BB-56", name: "커스터마이즈 A&B 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-12-06", price: "24000", composition: [{ name: "다크 카프리콘 105RF", quantity: "1개", target: "BEY-BB-56-DARK-CAPRICORNE-105RF" }, { name: "키라 제미오스 DF145FS", quantity: "1개", target: "BEY-BB-56-KILLER-GEMIOS-DF145FS" }, { name: "스톰 아쿠아리오 M145Q", quantity: "1개", target: "BEY-BB-56-STORM-AQUARIO-M145Q" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
    jp: { no: "BB-56", name: "하이브리드휠 개조 세트 어택&밸런스타입", sale: "일반 판매", kind: "세트", releaseDate: "2009-11-21", price: "2100", composition: [{ name: "다크 카프리코네 105RF", quantity: "1개", target: "BEY-BB-56-DARK-CAPRICORNE-105RF" }, { name: "키라 제미오스 DF145FS", quantity: "1개", target: "BEY-BB-56-KILLER-GEMIOS-DF145FS" }, { name: "스톰 아쿠아리오 M145Q", quantity: "1개", target: "BEY-BB-56-STORM-AQUARIO-M145Q" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-56-D", series: "metal fight", releases: {
    kr: { no: "BB-56(D)", name: "다크 카프리콘 105RF", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-02", price: "6400", composition: [{ name: "다크 카프리콘 105RF", quantity: "1개", target: "BEY-BB-56-DARK-CAPRICORNE-105RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-56-K", series: "metal fight", releases: {
    kr: { no: "BB-56(K)", name: "키라 제미오스 DF145FS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-04-02", price: "8000", composition: [{ name: "키라 제미오스 DF145FS", quantity: "1개", target: "BEY-BB-56-KILLER-GEMIOS-DF145FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-56-S", series: "metal fight", releases: {
    kr: { no: "BB-56(S)", name: "스톰 아쿠아리오 M145Q", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-02", price: "6400", composition: [{ name: "스톰 아쿠아리오 M145Q", quantity: "1개", target: "BEY-BB-56-STORM-AQUARIO-M145Q" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-57", series: "metal fight", releases: {
    kr: { no: "BB-57", name: "커스터마이즈 S&D 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-12-06", price: "24000", composition: [{ name: "플레임 리브라 DF145BS", quantity: "1개", target: "BEY-BB-57-FLAME-LIBRA-DF145BS" }, { name: "써멀 파이시즈 T125ES", quantity: "1개", target: "BEY-BB-57-THERMAL-PISCES-T125ES" }, { name: "로크 아리에스 145D", quantity: "1개", target: "BEY-BB-57-ROCK-ARIES-145D" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
    jp: { no: "BB-57", name: "하이브리드휠 개조 세트 스태미나&디펜스타입", sale: "일반 판매", kind: "세트", releaseDate: "2009-11-21", price: "2100", composition: [{ name: "플레임 리브라 DF145BS", quantity: "1개", target: "BEY-BB-57-FLAME-LIBRA-DF145BS" }, { name: "써멀 파이시즈 T125ES", quantity: "1개", target: "BEY-BB-57-THERMAL-PISCES-T125ES" }, { name: "록 아리에스 145D", quantity: "1개", target: "BEY-BB-57-ROCK-ARIES-145D" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-57-T", series: "metal fight", releases: {
    kr: { no: "BB-57(T)", name: "써멀 파이시즈 T125ES", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-04-02", price: "8000", composition: [{ name: "써멀 파이시즈 T125ES", quantity: "1개", target: "BEY-BB-57-THERMAL-PISCES-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-57-R", series: "metal fight", releases: {
    kr: { no: "BB-57(R)", name: "로크 아리에스 145D", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-02", price: "6400", composition: [{ name: "로크 아리에스 145D", quantity: "1개", target: "BEY-BB-57-ROCK-ARIES-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-METAL-FACE-SUSPENSION", series: "metal fight", releases: {
    kr: { no: "", name: "메탈페이스&서스펜션", sale: "일반 판매", releaseDate: "2010-02-10", price: "9600", composition: [{ name: "메탈페이스", quantity: "4개", target: "FACE-METAL-FACE" }, { name: "홀더툴", quantity: "2개", target: "TOOLS-HOLDER-TOOL" }, { name: "파워런처 서스펜션", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-SUSPENSION" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-58", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-58", name: "베이런처 서스펜션", sale: "일반 판매", releaseDate: "2009-11-21", price: "315", composition: [{ name: "베이런처 서스펜션", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-SUSPENSION" }] }} },
  { id: "PRODUCT-BB-59", series: "metal fight", releases: {
    kr: { no: "BB-59", name: "번 피닉스 135MS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-02-10", price: "8000", composition: [{ name: "번 피닉스 135MS", quantity: "1개", target: "BEY-BB-59-BURN-PHOENIX-135MS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-59", name: "번 피닉스 135MS", sale: "일반 판매", kind: "스타터", releaseDate: "2009-12-26", price: "892", composition: [{ name: "번 피닉스 135MS", quantity: "1개", target: "BEY-BB-59-BURN-PHOENIX-135MS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
  { id: "PRODUCT-BURN-PHOENIX-90WF", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "번 피닉스 90WF", sale: "한정 배포", kind: "", releaseDate: "2010-01-17", price: "", composition: [{ name: "번 피닉스 90WF", quantity: "1개", target: "BEY-BURN-PHOENIX-90WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-60", series: "metal fight", releases: {
    kr: { no: "BB-60", name: "어스 비르고 GB145BS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-02-10", price: "8000", composition: [{ name: "어스 비르고 GB145BS", quantity: "1개", target: "BEY-BB-60-EARTH-VIRGO-GB145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-60", name: "랜덤부스터 Vol.4 미라주 비르고", sale: "일반 판매", kind: "부스터", releaseDate: "2009-12-26", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-60-EARTH-VIRGO-GB145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: ["BEY-BB-60-EARTH-VIRGO-GB145BS", "BEY-BB-60-EARTH-CANCER-DF145ES", "BEY-BB-60-FLAME-CAPRICORNE-T125HF", "BEY-BB-60-FLAME-AQUILA-100ES", "BEY-BB-60-ROCK-CAPRICORNE-T125D", "BEY-BB-60-ROCK-LIBRA-100WD", "BEY-BB-60-STORM-AQUILA-145HF", "BEY-BB-60-STORM-LIBRA-145S"] },
  { id: "PRODUCT-BURN-PISCES-ED145WF", series: "metal fight", releases: {
    kr: { no: "", name: "번 파이시즈 ED145WF", sale: "한정 판매", kind: "", releaseDate: "2010-08-22", price: "7000", composition: [{ name: "번 파이시즈 ED145WF", quantity: "1개", target: "BEY-BURN-PISCES-ED145WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "", name: "번 파이시즈 ED145WF", sale: "한정 배포", kind: "", releaseDate: "2010-02-15", price: "", composition: [{ name: "번 파이시즈 ED145WF", quantity: "1개", target: "BEY-BURN-PISCES-ED145WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-EARTH-AQUILA-105HFS", series: "metal fight", releases: {
    kr: { no: "", name: "어스 아쿠이라 105HF/S", sale: "한정 배포", kind: "부스터", releaseDate: "2010-08-22", price: "", composition: [{ name: "어스 아쿠이라 105HF/S", quantity: "1개", target: "BEY-EARTH-AQUILA-105HFS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "", name: "어스 아쿠이라 105HF/S", sale: "한정 배포", kind: "부스터", releaseDate: "2010-02-19", price: "", composition: [{ name: "어스 아쿠이라 105HF/S", quantity: "1개", target: "BEY-EARTH-AQUILA-105HFS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-KR-LAUNCHER-GRIP-BLACK-GRIP-RUBBER-WHITE", series: "metal fight", releases: {
    kr: { no: "", name: "런처그립(블랙)&그립러버(화이트)", sale: "일반 판매", releaseDate: "2010-02-10", price: "8800", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LAUNCHER-GRIP-WHITE-GRIP-RUBBER-RED", series: "metal fight", releases: {
    kr: { no: "", name: "런처그립(화이트)&그립러버(레드)", sale: "일반 판매", releaseDate: "2010-02-10", price: "8800", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-61", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-61", name: "그립러버(레드)", sale: "일반 판매", releaseDate: "2009-12-26", price: "315", composition: [{ name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] }} },
  { id: "PRODUCT-BB-62", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-62", name: "그립러버(화이트)", sale: "일반 판매", releaseDate: "2009-12-26", price: "315", composition: [{ name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] }} },
  { id: "PRODUCT-BB-63", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-63", name: "그립러버(블랙)", sale: "일반 판매", releaseDate: "2009-12-26", price: "315", composition: [{ name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] }} },
  { id: "PRODUCT-BB-64", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-64", name: "런처그립(화이트)", sale: "일반 판매", releaseDate: "2009-12-26", price: "525", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-BB-65", series: "metal fight", releases: {
    kr: { no: "BB-65", name: "로크 스콜피온 T125JB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-02-10", price: "8000", composition: [{ name: "로크 에스콜피오 T125JB", quantity: "1개", target: "BEY-BB-65-ROCK-ESCOLPIO-T125JB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-65", name: "록 에스콜피오 T125JB", sale: "일반 판매", kind: "부스터", releaseDate: "2010-01-23", price: "682", composition: [{ name: "록 에스콜피오 T125JB", quantity: "1개", target: "BEY-BB-65-ROCK-ESCOLPIO-T125JB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-66", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-66", name: "메탈페이스(레드)", sale: "일반 판매", releaseDate: "2010-01-23", price: "367", composition: [{ name: "메탈페이스", quantity: "2개", target: "FACE-METAL-FACE" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-67", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-67", name: "메탈페이스(건메탈릭)", sale: "일반 판매", releaseDate: "2010-01-23", price: "367", composition: [{ name: "메탈페이스", quantity: "2개", target: "FACE-METAL-FACE" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-68", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-68", name: "베이런처(메탈릭오렌지)", sale: "일반 판매", releaseDate: "2010-01-23", price: "630", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-69", series: "metal fight", releases: {
    kr: { no: "BB-69", name: "포이즌 서펜트 SW145SD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-02-10", price: "8000", composition: [{ name: "포이즌 서펜트 SW145SD", quantity: "1개", target: "BEY-BB-69-POISON-SERPENT-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-69", name: "포이즌 서펜트 SW145SD", sale: "일반 판매", kind: "스타터", releaseDate: "2010-02-13", price: "892", composition: [{ name: "포이즌 서펜트 SW145SD", quantity: "1개", target: "BEY-BB-69-POISON-SERPENT-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-70", series: "metal fight", releases: {
    kr: { no: "BB-70", name: "갤럭시 페가시스 W105R²F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-07-30", price: "9600", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-70", name: "갤럭시 페가시스 W105R²F", sale: "일반 판매", kind: "스타터", releaseDate: "2010-04-01", price: "1680", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "베이포인트카드", quantity: "1장", target: "TOOLS-BEYPOINT-CARD" }] }} },
  { id: "PRODUCT-GALAXY-PEGASIS-GB145MS", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "갤럭시 페가시스 GB145MS", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "갤럭시 페가시스 GB145MS", quantity: "1개", target: "BEY-GALAXY-PEGASIS-GB145MS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-ROCK-ARIES-ED145D", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "록 아리에스 ED145D", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "록 아리에스 ED145D", quantity: "1개", target: "BEY-ROCK-ARIES-ED145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVELS", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨1~7", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "레벨별 교환 상품", quantity: "1개", target: "PRODUCT-BEYPOINT-LEVEL-1" }] }}, lineupTitle: "교환 상품", lineupEntryMode: "lineup-first", lineupPool: ["PRODUCT-BEYPOINT-LEVEL-1", "PRODUCT-BEYPOINT-LEVEL-2", "PRODUCT-BEYPOINT-LEVEL-3", "PRODUCT-BEYPOINT-LEVEL-4", "PRODUCT-BEYPOINT-LEVEL-5", "PRODUCT-BEYPOINT-LEVEL-6", "PRODUCT-BEYPOINT-LEVEL-7"] },
  { id: "PRODUCT-BEYPOINT-LEVEL-1", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨1", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨2", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "페가시스 음각 페이스", quantity: "1개", target: "FACE-PEGASIS-ENGRAVED" }, { name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-3", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨3", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-4", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨4", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-5", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨5", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "인피니티 리브라 GB145S", quantity: "1개", target: "BEY-INFINITY-LIBRA-GB145S" }, { name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-6", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨6", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-7", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨7", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "머큐리 아누비우스 85XF", quantity: "1개", target: "BEY-MERCURY-ANUBIUS-85XF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-SOL-BLAZE-V145AS", series: "metal fight", releases: {
    kr: { no: "", name: "솔 블레이즈 V145AS", sale: "한정 배포", kind: "", releaseDate: "2011-01-10", price: "", composition: [{ name: "솔 블레이즈 V145AS", quantity: "1개", target: "BEY-SOL-BLAZE-V145AS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "", name: "솔 블레이즈 V145AS", sale: "한정 배포", kind: "", releaseDate: "2010-07-15", price: "", composition: [{ name: "솔 블레이즈 V145AS", quantity: "1개", target: "BEY-SOL-BLAZE-V145AS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-METAL-FACE-BLAZE-VER", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈페이스 블레이즈 Ver.", sale: "한정 배포", kind: "", releaseDate: "2010-08-18", price: "", composition: [{ name: "메탈페이스 블레이즈 Ver.", quantity: "1개", target: "FACE-METAL-FACE-BLAZE-VER" }] }} },
  { id: "PRODUCT-BAKUSHIN-SUSANOW-90WF-ECLIPSE", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "바쿠신 스사노오 90WF 월식 Ver.", sale: "한정 판매", kind: "부스터", releaseDate: "2011-02-25", price: "787", composition: [{ name: "바쿠신 스사노오 90WF 월식 Ver.", quantity: "1개", target: "BEY-BAKUSHIN-SUSANOW-90WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-70R2", series: "metal fight", releases: {
    kr: { no: "BB-70R2", name: "갤럭시 페가시스 W105R²F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-71", series: "metal fight", releases: {
    kr: { no: "BB-71", name: "레이 유니콘 D125CS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-07-30", price: "9600", composition: [{ name: "레이 유니콘 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-71", name: "레이 유니코르노 D125CS", sale: "일반 판매", kind: "스타터", releaseDate: "2010-04-01", price: "1680", composition: [{ name: "레이 유니코르노 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "베이포인트카드", quantity: "1장", target: "TOOLS-BEYPOINT-CARD" }] }} },
  { id: "PRODUCT-BB-71R2", series: "metal fight", releases: {
    kr: { no: "BB-71R2", name: "레이 유니콘 D125CS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "레이 유니콘 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-72", series: "metal fight", releases: {
    kr: { no: "BB-72", name: "아쿠아리오 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-30", price: "6400", composition: [{ name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-72-AQUARIO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "BB-72", name: "아쿠아리오 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-01", price: "682", composition: [{ name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-72-AQUARIO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-73", series: "metal fight", releases: {
    kr: { no: "BB-73", name: "베이카드 런처그립", sale: "일반 판매", releaseDate: "2011-01-13", price: "6400", composition: [{ name: "베이카드 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }] },
    jp: { no: "BB-73", name: "3세그 런처그립", sale: "일반 판매", releaseDate: "2010-04-01", price: "577", composition: [{ name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-KR-PEGASIS-BEYCARD-SET", series: "metal fight", releases: {
    kr: { no: "", name: "페가시스 베이카드 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-30", price: "20800", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "베이카드 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }, { name: "베이카드", quantity: "5장", target: "TOOLS-BEYCARD" }, { name: "페가시스 장갑", quantity: "1켤레", target: "TOOLS-PEGASIS-GLOVE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LDRAGO-CHARACTER-CARD-SET", series: "metal fight", releases: {
    kr: { no: "", name: "엘드라고 캐릭터카드 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-30", price: "20800", composition: [{ name: "메테오 엘드라고 LW105LF", quantity: "1개", target: "BEY-BB-88-METEO-L-DRAGO-LW105LF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "베이카드 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }, { name: "캐릭터카드", quantity: "5장", target: "TOOLS-CHARACTER-CARD" }, { name: "엘드라고 손목밴드", quantity: "1켤레", target: "TOOLS-LDRAGO-WRISTBAND" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-74", series: "metal fight", releases: {
    kr: { no: "BB-74", name: "써멀 라체르타 WA130HF", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-30", price: "6400", composition: [{ name: "써멀 라체르타 WA130HF", quantity: "1개", target: "BEY-BB-74-THERMAL-LACERTA-WA130HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "BB-74", name: "써멀 라체르타 WA130HF", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-24", price: "787", composition: [{ name: "써멀 라체르타 WA130HF", quantity: "1개", target: "BEY-BB-74-THERMAL-LACERTA-WA130HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-74R2", series: "metal fight", releases: {
    kr: { no: "BB-74R2", name: "써멀 라체르타 WA130HF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "써멀 라체르타 WA130HF", quantity: "1개", target: "BEY-BB-74-THERMAL-LACERTA-WA130HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-75", series: "metal fight", releases: {
    kr: { no: "BB-75", name: "베이블레이드 덱 엔트리 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-07-30", price: "24000", composition: [{ name: "로크 오르소 ED145D", quantity: "1개", target: "BEY-BB-75-ROCK-ORSO-ED145D" }, { name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-75-GALAXY-PEGASIS-W105R2F" }, { name: "어스 비르고 T125ES", quantity: "1개", target: "BEY-BB-75-EARTH-VIRGO-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] },
    jp: { no: "BB-75", name: "베이블레이드 덱 엔트리 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-04-24", price: "2625", composition: [{ name: "록 오르소 ED145D", quantity: "1개", target: "BEY-BB-75-ROCK-ORSO-ED145D" }, { name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-75-GALAXY-PEGASIS-W105R2F" }, { name: "어스 비르고 T125ES", quantity: "1개", target: "BEY-BB-75-EARTH-VIRGO-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] }} },
  { id: "PRODUCT-BB-76", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-76", name: "갤럭시 페가시스 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-04-24", price: "3780", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-76-GALAXY-PEGASIS-W105R2F" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "베이포인트카드", quantity: "1개", target: "TOOLS-BEYPOINT-CARD" }, { name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }, { name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BB-77", series: "metal fight", releases: {
    kr: { no: "BB-77", name: "베이 덱 케이스", sale: "일반 판매", releaseDate: "2011-05-18", price: "5000", composition: [{ name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] },
    jp: { no: "BB-77", name: "베이 덱 케이스", sale: "일반 판매", releaseDate: "2010-04-24", price: "525", composition: [{ name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] }} },
  { id: "PRODUCT-BB-78", series: "metal fight", releases: {
    kr: { no: "BB-78", name: "로크 기라프 R145WB", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07", price: "6400", composition: [{ name: "로크 기라프 R145WB", quantity: "1개", target: "BEY-BB-78-ROCK-GIRAFFE-R145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "BB-78", name: "록 기라프 R145WB", sale: "일반 판매", kind: "부스터", releaseDate: "2010-05-22", price: "787", composition: [{ name: "록 기라프 R145WB", quantity: "1개", target: "BEY-BB-78-ROCK-GIRAFFE-R145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-78R2", series: "metal fight", releases: {
    kr: { no: "BB-78R2", name: "로크 기라프 R145WB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "로크 기라프 R145WB", quantity: "1개", target: "BEY-BB-78-ROCK-GIRAFFE-R145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-79", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-79", name: "메탈어시스트", sale: "일반 판매", releaseDate: "2010-06-22", price: "525", composition: [{ name: "메탈어시스트", quantity: "1개", target: "TOOLS-METAL-ASSIST" }] }} },
  { id: "PRODUCT-BB-80", series: "metal fight", releases: {
    kr: { no: "BB-80", name: "그라비티 페르세우스 AD145WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-07-30", price: "13600", composition: [{ name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] },
    jp: { no: "BB-80", name: "그라비티 페르세우스 AD145WD", sale: "일반 판매", kind: "스타터", releaseDate: "2010-06-22", price: "1365", composition: [{ name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] }} },
  { id: "PRODUCT-KR-BIGBANG-BLADERS-SET", series: "metal fight", releases: {
    kr: { no: "", name: "빅뱅블레이더즈 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-09-17", price: "35000", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "레이 유니콘 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "2개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-TRIPLE-NATIONAL-TEAM-DX-SET", series: "metal fight", releases: {
    kr: { no: "", name: "트리플 내셔널팀 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-09-17", price: "35000", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "로크 기라프 R145WB", quantity: "1개", target: "BEY-BB-78-ROCK-GIRAFFE-R145WB" }, { name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "트리플형 베이스타디움", quantity: "1개", target: "TOOLS-TRIPLE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-81", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-81", name: "런처러버", sale: "일반 판매", releaseDate: "2010-06-22", price: "315", composition: [{ name: "런처러버", quantity: "3개", target: "TOOLS-LAUNCHER-RUBBER" }] }} },
  { id: "PRODUCT-BB-82", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-82", name: "랜덤부스터 Vol.5 그랜드 케토스", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-24", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-82-GRAND-KETOS-WD145RS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: ["BEY-BB-82-GRAND-KETOS-WD145RS", "BEY-BB-82-GRAND-KETOS-T125RS", "BEY-BB-82-BURN-UNICORNO-SW145JB", "BEY-BB-82-POISON-UNICORNO-130HF", "BEY-BB-82-STORM-PHOENIX-130B", "BEY-BB-82-POISON-PHOENIX-WA130SD", "BEY-BB-82-BURN-SERPENT-WA130ES", "BEY-BB-82-STORM-SERPENT-T125HF"] },
  { id: "PRODUCT-BB-82-1", series: "metal fight", releases: {
    kr: { no: "BB-82-1", name: "그랜드 케토스 WD145RS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "그랜드 케토스 WD145RS", quantity: "1개", target: "BEY-BB-82-GRAND-KETOS-WD145RS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-82-2", series: "metal fight", releases: {
    kr: { no: "BB-82-2", name: "그랜드 케토스 T125RS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "그랜드 케토스 T125RS", quantity: "1개", target: "BEY-BB-82-GRAND-KETOS-T125RS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-83", series: "metal fight", releases: {
    kr: { no: "BB-83", name: "파이시즈 DF145BS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "파이시즈 DF145BS", quantity: "1개", target: "BEY-BB-83-PISCES-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-83", name: "파이시즈 DF145BS", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-24", price: "682", composition: [{ name: "파이시즈 DF145BS", quantity: "1개", target: "BEY-BB-83-PISCES-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-84", series: "metal fight", releases: {
    kr: { no: "BB-84", name: "메탈페이스 커스텀 Ver.(클리어)", sale: "일반 판매", releaseDate: "2011-01-13", price: "4000", composition: [{ name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] },
    jp: { no: "BB-84", name: "메탈페이스 개조 Ver.(클리어)", sale: "일반 판매", releaseDate: "2010-07-24", price: "367", composition: [{ name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-85", series: "metal fight", releases: {
    kr: { no: "BB-85", name: "메탈페이스 커스텀 Ver.(오렌지)", sale: "일반 판매", releaseDate: "2011-01-13", price: "4000", composition: [{ name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] },
    jp: { no: "BB-85", name: "메탈페이스 개조 Ver.(오렌지)", sale: "일반 판매", releaseDate: "2010-07-24", price: "367", composition: [{ name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-86", series: "metal fight", releases: {
    kr: { no: "BB-86", name: "베이블레이드 덱 어택&디펜스 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-10-01", price: "25600", composition: [{ name: "카운터 에스콜피오 145D", quantity: "1개", target: "BEY-BB-86-COUNTER-ESCOLPIO-145D" }, { name: "사이버 아쿠아리오 105F", quantity: "1개", target: "BEY-BB-86-CYBER-AQUARIO-105F" }, { name: "포이즌 기라프 S130MB", quantity: "1개", target: "BEY-BB-86-POISON-GIRAFFE-S130MB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] },
    jp: { no: "BB-86", name: "베이블레이드 덱 어택&디펜스 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-08-07", price: "2625", composition: [{ name: "카운터 에스콜피오 145D", quantity: "1개", target: "BEY-BB-86-COUNTER-ESCOLPIO-145D" }, { name: "사이버 아쿠아리오 105F", quantity: "1개", target: "BEY-BB-86-CYBER-AQUARIO-105F" }, { name: "포이즌 기라프 S130MB", quantity: "1개", target: "BEY-BB-86-POISON-GIRAFFE-S130MB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] }} },
  { id: "PRODUCT-BB-87", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-87", name: "라이트런처2", sale: "일반 판매", releaseDate: "2010-08-28", price: "420", composition: [{ name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] }} },
  { id: "PRODUCT-BB-88", series: "metal fight", releases: {
    kr: { no: "BB-88", name: "메테오 엘드라고 LW105LF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "12000", composition: [{ name: "메테오 엘드라고 LW105LF", quantity: "1개", target: "BEY-BB-88-METEO-L-DRAGO-LW105LF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] },
    jp: { no: "BB-88", name: "메테오 엘드라고 LW105LF", sale: "일반 판매", kind: "스타터", releaseDate: "2010-09-18", price: "1260", composition: [{ name: "메테오 엘드라고 LW105LF", quantity: "1개", target: "BEY-BB-88-METEO-L-DRAGO-LW105LF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] }} },
  { id: "PRODUCT-BB-89", series: "metal fight", releases: {
    kr: { no: "BB-89", name: "아리에스 145D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "아리에스 145D", quantity: "1개", target: "BEY-BB-89-ARIES-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-89", name: "아리에스 145D", sale: "일반 판매", kind: "부스터", releaseDate: "2010-09-18", price: "682", composition: [{ name: "아리에스 145D", quantity: "1개", target: "BEY-BB-89-ARIES-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-90", series: "metal fight", releases: {
    kr: { no: "BB-90", name: "LED스코프라이트", sale: "일반 판매", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "LED스코프라이트", quantity: "1개", target: "TOOLS-LED-SIGHT" }] },
    jp: { no: "BB-90", name: "LED사이트", sale: "일반 판매", releaseDate: "2010-09-18", price: "1260", composition: [{ name: "LED사이트", quantity: "1개", target: "TOOLS-LED-SIGHT" }] }} },
  { id: "PRODUCT-ATTACK-BALANCE-PARTS-SET", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "어택&밸런스 부품 세트", sale: "한정 판매", kind: "", releaseDate: "2010-09-23", price: "525", composition: [{ name: "90 트랙", quantity: "1개", target: "TRACK-90" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "125 트랙", quantity: "1개", target: "TRACK-125" }, { name: "RF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-FLAT" }, { name: "SF 버텀", quantity: "1개", target: "BOTTOM-SEMI-FLAT" }, { name: "WF 버텀", quantity: "1개", target: "BOTTOM-WIDE-FLAT" }] }} },
  { id: "PRODUCT-STAMINA-DEFENSE-PARTS-SET", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "스태미나&디펜스 부품 세트", sale: "한정 판매", kind: "", releaseDate: "2010-09-23", price: "525", composition: [{ name: "135 트랙", quantity: "1개", target: "TRACK-135" }, { name: "145 트랙", quantity: "1개", target: "TRACK-145" }, { name: "ED145 트랙", quantity: "1개", target: "TRACK-ETERNAL-DEFENSE-145" }, { name: "D 버텀", quantity: "1개", target: "BOTTOM-DEFENSE" }, { name: "MS 버텀", quantity: "1개", target: "BOTTOM-METAL-SHARP" }, { name: "WD 버텀", quantity: "1개", target: "BOTTOM-WIDE-DEFENSE" }] }} },
  { id: "PRODUCT-BB-91", series: "metal fight", releases: {
    kr: { no: "BB-91", name: "레이 킬 100RSF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "레이 킬 100RSF", quantity: "1개", target: "BEY-BB-91-RAY-KEEL-100RSF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-91", name: "레이 길 100RSF", sale: "일반 판매", kind: "부스터", releaseDate: "2010-10-23", price: "787", composition: [{ name: "레이 길 100RSF", quantity: "1개", target: "BEY-BB-91-RAY-KEEL-100RSF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-92", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-92", name: "갤럭시 페가시스 W105R²F", sale: "일반 판매", kind: "부스터", releaseDate: "2010-10-23", price: "787", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-92-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-93", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-93", name: "레이 유니코르노 D125CS", sale: "일반 판매", kind: "부스터", releaseDate: "2010-10-23", price: "787", composition: [{ name: "레이 유니코르노 D125CS", quantity: "1개", target: "BEY-BB-93-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-94", series: "metal fight", releases: {
    kr: { no: "BB-94", name: "토네이도 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "49600", composition: [{ name: "토네이도 헤라클레오 105F", quantity: "1개", target: "BEY-BB-94-TORNADO-HERCULEO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "토네이도 베이스타디움", quantity: "1개", target: "TOOLS-TORNADO-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-94", name: "토네이도 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2010-10-23", price: "5775", composition: [{ name: "토네이도 헤라클레오 105F", quantity: "1개", target: "BEY-BB-94-TORNADO-HERCULEO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "토네이도 베이스타디움", quantity: "1개", target: "TOOLS-TORNADO-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-DIVINE-CHIMERA-TR145FB", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "디바인 키메라 TR145FB", sale: "한정 배포", kind: "", releaseDate: "2010-11-02", price: "", composition: [{ name: "디바인 키메라 TR145FB", quantity: "1개", target: "BEY-DIVINE-CHIMERA-TR145FB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-KR-GALAXY-STARGAZER-SET", series: "metal fight", releases: {
    kr: { no: "", name: "갤럭시 스타게이저 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-72-AQUARIO-105F" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "배틀블레이더즈 툴박스", quantity: "1개", target: "TOOLS-BATTLE-BLADERS-TOOLBOX" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-BEY-CHARACTER-CUSTOM-SET", series: "metal fight", releases: {
    kr: { no: "", name: "베이캐릭터 커스텀 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "39200", composition: [{ name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "레이 킬 100RSF", quantity: "1개", target: "BEY-BB-91-RAY-KEEL-100RSF" }, { name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "그라비티 손목밴드", quantity: "1켤레", target: "TOOLS-GRAVITY-WRISTBAND" }, { name: "트리플형 베이스타디움", quantity: "1개", target: "TOOLS-TRIPLE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-GOLDEN-BLADERS-DX-SET", series: "metal fight", releases: {
    kr: { no: "", name: "골든블레이더즈 DX세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "49600", composition: [{ name: "레이 유니콘 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "런처러버", quantity: "3개", target: "TOOLS-LAUNCHER-RUBBER" }, { name: "배틀블레이더즈 툴박스", quantity: "1개", target: "TOOLS-BATTLE-BLADERS-TOOLBOX" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-REVERSE-DRAGON-ATTACK-SET", series: "metal fight", releases: {
    kr: { no: "", name: "리버스 드래곤 어택 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "43200", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "메테오 엘드라고 LW105LF", quantity: "1개", target: "BEY-BB-88-METEO-L-DRAGO-LW105LF" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "LED스코프라이트", quantity: "1개", target: "TOOLS-LED-SIGHT" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-95", series: "metal fight", releases: {
    kr: { no: "BB-95", name: "플레임 픽시스 230WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "9600", composition: [{ name: "플레임 픽시스 230WD", quantity: "1개", target: "BEY-BB-95-FLAME-BYXIS-230WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-95", name: "플레임 빅시스 230WD", sale: "일반 판매", kind: "부스터", releaseDate: "2010-11-20", price: "787", composition: [{ name: "플레임 빅시스 230WD", quantity: "1개", target: "BEY-BB-95-FLAME-BYXIS-230WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-96", series: "metal fight", releases: {
    kr: { no: "BB-96", name: "베이블레이드 슈퍼 덱", sale: "일반 판매", kind: "세트", releaseDate: "2011-02-01", price: "22400", composition: [{ name: "페가시스 85RF", quantity: "1개", target: "BEY-BB-96-PEGASIS-85RF" }, { name: "리브라 100D", quantity: "1개", target: "BEY-BB-96-LIBRA-100D" }, { name: "번 캔서 90WD", quantity: "1개", target: "BEY-BB-96-BURN-CANCER-90WD" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] },
    jp: { no: "BB-96", name: "베이블레이드 슈퍼 덱", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-20", price: "2415", composition: [{ name: "페가시스 85RF", quantity: "1개", target: "BEY-BB-96-PEGASIS-85RF" }, { name: "리브라 100D", quantity: "1개", target: "BEY-BB-96-LIBRA-100D" }, { name: "번 캔서 90WD", quantity: "1개", target: "BEY-BB-96-BURN-CANCER-90WD" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-97", series: "metal fight", releases: {
    kr: { no: "BB-97", name: "스페셜 커스텀 세트 페르세우스 Ver.", sale: "일반 판매", kind: "세트", releaseDate: "2011-02-01", price: "39800", composition: [{ name: "페르세우스 페이스", quantity: "3개", target: "FACE-PERSEUS" }, { name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "페르세우스 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS" }, { name: "페르세우스 어택 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS-ATTACK" }, { name: "페르세우스 스테미너 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS-STAMINA" }, { name: "그라비티 메탈휠", quantity: "2개", target: "METALWHEEL-GRAVITY" }, { name: "GB145 트랙", quantity: "1개", target: "TRACK-GRAVITY-BALL-145" }, { name: "AD145 트랙", quantity: "1개", target: "TRACK-ARMOR-DEFENSE-145" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "130 트랙", quantity: "1개", target: "TRACK-130" }, { name: "S 버텀", quantity: "1개", target: "BOTTOM-SHARP" }, { name: "WD 버텀", quantity: "1개", target: "BOTTOM-WIDE-DEFENSE" }, { name: "F 버텀", quantity: "1개", target: "BOTTOM-FLAT" }, { name: "RS 버텀", quantity: "1개", target: "BOTTOM-RUBBER-SHARP" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-97", name: "베이블레이드 궁극 개조 세트 페르세우스 Ver.", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-20", price: "3780", composition: [{ name: "페르세우스 페이스", quantity: "3개", target: "FACE-PERSEUS" }, { name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "페르세우스 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS" }, { name: "페르세우스 어택 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS-ATTACK" }, { name: "페르세우스 스테미너 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS-STAMINA" }, { name: "그라비티 메탈휠", quantity: "2개", target: "METALWHEEL-GRAVITY" }, { name: "GB145 트랙", quantity: "1개", target: "TRACK-GRAVITY-BALL-145" }, { name: "AD145 트랙", quantity: "1개", target: "TRACK-ARMOR-DEFENSE-145" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "130 트랙", quantity: "1개", target: "TRACK-130" }, { name: "S 버텀", quantity: "1개", target: "BOTTOM-SHARP" }, { name: "WD 버텀", quantity: "1개", target: "BOTTOM-WIDE-DEFENSE" }, { name: "F 버텀", quantity: "1개", target: "BOTTOM-FLAT" }, { name: "RS 버텀", quantity: "1개", target: "BOTTOM-RUBBER-SHARP" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-BB-98", series: "metal fight", releases: {
    kr: { no: "BB-98", name: "스페셜 커스텀 세트 엘드라고 Ver.", sale: "일반 판매", kind: "세트", releaseDate: "2011-02-01", price: "39800", composition: [{ name: "엘드라고 페이스", quantity: "3개", target: "FACE-L-DRAGO" }, { name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "엘드라고Ⅱ 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II" }, { name: "엘드라고Ⅱ 어썰트 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II-ASSAULT" }, { name: "엘드라고Ⅱ 러시 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II-RUSH" }, { name: "메테오 메탈휠", quantity: "2개", target: "METALWHEEL-METEO" }, { name: "LW105 트랙", quantity: "1개", target: "TRACK-LEFT-WING-105" }, { name: "DF105 트랙", quantity: "1개", target: "TRACK-DOWN-FORCE-105" }, { name: "125 트랙", quantity: "1개", target: "TRACK-125" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "85 트랙", quantity: "1개", target: "TRACK-85" }, { name: "LF 버텀", quantity: "1개", target: "BOTTOM-LEFT-FLAT" }, { name: "LRF 버텀", quantity: "1개", target: "BOTTOM-LEFT-RUBBER-FLAT" }, { name: "SF 버텀", quantity: "1개", target: "BOTTOM-SEMI-FLAT" }, { name: "RF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-FLAT" }, { name: "XF 버텀", quantity: "1개", target: "BOTTOM-EXTREME-FLAT" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-98", name: "베이블레이드 궁극 개조 세트 엘드라고 Ver.", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-20", price: "3780", composition: [{ name: "엘드라고 페이스", quantity: "3개", target: "FACE-L-DRAGO" }, { name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "엘드라고Ⅱ 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II" }, { name: "엘드라고Ⅱ 어썰트 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II-ASSAULT" }, { name: "엘드라고Ⅱ 러시 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II-RUSH" }, { name: "메테오 메탈휠", quantity: "2개", target: "METALWHEEL-METEO" }, { name: "LW105 트랙", quantity: "1개", target: "TRACK-LEFT-WING-105" }, { name: "DF105 트랙", quantity: "1개", target: "TRACK-DOWN-FORCE-105" }, { name: "125 트랙", quantity: "1개", target: "TRACK-125" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "85 트랙", quantity: "1개", target: "TRACK-85" }, { name: "LF 버텀", quantity: "1개", target: "BOTTOM-LEFT-FLAT" }, { name: "LRF 버텀", quantity: "1개", target: "BOTTOM-LEFT-RUBBER-FLAT" }, { name: "SF 버텀", quantity: "1개", target: "BOTTOM-SEMI-FLAT" }, { name: "RF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-FLAT" }, { name: "XF 버텀", quantity: "1개", target: "BOTTOM-EXTREME-FLAT" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-BB-99", series: "metal fight", releases: {
    kr: { no: "BB-99", name: "헬 켈베로스 BD145DS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "12000", composition: [{ name: "헬 켈베로스 BD145DS", quantity: "1개", target: "BEY-BB-99-HELL-KERBECS-BD145DS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }]},
    jp: { no: "BB-99", name: "헬 케르벡스 BD145DS", sale: "일반 판매", kind: "스타터", releaseDate: "2010-12-28", price: "997", composition: [{ name: "헬 케르벡스 BD145DS", quantity: "1개", target: "BEY-BB-99-HELL-KERBECS-BD145DS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-99-1", series: "metal fight", releases: {
    kr: { no: "BB-99-1", name: "헬 켈베로스 BD145DS", sale: "일반 판매", kind: "부스터", releaseDate: "2011-06-14", price: "9600", composition: [{ name: "헬 켈베로스 BD145DS", quantity: "1개", target: "BEY-BB-99-HELL-KERBECS-BD145DS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-100", series: "metal fight", releases: {
    kr: { no: "BB-100", name: "키라 비폴 UW145EWD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "9600", composition: [{ name: "키라 비폴 UW145EWD", quantity: "1개", target: "BEY-BB-100-KILLER-BEAFOWL-UW145EWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-100", name: "랜덤부스터 Vol.6 키라 비폴", sale: "일반 판매", kind: "부스터", releaseDate: "2010-12-28", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-100-KILLER-BEAFOWL-UW145EWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }
  }, lineupPool: ["BEY-BB-100-KILLER-BEAFOWL-UW145EWD", "BEY-BB-100-GALAXY-CANCER-D125HF", "BEY-BB-100-BURN-ESCOLPIO-100RF", "BEY-BB-100-FLAME-GEMIOS-105CS", "BEY-BB-100-KILLER-ESCOLPIO-100D", "BEY-BB-100-GALAXY-SAGITTARIO-145CS", "BEY-BB-100-FLAME-CANCER-D125RF", "BEY-BB-100-BURN-SAGITTARIO-105HF"] },
  { id: "PRODUCT-BB-101", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-101", name: "그립서포트", sale: "일반 판매", releaseDate: "2010-12-28", price: "367", composition: [{ name: "그립서포트", quantity: "1개", target: "TOOLS-GRIP-SUPPORT" }] }} },
  { id: "PRODUCT-BB-102", series: "metal fight", releases: {
    kr: { no: "BB-102", name: "스크류 카프리콘 90MF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "9600", composition: [{ name: "스크류 카프리콘 90MF", quantity: "1개", target: "BEY-BB-102-SCREW-CAPRICORNE-90MF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-102", name: "스크류 카프리코네 90MF", sale: "일반 판매", kind: "부스터", releaseDate: "2011-01-22", price: "787", composition: [{ name: "스크류 카프리코네 90MF", quantity: "1개", target: "BEY-BB-102-SCREW-CAPRICORNE-90MF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-103", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-103", name: "스나이프런처", sale: "일반 판매", releaseDate: "2011-01-22", price: "472", composition: [{ name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }] }} },
  { id: "PRODUCT-MERCURY-ANUBIUS-85XF-BRAVE", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "머큐리 아누비우스 85XF 브레이브 Ver.", sale: "한정 배포", kind: "", releaseDate: "2011-02-15", price: "", composition: [{ name: "머큐리 아누비우스 85XF 브레이브 Ver.", quantity: "1개", target: "BEY-MERCURY-ANUBIUS-85XF-BRAVE" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-104", series: "metal fight", releases: {
    kr: { no: "BB-104", name: "바셀트 호로지움 145WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "12000", composition: [{ name: "바셀트 호로지움 145WD", quantity: "1개", target: "BEY-BB-104-BASALT-HOROGIUM-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }]},
    jp: { no: "BB-104", name: "바살트 호로기움 145WD", sale: "일반 판매", kind: "스타터", releaseDate: "2011-02-26", price: "945", composition: [{ name: "바살트 호로기움 145WD", quantity: "1개", target: "BEY-BB-104-BASALT-HOROGIUM-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-KR-BATTLE-BLADERS-TOOLBOX", series: "metal fight", releases: {
    kr: { no: "", name: "배틀블레이더즈 툴박스", sale: "일반 판매", releaseDate: "2011-02-01", price: "12000", composition: [{ name: "배틀블레이더즈 툴박스", quantity: "1개", target: "TOOLS-BATTLE-BLADERS-TOOLBOX" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-STARBREAKER-DX-SET", series: "metal fight", releases: {
    kr: { no: "", name: "스타브레이커 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-04-11", price: "45000", composition: [{ name: "헬 켈베로스 BD145DS", quantity: "1개", target: "BEY-BB-99-HELL-KERBECS-BD145DS" }, { name: "바셀트 호로지움 145WD", quantity: "1개", target: "BEY-BB-104-BASALT-HOROGIUM-145WD" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "그립서포트", quantity: "1개", target: "TOOLS-GRIP-SUPPORT" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-105", series: "metal fight", releases: {
    kr: { no: "BB-105", name: "빅뱅 페가시스 F:D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "13600", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-105", name: "빅뱅 페가시스 F:D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-03-26", price: "1260", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-106", series: "metal fight", releases: {
    kr: { no: "BB-106", name: "팡 레온 130W²D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "팡 레온 130W²D", quantity: "1개", target: "BEY-BB-106-FANG-LEONE-130W2D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-106", name: "팡 레오네 130W²D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-03-26", price: "945", composition: [{ name: "팡 레오네 130W²D", quantity: "1개", target: "BEY-BB-106-FANG-LEONE-130W2D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-107", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-107", name: "빅뱅 페가시스 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-03-26", price: "3990", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-107-BIG-BANG-PEGASIS-FD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "85 트랙", quantity: "1개", target: "TRACK-85" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "XF 버텀", quantity: "1개", target: "BOTTOM-EXTREME-FLAT" }, { name: "RF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-FLAT" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }, { name: "베이포인트카드", quantity: "1개", target: "TOOLS-BEYPOINT-CARD" }, { name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVELS-2011", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨1~10", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "레벨별 교환 상품", quantity: "1개", target: "PRODUCT-BEYPOINT-LEVEL-2011-1" }] }}, lineupTitle: "교환 상품", lineupEntryMode: "lineup-first", lineupPool: ["PRODUCT-BEYPOINT-LEVEL-2011-1", "PRODUCT-BEYPOINT-LEVEL-2011-2", "PRODUCT-BEYPOINT-LEVEL-2011-3", "PRODUCT-BEYPOINT-LEVEL-2011-4", "PRODUCT-BEYPOINT-LEVEL-2011-5", "PRODUCT-BEYPOINT-LEVEL-2011-6", "PRODUCT-BEYPOINT-LEVEL-2011-7", "PRODUCT-BEYPOINT-LEVEL-2011-8", "PRODUCT-BEYPOINT-LEVEL-2011-9", "PRODUCT-BEYPOINT-LEVEL-2011-10"] },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-1", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨1", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-2", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨2", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "페가시스 음각 페이스", quantity: "1개", target: "FACE-PEGASIS-ENGRAVED" }, { name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-3", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨3", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-4", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨4", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-5", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨5", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "브론즈 랭크 페이스", quantity: "1개", target: "FACE-BRONZE-RANK" }, { name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-6", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨6", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-7", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨7", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "실버 랭크 페이스", quantity: "1개", target: "FACE-SILVER-RANK" }, { name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-8", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨8", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-9", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨9", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BEYPOINT-LEVEL-2011-10", series: "metal fight", lineupOnly: true, releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "베이포인트 레벨10", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "머큐리 아누비우스 85XF 레전드 Ver.", quantity: "1개", target: "BEY-MERCURY-ANUBIUS-85XF-LEGEND" }, { name: "골드 랭크 페이스", quantity: "1개", target: "FACE-GOLD-RANK" }, { name: "베이포인트 레벨 스티커", quantity: "1장", target: "TOOLS-BEYPOINT-LEVEL-STICKER" }] }} },
  { id: "PRODUCT-BB-108", series: "metal fight", releases: {
    kr: { no: "BB-108", name: "엘드라고 디스트로이 F:S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "13600", composition: [{ name: "엘드라고 디스트로이 F:S", quantity: "1개", target: "BEY-BB-108-L-DRAGO-DESTROY-FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2L", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2L" }]},
    jp: { no: "BB-108", name: "엘드라고 디스트로이 F:S", sale: "일반 판매", kind: "스타터", releaseDate: "2011-04-23", price: "1260", composition: [{ name: "엘드라고 디스트로이 F:S", quantity: "1개", target: "BEY-BB-108-L-DRAGO-DESTROY-FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2L", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2L" }]}} },
  { id: "PRODUCT-L-DRAGO-DESTROY-LW105LRF", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "엘드라고 디스트로이 LW105LRF", sale: "한정 배포", kind: "", releaseDate: "2011-06-15", price: "", composition: [{ name: "엘드라고 디스트로이 LW105LRF", quantity: "1개", target: "BEY-L-DRAGO-DESTROY-LW105LRF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-109", series: "metal fight", releases: {
    kr: { no: "BB-109", name: "비트 링크스 TH170WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "비트 링크스 TH170WD", quantity: "1개", target: "BEY-BB-109-BEAT-LYNX-TH170WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-109", name: "랜덤부스터 Vol.7 비트 링크스", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-23", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-109-BEAT-LYNX-TH170WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: ["BEY-BB-109-BEAT-LYNX-TH170WD", "BEY-BB-109-GRAVITY-PERSEUS-BD145XF", "BEY-BB-109-HELL-HORUSEUS-85RS", "BEY-BB-109-VULCAN-HERCULEO-130DS", "BEY-BB-109-GRAVITY-PERSEUS-85DS", "BEY-BB-109-TORNADO-HORUSEUS-130RSF", "BEY-BB-109-HELL-HERCULEO-100XF", "BEY-BB-109-VULCAN-HOROGIUM-BD145RS"] },
  { id: "PRODUCT-BB-110", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-110", name: "베이런처(코스모블루)", sale: "일반 판매", releaseDate: "2011-04-23", price: "525", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-111", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-111", name: "베이런처(아미그린)", sale: "일반 판매", releaseDate: "2011-04-23", price: "525", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-112", series: "metal fight", releases: {
    kr: { no: "BB-112", name: "카라비나그립(레드)", sale: "일반 판매", releaseDate: "2011-10-28", price: "6400", composition: [{ name: "카라비나그립", quantity: "1개", target: "TOOLS-CARABINER-GRIP" }] },
    jp: { no: "BB-112", name: "카라비나그립(마스레드)", sale: "일반 판매", releaseDate: "2011-05-21", price: "630", composition: [{ name: "카라비나그립", quantity: "1개", target: "TOOLS-CARABINER-GRIP" }] }} },
  { id: "PRODUCT-BB-113", series: "metal fight", releases: {
    kr: { no: "BB-113", name: "사이즈 크로노스 T125EDS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "사이즈 크로노스 T125EDS", quantity: "1개", target: "BEY-BB-113-SCYTHE-KRONOS-T125EDS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-113", name: "사이즈 크로노스 T125EDS", sale: "일반 판매", kind: "스타터", releaseDate: "2011-06-18", price: "945", composition: [{ name: "사이즈 크로노스 T125EDS", quantity: "1개", target: "BEY-BB-113-SCYTHE-KRONOS-T125EDS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-114", series: "metal fight", releases: {
    kr: { no: "BB-114", name: "베리아레스 D:D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "13600", composition: [{ name: "베리아레스 D:D", quantity: "1개", target: "BEY-BB-114-VARIARES-DD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처LR", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-LR" }]},
    jp: { no: "BB-114", name: "바리아레스 D:D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-07-16", price: "1260", composition: [{ name: "바리아레스 D:D", quantity: "1개", target: "BEY-BB-114-VARIARES-DD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처LR", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-LR" }]}} },
  { id: "PRODUCT-BB-115", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-115", name: "베이런처LR(마스레드)", sale: "일반 판매", releaseDate: "2011-07-16", price: "735", composition: [{ name: "베이런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] }} },
  { id: "PRODUCT-BB-116", series: "metal fight", releases: {
    kr: { no: "BB-116", name: "제이드 쥬피터 S130RB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "제이드 쥬피터 S130RB", quantity: "1개", target: "BEY-BB-116-JADE-JUPITER-S130RB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-116", name: "랜덤부스터 Vol.8 제이드 쥬피터", sale: "일반 판매", kind: "부스터", releaseDate: "2011-08-06", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-116-JADE-JUPITER-S130RB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: [ "BEY-BB-116-JADE-JUPITER-S130RB", "BEY-BB-116-FORBIDDEN-EONIS-ED145FB", "BEY-BB-116-DIVINE-FOX-90W2D", "BEY-BB-116-SCREW-LYRA-ED145MF", "BEY-BB-116-FORBIDDEN-EONIS-130D", "BEY-BB-116-DIVINE-CROWN-TR145D", "BEY-BB-116-SCREW-FOX-TR145W2D", "BEY-BB-116-HELL-CROWN-130FB"] },
  { id: "PRODUCT-BB-117", series: "metal fight", releases: {
    kr: { no: "BB-117", name: "넘버원 블레이더 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "29600", composition: [{ name: "브릿츠 유니콘 100RSF", quantity: "1개", target: "BEY-BB-117-BLITZ-UNICORNO-100RSF" }, { name: "나이트메어 렉스 UW145EWD", quantity: "1개", target: "BEY-BB-117-NIGHTMARE-REX-UW145EWD" }, { name: "바셀트 호로지움 130RS", quantity: "1개", target: "BEY-BB-117-BASALT-HOROGIUM-130RS" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] },
    jp: { no: "BB-117", name: "최강 블레이더 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-08-06", price: "2625", composition: [{ name: "브릿츠 유니코르노 100RSF", quantity: "1개", target: "BEY-BB-117-BLITZ-UNICORNO-100RSF" }, { name: "나이트메어 렉스 UW145EWD", quantity: "1개", target: "BEY-BB-117-NIGHTMARE-REX-UW145EWD" }, { name: "바살트 호로기움 130RS", quantity: "1개", target: "BEY-BB-117-BASALT-HOROGIUM-130RS" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] }} },
  { id: "PRODUCT-BB-118", series: "metal fight", releases: {
    kr: { no: "BB-118", name: "팬텀 오리온 B:D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "팬텀 오리온 B:D", quantity: "1개", target: "BEY-BB-118-PHANTOM-ORION-BD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-118", name: "팬텀 오리온 B:D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-09-17", price: "1470", composition: [{ name: "팬텀 오리온 B:D", quantity: "1개", target: "BEY-BB-118-PHANTOM-ORION-BD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-FANG-LEONE-W105R2F", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "팡 레오네 W105R²F", sale: "한정 판매", kind: "부스터", releaseDate: "2011-09-17", price: "840", composition: [{ name: "팡 레오네 W105R²F", quantity: "1개", target: "BEY-FANG-LEONE-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BIG-BANG-PEGASIS-CUSTOM-PARTS-SET", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "빅뱅 페가시스 개조 부품 세트", sale: "한정 판매", kind: "", releaseDate: "2011-09-17", price: "525", composition: [{ name: "100 트랙", quantity: "1개", target: "TRACK-100" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "130 트랙", quantity: "1개", target: "TRACK-130" }, { name: "RF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-FLAT" }, { name: "RSF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-SEMI-FLAT" }, { name: "RS 버텀", quantity: "1개", target: "BOTTOM-RUBBER-SHARP" }] }} },
  { id: "PRODUCT-PHANTOM-ORION-CUSTOM-PARTS-SET", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "팬텀 오리온 개조 부품 세트", sale: "한정 판매", kind: "", releaseDate: "2011-09-17", price: "525", composition: [{ name: "85 트랙", quantity: "1개", target: "TRACK-85" }, { name: "230 트랙", quantity: "1개", target: "TRACK-230" }, { name: "CH120 트랙", quantity: "1개", target: "TRACK-CHANGE-HEIGHT-120" }, { name: "XF 버텀", quantity: "1개", target: "BOTTOM-EXTREME-FLAT" }, { name: "SF 버텀", quantity: "1개", target: "BOTTOM-SEMI-FLAT" }, { name: "WD 버텀", quantity: "1개", target: "BOTTOM-WIDE-DEFENSE" }] }} },
  { id: "PRODUCT-PHANTOM-ORION-BD-SKELETON", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "팬텀 오리온 B:D 스켈레톤 Ver.", sale: "한정 배포", kind: "", releaseDate: "2011-10-15", price: "", composition: [{ name: "팬텀 오리온 B:D 스켈레톤 Ver.", quantity: "1개", target: "BEY-BB-118-PHANTOM-ORION-BD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-WING-PEGASIS-S130RB", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "윙 페가시스 S130RB", sale: "한정 판매", kind: "부스터", releaseDate: "2012-01-15", price: "840", composition: [{ name: "윙 페가시스 S130RB", quantity: "1개", target: "BEY-WING-PEGASIS-S130RB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-OMEGA-DRAGONIS-85XF", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "오메가 드라고니스 85XF", sale: "한정 배포", kind: "", releaseDate: "2012-01-20", price: "", composition: [{ name: "오메가 드라고니스 85XF", quantity: "1개", target: "BEY-OMEGA-DRAGONIS-85XF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-KR-PEGASIS-LIMITED-EDITION", series: "metal fight", releases: {
    kr: { no: "", name: "페가시스 리미티드 에디션", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "32800", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "스크류 카프리콘 90MF", quantity: "1개", target: "BEY-BB-102-SCREW-CAPRICORNE-90MF" }, { name: "베리아레스 D:D", quantity: "1개", target: "BEY-BB-114-VARIARES-DD" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LDRAGO-LIMITED-EDITION", series: "metal fight", releases: {
    kr: { no: "", name: "엘드라고 리미티드 에디션", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "31200", composition: [{ name: "엘드라고 디스트로이 F:S", quantity: "1개", target: "BEY-BB-108-L-DRAGO-DESTROY-FS" }, { name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "스크류 카프리콘 90MF", quantity: "1개", target: "BEY-BB-102-SCREW-CAPRICORNE-90MF" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-ARES-LIMITED-EDITION", series: "metal fight", releases: {
    kr: { no: "", name: "아레스 리미티드 에디션", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "32800", composition: [{ name: "베리아레스 D:D", quantity: "1개", target: "BEY-BB-114-VARIARES-DD" }, { name: "키라 비폴 UW145EWD", quantity: "1개", target: "BEY-BB-100-KILLER-BEAFOWL-UW145EWD" }, { name: "엘드라고 디스트로이 F:S", quantity: "1개", target: "BEY-BB-108-L-DRAGO-DESTROY-FS" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LEGENDS-BLADE-DX-SET", series: "metal fight", releases: {
    kr: { no: "", name: "레전즈블레이드 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "34800", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "팡 레온 130W²D", quantity: "1개", target: "BEY-BB-106-FANG-LEONE-130W2D" }, { name: "바셀트 호로지움 145WD", quantity: "1개", target: "BEY-BB-104-BASALT-HOROGIUM-145WD" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }, { name: "파워런처", quantity: "2개", target: "TOOLS-POWER-LAUNCHER" }, { name: "러시형 베이스타디움", quantity: "1개", target: "TOOLS-RUSH-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBC-01", series: "metal fight", releases: {
    kr: { no: "BBC-01", name: "슈퍼컨트롤 베이블레이드 빅뱅 페가시스", sale: "일반 판매", releaseDate: "2011-10-28", price: "32000", composition: [{ name: "빅뱅 페가시스", quantity: "1개", target: "BEY-BBC-01-SUPER-CONTROL-BIG-BANG-PEGASIS" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] },
    jp: { no: "BBC-01", name: "슈퍼컨트롤 베이블레이드 빅뱅 페가시스", sale: "일반 판매", releaseDate: "2011-07-16", price: "3885", composition: [{ name: "빅뱅 페가시스", quantity: "1개", target: "BEY-BBC-01-SUPER-CONTROL-BIG-BANG-PEGASIS" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] }} },
  { id: "PRODUCT-BBC-02", series: "metal fight", releases: {
    kr: { no: "BBC-02", name: "슈퍼컨트롤 베이블레이드 엘드라고 디스트로이", sale: "일반 판매", releaseDate: "2011-10-28", price: "32000", composition: [{ name: "엘드라고 디스트로이", quantity: "1개", target: "BEY-BBC-02-SUPER-CONTROL-L-DRAGO-DESTROY" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] },
    jp: { no: "BBC-02", name: "슈퍼컨트롤 베이블레이드 엘드라고 디스트로이", sale: "일반 판매", releaseDate: "2011-07-16", price: "3885", composition: [{ name: "엘드라고 디스트로이", quantity: "1개", target: "BEY-BBC-02-SUPER-CONTROL-L-DRAGO-DESTROY" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] }} },
  { id: "PRODUCT-BBC-03", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBC-03", name: "슈퍼컨트롤 베이블레이드 전용 스타디움", sale: "일반 판매", releaseDate: "2011-07-16", price: "2100", composition: [{ name: "슈퍼컨트롤 베이블레이드 전용 스타디움", quantity: "1개", target: "TOOLS-RUSH-BEYSTADIUM" }, { name: "오버펜스", quantity: "9장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BBC-04", series: "metal fight", releases: {
    kr: { no: "BBC-04", name: "슈퍼컨트롤 베이블레이드 베리아레스", sale: "일반 판매", releaseDate: "2011-12-04", price: "32000", composition: [{ name: "베리아레스", quantity: "1개", target: "BEY-BBC-04-SUPER-CONTROL-VARIARES" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] },
    jp: { no: "BBC-04", name: "슈퍼컨트롤 베이블레이드 바리아레스", sale: "일반 판매", releaseDate: "2011-11-17", price: "3885", composition: [{ name: "바리아레스", quantity: "1개", target: "BEY-BBC-04-SUPER-CONTROL-VARIARES" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] }} },
  { id: "PRODUCT-BBC-05", series: "metal fight", releases: {
    kr: { no: "BBC-05", name: "슈퍼컨트롤 베이블레이드 팬텀 오리온", sale: "일반 판매", releaseDate: "2011-12-04", price: "32000", composition: [{ name: "팬텀 오리온", quantity: "1개", target: "BEY-BBC-05-SUPER-CONTROL-PHANTOM-ORION" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] },
    jp: { no: "BBC-05", name: "슈퍼컨트롤 베이블레이드 팬텀 오리온", sale: "일반 판매", releaseDate: "2011-11-17", price: "3885", composition: [{ name: "팬텀 오리온", quantity: "1개", target: "BEY-BBC-05-SUPER-CONTROL-PHANTOM-ORION" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-119", series: "metal fight", releases: {
    kr: { no: "BB-119", name: "데쓰 케찰코아틀 125RDF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-12-04", price: "12000", composition: [{ name: "데쓰 케찰코아틀 125RDF", quantity: "1개", target: "BEY-BB-119-DEATH-QUETZALCOATL-125RDF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-119", name: "데스 케찰코아틀 125RDF", sale: "일반 판매", kind: "스타터", releaseDate: "2011-10-22", price: "997", composition: [{ name: "데스 케찰코아틀 125RDF", quantity: "1개", target: "BEY-BB-119-DEATH-QUETZALCOATL-125RDF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-120", series: "metal fight", releases: {
    kr: { no: "BB-120", name: "얼티메이트 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2011-12-04", price: "56000", composition: [{ name: "프로토타입 네메시스", quantity: "1개", target: "BEY-BB-120-PROTOTYPE-NEMESIS" }, { name: "얼티메이트 베이스타디움", quantity: "1개", target: "TOOLS-ULTIMATE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-120", name: "얼티메이트 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-22", price: "6825", composition: [{ name: "프로토타입 네메시스", quantity: "1개", target: "BEY-BB-120-PROTOTYPE-NEMESIS" }, { name: "얼티메이트 베이스타디움", quantity: "1개", target: "TOOLS-ULTIMATE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BB-121", series: "metal fight", releases: {
    kr: { no: "BB-121", name: "베이블레이드 얼티메이트 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-01-19", price: "39800", composition: [{ name: "듀오 우라누스 230WD", quantity: "1개", target: "BEY-BB-121-DUO-URANUS-230WD" }, { name: "엘드라고 가디언 S130MB", quantity: "1개", target: "BEY-BB-121-L-DRAGO-GUARDIAN-S130MB" }, { name: "윙 페가시스 90WF", quantity: "1개", target: "BEY-BB-121-WING-PEGASIS-90WF" }, { name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "DF105 트랙", quantity: "1개", target: "TRACK-DOWN-FORCE-105" }, { name: "LRF 버텀", quantity: "1개", target: "BOTTOM-LEFT-RUBBER-FLAT" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] },
    jp: { no: "BB-121", name: "베이블레이드 궁극 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-11-17", price: "3780", composition: [{ name: "듀오 우라누스 230WD", quantity: "1개", target: "BEY-BB-121-DUO-URANUS-230WD" }, { name: "엘드라고 가디언 S130MB", quantity: "1개", target: "BEY-BB-121-L-DRAGO-GUARDIAN-S130MB" }, { name: "윙 페가시스 90WF", quantity: "1개", target: "BEY-BB-121-WING-PEGASIS-90WF" }, { name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "DF105 트랙", quantity: "1개", target: "TRACK-DOWN-FORCE-105" }, { name: "LRF 버텀", quantity: "1개", target: "BOTTOM-LEFT-RUBBER-FLAT" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] }} },
  { id: "PRODUCT-BB-122", series: "metal fight", releases: {
    kr: { no: "BB-122", name: "디아블로 네메시스 X:D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-02-01", price: "13600", composition: [{ name: "디아블로 네메시스 X:D", quantity: "1개", target: "BEY-BB-122-DIABLO-NEMESIS-XD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-122", name: "디아블로 네메시스 X:D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-12-18", price: "1470", composition: [{ name: "디아블로 네메시스 X:D", quantity: "1개", target: "BEY-BB-122-DIABLO-NEMESIS-XD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-123", series: "metal fight", releases: {
    kr: { no: "BB-123", name: "퓨전 하데스 AD145SWD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-02-01", price: "12000", composition: [{ name: "퓨전 하데스 AD145SWD", quantity: "1개", target: "BEY-BB-123-FUSION-HADES-AD145SWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-123", name: "랜덤부스터 Vol.9 퓨전 하데스", sale: "일반 판매", kind: "부스터", releaseDate: "2011-12-18", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-123-FUSION-HADES-AD145SWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: [ "BEY-BB-123-FUSION-HADES-AD145SWD", "BEY-BB-123-HELL-BEELZEB-125XF", "BEY-BB-123-CLOUD-LYRA-85SF", "BEY-BB-123-CLOUD-GEMIOS-T125SF", "BEY-BB-123-CRASH-ESCOLPIO-125JB", "BEY-BB-123-BAKUSHIN-BEELZEB-T125XF", "BEY-BB-123-METEO-L-DRAGO-85LF-RUSH", "BEY-BB-123-METEO-L-DRAGO-LW105JB-ASSAULT"] },
  { id: "PRODUCT-BB-124", series: "metal fight", releases: {
    kr: { no: "BB-124", name: "크라이스 시그너스 145WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-03-04", price: "12000", composition: [{ name: "크라이스 시그너스 145WD", quantity: "1개", target: "BEY-BB-124-KREIS-CYGNUS-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-124", name: "크라이스 시그너스 145WD", sale: "일반 판매", kind: "스타터", releaseDate: "2012-01-21", price: "997", composition: [{ name: "크라이스 시그너스 145WD", quantity: "1개", target: "BEY-BB-124-KREIS-CYGNUS-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-125", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-125", name: "라이트런처LR(퍼플)", sale: "일반 판매", releaseDate: "2012-01-21", price: "682", composition: [{ name: "라이트런처LR", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-LR" }] }} },
  { id: "PRODUCT-BB-126", series: "metal fight", releases: {
    kr: { no: "BB-126", name: "플래시 사지타리오 230WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-03-04", price: "12000", composition: [{ name: "플래시 사지타리오 230WD", quantity: "1개", target: "BEY-BB-126-FLASH-SAGITTARIO-230WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-126", name: "플래시 사지타리오 230WD", sale: "일반 판매", kind: "스타터", releaseDate: "2012-01-21", price: "997", composition: [{ name: "플래시 사지타리오 230WD", quantity: "1개", target: "BEY-BB-126-FLASH-SAGITTARIO-230WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BBG-01", series: "metal fight", releases: {
    kr: { no: "BBG-01", name: "워리어스 이프레이드 W145CF", sale: "일반 판매", releaseDate: "2012-09-12", price: "12000", composition: [{ name: "워리어스 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-01-WARRIORS-IFRAID-W145CF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }] },
    jp: { no: "BBG-01", name: "사무라이 이프레이드 W145CF", sale: "일반 판매", kind: "스타터", releaseDate: "2012-03-31", price: "997", composition: [{ name: "사무라이 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-01-WARRIORS-IFRAID-W145CF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-02", series: "metal fight", releases: {
    kr: { no: "BBG-02", name: "시노비 사라만다 SW145SD", sale: "일반 판매", kind: "부스터", releaseDate: "2012-09-12", price: "8400", composition: [{ name: "시노비 사라만다 SW145SD", quantity: "1개", target: "BEY-BBG-02-SHINOBI-SARAMANDA-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { no: "BBG-02", name: "시노비 사라만다 SW145SD", sale: "일반 판매", kind: "싱크롬부스터", releaseDate: "2012-03-31", price: "892", composition: [{ name: "시노비 사라만다 SW145SD", quantity: "1개", target: "BEY-BBG-02-SHINOBI-SARAMANDA-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BBG-02-KR-STARTER", series: "metal fight", releases: {
    kr: { no: "BBG-02", name: "시노비 사라만다 SW145SD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "10400", composition: [{ name: "시노비 사라만다 SW145SD", quantity: "1개", target: "BEY-BBG-02-SHINOBI-SARAMANDA-SW145SD" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBG-03", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-03", name: "베이블레이드 스타트 대시 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-03-31", price: "2625", composition: [{ name: "사무라이 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-03-WARRIORS-IFRAID-W145CF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }, { name: "ZEROG 스타디움 어택타입", quantity: "1개", target: "TOOLS-ZEROG-ATTACK-BEYSTADIUM" }] }} },
  { id: "PRODUCT-BBG-04", series: "metal fight", releases: {
    kr: { no: "BBG-04", name: "제로G 공격형 스타디움", sale: "일반 판매", releaseDate: "2012-09-12", price: "17600", composition: [{ name: "제로G 공격형 스타디움", quantity: "1개", target: "TOOLS-ZEROG-ATTACK-BEYSTADIUM" }] },
    jp: { no: "BBG-04", name: "ZEROG 스타디움 어택타입", sale: "일반 판매", releaseDate: "2012-03-31", price: "2100", composition: [{ name: "ZEROG 스타디움 어택타입", quantity: "1개", target: "TOOLS-ZEROG-ATTACK-BEYSTADIUM" }] }} },
  { id: "PRODUCT-BBG-05", series: "metal fight", releases: {
    kr: { no: "BBG-05", name: "제로G 라이트런처", sale: "일반 판매", releaseDate: "2012-09-12", price: "9600", composition: [{ name: "제로G 라이트런처", quantity: "1개", target: "TOOLS-ZEROG-LIGHT-LAUNCHER" }] },
    jp: { no: "BBG-05", name: "ZEROG 라이트런처", sale: "일반 판매", releaseDate: "2012-03-31", price: "630", composition: [{ name: "ZEROG 라이트런처", quantity: "1개", target: "TOOLS-ZEROG-LIGHT-LAUNCHER" }] }} },
  { id: "PRODUCT-BBG-06", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-06", name: "베이캐리어 ZEROG", sale: "일반 판매", releaseDate: "2012-03-31", price: "2100", composition: [{ name: "베이캐리어 ZEROG", quantity: "1개", target: "TOOLS-ZEROG-BEYCARRIER" }] }} },
  { id: "PRODUCT-BBG-07", series: "metal fight", releases: {
    kr: { no: "BBG-07", name: "제로G 런처그립", sale: "일반 판매", releaseDate: "2012-09-12", price: "9600", composition: [{ name: "제로G 런처그립", quantity: "1개", target: "TOOLS-ZEROG-LAUNCHER-GRIP" }] },
    jp: { no: "BBG-07", name: "ZEROG 런처그립", sale: "일반 판매", releaseDate: "2012-03-31", price: "525", composition: [{ name: "ZEROG 런처그립", quantity: "1개", target: "TOOLS-ZEROG-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-BBG-08", series: "metal fight", releases: {
    kr: { no: "BBG-08", name: "파이레츠 오로자 145D", sale: "일반 판매", kind: "부스터", releaseDate: "2012-09-12", price: "8400", composition: [{ name: "파이레츠 오로자 145D", quantity: "1개", target: "BEY-BBG-08-PIRATES-OROJYA-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { no: "BBG-08", name: "파이레츠 오로자 145D", sale: "일반 판매", kind: "싱크롬부스터", releaseDate: "2012-04-21", price: "892", composition: [{ name: "파이레츠 오로자 145D", quantity: "1개", target: "BEY-BBG-08-PIRATES-OROJYA-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BBG-08-KR-STARTER", series: "metal fight", releases: {
    kr: { no: "BBG-08", name: "파이레츠 오로자 145D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "10400", composition: [{ name: "파이레츠 오로자 145D", quantity: "1개", target: "BEY-BBG-08-PIRATES-OROJYA-145D" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBG-09", series: "metal fight", releases: {
    kr: { no: "BBG-09", name: "시프 피닉 E230GCF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "10400", composition: [{ name: "시프 피닉 E230GCF", quantity: "1개", target: "BEY-BBG-09-THIEF-PHOENIC-E230GCF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-09", name: "ZEROG 랜덤부스터 Vol.1 시프 피닉 E230GCF", sale: "일반 판매", kind: "부스터", releaseDate: "2012-04-21", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BBG-09-THIEF-PHOENIC-E230GCF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: [ "BEY-BBG-09-THIEF-PHOENIC-E230GCF", "BEY-BBG-09-THIEF-SARAMANDA-230WB", "BEY-BBG-09-WARRIORS-SARAMANDA-E230ES", "BEY-BBG-09-PIRATES-IFRAID-T125GCF", "BEY-BBG-09-SHINOBI-IFRAID-230WD", "BEY-BBG-09-PIRATES-SARAMANDA-T125WB", "BEY-BBG-09-SHINOBI-OROJYA-145ES", "BEY-BBG-09-WARRIORS-OROJYA-145WD"] },
  { id: "PRODUCT-BBG-10", series: "metal fight", releases: {
    kr: { no: "BBG-10", name: "가디언 리바이저 160SB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "12000", composition: [{ name: "가디언 리바이저 160SB", quantity: "1개", target: "BEY-BBG-10-GUARDIAN-REVIZER-160SB" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-10", name: "가디언 리바이저 160SB", sale: "일반 판매", kind: "스타터", releaseDate: "2012-05-19", price: "997", composition: [{ name: "가디언 리바이저 160SB", quantity: "1개", target: "BEY-BBG-10-GUARDIAN-REVIZER-160SB" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-11", series: "metal fight", releases: {
    kr: { no: "BBG-11", name: "제로G 방어형 스타디움", sale: "일반 판매", releaseDate: "2012-09-12", price: "17600", composition: [{ name: "제로G 방어형 스타디움", quantity: "1개", target: "TOOLS-ZEROG-DEFENSE-BEYSTADIUM" }] },
    jp: { no: "BBG-11", name: "ZEROG 스타디움 디펜스타입", sale: "일반 판매", releaseDate: "2012-05-19", price: "2100", composition: [{ name: "ZEROG 스타디움 디펜스타입", quantity: "1개", target: "TOOLS-ZEROG-DEFENSE-BEYSTADIUM" }] }} },
  { id: "PRODUCT-BBG-12", series: "metal fight", releases: {
    kr: { no: "BBG-12", name: "아처 그리프 C145S", sale: "일반 판매", kind: "부스터", releaseDate: "2012-09-12", price: "8400", composition: [{ name: "아처 그리프 C145S", quantity: "1개", target: "BEY-BBG-12-ARCHER-GRYPH-C145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { no: "BBG-12", name: "아처 그리프 C145S", sale: "일반 판매", kind: "싱크롬부스터", releaseDate: "2012-06-23", price: "892", composition: [{ name: "아처 그리프 C145S", quantity: "1개", target: "BEY-BBG-12-ARCHER-GRYPH-C145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BBG-12-KR-STARTER", series: "metal fight", releases: {
    kr: { no: "BBG-12", name: "아처 그리프 C145S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "10400", composition: [{ name: "아처 그리프 C145S", quantity: "1개", target: "BEY-BBG-12-ARCHER-GRYPH-C145S" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBG-13", series: "metal fight", releases: {
    kr: { no: "BBG-13", name: "베이블레이드 싱크롬 배틀 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-10-20", price: "24000", composition: [{ name: "파이레츠 크라켄 A230JSB", quantity: "1개", target: "BEY-BBG-13-PIRATES-KILLERKEN-A230JSB" }, { name: "워리어스 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-13-WARRIORS-IFRAID-W145CF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "제로G 라이트런처", quantity: "1개", target: "TOOLS-ZEROG-LIGHT-LAUNCHER" }] },
    jp: { no: "BBG-13", name: "베이블레이드 싱크롬 배틀 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-06-23", price: "2100", composition: [{ name: "파이레츠 크라켄 A230JSB", quantity: "1개", target: "BEY-BBG-13-PIRATES-KILLERKEN-A230JSB" }, { name: "사무라이 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-13-WARRIORS-IFRAID-W145CF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "ZEROG 라이트런처", quantity: "1개", target: "TOOLS-ZEROG-LIGHT-LAUNCHER" }] }} },
  { id: "PRODUCT-BBG-14", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-14", name: "메탈스톤페이스 개조 Ver.(플레임레드)", sale: "일반 판매", releaseDate: "2012-06-23", price: "367", composition: [{ name: "메탈스톤페이스 개조 Ver.", quantity: "2개", target: "STONEFACE-METAL-STONE-FACE-CUSTOM" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BBG-15", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-15", name: "메탈스톤페이스 개조 Ver.(오션블루)", sale: "일반 판매", releaseDate: "2012-06-23", price: "367", composition: [{ name: "메탈스톤페이스 개조 Ver.", quantity: "2개", target: "STONEFACE-METAL-STONE-FACE-CUSTOM" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-SARAMANDA-IFRAID-DF145XF", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "사라만다 이프레이드 DF145XF", sale: "한정 배포", kind: "", releaseDate: "2012-06-02", price: "", composition: [{ name: "사라만다 이프레이드 DF145XF", quantity: "1개", target: "BEY-SARAMANDA-IFRAID-DF145XF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-DARK-KNIGHT-DRAGOOON-LW160BSF-GOLD-DRAGON", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "다크나이트 드라군 LW160BSF 금룡 Ver.", sale: "한정 판매", kind: "스타터", releaseDate: "2012-06-30", price: "1100", composition: [{ name: "다크나이트 드라군 LW160BSF 금룡 Ver.", quantity: "1개", target: "BEY-BBG-16-DARK-KNIGHT-DRAGOOON-LW160BSF" }, { name: "컴팩트런처L", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER-L" }] }} },
  { id: "PRODUCT-OROJYA-REVIZER-T125JB", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "오로자 리바이저 T125JB", sale: "한정 배포", kind: "", releaseDate: "2012-07-14", price: "", composition: [{ name: "오로자 리바이저 T125JB", quantity: "1개", target: "BEY-OROJYA-REVIZER-T125JB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BBG-16", series: "metal fight", releases: {
    kr: { no: "BBG-16", name: "다크나이트 드래곤 LW160BSF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-10-20", price: "12000", composition: [{ name: "다크나이트 드래곤 LW160BSF", quantity: "1개", target: "BEY-BBG-16-DARK-KNIGHT-DRAGOOON-LW160BSF" }, { name: "컴팩트런처L", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER-L" }]},
    jp: { no: "BBG-16", name: "다크나이트 드라군 LW160BSF", sale: "일반 판매", kind: "스타터", releaseDate: "2012-07-21", price: "997", composition: [{ name: "다크나이트 드라군 LW160BSF", quantity: "1개", target: "BEY-BBG-16-DARK-KNIGHT-DRAGOOON-LW160BSF" }, { name: "컴팩트런처L", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER-L" }]}} },
  { id: "PRODUCT-BBG-17", series: "metal fight", releases: {
    kr: { no: "BBG-17", name: "아처 가고일 SA165WSF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-10-20", price: "10400", composition: [{ name: "아처 가고일 SA165WSF", quantity: "1개", target: "BEY-BBG-17-ARCHER-GARGOLE-SA165WSF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-17", name: "ZEROG 랜덤부스터 Vol.2 아처 가골 SA165WSF", sale: "일반 판매", kind: "부스터", releaseDate: "2012-07-21", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BBG-17-ARCHER-GARGOLE-SA165WSF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: [
    "BEY-BBG-17-ARCHER-GARGOLE-SA165WSF",
    "BEY-BBG-17-GUARDIAN-GARGOLE-M145SB",
    "BEY-BBG-17-SHINOBI-OROJYA-160WSF",
    "BEY-BBG-17-WARRIORS-REVIZER-SA165Q",
    "BEY-BBG-17-PIRATES-GRYPH-160CF",
    "BEY-BBG-17-PIRATES-REVIZER-M145CF",
    "BEY-BBG-17-GUARDIAN-SARAMANDA-W145Q",
    "BEY-BBG-17-ARCHER-IFRAID-W145SB"
  ] },
  { id: "PRODUCT-BBG-18", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-18", name: "ZEROG 스타디움 밸런스타입", sale: "일반 판매", releaseDate: "2012-08-11", price: "2100", composition: [{ name: "ZEROG 스타디움 밸런스타입", quantity: "1개", target: "TOOLS-ZEROG-BALANCE-BEYSTADIUM" }] }} },
  { id: "PRODUCT-BBG-19", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-19", name: "ZEROG 런처", sale: "일반 판매", releaseDate: "2012-08-11", price: "892", composition: [{ name: "ZEROG 런처", quantity: "1개", target: "TOOLS-ZEROG-LAUNCHER" }] }} },
  { id: "PRODUCT-BBG-20", series: "metal fight", releases: {
    kr: { no: "BBG-20", name: "반디드 골렘 DF145BS", sale: "일반 판매", kind: "부스터", releaseDate: "2012-10-20", price: "8400", composition: [{ name: "반디드 골렘 DF145BS", quantity: "1개", target: "BEY-BBG-20-BANDID-GOREIM-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { no: "BBG-20", name: "반디드 고레임 DF145BS", sale: "일반 판매", kind: "싱크롬부스터", releaseDate: "2012-08-11", price: "892", composition: [{ name: "반디드 고레임 DF145BS", quantity: "1개", target: "BEY-BBG-20-BANDID-GOREIM-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BBG-20-KR-STARTER", series: "metal fight", releases: {
    kr: { no: "BBG-20", name: "반디드 골렘 DF145BS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-10-20", price: "10400", composition: [{ name: "반디드 골렘 DF145BS", quantity: "1개", target: "BEY-BBG-20-BANDID-GOREIM-DF145BS" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBG-21", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-21", name: "퍼스트 ZEROG 배틀 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-08-11", price: "4095", composition: [{ name: "사무라이 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-21-WARRIORS-IFRAID-W145CF" }, { name: "가디언 리바이저 160SB", quantity: "1개", target: "BEY-BBG-21-GUARDIAN-REVIZER-160SB" }, { name: "컴팩트런처", quantity: "2개", target: "TOOLS-COMPACT-LAUNCHER" }, { name: "ZEROG 스타디움 어택타입", quantity: "1개", target: "TOOLS-ZEROG-ATTACK-BEYSTADIUM" }, { name: "베이블레이드 ZEROG 시리즈 필승 가이드", quantity: "1부", target: "BOOK-BEYBLADE-ZEROG-SERIES-WINNING-GUIDE" }] }} },
  { id: "PRODUCT-BBG-22", series: "metal fight", releases: {
    kr: { no: "BBG-22", name: "버서커 베기라도스 SR200BWD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-10-20", price: "12000", composition: [{ name: "버서커 베기라도스 SR200BWD", quantity: "1개", target: "BEY-BBG-22-BERSERKER-BEGIRADOS-SR200BWD" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-22", name: "버서커 베기라도스 SR200BWD", sale: "일반 판매", kind: "스타터", releaseDate: "2012-09-15", price: "997", composition: [{ name: "버서커 베기라도스 SR200BWD", quantity: "1개", target: "BEY-BBG-22-BERSERKER-BEGIRADOS-SR200BWD" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-23", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-23", name: "ZEROG 랜덤부스터 Vol.3 반디드 겐블 F230TB", sale: "일반 판매", kind: "부스터", releaseDate: "2012-10-20", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BBG-23-BANDID-GENBULL-F230TB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, lineupPool: [ "BEY-BBG-23-BANDID-GENBULL-F230TB", "BEY-BBG-23-SHINOBI-GENBULL-130W2D", "BEY-BBG-23-THIEF-SARAMANDA-F230SF", "BEY-BBG-23-SHINOBI-GRYPH-WD145TB", "BEY-BBG-23-ARCHER-PHOENIC-125B", "BEY-BBG-23-PIRATES-PHOENIC-WD145SF", "BEY-BBG-23-ARCHER-KILLERKEN-130B", "BEY-BBG-23-BANDID-KILLERKEN-125W2D"] },
  { id: "PRODUCT-BBG-24", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-24", name: "베이블레이드 ZEROG 궁극 싱크롬 DX 세트 어택&밸런스타입", sale: "일반 판매", kind: "세트", releaseDate: "2012-11-17", price: "3300", composition: [{ name: "가골 이프레이드 SA165GCF", quantity: "1개", target: "BEY-BBG-24-GARGOLE-IFRAID-SA165GCF" }, { name: "사라만다 발로 DF145SWD", quantity: "1개", target: "BEY-BBG-24-SARAMANDA-BALRO-DF145SWD" }, { name: "그리프 지라고 WA130HF", quantity: "1개", target: "BEY-BBG-24-GRYPH-GIRAGO-WA130HF" }, { name: "230 트랙", quantity: "1개", target: "TRACK-230" }, { name: "T125 트랙", quantity: "1개", target: "TRACK-TORNADO-125" }, { name: "WSF 버텀", quantity: "1개", target: "BOTTOM-WIDE-SEMI-FLAT" }, { name: "FS 버텀", quantity: "1개", target: "BOTTOM-FLAT-SHARP" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BBG-25", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-25", name: "베이블레이드 ZEROG 궁극 싱크롬 DX 세트 디펜스&스테미나타입", sale: "일반 판매", kind: "세트", releaseDate: "2012-11-17", price: "3300", composition: [{ name: "골렘 리바이저 E230SB", quantity: "1개", target: "BEY-BBG-25-GOREIM-REVIZER-E230SB" }, { name: "크라켄 발로 A230WB", quantity: "1개", target: "BEY-BBG-25-KILLERKEN-BALRO-A230WB" }, { name: "오로자 와이번 145EDS", quantity: "1개", target: "BEY-BBG-25-OROJYA-WYVANG-145EDS" }, { name: "AD145 트랙", quantity: "1개", target: "TRACK-ARMOR-DEFENSE-145" }, { name: "160 트랙", quantity: "1개", target: "TRACK-160" }, { name: "WD 버텀", quantity: "1개", target: "BOTTOM-WIDE-DEFENSE" }, { name: "JSB 버텀", quantity: "1개", target: "BOTTOM-JOG-SHARP-BALL" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BBG-26", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-26", name: "사무라이 페가시스 W105R²F", sale: "일반 판매", kind: "스타터", releaseDate: "2012-12-01", price: "997", composition: [{ name: "사무라이 페가시스 W105R²F", quantity: "1개", target: "BEY-BBG-26-WARRIORS-PEGASIS-W105R2F" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-27", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-27", name: "글레디에이터 바함디아 SP230GF", sale: "일반 판매", kind: "스타터", releaseDate: "2012-12-01", price: "997", composition: [{ name: "글레디에이터 바함디아 SP230GF", quantity: "1개", target: "BEY-BBG-27-GLADIATOR-BAHAMDIA-SP230GF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-GAME-METAL-FIGHT-BEYBLADE", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드", sale: "일반 판매", kind: "게임", releaseDate: "2009-03-26", price: "5775", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-METAL-FIGHT-BEYBLADE-CARD" }, { name: "케찰코아틀 90WF", quantity: "1개", target: "BEY-QUETZALCOATL-90WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이포인트 리더기", quantity: "1개", target: "TOOLS-BEYPOINT-READER" }] }} },
  { id: "PRODUCT-GAME-GACHINKO-STADIUM", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드: 가칭코 스타디움", sale: "일반 판매", kind: "게임", releaseDate: "2009-11-19", price: "5229", composition: [{ name: "게임 CD", quantity: "1개", target: "GAME-GACHINKO-STADIUM-CD" }, { name: "카운터 레오네 D125B", quantity: "1개", target: "BEY-COUNTER-LEONE-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-BAKUTAN-CYBER-PEGASIS", series: "metal fight", releases: {
    kr: { no: "", name: "메탈베이블레이드: 사이버 페가시스", sale: "일반 판매", kind: "게임", releaseDate: "2010-04-22", price: "44000", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-BAKUTAN-CYBER-PEGASIS-CARD" }, { name: "사이버 페가시스 100HF", quantity: "1개", target: "BEY-CYBER-PEGASIS-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "", name: "메탈파이트 베이블레이드: 탄생! 사이버 페가시스", sale: "일반 판매", kind: "게임", releaseDate: "2009-12-03", price: "5229", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-BAKUTAN-CYBER-PEGASIS-CARD" }, { name: "사이버 페가시스 100HF", quantity: "1개", target: "BEY-CYBER-PEGASIS-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-BAKUSHIN-SUSANOW-ATTACKS", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드: 바쿠신 스사노오의 습격!", sale: "일반 판매", kind: "게임", releaseDate: "2010-07-03", price: "5229", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-BAKUSHIN-SUSANOW-ATTACKS-CARD" }, { name: "바쿠신 스사노오 90WF", quantity: "1개", target: "BEY-BAKUSHIN-SUSANOW-90WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-PORTABLE-CHOUZETSU-TENSEI-VULCAN-HORUSEUS", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드 포터블: 초절전생! 발칸 호루세우스", sale: "일반 판매", kind: "게임", releaseDate: "2010-10-21", price: "5775", composition: [{ name: "게임 CD", quantity: "1개", target: "GAME-CHOUZETSU-TENSEI-VULCAN-HORUSEUS-CD" }, { name: "발칸 호루세우스 145D", quantity: "1개", target: "BEY-BB-P01-VULCAN-HORUSEUS-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-CHOUJOU-KESSEN-BIG-BANG-BLADERS", series: "metal fight", releases: {
    kr: { no: "", name: "메탈베이블레이드: 빅뱅블레이더즈", sale: "일반 판매", kind: "게임", releaseDate: "2011-04-21", price: "45000", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-CHOUJOU-KESSEN-BIG-BANG-BLADERS-CARD" }, { name: "나이트메어 렉스 SW145SD", quantity: "1개", target: "BEY-NIGHTMARE-REX-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "", name: "메탈파이트 베이블레이드: 정상결전! 빅뱅블레이더즈", sale: "일반 판매", kind: "게임", releaseDate: "2010-12-02", price: "5229", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-CHOUJOU-KESSEN-BIG-BANG-BLADERS-CARD" }, { name: "나이트메어 렉스 SW145SD", quantity: "1개", target: "BEY-NIGHTMARE-REX-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-4D-ZEROG-ULTIMATE-TOURNAMENT", series: "metal fight", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드: 4DxZEROG 얼티밋 토너먼트", sale: "일반 판매", kind: "게임", releaseDate: "2013-12-19", price: "5800", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-4D-ZEROG-ULTIMATE-TOURNAMENT-CARD" }, { name: "사무라이 페가시스 W105R²F", quantity: "1개", target: "BEY-BBG-26-WARRIORS-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  // 베이블레이드 버스트
{
    id: "PRODUCT-BURST-B-01",
    series: "burst",
    releases: {
      kr: {
        no: "B-01",
        name: "발키리.W.A",
        kind: "스타터",
        releaseDate: "2016-03-24",
        price: "13900",
        composition: [
          { name: "발키리.W.A", quantity: "1개", target: "BEY-BURST-B-01-VALKYRIE-W-A" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-01",
        name: "발키리.W.A",
        kind: "DX스타터",
        releaseDate: "2015-07-18",
        price: "2376",
        composition: [
          { name: "발키리.W.A", quantity: "1개", target: "BEY-BURST-B-01-VALKYRIE-W-A" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이로거", quantity: "1개", target: "TOOLS-BURST-BEYLOGGER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-02",
    series: "burst",
    releases: {
      kr: {
        no: "B-02",
        name: "스프리건.S.F",
        kind: "스타터",
        releaseDate: "2016-03-24",
        price: "13900",
        composition: [
          { name: "스프리건.S.F", quantity: "1개", target: "BEY-BURST-B-02-SPRIGGAN-S-F" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-02",
        name: "스프리건.S.F",
        kind: "DX스타터",
        releaseDate: "2015-07-18",
        price: "2376",
        composition: [
          { name: "스프리건.S.F", quantity: "1개", target: "BEY-BURST-B-02-SPRIGGAN-S-F" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이로거", quantity: "1개", target: "TOOLS-BURST-BEYLOGGER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-03",
    series: "burst",
    releases: {
      kr: {
        no: "B-03",
        name: "라그나로크.H.S",
        kind: "스타터",
        releaseDate: "2016-03-24",
        price: "13900",
        composition: [
          { name: "라그나로크.H.S", quantity: "1개", target: "BEY-BURST-B-03-RAGNARUK-H-S" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-03",
        name: "라그나로크.H.S",
        kind: "스타터",
        releaseDate: "2015-07-18",
        price: "1296",
        composition: [
          { name: "라그나로크.H.S", quantity: "1개", target: "BEY-BURST-B-03-RAGNARUK-H-S" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-04",
    series: "burst",
    releases: {
      kr: {
        no: "B-04",
        name: "케르베우스.C.D",
        kind: "스타터",
        releaseDate: "2016-03-24",
        price: "13900",
        composition: [
          { name: "케르베우스.C.D", quantity: "1개", target: "BEY-BURST-B-04-KERBEUS-C-D" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-04",
        name: "케르베우스.C.D",
        kind: "스타터",
        releaseDate: "2015-07-18",
        price: "1296",
        composition: [
          { name: "케르베우스.C.D", quantity: "1개", target: "BEY-BURST-B-04-KERBEUS-C-D" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-05",
    series: "burst",
    releases: {
      kr: {
        no: "B-05",
        name: "스프리건.H.D",
        kind: "부스터",
        releaseDate: "2016-03-24",
        price: "9800",
        composition: [
          { name: "스프리건.H.D", quantity: "1개", target: "BEY-BURST-B-05-SPRIGGAN-H-D" }
        ]
      },
      jp: {
        no: "B-05",
        name: "스프리건.H.D",
        kind: "부스터",
        releaseDate: "2015-07-18",
        price: "864",
        composition: [
          { name: "스프리건.H.D", quantity: "1개", target: "BEY-BURST-B-05-SPRIGGAN-H-D" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-06",
    series: "burst",
    releases: {
      kr: {
        no: "B-06",
        name: "라그나로크.C.A",
        kind: "부스터",
        releaseDate: "2016-03-24",
        price: "9800",
        composition: [
          { name: "라그나로크.C.A", quantity: "1개", target: "BEY-BURST-B-06-RAGNARUK-C-A" }
        ]
      },
      jp: {
        no: "B-06",
        name: "라그나로크.C.A",
        kind: "부스터",
        releaseDate: "2015-07-18",
        price: "864",
        composition: [
          { name: "라그나로크.C.A", quantity: "1개", target: "BEY-BURST-B-06-RAGNARUK-C-A" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-07",
    series: "burst",
    releases: {
      kr: {
        no: "B-07",
        name: "케르베우스.W.F",
        kind: "부스터",
        releaseDate: "2016-03-24",
        price: "9800",
        composition: [
          { name: "케르베우스.W.F", quantity: "1개", target: "BEY-BURST-B-07-KERBEUS-W-F" }
        ]
      },
      jp: {
        no: "B-07",
        name: "케르베우스.W.F",
        kind: "부스터",
        releaseDate: "2015-07-18",
        price: "864",
        composition: [
          { name: "케르베우스.W.F", quantity: "1개", target: "BEY-BURST-B-07-KERBEUS-W-F" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-08",
    series: "burst",
    releases: {
      kr: {
        no: "B-08",
        name: "베이블레이드 스타트 대시 세트",
        kind: "세트",
        releaseDate: "2016-03-24",
        price: "42600",
        composition: [
          { name: "발키리.W.A", quantity: "1개", target: "BEY-BURST-B-08-VALKYRIE-W-A" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" },
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-08",
        name: "베이블레이드 스타트 대시 세트",
        kind: "세트",
        releaseDate: "2015-07-18",
        price: "4320",
        composition: [
          { name: "발키리.W.A", quantity: "1개", target: "BEY-BURST-B-08-VALKYRIE-W-A" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" },
          { name: "베이로거", quantity: "1개", target: "TOOLS-BURST-BEYLOGGER" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-09",
    series: "burst",
    releases: {
      kr: {
        no: "B-09",
        name: "베이스타디움 스탠다드타입",
        kind: "툴",
        releaseDate: "2016-03-24",
        price: "14800",
        composition: [
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-09",
        name: "베이스타디움 스탠다드타입",
        kind: "툴",
        releaseDate: "2015-07-18",
        price: "1620",
        composition: [
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-10",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-10",
        name: "베이로거",
        kind: "툴",
        releaseDate: "2015-07-18",
        price: "1620",
        composition: [
          { name: "베이로거", quantity: "1개", target: "TOOLS-BURST-BEYLOGGER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-11",
    series: "burst",
    releases: {
      kr: {
        no: "B-11",
        name: "런처그립",
        kind: "툴",
        releaseDate: "2016-03-24",
        price: "5700",
        composition: [
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" }
        ]
      },
      jp: {
        no: "B-11",
        name: "런처그립",
        kind: "툴",
        releaseDate: "2015-07-18",
        price: "648",
        composition: [
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-12",
    series: "burst",
    releases: {
      kr: {
        no: "B-12",
        name: "데스사이저.O.A",
        kind: "스타터",
        releaseDate: "2016-03-24",
        price: "13900",
        composition: [
          { name: "데스사이저.O.A", quantity: "1개", target: "BEY-BURST-B-12-DEATHSCYTHER-O-A" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-12",
        name: "데스사이저.O.A",
        kind: "스타터",
        releaseDate: "2015-08-08",
        price: "1296",
        composition: [
          { name: "데스사이저.O.A", quantity: "1개", target: "BEY-BURST-B-12-DEATHSCYTHER-O-A" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-13",
    series: "burst",
    releases: {
      kr: {
        no: "B-13",
        name: "발키리.S.S",
        kind: "부스터",
        releaseDate: "2016-03-24",
        price: "9800",
        composition: [
          { name: "발키리.S.S", quantity: "1개", target: "BEY-BURST-B-13-VALKYRIE-S-S" }
        ]
      },
      jp: {
        no: "B-13",
        name: "발키리.S.S",
        kind: "부스터",
        releaseDate: "2015-08-08",
        price: "864",
        composition: [
          { name: "발키리.S.S", quantity: "1개", target: "BEY-BURST-B-13-VALKYRIE-S-S" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-00-ALPHA",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-00α",
        name: "아마테리오스.α.α",
        kind: "부스터",
        releaseDate: "2015-08-21",
        price: "",
        composition: [
          { name: "아마테리오스.α.α", quantity: "1개", target: "BEY-BURST-B-00-ALPHA-AMATERIOS-AERO-ASSAULT" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-14",
    series: "burst",
    releases: {
      kr: {
        no: "B-14",
        name: "와이번.A.M",
        kind: "스타터",
        releaseDate: "2016-03-24",
        price: "15600",
        composition: [
          { name: "와이번.A.M", quantity: "1개", target: "BEY-BURST-B-14-WYVERN-A-M" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-14",
        name: "와이번.A.M",
        kind: "스타터",
        releaseDate: "2015-09-19",
        price: "1512",
        composition: [
          { name: "와이번.A.M", quantity: "1개", target: "BEY-BURST-B-14-WYVERN-A-M" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-15",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-15",
        name: "랜덤부스터 Vol.1 트라이던트.H.C",
        kind: "랜덤부스터",
        releaseDate: "2015-09-19",
        price: "864",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-16",
    series: "burst",
    releases: {
      kr: {
        no: "B-16",
        name: "베이런처(레드)",
        kind: "툴",
        releaseDate: "2016-03-24",
        price: "5700",
        composition: [
          { name: "베이런처(레드)", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      },
      jp: {
        no: "B-16",
        name: "베이런처",
        kind: "툴",
        releaseDate: "2015-09-19",
        price: "756",
        composition: [
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-17",
    series: "burst",
    releases: {
      kr: {
        no: "B-17",
        name: "오딘.C.B",
        kind: "부스터",
        releaseDate: "2016-03-24",
        price: "9800",
        composition: [
          { name: "오딘.C.B", quantity: "1개", target: "BEY-BURST-B-17-ODIN-C-B" }
        ]
      },
      jp: {
        no: "B-17",
        name: "오딘.C.B",
        kind: "부스터",
        releaseDate: "2015-10-17",
        price: "864",
        composition: [
          { name: "오딘.C.B", quantity: "1개", target: "BEY-BURST-B-17-ODIN-C-B" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-18",
    series: "burst",
    releases: {
      kr: {
        no: "B-18",
        name: "베이블레이드 VS 배틀 세트",
        kind: "세트",
        releaseDate: "2016-03-24",
        price: "53300",
        composition: [
          { name: "발키리.W.A", quantity: "1개", target: "BEY-BURST-B-18-VALKYRIE-W-A" },
          { name: "스프리건.S.F", quantity: "1개", target: "BEY-BURST-B-18-SPRIGGAN-S-F" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "런처그립", quantity: "2개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-18",
        name: "베이블레이드 VS 대전 세트",
        kind: "세트",
        releaseDate: "2015-10-17",
        price: "5400",
        composition: [
          { name: "발키리.W.A", quantity: "1개", target: "BEY-BURST-B-18-VALKYRIE-W-A" },
          { name: "스프리건.S.F", quantity: "1개", target: "BEY-BURST-B-18-SPRIGGAN-S-F" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "런처그립", quantity: "2개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-19",
    series: "burst",
    releases: {
      kr: {
        no: "B-19",
        name: "버스트 베이스타디움",
        kind: "툴",
        releaseDate: "2016-03-24",
        price: "18900",
        composition: [
          { name: "버스트 베이스타디움", quantity: "1개", target: "TOOLS-BURST-BURST-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-19",
        name: "버스트 베이스타디움",
        kind: "툴",
        releaseDate: "2015-10-17",
        price: "2160",
        composition: [
          { name: "버스트 베이스타디움", quantity: "1개", target: "TOOLS-BURST-BURST-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-20",
    series: "burst",
    releases: {
      kr: {
        no: "B-20",
        name: "호루스.S.E",
        kind: "부스터",
        releaseDate: "2016-03-24",
        price: "9800",
        composition: [
          { name: "호루스.S.E", quantity: "1개", target: "BEY-BURST-B-20-HORUSOOD-S-E" }
        ]
      },
      jp: {
        no: "B-20",
        name: "호루스드.S.E",
        kind: "부스터",
        releaseDate: "2015-11-14",
        price: "864",
        composition: [
          { name: "호루스드.S.E", quantity: "1개", target: "BEY-BURST-B-20-HORUSOOD-S-E" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-21",
    series: "burst",
    releases: {
      kr: {
        no: "B-21",
        name: "베이블레이드 개조 세트 어택&밸런스",
        kind: "세트",
        releaseDate: "2016-03-24",
        price: "31200",
        composition: [
          { name: "미노보로스.O.Q", quantity: "1개", target: "BEY-BURST-B-21-MINOBOROS-O-Q" },
          { name: "데스사이저.W.F", quantity: "1개", target: "BEY-BURST-B-21-DEATHSCYTHER-W-F" },
          { name: "스프리건.S.B", quantity: "1개", target: "BEY-BURST-B-21-SPRIGGAN-S-B" },
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" }
        ]
      },
      jp: {
        no: "B-21",
        name: "베이블레이드 개조 세트 어택&밸런스",
        kind: "세트",
        releaseDate: "2015-11-14",
        price: "3240",
        composition: [
          { name: "미노보로스.O.Q", quantity: "1개", target: "BEY-BURST-B-21-MINOBOROS-O-Q" },
          { name: "데스사이저.W.F", quantity: "1개", target: "BEY-BURST-B-21-DEATHSCYTHER-W-F" },
          { name: "스프리건.S.B", quantity: "1개", target: "BEY-BURST-B-21-SPRIGGAN-S-B" },
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-22",
    series: "burst",
    releases: {
      kr: {
        no: "B-22",
        name: "베이블레이드 개조 세트 디펜스&스태미너",
        kind: "세트",
        releaseDate: "2016-03-24",
        price: "31200",
        composition: [
          { name: "유니콘.R.D", quantity: "1개", target: "BEY-BURST-B-22-UNICORN-R-D" },
          { name: "와이번.H.S", quantity: "1개", target: "BEY-BURST-B-22-WYVERN-H-S" },
          { name: "라그나로크.C.M", quantity: "1개", target: "BEY-BURST-B-22-RAGNARUK-C-M" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-22",
        name: "베이블레이드 개조 세트 디펜스&스태미나",
        kind: "세트",
        releaseDate: "2015-11-14",
        price: "3240",
        composition: [
          { name: "유니콘.R.D", quantity: "1개", target: "BEY-BURST-B-22-UNICORN-R-D" },
          { name: "와이번.H.S", quantity: "1개", target: "BEY-BURST-B-22-WYVERN-H-S" },
          { name: "라그나로크.C.M", quantity: "1개", target: "BEY-BURST-B-22-RAGNARUK-C-M" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-29",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-29",
        name: "발키리.W.A 엔트리패키지",
        kind: "스타터",
        releaseDate: "2015-12-05",
        price: "993",
        composition: [
          { name: "발키리.W.A", quantity: "1개", target: "BEY-BURST-B-29-VALKYRIE-W-A" },
          { name: "프로토런처", quantity: "1개", target: "TOOLS-BURST-PROTO-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-30",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-30",
        name: "스프리건.S.F 엔트리패키지",
        kind: "스타터",
        releaseDate: "2015-12-05",
        price: "993",
        composition: [
          { name: "스프리건.S.F", quantity: "1개", target: "BEY-BURST-B-30-SPRIGGAN-S-F" },
          { name: "프로토런처", quantity: "1개", target: "TOOLS-BURST-PROTO-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-23",
    series: "burst",
    releases: {
      kr: {
        no: "B-23",
        name: "엑스칼리버.F.X",
        kind: "스타터",
        releaseDate: "2016-03-24",
        price: "15600",
        composition: [
          { name: "엑스칼리버.F.X", quantity: "1개", target: "BEY-BURST-B-23-XCALIBUR-F-X" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-23",
        name: "엑스칼리버.F.X",
        kind: "스타터",
        releaseDate: "2015-12-26",
        price: "1512",
        composition: [
          { name: "엑스칼리버.F.X", quantity: "1개", target: "BEY-BURST-B-23-XCALIBUR-F-X" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-24",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-24",
        name: "랜덤부스터 Vol.2 이빌아이.W.N",
        kind: "랜덤부스터",
        releaseDate: "2015-12-26",
        price: "864",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-25",
    series: "burst",
    releases: {
      kr: {
        no: "B-25",
        name: "앵글그립",
        kind: "툴",
        releaseDate: "2016-03-24",
        price: "5700",
        composition: [
          { name: "앵글그립", quantity: "1개", target: "TOOLS-BURST-ANGLE-GRIP" }
        ]
      },
      jp: {
        no: "B-25",
        name: "앵글그립",
        kind: "툴",
        releaseDate: "2015-12-26",
        price: "540",
        composition: [
          { name: "앵글그립", quantity: "1개", target: "TOOLS-BURST-ANGLE-GRIP" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-26",
    series: "burst",
    releases: {
      kr: {
        no: "B-26",
        name: "러버어시스트",
        kind: "툴",
        releaseDate: "2016-03-24",
        price: "5700",
        composition: [
          { name: "러버어시스트", quantity: "1개", target: "TOOLS-BURST-RUBBER-ASSIST" }
        ]
      },
      jp: {
        no: "B-26",
        name: "러버어시스트",
        kind: "툴",
        releaseDate: "2015-12-26",
        price: "540",
        composition: [
          { name: "러버어시스트", quantity: "1개", target: "TOOLS-BURST-RUBBER-ASSIST" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-27",
    series: "burst",
    releases: {
      kr: {
        no: "B-27",
        name: "베이블레이드 블레이더박스",
        kind: "툴",
        releaseDate: "2016-03-24",
        price: "22100",
        composition: [
          { name: "베이블레이드 블레이더박스", quantity: "1개", target: "TOOLS-BURST-WBBA-OFFICIAL-BLADER-BOX" }
        ]
      },
      jp: {
        no: "B-27",
        name: "wbba. 오피셜 블레이더즈 박스",
        kind: "툴",
        releaseDate: "2015-12-26",
        price: "2484",
        composition: [
          { name: "wbba. 오피셜 블레이더즈 박스", quantity: "1개", target: "TOOLS-BURST-WBBA-OFFICIAL-BLADER-BOX" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-28",
    series: "burst",
    releases: {
      kr: {
        no: "B-28",
        name: "넵튠.A.Z",
        kind: "부스터",
        releaseDate: "2016-03-24",
        price: "9800",
        composition: [
          { name: "넵튠.A.Z", quantity: "1개", target: "BEY-BURST-B-28-NEPTUNE-A-Z" }
        ]
      },
      jp: {
        no: "B-28",
        name: "넵튠.A.Z",
        kind: "부스터",
        releaseDate: "2016-01-23",
        price: "864",
        composition: [
          { name: "넵튠.A.Z", quantity: "1개", target: "BEY-BURST-B-28-NEPTUNE-A-Z" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-31",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-31",
        name: "이그드라실.R.G",
        kind: "스타터",
        releaseDate: "2016-02-20",
        price: "1296",
        composition: [
          { name: "이그드라실.R.G", quantity: "1개", target: "BEY-BURST-B-31-YGGDRASIL-R-G" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-32",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-32",
        name: "슛서포트러버",
        kind: "툴",
        releaseDate: "2016-02-20",
        price: "540",
        composition: [
          { name: "슛서포트러버", quantity: "1개", target: "TOOLS-BURST-SHOOT-SUPPORT-RUBBER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-33",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-33",
        name: "베이스타디움 스탠다드타입(블랙)",
        kind: "툴",
        releaseDate: "2016-02-20",
        price: "1620",
        composition: [
          { name: "베이스타디움 스탠다드타입(블랙)", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM-BLACK" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-34",
    series: "burst",
    releases: {
      kr: {
        no: "B-34",
        name: "빅토리 발키리.B.V",
        kind: "스타터",
        releaseDate: "2016-05-11",
        price: "14800",
        composition: [
          { name: "빅토리 발키리.B.V", quantity: "1개", target: "BEY-BURST-B-34-VICTORY-VALKYRIE-B-V" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-34",
        name: "빅토리 발키리.B.V",
        kind: "스타터",
        releaseDate: "2016-04-02",
        price: "1404",
        composition: [
          { name: "빅토리 발키리.B.V", quantity: "1개", target: "BEY-BURST-B-34-VICTORY-VALKYRIE-B-V" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-35",
    series: "burst",
    releases: {
      kr: {
        no: "B-35",
        name: "스톰 스프리건.K.U",
        kind: "스타터",
        releaseDate: "2016-05-11",
        price: "14800",
        composition: [
          { name: "스톰 스프리건.K.U", quantity: "1개", target: "BEY-BURST-B-35-STORM-SPRIGGAN-K-U" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-35",
        name: "스톰 스프리건.K.U",
        kind: "스타터",
        releaseDate: "2016-04-02",
        price: "1404",
        composition: [
          { name: "스톰 스프리건.K.U", quantity: "1개", target: "BEY-BURST-B-35-STORM-SPRIGGAN-K-U" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-36",
    series: "burst",
    releases: {
      kr: {
        no: "B-36",
        name: "라이징 라그나로크.G.R",
        kind: "스타터",
        releaseDate: "2016-05-11",
        price: "14800",
        composition: [
          { name: "라이징 라그나로크.G.R", quantity: "1개", target: "BEY-BURST-B-36-RISING-RAGNARUK-G-R" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-36",
        name: "라이징 라그나로크.G.R",
        kind: "부스터",
        releaseDate: "2016-04-02",
        price: "972",
        composition: [
          { name: "라이징 라그나로크.G.R", quantity: "1개", target: "BEY-BURST-B-36-RISING-RAGNARUK-G-R" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-37",
    series: "burst",
    releases: {
      kr: {
        no: "B-37",
        name: "카이저 케르베우스.L.P",
        kind: "스타터",
        releaseDate: "2016-05-11",
        price: "14800",
        composition: [
          { name: "카이저 케르베우스.L.P", quantity: "1개", target: "BEY-BURST-B-37-KAISER-KERBEUS-L-P" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-37",
        name: "카이저 케르베우스.L.P",
        kind: "부스터",
        releaseDate: "2016-04-02",
        price: "972",
        composition: [
          { name: "카이저 케르베우스.L.P", quantity: "1개", target: "BEY-BURST-B-37-KAISER-KERBEUS-L-P" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-38",
    series: "burst",
    releases: {
      kr: {
        no: "B-38",
        name: "베이블레이드 버스트 스타트 세트",
        kind: "세트",
        releaseDate: "2016-05-11",
        price: "43500",
        composition: [
          { name: "빅토리 발키리.B.V", quantity: "1개", target: "BEY-BURST-B-38-VICTORY-VALKYRIE-B-V" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" },
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-38",
        name: "베이블레이드 버스트 엔트리 세트",
        kind: "세트",
        releaseDate: "2016-04-02",
        price: "4428",
        composition: [
          { name: "빅토리 발키리.B.V", quantity: "1개", target: "BEY-BURST-B-38-VICTORY-VALKYRIE-B-V" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" },
          { name: "베이로거", quantity: "1개", target: "TOOLS-BURST-BEYLOGGER" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-39",
    series: "burst",
    releases: {
      kr: {
        no: "B-39",
        name: "베이런처(화이트)",
        kind: "툴",
        releaseDate: "2016-05-11",
        price: "5700",
        composition: [
          { name: "베이런처(화이트)", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      },
      jp: {
        no: "B-39",
        name: "베이런처(화이트)",
        kind: "툴",
        releaseDate: "2016-04-02",
        price: "756",
        composition: [
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-40",
    series: "burst",
    releases: {
      kr: {
        no: "B-40",
        name: "런처그립(블랙)",
        kind: "툴",
        releaseDate: "2016-05-11",
        price: "5700",
        composition: [
          { name: "런처그립(블랙)", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" }
        ]
      },
      jp: {
        no: "B-40",
        name: "런처그립(블랙)",
        kind: "툴",
        releaseDate: "2016-04-02",
        price: "648",
        composition: [
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-41",
    series: "burst",
    releases: {
      kr: {
        no: "B-41",
        name: "와일드 와이번.V.O",
        kind: "스타터",
        releaseDate: "2016-06-18",
        price: "14800",
        composition: [
          { name: "와일드 와이번.V.O", quantity: "1개", target: "BEY-BURST-B-41-WILD-WYVERN-V-O" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-41",
        name: "와일드 와이번.V.O",
        kind: "스타터",
        releaseDate: "2016-04-29",
        price: "1404",
        composition: [
          { name: "와일드 와이번.V.O", quantity: "1개", target: "BEY-BURST-B-41-WILD-WYVERN-V-O" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-42",
    series: "burst",
    releases: {
      kr: {
        no: "B-42",
        name: "다크 데스사이저.F.J",
        kind: "부스터",
        releaseDate: "2016-06-18",
        price: "10700",
        composition: [
          { name: "다크 데스사이저.F.J", quantity: "1개", target: "BEY-BURST-B-42-DARK-DEATHSCYTHER-F-J" }
        ]
      },
      jp: {
        no: "B-42",
        name: "다크 데스사이저.F.J",
        kind: "부스터",
        releaseDate: "2016-04-29",
        price: "972",
        composition: [
          { name: "다크 데스사이저.F.J", quantity: "1개", target: "BEY-BURST-B-42-DARK-DEATHSCYTHER-F-J" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-43",
    series: "burst",
    releases: {
      kr: {
        no: "B-43",
        name: "그립러버",
        kind: "툴",
        releaseDate: "2016-06-18",
        price: "5700",
        composition: [
          { name: "그립러버", quantity: "1개", target: "TOOLS-BURST-GRIP-RUBBER" }
        ]
      },
      jp: {
        no: "B-43",
        name: "그립러버",
        kind: "툴",
        releaseDate: "2016-04-29",
        price: "540",
        composition: [
          { name: "그립러버", quantity: "1개", target: "TOOLS-BURST-GRIP-RUBBER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-44",
    series: "burst",
    releases: {
      kr: {
        no: "B-44",
        name: "홀리 호루스드.U.C",
        kind: "부스터",
        releaseDate: "2016-07-20",
        price: "10700",
        composition: [
          { name: "홀리 호루스드.U.C", quantity: "1개", target: "BEY-BURST-B-44-HOLY-HORUSOOD-U-C" }
        ]
      },
      jp: {
        no: "B-44",
        name: "홀리 호루스드.U.C",
        kind: "부스터",
        releaseDate: "2016-05-28",
        price: "972",
        composition: [
          { name: "홀리 호루스드.U.C", quantity: "1개", target: "BEY-BURST-B-44-HOLY-HORUSOOD-U-C" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-45",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-45",
        name: "베이블레이드 라이트런처&롱와인더",
        kind: "툴",
        releaseDate: "2016-05-28",
        price: "648",
        composition: [
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-46",
    series: "burst",
    releases: {
      kr: {
        no: "B-46",
        name: "오벨리스크 오딘.T.X",
        kind: "부스터",
        releaseDate: "2016-08-10",
        price: "10700",
        composition: [
          { name: "오벨리스크 오딘.T.X", quantity: "1개", target: "BEY-BURST-B-46-OBELISK-ODIN-T-X" }
        ]
      },
      jp: {
        no: "B-46",
        name: "오벨리스크 오딘.T.X",
        kind: "부스터",
        releaseDate: "2016-06-18",
        price: "594",
        composition: [
          { name: "오벨리스크 오딘.T.X", quantity: "1개", target: "BEY-BURST-B-46-OBELISK-ODIN-T-X" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-47",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-47",
        name: "웨이트댐퍼",
        kind: "툴",
        releaseDate: "2016-06-18",
        price: "540",
        composition: [
          { name: "웨이트댐퍼", quantity: "1개", target: "TOOLS-BURST-WEIGHT-DAMPER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-00-BETA",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-00β",
        name: "발뒤르.β.β",
        kind: "부스터",
        releaseDate: "2016-06-25",
        price: "",
        composition: [
          { name: "발뒤르.β.β", quantity: "1개", target: "BEY-BURST-B-00-BALDUR-BETA-BETA" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-48",
    series: "burst",
    releases: {
      kr: {
        no: "B-48",
        name: "제노 엑스칼리버.M.I",
        kind: "스타터",
        releaseDate: "2016-08-10",
        price: "17200",
        composition: [
          { name: "제노 엑스칼리버.M.I", quantity: "1개", target: "BEY-BURST-B-48-XENO-XCALIBUR-M-I" },
          { name: "소드런처", quantity: "1개", target: "TOOLS-BURST-SWORD-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-48",
        name: "제노 엑스칼리버.M.I",
        kind: "스타터",
        releaseDate: "2016-07-02",
        price: "1620",
        composition: [
          { name: "제노 엑스칼리버.M.I", quantity: "1개", target: "BEY-BURST-B-48-XENO-XCALIBUR-M-I" },
          { name: "소드런처", quantity: "1개", target: "TOOLS-BURST-SWORD-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-49",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-49",
        name: "랜덤부스터 Vol.3 예거 이그드라실.G.Y",
        kind: "랜덤부스터",
        releaseDate: "2016-07-16",
        price: "972",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-50",
    series: "burst",
    releases: {
      kr: {
        no: "B-50",
        name: "베이스타디움 와이드타입",
        kind: "툴",
        releaseDate: "2016-08-10",
        price: "21300",
        composition: [
          { name: "베이스타디움 와이드타입", quantity: "1개", target: "TOOLS-BURST-BURST-BEYSTADIUM-WIDE" }
        ]
      },
      jp: {
        no: "B-50",
        name: "버스트 베이스타디움 와이드타입",
        kind: "툴",
        releaseDate: "2016-07-16",
        price: "2700",
        composition: [
          { name: "버스트 베이스타디움 와이드타입", quantity: "1개", target: "TOOLS-BURST-BURST-BEYSTADIUM-WIDE" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-51",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-51",
        name: "wbba. 핑거밴드",
        kind: "툴",
        releaseDate: "2016-07-16",
        price: "648",
        composition: [
          { name: "wbba. 핑거밴드", quantity: "2개", target: "TOOLS-BURST-WBBA-FINGER-BAND" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-52",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-52",
        name: "베이미상가 메이커",
        kind: "툴",
        releaseDate: "2016-07-16",
        price: "1944",
        composition: [
          { name: "베이미상가 메이커", quantity: "1개", target: "TOOLS-BURST-BEY-MISANGA-MAKER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-53",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-53",
        name: "베이미상가 빅토리 발키리 Ver.",
        kind: "툴",
        releaseDate: "2016-07-16",
        price: "410",
        composition: [
          { name: "베이미상가", quantity: "1개", target: "TOOLS-BURST-BEY-MISANGA" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-54",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-54",
        name: "베이미상가 스톰 스프리건 Ver.",
        kind: "툴",
        releaseDate: "2016-07-16",
        price: "410",
        composition: [
          { name: "베이미상가", quantity: "1개", target: "TOOLS-BURST-BEY-MISANGA" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-55",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-55",
        name: "베이미상가 스트링 세트",
        kind: "세트",
        releaseDate: "2016-07-16",
        price: "972",
        composition: [
          { name: "베이미상가용 실타래", quantity: "8종", target: "TOOLS-BURST-BEY-MISANGA-THREAD" },
          { name: "wbba. 배지", quantity: "4개", target: "TOOLS-BURST-WBBA-BADGE" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-56",
    series: "burst",
    releases: {
      kr: {
        no: "B-56",
        name: "언락 유니콘.D.N",
        kind: "부스터",
        releaseDate: "2016-09-23",
        price: "10700",
        composition: [
          { name: "언락 유니콘.D.N", quantity: "1개", target: "BEY-BURST-B-56-UNLOCK-UNICORN-D-N" }
        ]
      },
      jp: {
        no: "B-56",
        name: "언락 유니콘.D.N",
        kind: "부스터",
        releaseDate: "2016-08-06",
        price: "972",
        composition: [
          { name: "언락 유니콘.D.N", quantity: "1개", target: "BEY-BURST-B-56-UNLOCK-UNICORN-D-N" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-57",
    series: "burst",
    releases: {
      kr: {
        no: "B-57",
        name: "트리플 부스터 세트",
        kind: "세트",
        releaseDate: "2016-09-23",
        price: "26200",
        composition: [
          { name: "빅토리 발키리.U.Q", quantity: "1개", target: "BEY-BURST-B-57-VICTORY-VALKYRIE-U-Q" },
          { name: "노바 넵튠.V.T", quantity: "1개", target: "BEY-BURST-B-57-NOVA-NEPTUNE-V-T" },
          { name: "카오스.O.G", quantity: "1개", target: "BEY-BURST-B-57-CHAOS-O-G" }
        ]
      },
      jp: {
        no: "B-57",
        name: "트리플 부스터 세트",
        kind: "세트",
        releaseDate: "2016-08-06",
        price: "2700",
        composition: [
          { name: "빅토리 발키리.U.Q", quantity: "1개", target: "BEY-BURST-B-57-VICTORY-VALKYRIE-U-Q" },
          { name: "노바 넵튠.V.T", quantity: "1개", target: "BEY-BURST-B-57-NOVA-NEPTUNE-V-T" },
          { name: "카오스.O.G", quantity: "1개", target: "BEY-BURST-B-57-CHAOS-O-G" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-58",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-58",
        name: "카라비나그립",
        kind: "툴",
        releaseDate: "2016-08-06",
        price: "648",
        composition: [
          { name: "카라비나그립", quantity: "1개", target: "TOOLS-BURST-CARABINER-GRIP" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-59",
    series: "burst",
    releases: {
      kr: {
        no: "B-59",
        name: "질리언 제우스.I.W",
        kind: "스타터",
        releaseDate: "2016-10-14",
        price: "17200",
        composition: [
          { name: "질리언 제우스.I.W", quantity: "1개", target: "BEY-BURST-B-59-ZILLION-ZEUS-I-W" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-59",
        name: "질리언 제우스.I.W",
        kind: "스타터",
        releaseDate: "2016-09-17",
        price: "1404",
        composition: [
          { name: "질리언 제우스.I.W", quantity: "1개", target: "BEY-BURST-B-59-ZILLION-ZEUS-I-W" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-60",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-60",
        name: "그립웨이트",
        kind: "툴",
        releaseDate: "2016-09-17",
        price: "648",
        composition: [
          { name: "그립웨이트", quantity: "1개", target: "TOOLS-BURST-GRIP-WEIGHT" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-61",
    series: "burst",
    releases: {
      kr: {
        no: "B-61",
        name: "랜덤부스터 Vol.4 쿼드 케찰콰틀.J.P",
        kind: "랜덤부스터",
        releaseDate: "2018-04-19",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-61",
        name: "랜덤부스터 Vol.4 쿼드 케찰콰틀.J.P",
        kind: "랜덤부스터",
        releaseDate: "2016-10-22",
        price: "972",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-62",
    series: "burst",
    releases: {
      kr: {
        no: "B-62",
        name: "듀얼 스핀 베이스타디움 DX 세트",
        kind: "세트",
        releaseDate: "2016-10-14",
        price: "59900",
        composition: [
          { name: "팽 펜리르.B.J", quantity: "1개", target: "BEY-BURST-B-62-FANG-FENRIR-B-J" },
          { name: "프로토런처", quantity: "1개", target: "TOOLS-BURST-PROTO-LAUNCHER" },
          { name: "듀얼 싸이클론 베이스타디움", quantity: "1개", target: "TOOLS-BURST-DUAL-CYCLONE-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-62",
        name: "듀얼사이클론 베이스타디움 DX 세트",
        kind: "세트",
        releaseDate: "2016-10-22",
        price: "6480",
        composition: [
          { name: "팽 펜리르.B.J", quantity: "1개", target: "BEY-BURST-B-62-FANG-FENRIR-B-J" },
          { name: "프로토런처", quantity: "1개", target: "TOOLS-BURST-PROTO-LAUNCHER" },
          { name: "듀얼 싸이클론 베이스타디움", quantity: "1개", target: "TOOLS-BURST-DUAL-CYCLONE-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-63",
    series: "burst",
    releases: {
      kr: {
        no: "B-63",
        name: "비스트 베히모스.H.H",
        kind: "부스터",
        releaseDate: "2017-01-03",
        price: "10700",
        composition: [
          { name: "비스트 베히모스.H.H", quantity: "1개", target: "BEY-BURST-B-63-BEAST-BEHEMOTH-H-H" }
        ]
      },
      jp: {
        no: "B-63",
        name: "비스트 베히모스.H.H",
        kind: "부스터",
        releaseDate: "2016-11-12",
        price: "972",
        composition: [
          { name: "비스트 베히모스.H.H", quantity: "1개", target: "BEY-BURST-B-63-BEAST-BEHEMOTH-H-H" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-64",
    series: "burst",
    releases: {
      kr: {
        no: "B-64",
        name: "베이블레이드 슈퍼 개조 세트 헤비 Ver.",
        kind: "세트",
        releaseDate: "2017-01-03",
        price: "35300",
        composition: [
          { name: "빅토리 발키리.T.U", quantity: "1개", target: "BEY-BURST-B-64-VICTORY-VALKYRIE-T-U" },
          { name: "인페르노 이프리트.M.L", quantity: "1개", target: "BEY-BURST-B-64-INFERNO-IFRIT-M-L" },
          { name: "스톰 스프리건.B.I", quantity: "1개", target: "BEY-BURST-B-64-STORM-SPRIGGAN-B-I" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      },
      jp: {
        no: "B-64",
        name: "베이블레이드 초개조 세트 헤비 Ver.",
        kind: "세트",
        releaseDate: "2016-11-12",
        price: "3780",
        composition: [
          { name: "빅토리 발키리.T.U", quantity: "1개", target: "BEY-BURST-B-64-VICTORY-VALKYRIE-T-U" },
          { name: "인페르노 이프리트.M.L", quantity: "1개", target: "BEY-BURST-B-64-INFERNO-IFRIT-M-L" },
          { name: "스톰 스프리건.B.I", quantity: "1개", target: "BEY-BURST-B-64-STORM-SPRIGGAN-B-I" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-65",
    series: "burst",
    releases: {
      kr: {
        no: "B-65",
        name: "베이블레이드 슈퍼 개조 세트 스피드 Ver.",
        kind: "세트",
        releaseDate: "2017-01-03",
        price: "35300",
        composition: [
          { name: "와일드 와이번.I.Y", quantity: "1개", target: "BEY-BURST-B-65-WILD-WYVERN-I-Y" },
          { name: "사이킥 팬텀.P.W", quantity: "1개", target: "BEY-BURST-B-65-PSYCHIC-PHANTOM-P-W" },
          { name: "카이저 케르베우스.D.O", quantity: "1개", target: "BEY-BURST-B-65-KAISER-KERBEUS-D-O" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      },
      jp: {
        no: "B-65",
        name: "베이블레이드 초개조 세트 스피드 Ver.",
        kind: "세트",
        releaseDate: "2016-11-12",
        price: "3780",
        composition: [
          { name: "와일드 와이번.I.Y", quantity: "1개", target: "BEY-BURST-B-65-WILD-WYVERN-I-Y" },
          { name: "사이킥 팬텀.P.W", quantity: "1개", target: "BEY-BURST-B-65-PSYCHIC-PHANTOM-P-W" },
          { name: "카이저 케르베우스.D.O", quantity: "1개", target: "BEY-BURST-B-65-KAISER-KERBEUS-D-O" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-66",
    series: "burst",
    releases: {
      kr: {
        no: "B-66",
        name: "로스트 롱기누스.N.Sp",
        kind: "스타터",
        releaseDate: "2017-01-03",
        price: "17200",
        composition: [
          { name: "로스트 롱기누스.N.Sp", quantity: "1개", target: "BEY-BURST-B-66-LOST-LONGINUS-N-SP" },
          { name: "베이런처L", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-66",
        name: "로스트 롱기누스.N.Sp",
        kind: "스타터",
        releaseDate: "2016-12-28",
        price: "1620",
        composition: [
          { name: "로스트 롱기누스.N.Sp", quantity: "1개", target: "BEY-BURST-B-66-LOST-LONGINUS-N-SP" },
          { name: "베이런처L", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-67",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-67",
        name: "랜덤부스터 Vol.5 기간트 가이아.Q.F",
        kind: "랜덤부스터",
        releaseDate: "2016-12-28",
        price: "972",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-68",
    series: "burst",
    releases: {
      kr: {
        no: "B-68",
        name: "블레이더즈 소프트케이스",
        kind: "툴",
        releaseDate: "2017-10-13",
        price: "32800",
        composition: [
          { name: "블레이더즈 소프트케이스", quantity: "1개", target: "TOOLS-BURST-BLADERS-SOFT-CASE" }
        ]
      },
      jp: {
        no: "B-68",
        name: "블레이더즈 소프트케이스",
        kind: "툴",
        releaseDate: "2016-12-28",
        price: "3240",
        composition: [
          { name: "블레이더즈 소프트케이스", quantity: "1개", target: "TOOLS-BURST-BLADERS-SOFT-CASE" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-69",
    series: "burst",
    releases: {
      kr: {
        no: "B-69",
        name: "제일 요르문간드.I.Cy",
        kind: "부스터",
        releaseDate: "2017-02-04",
        price: "12300",
        composition: [
          { name: "제일 요르문간드.I.Cy", quantity: "1개", target: "BEY-BURST-B-69-JAIL-JORMUNGAND-I-CY" }
        ]
      },
      jp: {
        no: "B-69",
        name: "제일 요르문간드.I.Cy",
        kind: "부스터",
        releaseDate: "2017-01-21",
        price: "972",
        composition: [
          { name: "제일 요르문간드.I.Cy", quantity: "1개", target: "BEY-BURST-B-69-JAIL-JORMUNGAND-I-CY" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-70",
    series: "burst",
    releases: {
      kr: {
        no: "B-70",
        name: "소드런처(블루)",
        kind: "툴",
        releaseDate: "2017-05-11",
        price: "6000",
        composition: [
          { name: "소드런처(블루)", quantity: "1개", target: "TOOLS-BURST-SWORD-LAUNCHER-BLUE" }
        ]
      },
      jp: {
        no: "B-70",
        name: "소드런처(블루)",
        kind: "툴",
        releaseDate: "2017-01-21",
        price: "702",
        composition: [
          { name: "소드런처", quantity: "1개", target: "TOOLS-BURST-SWORD-LAUNCHER-BLUE" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-71",
    series: "burst",
    releases: {
      kr: {
        no: "B-71",
        name: "애시드 아누비스.Y.O",
        kind: "부스터",
        releaseDate: "2017-03-01",
        price: "12300",
        composition: [
          { name: "애시드 아누비스.Y.O", quantity: "1개", target: "BEY-BURST-B-71-ACID-ANUBIS-Y-O" }
        ]
      },
      jp: {
        no: "B-71",
        name: "애시드 아누비스.Y.O",
        kind: "부스터",
        releaseDate: "2017-02-25",
        price: "972",
        composition: [
          { name: "애시드 아누비스.Y.O", quantity: "1개", target: "BEY-BURST-B-71-ACID-ANUBIS-Y-O" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-72",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-72",
        name: "파워트리거",
        kind: "툴",
        releaseDate: "2017-02-25",
        price: "540",
        composition: [
          { name: "파워트리거", quantity: "1개", target: "TOOLS-BURST-POWER-TRIGGER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-73",
    series: "burst",
    releases: {
      kr: {
        no: "B-73",
        name: "갓 발키리.6V.Rb",
        kind: "스타터",
        releaseDate: "2017-05-11",
        price: "17200",
        composition: [
          { name: "갓 발키리.6V.Rb", quantity: "1개", target: "BEY-BURST-B-73-GOD-VALKYRIE-6V-RB" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-73",
        name: "갓 발키리.6V.Rb",
        kind: "스타터",
        releaseDate: "2017-03-18",
        price: "1512",
        composition: [
          { name: "갓 발키리.6V.Rb", quantity: "1개", target: "BEY-BURST-B-73-GOD-VALKYRIE-6V-RB" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-74",
    series: "burst",
    releases: {
      kr: {
        no: "B-74",
        name: "크라이스 사탄.2G.Lp",
        kind: "스타터",
        releaseDate: "2017-05-11",
        price: "17200",
        composition: [
          { name: "크라이스 사탄.2G.Lp", quantity: "1개", target: "BEY-BURST-B-74-KREIS-SATAN-2G-LP" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-74",
        name: "크라이스 사탄.2G.Lp",
        kind: "스타터",
        releaseDate: "2017-03-18",
        price: "1404",
        composition: [
          { name: "크라이스 사탄.2G.Lp", quantity: "1개", target: "BEY-BURST-B-74-KREIS-SATAN-2G-LP" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-75",
    series: "burst",
    releases: {
      kr: {
        no: "B-75",
        name: "블레이즈 라그나로크.4C.Fl",
        kind: "부스터",
        releaseDate: "2017-05-11",
        price: "12300",
        composition: [
          { name: "블레이즈 라그나로크.4C.Fl", quantity: "1개", target: "BEY-BURST-B-75-BLAZE-RAGNARUK-4C-FL" }
        ]
      },
      jp: {
        no: "B-75",
        name: "블레이즈 라그나로크.4C.Fl",
        kind: "부스터",
        releaseDate: "2017-03-18",
        price: "972",
        composition: [
          { name: "블레이즈 라그나로크.4C.Fl", quantity: "1개", target: "BEY-BURST-B-75-BLAZE-RAGNARUK-4C-FL" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-76",
    series: "burst",
    releases: {
      kr: {
        no: "B-76",
        name: "베이블레이드 갓 엔트리 세트",
        kind: "세트",
        releaseDate: "2017-05-11",
        price: "49200",
        composition: [
          { name: "갓 발키리.6V.Rb", quantity: "1개", target: "BEY-BURST-B-76-VALKYRIE-6V-RB" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" },
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-76",
        name: "베이블레이드 갓 엔트리 세트",
        kind: "세트",
        releaseDate: "2017-03-18",
        price: "4428",
        composition: [
          { name: "갓 발키리.6V.Rb", quantity: "1개", target: "BEY-BURST-B-76-VALKYRIE-6V-RB" },
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" },
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-77",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-77",
        name: "베이로거 플러스",
        kind: "툴",
        releaseDate: "2017-03-18",
        price: "1944",
        composition: [
          { name: "베이로거 플러스", quantity: "1개", target: "TOOLS-BURST-BEYLOGGER-PLUS" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-78",
    series: "burst",
    releases: {
      kr: {
        no: "B-78",
        name: "베이런처(블랙)",
        kind: "툴",
        releaseDate: "2018-03-14",
        price: "6600",
        composition: [
          { name: "베이런처(블랙)", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      },
      jp: {
        no: "B-78",
        name: "베이런처(블랙)",
        kind: "툴",
        releaseDate: "2017-03-18",
        price: "756",
        composition: [
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-79",
    series: "burst",
    releases: {
      kr: {
        no: "B-79",
        name: "드레인 파브닐.8.Nt",
        kind: "스타터",
        releaseDate: "2017-07-01",
        price: "17200",
        composition: [
          { name: "드레인 파브닐.8.Nt", quantity: "1개", target: "BEY-BURST-B-79-DRAIN-FAFNIR-8-NT" },
          { name: "엔트리런처L", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-79",
        name: "드레인 파브닐.8.Nt",
        kind: "스타터",
        releaseDate: "2017-04-29",
        price: "1404",
        composition: [
          { name: "드레인 파브닐.8.Nt", quantity: "1개", target: "BEY-BURST-B-79-DRAIN-FAFNIR-8-NT" },
          { name: "엔트리런처L", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-80",
    series: "burst",
    releases: {
      kr: {
        no: "B-80",
        name: "랜덤부스터 Vol.6",
        kind: "랜덤부스터",
        releaseDate: "2017-07-01",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-80",
        name: "랜덤부스터 Vol.6 토네이도 와이번.4G.At",
        kind: "랜덤부스터",
        releaseDate: "2017-04-29",
        price: "972",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-81",
    series: "burst",
    releases: {
      kr: {
        no: "B-81",
        name: "라이트런처L",
        kind: "툴",
        releaseDate: "2017-09-11",
        price: "6600",
        composition: [
          { name: "라이트런처L", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-81",
        name: "라이트런처L",
        kind: "툴",
        releaseDate: "2017-04-29",
        price: "540",
        composition: [
          { name: "라이트런처L", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-82",
    series: "burst",
    releases: {
      kr: {
        no: "B-82",
        name: "알타 크로노스.6M.T",
        kind: "부스터",
        releaseDate: "2017-08-01",
        price: "12300",
        composition: [
          { name: "알타 크로노스.6M.T", quantity: "1개", target: "BEY-BURST-B-82-ALTER-CHRONOS-6M-T" }
        ]
      },
      jp: {
        no: "B-82",
        name: "알타 크로노스.6M.T",
        kind: "부스터",
        releaseDate: "2017-05-27",
        price: "972",
        composition: [
          { name: "알타 크로노스.6M.T", quantity: "1개", target: "BEY-BURST-B-82-ALTER-CHRONOS-6M-T" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-83",
    series: "burst",
    releases: {
      kr: {
        no: "B-83",
        name: "너클그립",
        kind: "툴",
        releaseDate: "2017-08-01",
        price: "6600",
        composition: [
          { name: "너클그립", quantity: "1개", target: "TOOLS-BURST-KNUCKLE-GRIP" }
        ]
      },
      jp: {
        no: "B-83",
        name: "너클그립",
        kind: "툴",
        releaseDate: "2017-05-27",
        price: "648",
        composition: [
          { name: "너클그립", quantity: "1개", target: "TOOLS-BURST-KNUCKLE-GRIP" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-84",
    series: "burst",
    releases: {
      kr: {
        no: "B-84",
        name: "3on3 배틀케이스",
        kind: "툴",
        releaseDate: "2017-08-01",
        price: "6600",
        composition: [
          { name: "3on3 배틀케이스", quantity: "1개", target: "TOOLS-BURST-BATTLE-CASE-3ON3" }
        ]
      },
      jp: {
        no: "B-84",
        name: "3on3 배틀케이스",
        kind: "툴",
        releaseDate: "2017-05-27",
        price: "540",
        composition: [
          { name: "3on3 배틀케이스", quantity: "1개", target: "TOOLS-BURST-BATTLE-CASE-3ON3" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-85",
    series: "burst",
    releases: {
      kr: {
        no: "B-85",
        name: "킬러 데스사이저.2V.Hn",
        kind: "부스터",
        releaseDate: "2017-08-17",
        price: "12300",
        composition: [
          { name: "킬러 데스사이저.2V.Hn", quantity: "1개", target: "BEY-BURST-B-85-KILLER-DEATHSCYTHER-2V-HN" }
        ]
      },
      jp: {
        no: "B-85",
        name: "킬러 데스사이저.2V.Hn",
        kind: "부스터",
        releaseDate: "2017-07-01",
        price: "972",
        composition: [
          { name: "킬러 데스사이저.2V.Hn", quantity: "1개", target: "BEY-BURST-B-85-KILLER-DEATHSCYTHER-2V-HN" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-86",
    series: "burst",
    releases: {
      kr: {
        no: "B-86",
        name: "레전드 스프리건.7.Mr",
        kind: "스타터",
        releaseDate: "2017-09-01",
        price: "19700",
        composition: [
          { name: "레전드 스프리건.7.Mr", quantity: "1개", target: "BEY-BURST-B-86-LEGEND-SPRIGGAN-7-MR" },
          { name: "라이트런처LR", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-86",
        name: "레전드 스프리건.7.Mr",
        kind: "스타터",
        releaseDate: "2017-07-01",
        price: "1620",
        composition: [
          { name: "레전드 스프리건.7.Mr", quantity: "1개", target: "BEY-BURST-B-86-LEGEND-SPRIGGAN-7-MR" },
          { name: "라이트런처LR", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-87",
    series: "burst",
    releases: {
      kr: {
        no: "B-87",
        name: "랜덤부스터 Vol.7",
        kind: "랜덤부스터",
        releaseDate: "2017-10-10",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-87",
        name: "랜덤부스터 Vol.7 맥시멈 가루다.8F.Fl",
        kind: "랜덤부스터",
        releaseDate: "2017-07-15",
        price: "972",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-88",
    series: "burst",
    releases: {
      kr: {
        no: "B-88",
        name: "베이런처LR",
        kind: "툴",
        releaseDate: "2018-01-03",
        price: "8200",
        composition: [
          { name: "베이런처LR", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-88",
        name: "베이런처LR",
        kind: "툴",
        releaseDate: "2017-08-11",
        price: "864",
        composition: [
          { name: "베이런처LR", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-89",
    series: "burst",
    releases: {
      kr: {
        no: "B-89",
        name: "블라스트 지니어스.5G.Gr",
        kind: "부스터",
        releaseDate: "2017-11-07",
        price: "12300",
        composition: [
          { name: "블라스트 지니어스.5G.Gr", quantity: "1개", target: "BEY-BURST-B-89-BLAST-JINNIUS-5G-GR" }
        ]
      },
      jp: {
        no: "B-89",
        name: "블라스트 지니어스.5G.Gr",
        kind: "부스터",
        releaseDate: "2017-08-11",
        price: "972",
        composition: [
          { name: "블라스트 지니어스.5G.Gr", quantity: "1개", target: "BEY-BURST-B-89-BLAST-JINNIUS-5G-GR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-90",
    series: "burst",
    releases: {
      kr: {
        no: "B-90",
        name: "3on3 배틀 부스터 세트",
        kind: "세트",
        releaseDate: "2017-11-07",
        price: "32800",
        composition: [
          { name: "갤럭시 제우스.4M.Pl", quantity: "1개", target: "BEY-BURST-B-90-GALAXY-ZEUS-4M-PL" },
          { name: "가디언 케르베우스.H.R", quantity: "1개", target: "BEY-BURST-B-90-GUARDIAN-KERBEUS-H-R" },
          { name: "매드 미노보로스.Q.Q", quantity: "1개", target: "BEY-BURST-B-90-MAD-MINOBOROS-Q-Q" }
        ]
      },
      jp: {
        no: "B-90",
        name: "3on3 배틀 부스터 세트",
        kind: "세트",
        releaseDate: "2017-08-11",
        price: "2700",
        composition: [
          { name: "갤럭시 제우스.4M.Pl", quantity: "1개", target: "BEY-BURST-B-90-GALAXY-ZEUS-4M-PL" },
          { name: "가디언 케르베우스.H.R", quantity: "1개", target: "BEY-BURST-B-90-GUARDIAN-KERBEUS-H-R" },
          { name: "매드 미노보로스.Q.Q", quantity: "1개", target: "BEY-BURST-B-90-MAD-MINOBOROS-Q-Q" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-91",
    series: "burst",
    releases: {
      kr: {
        no: "B-91",
        name: "메탈갓칩",
        kind: "툴",
        releaseDate: "2017-11-07",
        price: "4900",
        composition: [
          { name: "메탈갓칩", quantity: "2개", target: "TOOLS-BURST-METAL-GOD-CHIP" },
          { name: "갓칩 툴", quantity: "1개", target: "TOOLS-BURST-GOD-CHIP-TOOL" }
        ]
      },
      jp: {
        no: "B-91",
        name: "메탈갓칩",
        kind: "툴",
        releaseDate: "2017-08-11",
        price: "540",
        composition: [
          { name: "메탈갓칩", quantity: "2개", target: "TOOLS-BURST-METAL-GOD-CHIP" },
          { name: "갓칩 툴", quantity: "1개", target: "TOOLS-BURST-GOD-CHIP-TOOL" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-92",
    series: "burst",
    releases: {
      kr: {
        no: "B-92",
        name: "지크 엑스칼리버.1.Ir",
        kind: "스타터",
        releaseDate: "2017-11-07",
        price: "18000",
        composition: [
          { name: "지크 엑스칼리버.1.Ir", quantity: "1개", target: "BEY-BURST-B-92-SIEG-XCALIBUR-1-IR" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-92",
        name: "지크 엑스칼리버.1.Ir",
        kind: "스타터",
        releaseDate: "2017-09-16",
        price: "1512",
        composition: [
          { name: "지크 엑스칼리버.1.Ir", quantity: "1개", target: "BEY-BURST-B-92-SIEG-XCALIBUR-1-IR" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-93",
    series: "burst",
    releases: {
      kr: {
        no: "B-93",
        name: "디지털소드런처 (블루 Ver.)",
        kind: "툴",
        releaseDate: "2017-10-31",
        price: "39400",
        composition: [
          { name: "디지털소드런처 (블루 Ver.)", quantity: "1개", target: "TOOLS-BURST-DIGITAL-SWORD-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-93",
        name: "디지털소드런처(블루 Ver.)",
        kind: "툴",
        releaseDate: "2017-09-16",
        price: "3240",
        composition: [
          { name: "디지털소드런처", quantity: "1개", target: "TOOLS-BURST-DIGITAL-SWORD-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-94",
    series: "burst",
    releases: {
      kr: {
        no: "B-94",
        name: "디지털소드런처 (레드 Ver.)",
        kind: "툴",
        releaseDate: "2017-10-31",
        price: "39400",
        composition: [
          { name: "디지털소드런처 (레드 Ver.)", quantity: "1개", target: "TOOLS-BURST-DIGITAL-SWORD-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-94",
        name: "디지털소드런처(레드 Ver.)",
        kind: "툴",
        releaseDate: "2017-09-16",
        price: "3240",
        composition: [
          { name: "디지털소드런처", quantity: "1개", target: "TOOLS-BURST-DIGITAL-SWORD-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-95",
    series: "burst",
    releases: {
      kr: {
        no: "B-95",
        name: "랜덤부스터 Vol.8",
        kind: "랜덤부스터",
        releaseDate: "2017-11-07",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-95",
        name: "랜덤부스터 Vol.8 셸터 레굴루스.5S.Tw",
        kind: "랜덤부스터",
        releaseDate: "2017-10-21",
        price: "972",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-96",
    series: "burst",
    releases: {
      kr: {
        no: "B-96",
        name: "무한 스핀 베이스타디움 DX 세트",
        kind: "세트",
        releaseDate: "2017-11-28",
        price: "69700",
        composition: [
          { name: "스트라이크 갓 발키리.∞", quantity: "1개", target: "BEY-BURST-B-96-STRIKE-GOD-VALKYRIE-MUGEN" },
          { name: "스트라이크갓칩 툴", quantity: "1개", target: "TOOLS-BURST-STRIKE-GOD-CHIP-TOOL" },
          { name: "무한 베이스타디움", quantity: "1개", target: "TOOLS-BURST-MUGEN-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-96",
        name: "무한 베이스타디움 DX 세트",
        kind: "세트",
        releaseDate: "2017-10-21",
        price: "6912",
        composition: [
          { name: "스트라이크 갓 발키리.∞", quantity: "1개", target: "BEY-BURST-B-96-STRIKE-GOD-VALKYRIE-MUGEN" },
          { name: "스트라이크갓칩 툴", quantity: "1개", target: "TOOLS-BURST-STRIKE-GOD-CHIP-TOOL" },
          { name: "무한 베이스타디움", quantity: "1개", target: "TOOLS-BURST-MUGEN-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-97",
    series: "burst",
    releases: {
      kr: {
        no: "B-97",
        name: "나이트메어 롱기누스.Ds",
        kind: "스타터",
        releaseDate: "2018-01-03",
        price: "18000",
        composition: [
          { name: "나이트메어 롱기누스.Ds", quantity: "1개", target: "BEY-BURST-B-97-NIGHTMARE-LONGINUS-DS" },
          { name: "엔트리런처L", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-97",
        name: "나이트메어 롱기누스.Ds",
        kind: "스타터",
        releaseDate: "2017-11-11",
        price: "1512",
        composition: [
          { name: "나이트메어 롱기누스.Ds", quantity: "1개", target: "BEY-BURST-B-97-NIGHTMARE-LONGINUS-DS" },
          { name: "엔트리런처L", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-98",
    series: "burst",
    releases: {
      kr: {
        no: "B-98",
        name: "갓 커스터마이즈 세트",
        kind: "세트",
        releaseDate: "2018-01-03",
        price: "49200",
        composition: [
          { name: "아크 바하무트.2B.At", quantity: "1개", target: "BEY-BURST-B-98-ARC-BAHAMUT-2B-AT" },
          { name: "딥 카오스.4F.Br", quantity: "1개", target: "BEY-BURST-B-98-DEEP-CHAOS-4F-BR" },
          { name: "드레인 파브닐.7S.Z", quantity: "1개", target: "BEY-BURST-B-98-DRAIN-FAFNIR-7S-Z" },
          { name: "토네이도 와이번.1M.S", quantity: "1개", target: "BEY-BURST-B-98-TORNADO-WYVERN-1M-S" },
          { name: "갓칩 툴", quantity: "1개", target: "TOOLS-BURST-GOD-CHIP-TOOL" }
        ]
      },
      jp: {
        no: "B-98",
        name: "갓 개조 세트",
        kind: "세트",
        releaseDate: "2017-11-11",
        price: "4968",
        composition: [
          { name: "아크 바하무트.2B.At", quantity: "1개", target: "BEY-BURST-B-98-ARC-BAHAMUT-2B-AT" },
          { name: "딥 카오스.4F.Br", quantity: "1개", target: "BEY-BURST-B-98-DEEP-CHAOS-4F-BR" },
          { name: "드레인 파브닐.7S.Z", quantity: "1개", target: "BEY-BURST-B-98-DRAIN-FAFNIR-7S-Z" },
          { name: "토네이도 와이번.1M.S", quantity: "1개", target: "BEY-BURST-B-98-TORNADO-WYVERN-1M-S" },
          { name: "갓칩 툴", quantity: "1개", target: "TOOLS-BURST-GOD-CHIP-TOOL" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-99",
    series: "burst",
    releases: {
      kr: {
        no: "B-99",
        name: "베이런처L",
        kind: "툴",
        releaseDate: "2018-03-14",
        price: "8200",
        composition: [
          { name: "베이런처L", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-99",
        name: "베이런처L",
        kind: "툴",
        releaseDate: "2017-11-11",
        price: "756",
        composition: [
          { name: "베이런처L", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-100",
    series: "burst",
    releases: {
      kr: {
        no: "B-100",
        name: "스프리건 레퀴엠.0.Zt",
        kind: "스타터",
        releaseDate: "2018-03-01",
        price: "21300",
        composition: [
          { name: "스프리건 레퀴엠.0.Zt", quantity: "1개", target: "BEY-BURST-B-100-SPRIGGAN-REQUIEM-0-ZT" },
          { name: "라이트런처LR", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-100",
        name: "스프리건 레퀴엠.0.Zt",
        kind: "스타터",
        releaseDate: "2017-12-28",
        price: "1728",
        composition: [
          { name: "스프리건 레퀴엠.0.Zt", quantity: "1개", target: "BEY-BURST-B-100-SPRIGGAN-REQUIEM-0-ZT" },
          { name: "라이트런처LR", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-101",
    series: "burst",
    releases: {
      kr: {
        no: "B-101",
        name: "랜덤부스터 Vol.9",
        kind: "랜덤부스터",
        releaseDate: "2018-03-01",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-101",
        name: "랜덤부스터 Vol.9 비트 쿠쿨칸.7U.Hn",
        kind: "랜덤부스터",
        releaseDate: "2017-12-28",
        price: "972",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-102",
    series: "burst",
    releases: {
      kr: {
        no: "B-102",
        name: "트윈 네메시스.3H.Ul",
        kind: "부스터",
        releaseDate: "2018-04-03",
        price: "12300",
        composition: [
          { name: "트윈 네메시스.3H.Ul", quantity: "1개", target: "BEY-BURST-B-102-TWIN-NEMESIS-3H-UL" }
        ]
      },
      jp: {
        no: "B-102",
        name: "트윈 네메시스.3H.Ul",
        kind: "부스터",
        releaseDate: "2018-01-27",
        price: "972",
        composition: [
          { name: "트윈 네메시스.3H.Ul", quantity: "1개", target: "BEY-BURST-B-102-TWIN-NEMESIS-3H-UL" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-103",
    series: "burst",
    releases: {
      kr: {
        no: "B-103",
        name: "스크류 트라이던트.8B.Wd",
        kind: "부스터",
        releaseDate: "2018-04-03",
        price: "12300",
        composition: [
          { name: "스크류 트라이던트.8B.Wd", quantity: "1개", target: "BEY-BURST-B-103-SCREW-TRIDENT-8B-WD" }
        ]
      },
      jp: {
        no: "B-103",
        name: "스크류 트라이던트.8B.Wd",
        kind: "부스터",
        releaseDate: "2018-02-17",
        price: "972",
        composition: [
          { name: "스크류 트라이던트.8B.Wd", quantity: "1개", target: "BEY-BURST-B-103-SCREW-TRIDENT-8B-WD" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-104",
    series: "burst",
    releases: {
      kr: {
        no: "B-104",
        name: "위닝 발키리.12.Vl",
        kind: "스타터",
        releaseDate: "2018-05-23",
        price: "18000",
        composition: [
          { name: "위닝 발키리.12.Vl", quantity: "1개", target: "BEY-BURST-B-104-WINNING-VALKYRIE-12-VL" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-104",
        name: "위닝 발키리.12.Vl",
        kind: "스타터",
        releaseDate: "2018-03-17",
        price: "1512",
        composition: [
          { name: "위닝 발키리.12.Vl", quantity: "1개", target: "BEY-BURST-B-104-WINNING-VALKYRIE-12-VL" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-105",
    series: "burst",
    releases: {
      kr: {
        no: "B-105",
        name: "제트 아킬레스.11.Xt",
        kind: "스타터",
        releaseDate: "2018-05-23",
        price: "18000",
        composition: [
          { name: "제트 아킬레스.11.Xt", quantity: "1개", target: "BEY-BURST-B-105-Z-ACHILLES-11-XT" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-105",
        name: "제트 아킬레스.11.Xt",
        kind: "스타터",
        releaseDate: "2018-03-17",
        price: "1512",
        composition: [
          { name: "제트 아킬레스.11.Xt", quantity: "1개", target: "BEY-BURST-B-105-Z-ACHILLES-11-XT" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-106",
    series: "burst",
    releases: {
      kr: {
        no: "B-106",
        name: "엠퍼러 포르네우스.0.Yr",
        kind: "부스터",
        releaseDate: "2018-05-23",
        price: "12300",
        composition: [
          { name: "엠퍼러 포르네우스.0.Yr", quantity: "1개", target: "BEY-BURST-B-106-EMPEROR-FORNEUS-0-YR" }
        ]
      },
      jp: {
        no: "B-106",
        name: "엠퍼러 포르네우스.0.Yr",
        kind: "부스터",
        releaseDate: "2018-03-17",
        price: "993",
        composition: [
          { name: "엠퍼러 포르네우스.0.Yr", quantity: "1개", target: "BEY-BURST-B-106-EMPEROR-FORNEUS-0-YR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-107",
    series: "burst",
    releases: {
      kr: {
        no: "B-107",
        name: "베이블레이드 초Z 배틀 세트",
        kind: "세트",
        releaseDate: "2018-05-23",
        price: "51700",
        composition: [
          { name: "위닝 발키리.12.Vl", quantity: "1개", target: "BEY-BURST-B-107-WINNING-VALKYRIE-12-VL" },
          { name: "제트 아킬레스.11.Xt", quantity: "1개", target: "BEY-BURST-B-107-Z-ACHILLES-11-XT" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-107",
        name: "베이블레이드 초Z 대전 세트",
        kind: "세트",
        releaseDate: "2018-03-17",
        price: "4536",
        composition: [
          { name: "위닝 발키리.12.Vl", quantity: "1개", target: "BEY-BURST-B-107-WINNING-VALKYRIE-12-VL" },
          { name: "제트 아킬레스.11.Xt", quantity: "1개", target: "BEY-BURST-B-107-Z-ACHILLES-11-XT" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-108",
    series: "burst",
    releases: {
      kr: {
        no: "B-108",
        name: "베이런처(레드)",
        kind: "툴",
        releaseDate: "2018-05-23",
        price: "6600",
        composition: [
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      },
      jp: {
        no: "B-108",
        name: "베이런처(레드)",
        kind: "툴",
        releaseDate: "2018-03-17",
        price: "756",
        composition: [
          { name: "베이런처", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-109",
    series: "burst",
    releases: {
      kr: {
        no: "B-109",
        name: "런처그립(건메탈)",
        kind: "툴",
        releaseDate: "2018-05-23",
        price: "6600",
        composition: [
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" }
        ]
      },
      jp: {
        no: "B-109",
        name: "런처그립(건메탈)",
        kind: "툴",
        releaseDate: "2018-03-17",
        price: "648",
        composition: [
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-110",
    series: "burst",
    releases: {
      kr: {
        no: "B-110",
        name: "블러디 롱기누스.13.Jl",
        kind: "스타터",
        releaseDate: "2018-07-03",
        price: "18000",
        composition: [
          { name: "블러디 롱기누스.13.Jl", quantity: "1개", target: "BEY-BURST-B-110-BLOODY-LONGINUS-13-JL" },
          { name: "엔트리런처L", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-110",
        name: "블러디 롱기누스.13.Jl",
        kind: "스타터",
        releaseDate: "2018-04-28",
        price: "1512",
        composition: [
          { name: "블러디 롱기누스.13.Jl", quantity: "1개", target: "BEY-BURST-B-110-BLOODY-LONGINUS-13-JL" },
          { name: "엔트리런처L", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-111",
    series: "burst",
    releases: {
      kr: {
        no: "B-111",
        name: "랜덤부스터 Vol.10",
        kind: "랜덤부스터",
        releaseDate: "2018-07-03",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-111",
        name: "랜덤부스터 Vol.10 크래시 라그나로크.11R.Wd",
        kind: "랜덤부스터",
        releaseDate: "2018-04-28",
        price: "993",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-112",
    series: "burst",
    releases: {
      kr: {
        no: "B-112",
        name: "롱라이트런처LR",
        kind: "툴",
        releaseDate: "2018-07-03",
        price: "6600",
        composition: [
          { name: "롱라이트런처LR", quantity: "1개", target: "TOOLS-BURST-LONG-LIGHT-LAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-112",
        name: "롱라이트런처LR",
        kind: "툴",
        releaseDate: "2018-04-28",
        price: "756",
        composition: [
          { name: "롱라이트런처LR", quantity: "1개", target: "TOOLS-BURST-LONG-LIGHT-LAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-113",
    series: "burst",
    releases: {
      kr: {
        no: "B-113",
        name: "헬 살라맨더.12.Op",
        kind: "부스터",
        releaseDate: "2018-08-01",
        price: "12300",
        composition: [
          { name: "헬 살라맨더.12.Op", quantity: "1개", target: "BEY-BURST-B-113-HELL-SALAMANDER-12-OP" }
        ]
      },
      jp: {
        no: "B-113",
        name: "헬 샐러맨더.12.Op",
        kind: "부스터",
        releaseDate: "2018-05-26",
        price: "993",
        composition: [
          { name: "헬 샐러맨더.12.Op", quantity: "1개", target: "BEY-BURST-B-113-HELL-SALAMANDER-12-OP" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-114",
    series: "burst",
    releases: {
      kr: {
        no: "B-114",
        name: "그립웨이트(블랙)",
        kind: "툴",
        releaseDate: "2018-08-01",
        price: "8200",
        composition: [
          { name: "그립웨이트", quantity: "1개", target: "TOOLS-BURST-GRIP-WEIGHT" }
        ]
      },
      jp: {
        no: "B-114",
        name: "그립웨이트(블랙)",
        kind: "툴",
        releaseDate: "2018-05-26",
        price: "648",
        composition: [
          { name: "그립웨이트", quantity: "1개", target: "TOOLS-BURST-GRIP-WEIGHT" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-115",
    series: "burst",
    releases: {
      kr: {
        no: "B-115",
        name: "아처 헤라클레스.13.Et",
        kind: "부스터",
        releaseDate: "2018-08-09",
        price: "12300",
        composition: [
          { name: "아처 헤라클레스.13.Et", quantity: "1개", target: "BEY-BURST-B-115-ARCHER-HERCULES-13-ET" }
        ]
      },
      jp: {
        no: "B-115",
        name: "아처 헤라클레스.13.Et",
        kind: "부스터",
        releaseDate: "2018-06-23",
        price: "993",
        composition: [
          { name: "아처 헤라클레스.13.Et", quantity: "1개", target: "BEY-BURST-B-115-ARCHER-HERCULES-13-ET" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-116",
    series: "burst",
    releases: {
      kr: {
        no: "B-116",
        name: "그립러버(바이올렛)",
        kind: "툴",
        releaseDate: "2018-08-09",
        price: "6600",
        composition: [
          { name: "그립러버", quantity: "1개", target: "TOOLS-BURST-GRIP-RUBBER" }
        ]
      },
      jp: {
        no: "B-116",
        name: "그립러버(바이올렛)",
        kind: "툴",
        releaseDate: "2018-06-23",
        price: "540",
        composition: [
          { name: "그립러버", quantity: "1개", target: "TOOLS-BURST-GRIP-RUBBER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-117",
    series: "burst",
    releases: {
      kr: {
        no: "B-117",
        name: "리바이브 피닉스.10.Fr",
        kind: "스타터",
        releaseDate: "2018-09-03",
        price: "21300",
        composition: [
          { name: "리바이브 피닉스.10.Fr", quantity: "1개", target: "BEY-BURST-B-117-REVIVE-PHOENIX-10-FR" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-117",
        name: "리바이브 피닉스.10.Fr",
        kind: "스타터",
        releaseDate: "2018-07-07",
        price: "1782",
        composition: [
          { name: "리바이브 피닉스.10.Fr", quantity: "1개", target: "BEY-BURST-B-117-REVIVE-PHOENIX-10-FR" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-118",
    series: "burst",
    releases: {
      kr: {
        no: "B-118",
        name: "랜덤부스터 Vol.11",
        kind: "랜덤부스터",
        releaseDate: "2018-09-12",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-118",
        name: "랜덤부스터 Vol.11 바이스 레오파드.12L.Ds",
        kind: "랜덤부스터",
        releaseDate: "2018-07-14",
        price: "993",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-119",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-119",
        name: "베이런처LR(블루)",
        kind: "툴",
        releaseDate: "2018-07-14",
        price: "864",
        composition: [
          { name: "베이런처LR", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-00-KR-BLAZE-RAGNARUK-4S-B-RED",
    series: "burst",
    releases: {
      kr: {
        no: "B-00",
        name: "부스터 블레이즈 라그나로크.4S.B 레드 ver.",
        kind: "부스터",
        releaseDate: "2018-09-22",
        price: "12300",
        composition: [
          { name: "블레이즈 라그나로크.4S.B", quantity: "1개", target: "BEY-BURST-B-00-KR-BLAZE-RAGNARUK-4S-B" }
        ]
      },
      jp: {
        status: "unreleased"
      }
    }
  },
{
    id: "PRODUCT-BURST-BA-02-GUARDIAN-KERBEUS-H-R-RED",
    series: "burst",
    releases: {
      kr: {
        no: "BA-02",
        name: "부스터 가디언 케르베우스.H.R 레드 ver.",
        kind: "부스터",
        releaseDate: "2018-09-22",
        price: "12300",
        composition: [
          { name: "가디언 케르베우스.H.R", quantity: "1개", target: "BEY-BURST-BA-02-GUARDIAN-KERBEUS-H-R" }
        ]
      },
      jp: {
        status: "unreleased"
      }
    }
  },
{
    id: "PRODUCT-BURST-B-120",
    series: "burst",
    releases: {
      kr: {
        no: "B-120",
        name: "버스터 엑스칼리버.1'.Sw",
        kind: "스타터",
        releaseDate: "2018-10-05",
        price: "18000",
        composition: [
          { name: "버스터 엑스칼리버.1'.Sw", quantity: "1개", target: "BEY-BURST-B-120-BUSTER-XCALIBUR-1DASH-SW" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-120",
        name: "버스터 엑스칼리버.1'.Sw",
        kind: "스타터",
        releaseDate: "2018-08-11",
        price: "1512",
        composition: [
          { name: "버스터 엑스칼리버.1'.Sw", quantity: "1개", target: "BEY-BURST-B-120-BUSTER-XCALIBUR-1DASH-SW" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-121",
    series: "burst",
    releases: {
      kr: {
        no: "B-121",
        name: "초Z 트리플 부스터 세트",
        kind: "세트",
        releaseDate: "2018-11-07",
        price: "34400",
        composition: [
          { name: "해저드 케르베우스.7.At", quantity: "1개", target: "BEY-BURST-B-121-HAZARD-KERBEUS-7-AT" },
          { name: "제트 아킬레스.3D.Ds", quantity: "1개", target: "BEY-BURST-B-121-Z-ACHILLES-3D-DS" },
          { name: "하운드 도그.8.Br", quantity: "1개", target: "BEY-BURST-B-121-WOLBORG-8-BR" }
        ]
      },
      jp: {
        no: "B-121",
        name: "초Z 트리플 부스터 세트",
        kind: "세트",
        releaseDate: "2018-08-11",
        price: "2808",
        composition: [
          { name: "해저드 케르베우스.7.At", quantity: "1개", target: "BEY-BURST-B-121-HAZARD-KERBEUS-7-AT" },
          { name: "제트 아킬레스.3D.Ds", quantity: "1개", target: "BEY-BURST-B-121-Z-ACHILLES-3D-DS" },
          { name: "울보그.8.Br", quantity: "1개", target: "BEY-BURST-B-121-WOLBORG-8-BR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-122",
    series: "burst",
    releases: {
      kr: {
        no: "B-122",
        name: "가이스트 파브닐.8'.Ab",
        kind: "스타터",
        releaseDate: "2018-11-07",
        price: "19700",
        composition: [
          { name: "가이스트 파브닐.8'.Ab", quantity: "1개", target: "BEY-BURST-B-122-GEIST-FAFNIR-8DASH-AB" },
          { name: "엔트리런처L", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-122",
        name: "가이스트 파브닐.8'.Ab",
        kind: "스타터",
        releaseDate: "2018-09-22",
        price: "1566",
        composition: [
          { name: "가이스트 파브닐.8'.Ab", quantity: "1개", target: "BEY-BURST-B-122-GEIST-FAFNIR-8DASH-AB" },
          { name: "엔트리런처L", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-123",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-123",
        name: "롱베이런처 세트",
        kind: "세트",
        releaseDate: "2018-09-22",
        price: "2160",
        composition: [
          { name: "롱베이런처", quantity: "1개", target: "TOOLS-BURST-LONG-BEYLAUNCHER" },
          { name: "파워런처그립", quantity: "1개", target: "TOOLS-BURST-POWER-LAUNCHER-GRIP" },
          { name: "파워트리거", quantity: "1개", target: "TOOLS-BURST-POWER-TRIGGER" },
          { name: "익스텐드 칩", quantity: "1개", target: "TOOLS-BURST-XTEND-CHIP" },
          { name: "칩 툴", quantity: "1개", target: "TOOLS-BURST-CHIP-TOOL" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-124",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-124",
        name: "롱베이런처L 세트",
        kind: "세트",
        releaseDate: "2018-09-22",
        price: "2160",
        composition: [
          { name: "롱베이런처L", quantity: "1개", target: "TOOLS-BURST-LONG-BEYLAUNCHER-L" },
          { name: "카라비나그립", quantity: "1개", target: "TOOLS-BURST-CARABINER-GRIP" },
          { name: "웨이트댐퍼", quantity: "1개", target: "TOOLS-BURST-WEIGHT-DAMPER" },
          { name: "프루프 프레임", quantity: "1개", target: "FRAME-PROOF" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-125",
    series: "burst",
    releases: {
      kr: {
        no: "B-125",
        name: "랜덤부스터 Vol.12",
        kind: "랜덤부스터",
        releaseDate: "2018-11-07",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-125",
        name: "랜덤부스터 Vol.12 데드 하데스.11T.Z'",
        kind: "랜덤부스터",
        releaseDate: "2018-10-20",
        price: "993",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-126",
    series: "burst",
    releases: {
      kr: {
        no: "B-126",
        name: "초Z 무적 베이스타디움 DX 세트",
        kind: "세트",
        releaseDate: "2018-12-05",
        price: "77100",
        composition: [
          { name: "레프트 아폴로스.∞", quantity: "1개", target: "BEY-BURST-B-126-LEFT-APOLLOS-MUGEN" },
          { name: "라이트 아르테미스.∞", quantity: "1개", target: "BEY-BURST-B-126-RIGHT-ARTEMIS-MUGEN" },
          { name: "무적 베이스타디움", quantity: "1개", target: "TOOLS-BURST-MUSOU-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-126",
        name: "초Z 무쌍 베이스타디움",
        kind: "툴",
        releaseDate: "2018-10-20",
        price: "8100",
        composition: [
          { name: "레프트 아폴로스.∞", quantity: "1개", target: "BEY-BURST-B-126-LEFT-APOLLOS-MUGEN" },
          { name: "라이트 아르테미스.∞", quantity: "1개", target: "BEY-BURST-B-126-RIGHT-ARTEMIS-MUGEN" },
          { name: "무쌍 베이스타디움", quantity: "1개", target: "TOOLS-BURST-MUSOU-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-127",
    series: "burst",
    releases: {
      kr: {
        no: "B-127",
        name: "초Z 발키리.Z.Ev",
        kind: "스타터",
        releaseDate: "2018-01-03",
        price: "18000",
        composition: [
          { name: "초Z 발키리.Z.Ev", quantity: "1개", target: "BEY-BURST-B-127-CHO-Z-VALKYRIE-Z-EV" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-127",
        name: "초Z 발키리.Z.Ev",
        kind: "스타터",
        releaseDate: "2018-11-17",
        price: "1782",
        composition: [
          { name: "초Z 발키리.Z.Ev", quantity: "1개", target: "BEY-BURST-B-127-CHO-Z-VALKYRIE-Z-EV" },
          { name: "엔트리런처", quantity: "1개", target: "TOOLS-BURST-ENTRY-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-128",
    series: "burst",
    releases: {
      kr: {
        no: "B-128",
        name: "초Z 커스터마이즈 세트",
        kind: "세트",
        releaseDate: "2018-01-03",
        price: "49200",
        composition: [
          { name: "초Z 스프리건.0W.Zt'", quantity: "1개", target: "BEY-BURST-B-128-CHO-Z-SPRIGGAN-0W-ZT-DASH" },
          { name: "얼브 이지스.Ω.Qs", quantity: "1개", target: "BEY-BURST-B-128-ORB-EGIS-OUTER-QS" },
          { name: "크래시 라그나로크.5C.Vl'", quantity: "1개", target: "BEY-BURST-B-128-CRASH-RAGNARUK-5C-VL-DASH" },
          { name: "블러디 롱기누스.1D.Cy", quantity: "1개", target: "BEY-BURST-B-128-BLOODY-LONGINUS-1D-CY" },
          { name: "회전방향 전환 툴", quantity: "1개", target: "TOOLS-BURST-SPIN-DIRECTION-CHANGE-TOOL" }
        ]
      },
      jp: {
        no: "B-128",
        name: "초Z 개조 세트",
        kind: "세트",
        releaseDate: "2018-11-17",
        price: "5184",
        composition: [
          { name: "초Z 스프리건.0W.Zt'", quantity: "1개", target: "BEY-BURST-B-128-CHO-Z-SPRIGGAN-0W-ZT-DASH" },
          { name: "얼브 이지스.Ω.Qs", quantity: "1개", target: "BEY-BURST-B-128-ORB-EGIS-OUTER-QS" },
          { name: "크래시 라그나로크.5C.Vl'", quantity: "1개", target: "BEY-BURST-B-128-CRASH-RAGNARUK-5C-VL-DASH" },
          { name: "블러디 롱기누스.1D.Cy", quantity: "1개", target: "BEY-BURST-B-128-BLOODY-LONGINUS-1D-CY" },
          { name: "회전방향 전환 툴", quantity: "1개", target: "TOOLS-BURST-SPIN-DIRECTION-CHANGE-TOOL" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-129",
    series: "burst",
    releases: {
      kr: {
        no: "B-129",
        name: "초Z 아킬레스.00.Dm",
        kind: "스타터",
        releaseDate: "2018-02-08",
        price: "22100",
        composition: [
          { name: "초Z 아킬레스.00.Dm", quantity: "1개", target: "BEY-BURST-B-129-CHO-Z-ACHILLES-00-DM" },
          { name: "롱베이런처LR", quantity: "1개", target: "TOOLS-BURST-LONG-BEYLAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-129",
        name: "초Z 아킬레스.00.Dm",
        kind: "스타터",
        releaseDate: "2018-12-27",
        price: "2160",
        composition: [
          { name: "초Z 아킬레스.00.Dm", quantity: "1개", target: "BEY-BURST-B-129-CHO-Z-ACHILLES-00-DM" },
          { name: "롱베이런처LR", quantity: "1개", target: "TOOLS-BURST-LONG-BEYLAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-130",
    series: "burst",
    releases: {
      kr: {
        no: "B-130",
        name: "랜덤부스터 Vol.13",
        kind: "랜덤부스터",
        releaseDate: "2018-02-08",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-130",
        name: "랜덤부스터 Vol.13 에어 나이트.12E.Et",
        kind: "랜덤부스터",
        releaseDate: "2018-12-27",
        price: "993",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-131",
    series: "burst",
    releases: {
      kr: {
        no: "B-131",
        name: "데드 피닉스.0.At",
        kind: "부스터",
        releaseDate: "2018-03-05",
        price: "12300",
        composition: [
          { name: "데드 피닉스.0.At", quantity: "1개", target: "BEY-BURST-B-131-DEAD-PHOENIX-0-AT" }
        ]
      },
      jp: {
        no: "B-131",
        name: "데드 피닉스.0.At",
        kind: "부스터",
        releaseDate: "2019-01-26",
        price: "1080",
        composition: [
          { name: "데드 피닉스.0.At", quantity: "1개", target: "BEY-BURST-B-131-DEAD-PHOENIX-0-AT" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-132",
    series: "burst",
    releases: {
      kr: {
        no: "B-132",
        name: "랜덤부스터 Vol.14",
        kind: "랜덤부스터",
        releaseDate: "2018-03-21",
        price: "12300",
        composition: []
      },
      jp: {
        no: "B-132",
        name: "랜덤부스터 Vol.14 드래이거 팽.0.Xt",
        kind: "랜덤부스터",
        releaseDate: "2019-02-16",
        price: "993",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-133",
    series: "burst",
    releases: {
      kr: {
        no: "B-133",
        name: "에이스 드래곤.St.Ch 참",
        kind: "DX스타터",
        releaseDate: "2019-04-17",
        price: "27100",
        composition: [
          { name: "에이스 드래곤.St.Ch 참", quantity: "1개", target: "BEY-BURST-B-133-ACE-DRAGON-ST-CH-ZAN" },
          { name: "그랜드 베이스", quantity: "1개", target: "GACHIBASE-GRAND" },
          { name: "록 베이스", quantity: "1개", target: "GACHIBASE-ROCK" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-133",
        name: "에이스 드래곤.St.Ch 斬",
        kind: "DX스타터",
        releaseDate: "2019-03-16",
        price: "2700",
        composition: [
          { name: "에이스 드래곤.St.Ch 斬", quantity: "1개", target: "BEY-BURST-B-133-ACE-DRAGON-ST-CH-ZAN" },
          { name: "그랜드 베이스", quantity: "1개", target: "GACHIBASE-GRAND" },
          { name: "록 베이스", quantity: "1개", target: "GACHIBASE-ROCK" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-134",
    series: "burst",
    releases: {
      kr: {
        no: "B-134",
        name: "슬래시 발키리.Bl.Pw 열",
        kind: "부스터",
        releaseDate: "2019-04-17",
        price: "13900",
        composition: [
          { name: "슬래시 발키리.Bl.Pw 열", quantity: "1개", target: "BEY-BURST-B-134-SLASH-VALKYRIE-BL-PW-RETSU" }
        ]
      },
      jp: {
        no: "B-134",
        name: "슬래시 발키리.Bl.Pw 烈",
        kind: "부스터",
        releaseDate: "2019-03-16",
        price: "1296",
        composition: [
          { name: "슬래시 발키리.Bl.Pw 烈", quantity: "1개", target: "BEY-BURST-B-134-SLASH-VALKYRIE-BL-PW-RETSU" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-135",
    series: "burst",
    releases: {
      kr: {
        no: "B-135",
        name: "무신 아수라.Hr.Kp 천",
        kind: "부스터",
        releaseDate: "2019-04-17",
        price: "13900",
        composition: [
          { name: "무신 아수라.Hr.Kp 천", quantity: "1개", target: "BEY-BURST-B-135-BUSHIN-ASHURA-HR-KP-TEN" }
        ]
      },
      jp: {
        no: "B-135",
        name: "무신 아수라.Hr.Kp 天",
        kind: "부스터",
        releaseDate: "2019-03-16",
        price: "1296",
        composition: [
          { name: "무신 아수라.Hr.Kp 天", quantity: "1개", target: "BEY-BURST-B-135-BUSHIN-ASHURA-HR-KP-TEN" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-136",
    series: "burst",
    releases: {
      kr: {
        no: "B-136",
        name: "베이블레이드 진검 배틀 세트",
        kind: "세트",
        releaseDate: "2019-04-17",
        price: "53300",
        composition: [
          { name: "에이스 드래곤.St.Ch 참", quantity: "1개", target: "BEY-BURST-B-136-ACE-DRAGON-ST-CH-ZAN" },
          { name: "슬래시 발키리.Bl.Pw 열", quantity: "1개", target: "BEY-BURST-B-136-SLASH-VALKYRIE-BL-PW-RETSU" },
          { name: "그랜드 베이스", quantity: "1개", target: "GACHIBASE-GRAND" },
          { name: "록 베이스", quantity: "1개", target: "GACHIBASE-ROCK" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-136",
        name: "베이블레이드 GT 대전 세트",
        kind: "세트",
        releaseDate: "2019-03-16",
        price: "4968",
        composition: [
          { name: "에이스 드래곤.St.Ch 斬", quantity: "1개", target: "BEY-BURST-B-136-ACE-DRAGON-ST-CH-ZAN" },
          { name: "슬래시 발키리.Bl.Pw 烈", quantity: "1개", target: "BEY-BURST-B-136-SLASH-VALKYRIE-BL-PW-RETSU" },
          { name: "그랜드 베이스", quantity: "1개", target: "GACHIBASE-GRAND" },
          { name: "록 베이스", quantity: "1개", target: "GACHIBASE-ROCK" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-137",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-137",
        name: "롱베이런처(클리어블루)",
        kind: "툴",
        releaseDate: "2019-03-16",
        price: "810",
        composition: [
          { name: "롱베이런처", quantity: "1개", target: "TOOLS-BURST-LONG-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-138",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-138",
        name: "롱라이트런처(화이트)",
        kind: "툴",
        releaseDate: "2019-03-16",
        price: "648",
        composition: [
          { name: "롱라이트런처", quantity: "1개", target: "TOOLS-BURST-LONG-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-139",
    series: "burst",
    releases: {
      kr: {
        no: "B-139",
        name: "위저드 파브닐.Rt.Rs 섬",
        kind: "스타터",
        releaseDate: "2019-06-15",
        price: "21300",
        composition: [
          { name: "위저드 파브닐.Rt.Rs 섬", quantity: "1개", target: "BEY-BURST-B-139-WIZARD-FAFNIR-RT-RS-SEN" },
          { name: "라이트런처L", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-139",
        name: "위저드 파브닐.Rt.Rs 閃",
        kind: "스타터",
        releaseDate: "2019-04-27",
        price: "1728",
        composition: [
          { name: "위저드 파브닐.Rt.Rs 閃", quantity: "1개", target: "BEY-BURST-B-139-WIZARD-FAFNIR-RT-RS-SEN" },
          { name: "라이트런처L", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-140",
    series: "burst",
    releases: {
      kr: {
        no: "B-140",
        name: "랜덤부스터 Vol.15",
        kind: "랜덤부스터",
        releaseDate: "2019-06-20",
        price: "13900",
        composition: []
      },
      jp: {
        no: "B-140",
        name: "랜덤부스터 Vol.15",
        kind: "랜덤부스터",
        releaseDate: "2019-04-27",
        price: "1080",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-141",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-141",
        name: "롱베이런처L(클리어블랙)",
        kind: "툴",
        releaseDate: "2019-04-27",
        price: "810",
        composition: [
          { name: "롱베이런처L", quantity: "1개", target: "TOOLS-BURST-LONG-BEYLAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-142",
    series: "burst",
    releases: {
      kr: {
        no: "B-142",
        name: "저지먼트 조커.00T.Tr 참",
        kind: "부스터",
        releaseDate: "2019-07-26",
        price: "13900",
        composition: [
          { name: "저지먼트 조커.00T.Tr 참", quantity: "1개", target: "BEY-BURST-B-142-JUDGMENT-JOKER-00T-TR-ZAN" }
        ]
      },
      jp: {
        no: "B-142",
        name: "저지먼트 조커.00T.Tr 斬",
        kind: "부스터",
        releaseDate: "2019-05-25",
        price: "1296",
        composition: [
          { name: "저지먼트 조커.00T.Tr 斬", quantity: "1개", target: "BEY-BURST-B-142-JUDGMENT-JOKER-00T-TR-ZAN" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-143",
    series: "burst",
    releases: {
      kr: {
        no: "B-143",
        name: "랜덤레이어 Vol.1 드레드 바하무트 천",
        kind: "랜덤레이어",
        releaseDate: "2019-07-31",
        price: "4900",
        composition: []
      },
      jp: {
        no: "B-143",
        name: "랜덤레이어 Vol.1 드레드 바하무트 天",
        kind: "랜덤레이어",
        releaseDate: "2019-05-25",
        price: "540",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-144",
    series: "burst",
    releases: {
      kr: {
        no: "B-144",
        name: "츠바이 롱기누스.Dr.Sp' 멸",
        kind: "부스터",
        releaseDate: "2019-08-22",
        price: "13900",
        composition: [
          { name: "츠바이 롱기누스.Dr.Sp' 멸", quantity: "1개", target: "BEY-BURST-B-144-ZWEI-LONGINUS-DR-SP-DASH-METSU" }
        ]
      },
      jp: {
        no: "B-144",
        name: "츠바이 롱기누스.Dr.Sp' 滅",
        kind: "부스터",
        releaseDate: "2019-06-22",
        price: "1296",
        composition: [
          { name: "츠바이 롱기누스.Dr.Sp' 滅", quantity: "1개", target: "BEY-BURST-B-144-ZWEI-LONGINUS-DR-SP-DASH-METSU" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-145",
    series: "burst",
    releases: {
      kr: {
        no: "B-145",
        name: "베놈 디아볼로스.Vn.Bl",
        kind: "DX스타터",
        releaseDate: "2019-08-22",
        price: "27100",
        composition: [
          { name: "베놈 디아볼로스.Vn.Bl", quantity: "1개", target: "BEY-BURST-B-145-VENOM-DIABOLOS-VN-BL" },
          { name: "이레이즈 베이스", quantity: "1개", target: "GACHIBASE-ERASE" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      },
      jp: {
        no: "B-145",
        name: "베놈 디아볼로스.Vn.Bl",
        kind: "DX스타터",
        releaseDate: "2019-07-06",
        price: "2700",
        composition: [
          { name: "베놈 디아볼로스.Vn.Bl", quantity: "1개", target: "BEY-BURST-B-145-VENOM-DIABOLOS-VN-BL" },
          { name: "이레이즈 베이스", quantity: "1개", target: "GACHIBASE-ERASE" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-146",
    series: "burst",
    releases: {
      kr: {
        no: "B-146",
        name: "랜덤부스터 Vol.16",
        kind: "랜덤부스터",
        releaseDate: "2019-09-20",
        price: "13900",
        composition: []
      },
      jp: {
        no: "B-146",
        name: "랜덤부스터 Vol.16",
        kind: "랜덤부스터",
        releaseDate: "2019-07-20",
        price: "1080",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-147",
    series: "burst",
    releases: {
      kr: {
        no: "B-147",
        name: "랜덤레이어 Vol.2 포이즌 히드라 참",
        kind: "랜덤레이어",
        releaseDate: "2019-09-20",
        price: "4900",
        composition: []
      },
      jp: {
        no: "B-147",
        name: "랜덤레이어 Vol.2 포이즌 히드라 斬",
        kind: "랜덤레이어",
        releaseDate: "2019-07-20",
        price: "540",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-148",
    series: "burst",
    releases: {
      kr: {
        no: "B-148",
        name: "헤븐 페가수스.10P.Lw 섬",
        kind: "부스터",
        releaseDate: "2019-10-17",
        price: "13900",
        composition: [
          { name: "헤븐 페가수스.10P.Lw 섬", quantity: "1개", target: "BEY-BURST-B-148-HEAVEN-PEGASUS-10P-LW-SEN" }
        ]
      },
      jp: {
        no: "B-148",
        name: "헤븐 페가수스.10P.Lw 閃",
        kind: "부스터",
        releaseDate: "2019-08-10",
        price: "1296",
        composition: [
          { name: "헤븐 페가수스.10P.Lw 閃", quantity: "1개", target: "BEY-BURST-B-148-HEAVEN-PEGASUS-10P-LW-SEN" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-149",
    series: "burst",
    releases: {
      kr: {
        no: "B-149",
        name: "진검 트리플 부스터 세트",
        kind: "세트",
        releaseDate: "2019-10-17",
        price: "34900",
        composition: [
          { name: "로드 스프리건.Bl.Dm'", quantity: "1개", target: "BEY-BURST-B-149-LORD-SPRIGGAN-BL-DM-DASH" },
          { name: "드레드 바하무트.7W.Om 환", quantity: "1개", target: "BEY-BURST-B-149-DREAD-BAHAMUT-7W-OM-GEN" },
          { name: "슬래시 드래곤.00.Ω 멸", quantity: "1개", target: "BEY-BURST-B-149-SLASH-DRAGON-00-OCTA-METSU" }
        ]
      },
      jp: {
        no: "B-149",
        name: "GT 트리플 부스터 세트",
        kind: "세트",
        releaseDate: "2019-08-10",
        price: "3456",
        composition: [
          { name: "로드 스프리건.Bl.Dm'", quantity: "1개", target: "BEY-BURST-B-149-LORD-SPRIGGAN-BL-DM-DASH" },
          { name: "드레드 바하무트.7W.Om 幻", quantity: "1개", target: "BEY-BURST-B-149-DREAD-BAHAMUT-7W-OM-GEN" },
          { name: "슬래시 드래곤.00.Ω 滅", quantity: "1개", target: "BEY-BURST-B-149-SLASH-DRAGON-00-OCTA-METSU" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-150",
    series: "burst",
    releases: {
      kr: {
        no: "B-150",
        name: "유니온 아킬레스.Cn.Xt+ 열",
        kind: "부스터",
        releaseDate: "2019-11-11",
        price: "13900",
        composition: [
          { name: "유니온 아킬레스.Cn.Xt+ 열", quantity: "1개", target: "BEY-BURST-B-150-UNION-ACHILLES-CN-XT-PLUS-RETSU" }
        ]
      },
      jp: {
        no: "B-150",
        name: "유니온 아킬레스.Cn.Xt+ 烈",
        kind: "부스터",
        releaseDate: "2019-09-21",
        price: "1296",
        composition: [
          { name: "유니온 아킬레스.Cn.Xt+ 烈", quantity: "1개", target: "BEY-BURST-B-150-UNION-ACHILLES-CN-XT-PLUS-RETSU" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-151",
    series: "burst",
    releases: {
      kr: {
        no: "B-151",
        name: "랜덤부스터 Vol.17",
        kind: "랜덤부스터",
        releaseDate: "2019-11-11",
        price: "13900",
        composition: []
      },
      jp: {
        no: "B-151",
        name: "랜덤부스터 Vol.17",
        kind: "랜덤부스터",
        releaseDate: "2019-10-19",
        price: "1080",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-152",
    series: "burst",
    releases: {
      kr: {
        no: "B-152",
        name: "랜덤레이어 Vol.3 넉아웃 오딘 환",
        kind: "랜덤레이어",
        releaseDate: "2019-11-11",
        price: "4900",
        composition: []
      },
      jp: {
        no: "B-152",
        name: "랜덤레이어 Vol.3 넉아웃 오딘 幻",
        kind: "랜덤레이어",
        releaseDate: "2019-10-19",
        price: "540",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-153",
    series: "burst",
    releases: {
      kr: {
        no: "B-153",
        name: "진검 커스터마이즈 세트",
        kind: "세트",
        releaseDate: "2019-11-11",
        price: "54100",
        composition: [
          { name: "리겔리아 제네시스.Hy", quantity: "1개", target: "BEY-BURST-B-153-REGALIA-GENESIS-HY" },
          { name: "프라임 아포칼립스.0D.Ul'", quantity: "1개", target: "BEY-BURST-B-153-PRIME-APOCALYPSE-0D-UL-DASH" },
          { name: "이레이즈 파브닐.St.Tr 천", quantity: "1개", target: "BEY-BURST-B-153-ERASE-FAFNIR-ST-TR-TEN" },
          { name: "코스모 드래곤.Vn.R 열", quantity: "1개", target: "BEY-BURST-B-153-COSMO-DRAGON-VN-R-RETSU" }
        ]
      },
      jp: {
        no: "B-153",
        name: "GT 개조 세트",
        kind: "세트",
        releaseDate: "2019-10-19",
        price: "6458",
        composition: [
          { name: "리겔리아 제네시스.Hy", quantity: "1개", target: "BEY-BURST-B-153-REGALIA-GENESIS-HY" },
          { name: "프라임 아포칼립스.0D.Ul'", quantity: "1개", target: "BEY-BURST-B-153-PRIME-APOCALYPSE-0D-UL-DASH" },
          { name: "이레이즈 파브닐.St.Tr 天", quantity: "1개", target: "BEY-BURST-B-153-ERASE-FAFNIR-ST-TR-TEN" },
          { name: "코스모 드래곤.Vn.R 烈", quantity: "1개", target: "BEY-BURST-B-153-COSMO-DRAGON-VN-R-RETSU" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-154",
    series: "burst",
    releases: {
      kr: {
        no: "B-154",
        name: "임페리얼 드래곤.Ig'",
        kind: "DX부스터",
        releaseDate: "2020-01-15",
        price: "27100",
        composition: [
          { name: "임페리얼 드래곤.Ig'", quantity: "1개", target: "BEY-BURST-B-154-IMPERIAL-DRAGON-IG-DASH" }
        ]
      },
      jp: {
        no: "B-154",
        name: "임페리얼 드래곤.Ig'",
        kind: "DX부스터",
        releaseDate: "2019-11-16",
        price: "3080",
        composition: [
          { name: "임페리얼 드래곤.Ig'", quantity: "1개", target: "BEY-BURST-B-154-IMPERIAL-DRAGON-IG-DASH" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-155",
    series: "burst",
    releases: {
      kr: {
        no: "B-155",
        name: "마스터 디아볼로스.Gn",
        kind: "스타터",
        releaseDate: "2020-01-15",
        price: "21300",
        composition: [
          { name: "마스터 디아볼로스.Gn", quantity: "1개", target: "BEY-BURST-B-155-MASTER-DIABOLOS-GN" },
          { name: "베이런처LR", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-155",
        name: "마스터 디아볼로스.Gn",
        kind: "스타터",
        releaseDate: "2019-12-26",
        price: "2200",
        composition: [
          { name: "마스터 디아볼로스.Gn", quantity: "1개", target: "BEY-BURST-B-155-MASTER-DIABOLOS-GN" },
          { name: "베이런처LR", quantity: "1개", target: "TOOLS-BURST-BEYLAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-156",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-156",
        name: "랜덤부스터 Vol.18",
        kind: "랜덤부스터",
        releaseDate: "2019-12-26",
        price: "1100",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-157",
    series: "burst",
    releases: {
      kr: {
        no: "B-157",
        name: "빅뱅 제네시스.0.Ym",
        kind: "부스터",
        releaseDate: "2020-03-14",
        price: "13900",
        composition: [
          { name: "빅뱅 제네시스.0.Ym", quantity: "1개", target: "BEY-BURST-B-157-BIGBANG-GENESIS-0-YM" }
        ]
      },
      jp: {
        no: "B-157",
        name: "빅뱅 제네시스.0.Ym",
        kind: "부스터",
        releaseDate: "2020-01-25",
        price: "1320",
        composition: [
          { name: "빅뱅 제네시스.0.Ym", quantity: "1개", target: "BEY-BURST-B-157-BIGBANG-GENESIS-0-YM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-158",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-158",
        name: "랜덤부스터 Vol.19",
        kind: "랜덤부스터",
        releaseDate: "2020-02-22",
        price: "660",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-159",
    series: "burst",
    releases: {
      kr: {
        no: "B-159",
        name: "슈퍼 하이페리온.Xc 1A",
        kind: "부스터",
        releaseDate: "2020-04-10",
        price: "13900",
        composition: [
          { name: "슈퍼 하이페리온.Xc 1A", quantity: "1개", target: "BEY-BURST-B-159-SUPER-HYPERION-XC-1A" }
        ]
      },
      jp: {
        no: "B-159",
        name: "슈퍼 하이페리온.Xc 1A",
        kind: "부스터",
        releaseDate: "2020-03-28",
        price: "1397",
        composition: [
          { name: "슈퍼 하이페리온.Xc 1A", quantity: "1개", target: "BEY-BURST-B-159-SUPER-HYPERION-XC-1A" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-160",
    series: "burst",
    releases: {
      kr: {
        no: "B-160",
        name: "킹 헬리오스.Zn 1B",
        kind: "부스터",
        releaseDate: "2020-04-10",
        price: "13900",
        composition: [
          { name: "킹 헬리오스.Zn 1B", quantity: "1개", target: "BEY-BURST-B-160-KING-HELIOS-ZN-1B" }
        ]
      },
      jp: {
        no: "B-160",
        name: "킹 헬리오스.Zn 1B",
        kind: "부스터",
        releaseDate: "2020-03-28",
        price: "1397",
        composition: [
          { name: "킹 헬리오스.Zn 1B", quantity: "1개", target: "BEY-BURST-B-160-KING-HELIOS-ZN-1B" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-161",
    series: "burst",
    releases: {
      kr: {
        no: "B-161",
        name: "글라이드 라그나로크.Wh.R 1S",
        kind: "부스터",
        releaseDate: "2020-04-10",
        price: "13900",
        composition: [
          { name: "글라이드 라그나로크.Wh.R 1S", quantity: "1개", target: "BEY-BURST-B-161-GLIDE-RAGNARUK-WH-R-1S" }
        ]
      },
      jp: {
        no: "B-161",
        name: "글라이드 라그나로크.Wh.R 1S",
        kind: "부스터",
        releaseDate: "2020-03-28",
        price: "1397",
        composition: [
          { name: "글라이드 라그나로크.Wh.R 1S", quantity: "1개", target: "BEY-BURST-B-161-GLIDE-RAGNARUK-WH-R-1S" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-162",
    series: "burst",
    releases: {
      kr: {
        no: "B-162",
        name: "베이블레이드 슈퍼킹 배틀 세트",
        kind: "세트",
        releaseDate: "2020-04-10",
        price: "52900",
        composition: [
          { name: "슈퍼 하이페리온.Xc 1A", quantity: "1개", target: "BEY-BURST-B-162-SUPER-HYPERION-XC-1A" },
          { name: "킹 헬리오스.Zn 1B", quantity: "1개", target: "BEY-BURST-B-162-KING-HELIOS-ZN-1B" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-162",
        name: "베이블레이드 슈퍼킹 대전 세트",
        kind: "세트",
        releaseDate: "2020-03-28",
        price: "5170",
        composition: [
          { name: "슈퍼 하이페리온.Xc 1A", quantity: "1개", target: "BEY-BURST-B-162-SUPER-HYPERION-XC-1A" },
          { name: "킹 헬리오스.Zn 1B", quantity: "1개", target: "BEY-BURST-B-162-KING-HELIOS-ZN-1B" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-163",
    series: "burst",
    releases: {
      kr: {
        no: "B-163",
        name: "브레이브 발키리.Ev' 2A",
        kind: "부스터",
        releaseDate: "2020-06-10",
        price: "13900",
        composition: [
          { name: "브레이브 발키리.Ev' 2A", quantity: "1개", target: "BEY-BURST-B-163-BRAVE-VALKYRIE-EV-DASH-2A" }
        ]
      },
      jp: {
        no: "B-163",
        name: "브레이브 발키리.Ev' 2A",
        kind: "부스터",
        releaseDate: "2020-04-25",
        price: "1397",
        composition: [
          { name: "브레이브 발키리.Ev' 2A", quantity: "1개", target: "BEY-BURST-B-163-BRAVE-VALKYRIE-EV-DASH-2A" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-164",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-164",
        name: "랜덤부스터 Vol.20",
        kind: "랜덤부스터",
        releaseDate: "2020-04-25",
        price: "1100",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-165",
    series: "burst",
    releases: {
      kr: {
        no: "B-165",
        name: "슈퍼킹베이런처",
        kind: "툴",
        releaseDate: "2020-07-16",
        price: "9900",
        composition: [
          { name: "슈퍼킹베이런처", quantity: "1개", target: "TOOLS-BURST-SUPERKING-BEYLAUNCHER" }
        ]
      },
      jp: {
        no: "B-165",
        name: "슈퍼킹베이런처",
        kind: "툴",
        releaseDate: "2020-03-28",
        price: "990",
        composition: [
          { name: "슈퍼킹베이런처", quantity: "1개", target: "TOOLS-BURST-SUPERKING-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-166",
    series: "burst",
    releases: {
      kr: {
        no: "B-166",
        name: "슈퍼킹베이런처L",
        kind: "툴",
        releaseDate: "2020-07-16",
        price: "9900",
        composition: [
          { name: "슈퍼킹베이런처L", quantity: "1개", target: "TOOLS-BURST-SUPERKING-BEYLAUNCHER-L" }
        ]
      },
      jp: {
        no: "B-166",
        name: "슈퍼킹베이런처L",
        kind: "툴",
        releaseDate: "2020-04-25",
        price: "990",
        composition: [
          { name: "슈퍼킹베이런처L", quantity: "1개", target: "TOOLS-BURST-SUPERKING-BEYLAUNCHER-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-167",
    series: "burst",
    releases: {
      kr: {
        no: "B-167",
        name: "미라지 파브닐.Nt 2S",
        kind: "부스터",
        releaseDate: "2020-07-16",
        price: "14900",
        composition: [
          { name: "미라지 파브닐.Nt 2S", quantity: "1개", target: "BEY-BURST-B-167-MIRAGE-FAFNIR-NT-2S" }
        ]
      },
      jp: {
        no: "B-167",
        name: "미라지 파브닐.Nt 2S",
        kind: "부스터",
        releaseDate: "2020-05-30",
        price: "1397",
        composition: [
          { name: "미라지 파브닐.Nt 2S", quantity: "1개", target: "BEY-BURST-B-167-MIRAGE-FAFNIR-NT-2S" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-168",
    series: "burst",
    releases: {
      kr: {
        no: "B-168",
        name: "레이지 롱기누스.Ds' 3A",
        kind: "부스터",
        releaseDate: "2020-08-20",
        price: "14900",
        composition: [
          { name: "레이지 롱기누스.Ds' 3A", quantity: "1개", target: "BEY-BURST-B-168-RAGE-LONGINUS-DS-DASH-3A" }
        ]
      },
      jp: {
        no: "B-168",
        name: "레이지 롱기누스.Ds' 3A",
        kind: "부스터",
        releaseDate: "2020-06-27",
        price: "1397",
        composition: [
          { name: "레이지 롱기누스.Ds' 3A", quantity: "1개", target: "BEY-BURST-B-168-RAGE-LONGINUS-DS-DASH-3A" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-169",
    series: "burst",
    releases: {
      kr: {
        no: "B-169",
        name: "베어리언트 루시퍼.Mb 2D",
        kind: "스타터",
        releaseDate: "2020-09-17",
        price: "27900",
        composition: [
          { name: "베어리언트 루시퍼.Mb 2D", quantity: "1개", target: "BEY-BURST-B-169-VARIANT-LUCIFER-MB-2D" },
          { name: "슈퍼킹베이런처", quantity: "1개", target: "TOOLS-BURST-SUPERKING-BEYLAUNCHER" }
        ]
      },
      jp: {
        no: "B-169",
        name: "베리언트 루시퍼.Mb 2D",
        kind: "스타터",
        releaseDate: "2020-07-18",
        price: "2420",
        composition: [
          { name: "베리언트 루시퍼.Mb 2D", quantity: "1개", target: "BEY-BURST-B-169-VARIANT-LUCIFER-MB-2D" },
          { name: "슈퍼킹베이런처", quantity: "1개", target: "TOOLS-BURST-SUPERKING-BEYLAUNCHER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-170",
    series: "burst",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "B-170",
        name: "랜덤부스터 Vol.21",
        kind: "랜덤부스터",
        releaseDate: "2020-07-23",
        price: "1100",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-171",
    series: "burst",
    releases: {
      kr: {
        no: "B-171",
        name: "슈퍼킹 트리플 부스터 세트",
        kind: "세트",
        releaseDate: "2020-10-15",
        price: "37900",
        composition: [
          { name: "템페스트 드래곤.Cm 1A", quantity: "1개", target: "BEY-BURST-B-171-TEMPEST-DRAGON-CM-1A" },
          { name: "커스 사탄.α'.H' 1D", quantity: "1개", target: "BEY-BURST-B-171-CURSE-SATAN-AERO-DASH-HOLD-DASH-1D" },
          { name: "네이키드 디아볼로스(NDb극).11.Wv 극", quantity: "1개", target: "BEY-BURST-B-171-NAKED-DIABOLOS-NDB-GOKU-11-WV" }
        ]
      },
      jp: {
        no: "B-171",
        name: "슈퍼킹 트리플 부스터 세트",
        kind: "세트",
        releaseDate: "2020-08-08",
        price: "4180",
        composition: [
          { name: "템페스트 드래곤.Cm 1A", quantity: "1개", target: "BEY-BURST-B-171-TEMPEST-DRAGON-CM-1A" },
          { name: "커스 사탄.α'.H' 1D", quantity: "1개", target: "BEY-BURST-B-171-CURSE-SATAN-AERO-DASH-HOLD-DASH-1D" },
          { name: "네이키드 디아볼로스(NDb極).11.Wv 極", quantity: "1개", target: "BEY-BURST-B-171-NAKED-DIABOLOS-NDB-GOKU-11-WV" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-172",
    series: "burst",
    releases: {
      kr: {
        no: "B-172",
        name: "월드 스프리건.U' 2B",
        kind: "부스터",
        releaseDate: "2020-10-15",
        price: "14900",
        composition: [
          { name: "월드 스프리건.U' 2B", quantity: "1개", target: "BEY-BURST-B-172-WORLD-SPRIGGAN-U-DASH-2B" }
        ]
      },
      jp: {
        no: "B-172",
        name: "월드 스프리건.U' 2B",
        kind: "부스터",
        releaseDate: "2020-09-19",
        price: "1507",
        composition: [
          { name: "월드 스프리건.U' 2B", quantity: "1개", target: "BEY-BURST-B-172-WORLD-SPRIGGAN-U-DASH-2B" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-173",
    series: "burst",
    releases: {
      kr: {
        no: "B-173",
        name: "랜덤부스터 Vol.22",
        kind: "랜덤부스터",
        releaseDate: "2020-12-10",
        price: "14900",
        composition: []
      },
      jp: {
        no: "B-173",
        name: "랜덤부스터 Vol.22",
        kind: "랜덤부스터",
        releaseDate: "2020-10-24",
        price: "1188",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-174",
    series: "burst",
    releases: {
      kr: {
        no: "B-174",
        name: "베이블레이드 리미트 브레이크 DX 세트",
        kind: "세트",
        releaseDate: "2020-12-10",
        price: "64900",
        composition: [
          { name: "하이페리온 번.초.Xc'+X", quantity: "1개", target: "BEY-BURST-B-174-HYPERION-BURN-CHO-XC-DASH-X" },
          { name: "헬리오스 볼케이노.왕.Zn'+Z", quantity: "1개", target: "BEY-BURST-B-174-HELIOS-VOLCANO-OU-ZN-DASH-Z" },
          { name: "롱슈퍼킹베이런처", quantity: "2개", target: "TOOLS-BURST-LONG-SUPERKING-BEYLAUNCHER" },
          { name: "대시 베이스타디움", quantity: "1개", target: "TOOLS-BURST-DASH-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-174",
        name: "베이블레이드 한계돌파 DX 세트",
        kind: "세트",
        releaseDate: "2020-11-14",
        price: "7480",
        composition: [
          { name: "하이페리온 번.超.Xc'+X", quantity: "1개", target: "BEY-BURST-B-174-HYPERION-BURN-CHO-XC-DASH-X" },
          { name: "헬리오스 볼케이노.王.Zn'+Z", quantity: "1개", target: "BEY-BURST-B-174-HELIOS-VOLCANO-OU-ZN-DASH-Z" },
          { name: "롱슈퍼킹베이런처", quantity: "2개", target: "TOOLS-BURST-LONG-SUPERKING-BEYLAUNCHER" },
          { name: "대시 베이스타디움", quantity: "1개", target: "TOOLS-BURST-DASH-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-175",
    series: "burst",
    releases: {
      kr: {
        no: "B-175",
        name: "루시퍼 디엔드.황.Dr",
        kind: "부스터",
        releaseDate: "2021-01-14",
        price: "14900",
        composition: [
          { name: "루시퍼 디엔드.황.Dr", quantity: "1개", target: "BEY-BURST-B-175-LUCIFER-THE-END-KOU-DR" }
        ]
      },
      jp: {
        no: "B-175",
        name: "루시퍼 디엔드.皇.Dr",
        kind: "부스터",
        releaseDate: "2020-11-28",
        price: "1727",
        composition: [
          { name: "루시퍼 디엔드.皇.Dr", quantity: "1개", target: "BEY-BURST-B-175-LUCIFER-THE-END-KOU-DR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-176",
    series: "burst",
    releases: {
      kr: {
        no: "B-176",
        name: "랜덤부스터 Vol.23",
        kind: "랜덤부스터",
        releaseDate: "2021-02-08",
        price: "14900",
        composition: []
      },
      jp: {
        no: "B-176",
        name: "랜덤부스터 Vol.23",
        kind: "랜덤부스터",
        releaseDate: "2020-12-26",
        price: "1188",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-177",
    series: "burst",
    releases: {
      kr: {
        no: "B-177",
        name: "제트 와이번.Ar.Js 1D",
        kind: "부스터",
        releaseDate: "2021-04-14",
        price: "14900",
        composition: [
          { name: "제트 와이번.Ar.Js 1D", quantity: "1개", target: "BEY-BURST-B-177-JET-WYVERN-AR-JS-1D" }
        ]
      },
      jp: {
        no: "B-177",
        name: "제트 와이번.Ar.Js 1D",
        kind: "부스터",
        releaseDate: "2021-01-23",
        price: "1397",
        composition: [
          { name: "제트 와이번.Ar.Js 1D", quantity: "1개", target: "BEY-BURST-B-177-JET-WYVERN-AR-JS-1D" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-178",
    series: "burst",
    releases: {
      kr: {
        no: "B-178",
        name: "랜덤부스터 Vol.24",
        kind: "랜덤부스터",
        releaseDate: "2021-04-14",
        price: "14900",
        composition: []
      },
      jp: {
        no: "B-178",
        name: "랜덤부스터 Vol.24",
        kind: "랜덤부스터",
        releaseDate: "2021-02-27",
        price: "1188",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-179",
    series: "burst",
    releases: {
      kr: {
        no: "B-179",
        name: "데스 솔로몬.MF 2B",
        kind: "부스터",
        releaseDate: "2021-04-14",
        price: "14900",
        composition: [
          { name: "데스 솔로몬.MF 2B", quantity: "1개", target: "BEY-BURST-B-179-DEATH-SOLOMON-MF-2B" }
        ]
      },
      jp: {
        no: "B-179",
        name: "데스 솔로몬.MF 2B",
        kind: "부스터",
        releaseDate: "2021-03-20",
        price: "1507",
        composition: [
          { name: "데스 솔로몬.MF 2B", quantity: "1개", target: "BEY-BURST-B-179-DEATH-SOLOMON-MF-2B" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-180",
    series: "burst",
    releases: {
      kr: {
        no: "B-180",
        name: "다이너마이트 벨리알.Nx.Vn-2",
        kind: "부스터",
        releaseDate: "2021-04-30",
        price: "15900",
        composition: [
          { name: "다이너마이트 벨리알.Nx.Vn-2", quantity: "1개", target: "BEY-BURST-B-180-DYNAMITE-BELIAL-NX-VN-2" }
        ]
      },
      jp: {
        no: "B-180",
        name: "다이너마이트 벨리알.Nx.Vn-2",
        kind: "부스터",
        releaseDate: "2021-04-24",
        price: "1507",
        composition: [
          { name: "다이너마이트 벨리알.Nx.Vn-2", quantity: "1개", target: "BEY-BURST-B-180-DYNAMITE-BELIAL-NX-VN-2" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-181",
    series: "burst",
    releases: {
      kr: {
        no: "B-181",
        name: "랜덤부스터 Vol.25",
        kind: "랜덤부스터",
        releaseDate: "2021-04-30",
        price: "15900",
        composition: []
      },
      jp: {
        no: "B-181",
        name: "랜덤부스터 Vol.25",
        kind: "랜덤부스터",
        releaseDate: "2021-04-24",
        price: "1232",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-182",
    series: "burst",
    releases: {
      kr: {
        no: "B-182",
        name: "베이블레이드 다이너마이트배틀 엔트리 세트",
        kind: "세트",
        releaseDate: "2021-04-30",
        price: "52900",
        composition: [
          { name: "다이너마이트 벨리알.Nx.Vn-2", quantity: "1개", target: "BEY-BURST-B-182-DYNAMITE-BELIAL-NX-VN-2" },
          { name: "커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-CUSTOM-BEYLAUNCHER-LR" },
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 DB 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-182",
        name: "베이블레이드 다이너마이트배틀 엔트리 세트",
        kind: "세트",
        releaseDate: "2021-04-24",
        price: "4950",
        composition: [
          { name: "다이너마이트 벨리알.Nx.Vn-2", quantity: "1개", target: "BEY-BURST-B-182-DYNAMITE-BELIAL-NX-VN-2" },
          { name: "커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-CUSTOM-BEYLAUNCHER-LR" },
          { name: "런처그립", quantity: "1개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 DB 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-183",
    series: "burst",
    releases: {
      kr: {
        no: "B-183",
        name: "베이스타디움 DB 스탠다드타입",
        kind: "툴",
        releaseDate: "2021-04-30",
        price: "21900",
        composition: [
          { name: "베이스타디움 DB 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-183",
        name: "베이스타디움 DB 스탠다드타입",
        kind: "툴",
        releaseDate: "2021-04-24",
        price: "1980",
        composition: [
          { name: "베이스타디움 DB 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-184",
    series: "burst",
    releases: {
      kr: {
        no: "B-184",
        name: "커스텀베이런처LR",
        kind: "툴",
        releaseDate: "2021-04-30",
        price: "10900",
        composition: [
          { name: "커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-CUSTOM-BEYLAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-184",
        name: "커스텀베이런처LR",
        kind: "툴",
        releaseDate: "2021-04-24",
        price: "990",
        composition: [
          { name: "커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-CUSTOM-BEYLAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-185",
    series: "burst",
    releases: {
      kr: {
        no: "B-185",
        name: "배니시 파브닐.Tp.Kc-3",
        kind: "부스터",
        releaseDate: "2021-06-23",
        price: "15900",
        composition: [
          { name: "배니시 파브닐.Tp.Kc-3", quantity: "1개", target: "BEY-BURST-B-185-VANISH-FAFNIR-TP-KC-3" },
          { name: "F 기어", quantity: "1개", target: "EVOLUTIONGEAR-F" }
        ]
      },
      jp: {
        no: "B-185",
        name: "배니시 파브닐.Tp.Kc-3",
        kind: "부스터",
        releaseDate: "2021-05-29",
        price: "1507",
        composition: [
          { name: "배니시 파브닐.Tp.Kc-3", quantity: "1개", target: "BEY-BURST-B-185-VANISH-FAFNIR-TP-KC-3" },
          { name: "F 기어", quantity: "1개", target: "EVOLUTIONGEAR-F" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-186",
    series: "burst",
    releases: {
      kr: {
        no: "B-186",
        name: "랜덤부스터 Vol.26",
        kind: "랜덤부스터",
        releaseDate: "2021-09-08",
        price: "15900",
        composition: []
      },
      jp: {
        no: "B-186",
        name: "랜덤부스터 Vol.26",
        kind: "랜덤부스터",
        releaseDate: "2021-06-26",
        price: "1232",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-187",
    series: "burst",
    releases: {
      kr: {
        no: "B-187",
        name: "세이비어 발키리.Sh-7",
        kind: "스타터",
        releaseDate: "2021-09-08",
        price: "29900",
        composition: [
          { name: "세이비어 발키리.Sh-7", quantity: "1개", target: "BEY-BURST-B-187-SAVIOR-VALKYRIE-SH-7" },
          { name: "V 기어", quantity: "1개", target: "EVOLUTIONGEAR-V" },
          { name: "파워커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-POWER-CUSTOM-BEYLAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-187",
        name: "세이비어 발키리.Sh-7",
        kind: "스타터",
        releaseDate: "2021-07-17",
        price: "2640",
        composition: [
          { name: "세이비어 발키리.Sh-7", quantity: "1개", target: "BEY-BURST-B-187-SAVIOR-VALKYRIE-SH-7" },
          { name: "V 기어", quantity: "1개", target: "EVOLUTIONGEAR-V" },
          { name: "파워커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-POWER-CUSTOM-BEYLAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-188",
    series: "burst",
    releases: {
      kr: {
        no: "B-188",
        name: "아스트랄 스프리건 개조 세트",
        kind: "세트",
        releaseDate: "2021-10-15",
        price: "45900",
        composition: [
          { name: "아스트랄 스프리건.Ov.Qt-0", quantity: "1개", target: "BEY-BURST-B-188-ASTRAL-SPRIGGAN-OV-QT-0" },
          { name: "사이클론", quantity: "1개", target: "DBBLADE-CYCLONE" },
          { name: "벨리알2", quantity: "1개", target: "DBCORE-BELIAL-II" },
          { name: "Ov 디스크", quantity: "1개", target: "DBDISK-OVER" },
          { name: "Bl 디스크", quantity: "1개", target: "DISK-BLITZ" },
          { name: "Nx 디스크", quantity: "1개", target: "DBDISK-NEXUS" },
          { name: "S 기어", quantity: "1개", target: "EVOLUTIONGEAR-S" },
          { name: "Qt 드라이버", quantity: "1개", target: "DRIVER-QUATTRO" },
          { name: "Mx 드라이버", quantity: "1개", target: "DRIVER-METAL-XTREME" },
          { name: "Wv' 드라이버", quantity: "1개", target: "DRIVER-WAVE-DASH" },
          { name: "Ms 드라이버", quantity: "1개", target: "DRIVER-METAL-SURVIVE" }
        ]
      },
      jp: {
        no: "B-188",
        name: "아스트랄 스프리건 개조 세트",
        kind: "세트",
        releaseDate: "2021-08-07",
        price: "3960",
        composition: [
          { name: "아스트랄 스프리건.Ov.Qt-0", quantity: "1개", target: "BEY-BURST-B-188-ASTRAL-SPRIGGAN-OV-QT-0" },
          { name: "사이클론", quantity: "1개", target: "DBBLADE-CYCLONE" },
          { name: "벨리알2", quantity: "1개", target: "DBCORE-BELIAL-II" },
          { name: "Ov 디스크", quantity: "1개", target: "DBDISK-OVER" },
          { name: "Bl 디스크", quantity: "1개", target: "DISK-BLITZ" },
          { name: "Nx 디스크", quantity: "1개", target: "DBDISK-NEXUS" },
          { name: "S 기어", quantity: "1개", target: "EVOLUTIONGEAR-S" },
          { name: "Qt 드라이버", quantity: "1개", target: "DRIVER-QUATTRO" },
          { name: "Mx 드라이버", quantity: "1개", target: "DRIVER-METAL-XTREME" },
          { name: "Wv' 드라이버", quantity: "1개", target: "DRIVER-WAVE-DASH" },
          { name: "Ms 드라이버", quantity: "1개", target: "DRIVER-METAL-SURVIVE" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-189",
    series: "burst",
    releases: {
      kr: {
        no: "B-189",
        name: "길티 롱기누스.Kr.MDs-2",
        kind: "부스터",
        releaseDate: "2021-10-27",
        price: "15900",
        composition: [
          { name: "길티 롱기누스.Kr.MDs-2", quantity: "1개", target: "BEY-BURST-B-189-GUILTY-LONGINUS-KR-MDS-2" },
          { name: "L 기어", quantity: "1개", target: "EVOLUTIONGEAR-L" }
        ]
      },
      jp: {
        no: "B-189",
        name: "길티 롱기누스.Kr.MDs-2",
        kind: "부스터",
        releaseDate: "2021-09-11",
        price: "1650",
        composition: [
          { name: "길티 롱기누스.Kr.MDs-2", quantity: "1개", target: "BEY-BURST-B-189-GUILTY-LONGINUS-KR-MDS-2" },
          { name: "L 기어", quantity: "1개", target: "EVOLUTIONGEAR-L" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-190",
    series: "burst",
    releases: {
      kr: {
        no: "B-190",
        name: "베이블레이드 다이너마이트배틀 올인원 세트",
        kind: "세트",
        releaseDate: "2021-11-21",
        price: "69900",
        composition: [
          { name: "다이너마이트 벨리알.Nx.Vn-3", quantity: "1개", target: "BEY-BURST-B-190-DYNAMITE-BELIAL-NX-VN-3" },
          { name: "로어 바하무트.Kr.MDr-6", quantity: "1개", target: "BEY-BURST-B-190-ROAR-BAHAMUT-KR-MDR-6" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 DB 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-190",
        name: "베이블레이드 다이너마이트배틀 올인원 세트",
        kind: "세트",
        releaseDate: "2021-10-02",
        price: "6050",
        composition: [
          { name: "다이너마이트 벨리알.Nx.Vn-3", quantity: "1개", target: "BEY-BURST-B-190-DYNAMITE-BELIAL-NX-VN-3" },
          { name: "로어 바하무트.Kr.MDr-6", quantity: "1개", target: "BEY-BURST-B-190-ROAR-BAHAMUT-KR-MDR-6" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 DB 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-191",
    series: "burst",
    releases: {
      kr: {
        no: "B-191",
        name: "오버드라이브 스페셜 스타터 세트",
        kind: "세트",
        releaseDate: "2021-11-21",
        price: "49900",
        composition: [
          { name: "데인저러스 벨리알.Al-2", quantity: "1개", target: "BEY-BURST-B-191-DANGEROUS-BELIAL-AL-2" },
          { name: "프로미넌스 피닉스.Tp.MUn-10", quantity: "1개", target: "BEY-BURST-B-191-PROMINENCE-PHOENIX-TP-MUN-10" },
          { name: "세이비어 페르세우스.Gg.Br'-3", quantity: "1개", target: "BEY-BURST-B-191-SAVIOR-PERSEUS-GG-BR-DASH-3" },
          { name: "풀커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-FULL-CUSTOM-BEYLAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-191",
        name: "오버드라이브 스페셜 스타터 세트",
        kind: "세트",
        releaseDate: "2021-10-09",
        price: "5940",
        composition: [
          { name: "데인저러스 벨리알.Al-2", quantity: "1개", target: "BEY-BURST-B-191-DANGEROUS-BELIAL-AL-2" },
          { name: "프로미넌스 피닉스.Tp.MUn-10", quantity: "1개", target: "BEY-BURST-B-191-PROMINENCE-PHOENIX-TP-MUN-10" },
          { name: "세이비어 페르세우스.Gg.Br'-3", quantity: "1개", target: "BEY-BURST-B-191-SAVIOR-PERSEUS-GG-BR-DASH-3" },
          { name: "풀커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-FULL-CUSTOM-BEYLAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-192",
    series: "burst",
    releases: {
      kr: {
        no: "B-192",
        name: "그레이티스트 라파엘.Ov.HXt+'",
        kind: "부스터",
        releaseDate: "2022-02-15",
        price: "17900",
        composition: [
          { name: "그레이티스트 라파엘.Ov.HXt+'", quantity: "1개", target: "BEY-BURST-B-192-GREATEST-RAPHAEL-OV-HXT-PLUS-DASH" }
        ]
      },
      jp: {
        no: "B-192",
        name: "그레이티스트 라파엘.Ov.HXt+'",
        kind: "부스터",
        releaseDate: "2021-11-13",
        price: "1760",
        composition: [
          { name: "그레이티스트 라파엘.Ov.HXt+'", quantity: "1개", target: "BEY-BURST-B-192-GREATEST-RAPHAEL-OV-HXT-PLUS-DASH" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-193",
    series: "burst",
    releases: {
      kr: {
        no: "B-193",
        name: "얼티밋 발키리.Lg.V'-9",
        kind: "부스터",
        releaseDate: "2022-03-18",
        price: "17900",
        composition: [
          { name: "얼티밋 발키리.Lg.V'-9", quantity: "1개", target: "BEY-BURST-B-193-ULTIMATE-VALKYRIE-LG-V-DASH-9" }
        ]
      },
      jp: {
        no: "B-193",
        name: "얼티밋 발키리.Lg.V'-9",
        kind: "부스터",
        releaseDate: "2021-12-11",
        price: "1760",
        composition: [
          { name: "얼티밋 발키리.Lg.V'-9", quantity: "1개", target: "BEY-BURST-B-193-ULTIMATE-VALKYRIE-LG-V-DASH-9" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-194",
    series: "burst",
    releases: {
      kr: {
        no: "B-194",
        name: "랜덤부스터 Vol.27",
        kind: "랜덤부스터",
        releaseDate: "2022-03-30",
        price: "17900",
        composition: []
      },
      jp: {
        no: "B-194",
        name: "랜덤부스터 Vol.27",
        kind: "랜덤부스터",
        releaseDate: "2021-12-29",
        price: "1232",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-195",
    series: "burst",
    releases: {
      kr: {
        no: "B-195",
        name: "프로미넌스 발키리.Ov.At'-0",
        kind: "부스터",
        releaseDate: "2022-04-15",
        price: "17900",
        composition: [
          { name: "프로미넌스 발키리.Ov.At'-0", quantity: "1개", target: "BEY-BURST-B-195-PROMINENCE-VALKYRIE-OV-AT-DASH-0" }
        ]
      },
      jp: {
        no: "B-195",
        name: "프로미넌스 발키리.Ov.At'-0",
        kind: "부스터",
        releaseDate: "2022-02-05",
        price: "1650",
        composition: [
          { name: "프로미넌스 발키리.Ov.At'-0", quantity: "1개", target: "BEY-BURST-B-195-PROMINENCE-VALKYRIE-OV-AT-DASH-0" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-196",
    series: "burst",
    releases: {
      kr: {
        no: "B-196",
        name: "랜덤부스터 Vol.28",
        kind: "랜덤부스터",
        releaseDate: "2022-04-24",
        price: "17900",
        composition: []
      },
      jp: {
        no: "B-196",
        name: "랜덤부스터 Vol.28",
        kind: "랜덤부스터",
        releaseDate: "2022-03-19",
        price: "1540",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-197",
    series: "burst",
    releases: {
      kr: {
        no: "B-197",
        name: "디바인 벨리알.Nx.Ad-3",
        kind: "부스터",
        releaseDate: "2022-07-09",
        price: "19900",
        composition: [
          { name: "디바인 벨리알.Nx.Ad-3", quantity: "1개", target: "BEY-BURST-B-197-DIVINE-BELIAL-NX-AD-3" }
        ]
      },
      jp: {
        no: "B-197",
        name: "디바인 벨리알.Nx.Ad-3",
        kind: "부스터",
        releaseDate: "2022-04-23",
        price: "1760",
        composition: [
          { name: "디바인 벨리알.Nx.Ad-3", quantity: "1개", target: "BEY-BURST-B-197-DIVINE-BELIAL-NX-AD-3" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-198",
    series: "burst",
    releases: {
      kr: {
        no: "B-198",
        name: "랜덤부스터 Vol.29",
        kind: "랜덤부스터",
        releaseDate: "2022-09-17",
        price: "17900",
        composition: []
      },
      jp: {
        no: "B-198",
        name: "랜덤부스터 Vol.29",
        kind: "랜덤부스터",
        releaseDate: "2022-05-28",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-199",
    series: "burst",
    releases: {
      kr: {
        no: "B-199",
        name: "개틀링 드래곤.Kr.Cm'-10",
        kind: "부스터",
        releaseDate: "2022-10-01",
        price: "19900",
        composition: [
          { name: "개틀링 드래곤.Kr.Cm'-10", quantity: "1개", target: "BEY-BURST-B-199-GATLING-DRAGON-KR-CM-DASH-10" },
          { name: "D 기어", quantity: "1개", target: "EVOLUTIONGEAR-D" }
        ]
      },
      jp: {
        no: "B-199",
        name: "개틀링 드래곤.Kr.Cm'-10",
        kind: "부스터",
        releaseDate: "2022-06-25",
        price: "1870",
        composition: [
          { name: "개틀링 드래곤.Kr.Cm'-10", quantity: "1개", target: "BEY-BURST-B-199-GATLING-DRAGON-KR-CM-DASH-10" },
          { name: "D 기어", quantity: "1개", target: "EVOLUTIONGEAR-D" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-200",
    series: "burst",
    releases: {
      kr: {
        no: "B-200",
        name: "지포이드 엑스칼리버.Xn.Sw'-1",
        kind: "스타터",
        releaseDate: "2022-10-15",
        price: "29900",
        composition: [
          { name: "지포이드 엑스칼리버.Xn.Sw'-1", quantity: "1개", target: "BEY-BURST-B-200-XIPHOID-XCALIBUR-XN-SW-DASH-1" },
          { name: "파워커스텀소드런처LR", quantity: "1개", target: "TOOLS-BURST-POWER-CUSTOM-SWORD-LAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-200",
        name: "지포이드 엑스칼리버.Xn.Sw'-1",
        kind: "스타터",
        releaseDate: "2022-07-16",
        price: "2640",
        composition: [
          { name: "지포이드 엑스칼리버.Xn.Sw'-1", quantity: "1개", target: "BEY-BURST-B-200-XIPHOID-XCALIBUR-XN-SW-DASH-1" },
          { name: "파워커스텀소드런처LR", quantity: "1개", target: "TOOLS-BURST-POWER-CUSTOM-SWORD-LAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-201",
    series: "burst",
    releases: {
      kr: {
        no: "B-201",
        name: "제스트 아킬레스 개조 세트",
        kind: "세트",
        releaseDate: "2022-11-22",
        price: "45900",
        composition: [
          { name: "제스트 아킬레스.Il.Qt'-4", quantity: "1개", target: "BEY-BURST-B-201-ZEST-ACHILLES-IL-QT-DASH-4" },
          { name: "체인", quantity: "1개", target: "DBBLADE-CHAIN" },
          { name: "할로우", quantity: "1개", target: "SUPERKINGRING-HOLLOW" },
          { name: "피닉스", quantity: "1개", target: "DBCORE-PHOENIX" },
          { name: "라그나로크", quantity: "1개", target: "DBCORE-RAGNARUK" },
          { name: "1D", quantity: "1개", target: "SUPERKINGCHASSIS-1D" },
          { name: "B 디스크", quantity: "1개", target: "DISK-BOOST" },
          { name: "Fr 디스크", quantity: "1개", target: "DBDISK-FORTRESS" },
          { name: "A 기어", quantity: "1개", target: "EVOLUTIONGEAR-A" },
          { name: "Qt' 드라이버", quantity: "1개", target: "DRIVER-QUATTRO-DASH" },
          { name: "MNv 드라이버", quantity: "1개", target: "DRIVER-METAL-NEVER" }
        ]
      },
      jp: {
        no: "B-201",
        name: "제스트 아킬레스 개조 세트",
        kind: "세트",
        releaseDate: "2022-08-06",
        price: "4200",
        composition: [
          { name: "제스트 아킬레스.Il.Qt'-4", quantity: "1개", target: "BEY-BURST-B-201-ZEST-ACHILLES-IL-QT-DASH-4" },
          { name: "체인", quantity: "1개", target: "DBBLADE-CHAIN" },
          { name: "할로우", quantity: "1개", target: "SUPERKINGRING-HOLLOW" },
          { name: "피닉스", quantity: "1개", target: "DBCORE-PHOENIX" },
          { name: "라그나로크", quantity: "1개", target: "DBCORE-RAGNARUK" },
          { name: "1D", quantity: "1개", target: "SUPERKINGCHASSIS-1D" },
          { name: "B 디스크", quantity: "1개", target: "DISK-BOOST" },
          { name: "Fr 디스크", quantity: "1개", target: "DBDISK-FORTRESS" },
          { name: "A 기어", quantity: "1개", target: "EVOLUTIONGEAR-A" },
          { name: "Qt' 드라이버", quantity: "1개", target: "DRIVER-QUATTRO-DASH" },
          { name: "MNv 드라이버", quantity: "1개", target: "DRIVER-METAL-NEVER" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-202",
    series: "burst",
    releases: {
      kr: {
        no: "B-202",
        name: "랜덤부스터 Vol.30",
        kind: "랜덤부스터",
        releaseDate: "2022-11-22",
        price: "17900",
        composition: []
      },
      jp: {
        no: "B-202",
        name: "랜덤부스터 Vol.30",
        kind: "랜덤부스터",
        releaseDate: "2022-09-10",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-BURST-B-203",
    series: "burst",
    releases: {
      kr: {
        no: "B-203",
        name: "얼티밋 합체 DX 세트",
        kind: "세트",
        releaseDate: "2022-11-22",
        price: "69900",
        composition: [
          { name: "슈퍼 하이페리온 MR.Tp.Xp-2", quantity: "1개", target: "BEY-BURST-B-203-SUPER-HYPERION-MR-TP-XP-2" },
          { name: "킹 헬리오스 MR.Gg.Zl-10", quantity: "1개", target: "BEY-BURST-B-203-KING-HELIOS-MR-GG-ZL-10" },
          { name: "디바인 벨리알.Nx.BDr", quantity: "1개", target: "BEY-BURST-B-203-DIVINE-BELIAL-NX-BDR" },
          { name: "H 기어", quantity: "1개", target: "EVOLUTIONGEAR-H" },
          { name: "풀커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-FULL-CUSTOM-BEYLAUNCHER-LR" }
        ]
      },
      jp: {
        no: "B-203",
        name: "궁극합체 DX 세트",
        kind: "세트",
        releaseDate: "2022-10-08",
        price: "7250",
        composition: [
          { name: "슈퍼 하이페리온 MR.Tp.Xp-2", quantity: "1개", target: "BEY-BURST-B-203-SUPER-HYPERION-MR-TP-XP-2" },
          { name: "킹 헬리오스 MR.Gg.Zl-10", quantity: "1개", target: "BEY-BURST-B-203-KING-HELIOS-MR-GG-ZL-10" },
          { name: "디바인 벨리알.Nx.BDr", quantity: "1개", target: "BEY-BURST-B-203-DIVINE-BELIAL-NX-BDR" },
          { name: "H 기어", quantity: "1개", target: "EVOLUTIONGEAR-H" },
          { name: "풀커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-FULL-CUSTOM-BEYLAUNCHER-LR" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-204",
    series: "burst",
    releases: {
      kr: {
        no: "B-204",
        name: "버스트얼티밋 올인원 배틀 세트",
        kind: "세트",
        releaseDate: "2022-11-22",
        price: "74900",
        composition: [
          { name: "디바인 벨리알.Nx.Ad-6", quantity: "1개", target: "BEY-BURST-B-204-DIVINE-BELIAL-NX-AD-6" },
          { name: "체인 케르베우스.Kr.Mm'-3", quantity: "1개", target: "BEY-BURST-B-204-CHAIN-KERBEUS-KR-MM-DASH-3" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 DB 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        no: "B-204",
        name: "버스트얼티밋 올인원 대전 세트",
        kind: "세트",
        releaseDate: "2022-10-22",
        price: "6600",
        composition: [
          { name: "디바인 벨리알.Nx.Ad-6", quantity: "1개", target: "BEY-BURST-B-204-DIVINE-BELIAL-NX-AD-6" },
          { name: "체인 케르베우스.Kr.Mm'-3", quantity: "1개", target: "BEY-BURST-B-204-CHAIN-KERBEUS-KR-MM-DASH-3" },
          { name: "라이트런처", quantity: "2개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "베이스타디움 DB 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-205",
    series: "burst",
    releases: {
      kr: {
        no: "B-205",
        name: "버스트얼티밋 VS 세트",
        kind: "세트",
        releaseDate: "2023-01-14",
        price: "36900",
        composition: [
          { name: "버스트 스프리건.S'.F'-8", quantity: "1개", target: "BEY-BURST-B-205-BURST-SPRIGGAN-S-DASH-F-DASH-8" },
          { name: "얼티밋 발키리.W'.A'-9", quantity: "1개", target: "BEY-BURST-B-205-ULTIMATE-VALKYRIE-W-DASH-A-DASH-9" },
          { name: "VS 기어", quantity: "1개", target: "EVOLUTIONGEAR-VS" }
        ]
      },
      jp: {
        no: "B-205",
        name: "버스트얼티밋 VS 세트",
        kind: "세트",
        releaseDate: "2022-11-12",
        price: "4150",
        composition: [
          { name: "버스트 스프리건.S'.F'-8", quantity: "1개", target: "BEY-BURST-B-205-BURST-SPRIGGAN-S-DASH-F-DASH-8" },
          { name: "얼티밋 발키리.W'.A'-9", quantity: "1개", target: "BEY-BURST-B-205-ULTIMATE-VALKYRIE-W-DASH-A-DASH-9" },
          { name: "VS 기어", quantity: "1개", target: "EVOLUTIONGEAR-VS" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-B-206",
    series: "burst",
    releases: {
      kr: {
        no: "B-206",
        name: "바리케이드 루시퍼.Il.BMb-10",
        kind: "부스터",
        releaseDate: "2023-01-14",
        price: "19900",
        composition: [
          { name: "바리케이드 루시퍼.Il.BMb-10", quantity: "1개", target: "BEY-BURST-B-206-BARRICADE-LUCIFER-IL-BMB-10" }
        ]
      },
      jp: {
        no: "B-206",
        name: "바리케이드 루시퍼.Il.BMb-10",
        kind: "부스터",
        releaseDate: "2022-12-10",
        price: "1760",
        composition: [
          { name: "바리케이드 루시퍼.Il.BMb-10", quantity: "1개", target: "BEY-BURST-B-206-BARRICADE-LUCIFER-IL-BMB-10" }
        ]
      }
    }
  },
{
    id: "PRODUCT-BURST-BK-01",
    series: "burst",
    releases: {
      kr: {
        no: "BK-01",
        name: "베이블레이드 버스트 VS 듀얼 배틀 세트",
        kind: "세트",
        releaseDate: "2017-03-31",
        price: "59900",
        composition: [
          { name: "빅토리 발키리.B.V", quantity: "1개", target: "BEY-BURST-BK-01-VICTORY-VALKYRIE-B-V" },
          { name: "제노 엑스칼리버.M.I", quantity: "1개", target: "BEY-BURST-BK-01-XENO-XCALIBUR-M-I" },
          { name: "베이런처", quantity: "2개", target: "TOOLS-BURST-BEYLAUNCHER" },
          { name: "런처그립", quantity: "2개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        status: "unreleased"
      }
    }
  },
{
    id: "PRODUCT-BURST-BA-01",
    series: "burst",
    releases: {
      kr: {
        no: "BA-01",
        name: "베이블레이드 갓 배틀 세트",
        kind: "세트",
        releaseDate: "2017-10-14",
        price: "64800",
        composition: [
          { name: "갓 발키리.6V.Rb", quantity: "1개", target: "BEY-BURST-BA-01-GOD-VALKYRIE-6V-RB" },
          { name: "크라이스 사탄.2G.Lp", quantity: "1개", target: "BEY-BURST-BA-01-KREIS-SATAN-2G-LP" },
          { name: "베이런처", quantity: "2개", target: "TOOLS-BURST-BEYLAUNCHER" },
          { name: "런처그립", quantity: "2개", target: "TOOLS-BURST-LAUNCHER-GRIP" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        status: "unreleased"
      }
    }
  },
{
    id: "PRODUCT-BURST-BA-03",
    legacyIds: ["PRODUCT-BURST-BK-03"],
    series: "burst",
    releases: {
      kr: {
        no: "BA-03",
        name: "초Z 올인원 배틀 세트",
        kind: "세트",
        releaseDate: "2018-09-03",
        price: "51700",
        composition: [
          { name: "제트 아킬레스.11.Xt", quantity: "1개", target: "BEY-BURST-BA-03-Z-ACHILLES-11-XT" },
          { name: "블러디 롱기누스.13.Jl", quantity: "1개", target: "BEY-BURST-BA-03-BLOODY-LONGINUS-13-JL" },
          { name: "라이트런처", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER" },
          { name: "라이트런처L", quantity: "1개", target: "TOOLS-BURST-LIGHT-LAUNCHER-L" },
          { name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-BURST-STANDARD-BEYSTADIUM" }
        ]
      },
      jp: {
        status: "unreleased"
      }
    }
  },
{
    id: "PRODUCT-BURST-B-00-KR-1",
    series: "burst",
    releases: {
      kr: {
        no: "B-00",
        name: "커스텀베이런처LR 블레이더즈에디션",
        kind: "툴",
        releaseDate: "2021-10-07",
        price: "32900",
        composition: [
          { name: "커스텀베이런처LR", quantity: "3개", target: "TOOLS-BURST-CUSTOM-BEYLAUNCHER-LR" }
        ]
      },
      jp: {
        status: "unreleased"
      }
    }
  },
{
    id: "PRODUCT-BURST-B-00-KR-2",
    series: "burst",
    releases: {
      kr: {
        no: "B-00",
        name: "커스텀베이런처 세트 사이버에디션(블랙)",
        kind: "세트",
        releaseDate: "2023-03-04",
        price: "19900",
        composition: [
          { name: "파워커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-POWER-CUSTOM-BEYLAUNCHER-LR" },
          { name: "카라비너그립", quantity: "1개", target: "TOOLS-BURST-CARABINER-GRIP" }
        ]
      },
      jp: {
        status: "unreleased"
      }
    }
  },
{
    id: "PRODUCT-BURST-B-00-KR-3",
    series: "burst",
    releases: {
      kr: {
        no: "B-00",
        name: "커스텀베이런처 세트 사이버에디션(화이트)",
        kind: "세트",
        releaseDate: "2023-03-04",
        price: "19900",
        composition: [
          { name: "파워커스텀베이런처LR", quantity: "1개", target: "TOOLS-BURST-POWER-CUSTOM-BEYLAUNCHER-LR" },
          { name: "카라비너그립", quantity: "1개", target: "TOOLS-BURST-CARABINER-GRIP" }
        ]
      },
      jp: {
        status: "unreleased"
      }
    }
  },
  // 베이블레이드 X
{
    id: "PRODUCT-X-BX-01",
    series: "x",
    releases: {
      kr: {
        no: "BX-01",
        name: "드랜소드 3-60F",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2023-11-01",
        price: "19900",
        composition: [{ name: "드랜소드 3-60F", quantity: "1개", target: "BEY-X-BX-01-DRAN-SWORD-3-60F" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "BX-01",
        name: "드란소드 3-60F",
        kind: "스타터",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: [{ name: "드란소드 3-60F", quantity: "1개", target: "BEY-X-BX-01-DRAN-SWORD-3-60F" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-02",
    series: "x",
    releases: {
      kr: {
        no: "BX-02",
        name: "헬즈사이드 4-60T",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2023-11-01",
        price: "19900",
        composition: [{ name: "헬즈사이드 4-60T", quantity: "1개", target: "BEY-X-BX-02-HELLS-SCYTHE-4-60T" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "BX-02",
        name: "헬즈사이즈 4-60T",
        kind: "스타터",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: [{ name: "헬즈사이즈 4-60T", quantity: "1개", target: "BEY-X-BX-02-HELLS-SCYTHE-4-60T" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-03",
    series: "x",
    releases: {
      kr: {
        no: "BX-03",
        name: "위저드애로우 4-80B",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2023-11-01",
        price: "19900",
        composition: [{ name: "위저드애로우 4-80B", quantity: "1개", target: "BEY-X-BX-03-WIZARD-ARROW-4-80B" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "BX-03",
        name: "위저드애로우 4-80B",
        kind: "스타터",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: [{ name: "위저드애로우 4-80B", quantity: "1개", target: "BEY-X-BX-03-WIZARD-ARROW-4-80B" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-04",
    series: "x",
    releases: {
      kr: {
        no: "BX-04",
        name: "나이트실드 3-80N",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2023-11-01",
        price: "19900",
        composition: [{ name: "나이트실드 3-80N", quantity: "1개", target: "BEY-X-BX-04-KNIGHT-SHIELD-3-80N" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "BX-04",
        name: "나이트실드 3-80N",
        kind: "스타터",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: [{ name: "나이트실드 3-80N", quantity: "1개", target: "BEY-X-BX-04-KNIGHT-SHIELD-3-80N" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-05",
    series: "x",
    releases: {
      kr: {
        no: "BX-05",
        name: "위저드애로우 4-80B",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2023-11-01",
        price: "15900",
        composition: [{ name: "위저드애로우 4-80B", quantity: "1개", target: "BEY-X-BX-05-WIZARD-ARROW-4-80B" }]
      },
      jp: {
        no: "BX-05",
        name: "위저드애로우 4-80B",
        kind: "부스터",
        releaseDate: "2023-07-15",
        price: "1400",
        composition: [{ name: "위저드애로우 4-80B", quantity: "1개", target: "BEY-X-BX-05-WIZARD-ARROW-4-80B" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-06",
    series: "x",
    releases: {
      kr: {
        no: "BX-06",
        name: "나이트실드 3-80N",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2023-11-01",
        price: "15900",
        composition: [{ name: "나이트실드 3-80N", quantity: "1개", target: "BEY-X-BX-06-KNIGHT-SHIELD-3-80N" }]
      },
      jp: {
        no: "BX-06",
        name: "나이트실드 3-80N",
        kind: "부스터",
        releaseDate: "2023-07-15",
        price: "1400",
        composition: [{ name: "나이트실드 3-80N", quantity: "1개", target: "BEY-X-BX-06-KNIGHT-SHIELD-3-80N" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-07",
    series: "x",
    releases: {
      kr: {
        no: "BX-07",
        name: "스타트 대시 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2023-11-01",
        price: "69900",
        composition: [{ name: "드랜소드 3-60F", quantity: "1개", target: "BEY-X-BX-07-DRAN-SWORD-3-60F" }, { name: "스트링런처", quantity: "1개", target: "TOOLS-X-STRING-LAUNCHER" }, { name: "런처그립", quantity: "1개", target: "TOOLS-X-LAUNCHER-GRIP" }, { name: "익스트림스타디움", quantity: "1개", target: "TOOLS-X-EXTREME-STADIUM" }]
      },
      jp: {
        no: "BX-07",
        name: "스타트 대시 세트",
        kind: "세트",
        releaseDate: "2023-07-15",
        price: "5720",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-08",
    series: "x",
    releases: {
      kr: {
        no: "BX-08",
        name: "배틀 덱 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2023-11-01",
        price: "37900",
        composition: [{ name: "헬즈사이드 3-80B", quantity: "1개", target: "BEY-X-BX-08-HELLS-SCYTHE-3-80B" }, { name: "위저드애로우 4-60N", quantity: "1개", target: "BEY-X-BX-08-WIZARD-ARROW-4-60N" }, { name: "나이트실드 4-80T", quantity: "1개", target: "BEY-X-BX-08-KNIGHT-SHIELD-4-80T" }]
      },
      jp: {
        no: "BX-08",
        name: "3on3 덱 세트",
        kind: "세트",
        releaseDate: "2023-07-15",
        price: "3960",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-09",
    series: "x",
    releases: {
      kr: {
        no: "BX-09",
        name: "베이 배틀 로거",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-10-23",
        price: "42900",
        composition: []
      },
      jp: {
        no: "BX-09",
        name: "베이 배틀 패스",
        kind: "툴",
        releaseDate: "2023-07-15",
        price: "3300",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-10",
    series: "x",
    releases: {
      kr: {
        no: "BX-10",
        name: "익스트림스타디움",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2023-11-01",
        price: "34900",
        composition: []
      },
      jp: {
        no: "BX-10",
        name: "익스트림스타디움",
        kind: "툴",
        releaseDate: "2023-07-15",
        price: "2750",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-11",
    series: "x",
    releases: {
      kr: {
        no: "BX-11",
        name: "런처그립",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2023-11-01",
        price: "6900",
        composition: []
      },
      jp: {
        no: "BX-11",
        name: "런처그립",
        kind: "툴",
        releaseDate: "2023-07-15",
        price: "700",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-12",
    series: "x",
    releases: {
      kr: {
        no: "BX-12",
        name: "배틀 덱 케이스",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-04-04",
        price: "15300",
        composition: []
      },
      jp: {
        no: "BX-12",
        name: "배틀 덱 케이스",
        kind: "툴",
        releaseDate: "2023-07-15",
        price: "990",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-1",
    series: "x",
    releases: {
      kr: {
        no: "BX-00",
        name: "익스트림스타디움 라이트패키지",
        sale: "",
        kind: "툴",
        releaseDate: "2023-11-04",
        price: "",
        composition: []
      },
      jp: {
        no: "BX-00",
        name: "익스트림스타디움 라이트패키지",
        kind: "툴",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: []
      }
    }
  },

{
    id: "PRODUCT-X-BX-00-JP-2",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "드랜져스파이럴 3-80T",
        kind: "부스터",
        releaseDate: "2023-07-15",
        price: "1600",
        composition: [{ name: "드랜져스파이럴 3-80T", quantity: "1개", target: "BEY-X-BX-00-JP-2-DRANZER-SPIRAL-3-80T" }]
      }
    }
  },
{
    id: "PRODUCT-X-KR-BX-00-NIGHT-SHIELD-GOLD",
    series: "x",
    releases: {
      kr: {
        no: "BX-00",
        name: "나이트실드/3-80/N 골드 Ver.",
        sale: "",
        kind: "부스터",
        releaseDate: "2023-11-04",
        price: "",
        composition: []
      },
      jp: {
        status: "unreleased"
      }
    }
  },
{
    id: "PRODUCT-X-BX-13",
    series: "x",
    releases: {
      kr: {
        no: "BX-13",
        name: "나이트랜스 4-80HN",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2023-12-01",
        price: "15900",
        composition: [{ name: "나이트랜스 4-80HN", quantity: "1개", target: "BEY-X-BX-13-KNIGHT-LANCE-4-80HN" }]
      },
      jp: {
        no: "BX-13",
        name: "나이트랜스 4-80HN",
        kind: "부스터",
        releaseDate: "2023-08-10",
        price: "1400",
        composition: [{ name: "나이트랜스 4-80HN", quantity: "1개", target: "BEY-X-BX-13-KNIGHT-LANCE-4-80HN" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-14",
    series: "x",
    releases: {
      kr: {
        no: "BX-14",
        name: "랜덤부스터 Vol.1",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2023-12-01",
        price: "15900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-14-01-SHARK-EDGE-3-60LF" }]
      },
      jp: {
        no: "BX-14",
        name: "랜덤부스터 Vol.1",
        kind: "랜덤부스터",
        releaseDate: "2023-09-09",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-14-01-SHARK-EDGE-3-60LF" }]
      }
    },
    lineupPool: ["BEY-X-BX-14-01-SHARK-EDGE-3-60LF", "BEY-X-BX-14-02-SHARK-EDGE-4-80N", "BEY-X-BX-14-03-DRAN-SWORD-3-80B", "BEY-X-BX-14-04-HELLS-SCYTHE-4-80LF", "BEY-X-BX-14-05-KNIGHT-SHIELD-4-60LF", "BEY-X-BX-14-06-WIZARD-ARROW-3-60T"]
  },
{
    id: "PRODUCT-X-BX-00-JP-3",
    series: "x",
    releases: {
      kr: {
        no: "BXH-01",
        name: "코발트드레이크 4-60F",
        sale: "",
        kind: "부스터",
        releaseDate: "2024-10-16",
        price: "",
        composition: [{ name: "코발트드레이크 4-60F", quantity: "1개", target: "BEY-X-BX-00-JP-3-COBALT-DRAKE-4-60F" }]
      },
      jp: {
        no: "BX-00",
        name: "코발트드레이크 4-60F",
        kind: "부스터",
        releaseDate: "2023-09-11",
        price: "",
        composition: [{ name: "코발트드레이크 4-60F", quantity: "1개", target: "BEY-X-BX-00-JP-3-COBALT-DRAKE-4-60F" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-4",
    series: "x",
    releases: {
      kr: {
        no: "BXG-03",
        name: "헬즈사이드 4-60T 골드 Ver.",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2024-10-16",
        price: "19500",
        composition: [{ name: "헬즈사이드 4-60T", quantity: "1개", target: "BEY-X-BX-00-JP-4-HELLS-SCYTHE-4-60T" }]
      },
      jp: {
        no: "BX-00",
        name: "헬즈사이즈 4-60T 골드 Ver.",
        kind: "부스터",
        releaseDate: "2023-09-11",
        price: "1600",
        composition: [{ name: "헬즈사이즈 4-60T", quantity: "1개", target: "BEY-X-BX-00-JP-4-HELLS-SCYTHE-4-60T" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-15",
    series: "x",
    releases: {
      kr: {
        no: "BX-15",
        name: "레온클로우 5-60P",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-02-07",
        price: "19900",
        composition: [{ name: "레온클로우 5-60P", quantity: "1개", target: "BEY-X-BX-15-LEON-CLAW-5-60P" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "BX-15",
        name: "레온클로 5-60P",
        kind: "스타터",
        releaseDate: "2023-10-07",
        price: "1980",
        composition: [{ name: "레온클로 5-60P", quantity: "1개", target: "BEY-X-BX-15-LEON-CLAW-5-60P" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-16",
    series: "x",
    releases: {
      kr: {
        no: "BX-16",
        name: "랜덤부스터 바이퍼테일 셀렉트",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2024-02-07",
        price: "15900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-16-01-VIPER-TAIL-5-80O" }]
      },
      jp: {
        no: "BX-16",
        name: "랜덤부스터 바이퍼테일 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2023-10-07",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-16-01-VIPER-TAIL-5-80O" }]
      }
    },
    lineupPool: ["BEY-X-BX-16-01-VIPER-TAIL-5-80O", "BEY-X-BX-16-02-VIPER-TAIL-4-60F", "BEY-X-BX-16-03-VIPER-TAIL-3-80HN"]
  },
{
    id: "PRODUCT-X-BX-17",
    series: "x",
    releases: {
      kr: {
        no: "BX-17",
        name: "배틀 엔트리 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2024-02-07",
        price: "74900",
        composition: [{ name: "드랜소드 3-60F", quantity: "1개", target: "BEY-X-BX-17-DRAN-SWORD-3-60F" }, { name: "위저드애로우 4-80B", quantity: "1개", target: "BEY-X-BX-17-WIZARD-ARROW-4-80B" }, { name: "와인더런처", quantity: "2개", target: "TOOLS-X-WINDER-LAUNCHER" }, { name: "익스트림스타디움", quantity: "1개", target: "TOOLS-X-EXTREME-STADIUM" }]
      },
      jp: {
        no: "BX-17",
        name: "배틀 엔트리 세트",
        kind: "세트",
        releaseDate: "2023-10-07",
        price: "6050",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-18",
    series: "x",
    releases: {
      kr: {
        no: "BX-18",
        name: "스트링런처",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-02-07",
        price: "10900",
        composition: []
      },
      jp: {
        no: "BX-18",
        name: "스트링런처",
        kind: "툴",
        releaseDate: "2023-10-07",
        price: "990",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-19",
    series: "x",
    releases: {
      kr: {
        no: "BX-19",
        name: "라이노혼 3-80S",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2024-03-01",
        price: "15900",
        composition: [{ name: "라이노혼 3-80S", quantity: "1개", target: "BEY-X-BX-19-RHINO-HORN-3-80S" }]
      },
      jp: {
        no: "BX-19",
        name: "라이노혼 3-80S",
        kind: "부스터",
        releaseDate: "2023-11-02",
        price: "1400",
        composition: [{ name: "라이노혼 3-80S", quantity: "1개", target: "BEY-X-BX-19-RHINO-HORN-3-80S" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-20",
    series: "x",
    releases: {
      kr: {
        no: "BX-20",
        name: "드랜대거 덱 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2024-03-01",
        price: "37900",
        composition: [{ name: "드랜대거 4-60R", quantity: "1개", target: "BEY-X-BX-20-DRAN-DAGGER-4-60R" }, { name: "나이트실드 5-80T", quantity: "1개", target: "BEY-X-BX-20-KNIGHT-SHIELD-5-80T" }, { name: "샤크엣지 3-80F", quantity: "1개", target: "BEY-X-BX-20-SHARK-EDGE-3-80F" }]
      },
      jp: {
        no: "BX-20",
        name: "드란대거 덱 세트",
        kind: "세트",
        releaseDate: "2023-11-02",
        price: "3960",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-21",
    series: "x",
    releases: {
      kr: {
        no: "BX-21",
        name: "헬즈체인 덱 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2024-03-01",
        price: "37900",
        composition: [{ name: "헬즈체인 5-60HT", quantity: "1개", target: "BEY-X-BX-21-HELLS-CHAIN-5-60HT" }, { name: "위저드애로우 4-80N", quantity: "1개", target: "BEY-X-BX-21-WIZARD-ARROW-4-80N" }, { name: "나이트랜스 3-60LF", quantity: "1개", target: "BEY-X-BX-21-KNIGHT-LANCE-3-60LF" }]
      },
      jp: {
        no: "BX-21",
        name: "헬즈체인 덱 세트",
        kind: "세트",
        releaseDate: "2023-11-02",
        price: "3960",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-22",
    series: "x",
    releases: {
      kr: {
        no: "BX-22",
        name: "드랜소드 3-60F 엔트리패키지",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-03-14",
        price: "16600",
        composition: [{ name: "드랜소드 3-60F 엔트리패키지", quantity: "1개", target: "BEY-X-BX-22-DRAN-SWORD-3-60F" }, { name: "엔트리런처", quantity: "1개", target: "TOOLS-X-ENTRY-LAUNCHER" }]
      },
      jp: {
        no: "BX-22",
        name: "드란소드 3-60F 엔트리패키지",
        kind: "스타터",
        releaseDate: "2023-12-02",
        price: "1400",
        composition: [{ name: "드란소드 3-60F 엔트리패키지", quantity: "1개", target: "BEY-X-BX-22-DRAN-SWORD-3-60F" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-5",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "피닉스페더 블레이드",
        kind: "툴",
        releaseDate: "2023-12-15",
        price: "",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-23",
    series: "x",
    releases: {
      kr: {
        no: "BX-23",
        name: "피닉스소어 9-60GF",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-04-11",
        price: "25900",
        composition: [{ name: "피닉스소어 9-60GF", quantity: "1개", target: "BEY-X-BX-23-PHOENIX-SOAR-9-60GF" }, { name: "스트링런처", quantity: "1개", target: "TOOLS-X-STRING-LAUNCHER" }]
      },
      jp: {
        no: "BX-23",
        name: "피닉스윙 9-60GF",
        kind: "스타터",
        releaseDate: "2023-12-27",
        price: "2420",
        composition: [{ name: "피닉스윙 9-60GF", quantity: "1개", target: "BEY-X-BX-23-PHOENIX-SOAR-9-60GF" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-24",
    series: "x",
    releases: {
      kr: {
        no: "BX-24",
        name: "랜덤부스터 Vol.2",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2024-04-11",
        price: "15900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-24-01-WYVERN-GALE-5-80GB" }]
      },
      jp: {
        no: "BX-24",
        name: "랜덤부스터 Vol.2",
        kind: "랜덤부스터",
        releaseDate: "2023-12-27",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-24-01-WYVERN-GALE-5-80GB" }]
      }
    },
    lineupPool: ["BEY-X-BX-24-01-WYVERN-GALE-5-80GB", "BEY-X-BX-24-02-WYVERN-GALE-3-60T", "BEY-X-BX-24-03-KNIGHT-LANCE-4-60GB", "BEY-X-BX-24-04-VIPER-TAIL-5-60F", "BEY-X-BX-24-05-LEON-CLAW-3-80HN", "BEY-X-BX-24-06-WIZARD-ARROW-4-80GB"]
  },
{
    id: "PRODUCT-X-BX-25",
    series: "x",
    releases: {
      kr: {
        no: "BX-25",
        name: "기어케이스",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-03-19",
        price: "42900",
        composition: []
      },
      jp: {
        no: "BX-25",
        name: "기어케이스",
        kind: "툴",
        releaseDate: "2023-12-27",
        price: "4000",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-6",
    series: "x",
    releases: {
      kr: {
        no: "BXG-05",
        name: "레온클로우 5-60P 골드 Ver.",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2024-10-16",
        price: "19500",
        composition: [{ name: "레온클로우 5-60P", quantity: "1개", target: "BEY-X-BX-00-JP-6-LEON-CLAW-5-60P" }]
      },
      jp: {
        no: "BX-00",
        name: "레온클로 5-60P 골드 Ver.",
        kind: "부스터",
        releaseDate: "2024-02-22",
        price: "1600",
        composition: [{ name: "레온클로 5-60P", quantity: "1개", target: "BEY-X-BX-00-JP-6-LEON-CLAW-5-60P" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-26",
    series: "x",
    releases: {
      kr: {
        no: "BX-26",
        name: "유니콘스팅 5-60GF",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2024-04-11",
        price: "15900",
        composition: [{ name: "유니콘스팅 5-60GF", quantity: "1개", target: "BEY-X-BX-26-UNICORN-STING-5-60GF" }]
      },
      jp: {
        no: "BX-26",
        name: "유니콘스팅 5-60GF",
        kind: "부스터",
        releaseDate: "2024-01-27",
        price: "1400",
        composition: [{ name: "유니콘스팅 5-60GF", quantity: "1개", target: "BEY-X-BX-26-UNICORN-STING-5-60GF" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-7",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "스페셜크로스베이 헬즈사이즈 3-80F",
        kind: "부스터",
        releaseDate: "2024-01-27",
        price: "1740",
        composition: [{ name: "스페셜크로스베이 헬즈사이즈 3-80F", quantity: "1개", target: "BEY-X-BX-00-JP-7-HELLS-SCYTHE-3-80F" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-27",
    series: "x",
    releases: {
      kr: {
        no: "BX-27",
        name: "랜덤부스터 스핑크스카울 셀렉트",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2024-07-15",
        price: "15900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-27-01-SPHINX-COWL-9-80GN" }]
      },
      jp: {
        no: "BX-27",
        name: "랜덤부스터 스핑크스카울 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2024-02-22",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-27-01-SPHINX-COWL-9-80GN" }]
      }
    },
    lineupPool: ["BEY-X-BX-27-01-SPHINX-COWL-9-80GN", "BEY-X-BX-27-02-SPHINX-COWL-4-80HT", "BEY-X-BX-27-03-SPHINX-COWL-5-60O"]
  },
{
    id: "PRODUCT-X-BX-00-JP-8",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "샤크엣지 5-60GF 블루 Ver.",
        kind: "부스터",
        releaseDate: "2024-03-23",
        price: "1600",
        composition: [{ name: "샤크엣지 5-60GF", quantity: "1개", target: "BEY-X-BX-00-JP-8-SHARK-EDGE-5-60GF" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-28",
    series: "x",
    releases: {
      kr: {
        no: "BX-28",
        name: "스트링런처 화이트 Ver.",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-07-15",
        price: "10900",
        composition: []
      },
      jp: {
        no: "BX-28",
        name: "스트링런처 화이트 Ver.",
        kind: "툴",
        releaseDate: "2024-03-30",
        price: "990",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-29",
    series: "x",
    releases: {
      kr: {
        no: "BX-30",
        name: "커스텀그립 화이트 Ver.",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-07-15",
        price: "10900",
        composition: []
      },
      jp: {
        no: "BX-29",
        name: "커스텀그립 화이트 Ver.",
        kind: "툴",
        releaseDate: "2024-03-30",
        price: "1100",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-30",
    series: "x",
    releases: {
      kr: {
        no: "BX-29",
        name: "커스텀그립 레드 Ver.",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-07-15",
        price: "10900",
        composition: []
      },
      jp: {
        no: "BX-30",
        name: "커스텀그립 레드 Ver.",
        kind: "툴",
        releaseDate: "2024-03-30",
        price: "1100",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-01",
    series: "x",
    releases: {
      kr: {
        no: "UX-01",
        name: "드랜버스터 1-60A",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-07-15",
        price: "19900",
        composition: [{ name: "드랜버스터 1-60A", quantity: "1개", target: "BEY-X-UX-01-DRAN-BUSTER-1-60A" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "UX-01",
        name: "드란버스터 1-60A",
        kind: "스타터",
        releaseDate: "2024-03-30",
        price: "1980",
        composition: [{ name: "드란버스터 1-60A", quantity: "1개", target: "BEY-X-UX-01-DRAN-BUSTER-1-60A" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-02",
    series: "x",
    releases: {
      kr: {
        no: "UX-02",
        name: "헬즈해머 3-70H",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-07-15",
        price: "19900",
        composition: [{ name: "헬즈해머 3-70H", quantity: "1개", target: "BEY-X-UX-02-HELLS-HAMMER-3-70H" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "UX-02",
        name: "헬즈해머 3-70H",
        kind: "스타터",
        releaseDate: "2024-03-30",
        price: "1980",
        composition: [{ name: "헬즈해머 3-70H", quantity: "1개", target: "BEY-X-UX-02-HELLS-HAMMER-3-70H" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-03",
    series: "x",
    releases: {
      kr: {
        no: "UX-03",
        name: "위저드로드 5-70DB",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2024-07-15",
        price: "15900",
        composition: [{ name: "위저드로드 5-70DB", quantity: "1개", target: "BEY-X-UX-03-WIZARD-ROD-5-70DB" }]
      },
      jp: {
        no: "UX-03",
        name: "위저드로드 5-70DB",
        kind: "부스터",
        releaseDate: "2024-03-30",
        price: "1400",
        composition: [{ name: "위저드로드 5-70DB", quantity: "1개", target: "BEY-X-UX-03-WIZARD-ROD-5-70DB" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-1",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "드란버스터 1-60A 레드 Ver.",
        kind: "스타터",
        releaseDate: "2024-04-15",
        price: "",
        composition: [{ name: "드란버스터 1-60A", quantity: "1개", target: "BEY-X-UX-00-JP-1-DRAN-BUSTER-1-60A" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-31",
    series: "x",
    releases: {
      kr: {
        no: "BX-31",
        name: "랜덤부스터 Vol.3",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2024-08-06",
        price: "15900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-31-01-TYRANNO-BEAT-4-70Q" }]
      },
      jp: {
        no: "BX-31",
        name: "랜덤부스터 Vol.3",
        kind: "랜덤부스터",
        releaseDate: "2024-04-27",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-31-01-TYRANNO-BEAT-4-70Q" }]
      }
    },
    lineupPool: ["BEY-X-BX-31-01-TYRANNO-BEAT-4-70Q", "BEY-X-BX-31-02-TYRANNO-BEAT-3-60S", "BEY-X-BX-31-03-HELLS-CHAIN-9-80O", "BEY-X-BX-31-04-DRAN-DAGGER-4-70P", "BEY-X-BX-31-05-SHARK-EDGE-1-60Q", "BEY-X-BX-31-06-RHINO-HORN-5-80Q"]
  },
{
    id: "PRODUCT-X-UX-04",
    series: "x",
    releases: {
      kr: {
        no: "UX-04",
        name: "배틀 엔트리 세트 유니크",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2024-07-15",
        price: "74900",
        composition: [{ name: "드랜버스터 1-60A", quantity: "1개", target: "BEY-X-UX-04-DRAN-BUSTER-1-60A" }, { name: "위저드로드 5-70DB", quantity: "1개", target: "BEY-X-UX-04-WIZARD-ROD-5-70DB" }, { name: "와인더런처", quantity: "2개", target: "TOOLS-X-WINDER-LAUNCHER" }, { name: "익스트림스타디움", quantity: "1개", target: "TOOLS-X-EXTREME-STADIUM" }]
      },
      jp: {
        no: "UX-04",
        name: "배틀 엔트리 세트 유니크",
        kind: "세트",
        releaseDate: "2024-04-27",
        price: "6050",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-9",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "드라이거슬래시 4-80P",
        kind: "부스터",
        releaseDate: "2024-04-27",
        price: "1600",
        composition: [{ name: "드라이거슬래시 4-80P", quantity: "1개", target: "BEY-X-BX-00-JP-9-DRIGER-SLASH-4-80P" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-10",
    series: "x",
    releases: {
      kr: {
        no: "BXG-08",
        name: "헬즈체인 5-60HT 블랙 Ver.",
        sale: "",
        kind: "부스터",
        releaseDate: "2025-07-25",
        price: "",
        composition: [{ name: "헬즈체인 5-60HT", quantity: "1개", target: "BEY-X-BX-00-JP-10-HELLS-CHAIN-5-60HT" }]
      },
      jp: {
        no: "BX-00",
        name: "헬즈체인 5-60HT 블랙 Ver.",
        kind: "부스터",
        releaseDate: "2024-05-16",
        price: "1600",
        composition: [{ name: "헬즈체인 5-60HT", quantity: "1개", target: "BEY-X-BX-00-JP-10-HELLS-CHAIN-5-60HT" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-05",
    series: "x",
    releases: {
      kr: {
        no: "UX-05",
        name: "랜덤부스터 닌자섀도우 셀렉트",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2024-08-06",
        price: "15900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-UX-05-01-NINJA-SHADOW-1-80MN" }]
      },
      jp: {
        no: "UX-05",
        name: "랜덤부스터 시노비섀도우 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2024-05-18",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-UX-05-01-NINJA-SHADOW-1-80MN" }]
      }
    },
    lineupPool: ["BEY-X-UX-05-01-NINJA-SHADOW-1-80MN", "BEY-X-UX-05-02-NINJA-SHADOW-9-60LF", "BEY-X-UX-05-03-NINJA-SHADOW-3-70GP"]
  },
{
    id: "PRODUCT-X-BX-00-JP-11",
    series: "x",
    releases: {
      kr: {
        no: "BX-00",
        name: "커스텀그립 클리어블랙 Ver.",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-10-26",
        price: "10900",
        composition: []
      },
      jp: {
        no: "BX-00",
        name: "커스텀그립 클리어블랙 Ver.",
        kind: "툴",
        releaseDate: "2024-06-01",
        price: "1200",
        composition: []
      }
    }
  },

{
    id: "PRODUCT-X-BX-00-JP-12",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "드란소드 블레이드 블루 Ver.",
        kind: "툴",
        releaseDate: "2024-06-14",
        price: "",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-KR-UX-00-ASIA-SPECIAL-DRAN-DECK-SET",
    series: "x",
    releases: {
      kr: {
        no: "UX-00",
        name: "아시아 스페셜 드랜 덱 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2024-11-14",
        price: "43900",
        composition: [{ name: "드랜소드 4-80DB", quantity: "1개", target: "BEY-X-UX-00-ASIA-DRAN-SWORD-4-80DB" }, { name: "드랜대거 9-60LF", quantity: "1개", target: "BEY-X-UX-00-ASIA-DRAN-DAGGER-9-60LF" }, { name: "드랜버스터 3-70N", quantity: "1개", target: "BEY-X-UX-00-ASIA-DRAN-BUSTER-3-70N" }, { name: "스트링런처", quantity: "1개", target: "TOOLS-X-STRING-LAUNCHER" }]
      },
      jp: {
        no: "UX-00",
        name: "드란 덱 스타터",
        kind: "스타터",
        releaseDate: "2024-11-16",
        price: "4950",
        composition: [{ name: "드란소드 4-80DB", quantity: "1개", target: "BEY-X-UX-00-ASIA-DRAN-SWORD-4-80DB" }, { name: "드란대거 9-60LF", quantity: "1개", target: "BEY-X-UX-00-ASIA-DRAN-DAGGER-9-60LF" }, { name: "드란버스터 3-70N", quantity: "1개", target: "BEY-X-UX-00-ASIA-DRAN-BUSTER-3-70N" }, { name: "스트링런처", quantity: "1개", target: "TOOLS-X-STRING-LAUNCHER" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-33",
    series: "x",
    releases: {
      kr: {
        no: "BX-33",
        name: "펄타이거 3-60U",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2024-08-06",
        price: "15900",
        composition: [{ name: "펄타이거 3-60U", quantity: "1개", target: "BEY-X-BX-33-PEARL-TIGER-3-60U" }]
      },
      jp: {
        no: "BX-33",
        name: "바이스타이거 3-60U",
        kind: "부스터",
        releaseDate: "2024-06-15",
        price: "1400",
        composition: [{ name: "바이스타이거 3-60U", quantity: "1개", target: "BEY-X-BX-33-PEARL-TIGER-3-60U" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-13",
    series: "x",
    releases: {
      kr: {
        no: "BX-00",
        name: "코발트 드래군 2-60C 블랙 Ver.",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-10-26",
        price: "25900",
        composition: [{ name: "코발트 드래군 2-60C", quantity: "1개", target: "BEY-X-BX-00-JP-13-COBALT-DRAGOON-2-60C" }]
      },
      jp: {
        no: "BX-00",
        name: "코발트드라군 2-60C 블랙 Ver.",
        kind: "스타터",
        releaseDate: "2024-08-31",
        price: "2420",
        composition: [{ name: "코발트드라군 2-60C", quantity: "1개", target: "BEY-X-BX-00-JP-13-COBALT-DRAGOON-2-60C" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-32",
    series: "x",
    releases: {
      kr: {
        no: "BX-32",
        name: "와이드익스트림스타디움",
        sale: "일반 판매",
        kind: "툴",
        releaseDate: "2024-08-06",
        price: "49900",
        composition: []
      },
      jp: {
        no: "BX-32",
        name: "와이드익스트림스타디움",
        kind: "툴",
        releaseDate: "2024-07-13",
        price: "4400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-34",
    series: "x",
    releases: {
      kr: {
        no: "BX-34",
        name: "코발트드래군 2-60C",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-09-25",
        price: "24900",
        composition: [{ name: "코발트드래군 2-60C", quantity: "1개", target: "BEY-X-BX-34-COBALT-DRAGOON-2-60C" }, { name: "스트링런처L", quantity: "1개", target: "TOOLS-X-STRING-LAUNCHER-L" }]
      },
      jp: {
        no: "BX-34",
        name: "코발트드라군 2-60C",
        kind: "스타터",
        releaseDate: "2024-07-13",
        price: "2321",
        composition: [{ name: "코발트드라군 2-60C", quantity: "1개", target: "BEY-X-BX-34-COBALT-DRAGOON-2-60C" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-44",
    series: "x",
    releases: {
      kr: {
        no: "BXG-17",
        name: "F/T/B/N 비트 골드×블랙 Ver.",
        sale: "",
        kind: "툴",
        releaseDate: "2025-07-25",
        price: "",
        composition: []
      },
      jp: {
        no: "BX-00",
        name: "F/T/B/N 비트 세트 골드×블랙",
        kind: "툴",
        releaseDate: "2024-07-30",
        price: "990",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-45",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "베이블레이드 스티커 01",
        kind: "툴",
        releaseDate: "2024-07-30",
        price: "500",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-46",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "베이블레이드 스티커 02",
        kind: "툴",
        releaseDate: "2024-07-30",
        price: "500",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-47",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "베이블레이드 스티커 03",
        kind: "툴",
        releaseDate: "2024-07-30",
        price: "500",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-35",
    series: "x",
    releases: {
      kr: {
        no: "BX-35",
        name: "랜덤부스터 Vol.4",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2024-08-19",
        price: "15900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-35-01-BLACK-TURTLE-4-60D" }]
      },
      jp: {
        no: "BX-35",
        name: "랜덤부스터 Vol.4",
        kind: "랜덤부스터",
        releaseDate: "2024-07-13",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-35-01-BLACK-TURTLE-4-60D" }]
      }
    },
    lineupPool: ["BEY-X-BX-35-01-BLACK-TURTLE-4-60D", "BEY-X-BX-35-02-BLACK-TURTLE-9-80B", "BEY-X-BX-35-03-UNICORN-STING-3-70D", "BEY-X-BX-35-04-WIZARD-ROD-1-60R", "BEY-X-BX-35-05-PHOENIX-SOAR-5-80H", "BEY-X-BX-35-06-VIPER-TAIL-5-70D"]
  },
{
    id: "PRODUCT-X-UX-00-JP-2",
    series: "x",
    releases: {
      kr: {
        no: "BXH-10",
        name: "에어로페가시우스 3-70A",
        sale: "",
        kind: "부스터",
        releaseDate: "2025-07-25",
        price: "",
        composition: [{ name: "에어로페가시우스 3-70A", quantity: "1개", target: "BEY-X-UX-00-JP-2-AERO-PEGASUS-3-70A" }]
      },
      jp: {
        no: "UX-00",
        name: "에어로페가서스 3-70A",
        kind: "부스터",
        releaseDate: "2024-07-30",
        price: "",
        composition: [{ name: "에어로페가서스 3-70A", quantity: "1개", target: "BEY-X-UX-00-JP-2-AERO-PEGASUS-3-70A" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-14",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "드란대거 2-80GP 블랙자이언츠 Ver.",
        kind: "스타터",
        releaseDate: "2024-08-03",
        price: "2400",
        composition: [{ name: "드란대거 2-80GP", quantity: "1개", target: "BEY-X-BX-00-JP-14-DRAN-DAGGER-2-80GP" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-15",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "드랜져스파이럴 3-80T 블랙 Ver.",
        kind: "부스터",
        releaseDate: "2024-08-10",
        price: "1600",
        composition: [{ name: "드랜져스파이럴 3-80T", quantity: "1개", target: "BEY-X-BX-00-JP-15-DRANZER-SPIRAL-3-80T" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-06",
    series: "x",
    releases: {
      kr: {
        no: "UX-06",
        name: "레온크레스트 7-60GN",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2024-09-10",
        price: "15900",
        composition: [{ name: "레온크레스트 7-60GN", quantity: "1개", target: "BEY-X-UX-06-LEON-CREST-7-60GN" }]
      },
      jp: {
        no: "UX-06",
        name: "레온크레스트 7-60GN",
        kind: "부스터",
        releaseDate: "2024-08-10",
        price: "1400",
        composition: [{ name: "레온크레스트 7-60GN", quantity: "1개", target: "BEY-X-UX-06-LEON-CREST-7-60GN" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-07",
    series: "x",
    releases: {
      kr: {
        no: "UX-07",
        name: "피닉스러더 덱 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2024-09-10",
        price: "37900",
        composition: [{ name: "피닉스러더 9-70G", quantity: "1개", target: "BEY-X-UX-07-PHOENIX-RUDDER-9-70G" }, { name: "스핑크스카울 1-80GF", quantity: "1개", target: "BEY-X-UX-07-SPHINX-COWL-1-80GF" }, { name: "와이번게일 2-60S", quantity: "1개", target: "BEY-X-UX-07-WYVERN-GALE-2-60S" }]
      },
      jp: {
        no: "UX-07",
        name: "피닉스러더 덱 세트",
        kind: "세트",
        releaseDate: "2024-08-10",
        price: "4100",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-36",
    series: "x",
    releases: {
      kr: {
        no: "BX-36",
        name: "랜덤부스터 웨일웨이브 셀렉트",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2024-10-11",
        price: "15900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-36-01-WHALE-WAVE-5-80E" }]
      },
      jp: {
        no: "BX-36",
        name: "랜덤부스터 웨일웨이브 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2024-09-14",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-36-01-WHALE-WAVE-5-80E" }]
      }
    },
    lineupPool: ["BEY-X-BX-36-01-WHALE-WAVE-5-80E", "BEY-X-BX-36-02-WHALE-WAVE-4-70HN", "BEY-X-BX-36-03-WHALE-WAVE-3-80GB"]
  },
{
    id: "PRODUCT-X-BX-00-JP-16",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "라이트닝엘드라고 1-60F",
        kind: "랜덤부스터",
        releaseDate: "2024-09-14",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-17",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "피닉스윙 9-80DB 네이비 Ver.",
        kind: "부스터",
        releaseDate: "2024-09-15",
        price: "1950",
        composition: [{ name: "피닉스윙 9-80DB", quantity: "1개", target: "BEY-X-BX-00-JP-17-PHOENIX-SOAR-9-80DB" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-37",
    series: "x",
    releases: {
      kr: {
        no: "BX-37",
        name: "더블 익스트림 무빙 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2024-11-27",
        price: "92900",
        composition: [{ name: "베어스크래치 5-60F", quantity: "1개", target: "BEY-X-BX-37-BEAR-SCRATCH-5-60F" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }, { name: "더블익스트림스타디움", quantity: "1개", target: "TOOLS-X-DOUBLE-EXTREME-STADIUM" }]
      },
      jp: {
        no: "BX-37",
        name: "더블 익스트림 무빙 세트",
        kind: "세트",
        releaseDate: "2024-10-12",
        price: "8200",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-08",
    series: "x",
    releases: {
      kr: {
        no: "UX-08",
        name: "실버울프 3-80FB",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-11-18",
        price: "22900",
        composition: [{ name: "실버울프 3-80FB", quantity: "1개", target: "BEY-X-UX-08-SILVER-WOLF-3-80FB" }, { name: "스트링런처", quantity: "1개", target: "TOOLS-X-STRING-LAUNCHER" }]
      },
      jp: {
        no: "UX-08",
        name: "실버울프 3-80FB",
        kind: "스타터",
        releaseDate: "2024-10-12",
        price: "2080",
        composition: [{ name: "실버울프 3-80FB", quantity: "1개", target: "BEY-X-UX-08-SILVER-WOLF-3-80FB" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-38",
    series: "x",
    releases: {
      kr: {
        no: "BX-38",
        name: "크림슨가루다 4-70TP",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2024-12-09",
        price: "15900",
        composition: [{ name: "크림슨가루다 4-70TP", quantity: "1개", target: "BEY-X-BX-38-CRIMSON-GARUDA-4-70TP" }]
      },
      jp: {
        no: "BX-38",
        name: "크림슨가루다 4-70TP",
        kind: "부스터",
        releaseDate: "2024-11-02",
        price: "1400",
        composition: [{ name: "크림슨가루다 4-70TP", quantity: "1개", target: "BEY-X-BX-38-CRIMSON-GARUDA-4-70TP" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-09",
    series: "x",
    releases: {
      kr: {
        no: "UX-09",
        name: "워리어세이버 2-70L",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2024-12-09",
        price: "32900",
        composition: [{ name: "워리어세이버 2-70L", quantity: "1개", target: "BEY-X-UX-09-WARRIOR-SABER-2-70L" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "UX-09",
        name: "사무라이세이버 2-70L",
        kind: "스타터",
        releaseDate: "2024-11-02",
        price: "3300",
        composition: [{ name: "사무라이세이버 2-70L", quantity: "1개", target: "BEY-X-UX-09-WARRIOR-SABER-2-70L" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-10",
    series: "x",
    releases: {
      kr: {
        no: "UX-10",
        name: "커스터마이즈 세트 유니크",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2025-01-10",
        price: "49900",
        composition: [{ name: "나이트메일", quantity: "1개", target: "X-BLADE-KNIGHT-MAIL" }, { name: "프테라스윙", quantity: "1개", target: "X-BLADE-PTERA-SWING" }, { name: "헬즈해머", quantity: "1개", target: "X-BLADE-HELLS-HAMMER" }, { name: "티라노비트", quantity: "1개", target: "X-BLADE-TYRANNO-BEAT" }, { name: "3-85", quantity: "1개", target: "X-RATCHET-3-85" }, { name: "7-70", quantity: "1개", target: "X-RATCHET-7-70" }, { name: "1-60", quantity: "1개", target: "X-RATCHET-1-60" }, { name: "바운드 스파이크", quantity: "1개", target: "X-BIT-BS" }, { name: "러버 엑셀", quantity: "1개", target: "X-BIT-RA" }, { name: "볼", quantity: "1개", target: "X-BIT-B" }, { name: "포인트", quantity: "1개", target: "X-BIT-P" }, { name: "러시", quantity: "1개", target: "X-BIT-R" }, { name: "메탈 니들", quantity: "1개", target: "X-BIT-MN" }]
      },
      jp: {
        no: "UX-10",
        name: "커스터마이즈 세트 유니크",
        kind: "세트",
        releaseDate: "2024-11-02",
        price: "5700",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-18",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "시노비나이프 4-60LF 블루 Ver.",
        kind: "부스터",
        releaseDate: "2024-11-14",
        price: "8228",
        composition: [{ name: "시노비나이프 4-60LF", quantity: "1개", target: "BEY-X-BX-00-JP-18-NINJA-KNIFE-4-60LF" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-19",
    series: "x",
    releases: {
      kr: {
        no: "",
        name: "코발트드레이크 4-60F 클리어 Ver.",
        sale: "",
        kind: "부스터",
        releaseDate: "2025-09-25",
        price: "",
        composition: [{ name: "코발트드레이크 4-60F", quantity: "1개", target: "BEY-X-BX-00-JP-19-COBALT-DRAKE-4-60F" }]
      },
      jp: {
        no: "BX-00",
        name: "코발트드레이크 4-60F 클리어 Ver.",
        kind: "부스터",
        releaseDate: "2024-11-28",
        price: "1600",
        composition: [{ name: "코발트드레이크 4-60F", quantity: "1개", target: "BEY-X-BX-00-JP-19-COBALT-DRAKE-4-60F" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-20",
    series: "x",
    releases: {
      kr: {
        no: "BX-00",
        name: "매머드터스크 2-80E 블랙 Ver.",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2025-08-10",
        price: "16900",
        composition: [{ name: "매머드터스크 2-80E", quantity: "1개", target: "BEY-X-BX-00-JP-20-MAMMOTH-TUSK-2-80E" }]
      },
      jp: {
        no: "BX-00",
        name: "맘모스터스크 2-80E 블랙 Ver.",
        kind: "부스터",
        releaseDate: "2024-12-27",
        price: "1600",
        composition: [{ name: "맘모스터스크 2-80E", quantity: "1개", target: "BEY-X-BX-00-JP-20-MAMMOTH-TUSK-2-80E" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-4",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "드란버스터 1-60A",
        kind: "부스터",
        releaseDate: "2024-12-27",
        price: "1600",
        composition: [{ name: "드란버스터 1-60A", quantity: "1개", target: "BEY-X-UX-00-JP-4-DRAN-BUSTER-1-60A" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-11",
    series: "x",
    releases: {
      kr: {
        no: "UX-11",
        name: "임팩트드레이크 9-60LR",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-02-14",
        price: "25900",
        composition: [{ name: "임팩트드레이크 9-60LR", quantity: "1개", target: "BEY-X-UX-11-IMPACT-DRAKE-9-60LR" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "UX-11",
        name: "임팩트드레이크 9-60LR",
        kind: "스타터",
        releaseDate: "2024-12-28",
        price: "2420",
        composition: [{ name: "임팩트드레이크 9-60LR", quantity: "1개", target: "BEY-X-UX-11-IMPACT-DRAKE-9-60LR" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-12",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-12",
        name: "랜덤부스터 Vol.5",
        kind: "랜덤부스터",
        releaseDate: "2024-12-28",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-UX-12-01-GHOST-CIRCLE-0-80GB" }]
      }
    },
    lineupPool: ["BEY-X-UX-12-01-GHOST-CIRCLE-0-80GB", "BEY-X-UX-12-02-GHOST-CIRCLE-4-60H", "BEY-X-UX-12-03-LEON-CLAW-0-80E", "BEY-X-UX-12-04-PHOENIX-FEATHER-2-60N", "BEY-X-UX-12-05-NINJA-SHADOW-3-80F", "BEY-X-UX-12-06-WYVERN-GALE-0-80C"]
  },
{
    id: "PRODUCT-X-BX-00-JP-21",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "드라시엘실드 7-60D",
        kind: "부스터",
        releaseDate: "2024-12-28",
        price: "1600",
        composition: [{ name: "드라시엘실드 7-60D", quantity: "1개", target: "BEY-X-BX-00-JP-21-DRACIEL-SHIELD-7-60D" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-22",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "크로코크런치 2-60Q",
        kind: "부스터",
        releaseDate: "2025-01-15",
        price: "2050",
        composition: [{ name: "크로코크런치 2-60Q", quantity: "1개", target: "BEY-X-BX-00-JP-22-CROCO-CRUNCH-2-60Q" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-5",
    series: "x",
    releases: {
      kr: {
        no: "UX-00",
        name: "드랜버스터 1-60A FC 바르셀로나 Ver.",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-02-14",
        price: "23900",
        composition: [{ name: "드랜버스터 1-60A", quantity: "1개", target: "BEY-X-UX-00-JP-5-DRAN-BUSTER-1-60A" }, { name: "런처", quantity: "1개", target: "TOOLS-X-LAUNCHER" }]
      },
      jp: {
        no: "UX-00",
        name: "드란버스터 1-60A FC 바르셀로나 Ver.",
        kind: "스타터",
        releaseDate: "2025-01-25",
        price: "2500",
        composition: [{ name: "드란버스터 1-60A", quantity: "1개", target: "BEY-X-UX-00-JP-5-DRAN-BUSTER-1-60A" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-6",
    series: "x",
    releases: {
      kr: {
        no: "UX-00",
        name: "베이 킥오프 세트 FC 바르셀로나 Ver.",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2025-02-14",
        price: "72900",
        composition: [{ name: "헬즈해머 3-70H", quantity: "1개", target: "BEY-X-UX-00-JP-6-HELLS-HAMMER-3-70H" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }, { name: "익스트림스타디움", quantity: "1개", target: "TOOLS-X-EXTREME-STADIUM" }]
      },
      jp: {
        no: "UX-00",
        name: "베이 킥오프 세트 FC 바르셀로나 Ver.",
        kind: "세트",
        releaseDate: "2025-01-25",
        price: "6501",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-13",
    series: "x",
    releases: {
      kr: {
        no: "UX-13",
        name: "골렘 락 1-60UN",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2025-04-10",
        price: "19500",
        composition: [{ name: "골렘 락 1-60UN", quantity: "1개", target: "BEY-X-UX-13-GOLEM-ROCK-1-60UN" }]
      },
      jp: {
        no: "UX-13",
        name: "골렘락 1-60UN",
        kind: "부스터",
        releaseDate: "2025-01-25",
        price: "1400",
        composition: [{ name: "골렘락 1-60UN", quantity: "1개", target: "BEY-X-UX-13-GOLEM-ROCK-1-60UN" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-39",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-39",
        name: "랜덤부스터 셸터드레이크 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2025-02-15",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-BX-39-01-SHELTER-DRAKE-7-80GP" }]
      }
    },
    lineupPool: ["BEY-X-BX-39-01-SHELTER-DRAKE-7-80GP", "BEY-X-BX-39-02-SHELTER-DRAKE-5-70O", "BEY-X-BX-39-03-SHELTER-DRAKE-3-60D"]
  },
{
    id: "PRODUCT-X-UX-00-JP-7",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "사무라이세이버 2-70L 오렌지 Ver.",
        kind: "부스터",
        releaseDate: "2025-02-15",
        price: "",
        composition: [{ name: "사무라이세이버 2-70L", quantity: "1개", target: "BEY-X-UX-00-JP-7-WARRIOR-SABER-2-70L" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-23",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "피닉스페더 블레이드 오렌지 Ver.",
        kind: "툴",
        releaseDate: "2025-02-28",
        price: "2500",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-24",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "피닉스윙 9-60GF 키타니타츠야 Ver.",
        kind: "스타터",
        releaseDate: "2025-03-15",
        price: "2400",
        composition: [{ name: "피닉스윙 9-60GF", quantity: "1개", target: "BEY-X-BX-00-JP-24-PHOENIX-SOAR-9-60GF" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-25",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "베이블레이드 25주년 기념 세트",
        kind: "세트",
        releaseDate: "2025-03-21",
        price: "11000",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-40",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-40",
        name: "와인더런처L",
        kind: "툴",
        releaseDate: "2025-03-29",
        price: "880",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-41",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-41",
        name: "러버커스텀그립 건메탈 Ver.",
        kind: "툴",
        releaseDate: "2025-03-29",
        price: "1320",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-42",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-42",
        name: "러버커스텀그립 블루 Ver.",
        kind: "툴",
        releaseDate: "2025-03-29",
        price: "1320",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-43",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-43",
        name: "기어케이스 화이트 Ver.",
        kind: "툴",
        releaseDate: "2025-03-29",
        price: "4000",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-01",
    series: "x",
    releases: {
      kr: {
        no: "CX-01",
        name: "드랜 브레이브S 6-60V",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-04-10",
        price: "25900",
        composition: [{ name: "드랜 브레이브S 6-60V", quantity: "1개", target: "BEY-X-CX-01-DRAN-BRAVE-S-6-60V" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "CX-01",
        name: "드란 브레이브S 6-60V",
        kind: "스타터",
        releaseDate: "2025-03-29",
        price: "2200",
        composition: [{ name: "드란 브레이브S 6-60V", quantity: "1개", target: "BEY-X-CX-01-DRAN-BRAVE-S-6-60V" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-02",
    series: "x",
    releases: {
      kr: {
        no: "CX-02",
        name: "위저드 아크R 4-55LO",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-04-10",
        price: "25900",
        composition: [{ name: "위저드 아크R 4-55LO", quantity: "1개", target: "BEY-X-CX-02-WIZARD-ARC-R-4-55LO" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "CX-02",
        name: "위저드 아크R 4-55LO",
        kind: "스타터",
        releaseDate: "2025-03-29",
        price: "2200",
        composition: [{ name: "위저드 아크R 4-55LO", quantity: "1개", target: "BEY-X-CX-02-WIZARD-ARC-R-4-55LO" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-03",
    series: "x",
    releases: {
      kr: {
        no: "CX-03",
        name: "페르세우스 다크B 6-80W",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2025-04-10",
        price: "17900",
        composition: [{ name: "페르세우스 다크B 6-80W", quantity: "1개", target: "BEY-X-CX-03-PERSEUS-DARK-B-6-80W" }]
      },
      jp: {
        no: "CX-03",
        name: "페르세우스 다크B 6-80W",
        kind: "부스터",
        releaseDate: "2025-03-29",
        price: "1600",
        composition: [{ name: "페르세우스 다크B 6-80W", quantity: "1개", target: "BEY-X-CX-03-PERSEUS-DARK-B-6-80W" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-04",
    series: "x",
    releases: {
      kr: {
        no: "CX-04",
        name: "배틀 엔트리 세트 커스텀",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2025-04-10",
        price: "75900",
        composition: [{ name: "드랜 브레이브S 6-60V", quantity: "1개", target: "BEY-X-CX-04-DRAN-BRAVE-S-6-60V" }, { name: "페르세우스 다크B 6-80W", quantity: "1개", target: "BEY-X-CX-04-PERSEUS-DARK-B-6-80W" }, { name: "와인더런처", quantity: "2개", target: "TOOLS-X-WINDER-LAUNCHER" }, { name: "익스트림스타디움", quantity: "1개", target: "TOOLS-X-EXTREME-STADIUM" }]
      },
      jp: {
        no: "CX-04",
        name: "배틀 엔트리 세트 커스텀",
        kind: "세트",
        releaseDate: "2025-03-29",
        price: "6501",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-26",
    series: "x",
    releases: {
      kr: {
        no: "BX-00",
        name: "제노엑스칼리버 3-60GF",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-04-10",
        price: "32900",
        composition: [{ name: "제노엑스칼리버 3-60GF", quantity: "1개", target: "BEY-X-BX-00-JP-26-XENO-XCALIBUR-3-60GF" }, { name: "홀드런처", quantity: "1개", target: "TOOLS-X-HOLD-LAUNCHER" }]
      },
      jp: {
        no: "BX-00",
        name: "제노엑스칼리버 3-60GF",
        kind: "스타터",
        releaseDate: "2025-03-29",
        price: "3000",
        composition: [{ name: "제노엑스칼리버 3-60GF", quantity: "1개", target: "BEY-X-BX-00-JP-26-XENO-XCALIBUR-3-60GF" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-05",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-05",
        name: "랜덤부스터 Vol.6",
        kind: "랜덤부스터",
        releaseDate: "2025-04-26",
        price: "1600",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-CX-05-01-HELLS-REAPER-T-4-70K" }]
      }
    },
    lineupPool: ["BEY-X-CX-05-01-HELLS-REAPER-T-4-70K", "BEY-X-CX-05-02-RHINO-REAPER-C-4-55D", "BEY-X-CX-05-03-HELLS-ARC-T-3-85O", "BEY-X-CX-05-04-LEON-CREST-9-80K", "BEY-X-CX-05-05-PHOENIX-RUDDER-4-70LF", "BEY-X-CX-05-06-WHALE-WAVE-7-60K"]
  },
{
    id: "PRODUCT-X-BX-00-JP-27",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "아이언맨 4-80B/타노스 4-60P",
        kind: "세트",
        releaseDate: "2025-04-26",
        price: "4180",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-28",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "스파이더맨 3-30F/베놈 3-80N",
        kind: "세트",
        releaseDate: "2025-04-26",
        price: "4180",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-29",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "루크스카이워커 4-80B/다스베이더 4-60P",
        kind: "세트",
        releaseDate: "2025-04-26",
        price: "4180",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-30",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "만달로리안 3-60F / 모프기디언 3-80N",
        kind: "세트",
        releaseDate: "2025-04-26",
        price: "4180",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-14",
    series: "x",
    releases: {
      kr: {
        no: "UX-14",
        name: "스콜피온스피어 0-70Z",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-05-30",
        price: "25900",
        composition: [{ name: "스콜피온스피어 0-70Z", quantity: "1개", target: "BEY-X-UX-14-SCORPIO-SPEAR-0-70Z" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "UX-14",
        name: "스코피오스피어 0-70Z",
        kind: "스타터",
        releaseDate: "2025-04-26",
        price: "2200",
        composition: [{ name: "스코피오스피어 0-70Z", quantity: "1개", target: "BEY-X-UX-14-SCORPIO-SPEAR-0-70Z" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-31",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "옵티머스프라임 4-60P/메가트론 4-80B",
        kind: "세트",
        releaseDate: "2025-05-17",
        price: "4180",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-32",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "옵티머스프라이멀 3-60F/스타스크림 3-80N",
        kind: "세트",
        releaseDate: "2025-05-17",
        price: "4180",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-06",
    series: "x",
    releases: {
      kr: {
        no: "CX-06",
        name: "랜덤부스터 폭스 브러쉬 셀렉트",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2025-05-30",
        price: "17900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-CX-06-01-FOX-BRUSH-J-9-70GR" }]
      },
      jp: {
        no: "CX-06",
        name: "랜덤부스터 폭스 브러시 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2025-05-17",
        price: "1600",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-CX-06-01-FOX-BRUSH-J-9-70GR" }]
      }
    },
    lineupPool: ["BEY-X-CX-06-01-FOX-BRUSH-J-9-70GR", "BEY-X-CX-06-02-FOX-BRUSH-J-0-80DB", "BEY-X-CX-06-03-FOX-BRUSH-J-2-60U"]
  },
{
    id: "PRODUCT-X-BX-44",
    series: "x",
    releases: {
      kr: {
        no: "BX-44",
        name: "트리케라프레스 M-85BS",
        sale: "",
        kind: "부스터",
        releaseDate: "2025-07-01",
        price: "",
        composition: [{ name: "트리케라프레스 M-85BS", quantity: "1개", target: "BEY-X-BX-44-TRICERA-PRESS-M-85BS" }]
      },
      jp: {
        no: "BX-44",
        name: "트리케라프레스 M-85BS",
        kind: "부스터",
        releaseDate: "2025-06-28",
        price: "1500",
        composition: [{ name: "트리케라프레스 M-85BS", quantity: "1개", target: "BEY-X-BX-44-TRICERA-PRESS-M-85BS" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-1",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "왈큐레 볼트S 4-70V",
        kind: "부스터",
        releaseDate: "2025-07-17",
        price: "",
        composition: [{ name: "왈큐레 볼트S 4-70V", quantity: "1개", target: "BEY-X-CX-00-JP-1-VALKYRIE-BOLT-S-4-70V" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-8",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "나이트메일 3-85BS 네이비 Ver.",
        kind: "부스터",
        releaseDate: "2025-07-17",
        price: "1800",
        composition: [{ name: "나이트메일 3-85BS", quantity: "1개", target: "BEY-X-UX-00-JP-8-KNIGHT-MAIL-3-85BS" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-07",
    series: "x",
    releases: {
      kr: {
        no: "CX-07",
        name: "페가시우스 블라스트A Tr",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-08-11",
        price: "25900",
        composition: [{ name: "페가시우스 블라스트A Tr", quantity: "1개", target: "BEY-X-CX-07-PEGASUS-BLAST-A-TR" }, { name: "와인더런처", quantity: "1개", target: "TOOLS-X-WINDER-LAUNCHER" }]
      },
      jp: {
        no: "CX-07",
        name: "페가서스 블래스트A Tr",
        kind: "스타터",
        releaseDate: "2025-07-19",
        price: "2600",
        composition: [{ name: "페가서스 블래스트A Tr", quantity: "1개", target: "BEY-X-CX-07-PEGASUS-BLAST-A-TR" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-08",
    series: "x",
    releases: {
      kr: {
        no: "CX-08",
        name: "랜덤부스터 Vol.7",
        sale: "일반 판매",
        kind: "랜덤부스터",
        releaseDate: "2025-08-11",
        price: "17900",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-CX-08-01-KERBEROS-FLAME-W-5-80WB" }]
      },
      jp: {
        no: "CX-08",
        name: "랜덤부스터 Vol.7",
        kind: "랜덤부스터",
        releaseDate: "2025-07-19",
        price: "1600",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-CX-08-01-KERBEROS-FLAME-W-5-80WB" }]
      }
    },
    lineupPool: ["BEY-X-CX-08-01-KERBEROS-FLAME-W-5-80WB", "BEY-X-CX-08-02-WHALE-FLAME-M-3-85HT", "BEY-X-CX-08-03-KERBEROS-DARK-W-1-60F", "BEY-X-CX-08-04-DRAN-BUSTER-5-80MN", "BEY-X-CX-08-05-BLACK-TURTLE-7-70WB", "BEY-X-CX-08-06-COBALT-DRAGOON-4-55WB"]
  },
{
    id: "PRODUCT-X-BX-00-JP-33",
    series: "x",
    releases: {
      kr: {
        no: "BX-00",
        name: "더블스타터 티렉스/모사사우루스",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2025-08-11",
        price: "39900",
        composition: []
      },
      jp: {
        no: "BX-00",
        name: "티렉스/모사사우루스",
        kind: "세트",
        releaseDate: "2025-07-19",
        price: "4180",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-34",
    series: "x",
    releases: {
      kr: {
        no: "BX-00",
        name: "더블스타터 스피노사우루스/케찰코아틀루스",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2025-08-11",
        price: "39900",
        composition: []
      },
      jp: {
        no: "BX-00",
        name: "스피노사우루스/케찰코아틀루스",
        kind: "세트",
        releaseDate: "2025-07-19",
        price: "4180",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-35",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "록레오네 6-80GN",
        kind: "부스터",
        releaseDate: "2025-07-19",
        price: "1600",
        composition: [{ name: "록레오네 6-80GN", quantity: "1개", target: "BEY-X-BX-00-JP-35-ROCK-LEONE-6-80GN" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-2",
    series: "x",
    releases: {
      kr: {
        no: "CX-00",
        name: "페가시우스 블라스트A Tr 레드 Ver.",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-08-10",
        price: "25900",
        composition: [{ name: "페가시우스 블라스트A Tr", quantity: "1개", target: "BEY-X-CX-00-JP-2-PEGASUS-BLAST-A-TR" }]
      },
      jp: {
        no: "CX-00",
        name: "페가서스 블래스트A Tr 레드 Ver.",
        kind: "스타터",
        releaseDate: "2025-08-03",
        price: "2700",
        composition: [{ name: "페가서스 블래스트A Tr", quantity: "1개", target: "BEY-X-CX-00-JP-2-PEGASUS-BLAST-A-TR" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-3",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "위저드 아크R 4-55LO 블랙 Ver.",
        kind: "부스터",
        releaseDate: "2025-08-09",
        price: "1800",
        composition: [{ name: "위저드 아크R 4-55LO", quantity: "1개", target: "BEY-X-CX-00-JP-3-WIZARD-ARC-R-4-55LO" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-45",
    series: "x",
    releases: {
      kr: {
        no: "BX-45",
        name: "워리어칼리버 6-70M",
        sale: "일반 판매",
        kind: "부스터",
        releaseDate: "2025-09-17",
        price: "15900",
        composition: [{ name: "워리어칼리버 6-70M", quantity: "1개", target: "BEY-X-BX-45-WARRIOR-CALIBUR-6-70M" }]
      },
      jp: {
        no: "BX-45",
        name: "사무라이칼리버 6-70M",
        kind: "부스터",
        releaseDate: "2025-08-09",
        price: "1500",
        composition: [{ name: "사무라이칼리버 6-70M", quantity: "1개", target: "BEY-X-BX-45-WARRIOR-CALIBUR-6-70M" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-15",
    series: "x",
    releases: {
      kr: {
        no: "UX-15",
        name: "샤크스케일 덱 세트",
        sale: "일반 판매",
        kind: "세트",
        releaseDate: "2025-09-17",
        price: "37900",
        composition: [{ name: "샤크스케일 4-50UF", quantity: "1개", target: "BEY-X-UX-15-SHARK-SCALE-4-50UF" }, { name: "티라노로어 1-70L", quantity: "1개", target: "BEY-X-UX-15-TYRANNO-ROAR-1-70L" }, { name: "헬즈 브레이브J 3-60GF", quantity: "1개", target: "BEY-X-UX-15-HELLS-BRAVE-J-3-60GF" }]
      },
      jp: {
        no: "UX-15",
        name: "샤크스케일 덱 세트",
        kind: "세트",
        releaseDate: "2025-08-09",
        price: "4200",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-09",
    series: "x",
    releases: {
      kr: {
        no: "CX-09",
        name: "솔 이클립스D 5-70TK",
        sale: "일반 판매",
        kind: "스타터",
        releaseDate: "2025-09-27",
        price: "25900",
        composition: [{ name: "솔 이클립스D 5-70TK", quantity: "1개", target: "BEY-X-CX-09-SOL-ECLIPSE-D-5-70TK" }]
      },
      jp: {
        no: "CX-09",
        name: "솔 이클립스D 5-70TK",
        kind: "스타터",
        releaseDate: "2025-09-27",
        price: "2500",
        composition: [{ name: "솔 이클립스D 5-70TK", quantity: "1개", target: "BEY-X-CX-09-SOL-ECLIPSE-D-5-70TK" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-46",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-46",
        name: "배틀 엔트리 세트∞",
        kind: "세트",
        releaseDate: "2025-10-11",
        price: "7500",
        composition: [{ name: "고어태클 7-70T", quantity: "1개", target: "BEY-X-BX-46-GORE-TACKLE-7-70T" }, { name: "코발트드레이크 9-60R", quantity: "1개", target: "BEY-X-BX-46-COBALT-DRAKE-9-60R" }, { name: "와인더런처", quantity: "2개", target: "TOOLS-X-WINDER-LAUNCHER" }, { name: "인피니티스타디움", quantity: "1개", target: "TOOLS-X-INFINITY-STADIUM" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-47",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-47",
        name: "스트링런처L 레드 Ver.",
        kind: "툴",
        releaseDate: "2025-10-11",
        price: "990",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-16",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-16",
        name: "랜덤부스터 클락미라지 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2025-10-11",
        price: "1400",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-UX-16-01-CLOCK-MIRAGE-9-65B" }]
      }
    },
    lineupPool: ["BEY-X-UX-16-01-CLOCK-MIRAGE-9-65B", "BEY-X-UX-16-02-CLOCK-MIRAGE-9-65B", "BEY-X-UX-16-03-CLOCK-MIRAGE-9-65B"]
  },
{
    id: "PRODUCT-X-CX-10",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-10",
        name: "울프 헌트F 0-60DB",
        kind: "부스터",
        releaseDate: "2025-11-01",
        price: "1700",
        composition: [{ name: "울프 헌트F 0-60DB", quantity: "1개", target: "BEY-X-CX-10-WOLF-HUNT-F-0-60DB" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-11",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-11",
        name: "엠퍼러마이트 덱 세트",
        kind: "세트",
        releaseDate: "2025-11-01",
        price: "5000",
        composition: [{ name: "엠퍼러 마이트H Op", quantity: "1개", target: "BEY-X-CX-11-EMPEROR-MIGHT-H-OP" }, { name: "샤크길 5-60FB", quantity: "1개", target: "BEY-X-CX-11-SHARK-GILL-5-60FB" }, { name: "골렘락 M-85HN", quantity: "1개", target: "BEY-X-CX-11-GOLEM-ROCK-M-85HN" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-36",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "F/T/B/N 비트 세트 실버×화이트",
        kind: "툴",
        releaseDate: "2025-11-15",
        price: "990",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-37",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "베이 엠블럼 스티커 01",
        kind: "툴",
        releaseDate: "2025-11-15",
        price: "600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-17",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-17",
        name: "메테오드라군 3-70J",
        kind: "스타터",
        releaseDate: "2025-12-27",
        price: "2300",
        composition: [{ name: "메테오드라군 3-70J", quantity: "1개", target: "BEY-X-UX-17-METEO-DRAGOON-3-70J" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-18",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-18",
        name: "랜덤부스터 Vol.8",
        kind: "랜덤부스터",
        releaseDate: "2025-12-27",
        price: "1600",
        composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-X-UX-18-01-MUMMY-CURSE-7-55W" }]
      }
    },
    lineupPool: ["BEY-X-UX-18-01-MUMMY-CURSE-7-55W", "BEY-X-UX-18-02-MUMMY-CURSE-4-60C", "BEY-X-UX-18-03-PEGASUS-BRUSH-M-3-85W", "BEY-X-UX-18-04-SOL-BRAVE-C-9-70TP", "BEY-X-UX-18-05-DRAN-DAGGER-7-55G", "BEY-X-UX-18-06-PEARL-TIGER-4-80LR"]
  },
{
    id: "PRODUCT-X-BX-00-JP-38",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "드라군스톰 4-60RA",
        kind: "부스터",
        releaseDate: "2025-12-27",
        price: "1700",
        composition: [{ name: "드라군스톰 4-60RA", quantity: "1개", target: "BEY-X-BX-00-JP-38-DRAGOON-STORM-4-60RA" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-12",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-12",
        name: "피닉스 플레어Z 9-80WW",
        kind: "부스터",
        releaseDate: "2026-01-24",
        price: "1700",
        composition: [{ name: "피닉스 플레어Z 9-80WW", quantity: "1개", target: "BEY-X-CX-12-PHOENIX-FLARE-Z-9-80WW" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-48",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-48",
        name: "랜덤부스터 Vol.9",
        kind: "랜덤부스터",
        releaseDate: "2026-02-14",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-9",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "에어로페가서스 3-70A 레드 Ver.",
        kind: "부스터",
        releaseDate: "2026-02-21",
        price: "1600",
        composition: [{ name: "에어로페가서스 3-70A", quantity: "1개", target: "BEY-X-UX-00-JP-9-AERO-PEGASUS-3-70A" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-39",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "드란소드 1-60V J리그 Ver.",
        kind: "스타터",
        releaseDate: "2026-03-14",
        price: "2500",
        composition: [{ name: "드란소드 1-60V", quantity: "1개", target: "BEY-X-BX-00-JP-39-DRAN-SWORD-1-60V" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-40",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "코발트드라군 9-60F J리그 Ver.",
        kind: "스타터",
        releaseDate: "2026-03-14",
        price: "2500",
        composition: [{ name: "코발트드라군 9-60F", quantity: "1개", target: "BEY-X-BX-00-JP-40-COBALT-DRAGOON-9-60F" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-13",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-13",
        name: "바하무트 블리츠BK 1-50I",
        kind: "스타터",
        releaseDate: "2026-03-28",
        price: "2200",
        composition: [{ name: "바하무트 블리츠BK 1-50I", quantity: "1개", target: "BEY-X-CX-13-BAHAMUT-BLITZ-BK-1-50I" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-14",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-14",
        name: "나이트 포트리스GV 8-70UN",
        kind: "스타터",
        releaseDate: "2026-03-28",
        price: "2200",
        composition: [{ name: "나이트 포트리스GV 8-70UN", quantity: "1개", target: "BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-15",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-15",
        name: "라그나 레이지FE 4-55Y",
        kind: "부스터",
        releaseDate: "2026-03-28",
        price: "1600",
        composition: [{ name: "라그나 레이지FE 4-55Y", quantity: "1개", target: "BEY-X-CX-15-RAGNA-RAGE-FE-4-55Y" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-16",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-16",
        name: "스타트대시 세트C",
        kind: "세트",
        releaseDate: "2026-03-28",
        price: "5650",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-41",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "스트링런처 B4스토어 한정 컬러 Ver.",
        kind: "툴",
        releaseDate: "2026-03-28",
        price: "1100",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-42",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "스톰 스프리건 2-70M",
        kind: "스타터",
        releaseDate: "2026-03-28",
        price: "2300",
        composition: [{ name: "스톰 스프리건 2-70M", quantity: "1개", target: "BEY-X-BX-00-JP-42-STORM-SPRIGGAN-2-70M" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-19",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-19",
        name: "불릿그리폰H",
        kind: "스타터",
        releaseDate: "2026-04-25",
        price: "2600",
        composition: [{ name: "불릿그리폰H", quantity: "1개", target: "BEY-X-UX-19-BULLET-GRIFFON-H" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-10",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "스코피오스피어 0-70Z 마젠타 Ver.",
        kind: "부스터",
        releaseDate: "2026-04-25",
        price: "1800",
        composition: [{ name: "스코피오스피어 0-70Z", quantity: "1개", target: "BEY-X-UX-00-JP-10-SCORPIO-SPEAR-0-70Z" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-17",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-17",
        name: "랜덤부스터 Vol.10",
        kind: "랜덤부스터",
        releaseDate: "2026-04-25",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-49",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-49",
        name: "드란스트라이크 4-50FF",
        kind: "스타터",
        releaseDate: "2026-05-16",
        price: "2200",
        composition: [{ name: "드란스트라이크 4-50FF", quantity: "1개", target: "BEY-X-BX-49-DRAN-STRIKE-4-50FF" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-4",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "드란 브레이브S 6-60V 블랙 Ver.",
        kind: "부스터",
        releaseDate: "2026-05-30",
        price: "1800",
        composition: [{ name: "드란 브레이브S 6-60V", quantity: "1개", target: "BEY-X-CX-00-JP-4-DRAN-BRAVE-S-6-60V" }]
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-11",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "사무라이세이버 5-60K 축구 일본 대표 Ver.",
        kind: "스타터",
        releaseDate: "2026-06-13",
        price: "2500",
        composition: [{ name: "사무라이세이버 5-60K", quantity: "1개", target: "BEY-X-UX-00-JP-11-WARRIOR-SABER-5-60K" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-51",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-51",
        name: "스트링런처 블랙×그린",
        kind: "툴",
        releaseDate: "2026-06-13",
        price: "1100",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-18",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-18",
        name: "랜덤부스터 브라키오윕 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2026-06-13",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-5",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "벅스앤틀러스B 2-60D 오렌지 Ver.",
        kind: "부스터",
        releaseDate: "2026-07-09",
        price: "1800",
        composition: [{ name: "벅스 앤틀러스B 2-60D", quantity: "1개", target: "BEY-X-CX-00-JP-5-BUGS-ANTLERS-B-2-60D" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-6",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "크라켄리글S 3-70O 블루 Ver.",
        kind: "부스터",
        releaseDate: "2026-07-09",
        price: "1800",
        composition: [{ name: "크라켄 리글S 3-70O", quantity: "1개", target: "BEY-X-CX-00-JP-6-KRAKEN-RIGGLE-S-3-70O" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-7",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "호넷포트R 7-60T 옐로 Ver.",
        kind: "부스터",
        releaseDate: "2026-07-09",
        price: "1800",
        composition: [{ name: "호넷 포트R 7-60T", quantity: "1개", target: "BEY-X-CX-00-JP-7-HORNET-PORT-R-7-60T" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-8",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "드레이크브레이브G 4-70I 블루 Ver.",
        kind: "부스터",
        releaseDate: "2026-07-09",
        price: "1900",
        composition: [{ name: "드레이크 브레이브G 4-70I", quantity: "1개", target: "BEY-X-CX-00-JP-8-DRAKE-BRAVE-G-4-70I" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-43",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "스톰 페가시스 3-70RA",
        kind: "스타터",
        releaseDate: "2026-07-11",
        price: "2620",
        composition: [{ name: "스톰 페가시스 3-70RA", quantity: "1개", target: "BEY-X-BX-00-JP-43-STORM-PEGASIS-3-70RA" }]
      }
    }
  },
{
    id: "PRODUCT-X-BX-50",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-50",
        name: "랜덤부스터 Vol.11",
        kind: "랜덤부스터",
        releaseDate: "2026-07-11",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-20",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-20",
        name: "글로리왈큐레LF",
        kind: "스타터",
        releaseDate: "2026-07-11",
        price: "2700",
        composition: [{ name: "글로리왈큐레LF", quantity: "1개", target: "BEY-X-UX-20-GLORY-VALKYRIE-LF" }]
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-9",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "에반게리온 덱 세트",
        kind: "세트",
        releaseDate: "2026-08-29",
        price: "7500",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-10",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "티가 레이지FT 3-60T",
        kind: "스타터",
        releaseDate: "2026-09-12",
        price: "2750",
        composition: [{ name: "티가 레이지FT 3-60T", quantity: "1개", target: "BEY-X-CX-00-JP-10-TIGA-RAGE-FT-3-60T" }]
      }
    }
  }
];

export { productItems };
