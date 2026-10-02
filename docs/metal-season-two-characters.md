# Metal season-two character usage

The canonical source is `data/source/metal-fight-characters.mjs`. Characters retain one stable identity across seasons; only recorded usage appears under each season. There are 21 season-one identities, 24 new season-two identities, and 19 unchanged X identities. Season two contains 38 recorded users, including 14 returning identities.

## Exact retail editions

User links require explicit catalog IDs. No relation is inferred from a model name, wheel pair, combination, recolor, or set membership. The same restriction applies to existing season-one users. Storm Pegasis is linked to 강타 only through BB-28. Existing X name-only usage remains visible in character data but cannot establish a retail-edition user link.

- 강타: BB-70 Galaxy Pegasis; 드래곤: BB-88 Meteo L-Drago; 장군: BB-71 Ray Unicorno. No season-three upgrades
- 왕대상: BB-78 Rock Giraffe; 리치윤: BB-74 Thermal Lacerta; 메이메이: **BB-72** Aquario, not the original BB-21 edition
- 시저 (search alias 줄리어스 시저): BB-80 Gravity Perseus; 웨일즈: BB-82 blue Grand Ketos WD145RS; 소피: BB-82 white Grand Ketos T125RS
- 나일: BB-P01 Vulcan Horuseus; 다무레: BB-86 Counter Escolpio, the anime black-clear-wheel edition
- 아르고: BB-91 Ray Keel; 아이언: BB-94 Tornado Herculeo
- 파우스트: BB-104 Basalt Horogium, one identity; 제오: BB-95 Flame Byxis; 데미안: BB-99 Hell Kerbecs; 잭: BB-100 Killer Beafowl; 지구라트 박사: BB-102 Screw Capricorne

Returning users retain verified standard editions in season two. 크랩킹 has only Dark Cancer recorded for season two; his season-one Mad Cancer remains scoped to season one. Temporary borrowing, unverified past use, later-season upgrades, and generic one-off background users are omitted.

The season-two record displays 파우스트 only, with no 토비 alias or usage attribution. A later-season 토비 record is outside this change. The existing opaque character ID is retained to preserve links.

## Text-only exceptions

These character usages have no verified exact target in this catalog, so they cannot produce reverse links:

- 챠우싱: Virgo ED145ES and Poison Virgo ED145ES, absent combinations
- 알렉세이: Burn Wolf SW145WD, absent combination
- 도라: Rock Escolpio T125JB, exact anime color/retail edition unresolved
- 노와구마: red Rock Orso D125B; do not substitute the brown BB-51 edition
- 게오르그: Grand Capricorne 145D, absent combination
- 셀린: Ray Cancer 135SF; 엔조: Ray Cancer M145Q, anime-only combinations
- Marcus: Cyber Aquario 105RF; the catalog currently labels BB-86 as 105F. This task does not silently change that product or link the mismatched combination

English model text is retained for unmapped entries instead of inventing catalog IDs or localized product labels. 다무레 is the common Korean page label, with original-name alias Damoure; precise broadcast spelling remains uncertain (voice-credit spelling differs). Marcus retains the verified original name rather than guessing between inconsistent Korean spellings.

## Evidence

- [Official TV Tokyo episode 101: Faust appearance](https://www.tv-tokyo.co.jp/contents/mf-beyblade/episodes/episodes8/index.html)
- [Licensed Korean comic publisher: 왕대상](https://m.yes24.com/goods/detail/11394097), [Garcia names](https://m.yes24.com/Goods/Detail/7343777)
- [Aquario BB-21 versus anime BB-72 edition](https://beyblade.fandom.com/wiki/Aquario_105F), [independent language description](https://beyblade.fandom.com/fr/wiki/Aquario_105F)
- [Counter Scorpio 145D edition differences](https://beyblade.fandom.com/wiki/Counter_Scorpio_145D)
- [Ray Gil 100RSF](https://beyblade.fandom.com/wiki/Ray_Gil_100RSF), [Cyclone Herculeo 105F](https://beyblade.fandom.com/wiki/Cyclone_Herculeo_105F)
- [Cyber Aquario 105RF](https://beyblade.fandom.com/wiki/Cyber_Aquario_105RF), [retailer BB-86 combination listing](https://www.suruga-ya.jp/kaitori/kaitori_detail/607050411)
- [Season-two episode 4 returning usage](https://beyblade.fandom.com/wiki/Beyblade:_Metal_Masters_-_Episode_04), [episode 46](https://beyblade.fandom.com/wiki/Beyblade:_Metal_Masters_-_Episode_46)

Secondary character and episode references were cross-checked with existing catalog identities. Where exact retail color evidence remained unresolved, the source deliberately retains no target.

## Source-only media appearance data

`data/source/metal-fight-media-beys.mjs` stores six season-two anime appearances with names, known combinations, stable character references, medium/season provenance and evidence URLs. It is deliberately not imported into the runtime catalog: no new cards, modals, products, parts, images or stats are introduced.

Three exact combinations are confirmed anime-only: Virgo ED145ES, Ray Cancer 135SF and Ray Cancer M145Q. Poison Virgo ED145ES, Burn Wolf SW145WD and Grand Capricorne 145D have Hasbro releases, so their status is `released-unmapped`, with no claim that an existing catalog edition matches the anime colors. Retail-backed Marcus and unresolved Russian recolors remain outside this adjunct.

Poison Virgo ED145ES and Burn Wolf SW145WD also appear in an [official Hasbro PDF](https://www.hasbro.com/common/assets/image/Printables/d83b87d6e2ab4791a7be48878ece4410/FBB2851619B9F36910D5201B397F8C0A/CE0E59CF5056900B10237924391C9AD2.pdf). Grand Capricorne's retail source is the [Team Excalibur Set](https://beyblade.fandom.com/wiki/Team_Excalibur_Set). Catalog absence alone is never treated as evidence of no retail release.

The integrity tests require each media appearance to agree with its character's existing season-two text-only usage. Missing images and stats are omitted, not invented. The current UI remains unchanged; future media-specific display is deferred.

## Additional model changes without seasonal appearances

Six existing characters have one `additionalUsage` each. This adds no characters, duplicates no unchanged usage, and does not create a new season/appearance record. Existing season-one/two provenance remains unchanged. The aggregate character view/search and exact toy user links include the additions; legacy season-filtered lists retain their original scoped usage. Character detail uses the ordinary 사용 베이 heading for these unscoped additions.

- 강타 → BB-105 빅뱅 페가시스 F:D. [Original color details](https://www.beywiki.com/index.php?title=Big_Bang_Pegasis_F%3AD); BB-107 is a white-frame DX recolor and is excluded
- 태사자 → BB-106 팡 레온 130W²D. [Original edition and variants](https://beyblade.fandom.com/wiki/Fang_Leone_130W2D)
- 노아 → BB-126 플래시 사지타리오 230WD. [Original edition](https://www.beywiki.com/index.php?title=Flash_Sagittario_230WD)
- 드래곤 → BB-108 엘드라고 디스트로이 F:S. [Original edition and variants](https://www.beywiki.com/index.php?title=L-Drago_Destroy_F%3AS)
- 장군 → BB-117 브릿츠 유니콘 100RSF. [Original Strongest Blader Set and recolor distinction](https://www.beywiki.com/index.php?title=Blitz_Unicorno_100RSF). A verified original set edition is allowed; unrelated editions are not inferred
- 제오 → BB-116 스크류 폭스 TR145W²D. [Known color discrepancy](https://beyblade.fandom.com/wiki/Spiral_Fox_TR145W2D): the retail W²D is translucent black while the anime W²D is blue. The user explicitly approved linking this original edition despite that difference. This is a specific exception, not permission to link other recolors

All prior usage remains intact. These changes do not add a 4D appearance roster or perform a broad migration of legacy season data.
