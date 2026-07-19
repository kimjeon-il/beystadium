import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { animeInfo } from "../data/source/anime.mjs";

const runtimeAnime = JSON.parse(readFileSync("data/runtime/anime.json", "utf8"));
const runtimeSearch = JSON.parse(readFileSync("data/runtime/search/anime.json", "utf8"));
const runtimeRegistry = JSON.parse(readFileSync("data/runtime/registry.json", "utf8"));

const expectedChoZEpisodes = [
  ["이게 바로 초제트 베이야!", "2018-06-18"],
  ["아킬레스 대 포르네우스!", "2018-06-25"],
  ["석양의 결투!", "2018-07-02"],
  ["끝내버려! 제트 버스터!!", "2018-07-09"],
  ["초제트 대결! 발키리 대 롱기누스!!", "2018-07-16"],
  ["폭군 루이! 배틀 로열!", "2018-07-23"],
  ["개막! 롱기누스 컵!!", "2018-07-30"],
  ["변신! 헬 살라맨더!!", "2018-08-06"],
  ["분노의 화염 슛!", "2018-08-13"],
  ["아킬레스 대 라그나로크!", "2018-08-20"],
  ["배신의 배틀!", "2018-08-27"],
  ["최강파워! 헤라클레스!!", "2018-09-03"],
  ["초제트 결승 배틀!", "2018-09-10"],
  ["드래곤! 블러디 롱기누스!", "2018-09-17"],
  ["루이를 꺾어라!", "2018-09-24"],
  ["대항해! 배틀쉽 크루즈!", "2018-10-01"],
  ["용자와 엑스칼리버!", "2018-10-08"],
  ["유령선의 초제트 배틀!", "2018-10-15"],
  ["대격돌! 베이애슬론!!", "2018-10-22"],
  ["화염! 리바이브 피닉스!", "2018-10-29"],
  ["2인 1조! 태그배틀!", "2018-11-05"],
  ["이변의 쓰리 베이 배틀!", "2018-11-12"],
  ["격전! 베이스타를 지켜라!", "2018-11-19"],
  ["아킬레스 대 엑스칼리버!", "2018-11-26"],
  ["드래곤! 가이스트 파브닐!!", "2018-12-03"],
  ["히트 업! 배틀쉽!", "2018-12-10"],
  ["천하무적의 길!", "2018-12-17"],
  ["강산 대 서아진!!", "2018-12-24"],
  ["저승의 마왕! 데드하데스!", "2018-12-31"],
  ["변해가는 서아진!", "2019-01-07"],
  ["새로운 탄생! 초Z 발키리!!", "2019-01-14"],
  ["마성 데드 그랑!!", "2019-01-21"],
  ["전율! 데드그랑의 함정!!", "2019-01-28"],
  ["합체 베이! 이클립스!!", "2019-02-04"],
  ["불꽃 신! 초Z스프리건!!", "2019-02-11"],
  ["서아진, 어둠과의 싸움!!", "2019-02-18"],
  ["초제트 격돌! 마성의 결전!!", "2019-02-25"],
  ["위대한 탄생! 초Z아킬레스!!", "2019-03-04"],
  ["서아진, 혼신의 복수전!!", "2019-03-11"],
  ["바람의 기사 에어 나이트!", "2019-03-18"],
  ["하츠 대 파이!!", "2019-03-25"],
  ["배틀로열! 중요한 건 전략!!", "2019-04-01"],
  ["파괴의 신! 데드 피닉스!!", "2019-04-08"],
  ["초제트 특훈, 왕국편!!", "2019-04-15"],
  ["초제트 특훈, 사바나편!!", "2019-04-22"],
  ["날아라! 치열한 공중전!!", "2019-04-29"],
  ["불꽃의 신 대 파괴의 신!!", "2019-05-06"],
  ["우리들의 베이블레이드!", "2019-05-13"],
  ["서아진 대 파이!!", "2019-05-20"],
  ["서아진, 초제트 교감!", "2019-05-27"],
  ["유대감! 서아진 대 강산!!", "2019-06-03"]
];

const expectedGachiEpisodes = [
  ["진검 베이! 에이스 드래곤!", "2019-06-24"],
  ["멋진데! 무신 아수라!", "2019-07-01"],
  ["저게 말이 돼? 위저드 파브닐!", "2019-07-08"],
  ["불꽃의 그랜드 드래곤!", "2019-07-15"],
  ["드래곤 대 파브닐!", "2019-07-22"],
  ["초고속! 그랜드 비트!", "2019-07-29"],
  ["강산한테 도전!", "2019-08-05"],
  ["뜨거운 열기! 베이 카니발!", "2019-08-12"],
  ["올인! 저지먼트 조커!", "2019-08-19"],
  ["4강! 진검 승부!", "2019-08-26"],
  ["정면승부 대 트릭!", "2019-09-02"],
  ["중량급, 츠바이 롱기누스!", "2019-09-09"],
  ["쏠 수 있어, 진검 슛!", "2019-09-16"],
  ["진검 슛 작렬! 골드 터보!", "2019-09-23"],
  ["데미안 대 델타!", "2019-09-30"],
  ["악마의 베이, 디아볼로스!", "2019-10-07"],
  ["비약, 헤븐 페가수스!", "2019-10-14"],
  ["위험한 아트! 드레드 바하무트!", "2019-10-21"],
  ["섬광! 샤이닝 크로스!", "2019-10-28"],
  ["진검 소년 대 신의 아들!", "2019-11-04"],
  ["천공의 대결!", "2019-11-11"],
  ["나와라, 6! 배틀 저니!", "2019-11-18"],
  ["돌아! 달려! 정상을 향해서!", "2019-11-25"],
  ["격돌 GT3!", "2019-12-02"],
  ["챔피언한테 도전!", "2019-12-09"],
  ["진검 승부! 데미안 대 서아진!", "2019-12-16"],
  ["빛나라! 나의 골드 터보!", "2019-12-23"],
  ["초제트! 서아진 대 델타!", "2019-12-30"],
  ["기습! 헬의 왕, 아더!", "2020-01-06"],
  ["파괴의 베이, 아포칼립스!", "2020-01-13"],
  ["탄생! 임페리얼 드래곤!", "2020-01-20"],
  ["헬 타워의 대결!", "2020-01-27"],
  ["제네시스 발동!", "2020-02-03"],
  ["디아볼로스의 역습!", "2020-02-10"],
  ["드래곤 대 아포칼립스!", "2020-02-17"],
  ["무한 록 시스템! 깰 수 있을까?", "2020-02-24"],
  ["드래곤 대 제네시스!", "2020-03-02"],
  ["찬란한 빛! 슈페리얼 터보!", "2020-03-09"],
  ["디아볼로스의 부활!", "2020-03-16"],
  ["빛나라! 마스터 스매시!", "2020-03-23"],
  ["신세계! 빅뱅 제네시스!", "2020-03-30"],
  ["스피드 더블 스타디움!", "2020-04-06"],
  ["빛나라! 아수라!", "2020-04-13"],
  ["진검승부! wbba. VS 헬!!", "2020-04-20"],
  ["드래곤, 최고의 각성!", "2020-04-27"],
  ["검은 회오리 드레드 자이로!", "2020-05-04"],
  ["불꽃 튀는 더블 배틀!", "2020-05-11"],
  ["최강의 방정식!", "2020-05-18"],
  ["환상의 더블 배틀", "2020-05-25"],
  ["이게 빅토리즈야!", "2020-06-01"],
  ["진한 우정! 마스터 드래곤!", "2020-06-08"],
  ["진검승부! 데미안 대 로니!", "2020-06-15"]
];

const expectedRows = episodes => episodes.map(([title, airDate], index) => [
  String(index + 1) + "화",
  title,
  "",
  airDate,
  "",
  ""
]);
const episodeTuple = episode => [
  episode.no,
  episode.titles.kr,
  episode.titles.jp,
  episode.airDates.kr,
  episode.airDates.jp,
  episode.note
];
const expectedChoZRows = expectedRows(expectedChoZEpisodes);
const expectedGachiRows = expectedRows(expectedGachiEpisodes);
const expectedChoZIds = expectedChoZEpisodes.map((_, index) => "BURST-CHO-Z-EPISODE-" + (index + 1));
const expectedGachiIds = expectedGachiEpisodes.map((_, index) => "BURST-GACHI-EPISODE-" + (index + 1));

test("초제트 방영목록 51건은 제공된 회차·제목·날짜 순서를 유지한다", () => {
  const episodes = animeInfo.episodes.filter(episode => episode.season === "burst-cho-z");
  assert.equal(episodes.length, 51);
  assert.deepEqual(episodes.map(episodeTuple), expectedChoZRows);

  const firstIndex = animeInfo.episodes.findIndex(episode => episode.season === "burst-cho-z");
  assert.equal(animeInfo.episodes[firstIndex - 1].season, "burst-god");
  assert.equal(animeInfo.episodes[firstIndex + episodes.length].season, "burst-gachi");
});

test("초제트 에피소드 주소·검색·레지스트리가 1화부터 51화까지 생성된다", () => {
  const runtimeEpisodes = runtimeAnime.episodes.filter(episode => episode.season === "burst-cho-z");
  const searchEntries = runtimeSearch.search.filter(entry => entry[4] === "burst-cho-z");
  const registryEntries = runtimeRegistry.items.filter(([id]) => id.startsWith("BURST-CHO-Z-EPISODE-"));

  assert.deepEqual(runtimeEpisodes.map(episodeTuple), expectedChoZRows);
  assert.deepEqual(searchEntries.map(entry => entry[1]), expectedChoZIds);
  assert.deepEqual(searchEntries.map(entry => [entry[3], entry[5], entry[6], entry[7], entry[8], entry[9]]), expectedChoZRows);
  assert.deepEqual(registryEntries.map(([id]) => id), expectedChoZIds);
  assert.ok(runtimeRegistry.items.some(([id]) => id === "BEYBLADE-X-EPISODE-1"));
});

test("진검 방영목록 52건은 교정된 공백과 제공된 날짜 순서를 유지한다", () => {
  const episodes = animeInfo.episodes.filter(episode => episode.season === "burst-gachi");
  assert.equal(episodes.length, 52);
  assert.deepEqual(episodes.map(episodeTuple), expectedGachiRows);

  const firstIndex = animeInfo.episodes.findIndex(episode => episode.season === "burst-gachi");
  assert.equal(animeInfo.episodes[firstIndex - 1].season, "burst-cho-z");
  assert.equal(animeInfo.episodes[firstIndex + episodes.length].season, "beyblade-x");
  assert.deepEqual(episodes.slice(11, 13).map(episode => episode.titles.kr), [
    "중량급, 츠바이 롱기누스!",
    "쏠 수 있어, 진검 슛!"
  ]);
  assert.equal(episodes[16].titles.kr, "비약, 헤븐 페가수스!");
  assert.equal(episodes[31].airDates.kr, "2020-01-27");
});

test("진검 에피소드 주소·검색·레지스트리가 1화부터 52화까지 생성된다", () => {
  const runtimeEpisodes = runtimeAnime.episodes.filter(episode => episode.season === "burst-gachi");
  const searchEntries = runtimeSearch.search.filter(entry => entry[4] === "burst-gachi");
  const registryEntries = runtimeRegistry.items.filter(([id]) => id.startsWith("BURST-GACHI-EPISODE-"));

  assert.equal(runtimeAnime.episodes.length, 626);
  assert.equal(runtimeSearch.search.length, 626);
  assert.equal(runtimeRegistry.items.length, 3443);
  assert.deepEqual(runtimeEpisodes.map(episodeTuple), expectedGachiRows);
  assert.deepEqual(searchEntries.map(entry => entry[1]), expectedGachiIds);
  assert.deepEqual(searchEntries.map(entry => [entry[3], entry[5], entry[6], entry[7], entry[8], entry[9]]), expectedGachiRows);
  assert.deepEqual(registryEntries.map(([id]) => id), expectedGachiIds);
  assert.ok(runtimeRegistry.items.some(([id]) => id === "BEYBLADE-X-EPISODE-1"));
});
