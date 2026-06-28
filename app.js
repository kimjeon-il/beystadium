const items = [
  { id: "BEY-BB-01-PEGASIS-105F", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "105F", productNo: "BB-01", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-02-BULL-125SF", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "125SF", productNo: "BB-02", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-125", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-03-SAGITTARIO-145S", type: "bey", structure: "basic", name: "사지타리오", en: "Sagittario", sub: "145S", productNo: "BB-03", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "WHEEL-SAGITTARIO", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-04-LEONE-145D", type: "bey", structure: "basic", name: "레온", jpName: "레오네", en: "Leone", sub: "145D", productNo: "BB-04", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "WHEEL-LEONE", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-05-PEGASIS-145D", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "145D", productNo: "BB-05", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-06-BULL-145S", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "145S", productNo: "BB-06", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-07-SAGITTARIO-125SF", type: "bey", structure: "basic", name: "사지타리오", en: "Sagittario", sub: "125SF", productNo: "BB-07", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "WHEEL-SAGITTARIO", "TRACK-125", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-08-LEONE-105F", type: "bey", structure: "basic", name: "레온", jpName: "레오네", en: "Leone", sub: "105F", productNo: "BB-08", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "WHEEL-LEONE", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-09-PEGASIS-105F", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "105F", productNo: "BB-09", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-11-WOLF-D125B", type: "bey", structure: "basic", name: "울프", jpName: "볼프", en: "Wolf", sub: "D125B", productNo: "BB-11", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "WHEEL-WOLF", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-12-WOLF-105F", type: "bey", structure: "basic", name: "울프", jpName: "볼프", en: "Wolf", sub: "105F", productNo: "BB-12", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "WHEEL-WOLF", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-13-ARIES-125D", type: "bey", structure: "basic", name: "아리에스", en: "Aries", sub: "125D", productNo: "BB-13", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "WHEEL-ARIES", "TRACK-125", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-13-SAGITTARIO-145F", type: "bey", structure: "basic", name: "사지타리오", en: "Sagittario", sub: "145F", productNo: "BB-13", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "WHEEL-SAGITTARIO", "TRACK-145", "BOTTOM-FLAT"] },
  { id: "BEY-BB-13-BULL-105S", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "105S", productNo: "BB-13", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-105", "BOTTOM-SHARP"] },
  { id: "BEY-BB-13-PEGASIS-145SF", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "145SF", productNo: "BB-13", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-13-LEONE-125S", type: "bey", structure: "basic", name: "레온", jpName: "레오네", en: "Leone", sub: "125S", productNo: "BB-13", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "WHEEL-LEONE", "TRACK-125", "BOTTOM-SHARP"] },
  { id: "BEY-BB-13-SAGITTARIO-145SF", type: "bey", structure: "basic", name: "사지타리오", en: "Sagittario", sub: "145SF", productNo: "BB-13", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "WHEEL-SAGITTARIO", "TRACK-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-13-BULL-105D", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "105D", productNo: "BB-13", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-105", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-13-PEGASIS-145F", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "145F", productNo: "BB-13", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-145", "BOTTOM-FLAT"] },
  { id: "BEY-BB-18-LIBRA-DF145BS", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "DF145BS", productNo: "BB-18", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-20-WOLF-D125B", type: "bey", structure: "basic", name: "울프", jpName: "볼프", en: "Wolf", sub: "D125B", productNo: "BB-20", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "WHEEL-WOLF", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-20-PEGASIS-105F", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "105F", productNo: "BB-20", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-21-PEGASIS-100HF", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "100HF", productNo: "BB-21", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-100", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-21-AQUARIO-105F", type: "bey", structure: "basic", name: "아쿠아리오", en: "Aquario", sub: "105F", productNo: "BB-21", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "WHEEL-AQUARIO", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-21-WOLF-125SF", type: "bey", structure: "basic", name: "울프", jpName: "볼프", en: "Wolf", sub: "125SF", productNo: "BB-21", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "WHEEL-WOLF", "TRACK-125", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-22-VIRGO-DF145BS", type: "bey", structure: "basic", name: "비르고", en: "Virgo", sub: "DF145BS", productNo: "BB-22", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "WHEEL-VIRGO", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-22-LIBRA-145S", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "145S", productNo: "BB-22", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-22-LEONE-D125B", type: "bey", structure: "basic", name: "레온", jpName: "레오네", en: "Leone", sub: "D125B", productNo: "BB-22", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "WHEEL-LEONE", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-23-L-DRAGO-105F", type: "bey", structure: "basic", name: "엘드라고", en: "L-Drago", sub: "105F", productNo: "BB-23", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "WHEEL-L-DRAGO", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-24-ESCOLPIO-WD145B", type: "bey", structure: "basic", name: "에스콜피오", en: "Escolpio", sub: "WD145B", productNo: "BB-24", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "WHEEL-ESCOLPIO", "TRACK-WIDE-DEFENSE-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-25-PISCES-D125BS", type: "bey", structure: "basic", name: "파이시즈", en: "Pisces", sub: "D125BS", productNo: "BB-25", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PISCES", "WHEEL-PISCES", "TRACK-DEFENSE-125", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-25-AQUARIO-DF145SF", type: "bey", structure: "basic", name: "아쿠아리오", en: "Aquario", sub: "DF145SF", productNo: "BB-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "WHEEL-AQUARIO", "TRACK-DOWN-FORCE-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-25-VIRGO-125BS", type: "bey", structure: "basic", name: "비르고", en: "Virgo", sub: "125BS", productNo: "BB-25", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "WHEEL-VIRGO", "TRACK-125", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-25-LIBRA-D125HF", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "D125HF", productNo: "BB-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-DEFENSE-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-25-AQUARIO-105B", type: "bey", structure: "basic", name: "아쿠아리오", en: "Aquario", sub: "105B", productNo: "BB-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "WHEEL-AQUARIO", "TRACK-105", "BOTTOM-BALL"] },
  { id: "BEY-BB-25-VIRGO-100B", type: "bey", structure: "basic", name: "비르고", en: "Virgo", sub: "100B", productNo: "BB-25", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "WHEEL-VIRGO", "TRACK-100", "BOTTOM-BALL"] },
  { id: "BEY-BB-25-LIBRA-100F", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "100F", productNo: "BB-25", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-100", "BOTTOM-FLAT"] },
  { id: "BEY-BB-25-BULL-DF145HF", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "DF145HF", productNo: "BB-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-DOWN-FORCE-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-26-GEMIOS-DF145FS", type: "bey", structure: "basic", name: "제미오스", en: "Gemios", sub: "DF145FS", productNo: "BB-26", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-GEMIOS", "WHEEL-GEMIOS", "TRACK-DOWN-FORCE-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-27-CAPRICORNE-100HF", type: "bey", structure: "basic", name: "카프리콘", jpName: "카프리코네", en: "Capricorne", sub: "100HF", productNo: "BB-27", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "WHEEL-CAPRICORNE", "TRACK-100", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-QUETZALCOATL-90WF", type: "bey", structure: "basic", name: "케찰코아틀", en: "Quetzalcoatl", sub: "90WF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-QUETZALCOATL", "WHEEL-QUETZALCOATL", "TRACK-90", "BOTTOM-WIDE-FLAT"] },
  { id: "BEY-COUNTER-LEONE-D125B", type: "bey", structure: "hybrid", name: "카운터 레온", jpName: "카운터 레오네", en: "Counter Leone", sub: "D125B", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "METALWHEEL-COUNTER", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-28-STORM-PEGASIS-105RF", type: "bey", structure: "hybrid", name: "스톰 페가시스", en: "Storm Pegasis", sub: "105RF", productNo: "BB-28", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-STORM", "TRACK-105", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-29-DARK-WOLF-DF145FS", type: "bey", structure: "hybrid", name: "다크 울프", en: "Dark Wolf", sub: "DF145FS", productNo: "BB-29", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "METALWHEEL-DARK", "TRACK-DOWN-FORCE-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-30-ROCK-LEONE-145WB", type: "bey", structure: "hybrid", name: "로크 레온", jpName: "록 레오네", en: "Rock Leone", sub: "145WB", productNo: "BB-30", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "METALWHEEL-ROCK", "TRACK-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-31-MAD-CANCER-CH120FS", type: "bey", structure: "hybrid", name: "매드 캔서", en: "Mad Cancer", sub: "CH120FS", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "LIGHTWHEEL-MAD", "TRACK-CHANGE-HEIGHT-120", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-31-HEAT-PEGASIS-100WB", type: "bey", structure: "hybrid", name: "히트 페가시스", en: "Heat Pegasis", sub: "100WB", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "LIGHTWHEEL-HEAT", "TRACK-100", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-31-CLAY-WOLF-145FS", type: "bey", structure: "hybrid", name: "클레이 울프", jpName: "클레이 볼프", en: "Clay Wolf", sub: "145FS", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-CLAY", "TRACK-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-31-HEAT-WOLF-WD145SF", type: "bey", structure: "hybrid", name: "히트 울프", jpName: "히트 볼프", en: "Heat Wolf", sub: "WD145SF", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-HEAT", "TRACK-WIDE-DEFENSE-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-31-MAD-LEONE-145B", type: "bey", structure: "hybrid", name: "매드 레온", jpName: "매드 레오네", en: "Mad Leone", sub: "145B", productNo: "BB-31", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-MAD", "TRACK-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-31-CLAY-LEONE-DF145WB", type: "bey", structure: "hybrid", name: "클레이 레온", jpName: "클레이 레오네", en: "Clay Leone", sub: "DF145WB", productNo: "BB-31", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-CLAY", "TRACK-DOWN-FORCE-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-31-WIND-PEGASIS-DF145B", type: "bey", structure: "hybrid", name: "윈드 페가시스", en: "Wind Pegasis", sub: "DF145B", productNo: "BB-31", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "LIGHTWHEEL-WIND", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-31-WIND-LEONE-D125HF", type: "bey", structure: "hybrid", name: "윈드 레온", jpName: "윈드 레오네", en: "Wind Leone", sub: "D125HF", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-WIND", "TRACK-DEFENSE-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-32-STORM-PEGASIS-105RF", type: "bey", structure: "hybrid", name: "스톰 페가시스", en: "Storm Pegasis", sub: "105RF", productNo: "BB-32", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-STORM", "TRACK-105", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-32-DARK-WOLF-DF145FS", type: "bey", structure: "hybrid", name: "다크 울프", jpName: "다크 볼프", en: "Dark Wolf", sub: "DF145FS", productNo: "BB-32", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "METALWHEEL-DARK", "TRACK-DOWN-FORCE-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-35-FLAME-SAGITTARIO-C145S", type: "bey", structure: "hybrid", name: "플레임 사지타리오", en: "Flame Sagittario", sub: "C145S", productNo: "BB-35", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-FLAME", "TRACK-CLAW-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-37-WIND-AQUARIO-100HF-S", type: "bey", structure: "hybrid", name: "윈드 아쿠아리오", en: "Wind Aquario", sub: "100HF/S", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "CLEARWHEEL-AQUARIO", "LIGHTWHEEL-WIND", "TRACK-100", "BOTTOM-HOLE-FLAT-SHARP"] },
  { id: "BEY-BB-37-CLAY-WOLF-105B", type: "bey", structure: "hybrid", name: "클레이 울프", jpName: "클레이 볼프", en: "Clay Wolf", sub: "105B", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-CLAY", "TRACK-105", "BOTTOM-BALL"] },
  { id: "BEY-BB-37-CLAY-SAGITTARIO-145B", type: "bey", structure: "hybrid", name: "클레이 사지타리오", en: "Clay Sagittario", sub: "145B", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "LIGHTWHEEL-CLAY", "TRACK-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-37-HEAT-PEGASIS-DF145WB", type: "bey", structure: "hybrid", name: "히트 페가시스", en: "Heat Pegasis", sub: "DF145WB", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "LIGHTWHEEL-HEAT", "TRACK-DOWN-FORCE-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-37-HEAT-LEONE-D125FS", type: "bey", structure: "hybrid", name: "히트 레온", jpName: "히트 레오네", en: "Heat Leone", sub: "D125FS", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-HEAT", "TRACK-DEFENSE-125", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-37-MAD-SAGITTARIO-DF145HF", type: "bey", structure: "hybrid", name: "매드 사지타리오", en: "Mad Sagittario", sub: "DF145HF", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "LIGHTWHEEL-MAD", "TRACK-DOWN-FORCE-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-37-MAD-LEONE-145FS", type: "bey", structure: "hybrid", name: "매드 레온", jpName: "매드 레오네", en: "Mad Leone", sub: "145FS", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-MAD", "TRACK-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-37-WIND-WOLF-WD145WB", type: "bey", structure: "hybrid", name: "윈드 울프", jpName: "윈드 볼프", en: "Wind Wolf", sub: "WD145WB", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-WIND", "TRACK-WIDE-DEFENSE-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-40-DARK-BULL-H145SD", type: "bey", structure: "hybrid", name: "다크 불", en: "Dark Bull", sub: "H145SD", productNo: "BB-40", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "METALWHEEL-DARK", "TRACK-HORN-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-43-LIGHTNING-L-DRAGO-100HF", type: "bey", structure: "hybrid", name: "라이트닝 엘드라고", en: "Lightning L-Drago", sub: "100HF", productNo: "BB-43", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "CLEARWHEEL-L-DRAGO", "METALWHEEL-LIGHTNING", "TRACK-100", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-44-STORM-PEGASIS-100RF", type: "bey", structure: "hybrid", name: "스톰 페가시스", en: "Storm Pegasis", sub: "100RF", productNo: "BB-44", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-STORM", "TRACK-100", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-44-ROCK-WOLF-H145B", type: "bey", structure: "hybrid", name: "로크 울프", jpName: "록 볼프", en: "Rock Wolf", sub: "H145B", productNo: "BB-44", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "METALWHEEL-ROCK", "TRACK-HORN-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-44-DARK-LEONE-C145B", type: "bey", structure: "hybrid", name: "다크 레온", jpName: "다크 레오네", en: "Dark Leone", sub: "C145B", productNo: "BB-44", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "METALWHEEL-DARK", "TRACK-CLAW-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-44-FLAME-WOLF-H145S", type: "bey", structure: "hybrid", name: "플레임 울프", jpName: "플레임 볼프", en: "Flame Wolf", sub: "H145S", productNo: "BB-44", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "METALWHEEL-FLAME", "TRACK-HORN-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-44-STORM-SAGITTARIO-145SD", type: "bey", structure: "hybrid", name: "스톰 사지타리오", en: "Storm Sagittario", sub: "145SD", productNo: "BB-44", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-STORM", "TRACK-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-44-ROCK-BULL-WD145HF", type: "bey", structure: "hybrid", name: "로크 불", jpName: "록 불", en: "Rock Bull", sub: "WD145HF", productNo: "BB-44", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "METALWHEEL-ROCK", "TRACK-WIDE-DEFENSE-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-44-DARK-SAGITTARIO-WD145SD", type: "bey", structure: "hybrid", name: "다크 사지타리오", en: "Dark Sagittario", sub: "WD145SD", productNo: "BB-44", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-DARK", "TRACK-WIDE-DEFENSE-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-44-FLAME-BULL-105WB", type: "bey", structure: "hybrid", name: "플레임 불", en: "Flame Bull", sub: "105WB", productNo: "BB-44", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "METALWHEEL-FLAME", "TRACK-105", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-45-CLAY-ARIES-ED145B", type: "bey", structure: "hybrid", name: "클레이 아리에스", en: "Clay Aries", sub: "ED145B", productNo: "BB-45", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "CLEARWHEEL-ARIES", "LIGHTWHEEL-CLAY", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-45-CLAY-PEGASIS-145S", type: "bey", structure: "hybrid", name: "클레이 페가시스", en: "Clay Pegasis", sub: "145S", productNo: "BB-45", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "LIGHTWHEEL-CLAY", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-45-MAD-SAGITTARIO-C145SD", type: "bey", structure: "hybrid", name: "매드 사지타리오", en: "Mad Sagittario", sub: "C145SD", productNo: "BB-45", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "LIGHTWHEEL-MAD", "TRACK-CLAW-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-45-HEAT-BULL-D125WB", type: "bey", structure: "hybrid", name: "히트 불", en: "Heat Bull", sub: "D125WB", productNo: "BB-45", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "LIGHTWHEEL-HEAT", "TRACK-DEFENSE-125", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-45-WIND-WOLF-H145D", type: "bey", structure: "hybrid", name: "윈드 울프", jpName: "윈드 볼프", en: "Wind Wolf", sub: "H145D", productNo: "BB-45", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-WIND", "TRACK-HORN-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-45-HEAT-LEONE-H145S", type: "bey", structure: "hybrid", name: "히트 레온", jpName: "히트 레오네", en: "Heat Leone", sub: "H145S", productNo: "BB-45", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-HEAT", "TRACK-HORN-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-45-MAD-BULL-C145HF", type: "bey", structure: "hybrid", name: "매드 불", en: "Mad Bull", sub: "C145HF", productNo: "BB-45", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "LIGHTWHEEL-MAD", "TRACK-CLAW-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-45-WIND-SAGITTARIO-100SD", type: "bey", structure: "hybrid", name: "윈드 사지타리오", en: "Wind Sagittario", sub: "100SD", productNo: "BB-45", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "LIGHTWHEEL-WIND", "TRACK-100", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-47-EARTH-AQUILA-145WD", type: "bey", structure: "hybrid", name: "어스 아쿠이라", en: "Earth Aquila", sub: "145WD", productNo: "BB-47", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-AQUILA", "CLEARWHEEL-AQUILA", "METALWHEEL-EARTH", "TRACK-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-48-FLAME-LIBRA-T125ES", type: "bey", structure: "hybrid", name: "플레임 리브라", en: "Flame Libra", sub: "T125ES", productNo: "BB-48", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-FLAME", "TRACK-TORNADO-125", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-50-STORM-CAPRICORNE-M145Q", type: "bey", structure: "hybrid", name: "스톰 카프리콘", jpName: "스톰 카프리코네", en: "Storm Capricorne", sub: "M145Q", productNo: "BB-50", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-STORM", "TRACK-MOVEMENT-145", "BOTTOM-QUAKE"] },
  { id: "BEY-BB-51-ROCK-ORSO-D125B", type: "bey", structure: "hybrid", name: "로크 오르소", jpName: "록 오르소", en: "Rock Orso", sub: "D125B", productNo: "BB-51", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ORSO", "CLEARWHEEL-ORSO", "METALWHEEL-ROCK", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-55-DARK-CANCER-CH120SF", type: "bey", structure: "hybrid", name: "다크 캔서", en: "Dark Cancer", sub: "CH120SF", productNo: "BB-55", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-DARK", "TRACK-CHANGE-HEIGHT-120", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-56-DARK-CAPRICORNE-105RF", type: "bey", structure: "hybrid", name: "다크 카프리콘", jpName: "다크 카프리코네", en: "Dark Capricorne", sub: "105RF", productNo: "BB-56", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-DARK", "TRACK-105", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-56-KILLER-GEMIOS-DF145FS", type: "bey", structure: "hybrid", name: "키라 제미오스", en: "Killer Gemios", sub: "DF145FS", productNo: "BB-56", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-GEMIOS", "CLEARWHEEL-GEMIOS", "METALWHEEL-KILLER", "TRACK-DOWN-FORCE-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-56-STORM-AQUARIO-M145Q", type: "bey", structure: "hybrid", name: "스톰 아쿠아리오", en: "Storm Aquario", sub: "M145Q", productNo: "BB-56", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "CLEARWHEEL-AQUARIO", "METALWHEEL-STORM", "TRACK-MOVEMENT-145", "BOTTOM-QUAKE"] },
  { id: "BEY-BB-57-FLAME-LIBRA-DF145BS", type: "bey", structure: "hybrid", name: "플레임 리브라", en: "Flame Libra", sub: "DF145BS", productNo: "BB-57", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-FLAME", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-57-THERMAL-PISCES-T125ES", type: "bey", structure: "hybrid", name: "써멀 파이시즈", en: "Thermal Pisces", sub: "T125ES", productNo: "BB-57", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PISCES", "CLEARWHEEL-PISCES", "METALWHEEL-THERMAL", "TRACK-TORNADO-125", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-57-ROCK-ARIES-145D", type: "bey", structure: "hybrid", name: "로크 아리에스", jpName: "록 아리에스", en: "Rock Aries", sub: "145D", productNo: "BB-57", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "CLEARWHEEL-ARIES", "METALWHEEL-ROCK", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-CYBER-PEGASIS-100HF", type: "bey", structure: "hybrid", name: "사이버 페가시스", en: "Cyber Pegasis", sub: "100HF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-CYBER", "TRACK-100", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-59-BURN-PHOENIX-135MS", type: "bey", structure: "hybrid", name: "번 피닉스", en: "Burn Phoenix", sub: "135MS", productNo: "BB-59", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PHOENIX", "CLEARWHEEL-PHOENIX", "METALWHEEL-BURN", "TRACK-135", "BOTTOM-METAL-SHARP"] },
  { id: "BEY-BB-60-EARTH-VIRGO-GB145BS", type: "bey", structure: "hybrid", name: "어스 비르고", en: "Earth Virgo", sub: "GB145BS", productNo: "BB-60", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "CLEARWHEEL-VIRGO", "METALWHEEL-EARTH", "TRACK-GRAVITY-BALL-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-60-EARTH-CANCER-DF145ES", type: "bey", structure: "hybrid", name: "어스 캔서", en: "Earth Cancer", sub: "DF145ES", productNo: "BB-60", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-EARTH", "TRACK-DOWN-FORCE-145", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-60-FLAME-CAPRICORNE-T125HF", type: "bey", structure: "hybrid", name: "플레임 카프리콘", jpName: "플레임 카프리코네", en: "Flame Capricorne", sub: "T125HF", productNo: "BB-60", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-FLAME", "TRACK-TORNADO-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-60-FLAME-AQUILA-100ES", type: "bey", structure: "hybrid", name: "플레임 아쿠이라", en: "Flame Aquila", sub: "100ES", productNo: "BB-60", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-AQUILA", "CLEARWHEEL-AQUILA", "METALWHEEL-FLAME", "TRACK-100", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-60-ROCK-CAPRICORNE-T125D", type: "bey", structure: "hybrid", name: "로크 카프리콘", jpName: "록 카프리코네", en: "Rock Capricorne", sub: "T125D", productNo: "BB-60", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-ROCK", "TRACK-TORNADO-125", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-60-ROCK-LIBRA-100WD", type: "bey", structure: "hybrid", name: "로크 리브라", jpName: "록 리브라", en: "Rock Libra", sub: "100WD", productNo: "BB-60", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-ROCK", "TRACK-100", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-60-STORM-AQUILA-145HF", type: "bey", structure: "hybrid", name: "스톰 아쿠이라", en: "Storm Aquila", sub: "145HF", productNo: "BB-60", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUILA", "CLEARWHEEL-AQUILA", "METALWHEEL-STORM", "TRACK-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-60-STORM-LIBRA-145S", type: "bey", structure: "hybrid", name: "스톰 리브라", en: "Storm Libra", sub: "145S", productNo: "BB-60", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-STORM", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-65-ROCK-ESCOLPIO-T125JB", type: "bey", structure: "hybrid", name: "로크 에스콜피오", jpName: "록 에스콜피오", en: "Rock Escolpio", sub: "T125JB", productNo: "BB-65", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-ROCK", "TRACK-TORNADO-125", "BOTTOM-JOG-BALL"] },
  { id: "BEY-BB-69-POISON-SERPENT-SW145SD", type: "bey", structure: "hybrid", name: "포이즌 서펜트", en: "Poison Serpent", sub: "SW145SD", productNo: "BB-69", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SERPENT", "CLEARWHEEL-SERPENT", "METALWHEEL-POISON", "TRACK-SWITCH-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-MERCURY-ANUBIUS-85XF", type: "bey", structure: "hybrid", name: "머큐리 아누비우스", en: "Mercury Anubius", sub: "85XF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-ANUBIUS", "CLEARWHEEL-ANUBIUS", "METALWHEEL-MERCURY", "TRACK-85", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-70-GALAXY-PEGASIS-W105R2F", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "W105R²F", productNo: "BB-70", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-71-RAY-UNICORNO-D125CS", type: "bey", structure: "hybrid", name: "레이 유니콘", jpName: "레이 유니코르노", en: "Ray Unicorno", sub: "D125CS", productNo: "BB-71", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO", "METALWHEEL-RAY", "TRACK-DEFENSE-125", "BOTTOM-COAT-SHARP"] },
  { id: "BEY-BB-72-AQUARIO-105F", type: "bey", structure: "basic", name: "아쿠아리오", en: "Aquario", sub: "105F", productNo: "BB-72", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "WHEEL-AQUARIO", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-74-THERMAL-LACERTA-WA130HF", type: "bey", structure: "hybrid", name: "써멀 라체르타", en: "Thermal Lacerta", sub: "WA130HF", productNo: "BB-74", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LACERTA", "CLEARWHEEL-LACERTA", "METALWHEEL-THERMAL", "TRACK-WING-ATTACK-130", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-75-ROCK-ORSO-ED145D", type: "bey", structure: "hybrid", name: "로크 오르소", jpName: "록 오르소", en: "Rock Orso", sub: "ED145D", productNo: "BB-75", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ORSO", "CLEARWHEEL-ORSO", "METALWHEEL-ROCK", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-75-GALAXY-PEGASIS-W105R2F", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "W105R²F", productNo: "BB-75", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-75-EARTH-VIRGO-T125ES", type: "bey", structure: "hybrid", name: "어스 비르고", en: "Earth Virgo", sub: "T125ES", productNo: "BB-75", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "CLEARWHEEL-VIRGO", "METALWHEEL-EARTH", "TRACK-TORNADO-125", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-76-GALAXY-PEGASIS-W105R2F", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "W105R²F", productNo: "BB-76", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-78-ROCK-GIRAFFE-R145WB", type: "bey", structure: "hybrid", name: "로크 기라프", jpName: "록 기라프", en: "Rock Giraffe", sub: "R145WB", productNo: "BB-78", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-GIRAFFE", "CLEARWHEEL-GIRAFFE", "METALWHEEL-ROCK", "TRACK-RUBBER-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD", type: "bey", structure: "hybrid", name: "그라비티 페르세우스", en: "Gravity Perseus", sub: "AD145WD", productNo: "BB-80", battleType: "defense", spin: "dual", tags: [], desc: "", parts: ["FACE-PERSEUS", "CLEARWHEEL-PERSEUS", "METALWHEEL-GRAVITY", "TRACK-ARMOR-DEFENSE-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-82-GRAND-KETOS-WD145RS", type: "bey", structure: "hybrid", name: "그랜드 케토스", en: "Grand Ketos", sub: "WD145RS", productNo: "BB-82", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-KETOS", "CLEARWHEEL-KETOS", "METALWHEEL-GRAND", "TRACK-WIDE-DEFENSE-145", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-82-GRAND-KETOS-T125RS", type: "bey", structure: "hybrid", name: "그랜드 케토스", en: "Grand Ketos", sub: "T125RS", productNo: "BB-82", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-KETOS", "CLEARWHEEL-KETOS", "METALWHEEL-GRAND", "TRACK-TORNADO-125", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-82-BURN-UNICORNO-SW145JB", type: "bey", structure: "hybrid", name: "번 유니콘", jpName: "번 유니코르노", en: "Burn Unicorno", sub: "SW145JB", productNo: "BB-82", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO", "METALWHEEL-BURN", "TRACK-SWITCH-145", "BOTTOM-JOG-BALL"] },
  { id: "BEY-BB-82-POISON-UNICORNO-130HF", type: "bey", structure: "hybrid", name: "포이즌 유니콘", jpName: "포이즌 유니코르노", en: "Poison Unicorno", sub: "130HF", productNo: "BB-82", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO", "METALWHEEL-POISON", "TRACK-130", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-82-STORM-PHOENIX-130B", type: "bey", structure: "hybrid", name: "스톰 피닉스", en: "Storm Phoenix", sub: "130B", productNo: "BB-82", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PHOENIX", "CLEARWHEEL-PHOENIX", "METALWHEEL-STORM", "TRACK-130", "BOTTOM-BALL"] },
  { id: "BEY-BB-82-POISON-PHOENIX-WA130SD", type: "bey", structure: "hybrid", name: "포이즌 피닉스", en: "Poison Phoenix", sub: "WA130SD", productNo: "BB-82", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-PHOENIX", "CLEARWHEEL-PHOENIX", "METALWHEEL-POISON", "TRACK-WING-ATTACK-130", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-82-BURN-SERPENT-WA130ES", type: "bey", structure: "hybrid", name: "번 서펜트", en: "Burn Serpent", sub: "WA130ES", productNo: "BB-82", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SERPENT", "CLEARWHEEL-SERPENT", "METALWHEEL-BURN", "TRACK-WING-ATTACK-130", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-82-STORM-SERPENT-T125HF", type: "bey", structure: "hybrid", name: "스톰 서펜트", en: "Storm Serpent", sub: "T125HF", productNo: "BB-82", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-SERPENT", "CLEARWHEEL-SERPENT", "METALWHEEL-STORM", "TRACK-TORNADO-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-83-PISCES-DF145BS", type: "bey", structure: "basic", name: "파이시즈", en: "Pisces", sub: "DF145BS", productNo: "BB-83", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PISCES", "WHEEL-PISCES", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-86-COUNTER-ESCOLPIO-145D", type: "bey", structure: "hybrid", name: "카운터 에스콜피오", en: "Counter Escolpio", sub: "145D", productNo: "BB-86", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-COUNTER", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-86-CYBER-AQUARIO-105F", type: "bey", structure: "hybrid", name: "사이버 아쿠아리오", en: "Cyber Aquario", sub: "105F", productNo: "BB-86", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "CLEARWHEEL-AQUARIO", "METALWHEEL-CYBER", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-86-POISON-GIRAFFE-S130MB", type: "bey", structure: "hybrid", name: "포이즌 기라프", en: "Poison Giraffe", sub: "S130MB", productNo: "BB-86", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-GIRAFFE", "CLEARWHEEL-GIRAFFE", "METALWHEEL-POISON", "TRACK-SHIELD-130", "BOTTOM-METAL-BALL"] },
  { id: "BEY-SOL-BLAZE-V145AS", type: "bey", structure: "hybrid", name: "솔 블레이즈", en: "Sol Blaze", sub: "V145AS", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BLAZE", "CLEARWHEEL-BLAZE", "METALWHEEL-SOL", "TRACK-VARIABLE-145", "BOTTOM-AROUND-SHARP"] },
  { id: "BEY-BB-88-METEO-L-DRAGO-LW105LF", type: "bey", structure: "hybrid", name: "메테오 엘드라고", en: "Meteo L-Drago", sub: "LW105LF", productNo: "BB-88", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "CLEARWHEEL-L-DRAGO-II", "METALWHEEL-METEO", "TRACK-LEFT-WING-105", "BOTTOM-LEFT-FLAT"] },
  { id: "BEY-BB-89-ARIES-145D", type: "bey", structure: "basic", name: "아리에스", en: "Aries", sub: "145D", productNo: "BB-89", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "WHEEL-ARIES", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-DIVINE-CHIMERA-TR145FB", type: "bey", structure: "hybrid", name: "디바인 키메라", en: "Divine Chimera", sub: "TR145FB", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-CHIMERA", "CLEARWHEEL-CHIMERA", "METALWHEEL-DIVINE", "TRACK-TRIPLE-ROLLER-145", "BOTTOM-FLAT-BALL"] },
  { id: "BEY-BAKUSHIN-SUSANOW-90WF", type: "bey", structure: "hybrid", name: "폭신 스사노오", jpName: "바쿠신 스사노오", en: "Bakushin Susanow", sub: "90WF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-SUSANOW", "CLEARWHEEL-SUSANOW", "METALWHEEL-BAKUSHIN", "TRACK-90", "BOTTOM-WIDE-FLAT"] },
  { id: "BEY-BB-P01-VULCAN-HORUSEUS-145D", type: "bey", structure: "hybrid", name: "발칸 호르세우스", jpName: "발칸 호루세우스", en: "Vulcan Horuseus", sub: "145D", productNo: "BB-P01", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HORUSEUS", "CLEARWHEEL-HORUSEUS", "METALWHEEL-VULCAN", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-91-RAY-KEEL-100RSF", type: "bey", structure: "hybrid", name: "레이 킬", jpName: "레이 길", en: "Ray Keel", sub: "100RSF", productNo: "BB-91", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-KEEL", "CLEARWHEEL-KEEL", "METALWHEEL-RAY", "TRACK-100", "BOTTOM-RUBBER-SEMI-FLAT"] },
  { id: "BEY-BB-92-GALAXY-PEGASIS-W105R2F", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "W105R²F", productNo: "BB-92", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-93-RAY-UNICORNO-D125CS", type: "bey", structure: "hybrid", name: "레이 유니콘", jpName: "레이 유니코르노", en: "Ray Unicorno", sub: "D125CS", productNo: "BB-93", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO", "METALWHEEL-RAY", "TRACK-DEFENSE-125", "BOTTOM-COAT-SHARP"] },
  { id: "BEY-BB-94-TORNADO-HERCULEO-105F", type: "bey", structure: "hybrid", name: "토네이도 헤라클레오", en: "Tornado Herculeo", sub: "105F", productNo: "BB-94", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-HERCULEO", "CLEARWHEEL-HERCULEO", "METALWHEEL-TORNADO", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-95-FLAME-BYXIS-230WD", type: "bey", structure: "hybrid", name: "플레임 픽시스", jpName: "플레임 빅시스", en: "Flame Byxis", sub: "230WD", productNo: "BB-95", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-BYXIS", "CLEARWHEEL-BYXIS", "METALWHEEL-FLAME", "TRACK-230", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-96-PEGASIS-85RF", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "85RF", productNo: "BB-96", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-85", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-96-LIBRA-100D", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "100D", productNo: "BB-96", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-100", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-96-BURN-CANCER-90WD", type: "bey", structure: "hybrid", name: "번 캔서", en: "Burn Cancer", sub: "90WD", productNo: "BB-96", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-BURN", "TRACK-90", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-NIGHTMARE-REX-SW145SD", type: "bey", structure: "hybrid", name: "나이트메어 렉스", en: "Nightmare Rex", sub: "SW145SD", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-REX", "CLEARWHEEL-REX", "METALWHEEL-NIGHTMARE", "TRACK-SWITCH-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-99-HELL-KERBECS-BD145DS", type: "bey", structure: "hybrid", name: "헬 켈베로스", jpName: "헬 케르벡스", en: "Hell Kerbecs", sub: "BD145DS", productNo: "BB-99", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-KERBECS", "CLEARWHEEL-KERBECS", "METALWHEEL-HELL", "TRACK-BOOST-DISK-145", "BOTTOM-DEFENSE-SHARP"] },
  { id: "BEY-BB-100-KILLER-BEAFOWL-UW145EWD", type: "bey", structure: "hybrid", name: "키라 비폴", en: "Killer Beafowl", sub: "UW145EWD", productNo: "BB-100", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BEAFOWL", "CLEARWHEEL-BEAFOWL", "METALWHEEL-KILLER", "TRACK-UPPER-WING-145", "BOTTOM-ETERNAL-WIDE-DEFENSE"] },
  { id: "BEY-BB-100-GALAXY-CANCER-D125HF", type: "bey", structure: "hybrid", name: "갤럭시 캔서", en: "Galaxy Cancer", sub: "D125HF", productNo: "BB-100", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-GALAXY", "TRACK-DEFENSE-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-100-BURN-ESCOLPIO-100RF", type: "bey", structure: "hybrid", name: "번 에스콜피오", en: "Burn Escolpio", sub: "100RF", productNo: "BB-100", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-BURN", "TRACK-100", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-100-FLAME-GEMIOS-105CS", type: "bey", structure: "hybrid", name: "플레임 제미오스", en: "Flame Gemios", sub: "105CS", productNo: "BB-100", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-GEMIOS", "CLEARWHEEL-GEMIOS", "METALWHEEL-FLAME", "TRACK-105", "BOTTOM-COAT-SHARP"] },
  { id: "BEY-BB-100-KILLER-ESCOLPIO-100D", type: "bey", structure: "hybrid", name: "키라 에스콜피오", en: "Killer Escolpio", sub: "100D", productNo: "BB-100", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-KILLER", "TRACK-100", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-100-GALAXY-SAGITTARIO-145CS", type: "bey", structure: "hybrid", name: "갤럭시 사지타리오", en: "Galaxy Sagittario", sub: "145CS", productNo: "BB-100", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-GALAXY", "TRACK-145", "BOTTOM-COAT-SHARP"] },
  { id: "BEY-BB-100-FLAME-CANCER-D125RF", type: "bey", structure: "hybrid", name: "플레임 캔서", en: "Flame Cancer", sub: "D125RF", productNo: "BB-100", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-FLAME", "TRACK-DEFENSE-125", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-100-BURN-SAGITTARIO-105HF", type: "bey", structure: "hybrid", name: "번 사지타리오", en: "Burn Sagittario", sub: "105HF", productNo: "BB-100", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-BURN", "TRACK-105", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-102-SCREW-CAPRICORNE-90MF", type: "bey", structure: "hybrid", name: "스크류 카프리콘", jpName: "스크류 카프리코네", en: "Screw Capricorne", sub: "90MF", productNo: "BB-102", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-SCREW", "TRACK-90", "BOTTOM-METAL-FLAT"] },
  { id: "BEY-BB-104-BASALT-HOROGIUM-145WD", type: "bey", structure: "hybrid", name: "바셀트 호로지움", jpName: "바살트 호로기움", en: "Basalt Horogium", sub: "145WD", productNo: "BB-104", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HOROGIUM", "CLEARWHEEL-HOROGIUM", "METALWHEEL-BASALT", "TRACK-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-105-BIG-BANG-PEGASIS-FD", type: "bey", structure: "4d", name: "빅뱅 페가시스", en: "Big Bang Pegasis", sub: "F:D", productNo: "BB-105", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS-III", "METALWHEEL-BIG-BANG", "4DBOTTOM-FINAL-DRIVE"] },
  { id: "BEY-BB-106-FANG-LEONE-130W2D", type: "bey", structure: "4d", name: "팡 레온", jpName: "팡 레오네", en: "Fang Leone", sub: "130W²D", productNo: "BB-106", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE-II", "METALWHEEL-FANG", "TRACK-130", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BB-107-BIG-BANG-PEGASIS-FD", type: "bey", structure: "4d", name: "빅뱅 페가시스", en: "Big Bang Pegasis", sub: "F:D", productNo: "BB-107", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS-III", "METALWHEEL-BIG-BANG", "4DBOTTOM-FINAL-DRIVE"] },
  { id: "BEY-BB-108-L-DRAGO-DESTROY-FS", type: "bey", structure: "4d", name: "엘드라고 디스트로이", en: "L-Drago Destroy", sub: "F:S", productNo: "BB-108", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "METALWHEEL-L-DRAGO-DESTROY", "4DBOTTOM-FINAL-SURVIVE"] },
  { id: "BEY-BB-109-BEAT-LYNX-TH170WD", type: "bey", structure: "4d", name: "비트 링크스", en: "Beat Lynx", sub: "TH170WD", productNo: "BB-109", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LYNX", "CLEARWHEEL-LYNX", "METALWHEEL-BEAT", "TRACK-TRIPLE-HEIGHT-170", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-109-GRAVITY-PERSEUS-BD145XF", type: "bey", structure: "hybrid", name: "그라비티 페르세우스", en: "Gravity Perseus", sub: "BD145XF", productNo: "BB-109", battleType: "attack", spin: "dual", tags: [], desc: "", parts: ["FACE-PERSEUS", "CLEARWHEEL-PERSEUS-ATTACK", "METALWHEEL-GRAVITY", "TRACK-BOOST-DISK-145", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-109-HELL-HORUSEUS-85RS", type: "bey", structure: "hybrid", name: "헬 호르세우스", jpName: "헬 호루세우스", en: "Hell Horuseus", sub: "85RS", productNo: "BB-109", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-HORUSEUS", "CLEARWHEEL-HORUSEUS", "METALWHEEL-HELL", "TRACK-85", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-109-VULCAN-HERCULEO-130DS", type: "bey", structure: "hybrid", name: "발칸 헤라클레오", en: "Vulcan Herculeo", sub: "130DS", productNo: "BB-109", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HERCULEO", "CLEARWHEEL-HERCULEO", "METALWHEEL-VULCAN", "TRACK-130", "BOTTOM-DEFENSE-SHARP"] },
  { id: "BEY-BB-109-GRAVITY-PERSEUS-85DS", type: "bey", structure: "hybrid", name: "그라비티 페르세우스", en: "Gravity Perseus", sub: "85DS", productNo: "BB-109", battleType: "stamina", spin: "dual", tags: [], desc: "", parts: ["FACE-PERSEUS", "CLEARWHEEL-PERSEUS-STAMINA", "METALWHEEL-GRAVITY", "TRACK-85", "BOTTOM-DEFENSE-SHARP"] },
  { id: "BEY-BB-109-TORNADO-HORUSEUS-130RSF", type: "bey", structure: "hybrid", name: "토네이도 호르세우스", jpName: "토네이도 호루세우스", en: "Tornado Horuseus", sub: "130RSF", productNo: "BB-109", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-HORUSEUS", "CLEARWHEEL-HORUSEUS", "METALWHEEL-TORNADO", "TRACK-130", "BOTTOM-RUBBER-SEMI-FLAT"] },
  { id: "BEY-BB-109-HELL-HERCULEO-100XF", type: "bey", structure: "hybrid", name: "헬 헤라클레오", en: "Hell Herculeo", sub: "100XF", productNo: "BB-109", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-HERCULEO", "CLEARWHEEL-HERCULEO", "METALWHEEL-HELL", "TRACK-100", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-109-VULCAN-HOROGIUM-BD145RS", type: "bey", structure: "hybrid", name: "발칸 호로지움", jpName: "발칸 호로기움", en: "Vulcan Horogium", sub: "BD145RS", productNo: "BB-109", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HOROGIUM", "CLEARWHEEL-HOROGIUM", "METALWHEEL-VULCAN", "TRACK-BOOST-DISK-145", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-113-SCYTHE-KRONOS-T125EDS", type: "bey", structure: "4d", name: "사이즈 크로노스", en: "Scythe Kronos", sub: "T125EDS", productNo: "BB-113", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-KRONOS", "CLEARWHEEL-KRONOS", "METALWHEEL-SCYTHE", "TRACK-TORNADO-125", "BOTTOM-ETERNAL-DEFENSE-SHARP"] },
  { id: "BEY-BB-114-VARIARES-DD", type: "bey", structure: "4d", name: "베리아레스", jpName: "바리아레스", en: "Variares", sub: "D:D", productNo: "BB-114", battleType: "defense", spin: "dual", tags: [], desc: "", parts: ["FACE-VARIARES", "METALWHEEL-VARIARES", "4DBOTTOM-DELTA-DRIVE"] },
  { id: "BEY-BB-116-JADE-JUPITER-S130RB", type: "bey", structure: "4d", name: "제이드 쥬피터", en: "Jade Jupiter", sub: "S130RB", productNo: "BB-116", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-JUPITER", "CLEARWHEEL-JUPITER", "METALWHEEL-JADE", "TRACK-SHIELD-130", "BOTTOM-RUBBER-BALL"] },
  { id: "BEY-BB-116-FORBIDDEN-EONIS-ED145FB", type: "bey", structure: "hybrid", name: "포비든 이오니스", en: "Forbidden Eonis", sub: "ED145FB", productNo: "BB-116", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-IONIS", "CLEARWHEEL-IONIS", "METALWHEEL-FORBIDDEN", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-FLAT-BALL"] },
  { id: "BEY-BB-116-DIVINE-FOX-90W2D", type: "bey", structure: "hybrid", name: "디바인 폭스", en: "Divine Fox", sub: "90W²D", productNo: "BB-116", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-FOX", "CLEARWHEEL-FOX", "METALWHEEL-DIVINE", "TRACK-90", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BB-116-SCREW-LYRA-ED145MF", type: "bey", structure: "hybrid", name: "스크류 레이라", en: "Screw Lyra", sub: "ED145MF", productNo: "BB-116", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-LYRA", "CLEARWHEEL-LYRA", "METALWHEEL-SCREW", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-METAL-FLAT"] },
  { id: "BEY-BB-116-FORBIDDEN-EONIS-130D", type: "bey", structure: "hybrid", name: "포비든 이오니스", en: "Forbidden Eonis", sub: "130D", productNo: "BB-116", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-IONIS", "CLEARWHEEL-IONIS", "METALWHEEL-FORBIDDEN", "TRACK-130", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-116-DIVINE-CROWN-TR145D", type: "bey", structure: "hybrid", name: "디바인 크라운", en: "Divine Crown", sub: "TR145D", productNo: "BB-116", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-CROWN", "CLEARWHEEL-CROWN", "METALWHEEL-DIVINE", "TRACK-TRIPLE-ROLLER-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-116-SCREW-FOX-TR145W2D", type: "bey", structure: "hybrid", name: "스크류 폭스", en: "Screw Fox", sub: "TR145W²D", productNo: "BB-116", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-FOX", "CLEARWHEEL-FOX", "METALWHEEL-SCREW", "TRACK-TRIPLE-ROLLER-145", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BB-116-HELL-CROWN-130FB", type: "bey", structure: "hybrid", name: "헬 크라운", en: "Hell Crown", sub: "130FB", productNo: "BB-116", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-CROWN", "CLEARWHEEL-CROWN", "METALWHEEL-HELL", "TRACK-130", "BOTTOM-FLAT-BALL"] },
  { id: "BEY-BB-117-BLITZ-UNICORNO-100RSF", type: "bey", structure: "4d", name: "브릿츠 유니콘", jpName: "브릿츠 유니코르노", en: "Blitz Unicorno", sub: "100RSF", productNo: "BB-117", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO-II", "METALWHEEL-BLITZ", "TRACK-100", "BOTTOM-RUBBER-SEMI-FLAT"] },
  { id: "BEY-BB-117-NIGHTMARE-REX-UW145EWD", type: "bey", structure: "hybrid", name: "나이트메어 렉스", en: "Nightmare Rex", sub: "UW145EWD", productNo: "BB-117", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-REX", "CLEARWHEEL-REX", "METALWHEEL-NIGHTMARE", "TRACK-UPPER-WING-145", "BOTTOM-ETERNAL-WIDE-DEFENSE"] },
  { id: "BEY-BB-117-BASALT-HOROGIUM-130RS", type: "bey", structure: "hybrid", name: "바셀트 호로지움", jpName: "바살트 호로기움", en: "Basalt Horogium", sub: "130RS", productNo: "BB-117", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HOROGIUM", "CLEARWHEEL-HOROGIUM", "METALWHEEL-BASALT", "TRACK-130", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-118-PHANTOM-ORION-BD", type: "bey", structure: "4d", name: "팬텀 오리온", en: "Phantom Orion", sub: "B:D", productNo: "BB-118", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-ORION", "CLEARWHEEL-ORION", "METALWHEEL-PHANTOM", "4DBOTTOM-BEARING-DRIVE"] },
  { id: "BEY-BB-119-DEATH-QUETZALCOATL-125RDF", type: "bey", structure: "4d", name: "데쓰 케찰코아틀", jpName: "데스 케찰코아틀", en: "Death Quetzalcoatl", sub: "125RDF", productNo: "BB-119", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-QUETZALCOATL", "CLEARWHEEL-QUETZALCOATL", "METALWHEEL-DEATH", "TRACK-125", "BOTTOM-RUBBER-DEFENSE-FLAT"] },
  { id: "BEY-BB-120-PROTOTYPE-NEMESIS", type: "bey", structure: "4d", name: "프로토타입 네메시스", en: "Prototype Nemesis", productNo: "BB-120", battleType: "balance", spin: "dual", tags: [], desc: "", parts: [] },
  { id: "BEY-BBC-01-SUPER-CONTROL-BIG-BANG-PEGASIS", type: "bey", structure: "super-control", name: "빅뱅 페가시스", en: "Super Control Big Bang Pegasis", productNo: "BBC-01", tags: [], desc: "", parts: [] },
  { id: "BEY-BBC-02-SUPER-CONTROL-L-DRAGO-DESTROY", type: "bey", structure: "super-control", name: "엘드라고 디스트로이", en: "Super Control L-Drago Destroy", productNo: "BBC-02", tags: [], desc: "", parts: [] },
  { id: "BEY-BBC-04-SUPER-CONTROL-VARIARES", type: "bey", structure: "super-control", name: "바리아레스", en: "Super Control Variares", productNo: "BBC-04", tags: [], desc: "", parts: [] },
  { id: "BEY-BBC-05-SUPER-CONTROL-PHANTOM-ORION", type: "bey", structure: "super-control", name: "팬텀 오리온", en: "Super Control Phantom Orion", productNo: "BBC-05", tags: [], desc: "", parts: [] },
  { id: "BEY-BB-121-DUO-URANUS-230WD", type: "bey", structure: "4d", name: "듀오 우라누스", en: "Duo Uranus", sub: "230WD", productNo: "BB-121", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-URANUS", "CLEARWHEEL-URANUS", "METALWHEEL-DUO", "TRACK-230", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-121-L-DRAGO-GUARDIAN-S130MB", type: "bey", structure: "4d", name: "엘드라고 가디언", en: "L-Drago Guardian", sub: "S130MB", productNo: "BB-121", battleType: "defense", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "METALWHEEL-L-DRAGO-GUARDIAN", "TRACK-SHIELD-130", "BOTTOM-METAL-BALL"] },
  { id: "BEY-BB-121-WING-PEGASIS-90WF", type: "bey", structure: "4d", name: "윙 페가시스", en: "Wing Pegasis", sub: "90WF", productNo: "BB-121", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS-III", "METALWHEEL-WING", "TRACK-90", "BOTTOM-WIDE-FLAT"] },
  { id: "BEY-BB-122-DIABLO-NEMESIS-XD", type: "bey", structure: "4d", name: "디아블로 네메시스", en: "Diablo Nemesis", sub: "X:D", productNo: "BB-122", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-NEMESIS", "CLEARWHEEL-NEMESIS", "METALWHEEL-DIABLO", "4DBOTTOM-X-DRIVE"] },
  { id: "BEY-BB-123-FUSION-HADES-AD145SWD", type: "bey", structure: "4d", name: "퓨전 하데스", en: "Fusion Hades", sub: "AD145SWD", productNo: "BB-123", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-HADES", "CLEARWHEEL-HADES", "METALWHEEL-FUSION", "TRACK-ARMOR-DEFENSE-145", "BOTTOM-SHARP-WIDE-DEFENSE"] },
  { id: "BEY-BB-123-HELL-BEELZEB-125XF", type: "bey", structure: "hybrid", name: "헬 베르제브", en: "Hell Beelzeb", sub: "125XF", productNo: "BB-123", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-BEELZEB", "CLEARWHEEL-BEELZEB", "METALWHEEL-HELL", "TRACK-125", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-123-CLOUD-LYRA-85SF", type: "bey", structure: "hybrid", name: "클라우드 레이라", en: "Cloud Lyra", sub: "85SF", productNo: "BB-123", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LYRA", "CLEARWHEEL-LYRA", "METALWHEEL-CLOUD", "TRACK-85", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-123-CLOUD-GEMIOS-T125SF", type: "bey", structure: "hybrid", name: "클라우드 제미오스", en: "Cloud Gemios", sub: "T125SF", productNo: "BB-123", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-GEMIOS", "CLEARWHEEL-GEMIOS", "METALWHEEL-CLOUD", "TRACK-TORNADO-125", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-123-CRASH-ESCOLPIO-125JB", type: "bey", structure: "hybrid", name: "크래시 에스콜피오", en: "Crash Escolpio", sub: "125JB", productNo: "BB-123", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-CRASH", "TRACK-125", "BOTTOM-JOG-BALL"] },
  { id: "BEY-BB-123-BAKUSHIN-BEELZEB-T125XF", type: "bey", structure: "hybrid", name: "폭신 베르제브", en: "Bakushin Beelzeb", sub: "T125XF", productNo: "BB-123", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-BEELZEB", "CLEARWHEEL-BEELZEB", "METALWHEEL-BAKUSHIN", "TRACK-TORNADO-125", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-123-METEO-L-DRAGO-85LF-RUSH", type: "bey", structure: "hybrid", name: "메테오 엘드라고", en: "Meteo L-Drago", sub: "85LF", productNo: "BB-123", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "CLEARWHEEL-L-DRAGO-II-RUSH", "METALWHEEL-METEO", "TRACK-85", "BOTTOM-LEFT-FLAT"] },
  { id: "BEY-BB-123-METEO-L-DRAGO-LW105JB-ASSAULT", type: "bey", structure: "hybrid", name: "메테오 엘드라고", en: "Meteo L-Drago", sub: "LW105JB", productNo: "BB-123", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "CLEARWHEEL-L-DRAGO-II-ASSAULT", "METALWHEEL-METEO", "TRACK-LEFT-WING-105", "BOTTOM-JOG-BALL"] },
  { id: "BEY-OMEGA-DRAGONIS-85XF", type: "bey", structure: "hybrid", name: "오메가 드라고니스", en: "Omega Dragonis", sub: "85XF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-DRAGONIS", "CLEARWHEEL-DRAGONIS", "METALWHEEL-OMEGA", "TRACK-85", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-124-KREIS-CYGNUS-145WD", type: "bey", structure: "4d", name: "크라이스 시그너스", en: "Kreis Cygnus", sub: "145WD", productNo: "BB-124", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-CYGNUS", "CLEARWHEEL-CYGNUS", "METALWHEEL-KREIS", "TRACK-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-126-FLASH-SAGITTARIO-230WD", type: "bey", structure: "4d", name: "플래시 사지타리오", en: "Flash Sagittario", sub: "230WD", productNo: "BB-126", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO-II", "METALWHEEL-FLASH", "TRACK-230", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BBG-01-WARRIORS-IFRAID-W145CF", type: "bey", structure: "synchrome", name: "워리어스 이프레이드", jpName: "사무라이 이프레이드", en: "Warriors Ifraid", sub: "W145CF", productNo: "BBG-01", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-02-SHINOBI-SARAMANDA-SW145SD", type: "bey", structure: "synchrome", name: "시노비 사라만다", en: "Shinobi Saramanda", sub: "SW145SD", productNo: "BBG-02", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-SARAMANDA", "TRACK-SWITCH-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BBG-03-WARRIORS-IFRAID-W145CF", type: "bey", structure: "synchrome", name: "워리어스 이프레이드", jpName: "사무라이 이프레이드", en: "Warriors Ifraid", sub: "W145CF", productNo: "BBG-03", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-08-PIRATES-OROJYA-145D", type: "bey", structure: "synchrome", name: "파이레츠 오로자", en: "Pirates Orojya", sub: "145D", productNo: "BBG-08", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-OROJYA", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-OROJYA", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BBG-09-THIEF-PHOENIC-E230GCF", type: "bey", structure: "synchrome", name: "시프 피닉", en: "Thief Phoenic", sub: "E230GCF", productNo: "BBG-09", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-PHOENIC", "CRYSTALWHEEL-THIEF", "CHROMEWHEEL-PHOENIC", "TRACK-ELEVATOR-230", "BOTTOM-GEAR-CIRCLE-FLAT"] },
  { id: "BEY-BBG-09-THIEF-SARAMANDA-230WB", type: "bey", structure: "synchrome", name: "시프 사라만다", en: "Thief Saramanda", sub: "230WB", productNo: "BBG-09", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-THIEF", "CHROMEWHEEL-SARAMANDA", "TRACK-230", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BBG-09-WARRIORS-SARAMANDA-E230ES", type: "bey", structure: "synchrome", name: "워리어스 사라만다", jpName: "사무라이 사라만다", en: "Warriors Saramanda", sub: "E230ES", productNo: "BBG-09", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-SARAMANDA", "TRACK-ELEVATOR-230", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BBG-09-PIRATES-IFRAID-T125GCF", type: "bey", structure: "synchrome", name: "파이레츠 이프레이드", en: "Pirates Ifraid", sub: "T125GCF", productNo: "BBG-09", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-IFRAID", "TRACK-TORNADO-125", "BOTTOM-GEAR-CIRCLE-FLAT"] },
  { id: "BEY-BBG-09-SHINOBI-IFRAID-230WD", type: "bey", structure: "synchrome", name: "시노비 이프레이드", en: "Shinobi Ifraid", sub: "230WD", productNo: "BBG-09", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-IFRAID", "TRACK-230", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BBG-09-PIRATES-SARAMANDA-T125WB", type: "bey", structure: "synchrome", name: "파이레츠 사라만다", en: "Pirates Saramanda", sub: "T125WB", productNo: "BBG-09", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-SARAMANDA", "TRACK-TORNADO-125", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BBG-09-SHINOBI-OROJYA-145ES", type: "bey", structure: "synchrome", name: "시노비 오로자", en: "Shinobi Orojya", sub: "145ES", productNo: "BBG-09", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-OROJYA", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-OROJYA", "TRACK-145", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BBG-09-WARRIORS-OROJYA-145WD", type: "bey", structure: "synchrome", name: "워리어스 오로자", jpName: "사무라이 오로자", en: "Warriors Orojya", sub: "145WD", productNo: "BBG-09", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-OROJYA", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-OROJYA", "TRACK-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BBG-10-GUARDIAN-REVIZER-160SB", type: "bey", structure: "synchrome", name: "가디언 리바이저", en: "Guardian Revizer", sub: "160SB", productNo: "BBG-10", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CRYSTALWHEEL-GUARDIAN", "CHROMEWHEEL-REVIZER", "TRACK-160", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-12-ARCHER-GRYPH-C145S", type: "bey", structure: "synchrome", name: "아처 그리프", en: "Archer Gryph", sub: "C145S", productNo: "BBG-12", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GRYPH", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-GRYPH", "TRACK-CLAW-145", "BOTTOM-SHARP"] },
  { id: "BEY-BBG-13-PIRATES-KILLERKEN-A230JSB", type: "bey", structure: "synchrome", name: "파이레츠 크라켄", en: "Pirates Killerken", sub: "A230JSB", productNo: "BBG-13", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-KRAKEN", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-KILLERKEN", "TRACK-ARMOR-230", "BOTTOM-JOG-SHARP-BALL"] },
  { id: "BEY-BBG-13-WARRIORS-IFRAID-W145CF", type: "bey", structure: "synchrome", name: "워리어스 이프레이드", jpName: "사무라이 이프레이드", en: "Warriors Ifraid", sub: "W145CF", productNo: "BBG-13", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-16-DARK-KNIGHT-DRAGOOON-LW160BSF", type: "bey", structure: "synchrome", name: "다크나이트 드래곤", jpName: "다크나이트 드라군", en: "Dark Knight Dragooon", sub: "LW160BSF", productNo: "BBG-16", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["STONEFACE-DRAGOON", "CRYSTALWHEEL-DARK-KNIGHT", "CHROMEWHEEL-DRAGOOON", "TRACK-LEFT-WING-160", "BOTTOM-BLADE-SEMI-FLAT"] },
  { id: "BEY-BBG-17-ARCHER-GARGOLE-SA165WSF", type: "bey", structure: "synchrome", name: "아처 가고일", jpName: "아처 가골", en: "Archer Gargole", sub: "SA165WSF", productNo: "BBG-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GARGOYLE", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-GARGOLE", "TRACK-SWITCH-ATTACK-165", "BOTTOM-WIDE-SEMI-FLAT"] },
  { id: "BEY-BBG-17-GUARDIAN-GARGOLE-M145SB", type: "bey", structure: "synchrome", name: "가디언 가고일", jpName: "가디언 가골", en: "Guardian Gargole", sub: "M145SB", productNo: "BBG-17", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GARGOYLE", "CRYSTALWHEEL-GUARDIAN", "CHROMEWHEEL-GARGOLE", "TRACK-MOVEMENT-145", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-17-SHINOBI-OROJYA-160WSF", type: "bey", structure: "synchrome", name: "시노비 오로자", en: "Shinobi Orojya", sub: "160WSF", productNo: "BBG-17", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-OROJYA", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-OROJYA", "TRACK-160", "BOTTOM-WIDE-SEMI-FLAT"] },
  { id: "BEY-BBG-17-WARRIORS-REVIZER-SA165Q", type: "bey", structure: "synchrome", name: "워리어스 리바이저", jpName: "사무라이 리바이저", en: "Warriors Revizer", sub: "SA165Q", productNo: "BBG-17", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-REVIZER", "TRACK-SWITCH-ATTACK-165", "BOTTOM-QUAKE"] },
  { id: "BEY-BBG-17-PIRATES-GRYPH-160CF", type: "bey", structure: "synchrome", name: "파이레츠 그리프", en: "Pirates Gryph", sub: "160CF", productNo: "BBG-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GRYPH", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-GRYPH", "TRACK-160", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-17-PIRATES-REVIZER-M145CF", type: "bey", structure: "synchrome", name: "파이레츠 리바이저", en: "Pirates Revizer", sub: "M145CF", productNo: "BBG-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-REVIZER", "TRACK-MOVEMENT-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-17-GUARDIAN-SARAMANDA-W145Q", type: "bey", structure: "synchrome", name: "가디언 사라만다", en: "Guardian Saramanda", sub: "W145Q", productNo: "BBG-17", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-GUARDIAN", "CHROMEWHEEL-SARAMANDA", "TRACK-WING-145", "BOTTOM-QUAKE"] },
  { id: "BEY-BBG-17-ARCHER-IFRAID-W145SB", type: "bey", structure: "synchrome", name: "아처 이프레이드", en: "Archer Ifraid", sub: "W145SB", productNo: "BBG-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-20-BANDID-GOREIM-DF145BS", type: "bey", structure: "synchrome", name: "반디드 골렘", jpName: "반디드 고레임", en: "Bandid Goreim", sub: "DF145BS", productNo: "BBG-20", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GOREIM", "CRYSTALWHEEL-BANDID", "CHROMEWHEEL-GOREIM", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BBG-21-WARRIORS-IFRAID-W145CF", type: "bey", structure: "synchrome", name: "워리어스 이프레이드", jpName: "사무라이 이프레이드", en: "Warriors Ifraid", sub: "W145CF", productNo: "BBG-21", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-21-GUARDIAN-REVIZER-160SB", type: "bey", structure: "synchrome", name: "가디언 리바이저", en: "Guardian Revizer", sub: "160SB", productNo: "BBG-21", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CRYSTALWHEEL-GUARDIAN", "CHROMEWHEEL-REVIZER", "TRACK-160", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-22-BERSERKER-BEGIRADOS-SR200BWD", type: "bey", structure: "synchrome", name: "버서커 베기라도스", en: "Berserker Begirados", sub: "SR200BWD", productNo: "BBG-22", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-BEGIRADOS", "CRYSTALWHEEL-BERSERKER", "CHROMEWHEEL-BEGIRADOS", "TRACK-STAMINA-RING-200", "BOTTOM-BIG-WIDE-DEFENSE"] },
  { id: "BEY-BBG-23-BANDID-GENBULL-F230TB", type: "bey", structure: "synchrome", name: "반디드 겐블", en: "Bandid Genbull", sub: "F230TB", productNo: "BBG-23", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GENBULL", "CRYSTALWHEEL-BANDID", "CHROMEWHEEL-GENBULL", "TRACK-FREE-230", "BOTTOM-TWIN-BALL"] },
  { id: "BEY-BBG-23-SHINOBI-GENBULL-130W2D", type: "bey", structure: "synchrome", name: "시노비 겐블", en: "Shinobi Genbull", sub: "130W²D", productNo: "BBG-23", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GENBULL", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-GENBULL", "TRACK-130", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BBG-23-THIEF-SARAMANDA-F230SF", type: "bey", structure: "synchrome", name: "시프 사라만다", en: "Thief Saramanda", sub: "F230SF", productNo: "BBG-23", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-THIEF", "CHROMEWHEEL-SARAMANDA", "TRACK-FREE-230", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BBG-23-SHINOBI-GRYPH-WD145TB", type: "bey", structure: "synchrome", name: "시노비 그리프", en: "Shinobi Gryph", sub: "WD145TB", productNo: "BBG-23", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GRYPH", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-GRYPH", "TRACK-WIDE-DEFENSE-145", "BOTTOM-TWIN-BALL"] },
  { id: "BEY-BBG-23-ARCHER-PHOENIC-125B", type: "bey", structure: "synchrome", name: "아처 피닉", en: "Archer Phoenic", sub: "125B", productNo: "BBG-23", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-PHOENIC", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-PHOENIC", "TRACK-125", "BOTTOM-BALL"] },
  { id: "BEY-BBG-23-PIRATES-PHOENIC-WD145SF", type: "bey", structure: "synchrome", name: "파이레츠 피닉", en: "Pirates Phoenic", sub: "WD145SF", productNo: "BBG-23", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-PHOENIC", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-PHOENIC", "TRACK-WIDE-DEFENSE-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BBG-23-ARCHER-KILLERKEN-130B", type: "bey", structure: "synchrome", name: "아처 크라켄", en: "Archer Killerken", sub: "130B", productNo: "BBG-23", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-KRAKEN", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-KILLERKEN", "TRACK-130", "BOTTOM-BALL"] },
  { id: "BEY-BBG-23-BANDID-KILLERKEN-125W2D", type: "bey", structure: "synchrome", name: "반디드 크라켄", en: "Bandid Killerken", sub: "125W²D", productNo: "BBG-23", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-KRAKEN", "CRYSTALWHEEL-BANDID", "CHROMEWHEEL-KILLERKEN", "TRACK-125", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BBG-24-GARGOLE-IFRAID-SA165GCF", type: "bey", structure: "synchrome", name: "가고일 이프레이드", jpName: "가골 이프레이드", en: "Gargole Ifraid", sub: "SA165GCF", productNo: "BBG-24", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CHROMEWHEEL-GARGOLE", "CHROMEWHEEL-IFRAID", "TRACK-SWITCH-ATTACK-165", "BOTTOM-GEAR-CIRCLE-FLAT"] },
  { id: "BEY-BBG-24-SARAMANDA-BALRO-DF145SWD", type: "bey", structure: "synchrome", name: "사라만다 발록", jpName: "사라만다 발로", en: "Saramanda Balro", sub: "DF145SWD", productNo: "BBG-24", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-BALRO", "CHROMEWHEEL-SARAMANDA", "CHROMEWHEEL-BALRO", "TRACK-DOWN-FORCE-145", "BOTTOM-SHARP-WIDE-DEFENSE"] },
  { id: "BEY-BBG-24-GRYPH-GIRAGO-WA130HF", type: "bey", structure: "synchrome", name: "그리프 지라고", en: "Gryph Girago", sub: "WA130HF", productNo: "BBG-24", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GIRAGO", "CHROMEWHEEL-GRYPH", "CHROMEWHEEL-GIRAGO", "TRACK-WING-ATTACK-130", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BBG-25-GOREIM-REVIZER-E230SB", type: "bey", structure: "synchrome", name: "골렘 리바이저", en: "Goreim Revizer", sub: "E230SB", productNo: "BBG-25", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CHROMEWHEEL-GOREIM", "CHROMEWHEEL-REVIZER", "TRACK-ELEVATOR-230", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-25-KILLERKEN-BALRO-A230WB", type: "bey", structure: "synchrome", name: "크라켄 발록", jpName: "크라켄 발로", en: "Killerken Balro", sub: "A230WB", productNo: "BBG-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-BALRO", "CHROMEWHEEL-KILLERKEN", "CHROMEWHEEL-BALRO", "TRACK-ARMOR-230", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BBG-25-OROJYA-WYVANG-145EDS", type: "bey", structure: "synchrome", name: "오로자 와이번", en: "Orojya Wyvang", sub: "145EDS", productNo: "BBG-25", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-WYVANG", "CHROMEWHEEL-OROJYA", "CHROMEWHEEL-WYVANG", "TRACK-145", "BOTTOM-ETERNAL-DEFENSE-SHARP"] },
  { id: "BEY-BBG-26-WARRIORS-PEGASIS-W105R2F", type: "bey", structure: "synchrome", name: "워리어스 페가시스", jpName: "사무라이 페가시스", en: "Warriors Pegasis", sub: "W105R²F", productNo: "BBG-26", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-PEGASIS", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-PEGASIS", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BBG-27-GLADIATOR-BAHAMDIA-SP230GF", type: "bey", structure: "synchrome", name: "글레디에이터 바함디아", en: "Gladiator Bahamdia", sub: "SP230GF", productNo: "BBG-27", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-BAHAMDIA", "CRYSTALWHEEL-GLADIATOR", "CHROMEWHEEL-BAHAMDIA", "TRACK-SPIKE-230", "BOTTOM-GIGA-FLAT"] },
  { id: "FACE-PEGASIS", type: "face", name: "페가시스", en: "Pegasis", tags: [], desc: "페가시스의 별자리를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LEONE", type: "face", name: "레온", jpName: "레오네", en: "Leone", tags: [], desc: "레온의 별자리를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-SAGITTARIO", type: "face", name: "사지타리오", en: "Sagittario", tags: [], desc: "사지타리오의 별자리를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-METAL-FACE", type: "face", name: "메탈페이스", en: "Metal Face", tags: [], desc: "무거워진 중량이 공격력과 방어력을 향상시킨다.", stats: [60, 60, 0] },
  { id: "FACE-BULL", type: "face", name: "불", en: "Bull", tags: [], desc: "불의 별자리를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-QUETZALCOATL", type: "face", name: "케찰코아틀", en: "Quetzalcoatl", tags: [], desc: "케찰코아틀을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-SUSANOW", type: "face", name: "스사노오", en: "Susanow", tags: [], desc: "스사노오를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-WOLF", type: "face", name: "울프", jpName: "볼프", en: "Wolf", tags: [], desc: "울프를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ARIES", type: "face", name: "아리에스", en: "Aries", tags: [], desc: "아리에스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LIBRA", type: "face", name: "리브라", en: "Libra", tags: [], desc: "리브라를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-AQUARIO", type: "face", name: "아쿠아리오", en: "Aquario", tags: [], desc: "아쿠아리오를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-VIRGO", type: "face", name: "비르고", en: "Virgo", tags: [], desc: "비르고를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-L-DRAGO", type: "face", name: "엘드라고", en: "L-Drago", tags: [], desc: "엘드라고를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ESCOLPIO", type: "face", name: "에스콜피오", en: "Escolpio", tags: [], desc: "에스콜피오를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-PISCES", type: "face", name: "파이시즈", en: "Pisces", tags: [], desc: "파이시즈를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-GEMIOS", type: "face", name: "제미오스", en: "Gemios", tags: [], desc: "제미오스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CAPRICORNE", type: "face", name: "카프리콘", jpName: "카프리코네", en: "Capricorne", tags: [], desc: "카프리콘을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CANCER", type: "face", name: "캔서", en: "Cancer", tags: [], desc: "캔서를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-AQUILA", type: "face", name: "아쿠이라", en: "Aquila", tags: [], desc: "아쿠이라를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ORSO", type: "face", name: "오르소", en: "Orso", tags: [], desc: "오르소를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-PHOENIX", type: "face", name: "피닉스", en: "Phoenix", tags: [], desc: "피닉스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-SERPENT", type: "face", name: "서펜트", en: "Serpent", tags: [], desc: "서펜트를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ANUBIUS", type: "face", name: "아누비우스", en: "Anubius", tags: [], desc: "아누비우스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-UNICORNO", type: "face", name: "유니콘", jpName: "유니코르노", en: "Unicorno", tags: [], desc: "유니콘을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LACERTA", type: "face", name: "라체르타", en: "Lacerta", tags: [], desc: "라체르타를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-GIRAFFE", type: "face", name: "기라프", en: "Giraffe", tags: [], desc: "기라프를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-PERSEUS", type: "face", name: "페르세우스", en: "Perseus", tags: [], desc: "페르세우스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-KETOS", type: "face", name: "케토스", en: "Ketos", tags: [], desc: "케토스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-METAL-FACE-CUSTOM-VER", type: "face", name: "메탈페이스 커스텀 Ver.", jpName: "메탈페이스 개조 Ver.", en: "Metal Face Custom Ver.", tags: [], desc: "무거워진 중량이 공격력과 방어력을 향상시킨다.", modes: [{ name: "헤비", stats: [60, 60, 0] }, { name: "미들", stats: [50, 50, 10] }, { name: "라이트", stats: [40, 40, 20] }, { name: "페더", stats: [30, 30, 30] }] },
  { id: "FACE-BLAZE", type: "face", name: "블레이즈", en: "Blaze", tags: [], desc: "블레이즈를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CHIMERA", type: "face", name: "키메라", en: "Chimera", tags: [], desc: "키메라를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-HORUSEUS", type: "face", name: "호르세우스", jpName: "호루세우스", en: "Horuseus", tags: [], desc: "호르세우스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-KEEL", type: "face", name: "킬", jpName: "길", en: "Keel", tags: [], desc: "킬을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-HERCULEO", type: "face", name: "헤라클레오", en: "Herculeo", tags: [], desc: "헤라클레오를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-BYXIS", type: "face", name: "픽시스", en: "Byxis", tags: [], desc: "픽시스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-REX", type: "face", name: "렉스", en: "Rex", tags: [], desc: "렉스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-KERBECS", type: "face", name: "켈베로스", en: "Kerbecs", tags: [], desc: "켈베로스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-BEAFOWL", type: "face", name: "비폴", en: "Beafowl", tags: [], desc: "비폴을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-HOROGIUM", type: "face", name: "호로지움", en: "Horogium", tags: [], desc: "호로지움을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LYNX", type: "face", name: "링크스", en: "Lynx", tags: [], desc: "링크스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-KRONOS", type: "face", name: "크로노스", en: "Kronos", tags: [], desc: "크로노스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-VARIARES", type: "face", name: "베리아레스", en: "Variares", tags: [], desc: "베리아레스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-JUPITER", type: "face", name: "쥬피터", en: "Jupiter", tags: [], desc: "쥬피터를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-IONIS", type: "face", name: "이오니스", en: "Ionis", tags: [], desc: "이오니스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-FOX", type: "face", name: "폭스", en: "Fox", tags: [], desc: "폭스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LYRA", type: "face", name: "레이라", en: "Lyra", tags: [], desc: "레이라를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CROWN", type: "face", name: "크라운", en: "Crown", tags: [], desc: "크라운을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ORION", type: "face", name: "오리온", en: "Orion", tags: [], desc: "오리온을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-URANUS", type: "face", name: "우라누스", en: "Uranus", tags: [], desc: "우라누스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-NEMESIS", type: "face", name: "네메시스", en: "Nemesis", tags: [], desc: "네메시스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-HADES", type: "face", name: "하데스", en: "Hades", tags: [], desc: "하데스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-BEELZEB", type: "face", name: "베르제브", en: "Beelzeb", tags: [], desc: "베르제브를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-DRAGONIS", type: "face", name: "드라고니스", en: "Dragonis", tags: [], desc: "드라고니스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CYGNUS", type: "face", name: "시그너스", en: "Cygnus", tags: [], desc: "시그너스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "CLEARWHEEL-PEGASIS", type: "clearwheel", name: "페가시스", en: "Pegasis", battleType: "attack", spin: "right", tags: [], desc: "위에서의 공격에 대응하며 어퍼공격으로 되받아 공격한다.", stats: [40, 20, 10] },
  { id: "CLEARWHEEL-LEONE", type: "clearwheel", name: "레온", en: "Leone", battleType: "defense", spin: "right", tags: [], desc: "어느 방향에서의 공격도 막아내는 형태를 가진 방어력이 뛰어난 휠.", stats: [10, 40, 20] },
  { id: "CLEARWHEEL-SAGITTARIO", type: "clearwheel", name: "사지타리오", en: "Sagittario", battleType: "stamina", spin: "right", tags: [], desc: "화살과 같은 형태로 위에서 공격하는 적을 효과적으로 방어한다.", stats: [10, 20, 40] },
  { id: "CLEARWHEEL-BULL", type: "clearwheel", name: "불", en: "Bull", battleType: "balance", spin: "right", tags: [], desc: "어느 방향에서의 공격도 막아내는 형태를 가진 방어력이 뛰어난 휠.", stats: [30, 30, 10] },
  { id: "CLEARWHEEL-WOLF", type: "clearwheel", name: "울프", en: "Wolf", battleType: "balance", spin: "right", tags: [], desc: "네 마리의 늑대가 3방향으로 공격을 펼친다.", stats: [30, 20, 20] },
  { id: "CLEARWHEEL-CANCER", type: "clearwheel", name: "캔서", en: "Cancer", battleType: "balance", spin: "right", tags: [], desc: "어퍼공격을 하고 적의 공격을 가볍게 받아넘긴다.", stats: [30, 30, 10] },
  { id: "CLEARWHEEL-AQUARIO", type: "clearwheel", name: "아쿠아리오", en: "Aquario", battleType: "attack", spin: "right", tags: [], desc: "4방향으로 펼쳐진 물덩어리들이 흐르는 듯한 공격을 만들어 낸다.", stats: [40, 10, 20] },
  { id: "CLEARWHEEL-L-DRAGO", type: "clearwheel", name: "엘드라고", en: "L-Drago", battleType: "attack", spin: "left", tags: [], desc: "3마리의 좌회전하는 용이 강력공격! 라이트닝 휠의 힘을 끌어낸다.", stats: [50, 10, 0] },
  { id: "CLEARWHEEL-ARIES", type: "clearwheel", name: "아리에스", en: "Aries", battleType: "defense", spin: "right", tags: [], desc: "나선형의 뿔이 모든 방향에 대응하여 방패의 역할을 한다.", stats: [10, 40, 20] },
  { id: "CLEARWHEEL-AQUILA", type: "clearwheel", name: "아쿠이라", en: "Aquila", battleType: "stamina", spin: "right", tags: [], desc: "바람을 가르는 독수리같은 비행능력으로 강한 지구력을 발휘한다.", stats: [20, 10, 40] },
  { id: "CLEARWHEEL-LIBRA", type: "clearwheel", name: "리브라", en: "Libra", battleType: "stamina", spin: "right", tags: [], desc: "가장자리의 2개의 저울접시가 강력한 원심력과 지구력을 자랑한다.", stats: [20, 10, 40] },
  { id: "CLEARWHEEL-CAPRICORNE", type: "clearwheel", name: "카프리콘", en: "Capricorne", battleType: "attack", spin: "right", tags: [], desc: "뿔의 작은 돌기는 연타공격을, 발굽은 강력한 어퍼공격을 한다.", stats: [40, 20, 10] },
  { id: "CLEARWHEEL-ORSO", type: "clearwheel", name: "오르소", en: "Orso", battleType: "defense", spin: "right", tags: [], desc: "큰곰의 앞발을 이용하여 연타공격을 발휘한다.", stats: [20, 30, 20] },
  { id: "CLEARWHEEL-GEMIOS", type: "clearwheel", name: "제미오스", en: "Gemios", battleType: "balance", spin: "right", tags: [], desc: "얼음덩어리가 공격을 가하고, 불덩어리가 상대의 공격을 가볍게 받아넘기는 효과를 낸다.", stats: [40, 20, 10] },
  { id: "CLEARWHEEL-PISCES", type: "clearwheel", name: "파이시즈", en: "Pisces", battleType: "stamina", spin: "right", tags: [], desc: "발군의 공력으로 지구력을 발휘한다. 송곳니로 윗면 공격도 가능하다.", stats: [20, 10, 40] },
  { id: "CLEARWHEEL-PHOENIX", type: "clearwheel", name: "피닉스", en: "Phoenix", battleType: "stamina", spin: "right", tags: [], desc: "바깥쪽의 봉황의 날개가 원심력을 증가, 꼬리날개로 적의 공격을 가볍게 막는다.", stats: [10, 10, 50] },
  { id: "CLEARWHEEL-VIRGO", type: "clearwheel", name: "비르고", en: "Virgo", battleType: "stamina", spin: "right", tags: [], desc: "원심력을 극대화한 형태로 지구력을 강화하며 스매시공격을 한다.", stats: [10, 20, 40] },
  { id: "CLEARWHEEL-ESCOLPIO", type: "clearwheel", name: "에스콜피오", en: "Escolpio", battleType: "defense", spin: "right", tags: [], desc: "커다란 가위 모양의 꼬리가 적의 공격을 받아넘기고 아래에서 위로 밀어붙인다.", stats: [20, 40, 10] },
  { id: "CLEARWHEEL-SERPENT", type: "clearwheel", name: "서펜트", en: "Serpent", battleType: "balance", spin: "right", tags: [], desc: "적의 공격을 가볍게 받아넘기면서 연타공격을 한다.", stats: [30, 30, 10] },
  { id: "CLEARWHEEL-ANUBIUS", type: "clearwheel", name: "아누비우스", en: "Anubius", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "CLEARWHEEL-PEGASIS-II", type: "clearwheel", name: "페가시스Ⅱ", en: "Pegasis II", battleType: "attack", spin: "right", tags: [], desc: "갈기와 날개가 아래에서 위로 올려치는 어퍼공격을 가한다.", stats: [50, 10, 10] },
  { id: "CLEARWHEEL-UNICORNO", type: "clearwheel", name: "유니콘", en: "Unicorno", battleType: "attack", spin: "right", tags: [], desc: "3개의 커다란 뿔로 상대를 찌르는 듯이 강한 공격을 한다.", stats: [40, 20, 10] },
  { id: "CLEARWHEEL-LACERTA", type: "clearwheel", name: "라체르타", en: "Lacerta", battleType: "balance", spin: "right", tags: [], desc: "도마뱀 모양의 몸체가 적의 공격을 받아넘기고 팔꿈치로 어퍼공격을 가한다.", stats: [30, 20, 20] },
  { id: "CLEARWHEEL-GIRAFFE", type: "clearwheel", name: "기라프", en: "Giraffe", battleType: "defense", spin: "right", tags: [], desc: "바깥쪽에 경사진 모양의 날개가 상대의 공격을 받아넘긴다.", stats: [10, 50, 10] },
  { id: "CLEARWHEEL-PERSEUS", type: "clearwheel", name: "페르세우스", en: "Perseus", battleType: "defense", spin: "dual", tags: [], desc: "유일하게 그라비티 휠에 장착 가능한 양방향회전 휠. 투구가 적의 공격을 방어하면서 접근하는 적을 튕겨낸다.", stats: [20, 50, 0] },
  { id: "CLEARWHEEL-SUSANOW", type: "clearwheel", name: "스사노오", en: "Susanow", battleType: "attack", spin: "right", tags: [], desc: "날카로운 칼끝으로 상대의 공격을 받아넘긴다.", stats: [40, 20, 0] },
  { id: "CLEARWHEEL-KETOS", type: "clearwheel", name: "케토스", en: "Ketos", battleType: "defense", spin: "right", tags: [], desc: "두 개의 꼬리 지느러미가 적의 공격을 받아넘기며 충격을 흡수한다.", stats: [20, 40, 10] },
  { id: "CLEARWHEEL-BLAZE", type: "clearwheel", name: "블레이즈", en: "Blaze", battleType: "balance", spin: "right", tags: [], desc: "흔들거리는 불꽃의 형상이 적의 공격을 받아 흘리면서도 예측할 수 없는 불규칙한 연타 공격을 가한다.", stats: [30, 40, 0] },
  { id: "CLEARWHEEL-L-DRAGO-II", type: "clearwheel", name: "엘드라고Ⅱ", en: "L-Drago II", battleType: "attack", spin: "left", tags: [], desc: "유일하게 메테오 휠에 결합 가능한 좌회전 클리어휠. 위와 옆 방향에 위치한 고무가 적의 회전력을 흡수한다.", stats: [40, 10, 20], extraStats: [{ name: "흡수력", value: 40 }] },
  { id: "CLEARWHEEL-CHIMERA", type: "clearwheel", name: "키메라", en: "Chimera", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "CLEARWHEEL-HORUSEUS", type: "clearwheel", name: "호르세우스", en: "Horuseus", battleType: "defense", spin: "right", tags: [], desc: "부드러운 곡선으로 이루어진 큰 날개가 적의 공격을 받아넘긴다.", stats: [20, 40, 10] },
  { id: "CLEARWHEEL-KEEL", type: "clearwheel", name: "킬", en: "Keel", battleType: "attack", spin: "right", tags: [], desc: "용골 모양의 휠이 적에게 섬세한 연타공격을 가한다.", stats: [40, 10, 20] },
  { id: "CLEARWHEEL-HERCULEO", type: "clearwheel", name: "헤라클레오", en: "Herculeo", battleType: "attack", spin: "right", tags: [], desc: "사자의 갈기가 거침없이 어퍼공격을 가한다.", stats: [30, 20, 20] },
  { id: "CLEARWHEEL-BYXIS", type: "clearwheel", name: "픽시스", jpName: "빅시스", en: "Byxis", battleType: "attack", spin: "right", tags: [], desc: "바깥에 중심이 있어서 원심력을 발휘하면서 나침반 바늘로 적을 공격한다.", stats: [30, 10, 30] },
  { id: "CLEARWHEEL-REX", type: "clearwheel", name: "렉스", en: "Rex", battleType: "balance", spin: "right", tags: [], desc: "두개골은 어퍼공격을 가하고, 등뼈는 상대의 공격을 받아넘기는 효과를 발휘한다.", stats: [30, 30, 0] },
  { id: "CLEARWHEEL-PERSEUS-ATTACK", type: "clearwheel", name: "페르세우스 어택", en: "Perseus Attack", battleType: "attack", spin: "dual", tags: [], desc: "유일하게 그라비티 휠에 장착 가능한 양방향회전 휠. 미세한 흠이 적에게 연타공격을 가한다.", stats: [50, 20, 0] },
  { id: "CLEARWHEEL-PERSEUS-STAMINA", type: "clearwheel", name: "페르세우스 스테미너", en: "Perseus Stamina", battleType: "stamina", spin: "dual", tags: [], desc: "유일하게 그라비티 휠에 장착 가능한 양방향회전 휠. 중량을 바깥쪽으로 분산시켜 강력한 지구력을 발휘한다.", stats: [0, 20, 50] },
  { id: "CLEARWHEEL-L-DRAGO-II-RUSH", type: "clearwheel", name: "엘드라고Ⅱ 러시", en: "L-Drago II Rush", battleType: "attack", spin: "left", tags: [], desc: "유일하게 메테오 휠에 결합 가능한 좌회전 클리어휠. 울퉁불퉁한 요철로 둘러싸여 있어서 연타공격을 반복한다.", stats: [60, 20, 0] },
  { id: "CLEARWHEEL-L-DRAGO-II-ASSAULT", type: "clearwheel", name: "엘드라고Ⅱ 어썰트", en: "L-Drago II Assault", battleType: "attack", spin: "left", tags: [], desc: "유일하게 메테오 휠에 결합 가능한 좌회전 클리어휠. 바깥쪽으로 돌출된 커다란 머리 부분이 강력한 공격을 펼친다.", stats: [70, 0, 10] },
  { id: "CLEARWHEEL-KERBECS", type: "clearwheel", name: "켈베로스", jpName: "케르벡스", en: "Kerbecs", battleType: "stamina", spin: "right", tags: [], desc: "바깥 중심을 강화하고 3개의 쇠사슬이 연타공격을 끊임없이 반복한다.", stats: [20, 20, 30] },
  { id: "CLEARWHEEL-BEAFOWL", type: "clearwheel", name: "비폴", en: "Beafowl", battleType: "stamina", spin: "right", tags: [], desc: "공작의 날개와 같은 미세한 돌기가 적의 공격을 방어하며 뛰어난 지구력을 발휘한다.", stats: [0, 20, 50] },
  { id: "CLEARWHEEL-HOROGIUM", type: "clearwheel", name: "호로지움", jpName: "호로기움", en: "Horogium", battleType: "defense", spin: "right", tags: [], desc: "원판 모양의 휠이 적의 공격을 완벽하게 방어한다.", stats: [0, 70, 0] },
  { id: "CLEARWHEEL-PEGASIS-III", type: "4dclearwheel", name: "페가시스Ⅲ", en: "Pegasis III", battleType: "attack", spin: "right", tags: [], desc: "위쪽에 있는 갈기가 강한 공격을 펼치고 양쪽의 날개가 연타공격을 가한다.", stats: [60, 0, 10] },
  { id: "CLEARWHEEL-LEONE-II", type: "4dclearwheel", name: "레온Ⅱ", jpName: "레오네Ⅱ", en: "Leone II", battleType: "defense", spin: "right", tags: [], desc: "어떤 방향에서의 공격도 효율적으로 받아넘기고 카운터공격을 한다.", stats: [20, 50, 0] },
  { id: "CLEARWHEEL-LYNX", type: "4dclearwheel", name: "링크스", en: "Lynx", battleType: "balance", spin: "right", tags: [], desc: "살쾡이의 발톱이 상대를 공격하고 두 개의 커다란 날개가 상대의 공격을 방어한다.", stats: [25, 25, 20] },
  { id: "CLEARWHEEL-KRONOS", type: "4dclearwheel", name: "크로노스", en: "Kronos", battleType: "stamina", spin: "right", tags: [], desc: "토성의 고리를 모티브로 한 링과 크로노스가 소유한 큰 낫 모양의 휠이 지구력을 높인다.", stats: [10, 0, 60] },
  { id: "CLEARWHEEL-JUPITER", type: "4dclearwheel", name: "쥬피터", en: "Jupiter", battleType: "defense", spin: "right", tags: [], desc: "수많은 깃털 모양의 요철부분이 적의 공격을 흡수하여 방어한다.", stats: [0, 50, 20] },
  { id: "CLEARWHEEL-CROWN", type: "4dclearwheel", name: "크라운", en: "Crown", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [20, 0, 50] },
  { id: "CLEARWHEEL-FOX", type: "4dclearwheel", name: "폭스", en: "Fox", battleType: "balance", spin: "right", tags: [], desc: "", stats: [40, 10, 20] },
  { id: "CLEARWHEEL-LYRA", type: "4dclearwheel", name: "레이라", en: "Lyra", battleType: "defense", spin: "right", tags: [], desc: "", stats: [20, 50, 0] },
  { id: "CLEARWHEEL-IONIS", type: "4dclearwheel", name: "이오니스", en: "Ionis", battleType: "balance", spin: "right", tags: [], desc: "", stats: [20, 30, 20] },
  { id: "CLEARWHEEL-UNICORNO-II", type: "4dclearwheel", name: "유니콘Ⅱ", jpName: "유니코르노Ⅱ", en: "Unicorno II", battleType: "attack", spin: "right", tags: [], desc: "3개의 커다란 뿔로 상대에게 피해를 입힌다.", stats: [60, 0, 10] },
  { id: "CLEARWHEEL-ORION", type: "4dclearwheel", name: "오리온", en: "Orion", battleType: "stamina", spin: "right", tags: [], desc: "강한 원심력을 발휘하면서 돌기를 이용하여 상대를 공격한다.", stats: [10, 0, 60] },
  { id: "CLEARWHEEL-QUETZALCOATL", type: "4dclearwheel", name: "케찰코아틀", en: "Quetzalcoatl", battleType: "balance", spin: "right", tags: [], desc: "외부에 크게 펼쳐진 날개와 같은 모양으로 공격력과 지구력을 겸비하고 있다.", stats: [50, 0, 20] },
  { id: "CLEARWHEEL-URANUS", type: "4dclearwheel", name: "우라누스", en: "Uranus", battleType: "stamina", spin: "right", tags: [], desc: "외부에 중심을 둔 소용돌이 모양으로 원심력과 함께 외부 공격력도 겸비하고 있다.", stats: [40, 0, 40] },
  { id: "CLEARWHEEL-NEMESIS", type: "4dclearwheel", name: "네메시스", en: "Nemesis", battleType: "balance", spin: "right", tags: [], desc: "물이 흐르는 듯한 날개 모양으로 강한 원심력을 만들어 내면서 상대의 공격을 받아넘긴다.", stats: [10, 20, 40] },
  { id: "CLEARWHEEL-HADES", type: "4dclearwheel", name: "하데스", en: "Hades", battleType: "balance", spin: "right", tags: [], desc: "2개의 방패 모양 돌출부가 연타공격을 가하고 동시에 효과적인 방어를 수행한다.", stats: [30, 20, 20] },
  { id: "CLEARWHEEL-BEELZEB", type: "4dclearwheel", name: "베르제브", en: "Beelzeb", battleType: "attack", spin: "right", tags: [], desc: "", stats: [30, 30, 10] },
  { id: "CLEARWHEEL-DRAGONIS", type: "4dclearwheel", name: "드라고니스", en: "Dragonis", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "CLEARWHEEL-CYGNUS", type: "4dclearwheel", name: "시그너스", en: "Cygnus", battleType: "balance", spin: "right", tags: [], desc: "백조의 양 날개가 부드러운 곡선을 그리며 방어력을 강화한다.", stats: [10, 40, 20] },
  { id: "CLEARWHEEL-SAGITTARIO-II", type: "4dclearwheel", name: "사지타리오Ⅱ", en: "Sagittario II", battleType: "stamina", spin: "right", tags: [], desc: "4개의 화살촉이 균형있게 배치되어 최적의 지구력을 유지한다.", stats: [20, 10, 40] },
  { id: "WHEEL-PEGASIS", type: "wheel", name: "페가시스", en: "Pegasis", battleType: "attack", spin: "right", tags: [], desc: "3개의 날개가 강력한 공격력을 발휘한다.", stats: [50, 10, 10] },
  { id: "WHEEL-BULL", type: "wheel", name: "불", en: "Bull", battleType: "balance", spin: "right", tags: [], desc: "양쪽의 뿔이 상대를 밑에서 올려치는 어퍼공격과 상대의 공격을 가볍게 피하는 효과를 균형있게 발휘한다.", stats: [30, 20, 20] },
  { id: "WHEEL-SAGITTARIO", type: "wheel", name: "사지타리오", en: "Sagittario", battleType: "stamina", spin: "right", tags: [], desc: "중심에서 멀리 떨어져 있는 무거운 2개의 활 모양 날개가 회전력을 높인다.", stats: [10, 20, 40] },
  { id: "WHEEL-LEONE", type: "wheel", name: "레온", jpName: "레오네", en: "Leone", battleType: "defense", spin: "right", tags: [], desc: "무거운 중량으로 적의 공격을 무력화시킨다.", stats: [10, 40, 20] },
  { id: "WHEEL-QUETZALCOATL", type: "wheel", name: "케찰코아틀", en: "Quetzalcoatl", battleType: "attack", spin: "right", tags: [], desc: "어퍼와 스매시 쌍방의 특징을 함께 가진 초공격형 휠.", stats: [50, 10, 10] },
  { id: "WHEEL-WOLF", type: "wheel", name: "울프", jpName: "볼프", en: "Wolf", battleType: "balance", spin: "right", tags: [], desc: "위에서의 공격을 되받아치며 측면의 역방향으로 튀어나와있는 갈기로 연타공격을 가한다.", stats: [30, 30, 10] },
  { id: "WHEEL-ARIES", type: "wheel", name: "아리에스", en: "Aries", battleType: "defense", spin: "right", tags: [], desc: "6개의 강력한 뿔이 상대의 공격을 역으로 되받아친다.", stats: [20, 40, 10] },
  { id: "WHEEL-LIBRA", type: "wheel", name: "리브라", en: "Libra", battleType: "stamina", spin: "right", tags: [], desc: "원에 가까운 형태로 발군의 안정성을 자랑하고 지구력이 매우 뛰어나다.", stats: [10, 10, 50] },
  { id: "WHEEL-AQUARIO", type: "wheel", name: "아쿠아리오", en: "Aquario", battleType: "attack", spin: "right", tags: [], desc: "사방으로 펼쳐져 있는 물회오리들이 강력한 공격력을 발휘한다.", stats: [40, 20, 10] },
  { id: "WHEEL-VIRGO", type: "wheel", name: "비르고", en: "Virgo", battleType: "stamina", spin: "right", tags: [], desc: "무게중심을 바깥쪽에 배치하여 원심력과 함께 지구력이 뛰어나다.", stats: [20, 20, 40] },
  { id: "WHEEL-L-DRAGO", type: "wheel", name: "엘드라고", en: "L-Drago", battleType: "attack", spin: "left", tags: [], desc: "좌회전하는 세 마리 용이 완전히 새로운 공격을 이끌어낸다.", stats: [55, 10, 10] },
  { id: "WHEEL-ESCOLPIO", type: "wheel", name: "에스콜피오", en: "Escolpio", battleType: "defense", spin: "right", tags: [], desc: "외곽의 단단한 집게와 꼬리에 둘러싸인 몸체가 철벽 방어를 수행한다.", stats: [10, 60, 10] },
  { id: "WHEEL-PISCES", type: "wheel", name: "파이시즈", en: "Pisces", battleType: "stamina", spin: "right", tags: [], desc: "발군의 공격력과 지구력을 겸비. 상어처럼 거침없이 회전한다.", stats: [10, 20, 40] },
  { id: "WHEEL-GEMIOS", type: "wheel", name: "제미오스", en: "Gemios", battleType: "balance", spin: "right", tags: [], desc: "불꽃덩어리와 얼음덩어리가 번갈아가며 공격을 가한다.", stats: [20, 30, 20] },
  { id: "WHEEL-CAPRICORNE", type: "wheel", name: "카프리콘", jpName: "카프리코네", en: "Capricorne", battleType: "attack", spin: "right", tags: [], desc: "빙 둘러싼 뿔이 상대의 균형을 무너뜨린다.", stats: [20, 30, 20] },
  { id: "METALWHEEL-STORM", type: "metalwheel", name: "스톰", en: "Storm", battleType: "attack", spin: "right", tags: [], desc: "3개의 날개로 상대의 팽이를 벨 것 같은 강력한 공격력을 펼친다.", stats: [50, 10, 10] },
  { id: "METALWHEEL-ROCK", type: "metalwheel", name: "로크", jpName: "록", en: "Rock", battleType: "defense", spin: "right", tags: [], desc: "묵직한 중량을 가진 메탈휠로 적의 공격에도 끄떡없는 방어력을 자랑한다.", stats: [10, 40, 20] },
  { id: "METALWHEEL-FLAME", type: "metalwheel", name: "플레임", en: "Flame", battleType: "stamina", spin: "right", tags: [], desc: "4면에 장착된 무게추가 강한 원심력을 발생시킨다.", stats: [10, 20, 40] },
  { id: "METALWHEEL-DARK", type: "metalwheel", name: "다크", en: "Dark", battleType: "balance", spin: "right", tags: [], desc: "6개의 톱날로 적을 가르고, 6개의 다른 톱날은 적을 튕겨낸다.", stats: [30, 30, 10] },
  { id: "LIGHTWHEEL-MAD", type: "lightwheel", name: "매드", en: "Mad", battleType: "balance", spin: "right", tags: [], desc: "", stats: [20, 30, 20] },
  { id: "LIGHTWHEEL-HEAT", type: "lightwheel", name: "히트", en: "Heat", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [10, 20, 40] },
  { id: "LIGHTWHEEL-CLAY", type: "lightwheel", name: "클레이", en: "Clay", battleType: "defense", spin: "right", tags: [], desc: "", stats: [10, 40, 20] },
  { id: "LIGHTWHEEL-WIND", type: "lightwheel", name: "윈드", en: "Wind", battleType: "attack", spin: "right", tags: [], desc: "", stats: [40, 20, 10] },
  { id: "METALWHEEL-LIGHTNING", type: "metalwheel", name: "라이트닝", en: "Lightning", battleType: "attack", spin: "left", tags: [], desc: "어퍼와 연타공격이 가능하도록 3개의 톱날을 가진 다재다능한 공격형 휠.", stats: [60, 0, 0] },
  { id: "METALWHEEL-EARTH", type: "metalwheel", name: "어스", en: "Earth", battleType: "stamina", spin: "right", tags: [], desc: "커다란 날개의 중량이 바깥쪽으로 분배되어 강력한 원심력을 발휘한다.", stats: [10, 10, 50] },
  { id: "METALWHEEL-COUNTER", type: "metalwheel", name: "카운터", en: "Counter", battleType: "defense", spin: "right", tags: [], desc: "묵직한 중량으로 적의 공격을 막아내고 기존 레온의 힘을 이어받았다.", stats: [10, 40, 10] },
  { id: "METALWHEEL-KILLER", type: "metalwheel", name: "키라", en: "Killer", battleType: "balance", spin: "right", tags: [], desc: "윗면은 상대의 공격을 가볍게 받아넘기고 바닥면은 공격을 하는 이면성을 가지고 있다.", stats: [40, 20, 10] },
  { id: "METALWHEEL-CYBER", type: "metalwheel", name: "사이버", en: "Cyber", battleType: "attack", spin: "right", tags: [], desc: "강력한 공격력을 만드는 3개의 날개를 가지고 있고 기존 페가시스의 힘을 이어받았다.", stats: [40, 10, 10] },
  { id: "METALWHEEL-THERMAL", type: "metalwheel", name: "써멀", en: "Thermal", battleType: "stamina", spin: "right", tags: [], desc: "공기의 저항을 최대한 줄여 거침없이 오랜 시간 동안 회전한다.", stats: [20, 10, 40] },
  { id: "METALWHEEL-BURN", type: "metalwheel", name: "번", en: "Burn", battleType: "stamina", spin: "right", tags: [], desc: "중심부의 무게를 최대한 바깥쪽으로 이동시켜 원심력을 강화하였다.", stats: [10, 20, 40] },
  { id: "METALWHEEL-POISON", type: "metalwheel", name: "포이즌", en: "Poison", battleType: "balance", spin: "right", tags: [], desc: "방패 모양의 블록으로 적의 공격을 방어하면서 15개의 날개로 빈틈없는 연타공격을 한다.", stats: [30, 30, 10] },
  { id: "METALWHEEL-MERCURY", type: "metalwheel", name: "머큐리", en: "Mercury", battleType: "attack", spin: "right", tags: [], desc: "", stats: [60, 10, 0] },
  { id: "METALWHEEL-INFINITY", type: "metalwheel", name: "인피니티", en: "Infinity", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [10, 10, 40] },
  { id: "METALWHEEL-GALAXY", type: "metalwheel", name: "갤럭시", en: "Galaxy", battleType: "attack", spin: "right", tags: [], desc: "굴곡이 있는 3개의 커다란 날개가 강력한 연타공격을 발휘한다.", stats: [60, 10, 0] },
  { id: "METALWHEEL-RAY", type: "metalwheel", name: "레이", en: "Ray", battleType: "attack", spin: "right", tags: [], desc: "9개의 돌출된 형태의 휠이 상대에게 강력한 연타공격을 한다.", stats: [40, 10, 20] },
  { id: "METALWHEEL-GRAVITY", type: "metalwheel", name: "그라비티", en: "Gravity", battleType: "defense", spin: "dual", tags: [], desc: "양방향회전에 대응하는 휠. 두꺼운 등껍질로 상대의 공격을 방어하고 카운터공격을 한다.", stats: [20, 50, 0] },
  { id: "METALWHEEL-BAKUSHIN", type: "metalwheel", name: "폭신", jpName: "바쿠신", en: "Bakushin", battleType: "attack", spin: "right", tags: [], desc: "큰 경사를 살려 상대의 중심부 깊숙이 침투해 강렬한 공격을 가한다.", stats: [40, 30, 0] },
  { id: "METALWHEEL-GRAND", type: "metalwheel", name: "그랜드", en: "Grand", battleType: "defense", spin: "right", tags: [], desc: "묵직한 중량의 휠로 상대의 공격에도 끄떡없이 흔들리지 않는 방어력을 보여준다.", stats: [20, 40, 10] },
  { id: "METALWHEEL-SOL", type: "metalwheel", name: "솔", en: "Sol", battleType: "balance", spin: "right", tags: [], desc: "측면은 벽처럼 적의 공격을 막지만 조금이라도 각도가 기울면 연타공격을 가한다.", stats: [40, 30, 0] },
  { id: "METALWHEEL-METEO", type: "metalwheel", name: "메테오", en: "Meteo", battleType: "attack", spin: "left", tags: [], desc: "용의 아랫턱은 일격필살의 공격을, 발톱은 연타공격을 가한다.", stats: [50, 10, 10] },
  { id: "METALWHEEL-DIVINE", type: "metalwheel", name: "디바인", en: "Divine", battleType: "balance", spin: "right", tags: [], desc: "", stats: [30, 30, 10] },
  { id: "METALWHEEL-VULCAN", type: "metalwheel", name: "발칸", en: "Vulcan", battleType: "defense", spin: "right", tags: [], desc: "역사다리꼴로 솟아오른 두 개의 큰 날개가 적의 공격으로부터 몸체를 보호한다.", stats: [20, 40, 10] },
  { id: "METALWHEEL-TORNADO", type: "metalwheel", name: "토네이도", en: "Tornado", battleType: "attack", spin: "right", tags: [], desc: "톱날 모양의 5개의 날개가 적에게 강한 피해를 입힌다.", stats: [50, 10, 10] },
  { id: "METALWHEEL-NIGHTMARE", type: "metalwheel", name: "나이트메어", en: "Nightmare", battleType: "balance", spin: "right", tags: [], desc: "티라노사우루스의 강인한 꼬리를 형상화한 위협적인 24연타 메탈휠.", stats: [40, 40, 0] },
  { id: "METALWHEEL-HELL", type: "metalwheel", name: "헬", en: "Hell", battleType: "stamina", spin: "right", tags: [], desc: "기존의 메탈휠 중에서 가장 넓은 메탈휠로 강력한 공격력과 지구력을 겸비.", stats: [30, 0, 40] },
  { id: "METALWHEEL-SCREW", type: "metalwheel", name: "스크류", en: "Screw", battleType: "attack", spin: "right", tags: [], desc: "볼륨 있는 곡선 모양의 3개의 날개가 강력한 어퍼공격을 반복한다.", stats: [55, 10, 5] },
  { id: "METALWHEEL-BASALT", type: "metalwheel", name: "바셀트", jpName: "바살트", en: "Basalt", battleType: "defense", spin: "right", tags: [], desc: "중심이 기울어져 있어 지구력은 없지만 굉장히 무거워서 방어능력이 뛰어나다.", stats: [0, 70, 0] },
  { id: "METALWHEEL-BIG-BANG", type: "4dmetalwheel", name: "빅뱅", en: "Big Bang", battleType: "attack", spin: "right", tags: [], desc: "PC프레임과 코어의 각도를 달리하여 4가지의 공격모드로 전환이 가능하다.", stats: [60, 0, 10] },
  { id: "METALWHEEL-FANG", type: "4dmetalwheel", name: "팡", en: "Fang", battleType: "defense", spin: "right", tags: [], desc: "메탈휠을 뒤집어서 디펜스모드와 카운터공격모드로 전환한다.", stats: [20, 50, 0] },
  { id: "METALWHEEL-L-DRAGO-DESTROY", type: "4dmetalwheel", name: "엘드라고 디스트로이", en: "L-Drago Destroy", battleType: "attack", spin: "left", tags: [], desc: "메탈휠과 코어의 재조합으로 공격모드와 흡수모드로 전환이 가능하다.", stats: [60, 0, 10], extraStats: [{ name: "흡수력", value: 40 }] },
  { id: "METALWHEEL-BEAT", type: "4dmetalwheel", name: "비트", en: "Beat", battleType: "balance", spin: "right", tags: [], desc: "PC프레임의 방향을 바꾸면 공격모드와 방어모드의 2가지 모드로 전환된다.", stats: [25, 25, 20] },
  { id: "METALWHEEL-SCYTHE", type: "4dmetalwheel", name: "사이즈", en: "Scythe", battleType: "stamina", spin: "right", tags: [], desc: "PC프레임을 잠글 때는 공격모드, 자유회전시킬 때는 스테미너모드의 2가지 모드로 전환된다.", stats: [20, 0, 50] },
  { id: "METALWHEEL-VARIARES", type: "4dmetalwheel", name: "베리아레스", jpName: "바리아레스", en: "Variares", battleType: "defense", spin: "dual", tags: [], desc: "고속회전시에는 공격모드, 저회전시에는 방어모드의 2개 모드로 자동전환한다.", stats: [10, 60, 0] },
  { id: "METALWHEEL-JADE", type: "4dmetalwheel", name: "제이드", en: "Jade", battleType: "defense", spin: "right", tags: [], desc: "쇠구슬이 내장된 메탈프레임을 회전시켜 방어모드와 스테미너모드의 2가지 모드로 전환한다.", stats: [0, 50, 20] },
  { id: "METALWHEEL-FORBIDDEN", type: "4dmetalwheel", name: "포비든", en: "Forbidden", battleType: "balance", spin: "right", tags: [], desc: "", stats: [30, 0, 40] },
  { id: "METALWHEEL-BLITZ", type: "4dmetalwheel", name: "브릿츠", en: "Blitz", battleType: "attack", spin: "right", tags: [], desc: "메탈프레임과 코어의 각도를 바꿔줌에 따라 3개의 날개 강습모드와 6개의 날개 연타모드로 전환된다.", stats: [60, 10, 0] },
  { id: "METALWHEEL-PHANTOM", type: "4dmetalwheel", name: "팬텀", en: "Phantom", battleType: "stamina", spin: "right", tags: [], desc: "PC프레임을 뒤집어 장착하면 지구모드와 공격모드로 전환이 가능하다.", stats: [20, 0, 50] },
  { id: "METALWHEEL-DEATH", type: "4dmetalwheel", name: "데쓰", jpName: "데스", en: "Death", battleType: "balance", spin: "right", tags: [], desc: "거대한 벽과 같은 중압감으로 뒤집으면 공격모드와 방어모드로 전환된다.", stats: [40, 30, 0] },
  { id: "METALWHEEL-DUO", type: "4dmetalwheel", name: "듀오", en: "Duo", battleType: "stamina", spin: "right", tags: [], desc: "메탈프레임의 중심밸런스를 바꿔낌에 따라 지구모드와 공격모드로 전환이 가능하다.", stats: [30, 40, 0] },
  { id: "METALWHEEL-WING", type: "4dmetalwheel", name: "윙", en: "Wing", battleType: "attack", spin: "right", tags: [], desc: "메탈프레임과 코어 각도를 바꿈으로써 3가지 공격력모드로 전환이 가능하다.", stats: [60, 10, 0] },
  { id: "METALWHEEL-L-DRAGO-GUARDIAN", type: "4dmetalwheel", name: "엘드라고 가디언", en: "L-Drago Guardian", battleType: "defense", spin: "left", tags: [], desc: "갑옷을 씌운 메탈프레임과 코어의 조립으로 방어력이 높은 공격모드와 흡수모드의 전환이 가능하다.", stats: [30, 40, 0] },
  { id: "METALWHEEL-DIABLO", type: "4dmetalwheel", name: "디아블로", en: "Diablo", battleType: "balance", spin: "right", tags: [], desc: "메탈프레임과 코어의 재조합으로 메탈프레임이 고정되는 공격모드와 자유회전하는 극한의밸런스모드의 2가지 패턴으로 모드 전환이 가능하다.", stats: [40, 20, 10] },
  { id: "METALWHEEL-FUSION", type: "4dmetalwheel", name: "퓨전", en: "Fusion", battleType: "balance", spin: "right", tags: [], desc: "메탈휠과 러버휠을 반전하여 전환하면 방어모드와 밸런스모드로 전환된다.", stats: [20, 30, 20] },
  { id: "METALWHEEL-CRASH", type: "metalwheel", name: "크래시", en: "Crash", battleType: "balance", spin: "right", tags: [], desc: "", stats: [30, 20, 10] },
  { id: "METALWHEEL-CLOUD", type: "metalwheel", name: "클라우드", en: "Cloud", battleType: "defense", spin: "right", tags: [], desc: "", stats: [10, 30, 20] },
  { id: "METALWHEEL-OMEGA", type: "4dmetalwheel", name: "오메가", en: "Omega", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "METALWHEEL-KREIS", type: "4dmetalwheel", name: "크라이스", en: "Kreis", battleType: "defense", spin: "right", tags: [], desc: "백조가 날개짓하듯 방어하는 방어모드와 날개를 고정한 채 공격하는 공격모드로 전환한다.", stats: [10, 50, 10] },
  { id: "METALWHEEL-FLASH", type: "4dmetalwheel", name: "플래시", en: "Flash", battleType: "stamina", spin: "right", tags: [], desc: "2개의 활과 화살이 중심과 균형을 잡아 원형 상태에서는 지구력을 발휘하고, 타원형 상태에서는 강력한 타격을 적에게 가한다.", stats: [20, 10, 40] },
  { id: "STONEFACE-IFRAID", type: "stoneface", name: "이프레이드", en: "Ifraid", tags: [], desc: "이프레이드를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-SARAMANDA", type: "stoneface", name: "사라만다", en: "Saramanda", tags: [], desc: "사라만다를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-OROJYA", type: "stoneface", name: "오로자", en: "Orojya", tags: [], desc: "오로자를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-PHOENIC", type: "stoneface", name: "피닉", en: "Phoenic", tags: [], desc: "피닉을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-REVIZER", type: "stoneface", name: "리바이저", en: "Revizer", tags: [], desc: "리바이저를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GRYPH", type: "stoneface", name: "그리프", en: "Gryph", tags: [], desc: "그리프를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-KRAKEN", type: "stoneface", name: "크라켄", en: "Killerken", tags: [], desc: "크라켄을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-METAL-STONE-FACE-CUSTOM", type: "stoneface", name: "메탈스톤페이스 커스텀 Ver.", jpName: "메탈스톤페이스 개조 Ver.", en: "Metal Stone Face Custom Ver.", tags: [], desc: "스톤페이스의 강화판. 무거워진 중량이 공격력과 방어력을 향상시킨다.", modes: [{ name: "헤비", stats: [60, 60, 0] }, { name: "미들", stats: [50, 50, 10] }, { name: "라이트", stats: [40, 40, 20] }, { name: "페더", stats: [30, 30, 30] }] },
  { id: "STONEFACE-DRAGOON", type: "stoneface", name: "드래곤", jpName: "드라군", en: "Dragooon", tags: [], desc: "드래곤을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GARGOYLE", type: "stoneface", name: "가고일", jpName: "가골", en: "Gargole", tags: [], desc: "가고일을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GOREIM", type: "stoneface", name: "골렘", jpName: "고레임", en: "Goreim", tags: [], desc: "골렘을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GENBULL", type: "stoneface", name: "겐블", en: "Genbull", tags: [], desc: "겐블을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-BEGIRADOS", type: "stoneface", name: "베기라도스", en: "Begirados", tags: [], desc: "베기라도스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-BALRO", type: "stoneface", name: "발록", jpName: "발로", en: "Balro", tags: [], desc: "발록을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GIRAGO", type: "stoneface", name: "지라고", en: "Girago", tags: [], desc: "지라고를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-WYVANG", type: "stoneface", name: "와이번", en: "Wyvang", tags: [], desc: "와이번을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-PEGASIS", type: "stoneface", name: "페가시스", en: "Pegasis", tags: [], desc: "페가시스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-BAHAMDIA", type: "stoneface", name: "바함디아", en: "Bahamdia", tags: [], desc: "바함디아를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "CRYSTALWHEEL-WARRIORS", type: "crystalwheel", name: "워리어스", jpName: "사무라이", en: "Warriors", battleType: "attack", spin: "right", tags: [], desc: "가장자리의 날개로 적을 공격한다.", stats: [60, 0, 10] },
  { id: "CRYSTALWHEEL-SHINOBI", type: "crystalwheel", name: "시노비", en: "Shinobi", battleType: "balance", spin: "right", tags: [], desc: "4개의 날개가 균형있게 배치되어 지구력을 만들며 공격력도 뛰어나다.", stats: [30, 20, 20] },
  { id: "CRYSTALWHEEL-PIRATES", type: "crystalwheel", name: "파이레츠", en: "Pirates", battleType: "stamina", spin: "right", tags: [], desc: "갈고리 모양의 돌기가 방어력과 지구력을 상승시킨다.", stats: [10, 30, 30] },
  { id: "CRYSTALWHEEL-THIEF", type: "crystalwheel", name: "시프", en: "Thief", battleType: "attack", spin: "right", tags: [], desc: "줄지어 늘어선 칼날 모양이 원심력을 만들고 연타공격을 한다.", stats: [30, 10, 30] },
  { id: "CRYSTALWHEEL-GUARDIAN", type: "crystalwheel", name: "가디언", en: "Guardian", battleType: "defense", spin: "right", tags: [], desc: "방패를 둘러싼 파도 모양의 돌기가 적의 공격을 받아넘긴다.", stats: [10, 40, 20] },
  { id: "CRYSTALWHEEL-ARCHER", type: "crystalwheel", name: "아처", en: "Archer", battleType: "balance", spin: "right", tags: [], desc: "활과 화살의 형상으로 적의 공격을 방어, 기울어진 중심과 바람구멍이 예측불가능한 의외의 공격을 만든다.", stats: [40, 30, 0] },
  { id: "CRYSTALWHEEL-DARK-KNIGHT", type: "crystalwheel", name: "다크나이트", en: "Dark Knight", battleType: "attack", spin: "right", tags: [], desc: "방패의 톱니로 연타공격을 만들고 거대한 창으로 적을 제압한다.", stats: [50, 10, 10] },
  { id: "CRYSTALWHEEL-BANDID", type: "crystalwheel", name: "반디드", en: "Bandid", battleType: "defense", spin: "right", tags: [], desc: "바깥쪽으로 향해 있는 경사면이 적의 공격을 받아넘긴다.", stats: [10, 50, 10] },
  { id: "CRYSTALWHEEL-BERSERKER", type: "crystalwheel", name: "버서커", en: "Berserker", battleType: "stamina", spin: "right", tags: [], desc: "양끝에 배치된 철구슬과 쇠사슬이 바깥중심이 되어 원심력을 강화한다.", stats: [30, 0, 40] },
  { id: "CRYSTALWHEEL-GLADIATOR", type: "crystalwheel", name: "글레디에이터", en: "Gladiator", battleType: "attack", spin: "right", tags: [], desc: "사방으로 향하는 검이 회전함으로써 공격과 방어를 하나로 묶는다.", stats: [30, 20, 10] },
  { id: "CHROMEWHEEL-IFRAID", type: "chromewheel", name: "이프레이드", en: "Ifraid", battleType: "attack", spin: "right", tags: [], desc: "커다란 2개의 날개로 연타공격을 한다.", stats: [50, 10, 10] },
  { id: "CHROMEWHEEL-SARAMANDA", type: "chromewheel", name: "사라만다", en: "Saramanda", battleType: "balance", spin: "right", tags: [], desc: "지느러미 모양의 돌기가 폭풍과 같은 연타공격을 가한다.", stats: [40, 20, 10] },
  { id: "CHROMEWHEEL-OROJYA", type: "chromewheel", name: "오로자", en: "Orojya", battleType: "stamina", spin: "right", tags: [], desc: "6마리의 뱀을 형상화한 휠의 끝부분이 바깥중심이 되어 강한 원심력을 만든다.", stats: [10, 20, 40] },
  { id: "CHROMEWHEEL-PHOENIC", type: "chromewheel", name: "피닉", en: "Phoenic", battleType: "attack", spin: "right", tags: [], desc: "3개의 큰 날개로 강력한 공격을 만들어낸다.", stats: [40, 20, 10] },
  { id: "CHROMEWHEEL-REVIZER", type: "chromewheel", name: "리바이저", en: "Revizer", battleType: "defense", spin: "right", tags: [], desc: "휠 바깥둘레의 매끄러운 높은 벽으로 적의 공격을 받아넘겨 방어한다.", stats: [10, 40, 20] },
  { id: "CHROMEWHEEL-GRYPH", type: "chromewheel", name: "그리프", en: "Gryph", battleType: "balance", spin: "right", tags: [], desc: "5개의 날개로 강습연타공격이 가능하고 동시에 방어력이 뛰어난 휠.", stats: [35, 35, 0] },
  { id: "CHROMEWHEEL-KILLERKEN", type: "chromewheel", name: "크라켄", en: "Killerken", battleType: "defense", spin: "right", tags: [], desc: "8개의 커다란 다리가 테두리에 위치하여 적의 공격으로부터 몸체를 보호한다.", stats: [10, 50, 10] },
  { id: "CHROMEWHEEL-DRAGOOON", type: "chromewheel", name: "드래곤", jpName: "드라군", en: "Dragooon", battleType: "attack", spin: "right", tags: [], desc: "중심이 기울어지도록 배치된 3마리의 용이 연타공격을 만들어내고, 적의 회전력을 약화시킨다.", stats: [60, 5, 5] },
  { id: "CHROMEWHEEL-GARGOLE", type: "chromewheel", name: "가고일", jpName: "가골", en: "Gargole", battleType: "attack", spin: "right", tags: [], desc: "좌우의 날개에 있는 틈 사이로 바람을 일으켜 회전력이 상승하고 회전공격을 퍼붓는다.", stats: [40, 10, 20] },
  { id: "CHROMEWHEEL-GOREIM", type: "chromewheel", name: "골렘", jpName: "고레임", en: "Goreim", battleType: "defense", spin: "right", tags: [], desc: "갑옷으로 둘러싸인 몸체와 사다리 모양의 휠이 철벽방어를 자랑한다.", stats: [10, 40, 20] },
  { id: "CHROMEWHEEL-BEGIRADOS", type: "chromewheel", name: "베기라도스", en: "Begirados", battleType: "stamina", spin: "right", tags: [], desc: "강력한 원심력과 지구력을 자랑한다.", stats: [20, 10, 40] },
  { id: "CHROMEWHEEL-GENBULL", type: "chromewheel", name: "겐블", en: "Genbull", battleType: "stamina", spin: "right", tags: [], desc: "강고한 대칭의 등껍질이 원심력을 만들어내 지구력을 더한다.", stats: [10, 20, 40] },
  { id: "CHROMEWHEEL-BALRO", type: "chromewheel", name: "발록", jpName: "발로", en: "Balro", battleType: "balance", spin: "right", tags: [], desc: "", stats: [30, 30, 10] },
  { id: "CHROMEWHEEL-GIRAGO", type: "chromewheel", name: "지라고", en: "Girago", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "CHROMEWHEEL-WYVANG", type: "chromewheel", name: "와이번", en: "Wyvang", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [0, 20, 50] },
  { id: "CHROMEWHEEL-PEGASIS", type: "chromewheel", name: "페가시스", en: "Pegasis", battleType: "attack", spin: "right", tags: [], desc: "3장의 크게 튀어나온 날개로 강렬한 공격을 연달아 가하고 적을 추격한다.", stats: [60, 10, 0] },
  { id: "CHROMEWHEEL-BAHAMDIA", type: "chromewheel", name: "바함디아", en: "Bahamdia", battleType: "balance", spin: "right", tags: [], desc: "베이 사상 최대급 직경을 가진 크롬휠. 막강한 원심력을 무기로 상대에게 달려든다.", stats: [30, 10, 30] },
  { id: "TRACK-105", type: "track", name: "105", en: "105", tags: [], desc: "10.5mm 높이의 트랙. 아래에서의 어퍼공격이 가능하다.", stats: [10, 4, 5] },
  { id: "TRACK-145", type: "track", name: "145", en: "145", tags: [], desc: "14.5mm 높이의 트랙. 위에서의 스매시공격이 가능하다.", stats: [4, 12, 9] },
  { id: "TRACK-CLAW-145", type: "track", name: "C145", en: "Claw 145", sub: "클로145", tags: [], desc: "자유롭게 움직이는 발톱이 회전력에 의해 펼쳐지며 원심력을 증가시킨다.", stats: [3, 15, 8] },
  { id: "TRACK-HORN-145", type: "track", name: "H145", en: "Horn 145", sub: "혼145", tags: [], desc: "4개의 날카로운 톱날이 낮은 위치의 적을 공격하고 6개의 평평한 톱날이 적의 공격을 효율적으로 방어한다.", stats: [12, 7, 5] },
  { id: "TRACK-125", type: "track", name: "125", en: "125", tags: [], desc: "12.5mm 높이의 트랙. 위와 아래 양방향으로 공격과 방어가 가능하다.", stats: [7, 8, 7] },
  { id: "TRACK-90", type: "track", name: "90", en: "90", tags: [], desc: "90mm 높이의 트랙. 극단적으로 낮은 위치에서의 공격이 가능하다.", stats: [12, 3, 4] },
  { id: "TRACK-DEFENSE-125", type: "track", name: "D125", en: "Defense 125", sub: "디펜스125", tags: [], desc: "측면에 있는 커다란 고리로 상대방이 밑에서 공격하는 것을 방어한다!", stats: [7, 9, 7] },
  { id: "TRACK-DOWN-FORCE-145", type: "track", name: "DF145", en: "Down Force 145", sub: "다운포스145", tags: [], desc: "4개의 날개가 다운포스를 발생시켜 지면에 강하게 접지하고 안정된 회전을 발휘한다.", stats: [5, 8, 12] },
  { id: "TRACK-100", type: "track", name: "100", en: "100", tags: [], desc: "10mm 높이의 트랙. 매우 낮은 위치에서 어퍼공격이 가능하다.", stats: [11, 4, 5] },
  { id: "TRACK-WIDE-DEFENSE-145", type: "track", name: "WD145", en: "Wide Defense 145", sub: "와이드디펜스145", tags: [], desc: "돌기가 달린 3개의 날개가 측면에서의 공격을 보호한다.", stats: [4, 13, 8] },
  { id: "TRACK-CHANGE-HEIGHT-120", type: "track", name: "CH120", en: "Change Height 120", sub: "체인지하이트120", tags: [], desc: "휠, 버텀과 조합한 상태로 배틀 상황에 따라 120과 145의 높이를 조절할 수 있다.", stats: [8, 8, 8] },
  { id: "TRACK-ETERNAL-DEFENSE-145", type: "track", name: "ED145", en: "Eternal Defense 145", sub: "이터널디펜스145", tags: [], desc: "자유롭게 회전하는 방패가 밑에서의 공격을 받아넘겨서 충격을 완화시킨다.", stats: [4, 14, 8] },
  { id: "TRACK-TORNADO-125", type: "track", name: "T125", en: "Tornado 125", sub: "토네이도125", tags: [], desc: "다운포스와 원심력이 균형있게 조화되어 낮은 위치에서 적을 공격한다.", stats: [5, 7, 12] },
  { id: "TRACK-MOVEMENT-145", type: "track", name: "M145", en: "Movement 145", sub: "무브먼트145", tags: [], desc: "축의 중심을 어긋나게 하여 불규칙한 움직임으로 점프공격을 한다.", stats: [12, 4, 5] },
  { id: "TRACK-135", type: "track", name: "135", en: "135", tags: [], desc: "13.5mm 높이의 트랙. 위에서의 스매시공격에 유리하면서도 균형이 잡혀 있다.", stats: [6, 9, 8] },
  { id: "TRACK-GRAVITY-BALL-145", type: "track", name: "GB145", en: "Gravity Ball 145", sub: "그라비티볼145", tags: [], desc: "고속회전시 쇠구슬이 바깥쪽으로 이동하여 강력한 원심력을 만들고, 저속회전시 안쪽으로 이동하여 회전력을 발생시킨다.", stats: [4, 15, 9] },
  { id: "TRACK-SWITCH-145", type: "track", name: "SW145", en: "Switch 145", sub: "스위치145", tags: [], desc: "날개의 윗면과 아랫면을 뒤집으면 공격과 방어의 2가지 타입으로 전환된다.", stats: [8, 8, 8] },
  { id: "TRACK-85", type: "track", name: "85", en: "85", tags: [], desc: "지면에 달라붙은 초저중심 트랙으로 어퍼공격이 가능하다.", stats: [12, 3, 4] },
  { id: "TRACK-WING-105", type: "track", name: "W105", en: "Wing 105", sub: "윙105", tags: [], desc: "낮은 중심으로 다운포스를 가능하게 하여 접지력을 향상시킨다.", stats: [7, 7, 8] },
  { id: "TRACK-WING-ATTACK-130", type: "track", name: "WA130", en: "Wing Attack 130", sub: "윙어택130", tags: [], desc: "자유롭게 회전하는 날개가 낮은 위치의 적에게 공격을 한다.", stats: [11, 5, 6] },
  { id: "TRACK-RUBBER-145", type: "track", name: "R145", en: "Rubber 145", sub: "러버145", tags: [], desc: "고무 소재의 날개가 적의 공격을 흡수하여 피해를 줄여준다.", stats: [4, 14, 7] },
  { id: "TRACK-ARMOR-DEFENSE-145", type: "track", name: "AD145", en: "Armor Defense 145", sub: "아머디펜스145", tags: [], desc: "갑옷으로 감싸져 있어 상대의 공격에도 피해를 쉽게 받지 않는다.", stats: [4, 14, 8] },
  { id: "TRACK-SHIELD-130", type: "track", name: "S130", en: "Shield 130", sub: "실드130", tags: [], desc: "저중심인 동시에 옆으로 뻗은 방패로 적의 공격을 효과적으로 방어한다.", stats: [5, 13, 7] },
  { id: "TRACK-VARIABLE-145", type: "track", name: "V145", en: "Variable 145", sub: "베리어블145", tags: [], desc: "날개의 각도를 전환하여 공격과 방어를 전환할 수 있다.", stats: [8, 8, 8] },
  { id: "TRACK-LEFT-WING-105", type: "track", name: "LW105", en: "Left Wing 105", sub: "레프트윙105", tags: [], desc: "3개의 날개를 갖고 있는 낮은 중심의 트랙으로 좌회전시 다운포스를 발휘한다.", stats: [7, 7, 8] },
  { id: "TRACK-TRIPLE-ROLLER-145", type: "track", name: "TR145", en: "Triple Roller 145", sub: "트리플롤러145", tags: [], desc: "", stats: [8, 8, 8] },
  { id: "TRACK-230", type: "track", name: "230", en: "230", tags: [], desc: "23mm 높이의 트랙. 휠이 직접적인 공격을 받지 않을 정도의 높이를 자랑한다.", stats: [3, 12, 10] },
  { id: "TRACK-130", type: "track", name: "130", en: "130", tags: [], desc: "13mm 높이의 트랙. 위에서 아래로 공격하는 스매시공격을 가한다.", stats: [8, 7, 7] },
  { id: "TRACK-DOWN-FORCE-105", type: "track", name: "DF105", en: "Down Force 105", sub: "다운포스105", tags: [], desc: "4개의 날개가 좌회전시 강력한 다운포스를 발생시킨다.", stats: [6, 7, 9] },
  { id: "TRACK-BOOST-DISK-145", type: "track", name: "BD145", en: "Boost Disk 145", sub: "부스트디스크145", tags: [], desc: "거대한 원형 부품이 적의 공격을 방어하면서 지구력을 증가시키고 휠과 합체할 수 있다!", stats: [4, 15, 10] },
  { id: "TRACK-UPPER-WING-145", type: "track", name: "UW145", en: "Upper Wing 145", sub: "어퍼윙145", tags: [], desc: "날개의 방향을 바꾸어 장착하면 공격과 방어의 2가지 타입으로 전환된다.", stats: [8, 8, 8] },
  { id: "TRACK-TRIPLE-HEIGHT-170", type: "track", name: "TH170", en: "Triple Height 170", sub: "트리플하이토이170", tags: [], desc: "배틀 상대에 따라 3단계로 높이를 조절한다.", stats: [0, 0, 0] },
  { id: "TRACK-WING-145", type: "track", name: "W145", en: "Wing 145", sub: "윙145", tags: [], desc: "강력한 다운포스를 발생시켜 안정된 자세를 유지한다.", stats: [0, 0, 0] },
  { id: "TRACK-160", type: "track", name: "160", en: "160", tags: [], desc: "16mm 높이의 트랙. 요철이 적은 표면으로 적의 공격을 막는다.", stats: [0, 0, 0] },
  { id: "TRACK-ELEVATOR-230", type: "track", name: "E230", en: "Elevator 230", sub: "엘리베이터230", tags: [], desc: "고리 부분이 위아래로 움직이며 회전 속도를 제어한다.", stats: [0, 0, 0] },
  { id: "TRACK-ARMOR-230", type: "track", name: "A230", en: "Armor 230", sub: "아머230", tags: [], desc: "휠의 공격을 방어하는 갑옷이 결합되어 직접타격에 잘 견딘다.", stats: [0, 0, 0] },
  { id: "TRACK-LEFT-WING-160", type: "track", name: "LW160", en: "Left Wing 160", sub: "레프트윙160", tags: [], desc: "6개의 큰 날개로 좌회전 공격에 유효한 다운포스를 만들어낸다.", stats: [0, 0, 0] },
  { id: "TRACK-SWITCH-ATTACK-165", type: "track", name: "SA165", en: "Switch Attack 165", sub: "스위치어택165", tags: [], desc: "트랙을 위아래로 결합하여 성능이 다른 2개의 공격방법으로 바꿀 수 있다.", stats: [0, 0, 0] },
  { id: "TRACK-FREE-230", type: "track", name: "F230", en: "Free 230", sub: "프리230", tags: [], desc: "자유롭게 회전하는 트랙이 버텀이 지닌 전체적인 지구력을 최대한으로 이끌어낸다.", stats: [0, 0, 0] },
  { id: "TRACK-STAMINA-RING-200", type: "track", name: "SR200", en: "Stamina Ring 200", sub: "스테미너링200", tags: [], desc: "두껍고 커다란 고리로 높은 원심력과 안정된 회전력을 만들어낸다.", stats: [0, 0, 0] },
  { id: "TRACK-SPIKE-230", type: "track", name: "SP230", en: "Spike 230", sub: "스파이크230", tags: [], desc: "발톱 모양의 돌기로 제동을 걸어 속도를 제어한다.", stats: [0, 0, 0] },
  { id: "BOTTOM-FLAT", type: "bottom", name: "F", en: "Flat", sub: "플랫", battleType: "attack", tags: [], desc: "축의 끝이 평평하여 기동력과 공격력이 뛰어나다.", stats: [50, 10, 10] },
  { id: "BOTTOM-SEMI-FLAT", type: "bottom", name: "SF", en: "Semi Flat", sub: "세미플랫", battleType: "balance", tags: [], desc: "공격력과 지구력을 균형있게 갖추고 있다.", stats: [30, 20, 20] },
  { id: "BOTTOM-SHARP", type: "bottom", name: "S", en: "Sharp", sub: "샤프", battleType: "stamina", tags: [], desc: "축의 끝이 뾰족하여 안전성이 높고 지구력이 뛰어나다.", stats: [10, 20, 40] },
  { id: "BOTTOM-DEFENSE", type: "bottom", name: "D", en: "Defense", sub: "디펜스", battleType: "defense", tags: [], desc: "공격을 받았을 때 잘 쓰러지지 않고 방어력이 뛰어나다.", stats: [10, 40, 20] },
  { id: "BOTTOM-WIDE-FLAT", type: "bottom", name: "WF", en: "Wide Flat", sub: "와이드플랫", battleType: "attack", tags: [], desc: "접지면적을 확대한 플랫 버텀. 격렬한 기동력과 공격력을 발휘한다.", stats: [50, 10, 10] },
  { id: "BOTTOM-BALL", type: "bottom", name: "B", en: "Ball", sub: "볼", battleType: "defense", tags: [], desc: "접지력이 강한 축의 끝을 가지고 있어서 밸런스와 방어력이 우수하다.", stats: [30, 30, 10], modelKey: "BO_B" },
  { id: "BOTTOM-BALL-SHARP", type: "bottom", name: "BS", en: "Ball Sharp", sub: "볼샤프", battleType: "stamina", tags: [], desc: "축의 끝부분이 뾰족하여 안전성이 높고 볼 형태로 되어 있어 방어력이 우수하다.", stats: [0, 30, 40], modes: [{ name: "일반", stats: [0, 30, 40] }, { name: "제로G", stats: [0, 50, 20] }] },
  { id: "BOTTOM-HOLE-FLAT", type: "bottom", name: "HF", en: "Hole Flat", sub: "홀플랫", battleType: "attack", tags: [], desc: "축의 끝에 구멍을 만들어 마찰저항을 줄이고 기동력과 공격력을 균형있게 갖추고 있다.", stats: [40, 0, 30] },
  { id: "BOTTOM-FLAT-SHARP", type: "bottom", name: "FS", en: "Flat Sharp", sub: "플랫샤프", battleType: "balance", tags: [], desc: "축의 끝이 凸 모양으로 되어 있어 스타디움 중심에서는 스테미너형이, 공격시에는 공격형이 되는 양면성을 지녔다.", stats: [30, 10, 30] },
  { id: "BOTTOM-RUBBER-FLAT", type: "bottom", name: "RF", en: "Rubber Flat", sub: "러버플랫", battleType: "attack", tags: [], desc: "고무 소재를 사용하여 기동력과 공격력을 극한으로 증대시켜 격렬하게 이동하며 공격한다.", stats: [50, 10, 10] },
  { id: "BOTTOM-WIDE-BALL", type: "bottom", name: "WB", en: "Wide Ball", sub: "와이드볼", battleType: "defense", tags: [], desc: "특대의 볼 형태로 강력한 공격에도 흔들리지 않으며 적의 공격을 막아낸다.", stats: [10, 50, 10] },
  { id: "BOTTOM-HOLE-FLAT-SHARP", type: "bottom", name: "HF/S", en: "Hole Flat Sharp", sub: "홀플랫샤프", battleType: "attack", tags: [], desc: "", stats: [40, 0, 30], modes: [{ name: "홀플랫 모드", stats: [40, 0, 30] }, { name: "샤프 모드", stats: [10, 20, 40] }] },
  { id: "BOTTOM-SEMI-DEFENSE", type: "bottom", name: "SD", en: "Semi Defense", sub: "세미디펜스", battleType: "defense", tags: [], desc: "방어력과 지구력을 균형있게 가지고 있다.", stats: [10, 30, 30] },
  { id: "BOTTOM-WIDE-DEFENSE", type: "bottom", name: "WD", en: "Wide Defense", sub: "와이드디펜스", battleType: "defense", tags: [], desc: "디펜스 버텀이 더욱 넓어져서 강한 공격에도 끄떡없이 견딘다.", stats: [0, 50, 20] },
  { id: "BOTTOM-ETERNAL-SHARP", type: "bottom", name: "ES", en: "Eternal Sharp", sub: "이터널샤프", battleType: "stamina", tags: [], desc: "축의 끝이 자유롭게 회전하여 접지면의 저항을 받지 않고 오랜 시간 회전력을 유지한다.", stats: [0, 20, 50] },
  { id: "BOTTOM-QUAKE", type: "bottom", name: "Q", en: "Quake", sub: "퀘이크", battleType: "attack", tags: [], desc: "작은 점프를 만들어내서 예측불허의 움직임이 가능하다.", stats: [70, 0, 0] },
  { id: "BOTTOM-METAL-SHARP", type: "bottom", name: "MS", en: "Metal Sharp", sub: "메탈샤프", battleType: "stamina", tags: [], desc: "축의 끝에 마찰저항이 낮은 금속 소재를 사용하여 최소의 마찰저항으로 강한 지구력을 가진다.", stats: [0, 10, 70] },
  { id: "BOTTOM-JOG-BALL", type: "bottom", name: "JB", en: "Jog Ball", sub: "조그볼", battleType: "defense", tags: [], desc: "울퉁불퉁한 곳에서 더욱 강한 와이드볼 버텀. 스타디움과 한몸이 되어 튕겨내기 어렵다.", stats: [10, 45, 5] },
  { id: "BOTTOM-EXTREME-FLAT", type: "bottom", name: "XF", en: "Extreme Flat", sub: "익스트림플랫", battleType: "attack", tags: [], desc: "접지면적을 확대한 플랫 버텀. 격렬한 기동력과 공격력을 발휘한다.", stats: [60, 10, 0] },
  { id: "BOTTOM-RIGHT-RUBBER-FLAT", type: "bottom", name: "R²F", en: "Right Rubber Flat", sub: "라이트러버플랫", battleType: "attack", tags: [], desc: "회전방향과 반대로 돌출된 고무 돌기가 스타디움을 박차면서 우회전 시 초기동력과 공격력을 발휘한다.", stats: [60, 10, 0] },
  { id: "BOTTOM-COAT-SHARP", type: "bottom", name: "CS", en: "Coat Sharp", sub: "코트샤프", battleType: "attack", tags: [], desc: "고무로 코팅된 샤프축이 강력한 기동력과 지칠 줄 모르는 지구력을 발휘한다.", stats: [30, 10, 30] },
  { id: "BOTTOM-RUBBER-SHARP", type: "bottom", name: "RS", en: "Rubber Sharp", sub: "러버샤프", battleType: "defense", tags: [], desc: "끝이 뾰족하게 생긴 고무 소재의 버텀으로 마찰력이 높아 쉽게 튕겨나가지 않는다.", stats: [10, 50, 10] },
  { id: "BOTTOM-METAL-BALL", type: "bottom", name: "MB", en: "Metal Ball", sub: "메탈볼", battleType: "defense", tags: [], desc: "축의 끝에 무거운 금속 소재를 사용하여 안정성을 높이면서 마찰저항을 감소시킨다.", stats: [0, 50, 20] },
  { id: "BOTTOM-AROUND-SHARP", type: "bottom", name: "AS", en: "Around Sharp", sub: "어라운드샤프", battleType: "balance", tags: [], desc: "디펜스버텀의 경사 부분이 자유롭게 회전하여 넘어질 것 같아도 끈기있게 회전을 계속한다.", stats: [0, 30, 40] },
  { id: "BOTTOM-LEFT-FLAT", type: "bottom", name: "LF", en: "Left Flat", sub: "레프트플랫", battleType: "attack", tags: [], desc: "돌기가 스타디움을 박차면서 좌회전시 초기동력과 공격력을 발휘한다.", stats: [60, 10, 0] },
  { id: "BOTTOM-POLISH-DEFENSE", type: "bottom", name: "PD", en: "Polish Defense", sub: "포릿슈디펜스", battleType: "defense", tags: [], desc: "디펜스와 와이드디펜스 버텀의 중간 두께로, 윤활성이 높은 POM수지로 만들어져 지구력을 자랑하는 방어형 버텀.", stats: [0, 50, 20] },
  { id: "BOTTOM-FLAT-BALL", type: "bottom", name: "FB", en: "Flat Ball", sub: "플랫볼", battleType: "balance", tags: [], desc: "", stats: [30, 30, 10] },
  { id: "BOTTOM-RUBBER-SEMI-FLAT", type: "bottom", name: "RSF", en: "Rubber Semi Flat", sub: "러버세미플랫", battleType: "attack", tags: [], desc: "고무의 마찰력과 공격력을 유지하면서도 섬세한 회전으로 연타공격이 가능하다.", stats: [40, 20, 10] },
  { id: "BOTTOM-LEFT-RUBBER-FLAT", type: "bottom", name: "LRF", en: "Left Rubber Flat", sub: "레프트러버플랫", battleType: "attack", tags: [], desc: "회전방향과 반대로 돌출된 고무 돌기가 스타디움을 박차면서 좌회전시 초기동력과 공격력을 발휘한다.", stats: [60, 10, 0] },
  { id: "BOTTOM-DEFENSE-SHARP", type: "bottom", name: "DS", en: "Defense Sharp", sub: "디펜스샤프", battleType: "stamina", tags: [], desc: "디펜스 축의 모양을 한 샤프 축으로 지구력이 뛰어나고 방어력이 우수하다.", stats: [5, 25, 40] },
  { id: "BOTTOM-ETERNAL-WIDE-DEFENSE", type: "bottom", name: "EWD", en: "Eternal Wide Defense", sub: "이터널와이드디펜스", battleType: "stamina", tags: [], desc: "중앙이 자유롭게 회전하는 버텀으로 강력한 지구력과 방어력을 발휘한다.", stats: [0, 30, 50] },
  { id: "BOTTOM-METAL-FLAT", type: "bottom", name: "MF", en: "Metal Flat", sub: "메탈플랫", battleType: "attack", tags: [], desc: "기동력 있는 플랫축에 마찰저항이 낮은 금속 소재를 사용하여 지구력도 겸비하고 있다.", stats: [50, 0, 20] },
  { id: "4DBOTTOM-FINAL-DRIVE", type: "4dbottom", name: "F:D", en: "Final Drive", sub: "파이널드라이브", battleType: "attack", tags: [], desc: "회전력이 떨어지면 세미플랫 축이 러버플랫 축으로 전환되어 급가속으로 회전한다.", stats: [60, 0, 10] },
  { id: "BOTTOM-WAVE-WIDE-DEFENSE", type: "bottom", name: "W²D", en: "Wave Wide Defense", sub: "웨이브와이드디펜스", battleType: "defense", tags: [], desc: "접지점의 끝이 점에 가까워서 지구력을 발휘하고 와이드디펜스 버텀에 가까운 모양으로 방어력이 뛰어나다.", stats: [0, 40, 30] },
  { id: "4DBOTTOM-FINAL-SURVIVE", type: "4dbottom", name: "F:S", en: "Final Survive", sub: "파이널서바이브", battleType: "attack", tags: [], desc: "홀플랫 축으로 격렬하게 회전하다가 적과 부딪히면 샤프 축으로 전환하여 지구력을 높인다.", stats: [40, 0, 30] },
  { id: "BOTTOM-ETERNAL-DEFENSE-SHARP", type: "bottom", name: "EDS", en: "Eternal Defense Sharp", sub: "이터널디펜스샤프", battleType: "stamina", tags: [], desc: "중앙이 자유롭게 회전하는 디펜스 축의 넓이를 가진 샤프 축.", stats: [0, 20, 50] },
  { id: "4DBOTTOM-DELTA-DRIVE", type: "4dbottom", name: "D:D", en: "Delta Drive", sub: "델타드라이브", battleType: "balance", tags: [], desc: "축의 끝이 방어, 지구, 공격의 3가지 모드로 전환된다.", stats: [30, 30, 20] },
  { id: "BOTTOM-RUBBER-BALL", type: "bottom", name: "RB", en: "Rubber Ball", sub: "러버볼", battleType: "stamina", tags: [], desc: "돔 모양의 형태와 고무의 마찰력으로 쉽게 쓰러지거나 튕겨나가지 않아 방어력이 뛰어나다.", stats: [20, 50, 0] },
  { id: "4DBOTTOM-BEARING-DRIVE", type: "4dbottom", name: "B:D", en: "Bearing Drive", sub: "베어링드라이브", battleType: "stamina", tags: [], desc: "자유롭게 회전하는 축 안에 베어링을 내장함으로써 마찰을 최소화시켜 최강의 지구력을 발휘한다.", stats: [0, 10, 60] },
  { id: "BOTTOM-RUBBER-DEFENSE-FLAT", type: "bottom", name: "RDF", en: "Rubber Defense Flat", sub: "러버디펜스플랫", battleType: "balance", tags: [], desc: "고무의 공격력은 유지한 채 방어력과 지구력을 동시에 겸비한 밸런스형 버텀.", stats: [20, 30, 20] },
  { id: "4DBOTTOM-X-DRIVE", type: "4dbottom", name: "X:D", en: "X Drive", sub: "엑스드라이브", battleType: "balance", tags: [], desc: "공격모드에서는 익스트림플랫과 샤프 축으로 전환되고, 극한의밸런스모드에서는 익스트림플랫, 스텔스세미디펜스, 샤프 축으로 자동 전환된다.", stats: [30, 20, 20] },
  { id: "BOTTOM-SHARP-WIDE-DEFENSE", type: "bottom", name: "SWD", en: "Sharp Wide Defense", sub: "샤프와이드디펜스", battleType: "balance", tags: [], desc: "와이드디펜스 버텀의 특징을 가지면서 샤프축으로 지구력을 높여 안정된 균형잡힌 파워를 가지고 있다.", stats: [10, 30, 30] },
  { id: "BOTTOM-CIRCLE-FLAT", type: "bottom", name: "CF", en: "Circle Flat", sub: "서클플랫", battleType: "attack", tags: [], desc: "플랫부분으로 평면을 달리고, 서클부분으로 경사면을 뛰어오르며 거침없이 회전한다.", stats: [50, 10, 10] },
  { id: "BOTTOM-GEAR-CIRCLE-FLAT", type: "bottom", name: "GCF", en: "Gear Circle Flat", sub: "기어서클플랫", battleType: "attack", tags: [], desc: "돌기가 있는 테두리 부분이 속도를 제어하는 역할을 한다.", stats: [40, 20, 10] },
  { id: "BOTTOM-SHARP-BALL", type: "bottom", name: "SB", en: "Sharp Ball", sub: "샤프볼", battleType: "defense", tags: [], desc: "쉽게 끌려다니거나 쓰러지지 않는 방어력을 자랑하는 버텀.", stats: [0, 40, 30] },
  { id: "BOTTOM-JOG-SHARP-BALL", type: "bottom", name: "JSB", en: "Jog Sharp Ball", sub: "조그샤프볼", battleType: "defense", tags: [], desc: "쉽게 쓰러지지 않는 샤프축에 요철이 결합되어 마찰력이 상승하고 방어력이 뛰어나다.", stats: [10, 50, 10] },
  { id: "BOTTOM-BLADE-SEMI-FLAT", type: "bottom", name: "BSF", en: "Blade Semi Flat", sub: "블레이드세미플랫", battleType: "attack", tags: [], desc: "격렬하게 회전하는 기동력을 가지면서 작은 회전을 잘 살린 연타공격이 가능하며 8개의 날개로 강력한 다운포스를 발생시킨다.", stats: [40, 15, 15] },
  { id: "BOTTOM-WIDE-SEMI-FLAT", type: "bottom", name: "WSF", en: "Wide Semi Flat", sub: "와이드세미플랫", battleType: "attack", tags: [], desc: "격렬하게 회전하는 기동성을 가지면서 스타디움을 크게 흔드는 연타공격이 가능하다.", stats: [40, 20, 10] },
  { id: "BOTTOM-TWIN-BALL", type: "bottom", name: "TB", en: "Twin Ball", sub: "트윈볼", battleType: "stamina", tags: [], desc: "두 개의 구가 기울어져도 균형을 잃지 않도록 하고 끈질긴 지구력을 발휘한다.", stats: [0, 30, 40] },
  { id: "BOTTOM-BIG-WIDE-DEFENSE", type: "bottom", name: "BWD", en: "Big Wide Defense", sub: "빅와이드디펜스", battleType: "stamina", tags: [], desc: "가장 넓은 디펜스 버텀으로 쉽게 쓰러지지 않고 강력한 지구력을 발휘한다.", stats: [20, 0, 50] },
  { id: "BOTTOM-GIGA-FLAT", type: "bottom", name: "GF", en: "Giga Flat", sub: "기가플랫", battleType: "attack", tags: [], desc: "기동력에 특화되어 위협적인 추진력을 발휘한다.", stats: [60, 10, 0] }
];

const globalSearch = document.querySelector("#globalSearchInput");
const globalSearchScope = document.querySelector("#globalSearchScope");
const overviewSearchScope = document.querySelector("#overviewSearchScope");
const unifiedSearch = document.querySelector(".unified-search");
const unifiedSearchHome = document.querySelector("#unifiedSearchHome");
const globalSearchScopeValue = () => globalSearchScope?.dataset.scope || "all";
const overviewSearchScopeValue = () => overviewSearchScope?.dataset.scope || "all";
const dropdownSummaryText = button => button?.dataset.summaryLabel || button?.textContent.trim() || "";
const setSearchScope = (dropdown, dataAttr, scope) => {
  if (!dropdown) return;
  const value = scope || "all";
  dropdown.dataset.scope = value;
  const activeButton = dropdown.querySelector(`button[${dataAttr}="${value}"]`);
  dropdown.querySelectorAll(`button[${dataAttr}]`).forEach(button => {
    button.classList.toggle("active", button === activeButton);
  });
  const label = dropdown.querySelector(".catalog-dropdown-value");
  if (label && activeButton) label.textContent = dropdownSummaryText(activeButton);
  dropdown.removeAttribute("open");
};
const setGlobalSearchScope = scope => setSearchScope(globalSearchScope, "data-global-search-scope", scope);
const setOverviewSearchScope = scope => setSearchScope(overviewSearchScope, "data-overview-search-scope", scope);
const overviewSearch = document.querySelector("#overviewSearchInput");
const syncSearchInputState = input => input?.classList.toggle("has-value", input.value.length > 0);
const setSearchInputValue = (input, value = "") => {
  if (!input) return;
  input.value = value;
  syncSearchInputState(input);
};
const clearSearchInputs = () => {
  setSearchInputValue(globalSearch, "");
  setSearchInputValue(overviewSearch, "");
};
const activeToyPanel = () => document.querySelector(".toy-panel.active");
const toTop = document.querySelector("#toTop");
const menuButton = document.querySelector("#menuButton");
const mobileDrawer = document.querySelector("#mobileDrawer");
const mobileDrawerClose = document.querySelector(".mobile-drawer-close");
const typeLabels = { bey: "베이", parts: "부품", tools: "장비", face: "페이스", wheel: "휠", clearwheel: "클리어휠", lightwheel: "라이트휠", metalwheel: "메탈휠", "4dclearwheel": "4D클리어휠", "4dmetalwheel": "4D메탈휠", track: "트랙", bottom: "버텀", "4dbottom": "4D버텀", stoneface: "스톤페이스", chromewheel: "크롬휠", crystalwheel: "크리스탈휠", bitchip: "비트칩", attackring: "어택링", weightdisk: "웨이트디스크", bladebase: "블레이드베이스", gear: "기어", layer: "레이어", disk: "디스크", driver: "드라이버", blade: "블레이드", ratchet: "래칫", bit: "비트" };
const tagLabels = {};
const structureLabels = { basic: "4단 구조 시스템", hybrid: "하이브리드 시스템", "4d": "4D 시스템", synchrome: "싱크롬 시스템" };
const structureTagDescriptions = {
  basic: "페이스, 휠, 트랙, 버텀으로 구성된다",
  hybrid: "휠을 2단으로 분리하여 윗면과 측면의 공격 패턴을 다양하게 조합할 수 있다",
  "4d": "메탈휠을 분할하여 모드 전환이 가능하며 트랙과 버텀을 융합하여 새로운 움직임을 실현한다",
  synchrome: "크롬휠끼리 합체시켜 중량을 크게 늘릴 수 있다"
};
const partTypeTagDescriptions = {
  face: "휠, 트랙, 버텀을 연결하여 본체를 고정하는 나사 역할을 한다",
  stoneface: "휠, 트랙, 버텀을 연결하여 본체를 고정하는 나사 역할을 한다",
  wheel: "베이의 공격력과 방어력을 결정한다",
  clearwheel: "베이의 공격력과 방어력을 결정한다",
  lightwheel: "베이의 공격력과 방어력을 결정한다",
  metalwheel: "베이의 공격력과 방어력을 결정한다",
  "4dclearwheel": "베이의 공격력과 방어력을 결정하며 금속 소재를 융합하여 중량이 높아졌다",
  "4dmetalwheel": "베이의 공격력과 방어력을 결정하며 여러 층으로 분할되어 모드 전환이 가능하다",
  chromewheel: "베이의 공격력과 방어력을 결정하며 크리스탈휠과 위치를 바꾸거나 크롬휠끼리 결합할 수 있다",
  crystalwheel: "베이의 공격력과 방어력을 결정하며 크롬휠과 위치를 바꿀 수 있다",
  track: "베이의 높이를 결정한다",
  bottom: "베이의 움직임을 결정한다",
  "4dbottom": "트랙과 버텀을 융합하여 새로운 움직임을 실현한다"
};
const battleTypeLabels = {
  classic: { attack: "공격형", defense: "방어형", stamina: "지구형", balance: "균형형" },
  modern: { attack: "어택형", defense: "디펜스형", stamina: "스태미나형", balance: "밸런스형" }
};
const battleTypeDescriptions = {
  classic: {
    attack: "공격에 특화되어 지구형에 유리하다",
    defense: "방어에 특화되어 공격형에 유리하다",
    stamina: "지구력이 높아 방어형에 유리하다",
    balance: "공격·방어·지구력을 고르게 갖추고 있다"
  },
  modern: { attack: "", defense: "", stamina: "", balance: "" }
};
const spinLabels = { right: "우회전", left: "좌회전", dual: "양회전" };
const spinDescriptions = {
  right: "시계 방향으로 회전한다",
  left: "반시계 방향으로 회전한다",
  dual: "좌우회전 모두 가능하다"
};
const heightClassLabels = { low: "낮은 높이", high: "높은 높이" };
const battleTypeLabelGroup = item => ["burst", "x"].includes(typeof item === "string" ? item : itemSeries(item)) ? "modern" : "classic";
const battleTypeLabel = (value, item) => battleTypeLabels[battleTypeLabelGroup(item)]?.[value] || value || "";
const battleTypeDescription = (value, item) => battleTypeDescriptions[battleTypeLabelGroup(item)]?.[value] || "";
const spinLabel = value => spinLabels[value] || value || "";
const spinDescription = value => spinDescriptions[value] || "";
const heightClassLabel = value => heightClassLabels[value] || value || "";
let resolvedCatalogItemType = "all";
let catalogItemTypeGroup = null;
let resolvedCatalogStructure = null;
let activeReleaseRegion = "kr";
let activeReleaseSeries = "metal fight";
let activeReleaseSort = { key: "release", direction: "asc" };
let activeReleaseQuery = "";
let selectedCatalogSeries = null;
let selectedCatalogKind = "";
let selectedCatalogSubtype = null;
let selectedCatalogBattleType = null;
let selectedCatalogSpin = null;
let selectedCatalogStructure = null;
const METAL_FIGHT_SERIES = "metal fight";
const isMetalFightSeries = series => series === METAL_FIGHT_SERIES;
const seriesPartFilters = {
  topblade: [
    { value: "bitchip", label: "비트칩" },
    { value: "attackring", label: "어택링" },
    { value: "weightdisk", label: "웨이트디스크" },
    { value: "bladebase", label: "블레이드베이스" },
    { value: "gear", label: "기어" }
  ],
  "metal fight": [
    { value: "face", label: "페이스" },
    { value: "wheel", label: "휠" },
    { value: "track", label: "트랙" },
    { value: "bottom", label: "버텀" }
  ],
  burst: [
    { value: "layer", label: "레이어" },
    { value: "disk", label: "디스크" },
    { value: "driver", label: "드라이버" }
  ],
  x: [
    { value: "blade", label: "블레이드" },
    { value: "ratchet", label: "래칫" },
    { value: "bit", label: "비트" }
  ]
};
const toolsSubtypeOptions = [
  { value: "런처", label: "런처" },
  { value: "그립", label: "그립" },
  { value: "스타디움", label: "스타디움" },
  { value: "기타", label: "기타" }
];
const catalogFilterOptions = {
  series: [
    { value: "", label: "전체", summaryLabel: "전체" },
    { value: "topblade", label: "탑블레이드" },
    { value: "metal fight", label: "메탈베이블레이드" },
    { value: "burst", label: "베이블레이드 버스트" },
    { value: "x", label: "베이블레이드 X" }
  ],
  kind: [
    { value: "", label: "전체", summaryLabel: "전체" },
    { value: "bey", label: "베이" },
    { value: "parts", label: "부품" },
    { value: "tools", label: "장비" }
  ],
  system: [
    { value: "", label: "전체", summaryLabel: "전체" },
    { value: "basic", label: "4단 구조" },
    { value: "hybrid", label: "하이브리드" },
    { value: "4d", label: "4D" },
    { value: "synchrome", label: "싱크롬" }
  ],
  type: [
    { value: "", label: "전체", summaryLabel: "전체" },
    { value: "attack", label: "공격형" },
    { value: "defense", label: "방어형" },
    { value: "stamina", label: "지구형" },
    { value: "balance", label: "균형형" }
  ],
  spin: [
    { value: "", label: "전체", summaryLabel: "전체" },
    { value: "right", label: "우회전" },
    { value: "left", label: "좌회전" },
    { value: "dual", label: "양회전" }
  ]
};
const catalogFilterDataAttrs = {
  series: "data-catalog-series",
  kind: "data-catalog-kind",
  subtype: "data-catalog-subtype",
  system: "data-catalog-system",
  type: "data-catalog-type",
  spin: "data-catalog-spin"
};
const catalogFilterOptionMarkup = (options, activeValue = "", dataAttr) => options.map(option => {
  const value = option.value || "";
  const summary = option.summaryLabel ? ` data-summary-label="${escapeAttributeValue(option.summaryLabel)}"` : "";
  return `<button type="button" class="ui-dropdown-item ${activeValue === value ? "active" : ""}" ${dataAttr}="${escapeAttributeValue(value)}"${summary}>${escapeHtml(option.label)}</button>`;
}).join("");
const catalogFilterOptionsFor = key => {
  if (key === "type") {
    return catalogFilterOptions.type.map(option => option.value ? { ...option, label: battleTypeLabel(option.value, selectedCatalogSeries || METAL_FIGHT_SERIES) } : option);
  }
  if (key === "spin") {
    return catalogFilterOptions.spin.map(option => option.value ? { ...option, label: spinLabel(option.value) } : option);
  }
  return catalogFilterOptions[key] || [];
};
const renderCatalogStaticFilterOptions = () => {
  Object.keys(catalogFilterOptions).forEach(key => {
    const options = catalogFilterOptionsFor(key);
    const dataAttr = catalogFilterDataAttrs[key];
    document.querySelectorAll(`#catalogDropdownFilters [data-filter-group="${key}"] .catalog-filter-options, #catalogDropdownFilters [data-filter-group="${key}"] .catalog-dropdown-menu, #catalogDropdownFilters [data-catalog-dependent="${key}"] .catalog-filter-options, #catalogDropdownFilters [data-catalog-dependent="${key}"] .catalog-dropdown-menu`).forEach(root => {
      root.innerHTML = catalogFilterOptionMarkup(options, "", dataAttr);
    });
  });
};

const productItems = [
{ id: "PRODUCT-BB-01", series: "metal fight", no: "BB-01", sale: "", releases: {
  kr: { no: "BB-01", name: "페가시스 105F", sale: "일반 판매", kind: "리미티드스타터세트", releaseDate: "2008-10", price: "17600", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-01-PEGASIS-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-01", name: "페가시스 105F", sale: "일반 판매", kind: "스타터", releaseDate: "2008-08-09", price: "1544", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-01-PEGASIS-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-02", series: "metal fight", no: "BB-02", sale: "", releases: {
  kr: { no: "BB-02", name: "불 125SF", sale: "일반 판매", kind: "리미티드스타터세트", releaseDate: "2008-10", price: "17600", composition: [{ name: "불 125SF", quantity: "1개", target: "BEY-BB-02-BULL-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-02", name: "불 125SF", sale: "일반 판매", kind: "스타터", releaseDate: "2008-08-09", price: "1544", composition: [{ name: "불 125SF", quantity: "1개", target: "BEY-BB-02-BULL-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-03", series: "metal fight", no: "BB-03", sale: "", releases: {
  kr: { no: "BB-03", name: "사지타리오 145S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "사지타리오 145S", quantity: "1개", target: "BEY-BB-03-SAGITTARIO-145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-03", name: "사지타리오 145S", sale: "일반 판매", kind: "스타터", releaseDate: "2008-08-09", price: "819", composition: [{ name: "사지타리오 145S", quantity: "1개", target: "BEY-BB-03-SAGITTARIO-145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-04", series: "metal fight", no: "BB-04", sale: "", releases: {
  kr: { no: "BB-04", name: "레온 145D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "레온 145D", quantity: "1개", target: "BEY-BB-04-LEONE-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-04", name: "레오네 145D", sale: "일반 판매", kind: "스타터", releaseDate: "2008-08-09", price: "819", composition: [{ name: "레오네 145D", quantity: "1개", target: "BEY-BB-04-LEONE-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-05", series: "metal fight", no: "BB-05", sale: "", releases: {
  kr: { no: "BB-05", name: "페가시스 145D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "페가시스 145D", quantity: "1개", target: "BEY-BB-05-PEGASIS-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-05", name: "페가시스 145D", sale: "일반 판매", kind: "부스터", releaseDate: "2008-08-09", price: "630", composition: [{ name: "페가시스 145D", quantity: "1개", target: "BEY-BB-05-PEGASIS-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-06", series: "metal fight", no: "BB-06", sale: "", releases: {
  kr: { no: "BB-06", name: "불 145S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "불 145S", quantity: "1개", target: "BEY-BB-06-BULL-145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-06", name: "불 145S", sale: "일반 판매", kind: "부스터", releaseDate: "2008-08-09", price: "630", composition: [{ name: "불 145S", quantity: "1개", target: "BEY-BB-06-BULL-145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-07", series: "metal fight", no: "BB-07", sale: "", releases: {
  kr: { no: "BB-07", name: "사지타리오 125SF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "사지타리오 125SF", quantity: "1개", target: "BEY-BB-07-SAGITTARIO-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-07", name: "사지타리오 125SF", sale: "일반 판매", kind: "부스터", releaseDate: "2008-08-09", price: "630", composition: [{ name: "사지타리오 125SF", quantity: "1개", target: "BEY-BB-07-SAGITTARIO-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-08", series: "metal fight", no: "BB-08", sale: "", releases: {
  kr: { no: "BB-08", name: "레온 105F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-10", price: "8000", composition: [{ name: "레온 105F", quantity: "1개", target: "BEY-BB-08-LEONE-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-08", name: "레오네 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2008-08-09", price: "630", composition: [{ name: "레오네 105F", quantity: "1개", target: "BEY-BB-08-LEONE-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-09", series: "metal fight", no: "BB-09", sale: "", releases: {
  kr: { no: "BB-09", name: "메탈스피드 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2008-10", price: "25600", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-09-PEGASIS-105F" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "공격형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-09", name: "페가시스 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2008-08-09", price: "3150", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-09-PEGASIS-105F" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "베이포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-10", series: "metal fight", no: "BB-10", sale: "", tools: "스타디움", releases: {
  kr: { no: "BB-10", name: "공격형 메탈파이트 스타디움", sale: "일반 판매", releaseDate: "2008-10", price: "6400", composition: [{ name: "공격형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-10", name: "베이스타디움 어택타입", sale: "일반 판매", releaseDate: "2008-08-09", price: "1260", composition: [{ name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-11", series: "metal fight", no: "BB-11", sale: "", releases: {
  kr: { no: "BB-11", name: "울프 D125B", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-12", price: "8000", composition: [{ name: "울프 D125B", quantity: "1개", target: "BEY-BB-11-WOLF-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-11", name: "볼프 D125B", sale: "일반 판매", kind: "스타터", releaseDate: "2008-09-18", price: "819", composition: [{ name: "볼프 D125B", quantity: "1개", target: "BEY-BB-11-WOLF-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-12", series: "metal fight", no: "BB-12", sale: "", releases: {
  kr: { no: "BB-12", name: "울프 105F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-12", price: "10400", composition: [{ name: "울프 105F", quantity: "1개", target: "BEY-BB-12-WOLF-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-12", name: "볼프 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2008-09-18", price: "630", composition: [{ name: "볼프 105F", quantity: "1개", target: "BEY-BB-12-WOLF-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-13", series: "metal fight", no: "BB-13", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-13", name: "랜덤부스터 Vol.1 시크릿 아리에스", sale: "일반 판매", kind: "부스터", releaseDate: "2008-09-18", price: "630", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-13-ARIES-125D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } }, beyPool: ["BEY-BB-13-ARIES-125D", "BEY-BB-13-SAGITTARIO-145F", "BEY-BB-13-BULL-105S", "BEY-BB-13-PEGASIS-145SF", "BEY-BB-13-LEONE-125S", "BEY-BB-13-SAGITTARIO-145SF", "BEY-BB-13-BULL-105D", "BEY-BB-13-PEGASIS-145F"] },
{ id: "PRODUCT-BB-14", series: "metal fight", no: "BB-14", sale: "", tools: "스타디움", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-14", name: "베이스타디움 밸런스타입", sale: "일반 판매", releaseDate: "2008-09-18", price: "1260", composition: [{ name: "밸런스형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-BALANCE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-15", series: "metal fight", no: "BB-15", sale: "", tools: "그립", releases: {
  kr: { no: "BB-15", name: "런처그립", sale: "일반 판매", releaseDate: "2008-12", price: "8000", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] },
  jp: { no: "BB-15", name: "런처그립", sale: "일반 판매", releaseDate: "2008-09-18", price: "525", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] } } },
{ id: "PRODUCT-BB-16", series: "metal fight", no: "BB-16", sale: "", tools: "기타", releases: {
  kr: { no: "BB-16", name: "포인터", sale: "일반 판매", releaseDate: "2008-12", price: "9600", composition: [{ name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }] },
  jp: { no: "BB-16", name: "베이포인터", sale: "일반 판매", releaseDate: "2008-09-18", price: "1050", composition: [{ name: "베이포인터", quantity: "1개", target: "TOOLS-POINTER" }] } } },
{ id: "PRODUCT-BB-17", series: "metal fight", no: "BB-17", sale: "", tools: "런처", releases: {
  kr: { no: "BB-17", name: "파워런처", sale: "일반 판매", releaseDate: "2008-12", price: "6400", composition: [{ name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-17", name: "베이런처", sale: "일반 판매", releaseDate: "2008-09-18", price: "630", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-18", series: "metal fight", no: "BB-18", sale: "", releases: {
  kr: { no: "BB-18", name: "리브라 DF145BS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-12", price: "10400", composition: [{ name: "리브라 DF145BS", quantity: "1개", target: "BEY-BB-18-LIBRA-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-18", name: "리브라 DF145BS", sale: "일반 판매", kind: "부스터", releaseDate: "2008-10-23", price: "630", composition: [{ name: "리브라 DF145BS", quantity: "1개", target: "BEY-BB-18-LIBRA-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-19", series: "metal fight", no: "BB-19", sale: "", tools: "스타디움", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-19", name: "베이스타디움 스태미나타입", sale: "일반 판매", releaseDate: "2008-10-23", price: "1365", composition: [{ name: "스테미너형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-STAMINA-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-20", series: "metal fight", no: "BB-20", sale: "", releases: {
  kr: { no: "BB-20", name: "메탈파이트 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2008-12", price: "44000", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-20-PEGASIS-105F" }, { name: "울프 D125B", quantity: "1개", target: "BEY-BB-20-WOLF-D125B" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "포인터", quantity: "2개", target: "TOOLS-POINTER" }, { name: "파워런처", quantity: "2개", target: "TOOLS-POWER-LAUNCHER" }, { name: "밸런스형 메탈파이트 스타디움", quantity: "1개", target: "TOOLS-BALANCE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-20", name: "베이 배틀 트라이 세트", sale: "일반 판매", kind: "세트", releaseDate: "2008-10-23", price: "5250", composition: [{ name: "페가시스 105F", quantity: "1개", target: "BEY-BB-20-PEGASIS-105F" }, { name: "볼프 D125B", quantity: "1개", target: "BEY-BB-20-WOLF-D125B" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "베이포인터", quantity: "2개", target: "TOOLS-POINTER" }, { name: "베이런처", quantity: "2개", target: "TOOLS-POWER-LAUNCHER" }, { name: "베이스타디움 밸런스타입", quantity: "1개", target: "TOOLS-BALANCE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] } } },
{ id: "PRODUCT-BB-21", series: "metal fight", no: "BB-21", sale: "", releases: {
  kr: { no: "BB-21", name: "파워커스터마이즈세트 공격형&밸런스형", sale: "일반 판매", kind: "세트", releaseDate: "2008-12", price: "24000", composition: [{ name: "페가시스 100HF", quantity: "1개", target: "BEY-BB-21-PEGASIS-100HF" }, { name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-21-AQUARIO-105F" }, { name: "울프 125SF", quantity: "1개", target: "BEY-BB-21-WOLF-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-21", name: "베이 개조 세트 어택&밸런스타입", sale: "일반 판매", kind: "세트", releaseDate: "2008-10-23", price: "2625", composition: [{ name: "페가시스 100HF", quantity: "1개", target: "BEY-BB-21-PEGASIS-100HF" }, { name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-21-AQUARIO-105F" }, { name: "볼프 125SF", quantity: "1개", target: "BEY-BB-21-WOLF-125SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-22", series: "metal fight", no: "BB-22", sale: "", releases: {
  kr: { no: "BB-22", name: "액션커스터마이즈세트 스테미너형&방어형", sale: "일반 판매", kind: "세트", releaseDate: "2008-12", price: "24000", composition: [{ name: "비르고 DF145BS", quantity: "1개", target: "BEY-BB-22-VIRGO-DF145BS" }, { name: "리브라 145S", quantity: "1개", target: "BEY-BB-22-LIBRA-145S" }, { name: "레온 D125B", quantity: "1개", target: "BEY-BB-22-LEONE-D125B" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "F 버텀", quantity: "1개", target: "BOTTOM-FLAT" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] },
  jp: { no: "BB-22", name: "베이 개조 세트 스태미나&디펜스타입", sale: "일반 판매", kind: "세트", releaseDate: "2008-10-23", price: "2625", composition: [{ name: "비르고 DF145BS", quantity: "1개", target: "BEY-BB-22-VIRGO-DF145BS" }, { name: "리브라 145S", quantity: "1개", target: "BEY-BB-22-LIBRA-145S" }, { name: "레오네 D125B", quantity: "1개", target: "BEY-BB-22-LEONE-D125B" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "F 버텀", quantity: "1개", target: "BOTTOM-FLAT" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] } } },
{ id: "PRODUCT-BB-23", series: "metal fight", no: "BB-23", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-23", name: "엘드라고 105F", sale: "일반 판매", kind: "스타터", releaseDate: "2008-12-25", price: "1344", composition: [{ name: "엘드라고 105F", quantity: "1개", target: "BEY-BB-23-L-DRAGO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] } } },
{ id: "PRODUCT-BB-24", series: "metal fight", no: "BB-24", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-24", name: "에스콜피오 WD145B", sale: "일반 판매", kind: "부스터", releaseDate: "2008-12-25", price: "630", composition: [{ name: "에스콜피오 WD145B", quantity: "1개", target: "BEY-BB-24-ESCOLPIO-WD145B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-25", series: "metal fight", no: "BB-25", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-25", name: "랜덤부스터 Vol.2 레전드 파이시즈", sale: "일반 판매", kind: "부스터", releaseDate: "2009-02-22", price: "630", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-25-PISCES-D125BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } }, beyPool: ["BEY-BB-25-PISCES-D125BS", "BEY-BB-25-AQUARIO-DF145SF", "BEY-BB-25-VIRGO-125BS", "BEY-BB-25-LIBRA-D125HF", "BEY-BB-25-AQUARIO-105B", "BEY-BB-25-VIRGO-100B", "BEY-BB-25-LIBRA-100F", "BEY-BB-25-BULL-DF145HF"] },
{ id: "PRODUCT-BB-26", series: "metal fight", no: "BB-26", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-26", name: "제미오스 DF145FS", sale: "일반 판매", kind: "부스터", releaseDate: "2009-02-22", price: "630", composition: [{ name: "제미오스 DF145FS", quantity: "1개", target: "BEY-BB-26-GEMIOS-DF145FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-27", series: "metal fight", no: "BB-27", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-27", name: "카프리코네 100HF", sale: "일반 판매", kind: "부스터", releaseDate: "2009-02-22", price: "630", composition: [{ name: "카프리코네 100HF", quantity: "1개", target: "BEY-BB-27-CAPRICORNE-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-28", series: "metal fight", no: "BB-28", sale: "", releases: {
  kr: { no: "BB-28", name: "스톰 페가시스 105RF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "12000", composition: [{ name: "스톰 페가시스 105RF", quantity: "1개", target: "BEY-BB-28-STORM-PEGASIS-105RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-28", name: "스톰 페가시스 105RF", sale: "일반 판매", kind: "스타터", releaseDate: "2009-03-28", price: "1260", composition: [{ name: "스톰 페가시스 105RF", quantity: "1개", target: "BEY-BB-28-STORM-PEGASIS-105RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-29", series: "metal fight", no: "BB-29", sale: "", releases: {
  kr: { no: "BB-29", name: "다크 울프 DF145FS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "다크 울프 DF145FS", quantity: "1개", target: "BEY-BB-29-DARK-WOLF-DF145FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-29", name: "다크 볼프 DF145FS", sale: "일반 판매", kind: "스타터", releaseDate: "2009-03-28", price: "1260", composition: [{ name: "다크 볼프 DF145FS", quantity: "1개", target: "BEY-BB-29-DARK-WOLF-DF145FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-30", series: "metal fight", no: "BB-30", sale: "", releases: {
  kr: { no: "BB-30", name: "로크 레온 145WB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "로크 레온 145WB", quantity: "1개", target: "BEY-BB-30-ROCK-LEONE-145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-30", name: "록 레오네 145WB", sale: "일반 판매", kind: "부스터", releaseDate: "2009-03-28", price: "682", composition: [{ name: "록 레오네 145WB", quantity: "1개", target: "BEY-BB-30-ROCK-LEONE-145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-30-1", series: "metal fight", no: "BB-30-1", sale: "", releases: {
  kr: { no: "BB-30-1", name: "로크 레온 145WB", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-12", price: "6400", composition: [{ name: "로크 레온 145WB", quantity: "1개", target: "BEY-BB-30-ROCK-LEONE-145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { status: "unreleased" }} },
{ id: "PRODUCT-BB-31", series: "metal fight", no: "BB-31", sale: "", releases: {
  kr: { no: "BB-31", name: "라이트블레이드 Vol.1", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-23", price: "3200", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-31-MAD-CANCER-CH120FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { no: "BB-31", name: "랜덤부스터 라이트 Vol.1", sale: "일반 판매", kind: "부스터", releaseDate: "2009-03-28", price: "367", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-31-MAD-CANCER-CH120FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-31-MAD-CANCER-CH120FS","BEY-BB-31-HEAT-PEGASIS-100WB", "BEY-BB-31-CLAY-WOLF-145FS", "BEY-BB-31-HEAT-WOLF-WD145SF", "BEY-BB-31-MAD-LEONE-145B", "BEY-BB-31-CLAY-LEONE-DF145WB", "BEY-BB-31-WIND-PEGASIS-DF145B", "BEY-BB-31-WIND-LEONE-D125HF"] },
{ id: "PRODUCT-BB-32", series: "metal fight", no: "BB-32", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-32", name: "하이브리드휠 대전 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-03-28", price: "3675", composition: [{ name: "스톰 페가시스 105RF", quantity: "1개", target: "BEY-BB-32-STORM-PEGASIS-105RF" }, { name: "다크 볼프 DF145FS", quantity: "1개", target: "BEY-BB-32-DARK-WOLF-DF145FS" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "2개", target: "TOOLS-POWER-LAUNCHER" }, { name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
{ id: "PRODUCT-BB-33", series: "metal fight", no: "BB-33", sale: "", releases: {
  kr: { no: "BB-33", name: "스퀘어형 베이스타디움", sale: "일반 판매", releaseDate: "2011-02", price: "6400", composition: [{ name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-33", name: "베이스타디움 와이드스퀘어타입", sale: "일반 판매", releaseDate: "2009-03-28", price: "1680", composition: [{ name: "베이스타디움 와이드스퀘어타입", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
{ id: "PRODUCT-BB-34", series: "metal fight", no: "BB-34", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-34", name: "라이트런처(오렌지)", sale: "일반 판매", releaseDate: "2009-03-28", price: "315", composition: [{ name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-35", series: "metal fight", no: "BB-35", sale: "", releases: {
  kr: { no: "BB-35", name: "플레임 사지타리오 C145S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "플레임 사지타리오 C145S", quantity: "1개", target: "BEY-BB-35-FLAME-SAGITTARIO-C145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-35", name: "플레임 사지타리오 C145S", sale: "일반 판매", kind: "부스터", releaseDate: "2009-04-25", price: "787", composition: [{ name: "플레임 사지타리오 C145S", quantity: "1개", target: "BEY-BB-35-FLAME-SAGITTARIO-C145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-36", series: "metal fight", no: "BB-36", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-36", name: "메탈페이스", sale: "일반 판매", releaseDate: "2009-04-25", price: "367", composition: [{ name: "메탈페이스", quantity: "2개", target: "FACE-METAL-FACE" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
{ id: "PRODUCT-BB-37", series: "metal fight", no: "BB-37", sale: "", releases: {
  kr: { no: "BB-37", name: "라이트블레이드 Vol.2", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-23", price: "3200", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-37-WIND-AQUARIO-100HF-S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { no: "BB-37", name: "랜덤부스터 라이트 Vol.2", sale: "일반 판매", kind: "부스터", releaseDate: "2009-05-23", price: "367", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-37-WIND-AQUARIO-100HF-S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-37-WIND-AQUARIO-100HF-S", "BEY-BB-37-CLAY-WOLF-105B", "BEY-BB-37-CLAY-SAGITTARIO-145B", "BEY-BB-37-HEAT-PEGASIS-DF145WB", "BEY-BB-37-HEAT-LEONE-D125FS", "BEY-BB-37-MAD-SAGITTARIO-DF145HF", "BEY-BB-37-MAD-LEONE-145FS", "BEY-BB-37-WIND-WOLF-WD145WB"] },
{ id: "PRODUCT-BB-38", series: "metal fight", no: "BB-38", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-38", name: "베이런처(아이언그레이)", sale: "일반 판매", releaseDate: "2009-05-23", price: "630", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-39", series: "metal fight", no: "BB-39", sale: "", releases: {
  kr: { no: "BB-39", name: "카라비나그립", sale: "일반 판매", releaseDate: "2009-09-23", price: "6400", composition: [{ name: "카라비나그립", quantity: "1개", target: "TOOLS-CARABINER-GRIP" }] },
  jp: { no: "BB-39", name: "카라비나그립", sale: "일반 판매", releaseDate: "2009-05-23", price: "630", composition: [{ name: "카라비나그립", quantity: "1개", target: "TOOLS-CARABINER-GRIP" }] }} },
{ id: "PRODUCT-BB-40", series: "metal fight", no: "BB-40", sale: "", releases: {
  kr: { no: "BB-40", name: "다크 불 H145SD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "다크 불 H145SD", quantity: "1개", target: "BEY-BB-40-DARK-BULL-H145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-40", name: "다크 불 H145SD", sale: "일반 판매", kind: "부스터", releaseDate: "2009-06-20", price: "682", composition: [{ name: "다크 불 H145SD", quantity: "1개", target: "BEY-BB-40-DARK-BULL-H145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-41", series: "metal fight", no: "BB-41", sale: "", releases: {
  kr: { no: "BB-41", name: "초공격형 베이스타디움", sale: "일반 판매", releaseDate: "2009-09-23", price: "6400", composition: [{ name: "초공격형 베이스타디움", quantity: "1개", target: "TOOLS-SUPER-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
  jp: { no: "BB-41", name: "베이스타디움 슈퍼어택타입", sale: "일반 판매", releaseDate: "2009-06-20", price: "1365", composition: [{ name: "베이스타디움 슈퍼어택타입", quantity: "1개", target: "TOOLS-SUPER-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
{ id: "PRODUCT-BB-42", series: "metal fight", no: "BB-42", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-42", name: "베이캐리어 웨이스트타입", sale: "일반 판매", releaseDate: "2009-06-20", price: "1050", composition: [{ name: "베이캐리어 웨이스트타입", quantity: "1개", target: "TOOLS-BEYCARRIER-WAIST" }] }} },
{ id: "PRODUCT-BB-43", series: "metal fight", no: "BB-43", sale: "", releases: {
  kr: { no: "BB-43", name: "라이트닝 엘드라고 100HF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "12000", composition: [{ name: "라이트닝 엘드라고 100HF", quantity: "1개", target: "BEY-BB-43-LIGHTNING-L-DRAGO-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] },
  jp: { no: "BB-43", name: "라이트닝 엘드라고 100HF", sale: "일반 판매", kind: "스타터", releaseDate: "2009-07-18", price: "1260", composition: [{ name: "라이트닝 엘드라고 100HF", quantity: "1개", target: "BEY-BB-43-LIGHTNING-L-DRAGO-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] }} },
{ id: "PRODUCT-BB-44", series: "metal fight", no: "BB-44", sale: "", releases: {
  kr: { no: "BB-44", name: "메탈블레이드&런처", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-44-STORM-PEGASIS-100RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-44", name: "랜덤부스터 Vol.3 스타더스트 페가시스", sale: "일반 판매", kind: "부스터", releaseDate: "2009-07-18", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-44-STORM-PEGASIS-100RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-44-STORM-PEGASIS-100RF", "BEY-BB-44-ROCK-WOLF-H145B", "BEY-BB-44-DARK-LEONE-C145B", "BEY-BB-44-FLAME-WOLF-H145S", "BEY-BB-44-STORM-SAGITTARIO-145SD", "BEY-BB-44-ROCK-BULL-WD145HF", "BEY-BB-44-DARK-SAGITTARIO-WD145SD", "BEY-BB-44-FLAME-BULL-105WB"] },
{ id: "PRODUCT-BB-45", series: "metal fight", no: "BB-45", sale: "", releases: {
  kr: { no: "BB-45", name: "라이트블레이드 Vol.3", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-23", price: "3200", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-45-CLAY-ARIES-ED145B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { no: "BB-45", name: "랜덤부스터 라이트 Vol.3", sale: "일반 판매", kind: "부스터", releaseDate: "2009-08-08", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-45-CLAY-ARIES-ED145B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BB-45-CLAY-ARIES-ED145B", "BEY-BB-45-CLAY-PEGASIS-145S", "BEY-BB-45-MAD-SAGITTARIO-C145SD", "BEY-BB-45-HEAT-BULL-D125WB", "BEY-BB-45-WIND-WOLF-H145D", "BEY-BB-45-HEAT-LEONE-H145S", "BEY-BB-45-MAD-BULL-C145HF", "BEY-BB-45-WIND-SAGITTARIO-100SD"] },
{ id: "PRODUCT-BB-46", series: "metal fight", no: "BB-46", sale: "", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-46", name: "베이스타디움 스탠다드타입", sale: "일반 판매", releaseDate: "2009-08-08", price: "2625", composition: [{ name: "베이스타디움 스탠다드타입", quantity: "1개", target: "TOOLS-STANDARD-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
{ id: "PRODUCT-BB-47", series: "metal fight", no: "BB-47", sale: "일반 판매", releases: {
  kr: { no: "BB-47", name: "어스 아쿠이라 145WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "어스 아쿠이라 145WD", quantity: "1개", target: "BEY-BB-47-EARTH-AQUILA-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-47", name: "어스 아쿠이라 145WD", sale: "일반 판매", kind: "스타터", releaseDate: "2009-09-19", price: "892", composition: [{ name: "어스 아쿠이라 145WD", quantity: "1개", target: "BEY-BB-47-EARTH-AQUILA-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
{ id: "PRODUCT-BB-47-1", series: "metal fight", no: "BB-47-1", sale: "일반 판매", releases: {
  kr: { no: "BB-47-1", name: "어스 아쿠이라 145WD", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-12", price: "6400", composition: [{ name: "어스 아쿠이라 145WD", quantity: "1개", target: "BEY-BB-47-EARTH-AQUILA-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { status: "unreleased" }} },
{ id: "PRODUCT-BB-48", series: "metal fight", no: "BB-48", sale: "", releases: {
  kr: { no: "BB-48", name: "플레임 리브라 T125ES", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-09-23", price: "8000", composition: [{ name: "플레임 리브라 T125ES", quantity: "1개", target: "BEY-BB-48-FLAME-LIBRA-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-48", name: "플레임 리브라 T125ES", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-19", price: "787", composition: [{ name: "플레임 리브라 T125ES", quantity: "1개", target: "BEY-BB-48-FLAME-LIBRA-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
{ id: "PRODUCT-BB-48-1", series: "metal fight", no: "BB-48-1", sale: "", releases: {
  kr: { no: "BB-48-1", name: "플레임 리브라 T125ES", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-12", price: "6400", composition: [{ name: "플레임 리브라 T125ES", quantity: "1개", target: "BEY-BB-48-FLAME-LIBRA-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-METAL-PERFECT-MASTER-SET", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "메탈 퍼펙트 마스터 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-09-23", price: "49600", composition: [{ name: "스톰 페가시스 105RF", quantity: "1개", target: "BEY-BB-28-STORM-PEGASIS-105RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "앵글컴파스", quantity: "1개", target: "TOOLS-ANGLE-COMPASS" }, { name: "공격형 베이스타디움", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }, { name: "캐리어케이스", quantity: "1개", target: "TOOLS-CARRIER-CASE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LAUNCHER-GRIP-ANGLE-COMPASS", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "런처그립&앵글컴퍼스", sale: "일반 판매", releaseDate: "2010-07", price: "8800", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "앵글컴파스", quantity: "1개", target: "TOOLS-ANGLE-COMPASS" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-49", series: "metal fight", no: "BB-49", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-49", name: "앵글컴파스", sale: "일반 판매", releaseDate: "2009-09-19", price: "525", composition: [{ name: "앵글컴파스", quantity: "1개", target: "TOOLS-ANGLE-COMPASS" }] }} },
  { id: "PRODUCT-BB-50", series: "metal fight", no: "BB-50", sale: "", releases: {
    kr: { no: "BB-50", name: "스톰 카프리콘 M145Q", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-12-06", price: "8000", composition: [{ name: "스톰 카프리콘 M145Q", quantity: "1개", target: "BEY-BB-50-STORM-CAPRICORNE-M145Q" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-50", name: "스톰 카프리코네 M145Q", sale: "일반 판매", kind: "부스터", releaseDate: "2009-10-24", price: "787", composition: [{ name: "스톰 카프리코네 M145Q", quantity: "1개", target: "BEY-BB-50-STORM-CAPRICORNE-M145Q" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-51", series: "metal fight", no: "BB-51", sale: "", releases: {
    kr: { no: "BB-51", name: "익스트림 스타디움 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-12-06", price: "46400", composition: [{ name: "로크 오르소 D125B", quantity: "1개", target: "BEY-BB-51-ROCK-ORSO-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "익스트림 베이스타디움", quantity: "1개", target: "TOOLS-EXTREME-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-51", name: "익스트림 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2009-10-24", price: "5775", composition: [{ name: "록 오르소 D125B", quantity: "1개", target: "BEY-BB-51-ROCK-ORSO-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "익스트림 베이스타디움", quantity: "1개", target: "TOOLS-EXTREME-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BB-52", series: "metal fight", no: "BB-52", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-52", name: "베이캐리어 하드타입", sale: "일반 판매", releaseDate: "2009-10-24", price: "1980", composition: [{ name: "베이캐리어 하드타입", quantity: "1개", target: "TOOLS-BEYCARRIER-HARD" }] }} },
  { id: "PRODUCT-BB-53", series: "metal fight", no: "BB-53", sale: "", releases: {
    kr: { no: "BB-53", name: "디지털파워런처 페가시스 Ver.", sale: "일반 판매", releaseDate: "2009-12-06", price: "28000", composition: [{ name: "디지털파워런처", quantity: "1개", target: "TOOLS-DIGITAL-POWER-LAUNCHER" }] },
    jp: { no: "BB-53", name: "디지털파워런처 페가시스 Ver.", sale: "일반 판매", releaseDate: "2009-11-14", price: "2100", composition: [{ name: "디지털파워런처", quantity: "1개", target: "TOOLS-DIGITAL-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-54", series: "metal fight", no: "BB-54", sale: "", releases: {
    kr: { no: "BB-54", name: "디지털파워런처 엘드라고 Ver.", sale: "일반 판매", releaseDate: "2009-12-06", price: "28000", composition: [{ name: "디지털파워런처", quantity: "1개", target: "TOOLS-DIGITAL-POWER-LAUNCHER" }] },
    jp: { no: "BB-54", name: "디지털파워런처 엘드라고 Ver.", sale: "일반 판매", releaseDate: "2009-11-14", price: "2100", composition: [{ name: "디지털파워런처", quantity: "1개", target: "TOOLS-DIGITAL-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-55", series: "metal fight", no: "BB-55", sale: "", releases: {
    kr: { no: "BB-55", name: "다크 캔서 CH120SF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2009-12-06", price: "8000", composition: [{ name: "다크 캔서 CH120SF", quantity: "1개", target: "BEY-BB-55-DARK-CANCER-CH120SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-55", name: "다크 캔서 CH120SF", sale: "일반 판매", kind: "부스터", releaseDate: "2009-11-21", price: "682", composition: [{ name: "다크 캔서 CH120SF", quantity: "1개", target: "BEY-BB-55-DARK-CANCER-CH120SF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-56", series: "metal fight", no: "BB-56", sale: "", releases: {
    kr: { no: "BB-56", name: "커스터마이즈 A&B 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-12-06", price: "24000", composition: [{ name: "다크 카프리콘 105RF", quantity: "1개", target: "BEY-BB-56-DARK-CAPRICORNE-105RF" }, { name: "키라 제미오스 DF145FS", quantity: "1개", target: "BEY-BB-56-KILLER-GEMIOS-DF145FS" }, { name: "스톰 아쿠아리오 M145Q", quantity: "1개", target: "BEY-BB-56-STORM-AQUARIO-M145Q" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
    jp: { no: "BB-56", name: "하이브리드휠 개조 세트 어택&밸런스타입", sale: "일반 판매", kind: "세트", releaseDate: "2009-11-21", price: "2100", composition: [{ name: "다크 카프리코네 105RF", quantity: "1개", target: "BEY-BB-56-DARK-CAPRICORNE-105RF" }, { name: "키라 제미오스 DF145FS", quantity: "1개", target: "BEY-BB-56-KILLER-GEMIOS-DF145FS" }, { name: "스톰 아쿠아리오 M145Q", quantity: "1개", target: "BEY-BB-56-STORM-AQUARIO-M145Q" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-56-D", series: "metal fight", no: "BB-56(D)", sale: "", releases: {
    kr: { no: "BB-56(D)", name: "다크 카프리콘 105RF", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-02", price: "6400", composition: [{ name: "다크 카프리콘 105RF", quantity: "1개", target: "BEY-BB-56-DARK-CAPRICORNE-105RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-56-K", series: "metal fight", no: "BB-56(K)", sale: "", releases: {
    kr: { no: "BB-56(K)", name: "키라 제미오스 DF145FS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-04-02", price: "8000", composition: [{ name: "키라 제미오스 DF145FS", quantity: "1개", target: "BEY-BB-56-KILLER-GEMIOS-DF145FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-56-S", series: "metal fight", no: "BB-56(S)", sale: "", releases: {
    kr: { no: "BB-56(S)", name: "스톰 아쿠아리오 M145Q", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-02", price: "6400", composition: [{ name: "스톰 아쿠아리오 M145Q", quantity: "1개", target: "BEY-BB-56-STORM-AQUARIO-M145Q" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-57", series: "metal fight", no: "BB-57", sale: "", releases: {
    kr: { no: "BB-57", name: "커스터마이즈 S&D 세트", sale: "일반 판매", kind: "세트", releaseDate: "2009-12-06", price: "24000", composition: [{ name: "플레임 리브라 DF145BS", quantity: "1개", target: "BEY-BB-57-FLAME-LIBRA-DF145BS" }, { name: "써멀 파이시즈 T125ES", quantity: "1개", target: "BEY-BB-57-THERMAL-PISCES-T125ES" }, { name: "로크 아리에스 145D", quantity: "1개", target: "BEY-BB-57-ROCK-ARIES-145D" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
    jp: { no: "BB-57", name: "하이브리드휠 개조 세트 스태미나&디펜스타입", sale: "일반 판매", kind: "세트", releaseDate: "2009-11-21", price: "2100", composition: [{ name: "플레임 리브라 DF145BS", quantity: "1개", target: "BEY-BB-57-FLAME-LIBRA-DF145BS" }, { name: "써멀 파이시즈 T125ES", quantity: "1개", target: "BEY-BB-57-THERMAL-PISCES-T125ES" }, { name: "록 아리에스 145D", quantity: "1개", target: "BEY-BB-57-ROCK-ARIES-145D" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-57-T", series: "metal fight", no: "BB-57(T)", sale: "", releases: {
    kr: { no: "BB-57(T)", name: "써멀 파이시즈 T125ES", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-04-02", price: "8000", composition: [{ name: "써멀 파이시즈 T125ES", quantity: "1개", target: "BEY-BB-57-THERMAL-PISCES-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-57-R", series: "metal fight", no: "BB-57(R)", sale: "", releases: {
    kr: { no: "BB-57(R)", name: "로크 아리에스 145D", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-02", price: "6400", composition: [{ name: "로크 아리에스 145D", quantity: "1개", target: "BEY-BB-57-ROCK-ARIES-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-METAL-FACE-SUSPENSION", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "메탈페이스&서스펜션", sale: "일반 판매", releaseDate: "2010-02-10", price: "9600", composition: [{ name: "메탈페이스", quantity: "4개", target: "FACE-METAL-FACE" }, { name: "홀더툴", quantity: "2개", target: "TOOLS-HOLDER-TOOL" }, { name: "파워런처 서스펜션", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-SUSPENSION" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-58", series: "metal fight", no: "BB-58", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-58", name: "베이런처 서스펜션", sale: "일반 판매", releaseDate: "2009-11-21", price: "315", composition: [{ name: "베이런처 서스펜션", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-SUSPENSION" }] }} },
  { id: "PRODUCT-BB-59", series: "metal fight", no: "BB-59", sale: "일반 판매", releases: {
    kr: { no: "BB-59", name: "번 피닉스 135MS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-02-10", price: "8000", composition: [{ name: "번 피닉스 135MS", quantity: "1개", target: "BEY-BB-59-BURN-PHOENIX-135MS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-59", name: "번 피닉스 135MS", sale: "일반 판매", kind: "스타터", releaseDate: "2009-12-26", price: "892", composition: [{ name: "번 피닉스 135MS", quantity: "1개", target: "BEY-BB-59-BURN-PHOENIX-135MS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-60", series: "metal fight", no: "BB-60", sale: "일반 판매", releases: {
    kr: { no: "BB-60", name: "어스 비르고 GB145BS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-02-10", price: "8000", composition: [{ name: "어스 비르고 GB145BS", quantity: "1개", target: "BEY-BB-60-EARTH-VIRGO-GB145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-60", name: "랜덤부스터 Vol.4 미라주 비르고", sale: "일반 판매", kind: "부스터", releaseDate: "2009-12-26", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-60-EARTH-VIRGO-GB145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-60-EARTH-VIRGO-GB145BS", "BEY-BB-60-EARTH-CANCER-DF145ES", "BEY-BB-60-FLAME-CAPRICORNE-T125HF", "BEY-BB-60-FLAME-AQUILA-100ES", "BEY-BB-60-ROCK-CAPRICORNE-T125D", "BEY-BB-60-ROCK-LIBRA-100WD", "BEY-BB-60-STORM-AQUILA-145HF", "BEY-BB-60-STORM-LIBRA-145S"] },
  { id: "PRODUCT-KR-LAUNCHER-GRIP-BLACK-GRIP-RUBBER-WHITE", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "런처그립(블랙)&그립러버(화이트)", sale: "일반 판매", releaseDate: "2010-02-10", price: "8800", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LAUNCHER-GRIP-WHITE-GRIP-RUBBER-RED", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "런처그립(화이트)&그립러버(레드)", sale: "일반 판매", releaseDate: "2010-02-10", price: "8800", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-61", series: "metal fight", no: "BB-61", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-61", name: "그립러버(레드)", sale: "일반 판매", releaseDate: "2009-12-26", price: "315", composition: [{ name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] }} },
  { id: "PRODUCT-BB-62", series: "metal fight", no: "BB-62", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-62", name: "그립러버(화이트)", sale: "일반 판매", releaseDate: "2009-12-26", price: "315", composition: [{ name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] }} },
  { id: "PRODUCT-BB-63", series: "metal fight", no: "BB-63", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-63", name: "그립러버(블랙)", sale: "일반 판매", releaseDate: "2009-12-26", price: "315", composition: [{ name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }] }} },
  { id: "PRODUCT-BB-64", series: "metal fight", no: "BB-64", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-64", name: "런처그립(화이트)", sale: "일반 판매", releaseDate: "2009-12-26", price: "525", composition: [{ name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-BB-65", series: "metal fight", no: "BB-65", sale: "", releases: {
    kr: { no: "BB-65", name: "로크 스콜피온 T125JB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-02-10", price: "8000", composition: [{ name: "로크 에스콜피오 T125JB", quantity: "1개", target: "BEY-BB-65-ROCK-ESCOLPIO-T125JB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-65", name: "록 에스콜피오 T125JB", sale: "일반 판매", kind: "부스터", releaseDate: "2010-01-23", price: "682", composition: [{ name: "록 에스콜피오 T125JB", quantity: "1개", target: "BEY-BB-65-ROCK-ESCOLPIO-T125JB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-66", series: "metal fight", no: "BB-66", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-66", name: "메탈페이스(레드)", sale: "일반 판매", releaseDate: "2010-01-23", price: "367", composition: [{ name: "메탈페이스", quantity: "2개", target: "FACE-METAL-FACE" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-67", series: "metal fight", no: "BB-67", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-67", name: "메탈페이스(건메탈릭)", sale: "일반 판매", releaseDate: "2010-01-23", price: "367", composition: [{ name: "메탈페이스", quantity: "2개", target: "FACE-METAL-FACE" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-68", series: "metal fight", no: "BB-68", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-68", name: "베이런처(메탈릭오렌지)", sale: "일반 판매", releaseDate: "2010-01-23", price: "630", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-69", series: "metal fight", no: "BB-69", sale: "", releases: {
    kr: { no: "BB-69", name: "포이즌 서펜트 SW145SD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-02-10", price: "8000", composition: [{ name: "포이즌 서펜트 SW145SD", quantity: "1개", target: "BEY-BB-69-POISON-SERPENT-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-69", name: "포이즌 서펜트 SW145SD", sale: "일반 판매", kind: "스타터", releaseDate: "2010-02-13", price: "892", composition: [{ name: "포이즌 서펜트 SW145SD", quantity: "1개", target: "BEY-BB-69-POISON-SERPENT-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-70", series: "metal fight", no: "BB-70", sale: "", releases: {
    kr: { no: "BB-70", name: "갤럭시 페가시스 W105R²F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-07-30", price: "9600", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-70", name: "갤럭시 페가시스 W105R²F", sale: "일반 판매", kind: "스타터", releaseDate: "2010-04-01", price: "1680", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "베이포인트카드", quantity: "1장", target: "TOOLS-BEYPOINT-CARD" }] }} },
  { id: "PRODUCT-BB-70R2", series: "metal fight", no: "BB-70R2", sale: "", releases: {
    kr: { no: "BB-70R2", name: "갤럭시 페가시스 W105R²F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-71", series: "metal fight", no: "BB-71", sale: "", releases: {
    kr: { no: "BB-71", name: "레이 유니콘 D125CS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-07-30", price: "9600", composition: [{ name: "레이 유니콘 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
    jp: { no: "BB-71", name: "레이 유니코르노 D125CS", sale: "일반 판매", kind: "스타터", releaseDate: "2010-04-01", price: "1680", composition: [{ name: "레이 유니코르노 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "베이포인트카드", quantity: "1장", target: "TOOLS-BEYPOINT-CARD" }] }} },
  { id: "PRODUCT-BB-71R2", series: "metal fight", no: "BB-71R2", sale: "", releases: {
    kr: { no: "BB-71R2", name: "레이 유니콘 D125CS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "레이 유니콘 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-72", series: "metal fight", no: "BB-72", sale: "", releases: {
    kr: { no: "BB-72", name: "아쿠아리오 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-30", price: "6400", composition: [{ name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-72-AQUARIO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "BB-72", name: "아쿠아리오 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-01", price: "682", composition: [{ name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-72-AQUARIO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-73", series: "metal fight", no: "BB-73", sale: "", releases: {
    kr: { no: "BB-73", name: "베이카드 런처그립", sale: "일반 판매", releaseDate: "2011-01-13", price: "6400", composition: [{ name: "베이카드 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }] },
    jp: { no: "BB-73", name: "3세그 런처그립", sale: "일반 판매", releaseDate: "2010-04-01", price: "577", composition: [{ name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-KR-PEGASIS-BEYCARD-SET", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "페가시스 베이카드 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-30", price: "20800", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "베이카드 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }, { name: "베이카드", quantity: "5장", target: "TOOLS-BEYCARD" }, { name: "페가시스 장갑", quantity: "1켤레", target: "TOOLS-PEGASIS-GLOVE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LDRAGO-CHARACTER-CARD-SET", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "엘드라고 캐릭터카드 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-30", price: "20800", composition: [{ name: "메테오 엘드라고 LW105LF", quantity: "1개", target: "BEY-BB-88-METEO-L-DRAGO-LW105LF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "베이카드 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }, { name: "캐릭터카드", quantity: "5장", target: "TOOLS-CHARACTER-CARD" }, { name: "엘드라고 손목밴드", quantity: "1켤레", target: "TOOLS-LDRAGO-WRISTBAND" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-74", series: "metal fight", no: "BB-74", sale: "", releases: {
    kr: { no: "BB-74", name: "써멀 라체르타 WA130HF", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-30", price: "6400", composition: [{ name: "써멀 라체르타 WA130HF", quantity: "1개", target: "BEY-BB-74-THERMAL-LACERTA-WA130HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "BB-74", name: "써멀 라체르타 WA130HF", sale: "일반 판매", kind: "부스터", releaseDate: "2010-04-24", price: "787", composition: [{ name: "써멀 라체르타 WA130HF", quantity: "1개", target: "BEY-BB-74-THERMAL-LACERTA-WA130HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-74R2", series: "metal fight", no: "BB-74R2", sale: "", releases: {
    kr: { no: "BB-74R2", name: "써멀 라체르타 WA130HF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "써멀 라체르타 WA130HF", quantity: "1개", target: "BEY-BB-74-THERMAL-LACERTA-WA130HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-75", series: "metal fight", no: "BB-75", sale: "", releases: {
    kr: { no: "BB-75", name: "베이블레이드 덱 엔트리 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-07-30", price: "24000", composition: [{ name: "로크 오르소 ED145D", quantity: "1개", target: "BEY-BB-75-ROCK-ORSO-ED145D" }, { name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-75-GALAXY-PEGASIS-W105R2F" }, { name: "어스 비르고 T125ES", quantity: "1개", target: "BEY-BB-75-EARTH-VIRGO-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] },
    jp: { no: "BB-75", name: "베이블레이드 덱 엔트리 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-04-24", price: "2625", composition: [{ name: "록 오르소 ED145D", quantity: "1개", target: "BEY-BB-75-ROCK-ORSO-ED145D" }, { name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-75-GALAXY-PEGASIS-W105R2F" }, { name: "어스 비르고 T125ES", quantity: "1개", target: "BEY-BB-75-EARTH-VIRGO-T125ES" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] }} },
  { id: "PRODUCT-BB-76", series: "metal fight", no: "BB-76", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-76", name: "갤럭시 페가시스 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-04-24", price: "3780", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-76-GALAXY-PEGASIS-W105R2F" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "베이포인트카드", quantity: "1개", target: "TOOLS-BEYPOINT-CARD" }, { name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }, { name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BB-77", series: "metal fight", no: "BB-77", sale: "", releases: {
    kr: { no: "BB-77", name: "베이 덱 케이스", sale: "일반 판매", releaseDate: "2011-05-18", price: "2000", composition: [{ name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] },
    jp: { no: "BB-77", name: "베이 덱 케이스", sale: "일반 판매", releaseDate: "2010-04-24", price: "525", composition: [{ name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] }} },
  { id: "PRODUCT-BB-78", series: "metal fight", no: "BB-78", sale: "", releases: {
    kr: { no: "BB-78", name: "로크 기라프 R145WB", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07", price: "6400", composition: [{ name: "로크 기라프 R145WB", quantity: "1개", target: "BEY-BB-78-ROCK-GIRAFFE-R145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "BB-78", name: "록 기라프 R145WB", sale: "일반 판매", kind: "부스터", releaseDate: "2010-05-22", price: "787", composition: [{ name: "록 기라프 R145WB", quantity: "1개", target: "BEY-BB-78-ROCK-GIRAFFE-R145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BB-78R2", series: "metal fight", no: "BB-78R2", sale: "", releases: {
    kr: { no: "BB-78R2", name: "로크 기라프 R145WB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "로크 기라프 R145WB", quantity: "1개", target: "BEY-BB-78-ROCK-GIRAFFE-R145WB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-79", series: "metal fight", no: "BB-79", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-79", name: "메탈어시스트", sale: "일반 판매", releaseDate: "2010-06-22", price: "525", composition: [{ name: "메탈어시스트", quantity: "1개", target: "TOOLS-METAL-ASSIST" }] }} },
  { id: "PRODUCT-BB-80", series: "metal fight", no: "BB-80", sale: "", releases: {
    kr: { no: "BB-80", name: "그라비티 페르세우스 AD145WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-07-30", price: "13600", composition: [{ name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] },
    jp: { no: "BB-80", name: "그라비티 페르세우스 AD145WD", sale: "일반 판매", kind: "스타터", releaseDate: "2010-06-22", price: "1365", composition: [{ name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] }} },
  { id: "PRODUCT-KR-BIGBANG-BLADERS-SET", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "빅뱅블레이더즈 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-09-17", price: "35000", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "레이 유니콘 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "2개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "그립러버", quantity: "1개", target: "TOOLS-GRIP-RUBBER" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-TRIPLE-NATIONAL-TEAM-DX-SET", series: "metal fight", no: "", sale: "", releases: {
    kr: { no: "", name: "트리플 내셔널팀 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-09-17", price: "35000", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "로크 기라프 R145WB", quantity: "1개", target: "BEY-BB-78-ROCK-GIRAFFE-R145WB" }, { name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "트리플형 베이스타디움", quantity: "1개", target: "TOOLS-TRIPLE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-81", series: "metal fight", no: "BB-81", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-81", name: "런처러버", sale: "일반 판매", releaseDate: "2010-06-22", price: "315", composition: [{ name: "런처러버", quantity: "3개", target: "TOOLS-LAUNCHER-RUBBER" }] }} },
  { id: "PRODUCT-BB-82", series: "metal fight", no: "BB-82", sale: "", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-82", name: "랜덤부스터 Vol.5 그랜드 케토스", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-24", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-82-GRAND-KETOS-WD145RS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-82-GRAND-KETOS-WD145RS", "BEY-BB-82-GRAND-KETOS-T125RS", "BEY-BB-82-BURN-UNICORNO-SW145JB", "BEY-BB-82-POISON-UNICORNO-130HF", "BEY-BB-82-STORM-PHOENIX-130B", "BEY-BB-82-POISON-PHOENIX-WA130SD", "BEY-BB-82-BURN-SERPENT-WA130ES", "BEY-BB-82-STORM-SERPENT-T125HF"] },
  { id: "PRODUCT-BB-82-1", series: "metal fight", no: "BB-82-1", sale: "일반 판매", releases: {
    kr: { no: "BB-82-1", name: "그랜드 케토스 WD145RS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "그랜드 케토스 WD145RS", quantity: "1개", target: "BEY-BB-82-GRAND-KETOS-WD145RS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-82-2", series: "metal fight", no: "BB-82-2", sale: "일반 판매", releases: {
    kr: { no: "BB-82-2", name: "그랜드 케토스 T125RS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "그랜드 케토스 T125RS", quantity: "1개", target: "BEY-BB-82-GRAND-KETOS-T125RS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-83", series: "metal fight", no: "BB-83", sale: "일반 판매", releases: {
    kr: { no: "BB-83", name: "파이시즈 DF145BS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "파이시즈 DF145BS", quantity: "1개", target: "BEY-BB-83-PISCES-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-83", name: "파이시즈 DF145BS", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-24", price: "682", composition: [{ name: "파이시즈 DF145BS", quantity: "1개", target: "BEY-BB-83-PISCES-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-84", series: "metal fight", no: "BB-84", sale: "일반 판매", releases: {
    kr: { no: "BB-84", name: "메탈페이스 커스텀 Ver.(클리어)", sale: "일반 판매", releaseDate: "2011-01-13", price: "4000", composition: [{ name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] },
    jp: { no: "BB-84", name: "메탈페이스 개조 Ver.(클리어)", sale: "일반 판매", releaseDate: "2010-07-24", price: "367", composition: [{ name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-85", series: "metal fight", no: "BB-85", sale: "일반 판매", releases: {
    kr: { no: "BB-85", name: "메탈페이스 커스텀 Ver.(오렌지)", sale: "일반 판매", releaseDate: "2011-01-13", price: "4000", composition: [{ name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] },
    jp: { no: "BB-85", name: "메탈페이스 개조 Ver.(오렌지)", sale: "일반 판매", releaseDate: "2010-07-24", price: "367", composition: [{ name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-86", series: "metal fight", no: "BB-86", sale: "일반 판매", releases: {
    kr: { no: "BB-86", name: "베이블레이드 덱 어택&디펜스 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-10-01", price: "25600", composition: [{ name: "카운터 에스콜피오 145D", quantity: "1개", target: "BEY-BB-86-COUNTER-ESCOLPIO-145D" }, { name: "사이버 아쿠아리오 105F", quantity: "1개", target: "BEY-BB-86-CYBER-AQUARIO-105F" }, { name: "포이즌 기라프 S130MB", quantity: "1개", target: "BEY-BB-86-POISON-GIRAFFE-S130MB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] },
    jp: { no: "BB-86", name: "베이블레이드 덱 어택&디펜스 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-08-07", price: "2625", composition: [{ name: "카운터 에스콜피오 145D", quantity: "1개", target: "BEY-BB-86-COUNTER-ESCOLPIO-145D" }, { name: "사이버 아쿠아리오 105F", quantity: "1개", target: "BEY-BB-86-CYBER-AQUARIO-105F" }, { name: "포이즌 기라프 S130MB", quantity: "1개", target: "BEY-BB-86-POISON-GIRAFFE-S130MB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] }} },
  { id: "PRODUCT-BB-87", series: "metal fight", no: "BB-87", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-87", name: "라이트런처2", sale: "일반 판매", releaseDate: "2010-08-28", price: "420", composition: [{ name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }] }} },
  { id: "PRODUCT-BB-88", series: "metal fight", no: "BB-88", sale: "일반 판매", releases: {
    kr: { no: "BB-88", name: "메테오 엘드라고 LW105LF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "12000", composition: [{ name: "메테오 엘드라고 LW105LF", quantity: "1개", target: "BEY-BB-88-METEO-L-DRAGO-LW105LF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] },
    jp: { no: "BB-88", name: "메테오 엘드라고 LW105LF", sale: "일반 판매", kind: "스타터", releaseDate: "2010-09-18", price: "1260", composition: [{ name: "메테오 엘드라고 LW105LF", quantity: "1개", target: "BEY-BB-88-METEO-L-DRAGO-LW105LF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] }} },
  { id: "PRODUCT-BB-89", series: "metal fight", no: "BB-89", sale: "일반 판매", releases: {
    kr: { no: "BB-89", name: "아리에스 145D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "아리에스 145D", quantity: "1개", target: "BEY-BB-89-ARIES-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-89", name: "아리에스 145D", sale: "일반 판매", kind: "부스터", releaseDate: "2010-09-18", price: "682", composition: [{ name: "아리에스 145D", quantity: "1개", target: "BEY-BB-89-ARIES-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-90", series: "metal fight", no: "BB-90", sale: "일반 판매", releases: {
    kr: { no: "BB-90", name: "LED스코프라이트", sale: "일반 판매", releaseDate: "2010-12-07", price: "9600", composition: [{ name: "LED스코프라이트", quantity: "1개", target: "TOOLS-LED-SIGHT" }] },
    jp: { no: "BB-90", name: "LED사이트", sale: "일반 판매", releaseDate: "2010-09-18", price: "1260", composition: [{ name: "LED사이트", quantity: "1개", target: "TOOLS-LED-SIGHT" }] }} },
  { id: "PRODUCT-BB-91", series: "metal fight", no: "BB-91", sale: "일반 판매", releases: {
    kr: { no: "BB-91", name: "레이 킬 100RSF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2010-10-01", price: "9600", composition: [{ name: "레이 킬 100RSF", quantity: "1개", target: "BEY-BB-91-RAY-KEEL-100RSF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-91", name: "레이 길 100RSF", sale: "일반 판매", kind: "부스터", releaseDate: "2010-10-23", price: "787", composition: [{ name: "레이 길 100RSF", quantity: "1개", target: "BEY-BB-91-RAY-KEEL-100RSF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-92", series: "metal fight", no: "BB-92", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-92", name: "갤럭시 페가시스 W105R²F", sale: "일반 판매", kind: "부스터", releaseDate: "2010-10-23", price: "787", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-92-GALAXY-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-93", series: "metal fight", no: "BB-93", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-93", name: "레이 유니코르노 D125CS", sale: "일반 판매", kind: "부스터", releaseDate: "2010-10-23", price: "787", composition: [{ name: "레이 유니코르노 D125CS", quantity: "1개", target: "BEY-BB-93-RAY-UNICORNO-D125CS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-94", series: "metal fight", no: "BB-94", sale: "일반 판매", releases: {
    kr: { no: "BB-94", name: "토네이도 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "49600", composition: [{ name: "토네이도 헤라클레오 105F", quantity: "1개", target: "BEY-BB-94-TORNADO-HERCULEO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "토네이도 베이스타디움", quantity: "1개", target: "TOOLS-TORNADO-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-94", name: "토네이도 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2010-10-23", price: "5775", composition: [{ name: "토네이도 헤라클레오 105F", quantity: "1개", target: "BEY-BB-94-TORNADO-HERCULEO-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "토네이도 베이스타디움", quantity: "1개", target: "TOOLS-TORNADO-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-KR-GALAXY-STARGAZER-SET", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "갤럭시 스타게이저 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "아쿠아리오 105F", quantity: "1개", target: "BEY-BB-72-AQUARIO-105F" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "배틀블레이더즈 툴박스", quantity: "1개", target: "TOOLS-BATTLE-BLADERS-TOOLBOX" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-BEY-CHARACTER-CUSTOM-SET", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "베이캐릭터 커스텀 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "39200", composition: [{ name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "레이 킬 100RSF", quantity: "1개", target: "BEY-BB-91-RAY-KEEL-100RSF" }, { name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "그라비티 손목밴드", quantity: "1켤레", target: "TOOLS-GRAVITY-WRISTBAND" }, { name: "트리플형 베이스타디움", quantity: "1개", target: "TOOLS-TRIPLE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-GOLDEN-BLADERS-DX-SET", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "골든블레이더즈 DX세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "49600", composition: [{ name: "레이 유니콘 D125CS", quantity: "1개", target: "BEY-BB-71-RAY-UNICORNO-D125CS" }, { name: "그라비티 페르세우스 AD145WD", quantity: "1개", target: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "포인터", quantity: "1개", target: "TOOLS-POINTER" }, { name: "런처러버", quantity: "3개", target: "TOOLS-LAUNCHER-RUBBER" }, { name: "배틀블레이더즈 툴박스", quantity: "1개", target: "TOOLS-BATTLE-BLADERS-TOOLBOX" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-REVERSE-DRAGON-ATTACK-SET", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "리버스 드래곤 어택 세트", sale: "일반 판매", kind: "세트", releaseDate: "2010-12-07", price: "43200", composition: [{ name: "갤럭시 페가시스 W105R²F", quantity: "1개", target: "BEY-BB-70-GALAXY-PEGASIS-W105R2F" }, { name: "메테오 엘드라고 LW105LF", quantity: "1개", target: "BEY-BB-88-METEO-L-DRAGO-LW105LF" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "LED스코프라이트", quantity: "1개", target: "TOOLS-LED-SIGHT" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-95", series: "metal fight", no: "BB-95", sale: "일반 판매", releases: {
    kr: { no: "BB-95", name: "플레임 픽시스 230WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "9600", composition: [{ name: "플레임 픽시스 230WD", quantity: "1개", target: "BEY-BB-95-FLAME-BYXIS-230WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-95", name: "플레임 빅시스 230WD", sale: "일반 판매", kind: "부스터", releaseDate: "2010-11-20", price: "787", composition: [{ name: "플레임 빅시스 230WD", quantity: "1개", target: "BEY-BB-95-FLAME-BYXIS-230WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-96", series: "metal fight", no: "BB-96", sale: "일반 판매", releases: {
    kr: { no: "BB-96", name: "베이블레이드 슈퍼 덱", sale: "일반 판매", kind: "세트", releaseDate: "2011-02-01", price: "22400", composition: [{ name: "페가시스 85RF", quantity: "1개", target: "BEY-BB-96-PEGASIS-85RF" }, { name: "리브라 100D", quantity: "1개", target: "BEY-BB-96-LIBRA-100D" }, { name: "번 캔서 90WD", quantity: "1개", target: "BEY-BB-96-BURN-CANCER-90WD" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] },
    jp: { no: "BB-96", name: "베이블레이드 슈퍼 덱", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-20", price: "2415", composition: [{ name: "페가시스 85RF", quantity: "1개", target: "BEY-BB-96-PEGASIS-85RF" }, { name: "리브라 100D", quantity: "1개", target: "BEY-BB-96-LIBRA-100D" }, { name: "번 캔서 90WD", quantity: "1개", target: "BEY-BB-96-BURN-CANCER-90WD" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BB-97", series: "metal fight", no: "BB-97", sale: "일반 판매", releases: {
    kr: { no: "BB-97", name: "스페셜 커스텀 세트 페르세우스 Ver.", sale: "일반 판매", kind: "세트", releaseDate: "2011-02-01", price: "39800", composition: [{ name: "페르세우스 페이스", quantity: "3개", target: "FACE-PERSEUS" }, { name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "페르세우스 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS" }, { name: "페르세우스 어택 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS-ATTACK" }, { name: "페르세우스 스테미너 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS-STAMINA" }, { name: "그라비티 메탈휠", quantity: "2개", target: "METALWHEEL-GRAVITY" }, { name: "GB145 트랙", quantity: "1개", target: "TRACK-GRAVITY-BALL-145" }, { name: "AD145 트랙", quantity: "1개", target: "TRACK-ARMOR-DEFENSE-145" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "130 트랙", quantity: "1개", target: "TRACK-130" }, { name: "S 버텀", quantity: "1개", target: "BOTTOM-SHARP" }, { name: "WD 버텀", quantity: "1개", target: "BOTTOM-WIDE-DEFENSE" }, { name: "F 버텀", quantity: "1개", target: "BOTTOM-FLAT" }, { name: "RS 버텀", quantity: "1개", target: "BOTTOM-RUBBER-SHARP" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-97", name: "베이블레이드 궁극 개조 세트 페르세우스 Ver.", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-20", price: "3780", composition: [{ name: "페르세우스 페이스", quantity: "3개", target: "FACE-PERSEUS" }, { name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "페르세우스 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS" }, { name: "페르세우스 어택 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS-ATTACK" }, { name: "페르세우스 스테미너 클리어휠", quantity: "1개", target: "CLEARWHEEL-PERSEUS-STAMINA" }, { name: "그라비티 메탈휠", quantity: "2개", target: "METALWHEEL-GRAVITY" }, { name: "GB145 트랙", quantity: "1개", target: "TRACK-GRAVITY-BALL-145" }, { name: "AD145 트랙", quantity: "1개", target: "TRACK-ARMOR-DEFENSE-145" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "130 트랙", quantity: "1개", target: "TRACK-130" }, { name: "S 버텀", quantity: "1개", target: "BOTTOM-SHARP" }, { name: "WD 버텀", quantity: "1개", target: "BOTTOM-WIDE-DEFENSE" }, { name: "F 버텀", quantity: "1개", target: "BOTTOM-FLAT" }, { name: "RS 버텀", quantity: "1개", target: "BOTTOM-RUBBER-SHARP" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }, { name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-BB-98", series: "metal fight", no: "BB-98", sale: "일반 판매", releases: {
    kr: { no: "BB-98", name: "스페셜 커스텀 세트 엘드라고 Ver.", sale: "일반 판매", kind: "세트", releaseDate: "2011-02-01", price: "39800", composition: [{ name: "엘드라고 페이스", quantity: "3개", target: "FACE-L-DRAGO" }, { name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "엘드라고Ⅱ 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II" }, { name: "엘드라고Ⅱ 어썰트 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II-ASSAULT" }, { name: "엘드라고Ⅱ 러시 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II-RUSH" }, { name: "메테오 메탈휠", quantity: "2개", target: "METALWHEEL-METEO" }, { name: "LW105 트랙", quantity: "1개", target: "TRACK-LEFT-WING-105" }, { name: "DF105 트랙", quantity: "1개", target: "TRACK-DOWN-FORCE-105" }, { name: "125 트랙", quantity: "1개", target: "TRACK-125" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "85 트랙", quantity: "1개", target: "TRACK-85" }, { name: "LF 버텀", quantity: "1개", target: "BOTTOM-LEFT-FLAT" }, { name: "LRF 버텀", quantity: "1개", target: "BOTTOM-LEFT-RUBBER-FLAT" }, { name: "SF 버텀", quantity: "1개", target: "BOTTOM-SEMI-FLAT" }, { name: "RF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-FLAT" }, { name: "XF 버텀", quantity: "1개", target: "BOTTOM-EXTREME-FLAT" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-98", name: "베이블레이드 궁극 개조 세트 엘드라고 Ver.", sale: "일반 판매", kind: "세트", releaseDate: "2010-11-20", price: "3780", composition: [{ name: "엘드라고 페이스", quantity: "3개", target: "FACE-L-DRAGO" }, { name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "엘드라고Ⅱ 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II" }, { name: "엘드라고Ⅱ 어썰트 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II-ASSAULT" }, { name: "엘드라고Ⅱ 러시 클리어휠", quantity: "1개", target: "CLEARWHEEL-L-DRAGO-II-RUSH" }, { name: "메테오 메탈휠", quantity: "2개", target: "METALWHEEL-METEO" }, { name: "LW105 트랙", quantity: "1개", target: "TRACK-LEFT-WING-105" }, { name: "DF105 트랙", quantity: "1개", target: "TRACK-DOWN-FORCE-105" }, { name: "125 트랙", quantity: "1개", target: "TRACK-125" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "85 트랙", quantity: "1개", target: "TRACK-85" }, { name: "LF 버텀", quantity: "1개", target: "BOTTOM-LEFT-FLAT" }, { name: "LRF 버텀", quantity: "1개", target: "BOTTOM-LEFT-RUBBER-FLAT" }, { name: "SF 버텀", quantity: "1개", target: "BOTTOM-SEMI-FLAT" }, { name: "RF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-FLAT" }, { name: "XF 버텀", quantity: "1개", target: "BOTTOM-EXTREME-FLAT" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-BB-99", series: "metal fight", no: "BB-99", sale: "일반 판매", releases: {
    kr: { no: "BB-99", name: "헬 켈베로스 BD145DS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "12000", composition: [{ name: "헬 켈베로스 BD145DS", quantity: "1개", target: "BEY-BB-99-HELL-KERBECS-BD145DS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }]},
    jp: { no: "BB-99", name: "헬 케르벡스 BD145DS", sale: "일반 판매", kind: "스타터", releaseDate: "2010-12-28", price: "997", composition: [{ name: "헬 케르벡스 BD145DS", quantity: "1개", target: "BEY-BB-99-HELL-KERBECS-BD145DS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-99-1", series: "metal fight", no: "BB-99-1", sale: "일반 판매", releases: {
    kr: { no: "BB-99-1", name: "헬 켈베로스 BD145DS", sale: "일반 판매", kind: "부스터", releaseDate: "2011-06-14", price: "9600", composition: [{ name: "헬 켈베로스 BD145DS", quantity: "1개", target: "BEY-BB-99-HELL-KERBECS-BD145DS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-100", series: "metal fight", no: "BB-100", sale: "일반 판매", releases: {
    kr: { no: "BB-100", name: "키라 비폴 UW145EWD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "9600", composition: [{ name: "키라 비폴 UW145EWD", quantity: "1개", target: "BEY-BB-100-KILLER-BEAFOWL-UW145EWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-100", name: "랜덤부스터 Vol.6 키라 비폴", sale: "일반 판매", kind: "부스터", releaseDate: "2010-12-28", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-100-KILLER-BEAFOWL-UW145EWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }
  }, beyPool: ["BEY-BB-100-KILLER-BEAFOWL-UW145EWD", "BEY-BB-100-GALAXY-CANCER-D125HF", "BEY-BB-100-BURN-ESCOLPIO-100RF", "BEY-BB-100-FLAME-GEMIOS-105CS", "BEY-BB-100-KILLER-ESCOLPIO-100D", "BEY-BB-100-GALAXY-SAGITTARIO-145CS", "BEY-BB-100-FLAME-CANCER-D125RF", "BEY-BB-100-BURN-SAGITTARIO-105HF"] },
  { id: "PRODUCT-BB-101", series: "metal fight", no: "BB-101", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-101", name: "그립서포트", sale: "일반 판매", releaseDate: "2010-12-28", price: "367", composition: [{ name: "그립서포트", quantity: "1개", target: "TOOLS-GRIP-SUPPORT" }] }} },
  { id: "PRODUCT-BB-102", series: "metal fight", no: "BB-102", sale: "일반 판매", releases: {
    kr: { no: "BB-102", name: "스크류 카프리콘 90MF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "9600", composition: [{ name: "스크류 카프리콘 90MF", quantity: "1개", target: "BEY-BB-102-SCREW-CAPRICORNE-90MF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-102", name: "스크류 카프리코네 90MF", sale: "일반 판매", kind: "부스터", releaseDate: "2011-01-22", price: "787", composition: [{ name: "스크류 카프리코네 90MF", quantity: "1개", target: "BEY-BB-102-SCREW-CAPRICORNE-90MF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BB-103", series: "metal fight", no: "BB-103", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-103", name: "스나이프런처", sale: "일반 판매", releaseDate: "2011-01-22", price: "472", composition: [{ name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-104", series: "metal fight", no: "BB-104", sale: "일반 판매", releases: {
    kr: { no: "BB-104", name: "바셀트 호로지움 145WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-02-01", price: "12000", composition: [{ name: "바셀트 호로지움 145WD", quantity: "1개", target: "BEY-BB-104-BASALT-HOROGIUM-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }]},
    jp: { no: "BB-104", name: "바살트 호로기움 145WD", sale: "일반 판매", kind: "스타터", releaseDate: "2011-02-26", price: "945", composition: [{ name: "바살트 호로기움 145WD", quantity: "1개", target: "BEY-BB-104-BASALT-HOROGIUM-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-KR-BATTLE-BLADERS-TOOLBOX", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "배틀블레이더즈 툴박스", sale: "일반 판매", releaseDate: "2011-02-01", price: "12000", composition: [{ name: "배틀블레이더즈 툴박스", quantity: "1개", target: "TOOLS-BATTLE-BLADERS-TOOLBOX" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-STARBREAKER-DX-SET", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "스타브레이커 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-04-11", price: "45000", composition: [{ name: "헬 켈베로스 BD145DS", quantity: "1개", target: "BEY-BB-99-HELL-KERBECS-BD145DS" }, { name: "바셀트 호로지움 145WD", quantity: "1개", target: "BEY-BB-104-BASALT-HOROGIUM-145WD" }, { name: "툴", quantity: "2개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }, { name: "런처그립", quantity: "1개", target: "TOOLS-LAUNCHER-GRIP" }, { name: "그립서포트", quantity: "1개", target: "TOOLS-GRIP-SUPPORT" }, { name: "스퀘어형 베이스타디움", quantity: "1개", target: "TOOLS-WIDE-SQUARE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BB-105", series: "metal fight", no: "BB-105", sale: "일반 판매", releases: {
    kr: { no: "BB-105", name: "빅뱅 페가시스 F:D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "13600", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-105", name: "빅뱅 페가시스 F:D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-03-26", price: "1260", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-106", series: "metal fight", no: "BB-106", sale: "일반 판매", releases: {
    kr: { no: "BB-106", name: "팡 레온 130W²D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "팡 레온 130W²D", quantity: "1개", target: "BEY-BB-106-FANG-LEONE-130W2D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-106", name: "팡 레오네 130W²D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-03-26", price: "945", composition: [{ name: "팡 레오네 130W²D", quantity: "1개", target: "BEY-BB-106-FANG-LEONE-130W2D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-107", series: "metal fight", no: "BB-107", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-107", name: "빅뱅 페가시스 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-03-26", price: "3990", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-107-BIG-BANG-PEGASIS-FD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "85 트랙", quantity: "1개", target: "TRACK-85" }, { name: "105 트랙", quantity: "1개", target: "TRACK-105" }, { name: "XF 버텀", quantity: "1개", target: "BOTTOM-EXTREME-FLAT" }, { name: "RF 버텀", quantity: "1개", target: "BOTTOM-RUBBER-FLAT" }, { name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "3세그 런처그립", quantity: "1개", target: "TOOLS-3SEG-LAUNCHER-GRIP" }, { name: "베이포인트카드", quantity: "1개", target: "TOOLS-BEYPOINT-CARD" }, { name: "베이스타디움 어택타입", quantity: "1개", target: "TOOLS-ATTACK-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BB-108", series: "metal fight", no: "BB-108", sale: "일반 판매", releases: {
    kr: { no: "BB-108", name: "엘드라고 디스트로이 F:S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "13600", composition: [{ name: "엘드라고 디스트로이 F:S", quantity: "1개", target: "BEY-BB-108-L-DRAGO-DESTROY-FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2L", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2L" }]},
    jp: { no: "BB-108", name: "엘드라고 디스트로이 F:S", sale: "일반 판매", kind: "스타터", releaseDate: "2011-04-23", price: "1260", composition: [{ name: "엘드라고 디스트로이 F:S", quantity: "1개", target: "BEY-BB-108-L-DRAGO-DESTROY-FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2L", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2L" }]}} },
  { id: "PRODUCT-BB-109", series: "metal fight", no: "BB-109", sale: "일반 판매", releases: {
    kr: { no: "BB-109", name: "비트 링크스 TH170WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "비트 링크스 TH170WD", quantity: "1개", target: "BEY-BB-109-BEAT-LYNX-TH170WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-109", name: "랜덤부스터 Vol.7 비트 링크스", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-23", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-109-BEAT-LYNX-TH170WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-109-BEAT-LYNX-TH170WD", "BEY-BB-109-GRAVITY-PERSEUS-BD145XF", "BEY-BB-109-HELL-HORUSEUS-85RS", "BEY-BB-109-VULCAN-HERCULEO-130DS", "BEY-BB-109-GRAVITY-PERSEUS-85DS", "BEY-BB-109-TORNADO-HORUSEUS-130RSF", "BEY-BB-109-HELL-HERCULEO-100XF", "BEY-BB-109-VULCAN-HOROGIUM-BD145RS"] },
  { id: "PRODUCT-BB-110", series: "metal fight", no: "BB-110", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-110", name: "베이런처(코스모블루)", sale: "일반 판매", releaseDate: "2011-04-23", price: "525", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-111", series: "metal fight", no: "BB-111", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-111", name: "베이런처(아미그린)", sale: "일반 판매", releaseDate: "2011-04-23", price: "525", composition: [{ name: "베이런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-112", series: "metal fight", no: "BB-112", sale: "일반 판매", releases: {
    kr: { no: "BB-112", name: "카라비나그립(레드)", sale: "일반 판매", releaseDate: "2011-10-28", price: "6400", composition: [{ name: "카라비나그립", quantity: "1개", target: "TOOLS-CARABINER-GRIP" }] },
    jp: { no: "BB-112", name: "카라비나그립(마스레드)", sale: "일반 판매", releaseDate: "2011-05-21", price: "630", composition: [{ name: "카라비나그립", quantity: "1개", target: "TOOLS-CARABINER-GRIP" }] }} },
  { id: "PRODUCT-BB-113", series: "metal fight", no: "BB-113", sale: "일반 판매", releases: {
    kr: { no: "BB-113", name: "사이즈 크로노스 T125EDS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "사이즈 크로노스 T125EDS", quantity: "1개", target: "BEY-BB-113-SCYTHE-KRONOS-T125EDS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-113", name: "사이즈 크로노스 T125EDS", sale: "일반 판매", kind: "스타터", releaseDate: "2011-06-18", price: "945", composition: [{ name: "사이즈 크로노스 T125EDS", quantity: "1개", target: "BEY-BB-113-SCYTHE-KRONOS-T125EDS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-114", series: "metal fight", no: "BB-114", sale: "일반 판매", releases: {
    kr: { no: "BB-114", name: "베리아레스 D:D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "13600", composition: [{ name: "베리아레스 D:D", quantity: "1개", target: "BEY-BB-114-VARIARES-DD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처LR", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-LR" }]},
    jp: { no: "BB-114", name: "바리아레스 D:D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-07-16", price: "1260", composition: [{ name: "바리아레스 D:D", quantity: "1개", target: "BEY-BB-114-VARIARES-DD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처LR", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-LR" }]}} },
  { id: "PRODUCT-BB-115", series: "metal fight", no: "BB-115", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-115", name: "베이런처LR(마스레드)", sale: "일반 판매", releaseDate: "2011-07-16", price: "735", composition: [{ name: "베이런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] }} },
  { id: "PRODUCT-BB-116", series: "metal fight", no: "BB-116", sale: "일반 판매", releases: {
    kr: { no: "BB-116", name: "제이드 쥬피터 S130RB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "제이드 쥬피터 S130RB", quantity: "1개", target: "BEY-BB-116-JADE-JUPITER-S130RB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-116", name: "랜덤부스터 Vol.8 제이드 쥬피터", sale: "일반 판매", kind: "부스터", releaseDate: "2011-08-06", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-116-JADE-JUPITER-S130RB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BB-116-JADE-JUPITER-S130RB", "BEY-BB-116-FORBIDDEN-EONIS-ED145FB", "BEY-BB-116-DIVINE-FOX-90W2D", "BEY-BB-116-SCREW-LYRA-ED145MF", "BEY-BB-116-FORBIDDEN-EONIS-130D", "BEY-BB-116-DIVINE-CROWN-TR145D", "BEY-BB-116-SCREW-FOX-TR145W2D", "BEY-BB-116-HELL-CROWN-130FB"] },
  { id: "PRODUCT-BB-117", series: "metal fight", no: "BB-117", sale: "일반 판매", releases: {
    kr: { no: "BB-117", name: "넘버원 블레이더 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "29600", composition: [{ name: "브릿츠 유니콘 100RSF", quantity: "1개", target: "BEY-BB-117-BLITZ-UNICORNO-100RSF" }, { name: "나이트메어 렉스 UW145EWD", quantity: "1개", target: "BEY-BB-117-NIGHTMARE-REX-UW145EWD" }, { name: "바셀트 호로지움 130RS", quantity: "1개", target: "BEY-BB-117-BASALT-HOROGIUM-130RS" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] },
    jp: { no: "BB-117", name: "최강 블레이더 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-08-06", price: "2625", composition: [{ name: "브릿츠 유니코르노 100RSF", quantity: "1개", target: "BEY-BB-117-BLITZ-UNICORNO-100RSF" }, { name: "나이트메어 렉스 UW145EWD", quantity: "1개", target: "BEY-BB-117-NIGHTMARE-REX-UW145EWD" }, { name: "바살트 호로기움 130RS", quantity: "1개", target: "BEY-BB-117-BASALT-HOROGIUM-130RS" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이 덱 케이스", quantity: "1개", target: "TOOLS-BEY-DECK-CASE" }] }} },
  { id: "PRODUCT-BB-118", series: "metal fight", no: "BB-118", sale: "일반 판매", releases: {
    kr: { no: "BB-118", name: "팬텀 오리온 B:D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-10-28", price: "12000", composition: [{ name: "팬텀 오리온 B:D", quantity: "1개", target: "BEY-BB-118-PHANTOM-ORION-BD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-118", name: "팬텀 오리온 B:D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-09-17", price: "1470", composition: [{ name: "팬텀 오리온 B:D", quantity: "1개", target: "BEY-BB-118-PHANTOM-ORION-BD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-KR-PEGASIS-LIMITED-EDITION", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "페가시스 리미티드 에디션", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "32800", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "스크류 카프리콘 90MF", quantity: "1개", target: "BEY-BB-102-SCREW-CAPRICORNE-90MF" }, { name: "베리아레스 D:D", quantity: "1개", target: "BEY-BB-114-VARIARES-DD" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LDRAGO-LIMITED-EDITION", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "엘드라고 리미티드 에디션", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "31200", composition: [{ name: "엘드라고 디스트로이 F:S", quantity: "1개", target: "BEY-BB-108-L-DRAGO-DESTROY-FS" }, { name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "스크류 카프리콘 90MF", quantity: "1개", target: "BEY-BB-102-SCREW-CAPRICORNE-90MF" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-ARES-LIMITED-EDITION", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "아레스 리미티드 에디션", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "32800", composition: [{ name: "베리아레스 D:D", quantity: "1개", target: "BEY-BB-114-VARIARES-DD" }, { name: "키라 비폴 UW145EWD", quantity: "1개", target: "BEY-BB-100-KILLER-BEAFOWL-UW145EWD" }, { name: "엘드라고 디스트로이 F:S", quantity: "1개", target: "BEY-BB-108-L-DRAGO-DESTROY-FS" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }, { name: "파워런처L", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-L" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-KR-LEGENDS-BLADE-DX-SET", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "레전즈블레이드 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-28", price: "34800", composition: [{ name: "빅뱅 페가시스 F:D", quantity: "1개", target: "BEY-BB-105-BIG-BANG-PEGASIS-FD" }, { name: "팡 레온 130W²D", quantity: "1개", target: "BEY-BB-106-FANG-LEONE-130W2D" }, { name: "바셀트 호로지움 145WD", quantity: "1개", target: "BEY-BB-104-BASALT-HOROGIUM-145WD" }, { name: "툴", quantity: "3개", target: "TOOLS-TOOL" }, { name: "스나이프런처", quantity: "1개", target: "TOOLS-SNIPE-LAUNCHER" }, { name: "파워런처", quantity: "2개", target: "TOOLS-POWER-LAUNCHER" }, { name: "러시형 베이스타디움", quantity: "1개", target: "TOOLS-RUSH-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBC-01", series: "metal fight", no: "BBC-01", sale: "일반 판매", releases: {
    kr: { no: "BBC-01", name: "슈퍼컨트롤 베이블레이드 빅뱅 페가시스", sale: "일반 판매", releaseDate: "2011-10-28", price: "32000", composition: [{ name: "빅뱅 페가시스", quantity: "1개", target: "BEY-BBC-01-SUPER-CONTROL-BIG-BANG-PEGASIS" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] },
    jp: { no: "BBC-01", name: "슈퍼컨트롤 베이블레이드 빅뱅 페가시스", sale: "일반 판매", releaseDate: "2011-07-16", price: "3885", composition: [{ name: "빅뱅 페가시스", quantity: "1개", target: "BEY-BBC-01-SUPER-CONTROL-BIG-BANG-PEGASIS" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] }} },
  { id: "PRODUCT-BBC-02", series: "metal fight", no: "BBC-02", sale: "일반 판매", releases: {
    kr: { no: "BBC-02", name: "슈퍼컨트롤 베이블레이드 엘드라고 디스트로이", sale: "일반 판매", releaseDate: "2011-10-28", price: "32000", composition: [{ name: "엘드라고 디스트로이", quantity: "1개", target: "BEY-BBC-02-SUPER-CONTROL-L-DRAGO-DESTROY" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] },
    jp: { no: "BBC-02", name: "슈퍼컨트롤 베이블레이드 엘드라고 디스트로이", sale: "일반 판매", releaseDate: "2011-07-16", price: "3885", composition: [{ name: "엘드라고 디스트로이", quantity: "1개", target: "BEY-BBC-02-SUPER-CONTROL-L-DRAGO-DESTROY" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] }} },
  { id: "PRODUCT-BBC-03", series: "metal fight", no: "BBC-03", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBC-03", name: "슈퍼컨트롤 베이블레이드 전용 스타디움", sale: "일반 판매", releaseDate: "2011-07-16", price: "2100", composition: [{ name: "슈퍼컨트롤 베이블레이드 전용 스타디움", quantity: "1개", target: "TOOLS-RUSH-BEYSTADIUM" }, { name: "오버펜스", quantity: "9장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BBC-04", series: "metal fight", no: "BBC-04", sale: "일반 판매", releases: {
    kr: { no: "BBC-04", name: "슈퍼컨트롤 베이블레이드 베리아레스", sale: "일반 판매", releaseDate: "2011-12-04", price: "32000", composition: [{ name: "베리아레스", quantity: "1개", target: "BEY-BBC-04-SUPER-CONTROL-VARIARES" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] },
    jp: { no: "BBC-04", name: "슈퍼컨트롤 베이블레이드 바리아레스", sale: "일반 판매", releaseDate: "2011-11-17", price: "3885", composition: [{ name: "바리아레스", quantity: "1개", target: "BEY-BBC-04-SUPER-CONTROL-VARIARES" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] }} },
  { id: "PRODUCT-BBC-05", series: "metal fight", no: "BBC-05", sale: "일반 판매", releases: {
    kr: { no: "BBC-05", name: "슈퍼컨트롤 베이블레이드 팬텀 오리온", sale: "일반 판매", releaseDate: "2011-12-04", price: "32000", composition: [{ name: "팬텀 오리온", quantity: "1개", target: "BEY-BBC-05-SUPER-CONTROL-PHANTOM-ORION" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] },
    jp: { no: "BBC-05", name: "슈퍼컨트롤 베이블레이드 팬텀 오리온", sale: "일반 판매", releaseDate: "2011-11-17", price: "3885", composition: [{ name: "팬텀 오리온", quantity: "1개", target: "BEY-BBC-05-SUPER-CONTROL-PHANTOM-ORION" }, { name: "컨트롤런처", quantity: "1개", target: "TOOLS-CONTROL-LAUNCHER" }] }} },
  { id: "PRODUCT-BB-119", series: "metal fight", no: "BB-119", sale: "일반 판매", releases: {
    kr: { no: "BB-119", name: "데쓰 케찰코아틀 125RDF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2011-12-04", price: "12000", composition: [{ name: "데쓰 케찰코아틀 125RDF", quantity: "1개", target: "BEY-BB-119-DEATH-QUETZALCOATL-125RDF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-119", name: "데스 케찰코아틀 125RDF", sale: "일반 판매", kind: "스타터", releaseDate: "2011-10-22", price: "997", composition: [{ name: "데스 케찰코아틀 125RDF", quantity: "1개", target: "BEY-BB-119-DEATH-QUETZALCOATL-125RDF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-120", series: "metal fight", no: "BB-120", sale: "일반 판매", releases: {
    kr: { no: "BB-120", name: "얼티메이트 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2011-12-04", price: "56000", composition: [{ name: "프로토타입 네메시스", quantity: "1개", target: "BEY-BB-120-PROTOTYPE-NEMESIS" }, { name: "얼티메이트 베이스타디움", quantity: "1개", target: "TOOLS-ULTIMATE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] },
    jp: { no: "BB-120", name: "얼티메이트 베이스타디움", sale: "일반 판매", kind: "세트", releaseDate: "2011-10-22", price: "6825", composition: [{ name: "프로토타입 네메시스", quantity: "1개", target: "BEY-BB-120-PROTOTYPE-NEMESIS" }, { name: "얼티메이트 베이스타디움", quantity: "1개", target: "TOOLS-ULTIMATE-BEYSTADIUM" }, { name: "오버펜스", quantity: "7장", target: "TOOLS-OVER-FENCE" }] }} },
  { id: "PRODUCT-BB-121", series: "metal fight", no: "BB-121", sale: "일반 판매", releases: {
    kr: { no: "BB-121", name: "베이블레이드 얼티메이트 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-01-19", price: "39800", composition: [{ name: "듀오 우라누스 230WD", quantity: "1개", target: "BEY-BB-121-DUO-URANUS-230WD" }, { name: "엘드라고 가디언 S130MB", quantity: "1개", target: "BEY-BB-121-L-DRAGO-GUARDIAN-S130MB" }, { name: "윙 페가시스 90WF", quantity: "1개", target: "BEY-BB-121-WING-PEGASIS-90WF" }, { name: "메탈페이스 커스텀 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "DF105 트랙", quantity: "1개", target: "TRACK-DOWN-FORCE-105" }, { name: "LRF 버텀", quantity: "1개", target: "BOTTOM-LEFT-RUBBER-FLAT" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "파워런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] },
    jp: { no: "BB-121", name: "베이블레이드 궁극 DX 세트", sale: "일반 판매", kind: "세트", releaseDate: "2011-11-17", price: "3780", composition: [{ name: "듀오 우라누스 230WD", quantity: "1개", target: "BEY-BB-121-DUO-URANUS-230WD" }, { name: "엘드라고 가디언 S130MB", quantity: "1개", target: "BEY-BB-121-L-DRAGO-GUARDIAN-S130MB" }, { name: "윙 페가시스 90WF", quantity: "1개", target: "BEY-BB-121-WING-PEGASIS-90WF" }, { name: "메탈페이스 개조 Ver.", quantity: "2개", target: "FACE-METAL-FACE-CUSTOM-VER" }, { name: "DF105 트랙", quantity: "1개", target: "TRACK-DOWN-FORCE-105" }, { name: "LRF 버텀", quantity: "1개", target: "BOTTOM-LEFT-RUBBER-FLAT" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }, { name: "베이런처LR", quantity: "1개", target: "TOOLS-POWER-LAUNCHER-LR" }] }} },
  { id: "PRODUCT-BB-122", series: "metal fight", no: "BB-122", sale: "일반 판매", releases: {
    kr: { no: "BB-122", name: "디아블로 네메시스 X:D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-02-01", price: "13600", composition: [{ name: "디아블로 네메시스 X:D", quantity: "1개", target: "BEY-BB-122-DIABLO-NEMESIS-XD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-122", name: "디아블로 네메시스 X:D", sale: "일반 판매", kind: "스타터", releaseDate: "2011-12-18", price: "1470", composition: [{ name: "디아블로 네메시스 X:D", quantity: "1개", target: "BEY-BB-122-DIABLO-NEMESIS-XD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-123", series: "metal fight", no: "BB-123", sale: "일반 판매", releases: {
    kr: { no: "BB-123", name: "퓨전 하데스 AD145SWD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-02-01", price: "12000", composition: [{ name: "퓨전 하데스 AD145SWD", quantity: "1개", target: "BEY-BB-123-FUSION-HADES-AD145SWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-123", name: "랜덤부스터 Vol.9 퓨전 하데스", sale: "일반 판매", kind: "부스터", releaseDate: "2011-12-18", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-123-FUSION-HADES-AD145SWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BB-123-FUSION-HADES-AD145SWD", "BEY-BB-123-HELL-BEELZEB-125XF", "BEY-BB-123-CLOUD-LYRA-85SF", "BEY-BB-123-CLOUD-GEMIOS-T125SF", "BEY-BB-123-CRASH-ESCOLPIO-125JB", "BEY-BB-123-BAKUSHIN-BEELZEB-T125XF", "BEY-BB-123-METEO-L-DRAGO-85LF-RUSH", "BEY-BB-123-METEO-L-DRAGO-LW105JB-ASSAULT"] },
  { id: "PRODUCT-BB-124", series: "metal fight", no: "BB-124", sale: "일반 판매", releases: {
    kr: { no: "BB-124", name: "크라이스 시그너스 145WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-03-04", price: "12000", composition: [{ name: "크라이스 시그너스 145WD", quantity: "1개", target: "BEY-BB-124-KREIS-CYGNUS-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-124", name: "크라이스 시그너스 145WD", sale: "일반 판매", kind: "스타터", releaseDate: "2012-01-21", price: "997", composition: [{ name: "크라이스 시그너스 145WD", quantity: "1개", target: "BEY-BB-124-KREIS-CYGNUS-145WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BB-125", series: "metal fight", no: "BB-125", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BB-125", name: "라이트런처LR(퍼플)", sale: "일반 판매", releaseDate: "2012-01-21", price: "682", composition: [{ name: "라이트런처LR", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-LR" }] }} },
  { id: "PRODUCT-BB-126", series: "metal fight", no: "BB-126", sale: "일반 판매", releases: {
    kr: { no: "BB-126", name: "플래시 사지타리오 230WD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-03-04", price: "12000", composition: [{ name: "플래시 사지타리오 230WD", quantity: "1개", target: "BEY-BB-126-FLASH-SAGITTARIO-230WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]},
    jp: { no: "BB-126", name: "플래시 사지타리오 230WD", sale: "일반 판매", kind: "스타터", releaseDate: "2012-01-21", price: "997", composition: [{ name: "플래시 사지타리오 230WD", quantity: "1개", target: "BEY-BB-126-FLASH-SAGITTARIO-230WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처2", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER-2" }]}} },
  { id: "PRODUCT-BBG-01", series: "metal fight", no: "BBG-01", sale: "일반 판매", releases: {
    kr: { no: "BBG-01", name: "워리어스 이프레이드 W145CF", sale: "일반 판매", releaseDate: "2012-09-12", price: "12000", composition: [{ name: "워리어스 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-01-WARRIORS-IFRAID-W145CF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }] },
    jp: { no: "BBG-01", name: "사무라이 이프레이드 W145CF", sale: "일반 판매", kind: "스타터", releaseDate: "2012-03-31", price: "997", composition: [{ name: "사무라이 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-01-WARRIORS-IFRAID-W145CF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-02", series: "metal fight", no: "BBG-02", sale: "일반 판매", releases: {
    kr: { no: "BBG-02", name: "시노비 사라만다 SW145SD", sale: "일반 판매", kind: "부스터", releaseDate: "2012-09-12", price: "8400", composition: [{ name: "시노비 사라만다 SW145SD", quantity: "1개", target: "BEY-BBG-02-SHINOBI-SARAMANDA-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { no: "BBG-02", name: "시노비 사라만다 SW145SD", sale: "일반 판매", kind: "싱크롬부스터", releaseDate: "2012-03-31", price: "892", composition: [{ name: "시노비 사라만다 SW145SD", quantity: "1개", target: "BEY-BBG-02-SHINOBI-SARAMANDA-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BBG-02-KR-STARTER", series: "metal fight", no: "BBG-02", sale: "일반 판매", releases: {
    kr: { no: "BBG-02", name: "시노비 사라만다 SW145SD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "10400", composition: [{ name: "시노비 사라만다 SW145SD", quantity: "1개", target: "BEY-BBG-02-SHINOBI-SARAMANDA-SW145SD" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBG-03", series: "metal fight", no: "BBG-03", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-03", name: "베이블레이드 스타트 대시 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-03-31", price: "2625", composition: [{ name: "사무라이 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-03-WARRIORS-IFRAID-W145CF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }, { name: "ZEROG 스타디움 어택타입", quantity: "1개", target: "TOOLS-ZEROG-ATTACK-BEYSTADIUM" }] }} },
  { id: "PRODUCT-BBG-04", series: "metal fight", no: "BBG-04", sale: "일반 판매", releases: {
    kr: { no: "BBG-04", name: "제로G 공격형 스타디움", sale: "일반 판매", releaseDate: "2012-09-12", price: "17600", composition: [{ name: "제로G 공격형 스타디움", quantity: "1개", target: "TOOLS-ZEROG-ATTACK-BEYSTADIUM" }] },
    jp: { no: "BBG-04", name: "ZEROG 스타디움 어택타입", sale: "일반 판매", releaseDate: "2012-03-31", price: "2100", composition: [{ name: "ZEROG 스타디움 어택타입", quantity: "1개", target: "TOOLS-ZEROG-ATTACK-BEYSTADIUM" }] }} },
  { id: "PRODUCT-BBG-05", series: "metal fight", no: "BBG-05", sale: "일반 판매", releases: {
    kr: { no: "BBG-05", name: "제로G 라이트런처", sale: "일반 판매", releaseDate: "2012-09-12", price: "9600", composition: [{ name: "제로G 라이트런처", quantity: "1개", target: "TOOLS-ZEROG-LIGHT-LAUNCHER" }] },
    jp: { no: "BBG-05", name: "ZEROG 라이트런처", sale: "일반 판매", releaseDate: "2012-03-31", price: "630", composition: [{ name: "ZEROG 라이트런처", quantity: "1개", target: "TOOLS-ZEROG-LIGHT-LAUNCHER" }] }} },
  { id: "PRODUCT-BBG-06", series: "metal fight", no: "BBG-06", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-06", name: "베이캐리어 ZEROG", sale: "일반 판매", releaseDate: "2012-03-31", price: "2100", composition: [{ name: "베이캐리어 ZEROG", quantity: "1개", target: "TOOLS-ZEROG-BEYCARRIER" }] }} },
  { id: "PRODUCT-BBG-07", series: "metal fight", no: "BBG-07", sale: "일반 판매", releases: {
    kr: { no: "BBG-07", name: "제로G 런처그립", sale: "일반 판매", releaseDate: "2012-09-12", price: "9600", composition: [{ name: "제로G 런처그립", quantity: "1개", target: "TOOLS-ZEROG-LAUNCHER-GRIP" }] },
    jp: { no: "BBG-07", name: "ZEROG 런처그립", sale: "일반 판매", releaseDate: "2012-03-31", price: "525", composition: [{ name: "ZEROG 런처그립", quantity: "1개", target: "TOOLS-ZEROG-LAUNCHER-GRIP" }] }} },
  { id: "PRODUCT-BBG-08", series: "metal fight", no: "BBG-08", sale: "일반 판매", releases: {
    kr: { no: "BBG-08", name: "파이레츠 오로자 145D", sale: "일반 판매", kind: "부스터", releaseDate: "2012-09-12", price: "8400", composition: [{ name: "파이레츠 오로자 145D", quantity: "1개", target: "BEY-BBG-08-PIRATES-OROJYA-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { no: "BBG-08", name: "파이레츠 오로자 145D", sale: "일반 판매", kind: "싱크롬부스터", releaseDate: "2012-04-21", price: "892", composition: [{ name: "파이레츠 오로자 145D", quantity: "1개", target: "BEY-BBG-08-PIRATES-OROJYA-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BBG-08-KR-STARTER", series: "metal fight", no: "BBG-08", sale: "일반 판매", releases: {
    kr: { no: "BBG-08", name: "파이레츠 오로자 145D", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "10400", composition: [{ name: "파이레츠 오로자 145D", quantity: "1개", target: "BEY-BBG-08-PIRATES-OROJYA-145D" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBG-09", series: "metal fight", no: "BBG-09", sale: "일반 판매", releases: {
    kr: { no: "BBG-09", name: "시프 피닉 E230GCF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "10400", composition: [{ name: "시프 피닉 E230GCF", quantity: "1개", target: "BEY-BBG-09-THIEF-PHOENIC-E230GCF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-09", name: "ZEROG 랜덤부스터 Vol.1 시프 피닉 E230GCF", sale: "일반 판매", kind: "부스터", releaseDate: "2012-04-21", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BBG-09-THIEF-PHOENIC-E230GCF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BBG-09-THIEF-PHOENIC-E230GCF", "BEY-BBG-09-THIEF-SARAMANDA-230WB", "BEY-BBG-09-WARRIORS-SARAMANDA-E230ES", "BEY-BBG-09-PIRATES-IFRAID-T125GCF", "BEY-BBG-09-SHINOBI-IFRAID-230WD", "BEY-BBG-09-PIRATES-SARAMANDA-T125WB", "BEY-BBG-09-SHINOBI-OROJYA-145ES", "BEY-BBG-09-WARRIORS-OROJYA-145WD"] },
  { id: "PRODUCT-BBG-10", series: "metal fight", no: "BBG-10", sale: "일반 판매", releases: {
    kr: { no: "BBG-10", name: "가디언 리바이저 160SB", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "12000", composition: [{ name: "가디언 리바이저 160SB", quantity: "1개", target: "BEY-BBG-10-GUARDIAN-REVIZER-160SB" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-10", name: "가디언 리바이저 160SB", sale: "일반 판매", kind: "스타터", releaseDate: "2012-05-19", price: "997", composition: [{ name: "가디언 리바이저 160SB", quantity: "1개", target: "BEY-BBG-10-GUARDIAN-REVIZER-160SB" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-11", series: "metal fight", no: "BBG-11", sale: "일반 판매", releases: {
    kr: { no: "BBG-11", name: "제로G 방어형 스타디움", sale: "일반 판매", releaseDate: "2012-09-12", price: "17600", composition: [{ name: "제로G 방어형 스타디움", quantity: "1개", target: "TOOLS-ZEROG-DEFENSE-BEYSTADIUM" }] },
    jp: { no: "BBG-11", name: "ZEROG 스타디움 디펜스타입", sale: "일반 판매", releaseDate: "2012-05-19", price: "2100", composition: [{ name: "ZEROG 스타디움 디펜스타입", quantity: "1개", target: "TOOLS-ZEROG-DEFENSE-BEYSTADIUM" }] }} },
  { id: "PRODUCT-BBG-12", series: "metal fight", no: "BBG-12", sale: "일반 판매", releases: {
    kr: { no: "BBG-12", name: "아처 그리프 C145S", sale: "일반 판매", kind: "부스터", releaseDate: "2012-09-12", price: "8400", composition: [{ name: "아처 그리프 C145S", quantity: "1개", target: "BEY-BBG-12-ARCHER-GRYPH-C145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { no: "BBG-12", name: "아처 그리프 C145S", sale: "일반 판매", kind: "싱크롬부스터", releaseDate: "2012-06-23", price: "892", composition: [{ name: "아처 그리프 C145S", quantity: "1개", target: "BEY-BBG-12-ARCHER-GRYPH-C145S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BBG-12-KR-STARTER", series: "metal fight", no: "BBG-12", sale: "일반 판매", releases: {
    kr: { no: "BBG-12", name: "아처 그리프 C145S", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-09-12", price: "10400", composition: [{ name: "아처 그리프 C145S", quantity: "1개", target: "BEY-BBG-12-ARCHER-GRYPH-C145S" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBG-13", series: "metal fight", no: "BBG-13", sale: "일반 판매", releases: {
    kr: { no: "BBG-13", name: "베이블레이드 싱크롬 배틀 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-10-20", price: "24000", composition: [{ name: "파이레츠 크라켄 A230JSB", quantity: "1개", target: "BEY-BBG-13-PIRATES-KILLERKEN-A230JSB" }, { name: "워리어스 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-13-WARRIORS-IFRAID-W145CF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "제로G 라이트런처", quantity: "1개", target: "TOOLS-ZEROG-LIGHT-LAUNCHER" }] },
    jp: { no: "BBG-13", name: "베이블레이드 싱크롬 배틀 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-06-23", price: "2100", composition: [{ name: "파이레츠 크라켄 A230JSB", quantity: "1개", target: "BEY-BBG-13-PIRATES-KILLERKEN-A230JSB" }, { name: "사무라이 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-13-WARRIORS-IFRAID-W145CF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "ZEROG 라이트런처", quantity: "1개", target: "TOOLS-ZEROG-LIGHT-LAUNCHER" }] }} },
  { id: "PRODUCT-BBG-14", series: "metal fight", no: "BBG-14", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-14", name: "메탈스톤페이스 개조 Ver.(플레임레드)", sale: "일반 판매", releaseDate: "2012-06-23", price: "367", composition: [{ name: "메탈스톤페이스 개조 Ver.", quantity: "2개", target: "STONEFACE-METAL-STONE-FACE-CUSTOM" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BBG-15", series: "metal fight", no: "BBG-15", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-15", name: "메탈스톤페이스 개조 Ver.(오션블루)", sale: "일반 판매", releaseDate: "2012-06-23", price: "367", composition: [{ name: "메탈스톤페이스 개조 Ver.", quantity: "2개", target: "STONEFACE-METAL-STONE-FACE-CUSTOM" }, { name: "홀더툴", quantity: "1개", target: "TOOLS-HOLDER-TOOL" }] }} },
  { id: "PRODUCT-BBG-16", series: "metal fight", no: "BBG-16", sale: "일반 판매", releases: {
    kr: { no: "BBG-16", name: "다크나이트 드래곤 LW160BSF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-10-20", price: "12000", composition: [{ name: "다크나이트 드래곤 LW160BSF", quantity: "1개", target: "BEY-BBG-16-DARK-KNIGHT-DRAGOOON-LW160BSF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-16", name: "다크나이트 드라군 LW160BSF", sale: "일반 판매", kind: "스타터", releaseDate: "2012-07-21", price: "997", composition: [{ name: "다크나이트 드라군 LW160BSF", quantity: "1개", target: "BEY-BBG-16-DARK-KNIGHT-DRAGOOON-LW160BSF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-17", series: "metal fight", no: "BBG-17", sale: "일반 판매", releases: {
    kr: { no: "BBG-17", name: "아처 가고일 SA165WSF", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-10-20", price: "10400", composition: [{ name: "아처 가고일 SA165WSF", quantity: "1개", target: "BEY-BBG-17-ARCHER-GARGOLE-SA165WSF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-17", name: "ZEROG 랜덤부스터 Vol.2 아처 가골 SA165WSF", sale: "일반 판매", kind: "부스터", releaseDate: "2012-07-21", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BBG-17-ARCHER-GARGOLE-SA165WSF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [
    "BEY-BBG-17-ARCHER-GARGOLE-SA165WSF",
    "BEY-BBG-17-GUARDIAN-GARGOLE-M145SB",
    "BEY-BBG-17-SHINOBI-OROJYA-160WSF",
    "BEY-BBG-17-WARRIORS-REVIZER-SA165Q",
    "BEY-BBG-17-PIRATES-GRYPH-160CF",
    "BEY-BBG-17-PIRATES-REVIZER-M145CF",
    "BEY-BBG-17-GUARDIAN-SARAMANDA-W145Q",
    "BEY-BBG-17-ARCHER-IFRAID-W145SB"
  ] },
  { id: "PRODUCT-BBG-18", series: "metal fight", no: "BBG-18", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-18", name: "ZEROG 스타디움 밸런스타입", sale: "일반 판매", releaseDate: "2012-08-11", price: "2100", composition: [{ name: "ZEROG 스타디움 밸런스타입", quantity: "1개", target: "TOOLS-ZEROG-BALANCE-BEYSTADIUM" }] }} },
  { id: "PRODUCT-BBG-19", series: "metal fight", no: "BBG-19", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-19", name: "ZEROG 런처", sale: "일반 판매", releaseDate: "2012-08-11", price: "892", composition: [{ name: "ZEROG 런처", quantity: "1개", target: "TOOLS-ZEROG-LAUNCHER" }] }} },
  { id: "PRODUCT-BBG-20", series: "metal fight", no: "BBG-20", sale: "일반 판매", releases: {
    kr: { no: "BBG-20", name: "반디드 골렘 DF145BS", sale: "일반 판매", kind: "부스터", releaseDate: "2012-10-20", price: "8400", composition: [{ name: "반디드 골렘 DF145BS", quantity: "1개", target: "BEY-BBG-20-BANDID-GOREIM-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]},
    jp: { no: "BBG-20", name: "반디드 고레임 DF145BS", sale: "일반 판매", kind: "싱크롬부스터", releaseDate: "2012-08-11", price: "892", composition: [{ name: "반디드 고레임 DF145BS", quantity: "1개", target: "BEY-BBG-20-BANDID-GOREIM-DF145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }]}} },
  { id: "PRODUCT-BBG-20-KR-STARTER", series: "metal fight", no: "BBG-20", sale: "일반 판매", releases: {
    kr: { no: "BBG-20", name: "반디드 골렘 DF145BS", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-10-20", price: "10400", composition: [{ name: "반디드 골렘 DF145BS", quantity: "1개", target: "BEY-BBG-20-BANDID-GOREIM-DF145BS" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { status: "unreleased" }} },
  { id: "PRODUCT-BBG-21", series: "metal fight", no: "BBG-21", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-21", name: "퍼스트 ZEROG 배틀 세트", sale: "일반 판매", kind: "세트", releaseDate: "2012-08-11", price: "4095", composition: [{ name: "사무라이 이프레이드 W145CF", quantity: "1개", target: "BEY-BBG-21-WARRIORS-IFRAID-W145CF" }, { name: "가디언 리바이저 160SB", quantity: "1개", target: "BEY-BBG-21-GUARDIAN-REVIZER-160SB" }, { name: "컴팩트런처", quantity: "2개", target: "TOOLS-COMPACT-LAUNCHER" }, { name: "ZEROG 스타디움 어택타입", quantity: "1개", target: "TOOLS-ZEROG-ATTACK-BEYSTADIUM" }, { name: "베이블레이드 ZEROG 시리즈 필승 가이드", quantity: "1부", target: "BOOK-BEYBLADE-ZEROG-SERIES-WINNING-GUIDE" }] }} },
  { id: "PRODUCT-BBG-22", series: "metal fight", no: "BBG-22", sale: "일반 판매", releases: {
    kr: { no: "BBG-22", name: "버서커 베기라도스 SR200BWD", sale: "일반 판매", kind: "스타터세트", releaseDate: "2012-10-20", price: "12000", composition: [{ name: "버서커 베기라도스 SR200BWD", quantity: "1개", target: "BEY-BBG-22-BERSERKER-BEGIRADOS-SR200BWD" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]},
    jp: { no: "BBG-22", name: "버서커 베기라도스 SR200BWD", sale: "일반 판매", kind: "스타터", releaseDate: "2012-09-15", price: "997", composition: [{ name: "버서커 베기라도스 SR200BWD", quantity: "1개", target: "BEY-BBG-22-BERSERKER-BEGIRADOS-SR200BWD" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-23", series: "metal fight", no: "BBG-23", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-23", name: "ZEROG 랜덤부스터 Vol.3 반디드 겐블 F230TB", sale: "일반 판매", kind: "부스터", releaseDate: "2012-10-20", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BBG-23-BANDID-GENBULL-F230TB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BBG-23-BANDID-GENBULL-F230TB", "BEY-BBG-23-SHINOBI-GENBULL-130W2D", "BEY-BBG-23-THIEF-SARAMANDA-F230SF", "BEY-BBG-23-SHINOBI-GRYPH-WD145TB", "BEY-BBG-23-ARCHER-PHOENIC-125B", "BEY-BBG-23-PIRATES-PHOENIC-WD145SF", "BEY-BBG-23-ARCHER-KILLERKEN-130B", "BEY-BBG-23-BANDID-KILLERKEN-125W2D"] },
  { id: "PRODUCT-BBG-24", series: "metal fight", no: "BBG-24", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-24", name: "베이블레이드 ZEROG 궁극 싱크롬 DX 세트 어택&밸런스타입", sale: "일반 판매", kind: "세트", releaseDate: "2012-11-17", price: "3300", composition: [{ name: "가골 이프레이드 SA165GCF", quantity: "1개", target: "BEY-BBG-24-GARGOLE-IFRAID-SA165GCF" }, { name: "사라만다 발로 DF145SWD", quantity: "1개", target: "BEY-BBG-24-SARAMANDA-BALRO-DF145SWD" }, { name: "그리프 지라고 WA130HF", quantity: "1개", target: "BEY-BBG-24-GRYPH-GIRAGO-WA130HF" }, { name: "230 트랙", quantity: "1개", target: "TRACK-230" }, { name: "T125 트랙", quantity: "1개", target: "TRACK-TORNADO-125" }, { name: "WSF 버텀", quantity: "1개", target: "BOTTOM-WIDE-SEMI-FLAT" }, { name: "FS 버텀", quantity: "1개", target: "BOTTOM-FLAT-SHARP" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BBG-25", series: "metal fight", no: "BBG-25", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-25", name: "베이블레이드 ZEROG 궁극 싱크롬 DX 세트 디펜스&스테미나타입", sale: "일반 판매", kind: "세트", releaseDate: "2012-11-17", price: "3300", composition: [{ name: "골렘 리바이저 E230SB", quantity: "1개", target: "BEY-BBG-25-GOREIM-REVIZER-E230SB" }, { name: "크라켄 발로 A230WB", quantity: "1개", target: "BEY-BBG-25-KILLERKEN-BALRO-A230WB" }, { name: "오로자 와이번 145EDS", quantity: "1개", target: "BEY-BBG-25-OROJYA-WYVANG-145EDS" }, { name: "AD145 트랙", quantity: "1개", target: "TRACK-ARMOR-DEFENSE-145" }, { name: "160 트랙", quantity: "1개", target: "TRACK-160" }, { name: "WD 버텀", quantity: "1개", target: "BOTTOM-WIDE-DEFENSE" }, { name: "JSB 버텀", quantity: "1개", target: "BOTTOM-JOG-SHARP-BALL" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-BBG-26", series: "metal fight", no: "BBG-26", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-26", name: "사무라이 페가시스 W105R²F", sale: "일반 판매", kind: "스타터", releaseDate: "2012-12-01", price: "997", composition: [{ name: "사무라이 페가시스 W105R²F", quantity: "1개", target: "BEY-BBG-26-WARRIORS-PEGASIS-W105R2F" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-BBG-27", series: "metal fight", no: "BBG-27", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "BBG-27", name: "글레디에이터 바함디아 SP230GF", sale: "일반 판매", kind: "스타터", releaseDate: "2012-12-01", price: "997", composition: [{ name: "글레디에이터 바함디아 SP230GF", quantity: "1개", target: "BEY-BBG-27-GLADIATOR-BAHAMDIA-SP230GF" }, { name: "컴팩트런처", quantity: "1개", target: "TOOLS-COMPACT-LAUNCHER" }]}} },
  { id: "PRODUCT-GAME-METAL-FIGHT-BEYBLADE", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드", sale: "일반 판매", kind: "게임", releaseDate: "2009-03-26", price: "5775", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-METAL-FIGHT-BEYBLADE-CARD" }, { name: "케찰코아틀 90WF", quantity: "1개", target: "BEY-QUETZALCOATL-90WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "베이포인트 리더기", quantity: "1개", target: "TOOLS-BEYPOINT-READER" }] }} },
  { id: "PRODUCT-GAME-GACHINKO-STADIUM", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드: 가칭코 스타디움", sale: "일반 판매", kind: "게임", releaseDate: "2009-11-19", price: "5229", composition: [{ name: "게임 CD", quantity: "1개", target: "GAME-GACHINKO-STADIUM-CD" }, { name: "카운터 레오네 D125B", quantity: "1개", target: "BEY-COUNTER-LEONE-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-BAKUTAN-CYBER-PEGASIS", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "메탈베이블레이드: 사이버 페가시스", sale: "일반 판매", kind: "게임", releaseDate: "2010-04-22", price: "44000", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-BAKUTAN-CYBER-PEGASIS-CARD" }, { name: "사이버 페가시스 100HF", quantity: "1개", target: "BEY-CYBER-PEGASIS-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "", name: "메탈파이트 베이블레이드: 탄생! 사이버 페가시스", sale: "일반 판매", kind: "게임", releaseDate: "2009-12-03", price: "5229", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-BAKUTAN-CYBER-PEGASIS-CARD" }, { name: "사이버 페가시스 100HF", quantity: "1개", target: "BEY-CYBER-PEGASIS-100HF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-BAKUSHIN-SUSANOW-ATTACKS", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드: 폭신 스사노오의 습격!", sale: "일반 판매", kind: "게임", releaseDate: "2010-07-03", price: "5229", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-BAKUSHIN-SUSANOW-ATTACKS-CARD" }, { name: "바쿠신 스사노오 90WF", quantity: "1개", target: "BEY-BAKUSHIN-SUSANOW-90WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-PORTABLE-CHOUZETSU-TENSEI-VULCAN-HORUSEUS", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드 포터블: 초절전생! 발칸 호루세우스", sale: "일반 판매", kind: "게임", releaseDate: "2010-10-21", price: "5775", composition: [{ name: "게임 CD", quantity: "1개", target: "GAME-CHOUZETSU-TENSEI-VULCAN-HORUSEUS-CD" }, { name: "발칸 호루세우스 145D", quantity: "1개", target: "BEY-BB-P01-VULCAN-HORUSEUS-145D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-CHOUJOU-KESSEN-BIG-BANG-BLADERS", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { no: "", name: "메탈베이블레이드: 빅뱅블레이더즈", sale: "일반 판매", kind: "게임", releaseDate: "2011-04-21", price: "45000", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-CHOUJOU-KESSEN-BIG-BANG-BLADERS-CARD" }, { name: "나이트메어 렉스 SW145SD", quantity: "1개", target: "BEY-NIGHTMARE-REX-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "", name: "메탈파이트 베이블레이드: 정상결전! 빅뱅블레이더즈", sale: "일반 판매", kind: "게임", releaseDate: "2010-12-02", price: "5229", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-CHOUJOU-KESSEN-BIG-BANG-BLADERS-CARD" }, { name: "나이트메어 렉스 SW145SD", quantity: "1개", target: "BEY-NIGHTMARE-REX-SW145SD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-GAME-4D-ZEROG-ULTIMATE-TOURNAMENT", series: "metal fight", no: "", sale: "일반 판매", releases: {
    kr: { status: "unreleased" },
    jp: { no: "", name: "메탈파이트 베이블레이드: 4DxZEROG 얼티밋 토너먼트", sale: "일반 판매", kind: "게임", releaseDate: "2013-12-19", price: "5800", composition: [{ name: "게임 카드", quantity: "1개", target: "GAME-4D-ZEROG-ULTIMATE-TOURNAMENT-CARD" }, { name: "사무라이 페가시스 W105R²F", quantity: "1개", target: "BEY-BBG-26-WARRIORS-PEGASIS-W105R2F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} }
];

const releaseRegionLabels = {
  kr: "한국",
  jp: "일본"
};
const releaseSeriesLabels = {
  topblade: "탑블레이드",
  "metal fight": "메탈베이블레이드",
  burst: "베이블레이드 버스트",
  x: "베이블레이드 X"
};
const normalizeProductKind = kind => kind === "기타" ? "" : kind || "";
const baseProductRelease = item => ({
  status: "released",
  no: item.no || "",
  name: item.name || "",
  sale: item.sale || "",
  kind: normalizeProductKind(item.kind),
  tools: item.tools || "",
  releaseDate: item.releaseDate || item.release || "",
  price: item.price || "",
  composition: item.composition || []
});
const blankProductRelease = () => ({
  status: "unreleased",
  no: "",
  name: "",
  sale: "",
  kind: "",
  tools: "",
  releaseDate: "",
  price: "",
  composition: []
});
const productRelease = (item, region = activeReleaseRegion) => {
  const base = baseProductRelease(item);
  const blank = blankProductRelease();
  if (!item.releases) return region === "kr" ? base : blank;
  const release = item.releases?.[region];
  if (!release) return region === "kr" ? base : blank;
  if (release.status === "unreleased") return blank;
  const merged = { ...(region === "kr" ? base : blank), ...release, status: release.status || "released" };
  return { ...merged, kind: normalizeProductKind(merged.kind) };
};
const productReleaseValue = (item, key, region = activeReleaseRegion) => productRelease(item, region)[key] || "";
const productReleasedInRegion = (item, region = activeReleaseRegion) => productRelease(item, region).status !== "unreleased";
const productDisplayRegion = (item, region = "kr") => {
  if (productReleasedInRegion(item, region)) return region;
  return productReleasedInRegion(item, "jp") ? "jp" : region;
};
const productDisplayRelease = (item, region = "kr") => productRelease(item, productDisplayRegion(item, region));
const seriesLabels = { topblade: "탑블레이드", "metal fight": "메탈베이블레이드", burst: "베이블레이드 버스트", x: "베이블레이드 X" };
const itemSeries = item => item.series || "metal fight";
const itemSeriesLabel = item => seriesLabels[itemSeries(item)] || itemSeries(item);
const productDisplayName = (item, region = activeReleaseRegion) => {
  const release = productDisplayRelease(item, region);
  if (release.name) return release.name;
  const baseName = item.name || "";
  return baseName || item.no || "";
};
const isoDateParts = value => value ? String(value).match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/) : null;
const dotDateLabel = (value, fallbackLabel, includeDay = false) => {
  const match = isoDateParts(value);
  if (!match || (includeDay && !match[3])) return fallbackLabel(value);
  const parts = [match[1], Number(match[2])];
  if (includeDay) parts.push(Number(match[3]));
  return `${parts.join(".")}.`;
};
const responsiveDateSpans = (fullClass, compactClass, fullLabel, compactLabel) =>
  `<span class="${fullClass}">${fullLabel}</span><span class="${compactClass}">${compactLabel}</span>`;
const releaseDateLabel = value => {
  if (!value) return "";
  const match = isoDateParts(value);
  return match ? `${match[1]}년 ${Number(match[2])}월` : value;
};
const releaseDateCompactLabel = value => dotDateLabel(value, releaseDateLabel);
const animeAirDateLabel = value => {
  if (!value) return "";
  const match = isoDateParts(value);
  return match?.[3] ? `${match[1]}년 ${Number(match[2])}월 ${Number(match[3])}일` : value;
};
const animeAirDateCompactLabel = value => dotDateLabel(value, animeAirDateLabel, true);
const releaseDateSortValue = value => {
  if (!value) return Number.MAX_SAFE_INTEGER;
  const match = isoDateParts(value);
  if (!match) return Number.MAX_SAFE_INTEGER;
  return Number(`${match[1]}${match[2]}${match[3] || "15"}`);
};
const priceLabel = (value, region = "kr") => {
  if (!value) return "";
  const digits = String(value).replace(/[^\d]/g, "");
  if (!digits) return "";
  const amount = Number(digits);
  if (!Number.isFinite(amount)) return "";
  const currency = region === "jp" ? "\u00a5" : "\u20a9";
  return `${currency}${amount.toLocaleString("ko-KR")}`;
};
const releasePriceSortValue = value => {
  const digits = String(value || "").replace(/[^\d]/g, "");
  if (!digits) return Number.MAX_SAFE_INTEGER;
  const amount = Number(digits);
  return Number.isFinite(amount) ? amount : Number.MAX_SAFE_INTEGER;
};
const releaseKindSortValue = kind => {
  const value = kind || "";
  if (value.includes("스타터")) return 0;
  if (value.includes("부스터")) return 1;
  if (value.includes("세트")) return 2;
  if (value.includes("게임")) return 3;
  return 4;
};
const releaseDropdownOptions = (entries, activeValue, dataAttr) => entries
  .map(([value, label]) => `<button type="button" class="ui-dropdown-item ${activeValue === value ? "active" : ""}" ${dataAttr}="${value}">${label}</button>`)
  .join("");
const releaseRegionTabs = () => `<div class="release-region-tabs" role="tablist" aria-label="출시 지역">
  ${Object.entries(releaseRegionLabels).map(([value, label]) => `<button type="button" role="tab" class="ui-tab-button ${activeReleaseRegion === value ? "active" : ""}" data-release-region="${value}" aria-selected="${activeReleaseRegion === value ? "true" : "false"}">${label}</button>`).join("")}
</div>`;
const escapeAttributeValue = value => String(value || "")
  .replace(/&/g, "&amp;")
  .replace(/"/g, "&quot;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");
const escapeHtml = escapeAttributeValue;
const releaseControls = () => `<div class="release-dropdowns" aria-label="출시 정보 필터">
  ${releaseRegionTabs()}
  <details class="catalog-dropdown release-dropdown">
    <summary><b class="catalog-dropdown-value">${releaseSeriesLabels[activeReleaseSeries]}</b></summary>
    <div class="catalog-dropdown-menu">
      ${releaseDropdownOptions(Object.entries(releaseSeriesLabels), activeReleaseSeries, "data-release-series")}
    </div>
  </details>
  <div class="search-box release-search-box" role="search">
    <span class="search-icon" aria-hidden="true"></span>
    <input id="releaseSearchInput" type="search" placeholder="표 안에서 검색" value="${escapeAttributeValue(activeReleaseQuery)}" />
  </div>
</div>`;

const toolsItems = [
  { id: "TOOLS-TOOL", name: "툴", en: "Tool", category: "기타", desc: "" },
  { id: "TOOLS-BEYPOINT-CARD", name: "포인트카드", jpName: "베이포인트카드", en: "BeyPoint Card", category: "기타", desc: "" },
  { id: "TOOLS-BEYPOINT-READER", name: "베이포인트 리더기", en: "BeyPoint Reader", category: "기타", desc: "" },
  { id: "TOOLS-BEYCARD", name: "베이카드", en: "BeyCard", category: "기타", desc: "" },
  { id: "TOOLS-CHARACTER-CARD", name: "캐릭터카드", en: "Character Card", category: "기타", desc: "" },
  { id: "TOOLS-PEGASIS-GLOVE", name: "페가시스 장갑", en: "Pegasis Glove", category: "기타", desc: "" },
  { id: "TOOLS-LDRAGO-WRISTBAND", name: "엘드라고 손목밴드", en: "L-Drago Wristband", category: "기타", desc: "" },
  { id: "TOOLS-GRAVITY-WRISTBAND", name: "그라비티 손목밴드", en: "Gravity Wristband", category: "기타", desc: "" },
  { id: "TOOLS-POINTER", name: "포인터", jpName: "베이포인터", en: "Pointer", category: "기타", desc: "" },
  { id: "TOOLS-HOLDER-TOOL", name: "홀더툴", en: "Holder Tool", category: "기타", desc: "" },
  { id: "TOOLS-3SEG-LAUNCHER-GRIP", name: "베이카드 런처그립", jpName: "3세그 런처그립", en: "3 Segment Launcher Grip", category: "그립", desc: "" },
  { id: "TOOLS-LAUNCHER-GRIP", name: "런처그립", en: "Launcher Grip", category: "그립", desc: "" },
  { id: "TOOLS-GRIP-RUBBER", name: "그립러버", en: "Grip Rubber", category: "그립", desc: "" },
  { id: "TOOLS-GRIP-SUPPORT", name: "그립서포트", en: "Grip Support", category: "그립", desc: "" },
  { id: "TOOLS-LIGHT-LAUNCHER", name: "라이트런처", en: "Light Launcher", category: "런처", desc: "" },
  { id: "TOOLS-LIGHT-LAUNCHER-2", name: "라이트런처2", en: "Light Launcher 2", category: "런처", desc: "" },
  { id: "TOOLS-LIGHT-LAUNCHER-2L", name: "라이트런처2L", en: "Light Launcher 2 L", category: "런처", desc: "" },
  { id: "TOOLS-LIGHT-LAUNCHER-LR", name: "라이트런처LR", en: "Light Launcher LR", category: "런처", desc: "" },
  { id: "TOOLS-COMPACT-LAUNCHER", name: "컴팩트런처", en: "Compact Launcher", category: "런처", desc: "" },
  { id: "TOOLS-ZEROG-LIGHT-LAUNCHER", name: "제로G 라이트런처", jpName: "ZEROG 라이트런처", en: "Zero-G Light Launcher", category: "런처", desc: "" },
  { id: "TOOLS-ZEROG-LAUNCHER", name: "제로G런처", jpName: "ZEROG 런처", en: "Zero-G Launcher", category: "런처", desc: "" },
  { id: "TOOLS-ZEROG-LAUNCHER-GRIP", name: "제로G 런처그립", jpName: "ZEROG 런처그립", en: "Zero-G Launcher Grip", category: "그립", desc: "" },
  { id: "TOOLS-POWER-LAUNCHER", name: "파워런처", jpName: "베이런처", en: "Power Launcher", category: "런처", desc: "" },
  { id: "TOOLS-POWER-LAUNCHER-L", name: "파워런처L", jpName: "베이런처L", en: "Power Launcher L", category: "런처", desc: "" },
  { id: "TOOLS-SNIPE-LAUNCHER", name: "스나이프런처", en: "Snipe Launcher", category: "런처", desc: "" },
  { id: "TOOLS-CONTROL-LAUNCHER", name: "컨트롤런처", en: "Control Launcher", category: "런처", desc: "" },
  { id: "TOOLS-DIGITAL-POWER-LAUNCHER", name: "디지털파워런처", en: "Digital Power Launcher", category: "런처", desc: "" },
  { id: "TOOLS-LED-SIGHT", name: "LED스코프라이트", jpName: "LED사이트", en: "LED Sight", category: "기타", desc: "" },
  { id: "TOOLS-POWER-LAUNCHER-SUSPENSION", name: "파워런처 서스펜션", jpName: "베이런처 서스펜션", en: "Power Launcher Suspension", category: "기타", desc: "" },
  { id: "TOOLS-ATTACK-BEYSTADIUM", name: "공격형 베이스타디움", jpName: "베이스타디움 어택타입", en: "Beystadium Attack Type", category: "스타디움", desc: "공격형의 힘을 끌어내는 베이블레이드 전용 스타디움!" },
  { id: "TOOLS-ZEROG-ATTACK-BEYSTADIUM", name: "제로G 공격형 스타디움", jpName: "ZEROG 스타디움 어택타입", en: "Zero-G Stadium Attack Type", category: "스타디움", desc: "" },
  { id: "TOOLS-WIDE-SQUARE-BEYSTADIUM", name: "스퀘어형 베이스타디움", jpName: "베이스타디움 어택타입", en: "Beystadium Wide Square Type", category: "스타디움", desc: "" },
  { id: "TOOLS-TRIPLE-BEYSTADIUM", name: "트리플형 베이스타디움", en: "Triple Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-SUPER-ATTACK-BEYSTADIUM", name: "초공격형 베이스타디움", jpName: "베이스타디움 슈퍼어택타입", en: "Beystadium Super Attack Type", category: "스타디움", desc: "" },
  { id: "TOOLS-BALANCE-BEYSTADIUM", name: "밸런스형 베이스타디움", jpName: "베이스타디움 밸런스타입", en: "Beystadium Balance Type", category: "스타디움", desc: "" },
  { id: "TOOLS-ZEROG-DEFENSE-BEYSTADIUM", name: "제로G 방어형 스타디움", jpName: "ZEROG 스타디움 디펜스타입", en: "Zero-G Stadium Defense Type", category: "스타디움", desc: "" },
  { id: "TOOLS-ZEROG-BALANCE-BEYSTADIUM", name: "제로G 밸런스형 스타디움", jpName: "ZEROG 스타디움 밸런스타입", en: "Zero-G Stadium Balance Type", category: "스타디움", desc: "" },
  { id: "TOOLS-STAMINA-BEYSTADIUM", name: "스테미너형 베이스타디움", jpName: "베이스타디움 스테미너타입", en: "Beystadium Stamina Type", category: "스타디움", desc: "" },
  { id: "TOOLS-STANDARD-BEYSTADIUM", name: "표준형 베이스타디움", jpName: "베이스타디움 스탠다드타입", en: "Beystadium Standard Type", category: "스타디움", desc: "" },
  { id: "TOOLS-EXTREME-BEYSTADIUM", name: "익스트림 베이스타디움", en: "Extreme Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-TORNADO-BEYSTADIUM", name: "토네이도 베이스타디움", en: "Tornado Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-RUSH-BEYSTADIUM", name: "러시형 베이스타디움", jpName: "슈퍼컨트롤 베이블레이드 전용 스타디움", en: "Rush Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-ULTIMATE-BEYSTADIUM", name: "얼티메이트 베이스타디움", en: "Ultimate Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-OVER-FENCE", name: "오버펜스", en: "Over Fence", category: "기타", desc: "" },
  { id: "TOOLS-CARABINER-GRIP", name: "카라비나그립", en: "Carabiner Grip", category: "그립", desc: "" },
  { id: "TOOLS-ANGLE-COMPASS", name: "앵글컴파스", en: "Angle Compass", category: "기타", desc: "" },
  { id: "TOOLS-BEYCARRIER-WAIST", name: "베이캐리어 웨이스트타입", en: "Bey Carrier Waist Type", category: "기타", desc: "" },
  { id: "TOOLS-BEYCARRIER-HARD", name: "베이캐리어 하드타입", en: "Bey Carrier Hard Type", category: "기타", desc: "" },
  { id: "TOOLS-ZEROG-BEYCARRIER", name: "베이캐리어 ZEROG", en: "Bey Carrier Zero-G", category: "기타", desc: "" },
  { id: "TOOLS-BEY-DECK-CASE", name: "베이 덱 케이스", en: "Bey Deck Case", category: "기타", desc: "" },
  { id: "TOOLS-METAL-ASSIST", name: "메탈어시스트", en: "Metal Assist", category: "기타", desc: "" },
  { id: "TOOLS-LAUNCHER-RUBBER", name: "런처러버", en: "Launcher Rubber", category: "기타", desc: "" },
  { id: "TOOLS-POWER-LAUNCHER-LR", name: "파워런처LR", jpName: "베이런처LR", en: "Power Launcher LR", category: "런처", desc: "" },
  { id: "TOOLS-CARRIER-CASE", name: "캐리어케이스", en: "Carrier Case", category: "기타", desc: "" },
  { id: "TOOLS-BATTLE-BLADERS-TOOLBOX", name: "배틀블레이더즈 툴박스", en: "Battle Bladers Toolbox", category: "기타", desc: "" }
];

const bookItems = [
  { id: "BOOK-BEYBLADE-ZEROG-SERIES-WINNING-GUIDE", name: "베이블레이드 ZEROG 시리즈 필승 가이드", en: "Beyblade Zero-G Series Winning Guide", category: "공략집", desc: "" }
];

const gameItems = [
  { id: "GAME-METAL-FIGHT-BEYBLADE-CARD", name: "메탈파이트 베이블레이드 게임 카드", category: "게임", desc: "" },
  { id: "GAME-GACHINKO-STADIUM-CD", name: "가칭코 스타디움 게임 CD", category: "게임", desc: "" },
  { id: "GAME-BAKUTAN-CYBER-PEGASIS-CARD", name: "탄생! 사이버 페가시스 게임 카드", category: "게임", desc: "" },
  { id: "GAME-BAKUSHIN-SUSANOW-ATTACKS-CARD", name: "폭신 스사노오의 습격! 게임 카드", category: "게임", desc: "" },
  { id: "GAME-CHOUZETSU-TENSEI-VULCAN-HORUSEUS-CD", name: "초절전생! 발칸 호루세우스 게임 CD", category: "게임", desc: "" },
  { id: "GAME-CHOUJOU-KESSEN-BIG-BANG-BLADERS-CARD", name: "정상결전! 빅뱅블레이더즈 게임 카드", category: "게임", desc: "" },
  { id: "GAME-4D-ZEROG-ULTIMATE-TOURNAMENT-CARD", name: "4DxZEROG 얼티밋 토너먼트 게임 카드", category: "게임", desc: "" }
];

const itemsById = new Map(items.map(item => [item.id, item]));
const productItemsById = new Map(productItems.map(item => [item.id, item]));
const toolsItemsById = new Map(toolsItems.map(item => [item.id, item]));
const bookItemsById = new Map(bookItems.map(item => [item.id, item]));
const gameItemsById = new Map(gameItems.map(item => [item.id, item]));
const zeroGBottomStartIndex = items.findIndex(item => item.id === "BOTTOM-CIRCLE-FLAT");
const findCatalogItemById = id => itemsById.get(id) || toolsItemsById.get(id) || bookItemsById.get(id) || gameItemsById.get(id) || productItemsById.get(id) || null;

const cardVisualMarkup = item => item.image
  ? `<img class="bey-image" src="${item.image}" alt="${item.name}" />`
  : "";
const modalArtMarkup = item => item.model || item.modelKey
  ? `<div class="model-viewer" data-model="${item.model || ""}" data-model-key="${item.modelKey || ""}"><p>3D 모델 로딩 중</p><button class="ui-button model-reset" type="button">기본 위치</button></div>`
  : cardVisualMarkup(item);
const beyProductNo = item => item.type === "bey" ? item.productNo || "" : item.en;
const partCategory = item => item.sub || "";
const catalogCardTypeLabel = item => typeLabels[item.type] || item.type || "";
const catalogCardTitle = (label, title, className = "") => {
  const titleClass = ["card-name", className].filter(Boolean).join(" ");
  return `
    <h3 class="${titleClass}">
      <span class="catalog-card-badge">${label}</span>
      <span class="catalog-card-title">${title}</span>
    </h3>`;
};
const partKoName = item => {
  if (!["track", "bottom", "4dbottom"].includes(item.type)) return "";
  const detail = item.sub || "";
  return detail.includes("높이") ? "" : detail;
};
const wheelTypes = ["wheel", "clearwheel", "4dclearwheel", "lightwheel", "metalwheel", "4dmetalwheel", "chromewheel", "crystalwheel"];
const cardInfo = item => {
  if (["track", "bottom", "4dbottom"].includes(item.type)) {
    const fullEn = item.type === "track" && /^\d+$/.test(item.name) ? "&nbsp;" : item.en;
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name, "code-name")}<p class="card-full-en">${fullEn}</p><p class="card-full-ko">${partKoName(item) || "&nbsp;"}</p>`;
  }
  if (item.type === "bey") {
    const combo = partCategory(item);
    const suffix = combo ? ` ${combo}` : "";
    return `${catalogCardTitle(catalogCardTypeLabel(item), `${item.name}${suffix}`)}<p class="card-full-en">${item.en}${suffix}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  if (wheelTypes.includes(item.type)) {
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-full-en">${item.en}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  if (["face", "stoneface"].includes(item.type)) {
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-full-en">${item.en}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-en">${item.en}</p>`;
};
const beySerialNumber = item => {
  if (item.id === "BEY-QUETZALCOATL-90WF") return 10.5;
  if (item.id === "BEY-CYBER-PEGASIS-100HF") return 57.5;
  if (item.id === "BEY-MERCURY-ANUBIUS-85XF") return 69.5;
  if (item.id === "BEY-SOL-BLAZE-V145AS") return 87.5;
  if (item.id === "BEY-DIVINE-CHIMERA-TR145FB") return 90.5;
  if (item.id === "BEY-BB-P01-VULCAN-HORUSEUS-145D") return 90.5;
  if (item.id === "BEY-NIGHTMARE-REX-SW145SD") return 98.5;
  if (item.id === "BEY-OMEGA-DRAGONIS-85XF") return 123.5;
  const match = beyProductNo(item).match(/BB-(\d+)/);
  if (match) return Number(match[1]);
  const zeroGMatch = beyProductNo(item).match(/BBG-(\d+)/);
  return zeroGMatch ? 200 + Number(zeroGMatch[1]) : Number.MAX_SAFE_INTEGER;
};
const wheelTypeOrder = { wheel: 0, clearwheel: 1, "4dclearwheel": 2, lightwheel: 3, metalwheel: 4, "4dmetalwheel": 5, chromewheel: 6, crystalwheel: 7 };
const itemSearchText = item => {
  const labels = item.tags.map(tag => tagLabels[tag] || tag).join(" ");
  const typeText = typeLabels[item.type] || item.type;
  const structureText = item.type === "bey" ? structureLabels[item.structure] || "" : "";
  const battleText = item.battleType ? battleTypeLabel(item.battleType, item) : "";
  const spinText = item.spin ? spinLabel(item.spin) : "";
  const spinAlias = item.spin === "dual" ? "양회전 좌회전 우회전" : "";
  const heightText = item.heightClass ? heightClassLabel(item.heightClass) : "";
  return `${item.name} ${item.en} ${item.sub || ""} ${item.productNo || ""} ${item.desc || ""} ${itemSeriesLabel(item)} ${typeText} ${structureText} ${battleText} ${spinText} ${heightText} ${labels} ${spinAlias}`;
};
const escapeSearchTerm = term => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const searchIncludes = (text, term) => new RegExp(escapeSearchTerm(term), "i").test(text);
const matchesSearchText = (text, query) => {
  if (!query) return true;
  const terms = query.split(",").map(term => term.trim()).filter(Boolean);
  return terms.length ? terms.every(term => searchIncludes(text, term)) : searchIncludes(text, query);
};
const itemMatchesSearch = (item, query) => matchesSearchText(itemSearchText(item), query);

const toolsSearchText = item => `${item.name} ${item.en} ${itemSeriesLabel(item)} ${item.category} ${item.desc}`;
const toolsMatchesSearch = (item, query) => matchesSearchText(toolsSearchText(item), query);
const globalSearchQuery = () => globalSearch?.value.trim() || "";
const searchResultTitleElement = document.querySelector("#searchResultsTitle");
const searchResultMeta = document.querySelector("#searchResultsMeta");
const productSerialNumber = (item, region = activeReleaseRegion) => {
  const no = productReleaseValue(item, "no", region) || item.no || "";
  const match = no.match(/BB-(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};
const compareProductReleaseOrder = (a, b, region = activeReleaseRegion) => {
  const releaseA = productRelease(a, region);
  const releaseB = productRelease(b, region);
  const dateDiff = releaseDateSortValue(releaseA.releaseDate || releaseA.release) - releaseDateSortValue(releaseB.releaseDate || releaseB.release);
  if (dateDiff) return dateDiff;
  const serialDiff = productSerialNumber(a, region) - productSerialNumber(b, region);
  if (serialDiff) return serialDiff;
  return (releaseA.no || a.no || "").localeCompare(releaseB.no || b.no || "", "ko", { numeric: true });
};
const toolsCard = item => `
  <button class="ui-card-button catalog-card product-card" data-tools-id="${item.id}">
    <div class="catalog-card-visual"></div>
    ${catalogCardTitle(item.category, item.name)}
    <p class="card-full-en">${item.en}</p>
    <p class="card-full-ko">&nbsp;</p>
  </button>`;
function productCompositionItems(item, region = activeReleaseRegion) {
  const release = productRelease(item, region);
  const releaseComposition = Array.isArray(release.composition) && release.composition.length ? release.composition : null;
  const regionComposition = releaseComposition || (region === "jp" ? item.compositionJp || item.compositionJapan : item.compositionKr || item.compositionKorea);
  const krReleaseComposition = Array.isArray(item.releases?.kr?.composition) && item.releases.kr.composition.length ? item.releases.kr.composition : null;
  const baseComposition = region === "jp" ? item.composition || krReleaseComposition : region === "kr" ? item.composition : null;
  return regionComposition || baseComposition || [];
}
const compareToolsFirstReleaseMeta = (a, b) =>
  a.dateSort - b.dateSort ||
  a.productIndex - b.productIndex ||
  a.compositionIndex - b.compositionIndex ||
  a.regionIndex - b.regionIndex;
let toolsFirstReleaseMetaCache = null;
const toolsFirstReleaseMetaMap = () => {
  if (toolsFirstReleaseMetaCache) return toolsFirstReleaseMetaCache;
  const map = new Map();
  productItems.forEach((product, productIndex) => {
    Object.keys(releaseRegionLabels).forEach((region, regionIndex) => {
      if (!productReleasedInRegion(product, region)) return;
      const release = productRelease(product, region);
      const dateSort = releaseDateSortValue(release.releaseDate || release.release);
      productCompositionItems(product, region).forEach((part, compositionIndex) => {
        if (!part.target?.startsWith("TOOLS-") || !toolsItemsById.has(part.target)) return;
        const next = { dateSort, productIndex, compositionIndex, regionIndex };
        const prev = map.get(part.target);
        if (!prev || compareToolsFirstReleaseMeta(next, prev) < 0) map.set(part.target, next);
      });
    });
  });
  toolsFirstReleaseMetaCache = map;
  return map;
};
const compareToolsItemsByFirstRelease = (a, b) => {
  const metaA = toolsFirstReleaseMetaMap().get(a.id);
  const metaB = toolsFirstReleaseMetaMap().get(b.id);
  if (metaA && metaB) {
    const metaDiff = compareToolsFirstReleaseMeta(metaA, metaB);
    if (metaDiff) return metaDiff;
  } else if (metaA || metaB) {
    return metaA ? -1 : 1;
  }
  return a.name.localeCompare(b.name, "ko");
};
const matchesCatalogBattleType = item => !selectedCatalogBattleType || item.battleType === selectedCatalogBattleType;
const matchesCatalogSpin = item => {
  if (!selectedCatalogSpin) return true;
  if (selectedCatalogSpin === "dual") return item.spin === "dual";
  return item.spin === selectedCatalogSpin || item.spin === "dual";
};
const deriveCatalogItemFilters = () => {
  if (!selectedCatalogKind) {
    resolvedCatalogItemType = "all";
    catalogItemTypeGroup = null;
  } else if (selectedCatalogKind === "tools") {
    resolvedCatalogItemType = "tools";
    catalogItemTypeGroup = null;
  } else if (selectedCatalogKind === "parts") {
    resolvedCatalogItemType = selectedCatalogSubtype || "parts";
    catalogItemTypeGroup = selectedCatalogSubtype ? catalogTypeGroups[selectedCatalogSubtype] || null : catalogTypeGroups.parts;
  } else {
    resolvedCatalogItemType = selectedCatalogKind;
    catalogItemTypeGroup = null;
  }
  resolvedCatalogStructure = selectedCatalogKind === "bey" ? selectedCatalogStructure : null;
};
const visibleToolsItems = () => {
  const query = globalSearchQuery();
  if (selectedCatalogKind && selectedCatalogKind !== "tools") return [];
  return toolsItems
    .filter(item => (!selectedCatalogSeries || itemSeries(item) === selectedCatalogSeries) && (!selectedCatalogSubtype || item.category === selectedCatalogSubtype) && toolsMatchesSearch(item, query))
    .sort(compareToolsItemsByFirstRelease);
};
const visibleCatalogCoreItems = () => {
  const query = globalSearchQuery();
  if (selectedCatalogKind === "tools") return [];
  const useTypeFilter = resolvedCatalogItemType !== "all";
  const useMetalAttributeFilters = isMetalFightSeries(selectedCatalogSeries);
  return items
    .filter(item => (!selectedCatalogSeries || itemSeries(item) === selectedCatalogSeries) && (!useTypeFilter || (catalogItemTypeGroup ? catalogItemTypeGroup.includes(item.type) : item.type === resolvedCatalogItemType)) && (!useMetalAttributeFilters || !resolvedCatalogStructure || item.structure === resolvedCatalogStructure) && (!useMetalAttributeFilters || matchesCatalogBattleType(item)) && (!useMetalAttributeFilters || matchesCatalogSpin(item)) && itemMatchesSearch(item, query))
    .sort((a, b) => {
      if (useMetalAttributeFilters && a.type === "bey" && b.type === "bey") return beySerialNumber(a) - beySerialNumber(b);
      if (useMetalAttributeFilters && resolvedCatalogItemType === "wheel" && catalogItemTypeGroup) return (wheelTypeOrder[a.type] ?? 99) - (wheelTypeOrder[b.type] ?? 99);
      return 0;
    });
};
const visibleCatalogItems = () => [...visibleCatalogCoreItems(), ...visibleToolsItems()];
const openCatalogCard = card => {
  if (card.dataset.productId) openProductDetail(card.dataset.productId);
  else if (card.dataset.toolsId) openToolsDetail(card.dataset.toolsId);
  else if (card.dataset.bookId) openBookDetail(card.dataset.bookId);
  else if (card.dataset.gameId) openGameDetail(card.dataset.gameId);
  else if (card.dataset.animeEpisodeId) openAnimeEpisodeDetail(card.dataset.animeEpisodeId);
  else if (card.dataset.id) openDetail(card.dataset.id);
};
const bindCatalogCardClicks = gridRoot => {
  if (!gridRoot || gridRoot.dataset.catalogCardClicksBound) return;
  gridRoot.dataset.catalogCardClicksBound = "true";
  gridRoot.addEventListener("click", event => {
    const card = event.target.closest("[data-product-id], [data-tools-id], [data-book-id], [data-game-id], [data-anime-episode-id], [data-id]");
    if (!card || !gridRoot.contains(card)) return;
    event.preventDefault();
    openCatalogCard(card);
  });
};
const renderCatalogCards = ({ gridSelector, countSelector, getItems, cardTemplate }) => {
  const grid = document.querySelector(gridSelector);
  const count = countSelector ? document.querySelector(countSelector) : null;
  if (!grid) return;
  const visible = getItems();
  if (count) count.textContent = visible.length;
  grid.innerHTML = visible.map(cardTemplate).join("");
  bindCatalogCardClicks(grid);
};
const searchScopeLabel = scope => ({ all: "전체", bey: "베이", tools: "장비" })[scope] || "전체";
const normalizeSearchScope = scope => ["all", "bey", "tools"].includes(scope) ? scope : "all";
const updateCatalogCount = () => {
  const count = document.querySelector("#catalogCount");
  if (!count) return;
  count.textContent = visibleCatalogItems().length;
};
const syncCatalogScopeState = () => {
  const panel = document.querySelector('.toy-panel[data-toy-panel="catalog"]');
  if (panel) panel.dataset.catalogScope = selectedCatalogKind || "all";
  updateCatalogCount();
};
const searchHash = (query = globalSearchQuery(), scope = globalSearchScopeValue()) => {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("scope", normalizeSearchScope(scope || "all"));
  return `#search?${params.toString()}`;
};
const searchHashParams = hash => {
  const value = (hash || window.location.hash || "").replace(/^#search\??/, "");
  return new URLSearchParams(value);
};
const isSearchHash = () => window.location.hash.startsWith("#search");
const releaseSearchText = (item, region) => {
  const release = productRelease(item, region);
  if (release.status === "unreleased") return "";
  const compositionText = productCompositionItems(item, region).map(part => `${part.name || ""} ${part.quantity || part.qty || ""}`).join(" ");
  return [
    release.no,
    release.name,
    release.sale,
    release.kind,
    release.releaseDate || release.release,
    release.price,
    compositionText
  ].filter(Boolean).join(" ");
};
const productSearchText = item => [
  item.id,
  item.no,
  item.name,
  seriesLabels[item.series] || item.series || "",
  releaseSearchText(item, "kr"),
  releaseSearchText(item, "jp")
].filter(Boolean).join(" ");
const productMatchesSearch = (item, query) => matchesSearchText(productSearchText(item), query);
const bookSearchText = item => `${item.id} ${item.name} ${item.en || ""} ${item.category || ""} ${item.desc || ""}`;
const bookMatchesSearch = (item, query) => matchesSearchText(bookSearchText(item), query);
const gameSearchText = item => `${item.id} ${item.name} ${item.category || ""} ${item.desc || ""}`;
const gameMatchesSearch = (item, query) => matchesSearchText(gameSearchText(item), query);
const animeEpisodeGlobalSearchText = (episode, index) => [
  episodeHashId(index),
  episode.no || "",
  episode.titles?.kr || "",
  episode.titles?.jp || "",
  animeSeasonLabels[episode.season] || episode.season || "",
  animeAirDateLabel(episode.airDates?.kr || ""),
  animeAirDateLabel(episode.airDates?.jp || ""),
  episode.airDates?.kr || "",
  episode.airDates?.jp || "",
  episode.note || ""
].filter(Boolean).join(" ");
const animeEpisodeMatchesSearch = (episode, index, query) => matchesSearchText(animeEpisodeGlobalSearchText(episode, index), query);
const visibleSearchResultItems = (scope = globalSearchScopeValue(), query = globalSearchQuery()) => {
  scope = normalizeSearchScope(scope);
  const results = [];
  if (scope === "all" || scope === "bey") {
    results.push(...items.filter(item => itemMatchesSearch(item, query)).map(item => ({ kind: "catalog-item", item })));
  }
  if (scope === "all" || scope === "tools") {
    results.push(...toolsItems.filter(item => toolsMatchesSearch(item, query)).map(item => ({ kind: "tools", item })));
  }
  if (scope === "all") {
    results.push(...productItems.filter(item => productMatchesSearch(item, query)).map(item => ({ kind: "product", item })));
    results.push(...bookItems.filter(item => bookMatchesSearch(item, query)).map(item => ({ kind: "book", item })));
    results.push(...gameItems.filter(item => gameMatchesSearch(item, query)).map(item => ({ kind: "game", item })));
    results.push(...animeInfo.episodes
      .map((episode, index) => ({ episode, index }))
      .filter(({ episode, index }) => animeEpisodeMatchesSearch(episode, index, query))
      .map(({ episode, index }) => ({ kind: "anime", item: episode, index })));
  }
  return results;
};
const searchResultType = entry => {
  if (entry.kind === "tools") return "장비";
  if (entry.kind === "product") return "제품";
  if (entry.kind === "book") return "도서";
  if (entry.kind === "game") return "게임";
  if (entry.kind === "anime") return "애니";
  return typeLabels[entry.item.type] || "베이";
};
const searchResultTitle = entry => {
  if (entry.kind === "tools") return entry.item.name;
  if (entry.kind === "product") return productDisplayName(entry.item, activeReleaseRegion);
  if (entry.kind === "book" || entry.kind === "game") return entry.item.name;
  if (entry.kind === "anime") return animeEpisodeTitle(entry.item, activeAnimeRegion);
  const suffix = entry.item.type === "bey" && entry.item.sub ? ` ${entry.item.sub}` : "";
  return `${entry.item.name}${suffix}`;
};
const searchProductSnippet = item => {
  const region = productDisplayRegion(item, activeReleaseRegion);
  const release = productRelease(item, region);
  return [
    release.no || item.no,
    seriesLabels[item.series] || item.series || "",
    release.kind,
    releaseDateLabel(release.releaseDate || release.release),
    priceLabel(release.price, region)
  ].filter(Boolean).join(" · ");
};
const searchAnimeEpisodeSnippet = (episode, region = activeAnimeRegion) => [
  animeSeasonLabels[episode.season] || episode.season || "",
  animeAirDateLabel(episode.airDates?.[region] || ""),
  episode.note || ""
].filter(Boolean).join(" · ");
const searchResultSnippet = entry => {
  if (entry.kind === "tools") {
    return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "장비 정보를 확인할 수 있습니다.";
  }
  if (entry.kind === "product") return searchProductSnippet(entry.item) || "제품 정보를 확인할 수 있습니다.";
  if (entry.kind === "book") return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "도서 정보를 확인할 수 있습니다.";
  if (entry.kind === "game") return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "게임 정보를 확인할 수 있습니다.";
  if (entry.kind === "anime") return searchAnimeEpisodeSnippet(entry.item) || "애니 회차 정보를 확인할 수 있습니다.";
  const labels = itemAttributeLabels(entry.item).slice(0, 4);
  const parts = [
    entry.item.productNo,
    itemSeriesLabel(entry.item),
    entry.item.type === "bey" ? structureLabels[entry.item.structure] : "",
    labels.join(" · "),
    entry.item.desc
  ].filter(Boolean);
  return parts.join(" · ") || "베이와 부품 정보를 확인할 수 있습니다.";
};
const searchResultAttributes = entry => {
  if (entry.kind === "tools") return `data-tools-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "product") return `data-product-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "book") return `data-book-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "game") return `data-game-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "anime") return `data-anime-episode-id="${escapeAttributeValue(episodeHashId(entry.index))}"`;
  return `data-id="${escapeAttributeValue(entry.item.id)}"`;
};
const searchResultButton = entry => {
  const attr = searchResultAttributes(entry);
  return `<button class="search-result-item" type="button" ${attr}>
    <span class="search-result-kind">${escapeHtml(searchResultType(entry))}</span>
    <strong>${escapeHtml(searchResultTitle(entry))}</strong>
    <span class="search-result-snippet">${escapeHtml(searchResultSnippet(entry))}</span>
  </button>`;
};
const renderGlobalCards = () => {
  const grid = document.querySelector("#globalGrid");
  const count = document.querySelector("#globalCount");
  if (!grid || !count) return;
  const query = globalSearchQuery();
  const scope = normalizeSearchScope(globalSearchScopeValue());
  const visible = visibleSearchResultItems(scope, query);
  count.textContent = visible.length;
  if (searchResultTitleElement) {
    searchResultTitleElement.textContent = query
      ? `${query}의 검색결과`
      : scope === "all"
        ? "전체 검색결과"
        : `${searchScopeLabel(scope)} 검색결과`;
  }
  if (searchResultMeta) {
    searchResultMeta.textContent = scope === "all" ? "" : `${searchScopeLabel(scope)} 범위`;
  }
  grid.innerHTML = visible.length
    ? visible.map(searchResultButton).join("")
    : `<div class="search-empty"><strong>검색결과가 없습니다.</strong><p>검색어를 줄이거나 범위를 전체로 바꿔보세요.</p></div>`;
  bindCatalogCardClicks(grid);
};

const orderedTags = item => item.tags.slice();
const itemAttributeLabels = item => [
  item.battleType ? battleTypeLabel(item.battleType, item) : "",
  item.spin ? spinLabel(item.spin) : "",
  item.heightClass ? heightClassLabel(item.heightClass) : "",
  ...orderedTags(item).map(tag => tagLabels[tag] || tag)
].filter(Boolean);
const visibleModalTags = item => orderedTags(item);

function modalTagDescription(tag) {
  return "";
}

const embeddedModels = { BO_B: "ZyANCg0KdXNlbXRsIEJPX0JhLnBuZw0KDQp2IDUuMDk4MzMgOC41NjQ0MyAtNi41NDk1OA0Kdm4gMC4zNDYwMDMgMC43ODIzOSAtMC41MTc4Mw0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgNC4wOTk5OCA4LjU2NDQ0IC03LjIxNjY2DQp2biAwLjM0NjAwMyAwLjc4MjM5IC0wLjUxNzgzDQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiA1LjUxNTQzIDkuMDY0NDQgLTUuNTE1NDMNCnZuIDAuMzQ2MDAzIDAuNzgyMzkgLTAuNTE3ODMNCnZ0IDEgMQ0KdiAyLjk4NDkzIDkuMDY0NDMgLTcuMjA2MjYNCnZuIDAuMzQ2MDAzIDAuNzgyMzkgLTAuNTE3ODMNCnZ0IDEgMA0KdiA1LjA5ODMzIDguNTY0NDMgLTYuNTQ5NTgNCnZuIDAuOTI3NDA4IDAgLTAuMzc0MDUyDQp2dCAwIDANCnYgNS41MTU0MyA5LjA2NDQ0IC01LjUxNTQzDQp2biAwLjcwNzEwNyAwIC0wLjcwNzEwNw0KdnQgMSAwDQp2IDUuMDk4MzMgNi40ODQ1NCAtNi41NDk1OA0Kdm4gMC45Mjc0MDggMCAtMC4zNzQwNTINCnZ0IDEgMA0KdiA1LjUxNTQzIDUuOTg0NTMgLTUuNTE1NDMNCnZuIDAuNzA3MTA3IDAgLTAuNzA3MTA3DQp2dCAwIDANCnYgMi45ODQ5MyA5LjA2NDQzIC03LjIwNjI2DQp2biAwLjM4MjY4NCAwIC0wLjkyMzg3OQ0KdnQgMCAwDQp2IDQuMDk5OTggOC41NjQ0NCAtNy4yMTY2Ng0Kdm4gLTAuMDA5MzI3MTMgMCAtMC45OTk5NTYNCnZ0IDEgMA0KdiAyLjk4NDkzIDUuOTg0NTMgLTcuMjA2MjYNCnZuIDAuMzgyNjg0IDAgLTAuOTIzODc5DQp2dCAxIDANCnYgNC4wOTk5OCA2LjQ4NDUzIC03LjIxNjY2DQp2biAtMC4wMDkzMjcxMyAwIC0wLjk5OTk1Ng0KdnQgMCAwDQp2IDQuMDk5OTggOC41NjQ0NCAtNy4yMTY2Ng0Kdm4gMC41NTU1NzEgMCAtMC44MzE0NjkNCnZ0IDAgMA0KdiA1LjA5ODMzIDguNTY0NDMgLTYuNTQ5NTgNCnZuIDAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAxIDANCnYgNC4wOTk5OCA2LjQ4NDUzIC03LjIxNjY2DQp2biAwLjU1NTU3MSAwIC0wLjgzMTQ2OQ0KdnQgMSAwDQp2IDUuMDk4MzMgNi40ODQ1NCAtNi41NDk1OA0Kdm4gMC41NTU1NzEgMCAtMC44MzE0NjkNCnZ0IDAgMA0KdiA1LjUxNTQzIDUuOTg0NTMgLTUuNTE1NDMNCnZuIDAuMzQ2MDA2IC0wLjc4MjM4NyAtMC41MTc4MzINCnZ0IDEgMA0KdiAyLjk4NDkzIDUuOTg0NTMgLTcuMjA2MjYNCnZuIDAuMzQ2MDA2IC0wLjc4MjM4NyAtMC41MTc4MzINCnZ0IDEgMQ0KdiA1LjA5ODMzIDYuNDg0NTQgLTYuNTQ5NTgNCnZuIDAuMzQ2MDA2IC0wLjc4MjM4NyAtMC41MTc4MzINCnZ0IDAuMDAwMTg4MDU3IDAuMzE2MTU5DQp2IDQuMDk5OTggNi40ODQ1MyAtNy4yMTY2Ng0Kdm4gMC4zNDYwMDYgLTAuNzgyMzg3IC0wLjUxNzgzMg0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgMi45ODQ5MyA1Ljk4NDUzIC03LjIwNjI2DQp2biAwLjI3ODk0OCAtMC42ODIyNjEgLTAuNjc1ODAyDQp2dCAwIDANCnYgNS41MTU0MyA1Ljk4NDUzIC01LjUxNTQzDQp2biAwLjUyMTI2MSAtMC42NzU3MDMgLTAuNTIxMjYNCnZ0IDEgMA0KdiAyLjgwMDQgNS40NTg0NyAtNi43NjA3Nw0Kdm4gMC4yNzg5NDggLTAuNjgyMjYxIC0wLjY3NTgwMg0KdnQgMCAxDQp2IDUuMTc0NDcgNS40NTg0NiAtNS4xNzQ0Nw0Kdm4gMC41MjEyNjEgLTAuNjc1NzAzIC0wLjUyMTI2DQp2dCAxIDENCnYgMy4xNzkxMiA1LjQ1MzYzIC01LjA4ODUzDQp2biAtMC42NjI4NzQgLTAuMDAxNDE2MjYgMC43NDg3Mw0KdnQgMCAxDQp2IDQuNjQ5MzMgNS40NTM2NCAtMy43OTI1OA0Kdm4gLTAuODE2MDg4IDAuMDAwMjU0NTQ4IDAuNTc3OTI4DQp2dCAwIDAuNzUNCnYgMy4xNzkxMiA4LjQ1MzY0IC01LjA4ODU0DQp2biAtMC42NjI4NzQgLTAuMDAxNDE2MjYgMC43NDg3Mw0KdnQgMSAxDQp2IDQuNjgwNzEgOC40NTM2MyAtMy43NTM0Ng0Kdm4gLTAuNzgxNzcyIDAuMDAwMzkwNDgzIDAuNjIzNTY1DQp2dCAxIDAuNzUNCnYgNS4xMDQ3NiA4Ljk1MzYzIC00LjAyMzg1DQp2biAtMC41NTQwNDUgMC43MDcxOTggMC40MzkyMDkNCnZ0IDAuNSAwDQp2IDMuNDQ0MDUgOC45NTM2MyAtNS41MTI1OA0Kdm4gLTAuMTgzMjgyIDAuNzM2NDEyIDAuNjUxMjMzDQp2dCAxIDANCnYgNC42ODA3MSA4LjQ1MzYzIC0zLjc1MzQ2DQp2biAtMC41NTQwNDUgMC43MDcxOTggMC40MzkyMDkNCnZ0IDAuNSAxDQp2IDMuMTc5MTIgOC40NTM2NCAtNS4wODg1NA0Kdm4gLTAuMTgzMjgyIDAuNzM2NDEyIDAuNjUxMjMzDQp2dCAxIDENCnYgMy40NDQwNSA4Ljk1MzYzIC01LjUxMjU4DQp2biAtMC4wMjQwNDQgMC45OTc0NjEgMC4wNjcwMjk5DQp2dCAwLjM5NzY1MyAwDQp2IDUuMTA0NzYgOC45NTM2MyAtNC4wMjM4NQ0Kdm4gLTAuMDY0MjU4NCAwLjk5NjI0IDAuMDU4MTE0Mg0KdnQgMSAwDQp2IDIuOTg0OTMgOS4wNjQ0MyAtNy4yMDYyNg0Kdm4gLTAuMDI0MDQ0IDAuOTk3NDYxIDAuMDY3MDI5OQ0KdnQgMCAwLjI1OTQ4MQ0KdiA1LjUxNTQzIDkuMDY0NDQgLTUuNTE1NDMNCnZuIC0wLjA2NDI1ODQgMC45OTYyNCAwLjA1ODExNDINCnZ0IDAuODEzNjk1IDAuMzc1MTY0DQp2IDUuNTE1NDMgOS4wNjQ0NCAtNS41MTU0Mw0Kdm4gMC41MTc4MzYgMC43ODIzODQgLTAuMzQ2MDA3DQp2dCAxIDANCnYgNy4yMDYyNiA5LjA2NDQ0IC0yLjk4NDkzDQp2biAwLjUxNzgzNiAwLjc4MjM4NCAtMC4zNDYwMDcNCnZ0IDEgMQ0KdiA2LjU0OTU4IDguNTY0NDMgLTUuMDk4MzMNCnZuIDAuNTE3ODM2IDAuNzgyMzg0IC0wLjM0NjAwNw0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgNy4yMTY2NiA4LjU2NDQzIC00LjA5OTk4DQp2biAwLjUxNzgzNiAwLjc4MjM4NCAtMC4zNDYwMDcNCnZ0IDAuMDAwMTg4MDU3IDAuNjgzODQxDQp2IDguMjM2MzIgOC41NjQ0MyAtMS4wMjYxOQ0Kdm4gMC42MTA4MjQgMC43ODIzODggLTAuMTIxNDk5DQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiA4LjAwMjA3IDguNTY0NDMgLTIuMjAzODMNCnZuIDAuNjEwODI0IDAuNzgyMzg4IC0wLjEyMTQ5OQ0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgNy44IDkuMDY0NDMgMA0Kdm4gMC42MTA4MjQgMC43ODIzODggLTAuMTIxNDk5DQp2dCAxIDENCnYgNy4yMDYyNiA5LjA2NDQ0IC0yLjk4NDkzDQp2biAwLjYxMDgyNCAwLjc4MjM4OCAtMC4xMjE0OTkNCnZ0IDEgMA0KdiA3LjIxNjY2IDguNTY0NDMgLTQuMDk5OTgNCnZuIDAuOTk5OTU2IDAgMC4wMDkzMjU5OA0KdnQgMCAwDQp2IDcuMjA2MjYgOS4wNjQ0NCAtMi45ODQ5Mw0Kdm4gMC45Mjc0MDggMCAtMC4zNzQwNTINCnZ0IDEgMA0KdiA3LjIxNjY2IDYuNDg0NTMgLTQuMDk5OTgNCnZuIDAuOTk5OTU2IDAgMC4wMDkzMjU5OA0KdnQgMSAwDQp2IDcuMjA2MjYgNS45ODQ1NCAtMi45ODQ5Mw0Kdm4gMC45Mjc0MDggMCAtMC4zNzQwNTINCnZ0IDAgMA0KdiA1LjUxNTQzIDkuMDY0NDQgLTUuNTE1NDMNCnZuIDAuNzA3MTA3IDAgLTAuNzA3MTA3DQp2dCAwIDANCnYgNi41NDk1OCA4LjU2NDQzIC01LjA5ODMzDQp2biAwLjM4MjY4NCAwIC0wLjkyMzg3OQ0KdnQgMSAwDQp2IDUuNTE1NDMgNS45ODQ1MyAtNS41MTU0Mw0Kdm4gMC43MDcxMDcgMCAtMC43MDcxMDcNCnZ0IDEgMA0KdiA2LjU0OTU4IDYuNDg0NTQgLTUuMDk4MzMNCnZuIDAuMzgyNjg0IDAgLTAuOTIzODc5DQp2dCAwIDANCnYgNi41NDk1OCA4LjU2NDQzIC01LjA5ODMzDQp2biAwLjgzMTQ2OSAwIC0wLjU1NTU3DQp2dCAwIDANCnYgNy4yMTY2NiA4LjU2NDQzIC00LjA5OTk4DQp2biAwLjgzMTQ2OSAwIC0wLjU1NTU3DQp2dCAxIDANCnYgNi41NDk1OCA2LjQ4NDU0IC01LjA5ODMzDQp2biAwLjgzMTQ2OSAwIC0wLjU1NTU3DQp2dCAxIDANCnYgNy4yMTY2NiA2LjQ4NDUzIC00LjA5OTk4DQp2biAwLjgzMTQ2OSAwIC0wLjU1NTU3DQp2dCAwIDANCnYgOC4yMzYzMiA4LjU2NDQzIC0xLjAyNjE5DQp2biAwLjkyMDI3IDAgMC4zOTEyODQNCnZ0IDAgMA0KdiA3LjggOS4wNjQ0MyAwDQp2biAwLjk5OTk1NiAwIDAuMDA5MzI1OTgNCnZ0IDEgMA0KdiA4LjIzNjMyIDYuNDg0NTMgLTEuMDI2MTkNCnZuIDAuOTIwMjcgMCAwLjM5MTI4NA0KdnQgMSAwDQp2IDcuOCA1Ljk4NDUzIDANCnZuIDAuOTk5OTU2IDAgMC4wMDkzMjU5OA0KdnQgMCAwDQp2IDcuMjA2MjYgOS4wNjQ0NCAtMi45ODQ5Mw0Kdm4gMC45Mjc0MDggMCAtMC4zNzQwNTINCnZ0IDAgMA0KdiA4LjAwMjA3IDguNTY0NDMgLTIuMjAzODMNCnZuIDAuNzA3MTA3IDAgLTAuNzA3MTA3DQp2dCAxIDANCnYgNy4yMDYyNiA1Ljk4NDU0IC0yLjk4NDkzDQp2biAwLjkyNzQwOCAwIC0wLjM3NDA1Mg0KdnQgMSAwDQp2IDguMDAyMDcgNi40ODQ1MyAtMi4yMDM4Mw0Kdm4gMC43MDcxMDcgMCAtMC43MDcxMDcNCnZ0IDAgMA0KdiA4LjAwMjA3IDguNTY0NDMgLTIuMjAzODMNCnZuIDAuOTgwNzg1IDAgLTAuMTk1MDkNCnZ0IDAgMA0KdiA4LjIzNjMyIDguNTY0NDMgLTEuMDI2MTkNCnZuIDAuOTgwNzg1IDAgLTAuMTk1MDkNCnZ0IDEgMA0KdiA4LjAwMjA3IDYuNDg0NTMgLTIuMjAzODMNCnZuIDAuOTgwNzg1IDAgLTAuMTk1MDkNCnZ0IDEgMA0KdiA4LjIzNjMyIDYuNDg0NTMgLTEuMDI2MTkNCnZuIDAuOTgwNzg1IDAgLTAuMTk1MDkNCnZ0IDAgMA0KdiA3LjggNS45ODQ1MyAwDQp2biAwLjYxMDgxOCAtMC43ODIzOTMgLTAuMTIxNQ0KdnQgMSAwDQp2IDcuMjA2MjYgNS45ODQ1NCAtMi45ODQ5Mw0Kdm4gMC42MTA4MTggLTAuNzgyMzkzIC0wLjEyMTUNCnZ0IDEgMQ0KdiA4LjIzNjMyIDYuNDg0NTMgLTEuMDI2MTkNCnZuIDAuNjEwODE4IC0wLjc4MjM5MyAtMC4xMjE1DQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiA4LjAwMjA3IDYuNDg0NTMgLTIuMjAzODMNCnZuIDAuNjEwODE4IC0wLjc4MjM5MyAtMC4xMjE1DQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiA2LjU0OTU4IDYuNDg0NTQgLTUuMDk4MzMNCnZuIDAuNTE3ODI4IC0wLjc4MjM5MSAtMC4zNDYwMDMNCnZ0IDAuMDAwMTg4MDU3IDAuNjgzODQxDQp2IDcuMjE2NjYgNi40ODQ1MyAtNC4wOTk5OA0Kdm4gMC41MTc4MjggLTAuNzgyMzkxIC0wLjM0NjAwMw0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgNS41MTU0MyA1Ljk4NDUzIC01LjUxNTQzDQp2biAwLjUxNzgyOCAtMC43ODIzOTEgLTAuMzQ2MDAzDQp2dCAxIDENCnYgNy4yMDYyNiA1Ljk4NDU0IC0yLjk4NDkzDQp2biAwLjUxNzgyOCAtMC43ODIzOTEgLTAuMzQ2MDAzDQp2dCAxIDANCnYgNy4yMDYyNiA1Ljk4NDU0IC0yLjk4NDkzDQp2biAwLjY4MTA1OSAtMC42NzU3MDQgLTAuMjgyMTA0DQp2dCAwIDANCnYgNy44IDUuOTg0NTMgMA0Kdm4gMC43MzcxNzEgLTAuNjc1NzA2IC0xLjExNDQ4RS0wNg0KdnQgMSAwDQp2IDYuNzYwNzcgNS40NTg0OCAtMi44MDA0DQp2biAwLjY4MTA1OSAtMC42NzU3MDQgLTAuMjgyMTA0DQp2dCAwIDENCnYgNy4zMTc4IDUuNDU4NDcgMA0Kdm4gMC43MzcxNzEgLTAuNjc1NzA2IC0xLjExNDQ4RS0wNg0KdnQgMSAxDQp2IDUuNTE1NDMgNS45ODQ1MyAtNS41MTU0Mw0Kdm4gMC41MjEyNjEgLTAuNjc1NzAzIC0wLjUyMTI2DQp2dCAwIDANCnYgNy4yMDYyNiA1Ljk4NDU0IC0yLjk4NDkzDQp2biAwLjY4MTA1OSAtMC42NzU3MDQgLTAuMjgyMTA0DQp2dCAxIDANCnYgNS4xNzQ0NyA1LjQ1ODQ2IC01LjE3NDQ3DQp2biAwLjUyMTI2MSAtMC42NzU3MDMgLTAuNTIxMjYNCnZ0IDAgMQ0KdiA2Ljc2MDc3IDUuNDU4NDggLTIuODAwNA0Kdm4gMC42ODEwNTkgLTAuNjc1NzA0IC0wLjI4MjEwNA0KdnQgMSAxDQp2IDUuMTQwNDggNy41MzQ4NyAtMS4zMTMxNg0Kdm4gLTAuMTIxNTQgLTAuOTkyMjI4IDAuMDI2Njg1MQ0KdnQgMC43NSAwLjgzNzIwMQ0KdiA2LjE1MDcyIDcuNDUzNjMgMC4yNjc0MjQNCnZuIC0wLjA5MTE2ODggLTAuOTk1ODE1IC0wLjAwNjQ0MTUzDQp2dCAwLjAwODEwNDU3IDAuNTA1NTkyDQp2IDUuNDgyMDIgNy41MzQ4NyAwLjI3MjAwMg0Kdm4gLTAuMTIwNzM2IC0wLjk5MjMyOCAtMC4wMjY2MDg4DQp2dCAwLjYyOTk4NiAwLjUNCnYgNS42OTAzIDcuNDUwNTcgLTEuOTAyNzkNCnZuIC0wLjkxOTI2IDAuMDAwNzYyNDU4IDAuMzkzNjUNCnZ0IDAuNjYzNTk2IDAuNQ0KdiA0LjY0OTMzIDUuNDUzNjQgLTMuNzkyNTgNCnZuIC0wLjgxNjA4OCAwLjAwMDI1NDU0OCAwLjU3NzkyOA0KdnQgMCAwLjc1DQp2IDUuNjkwNDcgNS40NTM2NCAtMS45MDI1NQ0Kdm4gLTAuOTM3MjI2IDQuMDQ0MDlFLTA1IDAuMzQ4NzIzDQp2dCAwIDAuNQ0KdiA1LjY5MDI4IDguNDUzNjQgLTEuOTAyODINCnZuIC0wLjY5NDgyNCAwLjcwMDc5NyAtMC4xNjE1NjUNCnZ0IDAgMQ0KdiA2LjE2NDQ3IDguOTUzNjMgLTIuMDYxMzgNCnZuIC0wLjcyMzQyOCAwLjY5MDM5NSAwLjAwMjU1NTY5DQp2dCAwIDANCnYgNC42ODA3MSA4LjQ1MzYzIC0zLjc1MzQ2DQp2biAtMC41NTQwNDUgMC43MDcxOTggMC40MzkyMDkNCnZ0IDAuNSAxDQp2IDUuMTA0NzYgOC45NTM2MyAtNC4wMjM4NQ0Kdm4gLTAuNTU0MDQ1IDAuNzA3MTk4IDAuNDM5MjA5DQp2dCAwLjUgMA0KdiA1LjMxMTU5IDguMzcyNCAwLjI3MTgxMQ0Kdm4gLTAuOTkxMDAyIC0wLjEyNTI0NyAtMC4wNDcyMTA2DQp2dCAxIDAuNzUNCnYgNS4xNDAzMyA4LjM3MjQgLTEuMzEzOTQNCnZuIC0wLjk4MjIzMyAtMC4wOTk5MzMzIDAuMTU4ODQ2DQp2dCAxIDENCnYgNS40ODIwMiA3LjUzNDg3IDAuMjcyMDAyDQp2biAtMC45OTEwMDIgLTAuMTI1MjQ3IC0wLjA0NzIxMDYNCnZ0IDAuNjY2NjY3IDAuNzUNCnYgNS4xNDA0OCA3LjUzNDg3IC0xLjMxMzE2DQp2biAtMC45ODIyMzMgLTAuMDk5OTMzMyAwLjE1ODg0Ng0KdnQgMC42NjY2NjcgMQ0KdiA1LjY5MDMgNy40NTA1NyAtMS45MDI3OQ0Kdm4gLTAuNzMxMTA5IC0wLjAwMDM2ODQ1NSAtMC42ODIyNg0KdnQgMCAwDQp2IDUuMTQwNDggNy41MzQ4NyAtMS4zMTMxNg0Kdm4gLTAuNzMxMTA5IC0wLjAwMDM2ODQ1NSAtMC42ODIyNg0KdnQgMSAwDQp2IDUuNjkwMjggOC40NTM2NCAtMS45MDI4Mg0Kdm4gLTAuNzMxMTA5IC0wLjAwMDM2ODQ1NSAtMC42ODIyNg0KdnQgMCAxDQp2IDUuMTQwMzMgOC4zNzI0IC0xLjMxMzk0DQp2biAtMC43MzExMDkgLTAuMDAwMzY4NDU1IC0wLjY4MjI2DQp2dCAxIDENCnYgNS42OTAyOCA4LjQ1MzY0IC0xLjkwMjgyDQp2biAtMC42OTQ4MjQgMC43MDA3OTcgLTAuMTYxNTY1DQp2dCAwIDANCnYgNS44NjEzNSA4Ljk1MzYzIC0xLjM5MzY2DQp2biAtMC42NzIxMzkgMC42OTY1MzUgLTAuMjUxMTMzDQp2dCAxIDANCnYgNi4xNjQ0NyA4Ljk1MzYzIC0yLjA2MTM4DQp2biAtMC43MjM0MjggMC42OTAzOTUgMC4wMDI1NTU2OQ0KdnQgMC42ODMzMzMgMC43MzAxMDYNCnYgNS44NjEzNSA4Ljk1MzYzIC0xLjM5MzY2DQp2biAtMC42NzIxMzkgMC42OTY1MzUgLTAuMjUxMTMzDQp2dCAwIDANCnYgNS42OTAyOCA4LjQ1MzY0IC0xLjkwMjgyDQp2biAtMC42OTQ4MjQgMC43MDA3OTcgLTAuMTYxNTY1DQp2dCAxIDANCnYgNS4xNDAzMyA4LjM3MjQgLTEuMzEzOTQNCnZuIC0wLjYzMzk5MSAwLjc0NTMxOSAtMC4yMDYyODgNCnZ0IDAuNzMwNzY5IDAuNjgyNjI1DQp2IDUuNjkwMyA3LjQ1MDU3IC0xLjkwMjc5DQp2biAtMC45MTkyNiAwLjAwMDc2MjQ1OCAwLjM5MzY1DQp2dCAwLjAwMTQwNzYxIDANCnYgNS42OTA0NyA1LjQ1MzY0IC0xLjkwMjU1DQp2biAtMC45MzcyMjYgNC4wNDQwOUUtMDUgMC4zNDg3MjMNCnZ0IDAuOTk5ODcxIDANCnYgNi4xNTA3MiA3LjQ1MzYzIDAuMjY3NDI0DQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMCAwLjk4NDI5DQp2IDYuMTUwNCA1LjQ1MzY0IDAuMjY4MjkNCnZuIC0wLjk5OTk1NiA2Ljg2ODU3RS0wNSAwLjAwOTM4OTAzDQp2dCAxIDAuOTk4NDgxDQp2IDUuOTk2NyA4Ljk1MzYzIDAuMjkzMzcNCnZuIC0wLjYzODk4MiAwLjc2NjUwNyAtMC4wNjQ1NzM1DQp2dCAwLjc1IDANCnYgNS4zMTE1OSA4LjM3MjQgMC4yNzE4MTENCnZuIC0wLjYzODk4MiAwLjc2NjUwNyAtMC4wNjQ1NzM1DQp2dCAwLjc1IDENCnYgNS4xNDAzMyA4LjM3MjQgLTEuMzEzOTQNCnZuIC0wLjYzMzk5MSAwLjc0NTMxOSAtMC4yMDYyODgNCnZ0IDEgMQ0KdiA1LjY5MDMgNy40NTA1NyAtMS45MDI3OQ0Kdm4gLTAuMTIxNTQgLTAuOTkyMjI4IDAuMDI2Njg1MQ0KdnQgMC40NDc2OTkgMC45Njc2ODENCnYgNS42OTAyOCA4LjQ1MzY0IC0xLjkwMjgyDQp2biAtMC44NzczNjggMC4wMDIxODU1OSAwLjQ3OTgxMw0KdnQgMSAwLjUNCnYgNC42ODA3MSA4LjQ1MzYzIC0zLjc1MzQ2DQp2biAtMC43ODE3NzIgMC4wMDAzOTA0ODMgMC42MjM1NjUNCnZ0IDEgMC43NQ0KdiA1LjEwNDc2IDguOTUzNjMgLTQuMDIzODUNCnZuIC0wLjA2NDI1ODQgMC45OTYyNCAwLjA1ODExNDINCnZ0IDAuMzMzNzY2IDANCnYgNi4xNjQ0NyA4Ljk1MzYzIC0yLjA2MTM4DQp2biAtMC4wNzUyMTIgMC45OTY4MjcgMC4wMjYwNDU4DQp2dCAxIDANCnYgNS41MTU0MyA5LjA2NDQ0IC01LjUxNTQzDQp2biAtMC4wNjQyNTg0IDAuOTk2MjQgMC4wNTgxMTQyDQp2dCAwIDAuMzIxMjc3DQp2IDcuMjA2MjYgOS4wNjQ0NCAtMi45ODQ5Mw0Kdm4gLTAuMDc1MjEyIDAuOTk2ODI3IDAuMDI2MDQ1OA0KdnQgMC45MDUxMTQgMC40MDYyNjINCnYgNi4xNjQ0NyA4Ljk1MzYzIC0yLjA2MTM4DQp2biAtMC4wNzUyMTIgMC45OTY4MjcgMC4wMjYwNDU4DQp2dCAwLjQzMjExOSAwDQp2IDUuODYxMzUgOC45NTM2MyAtMS4zOTM2Ng0Kdm4gLTAuMDY3ODEwNiAwLjk5NzY4MyAwLjAwNTQxNjIzDQp2dCAwLjYzOTY0OCAwDQp2IDcuMjA2MjYgOS4wNjQ0NCAtMi45ODQ5Mw0Kdm4gLTAuMDc1MjEyIDAuOTk2ODI3IDAuMDI2MDQ1OA0KdnQgMCAwLjI3OTA1NA0KdiA3LjggOS4wNjQ0MyAwDQp2biAtMC4wNjc4MTA2IDAuOTk3NjgzIDAuMDA1NDE2MjMNCnZ0IDEgMC43ODc5ODQNCnYgNC42NDkzMyA1LjQ1MzY0IC0zLjc5MjU4DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IDMuMTc5MTIgNS40NTM2MyAtNS4wODg1Mw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNTg1MDggMA0KdiA1LjE3NDQ3IDUuNDU4NDYgLTUuMTc0NDcNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjE1NTE4NyAwLjQxMzEzOA0KdiAyLjgwMDQgNS40NTg0NyAtNi43NjA3Nw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDEgMC4yOTk3MzcNCnYgNS42OTA0NyA1LjQ1MzY0IC0xLjkwMjU1DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IDQuNjQ5MzMgNS40NTM2NCAtMy43OTI1OA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNjkyNzU1IDANCnYgNi43NjA3NyA1LjQ1ODQ4IC0yLjgwMDQNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjA4NjY4NjUgMC40NDAwNTENCnYgNS4xNzQ0NyA1LjQ1ODQ2IC01LjE3NDQ3DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMSAwLjM2MTcyOA0KdiA2LjE1MDQgNS40NTM2NCAwLjI2ODI5DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IDUuNjkwNDcgNS40NTM2NCAtMS45MDI1NQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNzQ1NDY1IDANCnYgNy4zMTc4IDUuNDU4NDcgMA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMDEyMjgxNCAwLjQ2MzIwMQ0KdiA2Ljc2MDc3IDUuNDU4NDggLTIuODAwNA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDEgMC40MTE1ODYNCnYgMCA5LjA2NDQ0IC03LjgNCnZuIDAuMTIxNTAxIDAuNzgyMzkzIC0wLjYxMDgxOA0KdnQgMSAwDQp2IDIuOTg0OTMgOS4wNjQ0MyAtNy4yMDYyNg0Kdm4gMC4xMjE1MDEgMC43ODIzOTMgLTAuNjEwODE4DQp2dCAxIDENCnYgMS4wMjYxOSA4LjU2NDQ0IC04LjIzNjMyDQp2biAwLjEyMTUwMSAwLjc4MjM5MyAtMC42MTA4MTgNCnZ0IDAuMDAwMTg4MDU3IDAuMzE2MTU5DQp2IDIuMjAzODMgOC41NjQ0NCAtOC4wMDIwNw0Kdm4gMC4xMjE1MDEgMC43ODIzOTMgLTAuNjEwODE4DQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiAyLjIwMzgzIDguNTY0NDQgLTguMDAyMDcNCnZuIDAuNzA3MTA3IDAgLTAuNzA3MTA3DQp2dCAwIDANCnYgMi45ODQ5MyA5LjA2NDQzIC03LjIwNjI2DQp2biAwLjM4MjY4NCAwIC0wLjkyMzg3OQ0KdnQgMSAwDQp2IDIuMjAzODMgNi40ODQ1NSAtOC4wMDIwNw0Kdm4gMC43MDcxMDcgMCAtMC43MDcxMDcNCnZ0IDEgMA0KdiAyLjk4NDkzIDUuOTg0NTMgLTcuMjA2MjYNCnZuIDAuMzgyNjg0IDAgLTAuOTIzODc5DQp2dCAwIDANCnYgMS4wMjYxOSA2LjQ4NDU0IC04LjIzNjMyDQp2biAtMC4zOTEyODQgMCAtMC45MjAyNw0KdnQgMCAwDQp2IDAgNS45ODQ1MyAtNy44DQp2biAtMC4wMDkzMjcxMyAwIC0wLjk5OTk1Ng0KdnQgMSAwDQp2IDEuMDI2MTkgOC41NjQ0NCAtOC4yMzYzMg0Kdm4gLTAuMzkxMjg0IDAgLTAuOTIwMjcNCnZ0IDEgMA0KdiAwIDkuMDY0NDQgLTcuOA0Kdm4gLTAuMDA5MzI3MTMgMCAtMC45OTk5NTYNCnZ0IDAgMA0KdiAxLjAyNjE5IDguNTY0NDQgLTguMjM2MzINCnZuIDAuMTk1MDkgMCAtMC45ODA3ODUNCnZ0IDAgMA0KdiAyLjIwMzgzIDguNTY0NDQgLTguMDAyMDcNCnZuIDAuMTk1MDkgMCAtMC45ODA3ODUNCnZ0IDEgMA0KdiAxLjAyNjE5IDYuNDg0NTQgLTguMjM2MzINCnZuIDAuMTk1MDkgMCAtMC45ODA3ODUNCnZ0IDEgMA0KdiAyLjIwMzgzIDYuNDg0NTUgLTguMDAyMDcNCnZuIDAuMTk1MDkgMCAtMC45ODA3ODUNCnZ0IDAgMA0KdiAtNy44IDkuMDY0NDQgMA0Kdm4gLTAuNjEwODI0IDAuNzgyMzg4IC0wLjEyMTQ5OQ0KdnQgMSAwDQp2IC03LjIwNjI2IDkuMDY0NDQgLTIuOTg0OTMNCnZuIC0wLjYxMDgyNCAwLjc4MjM4OCAtMC4xMjE0OTkNCnZ0IDEgMQ0KdiAtOC4yMzYzMiA4LjU2NDQzIC0xLjAyNjE5DQp2biAtMC42MTA4MjQgMC43ODIzODggLTAuMTIxNDk5DQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiAtOC4wMDIwNyA4LjU2NDQ0IC0yLjIwMzgzDQp2biAtMC42MTA4MjQgMC43ODIzODggLTAuMTIxNDk5DQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiAtNi41NDk1OCA4LjU2NDQzIC01LjA5ODMzDQp2biAtMC41MTc4MzIgMC43ODIzODcgLTAuMzQ2MDA2DQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiAtNy4yMTY2NiA4LjU2NDQ0IC00LjA5OTk4DQp2biAtMC41MTc4MzIgMC43ODIzODcgLTAuMzQ2MDA2DQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiAtNS41MTU0MyA5LjA2NDQ0IC01LjUxNTQzDQp2biAtMC41MTc4MzIgMC43ODIzODcgLTAuMzQ2MDA2DQp2dCAxIDENCnYgLTcuMjA2MjYgOS4wNjQ0NCAtMi45ODQ5Mw0Kdm4gLTAuNTE3ODMyIDAuNzgyMzg3IC0wLjM0NjAwNg0KdnQgMSAwDQp2IC01LjUxNTQzIDkuMDY0NDQgLTUuNTE1NDMNCnZuIC0wLjM0NjAwNyAwLjc4MjM4NiAtMC41MTc4MzMNCnZ0IDEgMA0KdiAtMi45ODQ5MyA5LjA2NDQ0IC03LjIwNjI2DQp2biAtMC4zNDYwMDcgMC43ODIzODYgLTAuNTE3ODMzDQp2dCAxIDENCnYgLTUuMDk4MzMgOC41NjQ0MyAtNi41NDk1OA0Kdm4gLTAuMzQ2MDA3IDAuNzgyMzg2IC0wLjUxNzgzMw0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgLTQuMDk5OTggOC41NjQ0NCAtNy4yMTY2Ng0Kdm4gLTAuMzQ2MDA3IDAuNzgyMzg2IC0wLjUxNzgzMw0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgLTEuMDI2MTkgOC41NjQ0NCAtOC4yMzYzMg0Kdm4gLTAuMTIxNSAwLjc4MjM5IC0wLjYxMDgyMw0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgLTIuMjAzODMgOC41NjQ0NCAtOC4wMDIwNw0Kdm4gLTAuMTIxNSAwLjc4MjM5IC0wLjYxMDgyMw0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgMCA5LjA2NDQ0IC03LjgNCnZuIC0wLjEyMTUgMC43ODIzOSAtMC42MTA4MjMNCnZ0IDEgMQ0KdiAtMi45ODQ5MyA5LjA2NDQ0IC03LjIwNjI2DQp2biAtMC4xMjE1IDAuNzgyMzkgLTAuNjEwODIzDQp2dCAxIDANCnYgLTguMDAyMDcgOC41NjQ0NCAtMi4yMDM4Mw0Kdm4gLTAuNzAwNDggMCAtMC43MTM2NzINCnZ0IDAgMA0KdiAtNy4yMDYyNiA5LjA2NDQ0IC0yLjk4NDkzDQp2biAtMC45MjM4NzkgMCAtMC4zODI2ODQNCnZ0IDEgMA0KdiAtOC4wMDIwNyA2LjQ4NDU1IC0yLjIwMzgzDQp2biAtMC43MDA0OCAwIC0wLjcxMzY3Mg0KdnQgMSAwDQp2IC03LjIwNjI2IDUuOTg0NTMgLTIuOTg0OTMNCnZuIC0wLjkyMzg3OSAwIC0wLjM4MjY4NA0KdnQgMCAwDQp2IC03LjggOS4wNjQ0NCAwDQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMCAwDQp2IC04LjIzNjMyIDguNTY0NDMgLTEuMDI2MTkNCnZuIC0wLjkxOTI2IDAuMDAwNzYyNDU4IDAuMzkzNjUNCnZ0IDEgMA0KdiAtNy44IDUuOTg0NTMgMA0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDEgMA0KdiAtOC4yMzYzMiA2LjQ4NDUzIC0xLjAyNjE5DQp2biAtMC45MTkyNiAwLjAwMDc2MjQ1OCAwLjM5MzY1DQp2dCAwIDANCnYgLTguMjM2MzIgOC41NjQ0MyAtMS4wMjYxOQ0Kdm4gLTAuOTgwNzg1IDAgLTAuMTk1MDg5DQp2dCAwIDANCnYgLTguMDAyMDcgOC41NjQ0NCAtMi4yMDM4Mw0Kdm4gLTAuOTgwNzg1IDAgLTAuMTk1MDg5DQp2dCAxIDANCnYgLTguMjM2MzIgNi40ODQ1MyAtMS4wMjYxOQ0Kdm4gLTAuOTgwNzg1IDAgLTAuMTk1MDg5DQp2dCAxIDANCnYgLTguMDAyMDcgNi40ODQ1NSAtMi4yMDM4Mw0Kdm4gLTAuOTgwNzg1IDAgLTAuMTk1MDg5DQp2dCAwIDANCnYgLTYuNTQ5NTggOC41NjQ0MyAtNS4wOTgzMw0Kdm4gLTAuMzc0MDUyIDAgLTAuOTI3NDA4DQp2dCAwIDANCnYgLTUuNTE1NDMgOS4wNjQ0NCAtNS41MTU0Mw0Kdm4gLTAuNzAwNDggMCAtMC43MTM2NzINCnZ0IDEgMA0KdiAtNi41NDk1OCA2LjQ4NDU0IC01LjA5ODMzDQp2biAtMC4zNzQwNTIgMCAtMC45Mjc0MDgNCnZ0IDEgMA0KdiAtNS41MTU0MyA1Ljk4NDU0IC01LjUxNTQzDQp2biAtMC43MDA0OCAwIC0wLjcxMzY3Mg0KdnQgMCAwDQp2IC03LjIwNjI2IDkuMDY0NDQgLTIuOTg0OTMNCnZuIC0wLjkyMzg3OSAwIC0wLjM4MjY4NA0KdnQgMCAwDQp2IC03LjIxNjY2IDguNTY0NDQgLTQuMDk5OTgNCnZuIC0wLjk5OTk1NiA2Ljg2ODU3RS0wNSAwLjAwOTM4OTAzDQp2dCAxIDANCnYgLTcuMjA2MjYgNS45ODQ1MyAtMi45ODQ5Mw0Kdm4gLTAuOTIzODc5IDAgLTAuMzgyNjg0DQp2dCAxIDANCnYgLTcuMjE2NjYgNi40ODQ1MyAtNC4wOTk5OA0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDAgMA0KdiAtNy4yMTY2NiA4LjU2NDQ0IC00LjA5OTk4DQp2biAtMC44MzE0NjkgMCAtMC41NTU1NzENCnZ0IDAgMA0KdiAtNi41NDk1OCA4LjU2NDQzIC01LjA5ODMzDQp2biAtMC44MzE0NjkgMCAtMC41NTU1NzENCnZ0IDEgMA0KdiAtNy4yMTY2NiA2LjQ4NDUzIC00LjA5OTk4DQp2biAtMC44MzE0NjkgMCAtMC41NTU1NzENCnZ0IDEgMA0KdiAtNi41NDk1OCA2LjQ4NDU0IC01LjA5ODMzDQp2biAtMC44MzE0NjkgMCAtMC41NTU1NzENCnZ0IDAgMA0KdiAtNC4wOTk5OCA4LjU2NDQ0IC03LjIxNjY2DQp2biAwLjAwOTMyNjQ5IDAgLTAuOTk5OTU3DQp2dCAwIDANCnYgLTIuOTg0OTMgOS4wNjQ0NCAtNy4yMDYyNg0Kdm4gLTAuMzkxMjg0IDAgLTAuOTIwMjcNCnZ0IDEgMA0KdiAtNC4wOTk5OCA2LjQ4NDU0IC03LjIxNjY2DQp2biAwLjAwOTMyNjQ5IDAgLTAuOTk5OTU3DQp2dCAxIDANCnYgLTIuOTg0OTMgNS45ODQ1NCAtNy4yMDYyNg0Kdm4gLTAuMzkxMjg0IDAgLTAuOTIwMjcNCnZ0IDAgMA0KdiAtNS41MTU0MyA5LjA2NDQ0IC01LjUxNTQzDQp2biAtMC43MDA0OCAwIC0wLjcxMzY3Mg0KdnQgMCAwDQp2IC01LjA5ODMzIDguNTY0NDMgLTYuNTQ5NTgNCnZuIC0wLjkyMzg3OSAwIC0wLjM4MjY4NA0KdnQgMSAwDQp2IC01LjUxNTQzIDUuOTg0NTQgLTUuNTE1NDMNCnZuIC0wLjcwMDQ4IDAgLTAuNzEzNjcyDQp2dCAxIDANCnYgLTUuMDk4MzMgNi40ODQ1NSAtNi41NDk1OA0Kdm4gLTAuOTIzODc5IDAgLTAuMzgyNjg0DQp2dCAwIDANCnYgLTUuMDk4MzMgOC41NjQ0MyAtNi41NDk1OA0Kdm4gLTAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAwIDANCnYgLTQuMDk5OTggOC41NjQ0NCAtNy4yMTY2Ng0Kdm4gLTAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAxIDANCnYgLTUuMDk4MzMgNi40ODQ1NSAtNi41NDk1OA0Kdm4gLTAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAxIDANCnYgLTQuMDk5OTggNi40ODQ1NCAtNy4yMTY2Ng0Kdm4gLTAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAwIDANCnYgLTEuMDI2MTkgOC41NjQ0NCAtOC4yMzYzMg0Kdm4gMC4zODI2ODQgMCAtMC45MjM4NzkNCnZ0IDAgMA0KdiAwIDkuMDY0NDQgLTcuOA0Kdm4gLTAuMDA5MzI3MTMgMCAtMC45OTk5NTYNCnZ0IDEgMA0KdiAtMS4wMjYxOSA2LjQ4NDUzIC04LjIzNjMyDQp2biAwLjM4MjY4NCAwIC0wLjkyMzg3OQ0KdnQgMSAwDQp2IDAgNS45ODQ1MyAtNy44DQp2biAtMC4wMDkzMjcxMyAwIC0wLjk5OTk1Ng0KdnQgMCAwDQp2IC0yLjk4NDkzIDkuMDY0NDQgLTcuMjA2MjYNCnZuIC0wLjM5MTI4NCAwIC0wLjkyMDI3DQp2dCAwIDANCnYgLTIuMjAzODMgOC41NjQ0NCAtOC4wMDIwNw0Kdm4gLTAuNzEzNjcyIDAgLTAuNzAwNDgNCnZ0IDEgMA0KdiAtMi45ODQ5MyA1Ljk4NDU0IC03LjIwNjI2DQp2biAtMC4zOTEyODQgMCAtMC45MjAyNw0KdnQgMSAwDQp2IC0yLjIwMzgzIDYuNDg0NTMgLTguMDAyMDcNCnZuIC0wLjcxMzY3MiAwIC0wLjcwMDQ4DQp2dCAwIDANCnYgLTIuMjAzODMgOC41NjQ0NCAtOC4wMDIwNw0Kdm4gLTAuMTk1MDkxIDAgLTAuOTgwNzg1DQp2dCAwIDANCnYgLTEuMDI2MTkgOC41NjQ0NCAtOC4yMzYzMg0Kdm4gLTAuMTk1MDkxIDAgLTAuOTgwNzg1DQp2dCAxIDANCnYgLTIuMjAzODMgNi40ODQ1MyAtOC4wMDIwNw0Kdm4gLTAuMTk1MDkxIDAgLTAuOTgwNzg1DQp2dCAxIDANCnYgLTEuMDI2MTkgNi40ODQ1MyAtOC4yMzYzMg0Kdm4gLTAuMTk1MDkxIDAgLTAuOTgwNzg1DQp2dCAwIDANCnYgMCA1Ljk4NDUzIC03LjgNCnZuIC0wLjEyMTUwMSAtMC43ODIzOTIgLTAuNjEwODE5DQp2dCAxIDANCnYgLTIuOTg0OTMgNS45ODQ1NCAtNy4yMDYyNg0Kdm4gLTAuMTIxNTAxIC0wLjc4MjM5MiAtMC42MTA4MTkNCnZ0IDEgMQ0KdiAtMS4wMjYxOSA2LjQ4NDUzIC04LjIzNjMyDQp2biAtMC4xMjE1MDEgLTAuNzgyMzkyIC0wLjYxMDgxOQ0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgLTIuMjAzODMgNi40ODQ1MyAtOC4wMDIwNw0Kdm4gLTAuMTIxNTAxIC0wLjc4MjM5MiAtMC42MTA4MTkNCnZ0IDAuMDAwMTg4MDU3IDAuNjgzODQxDQp2IC01LjA5ODMzIDYuNDg0NTUgLTYuNTQ5NTgNCnZuIC0wLjM0NjAwNiAtMC43ODIzODcgLTAuNTE3ODMyDQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiAtNC4wOTk5OCA2LjQ4NDU0IC03LjIxNjY2DQp2biAtMC4zNDYwMDYgLTAuNzgyMzg3IC0wLjUxNzgzMg0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgLTUuNTE1NDMgNS45ODQ1NCAtNS41MTU0Mw0Kdm4gLTAuMzQ2MDA2IC0wLjc4MjM4NyAtMC41MTc4MzINCnZ0IDEgMQ0KdiAtMi45ODQ5MyA1Ljk4NDU0IC03LjIwNjI2DQp2biAtMC4zNDYwMDYgLTAuNzgyMzg3IC0wLjUxNzgzMg0KdnQgMSAwDQp2IC01LjUxNTQzIDUuOTg0NTQgLTUuNTE1NDMNCnZuIC0wLjUxNzgzIC0wLjc4MjM4OCAtMC4zNDYwMDcNCnZ0IDEgMA0KdiAtNy4yMDYyNiA1Ljk4NDUzIC0yLjk4NDkzDQp2biAtMC41MTc4MyAtMC43ODIzODggLTAuMzQ2MDA3DQp2dCAxIDENCnYgLTYuNTQ5NTggNi40ODQ1NCAtNS4wOTgzMw0Kdm4gLTAuNTE3ODMgLTAuNzgyMzg4IC0wLjM0NjAwNw0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgLTcuMjE2NjYgNi40ODQ1MyAtNC4wOTk5OA0Kdm4gLTAuNTE3ODMgLTAuNzgyMzg4IC0wLjM0NjAwNw0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgLTguMjM2MzIgNi40ODQ1MyAtMS4wMjYxOQ0Kdm4gLTAuNjEwODI3IC0wLjc4MjM4NSAtMC4xMjE1MDQNCnZ0IDAuMDAwMTg4MDU3IDAuNjgzODQxDQp2IC04LjAwMjA3IDYuNDg0NTUgLTIuMjAzODMNCnZuIC0wLjYxMDgyNyAtMC43ODIzODUgLTAuMTIxNTA0DQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiAtNy44IDUuOTg0NTMgMA0Kdm4gLTAuNjEwODI3IC0wLjc4MjM4NSAtMC4xMjE1MDQNCnZ0IDEgMQ0KdiAtNy4yMDYyNiA1Ljk4NDUzIC0yLjk4NDkzDQp2biAtMC42MTA4MjcgLTAuNzgyMzg1IC0wLjEyMTUwNA0KdnQgMSAwDQp2IDEuMDI2MTkgNi40ODQ1NCAtOC4yMzYzMg0Kdm4gMC4xMjE1MDMgLTAuNzgyMzgzIC0wLjYxMDgzDQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiAyLjIwMzgzIDYuNDg0NTUgLTguMDAyMDcNCnZuIDAuMTIxNTAzIC0wLjc4MjM4MyAtMC42MTA4Mw0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgMCA1Ljk4NDUzIC03LjgNCnZuIDAuMTIxNTAzIC0wLjc4MjM4MyAtMC42MTA4Mw0KdnQgMSAxDQp2IDIuOTg0OTMgNS45ODQ1MyAtNy4yMDYyNg0Kdm4gMC4xMjE1MDMgLTAuNzgyMzgzIC0wLjYxMDgzDQp2dCAxIDANCnYgLTIuOTg0OTMgNS45ODQ1NCAtNy4yMDYyNg0Kdm4gLTAuMjc4OTQ4IC0wLjY4MjI2MyAtMC42NzU3OTkNCnZ0IDAgMA0KdiAwIDUuOTg0NTMgLTcuOA0Kdm4gLTEuMTU4NTlFLTA2IC0wLjY4Nzk1MiAtMC43MjU3NTYNCnZ0IDEgMA0KdiAtMi44MDA0IDUuNDU4NDkgLTYuNzYwNzcNCnZuIC0wLjI3ODk0OCAtMC42ODIyNjMgLTAuNjc1Nzk5DQp2dCAwIDENCnYgMCA1LjQ4NDk1IC03LjMwODkNCnZuIC0xLjE1ODU5RS0wNiAtMC42ODc5NTIgLTAuNzI1NzU2DQp2dCAxIDENCnYgLTUuNTE1NDMgNS45ODQ1NCAtNS41MTU0Mw0Kdm4gLTAuNTIxMjU4IC0wLjY3NTcwNSAtMC41MjEyNg0KdnQgMCAwDQp2IC0yLjk4NDkzIDUuOTg0NTQgLTcuMjA2MjYNCnZuIC0wLjI3ODk0OCAtMC42ODIyNjMgLTAuNjc1Nzk5DQp2dCAxIDANCnYgLTUuMTc0NDcgNS40NTg0NyAtNS4xNzQ0Ng0Kdm4gLTAuNTIxMjU4IC0wLjY3NTcwNSAtMC41MjEyNg0KdnQgMCAxDQp2IC0yLjgwMDQgNS40NTg0OSAtNi43NjA3Nw0Kdm4gLTAuMjc4OTQ4IC0wLjY4MjI2MyAtMC42NzU3OTkNCnZ0IDEgMQ0KdiAtNy4yMDYyNiA1Ljk4NDUzIC0yLjk4NDkzDQp2biAtMC42ODEwNTggLTAuNjc1NzA1IC0wLjI4MjEwNA0KdnQgMCAwDQp2IC01LjUxNTQzIDUuOTg0NTQgLTUuNTE1NDMNCnZuIC0wLjUyMTI1OCAtMC42NzU3MDUgLTAuNTIxMjYNCnZ0IDEgMA0KdiAtNi43NjA3NyA1LjQ1ODQ3IC0yLjgwMDQNCnZuIC0wLjY4MTA1OCAtMC42NzU3MDUgLTAuMjgyMTA0DQp2dCAwIDENCnYgLTUuMTc0NDcgNS40NTg0NyAtNS4xNzQ0Ng0Kdm4gLTAuNTIxMjU4IC0wLjY3NTcwNSAtMC41MjEyNg0KdnQgMSAxDQp2IC03LjggNS45ODQ1MyAwDQp2biAtMC43MzcxNzEgLTAuNjc1NzA2IDEuMDg0MzZFLTA2DQp2dCAwIDANCnYgLTcuMjA2MjYgNS45ODQ1MyAtMi45ODQ5Mw0Kdm4gLTAuNjgxMDU4IC0wLjY3NTcwNSAtMC4yODIxMDQNCnZ0IDEgMA0KdiAtNy4zMTc4IDUuNDU4NDcgMA0Kdm4gLTAuNzM3MTcxIC0wLjY3NTcwNiAxLjA4NDM2RS0wNg0KdnQgMCAxDQp2IC02Ljc2MDc3IDUuNDU4NDcgLTIuODAwNA0Kdm4gLTAuNjgxMDU4IC0wLjY3NTcwNSAtMC4yODIxMDQNCnZ0IDEgMQ0KdiAwIDUuOTg0NTMgLTcuOA0Kdm4gLTEuMTU4NTlFLTA2IC0wLjY4Nzk1MiAtMC43MjU3NTYNCnZ0IDAgMA0KdiAyLjk4NDkzIDUuOTg0NTMgLTcuMjA2MjYNCnZuIDAuMjc4OTQ4IC0wLjY4MjI2MSAtMC42NzU4MDINCnZ0IDEgMA0KdiAwIDUuNDg0OTUgLTcuMzA4OQ0Kdm4gLTEuMTU4NTlFLTA2IC0wLjY4Nzk1MiAtMC43MjU3NTYNCnZ0IDAgMQ0KdiAyLjgwMDQgNS40NTg0NyAtNi43NjA3Nw0Kdm4gMC4yNzg5NDggLTAuNjgyMjYxIC0wLjY3NTgwMg0KdnQgMSAxDQp2IDIuNjQyNzMgOC40NTM2NCAtNC44Njg2Ng0Kdm4gLTAuMDExMDQ0MSAwLjY4NjMxMiAwLjcyNzIyMw0KdnQgMC4wOTM3NSAwLjYxNzE4OA0KdiAyLjI1NTY5IDguOTUzNjMgLTUuNDE3MzUNCnZuIC0wLjAxMTA0NDEgMC42ODYzMTIgMC43MjcyMjMNCnZ0IDEgMC4zNjQzNjQNCnYgMC41MDQ2ODggOC40NjI5NiAtNS4zMzU1DQp2biAtMC4xNTAyOTggMC42NTkyNDUgMC43MzY3NTQNCnZ0IDAuODI0MjIxIDAuNDkyNjczDQp2IDAuMDMzMjkyIDguOTUyNiAtNS44NDc0Nw0Kdm4gLTAuMTUwMjk4IDAuNjU5MjQ1IDAuNzM2NzU0DQp2dCAwIDANCnYgLTUuODcwMjkgNy40NTM2MyAtMi4wODg5Mw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMzM1OTcyIDANCnYgLTUuMDg5MTMgNy40NTM2MyAtMS45NDQ5MQ0Kdm4gMC4wNjA1MzY1IC0wLjk5NzQ4MiAwLjAzNjk1NQ0KdnQgMC45NTA0ODcgMC4wNjY5MDcxDQp2IC02LjE1OTk5IDcuNDUzNjMgLTAuMTkwNzINCnZuIDAuMDkwODMwNSAtMC45OTU4NTcgMC4wMDQyNzE2DQp2dCAwLjAwODE4ODA1IDAuNQ0KdiAtMC41IDYuNDUzNjMgLTUuMzM4MjkNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4xMjkyMDIgMC4zNDE2NTcNCnYgMC41IDYuNDUzNjMgLTUuMzM4MjkNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC44NzA3OTggMC4zNDE2NTcNCnYgMC4wMzMzNDQgNi40NTM2MyAtNS44NDc3Nw0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjUgMQ0KdiAzLjE3OTEyIDUuNDUzNjMgLTUuMDg4NTMNCnZuIDAuMzc5MjgxIDAgMC45MjUyODENCnZ0IDAgMA0KdiAzLjE3OTEyIDguNDUzNjQgLTUuMDg4NTQNCnZuIDAuMzc5MjgxIDAgMC45MjUyODENCnZ0IDEgMA0KdiAyLjY0MjczIDUuNDUzNjQgLTQuODY4NjYNCnZuIDAuMzc5MjgxIDAgMC45MjUyODENCnZ0IDAgMC43NQ0KdiAyLjY0MjczIDguNDUzNjQgLTQuODY4NjYNCnZuIDAuMzc5MjgxIDAgMC45MjUyODENCnZ0IDEgMC43NQ0KdiAyLjY0MjczIDUuNDUzNjQgLTQuODY4NjYNCnZuIC0wLjIxMjkwNiAwLjAwMjE0MTk0IDAuOTc3MDcNCnZ0IDAuMzc1IDANCnYgMi42NDI3MyA4LjQ1MzY0IC00Ljg2ODY2DQp2biAtMC4yMTI5MDYgMC4wMDIxNDE5NCAwLjk3NzA3DQp2dCAwLjg3NSAwLjUNCnYgMC41IDYuNDUzNjMgLTUuMzM4MjkNCnZuIC0wLjEyNDIzNCAwLjAyMTU5MzIgMC45OTIwMTgNCnZ0IDAuMzMzMzMzIDAuNDEwMTk1DQp2IDAuNTA0Njg4IDguNDYyOTYgLTUuMzM1NQ0Kdm4gLTAuMjEyOTA2IDAuMDAyMTQxOTQgMC45NzcwNw0KdnQgMSAwLjM4MDI2DQp2IC01Ljg3MDI5IDcuNDUzNjMgLTIuMDg4OTMNCnZuIC0wLjE4MTMxMiAwIDAuOTgzNDI2DQp2dCAwIDENCnYgLTUuODcwMjkgNS40NTM2NCAtMi4wODg5Mw0Kdm4gLTAuMTgxMzEyIDAgMC45ODM0MjYNCnZ0IDAgMA0KdiAtNS4wODkxMyA3LjQ1MzYzIC0xLjk0NDkxDQp2biAtMC4xODEzMTIgMCAwLjk4MzQyNg0KdnQgMSAxDQp2IC01LjA4OTEzIDUuNDUzNjQgLTEuOTQ0OTENCnZuIC0wLjE4MTMxMiAwIDAuOTgzNDI2DQp2dCAxIDANCnYgLTUuODcwMjkgNS40NTM2NCAtMi4wODg5Mw0Kdm4gMC45ODg1NjEgNC43MTkzNUUtMDUgMC4xNTA4MjENCnZ0IDAgMA0KdiAtNS44NzAyOSA3LjQ1MzYzIC0yLjA4ODkzDQp2biAwLjk4ODU2MSA0LjcxOTM1RS0wNSAwLjE1MDgyMQ0KdnQgMC42NjY2NjcgMA0KdiAtNi4xNTk2NyA1LjQ1MzY0IC0wLjE5MTU4Nw0Kdm4gMC45OTk0MDIgNy40NDczN0UtMDUgLTAuMDM0NTcyMg0KdnQgMCAwLjI1DQp2IC02LjE1OTk5IDcuNDUzNjMgLTAuMTkwNzINCnZuIDAuOTk5NDAyIDcuNDQ3MzdFLTA1IC0wLjAzNDU3MjINCnZ0IDAuNjY2NjY3IDAuMjUNCnYgMi42NDI3MyA4LjQ1MzY0IC00Ljg2ODY2DQp2biAtMC4wMTEwNDQxIDAuNjg2MzEyIDAuNzI3MjIzDQp2dCAwLjc1IDENCnYgMy4xNzkxMiA4LjQ1MzY0IC01LjA4ODU0DQp2biAtMC4xODMyODIgMC43MzY0MTIgMC42NTEyMzMNCnZ0IDAgMQ0KdiAyLjI1NTY5IDguOTUzNjMgLTUuNDE3MzUNCnZuIC0wLjAxMTA0NDEgMC42ODYzMTIgMC43MjcyMjMNCnZ0IDEgMA0KdiAzLjQ0NDA1IDguOTUzNjMgLTUuNTEyNTgNCnZuIC0wLjE4MzI4MiAwLjczNjQxMiAwLjY1MTIzMw0KdnQgMCAwDQp2IC0xLjM3MTA2IDUuNDUzNjQgLTUuMTcyNDgNCnZuIDAuMjU0MDc0IDAuMDE5ODI4NCAwLjk2Njk4Mg0KdnQgMCAwDQp2IC0xLjM3MjI1IDYuNDUzNjMgLTUuMTcxMDINCnZuIDAuMzUwMzYxIC0wLjAwMDgzMjUyNiAwLjkzNjYxNA0KdnQgMC4zMzMzMzMgMA0KdiAtMy44MTI3MSA1LjQ1MzY0IC0zLjc1MzI1DQp2biAwLjY3NTI0NSAtMC4wMDAyNDQ5MTQgMC43Mzc1OTQNCnZ0IDAgMC4yNjkyNzMNCnYgLTMuODEyODYgNi40NTM2MyAtMy43NTI5NQ0Kdm4gMC43NTE4NzcgLTAuMDAyMjE3MjIgMC42NTkzDQp2dCAwLjMzMzMzMyAwLjI3MDg0NA0KdiAwLjAzMzI5MiA4Ljk1MjYgLTUuODQ3NDcNCnZuIC0wLjAzMjcwNTMgMC4wMDAxODA5NDQgMC45OTk0NjUNCnZ0IDAuOTk5MTU3IDAuNDM3NQ0KdiAwLjAzMzM0NCA2LjQ1MzYzIC01Ljg0Nzc3DQp2biAtMC4wMzI3MDUzIDAuMDAwMTgwOTQ0IDAuOTk5NDY1DQp2dCAwIDAuMzc1DQp2IDAuNTA0Njg4IDguNDYyOTYgLTUuMzM1NQ0Kdm4gLTAuNzM2NDYyIDAuMDAwMjkzNTUxIDAuNjc2NDc5DQp2dCAwLjgyOTc2NiAwDQp2IDAuNSA2LjQ1MzYzIC01LjMzODI5DQp2biAtMC43MzY0NjIgMC4wMDAyOTM1NTEgMC42NzY0NzkNCnZ0IDAgMC4zNzUNCnYgLTAuNSA2LjQ1MzYzIC01LjMzODI5DQp2biAwLjY5MDY2MSAtNC4wMTU1MkUtMDUgMC43MjMxNzgNCnZ0IDAgMQ0KdiAtMC41IDguNDY1MjkgLTUuMzM4MjkNCnZuIDAuNjkwNjYxIC00LjAxNTUyRS0wNSAwLjcyMzE3OA0KdnQgMC45NzUzNjYgMQ0KdiAtMy43OTI0NSA2LjQ1MzYzIC00LjUxOTY2DQp2biAwLjUwMjM2MiAwIDAuODY0NjU3DQp2dCAwIDENCnYgLTIuMDQ4MTUgNi40NTM2MyAtNS41MzMwOQ0Kdm4gMC41MDIzNjIgMCAwLjg2NDY1Nw0KdnQgMCAwDQp2IC0zLjc5MjQ1IDguOTUzNjMgLTQuNTE5NjYNCnZuIDAuNTAyMzYyIDAgMC44NjQ2NTcNCnZ0IDEgMQ0KdiAtMi4wNDgxNSA4Ljk1MzYzIC01LjUzMzA5DQp2biAwLjUwMjM2MiAwIDAuODY0NjU3DQp2dCAxIDANCnYgLTEuMzcyMjUgNi40NTM2MyAtNS4xNzEwMg0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjg2MzQ4MyAwLjcyMTY3Mg0KdiAtMi4wNDgxNSA2LjQ1MzYzIC01LjUzMzA5DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuNzQwNDcxIDAuOTgwNDA5DQp2IC0zLjgxMjg2IDYuNDUzNjMgLTMuNzUyOTUNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4xMTE3MDUgMC4wNTYwNDUNCnYgLTMuNzkyNDUgNi40NTM2MyAtNC41MTk2Ng0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjA3MDcwNjYgMC40MjIyNjYNCnYgLTYuMTU5OTkgNy40NTM2MyAtMC4xOTA3Mg0Kdm4gMC4wOTA4MzA1IC0wLjk5NTg1NyAwLjAwNDI3MTYNCnZ0IDAuMDA4MTg4MDUgMC41DQp2IC01LjA4OTEzIDcuNDUzNjMgLTEuOTQ0OTENCnZuIDAuMDYwNTM2NSAtMC45OTc0ODIgMC4wMzY5NTUNCnZ0IDAuOTUwNDg3IDAuMDY2OTA3MQ0KdiAtNS40OTEyOSA3LjUzNDg3IC0wLjE5NTI5OA0Kdm4gMC4xMjA3MjIgLTAuOTkyNDIyIDAuMDIyODk1NQ0KdnQgMC42Mjk5ODYgMC41DQp2IC0zLjgxMjg2IDguNDUzNjQgLTMuNzUyOTUNCnZuIDAuNTY1OTQ1IDAuNzEwMzg4IDAuNDE4Mzk1DQp2dCAwLjA1NDQ5MzIgMC45NQ0KdiAtMy43OTI0NSA4Ljk1MzYzIC00LjUxOTY2DQp2biAwLjU2NTk0NSAwLjcxMDM4OCAwLjQxODM5NQ0KdnQgMC4wMTk4NTAyIDAuMjg1NDI2DQp2IC00LjkxMTI2IDguNDUyNzQgLTIuMTU1ODMNCnZuIDAuNjA3ODA1IDAuNzM3MTkzIDAuMjk1MTYxDQp2dCAwLjQ5MjUzIDAuOTkxMDk0DQp2IC01LjQxODQ4IDguOTUwMzUgLTIuNDI0NDcNCnZuIDAuNjA3ODA1IDAuNzM3MTkzIDAuMjk1MTYxDQp2dCAwLjQ3OTg2OSAwDQp2IC0xLjM3MTA2IDUuNDUzNjQgLTUuMTcyNDgNCnZuIDAuMjU0MDc0IDAuMDE5ODI4NCAwLjk2Njk4Mg0KdnQgMCAwLjg1MjQ3Nw0KdiAwLjQ5NjEzIDUuNDUzNjQgLTUuMzM0MzkNCnZuIC0wLjA3ODYxODYgMC4wMzI1OTU0IDAuOTk2MzcyDQp2dCAwIDAuMjUzMTc5DQp2IC0wLjUgNi40NTM2MyAtNS4zMzgyOQ0Kdm4gMC4xMjI2MzggMC4wMjk0NDQgMC45OTIwMTUNCnZ0IDAuMzMzMzMzIDAuNTg1NjUNCnYgMC41IDYuNDUzNjMgLTUuMzM4MjkNCnZuIC0wLjEyNDIzNCAwLjAyMTU5MzIgMC45OTIwMTgNCnZ0IDAuMzMzMzMzIDAuNDEwMTk1DQp2IC0xLjM3MjI1IDguNDUzNjQgLTUuMTcxMDINCnZuIDAuMTg4MzQgMCAwLjk4MjEwNA0KdnQgMSAwLjgyMjk2MQ0KdiAtMS4zNzIyNSA2LjQ1MzYzIC01LjE3MTAyDQp2biAwLjE4ODM0IDAgMC45ODIxMDQNCnZ0IDAuMzMzMzMzIDAuOTExNDgxDQp2IC0wLjUgOC40NjUyOSAtNS4zMzgyOQ0Kdm4gMC4xODgzNCAwIDAuOTgyMTA0DQp2dCAxIDAuNjE0Mg0KdiAtMC41IDYuNDUzNjMgLTUuMzM4MjkNCnZuIDAuMTg4MzQgMCAwLjk4MjEwNA0KdnQgMC4zMzMzMzMgMC41ODU2NQ0KdiAtMS4zNzIyNSA2LjQ1MzYzIC01LjE3MTAyDQp2biAwLjM1MDM2MSAtMC4wMDA4MzI1MjYgMC45MzY2MTQNCnZ0IDAuMzMzMzMzIDAuOTExNDgxDQp2IC01LjA4OTEzIDUuNDUzNjQgLTEuOTQ0OTENCnZuIDAuODE2OTcyIC0yLjYwNjY5RS0wNSAwLjU3NjY3OA0KdnQgMCAwLjQ5MTEyNg0KdiAtMy44MTI3MSA1LjQ1MzY0IC0zLjc1MzI1DQp2biAwLjY3NTI0NSAtMC4wMDAyNDQ5MTQgMC43Mzc1OTQNCnZ0IDAgMC4yNjkyNzMNCnYgLTMuODEyODYgNi40NTM2MyAtMy43NTI5NQ0Kdm4gMC43NTE4NzcgLTAuMDAyMjE3MjIgMC42NTkzDQp2dCAwLjMzMzMzMyAwLjI3MDg0NA0KdiAtMC41IDguNDY1MjkgLTUuMzM4MjkNCnZuIDAuMTE3NjM3IDAuNjY2NTY0IDAuNzM2MTA3DQp2dCAwLjM2NzI2NiAwLjQ4ODM1Mw0KdiAwLjAzMzI5MiA4Ljk1MjYgLTUuODQ3NDcNCnZuIDAuMTE3NjM3IDAuNjY2NTY0IDAuNzM2MTA3DQp2dCAxIDAuMjI3MTI4DQp2IC0xLjM3MjI1IDguNDUzNjQgLTUuMTcxMDINCnZuIDAuMTE3NjM3IDAuNjY2NTY0IDAuNzM2MTA3DQp2dCAwLjgyNTEwNyAwLjk1MDA0NA0KdiAtMi4wNDgxNSA4Ljk1MzYzIC01LjUzMzA5DQp2biAwLjExNzYzNyAwLjY2NjU2NCAwLjczNjEwNw0KdnQgMC4xNDk2MzMgMQ0KdiAyLjY0MjczIDUuNDUzNjQgLTQuODY4NjYNCnZuIC0wLjIxMjkwNiAwLjAwMjE0MTk0IDAuOTc3MDcNCnZ0IDAgMC4wMDYzNTc3NQ0KdiAtMy44MTI4NiA4LjQ1MzY0IC0zLjc1Mjk1DQp2biAwLjgxNjk3MiAtMi42MDY2OUUtMDUgMC41NzY2NzgNCnZ0IDEgMC4yOTE2ODgNCnYgLTQuOTExMjYgOC40NTI3NCAtMi4xNTU4Mw0Kdm4gMC45MTE5OTMgLTAuMDg1MzU1MiAwLjQwMTIyNw0KdnQgMSAwLjYwMTU3Mw0KdiAtNS4wODkxMyA3LjQ1MzYzIC0xLjk0NDkxDQp2biAwLjg4NDUxOCAtMC4wNTY3NzczIDAuNDYzMDM4DQp2dCAwLjY2NjY2NyAwLjU5NTA0OQ0KdiAtMi4wNDgxNSA4Ljk1MzYzIC01LjUzMzA5DQp2biAwLjAyMTQxODkgMC45OTgyNzYgMC4wNTQ2Mzk4DQp2dCAwLjIyMjUwNiAwDQp2IDAuMDMzMjkyIDguOTUyNiAtNS44NDc0Nw0Kdm4gLTAuMDAwMzg5MzM1IDAuOTk4MzI1IDAuMDU3ODU4MQ0KdnQgMC45MTQ5MjkgMA0KdiAtMi45ODQ5MyA5LjA2NDQ0IC03LjIwNjI2DQp2biAwLjAyMTQxODkgMC45OTgyNzYgMC4wNTQ2Mzk4DQp2dCAwIDAuNTkxMzI1DQp2IDAgOS4wNjQ0NCAtNy44DQp2biAtMC4wMDAzODkzMzUgMC45OTgzMjUgMC4wNTc4NTgxDQp2dCAxIDAuNjM3NzUNCnYgMC4wMzMyOTIgOC45NTI2IC01Ljg0NzQ3DQp2biAtMC4wMDAzODkzMzUgMC45OTgzMjUgMC4wNTc4NTgxDQp2dCAwLjEzMjYyOSAwDQp2IDIuMjU1NjkgOC45NTM2MyAtNS40MTczNQ0Kdm4gLTAuMDAwMzg5MzM1IDAuOTk4MzI1IDAuMDU3ODU4MQ0KdnQgMC44NzY0MjMgMA0KdiAwIDkuMDY0NDQgLTcuOA0Kdm4gLTAuMDAwMzg5MzM1IDAuOTk4MzI1IDAuMDU3ODU4MQ0KdnQgMCAwLjYyODg4Mg0KdiAyLjk4NDkzIDkuMDY0NDMgLTcuMjA2MjYNCnZuIC0wLjAyNDA0NCAwLjk5NzQ2MSAwLjA2NzAyOTkNCnZ0IDEgMC42MjM2ODcNCnYgLTMuNzkyNDUgOC45NTM2MyAtNC41MTk2Ng0Kdm4gMC4wNDAyMjE2IDAuOTk4MjYyIDAuMDQzMDgzMg0KdnQgMC4zMjU3ODggMA0KdiAtMi4wNDgxNSA4Ljk1MzYzIC01LjUzMzA5DQp2biAwLjAyMTQxODkgMC45OTgyNzYgMC4wNTQ2Mzk4DQp2dCAwLjk4OTk0MyAwDQp2IC01LjUxNTQzIDkuMDY0NDQgLTUuNTE1NDMNCnZuIDAuMDQwMjIxNiAwLjk5ODI2MiAwLjA0MzA4MzINCnZ0IDAgMC41Njk1OTQNCnYgLTIuOTg0OTMgOS4wNjQ0NCAtNy4yMDYyNg0Kdm4gMC4wMjE0MTg5IDAuOTk4Mjc2IDAuMDU0NjM5OA0KdnQgMSAwLjYzMjI4NQ0KdiAtNS40MTg0OCA4Ljk1MDM1IC0yLjQyNDQ3DQp2biAwLjA1Mzc1MzEgMC45OTgyNDYgMC4wMjQ4MDI5DQp2dCAwLjU1ODM4MyAwDQp2IC0zLjc5MjQ1IDguOTUzNjMgLTQuNTE5NjYNCnZuIDAuMDQwMjIxNiAwLjk5ODI2MiAwLjA0MzA4MzINCnZ0IDAuODA1MjU4IDAuMDMwOTQ1MQ0KdiAtNy4yMDYyNiA5LjA2NDQ0IC0yLjk4NDkzDQp2biAwLjA1Mzc1MzEgMC45OTgyNDYgMC4wMjQ4MDI5DQp2dCAxIDAuNjAzNDAzDQp2IC01LjUxNTQzIDkuMDY0NDQgLTUuNTE1NDMNCnZuIDAuMDQwMjIxNiAwLjk5ODI2MiAwLjA0MzA4MzINCnZ0IDEgMA0KdiAyLjk4NDkzIDkuMDY0NDMgLTcuMjA2MjYNCnZuIC0wLjAyNDA0NCAwLjk5NzQ2MSAwLjA2NzAyOTkNCnZ0IDAuMTQzNTQyIDENCnYgMi4yNTU2OSA4Ljk1MzYzIC01LjQxNzM1DQp2biAtMC4wMDAzODkzMzUgMC45OTgzMjUgMC4wNTc4NTgxDQp2dCAwIDANCnYgMy40NDQwNSA4Ljk1MzYzIC01LjUxMjU4DQp2biAtMC4wMjQwNDQgMC45OTc0NjEgMC4wNjcwMjk5DQp2dCAwLjU5MDAzNiAwLjE5NzgxNA0KdiAtMS4zNzEwNiA1LjQ1MzY0IC01LjE3MjQ4DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IC0zLjgxMjcxIDUuNDUzNjQgLTMuNzUzMjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjczNTM4OCAwDQp2IC0yLjgwMDQgNS40NTg0OSAtNi43NjA3Nw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMDYwOTE1NCAwLjY3ODA0Ng0KdiAtNS4xNzQ0NyA1LjQ1ODQ3IC01LjE3NDQ2DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMSAwLjYwMjE5Nw0KdiAyLjY0MjczIDUuNDUzNjQgLTQuODY4NjYNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjEwNjU3OCAwDQp2IDAuNDk2MTMgNS40NTM2NCAtNS4zMzQzOQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNjYxOTczIDANCnYgMi44MDA0IDUuNDU4NDcgLTYuNzYwNzcNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDAuNjgxODA0DQp2IDAgNS40ODQ5NSAtNy4zMDg5DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMSAwLjYzMjI0Mg0KdiAtNS44NzAyOSA1LjQ1MzY0IC0yLjA4ODkzDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4yMDE4NDcgMA0KdiAtNi4xNTk2NyA1LjQ1MzY0IC0wLjE5MTU4Nw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuODM0MjU0IDANCnYgLTYuNzYwNzcgNS40NTg0NyAtMi44MDA0DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwLjQzMjgxMw0KdiAtNy4zMTc4IDUuNDU4NDcgMA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDEgMC40MzgxOTQNCnYgLTEuMzcxMDYgNS40NTM2NCAtNS4xNzI0OA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNDU4NDI0IDANCnYgLTIuODAwNCA1LjQ1ODQ5IC02Ljc2MDc3DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMSAwLjY0MTA4DQp2IDAgNS40ODQ5NSAtNy4zMDg5DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwLjY0NjcyOQ0KdiAzLjE3OTEyIDUuNDUzNjMgLTUuMDg4NTMNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMi42NDI3MyA1LjQ1MzY0IC00Ljg2ODY2DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4yMDE4MjkgMA0KdiAyLjgwMDQgNS40NTg0NyAtNi43NjA3Nw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNTA0MjAzIDENCnYgLTUuMTc0NDcgNS40NTg0NyAtNS4xNzQ0Ng0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMQ0KdiAtMy44MTI3MSA1LjQ1MzY0IC0zLjc1MzI1DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4xNzQ3MTkgMA0KdiAtNi43NjA3NyA1LjQ1ODQ3IC0yLjgwMDQNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjc1NDgzMiAwLjg4MDQwOQ0KdiAtNS4wODkxMyA1LjQ1MzY0IC0xLjk0NDkxDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMSAwDQp2IC01Ljg3MDI5IDUuNDUzNjQgLTIuMDg4OTMNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjI5MjAzMSAwDQp2IC02Ljc2MDc3IDUuNDU4NDcgLTIuODAwNA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDEgMA0KdiAtNS4wODkxMyA1LjQ1MzY0IC0xLjk0NDkxDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4wMjc1NzA0IDAuNDQ5NDIzDQp2IC02LjAwNTk3IDguOTUzNjMgLTAuMjE2NjY3DQp2biAwLjA2MTExOTkgMC45OTgxMDUgMC4wMDcxMjAwMw0KdnQgMC4xOTc4MzggMA0KdiAtNS40MTg0OCA4Ljk1MDM1IC0yLjQyNDQ3DQp2biAwLjA1Mzc1MzEgMC45OTgyNDYgMC4wMjQ4MDI5DQp2dCAwLjU1ODM4MyAwDQp2IC00LjkxMTI2IDguNDUyNzQgLTIuMTU1ODMNCnZuIDAuNjA3ODA1IDAuNzM3MTkzIDAuMjk1MTYxDQp2dCAwLjQ5MjUzIDAuOTkxMDk0DQp2IC01LjQxODQ4IDguOTUwMzUgLTIuNDI0NDcNCnZuIDAuNjA3ODA1IDAuNzM3MTkzIDAuMjk1MTYxDQp2dCAwLjQ3OTg2OSAwDQp2IC01LjMyMDg2IDguMzcyNCAtMC4xOTUxMDcNCnZuIDAuNjQwOTMxIDAuNzY1OTI1IDAuMDUwNjUzNA0KdnQgMC43NSAxDQp2IC02LjAwNTk3IDguOTUzNjMgLTAuMjE2NjY3DQp2biAwLjY0MDkzMSAwLjc2NTkyNSAwLjA1MDY1MzQNCnZ0IDAuNzUgMA0KdiAtNS4zMjA4NiA4LjM3MjQgLTAuMTk1MTA3DQp2biAwLjk5MTA5NSAtMC4xMzE3IDAuMDE5NjI1Mg0KdnQgMSAwLjc1DQp2IC01LjQ5MTI5IDcuNTM0ODcgLTAuMTk1Mjk4DQp2biAwLjk5MTA5NSAtMC4xMzE3IDAuMDE5NjI1Mg0KdnQgMC42NjY2NjcgMC43NQ0KdiAtNC45MTEyNiA4LjQ1Mjc0IC0yLjE1NTgzDQp2biAwLjkxMTk5MyAtMC4wODUzNTUyIDAuNDAxMjI3DQp2dCAxIDAuNjAxNTczDQp2IC01LjA4OTEzIDcuNDUzNjMgLTEuOTQ0OTENCnZuIDAuODg0NTE4IC0wLjA1Njc3NzMgMC40NjMwMzgNCnZ0IDAuNjY2NjY3IDAuNTk1MDQ5DQp2IC0zLjgxMjg2IDguNDUzNjQgLTMuNzUyOTUNCnZuIDAuOTk5NjQ2IDAgMC4wMjY2MTA4DQp2dCAwLjIgMA0KdiAtMy44MTI4NiA2LjQ1MzYzIC0zLjc1Mjk1DQp2biAwLjk5OTY0NiAwIDAuMDI2NjEwOA0KdnQgMSAwDQp2IC0zLjc5MjQ1IDguOTUzNjMgLTQuNTE5NjYNCnZuIDAuOTk5NjQ2IDAgMC4wMjY2MTA4DQp2dCAwIDAuMzA2Nzk0DQp2IC0zLjc5MjQ1IDYuNDUzNjMgLTQuNTE5NjYNCnZuIDAuOTk5NjQ2IDAgMC4wMjY2MTA4DQp2dCAxIDAuMzA2Nzk0DQp2IC0yLjA0ODE1IDguOTUzNjMgLTUuNTMzMDkNCnZuIC0wLjQ3MjIwMiAwIDAuODgxNDkxDQp2dCAwIDANCnYgLTIuMDQ4MTUgNi40NTM2MyAtNS41MzMwOQ0Kdm4gLTAuNDcyMjAyIDAgMC44ODE0OTENCnZ0IDEgMA0KdiAtMS4zNzIyNSA4LjQ1MzY0IC01LjE3MTAyDQp2biAtMC40NzIyMDIgMCAwLjg4MTQ5MQ0KdnQgMC4yIDAuMzA2NzA4DQp2IC0xLjM3MjI1IDYuNDUzNjMgLTUuMTcxMDINCnZuIC0wLjQ3MjIwMiAwIDAuODgxNDkxDQp2dCAxIDAuMzA2NzA4DQp2IDUuOTk2NyA4Ljk1MzYzIDAuMjkzMzcNCnZuIC0wLjA2MDI1NTMgMC45OTgxNTMgLTAuMDA3NzY0MzENCnZ0IDAuMTk3ODM4IDANCnYgNy44IDkuMDY0NDMgMA0Kdm4gLTAuMDY3ODEwNiAwLjk5NzY4MyAwLjAwNTQxNjIzDQp2dCAwLjczMzkyOCAxDQp2IDUuODYxMzUgOC45NTM2MyAtMS4zOTM2Ng0Kdm4gLTAuMDY3ODEwNiAwLjk5NzY4MyAwLjAwNTQxNjIzDQp2dCAwIDANCnYgLTcuMjA2MjYgOS4wNjQ0NCAtMi45ODQ5Mw0Kdm4gMC4wNTM3NTMxIDAuOTk4MjQ2IDAuMDI0ODAyOQ0KdnQgMSAwLjYwMzQwMw0KdiAtNy44IDkuMDY0NDQgMA0Kdm4gMC4wNjExMTk5IDAuOTk4MTA1IDAuMDA3MTIwMDMNCnZ0IDAuNzMzOTI4IDENCnYgLTUuMDk4MzMgOC41NjQ0MyA2LjU0OTU4DQp2biAtMC4zNDYwMDMgMC43ODIzOSAwLjUxNzgzDQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiAtNC4wOTk5OCA4LjU2NDQ0IDcuMjE2NjYNCnZuIC0wLjM0NjAwMyAwLjc4MjM5IDAuNTE3ODMNCnZ0IDAuMDAwMTg4MDU3IDAuMzE2MTU5DQp2IC01LjUxNTQzIDkuMDY0NDQgNS41MTU0Mw0Kdm4gLTAuMzQ2MDAzIDAuNzgyMzkgMC41MTc4Mw0KdnQgMSAxDQp2IC0yLjk4NDkzIDkuMDY0NDMgNy4yMDYyNg0Kdm4gLTAuMzQ2MDAzIDAuNzgyMzkgMC41MTc4Mw0KdnQgMSAwDQp2IC01LjA5ODMzIDguNTY0NDMgNi41NDk1OA0Kdm4gLTAuOTI3NDA4IDAgMC4zNzQwNTINCnZ0IDAgMA0KdiAtNS41MTU0MyA5LjA2NDQ0IDUuNTE1NDMNCnZuIC0wLjcwNzEwNyAwIDAuNzA3MTA3DQp2dCAxIDANCnYgLTUuMDk4MzMgNi40ODQ1NCA2LjU0OTU4DQp2biAtMC45Mjc0MDggMCAwLjM3NDA1Mg0KdnQgMSAwDQp2IC01LjUxNTQzIDUuOTg0NTMgNS41MTU0Mw0Kdm4gLTAuNzA3MTA3IDAgMC43MDcxMDcNCnZ0IDAgMA0KdiAtMi45ODQ5MyA5LjA2NDQzIDcuMjA2MjYNCnZuIC0wLjM4MjY4NCAwIDAuOTIzODc5DQp2dCAwIDANCnYgLTQuMDk5OTggOC41NjQ0NCA3LjIxNjY2DQp2biAwLjAwOTMyNjQ3IDAgMC45OTk5NTYNCnZ0IDEgMA0KdiAtMi45ODQ5MyA1Ljk4NDUzIDcuMjA2MjYNCnZuIC0wLjM4MjY4NCAwIDAuOTIzODc5DQp2dCAxIDANCnYgLTQuMDk5OTggNi40ODQ1MyA3LjIxNjY2DQp2biAwLjAwOTMyNjQ3IDAgMC45OTk5NTYNCnZ0IDAgMA0KdiAtNC4wOTk5OCA4LjU2NDQ0IDcuMjE2NjYNCnZuIC0wLjU1NTU3MSAwIDAuODMxNDY5DQp2dCAwIDANCnYgLTUuMDk4MzMgOC41NjQ0MyA2LjU0OTU4DQp2biAtMC41NTU1NzEgMCAwLjgzMTQ2OQ0KdnQgMSAwDQp2IC00LjA5OTk4IDYuNDg0NTMgNy4yMTY2Ng0Kdm4gLTAuNTU1NTcxIDAgMC44MzE0NjkNCnZ0IDEgMA0KdiAtNS4wOTgzMyA2LjQ4NDU0IDYuNTQ5NTgNCnZuIC0wLjU1NTU3MSAwIDAuODMxNDY5DQp2dCAwIDANCnYgLTUuNTE1NDMgNS45ODQ1MyA1LjUxNTQzDQp2biAtMC4zNDYwMDcgLTAuNzgyMzg3IDAuNTE3ODMyDQp2dCAxIDANCnYgLTIuOTg0OTMgNS45ODQ1MyA3LjIwNjI2DQp2biAtMC4zNDYwMDcgLTAuNzgyMzg3IDAuNTE3ODMyDQp2dCAxIDENCnYgLTUuMDk4MzMgNi40ODQ1NCA2LjU0OTU4DQp2biAtMC4zNDYwMDcgLTAuNzgyMzg3IDAuNTE3ODMyDQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiAtNC4wOTk5OCA2LjQ4NDUzIDcuMjE2NjYNCnZuIC0wLjM0NjAwNyAtMC43ODIzODcgMC41MTc4MzINCnZ0IDAuMDAwMTg4MDU3IDAuNjgzODQxDQp2IC0yLjk4NDkzIDUuOTg0NTMgNy4yMDYyNg0Kdm4gLTAuMjc4OTQ4IC0wLjY4MjI2MSAwLjY3NTgwMg0KdnQgMCAwDQp2IC01LjUxNTQzIDUuOTg0NTMgNS41MTU0Mw0Kdm4gLTAuNTIxMjYxIC0wLjY3NTcwMyAwLjUyMTI2DQp2dCAxIDANCnYgLTIuODAwNCA1LjQ1ODQ3IDYuNzYwNzcNCnZuIC0wLjI3ODk0OCAtMC42ODIyNjEgMC42NzU4MDINCnZ0IDAgMQ0KdiAtNS4xNzQ0NyA1LjQ1ODQ2IDUuMTc0NDcNCnZuIC0wLjUyMTI2MSAtMC42NzU3MDMgMC41MjEyNg0KdnQgMSAxDQp2IC0zLjE3OTEyIDUuNDUzNjMgNS4wODg1NA0Kdm4gMC42NjI4NzQgLTAuMDAxNDE2MTggLTAuNzQ4NzMNCnZ0IDAgMQ0KdiAtNC42NDkzMyA1LjQ1MzY0IDMuNzkyNTkNCnZuIDAuODE2MDg4IDAuMDAwMjU0NTE0IC0wLjU3NzkyOA0KdnQgMCAwLjc1DQp2IC0zLjE3OTEyIDguNDUzNjQgNS4wODg1NA0Kdm4gMC42NjI4NzQgLTAuMDAxNDE2MTggLTAuNzQ4NzMNCnZ0IDEgMQ0KdiAtNC42ODA3MSA4LjQ1MzYzIDMuNzUzNDYNCnZuIDAuNzgxNzcyIDAuMDAwMzkwNzUyIC0wLjYyMzU2NA0KdnQgMSAwLjc1DQp2IC01LjEwNDc2IDguOTUzNjMgNC4wMjM4Ng0Kdm4gMC41NTQwNDUgMC43MDcxOTggLTAuNDM5MjA5DQp2dCAwLjUgMA0KdiAtMy40NDQwNSA4Ljk1MzYzIDUuNTEyNTgNCnZuIDAuMTgzMjgyIDAuNzM2NDEyIC0wLjY1MTIzMw0KdnQgMSAwDQp2IC00LjY4MDcxIDguNDUzNjMgMy43NTM0Ng0Kdm4gMC41NTQwNDUgMC43MDcxOTggLTAuNDM5MjA5DQp2dCAwLjUgMQ0KdiAtMy4xNzkxMiA4LjQ1MzY0IDUuMDg4NTQNCnZuIDAuMTgzMjgyIDAuNzM2NDEyIC0wLjY1MTIzMw0KdnQgMSAxDQp2IC0zLjQ0NDA1IDguOTUzNjMgNS41MTI1OA0Kdm4gMC4wMjQwNDQgMC45OTc0NjEgLTAuMDY3MDI5OQ0KdnQgMC4zOTc2NTMgMA0KdiAtNS4xMDQ3NiA4Ljk1MzYzIDQuMDIzODYNCnZuIDAuMDY0MjU4NCAwLjk5NjI0IC0wLjA1ODExNDINCnZ0IDEgMA0KdiAtMi45ODQ5MyA5LjA2NDQzIDcuMjA2MjYNCnZuIDAuMDI0MDQ0IDAuOTk3NDYxIC0wLjA2NzAyOTkNCnZ0IDAgMC4yNTk0ODENCnYgLTUuNTE1NDMgOS4wNjQ0NCA1LjUxNTQzDQp2biAwLjA2NDI1ODQgMC45OTYyNCAtMC4wNTgxMTQyDQp2dCAwLjgxMzY5NSAwLjM3NTE2NA0KdiAtNS41MTU0MyA5LjA2NDQ0IDUuNTE1NDMNCnZuIC0wLjUxNzgzNiAwLjc4MjM4NCAwLjM0NjAwNw0KdnQgMSAwDQp2IC03LjIwNjI2IDkuMDY0NDQgMi45ODQ5Mw0Kdm4gLTAuNTE3ODM2IDAuNzgyMzg0IDAuMzQ2MDA3DQp2dCAxIDENCnYgLTYuNTQ5NTggOC41NjQ0MyA1LjA5ODMzDQp2biAtMC41MTc4MzYgMC43ODIzODQgMC4zNDYwMDcNCnZ0IDAuMDAwMTg4MDU3IDAuMzE2MTU5DQp2IC03LjIxNjY2IDguNTY0NDMgNC4wOTk5OA0Kdm4gLTAuNTE3ODM2IDAuNzgyMzg0IDAuMzQ2MDA3DQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiAtOC4yMzYzMiA4LjU2NDQzIDEuMDI2MTkNCnZuIC0wLjYxMDgyNyAwLjc4MjM4NiAwLjEyMTUwMQ0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgLTguMDAyMDcgOC41NjQ0MyAyLjIwMzgzDQp2biAtMC42MTA4MjcgMC43ODIzODYgMC4xMjE1MDENCnZ0IDAuMDAwMTg4MDU3IDAuMzE2MTU5DQp2IC03LjggOS4wNjQ0NCAwDQp2biAtMC42MTA4MjcgMC43ODIzODYgMC4xMjE1MDENCnZ0IDEgMQ0KdiAtNy4yMDYyNiA5LjA2NDQ0IDIuOTg0OTMNCnZuIC0wLjYxMDgyNyAwLjc4MjM4NiAwLjEyMTUwMQ0KdnQgMSAwDQp2IC03LjIxNjY2IDguNTY0NDMgNC4wOTk5OA0Kdm4gLTAuOTk5OTU2IDAgLTAuMDA5MzI1OTgNCnZ0IDAgMA0KdiAtNy4yMDYyNiA5LjA2NDQ0IDIuOTg0OTMNCnZuIC0wLjkyNzQwOCAwIDAuMzc0MDUyDQp2dCAxIDANCnYgLTcuMjE2NjYgNi40ODQ1MyA0LjA5OTk4DQp2biAtMC45OTk5NTYgMCAtMC4wMDkzMjU5OA0KdnQgMSAwDQp2IC03LjIwNjI2IDUuOTg0NTQgMi45ODQ5Mw0Kdm4gLTAuOTI3NDA4IDAgMC4zNzQwNTINCnZ0IDAgMA0KdiAtNS41MTU0MyA5LjA2NDQ0IDUuNTE1NDMNCnZuIC0wLjcwNzEwNyAwIDAuNzA3MTA3DQp2dCAwIDANCnYgLTYuNTQ5NTggOC41NjQ0MyA1LjA5ODMzDQp2biAtMC4zODI2ODQgMCAwLjkyMzg3OQ0KdnQgMSAwDQp2IC01LjUxNTQzIDUuOTg0NTMgNS41MTU0Mw0Kdm4gLTAuNzA3MTA3IDAgMC43MDcxMDcNCnZ0IDEgMA0KdiAtNi41NDk1OCA2LjQ4NDU0IDUuMDk4MzMNCnZuIC0wLjM4MjY4NCAwIDAuOTIzODc5DQp2dCAwIDANCnYgLTYuNTQ5NTggOC41NjQ0MyA1LjA5ODMzDQp2biAtMC44MzE0NjkgMCAwLjU1NTU3DQp2dCAwIDANCnYgLTcuMjE2NjYgOC41NjQ0MyA0LjA5OTk4DQp2biAtMC44MzE0NjkgMCAwLjU1NTU3DQp2dCAxIDANCnYgLTYuNTQ5NTggNi40ODQ1NCA1LjA5ODMzDQp2biAtMC44MzE0NjkgMCAwLjU1NTU3DQp2dCAxIDANCnYgLTcuMjE2NjYgNi40ODQ1MyA0LjA5OTk4DQp2biAtMC44MzE0NjkgMCAwLjU1NTU3DQp2dCAwIDANCnYgLTguMjM2MzIgOC41NjQ0MyAxLjAyNjE5DQp2biAtMC45MjM4NzkgMCAtMC4zODI2ODQNCnZ0IDAgMA0KdiAtNy44IDkuMDY0NDQgMA0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDEgMA0KdiAtOC4yMzYzMiA2LjQ4NDUzIDEuMDI2MTkNCnZuIC0wLjkyMzg3OSAwIC0wLjM4MjY4NA0KdnQgMSAwDQp2IC03LjggNS45ODQ1MyAwDQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMCAwDQp2IC03LjIwNjI2IDkuMDY0NDQgMi45ODQ5Mw0Kdm4gLTAuOTI3NDA4IDAgMC4zNzQwNTINCnZ0IDAgMA0KdiAtOC4wMDIwNyA4LjU2NDQzIDIuMjAzODMNCnZuIC0wLjcwNzEwNyAwIDAuNzA3MTA3DQp2dCAxIDANCnYgLTcuMjA2MjYgNS45ODQ1NCAyLjk4NDkzDQp2biAtMC45Mjc0MDggMCAwLjM3NDA1Mg0KdnQgMSAwDQp2IC04LjAwMjA3IDYuNDg0NTMgMi4yMDM4Mw0Kdm4gLTAuNzA3MTA3IDAgMC43MDcxMDcNCnZ0IDAgMA0KdiAtOC4wMDIwNyA4LjU2NDQzIDIuMjAzODMNCnZuIC0wLjk4MDc4NSAwIDAuMTk1MDkNCnZ0IDAgMA0KdiAtOC4yMzYzMiA4LjU2NDQzIDEuMDI2MTkNCnZuIC0wLjk4MDc4NSAwIDAuMTk1MDkNCnZ0IDEgMA0KdiAtOC4wMDIwNyA2LjQ4NDUzIDIuMjAzODMNCnZuIC0wLjk4MDc4NSAwIDAuMTk1MDkNCnZ0IDEgMA0KdiAtOC4yMzYzMiA2LjQ4NDUzIDEuMDI2MTkNCnZuIC0wLjk4MDc4NSAwIDAuMTk1MDkNCnZ0IDAgMA0KdiAtNy44IDUuOTg0NTMgMA0Kdm4gLTAuNjEwODE4IC0wLjc4MjM5MyAwLjEyMTUNCnZ0IDEgMA0KdiAtNy4yMDYyNiA1Ljk4NDU0IDIuOTg0OTMNCnZuIC0wLjYxMDgxOCAtMC43ODIzOTMgMC4xMjE1DQp2dCAxIDENCnYgLTguMjM2MzIgNi40ODQ1MyAxLjAyNjE5DQp2biAtMC42MTA4MTggLTAuNzgyMzkzIDAuMTIxNQ0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgLTguMDAyMDcgNi40ODQ1MyAyLjIwMzgzDQp2biAtMC42MTA4MTggLTAuNzgyMzkzIDAuMTIxNQ0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgLTYuNTQ5NTggNi40ODQ1NCA1LjA5ODMzDQp2biAtMC41MTc4MjggLTAuNzgyMzkxIDAuMzQ2MDAzDQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiAtNy4yMTY2NiA2LjQ4NDUzIDQuMDk5OTgNCnZuIC0wLjUxNzgyOCAtMC43ODIzOTEgMC4zNDYwMDMNCnZ0IDAuMDAwMTg4MDU3IDAuMzE2MTU5DQp2IC01LjUxNTQzIDUuOTg0NTMgNS41MTU0Mw0Kdm4gLTAuNTE3ODI4IC0wLjc4MjM5MSAwLjM0NjAwMw0KdnQgMSAxDQp2IC03LjIwNjI2IDUuOTg0NTQgMi45ODQ5Mw0Kdm4gLTAuNTE3ODI4IC0wLjc4MjM5MSAwLjM0NjAwMw0KdnQgMSAwDQp2IC03LjIwNjI2IDUuOTg0NTQgMi45ODQ5Mw0Kdm4gLTAuNjgxMDU5IC0wLjY3NTcwNCAwLjI4MjEwNA0KdnQgMCAwDQp2IC03LjggNS45ODQ1MyAwDQp2biAtMC43MzcxNzEgLTAuNjc1NzA2IDEuMDg0MzZFLTA2DQp2dCAxIDANCnYgLTYuNzYwNzcgNS40NTg0OCAyLjgwMDQNCnZuIC0wLjY4MTA1OSAtMC42NzU3MDQgMC4yODIxMDQNCnZ0IDAgMQ0KdiAtNy4zMTc4IDUuNDU4NDcgMA0Kdm4gLTAuNzM3MTcxIC0wLjY3NTcwNiAxLjA4NDM2RS0wNg0KdnQgMSAxDQp2IC01LjUxNTQzIDUuOTg0NTMgNS41MTU0Mw0Kdm4gLTAuNTIxMjYxIC0wLjY3NTcwMyAwLjUyMTI2DQp2dCAwIDANCnYgLTcuMjA2MjYgNS45ODQ1NCAyLjk4NDkzDQp2biAtMC42ODEwNTkgLTAuNjc1NzA0IDAuMjgyMTA0DQp2dCAxIDANCnYgLTUuMTc0NDcgNS40NTg0NiA1LjE3NDQ3DQp2biAtMC41MjEyNjEgLTAuNjc1NzAzIDAuNTIxMjYNCnZ0IDAgMQ0KdiAtNi43NjA3NyA1LjQ1ODQ4IDIuODAwNA0Kdm4gLTAuNjgxMDU5IC0wLjY3NTcwNCAwLjI4MjEwNA0KdnQgMSAxDQp2IC01LjE0MDQ4IDcuNTM0ODcgMS4zMTMxNg0Kdm4gMC4xMjA4NjggLTAuOTkyMjY0IC0wLjAyODMzNzkNCnZ0IDAuNzUgMC44MzcyMDENCnYgLTYuMTU5OTkgNy40NTM2MyAtMC4xOTA3Mg0Kdm4gMC4wOTA4MzA1IC0wLjk5NTg1NyAwLjAwNDI3MTYNCnZ0IDAuMDA4MTA0NTcgMC41MDU1OTINCnYgLTUuNDkxMjkgNy41MzQ4NyAtMC4xOTUyOTgNCnZuIDAuMTIwNzIyIC0wLjk5MjQyMiAwLjAyMjg5NTUNCnZ0IDAuNjI5OTg2IDAuNQ0KdiAtNS42OTAzIDcuNDUwNTcgMS45MDI3OQ0Kdm4gMC45MTc3NCAwLjAwMDc2Mjk5OCAtMC4zOTcxODENCnZ0IDAuNjYzNTk2IDAuNQ0KdiAtNC42NDkzMyA1LjQ1MzY0IDMuNzkyNTkNCnZuIDAuODE2MDg4IDAuMDAwMjU0NTE0IC0wLjU3NzkyOA0KdnQgMCAwLjc1DQp2IC01LjY5MDQ3IDUuNDUzNjQgMS45MDI1NQ0Kdm4gMC45MzUxOCA0LjE4NDQ2RS0wNSAtMC4zNTQxNzINCnZ0IDAgMC41DQp2IC01LjY5MDI4IDguNDUzNjQgMS45MDI4Mg0Kdm4gMC42OTQ4MjQgMC43MDA3OTcgMC4xNjE1NjUNCnZ0IDAgMQ0KdiAtNi4xNjQ0NyA4Ljk1MzYzIDIuMDYxMzgNCnZuIDAuNzIzNDI4IDAuNjkwMzk1IC0wLjAwMjU1NjczDQp2dCAwIDANCnYgLTQuNjgwNzEgOC40NTM2MyAzLjc1MzQ2DQp2biAwLjU1NDA0NSAwLjcwNzE5OCAtMC40MzkyMDkNCnZ0IDAuNSAxDQp2IC01LjEwNDc2IDguOTUzNjMgNC4wMjM4Ng0Kdm4gMC41NTQwNDUgMC43MDcxOTggLTAuNDM5MjA5DQp2dCAwLjUgMA0KdiAtNS4zMjA4NiA4LjM3MjQgLTAuMTk1MTA3DQp2biAwLjk5MTA5NSAtMC4xMzE3IDAuMDE5NjI1Mg0KdnQgMSAwLjc1DQp2IC01LjE0MDMzIDguMzcyNCAxLjMxMzk0DQp2biAwLjk3OTk0MiAtMC4wOTk2OTEyIC0wLjE3MjU1Mw0KdnQgMSAxDQp2IC01LjQ5MTI5IDcuNTM0ODcgLTAuMTk1Mjk4DQp2biAwLjk5MTA5NSAtMC4xMzE3IDAuMDE5NjI1Mg0KdnQgMC42NjY2NjcgMC43NQ0KdiAtNS4xNDA0OCA3LjUzNDg3IDEuMzEzMTYNCnZuIDAuOTc5OTQyIC0wLjA5OTY5MTIgLTAuMTcyNTUzDQp2dCAwLjY2NjY2NyAxDQp2IC01LjY5MDMgNy40NTA1NyAxLjkwMjc5DQp2biAwLjczMTExIC0wLjAwMDM2OTA5OCAwLjY4MjI1OQ0KdnQgMCAwDQp2IC01LjE0MDQ4IDcuNTM0ODcgMS4zMTMxNg0Kdm4gMC43MzExMSAtMC4wMDAzNjkwOTggMC42ODIyNTkNCnZ0IDEgMA0KdiAtNS42OTAyOCA4LjQ1MzY0IDEuOTAyODINCnZuIDAuNzMxMTEgLTAuMDAwMzY5MDk4IDAuNjgyMjU5DQp2dCAwIDENCnYgLTUuMTQwMzMgOC4zNzI0IDEuMzEzOTQNCnZuIDAuNzMxMTEgLTAuMDAwMzY5MDk4IDAuNjgyMjU5DQp2dCAxIDENCnYgLTUuNjkwMjggOC40NTM2NCAxLjkwMjgyDQp2biAwLjY5NDgyNCAwLjcwMDc5NyAwLjE2MTU2NQ0KdnQgMCAwDQp2IC01Ljg2MTM1IDguOTUzNjMgMS4zOTM2Ng0Kdm4gMC42NzI0NzIgMC42OTY5NjkgMC4yNDkwMjcNCnZ0IDEgMA0KdiAtNi4xNjQ0NyA4Ljk1MzYzIDIuMDYxMzgNCnZuIDAuNzIzNDI4IDAuNjkwMzk1IC0wLjAwMjU1NjczDQp2dCAwLjY4MzMzMyAwLjczMDEwNg0KdiAtNS44NjEzNSA4Ljk1MzYzIDEuMzkzNjYNCnZuIDAuNjcyNDcyIDAuNjk2OTY5IDAuMjQ5MDI3DQp2dCAwIDANCnYgLTUuNjkwMjggOC40NTM2NCAxLjkwMjgyDQp2biAwLjY5NDgyNCAwLjcwMDc5NyAwLjE2MTU2NQ0KdnQgMSAwDQp2IC01LjE0MDMzIDguMzcyNCAxLjMxMzk0DQp2biAwLjYzNDM1MSAwLjc0NTkwOCAwLjIwMzAyNw0KdnQgMC43MzA3NjkgMC42ODI2MjUNCnYgLTUuNjkwMyA3LjQ1MDU3IDEuOTAyNzkNCnZuIDAuOTE3NzQgMC4wMDA3NjI5OTggLTAuMzk3MTgxDQp2dCAwLjAwMTQwNzYxIDANCnYgLTUuNjkwNDcgNS40NTM2NCAxLjkwMjU1DQp2biAwLjkzNTE4IDQuMTg0NDZFLTA1IC0wLjM1NDE3Mg0KdnQgMC45OTk4NzEgMA0KdiAtNi4xNTk5OSA3LjQ1MzYzIC0wLjE5MDcyDQp2biAwLjk5OTQwMiA3LjQ0NzM3RS0wNSAtMC4wMzQ1NzIyDQp2dCAwIDAuOTg0MjkNCnYgLTYuMTU5NjcgNS40NTM2NCAtMC4xOTE1ODcNCnZuIDAuOTk5NDAyIDcuNDQ3MzdFLTA1IC0wLjAzNDU3MjINCnZ0IDEgMC45OTg0ODENCnYgLTYuMDA1OTcgOC45NTM2MyAtMC4yMTY2NjcNCnZuIDAuNjQwOTMxIDAuNzY1OTI1IDAuMDUwNjUzNA0KdnQgMC43NSAwDQp2IC01LjMyMDg2IDguMzcyNCAtMC4xOTUxMDcNCnZuIDAuNjQwOTMxIDAuNzY1OTI1IDAuMDUwNjUzNA0KdnQgMC43NSAxDQp2IC01LjE0MDMzIDguMzcyNCAxLjMxMzk0DQp2biAwLjYzNDM1MSAwLjc0NTkwOCAwLjIwMzAyNw0KdnQgMSAxDQp2IC01LjY5MDMgNy40NTA1NyAxLjkwMjc5DQp2biAwLjEyMDg2OCAtMC45OTIyNjQgLTAuMDI4MzM3OQ0KdnQgMC40NDc2OTkgMC45Njc2ODENCnYgLTUuNjkwMjggOC40NTM2NCAxLjkwMjgyDQp2biAwLjg3NzM2OCAwLjAwMjE4NjA0IC0wLjQ3OTgxMw0KdnQgMSAwLjUNCnYgLTQuNjgwNzEgOC40NTM2MyAzLjc1MzQ2DQp2biAwLjc4MTc3MiAwLjAwMDM5MDc1MiAtMC42MjM1NjQNCnZ0IDEgMC43NQ0KdiAtNS4xMDQ3NiA4Ljk1MzYzIDQuMDIzODYNCnZuIDAuMDY0MjU4NCAwLjk5NjI0IC0wLjA1ODExNDINCnZ0IDAuMzMzNzY2IDANCnYgLTYuMTY0NDcgOC45NTM2MyAyLjA2MTM4DQp2biAwLjA3NTIxMzEgMC45OTY4MjcgLTAuMDI2MDQ0Nw0KdnQgMSAwDQp2IC01LjUxNTQzIDkuMDY0NDQgNS41MTU0Mw0Kdm4gMC4wNjQyNTg0IDAuOTk2MjQgLTAuMDU4MTE0Mg0KdnQgMCAwLjMyMTI3Nw0KdiAtNy4yMDYyNiA5LjA2NDQ0IDIuOTg0OTMNCnZuIDAuMDc1MjEzMSAwLjk5NjgyNyAtMC4wMjYwNDQ3DQp2dCAwLjkwNTExNCAwLjQwNjI2Mg0KdiAtNi4xNjQ0NyA4Ljk1MzYzIDIuMDYxMzgNCnZuIDAuMDc1MjEzMSAwLjk5NjgyNyAtMC4wMjYwNDQ3DQp2dCAwLjQzMjExOSAwDQp2IC01Ljg2MTM1IDguOTUzNjMgMS4zOTM2Ng0Kdm4gMC4wNjgwMzU2IDAuOTk3NjY2IC0wLjAwNTcyNTcyDQp2dCAwLjYzOTY0OCAwDQp2IC03LjIwNjI2IDkuMDY0NDQgMi45ODQ5Mw0Kdm4gMC4wNzUyMTMxIDAuOTk2ODI3IC0wLjAyNjA0NDcNCnZ0IDAgMC4yNzkwNTQNCnYgLTcuOCA5LjA2NDQ0IDANCnZuIDAuMDYxMTE5OSAwLjk5ODEwNSAwLjAwNzEyMDAzDQp2dCAxIDAuNzg3OTg0DQp2IC00LjY0OTMzIDUuNDUzNjQgMy43OTI1OQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAtMy4xNzkxMiA1LjQ1MzYzIDUuMDg4NTQNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjU4NTA4IDANCnYgLTUuMTc0NDcgNS40NTg0NiA1LjE3NDQ3DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4xNTUxODcgMC40MTMxMzgNCnYgLTIuODAwNCA1LjQ1ODQ3IDYuNzYwNzcNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAxIDAuMjk5NzM3DQp2IC01LjY5MDQ3IDUuNDUzNjQgMS45MDI1NQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAtNC42NDkzMyA1LjQ1MzY0IDMuNzkyNTkNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjY5Mjc1NSAwDQp2IC02Ljc2MDc3IDUuNDU4NDggMi44MDA0DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4wODY2ODY1IDAuNDQwMDUxDQp2IC01LjE3NDQ3IDUuNDU4NDYgNS4xNzQ0Nw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDEgMC4zNjE3MjgNCnYgLTYuMTU5NjcgNS40NTM2NCAtMC4xOTE1ODcNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgLTUuNjkwNDcgNS40NTM2NCAxLjkwMjU1DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC43NDU0NjUgMA0KdiAtNy4zMTc4IDUuNDU4NDcgMA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMDEyMjgxNCAwLjQ2MzIwMQ0KdiAtNi43NjA3NyA1LjQ1ODQ4IDIuODAwNA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDEgMC40MTE1ODYNCnYgMCA5LjA2NDQ0IDcuOA0Kdm4gLTAuMTIxNTAxIDAuNzgyMzkzIDAuNjEwODE4DQp2dCAxIDANCnYgLTIuOTg0OTMgOS4wNjQ0MyA3LjIwNjI2DQp2biAtMC4xMjE1MDEgMC43ODIzOTMgMC42MTA4MTgNCnZ0IDEgMQ0KdiAtMS4wMjYxOSA4LjU2NDQ0IDguMjM2MzINCnZuIC0wLjEyMTUwMSAwLjc4MjM5MyAwLjYxMDgxOA0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgLTIuMjAzODMgOC41NjQ0NCA4LjAwMjA3DQp2biAtMC4xMjE1MDEgMC43ODIzOTMgMC42MTA4MTgNCnZ0IDAuMDAwMTg4MDU3IDAuNjgzODQxDQp2IC0yLjIwMzgzIDguNTY0NDQgOC4wMDIwNw0Kdm4gLTAuNzA3MTA3IDAgMC43MDcxMDcNCnZ0IDAgMA0KdiAtMi45ODQ5MyA5LjA2NDQzIDcuMjA2MjYNCnZuIC0wLjM4MjY4NCAwIDAuOTIzODc5DQp2dCAxIDANCnYgLTIuMjAzODMgNi40ODQ1NSA4LjAwMjA3DQp2biAtMC43MDcxMDcgMCAwLjcwNzEwNw0KdnQgMSAwDQp2IC0yLjk4NDkzIDUuOTg0NTMgNy4yMDYyNg0Kdm4gLTAuMzgyNjg0IDAgMC45MjM4NzkNCnZ0IDAgMA0KdiAtMS4wMjYxOSA2LjQ4NDU0IDguMjM2MzINCnZuIDAuMzkxMjgzIDAgMC45MjAyNw0KdnQgMCAwDQp2IDAgNS45ODQ1MyA3LjgNCnZuIDAuMDA5MzI2NDcgMCAwLjk5OTk1Ng0KdnQgMSAwDQp2IC0xLjAyNjE5IDguNTY0NDQgOC4yMzYzMg0Kdm4gMC4zOTEyODMgMCAwLjkyMDI3DQp2dCAxIDANCnYgMCA5LjA2NDQ0IDcuOA0Kdm4gMC4wMDkzMjY0NyAwIDAuOTk5OTU2DQp2dCAwIDANCnYgLTEuMDI2MTkgOC41NjQ0NCA4LjIzNjMyDQp2biAtMC4xOTUwOSAwIDAuOTgwNzg1DQp2dCAwIDANCnYgLTIuMjAzODMgOC41NjQ0NCA4LjAwMjA3DQp2biAtMC4xOTUwOSAwIDAuOTgwNzg1DQp2dCAxIDANCnYgLTEuMDI2MTkgNi40ODQ1NCA4LjIzNjMyDQp2biAtMC4xOTUwOSAwIDAuOTgwNzg1DQp2dCAxIDANCnYgLTIuMjAzODMgNi40ODQ1NSA4LjAwMjA3DQp2biAtMC4xOTUwOSAwIDAuOTgwNzg1DQp2dCAwIDANCnYgNy44IDkuMDY0NDMgMA0Kdm4gMC42MTA4MjIgMC43ODIzOSAwLjEyMTQ5Nw0KdnQgMSAwDQp2IDcuMjA2MjYgOS4wNjQ0NCAyLjk4NDkzDQp2biAwLjYxMDgyMiAwLjc4MjM5IDAuMTIxNDk3DQp2dCAxIDENCnYgOC4yMzYzMiA4LjU2NDQzIDEuMDI2MTkNCnZuIDAuNjEwODIyIDAuNzgyMzkgMC4xMjE0OTcNCnZ0IDAuMDAwMTg4MDU3IDAuMzE2MTU5DQp2IDguMDAyMDcgOC41NjQ0NCAyLjIwMzgzDQp2biAwLjYxMDgyMiAwLjc4MjM5IDAuMTIxNDk3DQp2dCAwLjAwMDE4ODA1NyAwLjY4Mzg0MQ0KdiA2LjU0OTU4IDguNTY0NDMgNS4wOTgzMw0Kdm4gMC41MTc4MzIgMC43ODIzODcgMC4zNDYwMDYNCnZ0IDAuMDAwMTg4MDU3IDAuNjgzODQxDQp2IDcuMjE2NjYgOC41NjQ0NCA0LjA5OTk4DQp2biAwLjUxNzgzMiAwLjc4MjM4NyAwLjM0NjAwNg0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgNS41MTU0MyA5LjA2NDQ0IDUuNTE1NDMNCnZuIDAuNTE3ODMyIDAuNzgyMzg3IDAuMzQ2MDA2DQp2dCAxIDENCnYgNy4yMDYyNiA5LjA2NDQ0IDIuOTg0OTMNCnZuIDAuNTE3ODMyIDAuNzgyMzg3IDAuMzQ2MDA2DQp2dCAxIDANCnYgNS41MTU0MyA5LjA2NDQ0IDUuNTE1NDMNCnZuIDAuMzQ2MDA3IDAuNzgyMzg2IDAuNTE3ODMzDQp2dCAxIDANCnYgMi45ODQ5MyA5LjA2NDQ0IDcuMjA2MjYNCnZuIDAuMzQ2MDA3IDAuNzgyMzg2IDAuNTE3ODMzDQp2dCAxIDENCnYgNS4wOTgzMyA4LjU2NDQzIDYuNTQ5NTgNCnZuIDAuMzQ2MDA3IDAuNzgyMzg2IDAuNTE3ODMzDQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiA0LjA5OTk4IDguNTY0NDQgNy4yMTY2Ng0Kdm4gMC4zNDYwMDcgMC43ODIzODYgMC41MTc4MzMNCnZ0IDAuMDAwMTg4MDU3IDAuNjgzODQxDQp2IDEuMDI2MTkgOC41NjQ0NCA4LjIzNjMyDQp2biAwLjEyMTUwMiAwLjc4MjM4NyAwLjYxMDgyNQ0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgMi4yMDM4MyA4LjU2NDQzIDguMDAyMDcNCnZuIDAuMTIxNTAyIDAuNzgyMzg3IDAuNjEwODI1DQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiAwIDkuMDY0NDQgNy44DQp2biAwLjEyMTUwMiAwLjc4MjM4NyAwLjYxMDgyNQ0KdnQgMSAxDQp2IDIuOTg0OTMgOS4wNjQ0NCA3LjIwNjI2DQp2biAwLjEyMTUwMiAwLjc4MjM4NyAwLjYxMDgyNQ0KdnQgMSAwDQp2IDguMDAyMDcgOC41NjQ0NCAyLjIwMzgzDQp2biAwLjY5MDY2MSAtNC4wMTU1MkUtMDUgMC43MjMxNzgNCnZ0IDAgMA0KdiA3LjIwNjI2IDkuMDY0NDQgMi45ODQ5Mw0Kdm4gMC45MjAyNyAwIDAuMzkxMjg0DQp2dCAxIDANCnYgOC4wMDIwNyA2LjQ4NDU1IDIuMjAzODMNCnZuIDAuNjkwNjYxIC00LjAxNTUyRS0wNSAwLjcyMzE3OA0KdnQgMSAwDQp2IDcuMjA2MjYgNS45ODQ1MyAyLjk4NDkzDQp2biAwLjkyMDI3IDAgMC4zOTEyODQNCnZ0IDAgMA0KdiA3LjggOS4wNjQ0MyAwDQp2biAwLjk5OTk1NiAwIDAuMDA5MzI1OTgNCnZ0IDAgMA0KdiA4LjIzNjMyIDguNTY0NDMgMS4wMjYxOQ0Kdm4gMC45MTc3NCAwLjAwMDc2Mjk5OCAtMC4zOTcxODENCnZ0IDEgMA0KdiA3LjggNS45ODQ1MyAwDQp2biAwLjk5OTk1NiAwIDAuMDA5MzI1OTgNCnZ0IDEgMA0KdiA4LjIzNjMyIDYuNDg0NTMgMS4wMjYxOQ0Kdm4gMC45MTc3NCAwLjAwMDc2Mjk5OCAtMC4zOTcxODENCnZ0IDAgMA0KdiA4LjIzNjMyIDguNTY0NDMgMS4wMjYxOQ0Kdm4gMC45ODA3ODUgMCAwLjE5NTA4OQ0KdnQgMCAwDQp2IDguMDAyMDcgOC41NjQ0NCAyLjIwMzgzDQp2biAwLjk4MDc4NSAwIDAuMTk1MDg5DQp2dCAxIDANCnYgOC4yMzYzMiA2LjQ4NDUzIDEuMDI2MTkNCnZuIDAuOTgwNzg1IDAgMC4xOTUwODkNCnZ0IDEgMA0KdiA4LjAwMjA3IDYuNDg0NTUgMi4yMDM4Mw0Kdm4gMC45ODA3ODUgMCAwLjE5NTA4OQ0KdnQgMCAwDQp2IDYuNTQ5NTggOC41NjQ0MyA1LjA5ODMzDQp2biAwLjM3OTI4MSAwIDAuOTI1MjgxDQp2dCAwIDANCnYgNS41MTU0MyA5LjA2NDQ0IDUuNTE1NDMNCnZuIDAuNzA3MTA3IDAgMC43MDcxMDYNCnZ0IDEgMA0KdiA2LjU0OTU4IDYuNDg0NTQgNS4wOTgzMw0Kdm4gMC4zNzkyODEgMCAwLjkyNTI4MQ0KdnQgMSAwDQp2IDUuNTE1NDMgNS45ODQ1NCA1LjUxNTQzDQp2biAwLjcwNzEwNyAwIDAuNzA3MTA2DQp2dCAwIDANCnYgNy4yMDYyNiA5LjA2NDQ0IDIuOTg0OTMNCnZuIDAuOTIwMjcgMCAwLjM5MTI4NA0KdnQgMCAwDQp2IDcuMjE2NjYgOC41NjQ0NCA0LjA5OTk4DQp2biAwLjk5OTk1NyAwIC0wLjAwOTMyNTc3DQp2dCAxIDANCnYgNy4yMDYyNiA1Ljk4NDUzIDIuOTg0OTMNCnZuIDAuOTIwMjcgMCAwLjM5MTI4NA0KdnQgMSAwDQp2IDcuMjE2NjYgNi40ODQ1MyA0LjA5OTk4DQp2biAwLjk5OTk1NyAwIC0wLjAwOTMyNTc3DQp2dCAwIDANCnYgNy4yMTY2NiA4LjU2NDQ0IDQuMDk5OTgNCnZuIDAuODMxNDY5IDAgMC41NTU1NzENCnZ0IDAgMA0KdiA2LjU0OTU4IDguNTY0NDMgNS4wOTgzMw0Kdm4gMC44MzE0NjkgMCAwLjU1NTU3MQ0KdnQgMSAwDQp2IDcuMjE2NjYgNi40ODQ1MyA0LjA5OTk4DQp2biAwLjgzMTQ2OSAwIDAuNTU1NTcxDQp2dCAxIDANCnYgNi41NDk1OCA2LjQ4NDU0IDUuMDk4MzMNCnZuIDAuODMxNDY5IDAgMC41NTU1NzENCnZ0IDAgMA0KdiA0LjA5OTk4IDguNTY0NDQgNy4yMTY2Ng0Kdm4gLTAuMDA5MzI1NDkgMCAwLjk5OTk1Ng0KdnQgMCAwDQp2IDIuOTg0OTMgOS4wNjQ0NCA3LjIwNjI2DQp2biAwLjM3OTI4MSAwIDAuOTI1MjgxDQp2dCAxIDANCnYgNC4wOTk5OCA2LjQ4NDU0IDcuMjE2NjYNCnZuIC0wLjAwOTMyNTQ5IDAgMC45OTk5NTYNCnZ0IDEgMA0KdiAyLjk4NDkzIDUuOTg0NTQgNy4yMDYyNg0Kdm4gMC4zNzkyODEgMCAwLjkyNTI4MQ0KdnQgMCAwDQp2IDUuNTE1NDMgOS4wNjQ0NCA1LjUxNTQzDQp2biAwLjcwNzEwNyAwIDAuNzA3MTA2DQp2dCAwIDANCnYgNS4wOTgzMyA4LjU2NDQzIDYuNTQ5NTgNCnZuIDAuOTI3NDA4IDAgMC4zNzQwNTENCnZ0IDEgMA0KdiA1LjUxNTQzIDUuOTg0NTQgNS41MTU0Mw0Kdm4gMC43MDcxMDcgMCAwLjcwNzEwNg0KdnQgMSAwDQp2IDUuMDk4MzMgNi40ODQ1NSA2LjU0OTU4DQp2biAwLjkyNzQwOCAwIDAuMzc0MDUxDQp2dCAwIDANCnYgNS4wOTgzMyA4LjU2NDQzIDYuNTQ5NTgNCnZuIDAuNTU1NTcxIDAgMC44MzE0NjkNCnZ0IDAgMA0KdiA0LjA5OTk4IDguNTY0NDQgNy4yMTY2Ng0Kdm4gMC41NTU1NzEgMCAwLjgzMTQ2OQ0KdnQgMSAwDQp2IDUuMDk4MzMgNi40ODQ1NSA2LjU0OTU4DQp2biAwLjU1NTU3MSAwIDAuODMxNDY5DQp2dCAxIDANCnYgNC4wOTk5OCA2LjQ4NDU0IDcuMjE2NjYNCnZuIDAuNTU1NTcxIDAgMC44MzE0NjkNCnZ0IDAgMA0KdiAxLjAyNjE5IDguNTY0NDQgOC4yMzYzMg0Kdm4gLTAuMzgyNjg0IDAgMC45MjM4NzkNCnZ0IDAgMA0KdiAwIDkuMDY0NDQgNy44DQp2biAwLjAwOTMyNjQ3IDAgMC45OTk5NTYNCnZ0IDEgMA0KdiAxLjAyNjE5IDYuNDg0NTMgOC4yMzYzMg0Kdm4gLTAuMzgyNjg0IDAgMC45MjM4NzkNCnZ0IDEgMA0KdiAwIDUuOTg0NTMgNy44DQp2biAwLjAwOTMyNjQ3IDAgMC45OTk5NTYNCnZ0IDAgMA0KdiAyLjk4NDkzIDkuMDY0NDQgNy4yMDYyNg0Kdm4gMC4zNzkyODEgMCAwLjkyNTI4MQ0KdnQgMCAwDQp2IDIuMjAzODMgOC41NjQ0MyA4LjAwMjA3DQp2biAwLjcwNzEwNyAwIDAuNzA3MTA2DQp2dCAxIDANCnYgMi45ODQ5MyA1Ljk4NDU0IDcuMjA2MjYNCnZuIDAuMzc5MjgxIDAgMC45MjUyODENCnZ0IDEgMA0KdiAyLjIwMzgzIDYuNDg0NTMgOC4wMDIwNw0Kdm4gMC43MDcxMDcgMCAwLjcwNzEwNg0KdnQgMCAwDQp2IDIuMjAzODMgOC41NjQ0MyA4LjAwMjA3DQp2biAwLjE4ODM0IDAgMC45ODIxMDQNCnZ0IDAgMA0KdiAxLjAyNjE5IDguNTY0NDQgOC4yMzYzMg0Kdm4gMC4xODgzNCAwIDAuOTgyMTA0DQp2dCAxIDANCnYgMi4yMDM4MyA2LjQ4NDUzIDguMDAyMDcNCnZuIDAuMTg4MzQgMCAwLjk4MjEwNA0KdnQgMSAwDQp2IDEuMDI2MTkgNi40ODQ1MyA4LjIzNjMyDQp2biAwLjE4ODM0IDAgMC45ODIxMDQNCnZ0IDAgMA0KdiAwIDUuOTg0NTMgNy44DQp2biAwLjEyMTQ5OSAtMC43ODIzOTUgMC42MTA4MTYNCnZ0IDEgMA0KdiAyLjk4NDkzIDUuOTg0NTQgNy4yMDYyNg0Kdm4gMC4xMjE0OTkgLTAuNzgyMzk1IDAuNjEwODE2DQp2dCAxIDENCnYgMS4wMjYxOSA2LjQ4NDUzIDguMjM2MzINCnZuIDAuMTIxNDk5IC0wLjc4MjM5NSAwLjYxMDgxNg0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgMi4yMDM4MyA2LjQ4NDUzIDguMDAyMDcNCnZuIDAuMTIxNDk5IC0wLjc4MjM5NSAwLjYxMDgxNg0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgNS4wOTgzMyA2LjQ4NDU1IDYuNTQ5NTgNCnZuIDAuMzQ2MDA1IC0wLjc4MjM4NyAwLjUxNzgzMg0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgNC4wOTk5OCA2LjQ4NDU0IDcuMjE2NjYNCnZuIDAuMzQ2MDA1IC0wLjc4MjM4NyAwLjUxNzgzMg0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgNS41MTU0MyA1Ljk4NDU0IDUuNTE1NDMNCnZuIDAuMzQ2MDA1IC0wLjc4MjM4NyAwLjUxNzgzMg0KdnQgMSAxDQp2IDIuOTg0OTMgNS45ODQ1NCA3LjIwNjI2DQp2biAwLjM0NjAwNSAtMC43ODIzODcgMC41MTc4MzINCnZ0IDEgMA0KdiA1LjUxNTQzIDUuOTg0NTQgNS41MTU0Mw0Kdm4gMC41MTc4MyAtMC43ODIzODggMC4zNDYwMDcNCnZ0IDEgMA0KdiA3LjIwNjI2IDUuOTg0NTMgMi45ODQ5Mw0Kdm4gMC41MTc4MyAtMC43ODIzODggMC4zNDYwMDcNCnZ0IDEgMQ0KdiA2LjU0OTU4IDYuNDg0NTQgNS4wOTgzMw0Kdm4gMC41MTc4MyAtMC43ODIzODggMC4zNDYwMDcNCnZ0IDAuMDAwMTg4MDU3IDAuMzE2MTU5DQp2IDcuMjE2NjYgNi40ODQ1MyA0LjA5OTk4DQp2biAwLjUxNzgzIC0wLjc4MjM4OCAwLjM0NjAwNw0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgOC4yMzYzMiA2LjQ4NDUzIDEuMDI2MTkNCnZuIDAuNjEwODI3IC0wLjc4MjM4NSAwLjEyMTUwNA0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgOC4wMDIwNyA2LjQ4NDU1IDIuMjAzODMNCnZuIDAuNjEwODI3IC0wLjc4MjM4NSAwLjEyMTUwNA0KdnQgMC4wMDAxODgwNTcgMC4zMTYxNTkNCnYgNy44IDUuOTg0NTMgMA0Kdm4gMC42MTA4MjcgLTAuNzgyMzg1IDAuMTIxNTA0DQp2dCAxIDENCnYgNy4yMDYyNiA1Ljk4NDUzIDIuOTg0OTMNCnZuIDAuNjEwODI3IC0wLjc4MjM4NSAwLjEyMTUwNA0KdnQgMSAwDQp2IC0xLjAyNjE5IDYuNDg0NTQgOC4yMzYzMg0Kdm4gLTAuMTIxNTAzIC0wLjc4MjM4MyAwLjYxMDgzMQ0KdnQgMC4wMDAxODgwNTcgMC42ODM4NDENCnYgLTIuMjAzODMgNi40ODQ1NSA4LjAwMjA3DQp2biAtMC4xMjE1MDMgLTAuNzgyMzgzIDAuNjEwODMxDQp2dCAwLjAwMDE4ODA1NyAwLjMxNjE1OQ0KdiAwIDUuOTg0NTMgNy44DQp2biAtMC4xMjE1MDMgLTAuNzgyMzgzIDAuNjEwODMxDQp2dCAxIDENCnYgLTIuOTg0OTMgNS45ODQ1MyA3LjIwNjI2DQp2biAtMC4xMjE1MDMgLTAuNzgyMzgzIDAuNjEwODMxDQp2dCAxIDANCnYgMi45ODQ5MyA1Ljk4NDU0IDcuMjA2MjYNCnZuIDAuMjc4OTQ4IC0wLjY4MjI2MyAwLjY3NTc5OQ0KdnQgMCAwDQp2IDAgNS45ODQ1MyA3LjgNCnZuIDEuMjk0MDFFLTA2IC0wLjY4Nzk1MiAwLjcyNTc1Ng0KdnQgMSAwDQp2IDIuODAwNCA1LjQ1ODQ5IDYuNzYwNzcNCnZuIDAuMjc4OTQ4IC0wLjY4MjI2MyAwLjY3NTc5OQ0KdnQgMCAxDQp2IDAgNS40ODQ5NSA3LjMwODkNCnZuIDEuMjk0MDFFLTA2IC0wLjY4Nzk1MiAwLjcyNTc1Ng0KdnQgMSAxDQp2IDUuNTE1NDMgNS45ODQ1NCA1LjUxNTQzDQp2biAwLjUyMTI1OCAtMC42NzU3MDUgMC41MjEyNg0KdnQgMCAwDQp2IDIuOTg0OTMgNS45ODQ1NCA3LjIwNjI2DQp2biAwLjI3ODk0OCAtMC42ODIyNjMgMC42NzU3OTkNCnZ0IDEgMA0KdiA1LjE3NDQ3IDUuNDU4NDcgNS4xNzQ0Nw0Kdm4gMC41MjEyNTggLTAuNjc1NzA1IDAuNTIxMjYNCnZ0IDAgMQ0KdiAyLjgwMDQgNS40NTg0OSA2Ljc2MDc3DQp2biAwLjI3ODk0OCAtMC42ODIyNjMgMC42NzU3OTkNCnZ0IDEgMQ0KdiA3LjIwNjI2IDUuOTg0NTMgMi45ODQ5Mw0Kdm4gMC42ODEwNTggLTAuNjc1NzA1IDAuMjgyMTA0DQp2dCAwIDANCnYgNS41MTU0MyA1Ljk4NDU0IDUuNTE1NDMNCnZuIDAuNTIxMjU4IC0wLjY3NTcwNSAwLjUyMTI2DQp2dCAxIDANCnYgNi43NjA3NyA1LjQ1ODQ3IDIuODAwNA0Kdm4gMC42ODEwNTggLTAuNjc1NzA1IDAuMjgyMTA0DQp2dCAwIDENCnYgNS4xNzQ0NyA1LjQ1ODQ3IDUuMTc0NDcNCnZuIDAuNTIxMjU4IC0wLjY3NTcwNSAwLjUyMTI2DQp2dCAxIDENCnYgNy44IDUuOTg0NTMgMA0Kdm4gMC43MzcxNzEgLTAuNjc1NzA2IC0xLjExNDQ4RS0wNg0KdnQgMCAwDQp2IDcuMjA2MjYgNS45ODQ1MyAyLjk4NDkzDQp2biAwLjY4MTA1OCAtMC42NzU3MDUgMC4yODIxMDQNCnZ0IDEgMA0KdiA3LjMxNzggNS40NTg0NyAwDQp2biAwLjczNzE3MSAtMC42NzU3MDYgLTEuMTE0NDhFLTA2DQp2dCAwIDENCnYgNi43NjA3NyA1LjQ1ODQ3IDIuODAwNA0Kdm4gMC42ODEwNTggLTAuNjc1NzA1IDAuMjgyMTA0DQp2dCAxIDENCnYgMCA1Ljk4NDUzIDcuOA0Kdm4gMS4yOTQwMUUtMDYgLTAuNjg3OTUyIDAuNzI1NzU2DQp2dCAwIDANCnYgLTIuOTg0OTMgNS45ODQ1MyA3LjIwNjI2DQp2biAtMC4yNzg5NDggLTAuNjgyMjYxIDAuNjc1ODAyDQp2dCAxIDANCnYgMCA1LjQ4NDk1IDcuMzA4OQ0Kdm4gMS4yOTQwMUUtMDYgLTAuNjg3OTUyIDAuNzI1NzU2DQp2dCAwIDENCnYgLTIuODAwNCA1LjQ1ODQ3IDYuNzYwNzcNCnZuIC0wLjI3ODk0OCAtMC42ODIyNjEgMC42NzU4MDINCnZ0IDEgMQ0KdiAtMi42NDI3MyA4LjQ1MzY0IDQuODY4NjYNCnZuIDAuMDExMDQ0MSAwLjY4NjMxMiAtMC43MjcyMjMNCnZ0IDAuMDkzNzUgMC42MTcxODgNCnYgLTIuMjU1NjkgOC45NTM2MyA1LjQxNzM1DQp2biAwLjAxMTA0NDEgMC42ODYzMTIgLTAuNzI3MjIzDQp2dCAxIDAuMzY0MzY0DQp2IC0wLjUwNDY4OCA4LjQ2Mjk2IDUuMzM1NQ0Kdm4gMC4xNTAyOTggMC42NTkyNDUgLTAuNzM2NzU0DQp2dCAwLjgyNDIyMSAwLjQ5MjY3Mw0KdiAtMC4wMzMyOTIgOC45NTI2IDUuODQ3NDcNCnZuIDAuMTUwMjk4IDAuNjU5MjQ1IC0wLjczNjc1NA0KdnQgMCAwDQp2IDUuNzgwMjQgNy40NTM2NCAyLjE5MTk0DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4zMzU5NzIgMA0KdiA0Ljk4NDY4IDcuNDUzNjMgMi4wNDc5Mg0Kdm4gLTAuMDYwNTMxOCAtMC45OTczNzkgLTAuMDM5NjQyMQ0KdnQgMC45NTA0ODcgMC4wNjY5MDcxDQp2IDYuMTUwNzIgNy40NTM2MyAwLjI2NzQyNA0Kdm4gLTAuMDkxMTY4OCAtMC45OTU4MTUgLTAuMDA2NDQxNTMNCnZ0IDAuMDA4MTg4MDUgMC41DQp2IDAuNSA2LjQ1MzYzIDUuMzM4MjkNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4xMjkyMDIgMC4zNDE2NTcNCnYgLTAuNSA2LjQ1MzYzIDUuMzM4MjkNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC44NzA3OTggMC4zNDE2NTcNCnYgLTAuMDMzMzQ0IDYuNDUzNjMgNS44NDc3Nw0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjUgMQ0KdiAtMy4xNzkxMiA1LjQ1MzYzIDUuMDg4NTQNCnZuIC0wLjM3NDA1MiAwIC0wLjkyNzQwOA0KdnQgMCAwDQp2IC0zLjE3OTEyIDguNDUzNjQgNS4wODg1NA0Kdm4gLTAuMzc0MDUyIDAgLTAuOTI3NDA4DQp2dCAxIDANCnYgLTIuNjQyNzMgNS40NTM2NCA0Ljg2ODY2DQp2biAtMC4zNzQwNTIgMCAtMC45Mjc0MDgNCnZ0IDAgMC43NQ0KdiAtMi42NDI3MyA4LjQ1MzY0IDQuODY4NjYNCnZuIC0wLjM3NDA1MiAwIC0wLjkyNzQwOA0KdnQgMSAwLjc1DQp2IC0yLjY0MjczIDUuNDUzNjQgNC44Njg2Ng0Kdm4gMC4yMTI5MDYgMC4wMDIxNDE5NCAtMC45NzcwNw0KdnQgMC4zNzUgMA0KdiAtMi42NDI3MyA4LjQ1MzY0IDQuODY4NjYNCnZuIDAuMjEyOTA2IDAuMDAyMTQxOTQgLTAuOTc3MDcNCnZ0IDAuODc1IDAuNQ0KdiAtMC41IDYuNDUzNjMgNS4zMzgyOQ0Kdm4gMC4xMjQyMzQgMC4wMjE1OTMyIC0wLjk5MjAxOA0KdnQgMC4zMzMzMzMgMC40MTAxOTUNCnYgLTAuNTA0Njg4IDguNDYyOTYgNS4zMzU1DQp2biAwLjIxMjkwNiAwLjAwMjE0MTk0IC0wLjk3NzA3DQp2dCAxIDAuMzgwMjYNCnYgNS43ODAyNCA3LjQ1MzY0IDIuMTkxOTQNCnZuIDAuMTc4MTM1IDAgLTAuOTg0MDA2DQp2dCAwIDENCnYgNS43ODAyNCA1LjQ1MzY0IDIuMTkxOTQNCnZuIDAuMTc4MTM1IDAgLTAuOTg0MDA2DQp2dCAwIDANCnYgNC45ODQ2OCA3LjQ1MzYzIDIuMDQ3OTINCnZuIDAuMTc4MTM1IDAgLTAuOTg0MDA2DQp2dCAxIDENCnYgNC45ODQ2OCA1LjQ1MzY0IDIuMDQ3OTINCnZuIDAuMTc4MTM1IDAgLTAuOTg0MDA2DQp2dCAxIDANCnYgNS43ODAyNCA1LjQ1MzY0IDIuMTkxOTQNCnZuIC0wLjk4MDc4NSAwIC0wLjE5NTA4OQ0KdnQgMCAwDQp2IDUuNzgwMjQgNy40NTM2NCAyLjE5MTk0DQp2biAtMC45ODA3ODUgMCAtMC4xOTUwODkNCnZ0IDAuNjY2NjY3IDANCnYgNi4xNTA0IDUuNDUzNjQgMC4yNjgyOQ0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDAgMC4yNQ0KdiA2LjE1MDcyIDcuNDUzNjMgMC4yNjc0MjQNCnZuIC0wLjk5OTk1NiA2Ljg2ODU3RS0wNSAwLjAwOTM4OTAzDQp2dCAwLjY2NjY2NyAwLjI1DQp2IC0yLjY0MjczIDguNDUzNjQgNC44Njg2Ng0Kdm4gMC4wMTEwNDQxIDAuNjg2MzEyIC0wLjcyNzIyMw0KdnQgMC43NSAxDQp2IC0zLjE3OTEyIDguNDUzNjQgNS4wODg1NA0Kdm4gMC4xODMyODIgMC43MzY0MTIgLTAuNjUxMjMzDQp2dCAwIDENCnYgLTIuMjU1NjkgOC45NTM2MyA1LjQxNzM1DQp2biAwLjAxMTA0NDEgMC42ODYzMTIgLTAuNzI3MjIzDQp2dCAxIDANCnYgLTMuNDQ0MDUgOC45NTM2MyA1LjUxMjU4DQp2biAwLjE4MzI4MiAwLjczNjQxMiAtMC42NTEyMzMNCnZ0IDAgMA0KdiAxLjM3MTA2IDUuNDUzNjQgNS4xNzI0OA0Kdm4gLTAuMjU0MDc0IDAuMDE5ODI4NCAtMC45NjY5ODINCnZ0IDAgMA0KdiAxLjM3MjI1IDYuNDUzNjMgNS4xNzEwMg0Kdm4gLTAuMzUwMzYxIC0wLjAwMDgzMjQ4MyAtMC45MzY2MTQNCnZ0IDAuMzMzMzMzIDANCnYgMy44MTI3MSA1LjQ1MzY0IDMuNzUzMjUNCnZuIC0wLjY3OTg1NCAtMC4wMDAyNDI1NyAtMC43MzMzNDgNCnZ0IDAgMC4yNjkyNzMNCnYgMy44MTI4NiA2LjQ1MzYzIDMuNzUyOTUNCnZuIC0wLjc1NzkyNyAtMC4wMDE0NzQxMiAtMC42NTIzMzgNCnZ0IDAuMzMzMzMzIDAuMjcwODQ0DQp2IC0wLjAzMzI5MiA4Ljk1MjYgNS44NDc0Nw0Kdm4gMC4wMzI3MDU0IDAuMDAwMTgwOTQ0IC0wLjk5OTQ2NQ0KdnQgMC45OTkxNTcgMC40Mzc1DQp2IC0wLjAzMzM0NCA2LjQ1MzYzIDUuODQ3NzcNCnZuIDAuMDMyNzA1NCAwLjAwMDE4MDk0NCAtMC45OTk0NjUNCnZ0IDAgMC4zNzUNCnYgLTAuNTA0Njg4IDguNDYyOTYgNS4zMzU1DQp2biAwLjczNjQ2MiAwLjAwMDI5MzU1MSAtMC42NzY0NzkNCnZ0IDAuODI5NzY2IDANCnYgLTAuNSA2LjQ1MzYzIDUuMzM4MjkNCnZuIDAuNzM2NDYyIDAuMDAwMjkzNTUxIC0wLjY3NjQ3OQ0KdnQgMCAwLjM3NQ0KdiAwLjUgNi40NTM2MyA1LjMzODI5DQp2biAtMC43MDA0OCAwIC0wLjcxMzY3Mg0KdnQgMCAxDQp2IDAuNSA4LjQ2NTI5IDUuMzM4MjkNCnZuIC0wLjcwMDQ4IDAgLTAuNzEzNjcyDQp2dCAwLjk3NTM2NiAxDQp2IDMuNzkyNDUgNi40NTM2MyA0LjUxOTY2DQp2biAtMC41MDIzNjIgMCAtMC44NjQ2NTcNCnZ0IDAgMQ0KdiAyLjA0ODE1IDYuNDUzNjMgNS41MzMwOQ0Kdm4gLTAuNTAyMzYyIDAgLTAuODY0NjU3DQp2dCAwIDANCnYgMy43OTI0NSA4Ljk1MzYzIDQuNTE5NjYNCnZuIC0wLjUwMjM2MiAwIC0wLjg2NDY1Nw0KdnQgMSAxDQp2IDIuMDQ4MTUgOC45NTM2MyA1LjUzMzA5DQp2biAtMC41MDIzNjIgMCAtMC44NjQ2NTcNCnZ0IDEgMA0KdiAxLjM3MjI1IDYuNDUzNjMgNS4xNzEwMg0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjg2MzQ4MyAwLjcyMTY3Mg0KdiAyLjA0ODE1IDYuNDUzNjMgNS41MzMwOQ0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjc0MDQ3MSAwLjk4MDQwOQ0KdiAzLjgxMjg2IDYuNDUzNjMgMy43NTI5NQ0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjExMTcwNSAwLjA1NjA0NQ0KdiAzLjc5MjQ1IDYuNDUzNjMgNC41MTk2Ng0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjA3MDcwNjYgMC40MjIyNjYNCnYgNi4xNTA3MiA3LjQ1MzYzIDAuMjY3NDI0DQp2biAtMC4wOTExNjg4IC0wLjk5NTgxNSAtMC4wMDY0NDE1Mw0KdnQgMC4wMDgxODgwNSAwLjUNCnYgNC45ODQ2OCA3LjQ1MzYzIDIuMDQ3OTINCnZuIC0wLjA2MDUzMTggLTAuOTk3Mzc5IC0wLjAzOTY0MjENCnZ0IDAuOTUwNDg3IDAuMDY2OTA3MQ0KdiA1LjQ4MjAyIDcuNTM0ODcgMC4yNzIwMDINCnZuIC0wLjEyMDczNiAtMC45OTIzMjggLTAuMDI2NjA4OA0KdnQgMC42Mjk5ODYgMC41DQp2IDMuODEyODYgOC40NTM2NCAzLjc1Mjk1DQp2biAtMC41Njg5MTIgMC43MDkzOTggLTAuNDE2MDQ2DQp2dCAwLjA1NDQ5MzIgMC45NQ0KdiAzLjc5MjQ1IDguOTUzNjMgNC41MTk2Ng0Kdm4gLTAuNTY4OTEyIDAuNzA5Mzk4IC0wLjQxNjA0Ng0KdnQgMC4wMTk4NTAyIDAuMjg1NDI2DQp2IDQuODIxMjEgOC40NTI3NCAyLjI1ODg0DQp2biAtMC42MDU2MzMgMC43MzUzNyAtMC4zMDQwMzkNCnZ0IDAuNDkyNTMgMC45OTEwOTQNCnYgNS4zMjg0MyA4Ljk1MDM1IDIuNTI3NDgNCnZuIC0wLjYwNTYzMyAwLjczNTM3IC0wLjMwNDAzOQ0KdnQgMC40Nzk4NjkgMA0KdiAxLjM3MTA2IDUuNDUzNjQgNS4xNzI0OA0Kdm4gLTAuMjU0MDc0IDAuMDE5ODI4NCAtMC45NjY5ODINCnZ0IDAgMC44NTI0NzcNCnYgLTAuNDk2MTMgNS40NTM2NCA1LjMzNDQNCnZuIDAuMDc4NjE4NiAwLjAzMjU5NTQgLTAuOTk2MzcyDQp2dCAwIDAuMjUzMTc5DQp2IDAuNSA2LjQ1MzYzIDUuMzM4MjkNCnZuIC0wLjEyMjYzOCAwLjAyOTQ0NCAtMC45OTIwMTUNCnZ0IDAuMzMzMzMzIDAuNTg1NjUNCnYgLTAuNSA2LjQ1MzYzIDUuMzM4MjkNCnZuIDAuMTI0MjM0IDAuMDIxNTkzMiAtMC45OTIwMTgNCnZ0IDAuMzMzMzMzIDAuNDEwMTk1DQp2IDEuMzcyMjUgOC40NTM2NCA1LjE3MTAyDQp2biAtMC4xOTUwOTEgMCAtMC45ODA3ODUNCnZ0IDEgMC44MjI5NjENCnYgMS4zNzIyNSA2LjQ1MzYzIDUuMTcxMDINCnZuIC0wLjE5NTA5MSAwIC0wLjk4MDc4NQ0KdnQgMC4zMzMzMzMgMC45MTE0ODENCnYgMC41IDguNDY1MjkgNS4zMzgyOQ0Kdm4gLTAuMTk1MDkxIDAgLTAuOTgwNzg1DQp2dCAxIDAuNjE0Mg0KdiAwLjUgNi40NTM2MyA1LjMzODI5DQp2biAtMC4xOTUwOTEgMCAtMC45ODA3ODUNCnZ0IDAuMzMzMzMzIDAuNTg1NjUNCnYgMS4zNzIyNSA2LjQ1MzYzIDUuMTcxMDINCnZuIC0wLjM1MDM2MSAtMC4wMDA4MzI0ODMgLTAuOTM2NjE0DQp2dCAwLjMzMzMzMyAwLjkxMTQ4MQ0KdiA0Ljk4NDY4IDUuNDUzNjQgMi4wNDc5Mg0Kdm4gLTAuODI0MTM1IC0yLjM1MDUzRS0wNSAtMC41NjYzOTMNCnZ0IDAgMC40OTExMjYNCnYgMy44MTI3MSA1LjQ1MzY0IDMuNzUzMjUNCnZuIC0wLjY3OTg1NCAtMC4wMDAyNDI1NyAtMC43MzMzNDgNCnZ0IDAgMC4yNjkyNzMNCnYgMy44MTI4NiA2LjQ1MzYzIDMuNzUyOTUNCnZuIC0wLjc1NzkyNyAtMC4wMDE0NzQxMiAtMC42NTIzMzgNCnZ0IDAuMzMzMzMzIDAuMjcwODQ0DQp2IDAuNSA4LjQ2NTI5IDUuMzM4MjkNCnZuIC0wLjExNzYzNyAwLjY2NjU2NCAtMC43MzYxMDcNCnZ0IDAuMzY3MjY2IDAuNDg4MzUzDQp2IC0wLjAzMzI5MiA4Ljk1MjYgNS44NDc0Nw0Kdm4gLTAuMTE3NjM3IDAuNjY2NTY0IC0wLjczNjEwNw0KdnQgMSAwLjIyNzEyOA0KdiAxLjM3MjI1IDguNDUzNjQgNS4xNzEwMg0Kdm4gLTAuMTE3NjM3IDAuNjY2NTY0IC0wLjczNjEwNw0KdnQgMC44MjUxMDcgMC45NTAwNDQNCnYgMi4wNDgxNSA4Ljk1MzYzIDUuNTMzMDkNCnZuIC0wLjExNzYzNyAwLjY2NjU2NCAtMC43MzYxMDcNCnZ0IDAuMTQ5NjMzIDENCnYgLTIuNjQyNzMgNS40NTM2NCA0Ljg2ODY2DQp2biAwLjIxMjkwNiAwLjAwMjE0MTk0IC0wLjk3NzA3DQp2dCAwIDAuMDA2MzU3NzUNCnYgMy44MTI4NiA4LjQ1MzY0IDMuNzUyOTUNCnZuIC0wLjgzMTQ2OSAwIC0wLjU1NTU3MQ0KdnQgMSAwLjI5MTY4OA0KdiA0LjgyMTIxIDguNDUyNzQgMi4yNTg4NA0Kdm4gLTAuOTA2Njg3IC0wLjA3NjUzNTIgLTAuNDE0ODAzDQp2dCAxIDAuNjAxNTczDQp2IDQuOTg0NjggNy40NTM2MyAyLjA0NzkyDQp2biAtMC44ODIzNzUgLTAuMDUwOTM0NiAtMC40Njc3ODMNCnZ0IDAuNjY2NjY3IDAuNTk1MDQ5DQp2IDIuMDQ4MTUgOC45NTM2MyA1LjUzMzA5DQp2biAtMC4wMjE0MTg5IDAuOTk4Mjc2IC0wLjA1NDYzOTgNCnZ0IDAuMjIyNTA2IDANCnYgLTAuMDMzMjkyIDguOTUyNiA1Ljg0NzQ3DQp2biAwLjAwMDM4OTMzNCAwLjk5ODMyNSAtMC4wNTc4NTgxDQp2dCAwLjkxNDkyOSAwDQp2IDIuOTg0OTMgOS4wNjQ0NCA3LjIwNjI2DQp2biAtMC4wMjE0MTg5IDAuOTk4Mjc2IC0wLjA1NDYzOTgNCnZ0IDAgMC41OTEzMjUNCnYgMCA5LjA2NDQ0IDcuOA0Kdm4gMC4wMDAzODkzMzQgMC45OTgzMjUgLTAuMDU3ODU4MQ0KdnQgMSAwLjYzNzc1DQp2IC0wLjAzMzI5MiA4Ljk1MjYgNS44NDc0Nw0Kdm4gMC4wMDAzODkzMzQgMC45OTgzMjUgLTAuMDU3ODU4MQ0KdnQgMC4xMzI2MjkgMA0KdiAtMi4yNTU2OSA4Ljk1MzYzIDUuNDE3MzUNCnZuIDAuMDAwMzg5MzM0IDAuOTk4MzI1IC0wLjA1Nzg1ODENCnZ0IDAuODc2NDIzIDANCnYgMCA5LjA2NDQ0IDcuOA0Kdm4gMC4wMDAzODkzMzQgMC45OTgzMjUgLTAuMDU3ODU4MQ0KdnQgMCAwLjYyODg4Mg0KdiAtMi45ODQ5MyA5LjA2NDQzIDcuMjA2MjYNCnZuIDAuMDI0MDQ0IDAuOTk3NDYxIC0wLjA2NzAyOTkNCnZ0IDEgMC42MjM2ODcNCnYgMy43OTI0NSA4Ljk1MzYzIDQuNTE5NjYNCnZuIC0wLjA0MDE3IDAuOTk4MjY4IC0wLjA0Mjk2ODINCnZ0IDAuMzI1Nzg4IDANCnYgMi4wNDgxNSA4Ljk1MzYzIDUuNTMzMDkNCnZuIC0wLjAyMTQxODkgMC45OTgyNzYgLTAuMDU0NjM5OA0KdnQgMC45ODk5NDMgMA0KdiA1LjUxNTQzIDkuMDY0NDQgNS41MTU0Mw0Kdm4gLTAuMDQwMTcgMC45OTgyNjggLTAuMDQyOTY4Mg0KdnQgMCAwLjU2OTU5NA0KdiAyLjk4NDkzIDkuMDY0NDQgNy4yMDYyNg0Kdm4gLTAuMDIxNDE4OSAwLjk5ODI3NiAtMC4wNTQ2Mzk4DQp2dCAxIDAuNjMyMjg1DQp2IDUuMzI4NDMgOC45NTAzNSAyLjUyNzQ4DQp2biAtMC4wNTI1MjE2IDAuOTk4Mjk5IC0wLjAyNTMyMTINCnZ0IDAuNTU4MzgzIDANCnYgMy43OTI0NSA4Ljk1MzYzIDQuNTE5NjYNCnZuIC0wLjA0MDE3IDAuOTk4MjY4IC0wLjA0Mjk2ODINCnZ0IDAuODA1MjU4IDAuMDMwOTQ1MQ0KdiA3LjIwNjI2IDkuMDY0NDQgMi45ODQ5Mw0Kdm4gLTAuMDUyNTIxNiAwLjk5ODI5OSAtMC4wMjUzMjEyDQp2dCAxIDAuNjAzNDAzDQp2IDUuNTE1NDMgOS4wNjQ0NCA1LjUxNTQzDQp2biAtMC4wNDAxNyAwLjk5ODI2OCAtMC4wNDI5NjgyDQp2dCAxIDANCnYgLTIuOTg0OTMgOS4wNjQ0MyA3LjIwNjI2DQp2biAwLjAyNDA0NCAwLjk5NzQ2MSAtMC4wNjcwMjk5DQp2dCAwLjE0MzU0MiAxDQp2IC0yLjI1NTY5IDguOTUzNjMgNS40MTczNQ0Kdm4gMC4wMDAzODkzMzQgMC45OTgzMjUgLTAuMDU3ODU4MQ0KdnQgMCAwDQp2IC0zLjQ0NDA1IDguOTUzNjMgNS41MTI1OA0Kdm4gMC4wMjQwNDQgMC45OTc0NjEgLTAuMDY3MDI5OQ0KdnQgMC41OTAwMzYgMC4xOTc4MTQNCnYgMS4zNzEwNiA1LjQ1MzY0IDUuMTcyNDgNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMy44MTI3MSA1LjQ1MzY0IDMuNzUzMjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjczNTM4OCAwDQp2IDIuODAwNCA1LjQ1ODQ5IDYuNzYwNzcNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjA2MDkxNTQgMC42NzgwNDYNCnYgNS4xNzQ0NyA1LjQ1ODQ3IDUuMTc0NDcNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAxIDAuNjAyMTk3DQp2IC0yLjY0MjczIDUuNDUzNjQgNC44Njg2Ng0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMTA2NTc4IDANCnYgLTAuNDk2MTMgNS40NTM2NCA1LjMzNDQNCnZuIDAuMDAzNDk5MzQgLTAuOTk5OTUzIDAuMDA5MDQzNzUNCnZ0IDAuNjYxOTczIDANCnYgLTIuODAwNCA1LjQ1ODQ3IDYuNzYwNzcNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDAuNjgxODA0DQp2IDAgNS40ODQ5NSA3LjMwODkNCnZuIDAuMDAzNDk5MzQgLTAuOTk5OTUzIDAuMDA5MDQzNzUNCnZ0IDEgMC42MzIyNDINCnYgNS43ODAyNCA1LjQ1MzY0IDIuMTkxOTQNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjIwMTg0NyAwDQp2IDYuMTUwNCA1LjQ1MzY0IDAuMjY4MjkNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjgzNDI1NCAwDQp2IDYuNzYwNzcgNS40NTg0NyAyLjgwMDQNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDAuNDMyODEzDQp2IDcuMzE3OCA1LjQ1ODQ3IDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAxIDAuNDM4MTk0DQp2IDEuMzcxMDYgNS40NTM2NCA1LjE3MjQ4DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC40NTg0MjQgMA0KdiAyLjgwMDQgNS40NTg0OSA2Ljc2MDc3DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMSAwLjY0MTA4DQp2IDAgNS40ODQ5NSA3LjMwODkNCnZuIC0wLjAwNzUyNjUzIC0wLjk5OTkyMyAwLjAwOTgyNzQ5DQp2dCAwIDAuNjQ2NzI5DQp2IC0zLjE3OTEyIDUuNDUzNjMgNS4wODg1NA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAtMi42NDI3MyA1LjQ1MzY0IDQuODY4NjYNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjIwMTgyOSAwDQp2IC0yLjgwMDQgNS40NTg0NyA2Ljc2MDc3DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC41MDQyMDMgMQ0KdiA1LjE3NDQ3IDUuNDU4NDcgNS4xNzQ0Nw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMQ0KdiAzLjgxMjcxIDUuNDUzNjQgMy43NTMyNQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMTc0NzE5IDANCnYgNi43NjA3NyA1LjQ1ODQ3IDIuODAwNA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNzU0ODMyIDAuODgwNDA5DQp2IDQuOTg0NjggNS40NTM2NCAyLjA0NzkyDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMSAwDQp2IDUuNzgwMjQgNS40NTM2NCAyLjE5MTk0DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4yOTIwMzEgMA0KdiA2Ljc2MDc3IDUuNDU4NDcgMi44MDA0DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMSAwDQp2IDQuOTg0NjggNS40NTM2NCAyLjA0NzkyDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4wMjc1NzA0IDAuNDQ5NDIzDQp2IDUuOTk2NyA4Ljk1MzYzIDAuMjkzMzcNCnZuIC0wLjA2MDI1NTMgMC45OTgxNTMgLTAuMDA3NzY0MzENCnZ0IDAuMTk3ODM4IDANCnYgNS4zMjg0MyA4Ljk1MDM1IDIuNTI3NDgNCnZuIC0wLjA1MjUyMTYgMC45OTgyOTkgLTAuMDI1MzIxMg0KdnQgMC41NTgzODMgMA0KdiA0LjgyMTIxIDguNDUyNzQgMi4yNTg4NA0Kdm4gLTAuNjA1NjMzIDAuNzM1MzcgLTAuMzA0MDM5DQp2dCAwLjQ5MjUzIDAuOTkxMDk0DQp2IDUuMzI4NDMgOC45NTAzNSAyLjUyNzQ4DQp2biAtMC42MDU2MzMgMC43MzUzNyAtMC4zMDQwMzkNCnZ0IDAuNDc5ODY5IDANCnYgNS4zMTE1OSA4LjM3MjQgMC4yNzE4MTENCnZuIC0wLjYzODk4MiAwLjc2NjUwNyAtMC4wNjQ1NzM1DQp2dCAwLjc1IDENCnYgNS45OTY3IDguOTUzNjMgMC4yOTMzNw0Kdm4gLTAuNjM4OTgyIDAuNzY2NTA3IC0wLjA2NDU3MzUNCnZ0IDAuNzUgMA0KdiA1LjMxMTU5IDguMzcyNCAwLjI3MTgxMQ0Kdm4gLTAuOTkxMDAyIC0wLjEyNTI0NyAtMC4wNDcyMTA2DQp2dCAxIDAuNzUNCnYgNS40ODIwMiA3LjUzNDg3IDAuMjcyMDAyDQp2biAtMC45OTEwMDIgLTAuMTI1MjQ3IC0wLjA0NzIxMDYNCnZ0IDAuNjY2NjY3IDAuNzUNCnYgNC44MjEyMSA4LjQ1Mjc0IDIuMjU4ODQNCnZuIC0wLjkwNjY4NyAtMC4wNzY1MzUyIC0wLjQxNDgwMw0KdnQgMSAwLjYwMTU3Mw0KdiA0Ljk4NDY4IDcuNDUzNjMgMi4wNDc5Mg0Kdm4gLTAuODgyMzc1IC0wLjA1MDkzNDYgLTAuNDY3NzgzDQp2dCAwLjY2NjY2NyAwLjU5NTA0OQ0KdiAzLjgxMjg2IDguNDUzNjQgMy43NTI5NQ0Kdm4gLTAuOTk5NjQ2IDAgLTAuMDI2NjEwNg0KdnQgMC4yIDANCnYgMy44MTI4NiA2LjQ1MzYzIDMuNzUyOTUNCnZuIC0wLjk5OTY0NiAwIC0wLjAyNjYxMDYNCnZ0IDEgMA0KdiAzLjc5MjQ1IDguOTUzNjMgNC41MTk2Ng0Kdm4gLTAuOTk5NjQ2IDAgLTAuMDI2NjEwNg0KdnQgMCAwLjMwNjc5NA0KdiAzLjc5MjQ1IDYuNDUzNjMgNC41MTk2Ng0Kdm4gLTAuOTk5NjQ2IDAgLTAuMDI2NjEwNg0KdnQgMSAwLjMwNjc5NA0KdiAyLjA0ODE1IDguOTUzNjMgNS41MzMwOQ0Kdm4gMC40NzIyMDEgMCAtMC44ODE0OTENCnZ0IDAgMA0KdiAyLjA0ODE1IDYuNDUzNjMgNS41MzMwOQ0Kdm4gMC40NzIyMDEgMCAtMC44ODE0OTENCnZ0IDEgMA0KdiAxLjM3MjI1IDguNDUzNjQgNS4xNzEwMg0Kdm4gMC40NzIyMDEgMCAtMC44ODE0OTENCnZ0IDAuMiAwLjMwNjcwOA0KdiAxLjM3MjI1IDYuNDUzNjMgNS4xNzEwMg0Kdm4gMC40NzIyMDEgMCAtMC44ODE0OTENCnZ0IDEgMC4zMDY3MDgNCnYgLTYuMDA1OTcgOC45NTM2MyAtMC4yMTY2NjcNCnZuIDAuMDYxMTE5OSAwLjk5ODEwNSAwLjAwNzEyMDAzDQp2dCAwLjE5NzgzOCAwDQp2IC03LjggOS4wNjQ0NCAwDQp2biAwLjA2MTExOTkgMC45OTgxMDUgMC4wMDcxMjAwMw0KdnQgMC43MzM5MjggMQ0KdiAtNS44NjEzNSA4Ljk1MzYzIDEuMzkzNjYNCnZuIDAuMDY4MDM1NiAwLjk5NzY2NiAtMC4wMDU3MjU3Mg0KdnQgMCAwDQp2IDcuMjA2MjYgOS4wNjQ0NCAyLjk4NDkzDQp2biAtMC4wNTI1MjE2IDAuOTk4Mjk5IC0wLjAyNTMyMTINCnZ0IDEgMC42MDM0MDMNCnYgNy44IDkuMDY0NDMgMA0Kdm4gLTAuMDY3ODEwNiAwLjk5NzY4MyAwLjAwNTQxNjIzDQp2dCAwLjczMzkyOCAxDQp2IC0yLjg3OTMgNS40NTM2NCA1LjE2MzI3DQp2biAtMC41Mzc1MDIgLTAuODQzMjMgLTAuMDA3MzU5MzgNCnZ0IDAgMA0KdiAtMi42NTQ5MyA1LjI4NzI3IDUuMDg1MzkNCnZuIC0wLjc1OTgxOCAtMC42NTAxMzYgLTQuNTQ0NjFFLTA1DQp2dCAwLjAyNTE2MDkgMC4yNQ0KdiAtMyA1LjQ5ODMxIDYuMTA3MTQNCnZuIC0wLjUzNzUwMiAtMC44NDMyMyAtMC4wMDczNTkzOA0KdnQgMC45MTQxMSAwDQp2IC0yLjYzOTM0IDUuMjkwNzggNi4yOTgxNg0Kdm4gLTAuNzU5ODE4IC0wLjY1MDEzNiAtNC41NDQ2MUUtMDUNCnZ0IDAuOTg4MjEzIDAuNzUNCnYgMi41IDQuOTQ3MDcgLTQuOTE4NDkNCnZuIDAuOTE2MjExIC0wLjQwMDYyOSAtMC4wMDcyNzM3DQp2dCAwLjA0NzAzIDENCnYgMi40OTg1IDQuOTUyNjEgLTYuMzU2MzgNCnZuIDAuOTE2MjExIC0wLjQwMDYyOSAtMC4wMDcyNzM3DQp2dCAwLjk5NzE4NiAxDQp2IDIuNjU0OTMgNS4yODcyNyAtNS4wODUzOQ0Kdm4gMC43NTk4MiAtMC42NTAxMzQgNC4xNDgxNkUtMDUNCnZ0IDAuMDI1MTYwOSAwLjI1DQp2IDIuNjM5MzQgNS4yOTA3OSAtNi4yOTgxNg0Kdm4gMC43NTk4MiAtMC42NTAxMzQgNC4xNDgxNkUtMDUNCnZ0IDAuOTg4MjEzIDAuNzUNCnYgMi42NTQ5MyA1LjI4NzI3IC01LjA4NTM5DQp2biAwLjY2OTgxMSAtMC4yMDg2MyAwLjcxMjYyDQp2dCAwLjQ4MjU5MyAwLjQyNzg3DQp2IDIuNSA1LjQ4NTM3IC00Ljg4MTc3DQp2biAwLjY2OTgxMSAtMC4yMDg2MyAwLjcxMjYyDQp2dCAwLjgzMzMzMyAwLjE2NjY2Nw0KdiAyLjUgNC45NDcwNyAtNC45MTg0OQ0Kdm4gMC43NzQ0NTcgLTAuMDQzMDU3MSAwLjYzMTE2DQp2dCAwIDANCnYgMi41IDUuNDkyMyAtNi4zNTg1MQ0Kdm4gMC40MjAzMzIgMC4wMTg5ODM0IC0wLjkwNzE3Mg0KdnQgMC4yNTY0NTggMC44NzUNCnYgMyA1LjQ5ODMyIC02LjEwNzE0DQp2biAwLjQ0ODM1NSAwLjA0MjY1MTMgLTAuODkyODM3DQp2dCAxIDENCnYgMi42MzkzNCA1LjI5MDc5IC02LjI5ODE2DQp2biAwLjQyMDMzMiAwLjAxODk4MzQgLTAuOTA3MTcyDQp2dCAwLjIxMDQ2MSAwLjY0NTUyNw0KdiAyLjg3OTMgNS40NTM2NCAtNS4xNjMyNw0Kdm4gMC41Mzc1MDMgLTAuODQzMjMgMC4wMDczNTMwNw0KdnQgMCAwDQp2IDMgNS40OTgzMiAtNi4xMDcxNA0Kdm4gMC41Mzc1MDMgLTAuODQzMjMgMC4wMDczNTMwNw0KdnQgMC45MTQxMSAwDQp2IDIuODc5MyA1LjQ1MzY0IC01LjE2MzI3DQp2biAwLjUzNTAyMyAtMC4zNjQ4MTQgMC43NjIwMTENCnZ0IDEgMQ0KdiAyLjQ5ODUgNC45NTI2MSAtNi4zNTYzOA0Kdm4gMC4zODI2ODQgMCAtMC45MjM4NzkNCnZ0IDAuMDA2NDU3NSAwDQp2IC0yLjUgNC45NDcwNyA0LjkxODQ5DQp2biAtMC45MTYyMDkgLTAuNDAwNjM0IDAuMDA3MjcyNDMNCnZ0IDAuMDQ3MDMgMQ0KdiAtMi40OTg1IDQuOTUyNjEgNi4zNTYzOA0Kdm4gLTAuOTE2MjA5IC0wLjQwMDYzNCAwLjAwNzI3MjQzDQp2dCAwLjk5NzE4NiAxDQp2IC0yLjY1NDkzIDUuMjg3MjcgNS4wODUzOQ0Kdm4gLTAuNjY5ODExIC0wLjIwODYzIC0wLjcxMjYyDQp2dCAwLjQ4MjU5MyAwLjQyNzg3DQp2IC0yLjUgNS40ODUzNyA0Ljg4MTc3DQp2biAtMC42Njk4MTEgLTAuMjA4NjMgLTAuNzEyNjINCnZ0IDAuODMzMzMzIDAuMTY2NjY3DQp2IC0yLjUgNC45NDcwNyA0LjkxODQ5DQp2biAtMC43NzQ0NTcgLTAuMDQzMDU2OSAtMC42MzExNg0KdnQgMCAwDQp2IC0yLjUgNS40OTIzIDYuMzU4NTENCnZuIC0wLjQyMDMzNiAwLjAxODk4MzIgMC45MDcxNw0KdnQgMC4yNTY0NTggMC44NzUNCnYgLTMgNS40OTgzMSA2LjEwNzE0DQp2biAtMC40NDgzNTUgMC4wNDI2NTAxIDAuODkyODM3DQp2dCAxIDENCnYgLTIuNjM5MzQgNS4yOTA3OCA2LjI5ODE2DQp2biAtMC40MjAzMzYgMC4wMTg5ODMyIDAuOTA3MTcNCnZ0IDAuMjEwNDYxIDAuNjQ1NTI3DQp2IC0yLjg3OTMgNS40NTM2NCA1LjE2MzI3DQp2biAtMC41MzUwMjIgLTAuMzY0ODE0IC0wLjc2MjAxMg0KdnQgMSAxDQp2IC0yLjQ5ODUgNC45NTI2MSA2LjM1NjM4DQp2biAtMC4zODI2ODQgMCAwLjkyMzg3OQ0KdnQgMC4wMDY0NTc1IDANCnYgLTEuMzcxMDYgNS40NTM2NCAtNS4xNzI0OA0Kdm4gLTAuMDAxMzQ1OTEgLTAuOTk5ODc5IC0wLjAxNTUyMTMNCnZ0IDAgMA0KdiAwIDUuNDg0OTUgLTcuMzA4OQ0Kdm4gLTAuMDAxMzQ1OTEgLTAuOTk5ODc5IC0wLjAxNTUyMTMNCnZ0IDEgMA0KdiAwLjQ5NjEzIDUuNDUzNjQgLTUuMzM0MzkNCnZuIC0wLjAwMTM0NTkxIC0wLjk5OTg3OSAtMC4wMTU1MjEzDQp2dCAwLjExNjQ5IDAuNDc0MDY2DQp2IDEuMzcxMDYgNS40NTM2NCA1LjE3MjQ4DQp2biAwLjAwMzQ5OTM0IC0wLjk5OTk1MyAwLjAwOTA0Mzc1DQp2dCAwIDANCnYgMCA1LjQ4NDk1IDcuMzA4OQ0Kdm4gMC4wMDM0OTkzNCAtMC45OTk5NTMgMC4wMDkwNDM3NQ0KdnQgMSAwDQp2IC0wLjQ5NjEzIDUuNDUzNjQgNS4zMzQ0DQp2biAwLjAwMzQ5OTM0IC0wLjk5OTk1MyAwLjAwOTA0Mzc1DQp2dCAwLjExNjQ5IDAuNDc0MDY2DQp2IC00LjQ5Njg3IDUuNDg1MzcgMA0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDAuMDA1MTc4NTMgMQ0KdiAtNC40OTc0NyAzLjk1NTcgMA0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDAuMDA1MTc4NTIgMA0KdiAtMy45ODY0NCA1LjQ4NTM3IDEuOTY0NTYNCnZuIC0wLjkxNDQyMiAwLjAwMzU0NjU0IDAuNDA0NzQ3DQp2dCAwLjI4MjU0NSAxDQp2IC0zLjk5NzkzIDMuOTU1NyAxLjkzMDE4DQp2biAtMC45MTQ0MjIgMC4wMDM1NDY1NCAwLjQwNDc0Nw0KdnQgMC4yNjg5ODQgMA0KdiAtMi45MzU4OCAzLjk1NTUgMy41ODU5Mg0Kdm4gLTAuODM0ODU2IDAuMDEyMDIzMyAwLjU1MDMzNw0KdnQgMC42ODg5NjUgMC4yMDQ4MjENCnYgLTIuNSAzLjk1NTcgNC4yNDI2NA0Kdm4gLTAuODM0ODU2IDAuMDEyMDIzMyAwLjU1MDMzNw0KdnQgMC44OTczMDEgMC4zMzMzMzMNCnYgLTIuOTE4MjMgNS40ODUzNyAzLjU2MjU1DQp2biAtMC44MzQ4NTYgMC4wMTIwMjMzIDAuNTUwMzM3DQp2dCAwLjg5NzMwMSAxDQp2IC0yLjAxMzE0IDMuNDk4MTEgNS42ODY3Mw0Kdm4gLTAuMDU3MDk5NCAtMC45MjI3NzggMC4zODEwNzkNCnZ0IDAuODkwNjc1IDANCnYgLTEuOTkwODIgMy40OTgxMSAyLjg3ODYxDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IDAgMy40OTgxMSA2LjAwNzExDQp2biAwIC0wLjkyNDI4NSAwLjM4MTcwMg0KdnQgMSAwLjUNCnYgMCAzLjQ5ODExIDMuNQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMjAwMjQgMC41DQp2IC0yLjUgMy45NDk1NSA1LjI2ODUyDQp2biAtMC43NTA2NTEgLTAuNjIwNzA2IDAuMjI2Mzc4DQp2dCAwIDENCnYgLTIuNSAzLjk1NTcgNC4yNDI2NA0Kdm4gLTAuNjc2NzQ1IC0wLjczNjIgLTAuMDA1MTE5ODcNCnZ0IDEgMQ0KdiAtMi4wMTMxNCAzLjQ5ODExIDUuNjg2NzMNCnZuIC0wLjc1MDY1MSAtMC42MjA3MDYgMC4yMjYzNzgNCnZ0IDAgMA0KdiAtMS45OTA4MiAzLjQ5ODExIDIuODc4NjENCnZuIC0wLjY3Njc0NSAtMC43MzYyIC0wLjAwNTExOTg3DQp2dCAwLjg1MDAyMiAwDQp2IC0yLjAyNDY1IDUuNTQ1NDcgNi44OTcwOQ0Kdm4gLTAuNzc3MzgzIDAuMDQ5NDEyMyAwLjYyNzA4NA0KdnQgMCAxDQp2IC0yLjUgNS40OTIzIDYuMzU4NTENCnZuIC0wLjc3NzM4MyAwLjA0OTQxMjMgMC42MjcwODQNCnZ0IDEgMQ0KdiAtMi4wMTE5NiA0LjgxMDIzIDcuMDE3MjcNCnZuIC0wLjgwMzkzNyAtMC4yMTM0MzQgMC41NTUwOTUNCnZ0IDAgMA0KdiAtMi40OTg1IDQuOTUyNjEgNi4zNTYzOA0Kdm4gLTAuODAzOTM3IC0wLjIxMzQzNCAwLjU1NTA5NQ0KdnQgMSAwDQp2IC0yLjAxMTk2IDQuODEwMjMgNy4wMTcyNw0Kdm4gLTAuODAzOTM3IC0wLjIxMzQzNCAwLjU1NTA5NQ0KdnQgMCAxDQp2IC0yLjQ5ODUgNC45NTI2MSA2LjM1NjM4DQp2biAtMC44MDM5MzcgLTAuMjEzNDM0IDAuNTU1MDk1DQp2dCAwLjk5NjU4NiAwLjk4OTk4OA0KdiAtMi4wMTMxNCAzLjQ5ODExIDUuNjg2NzMNCnZuIC0wLjc1MDY1MSAtMC42MjA3MDYgMC4yMjYzNzgNCnZ0IDEgMQ0KdiAtMi4wMTMxNCAzLjQ5ODExIDUuNjg2NzMNCnZuIC0wLjA1NzA5OTQgLTAuOTIyNzc4IDAuMzgxMDc5DQp2dCAxIDAuOTk2Nzc1DQp2IDAgMy40OTgxMSA2LjAwNzExDQp2biAwIC0wLjkyNDI4NSAwLjM4MTcwMg0KdnQgMSAwDQp2IC0yLjAxMTk2IDQuODEwMjMgNy4wMTcyNw0Kdm4gLTAuMTUwMjI1IC0wLjM0NDU3MiAwLjkyNjY2Mg0KdnQgMCAwLjgxOTU2DQp2IDAgNC44MTAyMyA3LjMNCnZuIDAgLTAuMzQ4NTI3IDAuOTM3Mjk5DQp2dCAwIDANCnYgLTIuMDExOTYgNC44MTAyMyA3LjAxNzI3DQp2biAtMC4xNTAyMjUgLTAuMzQ0NTcyIDAuOTI2NjYyDQp2dCAwLjk5MzU0NCAwDQp2IC0yLjAyNDY1IDUuNTQ1NDcgNi44OTcwOQ0Kdm4gLTAuMTY3OTcgMC4wNzYwNTI1IDAuOTgyODU0DQp2dCAxIDENCnYgMCA1LjQ4NDk1IDcuMzA4OQ0Kdm4gMCAwLjA3NzE0ODYgMC45OTcwMg0KdnQgMCAxDQp2IC0yLjQ5ODUgNC45NTI2MSA2LjM1NjM4DQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMCAwLjY2NjY2Nw0KdiAtMi41IDUuNDg1MzcgNC44ODE3Nw0Kdm4gLTAuOTkzOTM3IC0wLjA0MjE3NDYgMC4xMDE1NDMNCnZ0IDAuNzY4NTk1IDAuODMzMzMzDQp2IC0yLjUgMy45NDk1NSA1LjI2ODUyDQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMC41MTI4NTUgMA0KdiAtMi41IDMuOTU1NyA0LjI0MjY0DQp2biAtMC45ODYzNCAtMC4wNjM1MDQ3IDAuMTUxOTg5DQp2dCAxIDANCnYgLTIuOTE4MjMgNS40ODUzNyAzLjU2MjU1DQp2biAtMC45NDU3MzMgLTAuMTI1Mjc0IDAuMjk5ODI2DQp2dCAxIDENCnYgLTIuNSAzLjk1NTcgNC4yNDI2NA0Kdm4gLTAuMzIyNjU3IC0wLjc5Njc2OCAwLjUxMDkzNA0KdnQgMCAwLjM3NQ0KdiAtMS43NSAyLjk0NTI1IDMuMDMxMDkNCnZuIC0wLjM5NzAxMyAtMC43ODI1OTUgMC40Nzk1MDUNCnZ0IDEgMC41DQp2IDAgMy45NDk1NSA0LjUNCnZuIDAgLTAuNzU3OTQzIDAuNjUyMzIxDQp2dCAwIDENCnYgMCAyLjk0NTI1IDMuNQ0Kdm4gMCAtMC43NTc5NDMgMC42NTIzMjENCnZ0IDEgMQ0KdiAwIDUuMDY1OTcgMy4wMDA5Mw0Kdm4gLTAuMDA5MzI3MTMgMCAtMC45OTk5NTYNCnZ0IDEgMC4xODc1DQp2IDAgNC40NzQ2NyAzLjAwMDkzDQp2biAtMC4wMDkzMjcxMyAwIC0wLjk5OTk1Ng0KdnQgMCAwLjE4NzQ5Mg0KdiAtMS42OTEyMSA1LjA2NTk4IDIuNDc5DQp2biAwLjU1NTU3MSAwIC0wLjgzMTQ2OQ0KdnQgMSAwLjc1DQp2IC0xLjY5OTEzIDQuNDczOTYgMi40NzE3OA0Kdm4gMC41NTU1NzEgMCAtMC44MzE0NjkNCnZ0IDAgMC43NTI0MDkNCnYgLTEuNjkxMjEgNS4wNjU5OCAyLjQ3OQ0Kdm4gMC41NTU1NzEgMCAtMC44MzE0NjkNCnZ0IDAgMA0KdiAtMS42OTkxMyA0LjQ3Mzk2IDIuNDcxNzgNCnZuIDAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAwLjk5MzEyOCAwDQp2IC0yLjY2Njg5IDUuMDY1OTcgMS4yODMwMg0Kdm4gMC44OTE3MTggMC4wMDA1MjE5NiAtMC40NTI1OQ0KdnQgMC4wMDcxMDc4NSAwLjY0Njg5Mw0KdiAtMi42NjMyOCA0LjQ3Mzk2IDEuMjg2OTgNCnZuIDAuODkxNzE4IDAuMDAwNTIxOTYgLTAuNDUyNTkNCnZ0IDEgMC42MjUwNTcNCnYgMCA1LjA2NTk3IDMuMDAwOTMNCnZuIDAgMC43NjU2MiAtMC42NDMyOTMNCnZ0IDAgMA0KdiAtMS42OTEyMSA1LjA2NTk4IDIuNDc5DQp2biAwLjM1OTMwOCAwLjc2NTYxNCAtMC41MzM2MDQNCnZ0IDEgMA0KdiAwIDUuNDg1MzcgMy41MDAwOA0Kdm4gMCAwLjc2NTYyIC0wLjY0MzI5Mw0KdnQgMCAxDQp2IC0xLjk3MjUgNS40ODUzNyAyLjg5MTMzDQp2biAwLjM1OTMwOCAwLjc2NTYxNCAtMC41MzM2MDQNCnZ0IDEgMQ0KdiAtMy41MDAwOCA1LjQ4NTM3IDANCnZuIDAuNjQzMjk3IDAuNzY1NjE3IDANCnZ0IDEgMQ0KdiAtMy4xMTA0NiA1LjQ4NTM3IDEuNDk2NDINCnZuIDAuNTc4MjY5IDAuNzYxMTExIC0wLjI5Mzc5NQ0KdnQgMCAxDQp2IC0zLjAwMDkzIDUuMDY1OTcgMA0Kdm4gMC42NDMyOTcgMC43NjU2MTcgMA0KdnQgMSAwDQp2IC0yLjY2Njg5IDUuMDY1OTcgMS4yODMwMg0Kdm4gMC41NzgyNjkgMC43NjExMTEgLTAuMjkzNzk1DQp2dCAwIDANCnYgLTEuNjkxMjEgNS4wNjU5OCAyLjQ3OQ0Kdm4gMC4zNTkzMDggMC43NjU2MTQgLTAuNTMzNjA0DQp2dCAwIDANCnYgLTIuNjY2ODkgNS4wNjU5NyAxLjI4MzAyDQp2biAwLjU3ODI2OSAwLjc2MTExMSAtMC4yOTM3OTUNCnZ0IDEgMA0KdiAtMS45NzI1IDUuNDg1MzcgMi44OTEzMw0Kdm4gMC4zNTkzMDggMC43NjU2MTQgLTAuNTMzNjA0DQp2dCAwIDENCnYgLTMuMTEwNDYgNS40ODUzNyAxLjQ5NjQyDQp2biAwLjU3ODI2OSAwLjc2MTExMSAtMC4yOTM3OTUNCnZ0IDEgMQ0KdiAtMy45ODY0NCA1LjQ4NTM3IDEuOTY0NTYNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC43NSAwDQp2IC0zLjExMDQ2IDUuNDg1MzcgMS40OTY0Mg0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjg3NzcwOCAwLjc0NjMyNg0KdiAtNC40OTY4NyA1LjQ4NTM3IDANCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMCAwDQp2IC0zLjUwMDA4IDUuNDg1MzcgMA0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjEwOTExIDAuNzMyNzE5DQp2IC0xLjk3MjUgNS40ODUzNyAyLjg5MTMzDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuMTEzNzE4IDANCnYgLTMuMTEwNDYgNS40ODUzNyAxLjQ5NjQyDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuOTMwMTAzIDANCnYgLTIuOTE4MjMgNS40ODUzNyAzLjU2MjU1DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAgMC42ODg0MDUNCnYgLTMuOTg2NDQgNS40ODUzNyAxLjk2NDU2DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDEgMC42MjUxMzkNCnYgLTMuMDAwOTMgNS4wNjU5NyAwDQp2biAwLjk5OTk1NiAwIDAuMDA5MzI1OTgNCnZ0IDEgMA0KdiAtMi42NjY4OSA1LjA2NTk3IDEuMjgzMDINCnZuIDAuODkxNzE4IDAuMDAwNTIxOTYgLTAuNDUyNTkNCnZ0IDEgMC41NjI1DQp2IC0zLjAwMDkzIDQuNDc0NjcgMA0Kdm4gMC45OTk5NTYgMCAwLjAwOTMyNTk4DQp2dCAwIDANCnYgLTIuNjYzMjggNC40NzM5NiAxLjI4Njk4DQp2biAwLjg5MTcxOCAwLjAwMDUyMTk2IC0wLjQ1MjU5DQp2dCAwIDAuNTYzNzA0DQp2IC0yLjkxODIzIDUuNDg1MzcgMy41NjI1NQ0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjMyNDkyNiAwLjAxNzAwMDUNCnYgLTIuNSA1LjQ4NTM3IDQuODgxNzcNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC41MzAyOTYgMC4wMzQwMDENCnYgLTEuOTcyNSA1LjQ4NTM3IDIuODkxMzMNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMCAwLjE4NzA2OQ0KdiAtMi41IDUuNDg1MzcgNC44ODE3Nw0Kdm4gLTAuOTkzOTM3IC0wLjA0MjE3NDYgMC4xMDE1NDMNCnZ0IDAuNzY4NTk1IDAuODMzMzMzDQp2IC0yLjUgMy45NTU3IDQuMjQyNjQNCnZuIC0wLjk4NjM0IC0wLjA2MzUwNDcgMC4xNTE5ODkNCnZ0IDEgMA0KdiAtMi41IDMuOTQ5NTUgNS4yNjg1Mg0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDAuNTEyODU1IDANCnYgMCA1LjQ4NTM3IDMuNTAwMDgNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4xNjY3MzYgMA0KdiAtMS45NzI1IDUuNDg1MzcgMi44OTEzMw0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjQ0NDk5NyAwDQp2IC0xLjc1IDIuOTQ1MjUgMy4wMzEwOQ0Kdm4gLTAuMzk3MDEzIC0wLjc4MjU5NSAwLjQ3OTUwNQ0KdnQgMC4wMzU4NjY4IDAuMTM3Mjk3DQp2IC0yLjUgMy45NTU3IDQuMjQyNjQNCnZuIC0wLjMyMjY1NyAtMC43OTY3NjggMC41MTA5MzQNCnZ0IDEgMC4xNzY4Mg0KdiAtMi45MzU4OCAzLjk1NTUgMy41ODU5Mg0Kdm4gLTAuNTIzMzQ2IC0wLjc2NTAzIDAuMzc1Mjg0DQp2dCAwLjkwNzgzNSAwDQp2IC0zLjk5NzkzIDMuOTU1NyAxLjkzMDE4DQp2biAtMC45MTQ0MjIgMC4wMDM1NDY1NCAwLjQwNDc0Nw0KdnQgMC4yNjg5ODQgMA0KdiAtMi45MzU4OCAzLjk1NTUgMy41ODU5Mg0Kdm4gLTAuODM0ODU2IDAuMDEyMDIzMyAwLjU1MDMzNw0KdnQgMC42ODg5NjUgMC4yMDQ4MjENCnYgLTMuOTg2NDQgNS40ODUzNyAxLjk2NDU2DQp2biAtMC45MTQ0MjIgMC4wMDM1NDY1NCAwLjQwNDc0Nw0KdnQgMC4yODI1NDUgMQ0KdiAtMi45MTgyMyA1LjQ4NTM3IDMuNTYyNTUNCnZuIC0wLjgzNDg1NiAwLjAxMjAyMzMgMC41NTAzMzcNCnZ0IDAuODk3MzAxIDENCnYgLTQuNDk3NDcgMy45NTU3IDANCnZuIC0wLjcxNDg4MiAtMC42OTkyNDUgMA0KdnQgMC4wOTc0MDg0IDAuOTI5ODc5DQp2IC0zLjUgMi45NDUyNSAwDQp2biAtMC43MTQ4ODIgLTAuNjk5MjQ1IDANCnZ0IDAuNjM5MzY2IDAuNDM5NDUzDQp2IC0zLjk5NzkzIDMuOTU1NyAxLjkzMDE4DQp2biAtMC42MjUgLTAuNzIxNzk5IDAuMjk3MjkxDQp2dCAwIDANCnYgLTMuMTI0NzEgMi45NDU3NSAxLjUxNDkyDQp2biAtMC42MjUgLTAuNzIxNzk5IDAuMjk3MjkxDQp2dCAxIDANCnYgMCA1LjQ4NTM3IDQuODgxNzcNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC41MzAyOTYgMC4wMzQwMDENCnYgLTEuMzM4MzIgMi45NDY1OSAxLjMzODM3DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IC0zLjEyNDcxIDIuOTQ1NzUgMS41MTQ5Mg0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAtMS44ODQ2IDIuOTQ2NzYgNi4yNDMwMUUtMDUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgLTMuNSAyLjk0NTI1IDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMCAyLjk0NTI1IDMuNQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAtMS43NSAyLjk0NTI1IDMuMDMxMDkNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjE3NDI1IDAuMDE3MzExMg0KdiAzLjkwMzMyRS0wNiAyLjk0Njc2IDEuODg1NA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAtMi41IDUuNDkyMyA2LjM1ODUxDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDEgMC4wMzM5MDc5DQp2IDAgNS40ODUzNyA2LjM1ODUxDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDEgMC4wMzM5MDc5DQp2IC0zLjEyNDcxIDIuOTQ1NzUgMS41MTQ5Mg0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNSAwDQp2IDQuNDk2ODcgNS40ODUzNyAwDQp2biAwLjk5OTk1NiAwIDAuMDA5MzI1OTgNCnZ0IDAuMDA1MTc4NTMgMQ0KdiAzLjk4NjQ0IDUuNDg1MzcgMS45NjQ1Ng0Kdm4gMC45MTQ0MjIgMC4wMDM1NDY1OCAwLjQwNDc0Ng0KdnQgMC4yODI1NDUgMQ0KdiA0LjQ5NzQ3IDMuOTU1NyAwDQp2biAwLjk5OTk1NiAwIDAuMDA5MzI1OTgNCnZ0IDAuMDA1MTc4NTIgMA0KdiAzLjk5NzkzIDMuOTU1NyAxLjkzMDE4DQp2biAwLjkxNDQyMiAwLjAwMzU0NjU4IDAuNDA0NzQ2DQp2dCAwLjI2ODk4NCAwDQp2IDIuOTM1ODggMy45NTU1IDMuNTg1OTINCnZuIDAuODM0ODU2IDAuMDEyMDIzMyAwLjU1MDMzNw0KdnQgMC42ODg5NjUgMC4yMDQ4MjENCnYgMi45MTgyMyA1LjQ4NTM3IDMuNTYyNTUNCnZuIDAuODM0ODU2IDAuMDEyMDIzMyAwLjU1MDMzNw0KdnQgMC44OTczMDEgMQ0KdiAyLjUgMy45NTU3IDQuMjQyNjQNCnZuIDAuODM0ODU2IDAuMDEyMDIzMyAwLjU1MDMzNw0KdnQgMC44OTczMDEgMC4zMzMzMzMNCnYgMi4wMTMxNCAzLjQ5ODExIDUuNjg2NzMNCnZuIDAuMDU3MDk5NCAtMC45MjI3NzggMC4zODEwNzkNCnZ0IDAuODkwNjc1IDANCnYgMCAzLjQ5ODExIDYuMDA3MTENCnZuIDAgLTAuOTI0Mjg1IDAuMzgxNzAyDQp2dCAxIDAuNQ0KdiAxLjk5MDgyIDMuNDk4MTEgMi44Nzg2MQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAwIDMuNDk4MTEgMy41DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4yMDAyNCAwLjUNCnYgMi41IDMuOTQ5NTUgNS4yNjg1Mg0Kdm4gMC43NTA2NTEgLTAuNjIwNzA2IDAuMjI2Mzc4DQp2dCAwIDENCnYgMi4wMTMxNCAzLjQ5ODExIDUuNjg2NzMNCnZuIDAuNzUwNjUxIC0wLjYyMDcwNiAwLjIyNjM3OA0KdnQgMCAwDQp2IDIuNSAzLjk1NTcgNC4yNDI2NA0Kdm4gMC42NzY3NDUgLTAuNzM2MiAtMC4wMDUxMTk4Nw0KdnQgMSAxDQp2IDEuOTkwODIgMy40OTgxMSAyLjg3ODYxDQp2biAwLjY3Njc0NSAtMC43MzYyIC0wLjAwNTExOTg3DQp2dCAwLjg1MDAyMiAwDQp2IDIuMDI0NjUgNS41NDU0NyA2Ljg5NzA5DQp2biAwLjc3NzM4MyAwLjA0OTQxMTcgMC42MjcwODQNCnZ0IDAgMQ0KdiAyLjAxMTk2IDQuODEwMjMgNy4wMTcyNw0Kdm4gMC44MDM5MzcgLTAuMjEzNDM0IDAuNTU1MDk1DQp2dCAwIDANCnYgMi41IDUuNDkyMyA2LjM1ODUxDQp2biAwLjc3NzM4MyAwLjA0OTQxMTcgMC42MjcwODQNCnZ0IDEgMQ0KdiAyLjQ5ODUgNC45NTI2MSA2LjM1NjM4DQp2biAwLjgwMzkzNyAtMC4yMTM0MzQgMC41NTUwOTUNCnZ0IDEgMA0KdiAyLjAxMTk2IDQuODEwMjMgNy4wMTcyNw0Kdm4gMC44MDM5MzcgLTAuMjEzNDM0IDAuNTU1MDk1DQp2dCAwIDENCnYgMi4wMTMxNCAzLjQ5ODExIDUuNjg2NzMNCnZuIDAuNzUwNjUxIC0wLjYyMDcwNiAwLjIyNjM3OA0KdnQgMSAxDQp2IDIuNDk4NSA0Ljk1MjYxIDYuMzU2MzgNCnZuIDAuODAzOTM3IC0wLjIxMzQzNCAwLjU1NTA5NQ0KdnQgMC45OTY1ODYgMC45ODk5ODgNCnYgMi4wMTMxNCAzLjQ5ODExIDUuNjg2NzMNCnZuIDAuMDU3MDk5NCAtMC45MjI3NzggMC4zODEwNzkNCnZ0IDEgMC45OTY3NzUNCnYgMi4wMTE5NiA0LjgxMDIzIDcuMDE3MjcNCnZuIDAuMTUwMjI1IC0wLjM0NDU3MiAwLjkyNjY2Mg0KdnQgMCAwLjgxOTU2DQp2IDAgMy40OTgxMSA2LjAwNzExDQp2biAwIC0wLjkyNDI4NSAwLjM4MTcwMg0KdnQgMSAwDQp2IDAgNC44MTAyMyA3LjMNCnZuIDAgLTAuMzQ4NTI3IDAuOTM3Mjk5DQp2dCAwIDANCnYgMi4wMTE5NiA0LjgxMDIzIDcuMDE3MjcNCnZuIDAuMTUwMjI1IC0wLjM0NDU3MiAwLjkyNjY2Mg0KdnQgMC45OTM1NDQgMA0KdiAyLjAyNDY1IDUuNTQ1NDcgNi44OTcwOQ0Kdm4gMC4xNjc5NyAwLjA3NjA1MjUgMC45ODI4NTQNCnZ0IDEgMQ0KdiAwIDUuNDg0OTUgNy4zMDg5DQp2biAwIDAuMDc3MTQ4NiAwLjk5NzAyDQp2dCAwIDENCnYgMi40OTg1IDQuOTUyNjEgNi4zNTYzOA0Kdm4gMC45OTk5NTYgMCAwLjAwOTMyNTk4DQp2dCAwIDAuNjY2NjY3DQp2IDIuNSAzLjk0OTU1IDUuMjY4NTINCnZuIDAuOTk5OTU2IDAgMC4wMDkzMjU5OA0KdnQgMC41MTI4NTUgMA0KdiAyLjUgNS40ODUzNyA0Ljg4MTc3DQp2biAwLjk5MzkzNyAtMC4wNDIxNzQ2IDAuMTAxNTQzDQp2dCAwLjc2ODU5NSAwLjgzMzMzMw0KdiAyLjUgMy45NTU3IDQuMjQyNjQNCnZuIDAuOTg2MzQgLTAuMDYzNTA0NyAwLjE1MTk4OQ0KdnQgMSAwDQp2IDIuOTE4MjMgNS40ODUzNyAzLjU2MjU1DQp2biAwLjk0NTczMyAtMC4xMjUyNzQgMC4yOTk4MjYNCnZ0IDEgMQ0KdiAyLjUgMy45NTU3IDQuMjQyNjQNCnZuIDAuMzIyNjU3IC0wLjc5Njc2OCAwLjUxMDkzNA0KdnQgMCAwLjM3NQ0KdiAwIDMuOTQ5NTUgNC41DQp2biAwIC0wLjc1Nzk0MyAwLjY1MjMyMQ0KdnQgMCAxDQp2IDEuNzUgMi45NDUyNSAzLjAzMTA5DQp2biAwLjM5NzAxMyAtMC43ODI1OTUgMC40Nzk1MDUNCnZ0IDEgMC41DQp2IDAgMi45NDUyNSAzLjUNCnZuIDAgLTAuNzU3OTQzIDAuNjUyMzIxDQp2dCAxIDENCnYgMCA1LjA2NTk3IDMuMDAwOTMNCnZuIC0wLjAwOTMyNzEzIDAgLTAuOTk5OTU2DQp2dCAxIDAuMTg3NQ0KdiAxLjY5MTIxIDUuMDY1OTggMi40NzkNCnZuIC0wLjU1NTU3MSAwIC0wLjgzMTQ2OQ0KdnQgMSAwLjc1DQp2IDAgNC40NzQ2NyAzLjAwMDkzDQp2biAtMC4wMDkzMjcxMyAwIC0wLjk5OTk1Ng0KdnQgMCAwLjE4NzQ5Mg0KdiAxLjY5OTEzIDQuNDc0NjcgMi40NzE3OA0Kdm4gLTAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAwIDAuNzUyNDA5DQp2IDEuNjkxMjEgNS4wNjU5OCAyLjQ3OQ0Kdm4gLTAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAwIDANCnYgMi42NjY4OSA1LjA2NTk3IDEuMjgzMDINCnZuIC0wLjg5MTcxOCAwLjAwMDUyMTU0NCAtMC40NTI1OQ0KdnQgMC4wMDcxMDc4NSAwLjY0Njg5Mw0KdiAxLjY5OTEzIDQuNDc0NjcgMi40NzE3OA0Kdm4gLTAuNTU1NTcxIDAgLTAuODMxNDY5DQp2dCAwLjk5MzEyOCAwDQp2IDIuNjYzMjggNC40NzQ2NyAxLjI4Njk4DQp2biAtMC44OTE3MTggMC4wMDA1MjE1NDQgLTAuNDUyNTkNCnZ0IDEgMC42MjUwNTcNCnYgMCA1LjA2NTk3IDMuMDAwOTMNCnZuIDAgMC43NjU2MiAtMC42NDMyOTMNCnZ0IDAgMA0KdiAwIDUuNDg1MzcgMy41MDAwOA0Kdm4gMCAwLjc2NTYyIC0wLjY0MzI5Mw0KdnQgMCAxDQp2IDEuNjkxMjEgNS4wNjU5OCAyLjQ3OQ0Kdm4gLTAuMzU5MzA4IDAuNzY1NjE0IC0wLjUzMzYwNA0KdnQgMSAwDQp2IDEuOTcyNSA1LjQ4NTM3IDIuODkxMzMNCnZuIC0wLjM1OTMwOCAwLjc2NTYxNCAtMC41MzM2MDQNCnZ0IDEgMQ0KdiAzLjUwMDA4IDUuNDg1MzcgMA0Kdm4gLTAuNjQzMjk3IDAuNzY1NjE3IDANCnZ0IDEgMQ0KdiAzLjAwMDkzIDUuMDY1OTcgMA0Kdm4gLTAuNjQzMjk3IDAuNzY1NjE3IDANCnZ0IDEgMA0KdiAzLjExMDQ2IDUuNDg1MzcgMS40OTY0Mg0Kdm4gLTAuNTc4MjY5IDAuNzYxMTExIC0wLjI5Mzc5NQ0KdnQgMCAxDQp2IDIuNjY2ODkgNS4wNjU5NyAxLjI4MzAyDQp2biAtMC41NzgyNjkgMC43NjExMTEgLTAuMjkzNzk1DQp2dCAwIDANCnYgMS42OTEyMSA1LjA2NTk4IDIuNDc5DQp2biAtMC4zNTkzMDggMC43NjU2MTQgLTAuNTMzNjA0DQp2dCAwIDANCnYgMS45NzI1IDUuNDg1MzcgMi44OTEzMw0Kdm4gLTAuMzU5MzA4IDAuNzY1NjE0IC0wLjUzMzYwNA0KdnQgMCAxDQp2IDIuNjY2ODkgNS4wNjU5NyAxLjI4MzAyDQp2biAtMC41NzgyNjkgMC43NjExMTEgLTAuMjkzNzk1DQp2dCAxIDANCnYgMy4xMTA0NiA1LjQ4NTM3IDEuNDk2NDINCnZuIC0wLjU3ODI2OSAwLjc2MTExMSAtMC4yOTM3OTUNCnZ0IDEgMQ0KdiAzLjk4NjQ0IDUuNDg1MzcgMS45NjQ1Ng0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjc1IDANCnYgNC40OTY4NyA1LjQ4NTM3IDANCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMCAwDQp2IDMuMTEwNDYgNS40ODUzNyAxLjQ5NjQyDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuODc3NzA4IDAuNzQ2MzI2DQp2IDMuNTAwMDggNS40ODUzNyAwDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuMTA5MTEgMC43MzI3MTkNCnYgMS45NzI1IDUuNDg1MzcgMi44OTEzMw0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjExMzcxOCAwDQp2IDIuOTE4MjMgNS40ODUzNyAzLjU2MjU1DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAgMC42ODg0MDUNCnYgMy4xMTA0NiA1LjQ4NTM3IDEuNDk2NDINCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC45MzAxMDMgMA0KdiAzLjk4NjQ0IDUuNDg1MzcgMS45NjQ1Ng0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAxIDAuNjI1MTM5DQp2IDMuMDAwOTMgNS4wNjU5NyAwDQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMSAwDQp2IDMuMDAwOTMgNC40NzQ2NyAwDQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMCAwDQp2IDIuNjY2ODkgNS4wNjU5NyAxLjI4MzAyDQp2biAtMC44OTE3MTggMC4wMDA1MjE1NDQgLTAuNDUyNTkNCnZ0IDEgMC41NjI1DQp2IDIuNjYzMjggNC40NzQ2NyAxLjI4Njk4DQp2biAtMC44OTE3MTggMC4wMDA1MjE1NDQgLTAuNDUyNTkNCnZ0IDAgMC41NjM3MDQNCnYgMi45MTgyMyA1LjQ4NTM3IDMuNTYyNTUNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4zMjQ5MjYgMC4wMTcwMDA1DQp2IDEuOTcyNSA1LjQ4NTM3IDIuODkxMzMNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMCAwLjE4NzA2OQ0KdiAyLjUgNS40ODUzNyA0Ljg4MTc3DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuNTMwMjk2IDAuMDM0MDAxDQp2IDIuNSA1LjQ4NTM3IDQuODgxNzcNCnZuIDAuOTkzOTM3IC0wLjA0MjE3NDYgMC4xMDE1NDMNCnZ0IDAuNzY4NTk1IDAuODMzMzMzDQp2IDIuNSAzLjk0OTU1IDUuMjY4NTINCnZuIDAuOTk5OTU2IDAgMC4wMDkzMjU5OA0KdnQgMC41MTI4NTUgMA0KdiAyLjUgMy45NTU3IDQuMjQyNjQNCnZuIDAuOTg2MzQgLTAuMDYzNTA0NyAwLjE1MTk4OQ0KdnQgMSAwDQp2IDAgNS40ODUzNyAzLjUwMDA4DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuMTY2NzM2IDANCnYgMS45NzI1IDUuNDg1MzcgMi44OTEzMw0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjQ0NDk5NyAwDQp2IDEuNzUgMi45NDUyNSAzLjAzMTA5DQp2biAwLjM5NzAxMyAtMC43ODI1OTUgMC40Nzk1MDUNCnZ0IDAuMDM1ODY2OCAwLjEzNzI5Nw0KdiAyLjkzNTg4IDMuOTU1NSAzLjU4NTkyDQp2biAwLjUyMzM0NiAtMC43NjUwMyAwLjM3NTI4NA0KdnQgMC45MDc4MzUgMA0KdiAyLjUgMy45NTU3IDQuMjQyNjQNCnZuIDAuMzIyNjU3IC0wLjc5Njc2OCAwLjUxMDkzNA0KdnQgMSAwLjE3NjgyDQp2IDMuOTk3OTMgMy45NTU3IDEuOTMwMTgNCnZuIDAuOTE0NDIyIDAuMDAzNTQ2NTggMC40MDQ3NDYNCnZ0IDAuMjY4OTg0IDANCnYgMy45ODY0NCA1LjQ4NTM3IDEuOTY0NTYNCnZuIDAuOTE0NDIyIDAuMDAzNTQ2NTggMC40MDQ3NDYNCnZ0IDAuMjgyNTQ1IDENCnYgMi45MzU4OCAzLjk1NTUgMy41ODU5Mg0Kdm4gMC44MzQ4NTYgMC4wMTIwMjMzIDAuNTUwMzM3DQp2dCAwLjY4ODk2NSAwLjIwNDgyMQ0KdiAyLjkxODIzIDUuNDg1MzcgMy41NjI1NQ0Kdm4gMC44MzQ4NTYgMC4wMTIwMjMzIDAuNTUwMzM3DQp2dCAwLjg5NzMwMSAxDQp2IDQuNDk3NDcgMy45NTU3IDANCnZuIDAuNzE0ODgyIC0wLjY5OTI0NSAwDQp2dCAwLjA5NzQwODQgMC45Mjk4NzkNCnYgMy45OTc5MyAzLjk1NTcgMS45MzAxOA0Kdm4gMC42MjUgLTAuNzIxNzk5IDAuMjk3MjkxDQp2dCAwIDANCnYgMy41IDIuOTQ1MjUgMA0Kdm4gMC43MTQ4ODIgLTAuNjk5MjQ1IDANCnZ0IDAuNjM5MzY2IDAuNDM5NDUzDQp2IDMuMTI0NzEgMi45NDU3NSAxLjUxNDkyDQp2biAwLjYyNSAtMC43MjE3OTkgMC4yOTcyOTENCnZ0IDEgMA0KdiAwIDUuNDg1MzcgNC44ODE3Nw0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjUzMDI5NiAwLjAzNDAwMQ0KdiAxLjMzODMzIDIuOTQ2NTkgMS4zMzgzNw0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAxLjg4NDYgMi45NDY3NiA2LjI0MjU1RS0wNQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAzLjEyNDcxIDIuOTQ1NzUgMS41MTQ5Mg0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAzLjUgMi45NDUyNSAwDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IDAgMi45NDUyNSAzLjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMy45MDMzMkUtMDYgMi45NDY3NiAxLjg4NTQNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMS43NSAyLjk0NTI1IDMuMDMxMDkNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjE3NDI1IDAuMDE3MzExMg0KdiAyLjUgNS40OTIzIDYuMzU4NTENCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMSAwLjAzMzkwNzkNCnYgMCA1LjQ4NTM3IDYuMzU4NTENCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMSAwLjAzMzkwNzkNCnYgMy4xMjQ3MSAyLjk0NTc1IDEuNTE0OTINCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjUgMA0KdiA0LjQ5Njg3IDUuNDg1MzcgMA0Kdm4gMC45OTk5NTYgMCAwLjAwOTMyNTk4DQp2dCAwLjAwNTE3ODUzIDENCnYgNC40OTc0NyAzLjk1NTcgMA0Kdm4gMC45OTk5NTYgMCAwLjAwOTMyNTk4DQp2dCAwLjAwNTE3ODUyIDANCnYgMy45ODY0NCA1LjQ4NTM3IC0xLjk2NDU2DQp2biAwLjkxNzc0IDAuMDAwNzYyOTk4IC0wLjM5NzE4MQ0KdnQgMC4yODI1NDUgMQ0KdiAzLjk5NzkzIDMuOTU1NyAtMS45MzAxOA0Kdm4gMC45MTc3NCAwLjAwMDc2Mjk5OCAtMC4zOTcxODENCnZ0IDAuMjY4OTg0IDANCnYgMi45MzU4OCAzLjk1NTUgLTMuNTg1OTINCnZuIDAuODM0ODU2IDAuMDEyMDIzMiAtMC41NTAzMzcNCnZ0IDAuNjg4OTY1IDAuMjA0ODIxDQp2IDIuNSAzLjk1NTcgLTQuMjQyNjQNCnZuIDAuODM0ODU2IDAuMDEyMDIzMiAtMC41NTAzMzcNCnZ0IDAuODk3MzAxIDAuMzMzMzMzDQp2IDIuOTE4MjMgNS40ODUzNyAtMy41NjI1NQ0Kdm4gMC44MzQ4NTYgMC4wMTIwMjMyIC0wLjU1MDMzNw0KdnQgMC44OTczMDEgMQ0KdiAyLjAxMzE0IDMuNDk4MTEgLTUuNjg2NzMNCnZuIDAuMDU3MDk5NyAtMC45MjI3NzggLTAuMzgxMDc5DQp2dCAwLjg5MDY3NSAwDQp2IDEuOTkwODIgMy40OTgxMSAtMi44Nzg2MQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAwIDMuNDk4MTEgLTYuMDA3MTENCnZuIDAgLTAuOTI0Mjg2IC0wLjM4MTcwMg0KdnQgMSAwLjUNCnYgMCAzLjQ5ODExIC0zLjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjIwMDI0IDAuNQ0KdiAyLjUgMy45NDk1NSAtNS4yNjg1Mg0Kdm4gMC43NTA2NTEgLTAuNjIwNzA2IC0wLjIyNjM3OA0KdnQgMCAxDQp2IDIuNSAzLjk1NTcgLTQuMjQyNjQNCnZuIDAuNjc2NzQ1IC0wLjczNjIgMC4wMDUxMTk4Nw0KdnQgMSAxDQp2IDIuMDEzMTQgMy40OTgxMSAtNS42ODY3Mw0Kdm4gMC43NTA2NTEgLTAuNjIwNzA2IC0wLjIyNjM3OA0KdnQgMCAwDQp2IDEuOTkwODIgMy40OTgxMSAtMi44Nzg2MQ0Kdm4gMC42NzY3NDUgLTAuNzM2MiAwLjAwNTExOTg3DQp2dCAwLjg1MDAyMiAwDQp2IDIuMDI0NjUgNS41NDU0NyAtNi44OTcwOQ0Kdm4gMC43NzczODMgMC4wNDk0MTIgLTAuNjI3MDgzDQp2dCAwIDENCnYgMi41IDUuNDkyMyAtNi4zNTg1MQ0Kdm4gMC43NzczODMgMC4wNDk0MTIgLTAuNjI3MDgzDQp2dCAxIDENCnYgMi4wMTE5NiA0LjgxMDIzIC03LjAxNzI3DQp2biAwLjgwMzkzOCAtMC4yMTM0MzQgLTAuNTU1MDk1DQp2dCAwIDANCnYgMi40OTg1IDQuOTUyNjEgLTYuMzU2MzgNCnZuIDAuODAzOTM4IC0wLjIxMzQzNCAtMC41NTUwOTUNCnZ0IDEgMA0KdiAyLjAxMTk2IDQuODEwMjMgLTcuMDE3MjcNCnZuIDAuODAzOTM4IC0wLjIxMzQzNCAtMC41NTUwOTUNCnZ0IDAgMQ0KdiAyLjQ5ODUgNC45NTI2MSAtNi4zNTYzOA0Kdm4gMC44MDM5MzggLTAuMjEzNDM0IC0wLjU1NTA5NQ0KdnQgMC45OTY1ODYgMC45ODk5ODgNCnYgMi4wMTMxNCAzLjQ5ODExIC01LjY4NjczDQp2biAwLjc1MDY1MSAtMC42MjA3MDYgLTAuMjI2Mzc4DQp2dCAxIDENCnYgMi4wMTMxNCAzLjQ5ODExIC01LjY4NjczDQp2biAwLjA1NzA5OTcgLTAuOTIyNzc4IC0wLjM4MTA3OQ0KdnQgMSAwLjk5Njc3NQ0KdiAwIDMuNDk4MTEgLTYuMDA3MTENCnZuIDAgLTAuOTI0Mjg2IC0wLjM4MTcwMg0KdnQgMSAwDQp2IDIuMDExOTYgNC44MTAyMyAtNy4wMTcyNw0Kdm4gMC4xNTAyMjUgLTAuMzQ0NTcyIC0wLjkyNjY2Mg0KdnQgMCAwLjgxOTU2DQp2IDAgNC44MTAyMyAtNy4zDQp2biAwIC0wLjM0ODUyOCAtMC45MzcyOTkNCnZ0IDAgMA0KdiAyLjAxMTk2IDQuODEwMjMgLTcuMDE3MjcNCnZuIDAuMTUwMjI1IC0wLjM0NDU3MiAtMC45MjY2NjINCnZ0IDAuOTkzNTQ0IDANCnYgMi4wMjQ2NSA1LjU0NTQ3IC02Ljg5NzA5DQp2biAwLjE2Nzk3IDAuMDc2MDUyMSAtMC45ODI4NTQNCnZ0IDEgMQ0KdiAwIDUuNDg0OTUgLTcuMzA4OQ0Kdm4gMCAwLjA3NzE0ODMgLTAuOTk3MDINCnZ0IDAgMQ0KdiAyLjQ5ODUgNC45NTI2MSAtNi4zNTYzOA0Kdm4gMC45OTk5NTcgMCAtMC4wMDkzMjU3Nw0KdnQgMCAwLjY2NjY2Nw0KdiAyLjUgNS40ODUzNyAtNC44ODE3Nw0Kdm4gMC45OTM5MzcgLTAuMDQyMTc0NiAtMC4xMDE1NDMNCnZ0IDAuNzY4NTk1IDAuODMzMzMzDQp2IDIuNSAzLjk0OTU1IC01LjI2ODUyDQp2biAwLjk5OTk1NiAwIDAuMDA5MzI1OTgNCnZ0IDAuNTEyODU1IDANCnYgMi41IDMuOTU1NyAtNC4yNDI2NA0Kdm4gMC45ODYzNCAtMC4wNjM1MDQ3IC0wLjE1MTk5DQp2dCAxIDANCnYgMi45MTgyMyA1LjQ4NTM3IC0zLjU2MjU1DQp2biAwLjk0NTczMyAtMC4xMjUyNzQgLTAuMjk5ODI3DQp2dCAxIDENCnYgMi41IDMuOTU1NyAtNC4yNDI2NA0Kdm4gMC4zMjI2NTcgLTAuNzk2NzY4IC0wLjUxMDkzNA0KdnQgMCAwLjM3NQ0KdiAxLjc1IDIuOTQ1MjUgLTMuMDMxMDkNCnZuIDAuMzk3MDEzIC0wLjc4MjU5NSAtMC40Nzk1MDUNCnZ0IDEgMC41DQp2IDAgMy45NDk1NSAtNC41DQp2biAwIC0wLjc1Nzk0MyAtMC42NTIzMjENCnZ0IDAgMQ0KdiAwIDIuOTQ1MjUgLTMuNQ0Kdm4gMCAtMC43NTc5NDMgLTAuNjUyMzIxDQp2dCAxIDENCnYgMCA1LjA2NTk3IC0zLjAwMDkzDQp2biAwLjAwOTMyNjQ3IDAgMC45OTk5NTYNCnZ0IDEgMC4xODc1DQp2IDAgNC40NzQ2NyAtMy4wMDA5Mw0Kdm4gMC4wMDkzMjY0NyAwIDAuOTk5OTU2DQp2dCAwIDAuMTg3NDkyDQp2IDEuNjkxMjEgNS4wNjU5OCAtMi40NzkNCnZuIC0wLjU1NTU3MSAwIDAuODMxNDY5DQp2dCAxIDAuNzUNCnYgMS42OTkxMyA0LjQ3NDY3IC0yLjQ3MTc4DQp2biAtMC41NTU1NzEgMCAwLjgzMTQ2OQ0KdnQgMCAwLjc1MjQwOQ0KdiAxLjY5MTIxIDUuMDY1OTggLTIuNDc5DQp2biAtMC41NTU1NzEgMCAwLjgzMTQ2OQ0KdnQgMCAwDQp2IDEuNjk5MTMgNC40NzQ2NyAtMi40NzE3OA0Kdm4gLTAuNTU1NTcxIDAgMC44MzE0NjkNCnZ0IDAuOTkzMTI4IDANCnYgMi42NjY4OSA1LjA2NTk3IC0xLjI4MzAyDQp2biAtMC44OTE4MTQgLTguMTAxNDhFLTA1IDAuNDUyNDAzDQp2dCAwLjAwNzEwNzg1IDAuNjQ2ODkzDQp2IDIuNjY1MDggNC40NzQ2NyAtMS4yODUNCnZuIC0wLjg5MTgxNCAtOC4xMDE0OEUtMDUgMC40NTI0MDMNCnZ0IDEgMC42MjUwNTcNCnYgMCA1LjA2NTk3IC0zLjAwMDkzDQp2biAwIDAuNzY1NjIgMC42NDMyOTMNCnZ0IDAgMA0KdiAxLjY5MTIxIDUuMDY1OTggLTIuNDc5DQp2biAtMC4zNTkzMDggMC43NjU2MTQgMC41MzM2MDQNCnZ0IDEgMA0KdiAwIDUuNDg1MzcgLTMuNTAwMDgNCnZuIDAgMC43NjU2MiAwLjY0MzI5Mw0KdnQgMCAxDQp2IDEuOTcyNSA1LjQ4NTM3IC0yLjg5MTMyDQp2biAtMC4zNTkzMDggMC43NjU2MTQgMC41MzM2MDQNCnZ0IDEgMQ0KdiAzLjUwMDA4IDUuNDg1MzcgMA0Kdm4gLTAuNjQzMjk3IDAuNzY1NjE3IDANCnZ0IDEgMQ0KdiAzLjExMDQ2IDUuNDg1MzcgLTEuNDk2NDINCnZuIC0wLjU3ODI2OSAwLjc2MTExMSAwLjI5Mzc5NQ0KdnQgMCAxDQp2IDMuMDAwOTMgNS4wNjU5NyAwDQp2biAtMC42NDMyOTcgMC43NjU2MTcgMA0KdnQgMSAwDQp2IDIuNjY2ODkgNS4wNjU5NyAtMS4yODMwMg0Kdm4gLTAuNTc4MjY5IDAuNzYxMTExIDAuMjkzNzk1DQp2dCAwIDANCnYgMS42OTEyMSA1LjA2NTk4IC0yLjQ3OQ0Kdm4gLTAuMzU5MzA4IDAuNzY1NjE0IDAuNTMzNjA0DQp2dCAwIDANCnYgMi42NjY4OSA1LjA2NTk3IC0xLjI4MzAyDQp2biAtMC41NzgyNjkgMC43NjExMTEgMC4yOTM3OTUNCnZ0IDEgMA0KdiAxLjk3MjUgNS40ODUzNyAtMi44OTEzMg0Kdm4gLTAuMzU5MzA4IDAuNzY1NjE0IDAuNTMzNjA0DQp2dCAwIDENCnYgMy4xMTA0NiA1LjQ4NTM3IC0xLjQ5NjQyDQp2biAtMC41NzgyNjkgMC43NjExMTEgMC4yOTM3OTUNCnZ0IDEgMQ0KdiAzLjk4NjQ0IDUuNDg1MzcgLTEuOTY0NTYNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC43NSAwDQp2IDMuMTEwNDYgNS40ODUzNyAtMS40OTY0Mg0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjg3NzcwOCAwLjc0NjMyNg0KdiA0LjQ5Njg3IDUuNDg1MzcgMA0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwIDANCnYgMy41MDAwOCA1LjQ4NTM3IDANCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4xMDkxMSAwLjczMjcxOQ0KdiAxLjk3MjUgNS40ODUzNyAtMi44OTEzMg0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjExMzcxOCAwDQp2IDMuMTEwNDYgNS40ODUzNyAtMS40OTY0Mg0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjkzMDEwMyAwDQp2IDIuOTE4MjMgNS40ODUzNyAtMy41NjI1NQ0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwIDAuNjg4NDA1DQp2IDMuOTg2NDQgNS40ODUzNyAtMS45NjQ1Ng0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAxIDAuNjI1MTM5DQp2IDMuMDAwOTMgNS4wNjU5NyAwDQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMSAwDQp2IDIuNjY2ODkgNS4wNjU5NyAtMS4yODMwMg0Kdm4gLTAuODkxODE0IC04LjEwMTQ4RS0wNSAwLjQ1MjQwMw0KdnQgMSAwLjU2MjUNCnYgMy4wMDA5MyA0LjQ3NDY3IDANCnZuIC0wLjk5OTk1NiA2Ljg2ODU3RS0wNSAwLjAwOTM4OTAzDQp2dCAwIDANCnYgMi42NjUwOCA0LjQ3NDY3IC0xLjI4NQ0Kdm4gLTAuODkxODE0IC04LjEwMTQ4RS0wNSAwLjQ1MjQwMw0KdnQgMCAwLjU2MzcwNA0KdiAyLjkxODIzIDUuNDg1MzcgLTMuNTYyNTUNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4zMjQ5MjYgMC4wMTcwMDA1DQp2IDIuNSA1LjQ4NTM3IC00Ljg4MTc3DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuNTMwMjk2IDAuMDM0MDAxDQp2IDEuOTcyNSA1LjQ4NTM3IC0yLjg5MTMyDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAgMC4xODcwNjkNCnYgMi41IDUuNDg1MzcgLTQuODgxNzcNCnZuIDAuOTkzOTM3IC0wLjA0MjE3NDYgLTAuMTAxNTQzDQp2dCAwLjc2ODU5NSAwLjgzMzMzMw0KdiAyLjUgMy45NTU3IC00LjI0MjY0DQp2biAwLjk4NjM0IC0wLjA2MzUwNDcgLTAuMTUxOTkNCnZ0IDEgMA0KdiAyLjUgMy45NDk1NSAtNS4yNjg1Mg0Kdm4gMC45OTk5NTYgMCAwLjAwOTMyNTk4DQp2dCAwLjUxMjg1NSAwDQp2IDAgNS40ODUzNyAtMy41MDAwOA0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjE2NjczNiAwDQp2IDEuOTcyNSA1LjQ4NTM3IC0yLjg5MTMyDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuNDQ0OTk3IDANCnYgMS43NSAyLjk0NTI1IC0zLjAzMTA5DQp2biAwLjM5NzAxMyAtMC43ODI1OTUgLTAuNDc5NTA1DQp2dCAwLjAzNTg2NjggMC4xMzcyOTcNCnYgMi41IDMuOTU1NyAtNC4yNDI2NA0Kdm4gMC4zMjI2NTcgLTAuNzk2NzY4IC0wLjUxMDkzNA0KdnQgMSAwLjE3NjgyDQp2IDIuOTM1ODggMy45NTU1IC0zLjU4NTkyDQp2biAwLjUyMzM0NiAtMC43NjUwMyAtMC4zNzUyODQNCnZ0IDAuOTA3ODM1IDANCnYgMy45OTc5MyAzLjk1NTcgLTEuOTMwMTgNCnZuIDAuOTE3NzQgMC4wMDA3NjI5OTggLTAuMzk3MTgxDQp2dCAwLjI2ODk4NCAwDQp2IDIuOTM1ODggMy45NTU1IC0zLjU4NTkyDQp2biAwLjgzNDg1NiAwLjAxMjAyMzIgLTAuNTUwMzM3DQp2dCAwLjY4ODk2NSAwLjIwNDgyMQ0KdiAzLjk4NjQ0IDUuNDg1MzcgLTEuOTY0NTYNCnZuIDAuOTE3NzQgMC4wMDA3NjI5OTggLTAuMzk3MTgxDQp2dCAwLjI4MjU0NSAxDQp2IDIuOTE4MjMgNS40ODUzNyAtMy41NjI1NQ0Kdm4gMC44MzQ4NTYgMC4wMTIwMjMyIC0wLjU1MDMzNw0KdnQgMC44OTczMDEgMQ0KdiA0LjQ5NzQ3IDMuOTU1NyAwDQp2biAwLjcxNDg4MiAtMC42OTkyNDUgMA0KdnQgMC4wOTc0MDg0IDAuOTI5ODc5DQp2IDMuNSAyLjk0NTI1IDANCnZuIDAuNzE0ODgyIC0wLjY5OTI0NSAwDQp2dCAwLjYzOTM2NiAwLjQzOTQ1Mw0KdiAzLjk5NzkzIDMuOTU1NyAtMS45MzAxOA0Kdm4gMC42MjUgLTAuNzIxNzk5IC0wLjI5NzI5MQ0KdnQgMCAwDQp2IDMuMTI0NzEgMi45NDU3NSAtMS41MTQ5Mg0Kdm4gMC42MjUgLTAuNzIxNzk5IC0wLjI5NzI5MQ0KdnQgMSAwDQp2IDAgNS40ODUzNyAtNC44ODE3Nw0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjUzMDI5NiAwLjAzNDAwMQ0KdiAxLjMzODMyIDIuOTQ2NTkgLTEuMzM4MjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMy4xMjQ3MSAyLjk0NTc1IC0xLjUxNDkyDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IDEuODg0NiAyLjk0Njc2IDYuMjQyNTVFLTA1DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IDMuNSAyLjk0NTI1IDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMCAyLjk0NTI1IC0zLjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMS43NSAyLjk0NTI1IC0zLjAzMTA5DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4xNzQyNSAwLjAxNzMxMTINCnYgLTcuODA2NjRFLTA2IDIuOTQ2NzYgLTEuODg1NjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMi41IDUuNDkyMyAtNi4zNTg1MQ0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAxIDAuMDMzOTA3OQ0KdiAwIDUuNDg1MzcgLTYuMzU4NTENCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMSAwLjAzMzkwNzkNCnYgMy4xMjQ3MSAyLjk0NTc1IC0xLjUxNDkyDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC41IDANCnYgLTQuNDk2ODcgNS40ODUzNyAwDQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMC4wMDUxNzg1MyAxDQp2IC0zLjk4NjQ0IDUuNDg1MzcgLTEuOTY0NTYNCnZuIC0wLjkxNDQyMiAwLjAwMzU0NjU3IC0wLjQwNDc0Ng0KdnQgMC4yODI1NDUgMQ0KdiAtNC40OTc0NyAzLjk1NTcgMA0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDAuMDA1MTc4NTIgMA0KdiAtMy45OTc5MyAzLjk1NTcgLTEuOTMwMTgNCnZuIC0wLjkxNDQyMiAwLjAwMzU0NjU3IC0wLjQwNDc0Ng0KdnQgMC4yNjg5ODQgMA0KdiAtMi45MzU4OCAzLjk1NTUgLTMuNTg1OTINCnZuIC0wLjgzNDg1NiAwLjAxMjAyMzIgLTAuNTUwMzM3DQp2dCAwLjY4ODk2NSAwLjIwNDgyMQ0KdiAtMi45MTgyMyA1LjQ4NTM3IC0zLjU2MjU1DQp2biAtMC44MzQ4NTYgMC4wMTIwMjMyIC0wLjU1MDMzNw0KdnQgMC44OTczMDEgMQ0KdiAtMi41IDMuOTU1NyAtNC4yNDI2NA0Kdm4gLTAuODM0ODU2IDAuMDEyMDIzMiAtMC41NTAzMzcNCnZ0IDAuODk3MzAxIDAuMzMzMzMzDQp2IC0yLjAxMzE0IDMuNDk4MTEgLTUuNjg2NzMNCnZuIC0wLjA1NzA5OTcgLTAuOTIyNzc4IC0wLjM4MTA3OQ0KdnQgMC44OTA2NzUgMA0KdiAwIDMuNDk4MTEgLTYuMDA3MTENCnZuIDAgLTAuOTI0Mjg2IC0wLjM4MTcwMg0KdnQgMSAwLjUNCnYgLTEuOTkwODIgMy40OTgxMSAtMi44Nzg2MQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAgMA0KdiAwIDMuNDk4MTEgLTMuNQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMjAwMjQgMC41DQp2IC0yLjUgMy45NDk1NSAtNS4yNjg1Mg0Kdm4gLTAuNzUwODI0IC0wLjYyMDUxNiAtMC4yMjYzMjYNCnZ0IDAgMQ0KdiAtMi4wMTMxNCAzLjQ5ODExIC01LjY4NjczDQp2biAtMC43NTA4MjQgLTAuNjIwNTE2IC0wLjIyNjMyNg0KdnQgMCAwDQp2IC0yLjUgMy45NTU3IC00LjI0MjY0DQp2biAtMC42NzY3NDUgLTAuNzM2MiAwLjAwNTExOTg3DQp2dCAxIDENCnYgLTEuOTkwODIgMy40OTgxMSAtMi44Nzg2MQ0Kdm4gLTAuNjc2NzQ1IC0wLjczNjIgMC4wMDUxMTk4Nw0KdnQgMC44NTAwMjIgMA0KdiAtMi4wMjQ2NSA1LjU0NTQ3IC02Ljg5NzA5DQp2biAtMC43Nzc0MTIgMC4wNDk1OTU5IC0wLjYyNzAzNA0KdnQgMCAxDQp2IC0yLjAxMTk2IDQuODEwMjMgLTcuMDE3MjcNCnZuIC0wLjgwNDA4NiAtMC4yMTMxMjggLTAuNTU0OTk3DQp2dCAwIDANCnYgLTIuNSA1LjQ4ODgzIC02LjM1ODUxDQp2biAtMC43Nzc0MTIgMC4wNDk1OTU5IC0wLjYyNzAzNA0KdnQgMSAxDQp2IC0yLjQ5ODUgNC45NTQwMSAtNi4zNTYzOA0Kdm4gLTAuODA0MDg2IC0wLjIxMzEyOCAtMC41NTQ5OTcNCnZ0IDEgMA0KdiAtMi4wMTE5NiA0LjgxMDIzIC03LjAxNzI3DQp2biAtMC44MDQwODYgLTAuMjEzMTI4IC0wLjU1NDk5Nw0KdnQgMCAxDQp2IC0yLjAxMzE0IDMuNDk4MTEgLTUuNjg2NzMNCnZuIC0wLjc1MDgyNCAtMC42MjA1MTYgLTAuMjI2MzI2DQp2dCAxIDENCnYgLTIuNDk4NSA0Ljk1NDAxIC02LjM1NjM4DQp2biAtMC44MDQwODYgLTAuMjEzMTI4IC0wLjU1NDk5Nw0KdnQgMC45OTY1ODYgMC45ODk5ODgNCnYgLTIuMDEzMTQgMy40OTgxMSAtNS42ODY3Mw0Kdm4gLTAuMDU3MDk5NyAtMC45MjI3NzggLTAuMzgxMDc5DQp2dCAxIDAuOTk2Nzc1DQp2IC0yLjAxMTk2IDQuODEwMjMgLTcuMDE3MjcNCnZuIC0wLjE1MDIyNSAtMC4zNDQ1NzIgLTAuOTI2NjYyDQp2dCAwIDAuODE5NTYNCnYgMCAzLjQ5ODExIC02LjAwNzExDQp2biAwIC0wLjkyNDI4NiAtMC4zODE3MDINCnZ0IDEgMA0KdiAwIDQuODEwMjMgLTcuMw0Kdm4gMCAtMC4zNDg1MjggLTAuOTM3Mjk5DQp2dCAwIDANCnYgLTIuMDExOTYgNC44MTAyMyAtNy4wMTcyNw0Kdm4gLTAuMTUwMjI1IC0wLjM0NDU3MiAtMC45MjY2NjINCnZ0IDAuOTkzNTQ0IDANCnYgLTIuMDI0NjUgNS41NDU0NyAtNi44OTcwOQ0Kdm4gLTAuMTY3OTcgMC4wNzYwNTIxIC0wLjk4Mjg1NA0KdnQgMSAxDQp2IDAgNS40ODQ5NSAtNy4zMDg5DQp2biAwIDAuMDc3MTQ4MyAtMC45OTcwMg0KdnQgMCAxDQp2IC0yLjQ5ODUgNC45NTQwMSAtNi4zNTYzOA0Kdm4gLTAuOTk5OTU2IDAgLTAuMDA5MzI1OTgNCnZ0IDAgMC42NjY2NjcNCnYgLTIuNSAzLjk0OTU1IC01LjI2ODUyDQp2biAtMC45OTk5NTYgNi44Njg1N0UtMDUgMC4wMDkzODkwMw0KdnQgMC41MTI4NTUgMA0KdiAtMi41IDUuNDg1MzcgLTQuODgxNzcNCnZuIC0wLjk5MzkzNyAtMC4wNDIxNzQ3IC0wLjEwMTU0Mw0KdnQgMC43Njg1OTUgMC44MzMzMzMNCnYgLTIuNSAzLjk1NTcgLTQuMjQyNjQNCnZuIC0wLjk4NjM0IC0wLjA2MzUwNDcgLTAuMTUxOTkNCnZ0IDEgMA0KdiAtMi45MTgyMyA1LjQ4NTM3IC0zLjU2MjU1DQp2biAtMC45NDU3MzMgLTAuMTI1Mjc0IC0wLjI5OTgyNw0KdnQgMSAxDQp2IC0yLjUgMy45NTU3IC00LjI0MjY0DQp2biAtMC4zMjI2NTcgLTAuNzk2NzY4IC0wLjUxMDkzNA0KdnQgMCAwLjM3NQ0KdiAwIDMuOTQ5NTUgLTQuNQ0Kdm4gMCAtMC43NTc5NDMgLTAuNjUyMzIxDQp2dCAwIDENCnYgLTEuNzUgMi45NDUyNSAtMy4wMzEwOQ0Kdm4gLTAuMzk3MDEzIC0wLjc4MjU5NSAtMC40Nzk1MDUNCnZ0IDEgMC41DQp2IDAgMi45NDUyNSAtMy41DQp2biAwIC0wLjc1Nzk0MyAtMC42NTIzMjENCnZ0IDEgMQ0KdiAwIDUuMDY1OTcgLTMuMDAwOTMNCnZuIDAuMDA5MzI2NDcgMCAwLjk5OTk1Ng0KdnQgMSAwLjE4NzUNCnYgLTEuNjkxMjEgNS4wNjU5OCAtMi40NzkNCnZuIDAuNTU1NTcxIDAgMC44MzE0NjkNCnZ0IDEgMC43NQ0KdiAwIDQuNDc0NjcgLTMuMDAwOTMNCnZuIDAuMDA5MzI2NDcgMCAwLjk5OTk1Ng0KdnQgMCAwLjE4NzQ5Mg0KdiAtMS42OTkxMyA0LjQ3NDY3IC0yLjQ3MTc4DQp2biAwLjU1NTU3MSAwIDAuODMxNDY5DQp2dCAwIDAuNzUyNDA5DQp2IC0xLjY5MTIxIDUuMDY1OTggLTIuNDc5DQp2biAwLjU1NTU3MSAwIDAuODMxNDY5DQp2dCAwIDANCnYgLTIuNjY2ODkgNS4wNjU5NyAtMS4yODMwMg0Kdm4gMC44OTE3MTggMC4wMDA1MjE0MDkgMC40NTI1OTENCnZ0IDAuMDA3MTA3ODUgMC42NDY4OTMNCnYgLTEuNjk5MTMgNC40NzQ2NyAtMi40NzE3OA0Kdm4gMC41NTU1NzEgMCAwLjgzMTQ2OQ0KdnQgMC45OTMxMjggMA0KdiAtMi42NjMyOCA0LjQ3NDY3IC0xLjI4Njk3DQp2biAwLjg5MTcxOCAwLjAwMDUyMTQwOSAwLjQ1MjU5MQ0KdnQgMSAwLjYyNTA1Nw0KdiAwIDUuMDY1OTcgLTMuMDAwOTMNCnZuIDAgMC43NjU2MiAwLjY0MzI5Mw0KdnQgMCAwDQp2IDAgNS40ODUzNyAtMy41MDAwOA0Kdm4gMCAwLjc2NTYyIDAuNjQzMjkzDQp2dCAwIDENCnYgLTEuNjkxMjEgNS4wNjU5OCAtMi40NzkNCnZuIDAuMzU5MzA4IDAuNzY1NjE0IDAuNTMzNjA0DQp2dCAxIDANCnYgLTEuOTcyNSA1LjQ4NTM3IC0yLjg5MTMyDQp2biAwLjM1OTMwOCAwLjc2NTYxNCAwLjUzMzYwNA0KdnQgMSAxDQp2IC0zLjUwMDA4IDUuNDg1MzcgMA0Kdm4gMC42NDMyOTcgMC43NjU2MTcgMA0KdnQgMSAxDQp2IC0zLjAwMDkzIDUuMDY1OTcgMA0Kdm4gMC42NDMyOTcgMC43NjU2MTcgMA0KdnQgMSAwDQp2IC0zLjExMDQ2IDUuNDg1MzcgLTEuNDk2NDINCnZuIDAuNTc4MjY5IDAuNzYxMTExIDAuMjkzNzk1DQp2dCAwIDENCnYgLTIuNjY2ODkgNS4wNjU5NyAtMS4yODMwMg0Kdm4gMC41NzgyNjkgMC43NjExMTEgMC4yOTM3OTUNCnZ0IDAgMA0KdiAtMy45ODY0NCA1LjQ4NTM3IC0xLjk2NDU2DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuNzUgMA0KdiAtNC40OTY4NyA1LjQ4NTM3IDANCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMCAwDQp2IC0zLjExMDQ2IDUuNDg1MzcgLTEuNDk2NDINCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC44Nzc3MDggMC43NDYzMjYNCnYgLTMuNTAwMDggNS40ODUzNyAwDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuMTA5MTEgMC43MzI3MTkNCnYgLTEuOTcyNSA1LjQ4NTM3IC0yLjg5MTMyDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuMTEzNzE4IDANCnYgLTIuOTE4MjMgNS40ODUzNyAtMy41NjI1NQ0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwIDAuNjg4NDA1DQp2IC0zLjExMDQ2IDUuNDg1MzcgLTEuNDk2NDINCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC45MzAxMDMgMA0KdiAtMy45ODY0NCA1LjQ4NTM3IC0xLjk2NDU2DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDEgMC42MjUxMzkNCnYgLTMuMDAwOTMgNS4wNjU5NyAwDQp2biAwLjk5OTk1NiAwIDAuMDA5MzI1OTgNCnZ0IDEgMA0KdiAtMy4wMDA5MyA0LjQ3NDY3IDANCnZuIDAuOTk5OTU2IDAgMC4wMDkzMjU5OA0KdnQgMCAwDQp2IC0yLjY2Njg5IDUuMDY1OTcgLTEuMjgzMDINCnZuIDAuODkxNzE4IDAuMDAwNTIxNDA5IDAuNDUyNTkxDQp2dCAxIDAuNTYyNQ0KdiAtMi42NjMyOCA0LjQ3NDY3IC0xLjI4Njk3DQp2biAwLjg5MTcxOCAwLjAwMDUyMTQwOSAwLjQ1MjU5MQ0KdnQgMCAwLjU2MzcwNA0KdiAtMi45MTgyMyA1LjQ4NTM3IC0zLjU2MjU1DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuMzI0OTI2IDAuMDE3MDAwNQ0KdiAtMS45NzI1IDUuNDg1MzcgLTIuODkxMzINCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMCAwLjE4NzA2OQ0KdiAtMi41IDUuNDg1MzcgLTQuODgxNzcNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC41MzAyOTYgMC4wMzQwMDENCnYgLTIuNSA1LjQ4NTM3IC00Ljg4MTc3DQp2biAtMC45OTM5MzcgLTAuMDQyMTc0NyAtMC4xMDE1NDMNCnZ0IDAuNzY4NTk1IDAuODMzMzMzDQp2IC0yLjUgMy45NDk1NSAtNS4yNjg1Mg0Kdm4gLTAuOTk5OTU2IDYuODY4NTdFLTA1IDAuMDA5Mzg5MDMNCnZ0IDAuNTEyODU1IDANCnYgLTIuNSAzLjk1NTcgLTQuMjQyNjQNCnZuIC0wLjk4NjM0IC0wLjA2MzUwNDcgLTAuMTUxOTkNCnZ0IDEgMA0KdiAwIDUuNDg1MzcgLTMuNTAwMDgNCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4xNjY3MzYgMA0KdiAtMS45NzI1IDUuNDg1MzcgLTIuODkxMzINCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC40NDQ5OTcgMA0KdiAtMS43NSAyLjk0NTI1IC0zLjAzMTA5DQp2biAtMC4zOTcwMTMgLTAuNzgyNTk1IC0wLjQ3OTUwNQ0KdnQgMC4wMzU4NjY4IDAuMTM3Mjk3DQp2IC0yLjkzNTg4IDMuOTU1NSAtMy41ODU5Mg0Kdm4gLTAuNTIzMzQ2IC0wLjc2NTAzIC0wLjM3NTI4NA0KdnQgMC45MDc4MzUgMA0KdiAtMi41IDMuOTU1NyAtNC4yNDI2NA0Kdm4gLTAuMzIyNjU3IC0wLjc5Njc2OCAtMC41MTA5MzQNCnZ0IDEgMC4xNzY4Mg0KdiAtMy45OTc5MyAzLjk1NTcgLTEuOTMwMTgNCnZuIC0wLjkxNDQyMiAwLjAwMzU0NjU3IC0wLjQwNDc0Ng0KdnQgMC4yNjg5ODQgMA0KdiAtMy45ODY0NCA1LjQ4NTM3IC0xLjk2NDU2DQp2biAtMC45MTQ0MjIgMC4wMDM1NDY1NyAtMC40MDQ3NDYNCnZ0IDAuMjgyNTQ1IDENCnYgLTIuOTM1ODggMy45NTU1IC0zLjU4NTkyDQp2biAtMC44MzQ4NTYgMC4wMTIwMjMyIC0wLjU1MDMzNw0KdnQgMC42ODg5NjUgMC4yMDQ4MjENCnYgLTIuOTE4MjMgNS40ODUzNyAtMy41NjI1NQ0Kdm4gLTAuODM0ODU2IDAuMDEyMDIzMiAtMC41NTAzMzcNCnZ0IDAuODk3MzAxIDENCnYgMCA1LjQ4NTM3IC00Ljg4MTc3DQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuNTMwMjk2IDAuMDM0MDAxDQp2IC0xLjMzODMzIDIuOTQ2NTkgLTEuMzM4MjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgLTEuODg0NiAyLjk0Njc2IDYuMjQzMDFFLTA1DQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMCAwDQp2IC0zLjEyNDcxIDIuOTQ1NzUgLTEuNTE0OTINCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgLTMuNSAyLjk0NTI1IDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgMCAyLjk0NTI1IC0zLjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgLTcuODA2NjRFLTA2IDIuOTQ2NzYgLTEuODg1NjUNCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwIDANCnYgLTEuNzUgMi45NDUyNSAtMy4wMzEwOQ0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMTc0MjUgMC4wMTczMTEyDQp2IC0yLjUgNS40ODg4MyAtNi4zNTg1MQ0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAxIDAuMDMzOTA3OQ0KdiAwIDUuNDg1MzcgLTYuMzU4NTENCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMSAwLjAzMzkwNzkNCnYgLTMuMTI0NzEgMi45NDU3NSAtMS41MTQ5Mg0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuNSAwDQp2IC0yLjQ3NzU1IDQuOTQ3MDcgLTQuNzI5OTYNCnZuIC0wLjkwNDYxIC0wLjQyNjIzNyAwLjAwMTIwNTQ3DQp2dCAwLjA0NzAzIDENCnYgLTIuNjYzMzIgNS4zMDg2NyAtNC42MzczOA0Kdm4gLTAuNzI3MjUyIC0wLjY4NjMxNyAwLjAwODUxMTUxDQp2dCAwLjAyNTE2MDkgMC4yNQ0KdiAtMi40OTg1IDQuOTU0MDEgLTYuMzU2MzgNCnZuIC0wLjkwNDYxIC0wLjQyNjIzNyAwLjAwMTIwNTQ3DQp2dCAwLjk5NzE4NiAxDQp2IC0yLjYzOTM0IDUuMjg1OTcgLTYuMzEzNTMNCnZuIC0wLjcyNzI1MiAtMC42ODYzMTcgMC4wMDg1MTE1MQ0KdnQgMC45ODgyMTMgMC43NQ0KdiAtMi41IDUuNDg4ODMgLTYuMzU4NTENCnZuIC0wLjMzOTI4NiAwLjAyNDU0MjUgLTAuOTQwMzYzDQp2dCAwLjI1NjQ1OCAwLjg3NQ0KdiAtMi42MzkzNCA1LjI4NTk3IC02LjMxMzUzDQp2biAtMC4zMzkyODYgMC4wMjQ1NDI1IC0wLjk0MDM2Mw0KdnQgMC4yMTA0NjEgMC42NDU1MjcNCnYgLTMgNS40NjU5MiAtNi4xNTYyDQp2biAtMC4zNzY2NTEgMC4wNTM2NjAxIC0wLjkyNDgNCnZ0IDEgMQ0KdiAtMyA1LjUxNTEgLTQuMzgxMQ0Kdm4gLTAuNDc3Nzg3IC0wLjg3ODM0OCAwLjAxNDk3MzYNCnZ0IDAgMA0KdiAtMyA1LjQ2NTkyIC02LjE1NjINCnZuIC0wLjQ3Nzc4NyAtMC44NzgzNDggMC4wMTQ5NzM2DQp2dCAwLjkxNDExIDANCnYgLTIuNjYzMzIgNS4zMDg2NyAtNC42MzczOA0Kdm4gMC41MjM0MzMgLTAuMDM1MzUxMSAwLjg1MTMzMw0KdnQgMC40ODI1OTMgMC40Mjc4Nw0KdiAtMi41IDUuNDk3NDMgLTQuNzI5OTYNCnZuIDAuNTIzNDMzIC0wLjAzNTM1MTEgMC44NTEzMzMNCnZ0IDAuODMzMzMzIDAuMTY2NjY3DQp2IC0zIDUuNTE1MSAtNC4zODExDQp2biAwLjU2Nzc0OCAtMC4wODk5MDU5IDAuODE4Mjc4DQp2dCAxIDENCnYgLTIuNDk4NSA0Ljk1NDAxIC02LjM1NjM4DQp2biAtMC4zMDEwNzggLTAuMDA0NjM2MTMgLTAuOTUzNTg4DQp2dCAwLjAwNjQ1NzUgMA0KdiAtMi41IDUuNDk3NDMgLTQuNzI5OTYNCnZuIDAuNTIzNDMzIC0wLjAzNTM1MTEgMC44NTEzMzMNCnZ0IDAgMA0KdiAtMi42NjMzMiA1LjMwODY3IC00LjYzNzM4DQp2biAwLjUyMzQzMyAtMC4wMzUzNTExIDAuODUxMzMzDQp2dCAwLjY4MjIyOCAwDQp2IC0yLjQ3NzU1IDQuOTQ3MDcgLTQuNzI5OTYNCnZuIDAuNDc1OTYgMC4wMTk0MTY5IDAuODc5MjUzDQp2dCAxIDAuOTk0NTY3DQp2IDIuNDc3NTUgNC45NDcwNyA0LjcyOTk2DQp2biAwLjkwNDkyOCAtMC40MjU1NjIgLTAuMDAxMzgyMzUNCnZ0IDAuMDQ3MDMgMQ0KdiAyLjY2MzMyIDUuMzA4NjcgNC42MzczOA0Kdm4gMC43Mjc1MDggLTAuNjg2MDQ1IC0wLjAwODYwNTYxDQp2dCAwLjAyNTE2MDkgMC4yNQ0KdiAyLjQ5ODUgNC45NTI2MSA2LjM1NjM4DQp2biAwLjkwNDkyOCAtMC40MjU1NjIgLTAuMDAxMzgyMzUNCnZ0IDAuOTk3MTg2IDENCnYgMi42MzkzNCA1LjI4NTk3IDYuMzEzNTMNCnZuIDAuNzI3NTA4IC0wLjY4NjA0NSAtMC4wMDg2MDU2MQ0KdnQgMC45ODgyMTMgMC43NQ0KdiAyLjUgNS40OTIzIDYuMzU4NTENCnZuIDAuMzM5NDE1IDAuMDI0MjIzNCAwLjk0MDMyNQ0KdnQgMC4yNTY0NTggMC44NzUNCnYgMi42MzkzNCA1LjI4NTk3IDYuMzEzNTMNCnZuIDAuMzM5NDE1IDAuMDI0MjIzNCAwLjk0MDMyNQ0KdnQgMC4yMTA0NjEgMC42NDU1MjcNCnYgMyA1LjQ2NTkyIDYuMTU2Mg0Kdm4gMC4zNzY5NTYgMC4wNTI5ODA5IDAuOTI0NzE1DQp2dCAxIDENCnYgMyA1LjUxNTEgNC4zODExDQp2biAwLjQ3Nzc4NyAtMC44NzgzNDggLTAuMDE0OTczNg0KdnQgMCAwDQp2IDMgNS40NjU5MiA2LjE1NjINCnZuIDAuNDc3Nzg3IC0wLjg3ODM0OCAtMC4wMTQ5NzM2DQp2dCAwLjkxNDExIDANCnYgMi42NjMzMiA1LjMwODY3IDQuNjM3MzgNCnZuIC0wLjUyMzQzMyAtMC4wMzUzNTExIC0wLjg1MTMzMw0KdnQgMC40ODI1OTMgMC40Mjc4Nw0KdiAyLjUgNS40OTc0MyA0LjcyOTk2DQp2biAtMC41MjM0MzMgLTAuMDM1MzUxMSAtMC44NTEzMzMNCnZ0IDAuODMzMzMzIDAuMTY2NjY3DQp2IDMgNS41MTUxIDQuMzgxMQ0Kdm4gLTAuNTY3NzQ4IC0wLjA4OTkwNTkgLTAuODE4Mjc4DQp2dCAxIDENCnYgMi40OTg1IDQuOTUyNjEgNi4zNTYzOA0Kdm4gMC4zMDEwMzIgLTAuMDA0NTk0MjQgMC45NTM2MDMNCnZ0IDAuMDA2NDU3NSAwDQp2IDIuNSA1LjQ5NzQzIDQuNzI5OTYNCnZuIC0wLjUyMzQzMyAtMC4wMzUzNTExIC0wLjg1MTMzMw0KdnQgMCAwDQp2IDIuNjYzMzIgNS4zMDg2NyA0LjYzNzM4DQp2biAtMC41MjM0MzMgLTAuMDM1MzUxMSAtMC44NTEzMzMNCnZ0IDAuNjgyMjI4IDANCnYgMi40Nzc1NSA0Ljk0NzA3IDQuNzI5OTYNCnZuIC0wLjQ3NTk2IDAuMDE5NDE2OSAtMC44NzkyNTMNCnZ0IDEgMC45OTQ1NjcNCnYgMi45MzU4OCAzLjk1NTUgLTMuNTg1OTINCnZuIDAuNTIzMzQ2IC0wLjc2NTAzIC0wLjM3NTI4NA0KdnQgMCAwDQp2IDMuOTk3OTMgMy45NTU3IC0xLjkzMDE4DQp2biAwLjYyNSAtMC43MjE3OTkgLTAuMjk3MjkxDQp2dCAwLjgzNjE0NCAwDQp2IDEuNzUgMi45NDUyNSAtMy4wMzEwOQ0Kdm4gMC4zOTcwMTMgLTAuNzgyNTk1IC0wLjQ3OTUwNQ0KdnQgMC4xODM5NiAxDQp2IDMuMTI0NzEgMi45NDU3NSAtMS41MTQ5Mg0Kdm4gMC42MjUgLTAuNzIxNzk5IC0wLjI5NzI5MQ0KdnQgMC44MzM1OTIgMC45MjQ5NTINCnYgMy45OTc5MyAzLjk1NTcgMS45MzAxOA0Kdm4gMC42MjUgLTAuNzIxNzk5IDAuMjk3MjkxDQp2dCAwIDANCnYgMi45MzU4OCAzLjk1NTUgMy41ODU5Mg0Kdm4gMC41MjMzNDYgLTAuNzY1MDMgMC4zNzUyODQNCnZ0IDAuODQ0MTkzIDANCnYgMy4xMjQ3MSAyLjk0NTc1IDEuNTE0OTINCnZuIDAuNjI1IC0wLjcyMTc5OSAwLjI5NzI5MQ0KdnQgMC4wMDI1NzY2MSAwLjkxMDEzOQ0KdiAxLjc1IDIuOTQ1MjUgMy4wMzEwOQ0Kdm4gMC4zOTcwMTMgLTAuNzgyNTk1IDAuNDc5NTA1DQp2dCAwLjY1ODQ2MSAxDQp2IC0yLjkzNTg4IDMuOTU1NSAzLjU4NTkyDQp2biAtMC41MjMzNDYgLTAuNzY1MDMgMC4zNzUyODQNCnZ0IDAgMA0KdiAtMy45OTc5MyAzLjk1NTcgMS45MzAxOA0Kdm4gLTAuNjI1IC0wLjcyMTc5OSAwLjI5NzI5MQ0KdnQgMC44NDQxOTMgMA0KdiAtMS43NSAyLjk0NTI1IDMuMDMxMDkNCnZuIC0wLjM5NzAxMyAtMC43ODI1OTUgMC40Nzk1MDUNCnZ0IDAuMTg1NzMxIDENCnYgLTMuMTI0NzEgMi45NDU3NSAxLjUxNDkyDQp2biAtMC42MjUgLTAuNzIxNzk5IDAuMjk3MjkxDQp2dCAwLjg0MTYxNiAwLjkxMDEzOQ0KdiAtMy45OTc5MyAzLjk1NTcgLTEuOTMwMTgNCnZuIC0wLjYyNSAtMC43MjE3OTkgLTAuMjk3MjkxDQp2dCAwIDANCnYgLTIuOTM1ODggMy45NTU1IC0zLjU4NTkyDQp2biAtMC41MjMzNDYgLTAuNzY1MDMgLTAuMzc1Mjg0DQp2dCAwLjgzNjE0NCAwDQp2IC0zLjEyNDcxIDIuOTQ1NzUgLTEuNTE0OTINCnZuIC0wLjYyNSAtMC43MjE3OTkgLTAuMjk3MjkxDQp2dCAwLjAwMjU1MjA1IDAuOTI0OTUyDQp2IC0xLjc1IDIuOTQ1MjUgLTMuMDMxMDkNCnZuIC0wLjM5NzAxMyAtMC43ODI1OTUgLTAuNDc5NTA1DQp2dCAwLjY1MjE4MyAxDQp2IC0zLjgxMjg2IDYuNDUzNjMgLTMuNzUyOTUNCnZuIDAuNzUxODc3IC0wLjAwMjIxNzIyIDAuNjU5Mw0KdnQgMC4zMzMzMzMgMC4yNzA4NDQNCnYgLTUuMDg5MTMgNy40NTM2MyAtMS45NDQ5MQ0Kdm4gMC44ODQ1MTggLTAuMDU2Nzc3MyAwLjQ2MzAzOA0KdnQgMC42NjY2NjcgMC41OTUwNDkNCnYgLTUuMDg5MTMgNS40NTM2NCAtMS45NDQ5MQ0Kdm4gMC44MTY5NzIgLTIuNjA2NjlFLTA1IDAuNTc2Njc4DQp2dCAwIDAuNDkxMTI2DQp2IDMuODEyODYgNi40NTM2MyAzLjc1Mjk1DQp2biAtMC43NTc5MjcgLTAuMDAxNDc0MTIgLTAuNjUyMzM4DQp2dCAwLjMzMzMzMyAwLjI3MDg0NA0KdiA0Ljk4NDY4IDcuNDUzNjMgMi4wNDc5Mg0Kdm4gLTAuODgyMzc1IC0wLjA1MDkzNDYgLTAuNDY3NzgzDQp2dCAwLjY2NjY2NyAwLjU5NTA0OQ0KdiA0Ljk4NDY4IDUuNDUzNjQgMi4wNDc5Mg0Kdm4gLTAuODI0MTM1IC0yLjM1MDUzRS0wNSAtMC41NjYzOTMNCnZ0IDAgMC40OTExMjYNCnYgLTMuMTI0NzEgMi45NDU3NSAtMS41MTQ5Mg0Kdm4gLTAuNjI1IC0wLjcyMTc5OSAtMC4yOTcyOTENCnZ0IDAuMTEyNjYyIDANCnYgLTMuNSAyLjk0NTI1IDANCnZuIC0wLjcxNDg4MiAtMC42OTkyNDUgMA0KdnQgMC44NDYxNDEgMA0KdiAtMy45OTc5MyAzLjk1NTcgLTEuOTMwMTgNCnZuIC0wLjYyNSAtMC43MjE3OTkgLTAuMjk3MjkxDQp2dCAwIDAuOTkxNTY5DQp2IC00LjQ5NzQ3IDMuOTU1NyAwDQp2biAtMC43MTQ4ODIgLTAuNjk5MjQ1IDANCnZ0IDAuOTMwODA4IDENCnYgLTEuNjkxMjEgNS4wNjU5OCAtMi40NzkNCnZuIDAuMzU5MzA4IDAuNzY1NjE0IDAuNTMzNjA0DQp2dCAwLjE5MDg5NSAwDQp2IC0xLjk3MjUgNS40ODUzNyAtMi44OTEzMg0Kdm4gMC4zNTkzMDggMC43NjU2MTQgMC41MzM2MDQNCnZ0IDAuNTYxOTEyIDANCnYgLTIuNjY2ODkgNS4wNjU5NyAtMS4yODMwMg0Kdm4gMC41NzgyNjkgMC43NjExMTEgMC4yOTM3OTUNCnZ0IDAgMC44NTczOTENCnYgLTMuMTEwNDYgNS40ODUzNyAtMS40OTY0Mg0Kdm4gMC41NzgyNjkgMC43NjExMTEgMC4yOTM3OTUNCnZ0IDAuMzM5MjY5IDENCnYgMi4wOTk0MiAzLjY2NTk1IC0xLjIxMjENCnZuIC0wLjcyMDUwMSAwLjU3Mzg4MSAwLjM4OTI4MQ0KdnQgMCAwLjI1DQp2IDIuNjY1MDggNC40NzQ2NyAtMS4yODUNCnZuIC0wLjcyMDUwMSAwLjU3Mzg4MSAwLjM4OTI4MQ0KdnQgMCAwLjMzMzMzMw0KdiAxLjIxMjEgMy42NjU5NSAtMi4wOTk0Mg0Kdm4gLTAuNDM5Nzc1IDAuNTY0ODYxIDAuNjk4MjMzDQp2dCAwLjA4MzMzMzMgMC4yNQ0KdiAxLjY5OTEzIDQuNDc0NjcgLTIuNDcxNzgNCnZuIC0wLjQzOTc3NSAwLjU2NDg2MSAwLjY5ODIzMw0KdnQgMC4wODMzMzMzIDAuMzMzMzMzDQp2IDAgMy42NjU5NSAtMi40MjQyDQp2biAwIDAuNTU5NTMgMC44Mjg4MQ0KdnQgMC4xNjY2NjcgMC4yNQ0KdiAwIDQuNDc0NjcgLTMuMDAwOTMNCnZuIDAgMC41NTk1MyAwLjgyODgxDQp2dCAwLjE2NjY2NyAwLjMzMzMzMw0KdiAtMS4yMTIxIDMuNjY1OTUgLTIuMDk5NDINCnZuIDAuNDM5NzgxIDAuNTY0ODU3IDAuNjk4MjMzDQp2dCAwLjI1IDAuMjUNCnYgLTEuNjk5MTMgNC40NzQ2NyAtMi40NzE3OA0Kdm4gMC40Mzk3ODEgMC41NjQ4NTcgMC42OTgyMzMNCnZ0IDAuMjUgMC4zMzMzMzMNCnYgLTIuMDk5NDIgMy42NjU5NSAtMS4yMTIxDQp2biAwLjcyMDU4NyAwLjU3MzYyMyAwLjM4OTUwMQ0KdnQgMC4zMzMzMzMgMC4yNQ0KdiAtMi42NjMyOCA0LjQ3NDY3IC0xLjI4Njk3DQp2biAwLjcyMDU4NyAwLjU3MzYyMyAwLjM4OTUwMQ0KdnQgMC4zMzMzMzMgMC4zMzMzMzMNCnYgLTIuNDI0MiAzLjY2NTk1IDANCnZuIDAuODEyNDU5IDAuNTgzMDE4IDkuMzgzMzFFLTA1DQp2dCAwLjQxNjY2NyAwLjI1DQp2IC0zLjAwMDkzIDQuNDc0NjcgMA0Kdm4gMC44MTI0NTkgMC41ODMwMTggOS4zODMzMUUtMDUNCnZ0IDAuNDE2NjY3IDAuMzMzMzMzDQp2IC0yLjA5OTQyIDMuNjY1OTUgMS4yMTIxDQp2biAwLjcyMDQ2NCAwLjU3Mzg5MSAtMC4zODkzMzQNCnZ0IDAuNSAwLjI1DQp2IC0yLjY2MzI4IDQuNDczOTYgMS4yODY5OA0Kdm4gMC43MjA0NjQgMC41NzM4OTEgLTAuMzg5MzM0DQp2dCAwLjUgMC4zMzMzMzMNCnYgLTEuMjEyMSAzLjY2NTk1IDIuMDk5NDINCnZuIDAuNDM5NjE5IDAuNTY1MTE0IC0wLjY5ODEyNw0KdnQgMC41ODMzMzMgMC4yNQ0KdiAtMS42OTkxMyA0LjQ3Mzk2IDIuNDcxNzgNCnZuIDAuNDM5NjE5IDAuNTY1MTE0IC0wLjY5ODEyNw0KdnQgMC41ODMzMzMgMC4zMzMzMzMNCnYgMCAzLjY2NTk1IDIuNDI0Mg0Kdm4gLTcuNzUyNTZFLTA1IDAuNTU5NjAxIC0wLjgyODc2Mg0KdnQgMC42NjY2NjcgMC4yNQ0KdiAwIDQuNDc0NjcgMy4wMDA5Mw0Kdm4gLTcuNzUyNTZFLTA1IDAuNTU5NjAxIC0wLjgyODc2Mg0KdnQgMC42NjY2NjcgMC4zMzMzMzMNCnYgMS4yMTIxIDMuNjY1OTUgMi4wOTk0Mg0Kdm4gLTAuNDM5NzgxIDAuNTY0ODU3IC0wLjY5ODIzMw0KdnQgMC43NSAwLjI1DQp2IDEuNjk5MTMgNC40NzQ2NyAyLjQ3MTc4DQp2biAtMC40Mzk3ODEgMC41NjQ4NTcgLTAuNjk4MjMzDQp2dCAwLjc1IDAuMzMzMzMzDQp2IDIuMDk5NDIgMy42NjU5NSAxLjIxMjENCnZuIC0wLjcyMDU4NyAwLjU3MzYyMiAtMC4zODk1MDINCnZ0IDAuODMzMzMzIDAuMjUNCnYgMi42NjMyOCA0LjQ3NDY3IDEuMjg2OTgNCnZuIC0wLjcyMDU4NyAwLjU3MzYyMiAtMC4zODk1MDINCnZ0IDAuODMzMzMzIDAuMzMzMzMzDQp2IDIuNDI0MjEgMy42NjU5NSAwDQp2biAtMC44MTIzNyAwLjU4MzE0MiAtMC4wMDAyMzY0MjgNCnZ0IDAuOTE2NjY3IDAuMjUNCnYgMy4wMDA5MyA0LjQ3NDY3IDANCnZuIC0wLjgxMjM3IDAuNTgzMTQyIC0wLjAwMDIzNjQyOA0KdnQgMC45MTY2NjcgMC4zMzMzMzMNCnYgMi4wOTk0MiAzLjY2NTk1IC0xLjIxMjENCnZuIC0wLjcyMDUwMSAwLjU3Mzg4MSAwLjM4OTI4MQ0KdnQgMSAwLjI1DQp2IDIuNjY1MDggNC40NzQ2NyAtMS4yODUNCnZuIC0wLjcyMDUwMSAwLjU3Mzg4MSAwLjM4OTI4MQ0KdnQgMSAwLjMzMzMzMw0KdiAxLjIxMjEgMy42NjU5NSAtMi4wOTk0Mg0Kdm4gLTAuMjY0NjggMC44NDgzOTcgMC40NTg0MzkNCnZ0IDAuMDgzMzMzMyAwLjI1DQp2IDAuNzUzMjU3IDMuMDkzMzUgLTEuMzA0NjgNCnZuIC0wLjI2NDY4IDAuODQ4Mzk3IDAuNDU4NDM5DQp2dCAwIDENCnYgMi4wOTk0MiAzLjY2NTk1IC0xLjIxMjENCnZuIC0wLjQ1ODQzOSAwLjg0ODM5OCAwLjI2NDY4DQp2dCAwIDAuMjUNCnYgMS4zMDQ2OCAzLjA5MzM1IC0wLjc1MzI1Nw0Kdm4gLTAuNDU4NDM5IDAuODQ4Mzk4IDAuMjY0NjgNCnZ0IDEgMQ0KdiAwIDMuNjY1OTUgLTIuNDI0Mg0Kdm4gMCAwLjg0ODM5OCAwLjUyOTM2DQp2dCAwLjE2NjY2NyAwLjI1DQp2IDAgMy4wOTMzNSAtMS41MDY1MQ0Kdm4gMCAwLjg0ODM5OCAwLjUyOTM2DQp2dCAwIDENCnYgMC43NTMyNTcgMy4wOTMzNSAtMS4zMDQ2OA0Kdm4gLTAuMjY0NjggMC44NDgzOTcgMC40NTg0MzkNCnZ0IDEgMQ0KdiAtMS4yMTIxIDMuNjY1OTUgLTIuMDk5NDINCnZuIDAuMjY0NjggMC44NDgzOTcgMC40NTg0MzkNCnZ0IDAuMjUgMC4yNQ0KdiAtMC43NTMyNTcgMy4wOTMzNSAtMS4zMDQ2OA0Kdm4gMC4yNjQ2OCAwLjg0ODM5NyAwLjQ1ODQzOQ0KdnQgMCAxDQp2IDAgMy4wOTMzNSAtMS41MDY1MQ0Kdm4gMCAwLjg0ODM5OCAwLjUyOTM2DQp2dCAxIDENCnYgLTIuMDk5NDIgMy42NjU5NSAtMS4yMTIxDQp2biAwLjQ1ODQzOSAwLjg0ODM5NyAwLjI2NDY4DQp2dCAwLjMzMzMzMyAwLjI1DQp2IC0xLjMwNDY4IDMuMDkzMzUgLTAuNzUzMjU3DQp2biAwLjQ1ODQzOSAwLjg0ODM5NyAwLjI2NDY4DQp2dCAwIDENCnYgLTAuNzUzMjU3IDMuMDkzMzUgLTEuMzA0NjgNCnZuIDAuMjY0NjggMC44NDgzOTcgMC40NTg0MzkNCnZ0IDEgMQ0KdiAtMi40MjQyIDMuNjY1OTUgMA0Kdm4gMC41MjkzNiAwLjg0ODM5NyAwDQp2dCAwLjQxNjY2NyAwLjI1DQp2IC0xLjUwNjUxIDMuMDkzMzUgMA0Kdm4gMC41MjkzNiAwLjg0ODM5NyAwDQp2dCAwIDENCnYgLTEuMzA0NjggMy4wOTMzNSAtMC43NTMyNTcNCnZuIDAuNDU4NDM5IDAuODQ4Mzk3IDAuMjY0NjgNCnZ0IDEgMQ0KdiAtMi4wOTk0MiAzLjY2NTk1IDEuMjEyMQ0Kdm4gMC40NTg0MzkgMC44NDgzOTcgLTAuMjY0NjgNCnZ0IDAuNSAwLjI1DQp2IC0xLjMwNDY4IDMuMDkzMzUgMC43NTMyNTcNCnZuIDAuNDU4NDM5IDAuODQ4Mzk3IC0wLjI2NDY4DQp2dCAwIDENCnYgLTEuNTA2NTEgMy4wOTMzNSAwDQp2biAwLjUyOTM2IDAuODQ4Mzk3IDANCnZ0IDEgMQ0KdiAtMS4yMTIxIDMuNjY1OTUgMi4wOTk0Mg0Kdm4gMC4yNjQ2OCAwLjg0ODM5NyAtMC40NTg0MzkNCnZ0IDAuNTgzMzMzIDAuMjUNCnYgLTAuNzUzMjU3IDMuMDkzMzUgMS4zMDQ2OA0Kdm4gMC4yNjQ2OCAwLjg0ODM5NyAtMC40NTg0MzkNCnZ0IDAgMQ0KdiAtMS4zMDQ2OCAzLjA5MzM1IDAuNzUzMjU3DQp2biAwLjQ1ODQzOSAwLjg0ODM5NyAtMC4yNjQ2OA0KdnQgMSAxDQp2IDAgMy42NjU5NSAyLjQyNDINCnZuIDAgMC44NDgzOTcgLTAuNTI5MzYNCnZ0IDAuNjY2NjY3IDAuMjUNCnYgMCAzLjA5MzM1IDEuNTA2NTENCnZuIDAgMC44NDgzOTcgLTAuNTI5MzYNCnZ0IDAgMQ0KdiAtMC43NTMyNTcgMy4wOTMzNSAxLjMwNDY4DQp2biAwLjI2NDY4IDAuODQ4Mzk3IC0wLjQ1ODQzOQ0KdnQgMSAxDQp2IDEuMjEyMSAzLjY2NTk1IDIuMDk5NDINCnZuIC0wLjI2NDY4IDAuODQ4Mzk3IC0wLjQ1ODQzOQ0KdnQgMC43NSAwLjI1DQp2IDAuNzUzMjU3IDMuMDkzMzUgMS4zMDQ2OA0Kdm4gLTAuMjY0NjggMC44NDgzOTcgLTAuNDU4NDM5DQp2dCAwIDENCnYgMCAzLjA5MzM1IDEuNTA2NTENCnZuIDAgMC44NDgzOTcgLTAuNTI5MzYNCnZ0IDEgMQ0KdiAyLjA5OTQyIDMuNjY1OTUgMS4yMTIxDQp2biAtMC40NTg0MzkgMC44NDgzOTggLTAuMjY0NjgNCnZ0IDAuODMzMzMzIDAuMjUNCnYgMS4zMDQ2OCAzLjA5MzM1IDAuNzUzMjU3DQp2biAtMC40NTg0MzkgMC44NDgzOTggLTAuMjY0NjgNCnZ0IDAgMQ0KdiAwLjc1MzI1NyAzLjA5MzM1IDEuMzA0NjgNCnZuIC0wLjI2NDY4IDAuODQ4Mzk3IC0wLjQ1ODQzOQ0KdnQgMSAxDQp2IDIuNDI0MjEgMy42NjU5NSAwDQp2biAtMC41MjkzNTkgMC44NDgzOTggMA0KdnQgMC45MTY2NjcgMC4yNQ0KdiAxLjUwNjUxIDMuMDkzMzUgMA0Kdm4gLTAuNTI5MzU5IDAuODQ4Mzk4IDANCnZ0IDAgMQ0KdiAxLjMwNDY4IDMuMDkzMzUgMC43NTMyNTcNCnZuIC0wLjQ1ODQzOSAwLjg0ODM5OCAtMC4yNjQ2OA0KdnQgMSAxDQp2IDIuMDk5NDIgMy42NjU5NSAtMS4yMTIxDQp2biAtMC40NTg0MzkgMC44NDgzOTggMC4yNjQ2OA0KdnQgMSAwLjI1DQp2IDEuMzA0NjggMy4wOTMzNSAtMC43NTMyNTcNCnZuIC0wLjQ1ODQzOSAwLjg0ODM5OCAwLjI2NDY4DQp2dCAwIDENCnYgMS41MDY1MSAzLjA5MzM1IDANCnZuIC0wLjUyOTM1OSAwLjg0ODM5OCAwDQp2dCAxIDENCnYgMC4zNzc3NzEgMS43NTY5NCAtMC42NTQzMTkNCnZuIC0wLjI0OTExNiAwLjg2NzA0NCAwLjQzMTQ4MQ0KdnQgMC4wODMzMzMzIDAuMTY2NjY3DQp2IDAuNjU0MzE5IDEuNzU2OTQgLTAuMzc3NzcxDQp2biAtMC40MzE0ODEgMC44NjcwNDQgMC4yNDkxMTYNCnZ0IDAgMC4xNjY2NjcNCnYgMC42NTQzMTkgMi4zMTAwNCAtMS4xMzMzMQ0Kdm4gLTAuNDM0Mjg1IDAuNDk1NTY3IDAuNzUyMjAzDQp2dCAwLjA4MzMzMzMgMC4zMzMzMzMNCnYgMS4xMzMzMSAyLjMxMDA0IC0wLjY1NDMxOQ0Kdm4gLTAuNzUyMjAzIDAuNDk1NTY3IDAuNDM0Mjg1DQp2dCAwIDAuMzMzMzMzDQp2IDAgMS43NTY5NCAtMC43NTU1NDMNCnZuIDAgMC44NjcwNDQgMC40OTgyMzENCnZ0IDAuMTY2NjY3IDAuMTY2NjY3DQp2IDAgMi4zMTAwNCAtMS4zMDg2NA0Kdm4gMCAwLjQ5NTU2NyAwLjg2ODU2OQ0KdnQgMC4xNjY2NjcgMC4zMzMzMzMNCnYgLTAuMzc3NzcxIDEuNzU2OTQgLTAuNjU0MzE5DQp2biAwLjI0OTExNiAwLjg2NzA0NCAwLjQzMTQ4MQ0KdnQgMC4yNSAwLjE2NjY2Nw0KdiAtMC42NTQzMTkgMi4zMTAwNCAtMS4xMzMzMQ0Kdm4gMC40MzQyODUgMC40OTU1NjcgMC43NTIyMDMNCnZ0IDAuMjUgMC4zMzMzMzMNCnYgLTAuNjU0MzE5IDEuNzU2OTQgLTAuMzc3NzcxDQp2biAwLjQzMTQ4MSAwLjg2NzA0NCAwLjI0OTExNg0KdnQgMC4zMzMzMzMgMC4xNjY2NjcNCnYgLTEuMTMzMzEgMi4zMTAwNCAtMC42NTQzMTkNCnZuIDAuNzUyMjAzIDAuNDk1NTY3IDAuNDM0Mjg1DQp2dCAwLjMzMzMzMyAwLjMzMzMzMw0KdiAtMC43NTU1NDMgMS43NTY5NCAwDQp2biAwLjQ5ODIzMSAwLjg2NzA0NCAwDQp2dCAwLjQxNjY2NyAwLjE2NjY2Nw0KdiAtMS4zMDg2NCAyLjMxMDA0IDANCnZuIDAuODY4NTY5IDAuNDk1NTY3IDANCnZ0IDAuNDE2NjY3IDAuMzMzMzMzDQp2IC0wLjY1NDMxOSAxLjc1Njk0IDAuMzc3NzcxDQp2biAwLjQzMTQ4MSAwLjg2NzA0NCAtMC4yNDkxMTUNCnZ0IDAuNSAwLjE2NjY2Nw0KdiAtMS4xMzMzMSAyLjMxMDA0IDAuNjU0MzE5DQp2biAwLjc1MjIwMyAwLjQ5NTU2NyAtMC40MzQyODUNCnZ0IDAuNSAwLjMzMzMzMw0KdiAtMC4zNzc3NzEgMS43NTY5NCAwLjY1NDMxOQ0Kdm4gMC4yNDkxMTYgMC44NjcwNDQgLTAuNDMxNDgxDQp2dCAwLjU4MzMzMyAwLjE2NjY2Nw0KdiAtMC42NTQzMTkgMi4zMTAwNCAxLjEzMzMxDQp2biAwLjQzNDI4NSAwLjQ5NTU2NyAtMC43NTIyMDMNCnZ0IDAuNTgzMzMzIDAuMzMzMzMzDQp2IDAgMS43NTY5NCAwLjc1NTU0Mw0Kdm4gMCAwLjg2NzA0NCAtMC40OTgyMzENCnZ0IDAuNjY2NjY3IDAuMTY2NjY3DQp2IDAgMi4zMTAwNCAxLjMwODY0DQp2biAwIDAuNDk1NTY3IC0wLjg2ODU2OQ0KdnQgMC42NjY2NjcgMC4zMzMzMzMNCnYgMC4zNzc3NzEgMS43NTY5NCAwLjY1NDMxOQ0Kdm4gLTAuMjQ5MTE1IDAuODY3MDQ0IC0wLjQzMTQ4MQ0KdnQgMC43NSAwLjE2NjY2Nw0KdiAwLjY1NDMxOSAyLjMxMDA0IDEuMTMzMzENCnZuIC0wLjQzNDI4NSAwLjQ5NTU2NyAtMC43NTIyMDMNCnZ0IDAuNzUgMC4zMzMzMzMNCnYgMC42NTQzMTkgMS43NTY5NCAwLjM3Nzc3MQ0Kdm4gLTAuNDMxNDgxIDAuODY3MDQ0IC0wLjI0OTExNg0KdnQgMC44MzMzMzMgMC4xNjY2NjcNCnYgMS4xMzMzMSAyLjMxMDA0IDAuNjU0MzE5DQp2biAtMC43NTIyMDMgMC40OTU1NjggLTAuNDM0Mjg1DQp2dCAwLjgzMzMzMyAwLjMzMzMzMw0KdiAwLjc1NTU0MyAxLjc1Njk0IDANCnZuIC0wLjQ5ODIzMSAwLjg2NzA0NCAwDQp2dCAwLjkxNjY2NyAwLjE2NjY2Nw0KdiAxLjMwODY0IDIuMzEwMDQgMA0Kdm4gLTAuODY4NTY5IDAuNDk1NTY4IDANCnZ0IDAuOTE2NjY3IDAuMzMzMzMzDQp2IDAuNjU0MzE5IDEuNzU2OTQgLTAuMzc3NzcxDQp2biAtMC40MzE0ODEgMC44NjcwNDQgMC4yNDkxMTYNCnZ0IDEgMC4xNjY2NjcNCnYgMS4xMzMzMSAyLjMxMDA0IC0wLjY1NDMxOQ0Kdm4gLTAuNzUyMjAzIDAuNDk1NTY3IDAuNDM0Mjg1DQp2dCAxIDAuMzMzMzMzDQp2IDAuNzUzMjU3IDMuMDkzMzUgLTEuMzA0NjgNCnZuIC0wLjQ4NDc3MiAwLjI0NDkyIDAuODM5NjQ5DQp2dCAwLjA4MzMzMzMgMC41DQp2IDEuMzA0NjggMy4wOTMzNSAtMC43NTMyNTcNCnZuIC0wLjgzOTY0OSAwLjI0NDkyIDAuNDg0NzcyDQp2dCAwIDAuNQ0KdiAwIDMuMDkzMzUgLTEuNTA2NTENCnZuIDAgMC4yNDQ5MiAwLjk2OTU0Mw0KdnQgMC4xNjY2NjcgMC41DQp2IC0wLjc1MzI1NyAzLjA5MzM1IC0xLjMwNDY4DQp2biAwLjQ4NDc3MiAwLjI0NDkyIDAuODM5NjQ5DQp2dCAwLjI1IDAuNQ0KdiAtMS4zMDQ2OCAzLjA5MzM1IC0wLjc1MzI1Nw0Kdm4gMC44Mzk2NDkgMC4yNDQ5MiAwLjQ4NDc3Mg0KdnQgMC4zMzMzMzMgMC41DQp2IC0xLjUwNjUxIDMuMDkzMzUgMA0Kdm4gMC45Njk1NDMgMC4yNDQ5MiAwDQp2dCAwLjQxNjY2NyAwLjUNCnYgLTEuMzA0NjggMy4wOTMzNSAwLjc1MzI1Nw0Kdm4gMC44Mzk2NDkgMC4yNDQ5MiAtMC40ODQ3NzINCnZ0IDAuNSAwLjUNCnYgLTAuNzUzMjU3IDMuMDkzMzUgMS4zMDQ2OA0Kdm4gMC40ODQ3NzIgMC4yNDQ5MiAtMC44Mzk2NDkNCnZ0IDAuNTgzMzMzIDAuNQ0KdiAwIDMuMDkzMzUgMS41MDY1MQ0Kdm4gMCAwLjI0NDkyIC0wLjk2OTU0Mw0KdnQgMC42NjY2NjcgMC41DQp2IDAuNzUzMjU3IDMuMDkzMzUgMS4zMDQ2OA0Kdm4gLTAuNDg0NzcyIDAuMjQ0OTIgLTAuODM5NjQ5DQp2dCAwLjc1IDAuNQ0KdiAxLjMwNDY4IDMuMDkzMzUgMC43NTMyNTcNCnZuIC0wLjgzOTY0OSAwLjI0NDkyIC0wLjQ4NDc3Mg0KdnQgMC44MzMzMzMgMC41DQp2IDEuNTA2NTEgMy4wOTMzNSAwDQp2biAtMC45Njk1NDMgMC4yNDQ5MiAwDQp2dCAwLjkxNjY2NyAwLjUNCnYgMS4zMDQ2OCAzLjA5MzM1IC0wLjc1MzI1Nw0Kdm4gLTAuODM5NjQ5IDAuMjQ0OTIgMC40ODQ3NzINCnZ0IDEgMC41DQp2IDAuMzc3NzcxIDEuNzU2OTQgLTAuNjU0MzE5DQp2biAtMC4yNDkxMTYgMC44NjcwNDQgMC40MzE0ODENCnZ0IDAuMDgzMzMzMyAwLjE2NjY2Nw0KdiAwIDEuNTU0NSAwDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuMDQxNjY2NyAwDQp2IDAuNjU0MzE5IDEuNzU2OTQgLTAuMzc3NzcxDQp2biAtMC40MzE0ODEgMC44NjcwNDQgMC4yNDkxMTYNCnZ0IDAgMC4xNjY2NjcNCnYgMCAxLjc1Njk0IC0wLjc1NTU0Mw0Kdm4gMCAwLjg2NzA0NCAwLjQ5ODIzMQ0KdnQgMC4xNjY2NjcgMC4xNjY2NjcNCnYgMCAxLjU1NDUgMA0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjEyNSAwDQp2IC0wLjM3Nzc3MSAxLjc1Njk0IC0wLjY1NDMxOQ0Kdm4gMC4yNDkxMTYgMC44NjcwNDQgMC40MzE0ODENCnZ0IDAuMjUgMC4xNjY2NjcNCnYgMCAxLjU1NDUgMA0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjIwODMzMyAwDQp2IC0wLjY1NDMxOSAxLjc1Njk0IC0wLjM3Nzc3MQ0Kdm4gMC40MzE0ODEgMC44NjcwNDQgMC4yNDkxMTYNCnZ0IDAuMzMzMzMzIDAuMTY2NjY3DQp2IDAgMS41NTQ1IDANCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC4yOTE2NjcgMA0KdiAtMC43NTU1NDMgMS43NTY5NCAwDQp2biAwLjQ5ODIzMSAwLjg2NzA0NCAwDQp2dCAwLjQxNjY2NyAwLjE2NjY2Nw0KdiAwIDEuNTU0NSAwDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuMzc1IDANCnYgLTAuNjU0MzE5IDEuNzU2OTQgMC4zNzc3NzENCnZuIDAuNDMxNDgxIDAuODY3MDQ0IC0wLjI0OTExNQ0KdnQgMC41IDAuMTY2NjY3DQp2IDAgMS41NTQ1IDANCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC40NTgzMzMgMA0KdiAtMC4zNzc3NzEgMS43NTY5NCAwLjY1NDMxOQ0Kdm4gMC4yNDkxMTYgMC44NjcwNDQgLTAuNDMxNDgxDQp2dCAwLjU4MzMzMyAwLjE2NjY2Nw0KdiAwIDEuNTU0NSAwDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuNTQxNjY3IDANCnYgMCAxLjc1Njk0IDAuNzU1NTQzDQp2biAwIDAuODY3MDQ0IC0wLjQ5ODIzMQ0KdnQgMC42NjY2NjcgMC4xNjY2NjcNCnYgMCAxLjU1NDUgMA0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjYyNSAwDQp2IDAuMzc3NzcxIDEuNzU2OTQgMC42NTQzMTkNCnZuIC0wLjI0OTExNSAwLjg2NzA0NCAtMC40MzE0ODENCnZ0IDAuNzUgMC4xNjY2NjcNCnYgMCAxLjU1NDUgMA0Kdm4gMCAxIDEuODcxODhFLTA2DQp2dCAwLjcwODMzMyAwDQp2IDAuNjU0MzE5IDEuNzU2OTQgMC4zNzc3NzENCnZuIC0wLjQzMTQ4MSAwLjg2NzA0NCAtMC4yNDkxMTYNCnZ0IDAuODMzMzMzIDAuMTY2NjY3DQp2IDAgMS41NTQ1IDANCnZuIDAgMSAxLjg3MTg4RS0wNg0KdnQgMC43OTE2NjcgMA0KdiAwLjc1NTU0MyAxLjc1Njk0IDANCnZuIC0wLjQ5ODIzMSAwLjg2NzA0NCAwDQp2dCAwLjkxNjY2NyAwLjE2NjY2Nw0KdiAwIDEuNTU0NSAwDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuODc1IDANCnYgMC42NTQzMTkgMS43NTY5NCAtMC4zNzc3NzENCnZuIC0wLjQzMTQ4MSAwLjg2NzA0NCAwLjI0OTExNg0KdnQgMSAwLjE2NjY2Nw0KdiAwIDEuNTU0NSAwDQp2biAwIDEgMS44NzE4OEUtMDYNCnZ0IDAuOTU4MzMzIDANCnYgMC43NTEwNDUgMC40MDc3NTUgLTEuMzAwODUNCnZuIDAuMjQ5MTE2IC0wLjg2NzA0NCAtMC40MzE0ODENCnZ0IDAuMDgzMzMzMyAwLjE2NjY2Nw0KdiAxLjMwMDg1IDAuNDA3NzU1IC0wLjc1MTA0NQ0Kdm4gMC40MzE0ODEgLTAuODY3MDQ0IC0wLjI0OTExNg0KdnQgMCAwLjE2NjY2Nw0KdiAwIDAuMDA1MjcxOTEgMA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuMDQxNjY2NyAwDQp2IDAgMC40MDc3NTUgLTEuNTAyMDkNCnZuIDAgLTAuODY3MDQ0IC0wLjQ5ODIzMQ0KdnQgMC4xNjY2NjcgMC4xNjY2NjcNCnYgMCAwLjAwNTI3MTkxIDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjEyNSAwDQp2IC0wLjc1MTA0NSAwLjQwNzc1NSAtMS4zMDA4NQ0Kdm4gLTAuMjQ5MTE2IC0wLjg2NzA0NCAtMC40MzE0ODENCnZ0IDAuMjUgMC4xNjY2NjcNCnYgMCAwLjAwNTI3MTkxIDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjIwODMzMyAwDQp2IC0xLjMwMDg1IDAuNDA3NzU1IC0wLjc1MTA0NQ0Kdm4gLTAuNDMxNDgxIC0wLjg2NzA0NCAtMC4yNDkxMTYNCnZ0IDAuMzMzMzMzIDAuMTY2NjY3DQp2IDAgMC4wMDUyNzE5MSAwDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4yOTE2NjcgMA0KdiAtMS41MDIwOSAwLjQwNzc1NSAwDQp2biAtMC40OTgyMzEgLTAuODY3MDQ0IDANCnZ0IDAuNDE2NjY3IDAuMTY2NjY3DQp2IDAgMC4wMDUyNzE5MSAwDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC4zNzUgMA0KdiAtMS4zMDA4NSAwLjQwNzc1NSAwLjc1MTA0NQ0Kdm4gLTAuNDMxNDgxIC0wLjg2NzA0NCAwLjI0OTExNQ0KdnQgMC41IDAuMTY2NjY3DQp2IDAgMC4wMDUyNzE5MSAwDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC40NTgzMzMgMA0KdiAtMC43NTEwNDUgMC40MDc3NTUgMS4zMDA4NQ0Kdm4gLTAuMjQ5MTE2IC0wLjg2NzA0NCAwLjQzMTQ4MQ0KdnQgMC41ODMzMzMgMC4xNjY2NjcNCnYgMCAwLjAwNTI3MTkxIDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjU0MTY2NyAwDQp2IDAgMC40MDc3NTUgMS41MDIwOQ0Kdm4gMCAtMC44NjcwNDQgMC40OTgyMzENCnZ0IDAuNjY2NjY3IDAuMTY2NjY3DQp2IDAgMC4wMDUyNzE5MSAwDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC42MjUgMA0KdiAwLjc1MTA0NSAwLjQwNzc1NSAxLjMwMDg1DQp2biAwLjI0OTExNSAtMC44NjcwNDQgMC40MzE0ODENCnZ0IDAuNzUgMC4xNjY2NjcNCnYgMCAwLjAwNTI3MTkxIDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjcwODMzMyAwDQp2IDEuMzAwODUgMC40MDc3NTUgMC43NTEwNDUNCnZuIDAuNDMxNDgxIC0wLjg2NzA0NCAwLjI0OTExNg0KdnQgMC44MzMzMzMgMC4xNjY2NjcNCnYgMCAwLjAwNTI3MTkxIDANCnZuIDAuMDAyNzU5NTQgLTAuOTk5OTkzIC0wLjAwMjUyMDUxDQp2dCAwLjc5MTY2NyAwDQp2IDEuNTAyMDkgMC40MDc3NTUgMA0Kdm4gMC40OTgyMzEgLTAuODY3MDQ0IDANCnZ0IDAuOTE2NjY3IDAuMTY2NjY3DQp2IDAgMC4wMDUyNzE5MSAwDQp2biAwLjAwMjc1OTU0IC0wLjk5OTk5MyAtMC4wMDI1MjA1MQ0KdnQgMC44NzUgMA0KdiAxLjMwMDg1IDAuNDA3NzU1IC0wLjc1MTA0NQ0Kdm4gMC40MzE0ODEgLTAuODY3MDQ0IC0wLjI0OTExNg0KdnQgMSAwLjE2NjY2Nw0KdiAwIDAuMDA1MjcxOTEgMA0Kdm4gMC4wMDI3NTk1NCAtMC45OTk5OTMgLTAuMDAyNTIwNTENCnZ0IDAuOTU4MzMzIDANCnYgMS4zMDA4NSAxLjUwNzM2IC0yLjI1MzEzDQp2biAwLjQzMjUxNyAtMC41MDE3MTQgLTAuNzQ5MTQxDQp2dCAwLjA4MzMzMzMgMC4zMzMzMzMNCnYgMi4yNTMxMyAxLjUwNzM2IC0xLjMwMDg1DQp2biAwLjc0OTE0MSAtMC41MDE3MTQgLTAuNDMyNTE3DQp2dCAwIDAuMzMzMzMzDQp2IDAgMS41MDczNiAtMi42MDE3DQp2biAwIC0wLjUwMTcxNCAtMC44NjUwMzMNCnZ0IDAuMTY2NjY3IDAuMzMzMzMzDQp2IC0xLjMwMDg1IDEuNTA3MzYgLTIuMjUzMTMNCnZuIC0wLjQzMjUxNyAtMC41MDE3MTQgLTAuNzQ5MTQxDQp2dCAwLjI1IDAuMzMzMzMzDQp2IC0yLjI1MzEzIDEuNTA3MzYgLTEuMzAwODUNCnZuIC0wLjc0OTE0MSAtMC41MDE3MTQgLTAuNDMyNTE3DQp2dCAwLjMzMzMzMyAwLjMzMzMzMw0KdiAtMi42MDE3IDEuNTA3MzYgMA0Kdm4gLTAuODY1MDMzIC0wLjUwMTcxNCAwDQp2dCAwLjQxNjY2NyAwLjMzMzMzMw0KdiAtMi4yNTMxMyAxLjUwNzM2IDEuMzAwODUNCnZuIC0wLjc0OTE0MSAtMC41MDE3MTQgMC40MzI1MTcNCnZ0IDAuNSAwLjMzMzMzMw0KdiAtMS4zMDA4NSAxLjUwNzM2IDIuMjUzMTMNCnZuIC0wLjQzMjUxNyAtMC41MDE3MTQgMC43NDkxNDENCnZ0IDAuNTgzMzMzIDAuMzMzMzMzDQp2IDAgMS41MDczNiAyLjYwMTcNCnZuIDAgLTAuNTAxNzE0IDAuODY1MDMzDQp2dCAwLjY2NjY2NyAwLjMzMzMzMw0KdiAxLjMwMDg1IDEuNTA3MzYgMi4yNTMxMw0Kdm4gMC40MzI1MTcgLTAuNTAxNzE0IDAuNzQ5MTQxDQp2dCAwLjc1IDAuMzMzMzMzDQp2IDIuMjUzMTMgMS41MDczNiAxLjMwMDg1DQp2biAwLjc0OTE0MSAtMC41MDE3MTQgMC40MzI1MTcNCnZ0IDAuODMzMzMzIDAuMzMzMzMzDQp2IDIuNjAxNyAxLjUwNzM2IDANCnZuIDAuODY1MDMzIC0wLjUwMTcxNCAwDQp2dCAwLjkxNjY2NyAwLjMzMzMzMw0KdiAyLjI1MzEzIDEuNTA3MzYgLTEuMzAwODUNCnZuIDAuNzQ5MTQxIC0wLjUwMTcxNCAtMC40MzI1MTcNCnZ0IDEgMC4zMzMzMzMNCnYgMS41MDIwOSAzLjAwOTQ1IC0yLjYwMTcNCnZuIDAuNDgyOTYzIC0wLjI1ODgxOSAtMC44MzY1MTYNCnZ0IDAuMDgzMzMzMyAwLjUNCnYgMi42MDE3IDMuMDA5NDUgLTEuNTAyMDkNCnZuIDAuODM2NTE2IC0wLjI1ODgxOSAtMC40ODI5NjMNCnZ0IDAgMC41DQp2IDAgMy4wMDk0NSAtMy4wMDQxOA0Kdm4gMCAtMC4yNTg4MTkgLTAuOTY1OTI2DQp2dCAwLjE2NjY2NyAwLjUNCnYgLTEuNTAyMDkgMy4wMDk0NSAtMi42MDE3DQp2biAtMC40ODI5NjMgLTAuMjU4ODE5IC0wLjgzNjUxNg0KdnQgMC4yNSAwLjUNCnYgLTIuNjAxNyAzLjAwOTQ1IC0xLjUwMjA5DQp2biAtMC44MzY1MTYgLTAuMjU4ODE5IC0wLjQ4Mjk2Mw0KdnQgMC4zMzMzMzMgMC41DQp2IC0zLjAwNDE4IDMuMDA5NDUgMA0Kdm4gLTAuOTY1OTI2IC0wLjI1ODgxOSAwDQp2dCAwLjQxNjY2NyAwLjUNCnYgLTIuNjAxNyAzLjAwOTQ1IDEuNTAyMDkNCnZuIC0wLjgzNjUxNiAtMC4yNTg4MTkgMC40ODI5NjMNCnZ0IDAuNSAwLjUNCnYgLTEuNTAyMDkgMy4wMDk0NSAyLjYwMTcNCnZuIC0wLjQ4Mjk2MyAtMC4yNTg4MTkgMC44MzY1MTYNCnZ0IDAuNTgzMzMzIDAuNQ0KdiAwIDMuMDA5NDUgMy4wMDQxOA0Kdm4gMCAtMC4yNTg4MTkgMC45NjU5MjYNCnZ0IDAuNjY2NjY3IDAuNQ0KdiAxLjUwMjA5IDMuMDA5NDUgMi42MDE3DQp2biAwLjQ4Mjk2MyAtMC4yNTg4MTkgMC44MzY1MTYNCnZ0IDAuNzUgMC41DQp2IDIuNjAxNyAzLjAwOTQ1IDEuNTAyMDkNCnZuIDAuODM2NTE2IC0wLjI1ODgxOSAwLjQ4Mjk2Mw0KdnQgMC44MzMzMzMgMC41DQp2IDMuMDA0MTggMy4wMDk0NSAwDQp2biAwLjk2NTkyNiAtMC4yNTg4MTkgMA0KdnQgMC45MTY2NjcgMC41DQp2IDIuNjAxNyAzLjAwOTQ1IC0xLjUwMjA5DQp2biAwLjgzNjUxNiAtMC4yNTg4MTkgLTAuNDgyOTYzDQp2dCAxIDAuNQ0KDQpmIDEvMS8xIDIvMi8yIDMvMy8zDQpmIDIvMi8yIDQvNC80IDMvMy8zDQpmIDUvNS81IDYvNi82IDcvNy83DQpmIDYvNi82IDgvOC84IDcvNy83DQpmIDkvOS85IDEwLzEwLzEwIDExLzExLzExDQpmIDEwLzEwLzEwIDEyLzEyLzEyIDExLzExLzExDQpmIDEzLzEzLzEzIDE0LzE0LzE0IDE1LzE1LzE1DQpmIDE0LzE0LzE0IDE2LzE2LzE2IDE1LzE1LzE1DQpmIDE3LzE3LzE3IDE4LzE4LzE4IDE5LzE5LzE5DQpmIDE4LzE4LzE4IDIwLzIwLzIwIDE5LzE5LzE5DQpmIDIxLzIxLzIxIDIyLzIyLzIyIDIzLzIzLzIzDQpmIDIyLzIyLzIyIDI0LzI0LzI0IDIzLzIzLzIzDQpmIDI1LzI1LzI1IDI2LzI2LzI2IDI3LzI3LzI3DQpmIDI2LzI2LzI2IDI4LzI4LzI4IDI3LzI3LzI3DQpmIDI5LzI5LzI5IDMwLzMwLzMwIDMxLzMxLzMxDQpmIDMwLzMwLzMwIDMyLzMyLzMyIDMxLzMxLzMxDQpmIDMzLzMzLzMzIDM0LzM0LzM0IDM1LzM1LzM1DQpmIDM0LzM0LzM0IDM2LzM2LzM2IDM1LzM1LzM1DQpmIDM3LzM3LzM3IDM4LzM4LzM4IDM5LzM5LzM5DQpmIDM4LzM4LzM4IDQwLzQwLzQwIDM5LzM5LzM5DQpmIDQxLzQxLzQxIDQyLzQyLzQyIDQzLzQzLzQzDQpmIDQyLzQyLzQyIDQ0LzQ0LzQ0IDQzLzQzLzQzDQpmIDQ1LzQ1LzQ1IDQ2LzQ2LzQ2IDQ3LzQ3LzQ3DQpmIDQ2LzQ2LzQ2IDQ4LzQ4LzQ4IDQ3LzQ3LzQ3DQpmIDQ5LzQ5LzQ5IDUwLzUwLzUwIDUxLzUxLzUxDQpmIDUwLzUwLzUwIDUyLzUyLzUyIDUxLzUxLzUxDQpmIDUzLzUzLzUzIDU0LzU0LzU0IDU1LzU1LzU1DQpmIDU0LzU0LzU0IDU2LzU2LzU2IDU1LzU1LzU1DQpmIDU3LzU3LzU3IDU4LzU4LzU4IDU5LzU5LzU5DQpmIDU4LzU4LzU4IDYwLzYwLzYwIDU5LzU5LzU5DQpmIDYxLzYxLzYxIDYyLzYyLzYyIDYzLzYzLzYzDQpmIDYyLzYyLzYyIDY0LzY0LzY0IDYzLzYzLzYzDQpmIDY1LzY1LzY1IDY2LzY2LzY2IDY3LzY3LzY3DQpmIDY2LzY2LzY2IDY4LzY4LzY4IDY3LzY3LzY3DQpmIDY5LzY5LzY5IDcwLzcwLzcwIDcxLzcxLzcxDQpmIDcwLzcwLzcwIDcyLzcyLzcyIDcxLzcxLzcxDQpmIDczLzczLzczIDc0Lzc0Lzc0IDc1Lzc1Lzc1DQpmIDc0Lzc0Lzc0IDc2Lzc2Lzc2IDc1Lzc1Lzc1DQpmIDc3Lzc3Lzc3IDc4Lzc4Lzc4IDc5Lzc5Lzc5DQpmIDc4Lzc4Lzc4IDgwLzgwLzgwIDc5Lzc5Lzc5DQpmIDgxLzgxLzgxIDgyLzgyLzgyIDgzLzgzLzgzDQpmIDgyLzgyLzgyIDg0Lzg0Lzg0IDgzLzgzLzgzDQpmIDg1Lzg1Lzg1IDg2Lzg2Lzg2IDg3Lzg3Lzg3DQpmIDg4Lzg4Lzg4IDg5Lzg5Lzg5IDkwLzkwLzkwDQpmIDkxLzkxLzkxIDkyLzkyLzkyIDkzLzkzLzkzDQpmIDkyLzkyLzkyIDk0Lzk0Lzk0IDkzLzkzLzkzDQpmIDk1Lzk1Lzk1IDk2Lzk2Lzk2IDk3Lzk3Lzk3DQpmIDk2Lzk2Lzk2IDk4Lzk4Lzk4IDk3Lzk3Lzk3DQpmIDk5Lzk5Lzk5IDEwMC8xMDAvMTAwIDEwMS8xMDEvMTAxDQpmIDEwMC8xMDAvMTAwIDEwMi8xMDIvMTAyIDEwMS8xMDEvMTAxDQpmIDEwMy8xMDMvMTAzIDEwNC8xMDQvMTA0IDEwNS8xMDUvMTA1DQpmIDEwNi8xMDYvMTA2IDEwNy8xMDcvMTA3IDEwOC8xMDgvMTA4DQpmIDEwOS8xMDkvMTA5IDExMC8xMTAvMTEwIDExMS8xMTEvMTExDQpmIDExMC8xMTAvMTEwIDExMi8xMTIvMTEyIDExMS8xMTEvMTExDQpmIDExMy8xMTMvMTEzIDEwNC8xMDQvMTA0IDExNC8xMTQvMTE0DQpmIDEwNC8xMDQvMTA0IDExNS8xMTUvMTE1IDExNC8xMTQvMTE0DQpmIDExNi8xMTYvMTE2IDg2Lzg2Lzg2IDg1Lzg1Lzg1DQpmIDExNy8xMTcvMTE3IDExOC8xMTgvMTE4IDg4Lzg4Lzg4DQpmIDExOC8xMTgvMTE4IDg5Lzg5Lzg5IDg4Lzg4Lzg4DQpmIDExOS8xMTkvMTE5IDEyMC8xMjAvMTIwIDEyMS8xMjEvMTIxDQpmIDEyMC8xMjAvMTIwIDEyMi8xMjIvMTIyIDEyMS8xMjEvMTIxDQpmIDEyMy8xMjMvMTIzIDEyNC8xMjQvMTI0IDEyNS8xMjUvMTI1DQpmIDEyNC8xMjQvMTI0IDEyNi8xMjYvMTI2IDEyNS8xMjUvMTI1DQpmIDEyNy8xMjcvMTI3IDEyOC8xMjgvMTI4IDEyOS8xMjkvMTI5DQpmIDEyOC8xMjgvMTI4IDEzMC8xMzAvMTMwIDEyOS8xMjkvMTI5DQpmIDEzMS8xMzEvMTMxIDEzMi8xMzIvMTMyIDEzMy8xMzMvMTMzDQpmIDEzMi8xMzIvMTMyIDEzNC8xMzQvMTM0IDEzMy8xMzMvMTMzDQpmIDEzNS8xMzUvMTM1IDEzNi8xMzYvMTM2IDEzNy8xMzcvMTM3DQpmIDEzNi8xMzYvMTM2IDEzOC8xMzgvMTM4IDEzNy8xMzcvMTM3DQpmIDEzOS8xMzkvMTM5IDE0MC8xNDAvMTQwIDE0MS8xNDEvMTQxDQpmIDE0MC8xNDAvMTQwIDE0Mi8xNDIvMTQyIDE0MS8xNDEvMTQxDQpmIDE0My8xNDMvMTQzIDE0NC8xNDQvMTQ0IDE0NS8xNDUvMTQ1DQpmIDE0NC8xNDQvMTQ0IDE0Ni8xNDYvMTQ2IDE0NS8xNDUvMTQ1DQpmIDE0Ny8xNDcvMTQ3IDE0OC8xNDgvMTQ4IDE0OS8xNDkvMTQ5DQpmIDE0OC8xNDgvMTQ4IDE1MC8xNTAvMTUwIDE0OS8xNDkvMTQ5DQpmIDE1MS8xNTEvMTUxIDE1Mi8xNTIvMTUyIDE1My8xNTMvMTUzDQpmIDE1Mi8xNTIvMTUyIDE1NC8xNTQvMTU0IDE1My8xNTMvMTUzDQpmIDE1NS8xNTUvMTU1IDE1Ni8xNTYvMTU2IDE1Ny8xNTcvMTU3DQpmIDE1Ni8xNTYvMTU2IDE1OC8xNTgvMTU4IDE1Ny8xNTcvMTU3DQpmIDE1OS8xNTkvMTU5IDE2MC8xNjAvMTYwIDE2MS8xNjEvMTYxDQpmIDE2MC8xNjAvMTYwIDE2Mi8xNjIvMTYyIDE2MS8xNjEvMTYxDQpmIDE2My8xNjMvMTYzIDE2NC8xNjQvMTY0IDE2NS8xNjUvMTY1DQpmIDE2NC8xNjQvMTY0IDE2Ni8xNjYvMTY2IDE2NS8xNjUvMTY1DQpmIDE2Ny8xNjcvMTY3IDE2OC8xNjgvMTY4IDE2OS8xNjkvMTY5DQpmIDE2OC8xNjgvMTY4IDE3MC8xNzAvMTcwIDE2OS8xNjkvMTY5DQpmIDE3MS8xNzEvMTcxIDE3Mi8xNzIvMTcyIDE3My8xNzMvMTczDQpmIDE3Mi8xNzIvMTcyIDE3NC8xNzQvMTc0IDE3My8xNzMvMTczDQpmIDE3NS8xNzUvMTc1IDE3Ni8xNzYvMTc2IDE3Ny8xNzcvMTc3DQpmIDE3Ni8xNzYvMTc2IDE3OC8xNzgvMTc4IDE3Ny8xNzcvMTc3DQpmIDE3OS8xNzkvMTc5IDE4MC8xODAvMTgwIDE4MS8xODEvMTgxDQpmIDE4MC8xODAvMTgwIDE4Mi8xODIvMTgyIDE4MS8xODEvMTgxDQpmIDE4My8xODMvMTgzIDE4NC8xODQvMTg0IDE4NS8xODUvMTg1DQpmIDE4NC8xODQvMTg0IDE4Ni8xODYvMTg2IDE4NS8xODUvMTg1DQpmIDE4Ny8xODcvMTg3IDE4OC8xODgvMTg4IDE4OS8xODkvMTg5DQpmIDE4OC8xODgvMTg4IDE5MC8xOTAvMTkwIDE4OS8xODkvMTg5DQpmIDE5MS8xOTEvMTkxIDE5Mi8xOTIvMTkyIDE5My8xOTMvMTkzDQpmIDE5Mi8xOTIvMTkyIDE5NC8xOTQvMTk0IDE5My8xOTMvMTkzDQpmIDE5NS8xOTUvMTk1IDE5Ni8xOTYvMTk2IDE5Ny8xOTcvMTk3DQpmIDE5Ni8xOTYvMTk2IDE5OC8xOTgvMTk4IDE5Ny8xOTcvMTk3DQpmIDE5OS8xOTkvMTk5IDIwMC8yMDAvMjAwIDIwMS8yMDEvMjAxDQpmIDIwMC8yMDAvMjAwIDIwMi8yMDIvMjAyIDIwMS8yMDEvMjAxDQpmIDIwMy8yMDMvMjAzIDIwNC8yMDQvMjA0IDIwNS8yMDUvMjA1DQpmIDIwNC8yMDQvMjA0IDIwNi8yMDYvMjA2IDIwNS8yMDUvMjA1DQpmIDIwNy8yMDcvMjA3IDIwOC8yMDgvMjA4IDIwOS8yMDkvMjA5DQpmIDIwOC8yMDgvMjA4IDIxMC8yMTAvMjEwIDIwOS8yMDkvMjA5DQpmIDIxMS8yMTEvMjExIDIxMi8yMTIvMjEyIDIxMy8yMTMvMjEzDQpmIDIxMi8yMTIvMjEyIDIxNC8yMTQvMjE0IDIxMy8yMTMvMjEzDQpmIDIxNS8yMTUvMjE1IDIxNi8yMTYvMjE2IDIxNy8yMTcvMjE3DQpmIDIxNi8yMTYvMjE2IDIxOC8yMTgvMjE4IDIxNy8yMTcvMjE3DQpmIDIxOS8yMTkvMjE5IDIyMC8yMjAvMjIwIDIyMS8yMjEvMjIxDQpmIDIyMC8yMjAvMjIwIDIyMi8yMjIvMjIyIDIyMS8yMjEvMjIxDQpmIDIyMy8yMjMvMjIzIDIyNC8yMjQvMjI0IDIyNS8yMjUvMjI1DQpmIDIyNC8yMjQvMjI0IDIyNi8yMjYvMjI2IDIyNS8yMjUvMjI1DQpmIDIyNy8yMjcvMjI3IDIyOC8yMjgvMjI4IDIyOS8yMjkvMjI5DQpmIDIyOC8yMjgvMjI4IDIzMC8yMzAvMjMwIDIyOS8yMjkvMjI5DQpmIDIzMS8yMzEvMjMxIDIzMi8yMzIvMjMyIDIzMy8yMzMvMjMzDQpmIDIzMi8yMzIvMjMyIDIzNC8yMzQvMjM0IDIzMy8yMzMvMjMzDQpmIDIzNS8yMzUvMjM1IDIzNi8yMzYvMjM2IDIzNy8yMzcvMjM3DQpmIDIzNi8yMzYvMjM2IDIzOC8yMzgvMjM4IDIzNy8yMzcvMjM3DQpmIDIzOS8yMzkvMjM5IDI0MC8yNDAvMjQwIDI0MS8yNDEvMjQxDQpmIDI0MC8yNDAvMjQwIDI0Mi8yNDIvMjQyIDI0MS8yNDEvMjQxDQpmIDI0My8yNDMvMjQzIDI0NC8yNDQvMjQ0IDI0NS8yNDUvMjQ1DQpmIDI0NC8yNDQvMjQ0IDI0Ni8yNDYvMjQ2IDI0NS8yNDUvMjQ1DQpmIDI0Ny8yNDcvMjQ3IDI0OC8yNDgvMjQ4IDI0OS8yNDkvMjQ5DQpmIDI0OC8yNDgvMjQ4IDI1MC8yNTAvMjUwIDI0OS8yNDkvMjQ5DQpmIDI1MS8yNTEvMjUxIDI1Mi8yNTIvMjUyIDI1My8yNTMvMjUzDQpmIDI1Mi8yNTIvMjUyIDI1NC8yNTQvMjU0IDI1My8yNTMvMjUzDQpmIDI1NS8yNTUvMjU1IDI1Ni8yNTYvMjU2IDI1Ny8yNTcvMjU3DQpmIDI1Ni8yNTYvMjU2IDI1OC8yNTgvMjU4IDI1Ny8yNTcvMjU3DQpmIDI1OS8yNTkvMjU5IDI2MC8yNjAvMjYwIDI2MS8yNjEvMjYxDQpmIDI2MC8yNjAvMjYwIDI2Mi8yNjIvMjYyIDI2MS8yNjEvMjYxDQpmIDI2My8yNjMvMjYzIDI2NC8yNjQvMjY0IDI2NS8yNjUvMjY1DQpmIDI2Ni8yNjYvMjY2IDI2Ny8yNjcvMjY3IDI2OC8yNjgvMjY4DQpmIDI2OS8yNjkvMjY5IDI3MC8yNzAvMjcwIDI3MS8yNzEvMjcxDQpmIDI3MC8yNzAvMjcwIDI3Mi8yNzIvMjcyIDI3MS8yNzEvMjcxDQpmIDI3My8yNzMvMjczIDI3NC8yNzQvMjc0IDI3NS8yNzUvMjc1DQpmIDI3NC8yNzQvMjc0IDI3Ni8yNzYvMjc2IDI3NS8yNzUvMjc1DQpmIDI3Ny8yNzcvMjc3IDI3OC8yNzgvMjc4IDI3OS8yNzkvMjc5DQpmIDI3OC8yNzgvMjc4IDI4MC8yODAvMjgwIDI3OS8yNzkvMjc5DQpmIDI4MS8yODEvMjgxIDI4Mi8yODIvMjgyIDI4My8yODMvMjgzDQpmIDI4Mi8yODIvMjgyIDI4NC8yODQvMjg0IDI4My8yODMvMjgzDQpmIDI4NS8yODUvMjg1IDI4Ni8yODYvMjg2IDI4Ny8yODcvMjg3DQpmIDI4Ni8yODYvMjg2IDI4OC8yODgvMjg4IDI4Ny8yODcvMjg3DQpmIDI4OS8yODkvMjg5IDI5MC8yOTAvMjkwIDI5MS8yOTEvMjkxDQpmIDI5MC8yOTAvMjkwIDI5Mi8yOTIvMjkyIDI5MS8yOTEvMjkxDQpmIDI5My8yOTMvMjkzIDI5NC8yOTQvMjk0IDI5NS8yOTUvMjk1DQpmIDI5NC8yOTQvMjk0IDI5Ni8yOTYvMjk2IDI5NS8yOTUvMjk1DQpmIDI5Ny8yOTcvMjk3IDI5NC8yOTQvMjk0IDI5OC8yOTgvMjk4DQpmIDI5NC8yOTQvMjk0IDI5My8yOTMvMjkzIDI5OC8yOTgvMjk4DQpmIDI5OS8yOTkvMjk5IDMwMC8zMDAvMzAwIDMwMS8zMDEvMzAxDQpmIDMwMC8zMDAvMzAwIDMwMi8zMDIvMzAyIDMwMS8zMDEvMzAxDQpmIDMwMy8zMDMvMzAzIDMwNC8zMDQvMzA0IDMwNS8zMDUvMzA1DQpmIDMwNC8zMDQvMzA0IDMwNi8zMDYvMzA2IDMwNS8zMDUvMzA1DQpmIDMwNy8zMDcvMzA3IDMwOC8zMDgvMzA4IDMwOS8zMDkvMzA5DQpmIDMxMC8zMTAvMzEwIDMxMS8zMTEvMzExIDMxMi8zMTIvMzEyDQpmIDMxMS8zMTEvMzExIDMxMy8zMTMvMzEzIDMxMi8zMTIvMzEyDQpmIDMxNC8zMTQvMzE0IDMxNS8zMTUvMzE1IDMxNi8zMTYvMzE2DQpmIDMxNS8zMTUvMzE1IDMxNy8zMTcvMzE3IDMxNi8zMTYvMzE2DQpmIDMxOC8zMTgvMzE4IDMxOS8zMTkvMzE5IDMyMC8zMjAvMzIwDQpmIDMxOS8zMTkvMzE5IDMyMS8zMjEvMzIxIDMyMC8zMjAvMzIwDQpmIDMxNi8zMTYvMzE2IDMyMi8zMjIvMzIyIDMxNC8zMTQvMzE0DQpmIDMyMy8zMjMvMzIzIDMyNC8zMjQvMzI0IDMyNS8zMjUvMzI1DQpmIDMyNi8zMjYvMzI2IDMyNy8zMjcvMzI3IDMyOC8zMjgvMzI4DQpmIDMyNy8zMjcvMzI3IDMyOS8zMjkvMzI5IDMyOC8zMjgvMzI4DQpmIDMxNS8zMTUvMzE1IDMzMC8zMzAvMzMwIDMxNy8zMTcvMzE3DQpmIDMzMS8zMzEvMzMxIDMzMi8zMzIvMzMyIDMyNS8zMjUvMzI1DQpmIDMzMi8zMzIvMzMyIDMzMy8zMzMvMzMzIDMyNS8zMjUvMzI1DQpmIDMzNC8zMzQvMzM0IDMzNS8zMzUvMzM1IDMzNi8zMzYvMzM2DQpmIDMzNS8zMzUvMzM1IDMzNy8zMzcvMzM3IDMzNi8zMzYvMzM2DQpmIDMzOC8zMzgvMzM4IDMzOS8zMzkvMzM5IDM0MC8zNDAvMzQwDQpmIDMzOS8zMzkvMzM5IDM0MS8zNDEvMzQxIDM0MC8zNDAvMzQwDQpmIDM0Mi8zNDIvMzQyIDM0My8zNDMvMzQzIDM0NC8zNDQvMzQ0DQpmIDM0My8zNDMvMzQzIDM0NS8zNDUvMzQ1IDM0NC8zNDQvMzQ0DQpmIDM0Ni8zNDYvMzQ2IDM0Ny8zNDcvMzQ3IDM0OC8zNDgvMzQ4DQpmIDM0Ny8zNDcvMzQ3IDM0OS8zNDkvMzQ5IDM0OC8zNDgvMzQ4DQpmIDM1MC8zNTAvMzUwIDM1MS8zNTEvMzUxIDM1Mi8zNTIvMzUyDQpmIDM1My8zNTMvMzUzIDM1NC8zNTQvMzU0IDM1NS8zNTUvMzU1DQpmIDM1NC8zNTQvMzU0IDM1Ni8zNTYvMzU2IDM1NS8zNTUvMzU1DQpmIDM1Ny8zNTcvMzU3IDM1OC8zNTgvMzU4IDM1OS8zNTkvMzU5DQpmIDM1OC8zNTgvMzU4IDM2MC8zNjAvMzYwIDM1OS8zNTkvMzU5DQpmIDM2MS8zNjEvMzYxIDM2Mi8zNjIvMzYyIDM2My8zNjMvMzYzDQpmIDM2Mi8zNjIvMzYyIDM2NC8zNjQvMzY0IDM2My8zNjMvMzYzDQpmIDM2NS8zNjUvMzY1IDM2Ni8zNjYvMzY2IDM2Ny8zNjcvMzY3DQpmIDM2OC8zNjgvMzY4IDM2OS8zNjkvMzY5IDM3MC8zNzAvMzcwDQpmIDM3MS8zNzEvMzcxIDM3Mi8zNzIvMzcyIDM3My8zNzMvMzczDQpmIDM3Mi8zNzIvMzcyIDM3NC8zNzQvMzc0IDM3My8zNzMvMzczDQpmIDM3NS8zNzUvMzc1IDM3Ni8zNzYvMzc2IDM3Ny8zNzcvMzc3DQpmIDM3OC8zNzgvMzc4IDM3OS8zNzkvMzc5IDM0OC8zNDgvMzQ4DQpmIDM4MC8zODAvMzgwIDM4MS8zODEvMzgxIDM4Mi8zODIvMzgyDQpmIDM4MS8zODEvMzgxIDM4My8zODMvMzgzIDM4Mi8zODIvMzgyDQpmIDM4NC8zODQvMzg0IDM4NS8zODUvMzg1IDM4Ni8zODYvMzg2DQpmIDM4NS8zODUvMzg1IDM4Ny8zODcvMzg3IDM4Ni8zODYvMzg2DQpmIDM4OC8zODgvMzg4IDM4OS8zODkvMzg5IDM5MC8zOTAvMzkwDQpmIDM4OS8zODkvMzg5IDM5MS8zOTEvMzkxIDM5MC8zOTAvMzkwDQpmIDM5Mi8zOTIvMzkyIDM5My8zOTMvMzkzIDM5NC8zOTQvMzk0DQpmIDM5My8zOTMvMzkzIDM5NS8zOTUvMzk1IDM5NC8zOTQvMzk0DQpmIDM5Ni8zOTYvMzk2IDM5Ny8zOTcvMzk3IDM5OC8zOTgvMzk4DQpmIDM3OC8zNzgvMzc4IDM5OS8zOTkvMzk5IDQwMC80MDAvNDAwDQpmIDQwMS80MDEvNDAxIDQwMi80MDIvNDAyIDQwMy80MDMvNDAzDQpmIDQwMi80MDIvNDAyIDQwNC80MDQvNDA0IDQwMy80MDMvNDAzDQpmIDQwNS80MDUvNDA1IDQwNi80MDYvNDA2IDQwNy80MDcvNDA3DQpmIDQwNi80MDYvNDA2IDQwOC80MDgvNDA4IDQwNy80MDcvNDA3DQpmIDQwOS80MDkvNDA5IDQxMC80MTAvNDEwIDQxMS80MTEvNDExDQpmIDQxMC80MTAvNDEwIDQxMi80MTIvNDEyIDQxMS80MTEvNDExDQpmIDQxMy80MTMvNDEzIDQxNC80MTQvNDE0IDQxNS80MTUvNDE1DQpmIDQxNC80MTQvNDE0IDQxNi80MTYvNDE2IDQxNS80MTUvNDE1DQpmIDQxNy80MTcvNDE3IDQxOC80MTgvNDE4IDQxOS80MTkvNDE5DQpmIDQxOC80MTgvNDE4IDQyMC80MjAvNDIwIDQxOS80MTkvNDE5DQpmIDQyMS80MjEvNDIxIDQyMi80MjIvNDIyIDQyMy80MjMvNDIzDQpmIDQyMi80MjIvNDIyIDQyNC80MjQvNDI0IDQyMy80MjMvNDIzDQpmIDQyNS80MjUvNDI1IDQyNi80MjYvNDI2IDQyNy80MjcvNDI3DQpmIDQyNi80MjYvNDI2IDQyOC80MjgvNDI4IDQyNy80MjcvNDI3DQpmIDQyOS80MjkvNDI5IDQzMC80MzAvNDMwIDQzMS80MzEvNDMxDQpmIDQzMC80MzAvNDMwIDQzMi80MzIvNDMyIDQzMS80MzEvNDMxDQpmIDQzMy80MzMvNDMzIDQzNC80MzQvNDM0IDQzNS80MzUvNDM1DQpmIDQzNC80MzQvNDM0IDQzNi80MzYvNDM2IDQzNS80MzUvNDM1DQpmIDQzNy80MzcvNDM3IDQzOC80MzgvNDM4IDQzOS80MzkvNDM5DQpmIDQzOC80MzgvNDM4IDQ0MC80NDAvNDQwIDQzOS80MzkvNDM5DQpmIDQ0MS80NDEvNDQxIDQ0Mi80NDIvNDQyIDQ0My80NDMvNDQzDQpmIDQ0Mi80NDIvNDQyIDQ0NC80NDQvNDQ0IDQ0My80NDMvNDQzDQpmIDQ0NS80NDUvNDQ1IDQ0Ni80NDYvNDQ2IDQ0Ny80NDcvNDQ3DQpmIDQ0Ni80NDYvNDQ2IDQ0OC80NDgvNDQ4IDQ0Ny80NDcvNDQ3DQpmIDQ0OS80NDkvNDQ5IDQ1MC80NTAvNDUwIDQ1MS80NTEvNDUxDQpmIDQ1MC80NTAvNDUwIDQ1Mi80NTIvNDUyIDQ1MS80NTEvNDUxDQpmIDQ1My80NTMvNDUzIDQ1NC80NTQvNDU0IDQ1NS80NTUvNDU1DQpmIDQ1NC80NTQvNDU0IDQ1Ni80NTYvNDU2IDQ1NS80NTUvNDU1DQpmIDQ1Ny80NTcvNDU3IDQ1OC80NTgvNDU4IDQ1OS80NTkvNDU5DQpmIDQ1OC80NTgvNDU4IDQ2MC80NjAvNDYwIDQ1OS80NTkvNDU5DQpmIDQ2MS80NjEvNDYxIDQ2Mi80NjIvNDYyIDQ2My80NjMvNDYzDQpmIDQ2Mi80NjIvNDYyIDQ2NC80NjQvNDY0IDQ2My80NjMvNDYzDQpmIDQ2NS80NjUvNDY1IDQ2Ni80NjYvNDY2IDQ2Ny80NjcvNDY3DQpmIDQ2Ni80NjYvNDY2IDQ2OC80NjgvNDY4IDQ2Ny80NjcvNDY3DQpmIDQ2OS80NjkvNDY5IDQ3MC80NzAvNDcwIDQ3MS80NzEvNDcxDQpmIDQ3MC80NzAvNDcwIDQ3Mi80NzIvNDcyIDQ3MS80NzEvNDcxDQpmIDQ3My80NzMvNDczIDQ3NC80NzQvNDc0IDQ3NS80NzUvNDc1DQpmIDQ3NC80NzQvNDc0IDQ3Ni80NzYvNDc2IDQ3NS80NzUvNDc1DQpmIDQ3Ny80NzcvNDc3IDQ3OC80NzgvNDc4IDQ3OS80NzkvNDc5DQpmIDQ3OC80NzgvNDc4IDQ4MC80ODAvNDgwIDQ3OS80NzkvNDc5DQpmIDQ4MS80ODEvNDgxIDQ4Mi80ODIvNDgyIDQ4My80ODMvNDgzDQpmIDQ4Mi80ODIvNDgyIDQ4NC80ODQvNDg0IDQ4My80ODMvNDgzDQpmIDQ4NS80ODUvNDg1IDQ4Ni80ODYvNDg2IDQ4Ny80ODcvNDg3DQpmIDQ4OC80ODgvNDg4IDQ4OS80ODkvNDg5IDQ5MC80OTAvNDkwDQpmIDQ5MS80OTEvNDkxIDQ5Mi80OTIvNDkyIDQ5My80OTMvNDkzDQpmIDQ5Mi80OTIvNDkyIDQ5NC80OTQvNDk0IDQ5My80OTMvNDkzDQpmIDQ5NS80OTUvNDk1IDQ5Ni80OTYvNDk2IDQ5Ny80OTcvNDk3DQpmIDQ5Ni80OTYvNDk2IDQ5OC80OTgvNDk4IDQ5Ny80OTcvNDk3DQpmIDQ5OS80OTkvNDk5IDUwMC81MDAvNTAwIDUwMS81MDEvNTAxDQpmIDUwMC81MDAvNTAwIDUwMi81MDIvNTAyIDUwMS81MDEvNTAxDQpmIDUwMy81MDMvNTAzIDUwNC81MDQvNTA0IDUwNS81MDUvNTA1DQpmIDUwNi81MDYvNTA2IDUwNy81MDcvNTA3IDUwOC81MDgvNTA4DQpmIDUwOS81MDkvNTA5IDUxMC81MTAvNTEwIDUxMS81MTEvNTExDQpmIDUxMC81MTAvNTEwIDUxMi81MTIvNTEyIDUxMS81MTEvNTExDQpmIDUxMy81MTMvNTEzIDUwNC81MDQvNTA0IDUxNC81MTQvNTE0DQpmIDUwNC81MDQvNTA0IDUxNS81MTUvNTE1IDUxNC81MTQvNTE0DQpmIDUxNi81MTYvNTE2IDQ4Ni80ODYvNDg2IDQ4NS80ODUvNDg1DQpmIDUxNy81MTcvNTE3IDUxOC81MTgvNTE4IDQ4OC80ODgvNDg4DQpmIDUxOC81MTgvNTE4IDQ4OS80ODkvNDg5IDQ4OC80ODgvNDg4DQpmIDUxOS81MTkvNTE5IDUyMC81MjAvNTIwIDUyMS81MjEvNTIxDQpmIDUyMC81MjAvNTIwIDUyMi81MjIvNTIyIDUyMS81MjEvNTIxDQpmIDUyMy81MjMvNTIzIDUyNC81MjQvNTI0IDUyNS81MjUvNTI1DQpmIDUyNC81MjQvNTI0IDUyNi81MjYvNTI2IDUyNS81MjUvNTI1DQpmIDUyNy81MjcvNTI3IDUyOC81MjgvNTI4IDUyOS81MjkvNTI5DQpmIDUyOC81MjgvNTI4IDUzMC81MzAvNTMwIDUyOS81MjkvNTI5DQpmIDUzMS81MzEvNTMxIDUzMi81MzIvNTMyIDUzMy81MzMvNTMzDQpmIDUzMi81MzIvNTMyIDUzNC81MzQvNTM0IDUzMy81MzMvNTMzDQpmIDUzNS81MzUvNTM1IDUzNi81MzYvNTM2IDUzNy81MzcvNTM3DQpmIDUzNi81MzYvNTM2IDUzOC81MzgvNTM4IDUzNy81MzcvNTM3DQpmIDUzOS81MzkvNTM5IDU0MC81NDAvNTQwIDU0MS81NDEvNTQxDQpmIDU0MC81NDAvNTQwIDU0Mi81NDIvNTQyIDU0MS81NDEvNTQxDQpmIDU0My81NDMvNTQzIDU0NC81NDQvNTQ0IDU0NS81NDUvNTQ1DQpmIDU0NC81NDQvNTQ0IDU0Ni81NDYvNTQ2IDU0NS81NDUvNTQ1DQpmIDU0Ny81NDcvNTQ3IDU0OC81NDgvNTQ4IDU0OS81NDkvNTQ5DQpmIDU0OC81NDgvNTQ4IDU1MC81NTAvNTUwIDU0OS81NDkvNTQ5DQpmIDU1MS81NTEvNTUxIDU1Mi81NTIvNTUyIDU1My81NTMvNTUzDQpmIDU1Mi81NTIvNTUyIDU1NC81NTQvNTU0IDU1My81NTMvNTUzDQpmIDU1NS81NTUvNTU1IDU1Ni81NTYvNTU2IDU1Ny81NTcvNTU3DQpmIDU1Ni81NTYvNTU2IDU1OC81NTgvNTU4IDU1Ny81NTcvNTU3DQpmIDU1OS81NTkvNTU5IDU2MC81NjAvNTYwIDU2MS81NjEvNTYxDQpmIDU2MC81NjAvNTYwIDU2Mi81NjIvNTYyIDU2MS81NjEvNTYxDQpmIDU2My81NjMvNTYzIDU2NC81NjQvNTY0IDU2NS81NjUvNTY1DQpmIDU2NC81NjQvNTY0IDU2Ni81NjYvNTY2IDU2NS81NjUvNTY1DQpmIDU2Ny81NjcvNTY3IDU2OC81NjgvNTY4IDU2OS81NjkvNTY5DQpmIDU2OC81NjgvNTY4IDU3MC81NzAvNTcwIDU2OS81NjkvNTY5DQpmIDU3MS81NzEvNTcxIDU3Mi81NzIvNTcyIDU3My81NzMvNTczDQpmIDU3Mi81NzIvNTcyIDU3NC81NzQvNTc0IDU3My81NzMvNTczDQpmIDU3NS81NzUvNTc1IDU3Ni81NzYvNTc2IDU3Ny81NzcvNTc3DQpmIDU3Ni81NzYvNTc2IDU3OC81NzgvNTc4IDU3Ny81NzcvNTc3DQpmIDU3OS81NzkvNTc5IDU4MC81ODAvNTgwIDU4MS81ODEvNTgxDQpmIDU4MC81ODAvNTgwIDU4Mi81ODIvNTgyIDU4MS81ODEvNTgxDQpmIDU4My81ODMvNTgzIDU4NC81ODQvNTg0IDU4NS81ODUvNTg1DQpmIDU4NC81ODQvNTg0IDU4Ni81ODYvNTg2IDU4NS81ODUvNTg1DQpmIDU4Ny81ODcvNTg3IDU4OC81ODgvNTg4IDU4OS81ODkvNTg5DQpmIDU4OC81ODgvNTg4IDU5MC81OTAvNTkwIDU4OS81ODkvNTg5DQpmIDU5MS81OTEvNTkxIDU5Mi81OTIvNTkyIDU5My81OTMvNTkzDQpmIDU5Mi81OTIvNTkyIDU5NC81OTQvNTk0IDU5My81OTMvNTkzDQpmIDU5NS81OTUvNTk1IDU5Ni81OTYvNTk2IDU5Ny81OTcvNTk3DQpmIDU5Ni81OTYvNTk2IDU5OC81OTgvNTk4IDU5Ny81OTcvNTk3DQpmIDU5OS81OTkvNTk5IDYwMC82MDAvNjAwIDYwMS82MDEvNjAxDQpmIDYwMC82MDAvNjAwIDYwMi82MDIvNjAyIDYwMS82MDEvNjAxDQpmIDYwMy82MDMvNjAzIDYwNC82MDQvNjA0IDYwNS82MDUvNjA1DQpmIDYwNC82MDQvNjA0IDYwNi82MDYvNjA2IDYwNS82MDUvNjA1DQpmIDYwNy82MDcvNjA3IDYwOC82MDgvNjA4IDYwOS82MDkvNjA5DQpmIDYwOC82MDgvNjA4IDYxMC82MTAvNjEwIDYwOS82MDkvNjA5DQpmIDYxMS82MTEvNjExIDYxMi82MTIvNjEyIDYxMy82MTMvNjEzDQpmIDYxMi82MTIvNjEyIDYxNC82MTQvNjE0IDYxMy82MTMvNjEzDQpmIDYxNS82MTUvNjE1IDYxNi82MTYvNjE2IDYxNy82MTcvNjE3DQpmIDYxNi82MTYvNjE2IDYxOC82MTgvNjE4IDYxNy82MTcvNjE3DQpmIDYxOS82MTkvNjE5IDYyMC82MjAvNjIwIDYyMS82MjEvNjIxDQpmIDYyMC82MjAvNjIwIDYyMi82MjIvNjIyIDYyMS82MjEvNjIxDQpmIDYyMy82MjMvNjIzIDYyNC82MjQvNjI0IDYyNS82MjUvNjI1DQpmIDYyNC82MjQvNjI0IDYyNi82MjYvNjI2IDYyNS82MjUvNjI1DQpmIDYyNy82MjcvNjI3IDYyOC82MjgvNjI4IDYyOS82MjkvNjI5DQpmIDYyOC82MjgvNjI4IDYzMC82MzAvNjMwIDYyOS82MjkvNjI5DQpmIDYzMS82MzEvNjMxIDYzMi82MzIvNjMyIDYzMy82MzMvNjMzDQpmIDYzMi82MzIvNjMyIDYzNC82MzQvNjM0IDYzMy82MzMvNjMzDQpmIDYzNS82MzUvNjM1IDYzNi82MzYvNjM2IDYzNy82MzcvNjM3DQpmIDYzNi82MzYvNjM2IDYzOC82MzgvNjM4IDYzNy82MzcvNjM3DQpmIDYzOS82MzkvNjM5IDY0MC82NDAvNjQwIDY0MS82NDEvNjQxDQpmIDY0MC82NDAvNjQwIDY0Mi82NDIvNjQyIDY0MS82NDEvNjQxDQpmIDY0My82NDMvNjQzIDY0NC82NDQvNjQ0IDY0NS82NDUvNjQ1DQpmIDY0NC82NDQvNjQ0IDY0Ni82NDYvNjQ2IDY0NS82NDUvNjQ1DQpmIDY0Ny82NDcvNjQ3IDY0OC82NDgvNjQ4IDY0OS82NDkvNjQ5DQpmIDY0OC82NDgvNjQ4IDY1MC82NTAvNjUwIDY0OS82NDkvNjQ5DQpmIDY1MS82NTEvNjUxIDY1Mi82NTIvNjUyIDY1My82NTMvNjUzDQpmIDY1Mi82NTIvNjUyIDY1NC82NTQvNjU0IDY1My82NTMvNjUzDQpmIDY1NS82NTUvNjU1IDY1Ni82NTYvNjU2IDY1Ny82NTcvNjU3DQpmIDY1Ni82NTYvNjU2IDY1OC82NTgvNjU4IDY1Ny82NTcvNjU3DQpmIDY1OS82NTkvNjU5IDY2MC82NjAvNjYwIDY2MS82NjEvNjYxDQpmIDY2MC82NjAvNjYwIDY2Mi82NjIvNjYyIDY2MS82NjEvNjYxDQpmIDY2My82NjMvNjYzIDY2NC82NjQvNjY0IDY2NS82NjUvNjY1DQpmIDY2Ni82NjYvNjY2IDY2Ny82NjcvNjY3IDY2OC82NjgvNjY4DQpmIDY2OS82NjkvNjY5IDY3MC82NzAvNjcwIDY3MS82NzEvNjcxDQpmIDY3MC82NzAvNjcwIDY3Mi82NzIvNjcyIDY3MS82NzEvNjcxDQpmIDY3My82NzMvNjczIDY3NC82NzQvNjc0IDY3NS82NzUvNjc1DQpmIDY3NC82NzQvNjc0IDY3Ni82NzYvNjc2IDY3NS82NzUvNjc1DQpmIDY3Ny82NzcvNjc3IDY3OC82NzgvNjc4IDY3OS82NzkvNjc5DQpmIDY3OC82NzgvNjc4IDY4MC82ODAvNjgwIDY3OS82NzkvNjc5DQpmIDY4MS82ODEvNjgxIDY4Mi82ODIvNjgyIDY4My82ODMvNjgzDQpmIDY4Mi82ODIvNjgyIDY4NC82ODQvNjg0IDY4My82ODMvNjgzDQpmIDY4NS82ODUvNjg1IDY4Ni82ODYvNjg2IDY4Ny82ODcvNjg3DQpmIDY4Ni82ODYvNjg2IDY4OC82ODgvNjg4IDY4Ny82ODcvNjg3DQpmIDY4OS82ODkvNjg5IDY5MC82OTAvNjkwIDY5MS82OTEvNjkxDQpmIDY5MC82OTAvNjkwIDY5Mi82OTIvNjkyIDY5MS82OTEvNjkxDQpmIDY5My82OTMvNjkzIDY5NC82OTQvNjk0IDY5NS82OTUvNjk1DQpmIDY5NC82OTQvNjk0IDY5Ni82OTYvNjk2IDY5NS82OTUvNjk1DQpmIDY5Ny82OTcvNjk3IDY5NC82OTQvNjk0IDY5OC82OTgvNjk4DQpmIDY5NC82OTQvNjk0IDY5My82OTMvNjkzIDY5OC82OTgvNjk4DQpmIDY5OS82OTkvNjk5IDcwMC83MDAvNzAwIDcwMS83MDEvNzAxDQpmIDcwMC83MDAvNzAwIDcwMi83MDIvNzAyIDcwMS83MDEvNzAxDQpmIDcwMy83MDMvNzAzIDcwNC83MDQvNzA0IDcwNS83MDUvNzA1DQpmIDcwNC83MDQvNzA0IDcwNi83MDYvNzA2IDcwNS83MDUvNzA1DQpmIDcwNy83MDcvNzA3IDcwOC83MDgvNzA4IDcwOS83MDkvNzA5DQpmIDcxMC83MTAvNzEwIDcxMS83MTEvNzExIDcxMi83MTIvNzEyDQpmIDcxMS83MTEvNzExIDcxMy83MTMvNzEzIDcxMi83MTIvNzEyDQpmIDcxNC83MTQvNzE0IDcxNS83MTUvNzE1IDcxNi83MTYvNzE2DQpmIDcxNS83MTUvNzE1IDcxNy83MTcvNzE3IDcxNi83MTYvNzE2DQpmIDcxOC83MTgvNzE4IDcxOS83MTkvNzE5IDcyMC83MjAvNzIwDQpmIDcxOS83MTkvNzE5IDcyMS83MjEvNzIxIDcyMC83MjAvNzIwDQpmIDcxNi83MTYvNzE2IDcyMi83MjIvNzIyIDcxNC83MTQvNzE0DQpmIDcyMy83MjMvNzIzIDcyNC83MjQvNzI0IDcyNS83MjUvNzI1DQpmIDcyNi83MjYvNzI2IDcyNy83MjcvNzI3IDcyOC83MjgvNzI4DQpmIDcyNy83MjcvNzI3IDcyOS83MjkvNzI5IDcyOC83MjgvNzI4DQpmIDcxNS83MTUvNzE1IDczMC83MzAvNzMwIDcxNy83MTcvNzE3DQpmIDczMS83MzEvNzMxIDczMi83MzIvNzMyIDcyNS83MjUvNzI1DQpmIDczMi83MzIvNzMyIDczMy83MzMvNzMzIDcyNS83MjUvNzI1DQpmIDczNC83MzQvNzM0IDczNS83MzUvNzM1IDczNi83MzYvNzM2DQpmIDczNS83MzUvNzM1IDczNy83MzcvNzM3IDczNi83MzYvNzM2DQpmIDczOC83MzgvNzM4IDczOS83MzkvNzM5IDc0MC83NDAvNzQwDQpmIDczOS83MzkvNzM5IDc0MS83NDEvNzQxIDc0MC83NDAvNzQwDQpmIDc0Mi83NDIvNzQyIDc0My83NDMvNzQzIDc0NC83NDQvNzQ0DQpmIDc0My83NDMvNzQzIDc0NS83NDUvNzQ1IDc0NC83NDQvNzQ0DQpmIDc0Ni83NDYvNzQ2IDc0Ny83NDcvNzQ3IDc0OC83NDgvNzQ4DQpmIDc0Ny83NDcvNzQ3IDc0OS83NDkvNzQ5IDc0OC83NDgvNzQ4DQpmIDc1MC83NTAvNzUwIDc1MS83NTEvNzUxIDc1Mi83NTIvNzUyDQpmIDc1My83NTMvNzUzIDc1NC83NTQvNzU0IDc1NS83NTUvNzU1DQpmIDc1NC83NTQvNzU0IDc1Ni83NTYvNzU2IDc1NS83NTUvNzU1DQpmIDc1Ny83NTcvNzU3IDc1OC83NTgvNzU4IDc1OS83NTkvNzU5DQpmIDc1OC83NTgvNzU4IDc2MC83NjAvNzYwIDc1OS83NTkvNzU5DQpmIDc2MS83NjEvNzYxIDc2Mi83NjIvNzYyIDc2My83NjMvNzYzDQpmIDc2Mi83NjIvNzYyIDc2NC83NjQvNzY0IDc2My83NjMvNzYzDQpmIDc2NS83NjUvNzY1IDc2Ni83NjYvNzY2IDc2Ny83NjcvNzY3DQpmIDc2OC83NjgvNzY4IDc2OS83NjkvNzY5IDc3MC83NzAvNzcwDQpmIDc3MS83NzEvNzcxIDc3Mi83NzIvNzcyIDc3My83NzMvNzczDQpmIDc3Mi83NzIvNzcyIDc3NC83NzQvNzc0IDc3My83NzMvNzczDQpmIDc3NS83NzUvNzc1IDc3Ni83NzYvNzc2IDc3Ny83NzcvNzc3DQpmIDc3OC83NzgvNzc4IDc3OS83NzkvNzc5IDc0OC83NDgvNzQ4DQpmIDc4MC83ODAvNzgwIDc4MS83ODEvNzgxIDc4Mi83ODIvNzgyDQpmIDc4MS83ODEvNzgxIDc4My83ODMvNzgzIDc4Mi83ODIvNzgyDQpmIDc4NC83ODQvNzg0IDc4NS83ODUvNzg1IDc4Ni83ODYvNzg2DQpmIDc4NS83ODUvNzg1IDc4Ny83ODcvNzg3IDc4Ni83ODYvNzg2DQpmIDc4OC83ODgvNzg4IDc4OS83ODkvNzg5IDc5MC83OTAvNzkwDQpmIDc4OS83ODkvNzg5IDc5MS83OTEvNzkxIDc5MC83OTAvNzkwDQpmIDc5Mi83OTIvNzkyIDc5My83OTMvNzkzIDc5NC83OTQvNzk0DQpmIDc5My83OTMvNzkzIDc5NS83OTUvNzk1IDc5NC83OTQvNzk0DQpmIDc5Ni83OTYvNzk2IDc5Ny83OTcvNzk3IDc5OC83OTgvNzk4DQpmIDc3OC83NzgvNzc4IDc5OS83OTkvNzk5IDgwMC84MDAvODAwDQpmIDgwMS84MDEvODAxIDgwMi84MDIvODAyIDgwMy84MDMvODAzDQpmIDgwMi84MDIvODAyIDgwNC84MDQvODA0IDgwMy84MDMvODAzDQpmIDgwNS84MDUvODA1IDgwNi84MDYvODA2IDgwNy84MDcvODA3DQpmIDgwNi84MDYvODA2IDgwOC84MDgvODA4IDgwNy84MDcvODA3DQpmIDgwOS84MDkvODA5IDgxMC84MTAvODEwIDgxMS84MTEvODExDQpmIDgxMi84MTIvODEyIDgxMy84MTMvODEzIDgxNC84MTQvODE0DQpmIDgxNS84MTUvODE1IDgwNy84MDcvODA3IDgxNi84MTYvODE2DQpmIDgwNy84MDcvODA3IDgwOC84MDgvODA4IDgxNi84MTYvODE2DQpmIDgwOS84MDkvODA5IDgxNy84MTcvODE3IDgxMC84MTAvODEwDQpmIDgxMi84MTIvODEyIDgxNC84MTQvODE0IDgxOC84MTgvODE4DQpmIDgxOS84MTkvODE5IDgyMC84MjAvODIwIDgwMi84MDIvODAyDQpmIDgyMC84MjAvODIwIDgwNC84MDQvODA0IDgwMi84MDIvODAyDQpmIDgyMS84MjEvODIxIDgyMi84MjIvODIyIDgyMy84MjMvODIzDQpmIDgyNC84MjQvODI0IDgyNS84MjUvODI1IDgyNi84MjYvODI2DQpmIDgyMS84MjEvODIxIDgyNy84MjcvODI3IDgyMi84MjIvODIyDQpmIDgyNC84MjQvODI0IDgyNi84MjYvODI2IDgyOC84MjgvODI4DQpmIDgyOS84MjkvODI5IDgzMC84MzAvODMwIDgzMS84MzEvODMxDQpmIDgzMi84MzIvODMyIDgzMy84MzMvODMzIDgzNC84MzQvODM0DQpmIDgzNS84MzUvODM1IDgzNi84MzYvODM2IDgzNy84MzcvODM3DQpmIDgzNi84MzYvODM2IDgzOC84MzgvODM4IDgzNy84MzcvODM3DQpmIDgzOS84MzkvODM5IDg0MC84NDAvODQwIDg0MS84NDEvODQxDQpmIDg0Mi84NDIvODQyIDg0My84NDMvODQzIDg0NC84NDQvODQ0DQpmIDg0My84NDMvODQzIDg0NS84NDUvODQ1IDg0NC84NDQvODQ0DQpmIDg0Ni84NDYvODQ2IDg0Ny84NDcvODQ3IDg0OC84NDgvODQ4DQpmIDg0Ny84NDcvODQ3IDg0OS84NDkvODQ5IDg0OC84NDgvODQ4DQpmIDg1MC84NTAvODUwIDg1MS84NTEvODUxIDg1Mi84NTIvODUyDQpmIDg1MS84NTEvODUxIDg1My84NTMvODUzIDg1Mi84NTIvODUyDQpmIDg1NC84NTQvODU0IDg1NS84NTUvODU1IDg1Ni84NTYvODU2DQpmIDg1NS84NTUvODU1IDg0Ni84NDYvODQ2IDg1Ni84NTYvODU2DQpmIDg1Ny84NTcvODU3IDg1OC84NTgvODU4IDg1OS84NTkvODU5DQpmIDg1OC84NTgvODU4IDg2MC84NjAvODYwIDg1OS84NTkvODU5DQpmIDg2MS84NjEvODYxIDg2MC84NjAvODYwIDg2Mi84NjIvODYyDQpmIDg2MC84NjAvODYwIDg2My84NjMvODYzIDg2Mi84NjIvODYyDQpmIDg2NC84NjQvODY0IDg2NS84NjUvODY1IDg2Ni84NjYvODY2DQpmIDg2Ny84NjcvODY3IDg2NS84NjUvODY1IDg2OC84NjgvODY4DQpmIDg2OS84NjkvODY5IDg3MC84NzAvODcwIDg3MS84NzEvODcxDQpmIDg3MC84NzAvODcwIDg3Mi84NzIvODcyIDg3MS84NzEvODcxDQpmIDg3My84NzMvODczIDg3NC84NzQvODc0IDg3NS84NzUvODc1DQpmIDg3NC84NzQvODc0IDg3Ni84NzYvODc2IDg3NS84NzUvODc1DQpmIDg3Ny84NzcvODc3IDg3OC84NzgvODc4IDg3OS84NzkvODc5DQpmIDg3OC84NzgvODc4IDg4MC84ODAvODgwIDg3OS84NzkvODc5DQpmIDg4MS84ODEvODgxIDg4Mi84ODIvODgyIDg4My84ODMvODgzDQpmIDg4Mi84ODIvODgyIDg4NC84ODQvODg0IDg4My84ODMvODgzDQpmIDg4NS84ODUvODg1IDg4Ni84ODYvODg2IDg4Ny84ODcvODg3DQpmIDg4Ni84ODYvODg2IDg4OC84ODgvODg4IDg4Ny84ODcvODg3DQpmIDg4OS84ODkvODg5IDg5MC84OTAvODkwIDg5MS84OTEvODkxDQpmIDg5MC84OTAvODkwIDg5Mi84OTIvODkyIDg5MS84OTEvODkxDQpmIDg5My84OTMvODkzIDg5NC84OTQvODk0IDg5NS84OTUvODk1DQpmIDg5NC84OTQvODk0IDg5Ni84OTYvODk2IDg5NS84OTUvODk1DQpmIDg5Ny84OTcvODk3IDg5OC84OTgvODk4IDg5OS84OTkvODk5DQpmIDg5OC84OTgvODk4IDkwMC85MDAvOTAwIDg5OS84OTkvODk5DQpmIDkwMS85MDEvOTAxIDkwMi85MDIvOTAyIDkwMy85MDMvOTAzDQpmIDkwMi85MDIvOTAyIDkwNC85MDQvOTA0IDkwMy85MDMvOTAzDQpmIDkwNS85MDUvOTA1IDkwNi85MDYvOTA2IDkwNy85MDcvOTA3DQpmIDkwOC85MDgvOTA4IDkwOS85MDkvOTA5IDkxMC85MTAvOTEwDQpmIDkxMS85MTEvOTExIDkxMi85MTIvOTEyIDkwNi85MDYvOTA2DQpmIDkxMy85MTMvOTEzIDkxNC85MTQvOTE0IDkxNS85MTUvOTE1DQpmIDkxNi85MTYvOTE2IDkxNy85MTcvOTE3IDkxOC85MTgvOTE4DQpmIDkxNy85MTcvOTE3IDkxOS85MTkvOTE5IDkxOC85MTgvOTE4DQpmIDkyMC85MjAvOTIwIDkyMS85MjEvOTIxIDkyMi85MjIvOTIyDQpmIDkyMS85MjEvOTIxIDkyMy85MjMvOTIzIDkyMi85MjIvOTIyDQpmIDkxMS85MTEvOTExIDkwNi85MDYvOTA2IDkyNC85MjQvOTI0DQpmIDkyNS85MjUvOTI1IDkyNi85MjYvOTI2IDkyNy85MjcvOTI3DQpmIDkyNi85MjYvOTI2IDkyOC85MjgvOTI4IDkyNy85MjcvOTI3DQpmIDkyOS85MjkvOTI5IDkzMC85MzAvOTMwIDkzMS85MzEvOTMxDQpmIDkzMC85MzAvOTMwIDkyNS85MjUvOTI1IDkzMS85MzEvOTMxDQpmIDkwNi85MDYvOTA2IDkzMi85MzIvOTMyIDkyNC85MjQvOTI0DQpmIDkzMi85MzIvOTMyIDkzMy85MzMvOTMzIDkyNC85MjQvOTI0DQpmIDkzMC85MzAvOTMwIDkzNC85MzQvOTM0IDkyNS85MjUvOTI1DQpmIDkzNS85MzUvOTM1IDkzNi85MzYvOTM2IDkzNy85MzcvOTM3DQpmIDkzNi85MzYvOTM2IDkzOC85MzgvOTM4IDkzNy85MzcvOTM3DQpmIDkzOS85MzkvOTM5IDk0MC85NDAvOTQwIDk0MS85NDEvOTQxDQpmIDk0Mi85NDIvOTQyIDk0My85NDMvOTQzIDk0NC85NDQvOTQ0DQpmIDk0My85NDMvOTQzIDk0NS85NDUvOTQ1IDk0NC85NDQvOTQ0DQpmIDk0Ni85NDYvOTQ2IDk0Ny85NDcvOTQ3IDk0OC85NDgvOTQ4DQpmIDk0Ny85NDcvOTQ3IDk0OS85NDkvOTQ5IDk0OC85NDgvOTQ4DQpmIDk1MC85NTAvOTUwIDk1MS85NTEvOTUxIDk1Mi85NTIvOTUyDQpmIDk1MS85NTEvOTUxIDk1My85NTMvOTUzIDk1Mi85NTIvOTUyDQpmIDk1NC85NTQvOTU0IDk1NS85NTUvOTU1IDk1Ni85NTYvOTU2DQpmIDk1NS85NTUvOTU1IDk0Ni85NDYvOTQ2IDk1Ni85NTYvOTU2DQpmIDk1Ny85NTcvOTU3IDk1OC85NTgvOTU4IDk1OS85NTkvOTU5DQpmIDk1OC85NTgvOTU4IDk2MC85NjAvOTYwIDk1OS85NTkvOTU5DQpmIDk2MS85NjEvOTYxIDk2Mi85NjIvOTYyIDk2MC85NjAvOTYwDQpmIDk2Mi85NjIvOTYyIDk2My85NjMvOTYzIDk2MC85NjAvOTYwDQpmIDk2NC85NjQvOTY0IDk2NS85NjUvOTY1IDk2Ni85NjYvOTY2DQpmIDk2Ny85NjcvOTY3IDk2OC85NjgvOTY4IDk2Ni85NjYvOTY2DQpmIDk2OS85NjkvOTY5IDk3MC85NzAvOTcwIDk3MS85NzEvOTcxDQpmIDk3MC85NzAvOTcwIDk3Mi85NzIvOTcyIDk3MS85NzEvOTcxDQpmIDk3My85NzMvOTczIDk3NC85NzQvOTc0IDk3NS85NzUvOTc1DQpmIDk3NC85NzQvOTc0IDk3Ni85NzYvOTc2IDk3NS85NzUvOTc1DQpmIDk3Ny85NzcvOTc3IDk3OC85NzgvOTc4IDk3OS85NzkvOTc5DQpmIDk3OC85NzgvOTc4IDk4MC85ODAvOTgwIDk3OS85NzkvOTc5DQpmIDk4MS85ODEvOTgxIDk4Mi85ODIvOTgyIDk4My85ODMvOTgzDQpmIDk4Mi85ODIvOTgyIDk4NC85ODQvOTg0IDk4My85ODMvOTgzDQpmIDk4NS85ODUvOTg1IDk4Ni85ODYvOTg2IDk4Ny85ODcvOTg3DQpmIDk4Ni85ODYvOTg2IDk4OC85ODgvOTg4IDk4Ny85ODcvOTg3DQpmIDk4OS85ODkvOTg5IDk5MC85OTAvOTkwIDk5MS85OTEvOTkxDQpmIDk5MC85OTAvOTkwIDk5Mi85OTIvOTkyIDk5MS85OTEvOTkxDQpmIDk5My85OTMvOTkzIDk5NC85OTQvOTk0IDk5NS85OTUvOTk1DQpmIDk5NC85OTQvOTk0IDk5Ni85OTYvOTk2IDk5NS85OTUvOTk1DQpmIDk5Ny85OTcvOTk3IDk5OC85OTgvOTk4IDk5OS85OTkvOTk5DQpmIDk5OC85OTgvOTk4IDEwMDAvMTAwMC8xMDAwIDk5OS85OTkvOTk5DQpmIDEwMDEvMTAwMS8xMDAxIDEwMDIvMTAwMi8xMDAyIDEwMDMvMTAwMy8xMDAzDQpmIDEwMDIvMTAwMi8xMDAyIDEwMDQvMTAwNC8xMDA0IDEwMDMvMTAwMy8xMDAzDQpmIDEwMDUvMTAwNS8xMDA1IDEwMDYvMTAwNi8xMDA2IDEwMDcvMTAwNy8xMDA3DQpmIDEwMDgvMTAwOC8xMDA4IDEwMDkvMTAwOS8xMDA5IDEwMTAvMTAxMC8xMDEwDQpmIDEwMTEvMTAxMS8xMDExIDEwMDcvMTAwNy8xMDA3IDEwMTIvMTAxMi8xMDEyDQpmIDEwMTMvMTAxMy8xMDEzIDEwMTQvMTAxNC8xMDE0IDEwMTUvMTAxNS8xMDE1DQpmIDEwMTYvMTAxNi8xMDE2IDEwMTcvMTAxNy8xMDE3IDEwMTgvMTAxOC8xMDE4DQpmIDEwMTcvMTAxNy8xMDE3IDEwMTkvMTAxOS8xMDE5IDEwMTgvMTAxOC8xMDE4DQpmIDEwMjAvMTAyMC8xMDIwIDEwMjEvMTAyMS8xMDIxIDEwMjIvMTAyMi8xMDIyDQpmIDEwMjEvMTAyMS8xMDIxIDEwMjMvMTAyMy8xMDIzIDEwMjIvMTAyMi8xMDIyDQpmIDEwMTEvMTAxMS8xMDExIDEwMjQvMTAyNC8xMDI0IDEwMDcvMTAwNy8xMDA3DQpmIDEwMjUvMTAyNS8xMDI1IDEwMjYvMTAyNi8xMDI2IDEwMjcvMTAyNy8xMDI3DQpmIDEwMjYvMTAyNi8xMDI2IDEwMjgvMTAyOC8xMDI4IDEwMjcvMTAyNy8xMDI3DQpmIDEwMjkvMTAyOS8xMDI5IDEwMzAvMTAzMC8xMDMwIDEwMzEvMTAzMS8xMDMxDQpmIDEwMzAvMTAzMC8xMDMwIDEwMjUvMTAyNS8xMDI1IDEwMzEvMTAzMS8xMDMxDQpmIDEwMDcvMTAwNy8xMDA3IDEwMjQvMTAyNC8xMDI0IDEwMzIvMTAzMi8xMDMyDQpmIDEwMjQvMTAyNC8xMDI0IDEwMzMvMTAzMy8xMDMzIDEwMzIvMTAzMi8xMDMyDQpmIDEwMzEvMTAzMS8xMDMxIDEwMjUvMTAyNS8xMDI1IDEwMzQvMTAzNC8xMDM0DQpmIDEwMzUvMTAzNS8xMDM1IDEwMzYvMTAzNi8xMDM2IDEwMzcvMTAzNy8xMDM3DQpmIDEwMzYvMTAzNi8xMDM2IDEwMzgvMTAzOC8xMDM4IDEwMzcvMTAzNy8xMDM3DQpmIDEwMzkvMTAzOS8xMDM5IDEwNDAvMTA0MC8xMDQwIDEwNDEvMTA0MS8xMDQxDQpmIDEwNDIvMTA0Mi8xMDQyIDEwNDMvMTA0My8xMDQzIDEwNDQvMTA0NC8xMDQ0DQpmIDEwNDMvMTA0My8xMDQzIDEwNDUvMTA0NS8xMDQ1IDEwNDQvMTA0NC8xMDQ0DQpmIDEwNDYvMTA0Ni8xMDQ2IDEwNDcvMTA0Ny8xMDQ3IDEwNDgvMTA0OC8xMDQ4DQpmIDEwNDcvMTA0Ny8xMDQ3IDEwNDkvMTA0OS8xMDQ5IDEwNDgvMTA0OC8xMDQ4DQpmIDEwNTAvMTA1MC8xMDUwIDEwNTEvMTA1MS8xMDUxIDEwNTIvMTA1Mi8xMDUyDQpmIDEwNTEvMTA1MS8xMDUxIDEwNTMvMTA1My8xMDUzIDEwNTIvMTA1Mi8xMDUyDQpmIDEwNTQvMTA1NC8xMDU0IDEwNTUvMTA1NS8xMDU1IDEwNTYvMTA1Ni8xMDU2DQpmIDEwNTUvMTA1NS8xMDU1IDEwNDYvMTA0Ni8xMDQ2IDEwNTYvMTA1Ni8xMDU2DQpmIDEwNTcvMTA1Ny8xMDU3IDEwNTgvMTA1OC8xMDU4IDEwNTkvMTA1OS8xMDU5DQpmIDEwNTgvMTA1OC8xMDU4IDEwNjAvMTA2MC8xMDYwIDEwNTkvMTA1OS8xMDU5DQpmIDEwNjEvMTA2MS8xMDYxIDEwNjAvMTA2MC8xMDYwIDEwNjIvMTA2Mi8xMDYyDQpmIDEwNjAvMTA2MC8xMDYwIDEwNjMvMTA2My8xMDYzIDEwNjIvMTA2Mi8xMDYyDQpmIDEwNjQvMTA2NC8xMDY0IDEwNjUvMTA2NS8xMDY1IDEwNjYvMTA2Ni8xMDY2DQpmIDEwNjcvMTA2Ny8xMDY3IDEwNjUvMTA2NS8xMDY1IDEwNjgvMTA2OC8xMDY4DQpmIDEwNjkvMTA2OS8xMDY5IDEwNzAvMTA3MC8xMDcwIDEwNzEvMTA3MS8xMDcxDQpmIDEwNzAvMTA3MC8xMDcwIDEwNzIvMTA3Mi8xMDcyIDEwNzEvMTA3MS8xMDcxDQpmIDEwNzMvMTA3My8xMDczIDEwNzQvMTA3NC8xMDc0IDEwNzUvMTA3NS8xMDc1DQpmIDEwNzQvMTA3NC8xMDc0IDEwNzYvMTA3Ni8xMDc2IDEwNzUvMTA3NS8xMDc1DQpmIDEwNzcvMTA3Ny8xMDc3IDEwNzgvMTA3OC8xMDc4IDEwNzkvMTA3OS8xMDc5DQpmIDEwNzgvMTA3OC8xMDc4IDEwODAvMTA4MC8xMDgwIDEwNzkvMTA3OS8xMDc5DQpmIDEwODEvMTA4MS8xMDgxIDEwODIvMTA4Mi8xMDgyIDEwODMvMTA4My8xMDgzDQpmIDEwODIvMTA4Mi8xMDgyIDEwODQvMTA4NC8xMDg0IDEwODMvMTA4My8xMDgzDQpmIDEwODUvMTA4NS8xMDg1IDEwODYvMTA4Ni8xMDg2IDEwODcvMTA4Ny8xMDg3DQpmIDEwODYvMTA4Ni8xMDg2IDEwODgvMTA4OC8xMDg4IDEwODcvMTA4Ny8xMDg3DQpmIDEwODkvMTA4OS8xMDg5IDEwOTAvMTA5MC8xMDkwIDEwOTEvMTA5MS8xMDkxDQpmIDEwOTAvMTA5MC8xMDkwIDEwOTIvMTA5Mi8xMDkyIDEwOTEvMTA5MS8xMDkxDQpmIDEwOTMvMTA5My8xMDkzIDEwOTQvMTA5NC8xMDk0IDEwOTUvMTA5NS8xMDk1DQpmIDEwOTQvMTA5NC8xMDk0IDEwOTYvMTA5Ni8xMDk2IDEwOTUvMTA5NS8xMDk1DQpmIDEwOTcvMTA5Ny8xMDk3IDEwOTgvMTA5OC8xMDk4IDEwOTkvMTA5OS8xMDk5DQpmIDEwOTgvMTA5OC8xMDk4IDExMDAvMTEwMC8xMTAwIDEwOTkvMTA5OS8xMDk5DQpmIDExMDEvMTEwMS8xMTAxIDExMDIvMTEwMi8xMTAyIDExMDMvMTEwMy8xMTAzDQpmIDExMDIvMTEwMi8xMTAyIDExMDQvMTEwNC8xMTA0IDExMDMvMTEwMy8xMTAzDQpmIDExMDUvMTEwNS8xMTA1IDExMDYvMTEwNi8xMTA2IDExMDcvMTEwNy8xMTA3DQpmIDExMDgvMTEwOC8xMTA4IDExMDkvMTEwOS8xMTA5IDExMTAvMTExMC8xMTEwDQpmIDExMTEvMTExMS8xMTExIDExMTIvMTExMi8xMTEyIDExMDYvMTEwNi8xMTA2DQpmIDExMTMvMTExMy8xMTEzIDExMTQvMTExNC8xMTE0IDExMTUvMTExNS8xMTE1DQpmIDExMTYvMTExNi8xMTE2IDExMTcvMTExNy8xMTE3IDExMTgvMTExOC8xMTE4DQpmIDExMTcvMTExNy8xMTE3IDExMTkvMTExOS8xMTE5IDExMTgvMTExOC8xMTE4DQpmIDExMjAvMTEyMC8xMTIwIDExMjEvMTEyMS8xMTIxIDExMjIvMTEyMi8xMTIyDQpmIDExMjEvMTEyMS8xMTIxIDExMjMvMTEyMy8xMTIzIDExMjIvMTEyMi8xMTIyDQpmIDExMTEvMTExMS8xMTExIDExMDYvMTEwNi8xMTA2IDExMjQvMTEyNC8xMTI0DQpmIDExMjUvMTEyNS8xMTI1IDExMjYvMTEyNi8xMTI2IDExMjcvMTEyNy8xMTI3DQpmIDExMjYvMTEyNi8xMTI2IDExMjgvMTEyOC8xMTI4IDExMjcvMTEyNy8xMTI3DQpmIDExMjkvMTEyOS8xMTI5IDExMzAvMTEzMC8xMTMwIDExMzEvMTEzMS8xMTMxDQpmIDExMzAvMTEzMC8xMTMwIDExMjUvMTEyNS8xMTI1IDExMzEvMTEzMS8xMTMxDQpmIDExMDYvMTEwNi8xMTA2IDExMzIvMTEzMi8xMTMyIDExMjQvMTEyNC8xMTI0DQpmIDExMzIvMTEzMi8xMTMyIDExMzMvMTEzMy8xMTMzIDExMjQvMTEyNC8xMTI0DQpmIDExMzAvMTEzMC8xMTMwIDExMzQvMTEzNC8xMTM0IDExMjUvMTEyNS8xMTI1DQpmIDExMzUvMTEzNS8xMTM1IDExMzYvMTEzNi8xMTM2IDExMzcvMTEzNy8xMTM3DQpmIDExMzYvMTEzNi8xMTM2IDExMzgvMTEzOC8xMTM4IDExMzcvMTEzNy8xMTM3DQpmIDExMzkvMTEzOS8xMTM5IDExNDAvMTE0MC8xMTQwIDExNDEvMTE0MS8xMTQxDQpmIDExNDIvMTE0Mi8xMTQyIDExNDMvMTE0My8xMTQzIDExNDQvMTE0NC8xMTQ0DQpmIDExNDMvMTE0My8xMTQzIDExNDUvMTE0NS8xMTQ1IDExNDQvMTE0NC8xMTQ0DQpmIDExNDYvMTE0Ni8xMTQ2IDExNDcvMTE0Ny8xMTQ3IDExNDgvMTE0OC8xMTQ4DQpmIDExNDcvMTE0Ny8xMTQ3IDExNDkvMTE0OS8xMTQ5IDExNDgvMTE0OC8xMTQ4DQpmIDExNTAvMTE1MC8xMTUwIDExNTEvMTE1MS8xMTUxIDExNTIvMTE1Mi8xMTUyDQpmIDExNTEvMTE1MS8xMTUxIDExNTMvMTE1My8xMTUzIDExNTIvMTE1Mi8xMTUyDQpmIDExNTQvMTE1NC8xMTU0IDExNTUvMTE1NS8xMTU1IDExNTYvMTE1Ni8xMTU2DQpmIDExNTUvMTE1NS8xMTU1IDExNDYvMTE0Ni8xMTQ2IDExNTYvMTE1Ni8xMTU2DQpmIDExNTcvMTE1Ny8xMTU3IDExNTgvMTE1OC8xMTU4IDExNTkvMTE1OS8xMTU5DQpmIDExNTgvMTE1OC8xMTU4IDExNjAvMTE2MC8xMTYwIDExNTkvMTE1OS8xMTU5DQpmIDExNjEvMTE2MS8xMTYxIDExNjIvMTE2Mi8xMTYyIDExNjAvMTE2MC8xMTYwDQpmIDExNjIvMTE2Mi8xMTYyIDExNjMvMTE2My8xMTYzIDExNjAvMTE2MC8xMTYwDQpmIDExNjQvMTE2NC8xMTY0IDExNjUvMTE2NS8xMTY1IDExNjYvMTE2Ni8xMTY2DQpmIDExNjcvMTE2Ny8xMTY3IDExNjgvMTE2OC8xMTY4IDExNjYvMTE2Ni8xMTY2DQpmIDExNjkvMTE2OS8xMTY5IDExNzAvMTE3MC8xMTcwIDExNzEvMTE3MS8xMTcxDQpmIDExNzAvMTE3MC8xMTcwIDExNzIvMTE3Mi8xMTcyIDExNzEvMTE3MS8xMTcxDQpmIDExNzMvMTE3My8xMTczIDExNzQvMTE3NC8xMTc0IDExNzUvMTE3NS8xMTc1DQpmIDExNzQvMTE3NC8xMTc0IDExNzYvMTE3Ni8xMTc2IDExNzUvMTE3NS8xMTc1DQpmIDExNzcvMTE3Ny8xMTc3IDExNzgvMTE3OC8xMTc4IDExNzkvMTE3OS8xMTc5DQpmIDExNzgvMTE3OC8xMTc4IDExODAvMTE4MC8xMTgwIDExNzkvMTE3OS8xMTc5DQpmIDExODEvMTE4MS8xMTgxIDExODIvMTE4Mi8xMTgyIDExODMvMTE4My8xMTgzDQpmIDExODIvMTE4Mi8xMTgyIDExODQvMTE4NC8xMTg0IDExODMvMTE4My8xMTgzDQpmIDExODUvMTE4NS8xMTg1IDExODYvMTE4Ni8xMTg2IDExODcvMTE4Ny8xMTg3DQpmIDExODYvMTE4Ni8xMTg2IDExODgvMTE4OC8xMTg4IDExODcvMTE4Ny8xMTg3DQpmIDExODkvMTE4OS8xMTg5IDExOTAvMTE5MC8xMTkwIDExOTEvMTE5MS8xMTkxDQpmIDExOTAvMTE5MC8xMTkwIDExOTIvMTE5Mi8xMTkyIDExOTEvMTE5MS8xMTkxDQpmIDExOTMvMTE5My8xMTkzIDExOTQvMTE5NC8xMTk0IDExOTUvMTE5NS8xMTk1DQpmIDExOTQvMTE5NC8xMTk0IDExOTYvMTE5Ni8xMTk2IDExOTUvMTE5NS8xMTk1DQpmIDExOTcvMTE5Ny8xMTk3IDExOTgvMTE5OC8xMTk4IDExOTkvMTE5OS8xMTk5DQpmIDExOTgvMTE5OC8xMTk4IDEyMDAvMTIwMC8xMjAwIDExOTkvMTE5OS8xMTk5DQpmIDEyMDEvMTIwMS8xMjAxIDEyMDIvMTIwMi8xMjAyIDEyMDMvMTIwMy8xMjAzDQpmIDEyMDQvMTIwNC8xMjA0IDEyMDUvMTIwNS8xMjA1IDEyMDYvMTIwNi8xMjA2DQpmIDEyMDcvMTIwNy8xMjA3IDEyMDMvMTIwMy8xMjAzIDEyMDgvMTIwOC8xMjA4DQpmIDEyMDkvMTIwOS8xMjA5IDEyMTAvMTIxMC8xMjEwIDEyMTEvMTIxMS8xMjExDQpmIDEyMTIvMTIxMi8xMjEyIDEyMTMvMTIxMy8xMjEzIDEyMTQvMTIxNC8xMjE0DQpmIDEyMTMvMTIxMy8xMjEzIDEyMTUvMTIxNS8xMjE1IDEyMTQvMTIxNC8xMjE0DQpmIDEyMDcvMTIwNy8xMjA3IDEyMTYvMTIxNi8xMjE2IDEyMDMvMTIwMy8xMjAzDQpmIDEyMTcvMTIxNy8xMjE3IDEyMTgvMTIxOC8xMjE4IDEyMTkvMTIxOS8xMjE5DQpmIDEyMTgvMTIxOC8xMjE4IDEyMjAvMTIyMC8xMjIwIDEyMTkvMTIxOS8xMjE5DQpmIDEyMjEvMTIyMS8xMjIxIDEyMjIvMTIyMi8xMjIyIDEyMjMvMTIyMy8xMjIzDQpmIDEyMjIvMTIyMi8xMjIyIDEyMTcvMTIxNy8xMjE3IDEyMjMvMTIyMy8xMjIzDQpmIDEyMDMvMTIwMy8xMjAzIDEyMTYvMTIxNi8xMjE2IDEyMjQvMTIyNC8xMjI0DQpmIDEyMTYvMTIxNi8xMjE2IDEyMjUvMTIyNS8xMjI1IDEyMjQvMTIyNC8xMjI0DQpmIDEyMjMvMTIyMy8xMjIzIDEyMTcvMTIxNy8xMjE3IDEyMjYvMTIyNi8xMjI2DQpmIDEyMjcvMTIyNy8xMjI3IDEyMjgvMTIyOC8xMjI4IDEyMjkvMTIyOS8xMjI5DQpmIDEyMjgvMTIyOC8xMjI4IDEyMzAvMTIzMC8xMjMwIDEyMjkvMTIyOS8xMjI5DQpmIDEyMzEvMTIzMS8xMjMxIDEyMzIvMTIzMi8xMjMyIDEyMzMvMTIzMy8xMjMzDQpmIDEyMzQvMTIzNC8xMjM0IDEyMzUvMTIzNS8xMjM1IDEyMjgvMTIyOC8xMjI4DQpmIDEyMzUvMTIzNS8xMjM1IDEyMzAvMTIzMC8xMjMwIDEyMjgvMTIyOC8xMjI4DQpmIDEyMzYvMTIzNi8xMjM2IDEyMzcvMTIzNy8xMjM3IDEyMzgvMTIzOC8xMjM4DQpmIDEyMzEvMTIzMS8xMjMxIDEyMzkvMTIzOS8xMjM5IDEyMzIvMTIzMi8xMjMyDQpmIDEyNDAvMTI0MC8xMjQwIDEyNDEvMTI0MS8xMjQxIDEyNDIvMTI0Mi8xMjQyDQpmIDEyNDMvMTI0My8xMjQzIDEyNDQvMTI0NC8xMjQ0IDEyNDUvMTI0NS8xMjQ1DQpmIDEyNDQvMTI0NC8xMjQ0IDEyNDYvMTI0Ni8xMjQ2IDEyNDUvMTI0NS8xMjQ1DQpmIDEyNDcvMTI0Ny8xMjQ3IDEyNDgvMTI0OC8xMjQ4IDEyNDkvMTI0OS8xMjQ5DQpmIDEyNTAvMTI1MC8xMjUwIDEyNTEvMTI1MS8xMjUxIDEyNDQvMTI0NC8xMjQ0DQpmIDEyNTEvMTI1MS8xMjUxIDEyNDYvMTI0Ni8xMjQ2IDEyNDQvMTI0NC8xMjQ0DQpmIDEyNTIvMTI1Mi8xMjUyIDEyNTMvMTI1My8xMjUzIDEyNTQvMTI1NC8xMjU0DQpmIDEyNDcvMTI0Ny8xMjQ3IDEyNTUvMTI1NS8xMjU1IDEyNDgvMTI0OC8xMjQ4DQpmIDEyNTYvMTI1Ni8xMjU2IDEyNTcvMTI1Ny8xMjU3IDEyNTgvMTI1OC8xMjU4DQpmIDEyNTkvMTI1OS8xMjU5IDEyNjAvMTI2MC8xMjYwIDEyNjEvMTI2MS8xMjYxDQpmIDEyNjAvMTI2MC8xMjYwIDEyNjIvMTI2Mi8xMjYyIDEyNjEvMTI2MS8xMjYxDQpmIDEyNjMvMTI2My8xMjYzIDEyNjQvMTI2NC8xMjY0IDEyNjUvMTI2NS8xMjY1DQpmIDEyNjQvMTI2NC8xMjY0IDEyNjYvMTI2Ni8xMjY2IDEyNjUvMTI2NS8xMjY1DQpmIDEyNjcvMTI2Ny8xMjY3IDEyNjgvMTI2OC8xMjY4IDEyNjkvMTI2OS8xMjY5DQpmIDEyNjgvMTI2OC8xMjY4IDEyNzAvMTI3MC8xMjcwIDEyNjkvMTI2OS8xMjY5DQpmIDEyNzEvMTI3MS8xMjcxIDEyNzIvMTI3Mi8xMjcyIDEyNzMvMTI3My8xMjczDQpmIDEyNzIvMTI3Mi8xMjcyIDEyNzQvMTI3NC8xMjc0IDEyNzMvMTI3My8xMjczDQpmIDEyNzUvMTI3NS8xMjc1IDEyNzYvMTI3Ni8xMjc2IDEyNzcvMTI3Ny8xMjc3DQpmIDEyNzgvMTI3OC8xMjc4IDEyNzkvMTI3OS8xMjc5IDEyODAvMTI4MC8xMjgwDQpmIDEyODEvMTI4MS8xMjgxIDEyODIvMTI4Mi8xMjgyIDEyODMvMTI4My8xMjgzDQpmIDEyODIvMTI4Mi8xMjgyIDEyODQvMTI4NC8xMjg0IDEyODMvMTI4My8xMjgzDQpmIDEyODUvMTI4NS8xMjg1IDEyODYvMTI4Ni8xMjg2IDEyODcvMTI4Ny8xMjg3DQpmIDEyODYvMTI4Ni8xMjg2IDEyODgvMTI4OC8xMjg4IDEyODcvMTI4Ny8xMjg3DQpmIDEyODkvMTI4OS8xMjg5IDEyOTAvMTI5MC8xMjkwIDEyOTEvMTI5MS8xMjkxDQpmIDEyOTAvMTI5MC8xMjkwIDEyOTIvMTI5Mi8xMjkyIDEyOTEvMTI5MS8xMjkxDQpmIDEyOTEvMTI5MS8xMjkxIDEyOTIvMTI5Mi8xMjkyIDEyOTMvMTI5My8xMjkzDQpmIDEyOTIvMTI5Mi8xMjkyIDEyOTQvMTI5NC8xMjk0IDEyOTMvMTI5My8xMjkzDQpmIDEyOTMvMTI5My8xMjkzIDEyOTQvMTI5NC8xMjk0IDEyOTUvMTI5NS8xMjk1DQpmIDEyOTQvMTI5NC8xMjk0IDEyOTYvMTI5Ni8xMjk2IDEyOTUvMTI5NS8xMjk1DQpmIDEyOTUvMTI5NS8xMjk1IDEyOTYvMTI5Ni8xMjk2IDEyOTcvMTI5Ny8xMjk3DQpmIDEyOTYvMTI5Ni8xMjk2IDEyOTgvMTI5OC8xMjk4IDEyOTcvMTI5Ny8xMjk3DQpmIDEyOTcvMTI5Ny8xMjk3IDEyOTgvMTI5OC8xMjk4IDEyOTkvMTI5OS8xMjk5DQpmIDEyOTgvMTI5OC8xMjk4IDEzMDAvMTMwMC8xMzAwIDEyOTkvMTI5OS8xMjk5DQpmIDEyOTkvMTI5OS8xMjk5IDEzMDAvMTMwMC8xMzAwIDEzMDEvMTMwMS8xMzAxDQpmIDEzMDAvMTMwMC8xMzAwIDEzMDIvMTMwMi8xMzAyIDEzMDEvMTMwMS8xMzAxDQpmIDEzMDEvMTMwMS8xMzAxIDEzMDIvMTMwMi8xMzAyIDEzMDMvMTMwMy8xMzAzDQpmIDEzMDIvMTMwMi8xMzAyIDEzMDQvMTMwNC8xMzA0IDEzMDMvMTMwMy8xMzAzDQpmIDEzMDMvMTMwMy8xMzAzIDEzMDQvMTMwNC8xMzA0IDEzMDUvMTMwNS8xMzA1DQpmIDEzMDQvMTMwNC8xMzA0IDEzMDYvMTMwNi8xMzA2IDEzMDUvMTMwNS8xMzA1DQpmIDEzMDUvMTMwNS8xMzA1IDEzMDYvMTMwNi8xMzA2IDEzMDcvMTMwNy8xMzA3DQpmIDEzMDYvMTMwNi8xMzA2IDEzMDgvMTMwOC8xMzA4IDEzMDcvMTMwNy8xMzA3DQpmIDEzMDcvMTMwNy8xMzA3IDEzMDgvMTMwOC8xMzA4IDEzMDkvMTMwOS8xMzA5DQpmIDEzMDgvMTMwOC8xMzA4IDEzMTAvMTMxMC8xMzEwIDEzMDkvMTMwOS8xMzA5DQpmIDEzMDkvMTMwOS8xMzA5IDEzMTAvMTMxMC8xMzEwIDEzMTEvMTMxMS8xMzExDQpmIDEzMTAvMTMxMC8xMzEwIDEzMTIvMTMxMi8xMzEyIDEzMTEvMTMxMS8xMzExDQpmIDEzMTEvMTMxMS8xMzExIDEzMTIvMTMxMi8xMzEyIDEzMTMvMTMxMy8xMzEzDQpmIDEzMTIvMTMxMi8xMzEyIDEzMTQvMTMxNC8xMzE0IDEzMTMvMTMxMy8xMzEzDQpmIDEzMTUvMTMxNS8xMzE1IDEzMTYvMTMxNi8xMzE2IDEzMTcvMTMxNy8xMzE3DQpmIDEzMTYvMTMxNi8xMzE2IDEzMTgvMTMxOC8xMzE4IDEzMTcvMTMxNy8xMzE3DQpmIDEzMTkvMTMxOS8xMzE5IDEzMjAvMTMyMC8xMzIwIDEzMTUvMTMxNS8xMzE1DQpmIDEzMjAvMTMyMC8xMzIwIDEzMjEvMTMyMS8xMzIxIDEzMTUvMTMxNS8xMzE1DQpmIDEzMjIvMTMyMi8xMzIyIDEzMjMvMTMyMy8xMzIzIDEzMTkvMTMxOS8xMzE5DQpmIDEzMjMvMTMyMy8xMzIzIDEzMjQvMTMyNC8xMzI0IDEzMTkvMTMxOS8xMzE5DQpmIDEzMjUvMTMyNS8xMzI1IDEzMjYvMTMyNi8xMzI2IDEzMjIvMTMyMi8xMzIyDQpmIDEzMjYvMTMyNi8xMzI2IDEzMjcvMTMyNy8xMzI3IDEzMjIvMTMyMi8xMzIyDQpmIDEzMjgvMTMyOC8xMzI4IDEzMjkvMTMyOS8xMzI5IDEzMjUvMTMyNS8xMzI1DQpmIDEzMjkvMTMyOS8xMzI5IDEzMzAvMTMzMC8xMzMwIDEzMjUvMTMyNS8xMzI1DQpmIDEzMzEvMTMzMS8xMzMxIDEzMzIvMTMzMi8xMzMyIDEzMjgvMTMyOC8xMzI4DQpmIDEzMzIvMTMzMi8xMzMyIDEzMzMvMTMzMy8xMzMzIDEzMjgvMTMyOC8xMzI4DQpmIDEzMzQvMTMzNC8xMzM0IDEzMzUvMTMzNS8xMzM1IDEzMzEvMTMzMS8xMzMxDQpmIDEzMzUvMTMzNS8xMzM1IDEzMzYvMTMzNi8xMzM2IDEzMzEvMTMzMS8xMzMxDQpmIDEzMzcvMTMzNy8xMzM3IDEzMzgvMTMzOC8xMzM4IDEzMzQvMTMzNC8xMzM0DQpmIDEzMzgvMTMzOC8xMzM4IDEzMzkvMTMzOS8xMzM5IDEzMzQvMTMzNC8xMzM0DQpmIDEzNDAvMTM0MC8xMzQwIDEzNDEvMTM0MS8xMzQxIDEzMzcvMTMzNy8xMzM3DQpmIDEzNDEvMTM0MS8xMzQxIDEzNDIvMTM0Mi8xMzQyIDEzMzcvMTMzNy8xMzM3DQpmIDEzNDMvMTM0My8xMzQzIDEzNDQvMTM0NC8xMzQ0IDEzNDAvMTM0MC8xMzQwDQpmIDEzNDQvMTM0NC8xMzQ0IDEzNDUvMTM0NS8xMzQ1IDEzNDAvMTM0MC8xMzQwDQpmIDEzNDYvMTM0Ni8xMzQ2IDEzNDcvMTM0Ny8xMzQ3IDEzNDMvMTM0My8xMzQzDQpmIDEzNDcvMTM0Ny8xMzQ3IDEzNDgvMTM0OC8xMzQ4IDEzNDMvMTM0My8xMzQzDQpmIDEzNDkvMTM0OS8xMzQ5IDEzNTAvMTM1MC8xMzUwIDEzNDYvMTM0Ni8xMzQ2DQpmIDEzNTAvMTM1MC8xMzUwIDEzNTEvMTM1MS8xMzUxIDEzNDYvMTM0Ni8xMzQ2DQpmIDEzNTIvMTM1Mi8xMzUyIDEzNTMvMTM1My8xMzUzIDEzNTQvMTM1NC8xMzU0DQpmIDEzNTMvMTM1My8xMzUzIDEzNTUvMTM1NS8xMzU1IDEzNTQvMTM1NC8xMzU0DQpmIDEzNTYvMTM1Ni8xMzU2IDEzNTIvMTM1Mi8xMzUyIDEzNTcvMTM1Ny8xMzU3DQpmIDEzNTIvMTM1Mi8xMzUyIDEzNTQvMTM1NC8xMzU0IDEzNTcvMTM1Ny8xMzU3DQpmIDEzNTgvMTM1OC8xMzU4IDEzNTYvMTM1Ni8xMzU2IDEzNTkvMTM1OS8xMzU5DQpmIDEzNTYvMTM1Ni8xMzU2IDEzNTcvMTM1Ny8xMzU3IDEzNTkvMTM1OS8xMzU5DQpmIDEzNjAvMTM2MC8xMzYwIDEzNTgvMTM1OC8xMzU4IDEzNjEvMTM2MS8xMzYxDQpmIDEzNTgvMTM1OC8xMzU4IDEzNTkvMTM1OS8xMzU5IDEzNjEvMTM2MS8xMzYxDQpmIDEzNjIvMTM2Mi8xMzYyIDEzNjAvMTM2MC8xMzYwIDEzNjMvMTM2My8xMzYzDQpmIDEzNjAvMTM2MC8xMzYwIDEzNjEvMTM2MS8xMzYxIDEzNjMvMTM2My8xMzYzDQpmIDEzNjQvMTM2NC8xMzY0IDEzNjIvMTM2Mi8xMzYyIDEzNjUvMTM2NS8xMzY1DQpmIDEzNjIvMTM2Mi8xMzYyIDEzNjMvMTM2My8xMzYzIDEzNjUvMTM2NS8xMzY1DQpmIDEzNjYvMTM2Ni8xMzY2IDEzNjQvMTM2NC8xMzY0IDEzNjcvMTM2Ny8xMzY3DQpmIDEzNjQvMTM2NC8xMzY0IDEzNjUvMTM2NS8xMzY1IDEzNjcvMTM2Ny8xMzY3DQpmIDEzNjgvMTM2OC8xMzY4IDEzNjYvMTM2Ni8xMzY2IDEzNjkvMTM2OS8xMzY5DQpmIDEzNjYvMTM2Ni8xMzY2IDEzNjcvMTM2Ny8xMzY3IDEzNjkvMTM2OS8xMzY5DQpmIDEzNzAvMTM3MC8xMzcwIDEzNjgvMTM2OC8xMzY4IDEzNzEvMTM3MS8xMzcxDQpmIDEzNjgvMTM2OC8xMzY4IDEzNjkvMTM2OS8xMzY5IDEzNzEvMTM3MS8xMzcxDQpmIDEzNzIvMTM3Mi8xMzcyIDEzNzAvMTM3MC8xMzcwIDEzNzMvMTM3My8xMzczDQpmIDEzNzAvMTM3MC8xMzcwIDEzNzEvMTM3MS8xMzcxIDEzNzMvMTM3My8xMzczDQpmIDEzNzQvMTM3NC8xMzc0IDEzNzIvMTM3Mi8xMzcyIDEzNzUvMTM3NS8xMzc1DQpmIDEzNzIvMTM3Mi8xMzcyIDEzNzMvMTM3My8xMzczIDEzNzUvMTM3NS8xMzc1DQpmIDEzNzYvMTM3Ni8xMzc2IDEzNzQvMTM3NC8xMzc0IDEzNzcvMTM3Ny8xMzc3DQpmIDEzNzQvMTM3NC8xMzc0IDEzNzUvMTM3NS8xMzc1IDEzNzcvMTM3Ny8xMzc3DQpmIDEzNTQvMTM1NC8xMzU0IDEzNTUvMTM1NS8xMzU1IDEzNzgvMTM3OC8xMzc4DQpmIDEzNTUvMTM1NS8xMzU1IDEzNzkvMTM3OS8xMzc5IDEzNzgvMTM3OC8xMzc4DQpmIDEzNTcvMTM1Ny8xMzU3IDEzNTQvMTM1NC8xMzU0IDEzODAvMTM4MC8xMzgwDQpmIDEzNTQvMTM1NC8xMzU0IDEzNzgvMTM3OC8xMzc4IDEzODAvMTM4MC8xMzgwDQpmIDEzNTkvMTM1OS8xMzU5IDEzNTcvMTM1Ny8xMzU3IDEzODEvMTM4MS8xMzgxDQpmIDEzNTcvMTM1Ny8xMzU3IDEzODAvMTM4MC8xMzgwIDEzODEvMTM4MS8xMzgxDQpmIDEzNjEvMTM2MS8xMzYxIDEzNTkvMTM1OS8xMzU5IDEzODIvMTM4Mi8xMzgyDQpmIDEzNTkvMTM1OS8xMzU5IDEzODEvMTM4MS8xMzgxIDEzODIvMTM4Mi8xMzgyDQpmIDEzNjMvMTM2My8xMzYzIDEzNjEvMTM2MS8xMzYxIDEzODMvMTM4My8xMzgzDQpmIDEzNjEvMTM2MS8xMzYxIDEzODIvMTM4Mi8xMzgyIDEzODMvMTM4My8xMzgzDQpmIDEzNjUvMTM2NS8xMzY1IDEzNjMvMTM2My8xMzYzIDEzODQvMTM4NC8xMzg0DQpmIDEzNjMvMTM2My8xMzYzIDEzODMvMTM4My8xMzgzIDEzODQvMTM4NC8xMzg0DQpmIDEzNjcvMTM2Ny8xMzY3IDEzNjUvMTM2NS8xMzY1IDEzODUvMTM4NS8xMzg1DQpmIDEzNjUvMTM2NS8xMzY1IDEzODQvMTM4NC8xMzg0IDEzODUvMTM4NS8xMzg1DQpmIDEzNjkvMTM2OS8xMzY5IDEzNjcvMTM2Ny8xMzY3IDEzODYvMTM4Ni8xMzg2DQpmIDEzNjcvMTM2Ny8xMzY3IDEzODUvMTM4NS8xMzg1IDEzODYvMTM4Ni8xMzg2DQpmIDEzNzEvMTM3MS8xMzcxIDEzNjkvMTM2OS8xMzY5IDEzODcvMTM4Ny8xMzg3DQpmIDEzNjkvMTM2OS8xMzY5IDEzODYvMTM4Ni8xMzg2IDEzODcvMTM4Ny8xMzg3DQpmIDEzNzMvMTM3My8xMzczIDEzNzEvMTM3MS8xMzcxIDEzODgvMTM4OC8xMzg4DQpmIDEzNzEvMTM3MS8xMzcxIDEzODcvMTM4Ny8xMzg3IDEzODgvMTM4OC8xMzg4DQpmIDEzNzUvMTM3NS8xMzc1IDEzNzMvMTM3My8xMzczIDEzODkvMTM4OS8xMzg5DQpmIDEzNzMvMTM3My8xMzczIDEzODgvMTM4OC8xMzg4IDEzODkvMTM4OS8xMzg5DQpmIDEzNzcvMTM3Ny8xMzc3IDEzNzUvMTM3NS8xMzc1IDEzOTAvMTM5MC8xMzkwDQpmIDEzNzUvMTM3NS8xMzc1IDEzODkvMTM4OS8xMzg5IDEzOTAvMTM5MC8xMzkwDQpmIDEzOTEvMTM5MS8xMzkxIDEzOTIvMTM5Mi8xMzkyIDEzOTMvMTM5My8xMzkzDQpmIDEzOTQvMTM5NC8xMzk0IDEzOTUvMTM5NS8xMzk1IDEzOTEvMTM5MS8xMzkxDQpmIDEzOTYvMTM5Ni8xMzk2IDEzOTcvMTM5Ny8xMzk3IDEzOTQvMTM5NC8xMzk0DQpmIDEzOTgvMTM5OC8xMzk4IDEzOTkvMTM5OS8xMzk5IDEzOTYvMTM5Ni8xMzk2DQpmIDE0MDAvMTQwMC8xNDAwIDE0MDEvMTQwMS8xNDAxIDEzOTgvMTM5OC8xMzk4DQpmIDE0MDIvMTQwMi8xNDAyIDE0MDMvMTQwMy8xNDAzIDE0MDAvMTQwMC8xNDAwDQpmIDE0MDQvMTQwNC8xNDA0IDE0MDUvMTQwNS8xNDA1IDE0MDIvMTQwMi8xNDAyDQpmIDE0MDYvMTQwNi8xNDA2IDE0MDcvMTQwNy8xNDA3IDE0MDQvMTQwNC8xNDA0DQpmIDE0MDgvMTQwOC8xNDA4IDE0MDkvMTQwOS8xNDA5IDE0MDYvMTQwNi8xNDA2DQpmIDE0MTAvMTQxMC8xNDEwIDE0MTEvMTQxMS8xNDExIDE0MDgvMTQwOC8xNDA4DQpmIDE0MTIvMTQxMi8xNDEyIDE0MTMvMTQxMy8xNDEzIDE0MTAvMTQxMC8xNDEwDQpmIDE0MTQvMTQxNC8xNDE0IDE0MTUvMTQxNS8xNDE1IDE0MTIvMTQxMi8xNDEyDQpmIDE0MTYvMTQxNi8xNDE2IDE0MTcvMTQxNy8xNDE3IDE0MTgvMTQxOC8xNDE4DQpmIDE0MTkvMTQxOS8xNDE5IDE0MTYvMTQxNi8xNDE2IDE0MjAvMTQyMC8xNDIwDQpmIDE0MjEvMTQyMS8xNDIxIDE0MTkvMTQxOS8xNDE5IDE0MjIvMTQyMi8xNDIyDQpmIDE0MjMvMTQyMy8xNDIzIDE0MjEvMTQyMS8xNDIxIDE0MjQvMTQyNC8xNDI0DQpmIDE0MjUvMTQyNS8xNDI1IDE0MjMvMTQyMy8xNDIzIDE0MjYvMTQyNi8xNDI2DQpmIDE0MjcvMTQyNy8xNDI3IDE0MjUvMTQyNS8xNDI1IDE0MjgvMTQyOC8xNDI4DQpmIDE0MjkvMTQyOS8xNDI5IDE0MjcvMTQyNy8xNDI3IDE0MzAvMTQzMC8xNDMwDQpmIDE0MzEvMTQzMS8xNDMxIDE0MjkvMTQyOS8xNDI5IDE0MzIvMTQzMi8xNDMyDQpmIDE0MzMvMTQzMy8xNDMzIDE0MzEvMTQzMS8xNDMxIDE0MzQvMTQzNC8xNDM0DQpmIDE0MzUvMTQzNS8xNDM1IDE0MzMvMTQzMy8xNDMzIDE0MzYvMTQzNi8xNDM2DQpmIDE0MzcvMTQzNy8xNDM3IDE0MzUvMTQzNS8xNDM1IDE0MzgvMTQzOC8xNDM4DQpmIDE0MzkvMTQzOS8xNDM5IDE0MzcvMTQzNy8xNDM3IDE0NDAvMTQ0MC8xNDQwDQpmIDE0MTYvMTQxNi8xNDE2IDE0NDEvMTQ0MS8xNDQxIDE0MTcvMTQxNy8xNDE3DQpmIDE0NDEvMTQ0MS8xNDQxIDE0NDIvMTQ0Mi8xNDQyIDE0MTcvMTQxNy8xNDE3DQpmIDE0MTkvMTQxOS8xNDE5IDE0NDMvMTQ0My8xNDQzIDE0MTYvMTQxNi8xNDE2DQpmIDE0NDMvMTQ0My8xNDQzIDE0NDEvMTQ0MS8xNDQxIDE0MTYvMTQxNi8xNDE2DQpmIDE0MjEvMTQyMS8xNDIxIDE0NDQvMTQ0NC8xNDQ0IDE0MTkvMTQxOS8xNDE5DQpmIDE0NDQvMTQ0NC8xNDQ0IDE0NDMvMTQ0My8xNDQzIDE0MTkvMTQxOS8xNDE5DQpmIDE0MjMvMTQyMy8xNDIzIDE0NDUvMTQ0NS8xNDQ1IDE0MjEvMTQyMS8xNDIxDQpmIDE0NDUvMTQ0NS8xNDQ1IDE0NDQvMTQ0NC8xNDQ0IDE0MjEvMTQyMS8xNDIxDQpmIDE0MjUvMTQyNS8xNDI1IDE0NDYvMTQ0Ni8xNDQ2IDE0MjMvMTQyMy8xNDIzDQpmIDE0NDYvMTQ0Ni8xNDQ2IDE0NDUvMTQ0NS8xNDQ1IDE0MjMvMTQyMy8xNDIzDQpmIDE0MjcvMTQyNy8xNDI3IDE0NDcvMTQ0Ny8xNDQ3IDE0MjUvMTQyNS8xNDI1DQpmIDE0NDcvMTQ0Ny8xNDQ3IDE0NDYvMTQ0Ni8xNDQ2IDE0MjUvMTQyNS8xNDI1DQpmIDE0MjkvMTQyOS8xNDI5IDE0NDgvMTQ0OC8xNDQ4IDE0MjcvMTQyNy8xNDI3DQpmIDE0NDgvMTQ0OC8xNDQ4IDE0NDcvMTQ0Ny8xNDQ3IDE0MjcvMTQyNy8xNDI3DQpmIDE0MzEvMTQzMS8xNDMxIDE0NDkvMTQ0OS8xNDQ5IDE0MjkvMTQyOS8xNDI5DQpmIDE0NDkvMTQ0OS8xNDQ5IDE0NDgvMTQ0OC8xNDQ4IDE0MjkvMTQyOS8xNDI5DQpmIDE0MzMvMTQzMy8xNDMzIDE0NTAvMTQ1MC8xNDUwIDE0MzEvMTQzMS8xNDMxDQpmIDE0NTAvMTQ1MC8xNDUwIDE0NDkvMTQ0OS8xNDQ5IDE0MzEvMTQzMS8xNDMxDQpmIDE0MzUvMTQzNS8xNDM1IDE0NTEvMTQ1MS8xNDUxIDE0MzMvMTQzMy8xNDMzDQpmIDE0NTEvMTQ1MS8xNDUxIDE0NTAvMTQ1MC8xNDUwIDE0MzMvMTQzMy8xNDMzDQpmIDE0MzcvMTQzNy8xNDM3IDE0NTIvMTQ1Mi8xNDUyIDE0MzUvMTQzNS8xNDM1DQpmIDE0NTIvMTQ1Mi8xNDUyIDE0NTEvMTQ1MS8xNDUxIDE0MzUvMTQzNS8xNDM1DQpmIDE0MzkvMTQzOS8xNDM5IDE0NTMvMTQ1My8xNDUzIDE0MzcvMTQzNy8xNDM3DQpmIDE0NTMvMTQ1My8xNDUzIDE0NTIvMTQ1Mi8xNDUyIDE0MzcvMTQzNy8xNDM3DQpmIDE0NDEvMTQ0MS8xNDQxIDE0NTQvMTQ1NC8xNDU0IDE0NDIvMTQ0Mi8xNDQyDQpmIDE0NTQvMTQ1NC8xNDU0IDE0NTUvMTQ1NS8xNDU1IDE0NDIvMTQ0Mi8xNDQyDQpmIDE0NDMvMTQ0My8xNDQzIDE0NTYvMTQ1Ni8xNDU2IDE0NDEvMTQ0MS8xNDQxDQpmIDE0NTYvMTQ1Ni8xNDU2IDE0NTQvMTQ1NC8xNDU0IDE0NDEvMTQ0MS8xNDQxDQpmIDE0NDQvMTQ0NC8xNDQ0IDE0NTcvMTQ1Ny8xNDU3IDE0NDMvMTQ0My8xNDQzDQpmIDE0NTcvMTQ1Ny8xNDU3IDE0NTYvMTQ1Ni8xNDU2IDE0NDMvMTQ0My8xNDQzDQpmIDE0NDUvMTQ0NS8xNDQ1IDE0NTgvMTQ1OC8xNDU4IDE0NDQvMTQ0NC8xNDQ0DQpmIDE0NTgvMTQ1OC8xNDU4IDE0NTcvMTQ1Ny8xNDU3IDE0NDQvMTQ0NC8xNDQ0DQpmIDE0NDYvMTQ0Ni8xNDQ2IDE0NTkvMTQ1OS8xNDU5IDE0NDUvMTQ0NS8xNDQ1DQpmIDE0NTkvMTQ1OS8xNDU5IDE0NTgvMTQ1OC8xNDU4IDE0NDUvMTQ0NS8xNDQ1DQpmIDE0NDcvMTQ0Ny8xNDQ3IDE0NjAvMTQ2MC8xNDYwIDE0NDYvMTQ0Ni8xNDQ2DQpmIDE0NjAvMTQ2MC8xNDYwIDE0NTkvMTQ1OS8xNDU5IDE0NDYvMTQ0Ni8xNDQ2DQpmIDE0NDgvMTQ0OC8xNDQ4IDE0NjEvMTQ2MS8xNDYxIDE0NDcvMTQ0Ny8xNDQ3DQpmIDE0NjEvMTQ2MS8xNDYxIDE0NjAvMTQ2MC8xNDYwIDE0NDcvMTQ0Ny8xNDQ3DQpmIDE0NDkvMTQ0OS8xNDQ5IDE0NjIvMTQ2Mi8xNDYyIDE0NDgvMTQ0OC8xNDQ4DQpmIDE0NjIvMTQ2Mi8xNDYyIDE0NjEvMTQ2MS8xNDYxIDE0NDgvMTQ0OC8xNDQ4DQpmIDE0NTAvMTQ1MC8xNDUwIDE0NjMvMTQ2My8xNDYzIDE0NDkvMTQ0OS8xNDQ5DQpmIDE0NjMvMTQ2My8xNDYzIDE0NjIvMTQ2Mi8xNDYyIDE0NDkvMTQ0OS8xNDQ5DQpmIDE0NTEvMTQ1MS8xNDUxIDE0NjQvMTQ2NC8xNDY0IDE0NTAvMTQ1MC8xNDUwDQpmIDE0NjQvMTQ2NC8xNDY0IDE0NjMvMTQ2My8xNDYzIDE0NTAvMTQ1MC8xNDUwDQpmIDE0NTIvMTQ1Mi8xNDUyIDE0NjUvMTQ2NS8xNDY1IDE0NTEvMTQ1MS8xNDUxDQpmIDE0NjUvMTQ2NS8xNDY1IDE0NjQvMTQ2NC8xNDY0IDE0NTEvMTQ1MS8xNDUxDQpmIDE0NTMvMTQ1My8xNDUzIDE0NjYvMTQ2Ni8xNDY2IDE0NTIvMTQ1Mi8xNDUyDQpmIDE0NjYvMTQ2Ni8xNDY2IDE0NjUvMTQ2NS8xNDY1IDE0NTIvMTQ1Mi8xNDUyDQoNCg==" };

const modalTagInfoMarkup = (label, description) => {
  return description
    ? `<button type="button" class="modal-tag-info" data-tag-label="${escapeAttributeValue(label)}" data-tag-description="${escapeAttributeValue(description)}" aria-expanded="false">${escapeHtml(label)}</button>`
    : `<span>${escapeHtml(label)}</span>`;
};
const modalTagMarkup = tag => modalTagInfoMarkup(tagLabels[tag] || tag, modalTagDescription(tag));
const modalTags = item => visibleModalTags(item).map(modalTagMarkup).join("");
const battleTypeTag = item => item.battleType
  ? modalTagInfoMarkup(battleTypeLabel(item.battleType, item), battleTypeDescription(item.battleType, item))
  : "";
const spinTag = item => item.spin ? modalTagInfoMarkup(spinLabel(item.spin), spinDescription(item.spin)) : "";
const heightClassTag = item => item.heightClass ? modalTagInfoMarkup(heightClassLabel(item.heightClass), "") : "";
const beySystemTag = item => {
  const label = structureLabels[item.structure];
  const description = structureTagDescriptions[item.structure];
  return label && description ? modalTagInfoMarkup(label, description) : "";
};
const partTypeTag = item => {
  const label = typeLabels[item.type] || item.type || "";
  if (!label) return "";
  return modalTagInfoMarkup(label, partTypeTagDescriptions[item.type] || "");
};
const modalTagGroup = (tags, className = "") => tags ? `<div class="${["modal-tags", className].filter(Boolean).join(" ")}">${tags}</div>` : "";
const modalInfoSlot = (description = "", tags = "", className = "") => `<div class="${["modal-info-slot", className].filter(Boolean).join(" ")}"><div class="modal-slot-tags">${tags || ""}</div><p class="modal-description">${description || ""}</p></div>`;
const modalScrollArea = content => `<div class="modal-scroll-area">${content}</div>`;
function beyModalTags(item) {
  return modalTagGroup(`${beySystemTag(item)}${battleTypeTag(item)}${spinTag(item)}${modalTags(item)}`, "bey-modal-tags");
}
function partModalTags(item) {
  return modalTagGroup(`${partTypeTag(item)}${battleTypeTag(item)}${spinTag(item)}${heightClassTag(item)}${modalTags(item)}`);
}

let activeModalTagButton = null;
let modalTagPopover = null;
let modalTagPinned = false;
const isTouchPointer = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

function closeModalTagPopover() {
  if (activeModalTagButton) {
    activeModalTagButton.setAttribute("aria-expanded", "false");
    activeModalTagButton.removeAttribute("aria-describedby");
  }
  modalTagPopover?.remove();
  activeModalTagButton = null;
  modalTagPopover = null;
  modalTagPinned = false;
}

function positionModalTagPopover(button) {
  if (!modalTagPopover) return;
  const margin = 14;
  const gap = 8;
  const buttonRect = button.getBoundingClientRect();
  const popoverRect = modalTagPopover.getBoundingClientRect();
  let left = buttonRect.left;
  let top = buttonRect.bottom + gap;
  if (left + popoverRect.width > window.innerWidth - margin) left = window.innerWidth - margin - popoverRect.width;
  if (top + popoverRect.height > window.innerHeight - margin) top = buttonRect.top - popoverRect.height - gap;
  modalTagPopover.style.left = `${Math.max(margin, left)}px`;
  modalTagPopover.style.top = `${Math.max(margin, top)}px`;
}

function openModalTagPopover(button, { pinned = false } = {}) {
  const label = button.dataset.tagLabel || button.textContent.trim();
  const description = button.dataset.tagDescription || "";
  if (!description) return;
  if (activeModalTagButton === button && modalTagPopover) {
    modalTagPinned = modalTagPinned || pinned;
    button.setAttribute("aria-expanded", "true");
    positionModalTagPopover(button);
    return;
  }
  if (activeModalTagButton && activeModalTagButton !== button) closeModalTagPopover();
  activeModalTagButton = button;
  modalTagPinned = pinned;
  modalTagPopover = document.createElement("div");
  modalTagPopover.id = `modal-tag-popover-${Date.now()}`;
  modalTagPopover.className = "modal-tag-popover";
  modalTagPopover.setAttribute("role", "tooltip");
  modalTagPopover.innerHTML = `<strong>${escapeHtml(label)}</strong><p>${escapeHtml(description)}</p>`;
  modal.appendChild(modalTagPopover);
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-describedby", modalTagPopover.id);
  positionModalTagPopover(button);
}

function bindModalTagPopovers(scope = document) {
  scope.querySelectorAll(".modal-tag-info").forEach(button => {
    let focusOpened = false;
    button.addEventListener("mouseenter", () => {
      if (!isTouchPointer()) openModalTagPopover(button);
    });
    button.addEventListener("mouseleave", () => {
      if (!isTouchPointer() && !modalTagPinned) closeModalTagPopover();
    });
    button.addEventListener("focus", () => {
      focusOpened = true;
      openModalTagPopover(button);
      setTimeout(() => { focusOpened = false; }, 0);
    });
    button.addEventListener("blur", () => {
      setTimeout(() => {
        if (!modalTagPinned) closeModalTagPopover();
      }, 0);
    });
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      if (focusOpened && activeModalTagButton === button) {
        modalTagPinned = true;
        return;
      }
      if (activeModalTagButton === button && modalTagPinned) closeModalTagPopover();
      else openModalTagPopover(button, { pinned: true });
    });
  });
}

function beyDetailSections(item, region) {
  const info = item.parts.length ? `<section class="modal-section mounted-parts"><p class="mounted-title">구성</p><div class="modal-section-scroll mounted-parts-list">${item.parts.map(partId => {
    const part = itemsById.get(partId);
    return `<a class="ui-list-link mounted-link" href="#${part.id}" data-part-id="${part.id}"><span>${typeLabels[part.type]}</span><strong>${itemDisplayName(part, region)}</strong><b>→</b></a>`;
  }).join("")}</div></section>` : "";
  return info;
}

let modelViewerCleanup = null;
let threeModules = null;

async function loadThreeModules() {
  if (!threeModules) {
    const [THREE, { OBJLoader }] = await Promise.all([
      import("https://esm.sh/three@0.160.0"),
      import("https://esm.sh/three@0.160.0/examples/jsm/loaders/OBJLoader.js")
    ]);
    threeModules = { THREE, OBJLoader };
  }
  return threeModules;
}

async function initModelViewer() {
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  const container = document.querySelector(".model-viewer");
  if (!container) return;

  const { THREE, OBJLoader } = await loadThreeModules();
  if (!document.body.contains(container)) return;

  const width = Math.max(container.clientWidth, 260);
  const height = Math.max(container.clientHeight, 300);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 0, 5.35);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  container.textContent = "";
  container.appendChild(renderer.domElement);
  const resetButton = document.createElement("button");
  resetButton.className = "ui-button model-reset";
  resetButton.type = "button";
  resetButton.textContent = "기본 위치";
  container.appendChild(resetButton);

  scene.add(new THREE.HemisphereLight(0xffffff, 0x263241, 2.2));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
  keyLight.position.set(3, 4, 5);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0x8fe8ff, 1.5);
  rimLight.position.set(-4, 2, -2);
  scene.add(rimLight);

  const defaultCameraPosition = new THREE.Vector3(0, 0, 5.35);
  const defaultModelRotation = new THREE.Euler(-1.5, 0, 0);
  const modelRoot = new THREE.Group();
  scene.add(modelRoot);
  const resetView = () => {
    camera.position.copy(defaultCameraPosition);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    modelRoot.rotation.copy(defaultModelRotation);
  };
  resetButton.addEventListener("click", resetView);

  let isDragging = false;
  let lastPointer = { x: 0, y: 0 };
  const rotateModel = event => {
    if (!isDragging) return;
    const deltaX = event.clientX - lastPointer.x;
    const deltaY = event.clientY - lastPointer.y;
    modelRoot.rotation.y += deltaX * 0.01;
    modelRoot.rotation.x += deltaY * 0.01;
    lastPointer = { x: event.clientX, y: event.clientY };
  };
  const startDrag = event => {
    isDragging = true;
    lastPointer = { x: event.clientX, y: event.clientY };
    renderer.domElement.setPointerCapture(event.pointerId);
  };
  const stopDrag = event => {
    isDragging = false;
    if (renderer.domElement.hasPointerCapture(event.pointerId)) {
      renderer.domElement.releasePointerCapture(event.pointerId);
    }
  };
  const zoomModel = event => {
    event.preventDefault();
    camera.position.z = Math.min(8.8, Math.max(3.5, camera.position.z + event.deltaY * 0.002));
  };
  renderer.domElement.addEventListener("pointerdown", startDrag);
  renderer.domElement.addEventListener("pointermove", rotateModel);
  renderer.domElement.addEventListener("pointerup", stopDrag);
  renderer.domElement.addEventListener("pointercancel", stopDrag);
  renderer.domElement.addEventListener("wheel", zoomModel, { passive: false });

  let active = true;
  const loader = new OBJLoader();
  const handleObject = object => {
    if (!active) return;
    object.traverse(child => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xb8c3c8,
          metalness: 0.72,
          roughness: 0.34
        });
      }
    });
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    object.position.sub(center);
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    object.scale.multiplyScalar(1.62 / maxAxis);
    object.rotation.x = -Math.PI / 2;
    object.updateMatrixWorld(true);
    const rotatedCenter = new THREE.Box3().setFromObject(object).getCenter(new THREE.Vector3());
    object.position.sub(rotatedCenter);
    modelRoot.add(object);
    resetView();
  };
  if (container.dataset.modelKey && embeddedModels[container.dataset.modelKey]) {
    handleObject(loader.parse(atob(embeddedModels[container.dataset.modelKey])));
  } else {
    loader.load(container.dataset.model, handleObject, undefined, () => {
      container.innerHTML = "<p>3D 모델을 불러오지 못했습니다.</p>";
    });
  }

  const render = () => {
    if (!active) return;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  modelViewerCleanup = () => {
    active = false;
    resetButton.removeEventListener("click", resetView);
    renderer.domElement.removeEventListener("pointerdown", startDrag);
    renderer.domElement.removeEventListener("pointermove", rotateModel);
    renderer.domElement.removeEventListener("pointerup", stopDrag);
    renderer.domElement.removeEventListener("pointercancel", stopDrag);
    renderer.domElement.removeEventListener("wheel", zoomModel);
    renderer.dispose();
  };
}

const catalogItemCard = item => `
    <button class="ui-card-button catalog-card${item.type === "bey" ? " bey-card" : ""}" data-id="${item.id}">
      <div class="catalog-card-visual">${cardVisualMarkup(item)}</div>
      ${cardInfo(item)}
    </button>`;
const catalogCard = item => item.category ? toolsCard(item) : catalogItemCard(item);

function renderCatalogItems() {
  renderCatalogCards({
    gridSelector: "#catalogGrid",
    getItems: visibleCatalogItems,
    cardTemplate: catalogCard
  });
  updateCatalogCount();
}

const catalogTypeGroups = {
  bey: ["bey"],
  parts: ["face", "stoneface", "wheel", "clearwheel", "4dclearwheel", "lightwheel", "metalwheel", "4dmetalwheel", "chromewheel", "crystalwheel", "track", "bottom", "4dbottom"],
  face: ["face", "stoneface"],
  wheel: ["wheel", "clearwheel", "4dclearwheel", "lightwheel", "metalwheel", "4dmetalwheel", "chromewheel", "crystalwheel"],
  bottom: ["bottom", "4dbottom"],
  track: ["track"],
  bitchip: ["bitchip"],
  attackring: ["attackring"],
  weightdisk: ["weightdisk"],
  bladebase: ["bladebase"],
  gear: ["gear"],
  layer: ["layer"],
  disk: ["disk"],
  driver: ["driver"],
  blade: ["blade"],
  ratchet: ["ratchet"],
  bit: ["bit"]
};
const modalContextStorageKey = "beyArchiveModalContext";
const modalContextOptions = options => {
  const context = {};
  ["backId", "backProductId", "region", "series", "releaseQuery", "animeTab", "animeRegion", "animeSeason", "animeQuery"].forEach(key => {
    if (options?.[key]) context[key] = options[key];
  });
  if (options?.backRelease) context.backRelease = true;
  if (options?.fromAnimeList) context.fromAnimeList = true;
  if (options?.releaseSort?.key && options?.releaseSort?.direction) context.releaseSort = options.releaseSort;
  return context;
};
function rememberModalContext(kind, id, options = {}) {
  try {
    sessionStorage.setItem(modalContextStorageKey, JSON.stringify({ kind, id, options: modalContextOptions(options) }));
  } catch {
    // Browsers can disable sessionStorage; the modal still works without refresh restoration.
  }
}
function restoredModalContext(id) {
  try {
    const context = JSON.parse(sessionStorage.getItem(modalContextStorageKey) || "null");
    return context?.id === id ? context : null;
  } catch {
    return null;
  }
}
function clearModalContext() {
  try {
    sessionStorage.removeItem(modalContextStorageKey);
  } catch {
    // Ignore storage restrictions.
  }
}

const releaseSortableColumns = {
  no: "번호",
  kind: "종류",
  release: "발매",
  price: "가격"
};
const releaseTableSearchText = (item, region = activeReleaseRegion) => {
  const release = productRelease(item, region);
  return [
    release.no || "",
    release.name || item.name || "",
    release.kind || "",
    releaseDateLabel(release.releaseDate || release.release),
    priceLabel(release.price, region)
  ].join(" ");
};
const releaseSortTieBreak = (a, b, region = activeReleaseRegion) => {
  const serialDiff = productSerialNumber(a, region) - productSerialNumber(b, region);
  if (serialDiff) return serialDiff;
  const releaseA = productRelease(a, region);
  const releaseB = productRelease(b, region);
  return (releaseA.no || a.no || "").localeCompare(releaseB.no || b.no || "", "ko", { numeric: true });
};
const releaseDateNameTieBreak = (a, b, releaseA, releaseB) => {
  const dateDiff = releaseDateSortValue(releaseA.releaseDate || releaseA.release) - releaseDateSortValue(releaseB.releaseDate || releaseB.release);
  if (dateDiff) return dateDiff;
  const nameDiff = (releaseA.name || a.name || "").localeCompare(releaseB.name || b.name || "", "ko", { numeric: true });
  if (nameDiff) return nameDiff;
  return a.id.localeCompare(b.id, "ko", { numeric: true });
};
const compareReleaseTableItemsAsc = (a, b, key = activeReleaseSort.key, region = activeReleaseRegion) => {
  const releaseA = productRelease(a, region);
  const releaseB = productRelease(b, region);
  if (key === "no") {
    const noA = releaseA.no || "";
    const noB = releaseB.no || "";
    if (!noA && noB) return 1;
    if (noA && !noB) return -1;
    if (!noA && !noB) return releaseDateNameTieBreak(a, b, releaseA, releaseB);
    const noDiff = noA.localeCompare(noB, "ko", { numeric: true });
    if (noDiff) return noDiff;
    return releaseDateNameTieBreak(a, b, releaseA, releaseB);
  }
  if (key === "kind") {
    const kindDiff = releaseKindSortValue(releaseA.kind) - releaseKindSortValue(releaseB.kind);
    if (kindDiff) return kindDiff;
    return releaseSortTieBreak(a, b, region);
  }
  if (key === "price") {
    const priceDiff = releasePriceSortValue(releaseA.price) - releasePriceSortValue(releaseB.price);
    if (priceDiff) return priceDiff;
    return releaseSortTieBreak(a, b, region);
  }
  return compareProductReleaseOrder(a, b, region);
};
const visibleReleaseTableItems = (region = activeReleaseRegion, series = activeReleaseSeries) => {
  const query = activeReleaseQuery.trim();
  const sortedItems = productItems
    .slice()
    .filter(item => item.series === series && productReleasedInRegion(item, region))
    .filter(item => matchesSearchText(releaseTableSearchText(item, region), query))
    .sort((a, b) => compareReleaseTableItemsAsc(a, b, activeReleaseSort.key, region));
  return activeReleaseSort.direction === "desc" ? sortedItems.reverse() : sortedItems;
};
const releaseSortSymbol = key => {
  if (activeReleaseSort.key !== key) return "\u2195";
  return activeReleaseSort.direction === "asc" ? "\u2191" : "\u2193";
};
const releaseSortHeader = (key, label) => {
  const active = activeReleaseSort.key === key;
  const direction = active ? activeReleaseSort.direction : "none";
  const nextDirection = active && activeReleaseSort.direction === "asc" ? "내림차순" : "오름차순";
  return `<th aria-sort="${direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none"}">
    <button class="ui-button release-sort-button${active ? " active" : ""}" type="button" data-release-sort="${key}" aria-label="${label} ${nextDirection} 정렬">
      <span class="release-sort-label">${label}</span><span class="release-sort-mark" aria-hidden="true">${releaseSortSymbol(key)}</span>
    </button>
  </th>`;
};
const releaseTableHead = () => `<thead>
  <tr>
    ${releaseSortHeader("no", releaseSortableColumns.no)}
    <th>제품명</th>
    ${releaseSortHeader("kind", releaseSortableColumns.kind)}
    ${releaseSortHeader("release", releaseSortableColumns.release)}
    ${releaseSortHeader("price", releaseSortableColumns.price)}
  </tr>
</thead>`;
const productReleaseTableRows = (region = activeReleaseRegion, series = activeReleaseSeries) => {
  const rows = visibleReleaseTableItems(region, series).map(item => {
    const release = productRelease(item, region);
    const releaseDate = release.releaseDate || release.release;
    return `<tr class="release-product-row" role="button" tabindex="0" data-product-id="${item.id}" data-release-region="${region}">
    <td>${release.no || ""}</td>
    <td><span class="release-product-link">${release.name || item.name}</span></td>
    <td>${release.kind || ""}</td>
    <td>${responsiveDateSpans("release-date-full", "release-date-compact", releaseDateLabel(releaseDate), releaseDateCompactLabel(releaseDate))}</td>
    <td>${priceLabel(release.price, region)}</td>
  </tr>`;
  }).join("");
  return rows || `<tr class="release-empty-row"><td colspan="5">검색 결과가 없습니다.</td></tr>`;
};
const releaseTableMarkup = (region = activeReleaseRegion, series = activeReleaseSeries) => `<div class="ui-table-scroll modal-section-scroll release-table-scroll">
  <table class="ui-data-table release-table">
    ${releaseTableHead()}
    <tbody>${productReleaseTableRows(region, series)}</tbody>
  </table>
</div>`;
const rememberReleaseModalContext = () => rememberModalContext("category-release", "CATEGORY-RELEASE", {
  region: activeReleaseRegion,
  series: activeReleaseSeries,
  releaseSort: activeReleaseSort,
  releaseQuery: activeReleaseQuery
});

function renderProductReleaseTable(modalContentRoot = document) {
  const releaseTableSection = modalContentRoot.querySelector(".release-table-section");
  if (!releaseTableSection) return;
  releaseTableSection.innerHTML = releaseTableMarkup(activeReleaseRegion, activeReleaseSeries);
  bindProductReleaseTableRows(releaseTableSection);
}

function bindProductReleaseTableRows(tableRoot = document) {
  const openReleaseRow = releaseRow => {
    const region = releaseRegionLabels[releaseRow.dataset.releaseRegion] ? releaseRow.dataset.releaseRegion : activeReleaseRegion;
    openProductDetail(releaseRow.dataset.productId, { backRelease: true, region });
  };
  tableRoot.querySelectorAll(".release-product-row[data-product-id]").forEach(releaseRow => {
    releaseRow.addEventListener("click", event => {
      event.preventDefault();
      openReleaseRow(releaseRow);
    });
    releaseRow.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openReleaseRow(releaseRow);
    });
  });
  tableRoot.querySelectorAll("button[data-release-sort]").forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    const key = event.currentTarget.dataset.releaseSort;
    if (!releaseSortableColumns[key]) return;
    activeReleaseSort = activeReleaseSort.key === key
      ? { key, direction: activeReleaseSort.direction === "asc" ? "desc" : "asc" }
      : { key, direction: "asc" };
    rememberReleaseModalContext();
    renderProductReleaseTable(document.querySelector("#modalContent"));
  }));
}

function bindProductReleaseTable(modalContentRoot = document) {
  bindProductReleaseTableRows(modalContentRoot);
  modalContentRoot.querySelectorAll("button[data-release-region]").forEach(button => button.addEventListener("click", event => {
    activeReleaseRegion = event.currentTarget.dataset.releaseRegion;
    openCategoryReleaseDetail({ region: activeReleaseRegion, series: activeReleaseSeries });
  }));
  modalContentRoot.querySelectorAll("button[data-release-series]").forEach(button => button.addEventListener("click", event => {
    setDropdownOption(event.currentTarget);
    activeReleaseSeries = event.currentTarget.dataset.releaseSeries;
    openCategoryReleaseDetail({ region: activeReleaseRegion, series: activeReleaseSeries });
  }));
  const releaseSearch = modalContentRoot.querySelector("#releaseSearchInput");
  bindScopedSearchInput(releaseSearch, ".release-search-box", searchInput => {
    activeReleaseQuery = searchInput.value.trim();
    rememberReleaseModalContext();
    renderProductReleaseTable(modalContentRoot);
  });
}

function openCategoryReleaseDetail(options = {}) {
  if (options.region && releaseRegionLabels[options.region]) activeReleaseRegion = options.region;
  if (options.series && releaseSeriesLabels[options.series]) activeReleaseSeries = options.series;
  if (options.releaseSort?.key && releaseSortableColumns[options.releaseSort.key]) {
    activeReleaseSort = { key: options.releaseSort.key, direction: options.releaseSort.direction === "desc" ? "desc" : "asc" };
  }
  if (typeof options.releaseQuery === "string") activeReleaseQuery = options.releaseQuery;
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  const content = document.querySelector("#modalContent");
  content.innerHTML = `<div class="modal-inner category-release-modal">
    <div class="modal-info category-release-info">
      <div class="overview-title-row">
        <h3 class="category-title">출시 정보</h3>
      </div>
      <div class="modal-body-block">
        ${releaseControls()}
        <section class="modal-section release-table-section">
          ${releaseTableMarkup(activeReleaseRegion, activeReleaseSeries)}
        </section>
      </div>
    </div>
  </div>`;
  bindProductReleaseTable(content);
  rememberReleaseModalContext();
  window.location.hash = "CATEGORY-RELEASE";
  openModal();
}

const animeInfo = {
  title: "메탈베이블레이드",
  overview: [],
  characters: [],
  episodes: [
    { no: "1화", season: "metal-fight", titles: { kr: "땅으로 내려온 천마", jp: "" }, airDates: { kr: "2009-09-23", jp: "" }, note: "" },
    { no: "2화", season: "metal-fight", titles: { kr: "사자의 이빨", jp: "" }, airDates: { kr: "2009-09-23", jp: "" }, note: "" },
    { no: "3화", season: "metal-fight", titles: { kr: "늑대의 야망", jp: "" }, airDates: { kr: "2009-09-24", jp: "" }, note: "" },
    { no: "4화", season: "metal-fight", titles: { kr: "돌진 황소 파워", jp: "" }, airDates: { kr: "2009-09-30", jp: "" }, note: "" },
    { no: "5화", season: "metal-fight", titles: { kr: "복수의 꽃게", jp: "" }, airDates: { kr: "2009-09-30", jp: "" }, note: "" },
    { no: "6화", season: "metal-fight", titles: { kr: "아쿠아리오의 도전", jp: "" }, airDates: { kr: "2009-10-01", jp: "" }, note: "" },
    { no: "7화", season: "metal-fight", titles: { kr: "사지타리오의 필살기", jp: "" }, airDates: { kr: "2009-10-07", jp: "" }, note: "" },
    { no: "8화", season: "metal-fight", titles: { kr: "메르시의 위험한 함정", jp: "" }, airDates: { kr: "2009-10-07", jp: "" }, note: "" },
    { no: "9화", season: "metal-fight", titles: { kr: "사자의 역습", jp: "" }, airDates: { kr: "2009-10-08", jp: "" }, note: "" },
    { no: "10화", season: "metal-fight", titles: { kr: "격돌! 강타 대 태사자", jp: "" }, airDates: { kr: "2009-10-14", jp: "" }, note: "" },
    { no: "11화", season: "metal-fight", titles: { kr: "늑대를 쫓아라", jp: "" }, airDates: { kr: "2009-10-14", jp: "" }, note: "" },
    { no: "12화", season: "metal-fight", titles: { kr: "다크블랙홀의 성을 습격하라!", jp: "" }, airDates: { kr: "2009-10-15", jp: "" }, note: "" },
    { no: "13화", season: "metal-fight", titles: { kr: "엘드라고의 부활", jp: "" }, airDates: { kr: "2009-10-21", jp: "" }, note: "" },
    { no: "14화", season: "metal-fight", titles: { kr: "유성의 기억", jp: "" }, airDates: { kr: "2009-10-21", jp: "" }, note: "" },
    { no: "15화", season: "metal-fight", titles: { kr: "수수께끼의 동산도령", jp: "" }, airDates: { kr: "2009-10-22", jp: "" }, note: "" },
    { no: "16화", season: "metal-fight", titles: { kr: "화려한 아리에스", jp: "" }, airDates: { kr: "2009-10-28", jp: "" }, note: "" },
    { no: "17화", season: "metal-fight", titles: { kr: "은색의 천마", jp: "" }, airDates: { kr: "2009-10-28", jp: "" }, note: "" },
    { no: "18화", season: "metal-fight", titles: { kr: "푸른 지옥", jp: "" }, airDates: { kr: "2009-10-29", jp: "" }, note: "" },
    { no: "19화", season: "metal-fight", titles: { kr: "수중 베이대회에 도전하라", jp: "" }, airDates: { kr: "2009-11-04", jp: "" }, note: "" },
    { no: "20화", season: "metal-fight", titles: { kr: "서바이벌 배틀 개막", jp: "" }, airDates: { kr: "2009-11-04", jp: "" }, note: "" },
    { no: "21화", season: "metal-fight", titles: { kr: "외딴 섬의 전사들", jp: "" }, airDates: { kr: "2009-11-05", jp: "" }, note: "" },
    { no: "22화", season: "metal-fight", titles: { kr: "공포의 리브라", jp: "" }, airDates: { kr: "2009-11-11", jp: "" }, note: "" },
    { no: "23화", season: "metal-fight", titles: { kr: "배틀블레이더즈로 가는 길", jp: "" }, airDates: { kr: "2009-11-11", jp: "" }, note: "" },
    { no: "24화", season: "metal-fight", titles: { kr: "아름다운 아쿠이라", jp: "" }, airDates: { kr: "2009-11-12", jp: "" }, note: "" },
    { no: "25화", season: "metal-fight", titles: { kr: "베이 킬러 카프리콘", jp: "" }, airDates: { kr: "2009-11-18", jp: "" }, note: "" },
    { no: "26화", season: "metal-fight", titles: { kr: "어둠 속에서 춤추는 날개", jp: "" }, airDates: { kr: "2009-11-18", jp: "" }, note: "" },
    { no: "27화", season: "metal-fight", titles: { kr: "챌린지 대회의 방해꾼", jp: "" }, airDates: { kr: "2009-11-19", jp: "" }, note: "" },
    { no: "28화", season: "metal-fight", titles: { kr: "다크켄서의 게게게게 대작전", jp: "" }, airDates: { kr: "2010-02-17", jp: "" }, note: "" },
    { no: "29화", season: "metal-fight", titles: { kr: "노아와 하늘", jp: "" }, airDates: { kr: "2010-02-17", jp: "" }, note: "" },
    { no: "30화", season: "metal-fight", titles: { kr: "마법의 파이시즈", jp: "" }, airDates: { kr: "2010-02-18", jp: "" }, note: "" },
    { no: "31화", season: "metal-fight", titles: { kr: "쌍둥이 제미오스", jp: "" }, airDates: { kr: "2010-02-24", jp: "" }, note: "" },
    { no: "32화", season: "metal-fight", titles: { kr: "폭풍의 서바이벌 게임", jp: "" }, airDates: { kr: "2010-02-24", jp: "" }, note: "" },
    { no: "33화", season: "metal-fight", titles: { kr: "피닉스와의 맹세", jp: "" }, airDates: { kr: "2010-02-25", jp: "" }, note: "" },
    { no: "34화", season: "metal-fight", titles: { kr: "빛나는 비르고", jp: "" }, airDates: { kr: "2010-03-03", jp: "" }, note: "" },
    { no: "35화", season: "metal-fight", titles: { kr: "엘드라고 출동", jp: "" }, airDates: { kr: "2010-03-03", jp: "" }, note: "" },
    { no: "36화", season: "metal-fight", titles: { kr: "찢어진 날개", jp: "" }, airDates: { kr: "2010-03-04", jp: "" }, note: "" },
    { no: "37화", season: "metal-fight", titles: { kr: "독을 품은 스콜피온", jp: "" }, airDates: { kr: "2010-03-10", jp: "" }, note: "" },
    { no: "38화", season: "metal-fight", titles: { kr: "달려라 강타", jp: "" }, airDates: { kr: "2010-03-10", jp: "" }, note: "" },
    { no: "39화", season: "metal-fight", titles: { kr: "격돌! 피닉스 대 페가시스", jp: "" }, airDates: { kr: "2010-03-11", jp: "" }, note: "" },
    { no: "40화", season: "metal-fight", titles: { kr: "고! 배틀 블레이더즈", jp: "" }, airDates: { kr: "2010-03-17", jp: "" }, note: "" },
    { no: "41화", season: "metal-fight", titles: { kr: "서펜트의 공포", jp: "" }, airDates: { kr: "2010-03-17", jp: "" }, note: "" },
    { no: "42화", season: "metal-fight", titles: { kr: "드래곤의 심판", jp: "" }, airDates: { kr: "2010-03-18", jp: "" }, note: "" },
    { no: "43화", season: "metal-fight", titles: { kr: "뒤바뀐 대결 카드", jp: "" }, airDates: { kr: "2010-03-24", jp: "" }, note: "" },
    { no: "44화", season: "metal-fight", titles: { kr: "하나가 된 마음", jp: "" }, airDates: { kr: "2010-03-24", jp: "" }, note: "" },
    { no: "45화", season: "metal-fight", titles: { kr: "아쿠이라의 역습", jp: "" }, airDates: { kr: "2010-03-25", jp: "" }, note: "" },
    { no: "46화", season: "metal-fight", titles: { kr: "사라진 리브라", jp: "" }, airDates: { kr: "2010-03-31", jp: "" }, note: "" },
    { no: "47화", season: "metal-fight", titles: { kr: "강철같은 우정", jp: "" }, airDates: { kr: "2010-03-31", jp: "" }, note: "" },
    { no: "48화", season: "metal-fight", titles: { kr: "빛과 어둠의 진실", jp: "" }, airDates: { kr: "2010-04-01", jp: "" }, note: "" },
    { no: "49화", season: "metal-fight", titles: { kr: "사자와 용의 싸움", jp: "" }, airDates: { kr: "2010-04-07", jp: "" }, note: "" },
    { no: "50화", season: "metal-fight", titles: { kr: "분노의 마지막 대결", jp: "" }, airDates: { kr: "2010-04-07", jp: "" }, note: "" },
    { no: "51화", season: "metal-fight", titles: { kr: "블레이더의 영혼", jp: "" }, airDates: { kr: "2010-04-08", jp: "" }, note: "" }
  ]
};
const animeSeasonLabels = { "metal-fight": "메탈베이블레이드" };
const categoryAnimeTabs = [
  { id: "overview", label: "개요" },
  { id: "characters", label: "등장인물 및 베이" },
  { id: "episodes", label: "방영목록" }
];
let activeCategoryAnimeTab = "overview";
let activeAnimeRegion = "kr";
let activeAnimeSeason = "metal-fight";
let activeAnimeEpisodeQuery = "";

const categoryAnimeTabsMarkup = () => `<div class="ui-tabs category-anime-tabs" role="tablist" aria-label="애니메이션 정보">
  ${categoryAnimeTabs.map(tab => `<button type="button" role="tab" aria-selected="${activeCategoryAnimeTab === tab.id ? "true" : "false"}" class="ui-tab-button ${activeCategoryAnimeTab === tab.id ? "active" : ""}" data-category-anime-tab="${tab.id}">${tab.label}</button>`).join("")}
</div>`;

const animeEmptyMarkup = message => `<p class="category-anime-empty">${message}</p>`;
const animeRegionTabs = () => `<div class="release-region-tabs" role="tablist" aria-label="방영 지역">
  ${Object.entries(releaseRegionLabels).map(([value, label]) => `<button type="button" role="tab" class="ui-tab-button ${activeAnimeRegion === value ? "active" : ""}" data-anime-region="${value}" aria-selected="${activeAnimeRegion === value ? "true" : "false"}">${label}</button>`).join("")}
</div>`;
const animeEpisodeControls = () => `<div class="release-dropdowns anime-episode-controls" data-anime-controls aria-label="방영목록 필터">
  ${animeRegionTabs()}
  <details class="catalog-dropdown release-dropdown">
    <summary><b class="catalog-dropdown-value">${animeSeasonLabels[activeAnimeSeason]}</b></summary>
    <div class="catalog-dropdown-menu">
      ${releaseDropdownOptions(Object.entries(animeSeasonLabels), activeAnimeSeason, "data-anime-season")}
    </div>
  </details>
  <div class="search-box release-search-box" role="search">
    <span class="search-icon" aria-hidden="true"></span>
    <input id="animeEpisodeSearchInput" type="search" placeholder="방영목록 안에서 검색" value="${escapeAttributeValue(activeAnimeEpisodeQuery)}" />
  </div>
</div>`;

const animeOverviewMarkup = () => {
  const rows = animeInfo.overview.map(row => `<li><span>${escapeHtml(row.label || "")}</span><b>${escapeHtml(row.value || "")}</b></li>`).join("");
  return rows ? `<ul class="category-anime-facts">${rows}</ul>` : animeEmptyMarkup("등록된 개요 정보가 없습니다.");
};

const animeCharactersMarkup = () => {
  const rows = animeInfo.characters.map(character => {
    const beys = Array.isArray(character.beys) && character.beys.length
      ? `<small>${character.beys.map(bey => escapeHtml(bey)).join(" / ")}</small>`
      : "";
    return `<li><b>${escapeHtml(character.name || "")}</b>${beys}</li>`;
  }).join("");
  return rows ? `<ul class="category-anime-character-list">${rows}</ul>` : animeEmptyMarkup("등록된 등장인물 정보가 없습니다.");
};

const animeEpisodeHashPrefixes = { "metal-fight": "METAL-FIGHT-EPISODE" };
const animeEpisodeSeasonIndex = index => {
  const episode = animeInfo.episodes[index];
  if (!episode?.season) return -1;
  return animeInfo.episodes
    .slice(0, index + 1)
    .filter(item => item.season === episode.season).length;
};
const episodeHashId = index => {
  const episode = animeInfo.episodes[index];
  const prefix = animeEpisodeHashPrefixes[episode?.season];
  const seasonIndex = animeEpisodeSeasonIndex(index);
  return prefix && seasonIndex > 0 ? `${prefix}-${seasonIndex}` : "";
};
const episodeIndexFromHash = id => {
  const match = String(id || "").match(/^METAL-FIGHT-EPISODE-(\d+)$/);
  if (!match) return -1;
  const seasonIndex = Number(match[1]);
  if (!Number.isInteger(seasonIndex) || seasonIndex < 1) return -1;
  const matchingEpisodes = animeInfo.episodes
    .map((episode, index) => ({ episode, index }))
    .filter(({ episode }) => episode.season === "metal-fight");
  return matchingEpisodes[seasonIndex - 1]?.index ?? -1;
};
const animeEpisodeTitle = (episode, region = activeAnimeRegion) => {
  const title = episode?.titles?.[region] || episode?.titles?.kr || "";
  return [episode?.no || "", title].filter(Boolean).join(" ");
};

const animeEpisodeSearchText = episode => [
  episode.no || "",
  episode.titles?.[activeAnimeRegion] || "",
  animeAirDateLabel(episode.airDates?.[activeAnimeRegion] || ""),
  episode.note || ""
].join(" ");

const visibleAnimeEpisodes = () => {
  const query = activeAnimeEpisodeQuery.trim();
  return animeInfo.episodes
    .map((episode, index) => ({ episode, index }))
    .filter(({ episode }) => episode.season === activeAnimeSeason)
    .filter(({ episode }) => matchesSearchText(animeEpisodeSearchText(episode), query));
};

const animeEpisodeRowsMarkup = visibleRows => {
  const rows = visibleRows.map(({ episode, index }) => {
    const airDate = episode.airDates?.[activeAnimeRegion] || "";
    return `<tr class="anime-episode-row" role="button" tabindex="0" data-anime-episode-index="${index}">
    <td>${escapeHtml(episode.no || "")}</td>
    <td><span class="release-product-link">${escapeHtml(episode.titles?.[activeAnimeRegion] || "")}</span></td>
    <td>${responsiveDateSpans("anime-air-date-full", "anime-air-date-compact", animeAirDateLabel(airDate), animeAirDateCompactLabel(airDate))}</td>
  </tr>`;
  }).join("");
  return rows || `<tr class="release-empty-row"><td colspan="3">등록된 방영목록이 없습니다.</td></tr>`;
};

const animeEpisodesMarkup = () => {
  const visibleRows = visibleAnimeEpisodes();
  const tableMode = visibleRows.length > 8 ? "scroll" : "fit";
  return `<section class="category-anime-episodes" data-anime-table-mode="${tableMode}">
    ${animeEpisodeControls()}
    <div class="ui-table-scroll modal-section-scroll anime-episode-table-scroll">
      <table class="ui-data-table anime-episode-table">
        <thead>
          <tr>
            <th>회차</th>
            <th>제목</th>
            <th>방영일</th>
          </tr>
        </thead>
        <tbody>${animeEpisodeRowsMarkup(visibleRows)}</tbody>
      </table>
    </div>
  </section>`;
};

const categoryAnimePanelMarkup = () => {
  if (activeCategoryAnimeTab === "characters") return animeCharactersMarkup();
  if (activeCategoryAnimeTab === "episodes") return animeEpisodesMarkup();
  return animeOverviewMarkup();
};

function rememberAnimeModalContext() {
  rememberModalContext("category-anime", "CATEGORY-ANIME", {
    animeTab: activeCategoryAnimeTab,
    animeRegion: activeAnimeRegion,
    animeSeason: activeAnimeSeason,
    animeQuery: activeAnimeEpisodeQuery
  });
}

function renderCategoryAnime(modalContentRoot = document) {
  const animeTabs = modalContentRoot.querySelector("[data-category-anime-tabs-slot]");
  const animePanel = modalContentRoot.querySelector("[data-category-anime-panel]");
  if (!animeTabs || !animePanel) return;
  animeTabs.innerHTML = categoryAnimeTabsMarkup();
  animePanel.dataset.categoryAnimePanel = activeCategoryAnimeTab;
  animePanel.innerHTML = categoryAnimePanelMarkup();
  animeTabs.querySelectorAll("[data-category-anime-tab]").forEach(button => button.addEventListener("click", event => {
    activeCategoryAnimeTab = event.currentTarget.dataset.categoryAnimeTab || "overview";
    rememberAnimeModalContext();
    renderCategoryAnime(modalContentRoot);
  }));
  animePanel.querySelectorAll("[data-anime-region]").forEach(button => button.addEventListener("click", event => {
    activeAnimeRegion = releaseRegionLabels[event.currentTarget.dataset.animeRegion] ? event.currentTarget.dataset.animeRegion : "kr";
    rememberAnimeModalContext();
    renderCategoryAnime(modalContentRoot);
  }));
  animePanel.querySelectorAll("[data-anime-season]").forEach(button => button.addEventListener("click", event => {
    activeAnimeSeason = animeSeasonLabels[event.currentTarget.dataset.animeSeason] ? event.currentTarget.dataset.animeSeason : "metal-fight";
    event.currentTarget.closest(".catalog-dropdown")?.removeAttribute("open");
    rememberAnimeModalContext();
    renderCategoryAnime(modalContentRoot);
  }));
  const animeSearch = animePanel.querySelector("#animeEpisodeSearchInput");
  bindScopedSearchInput(animeSearch, ".release-search-box", searchInput => {
    activeAnimeEpisodeQuery = searchInput.value.trim();
    rememberAnimeModalContext();
    renderCategoryAnime(modalContentRoot);
    const nextInput = modalContentRoot.querySelector("#animeEpisodeSearchInput");
    nextInput?.focus();
    nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length);
  });
  animePanel.querySelectorAll("[data-anime-episode-index]").forEach(animeRow => {
    const openEpisode = () => {
      const index = Number(animeRow.dataset.animeEpisodeIndex);
      openAnimeEpisodeDetail(index, {
        fromAnimeList: true,
        animeRegion: activeAnimeRegion,
        animeSeason: activeAnimeSeason,
        animeQuery: activeAnimeEpisodeQuery
      });
    };
    animeRow.addEventListener("click", openEpisode);
    animeRow.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openEpisode();
    });
  });
}

function openAnimeEpisodeDetail(indexOrId, options = {}) {
  const index = typeof indexOrId === "number" ? indexOrId : episodeIndexFromHash(indexOrId);
  const episode = animeInfo.episodes[index];
  if (!episode) return;
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  const id = episodeHashId(index);
  const backAnimeRegion = releaseRegionLabels[options.animeRegion] ? options.animeRegion : activeAnimeRegion;
  const backAnimeSeason = animeSeasonLabels[options.animeSeason] ? options.animeSeason : episode.season || activeAnimeSeason;
  const backAnimeQuery = typeof options.animeQuery === "string" ? options.animeQuery : activeAnimeEpisodeQuery;
  const content = document.querySelector("#modalContent");
  if (!content || !modal) return;
  if (!id) return;
  const backButton = options.fromAnimeList
    ? `<button class="ui-icon-button modal-back icon-back-button" type="button" data-back-anime-episodes aria-label="방영목록으로 돌아가기">←</button>`
    : "";
  content.innerHTML = `<div class="modal-inner category-anime-modal">
    <div class="modal-info category-anime-info">
      ${backButton}
      <div class="overview-title-row anime-episode-title-row">
        <h3 class="category-title">${escapeHtml(animeEpisodeTitle(episode, backAnimeRegion))}</h3>
      </div>
    </div>
  </div>`;
  content.querySelector("[data-back-anime-episodes]")?.addEventListener("click", () => {
    openCategoryAnimeDetail({
      animeTab: "episodes",
      animeRegion: backAnimeRegion,
      animeSeason: backAnimeSeason,
      animeQuery: backAnimeQuery
    });
  });
  rememberModalContext("metal-fight-episode", id, {
    fromAnimeList: options.fromAnimeList,
    animeTab: "episodes",
    animeRegion: backAnimeRegion,
    animeSeason: backAnimeSeason,
    animeQuery: backAnimeQuery
  });
  window.location.hash = id;
  openModal();
}

function openCategoryAnimeDetail(options = {}) {
  activeCategoryAnimeTab = categoryAnimeTabs.some(tab => tab.id === options.animeTab) ? options.animeTab : "overview";
  activeAnimeRegion = releaseRegionLabels[options.animeRegion] ? options.animeRegion : "kr";
  activeAnimeSeason = animeSeasonLabels[options.animeSeason] ? options.animeSeason : "metal-fight";
  activeAnimeEpisodeQuery = typeof options.animeQuery === "string" ? options.animeQuery : "";
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  const content = document.querySelector("#modalContent");
  if (!content || !modal) return;
  content.innerHTML = `<div class="modal-inner category-anime-modal">
    <div class="modal-info category-anime-info">
      <div class="overview-title-row">
        <h3 class="category-title">애니메이션</h3>
      </div>
      <div class="modal-body-block">
        <div data-category-anime-tabs-slot></div>
        <section class="category-anime-panel" data-category-anime-panel></section>
      </div>
    </div>
  </div>`;
  renderCategoryAnime(content);
  rememberAnimeModalContext();
  window.location.hash = "CATEGORY-ANIME";
  openModal();
}

const openCategoryReleaseFromMenu = () => {
  openCategoryReleaseDetail();
  setMenuOpen(false);
};
const openCategoryCatalog = ({ updateHash = true } = {}) => {
  activatePrimarySection("catalog");
  if (updateHash && window.location.hash !== "#CATEGORY-CATALOG") window.location.hash = "CATEGORY-CATALOG";
};
const openCategoryCatalogFromMenu = () => {
  openCategoryCatalog();
  setMenuOpen(false);
};
const openCategoryAnimeFromMenu = () => {
  openCategoryAnimeDetail();
  setMenuOpen(false);
};

document.querySelector(".overview-panel")?.addEventListener("click", event => {
  const categoryReleaseButton = event.target.closest("[data-category-release-open]");
  if (categoryReleaseButton) {
    event.preventDefault();
    openCategoryReleaseFromMenu();
    return;
  }

  const categoryAnimeButton = event.target.closest("[data-category-anime-open]");
  if (categoryAnimeButton) {
    event.preventDefault();
    openCategoryAnimeFromMenu();
    return;
  }

  const categoryCatalogButton = event.target.closest("[data-category-catalog-open]");
  if (categoryCatalogButton) {
    event.preventDefault();
    openCategoryCatalogFromMenu();
    return;
  }

  const sectionButton = event.target.closest("[data-toy-section]");
  if (sectionButton) {
    event.preventDefault();
    activatePrimarySection(sectionButton.dataset.toySection || "catalog");
  }
});
const renderSearchResults = () => {
  renderGlobalCards();
  renderCatalogItems();
  syncCatalogScopeState();
};
const activeToyPanelName = () => activeToyPanel()?.dataset.toyPanel || "";
const syncSearchHashToControls = () => {
  const params = searchHashParams();
  const query = params.get("q") || "";
  const scope = normalizeSearchScope(params.get("scope") || "all");
  setSearchInputValue(globalSearch, query);
  setSearchInputValue(overviewSearch, query);
  setGlobalSearchScope(scope);
  setOverviewSearchScope(scope);
};
const refreshActiveSearchResults = () => {
  renderGlobalCards();
  const nextHash = searchHash();
  if (window.location.hash !== nextHash) {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}${nextHash}`);
  }
};
const openSearchResults = ({ replace = false } = {}) => {
  document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
  activateToyPanel("all");
  renderGlobalCards();
  setMenuOpen(false);
  const nextHash = searchHash();
  if (window.location.hash !== nextHash) {
    history[replace ? "replaceState" : "pushState"](null, "", `${window.location.pathname}${window.location.search}${nextHash}`);
  }
};
const bindSearchControl = (input, containerSelector, beforeRun = () => {}) => {
  const runSearch = (openPanel = false) => {
    beforeRun();
    if (openPanel) openSearchResults();
    else if (activeToyPanelName() === "all") refreshActiveSearchResults();
    else renderSearchResults();
  };
  input?.addEventListener("input", () => runSearch(false));
  input?.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    runSearch(true);
  });
  input?.closest(containerSelector)?.querySelector(".search-icon")?.addEventListener("click", () => runSearch(true));
};
const bindScopedSearchInput = (input, containerSelector, onSearch) => {
  if (!input) return;
  const runSearch = () => {
    syncSearchInputState(input);
    onSearch(input);
  };
  input.addEventListener("input", runSearch);
  input.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    runSearch();
  });
  input.closest(containerSelector)?.querySelector(".search-icon")?.addEventListener("click", runSearch);
  syncSearchInputState(input);
};
const syncOverviewSearchToGlobal = () => {
  if (globalSearch && overviewSearch) setSearchInputValue(globalSearch, overviewSearch.value);
  setGlobalSearchScope(overviewSearchScopeValue());
};
bindSearchControl(globalSearch, ".search-box");
bindSearchControl(overviewSearch, ".overview-search", syncOverviewSearchToGlobal);
overviewSearchScope?.addEventListener("click", event => {
  const button = event.target.closest("button[data-overview-search-scope]");
  if (!button) return;
  event.preventDefault();
  setOverviewSearchScope(button.dataset.overviewSearchScope || "all");
  if (activeToyPanelName() === "all") {
    syncOverviewSearchToGlobal();
    openSearchResults({ replace: true });
  }
});
globalSearchScope?.addEventListener("click", event => {
  const button = event.target.closest("button[data-global-search-scope]");
  if (!button) return;
  event.preventDefault();
  setGlobalSearchScope(button.dataset.globalSearchScope || "all");
  if (activeToyPanelName() === "all") openSearchResults({ replace: true });
  else renderSearchResults();
});
const setDropdownOption = button => {
  const attr = filterButtonAttr(button);
  if (!attr) return;
  const root = button.closest("#catalogDropdownFilters");
  syncFilterButtonsByValue(root, attr, button.getAttribute(attr) || "");
  button.closest(".catalog-filter-compact .catalog-dropdown")?.removeAttribute("open");
};
const resetDropdown = dropdown => {
  const firstOption = dropdown?.querySelector(".catalog-dropdown-menu button");
  if (firstOption) setDropdownOption(firstOption);
};
const resetDropdowns = root => {
  root?.querySelectorAll(".catalog-dropdown").forEach(resetDropdown);
};
const filterButtonAttrs = ["data-catalog-series", "data-catalog-kind", "data-catalog-subtype", "data-catalog-system", "data-catalog-type", "data-catalog-spin"];
const filterButtonAttr = button => filterButtonAttrs.find(attr => button.hasAttribute(attr));
const updateCompactDropdownLabel = (dropdown, activeButton) => {
  const label = dropdown?.querySelector(".catalog-dropdown-value");
  if (label && activeButton) label.textContent = dropdownSummaryText(activeButton);
};
const syncFilterButtonsByValue = (root, attr, value) => {
  if (!root) return;
  root.querySelectorAll(`button[${attr}]`).forEach(button => {
    const active = (button.getAttribute(attr) || "") === (value || "");
    button.classList.toggle("active", active);
    if (active) updateCompactDropdownLabel(button.closest(".catalog-filter-compact .catalog-dropdown"), button);
  });
};
const syncDropdownByValue = (rootSelector, attr, value) => {
  syncFilterButtonsByValue(document.querySelector(rootSelector), attr, value || "");
};
const syncCatalogDropdownSelectionsFromState = () => {
  syncDropdownByValue("#catalogDropdownFilters", "data-catalog-series", selectedCatalogSeries || "");
  syncDropdownByValue("#catalogDropdownFilters", "data-catalog-kind", selectedCatalogKind || "");
  syncDropdownByValue("#catalogDropdownFilters", "data-catalog-subtype", selectedCatalogSubtype || "");
  syncDropdownByValue("#catalogDropdownFilters", "data-catalog-system", selectedCatalogStructure || "");
  syncDropdownByValue("#catalogDropdownFilters", "data-catalog-type", selectedCatalogBattleType || "");
  syncDropdownByValue("#catalogDropdownFilters", "data-catalog-spin", selectedCatalogSpin || "");
};
const resetCatalogDependentDropdowns = () => {
  document.querySelectorAll("#catalogDropdownFilters [data-catalog-dependent]").forEach(control => {
    control.querySelectorAll(".catalog-dropdown").forEach(resetDropdown);
  });
};
const setDropdownHidden = (dropdown, hidden) => {
  dropdown.hidden = hidden;
  if (hidden) dropdown.removeAttribute("open");
};
const selectedSeriesPartOptions = () => seriesPartFilters[selectedCatalogSeries] || [];
const selectedSubtypeOptions = () => selectedCatalogKind === "tools" ? toolsSubtypeOptions : selectedSeriesPartOptions();
const renderCatalogSubtypeOptions = () => {
  const options = selectedSubtypeOptions();
  if (selectedCatalogSubtype && !options.some(option => option.value === selectedCatalogSubtype)) selectedCatalogSubtype = null;
  const optionMarkup = `
    <button type="button" class="ui-dropdown-item ${selectedCatalogSubtype ? "" : "active"}" data-catalog-subtype="" data-summary-label="전체">전체</button>
    ${options.map(option => `<button type="button" class="ui-dropdown-item ${selectedCatalogSubtype === option.value ? "active" : ""}" data-catalog-subtype="${option.value}">${option.label}</button>`).join("")}
  `;
  document.querySelectorAll('#catalogDropdownFilters [data-catalog-dependent="subtype"] .catalog-filter-options, #catalogDropdownFilters [data-catalog-dependent="subtype"] .catalog-dropdown-menu').forEach(optionsRoot => {
    optionsRoot.innerHTML = optionMarkup;
  });
  syncDropdownByValue("#catalogDropdownFilters", "data-catalog-subtype", selectedCatalogSubtype || "");
};
const catalogDependentFilterVisibility = () => {
  const metalSelected = isMetalFightSeries(selectedCatalogSeries);
  const partsSelected = selectedCatalogKind === "parts";
  const toolsSelected = selectedCatalogKind === "tools";
  const selectedPart = partsSelected ? selectedCatalogSubtype : null;
  return {
    subtype: (partsSelected && !!selectedCatalogSeries && selectedSeriesPartOptions().length > 0) || toolsSelected,
    system: metalSelected && selectedCatalogKind === "bey",
    type: metalSelected && (selectedCatalogKind === "bey" || selectedPart === "wheel" || selectedPart === "bottom"),
    spin: metalSelected && (selectedCatalogKind === "bey" || selectedPart === "wheel")
  };
};
const sanitizeHiddenCatalogFilters = visibility => {
  if (!visibility.subtype) selectedCatalogSubtype = null;
  if (!visibility.system) selectedCatalogStructure = null;
  if (!visibility.type) selectedCatalogBattleType = null;
  if (!visibility.spin) selectedCatalogSpin = null;
};
const syncCatalogDependentFilters = () => {
  renderCatalogStaticFilterOptions();
  renderCatalogSubtypeOptions();
  const visibility = catalogDependentFilterVisibility();
  sanitizeHiddenCatalogFilters(visibility);
  syncCatalogDropdownSelectionsFromState();
  document.querySelectorAll("#catalogDropdownFilters [data-catalog-dependent]").forEach(control => {
    setDropdownHidden(control, !visibility[control.dataset.catalogDependent]);
  });
};
const refreshCatalogControls = () => {
  syncCatalogDependentFilters();
  syncCatalogScopeState();
  syncCatalogFilterPanels();
  renderCatalogFilterChips();
};
const refreshCatalogResults = () => {
  deriveCatalogItemFilters();
  renderCatalogItems();
  syncCatalogScopeState();
};
const refreshCatalogState = () => {
  syncCatalogDependentFilters();
  refreshCatalogResults();
  syncCatalogFilterPanels();
  renderCatalogFilterChips();
};
const syncCatalogMenuScope = scope => {
  const normalized = normalizeSearchScope(scope);
  document.querySelectorAll("[data-catalog-nav-scope]").forEach(button => {
    button.classList.toggle("active", button.dataset.catalogNavScope === normalized);
  });
  mobileDrawer?.querySelectorAll("[data-mobile-catalog-scope]").forEach(button => {
    button.classList.toggle("active", button.dataset.mobileCatalogScope === normalized);
  });
};
const resetCatalogFilters = () => {
  resolvedCatalogItemType = "all";
  catalogItemTypeGroup = null;
  resolvedCatalogStructure = null;
  selectedCatalogSeries = null;
  selectedCatalogKind = "";
  selectedCatalogSubtype = null;
  selectedCatalogBattleType = null;
  selectedCatalogSpin = null;
  selectedCatalogStructure = null;
};
const setCatalogScope = scope => {
  if (scope === "bey" || scope === "tools") {
    selectedCatalogKind = scope;
  } else {
    selectedCatalogKind = "";
  }
  selectedCatalogSubtype = null;
  selectedCatalogBattleType = null;
  selectedCatalogSpin = null;
  selectedCatalogStructure = null;
  refreshCatalogControls();
};
const syncCatalogFilterPanels = () => {
  const visibility = catalogDependentFilterVisibility();
  const hasAdvancedFilters = Object.values(visibility).some(Boolean);
  document.querySelectorAll("[data-catalog-filter-advanced]").forEach(panel => {
    panel.hidden = !(panel.dataset.catalogFilterAdvanced === "bey" && hasAdvancedFilters);
  });
  scheduleCatalogFilterModeCheck();
};
let catalogFilterModeFrame = 0;
const catalogPanelElement = () => document.querySelector('.catalog-panel[data-toy-panel="catalog"]');
const activeCatalogPrimaryFilters = panel => panel?.querySelector('[data-catalog-section="catalog"] .catalog-filter-primary');
const primaryFilterRowsBroken = (panel, primary) => {
  if (!panel || !primary) return false;
  const wasCompact = panel.classList.contains("catalog-filters-compact");
  panel.classList.remove("catalog-filters-compact");
  const expanded = primary.querySelector(".catalog-filter-expanded");
  if (!expanded || getComputedStyle(expanded).display === "none") {
    panel.classList.toggle("catalog-filters-compact", wasCompact);
    return true;
  }
  const panelStyle = getComputedStyle(panel);
  const rowHeight = parseFloat(panelStyle.getPropertyValue("--catalog-pill-height")) || 36;
  const targetHeight = parseFloat(panelStyle.getPropertyValue("--catalog-primary-filter-height")) || ((rowHeight * 2) + 10);
  const rowTolerance = 4;
  const brokenRow = Array.from(expanded.querySelectorAll(".catalog-filter-group:not([hidden])")).some(group => {
    const options = group.querySelector(".catalog-filter-options");
    return (options?.scrollHeight || 0) > rowHeight + rowTolerance || group.scrollHeight > rowHeight + rowTolerance;
  });
  const brokenHeight = expanded.scrollHeight > targetHeight + rowTolerance;
  panel.classList.toggle("catalog-filters-compact", wasCompact);
  return brokenRow || brokenHeight;
};
const updateCatalogFilterMode = () => {
  catalogFilterModeFrame = 0;
  const panel = catalogPanelElement();
  if (!panel || activeToyPanelName() !== "catalog") return;
  const primary = activeCatalogPrimaryFilters(panel);
  panel.classList.toggle("catalog-filters-compact", primaryFilterRowsBroken(panel, primary));
};
const scheduleCatalogFilterModeCheck = () => {
  if (catalogFilterModeFrame) return;
  catalogFilterModeFrame = requestAnimationFrame(updateCatalogFilterMode);
};
const resetCatalogFilter = (scope, key) => {
  if (scope === "catalog") {
    if (key === "series") selectedCatalogSeries = null;
    if (key === "kind") {
      selectedCatalogKind = "";
      selectedCatalogSubtype = null;
      selectedCatalogStructure = null;
      selectedCatalogBattleType = null;
      selectedCatalogSpin = null;
    }
    if (key === "subtype") selectedCatalogSubtype = null;
    if (key === "system") selectedCatalogStructure = null;
    if (key === "type") selectedCatalogBattleType = null;
    if (key === "spin") selectedCatalogSpin = null;
    refreshCatalogState();
    return;
  }
  refreshCatalogControls();
};
const activeFilterChips = scope => {
  const chips = [];
  if (scope === "catalog") {
    if (selectedCatalogSeries) chips.push({ scope, key: "series", label: itemSeriesLabel({ series: selectedCatalogSeries }) });
    if (selectedCatalogKind) chips.push({ scope, key: "kind", label: typeLabels[selectedCatalogKind] || selectedCatalogKind });
    if (selectedCatalogSubtype) chips.push({ scope, key: "subtype", label: typeLabels[selectedCatalogSubtype] || selectedCatalogSubtype });
    if (selectedCatalogStructure) chips.push({ scope, key: "system", label: structureLabels[selectedCatalogStructure] || selectedCatalogStructure });
    if (selectedCatalogBattleType) chips.push({ scope, key: "type", label: battleTypeLabel(selectedCatalogBattleType, selectedCatalogSeries || METAL_FIGHT_SERIES) });
    if (selectedCatalogSpin) chips.push({ scope, key: "spin", label: spinLabel(selectedCatalogSpin) });
  }
  return chips;
};
const renderCatalogFilterChips = () => {
  ["catalog"].forEach(scope => {
    const root = document.querySelector(`[data-catalog-filter-chips="${scope}"]`);
    if (!root) return;
    const chips = activeFilterChips(scope);
    root.hidden = false;
    root.classList.toggle("is-empty", chips.length === 0);
    root.setAttribute("aria-hidden", String(chips.length === 0));
    root.innerHTML = chips.length ? `
      ${chips.map(chip => `<button type="button" class="ui-chip-button catalog-filter-chip" data-filter-chip-scope="${chip.scope}" data-filter-chip-key="${chip.key}">${escapeHtml(chip.label)}<span aria-hidden="true">×</span></button>`).join("")}
      <button type="button" class="ui-chip-button catalog-filter-reset" data-filter-reset-scope="${scope}">초기화</button>
    ` : "";
  });
};
document.querySelector("#catalogDropdownFilters")?.addEventListener("click", event => {
  const button = event.target.closest("button[data-catalog-series],button[data-catalog-kind],button[data-catalog-subtype],button[data-catalog-system],button[data-catalog-type],button[data-catalog-spin]");
  if (!button) return;
  setDropdownOption(button);
  if (button.hasAttribute("data-catalog-series")) selectedCatalogSeries = button.dataset.catalogSeries || null;
  if (button.hasAttribute("data-catalog-kind")) {
    selectedCatalogKind = button.dataset.catalogKind || "";
    selectedCatalogSubtype = null;
    selectedCatalogBattleType = null;
    selectedCatalogSpin = null;
    selectedCatalogStructure = null;
    resetCatalogDependentDropdowns();
  }
  if (button.hasAttribute("data-catalog-subtype")) selectedCatalogSubtype = button.dataset.catalogSubtype || null;
  if (button.hasAttribute("data-catalog-system")) selectedCatalogStructure = button.dataset.catalogSystem || null;
  if (button.hasAttribute("data-catalog-type")) selectedCatalogBattleType = button.dataset.catalogType || null;
  if (button.hasAttribute("data-catalog-spin")) selectedCatalogSpin = button.dataset.catalogSpin || null;
  refreshCatalogState();
});
document.querySelectorAll(".catalog-filter-chips").forEach(root => root.addEventListener("click", event => {
  const chip = event.target.closest("[data-filter-chip-scope][data-filter-chip-key]");
  const reset = event.target.closest("[data-filter-reset-scope]");
  if (chip) {
    resetCatalogFilter(chip.dataset.filterChipScope, chip.dataset.filterChipKey);
    return;
  }
  if (reset) {
    if (reset.dataset.filterResetScope === "catalog") resetCatalogFilters();
    resetDropdowns(document.querySelector("#catalogDropdownFilters"));
    refreshCatalogState();
  }
}));
document.addEventListener("toggle", event => {
  const dropdown = event.target.closest?.(".catalog-dropdown");
  if (!dropdown?.open) return;
  document.querySelectorAll(".catalog-dropdown[open]").forEach(openDropdown => {
    if (openDropdown !== dropdown) openDropdown.removeAttribute("open");
  });
}, true);
document.addEventListener("click", event => {
  if (!event.target.closest(".catalog-dropdown")) {
    document.querySelectorAll(".catalog-dropdown[open]").forEach(dropdown => {
      dropdown.removeAttribute("open");
    });
  }
});
document.querySelector("#catalogNavFilters")?.addEventListener("click", event => {
  const button = event.target.closest("[data-catalog-nav-scope]");
  if (!button) return;
  event.preventDefault();
  event.stopPropagation();
  activatePrimarySection(button.dataset.catalogNavScope || "catalog");
}, true);
document.querySelectorAll('input[type="search"]').forEach(input => {
  const syncSearchState = () => syncSearchInputState(input);
  input.addEventListener("input", syncSearchState);
  syncSearchState();
});
const updateToTop = () => {
  if (!toTop) return;
  toTop.classList.toggle("show", window.scrollY > 420);
};
window.addEventListener("scroll", () => {
  updateToTop();
}, { passive: true });
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateToTop();

const modal = document.querySelector("#detailModal");
let modalScrollY = 0;
function syncModalViewportMetrics() {
  if (!modal?.open) return;
  document.body.style.setProperty("--modal-viewport-width", `${window.innerWidth}px`);
  document.body.style.setProperty("--modal-viewport-height", `${window.innerHeight}px`);
}
function openModal() {
  if (!modal || modal.open) return;
  modalScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  const bodyRect = document.body.getBoundingClientRect();
  document.body.style.setProperty("--modal-lock-left", `${bodyRect.left}px`);
  document.body.style.setProperty("--modal-lock-width", `${bodyRect.width}px`);
  document.body.style.setProperty("--modal-scroll-lock-top", `${modalScrollY * -1}px`);
  document.body.classList.add("is-modal-open");
  modal.showModal();
  syncModalViewportMetrics();
}
function closeModal() {
  if (modal?.open) modal.close();
  document.body.classList.remove("is-modal-open");
  document.body.style.removeProperty("--modal-lock-left");
  document.body.style.removeProperty("--modal-lock-width");
  document.body.style.removeProperty("--modal-viewport-width");
  document.body.style.removeProperty("--modal-viewport-height");
  document.body.style.removeProperty("--modal-scroll-lock-top");
  window.scrollTo(0, modalScrollY);
}
function normalizedStat(value) {
  if (value <= 0) return 0;
  return Math.min(7, Math.max(0.5, Math.round(value / 5) / 2));
}
function statFillPercent(value) {
  return Math.min(100, value * 20);
}
function statRow(name, rawValue) {
  const value = normalizedStat(rawValue);
  return `
    <div class="stat-row"><span>${name}</span><div class="stat-track"><div class="stat-fill" style="width:${statFillPercent(value)}%"></div></div><b>${value}</b></div>`;
}
function statRows(stats, extraStats = []) {
  const baseStats = ["공격력", "방어력", "지구력"].map((name, i) => statRow(name, stats[i]));
  const additionalStats = extraStats.map(stat => statRow(stat.name, stat.value));
  return [...baseStats, ...additionalStats].join("");
}
function trackHeightType(item) {
  if (item.id === "TRACK-CHANGE-HEIGHT-120") return "보통 / 높음";
  const height = Number(item.name.match(/\d+$/)?.[0] || 0);
  if (height >= 170 && height <= 230) return "매우높음";
  if (height >= 130 && height <= 165) return "높음";
  if (height >= 120 && height <= 125) return "보통";
  if (height >= 100 && height <= 105) return "낮음";
  if (height >= 80 && height <= 90) return "매우낮음";
  return "";
}
function trackHeightLevel(item) {
  const type = trackHeightType(item);
  if (type === "매우높음") return 5;
  if (type === "높음") return 4;
  if (type === "보통 / 높음") return 3.5;
  if (type === "보통") return 3;
  if (type === "낮음") return 2;
  if (type === "매우낮음") return 1;
  return 0;
}
function heightFillPercent(level) {
  return Math.max(0, Math.min(100, (level - 1) / 4 * 100));
}
function trackHeightModeRow(type, level) {
  return `<div class="track-height-row"><span>높이</span><div class="stat-track"><div class="stat-fill" style="width:${heightFillPercent(level)}%"></div></div><b>${type}</b></div>`;
}
function isZeroGStadiumBottom(item) {
  if (!["bottom", "4dbottom"].includes(item.type)) return false;
  return items.indexOf(item) >= zeroGBottomStartIndex;
}
function zeroGStadiumNote(item) {
  return isZeroGStadiumBottom(item) ? `<p class="stat-note">방어력과 지구력은 제로G 스타디움 기준이며, 일반 스타디움에서는 두 값이 서로 바뀝니다.</p>` : "";
}
function partStats(item) {
  if (item.type === "track") {
    if (item.id === "TRACK-CHANGE-HEIGHT-120") {
      return `<div class="stat-block"><div class="mode-stats"><section><p class="mode-title">120 모드</p>${trackHeightModeRow("보통", 3)}</section><section><p class="mode-title">145 모드</p>${trackHeightModeRow("높음", 4)}</section></div></div>`;
    }
    const level = trackHeightLevel(item);
    return `<div class="stat-block">${trackHeightModeRow(trackHeightType(item), level)}</div>`;
  }
  if (!item.modes) return `<div class="stat-block">${statRows(item.stats, item.extraStats)}${zeroGStadiumNote(item)}</div>`;
  return `<div class="stat-block"><div class="mode-stats">${item.modes.map(mode => `<section><p class="mode-title">${mode.name}</p>${statRows(mode.stats, mode.extraStats)}</section>`).join("")}</div>${zeroGStadiumNote(item)}</div>`;
}
const detailBackButton = (backId, backProductId, backRelease, backRegion) => {
  const releaseBackAttr = backRelease ? ` data-back-release="true"` : "";
  const regionBackAttr = backRegion ? ` data-back-region="${backRegion}"` : "";
  if (backId) {
    return `<button class="ui-icon-button modal-back icon-back-button" type="button" data-back-id="${backId}" ${backProductId ? `data-back-product-id="${backProductId}"` : ""}${releaseBackAttr}${regionBackAttr} aria-label="베이로 돌아가기">←</button>`;
  }
  return productBackButton({ backProductId, backRelease, region: backRegion });
};
const productBackButton = ({ backProductId, backRelease = false, region = "" } = {}) => {
  if (!backProductId) return "";
  const releaseBackAttr = backRelease ? ` data-back-release="true"` : "";
  const regionBackAttr = region ? ` data-back-region="${region}"` : "";
  return `<button class="ui-icon-button modal-back icon-back-button" type="button" data-back-product-id="${backProductId}"${releaseBackAttr}${regionBackAttr} aria-label="제품으로 돌아가기">←</button>`;
};
const modalBackOptions = (button, fallbackRegion = "") => ({
  ...(button.dataset.backRelease ? { backRelease: true } : {}),
  ...((button.dataset.backRegion || fallbackRegion) ? { region: button.dataset.backRegion || fallbackRegion } : {})
});
function bindCatalogModalBack(scope = document, { fallbackRegion = "" } = {}) {
  scope.querySelector(".modal-back")?.addEventListener("click", event => {
    event.preventDefault();
    const backButton = event.currentTarget;
    const backOptions = modalBackOptions(backButton, fallbackRegion);
    if (backButton.dataset.backId) {
      if (backButton.dataset.backProductId) backOptions.backProductId = backButton.dataset.backProductId;
      openDetail(backButton.dataset.backId, backOptions);
      return;
    }
    if (backButton.dataset.backProductId) {
      openProductDetail(backButton.dataset.backProductId, backOptions);
      return;
    }
    if (backButton.dataset.backRelease) openCategoryReleaseDetail({ region: backOptions.region || activeReleaseRegion });
  });
}
function modalStepButtons(list, currentId, kind) {
  const index = list.findIndex(entry => entry.id === currentId);
  if (index < 0 || list.length < 2) return "";
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  return `<button class="ui-icon-button modal-step modal-step-prev" type="button" data-modal-kind="${kind}" data-modal-target="${prev.id}" aria-label="전 항목"></button>
    <button class="ui-icon-button modal-step modal-step-next" type="button" data-modal-kind="${kind}" data-modal-target="${next.id}" aria-label="후 항목"></button>`;
}
function bindModalStepButtons(options = {}) {
  document.querySelectorAll(".modal-step").forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const targetId = button.dataset.modalTarget;
    if (button.dataset.modalKind === "product") openProductDetail(targetId, options.product || {});
    else if (button.dataset.modalKind === "tools") openToolsDetail(targetId, options.tools || {});
    else if (button.dataset.modalKind === "book") openBookDetail(targetId, options.book || {});
    else if (button.dataset.modalKind === "game") openGameDetail(targetId, options.game || {});
    else openDetail(targetId, options.item || {});
  }));
}
function modalTitle(text) {
  return `<h3 class="modal-name">${text}</h3>`;
}
function detailHeading(item, options = {}) {
  if (["track", "bottom", "4dbottom"].includes(item.type)) {
    const numericTrack = item.type === "track" && /^\d+$/.test(item.name);
    const koName = partKoName(item);
    const displayName = itemDisplayName(item, options.region);
    return numericTrack
      ? modalTitle(displayName)
      : modalTitle(options.region === "jp" && item.jpName ? displayName : koName);
  }
  if (item.type === "bey") {
    const combo = partCategory(item);
    const name = itemDisplayName(item, options.region);
    return modalTitle(combo ? `${name} ${combo}` : name);
  }
  return modalTitle(itemDisplayName(item, options.region));
}
function openDetail(id, options = {}) {
  const item = itemsById.get(id);
  if (!item) return;
  closeModalTagPopover();
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  const slot = item.type === "bey"
    ? modalInfoSlot(item.desc || "", beyModalTags(item), "single-line-info-slot")
    : modalInfoSlot(item.desc || "", partModalTags(item));
  const body = item.type === "bey" ? beyDetailSections(item, options.region) : partStats(item);
  const stepItems = visibleCatalogCoreItems().some(entry => entry.id === item.id) ? visibleCatalogCoreItems() : items;
  const modalContentRoot = document.querySelector("#modalContent");
  modalContentRoot.innerHTML = `${modalStepButtons(stepItems, item.id, "item")}<div class="modal-inner">
    <div class="modal-art">${modalArtMarkup(item)}</div>
    <div class="modal-info ${item.type === "bey" ? "bey-modal-info" : "part-modal-info"}">
    ${modalScrollArea(`${detailHeading(item, options)}
    ${slot}<div class="modal-body-block">${body}</div>`)}${detailBackButton(options.backId, options.backProductId, options.backRelease, options.region)}</div></div>`;
  bindModalStepButtons({ item: options });
  bindCatalogModalBack(modalContentRoot);
  modalContentRoot.querySelectorAll(".mounted-link").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const linkOptions = { backId: item.id };
    if (options.backProductId) linkOptions.backProductId = options.backProductId;
    if (options.backRelease) linkOptions.backRelease = true;
    if (options.region) linkOptions.region = options.region;
    openDetail(link.dataset.partId, linkOptions);
  }));
  bindModalTagPopovers(modalContentRoot);
  rememberModalContext("item", item.id, options);
  window.location.hash = item.id;
  openModal();
  if (item.model || item.modelKey) requestAnimationFrame(initModelViewer);
}
function productHeader(item, region = activeReleaseRegion) {
  return modalTitle(productDisplayName(item, region));
}
function productMetaSlot() {
  return `<div class="modal-info-slot product-meta-slot single-line-info-slot"></div>`;
}
const randomBoosterNamePattern = /(랜덤부스터|라이트블레이드|러이트블레이드)/;
const productReleaseNos = product => [...new Set([
  product.no,
  ...Object.values(product.releases || {}).map(release => release.no)
].filter(Boolean))];
const productBeyPoolIds = product => {
  if (product.beyPool?.length) return product.beyPool;
  const isRandomBooster = Object.values(product.releases || {}).some(release => randomBoosterNamePattern.test(release.name || ""));
  if (!isRandomBooster) return [];
  const releaseNos = productReleaseNos(product);
  return items
    .filter(entry => entry.type === "bey" && releaseNos.includes(entry.productNo))
    .map(entry => entry.id);
};
const randomBeyComposition = (product, part) => {
  const poolIds = productBeyPoolIds(product);
  return Boolean(poolIds.length && part.target && poolIds.includes(part.target) && /무작위/.test(part.name || compositionItemLabel(part)));
};
const compositionItemLabel = part => {
  const target = part.target ? findCatalogItemById(part.target) : null;
  if (!target) return "";
  if (target.type === "bey") return "베이";
  if (target.type && typeLabels[target.type]) return typeLabels[target.type];
  if (target.category) return target.category;
  return "";
};

function itemDisplayName(item, region = activeReleaseRegion, options = {}) {
  const name = region === "jp" ? item.jpName || item.name || "" : item.name || "";
  const sub = options.withSub ? item.sub || "" : "";
  return sub && !name.includes(sub) ? `${name} ${sub}` : name;
}
function productComposition(item, region = activeReleaseRegion) {
  const composition = productCompositionItems(item, region);
  if (!composition.length) return "";
  return `<section class="modal-section product-composition"><p class="mounted-title">구성</p><div class="modal-section-scroll product-composition-list">${composition.map(part => {
    const name = part.name || "";
    const quantity = part.quantity || part.qty || "1개";
    if (randomBeyComposition(item, part)) return `<button class="ui-list-link product-composition-item product-lineup-trigger" type="button" data-product-id="${item.id}" data-target-id="${part.target}"><span>${name} ${quantity}</span><b>→</b></button>`;
    if (!part.target) return `<div class="ui-list-link product-composition-item"><span>${name} ${quantity}</span><b>→</b></div>`;
    const target = findCatalogItemById(part.target);
    const displayName = name || target?.name || "";
    return `<a class="ui-list-link product-composition-item composition-link" href="#${part.target}" data-target-id="${part.target}"><span>${displayName} ${quantity}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
function productBeyPool(item, region = activeReleaseRegion) {
  const poolIds = productBeyPoolIds(item);
  if (!poolIds.length) return "";
  const pool = poolIds
    .map(id => itemsById.get(id))
    .filter(Boolean);
  if (!pool.length) return "";
  return `<section class="modal-section product-composition"><p class="mounted-title">등장 베이</p><div class="modal-section-scroll product-composition-list">${pool.map(bey => {
    const combo = partCategory(bey);
    const beyName = itemDisplayName(bey, region);
    const name = combo ? `${beyName} ${combo}` : beyName;
    return `<a class="ui-list-link product-composition-item composition-link" href="#${bey.id}" data-target-id="${bey.id}"><span>${name}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
function bindProductCompositionLinks(product, root = document, options = {}) {
  root.querySelectorAll(".product-composition-list").forEach(compositionList => compositionList.addEventListener("click", event => {
    const lineupButton = event.target.closest(".product-lineup-trigger");
    if (lineupButton && compositionList.contains(lineupButton)) {
      event.preventDefault();
      openProductBeyPoolDetail(lineupButton.dataset.productId, options);
      return;
    }
    const link = event.target.closest(".composition-link");
    if (!link || !compositionList.contains(link)) return;
    event.preventDefault();
    const targetId = link.dataset.targetId;
    const backOptions = { backProductId: product.id };
    if (options.backRelease) backOptions.backRelease = true;
    if (options.region) backOptions.region = options.region;
    if (targetId.startsWith("PRODUCT-")) openProductDetail(targetId, backOptions);
    else if (targetId.startsWith("TOOLS-")) openToolsDetail(targetId, backOptions);
    else if (targetId.startsWith("BOOK-")) openBookDetail(targetId, backOptions);
    else if (targetId.startsWith("GAME-")) openGameDetail(targetId, backOptions);
    else openDetail(targetId, backOptions);
  }));
}
function openProductBeyPoolDetail(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  const requestedRegion = releaseRegionLabels[options.region] ? options.region : (releaseRegionLabels[activeReleaseRegion] ? activeReleaseRegion : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  activeReleaseRegion = region;
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  const modalContentRoot = document.querySelector("#modalContent");
  modalContentRoot.innerHTML = `<div class="modal-inner">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot()}
    <div class="modal-body-block">${productBeyPool(item, region)}</div>`)}
    ${productBackButton({ backProductId: item.id, backRelease: options.backRelease, region })}</div></div>`;
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindProductCompositionLinks(item, modalContentRoot, { ...options, region });
  rememberModalContext("product-lineup", item.id, { ...options, region });
  window.location.hash = item.id;
  openModal();
}
function openProductDetail(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  const requestedRegion = releaseRegionLabels[options.region] ? options.region : (releaseRegionLabels[activeReleaseRegion] ? activeReleaseRegion : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  const stepRegion = requestedRegion === "kr" ? "kr" : region;
  activeReleaseRegion = region;
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  const releaseBackAttr = options.backRelease ? ` data-back-release="true"` : "";
  const regionBackAttr = ` data-back-region="${region}"`;
  const backButton = options.backProductId
    ? productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region })
    : options.backRelease
      ? `<button class="ui-icon-button modal-back icon-back-button" type="button" data-back-release="true"${regionBackAttr} aria-label="출시 정보로 돌아가기">←</button>`
      : "";
  const productStepSource = productItems.slice().sort((a, b) => productSerialNumber(a, stepRegion) - productSerialNumber(b, stepRegion));
  const stepItems = productStepSource.filter(entry => productReleasedInRegion(entry, stepRegion));
  const modalContentRoot = document.querySelector("#modalContent");
  modalContentRoot.innerHTML = `${modalStepButtons(stepItems, item.id, "product")}<div class="modal-inner">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot()}
    <div class="modal-body-block">${productComposition(item, region)}</div>`)}${backButton}</div></div>`;
  bindModalStepButtons({ product: { ...options, region: stepRegion } });
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindProductCompositionLinks(item, modalContentRoot, { ...options, region });
  rememberModalContext("product", item.id, { ...options, region });
  window.location.hash = item.id;
  openModal();
}
function openSimpleCatalogDetail({ item, options = {}, kind, stepItems, tags = "" }) {
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  const backButton = productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region: options.region });
  const modalContentRoot = document.querySelector("#modalContent");
  modalContentRoot.innerHTML = `${modalStepButtons(stepItems, item.id, kind)}<div class="modal-inner">
    <div class="modal-art"></div>
    <div class="modal-info part-modal-info">${modalScrollArea(`${modalTitle(itemDisplayName(item, options.region))}
    ${modalInfoSlot(item.desc || "", tags)}<div class="modal-body-block"></div>`)}${backButton}</div></div>`;
  bindModalStepButtons({ [kind]: options });
  bindCatalogModalBack(modalContentRoot);
  rememberModalContext(kind, item.id, options);
  window.location.hash = item.id;
  openModal();
}
function openToolsDetail(id, options = {}) {
  const item = toolsItemsById.get(id);
  if (!item) return;
  const visibleItems = visibleToolsItems();
  const stepItems = visibleItems.some(entry => entry.id === item.id) ? visibleItems : toolsItems.slice().sort(compareToolsItemsByFirstRelease);
  openSimpleCatalogDetail({ item, options, kind: "tools", stepItems });
}
function openBookDetail(id, options = {}) {
  const item = bookItemsById.get(id);
  if (!item) return;
  const stepItems = bookItems.slice().sort((a, b) => a.name.localeCompare(b.name, "ko"));
  openSimpleCatalogDetail({ item, options, kind: "book", stepItems, tags: modalTagGroup(`<span>${item.category || "도서"}</span>`) });
}
function openGameDetail(id, options = {}) {
  const item = gameItemsById.get(id);
  if (!item) return;
  const stepItems = gameItems.slice().sort((a, b) => a.name.localeCompare(b.name, "ko"));
  openSimpleCatalogDetail({ item, options, kind: "game", stepItems });
}
function closeDetail() {
  closeModalTagPopover();
  if (modelViewerCleanup) {
    modelViewerCleanup();
    modelViewerCleanup = null;
  }
  closeModal();
  clearModalContext();
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
document.querySelector("#modalClose").addEventListener("click", closeDetail);
document.querySelector("[data-modal-overlay]")?.addEventListener("click", closeDetail);
modal.addEventListener("cancel", event => {
  event.preventDefault();
  if (activeModalTagButton) {
    closeModalTagPopover();
    return;
  }
  closeDetail();
});
modal.addEventListener("close", () => {
  document.body.classList.remove("is-modal-open");
  document.body.style.removeProperty("--modal-lock-left");
  document.body.style.removeProperty("--modal-lock-width");
  document.body.style.removeProperty("--modal-viewport-width");
  document.body.style.removeProperty("--modal-viewport-height");
  document.body.style.removeProperty("--modal-scroll-lock-top");
});

const syncUnifiedSearchPlacement = section => {
  if (!unifiedSearch || !unifiedSearchHome) return;
  const targetToolbar = section === "catalog"
    ? document.querySelector(`.toy-panel[data-toy-panel="${section}"] .toolbar`)
    : null;
  const targetParent = targetToolbar || unifiedSearchHome.parentElement;
  if (!targetParent) return;
  if (targetToolbar) targetToolbar.appendChild(unifiedSearch);
  else unifiedSearchHome.after(unifiedSearch);
};
const activateToyPanel = section => {
  document.querySelectorAll(".toy-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.toyPanel === section));
  document.body.classList.toggle("is-overview", section === "overview");
  document.body.classList.toggle("has-topbar", section !== "overview");
  syncUnifiedSearchPlacement(section);
};
const syncMobileDrawer = section => {
  mobileDrawer?.querySelectorAll("[data-mobile-section], [data-category-catalog-open]").forEach(button => {
    const buttonSection = button.hasAttribute("data-category-catalog-open") ? "catalog" : button.dataset.mobileSection;
    button.classList.toggle("active", buttonSection === section);
  });
};
const setMenuOpen = open => {
  document.body.classList.toggle("menu-open", open);
  menuButton?.setAttribute("aria-expanded", String(open));
  menuButton?.setAttribute("aria-label", open ? "메뉴 열림" : "메뉴 열기");
  mobileDrawer?.setAttribute("aria-hidden", String(!open));
  if (open) {
    const panel = activeToyPanel()?.dataset.toyPanel || "overview";
    syncMobileDrawer(panel === "catalog" ? "catalog" : panel);
    syncCatalogMenuScope(panel === "catalog" ? selectedCatalogKind || "all" : "all");
  }
};
const activatePrimarySection = section => {
  if (section === "product") section = "overview";
  const isCatalogSection = ["catalog", "bey", "tools"].includes(section);
  const catalogScope = section === "catalog" ? "all" : section;
  clearSearchInputs();
  if (isSearchHash()) history.replaceState(null, "", window.location.pathname + window.location.search);
  document.querySelectorAll(".nav-link").forEach(link => {
    const linkSection = link.hasAttribute("data-category-catalog-open") ? "catalog" : link.dataset.toySection;
    link.classList.toggle("active", linkSection === (isCatalogSection ? "catalog" : section));
  });
  syncMobileDrawer(isCatalogSection ? "catalog" : section);
  syncCatalogMenuScope(isCatalogSection ? catalogScope : "all");
  const panelSection = isCatalogSection ? "catalog" : section;
  activateToyPanel(panelSection);
  if (section === "overview") setGlobalSearchScope("all");
  if (isCatalogSection) {
    resetCatalogFilters();
    resetDropdowns(document.querySelector("#catalogDropdownFilters"));
    setCatalogScope(catalogScope);
    setGlobalSearchScope(catalogScope === "all" ? "all" : catalogScope);
  }
  if (panelSection === "catalog") syncCatalogScopeState();

  setMenuOpen(false);
};
document.querySelectorAll(".nav-link").forEach(button => button.addEventListener("click", event => {
  event.preventDefault();
  const categoryReleaseButton = event.currentTarget.closest("[data-category-release-open]");
  if (categoryReleaseButton) {
    openCategoryReleaseFromMenu();
    return;
  }
  const categoryAnimeButton = event.currentTarget.closest("[data-category-anime-open]");
  if (categoryAnimeButton) {
    openCategoryAnimeFromMenu();
    return;
  }
  const categoryCatalogButton = event.currentTarget.closest("[data-category-catalog-open]");
  if (categoryCatalogButton) {
    openCategoryCatalogFromMenu();
    return;
  }
  activatePrimarySection(button.dataset.toySection || "catalog");
}));
document.querySelector(".topbar > .brand")?.addEventListener("click", event => {
  event.preventDefault();
  activatePrimarySection("overview");
  history.replaceState(null, "", window.location.pathname + window.location.search);
});
menuButton?.addEventListener("click", event => {
  event.stopPropagation();
  setMenuOpen(!document.body.classList.contains("menu-open"));
});
mobileDrawerClose?.addEventListener("click", event => {
  event.preventDefault();
  setMenuOpen(false);
  menuButton?.focus();
});
mobileDrawer?.addEventListener("click", event => {
  const categoryReleaseButton = event.target.closest("[data-category-release-open]");
  const categoryAnimeButton = event.target.closest("[data-category-anime-open]");
  const categoryCatalogButton = event.target.closest("[data-category-catalog-open]");
  const sectionButton = event.target.closest("[data-mobile-section]");
  const catalogScopeButton = event.target.closest("[data-mobile-catalog-scope]");

  if (categoryReleaseButton) {
    event.preventDefault();
    openCategoryReleaseFromMenu();
    return;
  }

  if (categoryAnimeButton) {
    event.preventDefault();
    openCategoryAnimeFromMenu();
    return;
  }

  if (categoryCatalogButton) {
    event.preventDefault();
    openCategoryCatalogFromMenu();
    return;
  }

  if (sectionButton) {
    event.preventDefault();
    activatePrimarySection(sectionButton.dataset.mobileSection || "catalog");
    return;
  }

  if (catalogScopeButton) {
    event.preventDefault();
    activatePrimarySection(catalogScopeButton.dataset.mobileCatalogScope || "catalog");
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) setMenuOpen(false);
  scheduleCatalogFilterModeCheck();
  if (modal?.open) syncModalViewportMetrics();
  if (!activeModalTagButton) return;
  if (!modal?.open || !document.body.contains(activeModalTagButton)) {
    closeModalTagPopover();
    return;
  }
  positionModalTagPopover(activeModalTagButton);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && activeModalTagButton) {
    closeModalTagPopover();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) setMenuOpen(false);
});
document.addEventListener("click", event => {
  if (activeModalTagButton && !event.target.closest(".modal-tag-info") && !event.target.closest(".modal-tag-popover")) closeModalTagPopover();
  if (!event.target.closest(".topbar") && !event.target.closest(".mobile-drawer")) setMenuOpen(false);
});

const catalogFilterResizeObserver = "ResizeObserver" in window ? new ResizeObserver(scheduleCatalogFilterModeCheck) : null;
if (catalogFilterResizeObserver) {
  const catalogPanel = catalogPanelElement();
  if (catalogPanel) catalogFilterResizeObserver.observe(catalogPanel);
  document.querySelectorAll("#catalogDropdownFilters").forEach(root => catalogFilterResizeObserver.observe(root));
}

renderCatalogStaticFilterOptions();
refreshCatalogControls();
renderSearchResults();
activateToyPanel(activeToyPanelName() || "overview");
const routeCurrentHash = () => {
  if (!window.location.hash) return;
  const hashId = window.location.hash.slice(1);
  const restoredContext = restoredModalContext(hashId);
  const restoredOptions = restoredContext?.options || {};
  if (hashId.startsWith("search")) {
    syncSearchHashToControls();
    openSearchResults({ replace: true });
  }
  else if (hashId === "CATEGORY-CATALOG") openCategoryCatalog({ updateHash: false });
  else if (hashId === "CATEGORY-RELEASE") openCategoryReleaseDetail(restoredOptions);
  else if (hashId === "CATEGORY-ANIME") openCategoryAnimeDetail(restoredOptions);
  else if (hashId.startsWith("METAL-FIGHT-EPISODE-")) openAnimeEpisodeDetail(hashId, restoredOptions);
  else if (restoredContext?.kind === "product-lineup") openProductBeyPoolDetail(hashId, restoredOptions);
  else if (hashId.startsWith("PRODUCT-")) openProductDetail(hashId, restoredOptions);
  else if (hashId.startsWith("TOOLS-")) openToolsDetail(hashId, restoredOptions);
  else if (hashId.startsWith("BOOK-")) openBookDetail(hashId, restoredOptions);
  else if (hashId.startsWith("GAME-")) openGameDetail(hashId, restoredOptions);
  else openDetail(hashId, restoredOptions);
};
routeCurrentHash();
window.addEventListener("hashchange", routeCurrentHash);
