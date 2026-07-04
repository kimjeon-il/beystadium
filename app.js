const beyItems = [
  { id: "BEY-BB-01-PEGASIS-105F", series: "metal fight", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "105F", productNo: "BB-01", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-02-BULL-125SF", series: "metal fight", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "125SF", productNo: "BB-02", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-125", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-03-SAGITTARIO-145S", series: "metal fight", type: "bey", structure: "basic", name: "사지타리오", en: "Sagittario", sub: "145S", productNo: "BB-03", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "WHEEL-SAGITTARIO", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-04-LEONE-145D", series: "metal fight", type: "bey", structure: "basic", name: "레온", jpName: "레오네", en: "Leone", sub: "145D", productNo: "BB-04", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "WHEEL-LEONE", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-05-PEGASIS-145D", series: "metal fight", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "145D", productNo: "BB-05", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-06-BULL-145S", series: "metal fight", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "145S", productNo: "BB-06", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-07-SAGITTARIO-125SF", series: "metal fight", type: "bey", structure: "basic", name: "사지타리오", en: "Sagittario", sub: "125SF", productNo: "BB-07", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "WHEEL-SAGITTARIO", "TRACK-125", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-08-LEONE-105F", series: "metal fight", type: "bey", structure: "basic", name: "레온", jpName: "레오네", en: "Leone", sub: "105F", productNo: "BB-08", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "WHEEL-LEONE", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-09-PEGASIS-105F", series: "metal fight", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "105F", productNo: "BB-09", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-11-WOLF-D125B", series: "metal fight", type: "bey", structure: "basic", name: "울프", jpName: "볼프", en: "Wolf", sub: "D125B", productNo: "BB-11", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "WHEEL-WOLF", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-12-WOLF-105F", series: "metal fight", type: "bey", structure: "basic", name: "울프", jpName: "볼프", en: "Wolf", sub: "105F", productNo: "BB-12", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "WHEEL-WOLF", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-13-ARIES-125D", series: "metal fight", type: "bey", structure: "basic", name: "아리에스", en: "Aries", sub: "125D", productNo: "BB-13", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "WHEEL-ARIES", "TRACK-125", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-13-SAGITTARIO-145F", series: "metal fight", type: "bey", structure: "basic", name: "사지타리오", en: "Sagittario", sub: "145F", productNo: "BB-13", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "WHEEL-SAGITTARIO", "TRACK-145", "BOTTOM-FLAT"] },
  { id: "BEY-BB-13-BULL-105S", series: "metal fight", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "105S", productNo: "BB-13", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-105", "BOTTOM-SHARP"] },
  { id: "BEY-BB-13-PEGASIS-145SF", series: "metal fight", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "145SF", productNo: "BB-13", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-13-LEONE-125S", series: "metal fight", type: "bey", structure: "basic", name: "레온", jpName: "레오네", en: "Leone", sub: "125S", productNo: "BB-13", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "WHEEL-LEONE", "TRACK-125", "BOTTOM-SHARP"] },
  { id: "BEY-BB-13-SAGITTARIO-145SF", series: "metal fight", type: "bey", structure: "basic", name: "사지타리오", en: "Sagittario", sub: "145SF", productNo: "BB-13", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "WHEEL-SAGITTARIO", "TRACK-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-13-BULL-105D", series: "metal fight", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "105D", productNo: "BB-13", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-105", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-13-PEGASIS-145F", series: "metal fight", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "145F", productNo: "BB-13", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-145", "BOTTOM-FLAT"] },
  { id: "BEY-BB-18-LIBRA-DF145BS", series: "metal fight", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "DF145BS", productNo: "BB-18", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-20-WOLF-D125B", series: "metal fight", type: "bey", structure: "basic", name: "울프", jpName: "볼프", en: "Wolf", sub: "D125B", productNo: "BB-20", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "WHEEL-WOLF", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-20-PEGASIS-105F", series: "metal fight", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "105F", productNo: "BB-20", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-21-PEGASIS-100HF", series: "metal fight", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "100HF", productNo: "BB-21", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-100", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-21-AQUARIO-105F", series: "metal fight", type: "bey", structure: "basic", name: "아쿠아리오", en: "Aquario", sub: "105F", productNo: "BB-21", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "WHEEL-AQUARIO", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-21-WOLF-125SF", series: "metal fight", type: "bey", structure: "basic", name: "울프", jpName: "볼프", en: "Wolf", sub: "125SF", productNo: "BB-21", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "WHEEL-WOLF", "TRACK-125", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-22-VIRGO-DF145BS", series: "metal fight", type: "bey", structure: "basic", name: "비르고", en: "Virgo", sub: "DF145BS", productNo: "BB-22", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "WHEEL-VIRGO", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-22-LIBRA-145S", series: "metal fight", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "145S", productNo: "BB-22", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-22-LEONE-D125B", series: "metal fight", type: "bey", structure: "basic", name: "레온", jpName: "레오네", en: "Leone", sub: "D125B", productNo: "BB-22", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "WHEEL-LEONE", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-23-L-DRAGO-105F", series: "metal fight", type: "bey", structure: "basic", name: "엘드라고", en: "L-Drago", sub: "105F", productNo: "BB-23", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "WHEEL-L-DRAGO", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-24-ESCOLPIO-WD145B", series: "metal fight", type: "bey", structure: "basic", name: "에스콜피오", en: "Escolpio", sub: "WD145B", productNo: "BB-24", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "WHEEL-ESCOLPIO", "TRACK-WIDE-DEFENSE-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-25-PISCES-D125BS", series: "metal fight", type: "bey", structure: "basic", name: "파이시즈", en: "Pisces", sub: "D125BS", productNo: "BB-25", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PISCES", "WHEEL-PISCES", "TRACK-DEFENSE-125", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-25-AQUARIO-DF145SF", series: "metal fight", type: "bey", structure: "basic", name: "아쿠아리오", en: "Aquario", sub: "DF145SF", productNo: "BB-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "WHEEL-AQUARIO", "TRACK-DOWN-FORCE-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-25-VIRGO-125BS", series: "metal fight", type: "bey", structure: "basic", name: "비르고", en: "Virgo", sub: "125BS", productNo: "BB-25", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "WHEEL-VIRGO", "TRACK-125", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-25-LIBRA-D125HF", series: "metal fight", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "D125HF", productNo: "BB-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-DEFENSE-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-25-AQUARIO-105B", series: "metal fight", type: "bey", structure: "basic", name: "아쿠아리오", en: "Aquario", sub: "105B", productNo: "BB-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "WHEEL-AQUARIO", "TRACK-105", "BOTTOM-BALL"] },
  { id: "BEY-BB-25-VIRGO-100B", series: "metal fight", type: "bey", structure: "basic", name: "비르고", en: "Virgo", sub: "100B", productNo: "BB-25", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "WHEEL-VIRGO", "TRACK-100", "BOTTOM-BALL"] },
  { id: "BEY-BB-25-LIBRA-100F", series: "metal fight", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "100F", productNo: "BB-25", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-100", "BOTTOM-FLAT"] },
  { id: "BEY-BB-25-BULL-DF145HF", series: "metal fight", type: "bey", structure: "basic", name: "불", en: "Bull", sub: "DF145HF", productNo: "BB-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "WHEEL-BULL", "TRACK-DOWN-FORCE-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-26-GEMIOS-DF145FS", series: "metal fight", type: "bey", structure: "basic", name: "제미오스", en: "Gemios", sub: "DF145FS", productNo: "BB-26", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-GEMIOS", "WHEEL-GEMIOS", "TRACK-DOWN-FORCE-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-27-CAPRICORNE-100HF", series: "metal fight", type: "bey", structure: "basic", name: "카프리콘", jpName: "카프리코네", en: "Capricorne", sub: "100HF", productNo: "BB-27", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "WHEEL-CAPRICORNE", "TRACK-100", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-QUETZALCOATL-90WF", series: "metal fight", type: "bey", structure: "basic", name: "케찰코아틀", en: "Quetzalcoatl", sub: "90WF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-QUETZALCOATL", "WHEEL-QUETZALCOATL", "TRACK-90", "BOTTOM-WIDE-FLAT"] },
  { id: "BEY-COUNTER-LEONE-D125B", series: "metal fight", type: "bey", structure: "hybrid", name: "카운터 레온", jpName: "카운터 레오네", en: "Counter Leone", sub: "D125B", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "METALWHEEL-COUNTER", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-28-STORM-PEGASIS-105RF", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 페가시스", en: "Storm Pegasis", sub: "105RF", productNo: "BB-28", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-STORM", "TRACK-105", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-29-DARK-WOLF-DF145FS", series: "metal fight", type: "bey", structure: "hybrid", name: "다크 울프", en: "Dark Wolf", sub: "DF145FS", productNo: "BB-29", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "METALWHEEL-DARK", "TRACK-DOWN-FORCE-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-30-ROCK-LEONE-145WB", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 레온", jpName: "록 레오네", en: "Rock Leone", sub: "145WB", productNo: "BB-30", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "METALWHEEL-ROCK", "TRACK-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-31-MAD-CANCER-CH120FS", series: "metal fight", type: "bey", structure: "hybrid", name: "매드 캔서", en: "Mad Cancer", sub: "CH120FS", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "LIGHTWHEEL-MAD", "TRACK-CHANGE-HEIGHT-120", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-31-HEAT-PEGASIS-100WB", series: "metal fight", type: "bey", structure: "hybrid", name: "히트 페가시스", en: "Heat Pegasis", sub: "100WB", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "LIGHTWHEEL-HEAT", "TRACK-100", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-31-CLAY-WOLF-145FS", series: "metal fight", type: "bey", structure: "hybrid", name: "클레이 울프", jpName: "클레이 볼프", en: "Clay Wolf", sub: "145FS", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-CLAY", "TRACK-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-31-HEAT-WOLF-WD145SF", series: "metal fight", type: "bey", structure: "hybrid", name: "히트 울프", jpName: "히트 볼프", en: "Heat Wolf", sub: "WD145SF", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-HEAT", "TRACK-WIDE-DEFENSE-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-31-MAD-LEONE-145B", series: "metal fight", type: "bey", structure: "hybrid", name: "매드 레온", jpName: "매드 레오네", en: "Mad Leone", sub: "145B", productNo: "BB-31", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-MAD", "TRACK-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-31-CLAY-LEONE-DF145WB", series: "metal fight", type: "bey", structure: "hybrid", name: "클레이 레온", jpName: "클레이 레오네", en: "Clay Leone", sub: "DF145WB", productNo: "BB-31", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-CLAY", "TRACK-DOWN-FORCE-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-31-WIND-PEGASIS-DF145B", series: "metal fight", type: "bey", structure: "hybrid", name: "윈드 페가시스", en: "Wind Pegasis", sub: "DF145B", productNo: "BB-31", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "LIGHTWHEEL-WIND", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-31-WIND-LEONE-D125HF", series: "metal fight", type: "bey", structure: "hybrid", name: "윈드 레온", jpName: "윈드 레오네", en: "Wind Leone", sub: "D125HF", productNo: "BB-31", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-WIND", "TRACK-DEFENSE-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-32-STORM-PEGASIS-105RF", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 페가시스", en: "Storm Pegasis", sub: "105RF", productNo: "BB-32", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-STORM", "TRACK-105", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-32-DARK-WOLF-DF145FS", series: "metal fight", type: "bey", structure: "hybrid", name: "다크 울프", jpName: "다크 볼프", en: "Dark Wolf", sub: "DF145FS", productNo: "BB-32", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "METALWHEEL-DARK", "TRACK-DOWN-FORCE-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-35-FLAME-SAGITTARIO-C145S", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 사지타리오", en: "Flame Sagittario", sub: "C145S", productNo: "BB-35", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-FLAME", "TRACK-CLAW-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-37-WIND-AQUARIO-100HF-S", series: "metal fight", type: "bey", structure: "hybrid", name: "윈드 아쿠아리오", en: "Wind Aquario", sub: "100HF/S", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "CLEARWHEEL-AQUARIO", "LIGHTWHEEL-WIND", "TRACK-100", "BOTTOM-HOLE-FLAT-SHARP"] },
  { id: "BEY-BB-37-CLAY-WOLF-105B", series: "metal fight", type: "bey", structure: "hybrid", name: "클레이 울프", jpName: "클레이 볼프", en: "Clay Wolf", sub: "105B", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-CLAY", "TRACK-105", "BOTTOM-BALL"] },
  { id: "BEY-BB-37-CLAY-SAGITTARIO-145B", series: "metal fight", type: "bey", structure: "hybrid", name: "클레이 사지타리오", en: "Clay Sagittario", sub: "145B", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "LIGHTWHEEL-CLAY", "TRACK-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-37-HEAT-PEGASIS-DF145WB", series: "metal fight", type: "bey", structure: "hybrid", name: "히트 페가시스", en: "Heat Pegasis", sub: "DF145WB", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "LIGHTWHEEL-HEAT", "TRACK-DOWN-FORCE-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-37-HEAT-LEONE-D125FS", series: "metal fight", type: "bey", structure: "hybrid", name: "히트 레온", jpName: "히트 레오네", en: "Heat Leone", sub: "D125FS", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-HEAT", "TRACK-DEFENSE-125", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-37-MAD-SAGITTARIO-DF145HF", series: "metal fight", type: "bey", structure: "hybrid", name: "매드 사지타리오", en: "Mad Sagittario", sub: "DF145HF", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "LIGHTWHEEL-MAD", "TRACK-DOWN-FORCE-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-37-MAD-LEONE-145FS", series: "metal fight", type: "bey", structure: "hybrid", name: "매드 레온", jpName: "매드 레오네", en: "Mad Leone", sub: "145FS", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-MAD", "TRACK-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-37-WIND-WOLF-WD145WB", series: "metal fight", type: "bey", structure: "hybrid", name: "윈드 울프", jpName: "윈드 볼프", en: "Wind Wolf", sub: "WD145WB", productNo: "BB-37", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-WIND", "TRACK-WIDE-DEFENSE-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-40-DARK-BULL-H145SD", series: "metal fight", type: "bey", structure: "hybrid", name: "다크 불", en: "Dark Bull", sub: "H145SD", productNo: "BB-40", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "METALWHEEL-DARK", "TRACK-HORN-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-43-LIGHTNING-L-DRAGO-100HF", series: "metal fight", type: "bey", structure: "hybrid", name: "라이트닝 엘드라고", en: "Lightning L-Drago", sub: "100HF", productNo: "BB-43", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "CLEARWHEEL-L-DRAGO", "METALWHEEL-LIGHTNING", "TRACK-100", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-44-STORM-PEGASIS-100RF", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 페가시스", en: "Storm Pegasis", sub: "100RF", productNo: "BB-44", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-STORM", "TRACK-100", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-44-ROCK-WOLF-H145B", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 울프", jpName: "록 볼프", en: "Rock Wolf", sub: "H145B", productNo: "BB-44", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "METALWHEEL-ROCK", "TRACK-HORN-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-44-DARK-LEONE-C145B", series: "metal fight", type: "bey", structure: "hybrid", name: "다크 레온", jpName: "다크 레오네", en: "Dark Leone", sub: "C145B", productNo: "BB-44", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "METALWHEEL-DARK", "TRACK-CLAW-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-44-FLAME-WOLF-H145S", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 울프", jpName: "플레임 볼프", en: "Flame Wolf", sub: "H145S", productNo: "BB-44", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "METALWHEEL-FLAME", "TRACK-HORN-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-44-STORM-SAGITTARIO-145SD", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 사지타리오", en: "Storm Sagittario", sub: "145SD", productNo: "BB-44", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-STORM", "TRACK-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-44-ROCK-BULL-WD145HF", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 불", jpName: "록 불", en: "Rock Bull", sub: "WD145HF", productNo: "BB-44", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "METALWHEEL-ROCK", "TRACK-WIDE-DEFENSE-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-44-DARK-SAGITTARIO-WD145SD", series: "metal fight", type: "bey", structure: "hybrid", name: "다크 사지타리오", en: "Dark Sagittario", sub: "WD145SD", productNo: "BB-44", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-DARK", "TRACK-WIDE-DEFENSE-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-44-FLAME-BULL-105WB", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 불", en: "Flame Bull", sub: "105WB", productNo: "BB-44", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "METALWHEEL-FLAME", "TRACK-105", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-45-CLAY-ARIES-ED145B", series: "metal fight", type: "bey", structure: "hybrid", name: "클레이 아리에스", en: "Clay Aries", sub: "ED145B", productNo: "BB-45", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "CLEARWHEEL-ARIES", "LIGHTWHEEL-CLAY", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-BALL"] },
  { id: "BEY-BB-45-CLAY-PEGASIS-145S", series: "metal fight", type: "bey", structure: "hybrid", name: "클레이 페가시스", en: "Clay Pegasis", sub: "145S", productNo: "BB-45", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "LIGHTWHEEL-CLAY", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-45-MAD-SAGITTARIO-C145SD", series: "metal fight", type: "bey", structure: "hybrid", name: "매드 사지타리오", en: "Mad Sagittario", sub: "C145SD", productNo: "BB-45", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "LIGHTWHEEL-MAD", "TRACK-CLAW-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-45-HEAT-BULL-D125WB", series: "metal fight", type: "bey", structure: "hybrid", name: "히트 불", en: "Heat Bull", sub: "D125WB", productNo: "BB-45", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "LIGHTWHEEL-HEAT", "TRACK-DEFENSE-125", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-45-WIND-WOLF-H145D", series: "metal fight", type: "bey", structure: "hybrid", name: "윈드 울프", jpName: "윈드 볼프", en: "Wind Wolf", sub: "H145D", productNo: "BB-45", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-WOLF", "CLEARWHEEL-WOLF", "LIGHTWHEEL-WIND", "TRACK-HORN-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-45-HEAT-LEONE-H145S", series: "metal fight", type: "bey", structure: "hybrid", name: "히트 레온", jpName: "히트 레오네", en: "Heat Leone", sub: "H145S", productNo: "BB-45", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE", "LIGHTWHEEL-HEAT", "TRACK-HORN-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-45-MAD-BULL-C145HF", series: "metal fight", type: "bey", structure: "hybrid", name: "매드 불", en: "Mad Bull", sub: "C145HF", productNo: "BB-45", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BULL", "CLEARWHEEL-BULL", "LIGHTWHEEL-MAD", "TRACK-CLAW-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-45-WIND-SAGITTARIO-100SD", series: "metal fight", type: "bey", structure: "hybrid", name: "윈드 사지타리오", en: "Wind Sagittario", sub: "100SD", productNo: "BB-45", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "LIGHTWHEEL-WIND", "TRACK-100", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-47-EARTH-AQUILA-145WD", series: "metal fight", type: "bey", structure: "hybrid", name: "어스 아쿠이라", en: "Earth Aquila", sub: "145WD", productNo: "BB-47", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-AQUILA", "CLEARWHEEL-AQUILA", "METALWHEEL-EARTH", "TRACK-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-48-FLAME-LIBRA-T125ES", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 리브라", en: "Flame Libra", sub: "T125ES", productNo: "BB-48", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-FLAME", "TRACK-TORNADO-125", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-50-STORM-CAPRICORNE-M145Q", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 카프리콘", jpName: "스톰 카프리코네", en: "Storm Capricorne", sub: "M145Q", productNo: "BB-50", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-STORM", "TRACK-MOVEMENT-145", "BOTTOM-QUAKE"] },
  { id: "BEY-BB-51-ROCK-ORSO-D125B", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 오르소", jpName: "록 오르소", en: "Rock Orso", sub: "D125B", productNo: "BB-51", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ORSO", "CLEARWHEEL-ORSO", "METALWHEEL-ROCK", "TRACK-DEFENSE-125", "BOTTOM-BALL"] },
  { id: "BEY-BB-55-DARK-CANCER-CH120SF", series: "metal fight", type: "bey", structure: "hybrid", name: "다크 캔서", en: "Dark Cancer", sub: "CH120SF", productNo: "BB-55", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-DARK", "TRACK-CHANGE-HEIGHT-120", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-56-DARK-CAPRICORNE-105RF", series: "metal fight", type: "bey", structure: "hybrid", name: "다크 카프리콘", jpName: "다크 카프리코네", en: "Dark Capricorne", sub: "105RF", productNo: "BB-56", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-DARK", "TRACK-105", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-56-KILLER-GEMIOS-DF145FS", series: "metal fight", type: "bey", structure: "hybrid", name: "키라 제미오스", en: "Killer Gemios", sub: "DF145FS", productNo: "BB-56", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-GEMIOS", "CLEARWHEEL-GEMIOS", "METALWHEEL-KILLER", "TRACK-DOWN-FORCE-145", "BOTTOM-FLAT-SHARP"] },
  { id: "BEY-BB-56-STORM-AQUARIO-M145Q", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 아쿠아리오", en: "Storm Aquario", sub: "M145Q", productNo: "BB-56", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "CLEARWHEEL-AQUARIO", "METALWHEEL-STORM", "TRACK-MOVEMENT-145", "BOTTOM-QUAKE"] },
  { id: "BEY-BB-57-FLAME-LIBRA-DF145BS", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 리브라", en: "Flame Libra", sub: "DF145BS", productNo: "BB-57", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-FLAME", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-57-THERMAL-PISCES-T125ES", series: "metal fight", type: "bey", structure: "hybrid", name: "써멀 파이시즈", en: "Thermal Pisces", sub: "T125ES", productNo: "BB-57", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PISCES", "CLEARWHEEL-PISCES", "METALWHEEL-THERMAL", "TRACK-TORNADO-125", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-57-ROCK-ARIES-145D", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 아리에스", jpName: "록 아리에스", en: "Rock Aries", sub: "145D", productNo: "BB-57", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "CLEARWHEEL-ARIES", "METALWHEEL-ROCK", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-CYBER-PEGASIS-100HF", series: "metal fight", type: "bey", structure: "hybrid", name: "사이버 페가시스", en: "Cyber Pegasis", sub: "100HF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-CYBER", "TRACK-100", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-59-BURN-PHOENIX-135MS", series: "metal fight", type: "bey", structure: "hybrid", name: "번 피닉스", en: "Burn Phoenix", sub: "135MS", productNo: "BB-59", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PHOENIX", "CLEARWHEEL-PHOENIX", "METALWHEEL-BURN", "TRACK-135", "BOTTOM-METAL-SHARP"] },
  { id: "BEY-BURN-PHOENIX-90WF", series: "metal fight", type: "bey", structure: "hybrid", name: "번 피닉스", en: "Burn Phoenix", sub: "90WF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PHOENIX", "CLEARWHEEL-PHOENIX", "METALWHEEL-BURN", "TRACK-90", "BOTTOM-WIDE-FLAT"] },
  { id: "BEY-BURN-PISCES-ED145WF", series: "metal fight", type: "bey", structure: "hybrid", name: "번 파이시즈", en: "Burn Pisces", sub: "ED145WF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PISCES", "CLEARWHEEL-PISCES", "METALWHEEL-BURN", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-WIDE-FLAT"] },
  { id: "BEY-EARTH-AQUILA-105HFS", series: "metal fight", type: "bey", structure: "hybrid", name: "어스 아쿠이라", en: "Earth Aquila", sub: "105HF/S", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-AQUILA", "CLEARWHEEL-AQUILA", "METALWHEEL-EARTH", "TRACK-105", "BOTTOM-HOLE-FLAT-SHARP"] },
  { id: "BEY-BB-60-EARTH-VIRGO-GB145BS", series: "metal fight", type: "bey", structure: "hybrid", name: "어스 비르고", en: "Earth Virgo", sub: "GB145BS", productNo: "BB-60", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "CLEARWHEEL-VIRGO", "METALWHEEL-EARTH", "TRACK-GRAVITY-BALL-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-60-EARTH-CANCER-DF145ES", series: "metal fight", type: "bey", structure: "hybrid", name: "어스 캔서", en: "Earth Cancer", sub: "DF145ES", productNo: "BB-60", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-EARTH", "TRACK-DOWN-FORCE-145", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-60-FLAME-CAPRICORNE-T125HF", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 카프리콘", jpName: "플레임 카프리코네", en: "Flame Capricorne", sub: "T125HF", productNo: "BB-60", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-FLAME", "TRACK-TORNADO-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-60-FLAME-AQUILA-100ES", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 아쿠이라", en: "Flame Aquila", sub: "100ES", productNo: "BB-60", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-AQUILA", "CLEARWHEEL-AQUILA", "METALWHEEL-FLAME", "TRACK-100", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-60-ROCK-CAPRICORNE-T125D", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 카프리콘", jpName: "록 카프리코네", en: "Rock Capricorne", sub: "T125D", productNo: "BB-60", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-ROCK", "TRACK-TORNADO-125", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-60-ROCK-LIBRA-100WD", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 리브라", jpName: "록 리브라", en: "Rock Libra", sub: "100WD", productNo: "BB-60", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-ROCK", "TRACK-100", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-60-STORM-AQUILA-145HF", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 아쿠이라", en: "Storm Aquila", sub: "145HF", productNo: "BB-60", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUILA", "CLEARWHEEL-AQUILA", "METALWHEEL-STORM", "TRACK-145", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-60-STORM-LIBRA-145S", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 리브라", en: "Storm Libra", sub: "145S", productNo: "BB-60", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-STORM", "TRACK-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-65-ROCK-ESCOLPIO-T125JB", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 에스콜피오", jpName: "록 에스콜피오", en: "Rock Escolpio", sub: "T125JB", productNo: "BB-65", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-ROCK", "TRACK-TORNADO-125", "BOTTOM-JOG-BALL"] },
  { id: "BEY-BB-69-POISON-SERPENT-SW145SD", series: "metal fight", type: "bey", structure: "hybrid", name: "포이즌 서펜트", en: "Poison Serpent", sub: "SW145SD", productNo: "BB-69", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-SERPENT", "CLEARWHEEL-SERPENT", "METALWHEEL-POISON", "TRACK-SWITCH-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-MERCURY-ANUBIUS-85XF", series: "metal fight", type: "bey", structure: "hybrid", name: "머큐리 아누비우스", en: "Mercury Anubius", sub: "85XF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-ANUBIUS", "CLEARWHEEL-ANUBIUS", "METALWHEEL-MERCURY", "TRACK-85", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-MERCURY-ANUBIUS-85XF-BRAVE", series: "metal fight", type: "bey", structure: "hybrid", name: "머큐리 아누비우스", en: "Mercury Anubius", sub: "85XF 브레이브 Ver.", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-ANUBIUS", "CLEARWHEEL-ANUBIUS", "METALWHEEL-MERCURY", "TRACK-85", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-MERCURY-ANUBIUS-85XF-LEGEND", series: "metal fight", type: "bey", structure: "hybrid", name: "머큐리 아누비우스", en: "Mercury Anubius", sub: "85XF 레전드 Ver.", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-ANUBIUS", "CLEARWHEEL-ANUBIUS", "METALWHEEL-MERCURY", "TRACK-85", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-GALAXY-PEGASIS-GB145MS", series: "metal fight", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "GB145MS", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-GRAVITY-BALL-145", "BOTTOM-METAL-SHARP"] },
  { id: "BEY-ROCK-ARIES-ED145D", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 아리에스", jpName: "록 아리에스", en: "Rock Aries", sub: "ED145D", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "CLEARWHEEL-ARIES", "METALWHEEL-ROCK", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-INFINITY-LIBRA-GB145S", series: "metal fight", type: "bey", structure: "hybrid", name: "인피니티 리브라", en: "Infinity Libra", sub: "GB145S", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "CLEARWHEEL-LIBRA", "METALWHEEL-INFINITY", "TRACK-GRAVITY-BALL-145", "BOTTOM-SHARP"] },
  { id: "BEY-BB-70-GALAXY-PEGASIS-W105R2F", series: "metal fight", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "W105R²F", productNo: "BB-70", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-71-RAY-UNICORNO-D125CS", series: "metal fight", type: "bey", structure: "hybrid", name: "레이 유니콘", jpName: "레이 유니코르노", en: "Ray Unicorno", sub: "D125CS", productNo: "BB-71", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO", "METALWHEEL-RAY", "TRACK-DEFENSE-125", "BOTTOM-COAT-SHARP"] },
  { id: "BEY-BB-72-AQUARIO-105F", series: "metal fight", type: "bey", structure: "basic", name: "아쿠아리오", en: "Aquario", sub: "105F", productNo: "BB-72", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "WHEEL-AQUARIO", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-74-THERMAL-LACERTA-WA130HF", series: "metal fight", type: "bey", structure: "hybrid", name: "써멀 라체르타", en: "Thermal Lacerta", sub: "WA130HF", productNo: "BB-74", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-LACERTA", "CLEARWHEEL-LACERTA", "METALWHEEL-THERMAL", "TRACK-WING-ATTACK-130", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-75-ROCK-ORSO-ED145D", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 오르소", jpName: "록 오르소", en: "Rock Orso", sub: "ED145D", productNo: "BB-75", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ORSO", "CLEARWHEEL-ORSO", "METALWHEEL-ROCK", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-75-GALAXY-PEGASIS-W105R2F", series: "metal fight", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "W105R²F", productNo: "BB-75", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-75-EARTH-VIRGO-T125ES", series: "metal fight", type: "bey", structure: "hybrid", name: "어스 비르고", en: "Earth Virgo", sub: "T125ES", productNo: "BB-75", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-VIRGO", "CLEARWHEEL-VIRGO", "METALWHEEL-EARTH", "TRACK-TORNADO-125", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-76-GALAXY-PEGASIS-W105R2F", series: "metal fight", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "W105R²F", productNo: "BB-76", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-78-ROCK-GIRAFFE-R145WB", series: "metal fight", type: "bey", structure: "hybrid", name: "로크 기라프", jpName: "록 기라프", en: "Rock Giraffe", sub: "R145WB", productNo: "BB-78", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-GIRAFFE", "CLEARWHEEL-GIRAFFE", "METALWHEEL-ROCK", "TRACK-RUBBER-145", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BB-80-GRAVITY-PERSEUS-AD145WD", series: "metal fight", type: "bey", structure: "hybrid", name: "그라비티 페르세우스", en: "Gravity Perseus", sub: "AD145WD", productNo: "BB-80", battleType: "defense", spin: "dual", tags: [], desc: "", parts: ["FACE-PERSEUS", "CLEARWHEEL-PERSEUS", "METALWHEEL-GRAVITY", "TRACK-ARMOR-DEFENSE-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-82-GRAND-KETOS-WD145RS", series: "metal fight", type: "bey", structure: "hybrid", name: "그랜드 케토스", en: "Grand Ketos", sub: "WD145RS", productNo: "BB-82", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-KETOS", "CLEARWHEEL-KETOS", "METALWHEEL-GRAND", "TRACK-WIDE-DEFENSE-145", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-82-GRAND-KETOS-T125RS", series: "metal fight", type: "bey", structure: "hybrid", name: "그랜드 케토스", en: "Grand Ketos", sub: "T125RS", productNo: "BB-82", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-KETOS", "CLEARWHEEL-KETOS", "METALWHEEL-GRAND", "TRACK-TORNADO-125", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-82-BURN-UNICORNO-SW145JB", series: "metal fight", type: "bey", structure: "hybrid", name: "번 유니콘", jpName: "번 유니코르노", en: "Burn Unicorno", sub: "SW145JB", productNo: "BB-82", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO", "METALWHEEL-BURN", "TRACK-SWITCH-145", "BOTTOM-JOG-BALL"] },
  { id: "BEY-BB-82-POISON-UNICORNO-130HF", series: "metal fight", type: "bey", structure: "hybrid", name: "포이즌 유니콘", jpName: "포이즌 유니코르노", en: "Poison Unicorno", sub: "130HF", productNo: "BB-82", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO", "METALWHEEL-POISON", "TRACK-130", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-82-STORM-PHOENIX-130B", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 피닉스", en: "Storm Phoenix", sub: "130B", productNo: "BB-82", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PHOENIX", "CLEARWHEEL-PHOENIX", "METALWHEEL-STORM", "TRACK-130", "BOTTOM-BALL"] },
  { id: "BEY-BB-82-POISON-PHOENIX-WA130SD", series: "metal fight", type: "bey", structure: "hybrid", name: "포이즌 피닉스", en: "Poison Phoenix", sub: "WA130SD", productNo: "BB-82", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-PHOENIX", "CLEARWHEEL-PHOENIX", "METALWHEEL-POISON", "TRACK-WING-ATTACK-130", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-82-BURN-SERPENT-WA130ES", series: "metal fight", type: "bey", structure: "hybrid", name: "번 서펜트", en: "Burn Serpent", sub: "WA130ES", productNo: "BB-82", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SERPENT", "CLEARWHEEL-SERPENT", "METALWHEEL-BURN", "TRACK-WING-ATTACK-130", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BB-82-STORM-SERPENT-T125HF", series: "metal fight", type: "bey", structure: "hybrid", name: "스톰 서펜트", en: "Storm Serpent", sub: "T125HF", productNo: "BB-82", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-SERPENT", "CLEARWHEEL-SERPENT", "METALWHEEL-STORM", "TRACK-TORNADO-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-83-PISCES-DF145BS", series: "metal fight", type: "bey", structure: "basic", name: "파이시즈", en: "Pisces", sub: "DF145BS", productNo: "BB-83", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-PISCES", "WHEEL-PISCES", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BB-86-COUNTER-ESCOLPIO-145D", series: "metal fight", type: "bey", structure: "hybrid", name: "카운터 에스콜피오", en: "Counter Escolpio", sub: "145D", productNo: "BB-86", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-COUNTER", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-86-CYBER-AQUARIO-105F", series: "metal fight", type: "bey", structure: "hybrid", name: "사이버 아쿠아리오", en: "Cyber Aquario", sub: "105F", productNo: "BB-86", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-AQUARIO", "CLEARWHEEL-AQUARIO", "METALWHEEL-CYBER", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-86-POISON-GIRAFFE-S130MB", series: "metal fight", type: "bey", structure: "hybrid", name: "포이즌 기라프", en: "Poison Giraffe", sub: "S130MB", productNo: "BB-86", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-GIRAFFE", "CLEARWHEEL-GIRAFFE", "METALWHEEL-POISON", "TRACK-SHIELD-130", "BOTTOM-METAL-BALL"] },
  { id: "BEY-SOL-BLAZE-V145AS", series: "metal fight", type: "bey", structure: "hybrid", name: "솔 블레이즈", en: "Sol Blaze", sub: "V145AS", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BLAZE", "CLEARWHEEL-BLAZE", "METALWHEEL-SOL", "TRACK-VARIABLE-145", "BOTTOM-AROUND-SHARP"] },
  { id: "BEY-BB-88-METEO-L-DRAGO-LW105LF", series: "metal fight", type: "bey", structure: "hybrid", name: "메테오 엘드라고", en: "Meteo L-Drago", sub: "LW105LF", productNo: "BB-88", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "CLEARWHEEL-L-DRAGO-II", "METALWHEEL-METEO", "TRACK-LEFT-WING-105", "BOTTOM-LEFT-FLAT"] },
  { id: "BEY-BB-89-ARIES-145D", series: "metal fight", type: "bey", structure: "basic", name: "아리에스", en: "Aries", sub: "145D", productNo: "BB-89", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-ARIES", "WHEEL-ARIES", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-DIVINE-CHIMERA-TR145FB", series: "metal fight", type: "bey", structure: "hybrid", name: "디바인 키메라", en: "Divine Chimera", sub: "TR145FB", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-CHIMERA", "CLEARWHEEL-CHIMERA", "METALWHEEL-DIVINE", "TRACK-TRIPLE-ROLLER-145", "BOTTOM-FLAT-BALL"] },
  { id: "BEY-BAKUSHIN-SUSANOW-90WF", series: "metal fight", type: "bey", structure: "hybrid", name: "폭신 스사노오", jpName: "바쿠신 스사노오", en: "Bakushin Susanow", sub: "90WF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-SUSANOW", "CLEARWHEEL-SUSANOW", "METALWHEEL-BAKUSHIN", "TRACK-90", "BOTTOM-WIDE-FLAT"] },
  { id: "BEY-BB-P01-VULCAN-HORUSEUS-145D", series: "metal fight", type: "bey", structure: "hybrid", name: "발칸 호르세우스", jpName: "발칸 호루세우스", en: "Vulcan Horuseus", sub: "145D", productNo: "BB-P01", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HORUSEUS", "CLEARWHEEL-HORUSEUS", "METALWHEEL-VULCAN", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-91-RAY-KEEL-100RSF", series: "metal fight", type: "bey", structure: "hybrid", name: "레이 킬", jpName: "레이 길", en: "Ray Keel", sub: "100RSF", productNo: "BB-91", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-KEEL", "CLEARWHEEL-KEEL", "METALWHEEL-RAY", "TRACK-100", "BOTTOM-RUBBER-SEMI-FLAT"] },
  { id: "BEY-BB-92-GALAXY-PEGASIS-W105R2F", series: "metal fight", type: "bey", structure: "hybrid", name: "갤럭시 페가시스", en: "Galaxy Pegasis", sub: "W105R²F", productNo: "BB-92", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS", "METALWHEEL-GALAXY", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-93-RAY-UNICORNO-D125CS", series: "metal fight", type: "bey", structure: "hybrid", name: "레이 유니콘", jpName: "레이 유니코르노", en: "Ray Unicorno", sub: "D125CS", productNo: "BB-93", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO", "METALWHEEL-RAY", "TRACK-DEFENSE-125", "BOTTOM-COAT-SHARP"] },
  { id: "BEY-BB-94-TORNADO-HERCULEO-105F", series: "metal fight", type: "bey", structure: "hybrid", name: "토네이도 헤라클레오", en: "Tornado Herculeo", sub: "105F", productNo: "BB-94", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-HERCULEO", "CLEARWHEEL-HERCULEO", "METALWHEEL-TORNADO", "TRACK-105", "BOTTOM-FLAT"] },
  { id: "BEY-BB-95-FLAME-BYXIS-230WD", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 픽시스", jpName: "플레임 빅시스", en: "Flame Byxis", sub: "230WD", productNo: "BB-95", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-BYXIS", "CLEARWHEEL-BYXIS", "METALWHEEL-FLAME", "TRACK-230", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-96-PEGASIS-85RF", series: "metal fight", type: "bey", structure: "basic", name: "페가시스", en: "Pegasis", sub: "85RF", productNo: "BB-96", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "WHEEL-PEGASIS", "TRACK-85", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-96-LIBRA-100D", series: "metal fight", type: "bey", structure: "basic", name: "리브라", en: "Libra", sub: "100D", productNo: "BB-96", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LIBRA", "WHEEL-LIBRA", "TRACK-100", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-96-BURN-CANCER-90WD", series: "metal fight", type: "bey", structure: "hybrid", name: "번 캔서", en: "Burn Cancer", sub: "90WD", productNo: "BB-96", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-BURN", "TRACK-90", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-NIGHTMARE-REX-SW145SD", series: "metal fight", type: "bey", structure: "hybrid", name: "나이트메어 렉스", en: "Nightmare Rex", sub: "SW145SD", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-REX", "CLEARWHEEL-REX", "METALWHEEL-NIGHTMARE", "TRACK-SWITCH-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BB-99-HELL-KERBECS-BD145DS", series: "metal fight", type: "bey", structure: "hybrid", name: "헬 켈베로스", jpName: "헬 케르벡스", en: "Hell Kerbecs", sub: "BD145DS", productNo: "BB-99", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-KERBECS", "CLEARWHEEL-KERBECS", "METALWHEEL-HELL", "TRACK-BOOST-DISK-145", "BOTTOM-DEFENSE-SHARP"] },
  { id: "BEY-BB-100-KILLER-BEAFOWL-UW145EWD", series: "metal fight", type: "bey", structure: "hybrid", name: "키라 비폴", en: "Killer Beafowl", sub: "UW145EWD", productNo: "BB-100", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-BEAFOWL", "CLEARWHEEL-BEAFOWL", "METALWHEEL-KILLER", "TRACK-UPPER-WING-145", "BOTTOM-ETERNAL-WIDE-DEFENSE"] },
  { id: "BEY-BB-100-GALAXY-CANCER-D125HF", series: "metal fight", type: "bey", structure: "hybrid", name: "갤럭시 캔서", en: "Galaxy Cancer", sub: "D125HF", productNo: "BB-100", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-GALAXY", "TRACK-DEFENSE-125", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-100-BURN-ESCOLPIO-100RF", series: "metal fight", type: "bey", structure: "hybrid", name: "번 에스콜피오", en: "Burn Escolpio", sub: "100RF", productNo: "BB-100", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-BURN", "TRACK-100", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-100-FLAME-GEMIOS-105CS", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 제미오스", en: "Flame Gemios", sub: "105CS", productNo: "BB-100", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-GEMIOS", "CLEARWHEEL-GEMIOS", "METALWHEEL-FLAME", "TRACK-105", "BOTTOM-COAT-SHARP"] },
  { id: "BEY-BB-100-KILLER-ESCOLPIO-100D", series: "metal fight", type: "bey", structure: "hybrid", name: "키라 에스콜피오", en: "Killer Escolpio", sub: "100D", productNo: "BB-100", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-KILLER", "TRACK-100", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-100-GALAXY-SAGITTARIO-145CS", series: "metal fight", type: "bey", structure: "hybrid", name: "갤럭시 사지타리오", en: "Galaxy Sagittario", sub: "145CS", productNo: "BB-100", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-GALAXY", "TRACK-145", "BOTTOM-COAT-SHARP"] },
  { id: "BEY-BB-100-FLAME-CANCER-D125RF", series: "metal fight", type: "bey", structure: "hybrid", name: "플레임 캔서", en: "Flame Cancer", sub: "D125RF", productNo: "BB-100", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-CANCER", "CLEARWHEEL-CANCER", "METALWHEEL-FLAME", "TRACK-DEFENSE-125", "BOTTOM-RUBBER-FLAT"] },
  { id: "BEY-BB-100-BURN-SAGITTARIO-105HF", series: "metal fight", type: "bey", structure: "hybrid", name: "번 사지타리오", en: "Burn Sagittario", sub: "105HF", productNo: "BB-100", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO", "METALWHEEL-BURN", "TRACK-105", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BB-102-SCREW-CAPRICORNE-90MF", series: "metal fight", type: "bey", structure: "hybrid", name: "스크류 카프리콘", jpName: "스크류 카프리코네", en: "Screw Capricorne", sub: "90MF", productNo: "BB-102", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-CAPRICORNE", "CLEARWHEEL-CAPRICORNE", "METALWHEEL-SCREW", "TRACK-90", "BOTTOM-METAL-FLAT"] },
  { id: "BEY-BB-104-BASALT-HOROGIUM-145WD", series: "metal fight", type: "bey", structure: "hybrid", name: "바셀트 호로지움", jpName: "바살트 호로기움", en: "Basalt Horogium", sub: "145WD", productNo: "BB-104", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HOROGIUM", "CLEARWHEEL-HOROGIUM", "METALWHEEL-BASALT", "TRACK-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-105-BIG-BANG-PEGASIS-FD", series: "metal fight", type: "bey", structure: "4d", name: "빅뱅 페가시스", en: "Big Bang Pegasis", sub: "F:D", productNo: "BB-105", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS-III", "METALWHEEL-BIG-BANG", "4DBOTTOM-FINAL-DRIVE"] },
  { id: "BEY-BB-106-FANG-LEONE-130W2D", series: "metal fight", type: "bey", structure: "4d", name: "팡 레온", jpName: "팡 레오네", en: "Fang Leone", sub: "130W²D", productNo: "BB-106", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE-II", "METALWHEEL-FANG", "TRACK-130", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-FANG-LEONE-W105R2F", series: "metal fight", type: "bey", structure: "4d", name: "팡 레온", jpName: "팡 레오네", en: "Fang Leone", sub: "W105R²F", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-LEONE", "CLEARWHEEL-LEONE-II", "METALWHEEL-FANG", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BB-107-BIG-BANG-PEGASIS-FD", series: "metal fight", type: "bey", structure: "4d", name: "빅뱅 페가시스", en: "Big Bang Pegasis", sub: "F:D", productNo: "BB-107", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS-III", "METALWHEEL-BIG-BANG", "4DBOTTOM-FINAL-DRIVE"] },
  { id: "BEY-BB-108-L-DRAGO-DESTROY-FS", series: "metal fight", type: "bey", structure: "4d", name: "엘드라고 디스트로이", en: "L-Drago Destroy", sub: "F:S", productNo: "BB-108", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "METALWHEEL-L-DRAGO-DESTROY", "4DBOTTOM-FINAL-SURVIVE"] },
  { id: "BEY-L-DRAGO-DESTROY-LW105LRF", series: "metal fight", type: "bey", structure: "4d", name: "엘드라고 디스트로이", en: "L-Drago Destroy", sub: "LW105LRF", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "METALWHEEL-L-DRAGO-DESTROY", "TRACK-LEFT-WING-105", "BOTTOM-LEFT-RUBBER-FLAT"] },
  { id: "BEY-BB-109-BEAT-LYNX-TH170WD", series: "metal fight", type: "bey", structure: "4d", name: "비트 링크스", en: "Beat Lynx", sub: "TH170WD", productNo: "BB-109", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-LYNX", "CLEARWHEEL-LYNX", "METALWHEEL-BEAT", "TRACK-TRIPLE-HEIGHT-170", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-109-GRAVITY-PERSEUS-BD145XF", series: "metal fight", type: "bey", structure: "hybrid", name: "그라비티 페르세우스", en: "Gravity Perseus", sub: "BD145XF", productNo: "BB-109", battleType: "attack", spin: "dual", tags: [], desc: "", parts: ["FACE-PERSEUS", "CLEARWHEEL-PERSEUS-ATTACK", "METALWHEEL-GRAVITY", "TRACK-BOOST-DISK-145", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-109-HELL-HORUSEUS-85RS", series: "metal fight", type: "bey", structure: "hybrid", name: "헬 호르세우스", jpName: "헬 호루세우스", en: "Hell Horuseus", sub: "85RS", productNo: "BB-109", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-HORUSEUS", "CLEARWHEEL-HORUSEUS", "METALWHEEL-HELL", "TRACK-85", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-109-VULCAN-HERCULEO-130DS", series: "metal fight", type: "bey", structure: "hybrid", name: "발칸 헤라클레오", en: "Vulcan Herculeo", sub: "130DS", productNo: "BB-109", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HERCULEO", "CLEARWHEEL-HERCULEO", "METALWHEEL-VULCAN", "TRACK-130", "BOTTOM-DEFENSE-SHARP"] },
  { id: "BEY-BB-109-GRAVITY-PERSEUS-85DS", series: "metal fight", type: "bey", structure: "hybrid", name: "그라비티 페르세우스", en: "Gravity Perseus", sub: "85DS", productNo: "BB-109", battleType: "stamina", spin: "dual", tags: [], desc: "", parts: ["FACE-PERSEUS", "CLEARWHEEL-PERSEUS-STAMINA", "METALWHEEL-GRAVITY", "TRACK-85", "BOTTOM-DEFENSE-SHARP"] },
  { id: "BEY-BB-109-TORNADO-HORUSEUS-130RSF", series: "metal fight", type: "bey", structure: "hybrid", name: "토네이도 호르세우스", jpName: "토네이도 호루세우스", en: "Tornado Horuseus", sub: "130RSF", productNo: "BB-109", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-HORUSEUS", "CLEARWHEEL-HORUSEUS", "METALWHEEL-TORNADO", "TRACK-130", "BOTTOM-RUBBER-SEMI-FLAT"] },
  { id: "BEY-BB-109-HELL-HERCULEO-100XF", series: "metal fight", type: "bey", structure: "hybrid", name: "헬 헤라클레오", en: "Hell Herculeo", sub: "100XF", productNo: "BB-109", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-HERCULEO", "CLEARWHEEL-HERCULEO", "METALWHEEL-HELL", "TRACK-100", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-109-VULCAN-HOROGIUM-BD145RS", series: "metal fight", type: "bey", structure: "hybrid", name: "발칸 호로지움", jpName: "발칸 호로기움", en: "Vulcan Horogium", sub: "BD145RS", productNo: "BB-109", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HOROGIUM", "CLEARWHEEL-HOROGIUM", "METALWHEEL-VULCAN", "TRACK-BOOST-DISK-145", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-113-SCYTHE-KRONOS-T125EDS", series: "metal fight", type: "bey", structure: "4d", name: "사이즈 크로노스", en: "Scythe Kronos", sub: "T125EDS", productNo: "BB-113", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-KRONOS", "CLEARWHEEL-KRONOS", "METALWHEEL-SCYTHE", "TRACK-TORNADO-125", "BOTTOM-ETERNAL-DEFENSE-SHARP"] },
  { id: "BEY-BB-114-VARIARES-DD", series: "metal fight", type: "bey", structure: "4d", name: "베리아레스", jpName: "바리아레스", en: "Variares", sub: "D:D", productNo: "BB-114", battleType: "defense", spin: "dual", tags: [], desc: "", parts: ["FACE-VARIARES", "METALWHEEL-VARIARES", "4DBOTTOM-DELTA-DRIVE"] },
  { id: "BEY-BB-116-JADE-JUPITER-S130RB", series: "metal fight", type: "bey", structure: "4d", name: "제이드 쥬피터", en: "Jade Jupiter", sub: "S130RB", productNo: "BB-116", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-JUPITER", "CLEARWHEEL-JUPITER", "METALWHEEL-JADE", "TRACK-SHIELD-130", "BOTTOM-RUBBER-BALL"] },
  { id: "BEY-BB-116-FORBIDDEN-EONIS-ED145FB", series: "metal fight", type: "bey", structure: "hybrid", name: "포비든 이오니스", en: "Forbidden Eonis", sub: "ED145FB", productNo: "BB-116", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-IONIS", "CLEARWHEEL-IONIS", "METALWHEEL-FORBIDDEN", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-FLAT-BALL"] },
  { id: "BEY-BB-116-DIVINE-FOX-90W2D", series: "metal fight", type: "bey", structure: "hybrid", name: "디바인 폭스", en: "Divine Fox", sub: "90W²D", productNo: "BB-116", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-FOX", "CLEARWHEEL-FOX", "METALWHEEL-DIVINE", "TRACK-90", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BB-116-SCREW-LYRA-ED145MF", series: "metal fight", type: "bey", structure: "hybrid", name: "스크류 레이라", en: "Screw Lyra", sub: "ED145MF", productNo: "BB-116", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-LYRA", "CLEARWHEEL-LYRA", "METALWHEEL-SCREW", "TRACK-ETERNAL-DEFENSE-145", "BOTTOM-METAL-FLAT"] },
  { id: "BEY-BB-116-FORBIDDEN-EONIS-130D", series: "metal fight", type: "bey", structure: "hybrid", name: "포비든 이오니스", en: "Forbidden Eonis", sub: "130D", productNo: "BB-116", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-IONIS", "CLEARWHEEL-IONIS", "METALWHEEL-FORBIDDEN", "TRACK-130", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-116-DIVINE-CROWN-TR145D", series: "metal fight", type: "bey", structure: "hybrid", name: "디바인 크라운", en: "Divine Crown", sub: "TR145D", productNo: "BB-116", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-CROWN", "CLEARWHEEL-CROWN", "METALWHEEL-DIVINE", "TRACK-TRIPLE-ROLLER-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BB-116-SCREW-FOX-TR145W2D", series: "metal fight", type: "bey", structure: "hybrid", name: "스크류 폭스", en: "Screw Fox", sub: "TR145W²D", productNo: "BB-116", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-FOX", "CLEARWHEEL-FOX", "METALWHEEL-SCREW", "TRACK-TRIPLE-ROLLER-145", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BB-116-HELL-CROWN-130FB", series: "metal fight", type: "bey", structure: "hybrid", name: "헬 크라운", en: "Hell Crown", sub: "130FB", productNo: "BB-116", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-CROWN", "CLEARWHEEL-CROWN", "METALWHEEL-HELL", "TRACK-130", "BOTTOM-FLAT-BALL"] },
  { id: "BEY-BB-117-BLITZ-UNICORNO-100RSF", series: "metal fight", type: "bey", structure: "4d", name: "브릿츠 유니콘", jpName: "브릿츠 유니코르노", en: "Blitz Unicorno", sub: "100RSF", productNo: "BB-117", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-UNICORNO", "CLEARWHEEL-UNICORNO-II", "METALWHEEL-BLITZ", "TRACK-100", "BOTTOM-RUBBER-SEMI-FLAT"] },
  { id: "BEY-BB-117-NIGHTMARE-REX-UW145EWD", series: "metal fight", type: "bey", structure: "hybrid", name: "나이트메어 렉스", en: "Nightmare Rex", sub: "UW145EWD", productNo: "BB-117", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-REX", "CLEARWHEEL-REX", "METALWHEEL-NIGHTMARE", "TRACK-UPPER-WING-145", "BOTTOM-ETERNAL-WIDE-DEFENSE"] },
  { id: "BEY-BB-117-BASALT-HOROGIUM-130RS", series: "metal fight", type: "bey", structure: "hybrid", name: "바셀트 호로지움", jpName: "바살트 호로기움", en: "Basalt Horogium", sub: "130RS", productNo: "BB-117", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-HOROGIUM", "CLEARWHEEL-HOROGIUM", "METALWHEEL-BASALT", "TRACK-130", "BOTTOM-RUBBER-SHARP"] },
  { id: "BEY-BB-118-PHANTOM-ORION-BD", series: "metal fight", type: "bey", structure: "4d", name: "팬텀 오리온", en: "Phantom Orion", sub: "B:D", productNo: "BB-118", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-ORION", "CLEARWHEEL-ORION", "METALWHEEL-PHANTOM", "4DBOTTOM-BEARING-DRIVE"] },
  { id: "BEY-BB-119-DEATH-QUETZALCOATL-125RDF", series: "metal fight", type: "bey", structure: "4d", name: "데쓰 케찰코아틀", jpName: "데스 케찰코아틀", en: "Death Quetzalcoatl", sub: "125RDF", productNo: "BB-119", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-QUETZALCOATL", "CLEARWHEEL-QUETZALCOATL", "METALWHEEL-DEATH", "TRACK-125", "BOTTOM-RUBBER-DEFENSE-FLAT"] },
  { id: "BEY-BB-120-PROTOTYPE-NEMESIS", series: "metal fight", type: "bey", structure: "4d", name: "프로토타입 네메시스", en: "Prototype Nemesis", productNo: "BB-120", battleType: "balance", spin: "dual", tags: [], desc: "", parts: [] },
  { id: "BEY-BBC-01-SUPER-CONTROL-BIG-BANG-PEGASIS", series: "metal fight", type: "bey", structure: "super-control", name: "빅뱅 페가시스", en: "Super Control Big Bang Pegasis", productNo: "BBC-01", tags: [], desc: "", parts: [] },
  { id: "BEY-BBC-02-SUPER-CONTROL-L-DRAGO-DESTROY", series: "metal fight", type: "bey", structure: "super-control", name: "엘드라고 디스트로이", en: "Super Control L-Drago Destroy", productNo: "BBC-02", tags: [], desc: "", parts: [] },
  { id: "BEY-BBC-04-SUPER-CONTROL-VARIARES", series: "metal fight", type: "bey", structure: "super-control", name: "바리아레스", en: "Super Control Variares", productNo: "BBC-04", tags: [], desc: "", parts: [] },
  { id: "BEY-BBC-05-SUPER-CONTROL-PHANTOM-ORION", series: "metal fight", type: "bey", structure: "super-control", name: "팬텀 오리온", en: "Super Control Phantom Orion", productNo: "BBC-05", tags: [], desc: "", parts: [] },
  { id: "BEY-BB-121-DUO-URANUS-230WD", series: "metal fight", type: "bey", structure: "4d", name: "듀오 우라누스", en: "Duo Uranus", sub: "230WD", productNo: "BB-121", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-URANUS", "CLEARWHEEL-URANUS", "METALWHEEL-DUO", "TRACK-230", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-121-L-DRAGO-GUARDIAN-S130MB", series: "metal fight", type: "bey", structure: "4d", name: "엘드라고 가디언", en: "L-Drago Guardian", sub: "S130MB", productNo: "BB-121", battleType: "defense", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "METALWHEEL-L-DRAGO-GUARDIAN", "TRACK-SHIELD-130", "BOTTOM-METAL-BALL"] },
  { id: "BEY-BB-121-WING-PEGASIS-90WF", series: "metal fight", type: "bey", structure: "4d", name: "윙 페가시스", en: "Wing Pegasis", sub: "90WF", productNo: "BB-121", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS-III", "METALWHEEL-WING", "TRACK-90", "BOTTOM-WIDE-FLAT"] },
  { id: "BEY-WING-PEGASIS-S130RB", series: "metal fight", type: "bey", structure: "4d", name: "윙 페가시스", en: "Wing Pegasis", sub: "S130RB", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-PEGASIS", "CLEARWHEEL-PEGASIS-III", "METALWHEEL-WING", "TRACK-SHIELD-130", "BOTTOM-RUBBER-BALL"] },
  { id: "BEY-BB-122-DIABLO-NEMESIS-XD", series: "metal fight", type: "bey", structure: "4d", name: "디아블로 네메시스", en: "Diablo Nemesis", sub: "X:D", productNo: "BB-122", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-NEMESIS", "CLEARWHEEL-NEMESIS", "METALWHEEL-DIABLO", "4DBOTTOM-X-DRIVE"] },
  { id: "BEY-BB-123-FUSION-HADES-AD145SWD", series: "metal fight", type: "bey", structure: "4d", name: "퓨전 하데스", en: "Fusion Hades", sub: "AD145SWD", productNo: "BB-123", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-HADES", "CLEARWHEEL-HADES", "METALWHEEL-FUSION", "TRACK-ARMOR-DEFENSE-145", "BOTTOM-SHARP-WIDE-DEFENSE"] },
  { id: "BEY-BB-123-HELL-BEELZEB-125XF", series: "metal fight", type: "bey", structure: "hybrid", name: "헬 베르제브", en: "Hell Beelzeb", sub: "125XF", productNo: "BB-123", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-BEELZEB", "CLEARWHEEL-BEELZEB", "METALWHEEL-HELL", "TRACK-125", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-123-CLOUD-LYRA-85SF", series: "metal fight", type: "bey", structure: "hybrid", name: "클라우드 레이라", en: "Cloud Lyra", sub: "85SF", productNo: "BB-123", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-LYRA", "CLEARWHEEL-LYRA", "METALWHEEL-CLOUD", "TRACK-85", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-123-CLOUD-GEMIOS-T125SF", series: "metal fight", type: "bey", structure: "hybrid", name: "클라우드 제미오스", en: "Cloud Gemios", sub: "T125SF", productNo: "BB-123", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-GEMIOS", "CLEARWHEEL-GEMIOS", "METALWHEEL-CLOUD", "TRACK-TORNADO-125", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BB-123-CRASH-ESCOLPIO-125JB", series: "metal fight", type: "bey", structure: "hybrid", name: "크래시 에스콜피오", en: "Crash Escolpio", sub: "125JB", productNo: "BB-123", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["FACE-ESCOLPIO", "CLEARWHEEL-ESCOLPIO", "METALWHEEL-CRASH", "TRACK-125", "BOTTOM-JOG-BALL"] },
  { id: "BEY-BB-123-BAKUSHIN-BEELZEB-T125XF", series: "metal fight", type: "bey", structure: "hybrid", name: "폭신 베르제브", en: "Bakushin Beelzeb", sub: "T125XF", productNo: "BB-123", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-BEELZEB", "CLEARWHEEL-BEELZEB", "METALWHEEL-BAKUSHIN", "TRACK-TORNADO-125", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-123-METEO-L-DRAGO-85LF-RUSH", series: "metal fight", type: "bey", structure: "hybrid", name: "메테오 엘드라고", en: "Meteo L-Drago", sub: "85LF", productNo: "BB-123", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "CLEARWHEEL-L-DRAGO-II-RUSH", "METALWHEEL-METEO", "TRACK-85", "BOTTOM-LEFT-FLAT"] },
  { id: "BEY-BB-123-METEO-L-DRAGO-LW105JB-ASSAULT", series: "metal fight", type: "bey", structure: "hybrid", name: "메테오 엘드라고", en: "Meteo L-Drago", sub: "LW105JB", productNo: "BB-123", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["FACE-L-DRAGO", "CLEARWHEEL-L-DRAGO-II-ASSAULT", "METALWHEEL-METEO", "TRACK-LEFT-WING-105", "BOTTOM-JOG-BALL"] },
  { id: "BEY-OMEGA-DRAGONIS-85XF", series: "metal fight", type: "bey", structure: "hybrid", name: "오메가 드라고니스", en: "Omega Dragonis", sub: "85XF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["FACE-DRAGONIS", "CLEARWHEEL-DRAGONIS", "METALWHEEL-OMEGA", "TRACK-85", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BB-124-KREIS-CYGNUS-145WD", series: "metal fight", type: "bey", structure: "4d", name: "크라이스 시그너스", en: "Kreis Cygnus", sub: "145WD", productNo: "BB-124", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["FACE-CYGNUS", "CLEARWHEEL-CYGNUS", "METALWHEEL-KREIS", "TRACK-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BB-126-FLASH-SAGITTARIO-230WD", series: "metal fight", type: "bey", structure: "4d", name: "플래시 사지타리오", en: "Flash Sagittario", sub: "230WD", productNo: "BB-126", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["FACE-SAGITTARIO", "CLEARWHEEL-SAGITTARIO-II", "METALWHEEL-FLASH", "TRACK-230", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BBG-01-WARRIORS-IFRAID-W145CF", series: "metal fight", type: "bey", structure: "synchrome", name: "워리어스 이프레이드", jpName: "사무라이 이프레이드", en: "Warriors Ifraid", sub: "W145CF", productNo: "BBG-01", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-02-SHINOBI-SARAMANDA-SW145SD", series: "metal fight", type: "bey", structure: "synchrome", name: "시노비 사라만다", en: "Shinobi Saramanda", sub: "SW145SD", productNo: "BBG-02", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-SARAMANDA", "TRACK-SWITCH-145", "BOTTOM-SEMI-DEFENSE"] },
  { id: "BEY-BBG-03-WARRIORS-IFRAID-W145CF", series: "metal fight", type: "bey", structure: "synchrome", name: "워리어스 이프레이드", jpName: "사무라이 이프레이드", en: "Warriors Ifraid", sub: "W145CF", productNo: "BBG-03", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-08-PIRATES-OROJYA-145D", series: "metal fight", type: "bey", structure: "synchrome", name: "파이레츠 오로자", en: "Pirates Orojya", sub: "145D", productNo: "BBG-08", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-OROJYA", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-OROJYA", "TRACK-145", "BOTTOM-DEFENSE"] },
  { id: "BEY-BBG-09-THIEF-PHOENIC-E230GCF", series: "metal fight", type: "bey", structure: "synchrome", name: "시프 피닉", en: "Thief Phoenic", sub: "E230GCF", productNo: "BBG-09", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-PHOENIC", "CRYSTALWHEEL-THIEF", "CHROMEWHEEL-PHOENIC", "TRACK-ELEVATOR-230", "BOTTOM-GEAR-CIRCLE-FLAT"] },
  { id: "BEY-BBG-09-THIEF-SARAMANDA-230WB", series: "metal fight", type: "bey", structure: "synchrome", name: "시프 사라만다", en: "Thief Saramanda", sub: "230WB", productNo: "BBG-09", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-THIEF", "CHROMEWHEEL-SARAMANDA", "TRACK-230", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BBG-09-WARRIORS-SARAMANDA-E230ES", series: "metal fight", type: "bey", structure: "synchrome", name: "워리어스 사라만다", jpName: "사무라이 사라만다", en: "Warriors Saramanda", sub: "E230ES", productNo: "BBG-09", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-SARAMANDA", "TRACK-ELEVATOR-230", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BBG-09-PIRATES-IFRAID-T125GCF", series: "metal fight", type: "bey", structure: "synchrome", name: "파이레츠 이프레이드", en: "Pirates Ifraid", sub: "T125GCF", productNo: "BBG-09", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-IFRAID", "TRACK-TORNADO-125", "BOTTOM-GEAR-CIRCLE-FLAT"] },
  { id: "BEY-BBG-09-SHINOBI-IFRAID-230WD", series: "metal fight", type: "bey", structure: "synchrome", name: "시노비 이프레이드", en: "Shinobi Ifraid", sub: "230WD", productNo: "BBG-09", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-IFRAID", "TRACK-230", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BBG-09-PIRATES-SARAMANDA-T125WB", series: "metal fight", type: "bey", structure: "synchrome", name: "파이레츠 사라만다", en: "Pirates Saramanda", sub: "T125WB", productNo: "BBG-09", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-SARAMANDA", "TRACK-TORNADO-125", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-SARAMANDA-IFRAID-DF145XF", series: "metal fight", type: "bey", structure: "synchrome", name: "사라만다 이프레이드", en: "Saramanda Ifraid", sub: "DF145XF", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CHROMEWHEEL-SARAMANDA", "CHROMEWHEEL-IFRAID", "TRACK-DOWN-FORCE-145", "BOTTOM-EXTREME-FLAT"] },
  { id: "BEY-BBG-09-SHINOBI-OROJYA-145ES", series: "metal fight", type: "bey", structure: "synchrome", name: "시노비 오로자", en: "Shinobi Orojya", sub: "145ES", productNo: "BBG-09", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-OROJYA", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-OROJYA", "TRACK-145", "BOTTOM-ETERNAL-SHARP"] },
  { id: "BEY-BBG-09-WARRIORS-OROJYA-145WD", series: "metal fight", type: "bey", structure: "synchrome", name: "워리어스 오로자", jpName: "사무라이 오로자", en: "Warriors Orojya", sub: "145WD", productNo: "BBG-09", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-OROJYA", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-OROJYA", "TRACK-145", "BOTTOM-WIDE-DEFENSE"] },
  { id: "BEY-BBG-10-GUARDIAN-REVIZER-160SB", series: "metal fight", type: "bey", structure: "synchrome", name: "가디언 리바이저", en: "Guardian Revizer", sub: "160SB", productNo: "BBG-10", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CRYSTALWHEEL-GUARDIAN", "CHROMEWHEEL-REVIZER", "TRACK-160", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-12-ARCHER-GRYPH-C145S", series: "metal fight", type: "bey", structure: "synchrome", name: "아처 그리프", en: "Archer Gryph", sub: "C145S", productNo: "BBG-12", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GRYPH", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-GRYPH", "TRACK-CLAW-145", "BOTTOM-SHARP"] },
  { id: "BEY-BBG-13-PIRATES-KILLERKEN-A230JSB", series: "metal fight", type: "bey", structure: "synchrome", name: "파이레츠 크라켄", en: "Pirates Killerken", sub: "A230JSB", productNo: "BBG-13", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-KRAKEN", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-KILLERKEN", "TRACK-ARMOR-230", "BOTTOM-JOG-SHARP-BALL"] },
  { id: "BEY-BBG-13-WARRIORS-IFRAID-W145CF", series: "metal fight", type: "bey", structure: "synchrome", name: "워리어스 이프레이드", jpName: "사무라이 이프레이드", en: "Warriors Ifraid", sub: "W145CF", productNo: "BBG-13", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-16-DARK-KNIGHT-DRAGOOON-LW160BSF", series: "metal fight", type: "bey", structure: "synchrome", name: "다크나이트 드래곤", jpName: "다크나이트 드라군", en: "Dark Knight Dragooon", sub: "LW160BSF", productNo: "BBG-16", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["STONEFACE-DRAGOON", "CRYSTALWHEEL-DARK-KNIGHT", "CHROMEWHEEL-DRAGOOON", "TRACK-LEFT-WING-160", "BOTTOM-BLADE-SEMI-FLAT"] },
  { id: "BEY-BBG-17-ARCHER-GARGOLE-SA165WSF", series: "metal fight", type: "bey", structure: "synchrome", name: "아처 가고일", jpName: "아처 가골", en: "Archer Gargole", sub: "SA165WSF", productNo: "BBG-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GARGOYLE", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-GARGOLE", "TRACK-SWITCH-ATTACK-165", "BOTTOM-WIDE-SEMI-FLAT"] },
  { id: "BEY-BBG-17-GUARDIAN-GARGOLE-M145SB", series: "metal fight", type: "bey", structure: "synchrome", name: "가디언 가고일", jpName: "가디언 가골", en: "Guardian Gargole", sub: "M145SB", productNo: "BBG-17", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GARGOYLE", "CRYSTALWHEEL-GUARDIAN", "CHROMEWHEEL-GARGOLE", "TRACK-MOVEMENT-145", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-17-SHINOBI-OROJYA-160WSF", series: "metal fight", type: "bey", structure: "synchrome", name: "시노비 오로자", en: "Shinobi Orojya", sub: "160WSF", productNo: "BBG-17", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-OROJYA", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-OROJYA", "TRACK-160", "BOTTOM-WIDE-SEMI-FLAT"] },
  { id: "BEY-BBG-17-WARRIORS-REVIZER-SA165Q", series: "metal fight", type: "bey", structure: "synchrome", name: "워리어스 리바이저", jpName: "사무라이 리바이저", en: "Warriors Revizer", sub: "SA165Q", productNo: "BBG-17", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-REVIZER", "TRACK-SWITCH-ATTACK-165", "BOTTOM-QUAKE"] },
  { id: "BEY-BBG-17-PIRATES-GRYPH-160CF", series: "metal fight", type: "bey", structure: "synchrome", name: "파이레츠 그리프", en: "Pirates Gryph", sub: "160CF", productNo: "BBG-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GRYPH", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-GRYPH", "TRACK-160", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-17-PIRATES-REVIZER-M145CF", series: "metal fight", type: "bey", structure: "synchrome", name: "파이레츠 리바이저", en: "Pirates Revizer", sub: "M145CF", productNo: "BBG-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-REVIZER", "TRACK-MOVEMENT-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-17-GUARDIAN-SARAMANDA-W145Q", series: "metal fight", type: "bey", structure: "synchrome", name: "가디언 사라만다", en: "Guardian Saramanda", sub: "W145Q", productNo: "BBG-17", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-GUARDIAN", "CHROMEWHEEL-SARAMANDA", "TRACK-WING-145", "BOTTOM-QUAKE"] },
  { id: "BEY-BBG-17-ARCHER-IFRAID-W145SB", series: "metal fight", type: "bey", structure: "synchrome", name: "아처 이프레이드", en: "Archer Ifraid", sub: "W145SB", productNo: "BBG-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-20-BANDID-GOREIM-DF145BS", series: "metal fight", type: "bey", structure: "synchrome", name: "반디드 골렘", jpName: "반디드 고레임", en: "Bandid Goreim", sub: "DF145BS", productNo: "BBG-20", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GOREIM", "CRYSTALWHEEL-BANDID", "CHROMEWHEEL-GOREIM", "TRACK-DOWN-FORCE-145", "BOTTOM-BALL-SHARP"] },
  { id: "BEY-BBG-21-WARRIORS-IFRAID-W145CF", series: "metal fight", type: "bey", structure: "synchrome", name: "워리어스 이프레이드", jpName: "사무라이 이프레이드", en: "Warriors Ifraid", sub: "W145CF", productNo: "BBG-21", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-IFRAID", "TRACK-WING-145", "BOTTOM-CIRCLE-FLAT"] },
  { id: "BEY-BBG-21-GUARDIAN-REVIZER-160SB", series: "metal fight", type: "bey", structure: "synchrome", name: "가디언 리바이저", en: "Guardian Revizer", sub: "160SB", productNo: "BBG-21", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CRYSTALWHEEL-GUARDIAN", "CHROMEWHEEL-REVIZER", "TRACK-160", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-22-BERSERKER-BEGIRADOS-SR200BWD", series: "metal fight", type: "bey", structure: "synchrome", name: "버서커 베기라도스", en: "Berserker Begirados", sub: "SR200BWD", productNo: "BBG-22", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-BEGIRADOS", "CRYSTALWHEEL-BERSERKER", "CHROMEWHEEL-BEGIRADOS", "TRACK-STAMINA-RING-200", "BOTTOM-BIG-WIDE-DEFENSE"] },
  { id: "BEY-BBG-23-BANDID-GENBULL-F230TB", series: "metal fight", type: "bey", structure: "synchrome", name: "반디드 겐블", en: "Bandid Genbull", sub: "F230TB", productNo: "BBG-23", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GENBULL", "CRYSTALWHEEL-BANDID", "CHROMEWHEEL-GENBULL", "TRACK-FREE-230", "BOTTOM-TWIN-BALL"] },
  { id: "BEY-BBG-23-SHINOBI-GENBULL-130W2D", series: "metal fight", type: "bey", structure: "synchrome", name: "시노비 겐블", en: "Shinobi Genbull", sub: "130W²D", productNo: "BBG-23", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GENBULL", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-GENBULL", "TRACK-130", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BBG-23-THIEF-SARAMANDA-F230SF", series: "metal fight", type: "bey", structure: "synchrome", name: "시프 사라만다", en: "Thief Saramanda", sub: "F230SF", productNo: "BBG-23", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-SARAMANDA", "CRYSTALWHEEL-THIEF", "CHROMEWHEEL-SARAMANDA", "TRACK-FREE-230", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BBG-23-SHINOBI-GRYPH-WD145TB", series: "metal fight", type: "bey", structure: "synchrome", name: "시노비 그리프", en: "Shinobi Gryph", sub: "WD145TB", productNo: "BBG-23", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GRYPH", "CRYSTALWHEEL-SHINOBI", "CHROMEWHEEL-GRYPH", "TRACK-WIDE-DEFENSE-145", "BOTTOM-TWIN-BALL"] },
  { id: "BEY-BBG-23-ARCHER-PHOENIC-125B", series: "metal fight", type: "bey", structure: "synchrome", name: "아처 피닉", en: "Archer Phoenic", sub: "125B", productNo: "BBG-23", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-PHOENIC", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-PHOENIC", "TRACK-125", "BOTTOM-BALL"] },
  { id: "BEY-BBG-23-PIRATES-PHOENIC-WD145SF", series: "metal fight", type: "bey", structure: "synchrome", name: "파이레츠 피닉", en: "Pirates Phoenic", sub: "WD145SF", productNo: "BBG-23", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-PHOENIC", "CRYSTALWHEEL-PIRATES", "CHROMEWHEEL-PHOENIC", "TRACK-WIDE-DEFENSE-145", "BOTTOM-SEMI-FLAT"] },
  { id: "BEY-BBG-23-ARCHER-KILLERKEN-130B", series: "metal fight", type: "bey", structure: "synchrome", name: "아처 크라켄", en: "Archer Killerken", sub: "130B", productNo: "BBG-23", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-KRAKEN", "CRYSTALWHEEL-ARCHER", "CHROMEWHEEL-KILLERKEN", "TRACK-130", "BOTTOM-BALL"] },
  { id: "BEY-BBG-23-BANDID-KILLERKEN-125W2D", series: "metal fight", type: "bey", structure: "synchrome", name: "반디드 크라켄", en: "Bandid Killerken", sub: "125W²D", productNo: "BBG-23", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-KRAKEN", "CRYSTALWHEEL-BANDID", "CHROMEWHEEL-KILLERKEN", "TRACK-125", "BOTTOM-WAVE-WIDE-DEFENSE"] },
  { id: "BEY-BBG-24-GARGOLE-IFRAID-SA165GCF", series: "metal fight", type: "bey", structure: "synchrome", name: "가고일 이프레이드", jpName: "가골 이프레이드", en: "Gargole Ifraid", sub: "SA165GCF", productNo: "BBG-24", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-IFRAID", "CHROMEWHEEL-GARGOLE", "CHROMEWHEEL-IFRAID", "TRACK-SWITCH-ATTACK-165", "BOTTOM-GEAR-CIRCLE-FLAT"] },
  { id: "BEY-BBG-24-SARAMANDA-BALRO-DF145SWD", series: "metal fight", type: "bey", structure: "synchrome", name: "사라만다 발록", jpName: "사라만다 발로", en: "Saramanda Balro", sub: "DF145SWD", productNo: "BBG-24", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-BALRO", "CHROMEWHEEL-SARAMANDA", "CHROMEWHEEL-BALRO", "TRACK-DOWN-FORCE-145", "BOTTOM-SHARP-WIDE-DEFENSE"] },
  { id: "BEY-BBG-24-GRYPH-GIRAGO-WA130HF", series: "metal fight", type: "bey", structure: "synchrome", name: "그리프 지라고", en: "Gryph Girago", sub: "WA130HF", productNo: "BBG-24", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-GIRAGO", "CHROMEWHEEL-GRYPH", "CHROMEWHEEL-GIRAGO", "TRACK-WING-ATTACK-130", "BOTTOM-HOLE-FLAT"] },
  { id: "BEY-BBG-25-GOREIM-REVIZER-E230SB", series: "metal fight", type: "bey", structure: "synchrome", name: "골렘 리바이저", en: "Goreim Revizer", sub: "E230SB", productNo: "BBG-25", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CHROMEWHEEL-GOREIM", "CHROMEWHEEL-REVIZER", "TRACK-ELEVATOR-230", "BOTTOM-SHARP-BALL"] },
  { id: "BEY-BBG-25-KILLERKEN-BALRO-A230WB", series: "metal fight", type: "bey", structure: "synchrome", name: "크라켄 발록", jpName: "크라켄 발로", en: "Killerken Balro", sub: "A230WB", productNo: "BBG-25", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-BALRO", "CHROMEWHEEL-KILLERKEN", "CHROMEWHEEL-BALRO", "TRACK-ARMOR-230", "BOTTOM-WIDE-BALL"] },
  { id: "BEY-BBG-25-OROJYA-WYVANG-145EDS", series: "metal fight", type: "bey", structure: "synchrome", name: "오로자 와이번", en: "Orojya Wyvang", sub: "145EDS", productNo: "BBG-25", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["STONEFACE-WYVANG", "CHROMEWHEEL-OROJYA", "CHROMEWHEEL-WYVANG", "TRACK-145", "BOTTOM-ETERNAL-DEFENSE-SHARP"] },
  { id: "BEY-OROJYA-REVIZER-T125JB", series: "metal fight", type: "bey", structure: "synchrome", name: "오로자 리바이저", en: "Orojya Revizer", sub: "T125JB", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["STONEFACE-REVIZER", "CHROMEWHEEL-OROJYA", "CHROMEWHEEL-REVIZER", "TRACK-TORNADO-125", "BOTTOM-JOG-BALL"] },
  { id: "BEY-BBG-26-WARRIORS-PEGASIS-W105R2F", series: "metal fight", type: "bey", structure: "synchrome", name: "워리어스 페가시스", jpName: "사무라이 페가시스", en: "Warriors Pegasis", sub: "W105R²F", productNo: "BBG-26", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["STONEFACE-PEGASIS", "CRYSTALWHEEL-WARRIORS", "CHROMEWHEEL-PEGASIS", "TRACK-WING-105", "BOTTOM-RIGHT-RUBBER-FLAT"] },
  { id: "BEY-BBG-27-GLADIATOR-BAHAMDIA-SP230GF", series: "metal fight", type: "bey", structure: "synchrome", name: "글레디에이터 바함디아", en: "Gladiator Bahamdia", sub: "SP230GF", productNo: "BBG-27", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["STONEFACE-BAHAMDIA", "CRYSTALWHEEL-GLADIATOR", "CHROMEWHEEL-BAHAMDIA", "TRACK-SPIKE-230", "BOTTOM-GIGA-FLAT"] },
  { id: "BEY-BURST-B-01-VALKYRIE-W-A", series: "burst", type: "bey", name: "발키리.W.A", en: "Valkyrie.W.A", productNo: "B-01", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-VALKYRIE", "DISK-WING", "DRIVER-ACCEL"] },
  { id: "BEY-BURST-B-02-SPRIGGAN-S-F", series: "burst", type: "bey", name: "스프리건.S.F", en: "Spriggan.S.F", productNo: "B-02", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["LAYER-SPRIGGAN", "DISK-SPREAD", "DRIVER-FUSION"] },
  { id: "BEY-BURST-B-03-RAGNARUK-H-S", series: "burst", type: "bey", name: "라그나로크.H.S", en: "Ragnaruk.H.S", productNo: "B-03", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["LAYER-RAGNARUK", "DISK-HEAVY", "DRIVER-SURVIVE"] },
  { id: "BEY-BURST-B-04-KERBEUS-C-D", series: "burst", type: "bey", name: "케르베우스.C.D", en: "Kerbeus.C.D", productNo: "B-04", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["LAYER-KERBEUS", "DISK-CENTRAL", "DRIVER-DEFENSE"] },
  { id: "BEY-BURST-B-05-SPRIGGAN-H-D", series: "burst", type: "bey", name: "스프리건.H.D", en: "Spriggan.H.D", productNo: "B-05", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["LAYER-SPRIGGAN", "DISK-HEAVY", "DRIVER-DEFENSE"] },
  { id: "BEY-BURST-B-06-RAGNARUK-C-A", series: "burst", type: "bey", name: "라그나로크.C.A", en: "Ragnaruk.C.A", productNo: "B-06", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["LAYER-RAGNARUK", "DISK-CENTRAL", "DRIVER-ACCEL"] },
  { id: "BEY-BURST-B-07-KERBEUS-W-F", series: "burst", type: "bey", name: "케르베우스.W.F", en: "Kerbeus.W.F", productNo: "B-07", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["LAYER-KERBEUS", "DISK-WING", "DRIVER-FUSION"] },
  { id: "BEY-BURST-B-08-VALKYRIE-W-A", series: "burst", type: "bey", name: "발키리.W.A", en: "Valkyrie.W.A", productNo: "B-08", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-VALKYRIE", "DISK-WING", "DRIVER-ACCEL"] },
  { id: "BEY-BURST-B-12-DEATHSCYTHER-O-A", series: "burst", type: "bey", name: "데스사이저.O.A", en: "Deathscyther.O.A", productNo: "B-12", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-DEATHSCYTHER", "DISK-OVAL", "DRIVER-ACCEL"] },
  { id: "BEY-BURST-B-13-VALKYRIE-S-S", series: "burst", type: "bey", name: "발키리.S.S", en: "Valkyrie.S.S", productNo: "B-13", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-VALKYRIE", "DISK-SPREAD", "DRIVER-SURVIVE"] },
  { id: "BEY-BURST-B-00-ALPHA-AMATERIOS-AERO-ASSAULT", series: "burst", type: "bey", name: "아마테리오스.α.α", en: "Amaterios.α.α", productNo: "B-00α", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-AMATERIOS", "DISK-AERO", "DRIVER-ASSAULT"] },
  { id: "BEY-BURST-B-14-WYVERN-A-M", series: "burst", type: "bey", name: "와이번.A.M", en: "Wyvern.A.M", productNo: "B-14", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["LAYER-WYVERN", "DISK-ARMED", "DRIVER-MASSIVE"] },
  { id: "BEY-BURST-B-17-ODIN-C-B", series: "burst", type: "bey", name: "오딘.C.B", en: "Odin.C.B", productNo: "B-17", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-ODIN", "DISK-CENTRAL", "DRIVER-BLOW"] },
  { id: "BEY-BURST-B-18-VALKYRIE-W-A", series: "burst", type: "bey", name: "발키리.W.A", en: "Valkyrie.W.A", productNo: "B-18", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-VALKYRIE", "DISK-WING", "DRIVER-ACCEL"] },
  { id: "BEY-BURST-B-18-SPRIGGAN-S-F", series: "burst", type: "bey", name: "스프리건.S.F", en: "Spriggan.S.F", productNo: "B-18", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["LAYER-SPRIGGAN", "DISK-SPREAD", "DRIVER-FUSION"] },
  { id: "BEY-BURST-B-20-HORUSOOD-S-E", series: "burst", type: "bey", name: "호루스.S.E", jpName: "호루스드.S.E", en: "Horusood.S.E", productNo: "B-20", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["LAYER-HORUSOOD", "DISK-SPREAD", "DRIVER-EDGE"] },
  { id: "BEY-BURST-B-21-MINOBOROS-O-Q", series: "burst", type: "bey", name: "미노보로스.O.Q", en: "Minoboros.O.Q", productNo: "B-21", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-MINOBOROS", "DISK-OVAL", "DRIVER-QUAKE"] },
  { id: "BEY-BURST-B-21-DEATHSCYTHER-W-F", series: "burst", type: "bey", name: "데스사이저.W.F", en: "Deathscyther.W.F", productNo: "B-21", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-DEATHSCYTHER", "DISK-WING", "DRIVER-FUSION"] },
  { id: "BEY-BURST-B-21-SPRIGGAN-S-B", series: "burst", type: "bey", name: "스프리건.S.B", en: "Spriggan.S.B", productNo: "B-21", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["LAYER-SPRIGGAN", "DISK-SPREAD", "DRIVER-BLOW"] },
  { id: "BEY-BURST-B-22-UNICORN-R-D", series: "burst", type: "bey", name: "유니콘.R.D", en: "Unicorn.R.D", productNo: "B-22", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["LAYER-UNICORN", "DISK-RING", "DRIVER-DEFENSE"] },
  { id: "BEY-BURST-B-22-WYVERN-H-S", series: "burst", type: "bey", name: "와이번.H.S", en: "Wyvern.H.S", productNo: "B-22", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["LAYER-WYVERN", "DISK-HEAVY", "DRIVER-SURVIVE"] },
  { id: "BEY-BURST-B-22-RAGNARUK-C-M", series: "burst", type: "bey", name: "라그나로크.C.M", en: "Ragnaruk.C.M", productNo: "B-22", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["LAYER-RAGNARUK", "DISK-CENTRAL", "DRIVER-MASSIVE"] },
  { id: "BEY-BURST-B-23-XCALIBUR-F-X", series: "burst", type: "bey", name: "엑스칼리버.F.X", en: "Xcalibur.F.X", productNo: "B-23", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-XCALIBUR", "DISK-FORCE", "DRIVER-XTREME"] },
  { id: "BEY-BURST-B-28-NEPTUNE-A-Z", series: "burst", type: "bey", name: "넵튠.A.Z", en: "Neptune.A.Z", productNo: "B-28", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["LAYER-NEPTUNE", "DISK-ARMED", "DRIVER-ZEPHYR"] },
  { id: "BEY-BURST-B-29-VALKYRIE-W-A", series: "burst", type: "bey", name: "발키리.W.A", en: "Valkyrie.W.A", productNo: "B-29", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["LAYER-VALKYRIE", "DISK-WING", "DRIVER-ACCEL"] },
  { id: "BEY-BURST-B-30-SPRIGGAN-S-F", series: "burst", type: "bey", name: "스프리건.S.F", en: "Spriggan.S.F", productNo: "B-30", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["LAYER-SPRIGGAN", "DISK-SPREAD", "DRIVER-FUSION"] },
  { id: "BEY-BURST-B-31-YGGDRASIL-R-G", series: "burst", type: "bey", name: "이그드라실.R.G", en: "Yggdrasil.R.G", productNo: "B-31", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["LAYER-YGGDRASIL", "DISK-RING", "DRIVER-GYRO"] },
  { id: "BEY-BURST-B-34-VICTORY-VALKYRIE-B-V", series: "burst", type: "bey", name: "빅토리 발키리.B.V", en: "Victory Valkyrie.B.V", productNo: "B-34", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-VICTORY-VALKYRIE", "DISK-BOOST", "DRIVER-VARIABLE"] },
  { id: "BEY-BURST-BK-01-VICTORY-VALKYRIE-B-V", series: "burst", type: "bey", name: "빅토리 발키리.B.V", en: "Victory Valkyrie.B.V", productNo: "BK-01", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-VICTORY-VALKYRIE", "DISK-BOOST", "DRIVER-VARIABLE"] },
  { id: "BEY-BURST-B-35-STORM-SPRIGGAN-K-U", series: "burst", type: "bey", name: "스톰 스프리건.K.U", en: "Storm Spriggan.K.U", productNo: "B-35", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-STORM-SPRIGGAN", "DISK-KNUCKLE", "DRIVER-UNITE"] },
  { id: "BEY-BURST-B-36-RISING-RAGNARUK-G-R", series: "burst", type: "bey", name: "라이징 라그나로크.G.R", en: "Rising Ragnaruk.G.R", productNo: "B-36", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-RISING-RAGNARUK", "DISK-GRAVITY", "DRIVER-REVOLVE"] },
  { id: "BEY-BURST-B-37-KAISER-KERBEUS-L-P", series: "burst", type: "bey", name: "카이저 케르베우스.L.P", en: "Kaiser Kerbeus.L.P", productNo: "B-37", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-KAISER-KERBEUS", "DISK-LIMITED", "DRIVER-PRESS"] },
  { id: "BEY-BURST-B-38-VICTORY-VALKYRIE-B-V", series: "burst", type: "bey", name: "빅토리 발키리.B.V", en: "Victory Valkyrie.B.V", productNo: "B-38", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-VICTORY-VALKYRIE", "DISK-BOOST", "DRIVER-VARIABLE"] },
  { id: "BEY-BURST-B-41-WILD-WYVERN-V-O", series: "burst", type: "bey", name: "와일드 와이번.V.O", en: "Wild Wyvern.V.O", productNo: "B-41", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-WILD-WYVERN", "DISK-VERTICAL", "DRIVER-ORBIT"] },
  { id: "BEY-BURST-B-42-DARK-DEATHSCYTHER-F-J", series: "burst", type: "bey", name: "다크 데스사이저.F.J", en: "Dark Deathscyther.F.J", productNo: "B-42", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-DARK-DEATHSCYTHER", "DISK-FORCE", "DRIVER-JAGGY"] },
  { id: "BEY-BURST-B-44-HOLY-HORUSOOD-U-C", series: "burst", type: "bey", name: "홀리 호루스드.U.C", en: "Holy Horusood.U.C", productNo: "B-44", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-HOLY-HORUSOOD", "DISK-UPPER", "DRIVER-CLAW"] },
  { id: "BEY-BURST-B-46-OBELISK-ODIN-T-X", series: "burst", type: "bey", name: "오벨리스크 오딘.T.X", en: "Obelisk Odin.T.X", productNo: "B-46", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-OBELISK-ODIN", "DISK-TRIPLE", "DRIVER-XTREME"] },
  { id: "BEY-BURST-B-00-BALDUR-BETA-BETA", series: "burst", type: "bey", name: "발뒤르.β.β", en: "Baldur.β.β", productNo: "B-00β", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-BALDUR", "DISK-BUMPER", "DRIVER-BITE"] },
  { id: "BEY-BURST-B-48-XENO-XCALIBUR-M-I", series: "burst", type: "bey", name: "제노 엑스칼리버.M.I", en: "Xeno Xcalibur.M.I", productNo: "B-48", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-XENO-XCALIBUR", "DISK-MAGNUM", "DRIVER-IMPACT"] },
  { id: "BEY-BURST-BK-01-XENO-XCALIBUR-M-I", series: "burst", type: "bey", name: "제노 엑스칼리버.M.I", en: "Xeno Xcalibur.M.I", productNo: "BK-01", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-XENO-XCALIBUR", "DISK-MAGNUM", "DRIVER-IMPACT"] },
  { id: "BEY-BURST-B-56-UNLOCK-UNICORN-D-N", series: "burst", type: "bey", name: "언락 유니콘.D.N", en: "Unlock Unicorn.D.N", productNo: "B-56", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-UNLOCK-UNICORN", "DISK-DOWN", "DRIVER-NEEDLE"] },
  { id: "BEY-BURST-B-57-VICTORY-VALKYRIE-U-Q", series: "burst", type: "bey", name: "빅토리 발키리.U.Q", en: "Victory Valkyrie.U.Q", productNo: "B-57", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-VICTORY-VALKYRIE", "DISK-UPPER", "DRIVER-QUAKE"] },
  { id: "BEY-BURST-B-57-NOVA-NEPTUNE-V-T", series: "burst", type: "bey", name: "노바 넵튠.V.T", en: "Nova Neptune.V.T", productNo: "B-57", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-NOVA-NEPTUNE", "DISK-VERTICAL", "DRIVER-TRANS"] },
  { id: "BEY-BURST-B-57-CHAOS-O-G", series: "burst", type: "bey", name: "카오스.O.G", en: "Chaos.O.G", productNo: "B-57", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["LAYER-CHAOS", "DISK-OVAL", "DRIVER-GYRO"] },
  { id: "BEY-BURST-B-59-ZILLION-ZEUS-I-W", series: "burst", type: "bey", name: "질리언 제우스.I.W", en: "Zillion Zeus.I.W", productNo: "B-59", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-ZILLION-ZEUS", "DISK-INFINITY", "DRIVER-WEIGHT"] },
  { id: "BEY-BURST-B-62-FANG-FENRIR-B-J", series: "burst", type: "bey", name: "팽 펜리르.B.J", en: "Fang Fenrir.B.J", productNo: "B-62", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-FANG-FENRIR", "DISK-BOOST", "DRIVER-JAGGY"] },
  { id: "BEY-BURST-B-63-BEAST-BEHEMOTH-H-H", series: "burst", type: "bey", name: "비스트 베히모스.H.H", en: "Beast Behemoth.H.H", productNo: "B-63", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-BEAST-BEHEMOTH", "DISK-HEAVY", "DRIVER-HOLD"] },
  { id: "BEY-BURST-B-64-VICTORY-VALKYRIE-T-U", series: "burst", type: "bey", name: "빅토리 발키리.T.U", en: "Victory Valkyrie.T.U", productNo: "B-64", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-VICTORY-VALKYRIE", "DISK-TRIPLE", "DRIVER-UNITE"] },
  { id: "BEY-BURST-B-64-INFERNO-IFRIT-M-L", series: "burst", type: "bey", name: "인페르노 이프리트.M.L", en: "Inferno Ifrit.M.L", productNo: "B-64", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-INFERNO-IFRIT", "DISK-MAGNUM", "DRIVER-LINER"] },
  { id: "BEY-BURST-B-64-STORM-SPRIGGAN-B-I", series: "burst", type: "bey", name: "스톰 스프리건.B.I", en: "Storm Spriggan.B.I", productNo: "B-64", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-STORM-SPRIGGAN", "DISK-BOOST", "DRIVER-IMPACT"] },
  { id: "BEY-BURST-B-65-WILD-WYVERN-I-Y", series: "burst", type: "bey", name: "와일드 와이번.I.Y", en: "Wild Wyvern.I.Y", productNo: "B-65", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-WILD-WYVERN", "DISK-INFINITY", "DRIVER-YIELDING"] },
  { id: "BEY-BURST-B-65-PSYCHIC-PHANTOM-P-W", series: "burst", type: "bey", name: "사이킥 팬텀.P.W", en: "Psychic Phantom.P.W", productNo: "B-65", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-PSYCHIC-PHANTOM", "DISK-POLISH", "DRIVER-WEIGHT"] },
  { id: "BEY-BURST-B-65-KAISER-KERBEUS-D-O", series: "burst", type: "bey", name: "카이저 케르베우스.D.O", en: "Kaiser Kerbeus.D.O", productNo: "B-65", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-KAISER-KERBEUS", "DISK-DOWN", "DRIVER-ORBIT"] },
  { id: "BEY-BURST-B-66-LOST-LONGINUS-N-SP", series: "burst", type: "bey", name: "로스트 롱기누스.N.Sp", en: "Lost Longinus.N.Sp", productNo: "B-66", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["DUALLAYER-LOST-LONGINUS", "DISK-NINE", "DRIVER-SPIRAL"] },
  { id: "BEY-BURST-B-69-JAIL-JORMUNGAND-I-CY", series: "burst", type: "bey", name: "제일 요르문간드.I.Cy", en: "Jail Jormungand.I.Cy", productNo: "B-69", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-JAIL-JORMUNGAND", "DISK-INFINITY", "DRIVER-CYCLE"] },
  { id: "BEY-BURST-B-71-ACID-ANUBIS-Y-O", series: "burst", type: "bey", name: "애시드 아누비스.Y.O", en: "Acid Anubis.Y.O", productNo: "B-71", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-ACID-ANUBIS", "DISK-YELL", "DRIVER-ORBIT"] },
  { id: "BEY-BURST-B-73-GOD-VALKYRIE-6V-RB", series: "burst", type: "bey", name: "갓 발키리.6V.Rb", en: "God Valkyrie.6V.Rb", productNo: "B-73", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GODLAYER-GOD-VALKYRIE", "COREDISK-6", "FRAME-VORTEX", "DRIVER-REBOOT"] },
  { id: "BEY-BURST-B-74-KREIS-SATAN-2G-LP", series: "burst", type: "bey", name: "크라이스 사탄.2G.Lp", en: "Kreis Satan.2G.Lp", productNo: "B-74", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GODLAYER-KREIS-SATAN", "COREDISK-2", "FRAME-GLAIVE", "DRIVER-LOOP"] },
  { id: "BEY-BURST-BA-01-GOD-VALKYRIE-6V-RB", series: "burst", type: "bey", name: "갓 발키리.6V.Rb", en: "God Valkyrie.6V.Rb", productNo: "BA-01", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GODLAYER-GOD-VALKYRIE", "COREDISK-6", "FRAME-VORTEX", "DRIVER-REBOOT"] },
  { id: "BEY-BURST-BA-01-KREIS-SATAN-2G-LP", series: "burst", type: "bey", name: "크라이스 사탄.2G.Lp", en: "Kreis Satan.2G.Lp", productNo: "BA-01", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GODLAYER-KREIS-SATAN", "COREDISK-2", "FRAME-GLAIVE", "DRIVER-LOOP"] },
  { id: "BEY-BURST-B-75-BLAZE-RAGNARUK-4C-FL", series: "burst", type: "bey", name: "블레이즈 라그나로크.4C.Fl", en: "Blaze Ragnaruk.4C.Fl", productNo: "B-75", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["GODLAYER-BLAZE-RAGNARUK", "COREDISK-4", "FRAME-CROSS", "DRIVER-FLUGEL"] },
  { id: "BEY-BURST-B-00-KR-BLAZE-RAGNARUK-4S-B", series: "burst", type: "bey", name: "블레이즈 라그나로크.4S.B", en: "Blaze Ragnaruk.4S.B", productNo: "B-00", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["GODLAYER-BLAZE-RAGNARUK", "COREDISK-4", "FRAME-STAR", "DRIVER-BLOW"] },
  { id: "BEY-BURST-B-76-VALKYRIE-6V-RB", series: "burst", type: "bey", name: "갓 발키리.6V.Rb", en: "God Valkyrie.6V.Rb", productNo: "B-76", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GODLAYER-GOD-VALKYRIE", "COREDISK-6", "FRAME-VORTEX", "DRIVER-REBOOT"] },
  { id: "BEY-BURST-B-79-DRAIN-FAFNIR-8-NT", series: "burst", type: "bey", name: "드레인 파브닐.8.Nt", en: "Drain Fafnir.8.Nt", productNo: "B-79", battleType: "stamina", spin: "left", tags: [], desc: "", parts: ["GODLAYER-DRAIN-FAFNIR", "COREDISK-8", "DRIVER-NOTHING"] },
  { id: "BEY-BURST-B-82-ALTER-CHRONOS-6M-T", series: "burst", type: "bey", name: "알타 크로노스.6M.T", en: "Alter Chronos.6M.T", productNo: "B-82", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["GODLAYER-ALTER-CHRONOS", "COREDISK-6", "FRAME-METEOR", "DRIVER-TRANS"] },
  { id: "BEY-BURST-B-85-KILLER-DEATHSCYTHER-2V-HN", series: "burst", type: "bey", name: "킬러 데스사이저.2V.Hn", en: "Killer Deathscyther.2V.Hn", productNo: "B-85", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GODLAYER-KILLER-DEATHSCYTHER", "COREDISK-2", "FRAME-VORTEX", "DRIVER-HUNTER"] },
  { id: "BEY-BURST-B-86-LEGEND-SPRIGGAN-7-MR", series: "burst", type: "bey", name: "레전드 스프리건.7.Mr", en: "Legend Spriggan.7.Mr", productNo: "B-86", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["GODLAYER-LEGEND-SPRIGGAN", "COREDISK-7", "DRIVER-MERGE"] },
  { id: "BEY-BURST-B-89-BLAST-JINNIUS-5G-GR", series: "burst", type: "bey", name: "블라스트 지니어스.5G.Gr", en: "Blast Jinnius.5G.Gr", productNo: "B-89", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GODLAYER-BLAST-JINNIUS", "COREDISK-5", "FRAME-GLAIVE", "DRIVER-GUARD"] },
  { id: "BEY-BURST-B-90-GALAXY-ZEUS-4M-PL", series: "burst", type: "bey", name: "갤럭시 제우스.4M.Pl", en: "Galaxy Zeus.4M.Pl", productNo: "B-90", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["GODLAYER-GALAXY-ZEUS", "COREDISK-4", "FRAME-METEOR", "DRIVER-PLANET"] },
  { id: "BEY-BURST-B-90-GUARDIAN-KERBEUS-H-R", series: "burst", type: "bey", name: "가디언 케르베우스.H.R", en: "Guardian Kerbeus.H.R", productNo: "B-90", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GODLAYER-GUARDIAN-KERBEUS", "DISK-HEAVY", "DRIVER-REVOLVE"] },
  { id: "BEY-BURST-BA-02-GUARDIAN-KERBEUS-H-R", series: "burst", type: "bey", name: "가디언 케르베우스.H.R", en: "Guardian Kerbeus.H.R", productNo: "BA-02", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GODLAYER-GUARDIAN-KERBEUS", "DISK-HEAVY", "DRIVER-REVOLVE"] },
  { id: "BEY-BURST-B-90-MAD-MINOBOROS-Q-Q", series: "burst", type: "bey", name: "매드 미노보로스.Q.Q", en: "Mad Minoboros.Q.Q", productNo: "B-90", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DUALLAYER-MAD-MINOBOROS", "DISK-QUARTER", "DRIVER-QUAKE"] },
  { id: "BEY-BURST-B-92-SIEG-XCALIBUR-1-IR", series: "burst", type: "bey", name: "지크 엑스칼리버.1.Ir", en: "Sieg Xcalibur.1.Ir", productNo: "B-92", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GODLAYER-SIEG-XCALIBUR", "COREDISK-1", "DRIVER-IRON"] },
  { id: "BEY-BURST-B-96-STRIKE-GOD-VALKYRIE-MUGEN", series: "burst", type: "bey", name: "스트라이크 갓 발키리.∞", en: "Strike God Valkyrie.∞", productNo: "B-96", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GODLAYER-STRIKE-GOD-VALKYRIE", "DRIVER-MUGEN"] },
  { id: "BEY-BURST-B-97-NIGHTMARE-LONGINUS-DS", series: "burst", type: "bey", name: "나이트메어 롱기누스.Ds", en: "Nightmare Longinus.Ds", productNo: "B-97", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["GODLAYER-NIGHTMARE-LONGINUS", "DRIVER-DESTROY"] },
  { id: "BEY-BURST-B-98-ARC-BAHAMUT-2B-AT", series: "burst", type: "bey", name: "아크 바하무트.2B.At", en: "Arc Bahamut.2B.At", productNo: "B-98", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GODLAYER-ARC-BAHAMUT", "COREDISK-2", "FRAME-BUMP", "DRIVER-ATOMIC"] },
  { id: "BEY-BURST-B-98-DEEP-CHAOS-4F-BR", series: "burst", type: "bey", name: "딥 카오스.4F.Br", en: "Deep Chaos.4F.Br", productNo: "B-98", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["GODLAYER-DEEP-CHAOS", "COREDISK-4", "FRAME-FLOW", "DRIVER-BEARING"] },
  { id: "BEY-BURST-B-98-DRAIN-FAFNIR-7S-Z", series: "burst", type: "bey", name: "드레인 파브닐.7S.Z", en: "Drain Fafnir.7S.Z", productNo: "B-98", battleType: "stamina", spin: "left", tags: [], desc: "", parts: ["GODLAYER-DRAIN-FAFNIR", "COREDISK-7", "FRAME-STAR", "DRIVER-ZEPHYR"] },
  { id: "BEY-BURST-B-98-TORNADO-WYVERN-1M-S", series: "burst", type: "bey", name: "토네이도 와이번.1M.S", en: "Tornado Wyvern.1M.S", productNo: "B-98", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GODLAYER-TORNADO-WYVERN", "COREDISK-1", "FRAME-METEOR", "DRIVER-SURVIVE"] },
  { id: "BEY-BURST-B-100-SPRIGGAN-REQUIEM-0-ZT", series: "burst", type: "bey", name: "스프리건 레퀴엠.0.Zt", en: "Spriggan Requiem.0.Zt", productNo: "B-100", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["GODLAYER-SPRIGGAN-REQUIEM", "COREDISK-0", "DRIVER-ZETA"] },
  { id: "BEY-BURST-B-102-TWIN-NEMESIS-3H-UL", series: "burst", type: "bey", name: "트윈 네메시스.3H.Ul", en: "Twin Nemesis.3H.Ul", productNo: "B-102", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GODLAYER-TWIN-NEMESIS", "COREDISK-3", "FRAME-HIT", "DRIVER-ULTIMATE-REBOOT"] },
  { id: "BEY-BURST-B-103-SCREW-TRIDENT-8B-WD", series: "burst", type: "bey", name: "스크류 트라이던트.8B.Wd", en: "Screw Trident.8B.Wd", productNo: "B-103", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["GODLAYER-SCREW-TRIDENT", "COREDISK-8", "FRAME-BUMP", "DRIVER-WEDGE"] },
  { id: "BEY-BURST-B-104-WINNING-VALKYRIE-12-VL", series: "burst", type: "bey", name: "위닝 발키리.12.Vl", en: "Winning Valkyrie.12.Vl", productNo: "B-104", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-WINNING-VALKYRIE", "COREDISK-12", "DRIVER-VOLCANIC"] },
  { id: "BEY-BURST-B-105-Z-ACHILLES-11-XT", series: "burst", type: "bey", name: "제트 아킬레스.11.Xt", en: "Z Achilles.11.Xt", productNo: "B-105", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-Z-ACHILLES", "COREDISK-11", "DRIVER-XTEND"] },
  { id: "BEY-BURST-B-106-EMPEROR-FORNEUS-0-YR", series: "burst", type: "bey", name: "엠퍼러 포르네우스.0.Yr", en: "Emperor Forneus.0.Yr", productNo: "B-106", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-EMPEROR-FORNEUS", "COREDISK-0", "DRIVER-YARD"] },
  { id: "BEY-BURST-B-107-WINNING-VALKYRIE-12-VL", series: "burst", type: "bey", name: "위닝 발키리.12.Vl", en: "Winning Valkyrie.12.Vl", productNo: "B-107", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-WINNING-VALKYRIE", "COREDISK-12", "DRIVER-VOLCANIC"] },
  { id: "BEY-BURST-B-107-Z-ACHILLES-11-XT", series: "burst", type: "bey", name: "제트 아킬레스.11.Xt", en: "Z Achilles.11.Xt", productNo: "B-107", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-Z-ACHILLES", "COREDISK-11", "DRIVER-XTEND"] },
  { id: "BEY-BURST-B-110-BLOODY-LONGINUS-13-JL", series: "burst", type: "bey", name: "블러디 롱기누스.13.Jl", en: "Bloody Longinus.13.Jl", productNo: "B-110", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["CHOZLAYER-BLOODY-LONGINUS", "COREDISK-13", "DRIVER-JOLT"] },
  { id: "BEY-BURST-BA-03-Z-ACHILLES-11-XT", series: "burst", type: "bey", name: "제트 아킬레스.11.Xt", en: "Z Achilles.11.Xt", productNo: "BA-03", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-Z-ACHILLES", "COREDISK-11", "DRIVER-XTEND"] },
  { id: "BEY-BURST-BA-03-BLOODY-LONGINUS-13-JL", series: "burst", type: "bey", name: "블러디 롱기누스.13.Jl", en: "Bloody Longinus.13.Jl", productNo: "BA-03", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["CHOZLAYER-BLOODY-LONGINUS", "COREDISK-13", "DRIVER-JOLT"] },
  { id: "BEY-BURST-B-113-HELL-SALAMANDER-12-OP", series: "burst", type: "bey", name: "헬 살라맨더.12.Op", jpName: "헬 샐러맨더.12.Op", en: "Hell Salamander.12.Op", productNo: "B-113", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-HELL-SALAMANDER", "COREDISK-12", "DRIVER-OPERATE"] },
  { id: "BEY-BURST-B-115-ARCHER-HERCULES-13-ET", series: "burst", type: "bey", name: "아처 헤라클레스.13.Et", en: "Archer Hercules.13.Et", productNo: "B-115", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-ARCHER-HERCULES", "COREDISK-13", "DRIVER-ETERNAL"] },
  { id: "BEY-BURST-B-117-REVIVE-PHOENIX-10-FR", series: "burst", type: "bey", name: "리바이브 피닉스.10.Fr", en: "Revive Phoenix.10.Fr", productNo: "B-117", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-REVIVE-PHOENIX", "COREDISK-10", "DRIVER-FRICTION"] },
  { id: "BEY-BURST-B-120-BUSTER-XCALIBUR-1DASH-SW", series: "burst", type: "bey", name: "버스터 엑스칼리버.1'.Sw", en: "Buster Xcalibur.1'.Sw", productNo: "B-120", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-BUSTER-XCALIBUR", "COREDISK-1-DASH", "DRIVER-SWORD"] },
  { id: "BEY-BURST-B-121-HAZARD-KERBEUS-7-AT", series: "burst", type: "bey", name: "해저드 케르베우스.7.At", en: "Hazard Kerbeus.7.At", productNo: "B-121", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-HAZARD-KERBEUS", "COREDISK-7", "DRIVER-ATOMIC"] },
  { id: "BEY-BURST-B-121-Z-ACHILLES-3D-DS", series: "burst", type: "bey", name: "제트 아킬레스.3D.Ds", en: "Z Achilles.3D.Ds", productNo: "B-121", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-Z-ACHILLES", "COREDISK-3", "FRAME-DAGGER", "DRIVER-DESTROY"] },
  { id: "BEY-BURST-B-121-WOLBORG-8-BR", series: "burst", type: "bey", name: "하운드 도그.8.Br", jpName: "울버그.8.Br", en: "Wolborg.8.Br", productNo: "B-121", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["LAYER-WOLBORG", "COREDISK-8", "DRIVER-BEARING"] },
  { id: "BEY-BURST-B-122-GEIST-FAFNIR-8DASH-AB", series: "burst", type: "bey", name: "가이스트 파브닐.8'.Ab", en: "Geist Fafnir.8'.Ab", productNo: "B-122", battleType: "stamina", spin: "left", tags: [], desc: "", parts: ["CHOZLAYER-GEIST-FAFNIR", "COREDISK-8-DASH", "DRIVER-ABSORB"] },
  { id: "BEY-BURST-B-126-LEFT-APOLLOS-MUGEN", series: "burst", type: "bey", name: "레프트 아폴로스.∞", en: "Left Apollos.∞", productNo: "B-126", battleType: "defense", spin: "left", tags: [], desc: "", parts: ["CHOZLAYER-LEFT-APOLLOS", "DRIVER-MUGEN"] },
  { id: "BEY-BURST-B-126-RIGHT-ARTEMIS-MUGEN", series: "burst", type: "bey", name: "라이트 아르테미스.∞", en: "Right Artemis.∞", productNo: "B-126", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-RIGHT-ARTEMIS", "DRIVER-MUGEN"] },
  { id: "BEY-BURST-B-127-CHO-Z-VALKYRIE-Z-EV", series: "burst", type: "bey", name: "초Z 발키리.Z.Ev", en: "Cho-Z Valkyrie.Z.Ev", productNo: "B-127", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-CHO-Z-VALKYRIE", "DISK-ZENITH", "DRIVER-EVOLUTION"] },
  { id: "BEY-BURST-B-128-CHO-Z-SPRIGGAN-0W-ZT-DASH", series: "burst", type: "bey", name: "초Z 스프리건.0W.Zt'", en: "Cho-Z Spriggan.0W.Zt'", productNo: "B-128", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["CHOZLAYER-CHO-Z-SPRIGGAN", "COREDISK-0", "FRAME-WALL", "DRIVER-ZETA-DASH"] },
  { id: "BEY-BURST-B-128-ORB-EGIS-OUTER-QS", series: "burst", type: "bey", name: "얼브 이지스.Ω.Qs", en: "Orb Egis.Ω.Qs", productNo: "B-128", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-ORB-EGIS", "DISK-OUTER", "DRIVER-QUEST"] },
  { id: "BEY-BURST-B-128-CRASH-RAGNARUK-5C-VL-DASH", series: "burst", type: "bey", name: "크래시 라그나로크.5C.Vl'", en: "Crash Ragnaruk.5C.Vl'", productNo: "B-128", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-CRASH-RAGNARUK", "COREDISK-5", "FRAME-CROSS", "DRIVER-VOLCANIC-DASH"] },
  { id: "BEY-BURST-B-128-BLOODY-LONGINUS-1D-CY", series: "burst", type: "bey", name: "블러디 롱기누스.1D.Cy", en: "Bloody Longinus.1D.Cy", productNo: "B-128", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["CHOZLAYER-BLOODY-LONGINUS", "COREDISK-1", "FRAME-DAGGER", "DRIVER-CYCLE"] },
  { id: "BEY-BURST-B-129-CHO-Z-ACHILLES-00-DM", series: "burst", type: "bey", name: "초Z 아킬레스.00.Dm", en: "Cho-Z Achilles.00.Dm", productNo: "B-129", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-CHO-Z-ACHILLES", "COREDISK-00", "DRIVER-DIMENSION"] },
  { id: "BEY-BURST-B-131-DEAD-PHOENIX-0-AT", series: "burst", type: "bey", name: "데드 피닉스.0.At", en: "Dead Phoenix.0.At", productNo: "B-131", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["CHOZLAYER-DEAD-PHOENIX", "COREDISK-0", "DRIVER-ATOMIC"] },
  { id: "BEY-BURST-B-133-ACE-DRAGON-ST-CH-ZAN", series: "burst", type: "bey", name: "에이스 드래곤.St.Ch 참", jpName: "에이스 드래곤.St.Ch 斬", en: "Ace Dragon.St.Ch Zan", productNo: "B-133", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-ACE", "GACHICHIP-DRAGON", "GACHIWEIGHT-ZAN", "DISK-STING", "DRIVER-CHARGE"] },
  { id: "BEY-BURST-B-134-SLASH-VALKYRIE-BL-PW-RETSU", series: "burst", type: "bey", name: "슬래시 발키리.Bl.Pw 열", jpName: "슬래시 발키리.Bl.Pw 烈", en: "Slash Valkyrie.Bl.Pw Retsu", productNo: "B-134", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-SLASH", "GACHICHIP-VALKYRIE", "GACHIWEIGHT-RETSU", "DISK-BLITZ", "DRIVER-POWER"] },
  { id: "BEY-BURST-B-135-BUSHIN-ASHURA-HR-KP-TEN", series: "burst", type: "bey", name: "무신 아수라.Hr.Kp 천", jpName: "무신 아수라.Hr.Kp 天", en: "Bushin Ashura.Hr.Kp Ten", productNo: "B-135", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-BUSHIN", "GACHICHIP-ASHURA", "GACHIWEIGHT-TEN", "DISK-HURRICANE", "DRIVER-KEEP"] },
  { id: "BEY-BURST-B-136-ACE-DRAGON-ST-CH-ZAN", series: "burst", type: "bey", name: "에이스 드래곤.St.Ch 참", jpName: "에이스 드래곤.St.Ch 斬", en: "Ace Dragon.St.Ch Zan", productNo: "B-136", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-ACE", "GACHICHIP-DRAGON", "GACHIWEIGHT-ZAN", "DISK-STING", "DRIVER-CHARGE"] },
  { id: "BEY-BURST-B-136-SLASH-VALKYRIE-BL-PW-RETSU", series: "burst", type: "bey", name: "슬래시 발키리.Bl.Pw 열", jpName: "슬래시 발키리.Bl.Pw 烈", en: "Slash Valkyrie.Bl.Pw Retsu", productNo: "B-136", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-SLASH", "GACHICHIP-VALKYRIE", "GACHIWEIGHT-RETSU", "DISK-BLITZ", "DRIVER-POWER"] },
  { id: "BEY-BURST-B-139-WIZARD-FAFNIR-RT-RS-SEN", series: "burst", type: "bey", name: "위저드 파브닐.Rt.Rs 섬", jpName: "위저드 파브닐.Rt.Rs 閃", en: "Wizard Fafnir.Rt.Rs Sen", productNo: "B-139", battleType: "stamina", spin: "left", tags: [], desc: "", parts: ["GACHIBASE-WIZARD", "GACHICHIP-FAFNIR", "GACHIWEIGHT-SEN", "DISK-RATCHET", "DRIVER-RISE"] },
  { id: "BEY-BURST-B-142-JUDGMENT-JOKER-00T-TR-ZAN", series: "burst", type: "bey", name: "저지먼트 조커.00T.Tr 참", jpName: "저지먼트 조커.00T.Tr 斬", en: "Judgment Joker.00T.Tr Zan", productNo: "B-142", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-JUDGMENT", "GACHICHIP-JOKER", "GACHIWEIGHT-ZAN", "COREDISK-00", "FRAME-TURN", "DRIVER-TRICK"] },
  { id: "BEY-BURST-B-144-ZWEI-LONGINUS-DR-SP-DASH-METSU", series: "burst", type: "bey", name: "츠바이 롱기누스.Dr.Sp' 멸", jpName: "츠바이 롱기누스.Dr.Sp' 滅", en: "Zwei Longinus.Dr.Sp' Metsu", productNo: "B-144", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["GACHIBASE-ZWEI", "GACHICHIP-LONGINUS", "GACHIWEIGHT-METSU", "DISK-DRAKE", "DRIVER-SPIRAL-DASH"] },
  { id: "BEY-BURST-B-145-VENOM-DIABOLOS-VN-BL", series: "burst", type: "bey", name: "베놈 디아볼로스.Vn.Bl", en: "Venom Diabolos.Vn.Bl", productNo: "B-145", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-VENOM", "GACHICHIP-DIABOLOS", "DISK-VANGUARD", "DRIVER-BULLET"] },
  { id: "BEY-BURST-B-148-HEAVEN-PEGASUS-10P-LW-SEN", series: "burst", type: "bey", name: "헤븐 페가수스.10P.Lw 섬", jpName: "헤븐 페가수스.10P.Lw 閃", en: "Heaven Pegasus.10P.Lw Sen", productNo: "B-148", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-HEAVEN", "GACHICHIP-PEGASUS", "GACHIWEIGHT-SEN", "COREDISK-10", "FRAME-PROOF", "DRIVER-LOW"] },
  { id: "BEY-BURST-B-149-LORD-SPRIGGAN-BL-DM-DASH", series: "burst", type: "bey", name: "로드 스프리건.Bl.Dm'", en: "Lord Spriggan.Bl.Dm'", productNo: "B-149", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["GACHIBASE-LORD", "GACHICHIP-SPRIGGAN", "DISK-BLITZ", "DRIVER-DIMENSION-DASH"] },
  { id: "BEY-BURST-B-149-DREAD-BAHAMUT-7W-OM-GEN", series: "burst", type: "bey", name: "드레드 바하무트.7W.Om 환", jpName: "드레드 바하무트.7W.Om 幻", en: "Dread Bahamut.7W.Om Gen", productNo: "B-149", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-DREAD", "GACHICHIP-BAHAMUT", "GACHIWEIGHT-GEN", "COREDISK-7", "FRAME-WALL", "DRIVER-ORBIT-METAL"] },
  { id: "BEY-BURST-B-149-SLASH-DRAGON-00-OCTA-METSU", series: "burst", type: "bey", name: "슬래시 드래곤.00.Ω 멸", jpName: "슬래시 드래곤.00.Ω 滅", en: "Slash Dragon.00.Ω Metsu", productNo: "B-149", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-SLASH", "GACHICHIP-DRAGON", "GACHIWEIGHT-METSU", "COREDISK-00", "DRIVER-OCTA"] },
  { id: "BEY-BURST-B-150-UNION-ACHILLES-CN-XT-PLUS-RETSU", series: "burst", type: "bey", name: "유니온 아킬레스.Cn.Xt+ 열", jpName: "유니온 아킬레스.Cn.Xt+ 烈", en: "Union Achilles.Cn.Xt+ Retsu", productNo: "B-150", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-UNION", "GACHICHIP-ACHILLES", "GACHIWEIGHT-RETSU", "DISK-CONVERT", "DRIVER-XTEND-PLUS"] },
  { id: "BEY-BURST-B-153-REGALIA-GENESIS-HY", series: "burst", type: "bey", name: "리겔리아 제네시스.Hy", en: "Regalia Genesis.Hy", productNo: "B-153", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GACHILAYER-REGALIA-GENESIS", "DRIVER-HYBRID"] },
  { id: "BEY-BURST-B-153-PRIME-APOCALYPSE-0D-UL-DASH", series: "burst", type: "bey", name: "프라임 아포칼립스.0D.Ul'", en: "Prime Apocalypse.0D.Ul'", productNo: "B-153", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GACHILAYER-PRIME-APOCALYPSE", "COREDISK-0", "FRAME-DAGGER", "DRIVER-ULTIMATE-REBOOT-DASH"] },
  { id: "BEY-BURST-B-153-ERASE-FAFNIR-ST-TR-TEN", series: "burst", type: "bey", name: "이레이즈 파브닐.St.Tr 천", jpName: "이레이즈 파브닐.St.Tr 天", en: "Erase Fafnir.St.Tr Ten", productNo: "B-153", battleType: "balance", spin: "left", tags: [], desc: "", parts: ["GACHIBASE-ERASE", "GACHICHIP-FAFNIR", "GACHIWEIGHT-TEN", "DISK-STING", "DRIVER-TRICK"] },
  { id: "BEY-BURST-B-153-COSMO-DRAGON-VN-R-RETSU", series: "burst", type: "bey", name: "코스모 드래곤.Vn.R 열", jpName: "코스모 드래곤.Vn.R 烈", en: "Cosmo Dragon.Vn.R Retsu", productNo: "B-153", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-COSMO", "GACHICHIP-DRAGON", "GACHIWEIGHT-RETSU", "DISK-VANGUARD", "DRIVER-REVOLVE"] },
  { id: "BEY-BURST-B-154-IMPERIAL-DRAGON-IG-DASH", series: "burst", type: "bey", name: "임페리얼 드래곤.Ig'", en: "Imperial Dragon.Ig'", productNo: "B-154", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-IMPERIAL", "GACHICHIP-DRAGON-II", "DRIVER-IGNITION-DASH"] },
  { id: "BEY-BURST-B-155-MASTER-DIABOLOS-GN", series: "burst", type: "bey", name: "마스터 디아볼로스.Gn", en: "Master Diabolos.Gn", productNo: "B-155", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["GACHIBASE-MASTER", "GACHICHIP-DIABOLOS-II", "DRIVER-GENERATE"] },
  { id: "BEY-BURST-B-157-BIGBANG-GENESIS-0-YM", series: "burst", type: "bey", name: "빅뱅 제네시스.0.Ym", en: "Bigbang Genesis.0.Ym", productNo: "B-157", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["GACHILAYER-BIGBANG-GENESIS", "COREDISK-0", "DRIVER-YARD-METAL"] },
  { id: "BEY-BURST-B-159-SUPER-HYPERION-XC-1A", series: "burst", type: "bey", name: "슈퍼 하이페리온.Xc 1A", en: "Super Hyperion.Xc 1A", productNo: "B-159", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-SUPER", "SUPERKINGCHIP-HYPERION", "DRIVER-XCEED", "SUPERKINGCHASSIS-1A"] },
  { id: "BEY-BURST-B-160-KING-HELIOS-ZN-1B", series: "burst", type: "bey", name: "킹 헬리오스.Zn 1B", en: "King Helios.Zn 1B", productNo: "B-160", battleType: "balance", spin: "left", tags: [], desc: "", parts: ["SUPERKINGRING-KING", "SUPERKINGCHIP-HELIOS", "DRIVER-ZONE", "SUPERKINGCHASSIS-1B"] },
  { id: "BEY-BURST-B-161-GLIDE-RAGNARUK-WH-R-1S", series: "burst", type: "bey", name: "글라이드 라그나로크.Wh.R 1S", en: "Glide Ragnaruk.Wh.R 1S", productNo: "B-161", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-GLIDE", "SUPERKINGCHIP-RAGNARUK", "DISK-WHEEL", "DRIVER-REVOLVE", "SUPERKINGCHASSIS-1S"] },
  { id: "BEY-BURST-B-162-SUPER-HYPERION-XC-1A", series: "burst", type: "bey", name: "슈퍼 하이페리온.Xc 1A", en: "Super Hyperion.Xc 1A", productNo: "B-162", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-SUPER", "SUPERKINGCHIP-HYPERION", "DRIVER-XCEED", "SUPERKINGCHASSIS-1A"] },
  { id: "BEY-BURST-B-162-KING-HELIOS-ZN-1B", series: "burst", type: "bey", name: "킹 헬리오스.Zn 1B", en: "King Helios.Zn 1B", productNo: "B-162", battleType: "balance", spin: "left", tags: [], desc: "", parts: ["SUPERKINGRING-KING", "SUPERKINGCHIP-HELIOS", "DRIVER-ZONE", "SUPERKINGCHASSIS-1B"] },
  { id: "BEY-BURST-B-163-BRAVE-VALKYRIE-EV-DASH-2A", series: "burst", type: "bey", name: "브레이브 발키리.Ev' 2A", en: "Brave Valkyrie.Ev' 2A", productNo: "B-163", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-BRAVE", "SUPERKINGCHIP-VALKYRIE", "DRIVER-EVOLUTION-DASH", "SUPERKINGCHASSIS-2A"] },
  { id: "BEY-BURST-B-167-MIRAGE-FAFNIR-NT-2S", series: "burst", type: "bey", name: "미라지 파브닐.Nt 2S", en: "Mirage Fafnir.Nt 2S", productNo: "B-167", battleType: "stamina", spin: "left", tags: [], desc: "", parts: ["SUPERKINGRING-MIRAGE", "SUPERKINGCHIP-FAFNIR", "DRIVER-NOTHING", "SUPERKINGCHASSIS-2S"] },
  { id: "BEY-BURST-B-168-RAGE-LONGINUS-DS-DASH-3A", series: "burst", type: "bey", name: "레이지 롱기누스.Ds' 3A", en: "Rage Longinus.Ds' 3A", productNo: "B-168", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["SUPERKINGRING-RAGE", "SUPERKINGCHIP-LONGINUS", "DRIVER-DESTROY-DASH", "SUPERKINGCHASSIS-3A"] },
  { id: "BEY-BURST-B-169-VARIANT-LUCIFER-MB-2D", series: "burst", type: "bey", name: "베어리언트 루시퍼.Mb 2D", jpName: "베리언트 루시퍼.Mb 2D", en: "Variant Lucifer.Mb 2D", productNo: "B-169", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-VARIANT", "SUPERKINGCHIP-LUCIFER", "DRIVER-MOBIUS", "SUPERKINGCHASSIS-2D"] },
  { id: "BEY-BURST-B-171-TEMPEST-DRAGON-CM-1A", series: "burst", type: "bey", name: "템페스트 드래곤.Cm 1A", en: "Tempest Dragon.Cm 1A", productNo: "B-171", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-TEMPEST", "SUPERKINGCHIP-DRAGON", "DRIVER-CHARGE-METAL", "SUPERKINGCHASSIS-1A"] },
  { id: "BEY-BURST-B-171-CURSE-SATAN-AERO-DASH-HOLD-DASH-1D", series: "burst", type: "bey", name: "커스 사탄.α'.H' 1D", en: "Curse Satan.α'.H' 1D", productNo: "B-171", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-CURSE", "SUPERKINGCHIP-SATAN", "DISK-AERO-DASH", "DRIVER-HOLD-DASH", "SUPERKINGCHASSIS-1D"] },
  { id: "BEY-BURST-B-171-NAKED-DIABOLOS-NDB-GOKU-11-WV", series: "burst", type: "bey", name: "네이키드 디아볼로스(NDb극).11.Wv 극", jpName: "네이키드 디아볼로스(NDb極).11.Wv 極", en: "Naked Diabolos(NDb Goku).11.Wv Goku", productNo: "B-171", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["GACHIBASE-NAKED", "GACHICHIP-DIABOLOS", "GACHIWEIGHT-GOKU", "COREDISK-11", "DRIVER-WAVE"] },
  { id: "BEY-BURST-B-172-WORLD-SPRIGGAN-U-DASH-2B", series: "burst", type: "bey", name: "월드 스프리건.U' 2B", en: "World Spriggan.U' 2B", productNo: "B-172", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["SUPERKINGRING-WORLD", "SUPERKINGCHIP-SPRIGGAN", "DRIVER-UNITE-DASH", "SUPERKINGCHASSIS-2B"] },
  { id: "BEY-BURST-B-174-HYPERION-BURN-CHO-XC-DASH-X", series: "burst", type: "bey", name: "하이페리온 번.초.Xc'+X", jpName: "하이페리온 번.超.Xc'+X", en: "Hyperion Burn.Cho.Xc'+X", productNo: "B-174", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-BURN", "SUPERKINGCHIP-HYPERION-II", "DISK-CHO", "DRIVER-XCEED-DASH", "DRIVERUPGRADE-XCEED"] },
  { id: "BEY-BURST-B-174-HELIOS-VOLCANO-OU-ZN-DASH-Z", series: "burst", type: "bey", name: "헬리오스 볼케이노.왕.Zn'+Z", jpName: "헬리오스 볼케이노.王.Zn'+Z", en: "Helios Volcano.Ou.Zn'+Z", productNo: "B-174", battleType: "balance", spin: "left", tags: [], desc: "", parts: ["SUPERKINGRING-VOLCANO", "SUPERKINGCHIP-HELIOS-II", "DISK-OU", "DRIVER-ZONE-DASH", "DRIVERUPGRADE-ZONE"] },
  { id: "BEY-BURST-B-175-LUCIFER-THE-END-KOU-DR", series: "burst", type: "bey", name: "루시퍼 디엔드.황.Dr", jpName: "루시퍼 디엔드.皇.Dr", en: "Lucifer The End.Kou.Dr", productNo: "B-175", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-THE-END", "SUPERKINGCHIP-LUCIFER-II", "DISK-KOU", "DRIVER-DRIFT"] },
  { id: "BEY-BURST-B-177-JET-WYVERN-AR-JS-1D", series: "burst", type: "bey", name: "제트 와이번.Ar.Js 1D", en: "Jet Wyvern.Ar.Js 1D", productNo: "B-177", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-JET", "SUPERKINGCHIP-WYVERN", "DISK-AROUND", "DRIVER-JUST", "SUPERKINGCHASSIS-1D"] },
  { id: "BEY-BURST-B-179-DEATH-SOLOMON-MF-2B", series: "burst", type: "bey", name: "데스 솔로몬.MF 2B", en: "Death Solomon.MF 2B", productNo: "B-179", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["SUPERKINGRING-DEATH", "SUPERKINGCHIP-SOLOMON", "DRIVER-METAL-FUSION", "SUPERKINGCHASSIS-2B"] },
  { id: "BEY-BURST-B-180-DYNAMITE-BELIAL-NX-VN-2", series: "burst", type: "bey", name: "다이너마이트 벨리알.Nx.Vn-2", en: "Dynamite Belial.Nx.Vn-2", productNo: "B-180", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-DYNAMITE", "DBCORE-BELIAL", "DBDISK-NEXUS", "DRIVER-VENTURE", "DBARMOR-2"] },
  { id: "BEY-BURST-B-182-DYNAMITE-BELIAL-NX-VN-2", series: "burst", type: "bey", name: "다이너마이트 벨리알.Nx.Vn-2", en: "Dynamite Belial.Nx.Vn-2", productNo: "B-182", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-DYNAMITE", "DBCORE-BELIAL", "DBDISK-NEXUS", "DRIVER-VENTURE", "DBARMOR-2"] },
  { id: "BEY-BURST-B-185-VANISH-FAFNIR-TP-KC-3", series: "burst", type: "bey", name: "배니시 파브닐.Tp.Kc-3", en: "Vanish Fafnir.Tp.Kc-3", productNo: "B-185", battleType: "stamina", spin: "left", tags: [], desc: "", parts: ["DBBLADE-VANISH", "DBCORE-FAFNIR", "DBDISK-TAPERED", "DRIVER-KICK", "DBARMOR-3"] },
  { id: "BEY-BURST-B-187-SAVIOR-VALKYRIE-SH-7", series: "burst", type: "bey", name: "세이비어 발키리.Sh-7", en: "Savior Valkyrie.Sh-7", productNo: "B-187", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-SAVIOR", "DBCORE-VALKYRIE", "DRIVER-SHOT", "DBARMOR-7"] },
  { id: "BEY-BURST-B-188-ASTRAL-SPRIGGAN-OV-QT-0", series: "burst", type: "bey", name: "아스트랄 스프리건.Ov.Qt-0", en: "Astral Spriggan.Ov.Qt-0", productNo: "B-188", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["DBBLADE-ASTRAL", "DBCORE-SPRIGGAN", "DBDISK-OVER", "DRIVER-QUATTRO", "DBARMOR-0"] },
  { id: "BEY-BURST-B-189-GUILTY-LONGINUS-KR-MDS-2", series: "burst", type: "bey", name: "길티 롱기누스.Kr.MDs-2", en: "Guilty Longinus.Kr.MDs-2", productNo: "B-189", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["DBBLADE-GUILTY", "DBCORE-LONGINUS", "DBDISK-KARMA", "DRIVER-METAL-DESTROY", "DBARMOR-2"] },
  { id: "BEY-BURST-B-190-DYNAMITE-BELIAL-NX-VN-3", series: "burst", type: "bey", name: "다이너마이트 벨리알.Nx.Vn-3", en: "Dynamite Belial.Nx.Vn-3", productNo: "B-190", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-DYNAMITE", "DBCORE-BELIAL", "DBDISK-NEXUS", "DRIVER-VENTURE", "DBARMOR-3"] },
  { id: "BEY-BURST-B-190-ROAR-BAHAMUT-KR-MDR-6", series: "burst", type: "bey", name: "로어 바하무트.Kr.MDr-6", en: "Roar Bahamut.Kr.MDr-6", productNo: "B-190", battleType: "defense", spin: "left", tags: [], desc: "", parts: ["DBBLADE-ROAR", "DBCORE-BAHAMUT", "DBDISK-KARMA", "DRIVER-METAL-DRIFT", "DBARMOR-6"] },
  { id: "BEY-BURST-B-191-DANGEROUS-BELIAL-AL-2", series: "burst", type: "bey", name: "데인저러스 벨리알.Al-2", en: "Dangerous Belial.Al-2", productNo: "B-191", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-DANGEROUS", "DBCORE-BELIAL-II", "DRIVER-ALMIGHT", "DBARMOR-2"] },
  { id: "BEY-BURST-B-191-PROMINENCE-PHOENIX-TP-MUN-10", series: "burst", type: "bey", name: "프로미넌스 피닉스.Tp.MUn-10", en: "Prominence Phoenix.Tp.MUn-10", productNo: "B-191", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DBBLADE-PROMINENCE", "DBCORE-PHOENIX", "DBDISK-TAPERED", "DRIVER-METAL-UNIVERSE", "DBARMOR-10"] },
  { id: "BEY-BURST-B-191-SAVIOR-PERSEUS-GG-BR-DASH-3", series: "burst", type: "bey", name: "세이비어 페르세우스.Gg.Br'-3", en: "Savior Perseus.Gg.Br'-3", productNo: "B-191", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-SAVIOR", "DBCORE-PERSEUS", "DBDISK-GIGA", "DRIVER-BEARING-DASH", "DBARMOR-3"] },
  { id: "BEY-BURST-B-192-GREATEST-RAPHAEL-OV-HXT-PLUS-DASH", series: "burst", type: "bey", name: "그레이티스트 라파엘.Ov.HXt+'", en: "Greatest Raphael.Ov.HXt+'", productNo: "B-192", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["DBLAYER-GREATEST-RAPHAEL", "DBDISK-OVER", "DRIVER-HIGH-XTEND-PLUS-DASH"] },
  { id: "BEY-BURST-B-193-ULTIMATE-VALKYRIE-LG-V-DASH-9", series: "burst", type: "bey", name: "얼티밋 발키리.Lg.V'-9", en: "Ultimate Valkyrie.Lg.V'-9", productNo: "B-193", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-ULTIMATE", "DBCORE-VALKYRIE-II", "DBDISK-LEGACY", "DRIVER-VARIABLE-DASH", "DBARMOR-9"] },
  { id: "BEY-BURST-B-195-PROMINENCE-VALKYRIE-OV-AT-DASH-0", series: "burst", type: "bey", name: "프로미넌스 발키리.Ov.At'-0", en: "Prominence Valkyrie.Ov.At'-0", productNo: "B-195", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DBBLADE-PROMINENCE", "DBCORE-VALKYRIE", "DBDISK-OVER", "DRIVER-ATOMIC-DASH", "DBARMOR-0"] },
  { id: "BEY-BURST-B-197-DIVINE-BELIAL-NX-AD-3", series: "burst", type: "bey", name: "디바인 벨리알.Nx.Ad-3", en: "Divine Belial.Nx.Ad-3", productNo: "B-197", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-DIVINE", "DBCORE-BELIAL-II", "DBDISK-NEXUS", "DRIVER-ADVENTURE", "DBARMOR-3"] },
  { id: "BEY-BURST-B-199-GATLING-DRAGON-KR-CM-DASH-10", series: "burst", type: "bey", name: "개틀링 드래곤.Kr.Cm'-10", en: "Gatling Dragon.Kr.Cm'-10", productNo: "B-199", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-GATLING", "DBCORE-DRAGON", "DBDISK-KARMA", "DRIVER-CHARGE-METAL-DASH", "DBARMOR-10"] },
  { id: "BEY-BURST-B-200-XIPHOID-XCALIBUR-XN-SW-DASH-1", series: "burst", type: "bey", name: "지포이드 엑스칼리버.Xn.Sw'-1", en: "Xiphoid Xcalibur.Xn.Sw'-1", productNo: "B-200", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-XIPHOID", "DBCORE-XCALIBUR", "DBDISK-XANTHUS", "DRIVER-SWORD-DASH", "DBARMOR-1"] },
  { id: "BEY-BURST-B-201-ZEST-ACHILLES-IL-QT-DASH-4", series: "burst", type: "bey", name: "제스트 아킬레스.Il.Qt'-4", en: "Zest Achilles.Il.Qt'-4", productNo: "B-201", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["DBBLADE-ZEST", "DBCORE-ACHILLES", "DBDISK-ILLEGAL", "DRIVER-QUATTRO-DASH", "DBARMOR-4"] },
  { id: "BEY-BURST-B-203-SUPER-HYPERION-MR-TP-XP-2", series: "burst", type: "bey", name: "슈퍼 하이페리온 MR.Tp.Xp-2", en: "Super Hyperion MR.Tp.Xp-2", productNo: "B-203", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-SUPER-MR", "DBCORE-HYPERION", "DBDISK-TAPERED", "DRIVER-XPLOSION", "DBARMOR-2"] },
  { id: "BEY-BURST-B-203-KING-HELIOS-MR-GG-ZL-10", series: "burst", type: "bey", name: "킹 헬리오스 MR.Gg.Zl-10", en: "King Helios MR.Gg.Zl-10", productNo: "B-203", battleType: "balance", spin: "left", tags: [], desc: "", parts: ["DBBLADE-KING-MR", "DBCORE-HELIOS", "DBDISK-GIGA", "DRIVER-ZEAL", "DBARMOR-10"] },
  { id: "BEY-BURST-B-203-DIVINE-BELIAL-NX-BDR", series: "burst", type: "bey", name: "디바인 벨리알.Nx.BDr", en: "Divine Belial.Nx.BDr", productNo: "B-203", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-DIVINE", "DBCORE-BELIAL-III", "DBDISK-NEXUS", "DRIVER-BEARING-DRIFT"] },
  { id: "BEY-BURST-B-204-DIVINE-BELIAL-NX-AD-6", series: "burst", type: "bey", name: "디바인 벨리알.Nx.Ad-6", en: "Divine Belial.Nx.Ad-6", productNo: "B-204", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-DIVINE", "DBCORE-BELIAL-II", "DBDISK-NEXUS", "DRIVER-ADVENTURE", "DBARMOR-6"] },
  { id: "BEY-BURST-B-204-CHAIN-KERBEUS-KR-MM-DASH-3", series: "burst", type: "bey", name: "체인 케르베우스.Kr.Mm'-3", en: "Chain Kerbeus.Kr.Mm'-3", productNo: "B-204", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DBBLADE-CHAIN", "DBCORE-KERBEUS", "DBDISK-KARMA", "DRIVER-MOMENT-DASH", "DBARMOR-3"] },
  { id: "BEY-BURST-B-205-BURST-SPRIGGAN-S-DASH-F-DASH-8", series: "burst", type: "bey", name: "버스트 스프리건.S'.F'-8", en: "Burst Spriggan.S'.F'-8", productNo: "B-205", battleType: "balance", spin: "dual", tags: [], desc: "", parts: ["DBBLADE-BURST", "DBCORE-SPRIGGAN-II", "DBDISK-SPREAD-DASH", "DRIVER-FUSION-DASH", "DBARMOR-8"] },
  { id: "BEY-BURST-B-205-ULTIMATE-VALKYRIE-W-DASH-A-DASH-9", series: "burst", type: "bey", name: "얼티밋 발키리.W'.A'-9", en: "Ultimate Valkyrie.W'.A'-9", productNo: "B-205", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["DBBLADE-ULTIMATE", "DBCORE-VALKYRIE-II", "DBDISK-WING-DASH", "DRIVER-ACCEL-DASH", "DBARMOR-9"] },
  { id: "BEY-BURST-B-206-BARRICADE-LUCIFER-IL-BMB-10", series: "burst", type: "bey", name: "바리케이드 루시퍼.Il.BMb-10", en: "Barricade Lucifer.Il.BMb-10", productNo: "B-206", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["DBBLADE-BARRICADE", "DBCORE-LUCIFER", "DBDISK-ILLEGAL", "DRIVER-BEARING-MOBIUS", "DBARMOR-10"] },
];

const partItems = [
  { id: "FACE-PEGASIS", series: "metal fight", type: "face", name: "페가시스", en: "Pegasis", tags: [], desc: "페가시스의 별자리를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-PEGASIS-ENGRAVED", series: "metal fight", type: "face", name: "페가시스 음각 페이스", en: "Pegasis Engraved Face", tags: [], desc: "", stats: [30, 30, 30] },
  { id: "FACE-BRONZE-RANK", series: "metal fight", type: "face", name: "브론즈 랭크 페이스", en: "Bronze Rank Face", tags: [], desc: "", stats: [30, 30, 30] },
  { id: "FACE-SILVER-RANK", series: "metal fight", type: "face", name: "실버 랭크 페이스", en: "Silver Rank Face", tags: [], desc: "", stats: [30, 30, 30] },
  { id: "FACE-GOLD-RANK", series: "metal fight", type: "face", name: "골드 랭크 페이스", en: "Gold Rank Face", tags: [], desc: "", stats: [30, 30, 30] },
  { id: "FACE-LEONE", series: "metal fight", type: "face", name: "레온", jpName: "레오네", en: "Leone", tags: [], desc: "레온의 별자리를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-SAGITTARIO", series: "metal fight", type: "face", name: "사지타리오", en: "Sagittario", tags: [], desc: "사지타리오의 별자리를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-METAL-FACE", series: "metal fight", type: "face", name: "메탈페이스", en: "Metal Face", tags: [], desc: "무거워진 중량이 공격력과 방어력을 향상시킨다.", stats: [60, 60, 0] },
  { id: "FACE-METAL-FACE-BLAZE-VER", series: "metal fight", type: "face", name: "메탈페이스 블레이즈 Ver.", en: "Metal Face Blaze Ver.", tags: [], desc: "무거워진 중량이 공격력과 방어력을 향상시킨다.", stats: [60, 60, 0] },
  { id: "FACE-BULL", series: "metal fight", type: "face", name: "불", en: "Bull", tags: [], desc: "불의 별자리를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-QUETZALCOATL", series: "metal fight", type: "face", name: "케찰코아틀", en: "Quetzalcoatl", tags: [], desc: "케찰코아틀을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-SUSANOW", series: "metal fight", type: "face", name: "스사노오", en: "Susanow", tags: [], desc: "스사노오를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-WOLF", series: "metal fight", type: "face", name: "울프", jpName: "볼프", en: "Wolf", tags: [], desc: "울프를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ARIES", series: "metal fight", type: "face", name: "아리에스", en: "Aries", tags: [], desc: "아리에스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LIBRA", series: "metal fight", type: "face", name: "리브라", en: "Libra", tags: [], desc: "리브라를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-AQUARIO", series: "metal fight", type: "face", name: "아쿠아리오", en: "Aquario", tags: [], desc: "아쿠아리오를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-VIRGO", series: "metal fight", type: "face", name: "비르고", en: "Virgo", tags: [], desc: "비르고를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-L-DRAGO", series: "metal fight", type: "face", name: "엘드라고", en: "L-Drago", tags: [], desc: "엘드라고를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ESCOLPIO", series: "metal fight", type: "face", name: "에스콜피오", en: "Escolpio", tags: [], desc: "에스콜피오를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-PISCES", series: "metal fight", type: "face", name: "파이시즈", en: "Pisces", tags: [], desc: "파이시즈를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-GEMIOS", series: "metal fight", type: "face", name: "제미오스", en: "Gemios", tags: [], desc: "제미오스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CAPRICORNE", series: "metal fight", type: "face", name: "카프리콘", jpName: "카프리코네", en: "Capricorne", tags: [], desc: "카프리콘을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CANCER", series: "metal fight", type: "face", name: "캔서", en: "Cancer", tags: [], desc: "캔서를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-AQUILA", series: "metal fight", type: "face", name: "아쿠이라", en: "Aquila", tags: [], desc: "아쿠이라를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ORSO", series: "metal fight", type: "face", name: "오르소", en: "Orso", tags: [], desc: "오르소를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-PHOENIX", series: "metal fight", type: "face", name: "피닉스", en: "Phoenix", tags: [], desc: "피닉스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-SERPENT", series: "metal fight", type: "face", name: "서펜트", en: "Serpent", tags: [], desc: "서펜트를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ANUBIUS", series: "metal fight", type: "face", name: "아누비우스", en: "Anubius", tags: [], desc: "아누비우스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-UNICORNO", series: "metal fight", type: "face", name: "유니콘", jpName: "유니코르노", en: "Unicorno", tags: [], desc: "유니콘을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LACERTA", series: "metal fight", type: "face", name: "라체르타", en: "Lacerta", tags: [], desc: "라체르타를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-GIRAFFE", series: "metal fight", type: "face", name: "기라프", en: "Giraffe", tags: [], desc: "기라프를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-PERSEUS", series: "metal fight", type: "face", name: "페르세우스", en: "Perseus", tags: [], desc: "페르세우스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-KETOS", series: "metal fight", type: "face", name: "케토스", en: "Ketos", tags: [], desc: "케토스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-METAL-FACE-CUSTOM-VER", series: "metal fight", type: "face", name: "메탈페이스 커스텀 Ver.", jpName: "메탈페이스 개조 Ver.", en: "Metal Face Custom Ver.", tags: [], desc: "무거워진 중량이 공격력과 방어력을 향상시킨다.", modes: [{ name: "헤비", stats: [60, 60, 0] }, { name: "미들", stats: [50, 50, 10] }, { name: "라이트", stats: [40, 40, 20] }, { name: "페더", stats: [30, 30, 30] }] },
  { id: "FACE-BLAZE", series: "metal fight", type: "face", name: "블레이즈", en: "Blaze", tags: [], desc: "블레이즈를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CHIMERA", series: "metal fight", type: "face", name: "키메라", en: "Chimera", tags: [], desc: "키메라를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-HORUSEUS", series: "metal fight", type: "face", name: "호르세우스", jpName: "호루세우스", en: "Horuseus", tags: [], desc: "호르세우스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-KEEL", series: "metal fight", type: "face", name: "킬", jpName: "길", en: "Keel", tags: [], desc: "킬을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-HERCULEO", series: "metal fight", type: "face", name: "헤라클레오", en: "Herculeo", tags: [], desc: "헤라클레오를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-BYXIS", series: "metal fight", type: "face", name: "픽시스", en: "Byxis", tags: [], desc: "픽시스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-REX", series: "metal fight", type: "face", name: "렉스", en: "Rex", tags: [], desc: "렉스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-KERBECS", series: "metal fight", type: "face", name: "켈베로스", en: "Kerbecs", tags: [], desc: "켈베로스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-BEAFOWL", series: "metal fight", type: "face", name: "비폴", en: "Beafowl", tags: [], desc: "비폴을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-HOROGIUM", series: "metal fight", type: "face", name: "호로지움", en: "Horogium", tags: [], desc: "호로지움을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LYNX", series: "metal fight", type: "face", name: "링크스", en: "Lynx", tags: [], desc: "링크스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-KRONOS", series: "metal fight", type: "face", name: "크로노스", en: "Kronos", tags: [], desc: "크로노스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-VARIARES", series: "metal fight", type: "face", name: "베리아레스", en: "Variares", tags: [], desc: "베리아레스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-JUPITER", series: "metal fight", type: "face", name: "쥬피터", en: "Jupiter", tags: [], desc: "쥬피터를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-IONIS", series: "metal fight", type: "face", name: "이오니스", en: "Ionis", tags: [], desc: "이오니스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-FOX", series: "metal fight", type: "face", name: "폭스", en: "Fox", tags: [], desc: "폭스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-LYRA", series: "metal fight", type: "face", name: "레이라", en: "Lyra", tags: [], desc: "레이라를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CROWN", series: "metal fight", type: "face", name: "크라운", en: "Crown", tags: [], desc: "크라운을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-ORION", series: "metal fight", type: "face", name: "오리온", en: "Orion", tags: [], desc: "오리온을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-URANUS", series: "metal fight", type: "face", name: "우라누스", en: "Uranus", tags: [], desc: "우라누스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-NEMESIS", series: "metal fight", type: "face", name: "네메시스", en: "Nemesis", tags: [], desc: "네메시스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-HADES", series: "metal fight", type: "face", name: "하데스", en: "Hades", tags: [], desc: "하데스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-BEELZEB", series: "metal fight", type: "face", name: "베르제브", en: "Beelzeb", tags: [], desc: "베르제브를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-DRAGONIS", series: "metal fight", type: "face", name: "드라고니스", en: "Dragonis", tags: [], desc: "드라고니스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "FACE-CYGNUS", series: "metal fight", type: "face", name: "시그너스", en: "Cygnus", tags: [], desc: "시그너스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "CLEARWHEEL-PEGASIS", series: "metal fight", type: "clearwheel", name: "페가시스", en: "Pegasis", battleType: "attack", spin: "right", tags: [], desc: "위에서의 공격에 대응하며 어퍼공격으로 되받아 공격한다.", stats: [40, 20, 10] },
  { id: "CLEARWHEEL-LEONE", series: "metal fight", type: "clearwheel", name: "레온", en: "Leone", battleType: "defense", spin: "right", tags: [], desc: "어느 방향에서의 공격도 막아내는 형태를 가진 방어력이 뛰어난 휠.", stats: [10, 40, 20] },
  { id: "CLEARWHEEL-SAGITTARIO", series: "metal fight", type: "clearwheel", name: "사지타리오", en: "Sagittario", battleType: "stamina", spin: "right", tags: [], desc: "화살과 같은 형태로 위에서 공격하는 적을 효과적으로 방어한다.", stats: [10, 20, 40] },
  { id: "CLEARWHEEL-BULL", series: "metal fight", type: "clearwheel", name: "불", en: "Bull", battleType: "balance", spin: "right", tags: [], desc: "어느 방향에서의 공격도 막아내는 형태를 가진 방어력이 뛰어난 휠.", stats: [30, 30, 10] },
  { id: "CLEARWHEEL-WOLF", series: "metal fight", type: "clearwheel", name: "울프", en: "Wolf", battleType: "balance", spin: "right", tags: [], desc: "네 마리의 늑대가 3방향으로 공격을 펼친다.", stats: [30, 20, 20] },
  { id: "CLEARWHEEL-CANCER", series: "metal fight", type: "clearwheel", name: "캔서", en: "Cancer", battleType: "balance", spin: "right", tags: [], desc: "어퍼공격을 하고 적의 공격을 가볍게 받아넘긴다.", stats: [30, 30, 10] },
  { id: "CLEARWHEEL-AQUARIO", series: "metal fight", type: "clearwheel", name: "아쿠아리오", en: "Aquario", battleType: "attack", spin: "right", tags: [], desc: "4방향으로 펼쳐진 물덩어리들이 흐르는 듯한 공격을 만들어 낸다.", stats: [40, 10, 20] },
  { id: "CLEARWHEEL-L-DRAGO", series: "metal fight", type: "clearwheel", name: "엘드라고", en: "L-Drago", battleType: "attack", spin: "left", tags: [], desc: "3마리의 좌회전하는 용이 강력공격! 라이트닝 휠의 힘을 끌어낸다.", stats: [50, 10, 0] },
  { id: "CLEARWHEEL-ARIES", series: "metal fight", type: "clearwheel", name: "아리에스", en: "Aries", battleType: "defense", spin: "right", tags: [], desc: "나선형의 뿔이 모든 방향에 대응하여 방패의 역할을 한다.", stats: [10, 40, 20] },
  { id: "CLEARWHEEL-AQUILA", series: "metal fight", type: "clearwheel", name: "아쿠이라", en: "Aquila", battleType: "stamina", spin: "right", tags: [], desc: "바람을 가르는 독수리같은 비행능력으로 강한 지구력을 발휘한다.", stats: [20, 10, 40] },
  { id: "CLEARWHEEL-LIBRA", series: "metal fight", type: "clearwheel", name: "리브라", en: "Libra", battleType: "stamina", spin: "right", tags: [], desc: "가장자리의 2개의 저울접시가 강력한 원심력과 지구력을 자랑한다.", stats: [20, 10, 40] },
  { id: "CLEARWHEEL-CAPRICORNE", series: "metal fight", type: "clearwheel", name: "카프리콘", en: "Capricorne", battleType: "attack", spin: "right", tags: [], desc: "뿔의 작은 돌기는 연타공격을, 발굽은 강력한 어퍼공격을 한다.", stats: [40, 20, 10] },
  { id: "CLEARWHEEL-ORSO", series: "metal fight", type: "clearwheel", name: "오르소", en: "Orso", battleType: "defense", spin: "right", tags: [], desc: "큰곰의 앞발을 이용하여 연타공격을 발휘한다.", stats: [20, 30, 20] },
  { id: "CLEARWHEEL-GEMIOS", series: "metal fight", type: "clearwheel", name: "제미오스", en: "Gemios", battleType: "balance", spin: "right", tags: [], desc: "얼음덩어리가 공격을 가하고, 불덩어리가 상대의 공격을 가볍게 받아넘기는 효과를 낸다.", stats: [40, 20, 10] },
  { id: "CLEARWHEEL-PISCES", series: "metal fight", type: "clearwheel", name: "파이시즈", en: "Pisces", battleType: "stamina", spin: "right", tags: [], desc: "발군의 공력으로 지구력을 발휘한다. 송곳니로 윗면 공격도 가능하다.", stats: [20, 10, 40] },
  { id: "CLEARWHEEL-PHOENIX", series: "metal fight", type: "clearwheel", name: "피닉스", en: "Phoenix", battleType: "stamina", spin: "right", tags: [], desc: "바깥쪽의 봉황의 날개가 원심력을 증가, 꼬리날개로 적의 공격을 가볍게 막는다.", stats: [10, 10, 50] },
  { id: "CLEARWHEEL-VIRGO", series: "metal fight", type: "clearwheel", name: "비르고", en: "Virgo", battleType: "stamina", spin: "right", tags: [], desc: "원심력을 극대화한 형태로 지구력을 강화하며 스매시공격을 한다.", stats: [10, 20, 40] },
  { id: "CLEARWHEEL-ESCOLPIO", series: "metal fight", type: "clearwheel", name: "에스콜피오", en: "Escolpio", battleType: "defense", spin: "right", tags: [], desc: "커다란 가위 모양의 꼬리가 적의 공격을 받아넘기고 아래에서 위로 밀어붙인다.", stats: [20, 40, 10] },
  { id: "CLEARWHEEL-SERPENT", series: "metal fight", type: "clearwheel", name: "서펜트", en: "Serpent", battleType: "balance", spin: "right", tags: [], desc: "적의 공격을 가볍게 받아넘기면서 연타공격을 한다.", stats: [30, 30, 10] },
  { id: "CLEARWHEEL-ANUBIUS", series: "metal fight", type: "clearwheel", name: "아누비우스", en: "Anubius", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "CLEARWHEEL-PEGASIS-II", series: "metal fight", type: "clearwheel", name: "페가시스Ⅱ", en: "Pegasis II", battleType: "attack", spin: "right", tags: [], desc: "갈기와 날개가 아래에서 위로 올려치는 어퍼공격을 가한다.", stats: [50, 10, 10] },
  { id: "CLEARWHEEL-UNICORNO", series: "metal fight", type: "clearwheel", name: "유니콘", en: "Unicorno", battleType: "attack", spin: "right", tags: [], desc: "3개의 커다란 뿔로 상대를 찌르는 듯이 강한 공격을 한다.", stats: [40, 20, 10] },
  { id: "CLEARWHEEL-LACERTA", series: "metal fight", type: "clearwheel", name: "라체르타", en: "Lacerta", battleType: "balance", spin: "right", tags: [], desc: "도마뱀 모양의 몸체가 적의 공격을 받아넘기고 팔꿈치로 어퍼공격을 가한다.", stats: [30, 20, 20] },
  { id: "CLEARWHEEL-GIRAFFE", series: "metal fight", type: "clearwheel", name: "기라프", en: "Giraffe", battleType: "defense", spin: "right", tags: [], desc: "바깥쪽에 경사진 모양의 날개가 상대의 공격을 받아넘긴다.", stats: [10, 50, 10] },
  { id: "CLEARWHEEL-PERSEUS", series: "metal fight", type: "clearwheel", name: "페르세우스", en: "Perseus", battleType: "defense", spin: "dual", tags: [], desc: "유일하게 그라비티 휠에 장착 가능한 양방향회전 휠. 투구가 적의 공격을 방어하면서 접근하는 적을 튕겨낸다.", stats: [20, 50, 0] },
  { id: "CLEARWHEEL-SUSANOW", series: "metal fight", type: "clearwheel", name: "스사노오", en: "Susanow", battleType: "attack", spin: "right", tags: [], desc: "날카로운 칼끝으로 상대의 공격을 받아넘긴다.", stats: [40, 20, 0] },
  { id: "CLEARWHEEL-KETOS", series: "metal fight", type: "clearwheel", name: "케토스", en: "Ketos", battleType: "defense", spin: "right", tags: [], desc: "두 개의 꼬리 지느러미가 적의 공격을 받아넘기며 충격을 흡수한다.", stats: [20, 40, 10] },
  { id: "CLEARWHEEL-BLAZE", series: "metal fight", type: "clearwheel", name: "블레이즈", en: "Blaze", battleType: "balance", spin: "right", tags: [], desc: "흔들거리는 불꽃의 형상이 적의 공격을 받아 흘리면서도 예측할 수 없는 불규칙한 연타 공격을 가한다.", stats: [30, 40, 0] },
  { id: "CLEARWHEEL-L-DRAGO-II", series: "metal fight", type: "clearwheel", name: "엘드라고Ⅱ", en: "L-Drago II", battleType: "attack", spin: "left", tags: [], desc: "유일하게 메테오 휠에 결합 가능한 좌회전 클리어휠. 위와 옆 방향에 위치한 고무가 적의 회전력을 흡수한다.", stats: [40, 10, 20], extraStats: [{ name: "흡수력", value: 40 }] },
  { id: "CLEARWHEEL-CHIMERA", series: "metal fight", type: "clearwheel", name: "키메라", en: "Chimera", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "CLEARWHEEL-HORUSEUS", series: "metal fight", type: "clearwheel", name: "호르세우스", en: "Horuseus", battleType: "defense", spin: "right", tags: [], desc: "부드러운 곡선으로 이루어진 큰 날개가 적의 공격을 받아넘긴다.", stats: [20, 40, 10] },
  { id: "CLEARWHEEL-KEEL", series: "metal fight", type: "clearwheel", name: "킬", en: "Keel", battleType: "attack", spin: "right", tags: [], desc: "용골 모양의 휠이 적에게 섬세한 연타공격을 가한다.", stats: [40, 10, 20] },
  { id: "CLEARWHEEL-HERCULEO", series: "metal fight", type: "clearwheel", name: "헤라클레오", en: "Herculeo", battleType: "attack", spin: "right", tags: [], desc: "사자의 갈기가 거침없이 어퍼공격을 가한다.", stats: [30, 20, 20] },
  { id: "CLEARWHEEL-BYXIS", series: "metal fight", type: "clearwheel", name: "픽시스", jpName: "빅시스", en: "Byxis", battleType: "attack", spin: "right", tags: [], desc: "바깥에 중심이 있어서 원심력을 발휘하면서 나침반 바늘로 적을 공격한다.", stats: [30, 10, 30] },
  { id: "CLEARWHEEL-REX", series: "metal fight", type: "clearwheel", name: "렉스", en: "Rex", battleType: "balance", spin: "right", tags: [], desc: "두개골은 어퍼공격을 가하고, 등뼈는 상대의 공격을 받아넘기는 효과를 발휘한다.", stats: [30, 30, 0] },
  { id: "CLEARWHEEL-PERSEUS-ATTACK", series: "metal fight", type: "clearwheel", name: "페르세우스 어택", en: "Perseus Attack", battleType: "attack", spin: "dual", tags: [], desc: "유일하게 그라비티 휠에 장착 가능한 양방향회전 휠. 미세한 흠이 적에게 연타공격을 가한다.", stats: [50, 20, 0] },
  { id: "CLEARWHEEL-PERSEUS-STAMINA", series: "metal fight", type: "clearwheel", name: "페르세우스 스테미너", en: "Perseus Stamina", battleType: "stamina", spin: "dual", tags: [], desc: "유일하게 그라비티 휠에 장착 가능한 양방향회전 휠. 중량을 바깥쪽으로 분산시켜 강력한 지구력을 발휘한다.", stats: [0, 20, 50] },
  { id: "CLEARWHEEL-L-DRAGO-II-RUSH", series: "metal fight", type: "clearwheel", name: "엘드라고Ⅱ 러시", en: "L-Drago II Rush", battleType: "attack", spin: "left", tags: [], desc: "유일하게 메테오 휠에 결합 가능한 좌회전 클리어휠. 울퉁불퉁한 요철로 둘러싸여 있어서 연타공격을 반복한다.", stats: [60, 20, 0] },
  { id: "CLEARWHEEL-L-DRAGO-II-ASSAULT", series: "metal fight", type: "clearwheel", name: "엘드라고Ⅱ 어썰트", en: "L-Drago II Assault", battleType: "attack", spin: "left", tags: [], desc: "유일하게 메테오 휠에 결합 가능한 좌회전 클리어휠. 바깥쪽으로 돌출된 커다란 머리 부분이 강력한 공격을 펼친다.", stats: [70, 0, 10] },
  { id: "CLEARWHEEL-KERBECS", series: "metal fight", type: "clearwheel", name: "켈베로스", jpName: "케르벡스", en: "Kerbecs", battleType: "stamina", spin: "right", tags: [], desc: "바깥 중심을 강화하고 3개의 쇠사슬이 연타공격을 끊임없이 반복한다.", stats: [20, 20, 30] },
  { id: "CLEARWHEEL-BEAFOWL", series: "metal fight", type: "clearwheel", name: "비폴", en: "Beafowl", battleType: "stamina", spin: "right", tags: [], desc: "공작의 날개와 같은 미세한 돌기가 적의 공격을 방어하며 뛰어난 지구력을 발휘한다.", stats: [0, 20, 50] },
  { id: "CLEARWHEEL-HOROGIUM", series: "metal fight", type: "clearwheel", name: "호로지움", jpName: "호로기움", en: "Horogium", battleType: "defense", spin: "right", tags: [], desc: "원판 모양의 휠이 적의 공격을 완벽하게 방어한다.", stats: [0, 70, 0] },
  { id: "CLEARWHEEL-PEGASIS-III", series: "metal fight", type: "4dclearwheel", name: "페가시스Ⅲ", en: "Pegasis III", battleType: "attack", spin: "right", tags: [], desc: "위쪽에 있는 갈기가 강한 공격을 펼치고 양쪽의 날개가 연타공격을 가한다.", stats: [60, 0, 10] },
  { id: "CLEARWHEEL-LEONE-II", series: "metal fight", type: "4dclearwheel", name: "레온Ⅱ", jpName: "레오네Ⅱ", en: "Leone II", battleType: "defense", spin: "right", tags: [], desc: "어떤 방향에서의 공격도 효율적으로 받아넘기고 카운터공격을 한다.", stats: [20, 50, 0] },
  { id: "CLEARWHEEL-LYNX", series: "metal fight", type: "4dclearwheel", name: "링크스", en: "Lynx", battleType: "balance", spin: "right", tags: [], desc: "살쾡이의 발톱이 상대를 공격하고 두 개의 커다란 날개가 상대의 공격을 방어한다.", stats: [25, 25, 20] },
  { id: "CLEARWHEEL-KRONOS", series: "metal fight", type: "4dclearwheel", name: "크로노스", en: "Kronos", battleType: "stamina", spin: "right", tags: [], desc: "토성의 고리를 모티브로 한 링과 크로노스가 소유한 큰 낫 모양의 휠이 지구력을 높인다.", stats: [10, 0, 60] },
  { id: "CLEARWHEEL-JUPITER", series: "metal fight", type: "4dclearwheel", name: "쥬피터", en: "Jupiter", battleType: "defense", spin: "right", tags: [], desc: "수많은 깃털 모양의 요철부분이 적의 공격을 흡수하여 방어한다.", stats: [0, 50, 20] },
  { id: "CLEARWHEEL-CROWN", series: "metal fight", type: "4dclearwheel", name: "크라운", en: "Crown", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [20, 0, 50] },
  { id: "CLEARWHEEL-FOX", series: "metal fight", type: "4dclearwheel", name: "폭스", en: "Fox", battleType: "balance", spin: "right", tags: [], desc: "", stats: [40, 10, 20] },
  { id: "CLEARWHEEL-LYRA", series: "metal fight", type: "4dclearwheel", name: "레이라", en: "Lyra", battleType: "defense", spin: "right", tags: [], desc: "", stats: [20, 50, 0] },
  { id: "CLEARWHEEL-IONIS", series: "metal fight", type: "4dclearwheel", name: "이오니스", en: "Ionis", battleType: "balance", spin: "right", tags: [], desc: "", stats: [20, 30, 20] },
  { id: "CLEARWHEEL-UNICORNO-II", series: "metal fight", type: "4dclearwheel", name: "유니콘Ⅱ", jpName: "유니코르노Ⅱ", en: "Unicorno II", battleType: "attack", spin: "right", tags: [], desc: "3개의 커다란 뿔로 상대에게 피해를 입힌다.", stats: [60, 0, 10] },
  { id: "CLEARWHEEL-ORION", series: "metal fight", type: "4dclearwheel", name: "오리온", en: "Orion", battleType: "stamina", spin: "right", tags: [], desc: "강한 원심력을 발휘하면서 돌기를 이용하여 상대를 공격한다.", stats: [10, 0, 60] },
  { id: "CLEARWHEEL-QUETZALCOATL", series: "metal fight", type: "4dclearwheel", name: "케찰코아틀", en: "Quetzalcoatl", battleType: "balance", spin: "right", tags: [], desc: "외부에 크게 펼쳐진 날개와 같은 모양으로 공격력과 지구력을 겸비하고 있다.", stats: [50, 0, 20] },
  { id: "CLEARWHEEL-URANUS", series: "metal fight", type: "4dclearwheel", name: "우라누스", en: "Uranus", battleType: "stamina", spin: "right", tags: [], desc: "외부에 중심을 둔 소용돌이 모양으로 원심력과 함께 외부 공격력도 겸비하고 있다.", stats: [40, 0, 40] },
  { id: "CLEARWHEEL-NEMESIS", series: "metal fight", type: "4dclearwheel", name: "네메시스", en: "Nemesis", battleType: "balance", spin: "right", tags: [], desc: "물이 흐르는 듯한 날개 모양으로 강한 원심력을 만들어 내면서 상대의 공격을 받아넘긴다.", stats: [10, 20, 40] },
  { id: "CLEARWHEEL-HADES", series: "metal fight", type: "4dclearwheel", name: "하데스", en: "Hades", battleType: "balance", spin: "right", tags: [], desc: "2개의 방패 모양 돌출부가 연타공격을 가하고 동시에 효과적인 방어를 수행한다.", stats: [30, 20, 20] },
  { id: "CLEARWHEEL-BEELZEB", series: "metal fight", type: "4dclearwheel", name: "베르제브", en: "Beelzeb", battleType: "attack", spin: "right", tags: [], desc: "", stats: [30, 30, 10] },
  { id: "CLEARWHEEL-DRAGONIS", series: "metal fight", type: "4dclearwheel", name: "드라고니스", en: "Dragonis", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "CLEARWHEEL-CYGNUS", series: "metal fight", type: "4dclearwheel", name: "시그너스", en: "Cygnus", battleType: "balance", spin: "right", tags: [], desc: "백조의 양 날개가 부드러운 곡선을 그리며 방어력을 강화한다.", stats: [10, 40, 20] },
  { id: "CLEARWHEEL-SAGITTARIO-II", series: "metal fight", type: "4dclearwheel", name: "사지타리오Ⅱ", en: "Sagittario II", battleType: "stamina", spin: "right", tags: [], desc: "4개의 화살촉이 균형있게 배치되어 최적의 지구력을 유지한다.", stats: [20, 10, 40] },
  { id: "WHEEL-PEGASIS", series: "metal fight", type: "wheel", name: "페가시스", en: "Pegasis", battleType: "attack", spin: "right", tags: [], desc: "3개의 날개가 강력한 공격력을 발휘한다.", stats: [50, 10, 10] },
  { id: "WHEEL-BULL", series: "metal fight", type: "wheel", name: "불", en: "Bull", battleType: "balance", spin: "right", tags: [], desc: "양쪽의 뿔이 상대를 밑에서 올려치는 어퍼공격과 상대의 공격을 가볍게 피하는 효과를 균형있게 발휘한다.", stats: [30, 20, 20] },
  { id: "WHEEL-SAGITTARIO", series: "metal fight", type: "wheel", name: "사지타리오", en: "Sagittario", battleType: "stamina", spin: "right", tags: [], desc: "중심에서 멀리 떨어져 있는 무거운 2개의 활 모양 날개가 회전력을 높인다.", stats: [10, 20, 40] },
  { id: "WHEEL-LEONE", series: "metal fight", type: "wheel", name: "레온", jpName: "레오네", en: "Leone", battleType: "defense", spin: "right", tags: [], desc: "무거운 중량으로 적의 공격을 무력화시킨다.", stats: [10, 40, 20] },
  { id: "WHEEL-QUETZALCOATL", series: "metal fight", type: "wheel", name: "케찰코아틀", en: "Quetzalcoatl", battleType: "attack", spin: "right", tags: [], desc: "어퍼와 스매시 쌍방의 특징을 함께 가진 초공격형 휠.", stats: [50, 10, 10] },
  { id: "WHEEL-WOLF", series: "metal fight", type: "wheel", name: "울프", jpName: "볼프", en: "Wolf", battleType: "balance", spin: "right", tags: [], desc: "위에서의 공격을 되받아치며 측면의 역방향으로 튀어나와있는 갈기로 연타공격을 가한다.", stats: [30, 30, 10] },
  { id: "WHEEL-ARIES", series: "metal fight", type: "wheel", name: "아리에스", en: "Aries", battleType: "defense", spin: "right", tags: [], desc: "6개의 강력한 뿔이 상대의 공격을 역으로 되받아친다.", stats: [20, 40, 10] },
  { id: "WHEEL-LIBRA", series: "metal fight", type: "wheel", name: "리브라", en: "Libra", battleType: "stamina", spin: "right", tags: [], desc: "원에 가까운 형태로 발군의 안정성을 자랑하고 지구력이 매우 뛰어나다.", stats: [10, 10, 50] },
  { id: "WHEEL-AQUARIO", series: "metal fight", type: "wheel", name: "아쿠아리오", en: "Aquario", battleType: "attack", spin: "right", tags: [], desc: "사방으로 펼쳐져 있는 물회오리들이 강력한 공격력을 발휘한다.", stats: [40, 20, 10] },
  { id: "WHEEL-VIRGO", series: "metal fight", type: "wheel", name: "비르고", en: "Virgo", battleType: "stamina", spin: "right", tags: [], desc: "무게중심을 바깥쪽에 배치하여 원심력과 함께 지구력이 뛰어나다.", stats: [20, 20, 40] },
  { id: "WHEEL-L-DRAGO", series: "metal fight", type: "wheel", name: "엘드라고", en: "L-Drago", battleType: "attack", spin: "left", tags: [], desc: "좌회전하는 세 마리 용이 완전히 새로운 공격을 이끌어낸다.", stats: [55, 10, 10] },
  { id: "WHEEL-ESCOLPIO", series: "metal fight", type: "wheel", name: "에스콜피오", en: "Escolpio", battleType: "defense", spin: "right", tags: [], desc: "외곽의 단단한 집게와 꼬리에 둘러싸인 몸체가 철벽 방어를 수행한다.", stats: [10, 60, 10] },
  { id: "WHEEL-PISCES", series: "metal fight", type: "wheel", name: "파이시즈", en: "Pisces", battleType: "stamina", spin: "right", tags: [], desc: "발군의 공격력과 지구력을 겸비. 상어처럼 거침없이 회전한다.", stats: [10, 20, 40] },
  { id: "WHEEL-GEMIOS", series: "metal fight", type: "wheel", name: "제미오스", en: "Gemios", battleType: "balance", spin: "right", tags: [], desc: "불꽃덩어리와 얼음덩어리가 번갈아가며 공격을 가한다.", stats: [20, 30, 20] },
  { id: "WHEEL-CAPRICORNE", series: "metal fight", type: "wheel", name: "카프리콘", jpName: "카프리코네", en: "Capricorne", battleType: "attack", spin: "right", tags: [], desc: "빙 둘러싼 뿔이 상대의 균형을 무너뜨린다.", stats: [20, 30, 20] },
  { id: "METALWHEEL-STORM", series: "metal fight", type: "metalwheel", name: "스톰", en: "Storm", battleType: "attack", spin: "right", tags: [], desc: "3개의 날개로 상대의 팽이를 벨 것 같은 강력한 공격력을 펼친다.", stats: [50, 10, 10] },
  { id: "METALWHEEL-ROCK", series: "metal fight", type: "metalwheel", name: "로크", jpName: "록", en: "Rock", battleType: "defense", spin: "right", tags: [], desc: "묵직한 중량을 가진 메탈휠로 적의 공격에도 끄떡없는 방어력을 자랑한다.", stats: [10, 40, 20] },
  { id: "METALWHEEL-FLAME", series: "metal fight", type: "metalwheel", name: "플레임", en: "Flame", battleType: "stamina", spin: "right", tags: [], desc: "4면에 장착된 무게추가 강한 원심력을 발생시킨다.", stats: [10, 20, 40] },
  { id: "METALWHEEL-DARK", series: "metal fight", type: "metalwheel", name: "다크", en: "Dark", battleType: "balance", spin: "right", tags: [], desc: "6개의 톱날로 적을 가르고, 6개의 다른 톱날은 적을 튕겨낸다.", stats: [30, 30, 10] },
  { id: "LIGHTWHEEL-MAD", series: "metal fight", type: "lightwheel", name: "매드", en: "Mad", battleType: "balance", spin: "right", tags: [], desc: "", stats: [20, 30, 20] },
  { id: "LIGHTWHEEL-HEAT", series: "metal fight", type: "lightwheel", name: "히트", en: "Heat", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [10, 20, 40] },
  { id: "LIGHTWHEEL-CLAY", series: "metal fight", type: "lightwheel", name: "클레이", en: "Clay", battleType: "defense", spin: "right", tags: [], desc: "", stats: [10, 40, 20] },
  { id: "LIGHTWHEEL-WIND", series: "metal fight", type: "lightwheel", name: "윈드", en: "Wind", battleType: "attack", spin: "right", tags: [], desc: "", stats: [40, 20, 10] },
  { id: "METALWHEEL-LIGHTNING", series: "metal fight", type: "metalwheel", name: "라이트닝", en: "Lightning", battleType: "attack", spin: "left", tags: [], desc: "어퍼와 연타공격이 가능하도록 3개의 톱날을 가진 다재다능한 공격형 휠.", stats: [60, 0, 0] },
  { id: "METALWHEEL-EARTH", series: "metal fight", type: "metalwheel", name: "어스", en: "Earth", battleType: "stamina", spin: "right", tags: [], desc: "커다란 날개의 중량이 바깥쪽으로 분배되어 강력한 원심력을 발휘한다.", stats: [10, 10, 50] },
  { id: "METALWHEEL-COUNTER", series: "metal fight", type: "metalwheel", name: "카운터", en: "Counter", battleType: "defense", spin: "right", tags: [], desc: "묵직한 중량으로 적의 공격을 막아내고 기존 레온의 힘을 이어받았다.", stats: [10, 40, 10] },
  { id: "METALWHEEL-KILLER", series: "metal fight", type: "metalwheel", name: "키라", en: "Killer", battleType: "balance", spin: "right", tags: [], desc: "윗면은 상대의 공격을 가볍게 받아넘기고 바닥면은 공격을 하는 이면성을 가지고 있다.", stats: [40, 20, 10] },
  { id: "METALWHEEL-CYBER", series: "metal fight", type: "metalwheel", name: "사이버", en: "Cyber", battleType: "attack", spin: "right", tags: [], desc: "강력한 공격력을 만드는 3개의 날개를 가지고 있고 기존 페가시스의 힘을 이어받았다.", stats: [40, 10, 10] },
  { id: "METALWHEEL-THERMAL", series: "metal fight", type: "metalwheel", name: "써멀", en: "Thermal", battleType: "stamina", spin: "right", tags: [], desc: "공기의 저항을 최대한 줄여 거침없이 오랜 시간 동안 회전한다.", stats: [20, 10, 40] },
  { id: "METALWHEEL-BURN", series: "metal fight", type: "metalwheel", name: "번", en: "Burn", battleType: "stamina", spin: "right", tags: [], desc: "중심부의 무게를 최대한 바깥쪽으로 이동시켜 원심력을 강화하였다.", stats: [10, 20, 40] },
  { id: "METALWHEEL-POISON", series: "metal fight", type: "metalwheel", name: "포이즌", en: "Poison", battleType: "balance", spin: "right", tags: [], desc: "방패 모양의 블록으로 적의 공격을 방어하면서 15개의 날개로 빈틈없는 연타공격을 한다.", stats: [30, 30, 10] },
  { id: "METALWHEEL-MERCURY", series: "metal fight", type: "metalwheel", name: "머큐리", en: "Mercury", battleType: "attack", spin: "right", tags: [], desc: "", stats: [60, 10, 0] },
  { id: "METALWHEEL-INFINITY", series: "metal fight", type: "metalwheel", name: "인피니티", en: "Infinity", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [10, 10, 40] },
  { id: "METALWHEEL-GALAXY", series: "metal fight", type: "metalwheel", name: "갤럭시", en: "Galaxy", battleType: "attack", spin: "right", tags: [], desc: "굴곡이 있는 3개의 커다란 날개가 강력한 연타공격을 발휘한다.", stats: [60, 10, 0] },
  { id: "METALWHEEL-RAY", series: "metal fight", type: "metalwheel", name: "레이", en: "Ray", battleType: "attack", spin: "right", tags: [], desc: "9개의 돌출된 형태의 휠이 상대에게 강력한 연타공격을 한다.", stats: [40, 10, 20] },
  { id: "METALWHEEL-GRAVITY", series: "metal fight", type: "metalwheel", name: "그라비티", en: "Gravity", battleType: "defense", spin: "dual", tags: [], desc: "양방향회전에 대응하는 휠. 두꺼운 등껍질로 상대의 공격을 방어하고 카운터공격을 한다.", stats: [20, 50, 0] },
  { id: "METALWHEEL-BAKUSHIN", series: "metal fight", type: "metalwheel", name: "폭신", jpName: "바쿠신", en: "Bakushin", battleType: "attack", spin: "right", tags: [], desc: "큰 경사를 살려 상대의 중심부 깊숙이 침투해 강렬한 공격을 가한다.", stats: [40, 30, 0] },
  { id: "METALWHEEL-GRAND", series: "metal fight", type: "metalwheel", name: "그랜드", en: "Grand", battleType: "defense", spin: "right", tags: [], desc: "묵직한 중량의 휠로 상대의 공격에도 끄떡없이 흔들리지 않는 방어력을 보여준다.", stats: [20, 40, 10] },
  { id: "METALWHEEL-SOL", series: "metal fight", type: "metalwheel", name: "솔", en: "Sol", battleType: "balance", spin: "right", tags: [], desc: "측면은 벽처럼 적의 공격을 막지만 조금이라도 각도가 기울면 연타공격을 가한다.", stats: [40, 30, 0] },
  { id: "METALWHEEL-METEO", series: "metal fight", type: "metalwheel", name: "메테오", en: "Meteo", battleType: "attack", spin: "left", tags: [], desc: "용의 아랫턱은 일격필살의 공격을, 발톱은 연타공격을 가한다.", stats: [50, 10, 10] },
  { id: "METALWHEEL-DIVINE", series: "metal fight", type: "metalwheel", name: "디바인", en: "Divine", battleType: "balance", spin: "right", tags: [], desc: "", stats: [30, 30, 10] },
  { id: "METALWHEEL-VULCAN", series: "metal fight", type: "metalwheel", name: "발칸", en: "Vulcan", battleType: "defense", spin: "right", tags: [], desc: "역사다리꼴로 솟아오른 두 개의 큰 날개가 적의 공격으로부터 몸체를 보호한다.", stats: [20, 40, 10] },
  { id: "METALWHEEL-TORNADO", series: "metal fight", type: "metalwheel", name: "토네이도", en: "Tornado", battleType: "attack", spin: "right", tags: [], desc: "톱날 모양의 5개의 날개가 적에게 강한 피해를 입힌다.", stats: [50, 10, 10] },
  { id: "METALWHEEL-NIGHTMARE", series: "metal fight", type: "metalwheel", name: "나이트메어", en: "Nightmare", battleType: "balance", spin: "right", tags: [], desc: "티라노사우루스의 강인한 꼬리를 형상화한 위협적인 24연타 메탈휠.", stats: [40, 40, 0] },
  { id: "METALWHEEL-HELL", series: "metal fight", type: "metalwheel", name: "헬", en: "Hell", battleType: "stamina", spin: "right", tags: [], desc: "기존의 메탈휠 중에서 가장 넓은 메탈휠로 강력한 공격력과 지구력을 겸비.", stats: [30, 0, 40] },
  { id: "METALWHEEL-SCREW", series: "metal fight", type: "metalwheel", name: "스크류", en: "Screw", battleType: "attack", spin: "right", tags: [], desc: "볼륨 있는 곡선 모양의 3개의 날개가 강력한 어퍼공격을 반복한다.", stats: [55, 10, 5] },
  { id: "METALWHEEL-BASALT", series: "metal fight", type: "metalwheel", name: "바셀트", jpName: "바살트", en: "Basalt", battleType: "defense", spin: "right", tags: [], desc: "중심이 기울어져 있어 지구력은 없지만 굉장히 무거워서 방어능력이 뛰어나다.", stats: [0, 70, 0] },
  { id: "METALWHEEL-BIG-BANG", series: "metal fight", type: "4dmetalwheel", name: "빅뱅", en: "Big Bang", battleType: "attack", spin: "right", tags: [], desc: "PC프레임과 코어의 각도를 달리하여 4가지의 공격모드로 전환이 가능하다.", stats: [60, 0, 10] },
  { id: "METALWHEEL-FANG", series: "metal fight", type: "4dmetalwheel", name: "팡", en: "Fang", battleType: "defense", spin: "right", tags: [], desc: "메탈휠을 뒤집어서 디펜스모드와 카운터공격모드로 전환한다.", stats: [20, 50, 0] },
  { id: "METALWHEEL-L-DRAGO-DESTROY", series: "metal fight", type: "4dmetalwheel", name: "엘드라고 디스트로이", en: "L-Drago Destroy", battleType: "attack", spin: "left", tags: [], desc: "메탈휠과 코어의 재조합으로 공격모드와 흡수모드로 전환이 가능하다.", stats: [60, 0, 10], extraStats: [{ name: "흡수력", value: 40 }] },
  { id: "METALWHEEL-BEAT", series: "metal fight", type: "4dmetalwheel", name: "비트", en: "Beat", battleType: "balance", spin: "right", tags: [], desc: "PC프레임의 방향을 바꾸면 공격모드와 방어모드의 2가지 모드로 전환된다.", stats: [25, 25, 20] },
  { id: "METALWHEEL-SCYTHE", series: "metal fight", type: "4dmetalwheel", name: "사이즈", en: "Scythe", battleType: "stamina", spin: "right", tags: [], desc: "PC프레임을 잠글 때는 공격모드, 자유회전시킬 때는 스테미너모드의 2가지 모드로 전환된다.", stats: [20, 0, 50] },
  { id: "METALWHEEL-VARIARES", series: "metal fight", type: "4dmetalwheel", name: "베리아레스", jpName: "바리아레스", en: "Variares", battleType: "defense", spin: "dual", tags: [], desc: "고속회전시에는 공격모드, 저회전시에는 방어모드의 2개 모드로 자동전환한다.", stats: [10, 60, 0] },
  { id: "METALWHEEL-JADE", series: "metal fight", type: "4dmetalwheel", name: "제이드", en: "Jade", battleType: "defense", spin: "right", tags: [], desc: "쇠구슬이 내장된 메탈프레임을 회전시켜 방어모드와 스테미너모드의 2가지 모드로 전환한다.", stats: [0, 50, 20] },
  { id: "METALWHEEL-FORBIDDEN", series: "metal fight", type: "4dmetalwheel", name: "포비든", en: "Forbidden", battleType: "balance", spin: "right", tags: [], desc: "", stats: [30, 0, 40] },
  { id: "METALWHEEL-BLITZ", series: "metal fight", type: "4dmetalwheel", name: "브릿츠", en: "Blitz", battleType: "attack", spin: "right", tags: [], desc: "메탈프레임과 코어의 각도를 바꿔줌에 따라 3개의 날개 강습모드와 6개의 날개 연타모드로 전환된다.", stats: [60, 10, 0] },
  { id: "METALWHEEL-PHANTOM", series: "metal fight", type: "4dmetalwheel", name: "팬텀", en: "Phantom", battleType: "stamina", spin: "right", tags: [], desc: "PC프레임을 뒤집어 장착하면 지구모드와 공격모드로 전환이 가능하다.", stats: [20, 0, 50] },
  { id: "METALWHEEL-DEATH", series: "metal fight", type: "4dmetalwheel", name: "데쓰", jpName: "데스", en: "Death", battleType: "balance", spin: "right", tags: [], desc: "거대한 벽과 같은 중압감으로 뒤집으면 공격모드와 방어모드로 전환된다.", stats: [40, 30, 0] },
  { id: "METALWHEEL-DUO", series: "metal fight", type: "4dmetalwheel", name: "듀오", en: "Duo", battleType: "stamina", spin: "right", tags: [], desc: "메탈프레임의 중심밸런스를 바꿔낌에 따라 지구모드와 공격모드로 전환이 가능하다.", stats: [30, 40, 0] },
  { id: "METALWHEEL-WING", series: "metal fight", type: "4dmetalwheel", name: "윙", en: "Wing", battleType: "attack", spin: "right", tags: [], desc: "메탈프레임과 코어 각도를 바꿈으로써 3가지 공격력모드로 전환이 가능하다.", stats: [60, 10, 0] },
  { id: "METALWHEEL-L-DRAGO-GUARDIAN", series: "metal fight", type: "4dmetalwheel", name: "엘드라고 가디언", en: "L-Drago Guardian", battleType: "defense", spin: "left", tags: [], desc: "갑옷을 씌운 메탈프레임과 코어의 조립으로 방어력이 높은 공격모드와 흡수모드의 전환이 가능하다.", stats: [30, 40, 0] },
  { id: "METALWHEEL-DIABLO", series: "metal fight", type: "4dmetalwheel", name: "디아블로", en: "Diablo", battleType: "balance", spin: "right", tags: [], desc: "메탈프레임과 코어의 재조합으로 메탈프레임이 고정되는 공격모드와 자유회전하는 극한의밸런스모드의 2가지 패턴으로 모드 전환이 가능하다.", stats: [40, 20, 10] },
  { id: "METALWHEEL-FUSION", series: "metal fight", type: "4dmetalwheel", name: "퓨전", en: "Fusion", battleType: "balance", spin: "right", tags: [], desc: "메탈휠과 러버휠을 반전하여 전환하면 방어모드와 밸런스모드로 전환된다.", stats: [20, 30, 20] },
  { id: "METALWHEEL-CRASH", series: "metal fight", type: "metalwheel", name: "크래시", en: "Crash", battleType: "balance", spin: "right", tags: [], desc: "", stats: [30, 20, 10] },
  { id: "METALWHEEL-CLOUD", series: "metal fight", type: "metalwheel", name: "클라우드", en: "Cloud", battleType: "defense", spin: "right", tags: [], desc: "", stats: [10, 30, 20] },
  { id: "METALWHEEL-OMEGA", series: "metal fight", type: "4dmetalwheel", name: "오메가", en: "Omega", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "METALWHEEL-KREIS", series: "metal fight", type: "4dmetalwheel", name: "크라이스", en: "Kreis", battleType: "defense", spin: "right", tags: [], desc: "백조가 날개짓하듯 방어하는 방어모드와 날개를 고정한 채 공격하는 공격모드로 전환한다.", stats: [10, 50, 10] },
  { id: "METALWHEEL-FLASH", series: "metal fight", type: "4dmetalwheel", name: "플래시", en: "Flash", battleType: "stamina", spin: "right", tags: [], desc: "2개의 활과 화살이 중심과 균형을 잡아 원형 상태에서는 지구력을 발휘하고, 타원형 상태에서는 강력한 타격을 적에게 가한다.", stats: [20, 10, 40] },
  { id: "STONEFACE-IFRAID", series: "metal fight", type: "stoneface", name: "이프레이드", en: "Ifraid", tags: [], desc: "이프레이드를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-SARAMANDA", series: "metal fight", type: "stoneface", name: "사라만다", en: "Saramanda", tags: [], desc: "사라만다를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-OROJYA", series: "metal fight", type: "stoneface", name: "오로자", en: "Orojya", tags: [], desc: "오로자를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-PHOENIC", series: "metal fight", type: "stoneface", name: "피닉", en: "Phoenic", tags: [], desc: "피닉을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-REVIZER", series: "metal fight", type: "stoneface", name: "리바이저", en: "Revizer", tags: [], desc: "리바이저를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GRYPH", series: "metal fight", type: "stoneface", name: "그리프", en: "Gryph", tags: [], desc: "그리프를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-KRAKEN", series: "metal fight", type: "stoneface", name: "크라켄", en: "Killerken", tags: [], desc: "크라켄을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-METAL-STONE-FACE-CUSTOM", series: "metal fight", type: "stoneface", name: "메탈스톤페이스 커스텀 Ver.", jpName: "메탈스톤페이스 개조 Ver.", en: "Metal Stone Face Custom Ver.", tags: [], desc: "스톤페이스의 강화판. 무거워진 중량이 공격력과 방어력을 향상시킨다.", modes: [{ name: "헤비", stats: [60, 60, 0] }, { name: "미들", stats: [50, 50, 10] }, { name: "라이트", stats: [40, 40, 20] }, { name: "페더", stats: [30, 30, 30] }] },
  { id: "STONEFACE-DRAGOON", series: "metal fight", type: "stoneface", name: "드래곤", jpName: "드라군", en: "Dragooon", tags: [], desc: "드래곤을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GARGOYLE", series: "metal fight", type: "stoneface", name: "가고일", jpName: "가골", en: "Gargole", tags: [], desc: "가고일을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GOREIM", series: "metal fight", type: "stoneface", name: "골렘", jpName: "고레임", en: "Goreim", tags: [], desc: "골렘을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GENBULL", series: "metal fight", type: "stoneface", name: "겐블", en: "Genbull", tags: [], desc: "겐블을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-BEGIRADOS", series: "metal fight", type: "stoneface", name: "베기라도스", en: "Begirados", tags: [], desc: "베기라도스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-BALRO", series: "metal fight", type: "stoneface", name: "발록", jpName: "발로", en: "Balro", tags: [], desc: "발록을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-GIRAGO", series: "metal fight", type: "stoneface", name: "지라고", en: "Girago", tags: [], desc: "지라고를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-WYVANG", series: "metal fight", type: "stoneface", name: "와이번", en: "Wyvang", tags: [], desc: "와이번을 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-PEGASIS", series: "metal fight", type: "stoneface", name: "페가시스", en: "Pegasis", tags: [], desc: "페가시스를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "STONEFACE-BAHAMDIA", series: "metal fight", type: "stoneface", name: "바함디아", en: "Bahamdia", tags: [], desc: "바함디아를 상징하는 그림이 그려져 있으며 본체를 고정시킨다.", stats: [30, 30, 30] },
  { id: "CRYSTALWHEEL-WARRIORS", series: "metal fight", type: "crystalwheel", name: "워리어스", jpName: "사무라이", en: "Warriors", battleType: "attack", spin: "right", tags: [], desc: "가장자리의 날개로 적을 공격한다.", stats: [60, 0, 10] },
  { id: "CRYSTALWHEEL-SHINOBI", series: "metal fight", type: "crystalwheel", name: "시노비", en: "Shinobi", battleType: "balance", spin: "right", tags: [], desc: "4개의 날개가 균형있게 배치되어 지구력을 만들며 공격력도 뛰어나다.", stats: [30, 20, 20] },
  { id: "CRYSTALWHEEL-PIRATES", series: "metal fight", type: "crystalwheel", name: "파이레츠", en: "Pirates", battleType: "stamina", spin: "right", tags: [], desc: "갈고리 모양의 돌기가 방어력과 지구력을 상승시킨다.", stats: [10, 30, 30] },
  { id: "CRYSTALWHEEL-THIEF", series: "metal fight", type: "crystalwheel", name: "시프", en: "Thief", battleType: "attack", spin: "right", tags: [], desc: "줄지어 늘어선 칼날 모양이 원심력을 만들고 연타공격을 한다.", stats: [30, 10, 30] },
  { id: "CRYSTALWHEEL-GUARDIAN", series: "metal fight", type: "crystalwheel", name: "가디언", en: "Guardian", battleType: "defense", spin: "right", tags: [], desc: "방패를 둘러싼 파도 모양의 돌기가 적의 공격을 받아넘긴다.", stats: [10, 40, 20] },
  { id: "CRYSTALWHEEL-ARCHER", series: "metal fight", type: "crystalwheel", name: "아처", en: "Archer", battleType: "balance", spin: "right", tags: [], desc: "활과 화살의 형상으로 적의 공격을 방어, 기울어진 중심과 바람구멍이 예측불가능한 의외의 공격을 만든다.", stats: [40, 30, 0] },
  { id: "CRYSTALWHEEL-DARK-KNIGHT", series: "metal fight", type: "crystalwheel", name: "다크나이트", en: "Dark Knight", battleType: "attack", spin: "right", tags: [], desc: "방패의 톱니로 연타공격을 만들고 거대한 창으로 적을 제압한다.", stats: [50, 10, 10] },
  { id: "CRYSTALWHEEL-BANDID", series: "metal fight", type: "crystalwheel", name: "반디드", en: "Bandid", battleType: "defense", spin: "right", tags: [], desc: "바깥쪽으로 향해 있는 경사면이 적의 공격을 받아넘긴다.", stats: [10, 50, 10] },
  { id: "CRYSTALWHEEL-BERSERKER", series: "metal fight", type: "crystalwheel", name: "버서커", en: "Berserker", battleType: "stamina", spin: "right", tags: [], desc: "양끝에 배치된 철구슬과 쇠사슬이 바깥중심이 되어 원심력을 강화한다.", stats: [30, 0, 40] },
  { id: "CRYSTALWHEEL-GLADIATOR", series: "metal fight", type: "crystalwheel", name: "글레디에이터", en: "Gladiator", battleType: "attack", spin: "right", tags: [], desc: "사방으로 향하는 검이 회전함으로써 공격과 방어를 하나로 묶는다.", stats: [30, 20, 10] },
  { id: "CHROMEWHEEL-IFRAID", series: "metal fight", type: "chromewheel", name: "이프레이드", en: "Ifraid", battleType: "attack", spin: "right", tags: [], desc: "커다란 2개의 날개로 연타공격을 한다.", stats: [50, 10, 10] },
  { id: "CHROMEWHEEL-SARAMANDA", series: "metal fight", type: "chromewheel", name: "사라만다", en: "Saramanda", battleType: "balance", spin: "right", tags: [], desc: "지느러미 모양의 돌기가 폭풍과 같은 연타공격을 가한다.", stats: [40, 20, 10] },
  { id: "CHROMEWHEEL-OROJYA", series: "metal fight", type: "chromewheel", name: "오로자", en: "Orojya", battleType: "stamina", spin: "right", tags: [], desc: "6마리의 뱀을 형상화한 휠의 끝부분이 바깥중심이 되어 강한 원심력을 만든다.", stats: [10, 20, 40] },
  { id: "CHROMEWHEEL-PHOENIC", series: "metal fight", type: "chromewheel", name: "피닉", en: "Phoenic", battleType: "attack", spin: "right", tags: [], desc: "3개의 큰 날개로 강력한 공격을 만들어낸다.", stats: [40, 20, 10] },
  { id: "CHROMEWHEEL-REVIZER", series: "metal fight", type: "chromewheel", name: "리바이저", en: "Revizer", battleType: "defense", spin: "right", tags: [], desc: "휠 바깥둘레의 매끄러운 높은 벽으로 적의 공격을 받아넘겨 방어한다.", stats: [10, 40, 20] },
  { id: "CHROMEWHEEL-GRYPH", series: "metal fight", type: "chromewheel", name: "그리프", en: "Gryph", battleType: "balance", spin: "right", tags: [], desc: "5개의 날개로 강습연타공격이 가능하고 동시에 방어력이 뛰어난 휠.", stats: [35, 35, 0] },
  { id: "CHROMEWHEEL-KILLERKEN", series: "metal fight", type: "chromewheel", name: "크라켄", en: "Killerken", battleType: "defense", spin: "right", tags: [], desc: "8개의 커다란 다리가 테두리에 위치하여 적의 공격으로부터 몸체를 보호한다.", stats: [10, 50, 10] },
  { id: "CHROMEWHEEL-DRAGOOON", series: "metal fight", type: "chromewheel", name: "드래곤", jpName: "드라군", en: "Dragooon", battleType: "attack", spin: "right", tags: [], desc: "중심이 기울어지도록 배치된 3마리의 용이 연타공격을 만들어내고, 적의 회전력을 약화시킨다.", stats: [60, 5, 5] },
  { id: "CHROMEWHEEL-GARGOLE", series: "metal fight", type: "chromewheel", name: "가고일", jpName: "가골", en: "Gargole", battleType: "attack", spin: "right", tags: [], desc: "좌우의 날개에 있는 틈 사이로 바람을 일으켜 회전력이 상승하고 회전공격을 퍼붓는다.", stats: [40, 10, 20] },
  { id: "CHROMEWHEEL-GOREIM", series: "metal fight", type: "chromewheel", name: "골렘", jpName: "고레임", en: "Goreim", battleType: "defense", spin: "right", tags: [], desc: "갑옷으로 둘러싸인 몸체와 사다리 모양의 휠이 철벽방어를 자랑한다.", stats: [10, 40, 20] },
  { id: "CHROMEWHEEL-BEGIRADOS", series: "metal fight", type: "chromewheel", name: "베기라도스", en: "Begirados", battleType: "stamina", spin: "right", tags: [], desc: "강력한 원심력과 지구력을 자랑한다.", stats: [20, 10, 40] },
  { id: "CHROMEWHEEL-GENBULL", series: "metal fight", type: "chromewheel", name: "겐블", en: "Genbull", battleType: "stamina", spin: "right", tags: [], desc: "강고한 대칭의 등껍질이 원심력을 만들어내 지구력을 더한다.", stats: [10, 20, 40] },
  { id: "CHROMEWHEEL-BALRO", series: "metal fight", type: "chromewheel", name: "발록", jpName: "발로", en: "Balro", battleType: "balance", spin: "right", tags: [], desc: "", stats: [30, 30, 10] },
  { id: "CHROMEWHEEL-GIRAGO", series: "metal fight", type: "chromewheel", name: "지라고", en: "Girago", battleType: "attack", spin: "right", tags: [], desc: "", stats: [50, 10, 10] },
  { id: "CHROMEWHEEL-WYVANG", series: "metal fight", type: "chromewheel", name: "와이번", en: "Wyvang", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [0, 20, 50] },
  { id: "CHROMEWHEEL-PEGASIS", series: "metal fight", type: "chromewheel", name: "페가시스", en: "Pegasis", battleType: "attack", spin: "right", tags: [], desc: "3장의 크게 튀어나온 날개로 강렬한 공격을 연달아 가하고 적을 추격한다.", stats: [60, 10, 0] },
  { id: "CHROMEWHEEL-BAHAMDIA", series: "metal fight", type: "chromewheel", name: "바함디아", en: "Bahamdia", battleType: "balance", spin: "right", tags: [], desc: "베이 사상 최대급 직경을 가진 크롬휠. 막강한 원심력을 무기로 상대에게 달려든다.", stats: [30, 10, 30] },
  { id: "TRACK-105", series: "metal fight", type: "track", name: "105", en: "105", tags: [], desc: "10.5mm 높이의 트랙. 아래에서의 어퍼공격이 가능하다.", stats: [10, 4, 5] },
  { id: "TRACK-145", series: "metal fight", type: "track", name: "145", en: "145", tags: [], desc: "14.5mm 높이의 트랙. 위에서의 스매시공격이 가능하다.", stats: [4, 12, 9] },
  { id: "TRACK-CLAW-145", series: "metal fight", type: "track", name: "C145", en: "Claw 145", sub: "클로145", tags: [], desc: "자유롭게 움직이는 발톱이 회전력에 의해 펼쳐지며 원심력을 증가시킨다.", stats: [3, 15, 8] },
  { id: "TRACK-HORN-145", series: "metal fight", type: "track", name: "H145", en: "Horn 145", sub: "혼145", tags: [], desc: "4개의 날카로운 톱날이 낮은 위치의 적을 공격하고 6개의 평평한 톱날이 적의 공격을 효율적으로 방어한다.", stats: [12, 7, 5] },
  { id: "TRACK-125", series: "metal fight", type: "track", name: "125", en: "125", tags: [], desc: "12.5mm 높이의 트랙. 위와 아래 양방향으로 공격과 방어가 가능하다.", stats: [7, 8, 7] },
  { id: "TRACK-90", series: "metal fight", type: "track", name: "90", en: "90", tags: [], desc: "90mm 높이의 트랙. 극단적으로 낮은 위치에서의 공격이 가능하다.", stats: [12, 3, 4] },
  { id: "TRACK-DEFENSE-125", series: "metal fight", type: "track", name: "D125", en: "Defense 125", sub: "디펜스125", tags: [], desc: "측면에 있는 커다란 고리로 상대방이 밑에서 공격하는 것을 방어한다!", stats: [7, 9, 7] },
  { id: "TRACK-DOWN-FORCE-145", series: "metal fight", type: "track", name: "DF145", en: "Down Force 145", sub: "다운포스145", tags: [], desc: "4개의 날개가 다운포스를 발생시켜 지면에 강하게 접지하고 안정된 회전을 발휘한다.", stats: [5, 8, 12] },
  { id: "TRACK-100", series: "metal fight", type: "track", name: "100", en: "100", tags: [], desc: "10mm 높이의 트랙. 매우 낮은 위치에서 어퍼공격이 가능하다.", stats: [11, 4, 5] },
  { id: "TRACK-WIDE-DEFENSE-145", series: "metal fight", type: "track", name: "WD145", en: "Wide Defense 145", sub: "와이드디펜스145", tags: [], desc: "돌기가 달린 3개의 날개가 측면에서의 공격을 보호한다.", stats: [4, 13, 8] },
  { id: "TRACK-CHANGE-HEIGHT-120", series: "metal fight", type: "track", name: "CH120", en: "Change Height 120", sub: "체인지하이트120", tags: [], desc: "휠, 버텀과 조합한 상태로 배틀 상황에 따라 120과 145의 높이를 조절할 수 있다.", stats: [8, 8, 8] },
  { id: "TRACK-ETERNAL-DEFENSE-145", series: "metal fight", type: "track", name: "ED145", en: "Eternal Defense 145", sub: "이터널디펜스145", tags: [], desc: "자유롭게 회전하는 방패가 밑에서의 공격을 받아넘겨서 충격을 완화시킨다.", stats: [4, 14, 8] },
  { id: "TRACK-TORNADO-125", series: "metal fight", type: "track", name: "T125", en: "Tornado 125", sub: "토네이도125", tags: [], desc: "다운포스와 원심력이 균형있게 조화되어 낮은 위치에서 적을 공격한다.", stats: [5, 7, 12] },
  { id: "TRACK-MOVEMENT-145", series: "metal fight", type: "track", name: "M145", en: "Movement 145", sub: "무브먼트145", tags: [], desc: "축의 중심을 어긋나게 하여 불규칙한 움직임으로 점프공격을 한다.", stats: [12, 4, 5] },
  { id: "TRACK-135", series: "metal fight", type: "track", name: "135", en: "135", tags: [], desc: "13.5mm 높이의 트랙. 위에서의 스매시공격에 유리하면서도 균형이 잡혀 있다.", stats: [6, 9, 8] },
  { id: "TRACK-GRAVITY-BALL-145", series: "metal fight", type: "track", name: "GB145", en: "Gravity Ball 145", sub: "그라비티볼145", tags: [], desc: "고속회전시 쇠구슬이 바깥쪽으로 이동하여 강력한 원심력을 만들고, 저속회전시 안쪽으로 이동하여 회전력을 발생시킨다.", stats: [4, 15, 9] },
  { id: "TRACK-SWITCH-145", series: "metal fight", type: "track", name: "SW145", en: "Switch 145", sub: "스위치145", tags: [], desc: "날개의 윗면과 아랫면을 뒤집으면 공격과 방어의 2가지 타입으로 전환된다.", stats: [8, 8, 8] },
  { id: "TRACK-85", series: "metal fight", type: "track", name: "85", en: "85", tags: [], desc: "지면에 달라붙은 초저중심 트랙으로 어퍼공격이 가능하다.", stats: [12, 3, 4] },
  { id: "TRACK-WING-105", series: "metal fight", type: "track", name: "W105", en: "Wing 105", sub: "윙105", tags: [], desc: "낮은 중심으로 다운포스를 가능하게 하여 접지력을 향상시킨다.", stats: [7, 7, 8] },
  { id: "TRACK-WING-ATTACK-130", series: "metal fight", type: "track", name: "WA130", en: "Wing Attack 130", sub: "윙어택130", tags: [], desc: "자유롭게 회전하는 날개가 낮은 위치의 적에게 공격을 한다.", stats: [11, 5, 6] },
  { id: "TRACK-RUBBER-145", series: "metal fight", type: "track", name: "R145", en: "Rubber 145", sub: "러버145", tags: [], desc: "고무 소재의 날개가 적의 공격을 흡수하여 피해를 줄여준다.", stats: [4, 14, 7] },
  { id: "TRACK-ARMOR-DEFENSE-145", series: "metal fight", type: "track", name: "AD145", en: "Armor Defense 145", sub: "아머디펜스145", tags: [], desc: "갑옷으로 감싸져 있어 상대의 공격에도 피해를 쉽게 받지 않는다.", stats: [4, 14, 8] },
  { id: "TRACK-SHIELD-130", series: "metal fight", type: "track", name: "S130", en: "Shield 130", sub: "실드130", tags: [], desc: "저중심인 동시에 옆으로 뻗은 방패로 적의 공격을 효과적으로 방어한다.", stats: [5, 13, 7] },
  { id: "TRACK-VARIABLE-145", series: "metal fight", type: "track", name: "V145", en: "Variable 145", sub: "베리어블145", tags: [], desc: "날개의 각도를 전환하여 공격과 방어를 전환할 수 있다.", stats: [8, 8, 8] },
  { id: "TRACK-LEFT-WING-105", series: "metal fight", type: "track", name: "LW105", en: "Left Wing 105", sub: "레프트윙105", tags: [], desc: "3개의 날개를 갖고 있는 낮은 중심의 트랙으로 좌회전시 다운포스를 발휘한다.", stats: [7, 7, 8] },
  { id: "TRACK-TRIPLE-ROLLER-145", series: "metal fight", type: "track", name: "TR145", en: "Triple Roller 145", sub: "트리플롤러145", tags: [], desc: "", stats: [8, 8, 8] },
  { id: "TRACK-230", series: "metal fight", type: "track", name: "230", en: "230", tags: [], desc: "23mm 높이의 트랙. 휠이 직접적인 공격을 받지 않을 정도의 높이를 자랑한다.", stats: [3, 12, 10] },
  { id: "TRACK-130", series: "metal fight", type: "track", name: "130", en: "130", tags: [], desc: "13mm 높이의 트랙. 위에서 아래로 공격하는 스매시공격을 가한다.", stats: [8, 7, 7] },
  { id: "TRACK-DOWN-FORCE-105", series: "metal fight", type: "track", name: "DF105", en: "Down Force 105", sub: "다운포스105", tags: [], desc: "4개의 날개가 좌회전시 강력한 다운포스를 발생시킨다.", stats: [6, 7, 9] },
  { id: "TRACK-BOOST-DISK-145", series: "metal fight", type: "track", name: "BD145", en: "Boost Disk 145", sub: "부스트디스크145", tags: [], desc: "거대한 원형 부품이 적의 공격을 방어하면서 지구력을 증가시키고 휠과 합체할 수 있다!", stats: [4, 15, 10] },
  { id: "TRACK-UPPER-WING-145", series: "metal fight", type: "track", name: "UW145", en: "Upper Wing 145", sub: "어퍼윙145", tags: [], desc: "날개의 방향을 바꾸어 장착하면 공격과 방어의 2가지 타입으로 전환된다.", stats: [8, 8, 8] },
  { id: "TRACK-TRIPLE-HEIGHT-170", series: "metal fight", type: "track", name: "TH170", en: "Triple Height 170", sub: "트리플하이토이170", tags: [], desc: "배틀 상대에 따라 3단계로 높이를 조절한다.", stats: [0, 0, 0] },
  { id: "TRACK-WING-145", series: "metal fight", type: "track", name: "W145", en: "Wing 145", sub: "윙145", tags: [], desc: "강력한 다운포스를 발생시켜 안정된 자세를 유지한다.", stats: [0, 0, 0] },
  { id: "TRACK-160", series: "metal fight", type: "track", name: "160", en: "160", tags: [], desc: "16mm 높이의 트랙. 요철이 적은 표면으로 적의 공격을 막는다.", stats: [0, 0, 0] },
  { id: "TRACK-ELEVATOR-230", series: "metal fight", type: "track", name: "E230", en: "Elevator 230", sub: "엘리베이터230", tags: [], desc: "고리 부분이 위아래로 움직이며 회전 속도를 제어한다.", stats: [0, 0, 0] },
  { id: "TRACK-ARMOR-230", series: "metal fight", type: "track", name: "A230", en: "Armor 230", sub: "아머230", tags: [], desc: "휠의 공격을 방어하는 갑옷이 결합되어 직접타격에 잘 견딘다.", stats: [0, 0, 0] },
  { id: "TRACK-LEFT-WING-160", series: "metal fight", type: "track", name: "LW160", en: "Left Wing 160", sub: "레프트윙160", tags: [], desc: "6개의 큰 날개로 좌회전 공격에 유효한 다운포스를 만들어낸다.", stats: [0, 0, 0] },
  { id: "TRACK-SWITCH-ATTACK-165", series: "metal fight", type: "track", name: "SA165", en: "Switch Attack 165", sub: "스위치어택165", tags: [], desc: "트랙을 위아래로 결합하여 성능이 다른 2개의 공격방법으로 바꿀 수 있다.", stats: [0, 0, 0] },
  { id: "TRACK-FREE-230", series: "metal fight", type: "track", name: "F230", en: "Free 230", sub: "프리230", tags: [], desc: "자유롭게 회전하는 트랙이 버텀이 지닌 전체적인 지구력을 최대한으로 이끌어낸다.", stats: [0, 0, 0] },
  { id: "TRACK-STAMINA-RING-200", series: "metal fight", type: "track", name: "SR200", en: "Stamina Ring 200", sub: "스테미너링200", tags: [], desc: "두껍고 커다란 고리로 높은 원심력과 안정된 회전력을 만들어낸다.", stats: [0, 0, 0] },
  { id: "TRACK-SPIKE-230", series: "metal fight", type: "track", name: "SP230", en: "Spike 230", sub: "스파이크230", tags: [], desc: "발톱 모양의 돌기로 제동을 걸어 속도를 제어한다.", stats: [0, 0, 0] },
  { id: "BOTTOM-FLAT", series: "metal fight", type: "bottom", name: "F", en: "Flat", sub: "플랫", battleType: "attack", tags: [], desc: "축의 끝이 평평하여 기동력과 공격력이 뛰어나다.", stats: [50, 10, 10] },
  { id: "BOTTOM-SEMI-FLAT", series: "metal fight", type: "bottom", name: "SF", en: "Semi Flat", sub: "세미플랫", battleType: "balance", tags: [], desc: "공격력과 지구력을 균형있게 갖추고 있다.", stats: [30, 20, 20] },
  { id: "BOTTOM-SHARP", series: "metal fight", type: "bottom", name: "S", en: "Sharp", sub: "샤프", battleType: "stamina", tags: [], desc: "축의 끝이 뾰족하여 안전성이 높고 지구력이 뛰어나다.", stats: [10, 20, 40] },
  { id: "BOTTOM-DEFENSE", series: "metal fight", type: "bottom", name: "D", en: "Defense", sub: "디펜스", battleType: "defense", tags: [], desc: "공격을 받았을 때 잘 쓰러지지 않고 방어력이 뛰어나다.", stats: [10, 40, 20] },
  { id: "BOTTOM-WIDE-FLAT", series: "metal fight", type: "bottom", name: "WF", en: "Wide Flat", sub: "와이드플랫", battleType: "attack", tags: [], desc: "접지면적을 확대한 플랫 버텀. 격렬한 기동력과 공격력을 발휘한다.", stats: [50, 10, 10] },
  { id: "BOTTOM-BALL", series: "metal fight", type: "bottom", name: "B", en: "Ball", sub: "볼", battleType: "defense", tags: [], desc: "접지력이 강한 축의 끝을 가지고 있어서 밸런스와 방어력이 우수하다.", stats: [30, 30, 10], model: "assets/models/BO_B.obj" },
  { id: "BOTTOM-BALL-SHARP", series: "metal fight", type: "bottom", name: "BS", en: "Ball Sharp", sub: "볼샤프", battleType: "stamina", tags: [], desc: "축의 끝부분이 뾰족하여 안전성이 높고 볼 형태로 되어 있어 방어력이 우수하다.", stats: [0, 30, 40], modes: [{ name: "일반", stats: [0, 30, 40] }, { name: "제로G", stats: [0, 50, 20] }] },
  { id: "BOTTOM-HOLE-FLAT", series: "metal fight", type: "bottom", name: "HF", en: "Hole Flat", sub: "홀플랫", battleType: "attack", tags: [], desc: "축의 끝에 구멍을 만들어 마찰저항을 줄이고 기동력과 공격력을 균형있게 갖추고 있다.", stats: [40, 0, 30] },
  { id: "BOTTOM-FLAT-SHARP", series: "metal fight", type: "bottom", name: "FS", en: "Flat Sharp", sub: "플랫샤프", battleType: "balance", tags: [], desc: "축의 끝이 凸 모양으로 되어 있어 스타디움 중심에서는 스테미너형이, 공격시에는 공격형이 되는 양면성을 지녔다.", stats: [30, 10, 30] },
  { id: "BOTTOM-RUBBER-FLAT", series: "metal fight", type: "bottom", name: "RF", en: "Rubber Flat", sub: "러버플랫", battleType: "attack", tags: [], desc: "고무 소재를 사용하여 기동력과 공격력을 극한으로 증대시켜 격렬하게 이동하며 공격한다.", stats: [50, 10, 10] },
  { id: "BOTTOM-WIDE-BALL", series: "metal fight", type: "bottom", name: "WB", en: "Wide Ball", sub: "와이드볼", battleType: "defense", tags: [], desc: "특대의 볼 형태로 강력한 공격에도 흔들리지 않으며 적의 공격을 막아낸다.", stats: [10, 50, 10] },
  { id: "BOTTOM-HOLE-FLAT-SHARP", series: "metal fight", type: "bottom", name: "HF/S", en: "Hole Flat Sharp", sub: "홀플랫샤프", battleType: "attack", tags: [], desc: "", stats: [40, 0, 30], modes: [{ name: "홀플랫 모드", stats: [40, 0, 30] }, { name: "샤프 모드", stats: [10, 20, 40] }] },
  { id: "BOTTOM-SEMI-DEFENSE", series: "metal fight", type: "bottom", name: "SD", en: "Semi Defense", sub: "세미디펜스", battleType: "defense", tags: [], desc: "방어력과 지구력을 균형있게 가지고 있다.", stats: [10, 30, 30] },
  { id: "BOTTOM-WIDE-DEFENSE", series: "metal fight", type: "bottom", name: "WD", en: "Wide Defense", sub: "와이드디펜스", battleType: "defense", tags: [], desc: "디펜스 버텀이 더욱 넓어져서 강한 공격에도 끄떡없이 견딘다.", stats: [0, 50, 20] },
  { id: "BOTTOM-ETERNAL-SHARP", series: "metal fight", type: "bottom", name: "ES", en: "Eternal Sharp", sub: "이터널샤프", battleType: "stamina", tags: [], desc: "축의 끝이 자유롭게 회전하여 접지면의 저항을 받지 않고 오랜 시간 회전력을 유지한다.", stats: [0, 20, 50] },
  { id: "BOTTOM-QUAKE", series: "metal fight", type: "bottom", name: "Q", en: "Quake", sub: "퀘이크", battleType: "attack", tags: [], desc: "작은 점프를 만들어내서 예측불허의 움직임이 가능하다.", stats: [70, 0, 0] },
  { id: "BOTTOM-METAL-SHARP", series: "metal fight", type: "bottom", name: "MS", en: "Metal Sharp", sub: "메탈샤프", battleType: "stamina", tags: [], desc: "축의 끝에 마찰저항이 낮은 금속 소재를 사용하여 최소의 마찰저항으로 강한 지구력을 가진다.", stats: [0, 10, 70] },
  { id: "BOTTOM-JOG-BALL", series: "metal fight", type: "bottom", name: "JB", en: "Jog Ball", sub: "조그볼", battleType: "defense", tags: [], desc: "울퉁불퉁한 곳에서 더욱 강한 와이드볼 버텀. 스타디움과 한몸이 되어 튕겨내기 어렵다.", stats: [10, 45, 5] },
  { id: "BOTTOM-EXTREME-FLAT", series: "metal fight", type: "bottom", name: "XF", en: "Extreme Flat", sub: "익스트림플랫", battleType: "attack", tags: [], desc: "접지면적을 확대한 플랫 버텀. 격렬한 기동력과 공격력을 발휘한다.", stats: [60, 10, 0] },
  { id: "BOTTOM-RIGHT-RUBBER-FLAT", series: "metal fight", type: "bottom", name: "R²F", en: "Right Rubber Flat", sub: "라이트러버플랫", battleType: "attack", tags: [], desc: "회전방향과 반대로 돌출된 고무 돌기가 스타디움을 박차면서 우회전 시 초기동력과 공격력을 발휘한다.", stats: [60, 10, 0] },
  { id: "BOTTOM-COAT-SHARP", series: "metal fight", type: "bottom", name: "CS", en: "Coat Sharp", sub: "코트샤프", battleType: "attack", tags: [], desc: "고무로 코팅된 샤프축이 강력한 기동력과 지칠 줄 모르는 지구력을 발휘한다.", stats: [30, 10, 30] },
  { id: "BOTTOM-RUBBER-SHARP", series: "metal fight", type: "bottom", name: "RS", en: "Rubber Sharp", sub: "러버샤프", battleType: "defense", tags: [], desc: "끝이 뾰족하게 생긴 고무 소재의 버텀으로 마찰력이 높아 쉽게 튕겨나가지 않는다.", stats: [10, 50, 10] },
  { id: "BOTTOM-METAL-BALL", series: "metal fight", type: "bottom", name: "MB", en: "Metal Ball", sub: "메탈볼", battleType: "defense", tags: [], desc: "축의 끝에 무거운 금속 소재를 사용하여 안정성을 높이면서 마찰저항을 감소시킨다.", stats: [0, 50, 20] },
  { id: "BOTTOM-AROUND-SHARP", series: "metal fight", type: "bottom", name: "AS", en: "Around Sharp", sub: "어라운드샤프", battleType: "balance", tags: [], desc: "디펜스버텀의 경사 부분이 자유롭게 회전하여 넘어질 것 같아도 끈기있게 회전을 계속한다.", stats: [0, 30, 40] },
  { id: "BOTTOM-LEFT-FLAT", series: "metal fight", type: "bottom", name: "LF", en: "Left Flat", sub: "레프트플랫", battleType: "attack", tags: [], desc: "돌기가 스타디움을 박차면서 좌회전시 초기동력과 공격력을 발휘한다.", stats: [60, 10, 0] },
  { id: "BOTTOM-POLISH-DEFENSE", series: "metal fight", type: "bottom", name: "PD", en: "Polish Defense", sub: "포릿슈디펜스", battleType: "defense", tags: [], desc: "디펜스와 와이드디펜스 버텀의 중간 두께로, 윤활성이 높은 POM수지로 만들어져 지구력을 자랑하는 방어형 버텀.", stats: [0, 50, 20] },
  { id: "BOTTOM-FLAT-BALL", series: "metal fight", type: "bottom", name: "FB", en: "Flat Ball", sub: "플랫볼", battleType: "balance", tags: [], desc: "", stats: [30, 30, 10] },
  { id: "BOTTOM-RUBBER-SEMI-FLAT", series: "metal fight", type: "bottom", name: "RSF", en: "Rubber Semi Flat", sub: "러버세미플랫", battleType: "attack", tags: [], desc: "고무의 마찰력과 공격력을 유지하면서도 섬세한 회전으로 연타공격이 가능하다.", stats: [40, 20, 10] },
  { id: "BOTTOM-LEFT-RUBBER-FLAT", series: "metal fight", type: "bottom", name: "LRF", en: "Left Rubber Flat", sub: "레프트러버플랫", battleType: "attack", tags: [], desc: "회전방향과 반대로 돌출된 고무 돌기가 스타디움을 박차면서 좌회전시 초기동력과 공격력을 발휘한다.", stats: [60, 10, 0] },
  { id: "BOTTOM-DEFENSE-SHARP", series: "metal fight", type: "bottom", name: "DS", en: "Defense Sharp", sub: "디펜스샤프", battleType: "stamina", tags: [], desc: "디펜스 축의 모양을 한 샤프 축으로 지구력이 뛰어나고 방어력이 우수하다.", stats: [5, 25, 40] },
  { id: "BOTTOM-ETERNAL-WIDE-DEFENSE", series: "metal fight", type: "bottom", name: "EWD", en: "Eternal Wide Defense", sub: "이터널와이드디펜스", battleType: "stamina", tags: [], desc: "중앙이 자유롭게 회전하는 버텀으로 강력한 지구력과 방어력을 발휘한다.", stats: [0, 30, 50] },
  { id: "BOTTOM-METAL-FLAT", series: "metal fight", type: "bottom", name: "MF", en: "Metal Flat", sub: "메탈플랫", battleType: "attack", tags: [], desc: "기동력 있는 플랫축에 마찰저항이 낮은 금속 소재를 사용하여 지구력도 겸비하고 있다.", stats: [50, 0, 20] },
  { id: "4DBOTTOM-FINAL-DRIVE", series: "metal fight", type: "4dbottom", name: "F:D", en: "Final Drive", sub: "파이널드라이브", battleType: "attack", tags: [], desc: "회전력이 떨어지면 세미플랫 축이 러버플랫 축으로 전환되어 급가속으로 회전한다.", stats: [60, 0, 10] },
  { id: "BOTTOM-WAVE-WIDE-DEFENSE", series: "metal fight", type: "bottom", name: "W²D", en: "Wave Wide Defense", sub: "웨이브와이드디펜스", battleType: "defense", tags: [], desc: "접지점의 끝이 점에 가까워서 지구력을 발휘하고 와이드디펜스 버텀에 가까운 모양으로 방어력이 뛰어나다.", stats: [0, 40, 30] },
  { id: "4DBOTTOM-FINAL-SURVIVE", series: "metal fight", type: "4dbottom", name: "F:S", en: "Final Survive", sub: "파이널서바이브", battleType: "attack", tags: [], desc: "홀플랫 축으로 격렬하게 회전하다가 적과 부딪히면 샤프 축으로 전환하여 지구력을 높인다.", stats: [40, 0, 30] },
  { id: "BOTTOM-ETERNAL-DEFENSE-SHARP", series: "metal fight", type: "bottom", name: "EDS", en: "Eternal Defense Sharp", sub: "이터널디펜스샤프", battleType: "stamina", tags: [], desc: "중앙이 자유롭게 회전하는 디펜스 축의 넓이를 가진 샤프 축.", stats: [0, 20, 50] },
  { id: "4DBOTTOM-DELTA-DRIVE", series: "metal fight", type: "4dbottom", name: "D:D", en: "Delta Drive", sub: "델타드라이브", battleType: "balance", tags: [], desc: "축의 끝이 방어, 지구, 공격의 3가지 모드로 전환된다.", stats: [30, 30, 20] },
  { id: "BOTTOM-RUBBER-BALL", series: "metal fight", type: "bottom", name: "RB", en: "Rubber Ball", sub: "러버볼", battleType: "stamina", tags: [], desc: "돔 모양의 형태와 고무의 마찰력으로 쉽게 쓰러지거나 튕겨나가지 않아 방어력이 뛰어나다.", stats: [20, 50, 0] },
  { id: "4DBOTTOM-BEARING-DRIVE", series: "metal fight", type: "4dbottom", name: "B:D", en: "Bearing Drive", sub: "베어링드라이브", battleType: "stamina", tags: [], desc: "자유롭게 회전하는 축 안에 베어링을 내장함으로써 마찰을 최소화시켜 최강의 지구력을 발휘한다.", stats: [0, 10, 60] },
  { id: "BOTTOM-RUBBER-DEFENSE-FLAT", series: "metal fight", type: "bottom", name: "RDF", en: "Rubber Defense Flat", sub: "러버디펜스플랫", battleType: "balance", tags: [], desc: "고무의 공격력은 유지한 채 방어력과 지구력을 동시에 겸비한 밸런스형 버텀.", stats: [20, 30, 20] },
  { id: "4DBOTTOM-X-DRIVE", series: "metal fight", type: "4dbottom", name: "X:D", en: "X Drive", sub: "엑스드라이브", battleType: "balance", tags: [], desc: "공격모드에서는 익스트림플랫과 샤프 축으로 전환되고, 극한의밸런스모드에서는 익스트림플랫, 스텔스세미디펜스, 샤프 축으로 자동 전환된다.", stats: [30, 20, 20] },
  { id: "BOTTOM-SHARP-WIDE-DEFENSE", series: "metal fight", type: "bottom", name: "SWD", en: "Sharp Wide Defense", sub: "샤프와이드디펜스", battleType: "balance", tags: [], desc: "와이드디펜스 버텀의 특징을 가지면서 샤프축으로 지구력을 높여 안정된 균형잡힌 파워를 가지고 있다.", stats: [10, 30, 30] },
  { id: "BOTTOM-CIRCLE-FLAT", series: "metal fight", type: "bottom", name: "CF", en: "Circle Flat", sub: "서클플랫", battleType: "attack", tags: [], desc: "플랫부분으로 평면을 달리고, 서클부분으로 경사면을 뛰어오르며 거침없이 회전한다.", stats: [50, 10, 10] },
  { id: "BOTTOM-GEAR-CIRCLE-FLAT", series: "metal fight", type: "bottom", name: "GCF", en: "Gear Circle Flat", sub: "기어서클플랫", battleType: "attack", tags: [], desc: "돌기가 있는 테두리 부분이 속도를 제어하는 역할을 한다.", stats: [40, 20, 10] },
  { id: "BOTTOM-SHARP-BALL", series: "metal fight", type: "bottom", name: "SB", en: "Sharp Ball", sub: "샤프볼", battleType: "defense", tags: [], desc: "쉽게 끌려다니거나 쓰러지지 않는 방어력을 자랑하는 버텀.", stats: [0, 40, 30] },
  { id: "BOTTOM-JOG-SHARP-BALL", series: "metal fight", type: "bottom", name: "JSB", en: "Jog Sharp Ball", sub: "조그샤프볼", battleType: "defense", tags: [], desc: "쉽게 쓰러지지 않는 샤프축에 요철이 결합되어 마찰력이 상승하고 방어력이 뛰어나다.", stats: [10, 50, 10] },
  { id: "BOTTOM-BLADE-SEMI-FLAT", series: "metal fight", type: "bottom", name: "BSF", en: "Blade Semi Flat", sub: "블레이드세미플랫", battleType: "attack", tags: [], desc: "격렬하게 회전하는 기동력을 가지면서 작은 회전을 잘 살린 연타공격이 가능하며 8개의 날개로 강력한 다운포스를 발생시킨다.", stats: [40, 15, 15] },
  { id: "BOTTOM-WIDE-SEMI-FLAT", series: "metal fight", type: "bottom", name: "WSF", en: "Wide Semi Flat", sub: "와이드세미플랫", battleType: "attack", tags: [], desc: "격렬하게 회전하는 기동성을 가지면서 스타디움을 크게 흔드는 연타공격이 가능하다.", stats: [40, 20, 10] },
  { id: "BOTTOM-TWIN-BALL", series: "metal fight", type: "bottom", name: "TB", en: "Twin Ball", sub: "트윈볼", battleType: "stamina", tags: [], desc: "두 개의 구가 기울어져도 균형을 잃지 않도록 하고 끈질긴 지구력을 발휘한다.", stats: [0, 30, 40] },
  { id: "BOTTOM-BIG-WIDE-DEFENSE", series: "metal fight", type: "bottom", name: "BWD", en: "Big Wide Defense", sub: "빅와이드디펜스", battleType: "stamina", tags: [], desc: "가장 넓은 디펜스 버텀으로 쉽게 쓰러지지 않고 강력한 지구력을 발휘한다.", stats: [20, 0, 50] },
  { id: "BOTTOM-GIGA-FLAT", series: "metal fight", type: "bottom", name: "GF", en: "Giga Flat", sub: "기가플랫", battleType: "attack", tags: [], desc: "기동력에 특화되어 위협적인 추진력을 발휘한다.", stats: [60, 10, 0] },
  { id: "LAYER-VALKYRIE", series: "burst", type: "layer", name: "발키리", en: "Valkyrie", battleType: "attack", tags: [], desc: "" },
  { id: "LAYER-SPRIGGAN", series: "burst", type: "layer", name: "스프리건", en: "Spriggan", battleType: "balance", tags: [], desc: "" },
  { id: "LAYER-RAGNARUK", series: "burst", type: "layer", name: "라그나로크", en: "Ragnaruk", battleType: "stamina", tags: [], desc: "" },
  { id: "LAYER-KERBEUS", series: "burst", type: "layer", name: "케르베우스", en: "Kerbeus", battleType: "defense", tags: [], desc: "" },
  { id: "LAYER-AMATERIOS", series: "burst", type: "layer", name: "아마테리오스", en: "Amaterios", battleType: "attack", tags: [], desc: "" },
  { id: "LAYER-DEATHSCYTHER", series: "burst", type: "layer", name: "데스사이저", en: "Deathscyther", battleType: "attack", tags: [], desc: "" },
  { id: "LAYER-WYVERN", series: "burst", type: "layer", name: "와이번", en: "Wyvern", battleType: "defense", tags: [], desc: "" },
  { id: "LAYER-TRIDENT", series: "burst", type: "layer", name: "트라이던트", en: "Trident", battleType: "stamina", tags: [], desc: "" },
  { id: "LAYER-ODIN", series: "burst", type: "layer", name: "오딘", en: "Odin", battleType: "attack", tags: [], desc: "" },
  { id: "LAYER-HORUSOOD", series: "burst", type: "layer", name: "호루스드", en: "Horusood", battleType: "stamina", tags: [], desc: "" },
  { id: "LAYER-MINOBOROS", series: "burst", type: "layer", name: "미노보로스", en: "Minoboros", battleType: "attack", tags: [], desc: "" },
  { id: "LAYER-UNICORN", series: "burst", type: "layer", name: "유니콘", en: "Unicorn", battleType: "defense", tags: [], desc: "" },
  { id: "LAYER-XCALIBUR", series: "burst", type: "layer", name: "엑스칼리버", en: "Xcalibur", battleType: "attack", tags: [], desc: "" },
  { id: "LAYER-EVIL-EYE", series: "burst", type: "layer", name: "이블 아이", en: "Evil-eye", battleType: "defense", tags: [], desc: "" },
  { id: "LAYER-CHAOS", series: "burst", type: "layer", name: "카오스", en: "Chaos", battleType: "stamina", tags: [], desc: "" },
  { id: "LAYER-NEPTUNE", series: "burst", type: "layer", name: "넵튠", en: "Neptune", battleType: "balance", tags: [], desc: "" },
  { id: "LAYER-YGGDRASIL", series: "burst", type: "layer", name: "위그드라실", en: "Yggdrasil", battleType: "stamina", tags: [], desc: "" },
  { id: "LAYER-WOLBORG", series: "burst", type: "layer", name: "하운드 도그", jpName: "울버그", en: "Wolborg", battleType: "stamina", tags: [], desc: "" },
  { id: "DUALLAYER-VICTORY-VALKYRIE", series: "burst", type: "duallayer", name: "빅토리 발키리", en: "Victory Valkyrie", battleType: "attack", tags: [], desc: "" },
  { id: "DUALLAYER-STORM-SPRIGGAN", series: "burst", type: "duallayer", name: "스톰 스프리건", en: "Storm Spriggan", battleType: "balance", tags: [], desc: "" },
  { id: "DUALLAYER-RISING-RAGNARUK", series: "burst", type: "duallayer", name: "라이징 라그나로크", en: "Rising Ragnaruk", battleType: "stamina", tags: [], desc: "" },
  { id: "DUALLAYER-KAISER-KERBEUS", series: "burst", type: "duallayer", name: "카이저 케르베우스", en: "Kaiser Kerbeus", battleType: "defense", tags: [], desc: "" },
  { id: "DUALLAYER-WILD-WYVERN", series: "burst", type: "duallayer", name: "와일드 와이번", en: "Wild Wyvern", battleType: "defense", tags: [], desc: "" },
  { id: "DUALLAYER-DARK-DEATHSCYTHER", series: "burst", type: "duallayer", name: "다크 데스사이저", en: "Dark Deathscyther", battleType: "attack", tags: [], desc: "" },
  { id: "DUALLAYER-HOLY-HORUSOOD", series: "burst", type: "duallayer", name: "홀리 호루스드", en: "Holy Horusood", battleType: "stamina", tags: [], desc: "" },
  { id: "DUALLAYER-OBELISK-ODIN", series: "burst", type: "duallayer", name: "오벨리스크 오딘", en: "Obelisk Odin", battleType: "attack", tags: [], desc: "" },
  { id: "DUALLAYER-BALDUR", series: "burst", type: "duallayer", name: "발뒤르", en: "Baldur", battleType: "defense", tags: [], desc: "" },
  { id: "DUALLAYER-XENO-XCALIBUR", series: "burst", type: "duallayer", name: "제노 엑스칼리버", en: "Xeno Xcalibur", battleType: "attack", tags: [], desc: "" },
  { id: "DUALLAYER-YAGER-YGGDRASIL", series: "burst", type: "duallayer", name: "예거 위그드라실", en: "Yager Yggdrasil", battleType: "stamina", tags: [], desc: "" },
  { id: "DUALLAYER-JAIL-JORMUNGAND", series: "burst", type: "duallayer", name: "제일 요르문간드", en: "Jail Jormungand", battleType: "stamina", tags: [], desc: "" },
  { id: "DUALLAYER-UNLOCK-UNICORN", series: "burst", type: "duallayer", name: "언락 유니콘", en: "Unlock Unicorn", battleType: "defense", tags: [], desc: "" },
  { id: "DUALLAYER-NOVA-NEPTUNE", series: "burst", type: "duallayer", name: "노바 넵튠", en: "Nova Neptune", battleType: "balance", tags: [], desc: "" },
  { id: "DUALLAYER-ZILLION-ZEUS", series: "burst", type: "duallayer", name: "질리언 제우스", en: "Zillion Zeus", battleType: "stamina", tags: [], desc: "" },
  { id: "DUALLAYER-QUAD-QUETZALCOATL", series: "burst", type: "duallayer", name: "쿼드 케찰콰틀", en: "Quad Quetzalcoatl", battleType: "defense", tags: [], desc: "" },
  { id: "DUALLAYER-FANG-FENRIR", series: "burst", type: "duallayer", name: "팽 펜리르", en: "Fang Fenrir", battleType: "attack", tags: [], desc: "" },
  { id: "DUALLAYER-EXCEED-EVIL-EYE", series: "burst", type: "duallayer", name: "익시드 이블 아이", en: "Exceed Evil-eye", battleType: "defense", tags: [], desc: "" },
  { id: "DUALLAYER-BEAST-BEHEMOTH", series: "burst", type: "duallayer", name: "비스트 베히모스", en: "Beast Behemoth", battleType: "attack", tags: [], desc: "" },
  { id: "DUALLAYER-INFERNO-IFRIT", series: "burst", type: "duallayer", name: "인페르노 이프리트", en: "Inferno Ifrit", battleType: "balance", tags: [], desc: "" },
  { id: "DUALLAYER-PSYCHIC-PHANTOM", series: "burst", type: "duallayer", name: "사이킥 팬텀", en: "Psychic Phantom", battleType: "stamina", tags: [], desc: "" },
  { id: "DUALLAYER-LOST-LONGINUS", series: "burst", type: "duallayer", name: "로스트 롱기누스", en: "Lost Longinus", battleType: "attack", tags: [], desc: "" },
  { id: "DUALLAYER-GIGANT-GAIA", series: "burst", type: "duallayer", name: "기간트 가이아", en: "Gigant Gaia", battleType: "balance", tags: [], desc: "" },
  { id: "DUALLAYER-MAD-MINOBOROS", series: "burst", type: "duallayer", name: "매드 미노보로스", en: "Mad Minoboros", battleType: "attack", tags: [], desc: "" },
  { id: "DUALLAYER-ACID-ANUBIS", series: "burst", type: "duallayer", name: "애시드 아누비스", en: "Acid Anubis", battleType: "defense", tags: [], desc: "" },
  { id: "GODLAYER-GOD-VALKYRIE", series: "burst", type: "godlayer", name: "갓 발키리", en: "God Valkyrie", battleType: "attack", tags: [], desc: "" },
  { id: "GODLAYER-KREIS-SATAN", series: "burst", type: "godlayer", name: "크라이스 사탄", en: "Kreis Satan", battleType: "defense", tags: [], desc: "" },
  { id: "GODLAYER-BLAZE-RAGNARUK", series: "burst", type: "godlayer", name: "블레이즈 라그나로크", en: "Blaze Ragnaruk", battleType: "stamina", tags: [], desc: "" },
  { id: "GODLAYER-DRAIN-FAFNIR", series: "burst", type: "godlayer", name: "드레인 파브닐", en: "Drain Fafnir", battleType: "stamina", tags: [], desc: "" },
  { id: "GODLAYER-GUARDIAN-KERBEUS", series: "burst", type: "godlayer", name: "가디언 케르베우스", en: "Guardian Kerbeus", battleType: "defense", tags: [], desc: "" },
  { id: "GODLAYER-TORNADO-WYVERN", series: "burst", type: "godlayer", name: "토네이도 와이번", en: "Tornado Wyvern", battleType: "defense", tags: [], desc: "" },
  { id: "GODLAYER-ALTER-CHRONOS", series: "burst", type: "godlayer", name: "알타 크로노스", en: "Alter Chronos", battleType: "balance", tags: [], desc: "" },
  { id: "GODLAYER-KILLER-DEATHSCYTHER", series: "burst", type: "godlayer", name: "킬러 데스사이저", en: "Killer Deathscyther", battleType: "attack", tags: [], desc: "" },
  { id: "GODLAYER-GALAXY-ZEUS", series: "burst", type: "godlayer", name: "갤럭시 제우스", en: "Galaxy Zeus", battleType: "stamina", tags: [], desc: "" },
  { id: "GODLAYER-LEGEND-SPRIGGAN", series: "burst", type: "godlayer", name: "레전드 스프리건", en: "Legend Spriggan", battleType: "balance", tags: [], desc: "" },
  { id: "GODLAYER-MAXIMUM-GARUDA", series: "burst", type: "godlayer", name: "맥시멈 가루다", en: "Maximum Garuda", battleType: "stamina", tags: [], desc: "" },
  { id: "GODLAYER-BLAST-JINNIUS", series: "burst", type: "godlayer", name: "블라스트 지니어스", en: "Blast Jinnius", battleType: "defense", tags: [], desc: "" },
  { id: "GODLAYER-SIEG-XCALIBUR", series: "burst", type: "godlayer", name: "지크 엑스칼리버", en: "Sieg Xcalibur", battleType: "attack", tags: [], desc: "" },
  { id: "GODLAYER-SHELTER-REGULUS", series: "burst", type: "godlayer", name: "쉘터 레굴루스", en: "Shelter Regulus", battleType: "balance", tags: [], desc: "" },
  { id: "GODLAYER-STRIKE-GOD-VALKYRIE", series: "burst", type: "godlayer", name: "스트라이크 갓 발키리", en: "Strike God Valkyrie", battleType: "attack", tags: [], desc: "" },
  { id: "GODLAYER-NIGHTMARE-LONGINUS", series: "burst", type: "godlayer", name: "나이트메어 롱기누스", en: "Nightmare Longinus", battleType: "attack", tags: [], desc: "" },
  { id: "GODLAYER-DEEP-CHAOS", series: "burst", type: "godlayer", name: "딥 카오스", en: "Deep Chaos", battleType: "stamina", tags: [], desc: "" },
  { id: "GODLAYER-ARC-BAHAMUT", series: "burst", type: "godlayer", name: "아크 바하무트", en: "Arc Bahamut", battleType: "defense", tags: [], desc: "" },
  { id: "GODLAYER-SPRIGGAN-REQUIEM", series: "burst", type: "godlayer", name: "스프리건 레퀴엠", en: "Spriggan Requiem", battleType: "balance", tags: [], desc: "" },
  { id: "GODLAYER-BEAT-KUKULCAN", series: "burst", type: "godlayer", name: "비트 쿠쿨칸", en: "Beat Kukulcan", battleType: "attack", tags: [], desc: "" },
  { id: "GODLAYER-TWIN-NEMESIS", series: "burst", type: "godlayer", name: "트윈 네메시스", en: "Twin Nemesis", battleType: "attack", tags: [], desc: "" },
  { id: "GODLAYER-SCREW-TRIDENT", series: "burst", type: "godlayer", name: "스크류 트라이던트", en: "Screw Trident", battleType: "stamina", tags: [], desc: "" },
  { id: "GODLAYER-ORICHALCUM", series: "burst", type: "godlayer", name: "오리하르콘", en: "Orichalcum", battleType: "stamina", tags: [], desc: "" },
  { id: "GODLAYER-SHADOW-ORICHALCUM", series: "burst", type: "godlayer", name: "섀도우 오리하르콘", en: "Shadow Orichalcum", battleType: "defense", tags: [], desc: "" },
  { id: "GODLAYER-DUO-APOLLOS", series: "burst", type: "godlayer", name: "듀오 아폴로스", en: "Duo Apollos", battleType: "defense", tags: [], desc: "" },
  { id: "GODLAYER-DUO-ARTEMIS", series: "burst", type: "godlayer", name: "듀오 아르테미스", en: "Duo Artemis", battleType: "attack", tags: [], desc: "" },
  { id: "GODLAYER-DUO-ECLIPSE", series: "burst", type: "godlayer", name: "듀오 이클립스", en: "Duo Eclipse", battleType: "balance", tags: [], desc: "" },
  { id: "CHOZLAYER-WINNING-VALKYRIE", series: "burst", type: "chozlayer", name: "위닝 발키리", en: "Winning Valkyrie", battleType: "attack", tags: [], desc: "" },
  { id: "CHOZLAYER-Z-ACHILLES", series: "burst", type: "chozlayer", name: "제트 아킬레스", en: "Z Achilles", battleType: "balance", tags: [], desc: "" },
  { id: "CHOZLAYER-EMPEROR-FORNEUS", series: "burst", type: "chozlayer", name: "엠퍼러 포르네우스", en: "Emperor Forneus", battleType: "defense", tags: [], desc: "" },
  { id: "CHOZLAYER-BLOODY-LONGINUS", series: "burst", type: "chozlayer", name: "블러디 롱기누스", en: "Bloody Longinus", battleType: "attack", tags: [], desc: "" },
  { id: "CHOZLAYER-CRASH-RAGNARUK", series: "burst", type: "chozlayer", name: "크래시 라그나로크", en: "Crash Ragnaruk", battleType: "stamina", tags: [], desc: "" },
  { id: "CHOZLAYER-HELL-SALAMANDER", series: "burst", type: "chozlayer", name: "헬 살라맨더", en: "Hell Salamander", battleType: "balance", tags: [], desc: "" },
  { id: "CHOZLAYER-ARCHER-HERCULES", series: "burst", type: "chozlayer", name: "아처 헤라클레스", en: "Archer Hercules", battleType: "stamina", tags: [], desc: "" },
  { id: "CHOZLAYER-REVIVE-PHOENIX", series: "burst", type: "chozlayer", name: "리바이브 피닉스", en: "Revive Phoenix", battleType: "defense", tags: [], desc: "" },
  { id: "CHOZLAYER-VICE-LEOPARD", series: "burst", type: "chozlayer", name: "바이스 레오파드", en: "Vice Leopard", battleType: "attack", tags: [], desc: "" },
  { id: "CHOZLAYER-BUSTER-XCALIBUR", series: "burst", type: "chozlayer", name: "버스터 엑스칼리버", en: "Buster Xcalibur", battleType: "attack", tags: [], desc: "" },
  { id: "CHOZLAYER-HAZARD-KERBEUS", series: "burst", type: "chozlayer", name: "해저드 케르베우스", en: "Hazard Kerbeus", battleType: "defense", tags: [], desc: "" },
  { id: "CHOZLAYER-GEIST-FAFNIR", series: "burst", type: "chozlayer", name: "가이스트 파브닐", en: "Geist Fafnir", battleType: "stamina", tags: [], desc: "" },
  { id: "CHOZLAYER-SHADOW-AMATERIOS", series: "burst", type: "chozlayer", name: "섀도우 아마테리오스", en: "Shadow Amaterios", battleType: "attack", tags: [], desc: "" },
  { id: "CHOZLAYER-SHINING-AMATERIOS", series: "burst", type: "chozlayer", name: "샤이닝 아마테리오스", en: "Shining Amaterios", battleType: "attack", tags: [], desc: "" },
  { id: "CHOZLAYER-LEFT-APOLLOS", series: "burst", type: "chozlayer", name: "레프트 아폴로스", en: "Left Apollos", battleType: "defense", tags: [], desc: "" },
  { id: "CHOZLAYER-RIGHT-ARTEMIS", series: "burst", type: "chozlayer", name: "라이트 아르테미스", en: "Right Artemis", battleType: "attack", tags: [], desc: "" },
  { id: "CHOZLAYER-LEFT-ECLIPSE", series: "burst", type: "chozlayer", name: "레프트 이클립스", en: "Left Eclipse", battleType: "balance", tags: [], desc: "" },
  { id: "CHOZLAYER-RIGHT-ECLIPSE", series: "burst", type: "chozlayer", name: "라이트 이클립스", en: "Right Eclipse", battleType: "balance", tags: [], desc: "" },
  { id: "CHOZLAYER-DEAD-HADES", series: "burst", type: "chozlayer", name: "데드 하데스", en: "Dead Hades", battleType: "balance", tags: [], desc: "" },
  { id: "CHOZLAYER-ORB-EGIS", series: "burst", type: "chozlayer", name: "오브 이지스", en: "Orb Egis", battleType: "defense", tags: [], desc: "" },
  { id: "CHOZLAYER-CHO-Z-VALKYRIE", series: "burst", type: "chozlayer", name: "초Z 발키리", en: "Cho-Z Valkyrie", battleType: "attack", tags: [], desc: "" },
  { id: "CHOZLAYER-CHO-Z-SPRIGGAN", series: "burst", type: "chozlayer", name: "초Z 스프리건", en: "Cho-Z Spriggan", battleType: "balance", tags: [], desc: "" },
  { id: "CHOZLAYER-CHO-Z-ACHILLES", series: "burst", type: "chozlayer", name: "초Z 아킬레스", en: "Cho-Z Achilles", battleType: "balance", tags: [], desc: "" },
  { id: "CHOZLAYER-AIR-KNIGHT", series: "burst", type: "chozlayer", name: "에어 나이트", en: "Air Knight", battleType: "stamina", tags: [], desc: "" },
  { id: "CHOZLAYER-DEAD-PHOENIX", series: "burst", type: "chozlayer", name: "데드 피닉스", en: "Dead Phoenix", battleType: "defense", tags: [], desc: "" },
  { id: "CHOZLAYER-PERFECT-PHOENIX", series: "burst", type: "chozlayer", name: "퍼펙트 피닉스", en: "Perfect Phoenix", battleType: "defense", tags: [], desc: "" },
  { id: "CHOZLAYER-BURNING-AMATERIOS", series: "burst", type: "chozlayer", name: "버닝 아마테리오스", en: "Burning Amaterios", battleType: "attack", tags: [], desc: "" },
  { id: "GACHICHIP-DRAGON", series: "burst", type: "gachichip", name: "드래곤", en: "Dragon", tags: [], desc: "" },
  { id: "GACHICHIP-VALKYRIE", series: "burst", type: "gachichip", name: "발키리", en: "Valkyrie", tags: [], desc: "" },
  { id: "GACHICHIP-ASHURA", series: "burst", type: "gachichip", name: "아수라", en: "Ashura", tags: [], desc: "" },
  { id: "GACHICHIP-FAFNIR", series: "burst", type: "gachichip", name: "파브닐", en: "Fafnir", tags: [], desc: "" },
  { id: "GACHICHIP-JOKER", series: "burst", type: "gachichip", name: "조커", en: "Joker", tags: [], desc: "" },
  { id: "GACHICHIP-BAHAMUT", series: "burst", type: "gachichip", name: "바하무트", en: "Bahamut", tags: [], desc: "" },
  { id: "GACHICHIP-LONGINUS", series: "burst", type: "gachichip", name: "롱기누스", en: "Longinus", tags: [], desc: "" },
  { id: "GACHICHIP-DIABOLOS", series: "burst", type: "gachichip", name: "디아볼로스", en: "Diabolos", tags: [], desc: "" },
  { id: "GACHICHIP-ACHILLES", series: "burst", type: "gachichip", name: "아킬레스", en: "Achilles", tags: [], desc: "" },
  { id: "GACHICHIP-HYDRA", series: "burst", type: "gachichip", name: "히드라", en: "Hydra", tags: [], desc: "" },
  { id: "GACHICHIP-PEGASUS", series: "burst", type: "gachichip", name: "페가수스", en: "Pegasus", tags: [], desc: "" },
  { id: "GACHICHIP-SPRIGGAN", series: "burst", type: "gachichip", name: "스프리건", en: "Spriggan", tags: [], desc: "" },
  { id: "GACHICHIP-ODIN", series: "burst", type: "gachichip", name: "오딘", en: "Odin", tags: [], desc: "" },
  { id: "GACHICHIP-DRAGON-II", series: "burst", type: "gachichip", name: "드래곤2", en: "Dragon II", tags: [], desc: "" },
  { id: "GACHICHIP-DIABOLOS-II", series: "burst", type: "gachichip", name: "디아볼로스2", en: "Diabolos II", tags: [], desc: "" },
  { id: "GACHIWEIGHT-ZAN", series: "burst", type: "gachiweight", name: "참", en: "Zan", tags: [], desc: "" },
  { id: "GACHIWEIGHT-RETSU", series: "burst", type: "gachiweight", name: "렬", en: "Retsu", tags: [], desc: "" },
  { id: "GACHIWEIGHT-TEN", series: "burst", type: "gachiweight", name: "천", en: "Ten", tags: [], desc: "" },
  { id: "GACHIWEIGHT-SEN", series: "burst", type: "gachiweight", name: "섬", en: "Sen", tags: [], desc: "" },
  { id: "GACHIWEIGHT-METSU", series: "burst", type: "gachiweight", name: "멸", en: "Metsu", tags: [], desc: "" },
  { id: "GACHIWEIGHT-GEN", series: "burst", type: "gachiweight", name: "환", en: "Gen", tags: [], desc: "" },
  { id: "GACHIWEIGHT-GOKU", series: "burst", type: "gachiweight", name: "극", en: "Goku", tags: [], desc: "" },
  { id: "GACHIWEIGHT-GOU", series: "burst", type: "gachiweight", name: "굉", en: "Gou", tags: [], desc: "" },
  { id: "GACHIWEIGHT-SOU", series: "burst", type: "gachiweight", name: "쌍", en: "Sou", tags: [], desc: "" },
  { id: "GACHIBASE-ACE", series: "burst", type: "gachibase", name: "에이스", en: "Ace", battleType: "attack", tags: [], desc: "" },
  { id: "GACHIBASE-GRAND", series: "burst", type: "gachibase", name: "그랜드", en: "Grand", battleType: "stamina", tags: [], desc: "" },
  { id: "GACHIBASE-ROCK", series: "burst", type: "gachibase", name: "록", en: "Rock", battleType: "defense", tags: [], desc: "" },
  { id: "GACHIBASE-SLASH", series: "burst", type: "gachibase", name: "슬래시", en: "Slash", battleType: "attack", tags: [], desc: "" },
  { id: "GACHIBASE-BUSHIN", series: "burst", type: "gachibase", name: "무신", en: "Bushin", battleType: "defense", tags: [], desc: "" },
  { id: "GACHIBASE-WIZARD", series: "burst", type: "gachibase", name: "위저드", en: "Wizard", battleType: "stamina", tags: [], desc: "" },
  { id: "GACHIBASE-COSMO", series: "burst", type: "gachibase", name: "코스모", en: "Cosmo", battleType: "stamina", tags: [], desc: "" },
  { id: "GACHIBASE-JUDGMENT", series: "burst", type: "gachibase", name: "저지먼트", en: "Judgment", battleType: "balance", tags: [], desc: "" },
  { id: "GACHIBASE-DREAD", series: "burst", type: "gachibase", name: "드레드", en: "Dread", battleType: "defense", tags: [], desc: "" },
  { id: "GACHIBASE-ZWEI", series: "burst", type: "gachibase", name: "츠바이", en: "Zwei", battleType: "attack", tags: [], desc: "" },
  { id: "GACHIBASE-VENOM", series: "burst", type: "gachibase", name: "베놈", en: "Venom", battleType: "balance", tags: [], desc: "" },
  { id: "GACHIBASE-ERASE", series: "burst", type: "gachibase", name: "이레이즈", en: "Erase", battleType: "balance", tags: [], desc: "" },
  { id: "GACHIBASE-FLARE", series: "burst", type: "gachibase", name: "플레어", en: "Flare", battleType: "stamina", tags: [], desc: "" },
  { id: "GACHIBASE-POISON", series: "burst", type: "gachibase", name: "포이즌", en: "Poison", battleType: "defense", tags: [], desc: "" },
  { id: "GACHIBASE-HEAVEN", series: "burst", type: "gachibase", name: "헤븐", en: "Heaven", battleType: "stamina", tags: [], desc: "" },
  { id: "GACHIBASE-LORD", series: "burst", type: "gachibase", name: "로드", en: "Lord", battleType: "balance", tags: [], desc: "" },
  { id: "GACHIBASE-UNION", series: "burst", type: "gachibase", name: "유니온", en: "Union", battleType: "balance", tags: [], desc: "" },
  { id: "GACHIBASE-TACT", series: "burst", type: "gachibase", name: "택트", en: "Tact", battleType: "balance", tags: [], desc: "" },
  { id: "GACHIBASE-KNOCKOUT", series: "burst", type: "gachibase", name: "넉아웃", en: "Knockout", battleType: "attack", tags: [], desc: "" },
  { id: "GACHIBASE-IMPERIAL", series: "burst", type: "gachibase", name: "임페리얼", en: "Imperial", battleType: "attack", tags: [], desc: "" },
  { id: "GACHIBASE-MASTER", series: "burst", type: "gachibase", name: "마스터", en: "Master", battleType: "balance", tags: [], desc: "" },
  { id: "GACHIBASE-NAKED", series: "burst", type: "gachibase", name: "네이키드", en: "Naked", battleType: "defense", tags: [], desc: "" },
  { id: "GACHILAYER-REGALIA-GENESIS", series: "burst", type: "gachilayer", name: "리겔리아 제네시스", en: "Regalia Genesis", battleType: "defense", tags: [], desc: "" },
  { id: "GACHILAYER-PRIME-APOCALYPSE", series: "burst", type: "gachilayer", name: "프라임 아포칼립스", en: "Prime Apocalypse", battleType: "attack", tags: [], desc: "" },
  { id: "GACHILAYER-BIGBANG-GENESIS", series: "burst", type: "gachilayer", name: "빅뱅 제네시스", en: "Bigbang Genesis", battleType: "defense", tags: [], desc: "" },
  { id: "GACHIUPGRADE-UNION-SWORD", series: "burst", type: "gachiupgrade", name: "유니온 소드", en: "Union Sword", tags: [], desc: "" },
  { id: "GACHIUPGRADE-BIGBANG-ARMOR", series: "burst", type: "gachiupgrade", name: "빅뱅 아머", en: "Bigbang Armor", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-HELIOS", series: "burst", type: "superkingchip", name: "헬리오스", en: "Helios", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-HYPERION", series: "burst", type: "superkingchip", name: "하이페리온", en: "Hyperion", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-RAGNARUK", series: "burst", type: "superkingchip", name: "라그나로크", en: "Ragnaruk", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-VALKYRIE", series: "burst", type: "superkingchip", name: "발키리", en: "Valkyrie", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-SATAN", series: "burst", type: "superkingchip", name: "사탄", en: "Satan", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-FAFNIR", series: "burst", type: "superkingchip", name: "파브닐", en: "Fafnir", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-LONGINUS", series: "burst", type: "superkingchip", name: "롱기누스", en: "Longinus", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-SOLOMON", series: "burst", type: "superkingchip", name: "솔로몬", en: "Solomon", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-URANUS", series: "burst", type: "superkingchip", name: "우라노스", en: "Uranus", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-LUCIFER", series: "burst", type: "superkingchip", name: "루시퍼", en: "Lucifer", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-DIABOLOS", series: "burst", type: "superkingchip", name: "디아볼로스", en: "Diabolos", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-DRAGON", series: "burst", type: "superkingchip", name: "드래곤", en: "Dragon", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-SPRIGGAN", series: "burst", type: "superkingchip", name: "스프리건", en: "Spriggan", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-ACHILLES", series: "burst", type: "superkingchip", name: "아킬레스", en: "Achilles", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-HELIOS-II", series: "burst", type: "superkingchip", name: "헬리오스2", en: "Helios II", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-HYPERION-II", series: "burst", type: "superkingchip", name: "하이페리온2", en: "Hyperion II", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-LUCIFER-II", series: "burst", type: "superkingchip", name: "루시퍼2", en: "Lucifer II", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-DEATHSCYTHER", series: "burst", type: "superkingchip", name: "데스사이저", en: "Deathscyther", tags: [], desc: "" },
  { id: "SUPERKINGCHIP-WYVERN", series: "burst", type: "superkingchip", name: "와이번", en: "Wyvern", tags: [], desc: "" },
  { id: "SUPERKINGRING-KING", series: "burst", type: "superkingring", name: "킹", en: "King", battleType: "balance", tags: [], desc: "" },
  { id: "SUPERKINGRING-SUPER", series: "burst", type: "superkingring", name: "슈퍼", en: "Super", battleType: "attack", tags: [], desc: "" },
  { id: "SUPERKINGRING-GLIDE", series: "burst", type: "superkingring", name: "글라이드", en: "Glide", battleType: "stamina", tags: [], desc: "" },
  { id: "SUPERKINGRING-BRAVE", series: "burst", type: "superkingring", name: "브레이브", en: "Brave", battleType: "attack", tags: [], desc: "" },
  { id: "SUPERKINGRING-CURSE", series: "burst", type: "superkingring", name: "커스", en: "Curse", battleType: "defense", tags: [], desc: "" },
  { id: "SUPERKINGRING-MIRAGE", series: "burst", type: "superkingring", name: "미라지", en: "Mirage", battleType: "stamina", tags: [], desc: "" },
  { id: "SUPERKINGRING-RAGE", series: "burst", type: "superkingring", name: "레이지", en: "Rage", battleType: "attack", tags: [], desc: "" },
  { id: "SUPERKINGRING-FIRST", series: "burst", type: "superkingring", name: "퍼스트", en: "First", battleType: "defense", tags: [], desc: "" },
  { id: "SUPERKINGRING-VARIANT", series: "burst", type: "superkingring", name: "베어리언트", en: "Variant", battleType: "defense", tags: [], desc: "" },
  { id: "SUPERKINGRING-DEATH", series: "burst", type: "superkingring", name: "데스", en: "Death", battleType: "balance", tags: [], desc: "" },
  { id: "SUPERKINGRING-ABYSS", series: "burst", type: "superkingring", name: "어비스", en: "Abyss", battleType: "balance", tags: [], desc: "" },
  { id: "SUPERKINGRING-TEMPEST", series: "burst", type: "superkingring", name: "템페스트", en: "Tempest", battleType: "attack", tags: [], desc: "" },
  { id: "SUPERKINGRING-WORLD", series: "burst", type: "superkingring", name: "월드", en: "World", battleType: "balance", tags: [], desc: "" },
  { id: "SUPERKINGRING-INFINITE", series: "burst", type: "superkingring", name: "인피니트", en: "Infinite", battleType: "balance", tags: [], desc: "" },
  { id: "SUPERKINGRING-BURN", series: "burst", type: "superkingring", name: "번", en: "Burn", battleType: "attack", tags: [], desc: "" },
  { id: "SUPERKINGRING-VOLCANO", series: "burst", type: "superkingring", name: "볼케이노", en: "Volcano", battleType: "balance", tags: [], desc: "" },
  { id: "SUPERKINGRING-THE-END", series: "burst", type: "superkingring", name: "디 엔드", en: "The End", battleType: "defense", tags: [], desc: "" },
  { id: "SUPERKINGRING-HOLLOW", series: "burst", type: "superkingring", name: "할로우", en: "Hollow", battleType: "attack", tags: [], desc: "" },
  { id: "SUPERKINGRING-JET", series: "burst", type: "superkingring", name: "제트", en: "Jet", battleType: "defense", tags: [], desc: "" },
  { id: "SUPERKINGCHASSIS-1A", series: "burst", type: "superkingchassis", name: "원 어택", en: "1 Attack", battleType: "attack", tags: ["더블 섀시"], desc: "" },
  { id: "SUPERKINGCHASSIS-1B", series: "burst", type: "superkingchassis", name: "원 밸런스", en: "1 Balance", battleType: "balance", tags: ["더블 섀시"], desc: "" },
  { id: "SUPERKINGCHASSIS-1S", series: "burst", type: "superkingchassis", name: "원 스테미나", en: "1 Stamina", battleType: "stamina", tags: ["싱글 섀시"], desc: "" },
  { id: "SUPERKINGCHASSIS-1D", series: "burst", type: "superkingchassis", name: "원 디펜스", en: "1 Defense", battleType: "defense", tags: ["싱글 섀시"], desc: "" },
  { id: "SUPERKINGCHASSIS-2A", series: "burst", type: "superkingchassis", name: "투 어택", en: "2 Attack", battleType: "attack", tags: ["더블 섀시"], desc: "" },
  { id: "SUPERKINGCHASSIS-2B", series: "burst", type: "superkingchassis", name: "투 밸런스", en: "2 Balance", battleType: "balance", tags: ["더블 섀시"], desc: "" },
  { id: "SUPERKINGCHASSIS-2S", series: "burst", type: "superkingchassis", name: "투 스테미나", en: "2 Stamina", battleType: "stamina", tags: ["더블 섀시"], desc: "" },
  { id: "SUPERKINGCHASSIS-2D", series: "burst", type: "superkingchassis", name: "투 디펜스", en: "2 Defense", battleType: "defense", tags: ["더블 섀시"], desc: "" },
  { id: "SUPERKINGCHASSIS-3A", series: "burst", type: "superkingchassis", name: "쓰리 어택", en: "3 Attack", battleType: "attack", tags: ["더블 섀시"], desc: "" },
  { id: "SUPERKINGUPGRADE-INFINITE-SWORD", series: "burst", type: "superkingupgrade", name: "인피니트 소드", en: "Infinite Sword", tags: [], desc: "" },
  { id: "SUPERKINGUPGRADE-INFINITE-SHIELD", series: "burst", type: "superkingupgrade", name: "인피니트 실드", en: "Infinite Shield", tags: [], desc: "" },
  { id: "DBLAYER-GREATEST-RAPHAEL", series: "burst", type: "dblayer", name: "그레이티스트 라파엘", en: "Greatest Raphael", battleType: "balance", tags: [], desc: "" },
  { id: "DBCORE-BELIAL", series: "burst", type: "dbcore", name: "벨리알", en: "Belial", tags: [], desc: "" },
  { id: "DBCORE-RAGNARUK", series: "burst", type: "dbcore", name: "라그나로크", en: "Ragnaruk", tags: [], desc: "" },
  { id: "DBCORE-PERSEUS", series: "burst", type: "dbcore", name: "페르세우스", en: "Perseus", tags: [], desc: "" },
  { id: "DBCORE-VALKYRIE", series: "burst", type: "dbcore", name: "발키리", en: "Valkyrie", tags: [], desc: "" },
  { id: "DBCORE-FAFNIR", series: "burst", type: "dbcore", name: "파브닐", en: "Fafnir", tags: [], desc: "" },
  { id: "DBCORE-SPRIGGAN", series: "burst", type: "dbcore", name: "스프리건", en: "Spriggan", tags: [], desc: "" },
  { id: "DBCORE-BAHAMUT", series: "burst", type: "dbcore", name: "바하무트", en: "Bahamut", tags: [], desc: "" },
  { id: "DBCORE-LONGINUS", series: "burst", type: "dbcore", name: "롱기누스", en: "Longinus", tags: [], desc: "" },
  { id: "DBCORE-IFRIT", series: "burst", type: "dbcore", name: "이프리트", en: "Ifrit", tags: [], desc: "" },
  { id: "DBCORE-PHOENIX", series: "burst", type: "dbcore", name: "피닉스", en: "Phoenix", tags: [], desc: "" },
  { id: "DBCORE-BELIAL-II", series: "burst", type: "dbcore", name: "벨리알2", en: "Belial II", tags: [], desc: "" },
  { id: "DBCORE-VALKYRIE-II", series: "burst", type: "dbcore", name: "발키리2", en: "Valkyrie II", tags: [], desc: "" },
  { id: "DBCORE-KERBEUS", series: "burst", type: "dbcore", name: "케르베우스", en: "Kerbeus", tags: [], desc: "" },
  { id: "DBCORE-DRAGON", series: "burst", type: "dbcore", name: "드래곤", en: "Dragon", tags: [], desc: "" },
  { id: "DBCORE-HELLO-KITTY", series: "burst", type: "dbcore", name: "헬로키티", en: "Hello Kitty", tags: [], desc: "" },
  { id: "DBCORE-XCALIBUR", series: "burst", type: "dbcore", name: "엑스칼리버", en: "Xcalibur", tags: [], desc: "" },
  { id: "DBCORE-ACHILLES", series: "burst", type: "dbcore", name: "아킬레스", en: "Achilles", tags: [], desc: "" },
  { id: "DBCORE-KNIGHT", series: "burst", type: "dbcore", name: "나이트", en: "Knight", tags: [], desc: "" },
  { id: "DBCORE-HELIOS", series: "burst", type: "dbcore", name: "헬리오스", en: "Helios", tags: [], desc: "" },
  { id: "DBCORE-HYPERION", series: "burst", type: "dbcore", name: "하이페리온", en: "Hyperion", tags: [], desc: "" },
  { id: "DBCORE-BELIAL-III", series: "burst", type: "dbcore", name: "벨리알3", en: "Belial III", tags: [], desc: "" },
  { id: "DBCORE-SPRIGGAN-II", series: "burst", type: "dbcore", name: "스프리건2", en: "Spriggan II", tags: [], desc: "" },
  { id: "DBCORE-LUCIFER", series: "burst", type: "dbcore", name: "루시퍼", en: "Lucifer", tags: [], desc: "" },
  { id: "DBBLADE-DYNAMITE", series: "burst", type: "dbblade", name: "다이너마이트", en: "Dynamite", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-CYCLONE", series: "burst", type: "dbblade", name: "사이클론", en: "Cyclone", battleType: "stamina", tags: [], desc: "" },
  { id: "DBBLADE-VANISH", series: "burst", type: "dbblade", name: "배니시", en: "Vanish", battleType: "stamina", tags: [], desc: "" },
  { id: "DBBLADE-ROAR", series: "burst", type: "dbblade", name: "로어", en: "Roar", battleType: "defense", tags: [], desc: "" },
  { id: "DBBLADE-SAVIOR", series: "burst", type: "dbblade", name: "세이비어", en: "Savior", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-DEVIL", series: "burst", type: "dbblade", name: "데빌", en: "Devil", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-ASTRAL", series: "burst", type: "dbblade", name: "아스트랄", en: "Astral", battleType: "balance", tags: [], desc: "" },
  { id: "DBBLADE-GUILTY", series: "burst", type: "dbblade", name: "길티", en: "Guilty", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-MAGMA", series: "burst", type: "dbblade", name: "마그마", en: "Magma", battleType: "balance", tags: [], desc: "" },
  { id: "DBBLADE-PROMINENCE", series: "burst", type: "dbblade", name: "프로미넌스", en: "Prominence", battleType: "defense", tags: [], desc: "" },
  { id: "DBBLADE-DANGEROUS", series: "burst", type: "dbblade", name: "데인저러스", en: "Dangerous", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-ULTIMATE", series: "burst", type: "dbblade", name: "얼티밋", en: "Ultimate", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-DIVINE", series: "burst", type: "dbblade", name: "디바인", en: "Divine", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-CHAIN", series: "burst", type: "dbblade", name: "체인", en: "Chain", battleType: "defense", tags: [], desc: "" },
  { id: "DBBLADE-GATLING", series: "burst", type: "dbblade", name: "개틀링", en: "Gatling", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-XIPHOID", series: "burst", type: "dbblade", name: "지포이드", en: "Xiphoid", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-ZEST", series: "burst", type: "dbblade", name: "제스트", en: "Zest", battleType: "balance", tags: [], desc: "" },
  { id: "DBBLADE-WIND", series: "burst", type: "dbblade", name: "윈드", en: "Wind", battleType: "stamina", tags: [], desc: "" },
  { id: "DBBLADE-KING-MR", series: "burst", type: "dbblade", name: "킹 MR", en: "King MR", battleType: "balance", tags: [], desc: "" },
  { id: "DBBLADE-SUPER-MR", series: "burst", type: "dbblade", name: "슈퍼 MR", en: "Super MR", battleType: "attack", tags: [], desc: "" },
  { id: "DBBLADE-BURST", series: "burst", type: "dbblade", name: "버스트", en: "Burst", battleType: "balance", tags: [], desc: "" },
  { id: "DBBLADE-BARRICADE", series: "burst", type: "dbblade", name: "바리케이드", en: "Barricade", battleType: "defense", tags: [], desc: "" },
  { id: "DBARMOR-2", series: "burst", type: "dbarmor", name: "2", en: "2", sub: "투", tags: [], desc: "" },
  { id: "DBARMOR-6", series: "burst", type: "dbarmor", name: "6", en: "6", sub: "식스", tags: [], desc: "" },
  { id: "DBARMOR-3", series: "burst", type: "dbarmor", name: "3", en: "3", sub: "쓰리", tags: [], desc: "" },
  { id: "DBARMOR-10", series: "burst", type: "dbarmor", name: "10", en: "10", sub: "텐", tags: [], desc: "" },
  { id: "DBARMOR-7", series: "burst", type: "dbarmor", name: "7", en: "7", sub: "세븐", tags: [], desc: "" },
  { id: "DBARMOR-0", series: "burst", type: "dbarmor", name: "0", en: "0", sub: "제로", tags: [], desc: "" },
  { id: "DBARMOR-9", series: "burst", type: "dbarmor", name: "9", en: "9", sub: "나인", tags: [], desc: "" },
  { id: "DBARMOR-1", series: "burst", type: "dbarmor", name: "1", en: "1", sub: "원", tags: [], desc: "" },
  { id: "DBARMOR-4", series: "burst", type: "dbarmor", name: "4", en: "4", sub: "포", tags: [], desc: "" },
  { id: "DBARMOR-8", series: "burst", type: "dbarmor", name: "8", en: "8", sub: "에이트", tags: [], desc: "" },
  { id: "EVOLUTIONGEAR-F", series: "burst", type: "evolutiongear", name: "F", en: "F", tags: [], desc: "" },
  { id: "EVOLUTIONGEAR-S", series: "burst", type: "evolutiongear", name: "S", en: "S", tags: [], desc: "" },
  { id: "EVOLUTIONGEAR-L", series: "burst", type: "evolutiongear", name: "L", en: "L", tags: [], desc: "" },
  { id: "EVOLUTIONGEAR-V", series: "burst", type: "evolutiongear", name: "V", en: "V", tags: [], desc: "" },
  { id: "EVOLUTIONGEAR-A", series: "burst", type: "evolutiongear", name: "A", en: "A", tags: [], desc: "" },
  { id: "EVOLUTIONGEAR-D", series: "burst", type: "evolutiongear", name: "D", en: "D", tags: [], desc: "" },
  { id: "EVOLUTIONGEAR-H", series: "burst", type: "evolutiongear", name: "H", en: "H", tags: [], desc: "" },
  { id: "EVOLUTIONGEAR-VS", series: "burst", type: "evolutiongear", name: "VS", en: "VS", tags: [], desc: "" },
  { id: "DISK-WING", series: "burst", type: "disk", name: "W", en: "Wing", sub: "윙", tags: [], desc: "" },
  { id: "DISK-SPREAD", series: "burst", type: "disk", name: "S", en: "Spread", sub: "스프레드", tags: [], desc: "" },
  { id: "DISK-HEAVY", series: "burst", type: "disk", name: "H", en: "Heavy", sub: "헤비", tags: [], desc: "" },
  { id: "DISK-CENTRAL", series: "burst", type: "disk", name: "C", en: "Central", sub: "센트럴", tags: [], desc: "" },
  { id: "DISK-OUTER", series: "burst", type: "disk", name: "Ω", en: "Outer", sub: "아우터", tags: [], desc: "" },
  { id: "DISK-AERO", series: "burst", type: "disk", name: "α", en: "Aero", sub: "에어로", tags: [], desc: "" },
  { id: "DISK-AERO-DASH", series: "burst", type: "disk", name: "α'", en: "Aero'", sub: "에어로 대시", tags: [], desc: "" },
  { id: "DISK-OVAL", series: "burst", type: "disk", name: "O", en: "Oval", sub: "오벌", tags: [], desc: "" },
  { id: "DISK-ARMED", series: "burst", type: "disk", name: "A", jpName: "암드", en: "Armed", sub: "아머", tags: [], desc: "" },
  { id: "DISK-RING", series: "burst", type: "disk", name: "R", en: "Ring", sub: "링", tags: [], desc: "" },
  { id: "DISK-FORCE", series: "burst", type: "disk", name: "F", en: "Force", sub: "포스", tags: [], desc: "" },
  { id: "DISK-BOOST", series: "burst", type: "disk", name: "B", en: "Boost", sub: "부스트", tags: [], desc: "" },
  { id: "DISK-KNUCKLE", series: "burst", type: "disk", name: "K", en: "Knuckle", sub: "너클", tags: [], desc: "" },
  { id: "DISK-GRAVITY", series: "burst", type: "disk", name: "G", en: "Gravity", sub: "그래비티", tags: [], desc: "" },
  { id: "DISK-LIMITED", series: "burst", type: "disk", name: "L", en: "Limited", sub: "리미티드", tags: [], desc: "" },
  { id: "DISK-VERTICAL", series: "burst", type: "disk", name: "V", en: "Vertical", sub: "버티컬", tags: [], desc: "" },
  { id: "DISK-UPPER", series: "burst", type: "disk", name: "U", en: "Upper", sub: "어퍼", tags: [], desc: "" },
  { id: "DISK-TRIPLE", series: "burst", type: "disk", name: "T", en: "Triple", sub: "트리플", tags: [], desc: "" },
  { id: "DISK-MAGNUM", series: "burst", type: "disk", name: "M", en: "Magnum", sub: "매그넘", tags: [], desc: "" },
  { id: "DISK-BUMPER", series: "burst", type: "disk", name: "β", en: "Bumper", sub: "범퍼", tags: [], desc: "" },
  { id: "DISK-DOWN", series: "burst", type: "disk", name: "D", en: "Down", sub: "다운", tags: [], desc: "" },
  { id: "DISK-INFINITY", series: "burst", type: "disk", name: "I", en: "Infinity", sub: "인피니티", tags: [], desc: "" },
  { id: "DISK-JERK", series: "burst", type: "disk", name: "J", en: "Jerk", sub: "저크", tags: [], desc: "" },
  { id: "DISK-POLISH", series: "burst", type: "disk", name: "P", en: "Polish", sub: "폴리시", tags: [], desc: "" },
  { id: "DISK-NINE", series: "burst", type: "disk", name: "N", en: "Nine", sub: "나인", tags: [], desc: "" },
  { id: "DISK-QUARTER", series: "burst", type: "disk", name: "Q", en: "Quarter", sub: "쿼터", tags: [], desc: "" },
  { id: "DISK-YELL", series: "burst", type: "disk", name: "Y", en: "Yell", sub: "옐", tags: [], desc: "" },
  { id: "DISK-ZENITH", series: "burst", type: "disk", name: "Z", en: "Zenith", sub: "제니스", tags: [], desc: "" },
  { id: "DISK-STING", series: "burst", type: "disk", name: "St", en: "Sting", sub: "스팅", tags: [], desc: "" },
  { id: "DISK-BLITZ", series: "burst", type: "disk", name: "Bl", en: "Blitz", sub: "블릿츠", tags: [], desc: "" },
  { id: "DISK-HURRICANE", series: "burst", type: "disk", name: "Hr", en: "Hurricane", sub: "허리케인", tags: [], desc: "" },
  { id: "DISK-RATCHET", series: "burst", type: "disk", name: "Rt", en: "Ratchet", sub: "래칫", tags: [], desc: "" },
  { id: "DISK-DRAKE", series: "burst", type: "disk", name: "Dr", en: "Drake", sub: "드레이크", tags: [], desc: "" },
  { id: "DISK-VANGUARD", series: "burst", type: "disk", name: "Vn", en: "Vanguard", sub: "뱅가드", tags: [], desc: "" },
  { id: "DISK-AROUND", series: "burst", type: "disk", name: "Ar", en: "Around", sub: "어라운드", tags: [], desc: "" },
  { id: "DISK-CONVERT", series: "burst", type: "disk", name: "Cn", en: "Convert", sub: "컨버트", tags: [], desc: "" },
  { id: "DISK-PARADOX", series: "burst", type: "disk", name: "Pr", en: "Paradox", sub: "패러독스", tags: [], desc: "" },
  { id: "DISK-WHEEL", series: "burst", type: "disk", name: "Wh", en: "Wheel", sub: "휠", tags: [], desc: "" },
  { id: "DISK-CHO", series: "burst", type: "disk", name: "超", en: "Cho", sub: "초", tags: [], desc: "" },
  { id: "DISK-OU", series: "burst", type: "disk", name: "王", en: "Ou", sub: "왕", tags: [], desc: "" },
  { id: "DISK-KOU", series: "burst", type: "disk", name: "皇", en: "Kou", sub: "황", tags: [], desc: "" },
  { id: "COREDISK-0", series: "burst", type: "coredisk", name: "0", en: "0", sub: "제로", tags: [], desc: "" },
  { id: "COREDISK-1", series: "burst", type: "coredisk", name: "1", en: "1", sub: "원", tags: [], desc: "" },
  { id: "COREDISK-1-DASH", series: "burst", type: "coredisk", name: "1'", en: "1'", sub: "원 대시", tags: [], desc: "" },
  { id: "COREDISK-2", series: "burst", type: "coredisk", name: "2", en: "2", sub: "투", tags: [], desc: "" },
  { id: "COREDISK-3", series: "burst", type: "coredisk", name: "3", en: "3", sub: "쓰리", tags: [], desc: "" },
  { id: "COREDISK-4", series: "burst", type: "coredisk", name: "4", en: "4", sub: "포", tags: [], desc: "" },
  { id: "COREDISK-5", series: "burst", type: "coredisk", name: "5", en: "5", sub: "파이브", tags: [], desc: "" },
  { id: "COREDISK-6", series: "burst", type: "coredisk", name: "6", en: "6", sub: "식스", tags: [], desc: "" },
  { id: "COREDISK-7", series: "burst", type: "coredisk", name: "7", en: "7", sub: "세븐", tags: [], desc: "" },
  { id: "COREDISK-8", series: "burst", type: "coredisk", name: "8", en: "8", sub: "에이트", tags: [], desc: "" },
  { id: "COREDISK-8-DASH", series: "burst", type: "coredisk", name: "8'", en: "8'", sub: "에이트 대시", tags: [], desc: "" },
  { id: "COREDISK-10", series: "burst", type: "coredisk", name: "10", en: "10", sub: "텐", tags: [], desc: "" },
  { id: "COREDISK-11", series: "burst", type: "coredisk", name: "11", en: "11", sub: "일레븐", tags: [], desc: "" },
  { id: "COREDISK-12", series: "burst", type: "coredisk", name: "12", en: "12", sub: "트웰브", tags: [], desc: "" },
  { id: "COREDISK-13", series: "burst", type: "coredisk", name: "13", en: "13", sub: "서틴", tags: [], desc: "" },
  { id: "COREDISK-00", series: "burst", type: "coredisk", name: "00", en: "00", sub: "더블오", tags: [], desc: "" },
  { id: "FRAME-VORTEX", series: "burst", type: "frame", name: "V", en: "Vortex", sub: "볼텍스", tags: [], desc: "" },
  { id: "FRAME-GLAIVE", series: "burst", type: "frame", name: "G", en: "Glaive", sub: "글레이브", tags: [], desc: "" },
  { id: "FRAME-CROSS", series: "burst", type: "frame", name: "C", en: "Cross", sub: "크로스", tags: [], desc: "" },
  { id: "FRAME-STAR", series: "burst", type: "frame", name: "S", en: "Star", sub: "스타", tags: [], desc: "" },
  { id: "FRAME-METEOR", series: "burst", type: "frame", name: "M", en: "Meteor", sub: "메테오", tags: [], desc: "" },
  { id: "FRAME-FLOW", series: "burst", type: "frame", name: "F", en: "Flow", sub: "플로", tags: [], desc: "" },
  { id: "FRAME-BUMP", series: "burst", type: "frame", name: "B", en: "Bump", sub: "범프", tags: [], desc: "" },
  { id: "FRAME-UNDER", series: "burst", type: "frame", name: "U", en: "Under", sub: "언더", tags: [], desc: "" },
  { id: "FRAME-HIT", series: "burst", type: "frame", name: "H", en: "Hit", sub: "히트", tags: [], desc: "" },
  { id: "FRAME-REACH", series: "burst", type: "frame", name: "R", en: "Reach", sub: "리치", tags: [], desc: "" },
  { id: "FRAME-LIFT", series: "burst", type: "frame", name: "L", en: "Lift", sub: "리프트", tags: [], desc: "" },
  { id: "FRAME-DAGGER", series: "burst", type: "frame", name: "D", en: "Dagger", sub: "대거", tags: [], desc: "" },
  { id: "FRAME-PROOF", series: "burst", type: "frame", name: "P", en: "Proof", sub: "프루프", tags: [], desc: "" },
  { id: "FRAME-ANGLE", series: "burst", type: "frame", name: "α", en: "Angle", sub: "앵글", tags: [], desc: "" },
  { id: "FRAME-TURN", series: "burst", type: "frame", name: "T", en: "Turn", sub: "턴", tags: [], desc: "" },
  { id: "FRAME-WALL", series: "burst", type: "frame", name: "W", en: "Wall", sub: "월", tags: [], desc: "" },
  { id: "FRAME-EXPAND", series: "burst", type: "frame", name: "E", en: "Expand", sub: "익스팬드", tags: [], desc: "" },
  { id: "FRAME-X", series: "burst", type: "frame", name: "A", en: "X", sub: "엑스", tags: [], desc: "" },
  { id: "DBDISK-NEXUS", series: "burst", type: "dbdisk", name: "Nx", en: "Nexus", sub: "넥서스", tags: [], desc: "" },
  { id: "DBDISK-GIGA", series: "burst", type: "dbdisk", name: "Gg", en: "Giga", sub: "기가", tags: [], desc: "" },
  { id: "DBDISK-TAPERED", series: "burst", type: "dbdisk", name: "Tp", en: "Tapered", sub: "테이퍼드", tags: [], desc: "" },
  { id: "DBDISK-OVER", series: "burst", type: "dbdisk", name: "Ov", en: "Over", sub: "오버", tags: [], desc: "" },
  { id: "DBDISK-KARMA", series: "burst", type: "dbdisk", name: "Kr", en: "Karma", sub: "카르마", tags: [], desc: "" },
  { id: "DBDISK-LEGACY", series: "burst", type: "dbdisk", name: "Lg", en: "Legacy", sub: "레거시", tags: [], desc: "" },
  { id: "DBDISK-CIQUEX", series: "burst", type: "dbdisk", name: "Cq", en: "Ciquex", sub: "시퀙스", tags: [], desc: "" },
  { id: "DBDISK-FORTRESS", series: "burst", type: "dbdisk", name: "Fr", en: "Fortress", sub: "포트리스", tags: [], desc: "" },
  { id: "DBDISK-XANTHUS", series: "burst", type: "dbdisk", name: "Xn", en: "Xanthus", sub: "잔저스", tags: [], desc: "" },
  { id: "DBDISK-ILLEGAL", series: "burst", type: "dbdisk", name: "Il", en: "Illegal", sub: "일리걸", tags: [], desc: "" },
  { id: "DBDISK-MOON", series: "burst", type: "dbdisk", name: "Mn", en: "Moon", sub: "문", tags: [], desc: "" },
  { id: "DBDISK-SPREAD-DASH", series: "burst", type: "dbdisk", name: "S'", en: "Spread'", sub: "스프레드 대시", tags: [], desc: "" },
  { id: "DBDISK-WING-DASH", series: "burst", type: "dbdisk", name: "W'", en: "Wing'", sub: "윙 대시", tags: [], desc: "" },
  { id: "DRIVER-ACCEL", series: "burst", type: "driver", name: "A", en: "Accel", sub: "액셀", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-FUSION", series: "burst", type: "driver", name: "F", en: "Fusion", sub: "퓨전", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-SURVIVE", series: "burst", type: "driver", name: "S", en: "Survive", sub: "서바이브", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-DEFENSE", series: "burst", type: "driver", name: "D", en: "Defense", sub: "디펜스", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-ASSAULT", series: "burst", type: "driver", name: "α", en: "Assault", sub: "어썰트", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-MASSIVE", series: "burst", type: "driver", name: "M", en: "Massive", sub: "매시브", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-CLAW", series: "burst", type: "driver", name: "C", en: "Claw", sub: "클로", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-BLOW", series: "burst", type: "driver", name: "B", en: "Blow", sub: "블로", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-EDGE", series: "burst", type: "driver", name: "E", en: "Edge", sub: "엣지", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-QUAKE", series: "burst", type: "driver", name: "Q", en: "Quake", sub: "퀘이크", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-XTREME", series: "burst", type: "driver", name: "X", en: "Xtreme", sub: "익스트림", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-NEEDLE", series: "burst", type: "driver", name: "N", en: "Needle", sub: "니들", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-ZEPHYR", series: "burst", type: "driver", name: "Z", en: "Zephyr", sub: "제퍼", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-GYRO", series: "burst", type: "driver", name: "G", en: "Gyro", sub: "자이로", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-VARIABLE", series: "burst", type: "driver", name: "V", en: "Variable", sub: "배리어블", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-UNITE", series: "burst", type: "driver", name: "U", en: "Unite", sub: "유나이트", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-REVOLVE", series: "burst", type: "driver", name: "R", en: "Revolve", sub: "리볼브", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-PRESS", series: "burst", type: "driver", name: "P", en: "Press", sub: "프레스", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-ORBIT", series: "burst", type: "driver", name: "O", en: "Orbit", sub: "오르빗", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-JAGGY", series: "burst", type: "driver", name: "J", en: "Jaggy", sub: "재기", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-OCTA", series: "burst", type: "driver", name: "Ω", en: "Octa", sub: "옥타", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-BITE", series: "burst", type: "driver", name: "β", en: "Bite", sub: "바이트", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-IMPACT", series: "burst", type: "driver", name: "I", en: "Impact", sub: "임팩트", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-YIELDING", series: "burst", type: "driver", name: "Y", en: "Yielding", sub: "일딩", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-TRANS", series: "burst", type: "driver", name: "T", en: "Trans", sub: "트랜스", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-WEIGHT", series: "burst", type: "driver", name: "W", en: "Weight", sub: "웨이트", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-HOLD", series: "burst", type: "driver", name: "H", en: "Hold", sub: "홀드", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-LINER", series: "burst", type: "driver", name: "L", en: "Liner", sub: "라이너", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-SPIRAL", series: "burst", type: "driver", name: "Sp", en: "Spiral", sub: "스파이럴", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-CYCLE", series: "burst", type: "driver", name: "Cy", en: "Cycle", sub: "사이클", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-REBOOT", series: "burst", type: "driver", name: "Rb", en: "Reboot", sub: "리부트", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-LOOP", series: "burst", type: "driver", name: "Lp", en: "Loop", sub: "루프", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-FLUGEL", series: "burst", type: "driver", name: "Fl", en: "Flugel", sub: "플뤼겔", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-NOTHING", series: "burst", type: "driver", name: "Nt", en: "Nothing", sub: "너싱", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-ATOMIC", series: "burst", type: "driver", name: "At", en: "Atomic", sub: "아토믹", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-HUNTER", series: "burst", type: "driver", name: "Hn", en: "Hunter", sub: "헌터", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-MERGE", series: "burst", type: "driver", name: "Mr", en: "Merge", sub: "머지", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-GUARD", series: "burst", type: "driver", name: "Gr", en: "Guard", sub: "가드", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-PLANET", series: "burst", type: "driver", name: "Pl", en: "Planet", sub: "플래닛", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-IRON", series: "burst", type: "driver", name: "Ir", en: "Iron", sub: "아이언", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-TOWER", series: "burst", type: "driver", name: "Tw", en: "Tower", sub: "타워", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-DESTROY", series: "burst", type: "driver", name: "Ds", en: "Destroy", sub: "디스트로이", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ZETA", series: "burst", type: "driver", name: "Zt", en: "Zeta", sub: "제타", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-BEARING", series: "burst", type: "driver", name: "Br", en: "Bearing", sub: "베어링", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-ULTIMATE-REBOOT", series: "burst", type: "driver", name: "Ul", en: "Ultimate Reboot", sub: "얼티메이트 리부트", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-MUGEN", series: "burst", type: "driver", name: "∞", en: "Mugen", sub: "무한", tags: [], desc: "" },
  { id: "DRIVER-MUGEN-L", series: "burst", type: "driver", name: "∞L", en: "Mugen L", sub: "무한 L", tags: [], desc: "" },
  { id: "DRIVER-WEDGE", series: "burst", type: "driver", name: "Wd", en: "Wedge", sub: "웻지", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-XTEND", series: "burst", type: "driver", name: "Xt", en: "Xtend", sub: "익스텐드", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-VOLCANIC", series: "burst", type: "driver", name: "Vl", en: "Volcanic", sub: "볼카닉", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-YARD", series: "burst", type: "driver", name: "Yr", en: "Yard", sub: "야드", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-JOLT", series: "burst", type: "driver", name: "Jl", en: "Jolt", sub: "졸트", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-OPERATE", series: "burst", type: "driver", name: "Op", en: "Operate", sub: "오퍼레이트", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-ETERNAL", series: "burst", type: "driver", name: "Et", en: "Eternal", sub: "이터널", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-FRICTION", series: "burst", type: "driver", name: "Fr", en: "Friction", sub: "프릭션", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-SWORD", series: "burst", type: "driver", name: "Sw", en: "Sword", sub: "소드", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ABSORB", series: "burst", type: "driver", name: "Ab", en: "Absorb", sub: "업소브", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-ANCHOR", series: "burst", type: "driver", name: "αn", en: "Anchor", sub: "앵커", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-EVOLUTION", series: "burst", type: "driver", name: "Ev", en: "Evolution", sub: "에볼루션", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-QUEST", series: "burst", type: "driver", name: "Qs", en: "Quest", sub: "퀘스트", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-DIMENSION", series: "burst", type: "driver", name: "Dm", en: "Dimension", sub: "디멘션", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-CHARGE", series: "burst", type: "driver", name: "Ch", en: "Charge", sub: "차지", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-KEEP", series: "burst", type: "driver", name: "Kp", en: "Keep", sub: "킵", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-POWER", series: "burst", type: "driver", name: "Pw", en: "Power", sub: "파워", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-RISE", series: "burst", type: "driver", name: "Rs", en: "Rise", sub: "라이즈", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-TRICK", series: "burst", type: "driver", name: "Tr", en: "Trick", sub: "트릭", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-BULLET", series: "burst", type: "driver", name: "Bl", en: "Bullet", sub: "불릿", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-LOW", series: "burst", type: "driver", name: "Lw", en: "Low", sub: "로우", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-ORBIT-METAL", series: "burst", type: "driver", name: "Om", en: "Orbit Metal", sub: "오르빗 메탈", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-XTEND-PLUS", series: "burst", type: "driver", name: "Xt+", en: "Xtend+", sub: "익스텐드 플러스", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-GENERATE", series: "burst", type: "driver", name: "Gn", en: "Generate", sub: "제네레이트", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-YARD-METAL", series: "burst", type: "driver", name: "Ym", en: "Yard Metal", sub: "야드 메탈", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-XCEED", series: "burst", type: "driver", name: "Xc", en: "Xceed", sub: "익시드", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ZONE", series: "burst", type: "driver", name: "Zn", en: "Zone", sub: "존", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-UNIVERSE", series: "burst", type: "driver", name: "Un", en: "Universe", sub: "유니버스", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-MOBIUS", series: "burst", type: "driver", name: "Mb", en: "Mobius", sub: "뫼비우스", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-CHARGE-METAL", series: "burst", type: "driver", name: "Cm", en: "Charge Metal", sub: "차지 메탈", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-WAVE", series: "burst", type: "driver", name: "Wv", en: "Wave", sub: "웨이브", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-DRIFT", series: "burst", type: "driver", name: "Dr", en: "Drift", sub: "드리프트", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-JUST", series: "burst", type: "driver", name: "Js", en: "Just", sub: "저스트", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-QUICK", series: "burst", type: "driver", name: "Q", en: "Quick", sub: "퀵", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-VENTURE", series: "burst", type: "driver", name: "Vn", en: "Venture", sub: "벤처", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-NEVER", series: "burst", type: "driver", name: "Nv", en: "Never", sub: "네버", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-KICK", series: "burst", type: "driver", name: "Kc", en: "Kick", sub: "킥", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-MOMENT", series: "burst", type: "driver", name: "Mm", en: "Moment", sub: "모멘트", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-SHOT", series: "burst", type: "driver", name: "Sh", en: "Shot", sub: "샷", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-QUATTRO", series: "burst", type: "driver", name: "Qt", en: "Quattro", sub: "콰트로", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-ALMIGHT", series: "burst", type: "driver", name: "Al", en: "Almight", sub: "올마이트", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ADVENTURE", series: "burst", type: "driver", name: "Ad", en: "Adventure", sub: "어드벤처", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-BOUNCE", series: "burst", type: "driver", name: "Bn", en: "Bounce", sub: "바운스", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-XPLOSION", series: "burst", type: "driver", name: "Xp", en: "Xplosion", sub: "익스플로전", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ZEAL", series: "burst", type: "driver", name: "Zl", en: "Zeal", sub: "질", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-BEARING-DRIFT", series: "burst", type: "driver", name: "BDr", en: "Bearing Drift", sub: "베어링 드리프트", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-BEARING-MOBIUS", series: "burst", type: "driver", name: "BMb", en: "Bearing Mobius", sub: "베어링 뫼비우스", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-XTREME-DASH", series: "burst", type: "driver", name: "X'", en: "Xtreme'", sub: "익스트림 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ZEPHYR-DASH", series: "burst", type: "driver", name: "Z'", en: "Zephyr'", sub: "제퍼 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-HUNTER-DASH", series: "burst", type: "driver", name: "Hn'", en: "Hunter'", sub: "헌터 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-DESTROY-DASH", series: "burst", type: "driver", name: "Ds'", en: "Destroy'", sub: "디스트로이 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ZETA-DASH", series: "burst", type: "driver", name: "Zt'", en: "Zeta'", sub: "제타 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-HOLD-DASH", series: "burst", type: "driver", name: "H'", en: "Hold'", sub: "홀드 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-QUICK-DASH", series: "burst", type: "driver", name: "Qc'", en: "Quick'", sub: "퀵 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-REBOOT-DASH", series: "burst", type: "driver", name: "Rb'", en: "Reboot'", sub: "리부트 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-VOLCANIC-DASH", series: "burst", type: "driver", name: "Vl'", en: "Volcanic'", sub: "볼카닉 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-FUSION-DASH", series: "burst", type: "driver", name: "F'", en: "Fusion'", sub: "퓨전 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-BLOW-DASH", series: "burst", type: "driver", name: "B'", en: "Blow'", sub: "블로 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ACCEL-DASH", series: "burst", type: "driver", name: "A'", en: "Accel'", sub: "액셀 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-MERGE-DASH", series: "burst", type: "driver", name: "Mr'", en: "Merge'", sub: "머지 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-SPIRAL-DASH", series: "burst", type: "driver", name: "Sp'", en: "Spiral'", sub: "스파이럴 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-DIMENSION-DASH", series: "burst", type: "driver", name: "Dm'", en: "Dimension'", sub: "디멘션 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-JOLT-DASH", series: "burst", type: "driver", name: "Jl'", en: "Jolt'", sub: "졸트 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-QUAKE-DASH", series: "burst", type: "driver", name: "Q'", en: "Quake'", sub: "퀘이크 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-VARIABLE-DASH", series: "burst", type: "driver", name: "V'", en: "Variable'", sub: "배리어블 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-TRANS-DASH", series: "burst", type: "driver", name: "T'", en: "Trans'", sub: "트랜스 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-KEEP-DASH", series: "burst", type: "driver", name: "Kp'", en: "Keep'", sub: "킵 대시", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-UNITE-DASH", series: "burst", type: "driver", name: "U'", en: "Unite'", sub: "유나이트 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-ULTIMATE-REBOOT-DASH", series: "burst", type: "driver", name: "Ul'", en: "Ultimate Reboot'", sub: "얼티메이트 리부트 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ASSAULT-DASH", series: "burst", type: "driver", name: "α'", en: "Assault'", sub: "어썰트 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-LINER-DASH", series: "burst", type: "driver", name: "L'", en: "Liner'", sub: "라이너 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-JAGGY-DASH", series: "burst", type: "driver", name: "J'", en: "Jaggy'", sub: "재기 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-OPERATE-DASH", series: "burst", type: "driver", name: "Op'", en: "Operate'", sub: "오퍼레이트 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-EVOLUTION-DASH", series: "burst", type: "driver", name: "Ev'", en: "Evolution'", sub: "에볼루션 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-CHARGE-DASH", series: "burst", type: "driver", name: "Ch'", en: "Charge'", sub: "차지 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-XCEED-DASH", series: "burst", type: "driver", name: "Xc'", en: "Xceed'", sub: "익시드 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-ZONE-DASH", series: "burst", type: "driver", name: "Zn'", en: "Zone'", sub: "존 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-WAVE-DASH", series: "burst", type: "driver", name: "Wv'", en: "Wave'", sub: "웨이브 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-BEARING-DASH", series: "burst", type: "driver", name: "Br'", en: "Bearing'", sub: "베어링 대시", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-ATOMIC-DASH", series: "burst", type: "driver", name: "At'", en: "Atomic'", sub: "아토믹 대시", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-YARD-DASH", series: "burst", type: "driver", name: "Yr'", en: "Yard'", sub: "야드 대시", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-WEDGE-DASH", series: "burst", type: "driver", name: "Wd'", en: "Wedge'", sub: "웻지 대시", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-CHARGE-METAL-DASH", series: "burst", type: "driver", name: "Cm'", en: "Charge Metal'", sub: "차지 메탈 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-SWORD-DASH", series: "burst", type: "driver", name: "Sw'", en: "Sword'", sub: "소드 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-JUST-DASH", series: "burst", type: "driver", name: "Js'", en: "Just'", sub: "저스트 대시", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-REVOLVE-DASH", series: "burst", type: "driver", name: "R'", en: "Revolve'", sub: "리볼브 대시", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-QUATTRO-DASH", series: "burst", type: "driver", name: "Qt'", en: "Quattro'", sub: "콰트로 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-MOMENT-DASH", series: "burst", type: "driver", name: "Mm'", en: "Moment'", sub: "모멘트 대시", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-PLANET-DASH", series: "burst", type: "driver", name: "Pl'", en: "Planet'", sub: "플래닛 대시", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-XPLOSION-DASH", series: "burst", type: "driver", name: "Xp'", en: "Xplosion'", sub: "익스플로전 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-HYBRID", series: "burst", type: "driver", name: "Hy", en: "Hybrid", sub: "하이브리드", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-IGNITION-DASH", series: "burst", type: "driver", name: "Ig'", en: "Ignition'", sub: "이그니션 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-HIGH-SURVIVE", series: "burst", type: "driver", name: "HS", en: "High Survive", sub: "하이 서바이브", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-HIGH-DEFENSE", series: "burst", type: "driver", name: "HD", en: "High Defense", sub: "하이 디펜스", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-HIGH-ZEPHYR", series: "burst", type: "driver", name: "HZ", en: "High Zephyr", sub: "하이 제퍼", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-HIGH-MASSIVE", series: "burst", type: "driver", name: "HM", en: "High Massive", sub: "하이 매시브", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-HIGH-REVOLVE", series: "burst", type: "driver", name: "HR", en: "High Revolve", sub: "하이 리볼브", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-HIGH-ETERNAL", series: "burst", type: "driver", name: "HEt", en: "High Eternal", sub: "하이 이터널", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-HIGH-BLOW-DASH", series: "burst", type: "driver", name: "HB'", en: "High Blow'", sub: "하이 블로 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-HIGH-JAGGY-DASH", series: "burst", type: "driver", name: "HJ'", en: "High Jaggy'", sub: "하이 재기 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-HIGH-ACCEL-DASH", series: "burst", type: "driver", name: "HA'", en: "High Accel'", sub: "하이 엑셀 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-HIGH-HOLD-DASH", series: "burst", type: "driver", name: "HH'", en: "High Hold'", sub: "하이 홀드 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-HIGH-XTEND-PLUS-DASH", series: "burst", type: "driver", name: "HXt+'", en: "High Xtend+'", sub: "하이 익스텐드 플러스 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-HIGH-CHARGE-DASH", series: "burst", type: "driver", name: "HCh'", en: "High Charge'", sub: "하이 차지 대시", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-HIGH-WAVE-DASH", series: "burst", type: "driver", name: "HWv'", en: "High Wave'", sub: "하이 웨이브 대시", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-METAL-FUSION", series: "burst", type: "driver", name: "MF", en: "Metal Fusion", sub: "메탈 퓨전", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-METAL-ACCEL", series: "burst", type: "driver", name: "MA", en: "Metal Accel", sub: "메탈 액셀", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-METAL-DEFENSE", series: "burst", type: "driver", name: "MD", en: "Metal Defense", sub: "메탈 디펜스", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-METAL-SURVIVE", series: "burst", type: "driver", name: "MS", en: "Metal Survive", sub: "메탈 서바이브", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVER-METAL-XTREME", series: "burst", type: "driver", name: "MX", en: "Metal Xtreme", sub: "메탈 익스트림", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-METAL-DESTROY", series: "burst", type: "driver", name: "MDs", en: "Metal Destroy", sub: "메탈 디스트로이", battleType: "attack", tags: [], desc: "" },
  { id: "DRIVER-METAL-UNIVERSE", series: "burst", type: "driver", name: "MUn", en: "Metal Universe", sub: "메탈 유니버스", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-METAL-DRIFT", series: "burst", type: "driver", name: "MDr", en: "Metal Drift", sub: "메탈 드리프트", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-METAL-DIMENSION", series: "burst", type: "driver", name: "MDm", en: "Metal Dimension", sub: "메탈 디멘션", battleType: "balance", tags: [], desc: "" },
  { id: "DRIVER-METAL-BEARING-DRIFT", series: "burst", type: "driver", name: "MBD", en: "Metal Bearing Drift", sub: "메탈 베어링 드리프트", battleType: "defense", tags: [], desc: "" },
  { id: "DRIVER-METAL-NEVER", series: "burst", type: "driver", name: "MNv", en: "Metal Never", sub: "메탈 네버", battleType: "stamina", tags: [], desc: "" },
  { id: "DRIVERUPGRADE-XCEED", series: "burst", type: "driverupgrade", name: "익시드", en: "Xceed", tags: [], desc: "" },
  { id: "DRIVERUPGRADE-ZONE", series: "burst", type: "driverupgrade", name: "존", en: "Zone", tags: [], desc: "" }
];

const catalogCoreItems = [...beyItems, ...partItems];

const globalSearch = document.querySelector("#globalSearchInput");
const globalSearchScope = document.querySelector("#globalSearchScope");
const overviewSearchScope = document.querySelector("#overviewSearchScope");
const catalogSearchScope = document.querySelector("#catalogSearchScope");
const catalogSeriesFilter = document.querySelector("#catalogSeriesFilter");
const catalogSearch = document.querySelector("#catalogSearchInput");
const catalogSearchHelpButton = document.querySelector("#catalogSearchHelpButton");
const catalogSearchHelpPopover = document.querySelector("#catalogSearchHelpPopover");
const animeSearch = document.querySelector("#animeSearchInput");
const animeSearchHelpButton = document.querySelector("#animeSearchHelpButton");
const animeSearchHelpPopover = document.querySelector("#animeSearchHelpPopover");
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
const setCatalogSearchScope = scope => setSearchScope(catalogSearchScope, "data-catalog-search-scope", scope || "all");
const setCatalogSeriesFilter = series => setSearchScope(catalogSeriesFilter, "data-catalog-series", series || "all");
const overviewSearch = document.querySelector("#overviewSearchInput");
const searchInputRoot = input => input?.closest(".overview-search, .search-box");
const searchClearButton = input => searchInputRoot(input)?.querySelector(".search-clear");
const syncSearchInputState = input => {
  if (!input) return;
  const hasValue = input.value.length > 0;
  input.classList.toggle("has-value", hasValue);
  const clearButton = searchClearButton(input);
  if (clearButton) clearButton.hidden = !hasValue;
};
const setSearchInputValue = (input, value = "") => {
  if (!input) return;
  input.value = value;
  syncSearchInputState(input);
};
const clearSearchInputs = () => {
  setSearchInputValue(globalSearch, "");
  setSearchInputValue(overviewSearch, "");
  setSearchInputValue(catalogSearch, "");
  setSearchInputValue(animeSearch, "");
};
const activeAppPanel = () => document.querySelector(".app-panel.active");
const toTop = document.querySelector("#toTop");
const menuButton = document.querySelector("#menuButton");
const mobileDrawer = document.querySelector("#mobileDrawer");
const mobileDrawerClose = document.querySelector(".mobile-drawer-close");
const desktopSidebar = document.querySelector(".desktop-sidebar");
const desktopSidebarToggle = desktopSidebar?.querySelector(".desktop-sidebar-toggle");
const desktopSidebarNav = desktopSidebar?.querySelector(".desktop-sidebar-nav");
const sidebarButtonSectionAttributes = [
  ["data-sidebar-home", "overview"],
  ["data-category-catalog-open", "catalog"],
  ["data-category-release-open", "release"],
  ["data-category-anime-episodes-open", "anime-episodes"],
  ["data-category-anime-open", "anime"]
];
const sidebarCurrentButtonSelector = sidebarButtonSectionAttributes.map(([attribute]) => `[${attribute}]`).join(", ");
const getSidebarRoots = () => Array.from(document.querySelectorAll("[data-sidebar-root]"));
const sidebarSectionForButton = button => sidebarButtonSectionAttributes.find(([attribute]) => button.hasAttribute(attribute))?.[1] || "";
const normalizedSidebarSection = section => {
  if (["catalog", "bey", "tools"].includes(section)) return "catalog";
  return ["overview", "release", "anime", "anime-episodes"].includes(section) ? section : "";
};
const setSidebarButtonCurrent = (button, active) => {
  const disabled = button.disabled || button.getAttribute("aria-disabled") === "true";
  const current = Boolean(active && !disabled);
  button.classList.toggle("active", current);
  if (current) button.setAttribute("aria-current", "page");
  else button.removeAttribute("aria-current");
};
const renderDesktopSidebarNavFromDrawer = () => {
  const sourceNav = mobileDrawer?.querySelector(".mobile-drawer-nav");
  if (desktopSidebarNav && sourceNav) desktopSidebarNav.innerHTML = sourceNav.innerHTML;
};
renderDesktopSidebarNavFromDrawer();
const typeLabels = { bey: "베이", parts: "부품", tools: "장비", face: "페이스", wheel: "휠", clearwheel: "클리어휠", lightwheel: "라이트휠", metalwheel: "메탈휠", "4dclearwheel": "4D클리어휠", "4dmetalwheel": "4D메탈휠", track: "트랙", bottom: "버텀", "4dbottom": "4D버텀", stoneface: "스톤페이스", chromewheel: "크롬휠", crystalwheel: "크리스탈휠", bitchip: "비트칩", attackring: "어택링", weightdisk: "웨이트디스크", bladebase: "블레이드베이스", gear: "기어", layer: "레이어", duallayer: "듀얼레이어", godlayer: "갓레이어", chozlayer: "초제트레이어", gachichip: "진검칩", gachiweight: "웨이트", gachibase: "베이스", gachilayer: "진검레이어", gachiupgrade: "강화파츠", superkingchip: "슈퍼킹칩", superkingring: "링", superkingchassis: "섀시", superkingupgrade: "강화파츠", dblayer: "DB레이어", dbcore: "DB코어", dbblade: "블레이드", dbarmor: "아머", evolutiongear: "진화기어", disk: "디스크", coredisk: "코어디스크", frame: "프레임", dbdisk: "DB디스크", driver: "드라이버", driverupgrade: "강화파츠", blade: "블레이드", ratchet: "래칫", bit: "비트" };
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
const burstBeyBattleTypeDescriptions = {
  attack: "공격에 특화되어 스태미나형에 유리하다",
  defense: "방어에 특화되어 어택형에 유리하다",
  stamina: "지구력이 높아 디펜스형에 유리하다",
  balance: "공격·방어·지구력을 고르게 갖추고 있다"
};
const spinLabels = { right: "우회전", left: "좌회전", dual: "양회전" };
const spinDescriptions = {
  right: "시계 방향으로 회전한다",
  left: "반시계 방향으로 회전한다",
  dual: "좌우회전 모두 가능하다"
};
const heightClassLabels = { low: "낮은 높이", high: "높은 높이" };
const battleTypeLabelGroup = item => ["burst", "x"].includes(typeof item === "string" ? item : item.series) ? "modern" : "classic";
const battleTypeLabel = (value, item) => battleTypeLabels[battleTypeLabelGroup(item)]?.[value] || value || "";
const battleTypeDescription = (value, item) => {
  if (item?.series === "burst" && item?.type === "bey") return burstBeyBattleTypeDescriptions[value] || "";
  return battleTypeDescriptions[battleTypeLabelGroup(item)]?.[value] || "";
};
const spinLabel = value => spinLabels[value] || value || "";
const spinDescription = value => spinDescriptions[value] || "";
const heightClassLabel = value => heightClassLabels[value] || value || "";
let activeReleaseRegion = "kr";
let activeReleaseSeries = "";
let activeReleaseSort = { key: "release", direction: "asc" };
let activeReleaseQuery = "";
let selectedCatalogKind = "";
let selectedCatalogSeries = "all";
const toolsSubtypeOptions = [
  { value: "런처", label: "런처" },
  { value: "그립", label: "그립" },
  { value: "스타디움", label: "스타디움" },
  { value: "기타", label: "기타" }
];
const dropdownButtonMarkup = ({ value = "", label = "", active = false, dataAttr, summaryLabel = "" }) => {
  const summary = summaryLabel ? ` data-summary-label="${escapeAttributeValue(summaryLabel)}"` : "";
  return `<button type="button" class="ui-dropdown-item ${active ? "active" : ""}" ${dataAttr}="${escapeAttributeValue(value)}"${summary}>${escapeHtml(label)}</button>`;
};
const tabButtonMarkup = ({ value = "", label = "", active = false, dataAttr }) =>
  `<button type="button" role="tab" class="ui-tab-button ${active ? "active" : ""}" ${dataAttr}="${escapeAttributeValue(value)}" aria-selected="${active ? "true" : "false"}">${escapeHtml(label)}</button>`;

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
  jp: { no: "", name: "케찰코아틀 90WF", sale: "한정 배포", kind: "", releaseDate: "2008-08-09", price: "0", composition: [{ name: "케찰코아틀 90WF", quantity: "1개", target: "BEY-QUETZALCOATL-90WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-11", series: "metal fight", releases: {
  kr: { no: "BB-11", name: "울프 D125B", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-12", price: "8000", composition: [{ name: "울프 D125B", quantity: "1개", target: "BEY-BB-11-WOLF-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] },
  jp: { no: "BB-11", name: "볼프 D125B", sale: "일반 판매", kind: "스타터", releaseDate: "2008-09-18", price: "819", composition: [{ name: "볼프 D125B", quantity: "1개", target: "BEY-BB-11-WOLF-D125B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "라이트런처", quantity: "1개", target: "TOOLS-LIGHT-LAUNCHER" }] } } },
{ id: "PRODUCT-BB-12", series: "metal fight", releases: {
  kr: { no: "BB-12", name: "울프 105F", sale: "일반 판매", kind: "스타터세트", releaseDate: "2008-12", price: "10400", composition: [{ name: "울프 105F", quantity: "1개", target: "BEY-BB-12-WOLF-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }, { name: "파워런처", quantity: "1개", target: "TOOLS-POWER-LAUNCHER" }] },
  jp: { no: "BB-12", name: "볼프 105F", sale: "일반 판매", kind: "부스터", releaseDate: "2008-09-18", price: "630", composition: [{ name: "볼프 105F", quantity: "1개", target: "BEY-BB-12-WOLF-105F" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } } },
{ id: "PRODUCT-BB-13", series: "metal fight", releases: {
  kr: { status: "unreleased" },
  jp: { no: "BB-13", name: "랜덤부스터 Vol.1 시크릿 아리에스", sale: "일반 판매", kind: "부스터", releaseDate: "2008-09-18", price: "630", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-13-ARIES-125D" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } }, beyPool: ["BEY-BB-13-ARIES-125D", "BEY-BB-13-SAGITTARIO-145F", "BEY-BB-13-BULL-105S", "BEY-BB-13-PEGASIS-145SF", "BEY-BB-13-LEONE-125S", "BEY-BB-13-SAGITTARIO-145SF", "BEY-BB-13-BULL-105D", "BEY-BB-13-PEGASIS-145F"] },
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
  jp: { no: "BB-25", name: "랜덤부스터 Vol.2 레전드 파이시즈", sale: "일반 판매", kind: "부스터", releaseDate: "2009-02-22", price: "630", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-25-PISCES-D125BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] } }, beyPool: ["BEY-BB-25-PISCES-D125BS", "BEY-BB-25-AQUARIO-DF145SF", "BEY-BB-25-VIRGO-125BS", "BEY-BB-25-LIBRA-D125HF", "BEY-BB-25-AQUARIO-105B", "BEY-BB-25-VIRGO-100B", "BEY-BB-25-LIBRA-100F", "BEY-BB-25-BULL-DF145HF"] },
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
  jp: { no: "BB-31", name: "랜덤부스터 라이트 Vol.1", sale: "일반 판매", kind: "부스터", releaseDate: "2009-03-28", price: "367", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-31-MAD-CANCER-CH120FS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-31-MAD-CANCER-CH120FS","BEY-BB-31-HEAT-PEGASIS-100WB", "BEY-BB-31-CLAY-WOLF-145FS", "BEY-BB-31-HEAT-WOLF-WD145SF", "BEY-BB-31-MAD-LEONE-145B", "BEY-BB-31-CLAY-LEONE-DF145WB", "BEY-BB-31-WIND-PEGASIS-DF145B", "BEY-BB-31-WIND-LEONE-D125HF"] },
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
  jp: { no: "BB-37", name: "랜덤부스터 라이트 Vol.2", sale: "일반 판매", kind: "부스터", releaseDate: "2009-05-23", price: "367", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-37-WIND-AQUARIO-100HF-S" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-37-WIND-AQUARIO-100HF-S", "BEY-BB-37-CLAY-WOLF-105B", "BEY-BB-37-CLAY-SAGITTARIO-145B", "BEY-BB-37-HEAT-PEGASIS-DF145WB", "BEY-BB-37-HEAT-LEONE-D125FS", "BEY-BB-37-MAD-SAGITTARIO-DF145HF", "BEY-BB-37-MAD-LEONE-145FS", "BEY-BB-37-WIND-WOLF-WD145WB"] },
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
  jp: { no: "BB-44", name: "랜덤부스터 Vol.3 스타더스트 페가시스", sale: "일반 판매", kind: "부스터", releaseDate: "2009-07-18", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-44-STORM-PEGASIS-100RF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-44-STORM-PEGASIS-100RF", "BEY-BB-44-ROCK-WOLF-H145B", "BEY-BB-44-DARK-LEONE-C145B", "BEY-BB-44-FLAME-WOLF-H145S", "BEY-BB-44-STORM-SAGITTARIO-145SD", "BEY-BB-44-ROCK-BULL-WD145HF", "BEY-BB-44-DARK-SAGITTARIO-WD145SD", "BEY-BB-44-FLAME-BULL-105WB"] },
{ id: "PRODUCT-BB-45", series: "metal fight", releases: {
  kr: { no: "BB-45", name: "라이트블레이드 Vol.3", sale: "일반 판매", kind: "부스터", releaseDate: "2009-09-23", price: "3200", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-45-CLAY-ARIES-ED145B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
  jp: { no: "BB-45", name: "랜덤부스터 라이트 Vol.3", sale: "일반 판매", kind: "부스터", releaseDate: "2009-08-08", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-45-CLAY-ARIES-ED145B" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BB-45-CLAY-ARIES-ED145B", "BEY-BB-45-CLAY-PEGASIS-145S", "BEY-BB-45-MAD-SAGITTARIO-C145SD", "BEY-BB-45-HEAT-BULL-D125WB", "BEY-BB-45-WIND-WOLF-H145D", "BEY-BB-45-HEAT-LEONE-H145S", "BEY-BB-45-MAD-BULL-C145HF", "BEY-BB-45-WIND-SAGITTARIO-100SD"] },
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
    jp: { no: "BB-60", name: "랜덤부스터 Vol.4 미라주 비르고", sale: "일반 판매", kind: "부스터", releaseDate: "2009-12-26", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-60-EARTH-VIRGO-GB145BS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-60-EARTH-VIRGO-GB145BS", "BEY-BB-60-EARTH-CANCER-DF145ES", "BEY-BB-60-FLAME-CAPRICORNE-T125HF", "BEY-BB-60-FLAME-AQUILA-100ES", "BEY-BB-60-ROCK-CAPRICORNE-T125D", "BEY-BB-60-ROCK-LIBRA-100WD", "BEY-BB-60-STORM-AQUILA-145HF", "BEY-BB-60-STORM-LIBRA-145S"] },
  { id: "PRODUCT-BURN-PISCES-ED145WF", series: "metal fight", releases: {
    kr: { no: "", name: "번 파이시즈 ED145WF", sale: "한정 판매", kind: "", releaseDate: "2010-08-22", price: "7000", composition: [{ name: "번 파이시즈 ED145WF", quantity: "1개", target: "BEY-BURN-PISCES-ED145WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
    jp: { no: "", name: "번 파이시즈 ED145WF", sale: "한정 배포", kind: "", releaseDate: "2010-02-15", price: "", composition: [{ name: "번 파이시즈 ED145WF", quantity: "1개", target: "BEY-BURN-PISCES-ED145WF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }} },
  { id: "PRODUCT-EARTH-AQUILA-105HFS", series: "metal fight", releases: {
    kr: { no: "", name: "어스 아쿠이라 105HF/S", sale: "한정 배포", kind: "부스터", releaseDate: "2010-08-22", price: "0", composition: [{ name: "어스 아쿠이라 105HF/S", quantity: "1개", target: "BEY-EARTH-AQUILA-105HFS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
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
    jp: { no: "", name: "베이포인트 레벨1~7", sale: "한정 배포", kind: "", releaseDate: "2010-04-01", price: "", composition: [{ name: "레벨별 교환 상품", quantity: "1개", target: "PRODUCT-BEYPOINT-LEVEL-1" }] }}, lineupTitle: "교환 상품", lineupPool: ["PRODUCT-BEYPOINT-LEVEL-1", "PRODUCT-BEYPOINT-LEVEL-2", "PRODUCT-BEYPOINT-LEVEL-3", "PRODUCT-BEYPOINT-LEVEL-4", "PRODUCT-BEYPOINT-LEVEL-5", "PRODUCT-BEYPOINT-LEVEL-6", "PRODUCT-BEYPOINT-LEVEL-7"] },
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
    kr: { no: "", name: "솔 블레이즈 V145AS", sale: "한정 배포", kind: "", releaseDate: "2011-01-10", price: "0", composition: [{ name: "솔 블레이즈 V145AS", quantity: "1개", target: "BEY-SOL-BLAZE-V145AS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] },
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
    jp: { no: "BB-82", name: "랜덤부스터 Vol.5 그랜드 케토스", sale: "일반 판매", kind: "부스터", releaseDate: "2010-07-24", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-82-GRAND-KETOS-WD145RS" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-82-GRAND-KETOS-WD145RS", "BEY-BB-82-GRAND-KETOS-T125RS", "BEY-BB-82-BURN-UNICORNO-SW145JB", "BEY-BB-82-POISON-UNICORNO-130HF", "BEY-BB-82-STORM-PHOENIX-130B", "BEY-BB-82-POISON-PHOENIX-WA130SD", "BEY-BB-82-BURN-SERPENT-WA130ES", "BEY-BB-82-STORM-SERPENT-T125HF"] },
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
  }, beyPool: ["BEY-BB-100-KILLER-BEAFOWL-UW145EWD", "BEY-BB-100-GALAXY-CANCER-D125HF", "BEY-BB-100-BURN-ESCOLPIO-100RF", "BEY-BB-100-FLAME-GEMIOS-105CS", "BEY-BB-100-KILLER-ESCOLPIO-100D", "BEY-BB-100-GALAXY-SAGITTARIO-145CS", "BEY-BB-100-FLAME-CANCER-D125RF", "BEY-BB-100-BURN-SAGITTARIO-105HF"] },
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
    jp: { no: "", name: "베이포인트 레벨1~10", sale: "한정 배포", kind: "", releaseDate: "2011-04-01", price: "", composition: [{ name: "레벨별 교환 상품", quantity: "1개", target: "PRODUCT-BEYPOINT-LEVEL-2011-1" }] }}, lineupTitle: "교환 상품", lineupPool: ["PRODUCT-BEYPOINT-LEVEL-2011-1", "PRODUCT-BEYPOINT-LEVEL-2011-2", "PRODUCT-BEYPOINT-LEVEL-2011-3", "PRODUCT-BEYPOINT-LEVEL-2011-4", "PRODUCT-BEYPOINT-LEVEL-2011-5", "PRODUCT-BEYPOINT-LEVEL-2011-6", "PRODUCT-BEYPOINT-LEVEL-2011-7", "PRODUCT-BEYPOINT-LEVEL-2011-8", "PRODUCT-BEYPOINT-LEVEL-2011-9", "PRODUCT-BEYPOINT-LEVEL-2011-10"] },
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
    jp: { no: "BB-109", name: "랜덤부스터 Vol.7 비트 링크스", sale: "일반 판매", kind: "부스터", releaseDate: "2011-04-23", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-109-BEAT-LYNX-TH170WD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: ["BEY-BB-109-BEAT-LYNX-TH170WD", "BEY-BB-109-GRAVITY-PERSEUS-BD145XF", "BEY-BB-109-HELL-HORUSEUS-85RS", "BEY-BB-109-VULCAN-HERCULEO-130DS", "BEY-BB-109-GRAVITY-PERSEUS-85DS", "BEY-BB-109-TORNADO-HORUSEUS-130RSF", "BEY-BB-109-HELL-HERCULEO-100XF", "BEY-BB-109-VULCAN-HOROGIUM-BD145RS"] },
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
    jp: { no: "BB-116", name: "랜덤부스터 Vol.8 제이드 쥬피터", sale: "일반 판매", kind: "부스터", releaseDate: "2011-08-06", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-116-JADE-JUPITER-S130RB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BB-116-JADE-JUPITER-S130RB", "BEY-BB-116-FORBIDDEN-EONIS-ED145FB", "BEY-BB-116-DIVINE-FOX-90W2D", "BEY-BB-116-SCREW-LYRA-ED145MF", "BEY-BB-116-FORBIDDEN-EONIS-130D", "BEY-BB-116-DIVINE-CROWN-TR145D", "BEY-BB-116-SCREW-FOX-TR145W2D", "BEY-BB-116-HELL-CROWN-130FB"] },
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
    jp: { no: "BB-123", name: "랜덤부스터 Vol.9 퓨전 하데스", sale: "일반 판매", kind: "부스터", releaseDate: "2011-12-18", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BB-123-FUSION-HADES-AD145SWD" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BB-123-FUSION-HADES-AD145SWD", "BEY-BB-123-HELL-BEELZEB-125XF", "BEY-BB-123-CLOUD-LYRA-85SF", "BEY-BB-123-CLOUD-GEMIOS-T125SF", "BEY-BB-123-CRASH-ESCOLPIO-125JB", "BEY-BB-123-BAKUSHIN-BEELZEB-T125XF", "BEY-BB-123-METEO-L-DRAGO-85LF-RUSH", "BEY-BB-123-METEO-L-DRAGO-LW105JB-ASSAULT"] },
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
    jp: { no: "BBG-09", name: "ZEROG 랜덤부스터 Vol.1 시프 피닉 E230GCF", sale: "일반 판매", kind: "부스터", releaseDate: "2012-04-21", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BBG-09-THIEF-PHOENIC-E230GCF" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BBG-09-THIEF-PHOENIC-E230GCF", "BEY-BBG-09-THIEF-SARAMANDA-230WB", "BEY-BBG-09-WARRIORS-SARAMANDA-E230ES", "BEY-BBG-09-PIRATES-IFRAID-T125GCF", "BEY-BBG-09-SHINOBI-IFRAID-230WD", "BEY-BBG-09-PIRATES-SARAMANDA-T125WB", "BEY-BBG-09-SHINOBI-OROJYA-145ES", "BEY-BBG-09-WARRIORS-OROJYA-145WD"] },
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
    jp: { no: "BBG-23", name: "ZEROG 랜덤부스터 Vol.3 반디드 겐블 F230TB", sale: "일반 판매", kind: "부스터", releaseDate: "2012-10-20", price: "682", composition: [{ name: "무작위 베이", quantity: "1개", target: "BEY-BBG-23-BANDID-GENBULL-F230TB" }, { name: "툴", quantity: "1개", target: "TOOLS-TOOL" }] }}, beyPool: [ "BEY-BBG-23-BANDID-GENBULL-F230TB", "BEY-BBG-23-SHINOBI-GENBULL-130W2D", "BEY-BBG-23-THIEF-SARAMANDA-F230SF", "BEY-BBG-23-SHINOBI-GRYPH-WD145TB", "BEY-BBG-23-ARCHER-PHOENIC-125B", "BEY-BBG-23-PIRATES-PHOENIC-WD145SF", "BEY-BBG-23-ARCHER-KILLERKEN-130B", "BEY-BBG-23-BANDID-KILLERKEN-125W2D"] },
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
          { name: "울버그.8.Br", quantity: "1개", target: "BEY-BURST-B-121-WOLBORG-8-BR" }
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
    id: "PRODUCT-BURST-BK-03",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-01",
        name: "드란소드 3-60F",
        kind: "스타터",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-02",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-02",
        name: "헬즈사이즈 4-60T",
        kind: "스타터",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-03",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-03",
        name: "위저드애로우 4-80B",
        kind: "스타터",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-04",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-04",
        name: "나이트실드 3-80N",
        kind: "스타터",
        releaseDate: "2023-07-15",
        price: "1980",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-05",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-05",
        name: "위저드애로우 4-80B",
        kind: "부스터",
        releaseDate: "2023-07-15",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-06",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-06",
        name: "나이트실드 3-80N",
        kind: "부스터",
        releaseDate: "2023-07-15",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-07",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        status: "unreleased"
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
        status: "unreleased"
      },
      jp: {
        no: "BX-09",
        name: "배이 배틀 패스",
        kind: "패스",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-10",
        name: "익스트림스타디움",
        kind: "스타디움",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-11",
        name: "런처그립",
        kind: "런처",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-12",
        name: "배틀 덱 케이스",
        kind: "케이스",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "익스트림스타디움 라이트패키지",
        kind: "스타디움",
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
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-13",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-13",
        name: "나이트랜스 4-80HN",
        kind: "부스터",
        releaseDate: "2023-08-10",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-14",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-14",
        name: "랜덤부스터 Vol.1",
        kind: "랜덤부스터",
        releaseDate: "2023-09-09",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-3",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "코발트드레이크 4-60F",
        kind: "",
        releaseDate: "2023-09-11",
        price: "",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-4",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "헬즈사이드 4-60T골드 Ver.",
        kind: "부스터",
        releaseDate: "2023-09-11",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-15",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-15",
        name: "레온클로 5-60P",
        kind: "스타터",
        releaseDate: "2023-10-07",
        price: "1980",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-16",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-16",
        name: "랜덤부스터 바이퍼테일 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2023-10-07",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-17",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        status: "unreleased"
      },
      jp: {
        no: "BX-18",
        name: "스트링런처",
        kind: "런처",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-19",
        name: "라이노혼 3-80S",
        kind: "부스터",
        releaseDate: "2023-11-02",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-20",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        status: "unreleased"
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
        status: "unreleased"
      },
      jp: {
        no: "BX-22",
        name: "드란소드 3-60F 엔트리패키지",
        kind: "스타터",
        releaseDate: "2023-12-02",
        price: "1400",
        composition: []
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
        kind: "블레이드",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-23",
        name: "피닉스윙 9-60GF",
        kind: "스타터",
        releaseDate: "2023-12-27",
        price: "2420",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-24",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-24",
        name: "랜덤부스터 Vol.2",
        kind: "랜덤부스터",
        releaseDate: "2023-12-27",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-25",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-25",
        name: "기어케이스",
        kind: "케이스",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "레온클로 5-60P 골드 Ver.",
        kind: "부스터",
        releaseDate: "2024-01-22",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-26",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-26",
        name: "유니콘스팅 5-60GF",
        kind: "부스터",
        releaseDate: "2024-01-27",
        price: "1400",
        composition: []
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
        kind: "",
        releaseDate: "2024-01-27",
        price: "1740",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-27",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-27",
        name: "랜덤부스터 스핑크스카울 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2024-02-22",
        price: "1400",
        composition: []
      }
    }
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
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-28",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-28",
        name: "스트링런처 화이트 Ver.",
        kind: "런처",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-29",
        name: "커스텀그립 레드 Ver.",
        kind: "그립",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-30",
        name: "커스텀그립 화이트 Ver.",
        kind: "그립",
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
        status: "unreleased"
      },
      jp: {
        no: "UX-01",
        name: "드란버스터 1-60A",
        kind: "스타터",
        releaseDate: "2024-03-30",
        price: "1980",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-02",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-02",
        name: "헬즈해머 3-70H",
        kind: "스타터",
        releaseDate: "2024-03-30",
        price: "1980",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-03",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-03",
        name: "위저드로드 5-70DB",
        kind: "부스터",
        releaseDate: "2024-03-30",
        price: "1400",
        composition: []
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
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-31",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-31",
        name: "랜덤부스터 Vol.3",
        kind: "랜덤부스터",
        releaseDate: "2024-04-27",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-04",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        name: "드래이거슬래시 4-80P",
        kind: "부스터",
        releaseDate: "2024-04-27",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-10",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "헬즈체인 5-60HT 블랙 Ver.",
        kind: "부스터",
        releaseDate: "2024-05-16",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-05",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-05",
        name: "랜덤부스터 시노비섀도우 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2024-05-18",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-11",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "커스텀그립 클리어블랙 Ver.",
        kind: "그립",
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
        kind: "블레이드",
        releaseDate: "2024-06-14",
        price: "",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-33",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-33",
        name: "바이스타이거 3-60U",
        kind: "부스터",
        releaseDate: "2024-06-15",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-13",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "코발트드라군 2-60C 블랙 Ver.",
        kind: "",
        releaseDate: "2024-07-12",
        price: "",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-32",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-32",
        name: "와이드익스트림스타디움",
        kind: "스타디움",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-34",
        name: "코발트드라군 2-60C",
        kind: "",
        releaseDate: "2024-07-13",
        price: "2321",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-NO-NUMBER-JP-1",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "",
        name: "F/T/B/N 비트 골드×블랙 Ver.",
        kind: "비트",
        releaseDate: "2024-07-30",
        price: "990",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-NO-NUMBER-JP-2",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "",
        name: "베이블레이드 스티커(3종)",
        kind: "블레이드",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-35",
        name: "랜덤부스터 Vol.4",
        kind: "랜덤부스터",
        releaseDate: "2024-07-13",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-2",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "에어로페가서스 3-70A",
        kind: "",
        releaseDate: "2024-07-30",
        price: "",
        composition: []
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
        kind: "",
        releaseDate: "2024-08-03",
        price: "1600",
        composition: []
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
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-06",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-06",
        name: "레온크레스트 7-60GN",
        kind: "",
        releaseDate: "2024-08-10",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-07",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        status: "unreleased"
      },
      jp: {
        no: "BX-36",
        name: "랜덤부스터 웨일웨이브 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2024-09-14",
        price: "1400",
        composition: []
      }
    }
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
        kind: "",
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
        kind: "",
        releaseDate: "2024-09-15",
        price: "1950",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-37",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        status: "unreleased"
      },
      jp: {
        no: "UX-08",
        name: "실버울프 3-80FB",
        kind: "스타터",
        releaseDate: "2024-10-12",
        price: "2080",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-38",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-38",
        name: "크림슨가루다 4-70TP",
        kind: "부스터",
        releaseDate: "2024-11-02",
        price: "1400",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-09",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-09",
        name: "사무라이세이버 2-70L",
        kind: "스타터",
        releaseDate: "2024-11-02",
        price: "3300",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-10",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        kind: "",
        releaseDate: "2024-11-14",
        price: "8228",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-3",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "드란 덱 스타터",
        kind: "",
        releaseDate: "2024-11-16",
        price: "4950",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-19",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "코발트드레이크 4-60F 클리어 Ver.",
        kind: "부스터",
        releaseDate: "2024-11-28",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-20",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "맘모스터스크 2-80E 블랙 Ver.",
        kind: "부스터",
        releaseDate: "2024-12-27",
        price: "1600",
        composition: []
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
        kind: "컬러초이스부스터",
        releaseDate: "2024-12-27",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-11",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-11",
        name: "임팩트드레이크 9-60LR",
        kind: "스타터",
        releaseDate: "2024-12-28",
        price: "2420",
        composition: []
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
        composition: []
      }
    }
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
        name: "드래셀실드 7-60D",
        kind: "부스터",
        releaseDate: "2024-12-28",
        price: "1600",
        composition: []
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
        kind: "",
        releaseDate: "2025-01-15",
        price: "2050",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-5",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "UX-00",
        name: "드란버스터 1-60A FC 바르셀로나 Ver.",
        kind: "스타터",
        releaseDate: "2025-01-25",
        price: "2500",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-UX-00-JP-6",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        status: "unreleased"
      },
      jp: {
        no: "UX-13",
        name: "골렘락 1-60UN",
        kind: "부스터",
        releaseDate: "2025-01-25",
        price: "1400",
        composition: []
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
        composition: []
      }
    }
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
        kind: "",
        releaseDate: "2025-02-15",
        price: "",
        composition: []
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
        kind: "블레이드",
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
        kind: "",
        releaseDate: "2025-03-15",
        price: "2400",
        composition: []
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
        kind: "런처",
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
        name: "러버커스텀그립 블루 Ver.",
        kind: "그립",
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
        name: "러버커스텀그립 레드 Ver.",
        kind: "그립",
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
        kind: "케이스",
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
        status: "unreleased"
      },
      jp: {
        no: "CX-01",
        name: "드란 브레이브S 6-60V",
        kind: "스타터",
        releaseDate: "2025-03-29",
        price: "2200",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-02",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-02",
        name: "위저드 아크R 4-55LO",
        kind: "스타터",
        releaseDate: "2025-03-29",
        price: "2200",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-03",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-03",
        name: "페르세우스 다크B 6-80W",
        kind: "부스터",
        releaseDate: "2025-03-29",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-04",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
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
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "제노엑스칼리버 3-60GF",
        kind: "스타터",
        releaseDate: "2025-03-29",
        price: "3000",
        composition: []
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
        composition: []
      }
    }
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
        kind: "더블스타터",
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
        kind: "더블스타터",
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
        kind: "더블스타터",
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
        kind: "더블스타터",
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
        status: "unreleased"
      },
      jp: {
        no: "UX-14",
        name: "스콜피오스피어 0-70Z",
        kind: "스타터",
        releaseDate: "2025-04-26",
        price: "",
        composition: []
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
        kind: "더블스타터",
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
        kind: "더블스타터",
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
        status: "unreleased"
      },
      jp: {
        no: "CX-06",
        name: "랜덤부스터 폭스 브러시 셀렉트",
        kind: "랜덤부스터",
        releaseDate: "2025-05-17",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-44",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-44",
        name: "트리케라프레스 M-85BS",
        kind: "부스터",
        releaseDate: "2025-06-28",
        price: "1500",
        composition: []
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
        kind: "",
        releaseDate: "2025-07-17",
        price: "",
        composition: []
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
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-07",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-07",
        name: "페가서스 블래스트A Tr",
        kind: "스타터",
        releaseDate: "2025-07-19",
        price: "2600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-08",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-08",
        name: "랜덤부스터 Vol.7",
        kind: "랜덤부스터",
        releaseDate: "2025-07-19",
        price: "1600",
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-00-JP-33",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "티렉스/모사사우루스",
        kind: "더블스타터",
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
        status: "unreleased"
      },
      jp: {
        no: "BX-00",
        name: "스피노사우루스/케찰코아틀루스",
        kind: "더블스타터",
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
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-CX-00-JP-2",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "CX-00",
        name: "페가서스 블래스트A Tr 레드 Ver.",
        kind: "스타터",
        releaseDate: "2025-08-03",
        price: "2700",
        composition: []
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
        composition: []
      }
    }
  },
{
    id: "PRODUCT-X-BX-45",
    series: "x",
    releases: {
      kr: {
        status: "unreleased"
      },
      jp: {
        no: "BX-45",
        name: "사무라이칼리버 6-70M",
        kind: "부스터",
        releaseDate: "2025-08-09",
        price: "1500",
        composition: []
      }
    }
  }
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
const releaseSeriesOrder = () => Object.keys(releaseSeriesLabels);
const releaseSeriesHasProducts = (series, region = activeReleaseRegion) => releaseSeriesLabels[series] && productItems.some(item =>
  !item.lineupOnly && item.series === series && productReleasedInRegion(item, region)
);
const defaultReleaseSeries = (region = activeReleaseRegion) => [...releaseSeriesOrder()].reverse().find(series =>
  releaseSeriesHasProducts(series, region)
) || releaseSeriesOrder()[0] || "metal fight";
const releaseSeriesForRegion = (series, region = activeReleaseRegion) =>
  releaseSeriesHasProducts(series, region) ? series : defaultReleaseSeries(region);
const productDisplayFallbackRegions = (region = "kr") =>
  [region, "kr", "jp"].filter((value, index, values) => releaseRegionLabels[value] && values.indexOf(value) === index);
const productDisplayRegion = (item, region = "kr") =>
  productDisplayFallbackRegions(region).find(candidate => productReleasedInRegion(item, candidate)) || region;
const productDisplayRelease = (item, region = "kr") => productRelease(item, productDisplayRegion(item, region));
const seriesLabels = { topblade: "탑블레이드", "metal fight": "메탈베이블레이드", burst: "베이블레이드 버스트", x: "베이블레이드 X" };
const defaultCatalogSeries = () => "all";
const normalizeCatalogSeries = series => seriesLabels[series] ? series : "all";
const itemSeriesLabel = item => seriesLabels[item.series] || item.series || "";
const productDisplayName = (item, region = activeReleaseRegion) => {
  const release = productDisplayRelease(item, region);
  if (release.name) return release.name;
  const fallbackReleases = productDisplayFallbackRegions(region).map(candidate => productRelease(item, candidate));
  const fallbackName = fallbackReleases.map(candidateRelease => candidateRelease.name).find(Boolean);
  if (fallbackName) return fallbackName;
  const baseName = item.name || "";
  const fallbackNo = fallbackReleases.map(candidateRelease => candidateRelease.no).find(Boolean);
  return baseName || release.no || fallbackNo || item.no || "";
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
  .map(([value, label]) => dropdownButtonMarkup({ value, label, active: activeValue === value, dataAttr }))
  .join("");
const releaseRegionTabs = () => `<div class="release-region-tabs" role="tablist" aria-label="출시 지역">
  ${Object.entries(releaseRegionLabels).map(([value, label]) => tabButtonMarkup({ value, label, active: activeReleaseRegion === value, dataAttr: "data-release-region" })).join("")}
</div>`;
const escapeAttributeValue = value => String(value || "")
  .replace(/&/g, "&amp;")
  .replace(/"/g, "&quot;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");
const escapeHtml = escapeAttributeValue;
const tableListClassName = (...classes) => classes.filter(Boolean).join(" ");
const tableListTableMarkup = ({ scrollClass = "", tableClass = "", head = "", body = "" } = {}) => `<div class="${tableListClassName("table-list-scroll", "page-table-scroll", scrollClass)}">
  <table class="${tableListClassName("table-list-table", "ui-data-table", tableClass)}">
    ${head}
    <tbody>${body}</tbody>
  </table>
</div>`;
const tableListSectionMarkup = tableMarkup => `<section class="table-list-section release-table-section">${tableMarkup}</section>`;
const tableListPageMarkup = ({ className = "", attrs = "", controlsMarkup = "", tableMarkup = "" } = {}) =>
  `<section class="${tableListClassName("table-list-page", className)}"${attrs ? ` ${attrs}` : ""}>
    ${controlsMarkup}
    ${tableListSectionMarkup(tableMarkup)}
  </section>`;
const releaseControls = () => `<div class="table-list-controls release-dropdowns" aria-label="발매목록 필터">
  ${releaseRegionTabs()}
  <details class="catalog-dropdown release-dropdown">
    <summary><b class="catalog-dropdown-value">${releaseSeriesLabels[activeReleaseSeries]}</b></summary>
    <div class="catalog-dropdown-menu">
      ${releaseDropdownOptions(Object.entries(releaseSeriesLabels), activeReleaseSeries, "data-release-series")}
    </div>
  </details>
  <div class="search-box release-search-box" role="search">
    <span class="search-icon" aria-hidden="true"></span>
    <input id="releaseSearchInput" type="search" placeholder="검색어를 입력해주세요." value="${escapeAttributeValue(activeReleaseQuery)}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" aria-autocomplete="none" />
  </div>
</div>`;

const toolsItems = [
  { id: "TOOLS-TOOL", series: "metal fight", name: "툴", en: "Tool", category: "기타", desc: "" },
  { id: "TOOLS-BEYPOINT-CARD", series: "metal fight", name: "포인트카드", jpName: "베이포인트카드", en: "BeyPoint Card", category: "기타", desc: "" },
  { id: "TOOLS-BEYPOINT-READER", series: "metal fight", name: "베이포인트 리더기", en: "BeyPoint Reader", category: "기타", desc: "" },
  { id: "TOOLS-BEYPOINT-LEVEL-STICKER", series: "metal fight", name: "베이포인트 레벨 스티커", en: "BeyPoint Level Sticker", category: "기타", desc: "" },
  { id: "TOOLS-BEYCARD", series: "metal fight", name: "베이카드", en: "BeyCard", category: "기타", desc: "" },
  { id: "TOOLS-CHARACTER-CARD", series: "metal fight", name: "캐릭터카드", en: "Character Card", category: "기타", desc: "" },
  { id: "TOOLS-PEGASIS-GLOVE", series: "metal fight", name: "페가시스 장갑", en: "Pegasis Glove", category: "기타", desc: "" },
  { id: "TOOLS-LDRAGO-WRISTBAND", series: "metal fight", name: "엘드라고 손목밴드", en: "L-Drago Wristband", category: "기타", desc: "" },
  { id: "TOOLS-GRAVITY-WRISTBAND", series: "metal fight", name: "그라비티 손목밴드", en: "Gravity Wristband", category: "기타", desc: "" },
  { id: "TOOLS-POINTER", series: "metal fight", name: "포인터", jpName: "베이포인터", en: "Pointer", category: "기타", desc: "" },
  { id: "TOOLS-HOLDER-TOOL", series: "metal fight", name: "홀더툴", en: "Holder Tool", category: "기타", desc: "" },
  { id: "TOOLS-3SEG-LAUNCHER-GRIP", series: "metal fight", name: "베이카드 런처그립", jpName: "3세그 런처그립", en: "3 Segment Launcher Grip", category: "그립", desc: "" },
  { id: "TOOLS-LAUNCHER-GRIP", series: "metal fight", name: "런처그립", en: "Launcher Grip", category: "그립", desc: "" },
  { id: "TOOLS-GRIP-RUBBER", series: "metal fight", name: "그립러버", en: "Grip Rubber", category: "그립", desc: "" },
  { id: "TOOLS-GRIP-SUPPORT", series: "metal fight", name: "그립서포트", en: "Grip Support", category: "그립", desc: "" },
  { id: "TOOLS-LIGHT-LAUNCHER", series: "metal fight", name: "라이트런처", en: "Light Launcher", category: "런처", desc: "" },
  { id: "TOOLS-LIGHT-LAUNCHER-2", series: "metal fight", name: "라이트런처2", en: "Light Launcher 2", category: "런처", desc: "" },
  { id: "TOOLS-LIGHT-LAUNCHER-2L", series: "metal fight", name: "라이트런처2L", en: "Light Launcher 2 L", category: "런처", desc: "" },
  { id: "TOOLS-LIGHT-LAUNCHER-LR", series: "metal fight", name: "라이트런처LR", en: "Light Launcher LR", category: "런처", desc: "" },
  { id: "TOOLS-COMPACT-LAUNCHER", series: "metal fight", name: "컴팩트런처", en: "Compact Launcher", category: "런처", desc: "" },
  { id: "TOOLS-COMPACT-LAUNCHER-L", series: "metal fight", name: "컴팩트런처L", en: "Compact Launcher L", category: "런처", desc: "" },
  { id: "TOOLS-ZEROG-LIGHT-LAUNCHER", series: "metal fight", name: "제로G 라이트런처", jpName: "ZEROG 라이트런처", en: "Zero-G Light Launcher", category: "런처", desc: "" },
  { id: "TOOLS-ZEROG-LAUNCHER", series: "metal fight", name: "제로G런처", jpName: "ZEROG 런처", en: "Zero-G Launcher", category: "런처", desc: "" },
  { id: "TOOLS-ZEROG-LAUNCHER-GRIP", series: "metal fight", name: "제로G 런처그립", jpName: "ZEROG 런처그립", en: "Zero-G Launcher Grip", category: "그립", desc: "" },
  { id: "TOOLS-POWER-LAUNCHER", series: "metal fight", name: "파워런처", jpName: "베이런처", en: "Power Launcher", category: "런처", desc: "" },
  { id: "TOOLS-POWER-LAUNCHER-L", series: "metal fight", name: "파워런처L", jpName: "베이런처L", en: "Power Launcher L", category: "런처", desc: "" },
  { id: "TOOLS-SNIPE-LAUNCHER", series: "metal fight", name: "스나이프런처", en: "Snipe Launcher", category: "런처", desc: "" },
  { id: "TOOLS-CONTROL-LAUNCHER", series: "metal fight", name: "컨트롤런처", en: "Control Launcher", category: "런처", desc: "" },
  { id: "TOOLS-DIGITAL-POWER-LAUNCHER", series: "metal fight", name: "디지털파워런처", en: "Digital Power Launcher", category: "런처", desc: "" },
  { id: "TOOLS-LED-SIGHT", series: "metal fight", name: "LED스코프라이트", jpName: "LED사이트", en: "LED Sight", category: "기타", desc: "" },
  { id: "TOOLS-POWER-LAUNCHER-SUSPENSION", series: "metal fight", name: "파워런처 서스펜션", jpName: "베이런처 서스펜션", en: "Power Launcher Suspension", category: "기타", desc: "" },
  { id: "TOOLS-ATTACK-BEYSTADIUM", series: "metal fight", name: "공격형 베이스타디움", jpName: "베이스타디움 어택타입", en: "Beystadium Attack Type", category: "스타디움", desc: "공격형의 힘을 끌어내는 베이블레이드 전용 스타디움!" },
  { id: "TOOLS-ZEROG-ATTACK-BEYSTADIUM", series: "metal fight", name: "제로G 공격형 스타디움", jpName: "ZEROG 스타디움 어택타입", en: "Zero-G Stadium Attack Type", category: "스타디움", desc: "" },
  { id: "TOOLS-WIDE-SQUARE-BEYSTADIUM", series: "metal fight", name: "스퀘어형 베이스타디움", jpName: "베이스타디움 어택타입", en: "Beystadium Wide Square Type", category: "스타디움", desc: "" },
  { id: "TOOLS-TRIPLE-BEYSTADIUM", series: "metal fight", name: "트리플형 베이스타디움", en: "Triple Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-SUPER-ATTACK-BEYSTADIUM", series: "metal fight", name: "초공격형 베이스타디움", jpName: "베이스타디움 슈퍼어택타입", en: "Beystadium Super Attack Type", category: "스타디움", desc: "" },
  { id: "TOOLS-BALANCE-BEYSTADIUM", series: "metal fight", name: "밸런스형 베이스타디움", jpName: "베이스타디움 밸런스타입", en: "Beystadium Balance Type", category: "스타디움", desc: "" },
  { id: "TOOLS-ZEROG-DEFENSE-BEYSTADIUM", series: "metal fight", name: "제로G 방어형 스타디움", jpName: "ZEROG 스타디움 디펜스타입", en: "Zero-G Stadium Defense Type", category: "스타디움", desc: "" },
  { id: "TOOLS-ZEROG-BALANCE-BEYSTADIUM", series: "metal fight", name: "제로G 밸런스형 스타디움", jpName: "ZEROG 스타디움 밸런스타입", en: "Zero-G Stadium Balance Type", category: "스타디움", desc: "" },
  { id: "TOOLS-STAMINA-BEYSTADIUM", series: "metal fight", name: "스테미너형 베이스타디움", jpName: "베이스타디움 스테미너타입", en: "Beystadium Stamina Type", category: "스타디움", desc: "" },
  { id: "TOOLS-STANDARD-BEYSTADIUM", series: "metal fight", name: "표준형 베이스타디움", jpName: "베이스타디움 스탠다드타입", en: "Beystadium Standard Type", category: "스타디움", desc: "" },
  { id: "TOOLS-EXTREME-BEYSTADIUM", series: "metal fight", name: "익스트림 베이스타디움", en: "Extreme Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-TORNADO-BEYSTADIUM", series: "metal fight", name: "토네이도 베이스타디움", en: "Tornado Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-RUSH-BEYSTADIUM", series: "metal fight", name: "러시형 베이스타디움", jpName: "슈퍼컨트롤 베이블레이드 전용 스타디움", en: "Rush Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-ULTIMATE-BEYSTADIUM", series: "metal fight", name: "얼티메이트 베이스타디움", en: "Ultimate Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-OVER-FENCE", series: "metal fight", name: "오버펜스", en: "Over Fence", category: "기타", desc: "" },
  { id: "TOOLS-CARABINER-GRIP", series: "metal fight", name: "카라비나그립", en: "Carabiner Grip", category: "그립", desc: "" },
  { id: "TOOLS-ANGLE-COMPASS", series: "metal fight", name: "앵글컴파스", en: "Angle Compass", category: "기타", desc: "" },
  { id: "TOOLS-BEYCARRIER-WAIST", series: "metal fight", name: "베이캐리어 웨이스트타입", en: "Bey Carrier Waist Type", category: "기타", desc: "" },
  { id: "TOOLS-BEYCARRIER-HARD", series: "metal fight", name: "베이캐리어 하드타입", en: "Bey Carrier Hard Type", category: "기타", desc: "" },
  { id: "TOOLS-ZEROG-BEYCARRIER", series: "metal fight", name: "베이캐리어 ZEROG", en: "Bey Carrier Zero-G", category: "기타", desc: "" },
  { id: "TOOLS-BEY-DECK-CASE", series: "metal fight", name: "베이 덱 케이스", en: "Bey Deck Case", category: "기타", desc: "" },
  { id: "TOOLS-METAL-ASSIST", series: "metal fight", name: "메탈어시스트", en: "Metal Assist", category: "기타", desc: "" },
  { id: "TOOLS-LAUNCHER-RUBBER", series: "metal fight", name: "런처러버", en: "Launcher Rubber", category: "기타", desc: "" },
  { id: "TOOLS-POWER-LAUNCHER-LR", series: "metal fight", name: "파워런처LR", jpName: "베이런처LR", en: "Power Launcher LR", category: "런처", desc: "" },
  { id: "TOOLS-CARRIER-CASE", series: "metal fight", name: "캐리어케이스", en: "Carrier Case", category: "기타", desc: "" },
  { id: "TOOLS-BATTLE-BLADERS-TOOLBOX", series: "metal fight", name: "배틀블레이더즈 툴박스", en: "Battle Bladers Toolbox", category: "기타", desc: "" },
  { id: "TOOLS-BURST-LIGHT-LAUNCHER", series: "burst", name: "라이트런처", en: "Light Launcher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-BEYLOGGER", series: "burst", name: "베이로거", en: "BeyLogger", category: "기타", desc: "" },
  { id: "TOOLS-BURST-PROTO-LAUNCHER", series: "burst", name: "프로토런처", en: "Proto Launcher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-STANDARD-BEYSTADIUM", series: "burst", name: "베이스타디움 스탠다드타입", en: "Beystadium Standard Type", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-LAUNCHER-GRIP", series: "burst", name: "런처그립", en: "Launcher Grip", category: "그립", desc: "" },
  { id: "TOOLS-BURST-BEYLAUNCHER", series: "burst", name: "베이런처", en: "BeyLauncher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-BURST-BEYSTADIUM", series: "burst", name: "버스트 베이스타디움", en: "Burst Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-ANGLE-GRIP", series: "burst", name: "앵글그립", en: "Angle Grip", category: "그립", desc: "" },
  { id: "TOOLS-BURST-RUBBER-ASSIST", series: "burst", name: "러버어시스트", en: "Rubber Assist", category: "기타", desc: "" },
  { id: "TOOLS-BURST-WBBA-OFFICIAL-BLADER-BOX", series: "burst", name: "wbba. 오피셜 블레이더즈 박스", en: "wbba. Official Blader Box", category: "기타", desc: "" },
  { id: "TOOLS-BURST-SHOOT-SUPPORT-RUBBER", series: "burst", name: "슛서포트러버", en: "Shoot Support Rubber", category: "기타", desc: "" },
  { id: "TOOLS-BURST-STANDARD-BEYSTADIUM-BLACK", series: "burst", name: "베이스타디움 스탠다드타입(블랙)", en: "Beystadium Standard Type Black", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-GRIP-RUBBER", series: "burst", name: "그립러버", en: "Grip Rubber", category: "그립", desc: "" },
  { id: "TOOLS-BURST-WEIGHT-DAMPER", series: "burst", name: "웨이트댐퍼", en: "Weight Damper", category: "기타", desc: "" },
  { id: "TOOLS-BURST-SWORD-LAUNCHER", series: "burst", name: "소드런처", en: "Sword Launcher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-SWORD-LAUNCHER-BLUE", series: "burst", name: "소드런처(블루)", en: "Sword Launcher Blue", category: "런처", desc: "" },
  { id: "TOOLS-BURST-BURST-BEYSTADIUM-WIDE", series: "burst", name: "버스트 베이스타디움 와이드타입", en: "Burst Beystadium Wide Type", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-WBBA-FINGER-BAND", series: "burst", name: "wbba. 핑거밴드", en: "wbba. Finger Band", category: "기타", desc: "" },
  { id: "TOOLS-BURST-BEY-MISANGA-MAKER", series: "burst", name: "베이미상가 메이커", en: "Bey Misanga Maker", category: "기타", desc: "" },
  { id: "TOOLS-BURST-BEY-MISANGA", series: "burst", name: "베이미상가", en: "Bey Misanga", category: "기타", desc: "" },
  { id: "TOOLS-BURST-BEY-MISANGA-THREAD", series: "burst", name: "베이미상가용 실타래", en: "Bey Misanga Thread", category: "기타", desc: "" },
  { id: "TOOLS-BURST-WBBA-BADGE", series: "burst", name: "wbba. 배지", en: "wbba. Badge", category: "기타", desc: "" },
  { id: "TOOLS-BURST-CARABINER-GRIP", series: "burst", name: "카라비너그립", jpName: "카라비나그립", en: "Carabiner Grip", category: "그립", desc: "" },
  { id: "TOOLS-BURST-GRIP-WEIGHT", series: "burst", name: "그립웨이트", en: "Grip Weight", category: "그립", desc: "" },
  { id: "TOOLS-BURST-DUAL-CYCLONE-BEYSTADIUM", series: "burst", name: "듀얼 싸이클론 베이스타디움", en: "Dual Cyclone Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-BEYLAUNCHER-L", series: "burst", name: "베이런처L", en: "BeyLauncher L", category: "런처", desc: "" },
  { id: "TOOLS-BURST-BLADERS-SOFT-CASE", series: "burst", name: "블레이더즈 소프트케이스", en: "Blader's Soft Case", category: "기타", desc: "" },
  { id: "TOOLS-BURST-POWER-TRIGGER", series: "burst", name: "파워트리거", en: "Power Trigger", category: "기타", desc: "" },
  { id: "TOOLS-BURST-ENTRY-LAUNCHER", series: "burst", name: "엔트리런처", en: "Entry Launcher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-ENTRY-LAUNCHER-L", series: "burst", name: "엔트리런처L", en: "Entry Launcher L", category: "런처", desc: "" },
  { id: "TOOLS-BURST-BEYLOGGER-PLUS", series: "burst", name: "베이로거 플러스", en: "BeyLogger Plus", category: "기타", desc: "" },
  { id: "TOOLS-BURST-LIGHT-LAUNCHER-L", series: "burst", name: "라이트런처L", en: "Light Launcher L", category: "런처", desc: "" },
  { id: "TOOLS-BURST-LIGHT-LAUNCHER-LR", series: "burst", name: "라이트런처LR", en: "Light Launcher LR", category: "런처", desc: "" },
  { id: "TOOLS-BURST-KNUCKLE-GRIP", series: "burst", name: "너클그립", en: "Knuckle Grip", category: "그립", desc: "" },
  { id: "TOOLS-BURST-BATTLE-CASE-3ON3", series: "burst", name: "3on3 배틀케이스", en: "3on3 Battle Case", category: "기타", desc: "" },
  { id: "TOOLS-BURST-BEYLAUNCHER-LR", series: "burst", name: "베이런처LR", en: "BeyLauncher LR", category: "런처", desc: "" },
  { id: "TOOLS-BURST-METAL-GOD-CHIP", series: "burst", name: "메탈갓칩", en: "Metal God Chip", category: "기타", desc: "" },
  { id: "TOOLS-BURST-GOD-CHIP-TOOL", series: "burst", name: "갓칩 툴", en: "God Chip Tool", category: "기타", desc: "" },
  { id: "TOOLS-BURST-DIGITAL-SWORD-LAUNCHER", series: "burst", name: "디지털소드런처", en: "Digital Sword Launcher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-STRIKE-GOD-CHIP-TOOL", series: "burst", name: "스트라이크갓칩 툴", en: "Strike God Chip Tool", category: "기타", desc: "" },
  { id: "TOOLS-BURST-MUGEN-BEYSTADIUM", series: "burst", name: "무한 베이스타디움", en: "Mugen Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-LONG-LIGHT-LAUNCHER", series: "burst", name: "롱라이트런처", en: "Long Light Launcher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-LONG-LIGHT-LAUNCHER-LR", series: "burst", name: "롱라이트런처LR", en: "Long Light Launcher LR", category: "런처", desc: "" },
  { id: "TOOLS-BURST-LONG-BEYLAUNCHER", series: "burst", name: "롱베이런처", en: "Long BeyLauncher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-POWER-LAUNCHER-GRIP", series: "burst", name: "파워런처그립", en: "Power Launcher Grip", category: "그립", desc: "" },
  { id: "TOOLS-BURST-XTEND-CHIP", series: "burst", name: "익스텐드 칩", en: "Xtend Chip", category: "기타", desc: "" },
  { id: "TOOLS-BURST-CHIP-TOOL", series: "burst", name: "칩 툴", en: "Chip Tool", category: "기타", desc: "" },
  { id: "TOOLS-BURST-LONG-BEYLAUNCHER-L", series: "burst", name: "롱베이런처L", en: "Long BeyLauncher L", category: "런처", desc: "" },
  { id: "TOOLS-BURST-MUSOU-BEYSTADIUM", series: "burst", name: "무적 베이스타디움", jpName: "무쌍 베이스타디움", en: "Musou Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-SPIN-DIRECTION-CHANGE-TOOL", series: "burst", name: "회전방향 전환 툴", en: "Spin Direction Change Tool", category: "기타", desc: "" },
  { id: "TOOLS-BURST-LONG-BEYLAUNCHER-LR", series: "burst", name: "롱베이런처LR", en: "Long BeyLauncher LR", category: "런처", desc: "" },
  { id: "TOOLS-BURST-SUPERKING-BEYLAUNCHER", series: "burst", name: "슈퍼킹베이런처", en: "Superking BeyLauncher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-SUPERKING-BEYLAUNCHER-L", series: "burst", name: "슈퍼킹베이런처L", en: "Superking BeyLauncher L", category: "런처", desc: "" },
  { id: "TOOLS-BURST-LONG-SUPERKING-BEYLAUNCHER", series: "burst", name: "롱슈퍼킹베이런처", en: "Long Superking BeyLauncher", category: "런처", desc: "" },
  { id: "TOOLS-BURST-DASH-BEYSTADIUM", series: "burst", name: "대시 베이스타디움", en: "Dash Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-DB-STANDARD-BEYSTADIUM", series: "burst", name: "베이스타디움 DB 스탠다드타입", en: "DB Standard Beystadium", category: "스타디움", desc: "" },
  { id: "TOOLS-BURST-CUSTOM-BEYLAUNCHER-LR", series: "burst", name: "커스텀베이런처LR", en: "Custom BeyLauncher LR", category: "런처", desc: "" },
  { id: "TOOLS-BURST-POWER-CUSTOM-BEYLAUNCHER-LR", series: "burst", name: "파워커스텀베이런처LR", en: "Power Custom BeyLauncher LR", category: "런처", desc: "" },
  { id: "TOOLS-BURST-FULL-CUSTOM-BEYLAUNCHER-LR", series: "burst", name: "풀커스텀베이런처LR", en: "Full Custom BeyLauncher LR", category: "런처", desc: "" },
  { id: "TOOLS-BURST-POWER-CUSTOM-SWORD-LAUNCHER-LR", series: "burst", name: "파워커스텀소드런처LR", en: "Power Custom Sword Launcher LR", category: "런처", desc: "" }
];

const bookItems = [
  { id: "BOOK-BEYBLADE-ZEROG-SERIES-WINNING-GUIDE", name: "베이블레이드 ZEROG 시리즈 필승 가이드", en: "Beyblade Zero-G Series Winning Guide", category: "공략집", desc: "" }
];

const gameItems = [
  { id: "GAME-METAL-FIGHT-BEYBLADE-CARD", name: "메탈파이트 베이블레이드 게임 카드", category: "게임", desc: "" },
  { id: "GAME-GACHINKO-STADIUM-CD", name: "가칭코 스타디움 게임 CD", category: "게임", desc: "" },
  { id: "GAME-BAKUTAN-CYBER-PEGASIS-CARD", name: "탄생! 사이버 페가시스 게임 카드", category: "게임", desc: "" },
  { id: "GAME-BAKUSHIN-SUSANOW-ATTACKS-CARD", name: "바쿠신 스사노오의 습격! 게임 카드", category: "게임", desc: "" },
  { id: "GAME-CHOUZETSU-TENSEI-VULCAN-HORUSEUS-CD", name: "초절전생! 발칸 호루세우스 게임 CD", category: "게임", desc: "" },
  { id: "GAME-CHOUJOU-KESSEN-BIG-BANG-BLADERS-CARD", name: "정상결전! 빅뱅블레이더즈 게임 카드", category: "게임", desc: "" },
  { id: "GAME-4D-ZEROG-ULTIMATE-TOURNAMENT-CARD", name: "4DxZEROG 얼티밋 토너먼트 게임 카드", category: "게임", desc: "" }
];

const catalogCoreItemsById = new Map(catalogCoreItems.map(item => [item.id, item]));
const productItemsById = new Map(productItems.map(item => [item.id, item]));
const toolsItemsById = new Map(toolsItems.map(item => [item.id, item]));
const bookItemsById = new Map(bookItems.map(item => [item.id, item]));
const gameItemsById = new Map(gameItems.map(item => [item.id, item]));
const catalogCoreItemOrder = new Map(catalogCoreItems.map((item, index) => [item, index]));
const toolsItemOrder = new Map(toolsItems.map((item, index) => [item, index]));
const catalogSourceOrder = item => {
  if (!item || typeof item !== "object") return Number.MAX_SAFE_INTEGER;
  const toolsOrder = toolsItemOrder.get(item);
  if (toolsOrder !== undefined) return 100000 + toolsOrder;
  const coreOrder = catalogCoreItemOrder.get(item);
  return coreOrder !== undefined ? coreOrder : Number.MAX_SAFE_INTEGER;
};
const zeroGBottomStartIndex = partItems.findIndex(item => item.id === "BOTTOM-CIRCLE-FLAT");
const findCatalogItemById = id => catalogCoreItemsById.get(id) || toolsItemsById.get(id) || bookItemsById.get(id) || gameItemsById.get(id) || productItemsById.get(id) || null;

const cardVisualMarkup = item => item.image
  ? `<img class="bey-image" src="${item.image}" alt="${item.name}" />`
  : "";
const modalArtMarkup = item => item.model
  ? `<div class="model-viewer" data-model="${item.model}"><p>3D 모델 로딩 중</p></div>`
  : cardVisualMarkup(item);
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
  if (!["track", "bottom", "4dbottom", "disk", "coredisk", "frame", "dbdisk", "dbarmor", "driver"].includes(item.type)) return "";
  const detail = item.sub || "";
  return detail.includes("높이") ? "" : detail;
};
const wheelTypes = ["wheel", "clearwheel", "4dclearwheel", "lightwheel", "metalwheel", "4dmetalwheel", "chromewheel", "crystalwheel"];
const cardInfo = item => {
  if (["track", "bottom", "4dbottom", "disk", "coredisk", "frame", "dbdisk", "dbarmor", "driver"].includes(item.type)) {
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
const mainSearchItemText = item => item
  ? [item.name, item.jpName, item.en, item.sub, item.no, item.productNo].filter(Boolean).join(" ")
  : "";
const compactSearchSpacing = value => String(value || "").replace(/[\s·,.;:!?()[\]{}"“”'‘’/\\\-]+/g, "");
const lowerSearchText = value => String(value || "").toLocaleLowerCase("ko");
const HANGUL_SYLLABLE_START = 0xac00;
const HANGUL_SYLLABLE_END = 0xd7a3;
const HANGUL_MEDIAL_COUNT = 21;
const HANGUL_FINAL_COUNT = 28;
const HANGUL_INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const HANGUL_MEDIALS = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
const HANGUL_FINALS = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const HANGUL_FINAL_DECOMPOSED = {
  "ㄳ": "ㄱㅅ",
  "ㄵ": "ㄴㅈ",
  "ㄶ": "ㄴㅎ",
  "ㄺ": "ㄹㄱ",
  "ㄻ": "ㄹㅁ",
  "ㄼ": "ㄹㅂ",
  "ㄽ": "ㄹㅅ",
  "ㄾ": "ㄹㅌ",
  "ㄿ": "ㄹㅍ",
  "ㅀ": "ㄹㅎ",
  "ㅄ": "ㅂㅅ"
};
const HANGUL_INITIAL_INDEX = new Map(HANGUL_INITIALS.map((char, index) => [char, index]));
const hangulSyllableParts = char => {
  const code = char.codePointAt(0);
  if (code < HANGUL_SYLLABLE_START || code > HANGUL_SYLLABLE_END) return null;
  const offset = code - HANGUL_SYLLABLE_START;
  const initial = Math.floor(offset / (HANGUL_MEDIAL_COUNT * HANGUL_FINAL_COUNT));
  const medial = Math.floor((offset % (HANGUL_MEDIAL_COUNT * HANGUL_FINAL_COUNT)) / HANGUL_FINAL_COUNT);
  const final = offset % HANGUL_FINAL_COUNT;
  return final ? [initial, medial, final] : [initial, medial];
};
const hangulInitialIndex = char => HANGUL_INITIAL_INDEX.has(char) ? HANGUL_INITIAL_INDEX.get(char) : -1;
const hangulInitialMatchesChar = (textChar, initialChar) => {
  const textParts = hangulSyllableParts(textChar);
  const initial = hangulInitialIndex(initialChar);
  return Boolean(textParts) && initial >= 0 && textParts[0] === initial;
};
const hangulInitialForChar = char => {
  if (hangulInitialIndex(char) >= 0) return char;
  const parts = hangulSyllableParts(char);
  return parts ? HANGUL_INITIALS[parts[0]] : "";
};
const searchCharExactMatches = (textChar, termChar) => textChar.toLocaleLowerCase("ko") === termChar.toLocaleLowerCase("ko");
const searchCharPrefixMatches = (textChar, termChar) => {
  const textParts = hangulSyllableParts(textChar);
  if (textParts && hangulInitialIndex(termChar) >= 0) return hangulInitialMatchesChar(textChar, termChar);
  const termParts = hangulSyllableParts(termChar);
  if (textParts && termParts) return termParts.every((part, index) => textParts[index] === part);
  return searchCharExactMatches(textChar, termChar);
};
const searchCharMatches = (textChar, termChar, { allowPrefix = false } = {}) =>
  allowPrefix ? searchCharPrefixMatches(textChar, termChar) : searchCharExactMatches(textChar, termChar);
const searchQueryTerms = query => String(query || "").split(",").map(term => term.trim()).filter(Boolean);
const catalogSearchQueryTerms = query => String(query || "").split(/[\s,]+/).map(term => term.trim()).filter(Boolean);
const createHangulInitialWordStartSet = text => {
  const starts = new Set();
  String(text || "")
    .split(/[\s·,.;:!?()[\]{}"“”'‘’/\\\-]+/)
    .filter(Boolean)
    .forEach(word => {
      const initial = hangulInitialForChar([...word][0] || "");
      if (initial) starts.add(initial);
    });
  return starts;
};
const searchWords = text => String(text || "")
  .split(/[\s·,.;:!?()[\]{}"“”'‘’/\\\-]+/)
  .filter(Boolean);
const hangulInitialSequence = text => [...String(text || "")]
  .map(hangulInitialForChar)
  .join("");
const hangulWordInitialSequence = text => searchWords(text)
  .map(word => hangulInitialForChar([...word][0] || ""))
  .filter(Boolean)
  .join("");
const searchDelimiterPattern = /[\s·,.;:!?()[\]{}"“”'‘’/\\\-]/;
const hangulFinalJamo = finalIndex => HANGUL_FINAL_DECOMPOSED[HANGUL_FINALS[finalIndex]] || HANGUL_FINALS[finalIndex] || "";
const hangulImeJamoKey = text => [...String(text || "").toLocaleLowerCase("ko")]
  .map(char => {
    if (searchDelimiterPattern.test(char)) return "";
    const parts = hangulSyllableParts(char);
    if (!parts) return char;
    const [initial, medial, final = 0] = parts;
    return `${HANGUL_INITIALS[initial]}${HANGUL_MEDIALS[medial]}${hangulFinalJamo(final)}`;
  })
  .join("");
const hangulImeWordKeys = text => searchWords(text)
  .map(hangulImeJamoKey)
  .filter(Boolean);
const createSearchTextIndex = (text = "", initialText = "") => {
  const raw = String(text || "");
  const initial = String(initialText || "");
  const lower = lowerSearchText(raw);
  const compact = compactSearchSpacing(raw);
  return {
    isSearchTextIndex: true,
    raw,
    lower,
    compact,
    compactLower: compactSearchSpacing(lower),
    compactChars: [...compact],
    initialText: initial,
    initialWordStarts: createHangulInitialWordStartSet(initial),
    initials: hangulInitialSequence(raw),
    wordInitials: hangulWordInitialSequence(initial || raw),
    imeJamoKey: hangulImeJamoKey(raw),
    initialImeJamoKey: hangulImeJamoKey(initial || raw),
    imeWordKeys: hangulImeWordKeys(raw),
    initialImeWordKeys: hangulImeWordKeys(initial || raw)
  };
};
const SEARCH_TEXT_INDEX_CACHE_LIMIT = 768;
const searchTextIndexCache = new Map();
const searchTextIndexFrom = (text, initialText = "") => {
  if (text && typeof text === "object" && text.isSearchTextIndex) return text;
  const raw = String(text || "");
  const initial = String(initialText || "");
  const key = `${raw}\u0000${initial}`;
  const cached = searchTextIndexCache.get(key);
  if (cached) return cached;
  if (searchTextIndexCache.size >= SEARCH_TEXT_INDEX_CACHE_LIMIT) {
    searchTextIndexCache.delete(searchTextIndexCache.keys().next().value);
  }
  const index = createSearchTextIndex(raw, initial);
  searchTextIndexCache.set(key, index);
  return index;
};
const prepareSearchTerm = term => {
  const raw = String(term || "");
  const compact = compactSearchSpacing(raw);
  const compactChars = [...compact];
  return {
    isPreparedSearchTerm: true,
    raw,
    lower: lowerSearchText(raw),
    compact,
    compactLower: compactSearchSpacing(lowerSearchText(raw)),
    imeJamoKey: hangulImeJamoKey(raw),
    compactChars,
    hasHangulTerm: compactChars.some(char => hangulSyllableParts(char) || hangulInitialIndex(char) >= 0),
    hasHangulSyllableTerm: compactChars.some(char => hangulSyllableParts(char)),
    isOnlyHangulInitials: compactChars.length > 0 && compactChars.every(char => hangulInitialIndex(char) >= 0),
    isSingleHangulInitial: compactChars.length === 1 && hangulInitialIndex(compactChars[0]) >= 0
  };
};
const searchTermFrom = term =>
  term && typeof term === "object" && term.isPreparedSearchTerm ? term : prepareSearchTerm(term);
const prepareSearchQuery = query => {
  const raw = String(query || "").trim();
  const termTexts = searchQueryTerms(raw);
  return {
    isPreparedSearchQuery: true,
    raw,
    isEmpty: !raw,
    terms: raw ? (termTexts.length ? termTexts : [raw]).map(prepareSearchTerm) : []
  };
};
const prepareCatalogSearchQuery = query => {
  const raw = String(query || "").trim();
  const termTexts = catalogSearchQueryTerms(raw);
  return {
    isPreparedSearchQuery: true,
    raw,
    isEmpty: !raw,
    terms: raw ? (termTexts.length ? termTexts : [raw]).map(prepareSearchTerm) : []
  };
};
const searchQueryFrom = query =>
  query && typeof query === "object" && query.isPreparedSearchQuery ? query : prepareSearchQuery(query);
const hangulJamoPrefixIncludesPrepared = (textIndex, term) => {
  const textChars = textIndex.compactChars;
  const termChars = term.compactChars;
  if (!termChars.length || !term.hasHangulTerm || term.isSingleHangulInitial) return false;
  for (let start = 0; start <= textChars.length - termChars.length; start += 1) {
    let matched = true;
    for (let index = 0; index < termChars.length; index += 1) {
      if (!searchCharMatches(textChars[start + index], termChars[index], { allowPrefix: index === termChars.length - 1 })) {
        matched = false;
        break;
      }
    }
    if (matched) return true;
  }
  return false;
};
const imeJamoPrefixMatchesPrepared = (textIndex, term) => {
  if (!term.hasHangulSyllableTerm || term.imeJamoKey.length < 3) return false;
  const searchKeys = [textIndex.initialImeJamoKey, textIndex.imeJamoKey].filter(Boolean);
  const wordKeys = [...(textIndex.initialImeWordKeys || []), ...(textIndex.imeWordKeys || [])];
  return searchKeys.some(key => key.startsWith(term.imeJamoKey)) || wordKeys.some(key => key.startsWith(term.imeJamoKey));
};
const searchTermMatchRank = (text, term, { initialText = "" } = {}) => {
  const textIndex = searchTextIndexFrom(text, initialText);
  const preparedTerm = searchTermFrom(term);
  if (preparedTerm.lower && textIndex.lower.includes(preparedTerm.lower)) return 2;
  if (preparedTerm.compactLower && textIndex.compactLower.includes(preparedTerm.compactLower)) return 2;
  if (preparedTerm.isSingleHangulInitial && textIndex.initialWordStarts.has(preparedTerm.compact)) return 1;
  if (imeJamoPrefixMatchesPrepared(textIndex, preparedTerm)) return 1;
  return hangulJamoPrefixIncludesPrepared(textIndex, preparedTerm) ? 1 : 0;
};
const searchMatchRank = (text, query, { initialText = "" } = {}) => {
  const preparedQuery = searchQueryFrom(query);
  if (preparedQuery.isEmpty) return 2;
  const textIndex = searchTextIndexFrom(text, initialText);
  const ranks = preparedQuery.terms.map(term => searchTermMatchRank(textIndex, term));
  return ranks.every(Boolean) ? Math.min(...ranks) : 0;
};
const matchesSearchText = (text, query, initialText = "") => {
  return searchMatchRank(text, query, { initialText }) > 0;
};
const catalogListSpinSearchTerms = item => {
  if (!item?.spin) return [];
  if (item.spin === "dual") return ["dual", spinLabel("dual"), "left", spinLabel("left"), "right", spinLabel("right")];
  return [item.spin, spinLabel(item.spin)];
};
const SEARCH_FIELD_WEIGHTS = {
  primaryName: 120,
  code: 108,
  alias: 88,
  category: 58,
  attributes: 42,
  composition: 24,
  description: 18
};
const SEARCH_FIELD_DEFAULTS = {
  primaryName: { initial: true, jamo: true, ime: true },
  code: { initial: false, jamo: false, ime: false },
  alias: { initial: true, jamo: true, ime: true },
  category: { initial: true, jamo: false, ime: false },
  attributes: { initial: false, jamo: false, ime: false },
  composition: { initial: false, jamo: false, ime: false },
  description: { initial: false, jamo: false, ime: false }
};
const uniqueSearchValues = values => {
  const seen = new Set();
  return values
    .flat(Infinity)
    .map(value => String(value || "").trim())
    .filter(value => {
      if (!value || seen.has(value)) return false;
      seen.add(value);
      return true;
    });
};
const createSearchField = (role, text, options = {}) => {
  const raw = String(text || "").trim();
  if (!raw) return null;
  const defaults = SEARCH_FIELD_DEFAULTS[role] || {};
  return {
    role,
    weight: options.weight || SEARCH_FIELD_WEIGHTS[role] || 24,
    initial: options.initial ?? defaults.initial ?? false,
    jamo: options.jamo ?? defaults.jamo ?? false,
    ime: options.ime ?? defaults.ime ?? false,
    index: createSearchTextIndex(raw, options.initialText ?? raw)
  };
};
const searchFieldsFromValues = (role, values, options = {}) =>
  uniqueSearchValues(values).map(value => createSearchField(role, value, options)).filter(Boolean);
const createSearchRecord = (kind, item, fields, order = 0, extra = {}) => {
  const record = {
    kind,
    item,
    order,
    ...extra,
    fields: fields.filter(Boolean)
  };
  record.entry = kind === "anime" ? { kind, item, index: record.index } : { kind, item };
  return record;
};
const searchFieldTermScore = (field, term) => {
  const preparedTerm = searchTermFrom(term);
  if (!field || !preparedTerm.compactLower) return 0;
  const index = field.index;
  const weight = field.weight;
  if (preparedTerm.lower && index.lower === preparedTerm.lower) return weight + 90;
  if (preparedTerm.compactLower && index.compactLower === preparedTerm.compactLower) return weight + 84;
  if (preparedTerm.lower && index.lower.startsWith(preparedTerm.lower)) return weight + 70;
  if (preparedTerm.compactLower && index.compactLower.startsWith(preparedTerm.compactLower)) return weight + 64;
  if (preparedTerm.lower && index.lower.includes(preparedTerm.lower)) return weight + 48;
  if (preparedTerm.compactLower && index.compactLower.includes(preparedTerm.compactLower)) return weight + 44;
  if (field.initial && preparedTerm.isSingleHangulInitial && index.initialWordStarts.has(preparedTerm.compact)) return weight + 22;
  if (field.initial && preparedTerm.isOnlyHangulInitials && preparedTerm.compact.length > 1) {
    if (index.wordInitials.includes(preparedTerm.compact)) return weight + 26;
    if (index.initials.includes(preparedTerm.compact)) return weight + 16;
  }
  if (field.ime && imeJamoPrefixMatchesPrepared(index, preparedTerm)) return weight + 56;
  if (field.jamo && hangulJamoPrefixIncludesPrepared(index, preparedTerm)) return Math.max(1, Math.round(weight * 0.45));
  return 0;
};
const matchSearchRecord = (record, query) => {
  const preparedQuery = searchQueryFrom(query);
  if (preparedQuery.isEmpty) return { matched: true, score: 0 };
  let score = 0;
  for (const term of preparedQuery.terms) {
    let termScore = 0;
    for (const field of record.fields) termScore = Math.max(termScore, searchFieldTermScore(field, term));
    if (!termScore) return { matched: false, score: 0 };
    score += termScore;
  }
  return { matched: true, score };
};
const compareScoredSearchResults = (a, b) => b.score - a.score || a.record.order - b.record.order;
const itemNameWithSub = item => [item?.name, item?.sub].filter(Boolean).join(" ");
const catalogItemKindSearchValues = item => item?.type === "bey" ? ["bey", "베이"] : ["parts", "부품"];
const shouldIncludeSeriesSearchField = options => options?.includeSeries !== false;
const catalogItemSearchFields = (item, options = {}) => {
  const includeSeries = shouldIncludeSeriesSearchField(options);
  return [
    ...searchFieldsFromValues("primaryName", [itemNameWithSub(item), item.name]),
    ...searchFieldsFromValues("alias", [item.jpName, item.en]),
    ...searchFieldsFromValues("code", [item.no, item.productNo]),
    ...searchFieldsFromValues("category", [
      ...catalogItemKindSearchValues(item),
      ...(includeSeries ? [item.series, itemSeriesLabel(item)] : []),
      item.type,
      item.type ? typeLabels[item.type] : "",
      item.category,
      item.category ? typeLabels[item.category] : "",
      item.structure,
      item.structure ? structureLabels[item.structure] : ""
    ]),
    ...searchFieldsFromValues("attributes", [
      item.battleType,
      item.battleType ? battleTypeLabel(item.battleType, item) : "",
      ...catalogListSpinSearchTerms(item),
      item.heightClass,
      item.heightClass ? heightClassLabel(item.heightClass) : "",
      ...(Array.isArray(item.tags) ? item.tags : []),
      ...(Array.isArray(item.tags) ? item.tags.map(tag => tagLabels[tag] || "") : [])
    ])
  ];
};
const toolsSearchFields = (item, options = {}) => {
  const includeSeries = shouldIncludeSeriesSearchField(options);
  return [
    ...searchFieldsFromValues("primaryName", [item.name]),
    ...searchFieldsFromValues("alias", [item.en]),
    ...searchFieldsFromValues("code", [item.no, item.productNo]),
    ...searchFieldsFromValues("category", ["tools", "장비", ...(includeSeries ? [item.series, itemSeriesLabel(item)] : []), item.category, item.category ? typeLabels[item.category] : ""]),
    ...searchFieldsFromValues("description", [item.desc])
  ];
};
const catalogAttributeChipAliasKey = value => compactSearchSpacing(lowerSearchText(value));
const catalogAttributeChipCandidates = (() => {
  const candidates = [];
  const seenKeys = new Set();
  const add = (key, label, aliases = []) => {
    const aliasKeys = uniqueSearchValues([label, key, aliases]).map(catalogAttributeChipAliasKey).filter(Boolean);
    if (!label || !aliasKeys.length || seenKeys.has(key)) return;
    seenKeys.add(key);
    candidates.push({ key, label, aliasKeys: new Set(aliasKeys) });
  };
  add("kind:bey", "베이", ["bey"]);
  add("kind:parts", "부품", ["parts", "파츠"]);
  add("kind:tools", "장비", ["tools"]);
  Object.entries(typeLabels).forEach(([value, label]) => add(`type:${value}`, label, [value]));
  Object.entries(structureLabels).forEach(([value, label]) => {
    const aliases = value === "basic"
      ? ["4단 구조", "4단", "basic"]
      : value === "hybrid"
        ? ["하이브리드", "hybrid"]
        : value === "4d"
          ? ["4D", "4d"]
          : [value];
    add(`system:${value}`, label, aliases);
  });
  Object.keys(battleTypeLabels.classic).forEach(value => {
    add(`battle:${value}`, battleTypeLabels.classic[value], [value, battleTypeLabels.modern[value]]);
  });
  Object.entries(spinLabels).forEach(([value, label]) => add(`spin:${value}`, label, [value]));
  Object.entries(heightClassLabels).forEach(([value, label]) => add(`height:${value}`, label, [value]));
  toolsSubtypeOptions.forEach(option => add(`tools:${option.value}`, option.label, [option.value]));
  Object.entries(tagLabels).forEach(([value, label]) => add(`tag:${value}`, label, [value]));
  return candidates;
})();
const catalogAttributeChipForTerm = term => {
  const key = catalogAttributeChipAliasKey(term);
  return catalogAttributeChipCandidates.find(candidate => candidate.aliasKeys.has(key)) || null;
};
const catalogExclusiveFilterGroups = new Set(["kind", "type", "system", "battle", "spin", "height", "tools"]);
const catalogFilterGroupForTerm = term => {
  const candidate = catalogAttributeChipForTerm(term);
  const group = String(candidate?.key || "").split(":")[0];
  return catalogExclusiveFilterGroups.has(group) ? group : "";
};
const normalizeCatalogFilterTerms = query => {
  const terms = catalogSearchQueryTerms(query);
  if (!terms.length) return String(query || "").trim();
  const entries = terms.map((term, index) => ({ term, index, group: catalogFilterGroupForTerm(term) }));
  const lastGroupIndexes = new Map();
  entries.forEach(entry => {
    if (entry.group) lastGroupIndexes.set(entry.group, entry.index);
  });
  return entries
    .filter(entry => !entry.group || lastGroupIndexes.get(entry.group) === entry.index)
    .map(entry => entry.term)
    .join(" ");
};
const normalizeCatalogSearchInput = input => {
  if (!input) return;
  const normalized = normalizeCatalogFilterTerms(input.value);
  if (normalized !== input.value.trim()) setSearchInputValue(input, normalized);
};
const catalogSearchRecordCache = new WeakMap();
const catalogListSearchRecord = item => {
  if (!item || typeof item !== "object") return createSearchRecord("catalog-item", item, [], 0);
  const cached = catalogSearchRecordCache.get(item);
  if (cached) return cached;
  const isToolsItem = toolsItemsById.has(item.id);
  const order = catalogSourceOrder(item);
  const record = createSearchRecord(isToolsItem ? "tools" : "catalog-item", item, isToolsItem ? toolsSearchFields(item, { includeSeries: false }) : catalogItemSearchFields(item, { includeSeries: false }), order);
  catalogSearchRecordCache.set(item, record);
  return record;
};
const catalogListSearchScore = (item, query) => matchSearchRecord(catalogListSearchRecord(item), query).score;
const globalSearchQuery = () => globalSearch?.value.trim() || "";
const catalogSearchQuery = () => catalogSearch?.value.trim() || "";
const animeSearchQuery = () => animeSearch?.value.trim() || "";
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
  <button class="ui-card-button category-card catalog-card product-card" data-tools-id="${item.id}">
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
const randomBoosterNamePattern = /(랜덤부스터|라이트블레이드|러이트블레이드)/;
const productReleaseNos = product => [...new Set([
  product.no,
  ...Object.values(product.releases || {}).map(release => release.no)
].filter(Boolean))];
const productLineupIds = product => {
  if (product.lineupPool?.length) return product.lineupPool;
  if (product.beyPool?.length) return product.beyPool;
  const isRandomBooster = Object.values(product.releases || {}).some(release => randomBoosterNamePattern.test(release.name || ""));
  if (!isRandomBooster) return [];
  const releaseNos = productReleaseNos(product);
  return catalogCoreItems
    .filter(entry => entry.type === "bey" && releaseNos.includes(entry.productNo))
    .map(entry => entry.id);
};
const compareCatalogFirstReleaseMeta = (a, b) =>
  a.dateSort - b.dateSort ||
  a.productIndex - b.productIndex ||
  a.compositionIndex - b.compositionIndex ||
  a.regionIndex - b.regionIndex;
const firstReleaseMetaMapCache = new Map();
const firstReleaseMetaMap = (cacheKey, { matchesTarget, includeLineupTargets = false }) => {
  const cached = firstReleaseMetaMapCache.get(cacheKey);
  if (cached) return cached;
  const map = new Map();
  const rememberReleaseMeta = (target, meta) => {
    if (!matchesTarget(target)) return;
    const prev = map.get(target);
    if (!prev || compareCatalogFirstReleaseMeta(meta, prev) < 0) map.set(target, meta);
  };
  productItems.forEach((product, productIndex) => {
    Object.keys(releaseRegionLabels).forEach((region, regionIndex) => {
      if (!productReleasedInRegion(product, region)) return;
      const release = productRelease(product, region);
      const dateSort = releaseDateSortValue(release.releaseDate || release.release);
      if (dateSort === Number.MAX_SAFE_INTEGER) return;
      productCompositionItems(product, region).forEach((part, compositionIndex) => {
        rememberReleaseMeta(part.target, { dateSort, productIndex, compositionIndex, regionIndex });
      });
      if (!includeLineupTargets) return;
      productLineupIds(product).forEach((target, lineupIndex) => {
        rememberReleaseMeta(target, { dateSort, productIndex, compositionIndex: 1000 + lineupIndex, regionIndex });
      });
    });
  });
  firstReleaseMetaMapCache.set(cacheKey, map);
  return map;
};
const toolsFirstReleaseMetaMap = () => firstReleaseMetaMap("tools", {
  matchesTarget: target => target?.startsWith("TOOLS-") && toolsItemsById.has(target)
});
const compareToolsItemsByFirstRelease = (a, b) => {
  const metaA = toolsFirstReleaseMetaMap().get(a.id);
  const metaB = toolsFirstReleaseMetaMap().get(b.id);
  if (metaA && metaB) {
    const metaDiff = compareCatalogFirstReleaseMeta(metaA, metaB);
    if (metaDiff) return metaDiff;
  } else if (metaA || metaB) {
    return metaA ? -1 : 1;
  }
  return a.name.localeCompare(b.name, "ko");
};
const catalogCoreFirstReleaseMetaMap = () => firstReleaseMetaMap("catalog-core", {
  matchesTarget: target => catalogCoreItemsById.has(target),
  includeLineupTargets: true
});
const catalogFirstReleaseMeta = item => {
  if (!item?.id) return null;
  const meta = toolsItemsById.has(item.id)
    ? toolsFirstReleaseMetaMap().get(item.id)
    : catalogCoreFirstReleaseMetaMap().get(item.id);
  return meta?.dateSort === Number.MAX_SAFE_INTEGER ? null : meta || null;
};
const compareCatalogItemsByLatestRelease = (a, b) => {
  const metaA = catalogFirstReleaseMeta(a);
  const metaB = catalogFirstReleaseMeta(b);
  if (metaA && metaB) {
    const dateDiff = metaB.dateSort - metaA.dateSort;
    if (dateDiff) return dateDiff;
    return 0;
  }
  if (metaA || metaB) return metaA ? -1 : 1;
  return 0;
};
const catalogProductPrefixRank = {
  B: 1,
  BB: 1,
  BBG: 2,
  BX: 1,
  UX: 2,
  CX: 3
};
const catalogLatestSeriesRank = item => {
  const order = [...releaseSeriesOrder()].reverse();
  const index = order.indexOf(item?.series);
  return index >= 0 ? index : order.length;
};
const catalogToolFirstReleaseProductNo = item => {
  const meta = toolsFirstReleaseMetaMap().get(item?.id);
  const product = Number.isInteger(meta?.productIndex) ? productItems[meta.productIndex] : null;
  if (!product) return "";
  const region = Object.keys(releaseRegionLabels)[meta.regionIndex] || activeReleaseRegion;
  const release = productRelease(product, region);
  return release.no || product.no || "";
};
const catalogProductNumberKey = item => {
  const source = [
    item?.productNo,
    item?.no,
    toolsItemsById.has(item?.id) ? catalogToolFirstReleaseProductNo(item) : "",
    item?.id
  ].filter(Boolean).join(" ");
  const match = source.match(/\b(BBG|BX|UX|CX|BB|B)[-_\s]?(\d+)/i);
  if (!match) return null;
  const prefix = match[1].toUpperCase();
  return {
    prefixRank: catalogProductPrefixRank[prefix] || 0,
    number: Number(match[2]) || 0
  };
};
const compareCatalogProductNumberKeys = (a, b) => {
  if (a && b) {
    const prefixDiff = b.prefixRank - a.prefixRank;
    if (prefixDiff) return prefixDiff;
    return b.number - a.number;
  }
  if (a || b) return a ? -1 : 1;
  return 0;
};
const compareCatalogItemsByLatest = (a, b) => {
  const seriesDiff = catalogLatestSeriesRank(a) - catalogLatestSeriesRank(b);
  if (seriesDiff) return seriesDiff;
  const releaseDiff = compareCatalogItemsByLatestRelease(a, b);
  if (releaseDiff) return releaseDiff;
  const numberDiff = compareCatalogProductNumberKeys(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  const orderDiff = catalogSourceOrder(b) - catalogSourceOrder(a);
  if (orderDiff) return orderDiff;
  return (a?.name || "").localeCompare(b?.name || "", "ko", { numeric: true });
};
const compareCatalogSearchEntriesByLatest = (a, b) =>
  b.score - a.score || compareCatalogItemsByLatest(a.item, b.item);
const catalogHasSearchQuery = () => Boolean(catalogSearchQuery());
const catalogHasSeriesFilter = () => selectedCatalogSeries !== "all";
const catalogItemMatchesSeries = item => !catalogHasSeriesFilter() || item?.series === selectedCatalogSeries;
const catalogUsesDefaultBrowseSet = query => !selectedCatalogKind && (query ? query.isEmpty : !catalogHasSearchQuery());
const shouldShowCatalogCount = () => Boolean(
  catalogHasSearchQuery() ||
  selectedCatalogKind
);
const CATALOG_VISIBLE_ITEMS_CACHE_LIMIT = 48;
const catalogVisibleItemsCache = new Map();
const cacheCatalogVisibleItems = (key, factory) => {
  const cached = catalogVisibleItemsCache.get(key);
  if (cached) return cached;
  if (catalogVisibleItemsCache.size >= CATALOG_VISIBLE_ITEMS_CACHE_LIMIT) {
    catalogVisibleItemsCache.delete(catalogVisibleItemsCache.keys().next().value);
  }
  const items = factory();
  catalogVisibleItemsCache.set(key, items);
  return items;
};
const catalogVisibleCacheKey = bucket => `${bucket}|${catalogRenderKey()}`;
const sortCatalogEntries = (entries, query) => entries
  .sort((a, b) => query.isEmpty
    ? compareCatalogItemsByLatest(a.item, b.item)
    : compareCatalogSearchEntriesByLatest(a, b))
  .map(entry => entry.item);
const visibleCatalogSubsetItems = ({ bucket, items, includeItem }) =>
  cacheCatalogVisibleItems(catalogVisibleCacheKey(bucket), () => {
    const query = prepareCatalogSearchQuery(catalogSearchQuery());
    return sortCatalogEntries(items
      .map(item => {
        if (!includeItem(item, query)) return null;
        const score = query.isEmpty ? 0 : catalogListSearchScore(item, query);
        return query.isEmpty || score > 0 ? { item, score } : null;
      })
      .filter(Boolean), query);
  });
const visibleToolsItems = () => visibleCatalogSubsetItems({
  bucket: "tools",
  items: toolsItems,
  includeItem: (item, query) => catalogItemMatchesSeries(item) && (
    selectedCatalogKind === "tools" ||
    (!selectedCatalogKind && !query.isEmpty)
  )
});
const visibleCatalogCoreItems = () => visibleCatalogSubsetItems({
  bucket: "core",
  items: catalogCoreItems,
  includeItem: (item, query) => {
    if (selectedCatalogKind === "tools" || !catalogItemMatchesSeries(item)) return false;
    const useDefaultBrowseSet = catalogUsesDefaultBrowseSet(query);
    const effectiveCatalogItemType = useDefaultBrowseSet ? "bey" : selectedCatalogKind || "all";
    if (effectiveCatalogItemType === "bey" && item.type !== "bey") return false;
    if (effectiveCatalogItemType === "parts" && item.type === "bey") return false;
    return true;
  }
});
const visibleCatalogItems = () => {
  const cacheKey = catalogVisibleCacheKey("all");
  return cacheCatalogVisibleItems(cacheKey, () => {
    const query = prepareCatalogSearchQuery(catalogSearchQuery());
    return sortCatalogEntries([...visibleCatalogCoreItems(), ...visibleToolsItems()]
    .map(item => {
      const score = query.isEmpty ? 0 : catalogListSearchScore(item, query);
      return query.isEmpty || score > 0 ? { item, score } : null;
    })
    .filter(Boolean), query);
  });
};
const openCatalogCard = card => {
  if (card.dataset.productId) openProductEntry(card.dataset.productId);
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
const CATALOG_PAGE_SIZE = 40;
const ANIME_PAGE_SIZE = CATALOG_PAGE_SIZE;
let currentCatalogPage = 1;
let currentCatalogRenderKey = "";
let currentAnimePage = 1;
let currentAnimeRenderKey = "";
const categoryCollectionRenderKeys = new Map();
const categoryCollectionItemKey = (item, index) => item?.id || item?.name || item?.title || String(index);
const renderCategoryCollectionGrid = ({ cacheKey, grid, items, cardTemplate, emptyMarkup, itemKey = categoryCollectionItemKey }) => {
  const nextKey = items.length
    ? items.map((item, index) => itemKey(item, index)).join("|")
    : `__empty__:${emptyMarkup}`;
  if (categoryCollectionRenderKeys.get(cacheKey) !== nextKey) {
    grid.innerHTML = items.length ? items.map(cardTemplate).join("") : emptyMarkup;
    categoryCollectionRenderKeys.set(cacheKey, nextKey);
  }
  bindCatalogCardClicks(grid);
};
const renderCategoryCollection = config => {
  const grid = document.querySelector(config.gridSelector);
  if (!grid) return [];
  config.syncRenderPage(config.renderKey());
  const visible = config.getVisibleItems();
  const totalPages = Math.max(1, Math.ceil(visible.length / config.pageSize));
  const currentPage = Math.min(Math.max(1, config.getCurrentPage()), totalPages);
  config.setCurrentPage(currentPage);
  const pageStart = (currentPage - 1) * config.pageSize;
  const pageItems = visible.slice(pageStart, pageStart + config.pageSize);
  const count = config.countSelector ? document.querySelector(config.countSelector) : null;
  if (count) count.textContent = visible.length;
  renderCategoryCollectionGrid({
    cacheKey: config.key,
    grid,
    items: pageItems,
    cardTemplate: config.cardTemplate,
    emptyMarkup: config.emptyMarkup(visible)
  });
  config.afterRender?.(visible);
  config.renderPagination(totalPages);
  return visible;
};
const catalogRenderKey = () => [
  selectedCatalogKind || "",
  selectedCatalogSeries || "all",
  catalogSearchQuery()
].join("|");
const syncCatalogRenderPage = renderKey => {
  if (renderKey !== currentCatalogRenderKey) {
    currentCatalogRenderKey = renderKey;
    currentCatalogPage = 1;
  }
};
const animeRenderKey = () => animeSearchQuery();
const syncAnimeRenderPage = renderKey => {
  if (renderKey !== currentAnimeRenderKey) {
    currentAnimeRenderKey = renderKey;
    currentAnimePage = 1;
  }
};
const paginationButtons = ({ currentPage, totalPages, dataAttr, buttonClass, stepClass, navClass = "", label }) => {
  if (totalPages <= 1) return "";
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let page = start; page <= end; page += 1) pages.push(page);
  const navClassName = `catalog-pagination-nav${navClass ? ` ${navClass}` : ""}`;
  const pageButtons = pages.map(page => `
    <button class="ui-button ${buttonClass}${page === currentPage ? " active" : ""}" type="button" ${dataAttr}="${page}"${page === currentPage ? " aria-current=\"page\"" : ""}>${page}</button>`).join("");
  return `<nav class="${navClassName}" aria-label="${label}">
    <button class="ui-button ${stepClass}" type="button" ${dataAttr}="${currentPage - 1}" ${currentPage <= 1 ? "disabled aria-disabled=\"true\"" : ""}>이전</button>
    ${start > 1 ? `<button class="ui-button ${buttonClass}" type="button" ${dataAttr}="1">1</button>${start > 2 ? `<span class="catalog-page-gap">…</span>` : ""}` : ""}
    ${pageButtons}
    ${end < totalPages ? `${end < totalPages - 1 ? `<span class="catalog-page-gap">…</span>` : ""}<button class="ui-button ${buttonClass}" type="button" ${dataAttr}="${totalPages}">${totalPages}</button>` : ""}
    <button class="ui-button ${stepClass}" type="button" ${dataAttr}="${currentPage + 1}" ${currentPage >= totalPages ? "disabled aria-disabled=\"true\"" : ""}>다음</button>
  </nav>`;
};
const renderPagination = ({ rootSelector, totalPages, currentPage, ...buttonOptions }) => {
  const root = document.querySelector(rootSelector);
  if (!root) return;
  root.innerHTML = paginationButtons({ currentPage, totalPages, ...buttonOptions });
  root.hidden = totalPages <= 1;
};
const renderCatalogPagination = totalPages => renderPagination({
  rootSelector: "#catalogPagination",
  totalPages,
  currentPage: currentCatalogPage,
  dataAttr: "data-catalog-page",
  buttonClass: "catalog-page-button",
  stepClass: "catalog-page-step",
  label: "완구 페이지"
});
const renderAnimePagination = totalPages => renderPagination({
  rootSelector: "#animePagination",
  totalPages,
  currentPage: currentAnimePage,
  dataAttr: "data-anime-page",
  buttonClass: "anime-page-button",
  stepClass: "anime-page-step",
  navClass: "anime-pagination-nav",
  label: "애니메이션 페이지"
});
const scrollGridIntoView = ({ gridSelector, controlSelector }) => {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;
  const topbarHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
  const controlHeight = document.querySelector(controlSelector)?.getBoundingClientRect().height || 0;
  const targetTop = grid.getBoundingClientRect().top + window.scrollY - topbarHeight - controlHeight - 18;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
};
const scrollCatalogGridIntoView = () => scrollGridIntoView({
  gridSelector: "#catalogGrid",
  controlSelector: ".catalog-control-bar"
});
const scrollAnimeGridIntoView = () => scrollGridIntoView({
  gridSelector: "#animeCharacterGrid",
  controlSelector: ".anime-control-bar"
});
const searchScopeLabel = scope => ({
  all: "전체",
  bey: "베이",
  tools: "장비",
  product: "제품",
  manga: "만화",
  anime: "애니"
})[scope] || "전체";
const searchScopeValues = ["all", "bey", "tools", "product", "manga", "anime"];
const normalizeSearchScope = scope => searchScopeValues.includes(scope) ? scope : "all";
const updateCatalogCount = visibleItems => {
  const count = document.querySelector("#catalogCount");
  if (!count) return;
  const countRoot = count.closest(".result-count");
  const showCount = shouldShowCatalogCount();
  countRoot?.classList.toggle("is-hidden", !showCount);
  countRoot?.setAttribute("aria-hidden", String(!showCount));
  count.textContent = Array.isArray(visibleItems) ? visibleItems.length : visibleCatalogItems().length;
};
const syncCatalogScopeState = ({ updateCount = true } = {}) => {
  const panel = document.querySelector('.app-panel[data-app-panel="catalog"]');
  if (panel) panel.dataset.catalogScope = selectedCatalogKind || "all";
  if (updateCount) updateCatalogCount();
};
const searchHash = (query = globalSearchQuery(), scope = globalSearchScopeValue()) => {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("scope", normalizeSearchScope(scope || "all"));
  return `#search?${params.toString()}`;
};
const catalogRouteScopes = new Set(["all", "bey", "parts", "tools"]);
const normalizeCatalogRouteScope = scope => catalogRouteScopes.has(scope) ? scope : "all";
const currentPathWithSearch = () => `${window.location.pathname}${window.location.search}`;
const routeHashParts = (hash = window.location.hash) => {
  const raw = (hash || "").replace(/^#/, "");
  const queryIndex = raw.indexOf("?");
  return {
    id: queryIndex >= 0 ? raw.slice(0, queryIndex) : raw,
    params: new URLSearchParams(queryIndex >= 0 ? raw.slice(queryIndex + 1) : "")
  };
};
function normalizeRoute(route = {}) {
  if (!route || !route.type && !route.id) return { type: "overview" };
  if (route.type === "search") return {
    type: "search",
    query: route.query || "",
    scope: normalizeSearchScope(route.scope || "all")
  };
  if (route.type === "catalog") return {
    type: "catalog",
    scope: normalizeCatalogRouteScope(route.scope)
  };
  if (route.type === "category-release") return {
    type: "category-release",
    options: { ...(route.options || {}) }
  };
  if (route.type === "category-anime") return {
    type: "category-anime"
  };
  if (route.type === "category-anime-episodes") return {
    type: "category-anime-episodes",
    options: { ...(route.options || {}) }
  };
  if (route.type === "detail" || route.id) {
    const id = String(route.id || "");
    return id ? {
      type: "detail",
      id,
      options: { ...(route.options || {}) }
    } : { type: "overview" };
  }
  return { type: "overview" };
}
function parseRouteFromHash(hash = window.location.hash) {
  const { id, params } = routeHashParts(hash);
  if (!id) return { type: "overview" };
  if (id === "search") return {
    type: "search",
    query: params.get("q") || "",
    scope: normalizeSearchScope(params.get("scope") || "all")
  };
  if (id === "toy-catalog") return {
    type: "catalog",
    scope: normalizeCatalogRouteScope(params.get("scope"))
  };
  if (id === "toy-release") return { type: "category-release" };
  if (id === "anime-character") return { type: "category-anime" };
  if (id === "anime-episode") return { type: "category-anime-episodes" };
  return normalizeRoute({ type: "detail", id });
}
function serializeRoute(route = {}) {
  const normalizedRoute = normalizeRoute(route);
  if (normalizedRoute.type === "overview") return "";
  if (normalizedRoute.type === "search") return searchHash(normalizedRoute.query || "", normalizedRoute.scope || "all");
  if (normalizedRoute.type === "catalog") {
    const params = new URLSearchParams();
    params.set("scope", normalizeCatalogRouteScope(normalizedRoute.scope));
    return `#toy-catalog?${params.toString()}`;
  }
  if (normalizedRoute.type === "category-release") return "#toy-release";
  if (normalizedRoute.type === "category-anime") return "#anime-character";
  if (normalizedRoute.type === "category-anime-episodes") return "#anime-episode";
  if (normalizedRoute.id) return `#${normalizedRoute.id}`;
  return "";
}
function isPrimaryRoute(route = {}) {
  if (!route) return false;
  return route.type === "overview" || route.type === "catalog" || route.type === "search" || route.type === "category-release" || route.type === "category-anime" || route.type === "category-anime-episodes";
}
function isDetailRoute(route = {}) {
  if (!route) return false;
  return route.type === "detail";
}
const routeSnapshot = route => route ? normalizeRoute(route) : null;
let modalOriginRoute = null;
let activeDetailModalContext = null;
let lastPrimaryRoute = { type: "overview" };
function rememberPrimaryRoute(route = {}) {
  if (isPrimaryRoute(route)) lastPrimaryRoute = routeSnapshot(route) || { type: "overview" };
}
function syncModalOriginRoute(route = {}) {
  if (isDetailRoute(route)) {
    if (!modalOriginRoute) {
      const currentRoute = parseRouteFromHash();
      modalOriginRoute = isPrimaryRoute(currentRoute) ? routeSnapshot(currentRoute) : routeSnapshot(lastPrimaryRoute);
    }
    return;
  }
  if (isPrimaryRoute(route)) {
    rememberPrimaryRoute(route);
    modalOriginRoute = null;
  }
}
function getModalCloseRoute() {
  return routeSnapshot(modalOriginRoute) || detailModalFallbackCloseRoute(activeDetailModalContext);
}
function clearModalOriginRoute() {
  modalOriginRoute = null;
}
function stabilizePrimaryRouteScroll() {
  requestAnimationFrame(() => {
    if (!modal?.open) window.scrollTo(0, 0);
  });
}
let applyingRoute = false;
let lastAppliedRouteKey = "";
const appliedRouteKey = route => `${currentPathWithSearch()}${serializeRoute(route)}`;
function navigateToRoute(route, { replace = false, apply = true, preserveScroll = false, preserveSearch = false } = {}) {
  const normalizedRoute = normalizeRoute(route);
  syncModalOriginRoute(normalizedRoute);
  const nextHash = serializeRoute(normalizedRoute);
  const nextUrl = `${currentPathWithSearch()}${nextHash}`;
  if (`${currentPathWithSearch()}${window.location.hash}` !== nextUrl) {
    try {
      history[replace ? "replaceState" : "pushState"](null, "", nextUrl);
    } catch {
      // URL writes can be denied in embedded browsers; still apply the route state.
    }
  }
  if (apply) applyRoute(normalizedRoute, { preserveScroll, preserveSearch });
}
const mainSearchProductCompositionText = (item, region) => productCompositionItems(item, region)
  .map(part => [part.name, mainSearchItemText(findCatalogItemById(part.target))].filter(Boolean).join(" "))
  .filter(Boolean)
  .join(" ");
const productSearchFields = item => {
  const krRelease = productRelease(item, "kr");
  const jpRelease = productRelease(item, "jp");
  return [
    ...searchFieldsFromValues("primaryName", [item.name, krRelease.name, jpRelease.name]),
    ...searchFieldsFromValues("code", [item.no, krRelease.no, jpRelease.no]),
    ...searchFieldsFromValues("category", [
      item.series,
      seriesLabels[item.series],
      krRelease.kind,
      jpRelease.kind,
      krRelease.sale,
      jpRelease.sale
    ]),
    ...searchFieldsFromValues("composition", [
      mainSearchProductCompositionText(item, "kr"),
      mainSearchProductCompositionText(item, "jp")
    ])
  ];
};
const bookSearchFields = item => [
  ...searchFieldsFromValues("primaryName", [item.name]),
  ...searchFieldsFromValues("alias", [item.en]),
  ...searchFieldsFromValues("category", [item.category]),
  ...searchFieldsFromValues("description", [item.desc])
];
const gameSearchFields = item => [
  ...searchFieldsFromValues("primaryName", [item.name]),
  ...searchFieldsFromValues("alias", [item.en]),
  ...searchFieldsFromValues("category", [item.category]),
  ...searchFieldsFromValues("description", [item.desc])
];
const animeSearchFields = episode => [
  ...searchFieldsFromValues("primaryName", [episode.titles?.kr, episode.titles?.jp]),
  ...searchFieldsFromValues("code", [episode.no]),
  ...searchFieldsFromValues("category", [animeSeasonLabels[episode.season], episode.season]),
  ...searchFieldsFromValues("description", [episode.note])
];
let searchResultRecordCache = null;
let searchResultRecordListCache = null;
const SEARCH_RESULT_ITEMS_CACHE_LIMIT = 64;
const SEARCH_RESULT_MARKUP_CACHE_LIMIT = 32;
const SEARCH_RESULTS_PAGE_SIZE = 10;
const SEARCH_HASH_UPDATE_DELAY = 180;
const SEARCH_RENDER_DELAY = 100;
const searchResultItemsCache = new Map();
const searchResultMarkupCache = new Map();
const cacheSearchResultItems = (key, result) => {
  if (!searchResultItemsCache.has(key) && searchResultItemsCache.size >= SEARCH_RESULT_ITEMS_CACHE_LIMIT) {
    searchResultItemsCache.delete(searchResultItemsCache.keys().next().value);
  }
  searchResultItemsCache.set(key, result);
  return result;
};
const cacheSearchResultMarkup = (key, result) => {
  if (!searchResultMarkupCache.has(key) && searchResultMarkupCache.size >= SEARCH_RESULT_MARKUP_CACHE_LIMIT) {
    searchResultMarkupCache.delete(searchResultMarkupCache.keys().next().value);
  }
  searchResultMarkupCache.set(key, result);
  return result;
};
const mainSearchRecord = (kind, item, fields, order, extra = {}) => createSearchRecord(kind, item, fields, order, extra);
const createMainSearchRecords = ({ items, kind, fields = catalogItemSearchFields, extra = () => ({}) }, sourceIndex = 0) =>
  items.map((item, index) => mainSearchRecord(kind, item, fields(item, index), (sourceIndex * 100000) + index, extra(item, index)));
const mainSearchRecordSources = () => [
  { key: "catalog", kind: "catalog-item", items: catalogCoreItems, fields: catalogItemSearchFields },
  { key: "tools", kind: "tools", items: toolsItems, fields: toolsSearchFields },
  { key: "product", kind: "product", items: productItems.filter(item => !item.lineupOnly), fields: productSearchFields },
  { key: "manga", kind: "book", items: bookItems, fields: bookSearchFields },
  { key: "game", kind: "game", items: gameItems, fields: gameSearchFields },
  { key: "anime", kind: "anime", items: animeInfo.episodes, fields: animeSearchFields, extra: (episode, index) => ({ index }) }
];
const searchResultRecords = () => {
  if (searchResultRecordCache) return searchResultRecordCache;
  searchResultRecordCache = Object.fromEntries(mainSearchRecordSources().map((source, sourceIndex) => [source.key, createMainSearchRecords(source, sourceIndex)]));
  return searchResultRecordCache;
};
const searchResultCacheKey = (scope, query) => `${scope}\u0000${searchQueryFrom(query).raw}`;
const searchResultRenderKey = (scope, query) => [
  scope,
  searchQueryFrom(query).raw,
  activeReleaseRegion,
  animeDisplayRegion
].join("\u0000");
const searchResultRecordLists = () => {
  if (searchResultRecordListCache) return searchResultRecordListCache;
  const records = searchResultRecords();
  searchResultRecordListCache = {
    all: [...records.catalog, ...records.tools, ...records.product, ...records.manga, ...records.game, ...records.anime],
    bey: records.catalog,
    tools: records.tools,
    product: records.product,
    manga: records.manga,
    anime: records.anime
  };
  return searchResultRecordListCache;
};
const searchResultRecordList = scope => searchResultRecordLists()[normalizeSearchScope(scope)] || searchResultRecordLists().all;
const scoredSearchResult = (record, preparedQuery) => {
  const match = matchSearchRecord(record, preparedQuery);
  if (match.matched && searchQueryFrom(preparedQuery).isEmpty) return { record, score: 0, entry: record.entry };
  return match.matched && match.score > 0 ? { record, score: match.score, entry: record.entry } : null;
};
const insertLimitedSearchResult = (results, result, limit) => {
  let index = results.findIndex(entry => compareScoredSearchResults(result, entry) < 0);
  if (index < 0) index = results.length;
  if (index < limit) {
    results.splice(index, 0, result);
    if (results.length > limit) results.pop();
  } else if (results.length < limit) {
    results.push(result);
  }
};
const collectSearchResultItems = (scope = globalSearchScopeValue(), query = globalSearchQuery()) => {
  scope = normalizeSearchScope(scope);
  const preparedQuery = searchQueryFrom(query);
  const cacheKey = searchResultCacheKey(scope, preparedQuery);
  const cached = searchResultItemsCache.get(cacheKey);
  if (cached) return cached;
  const scored = [];
  for (const record of searchResultRecordList(scope)) {
    const result = scoredSearchResult(record, preparedQuery);
    if (result) scored.push(result);
  }
  scored.sort(compareScoredSearchResults);
  const items = scored.map(result => result.entry);
  const result = { total: items.length, items };
  return cacheSearchResultItems(cacheKey, result);
};
const collectSearchPreviewItems = (scope = globalSearchScopeValue(), query = globalSearchQuery(), limit = SEARCH_PREVIEW_LIMIT) => {
  scope = normalizeSearchScope(scope);
  const preparedQuery = searchQueryFrom(query);
  const cached = searchResultItemsCache.get(searchResultCacheKey(scope, preparedQuery));
  if (cached) return cached.items.slice(0, limit);
  const topResults = [];
  for (const record of searchResultRecordList(scope)) {
    const result = scoredSearchResult(record, preparedQuery);
    if (result) insertLimitedSearchResult(topResults, result, limit);
  }
  return topResults.map(result => result.entry);
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
  if (entry.kind === "anime") return animeEpisodeTitle(entry.item, animeDisplayRegion);
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
const searchAnimeEpisodeSnippet = (episode, region = animeDisplayRegion) => [
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
const searchResultButtonMarkupSlice = (renderKey, items, start, end) => {
  const cached = searchResultMarkupCache.get(renderKey);
  const markup = cached || cacheSearchResultMarkup(renderKey, []);
  const safeStart = Math.max(0, start);
  const safeEnd = Math.min(end, items.length);
  for (let index = safeStart; index < safeEnd; index += 1) {
    if (!markup[index]) markup[index] = searchResultButton(items[index]);
  }
  return markup.slice(safeStart, safeEnd);
};
const searchResultPageButtons = (currentPage, totalPages) => {
  if (totalPages <= 1) return "";
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let page = start; page <= end; page += 1) pages.push(page);
  const pageButtons = pages.map(page => `
    <button class="ui-button search-results-page-button${page === currentPage ? " active" : ""}" type="button" data-search-results-page="${page}"${page === currentPage ? " aria-current=\"page\"" : ""}>${page}</button>`).join("");
  return `<nav class="search-results-pagination" aria-label="검색결과 페이지">
    <button class="ui-button search-results-page-step" type="button" data-search-results-page="${currentPage - 1}" ${currentPage <= 1 ? "disabled aria-disabled=\"true\"" : ""}>이전</button>
    ${start > 1 ? `<button class="ui-button search-results-page-button" type="button" data-search-results-page="1">1</button>${start > 2 ? `<span class="search-results-page-gap">…</span>` : ""}` : ""}
    ${pageButtons}
    ${end < totalPages ? `${end < totalPages - 1 ? `<span class="search-results-page-gap">…</span>` : ""}<button class="ui-button search-results-page-button" type="button" data-search-results-page="${totalPages}">${totalPages}</button>` : ""}
    <button class="ui-button search-results-page-step" type="button" data-search-results-page="${currentPage + 1}" ${currentPage >= totalPages ? "disabled aria-disabled=\"true\"" : ""}>다음</button>
  </nav>`;
};
let currentSearchResultPage = 1;
let currentSearchResultKey = "";
const resetCurrentSearchResultPage = key => {
  currentSearchResultKey = key;
  currentSearchResultPage = 1;
};
const syncSearchResultRenderState = (scope, query) => {
  const normalizedScope = normalizeSearchScope(scope);
  const preparedQuery = prepareSearchQuery(query);
  const renderKey = searchResultRenderKey(normalizedScope, preparedQuery);
  if (renderKey !== currentSearchResultKey) resetCurrentSearchResultPage(renderKey);
  return { scope: normalizedScope, query: preparedQuery.raw, preparedQuery, renderKey };
};
const bindSearchResultControls = gridRoot => {
  if (!gridRoot || gridRoot.dataset.searchResultControlsBound) return;
  gridRoot.dataset.searchResultControlsBound = "true";
  gridRoot.addEventListener("click", event => {
    const pageButton = event.target.closest("[data-search-results-page]");
    if (!pageButton || pageButton.disabled || !gridRoot.contains(pageButton)) return;
    event.preventDefault();
    currentSearchResultPage = Number(pageButton.dataset.searchResultsPage) || 1;
    renderGlobalCards();
  });
};
const SEARCH_PREVIEW_LIMIT = 6;
const SEARCH_PREVIEW_RENDER_DELAY = 100;
const searchPreviewControls = new Map();
let activeSearchPreview = null;
const searchPreviewScopeValue = input => input === overviewSearch ? overviewSearchScopeValue() : globalSearchScopeValue();
const searchPreviewSyncToGlobal = input => {
  if (input !== overviewSearch) return;
  if (globalSearch && overviewSearch) setSearchInputValue(globalSearch, overviewSearch.value);
  setGlobalSearchScope(overviewSearchScopeValue());
};
const searchPreviewOptionId = (control, index) => `${control.preview.id}-option-${index}`;
const searchPreviewItemButton = (entry, control, index) => {
  const attr = searchResultAttributes(entry);
  const selected = index === control.highlightedIndex;
  return `<button class="search-result-item search-preview-item${selected ? " is-active" : ""}" type="button" ${attr} role="option" id="${escapeAttributeValue(searchPreviewOptionId(control, index))}" data-search-preview-index="${index}" aria-selected="${selected ? "true" : "false"}">
    <span class="search-result-kind">${escapeHtml(searchResultType(entry))}</span>
    <strong>${escapeHtml(searchResultTitle(entry))}</strong>
    <span class="search-result-snippet">${escapeHtml(searchResultSnippet(entry))}</span>
  </button>`;
};
const closeSearchPreview = control => {
  if (!control) return;
  if (control.renderTimer) {
    clearTimeout(control.renderTimer);
    control.renderTimer = 0;
  }
  control.preview.hidden = true;
  control.highlightedIndex = -1;
  control.entries = [];
  control.input.setAttribute("aria-expanded", "false");
  control.input.removeAttribute("aria-activedescendant");
  if (activeSearchPreview === control) activeSearchPreview = null;
};
const closeAllSearchPreviews = exceptControl => {
  searchPreviewControls.forEach(control => {
    if (control !== exceptControl) closeSearchPreview(control);
  });
};
const renderSearchPreview = control => {
  if (!control) return;
  const query = control.input.value.trim();
  const focusedInside = control.root.contains(document.activeElement);
  if (!query || !focusedInside) {
    closeSearchPreview(control);
    return;
  }
  closeAllSearchPreviews(control);
  control.entries = collectSearchPreviewItems(searchPreviewScopeValue(control.input), query);
  if (control.highlightedIndex >= control.entries.length) control.highlightedIndex = -1;
  control.preview.innerHTML = control.entries.length
    ? `<div class="search-preview-list" role="presentation">${control.entries.map((entry, index) => searchPreviewItemButton(entry, control, index)).join("")}</div>
      <button class="search-preview-all" type="button" data-search-preview-all>전체 검색결과 보기</button>`
    : `<div class="search-preview-empty">검색결과가 없습니다.</div>`;
  control.preview.hidden = false;
  activeSearchPreview = control;
  control.input.setAttribute("aria-expanded", "true");
  if (control.highlightedIndex >= 0) {
    control.input.setAttribute("aria-activedescendant", searchPreviewOptionId(control, control.highlightedIndex));
  } else {
    control.input.removeAttribute("aria-activedescendant");
  }
};
const refreshSearchPreview = (input, { resetActive = false } = {}) => {
  const control = searchPreviewControls.get(input);
  if (!control) return;
  if (resetActive) control.highlightedIndex = -1;
  if (control.renderTimer) clearTimeout(control.renderTimer);
  if (!input.value.trim()) {
    control.renderTimer = 0;
    renderSearchPreview(control);
    return;
  }
  control.renderTimer = setTimeout(() => {
    control.renderTimer = 0;
    renderSearchPreview(control);
  }, SEARCH_PREVIEW_RENDER_DELAY);
};
const openSearchPreviewItem = (control, button) => {
  if (!control || !button) return;
  searchPreviewSyncToGlobal(control.input);
  closeAllSearchPreviews();
  openCatalogCard(button);
};
const openSearchPreviewResults = control => {
  if (!control) return;
  searchPreviewSyncToGlobal(control.input);
  closeAllSearchPreviews();
  openSearchResults();
};
const handleSearchPreviewKeydown = (input, event) => {
  const control = searchPreviewControls.get(input);
  if (!control) return false;
  const key = event.key;
  if (!["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(key)) return false;
  const isOpen = !control.preview.hidden;
  if (key === "Escape") {
    if (!isOpen) return false;
    event.preventDefault();
    closeSearchPreview(control);
    return true;
  }
  if (key === "ArrowDown" || key === "ArrowUp") {
    if (!input.value.trim()) return false;
    event.preventDefault();
    if (!isOpen) renderSearchPreview(control);
    const count = control.entries.length;
    if (!count) return true;
    const direction = key === "ArrowDown" ? 1 : -1;
    control.highlightedIndex = control.highlightedIndex < 0
      ? (direction > 0 ? 0 : count - 1)
      : (control.highlightedIndex + direction + count) % count;
    renderSearchPreview(control);
    return true;
  }
  if (key === "Enter" && isOpen && control.highlightedIndex >= 0) {
    const button = control.preview.querySelector(`[data-search-preview-index="${control.highlightedIndex}"]`);
    if (button) {
      event.preventDefault();
      openSearchPreviewItem(control, button);
      return true;
    }
  }
  return false;
};
const bindSearchPreview = (input, containerSelector) => {
  if (!input || searchPreviewControls.has(input)) return;
  const root = input.closest(containerSelector);
  if (!root) return;
  const preview = document.createElement("div");
  preview.className = "search-preview";
  preview.id = `${input.id}Preview`;
  preview.hidden = true;
  preview.setAttribute("role", "listbox");
  preview.setAttribute("aria-label", "검색결과 미리보기");
  root.appendChild(preview);
  input.setAttribute("aria-haspopup", "listbox");
  input.setAttribute("aria-controls", preview.id);
  input.setAttribute("aria-expanded", "false");
  const control = { input, root, preview, entries: [], highlightedIndex: -1, renderTimer: 0 };
  searchPreviewControls.set(input, control);
  input.addEventListener("focus", () => refreshSearchPreview(input, { resetActive: true }));
  root.addEventListener("focusout", () => {
    setTimeout(() => {
      if (!root.contains(document.activeElement)) closeSearchPreview(control);
    }, 0);
  });
  preview.addEventListener("click", event => {
    const allButton = event.target.closest("[data-search-preview-all]");
    if (allButton) {
      event.preventDefault();
      openSearchPreviewResults(control);
      return;
    }
    const itemButton = event.target.closest("[data-search-preview-index]");
    if (!itemButton) return;
    event.preventDefault();
    openSearchPreviewItem(control, itemButton);
  });
};
const renderGlobalCards = () => {
  const grid = document.querySelector("#globalGrid");
  const count = document.querySelector("#globalCount");
  if (!grid || !count) return;
  const { scope, query, preparedQuery, renderKey } = syncSearchResultRenderState(globalSearchScopeValue(), globalSearchQuery());
  const visible = collectSearchResultItems(scope, preparedQuery).items;
  const totalCount = visible.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / SEARCH_RESULTS_PAGE_SIZE));
  currentSearchResultPage = Math.min(Math.max(1, currentSearchResultPage), totalPages);
  const pageStart = (currentSearchResultPage - 1) * SEARCH_RESULTS_PAGE_SIZE;
  const pageEnd = pageStart + SEARCH_RESULTS_PAGE_SIZE;
  count.textContent = totalCount;
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
  const itemMarkup = visible.length ? searchResultButtonMarkupSlice(renderKey, visible, pageStart, pageEnd) : [];
  grid.innerHTML = visible.length
    ? `${itemMarkup.join("")}${searchResultPageButtons(currentSearchResultPage, totalPages)}`
    : `<p class="search-empty">검색결과가 없습니다.</p>`;
  bindCatalogCardClicks(grid);
  bindSearchResultControls(grid);
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
    const part = catalogCoreItemsById.get(partId);
    return `<a class="ui-list-link mounted-link" href="#${part.id}" data-part-id="${part.id}"><span>${typeLabels[part.type]}</span><strong>${itemDisplayName(part, region)}</strong><b>→</b></a>`;
  }).join("")}</div></section>` : "";
  return info;
}

let modelViewerCleanup = null;
let threeModules = null;

function cleanupModelViewer() {
  if (!modelViewerCleanup) return;
  modelViewerCleanup();
  modelViewerCleanup = null;
}

async function loadThreeModules() {
  if (!threeModules) {
    const [THREE, { OBJLoader }, { OrbitControls }] = await Promise.all([
      import("https://esm.sh/three@0.160.0"),
      import("https://esm.sh/three@0.160.0/examples/jsm/loaders/OBJLoader.js"),
      import("https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js")
    ]);
    threeModules = { THREE, OBJLoader, OrbitControls };
  }
  return threeModules;
}

async function initModelViewer() {
  cleanupModelViewer();
  const container = document.querySelector(".model-viewer");
  if (!container) return;

  const { THREE, OBJLoader, OrbitControls } = await loadThreeModules();
  if (!document.body.contains(container)) return;

  const width = Math.max(container.clientWidth, 260);
  const height = Math.max(container.clientHeight, 300);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 0, 5.35);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height, false);
  container.textContent = "";
  container.appendChild(renderer.domElement);
  const resetButton = document.createElement("button");
  resetButton.className = "ui-button model-reset";
  resetButton.type = "button";
  resetButton.textContent = "기본 위치";
  container.appendChild(resetButton);

  const defaultCameraPosition = new THREE.Vector3(0, 0, 5.35);
  const defaultControlsTarget = new THREE.Vector3(0, 0, 0);
  const defaultModelRotation = new THREE.Euler(-Math.PI / 2, 0, 0);
  const modelRoot = new THREE.Group();
  scene.add(modelRoot);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = true;
  controls.screenSpacePanning = true;
  controls.rotateSpeed = 0.72;
  controls.panSpeed = 0.85;
  controls.zoomSpeed = 0.88;
  controls.minDistance = 2.6;
  controls.maxDistance = 9;
  controls.target.copy(defaultControlsTarget);
  const orbitMouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  };
  const panMouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  };
  controls.mouseButtons = orbitMouseButtons;
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  };
  const resetView = () => {
    camera.position.copy(defaultCameraPosition);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    controls.target.copy(defaultControlsTarget);
    modelRoot.rotation.copy(defaultModelRotation);
    controls.update();
  };
  resetButton.addEventListener("click", resetView);

  const usePanForShiftDrag = event => {
    controls.mouseButtons = event.shiftKey && event.button === 0 ? panMouseButtons : orbitMouseButtons;
  };
  const restoreOrbitDrag = () => {
    controls.mouseButtons = orbitMouseButtons;
    container.classList.remove("is-grabbing");
  };
  const markDragging = () => container.classList.add("is-grabbing");
  const preventContextMenu = event => event.preventDefault();
  const resizeRenderer = () => {
    if (!document.body.contains(container)) return;
    const nextWidth = Math.max(container.clientWidth, 260);
    const nextHeight = Math.max(container.clientHeight, 300);
    renderer.setSize(nextWidth, nextHeight, false);
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    controls.update();
  };
  const resizeObserver = new ResizeObserver(resizeRenderer);
  resizeObserver.observe(container);
  renderer.domElement.addEventListener("pointerdown", usePanForShiftDrag, true);
  renderer.domElement.addEventListener("pointerdown", markDragging);
  renderer.domElement.addEventListener("dblclick", resetView);
  renderer.domElement.addEventListener("contextmenu", preventContextMenu);
  window.addEventListener("pointerup", restoreOrbitDrag);
  window.addEventListener("pointercancel", restoreOrbitDrag);

  let active = true;
  const loader = new OBJLoader();
  const handleObject = object => {
    if (!active) return;
    object.traverse(child => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({ color: 0xb8c3c8 });
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
  loader.load(container.dataset.model, handleObject, undefined, () => {
    container.innerHTML = "<p>3D 모델을 불러오지 못했습니다.</p>";
  });

  const render = () => {
    if (!active) return;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  modelViewerCleanup = () => {
    active = false;
    resetButton.removeEventListener("click", resetView);
    renderer.domElement.removeEventListener("pointerdown", usePanForShiftDrag, true);
    renderer.domElement.removeEventListener("pointerdown", markDragging);
    renderer.domElement.removeEventListener("dblclick", resetView);
    renderer.domElement.removeEventListener("contextmenu", preventContextMenu);
    window.removeEventListener("pointerup", restoreOrbitDrag);
    window.removeEventListener("pointercancel", restoreOrbitDrag);
    resizeObserver.disconnect();
    controls.dispose();
    renderer.dispose();
  };
}

const catalogItemCard = item => `
    <button class="ui-card-button category-card catalog-card${item.type === "bey" ? " bey-card" : ""}" data-id="${item.id}">
      <div class="catalog-card-visual">${cardVisualMarkup(item)}</div>
      ${cardInfo(item)}
    </button>`;
const catalogCard = item => item.category ? toolsCard(item) : catalogItemCard(item);

function renderCatalogItems() {
  renderCategoryCollection(categoryCollectionConfigs.catalog);
}

const modalContextStorageKey = "beyArchiveModalContext";
const currentPageScrollY = () => window.scrollY || document.documentElement.scrollTop || 0;
const validScrollY = value => {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? Math.round(numeric) : 0;
};
const restorePageScroll = value => {
  const targetY = validScrollY(value);
  const rootStyle = document.documentElement.style;
  const previousScrollBehavior = rootStyle.scrollBehavior;
  rootStyle.scrollBehavior = "auto";
  window.scrollTo(0, targetY);
  requestAnimationFrame(() => {
    window.scrollTo(0, targetY);
    if (previousScrollBehavior) rootStyle.scrollBehavior = previousScrollBehavior;
    else rootStyle.removeProperty("scroll-behavior");
  });
};
const modalOriginRouteSnapshot = () => {
  const origin = routeSnapshot(modalOriginRoute) || routeSnapshot(lastPrimaryRoute);
  return origin && isPrimaryRoute(origin) ? origin : null;
};
const modalOriginStateGetters = {
  catalog: () => ({
    catalogQuery: catalogSearchQuery(),
    catalogSeries: selectedCatalogSeries,
    catalogPage: currentCatalogPage
  }),
  search: () => ({
    globalQuery: globalSearchQuery(),
    globalScope: globalSearchScopeValue()
  }),
  "category-release": () => ({
    releaseQuery: activeReleaseQuery,
    releaseRegion: activeReleaseRegion,
    releaseSeries: activeReleaseSeries,
    releaseSort: { ...activeReleaseSort }
  }),
  "category-anime": () => ({
    animeQuery: animeSearchQuery(),
    animePage: currentAnimePage
  }),
  "category-anime-episodes": () => ({
    animeSeason: activeAnimeSeason,
    animeQuery: activeAnimeEpisodeQuery
  })
};
const modalOriginState = originRoute => ({
  scrollY: currentPageScrollY(),
  ...(modalOriginStateGetters[originRoute?.type]?.() || {})
});
const modalContextOptionKeys = ["backId", "backProductId", "region", "series", "releaseQuery", "animeSeason", "animeQuery"];
const modalContextOptions = options => {
  const context = Object.fromEntries(modalContextOptionKeys
    .map(key => [key, options?.[key]])
    .filter(([, value]) => value));
  if (options?.backRelease) context.backRelease = true;
  if (options?.fromAnimeList) context.fromAnimeList = true;
  if (options?.releaseSort?.key && options?.releaseSort?.direction) context.releaseSort = options.releaseSort;
  return context;
};
const detailModalRouteOptions = (options = {}, keys = []) => Object.fromEntries(keys
  .map(key => [key, options[key]])
  .filter(([, value]) => value));
const detailModalFallbackCloseRoute = (context = activeDetailModalContext) => {
  const options = context?.options || {};
  if (options.backRelease) return {
    type: "category-release",
    options: detailModalRouteOptions(options, ["region", "series", "releaseQuery", "releaseSort"])
  };
  if (options.fromAnimeList) return {
    type: "category-anime-episodes",
    options: detailModalRouteOptions(options, ["animeSeason", "animeQuery"])
  };
  const id = context?.id || "";
  if (catalogCoreItemsById.has(id) || toolsItemsById.has(id)) return { type: "catalog", scope: "all" };
  return { type: "overview" };
};
const rememberActiveDetailModalContext = context => {
  if (context?.kind === "category-release" || context?.kind === "category-anime-episodes") return;
  activeDetailModalContext = context;
};
const clearActiveDetailModalContext = () => {
  activeDetailModalContext = null;
};
function rememberModalContext(kind, id, options = {}) {
  const originRoute = modalOriginRouteSnapshot();
  const context = { kind, id, options: modalContextOptions(options) };
  if (originRoute) {
    context.originRoute = originRoute;
    context.originState = modalOriginState(originRoute);
  }
  rememberActiveDetailModalContext(context);
  try {
    sessionStorage.setItem(modalContextStorageKey, JSON.stringify(context));
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
  const releaseDate = release.releaseDate || release.release;
  return [
    release.no || "",
    release.name || item.name || "",
    release.sale || "",
    release.kind || "",
    releaseDate,
    releaseDateLabel(releaseDate),
    release.price,
    priceLabel(release.price, region)
  ].join(" ");
};
const releaseTableInitialSearchText = (item, region = activeReleaseRegion) => {
  const release = productRelease(item, region);
  return [release.name || item.name || "", item.name || ""].filter(Boolean).join(" ");
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
    .filter(item => !item.lineupOnly && item.series === series && productReleasedInRegion(item, region))
    .filter(item => matchesSearchText(releaseTableSearchText(item, region), query, releaseTableInitialSearchText(item, region)))
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
    <button class="release-sort-button" type="button" data-release-sort="${key}" aria-label="${label} ${nextDirection} 정렬">
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
    return `<tr class="table-list-row release-product-row" role="button" tabindex="0" data-product-id="${item.id}" data-release-region="${region}">
    <td>${release.no || ""}</td>
    <td><span class="release-product-link">${release.name || item.name}</span></td>
    <td>${release.kind || ""}</td>
    <td>${responsiveDateSpans("release-date-full", "release-date-compact", releaseDateLabel(releaseDate), releaseDateCompactLabel(releaseDate))}</td>
    <td>${priceLabel(release.price, region)}</td>
  </tr>`;
  }).join("");
  return rows || `<tr class="table-list-empty-row release-empty-row"><td colspan="5">검색 결과가 없습니다.</td></tr>`;
};
const releaseTableMarkup = (region = activeReleaseRegion, series = activeReleaseSeries) => tableListTableMarkup({
  scrollClass: "release-table-scroll",
  tableClass: "release-table",
  head: releaseTableHead(),
  body: productReleaseTableRows(region, series)
});
const rememberReleaseModalContext = () => rememberModalContext("category-release", "toy-release", {
  region: activeReleaseRegion,
  series: activeReleaseSeries,
  releaseSort: activeReleaseSort,
  releaseQuery: activeReleaseQuery
});
const releasePageRoot = () => document.querySelector("[data-release-page-content]");

function renderProductReleaseTable(contentRoot = document) {
  const releaseTableSection = contentRoot.querySelector(".table-list-section") || contentRoot.querySelector(".release-table-section");
  if (!releaseTableSection) return;
  releaseTableSection.innerHTML = releaseTableMarkup(activeReleaseRegion, activeReleaseSeries);
  bindProductReleaseTableRows(releaseTableSection);
}

function bindProductReleaseTableRows(tableRoot = document) {
  const openReleaseRow = releaseRow => {
    const region = releaseRegionLabels[releaseRow.dataset.releaseRegion] ? releaseRow.dataset.releaseRegion : activeReleaseRegion;
    openProductEntry(releaseRow.dataset.productId, { backRelease: true, region });
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
    renderProductReleaseTable(tableRoot.closest?.("[data-release-page-content]") || releasePageRoot() || document);
  }));
}

function renderReleasePage() {
  const root = releasePageRoot();
  if (!root) return;
  root.innerHTML = tableListPageMarkup({
    className: "release-list-page",
    controlsMarkup: releaseControls(),
    tableMarkup: releaseTableMarkup(activeReleaseRegion, activeReleaseSeries)
  });
  bindProductReleaseTable(root);
}

function bindProductReleaseTable(contentRoot = document) {
  bindProductReleaseTableRows(contentRoot);
  contentRoot.querySelectorAll("button[data-release-region]").forEach(button => button.addEventListener("click", event => {
    activeReleaseRegion = event.currentTarget.dataset.releaseRegion;
    activeReleaseSeries = releaseSeriesForRegion(activeReleaseSeries, activeReleaseRegion);
    openCategoryReleaseDetail({ region: activeReleaseRegion, series: activeReleaseSeries });
  }));
  contentRoot.querySelectorAll("button[data-release-series]").forEach(button => button.addEventListener("click", event => {
    setDropdownOption(event.currentTarget);
    activeReleaseSeries = event.currentTarget.dataset.releaseSeries;
    openCategoryReleaseDetail({ region: activeReleaseRegion, series: activeReleaseSeries });
  }));
  const releaseSearch = contentRoot.querySelector("#releaseSearchInput");
  bindSearchInput(releaseSearch, ".release-search-box", { onInput: searchInput => {
    activeReleaseQuery = searchInput.value.trim();
    rememberReleaseModalContext();
    renderProductReleaseTable(contentRoot);
  } });
}

function openCategoryReleaseDetail(options = {}) {
  if (options.updateHash !== false && !applyingRoute) {
    navigateToRoute({ type: "category-release", options });
    return;
  }
  const preserveSearch = options.preserveSearch === true;
  if (options.region && releaseRegionLabels[options.region]) activeReleaseRegion = options.region;
  if (options.series && releaseSeriesLabels[options.series]) activeReleaseSeries = options.series;
  if (!releaseSeriesLabels[activeReleaseSeries]) activeReleaseSeries = defaultReleaseSeries(activeReleaseRegion);
  if (options.releaseSort?.key && releaseSortableColumns[options.releaseSort.key]) {
    activeReleaseSort = { key: options.releaseSort.key, direction: options.releaseSort.direction === "desc" ? "desc" : "asc" };
  }
  if (typeof options.releaseQuery === "string") activeReleaseQuery = options.releaseQuery;
  cleanupModelViewer();
  activatePrimarySection("release", { preserveSearch });
  renderReleasePage();
  rememberReleaseModalContext();
}

const animeInfo = {
  title: "메탈베이블레이드",
  overview: [],
  characters: [],
  episodes: [
    { no: "1화", season: "topblade", titles: { kr: "운명의 시작", jp: "" }, airDates: { kr: "2001-10-09", jp: "" }, note: "" },
    { no: "2화", season: "topblade", titles: { kr: "드래곤 탄생!", jp: "" }, airDates: { kr: "2001-10-15", jp: "" }, note: "" },
    { no: "3화", season: "topblade", titles: { kr: "새 친구 맥스", jp: "" }, airDates: { kr: "2001-10-23", jp: "" }, note: "" },
    { no: "4화", season: "topblade", titles: { kr: "탑블레이드 토너먼트 대회 개막", jp: "" }, airDates: { kr: "2001-10-29", jp: "" }, note: "" },
    { no: "5화", season: "topblade", titles: { kr: "격돌! 맥스 대 카이", jp: "" }, airDates: { kr: "2001-10-30", jp: "" }, note: "" },
    { no: "6화", season: "topblade", titles: { kr: "불어라 드래곤", jp: "" }, airDates: { kr: "2001-11-05", jp: "" }, note: "" },
    { no: "7화", season: "topblade", titles: { kr: "숙명의 대결 강민 대 카이", jp: "" }, airDates: { kr: "2001-11-06", jp: "" }, note: "" },
    { no: "8화", season: "topblade", titles: { kr: "세계를 향한 첫걸음", jp: "" }, airDates: { kr: "2001-11-12", jp: "" }, note: "" },
    { no: "9화", season: "topblade", titles: { kr: "새로운 성수 백호족", jp: "" }, airDates: { kr: "2001-11-13", jp: "" }, note: "" },
    { no: "10화", season: "topblade", titles: { kr: "뛰어 올라라! 아시아 대회", jp: "" }, airDates: { kr: "", jp: "" }, note: "미방영" },
    { no: "11화", season: "topblade", titles: { kr: "레이 백호를 잃어버리다", jp: "" }, airDates: { kr: "2001-11-19", jp: "" }, note: "" },
    { no: "12화", season: "topblade", titles: { kr: "안녕 한국팀!", jp: "" }, airDates: { kr: "2001-11-20", jp: "" }, note: "" },
    { no: "13화", season: "topblade", titles: { kr: "백호의 부활", jp: "" }, airDates: { kr: "2001-11-26", jp: "" }, note: "" },
    { no: "14화", season: "topblade", titles: { kr: "준결승! 탈락의 위기", jp: "" }, airDates: { kr: "2001-11-27", jp: "" }, note: "" },
    { no: "15화", season: "topblade", titles: { kr: "결전! 아시아의 정상을 향해", jp: "" }, airDates: { kr: "2001-12-03", jp: "" }, note: "" },
    { no: "16화", season: "topblade", titles: { kr: "백호 대 들고양이", jp: "" }, airDates: { kr: "2001-12-04", jp: "" }, note: "" },
    { no: "17화", season: "topblade", titles: { kr: "불꽃 튀는 결승전", jp: "" }, airDates: { kr: "2001-12-10", jp: "" }, note: "" },
    { no: "18화", season: "topblade", titles: { kr: "진정한 탑블레이더", jp: "" }, airDates: { kr: "2001-12-11", jp: "" }, note: "" },
    { no: "19화", season: "topblade", titles: { kr: "도착! 새로운 싸움터에", jp: "" }, airDates: { kr: "2001-12-17", jp: "" }, note: "" },
    { no: "20화", season: "topblade", titles: { kr: "공포스러운 미국팀의 힘", jp: "" }, airDates: { kr: "2001-12-18", jp: "" }, note: "" },
    { no: "21화", season: "topblade", titles: { kr: "산 속에서의 특별 훈련", jp: "" }, airDates: { kr: "2001-12-24", jp: "" }, note: "" },
    { no: "22화", season: "topblade", titles: { kr: "대통령 대 세계선발팀!", jp: "" }, airDates: { kr: "2001-12-31", jp: "" }, note: "" },
    { no: "23화", season: "topblade", titles: { kr: "미국 대회 개막", jp: "" }, airDates: { kr: "2001-12-31", jp: "" }, note: "" },
    { no: "24화", season: "topblade", titles: { kr: "미국의 영웅 마이클의 팀", jp: "" }, airDates: { kr: "2002-01-07", jp: "" }, note: "" },
    { no: "25화", season: "topblade", titles: { kr: "미국 대회 준결승", jp: "" }, airDates: { kr: "2002-01-08", jp: "" }, note: "" },
    { no: "26화", season: "topblade", titles: { kr: "격돌 미국 대회 결승전", jp: "" }, airDates: { kr: "2002-01-14", jp: "" }, note: "" },
    { no: "27화", season: "topblade", titles: { kr: "전갈의 위력", jp: "" }, airDates: { kr: "2002-01-15", jp: "" }, note: "" },
    { no: "28화", season: "topblade", titles: { kr: "미국 대회의 결말", jp: "" }, airDates: { kr: "2002-01-21", jp: "" }, note: "" },
    { no: "29화", season: "topblade", titles: { kr: "한국팀!! 열띤 열전의 궤도", jp: "" }, airDates: { kr: "2002-01-22", jp: "" }, note: "" },
    { no: "30화", season: "topblade", titles: { kr: "새로운 선수의 등장", jp: "" }, airDates: { kr: "2002-01-28", jp: "" }, note: "" },
    { no: "31화", season: "topblade", titles: { kr: "험난한 유럽 여행", jp: "" }, airDates: { kr: "2002-01-29", jp: "" }, note: "" },
    { no: "32화", season: "topblade", titles: { kr: "어둠의 탑블레이더!", jp: "" }, airDates: { kr: "2002-02-04", jp: "" }, note: "" },
    { no: "33화", season: "topblade", titles: { kr: "검은 그림자 군단의 등장", jp: "" }, airDates: { kr: "2002-02-05", jp: "" }, note: "" },
    { no: "34화", season: "topblade", titles: { kr: "천재소년과의 대결", jp: "" }, airDates: { kr: "2002-02-11", jp: "" }, note: "" },
    { no: "35화", season: "topblade", titles: { kr: "콜로세움 결투", jp: "" }, airDates: { kr: "2002-02-12", jp: "" }, note: "" },
    { no: "36화", season: "topblade", titles: { kr: "타도! 안피리온", jp: "" }, airDates: { kr: "2002-02-18", jp: "" }, note: "" },
    { no: "37화", season: "topblade", titles: { kr: "여왕 폐하의 탑블레이더", jp: "" }, airDates: { kr: "2002-02-19", jp: "" }, note: "" },
    { no: "38화", season: "topblade", titles: { kr: "최강의 유럽팀 결성", jp: "" }, airDates: { kr: "2002-02-25", jp: "" }, note: "" },
    { no: "39화", season: "topblade", titles: { kr: "승리를 향한 집념", jp: "" }, airDates: { kr: "2002-02-26", jp: "" }, note: "" },
    { no: "40화", season: "topblade", titles: { kr: "결승전의 땅 러시아", jp: "" }, airDates: { kr: "2002-03-04", jp: "" }, note: "" },
    { no: "41화", season: "topblade", titles: { kr: "어두운 기억의 문", jp: "" }, airDates: { kr: "2002-03-05", jp: "" }, note: "" },
    { no: "42화", season: "topblade", titles: { kr: "최강을 바라는 자", jp: "" }, airDates: { kr: "2002-03-11", jp: "" }, note: "" },
    { no: "43화", season: "topblade", titles: { kr: "악몽의 경기", jp: "" }, airDates: { kr: "2002-03-12", jp: "" }, note: "" },
    { no: "44화", season: "topblade", titles: { kr: "안녕 카이!", jp: "" }, airDates: { kr: "2002-03-18", jp: "" }, note: "" },
    { no: "45화", season: "topblade", titles: { kr: "바이칼 호의 결투", jp: "" }, airDates: { kr: "2002-03-19", jp: "" }, note: "" },
    { no: "46화", season: "topblade", titles: { kr: "보그 사천왕 등장", jp: "" }, airDates: { kr: "2002-03-25", jp: "" }, note: "" },
    { no: "47화", season: "topblade", titles: { kr: "유럽팀과의 재회", jp: "" }, airDates: { kr: "2002-03-26", jp: "" }, note: "" },
    { no: "48화", season: "topblade", titles: { kr: "카이의 선택", jp: "" }, airDates: { kr: "2002-04-01", jp: "" }, note: "" },
    { no: "49화", season: "topblade", titles: { kr: "백호의 외침", jp: "" }, airDates: { kr: "2002-04-02", jp: "" }, note: "" },
    { no: "50화", season: "topblade", titles: { kr: "설원의 묵시록", jp: "" }, airDates: { kr: "2002-04-08", jp: "" }, note: "" },
    { no: "51화", season: "topblade", titles: { kr: "탑블레이드여 영원히", jp: "" }, airDates: { kr: "2002-04-09", jp: "" }, note: "" },
    { no: "1화", season: "topblade-v", titles: { kr: "새로운 라이벌의 등장", jp: "" }, airDates: { kr: "2002-07-24", jp: "" }, note: "" },
    { no: "2화", season: "topblade-v", titles: { kr: "의문의 탑블레이드 사냥꾼", jp: "" }, airDates: { kr: "2002-07-25", jp: "" }, note: "" },
    { no: "3화", season: "topblade-v", titles: { kr: "보이지 않는 성수", jp: "" }, airDates: { kr: "2002-07-31", jp: "" }, note: "" },
    { no: "4화", season: "topblade-v", titles: { kr: "나타나라 청룡", jp: "" }, airDates: { kr: "2002-08-01", jp: "" }, note: "" },
    { no: "5화", season: "topblade-v", titles: { kr: "다시 돌아온 카이", jp: "" }, airDates: { kr: "2002-08-07", jp: "" }, note: "" },
    { no: "6화", season: "topblade-v", titles: { kr: "놀라운 특수 아이템", jp: "" }, airDates: { kr: "2002-08-14", jp: "" }, note: "" },
    { no: "7화", season: "topblade-v", titles: { kr: "계획된 도전", jp: "" }, airDates: { kr: "2002-08-15", jp: "" }, note: "" },
    { no: "8화", season: "topblade-v", titles: { kr: "한국 팀의 부활", jp: "" }, airDates: { kr: "2002-08-21", jp: "" }, note: "" },
    { no: "9화", season: "topblade-v", titles: { kr: "밀림 속의 경기장", jp: "" }, airDates: { kr: "2002-08-22", jp: "" }, note: "" },
    { no: "10화", season: "topblade-v", titles: { kr: "어둠 속에서의 대결", jp: "" }, airDates: { kr: "2002-08-28", jp: "" }, note: "" },
    { no: "11화", season: "topblade-v", titles: { kr: "외딴 섬에서의 결전", jp: "" }, airDates: { kr: "2002-08-29", jp: "" }, note: "" },
    { no: "12화", season: "topblade-v", titles: { kr: "울어라 드랜저", jp: "" }, airDates: { kr: "2002-09-04", jp: "" }, note: "" },
    { no: "13화", season: "topblade-v", titles: { kr: "규칙 없는 대결", jp: "" }, airDates: { kr: "2002-09-05", jp: "" }, note: "" },
    { no: "14화", season: "topblade-v", titles: { kr: "만들어진 성수", jp: "" }, airDates: { kr: "2002-09-11", jp: "" }, note: "" },
    { no: "15화", season: "topblade-v", titles: { kr: "나도 성수를 보고 싶어", jp: "" }, airDates: { kr: "2002-09-12", jp: "" }, note: "" },
    { no: "16화", season: "topblade-v", titles: { kr: "사이버 블레이더의 비극", jp: "" }, airDates: { kr: "2002-09-18", jp: "" }, note: "" },
    { no: "17화", season: "topblade-v", titles: { kr: "운명의 전주곡", jp: "" }, airDates: { kr: "2002-09-19", jp: "" }, note: "" },
    { no: "18화", season: "topblade-v", titles: { kr: "케인과의 재회", jp: "" }, airDates: { kr: "2002-09-25", jp: "" }, note: "" },
    { no: "19화", season: "topblade-v", titles: { kr: "사이키 팀과의 대결", jp: "" }, airDates: { kr: "2002-09-26", jp: "" }, note: "" },
    { no: "20화", season: "topblade-v", titles: { kr: "내일을 향한 결심", jp: "" }, airDates: { kr: "2002-10-02", jp: "" }, note: "" },
    { no: "21화", season: "topblade-v", titles: { kr: "배틀 타워의 음모", jp: "" }, airDates: { kr: "2002-10-03", jp: "" }, note: "" },
    { no: "22화", season: "topblade-v", titles: { kr: "드래셀의 위기", jp: "" }, airDates: { kr: "2002-10-09", jp: "" }, note: "" },
    { no: "23화", season: "topblade-v", titles: { kr: "약속했던 대결", jp: "" }, airDates: { kr: "2002-10-10", jp: "" }, note: "" },
    { no: "24화", season: "topblade-v", titles: { kr: "카이의 대결", jp: "" }, airDates: { kr: "2002-10-16", jp: "" }, note: "" },
    { no: "25화", season: "topblade-v", titles: { kr: "최후의 대결 강민 대 케인", jp: "" }, airDates: { kr: "2002-10-17", jp: "" }, note: "" },
    { no: "26화", season: "topblade-v", titles: { kr: "케인의 폭주", jp: "" }, airDates: { kr: "2002-10-23", jp: "" }, note: "" },
    { no: "27화", season: "topblade-v", titles: { kr: "배틀 타워의 최후", jp: "" }, airDates: { kr: "2002-10-24", jp: "" }, note: "" },
    { no: "28화", season: "topblade-v", titles: { kr: "고대 석판의 비밀", jp: "" }, airDates: { kr: "2002-10-30", jp: "" }, note: "" },
    { no: "29화", season: "topblade-v", titles: { kr: "빗나간 우정", jp: "" }, airDates: { kr: "2002-10-31", jp: "" }, note: "" },
    { no: "30화", season: "topblade-v", titles: { kr: "부활한 석판", jp: "" }, airDates: { kr: "2002-11-06", jp: "" }, note: "" },
    { no: "31화", season: "topblade-v", titles: { kr: "석판 속의 성수", jp: "" }, airDates: { kr: "2002-11-13", jp: "" }, note: "" },
    { no: "32화", season: "topblade-v", titles: { kr: "잃어 버린 투혼", jp: "" }, airDates: { kr: "2002-11-14", jp: "" }, note: "" },
    { no: "33화", season: "topblade-v", titles: { kr: "세인트 쉴드의 봉인", jp: "" }, airDates: { kr: "2002-11-20", jp: "" }, note: "" },
    { no: "34화", season: "topblade-v", titles: { kr: "거미 성수의 도전", jp: "" }, airDates: { kr: "2002-11-21", jp: "" }, note: "" },
    { no: "35화", season: "topblade-v", titles: { kr: "바람의 성수", jp: "" }, airDates: { kr: "2002-11-27", jp: "" }, note: "" },
    { no: "36화", season: "topblade-v", titles: { kr: "맥스와 마리엘", jp: "" }, airDates: { kr: "2002-11-28", jp: "" }, note: "" },
    { no: "37화", season: "topblade-v", titles: { kr: "유원지에서의 대결", jp: "" }, airDates: { kr: "2002-12-04", jp: "" }, note: "" },
    { no: "38화", season: "topblade-v", titles: { kr: "불꽃 튀는 접전", jp: "" }, airDates: { kr: "2002-12-05", jp: "" }, note: "" },
    { no: "39화", season: "topblade-v", titles: { kr: "신뢰와 자존심의 대결", jp: "" }, airDates: { kr: "2002-12-18", jp: "" }, note: "" },
    { no: "40화", season: "topblade-v", titles: { kr: "우정의 증표", jp: "" }, airDates: { kr: "2003-01-08", jp: "" }, note: "" },
    { no: "41화", season: "topblade-v", titles: { kr: "갑작스런 이별", jp: "" }, airDates: { kr: "2003-01-18", jp: "" }, note: "" },
    { no: "42화", season: "topblade-v", titles: { kr: "팽이 사냥꾼의 습격", jp: "" }, airDates: { kr: "2003-01-22", jp: "" }, note: "" },
    { no: "43화", season: "topblade-v", titles: { kr: "카이의 복수전", jp: "" }, airDates: { kr: "2003-01-29", jp: "" }, note: "" },
    { no: "44화", season: "topblade-v", titles: { kr: "개막 세계 선수권 대회", jp: "" }, airDates: { kr: "2003-02-05", jp: "" }, note: "" },
    { no: "45화", season: "topblade-v", titles: { kr: "대결 제오 대 오즈마", jp: "" }, airDates: { kr: "2003-02-12", jp: "" }, note: "" },
    { no: "46화", season: "topblade-v", titles: { kr: "흑과 백의 마수", jp: "" }, airDates: { kr: "2003-02-20", jp: "" }, note: "" },
    { no: "47화", season: "topblade-v", titles: { kr: "무너진 야망", jp: "" }, airDates: { kr: "2003-02-27", jp: "" }, note: "" },
    { no: "48화", season: "topblade-v", titles: { kr: "제오의 무서운 공격", jp: "" }, airDates: { kr: "2003-03-06", jp: "" }, note: "" },
    { no: "49화", season: "topblade-v", titles: { kr: "우정의 대결", jp: "" }, airDates: { kr: "2003-03-13", jp: "" }, note: "" },
    { no: "50화", season: "topblade-v", titles: { kr: "사상최대의 결승전", jp: "" }, airDates: { kr: "2003-03-20", jp: "" }, note: "" },
    { no: "51화", season: "topblade-v", titles: { kr: "숙명의 마지막 대결", jp: "" }, airDates: { kr: "2003-03-27", jp: "" }, note: "" },
    { no: "1화", season: "gblade", titles: { kr: "강민! 대결을 신청한다", jp: "" }, airDates: { kr: "2003-09-22", jp: "" }, note: "" },
    { no: "2화", season: "gblade", titles: { kr: "우정과 도전", jp: "" }, airDates: { kr: "2003-09-23", jp: "" }, note: "" },
    { no: "3화", season: "gblade", titles: { kr: "날 이길 수 없어", jp: "" }, airDates: { kr: "2003-09-29", jp: "" }, note: "" },
    { no: "4화", season: "gblade", titles: { kr: "나의 길은 내가 정한다", jp: "" }, airDates: { kr: "2003-09-30", jp: "" }, note: "" },
    { no: "5화", season: "gblade", titles: { kr: "넌 아직도 멀었어", jp: "" }, airDates: { kr: "2003-10-06", jp: "" }, note: "" },
    { no: "6화", season: "gblade", titles: { kr: "내 짝은 카이 뿐이야", jp: "" }, airDates: { kr: "2003-10-07", jp: "" }, note: "" },
    { no: "7화", season: "gblade", titles: { kr: "라이! 너에게 달렸어", jp: "" }, airDates: { kr: "2003-10-13", jp: "" }, note: "" },
    { no: "8화", season: "gblade", titles: { kr: "초특급 합숙 훈련", jp: "" }, airDates: { kr: "2003-10-20", jp: "" }, note: "" },
    { no: "9화", season: "gblade", titles: { kr: "1 더하기 1은 무한대", jp: "" }, airDates: { kr: "2003-10-21", jp: "" }, note: "" },
    { no: "10화", season: "gblade", titles: { kr: "레이, 라이 모두 나와", jp: "" }, airDates: { kr: "2003-10-27", jp: "" }, note: "" },
    { no: "11화", season: "gblade", titles: { kr: "내 탓이 아냐", jp: "" }, airDates: { kr: "2003-10-28", jp: "" }, note: "" },
    { no: "12화", season: "gblade", titles: { kr: "역전을 노려라", jp: "" }, airDates: { kr: "2003-11-03", jp: "" }, note: "" },
    { no: "13화", season: "gblade", titles: { kr: "선발선수 교수", jp: "" }, airDates: { kr: "2003-11-04", jp: "" }, note: "" },
    { no: "14화", season: "gblade", titles: { kr: "내가 싸우겠어", jp: "" }, airDates: { kr: "2003-11-10", jp: "" }, note: "" },
    { no: "15화", season: "gblade", titles: { kr: "우린 파트너야", jp: "" }, airDates: { kr: "2003-11-11", jp: "" }, note: "" },
    { no: "16화", season: "gblade", titles: { kr: "아무도 방해하지 마", jp: "" }, airDates: { kr: "2003-11-17", jp: "" }, note: "" },
    { no: "17화", season: "gblade", titles: { kr: "태양아 조심해", jp: "" }, airDates: { kr: "2003-11-18", jp: "" }, note: "" },
    { no: "18화", season: "gblade", titles: { kr: "진정한 대결", jp: "" }, airDates: { kr: "2003-11-24", jp: "" }, note: "" },
    { no: "19화", season: "gblade", titles: { kr: "맥스의 선택", jp: "" }, airDates: { kr: "2003-11-25", jp: "" }, note: "" },
    { no: "20화", season: "gblade", titles: { kr: "지면 안돼 강민", jp: "" }, airDates: { kr: "2003-12-01", jp: "" }, note: "" },
    { no: "21화", season: "gblade", titles: { kr: "챔피언의 숙명", jp: "" }, airDates: { kr: "2003-12-02", jp: "" }, note: "" },
    { no: "22화", season: "gblade", titles: { kr: "넌 이길 수 있어", jp: "" }, airDates: { kr: "2003-12-08", jp: "" }, note: "" },
    { no: "23화", season: "gblade", titles: { kr: "새로운 힘", jp: "" }, airDates: { kr: "2003-12-09", jp: "" }, note: "" },
    { no: "24화", season: "gblade", titles: { kr: "너의 힘을 보여줘", jp: "" }, airDates: { kr: "2003-12-15", jp: "" }, note: "" },
    { no: "25화", season: "gblade", titles: { kr: "최선을 다할게", jp: "" }, airDates: { kr: "2003-12-16", jp: "" }, note: "" },
    { no: "26화", season: "gblade", titles: { kr: "새로운 다짐", jp: "" }, airDates: { kr: "2003-12-22", jp: "" }, note: "" },
    { no: "27화", season: "gblade", titles: { kr: "최고의 대결", jp: "" }, airDates: { kr: "2003-12-23", jp: "" }, note: "" },
    { no: "28화", season: "gblade", titles: { kr: "아직도 멀은 거야", jp: "" }, airDates: { kr: "2003-12-29", jp: "" }, note: "" },
    { no: "29화", season: "gblade", titles: { kr: "결전의 순간", jp: "" }, airDates: { kr: "2003-12-30", jp: "" }, note: "" },
    { no: "30화", season: "gblade", titles: { kr: "이 건 끝이 아냐", jp: "" }, airDates: { kr: "2004-01-05", jp: "" }, note: "" },
    { no: "31화", season: "gblade", titles: { kr: "잘 있어!", jp: "" }, airDates: { kr: "2004-01-06", jp: "" }, note: "" },
    { no: "32화", season: "gblade", titles: { kr: "어떻게 된 거야?", jp: "" }, airDates: { kr: "2004-01-12", jp: "" }, note: "" },
    { no: "33화", season: "gblade", titles: { kr: "보르고프의 진심?!", jp: "" }, airDates: { kr: "2004-01-13", jp: "" }, note: "" },
    { no: "34화", season: "gblade", titles: { kr: "넌 누구지?", jp: "" }, airDates: { kr: "2004-01-19", jp: "" }, note: "" },
    { no: "35화", season: "gblade", titles: { kr: "유리의 분노!", jp: "" }, airDates: { kr: "2004-01-20", jp: "" }, note: "" },
    { no: "36화", season: "gblade", titles: { kr: "까불지 마", jp: "" }, airDates: { kr: "2004-01-26", jp: "" }, note: "" },
    { no: "37화", season: "gblade", titles: { kr: "뜨거운 우정", jp: "" }, airDates: { kr: "2004-01-27", jp: "" }, note: "" },
    { no: "38화", season: "gblade", titles: { kr: "천재소년 브룩클린", jp: "" }, airDates: { kr: "2004-02-02", jp: "" }, note: "" },
    { no: "39화", season: "gblade", titles: { kr: "새로운 팽이의 탄생", jp: "" }, airDates: { kr: "2004-02-03", jp: "" }, note: "" },
    { no: "40화", season: "gblade", titles: { kr: "마음으로 돌리는 거야", jp: "" }, airDates: { kr: "2004-02-09", jp: "" }, note: "" },
    { no: "41화", season: "gblade", titles: { kr: "테가(TEGA)의 비밀 무기", jp: "" }, airDates: { kr: "2004-02-10", jp: "" }, note: "" },
    { no: "42화", season: "gblade", titles: { kr: "미스터 엑스(X)", jp: "" }, airDates: { kr: "2004-02-16", jp: "" }, note: "" },
    { no: "43화", season: "gblade", titles: { kr: "승리를 향한 멜로디", jp: "" }, airDates: { kr: "2004-02-17", jp: "" }, note: "" },
    { no: "44화", season: "gblade", titles: { kr: "모니카를 위해서", jp: "" }, airDates: { kr: "2004-02-23", jp: "" }, note: "" },
    { no: "45화", season: "gblade", titles: { kr: "절체 절명의 위기", jp: "" }, airDates: { kr: "2004-02-24", jp: "" }, note: "" },
    { no: "46화", season: "gblade", titles: { kr: "장미빛 인생", jp: "" }, airDates: { kr: "2004-03-08", jp: "" }, note: "" },
    { no: "47화", season: "gblade", titles: { kr: "돌아온 카이", jp: "" }, airDates: { kr: "2004-03-09", jp: "" }, note: "" },
    { no: "48화", season: "gblade", titles: { kr: "그대 이름은 불사조", jp: "" }, airDates: { kr: "2004-03-15", jp: "" }, note: "" },
    { no: "49화", season: "gblade", titles: { kr: "승리의 방정식", jp: "" }, airDates: { kr: "2004-03-16", jp: "" }, note: "" },
    { no: "50화", season: "gblade", titles: { kr: "진정한 승리를 위해", jp: "" }, airDates: { kr: "2004-03-23", jp: "" }, note: "" },
    { no: "51화", season: "gblade", titles: { kr: "운명의 한 판 승부", jp: "" }, airDates: { kr: "2004-03-24", jp: "" }, note: "" },
    { no: "52화", season: "gblade", titles: { kr: "내일을 향해 쏴라", jp: "" }, airDates: { kr: "2004-03-30", jp: "" }, note: "" },
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
    { no: "51화", season: "metal-fight", titles: { kr: "블레이더의 영혼", jp: "" }, airDates: { kr: "2010-04-08", jp: "" }, note: "" },
    { no: "1화", season: "metal-fight-2", titles: { kr: "새로운 페가시스의 탄생", jp: "" }, airDates: { kr: "2010-09-15", jp: "" }, note: "" },
    { no: "2화", season: "metal-fight-2", titles: { kr: "불굴의 도전자", jp: "" }, airDates: { kr: "2010-09-15", jp: "" }, note: "" },
    { no: "3화", season: "metal-fight-2", titles: { kr: "새로운 도전", jp: "" }, airDates: { kr: "2010-09-16", jp: "" }, note: "" },
    { no: "4화", season: "metal-fight-2", titles: { kr: "세계로 가는 티켓", jp: "" }, airDates: { kr: "2010-09-16", jp: "" }, note: "" },
    { no: "5화", season: "metal-fight-2", titles: { kr: "결전! 로크 레온 대 아쿠이라!", jp: "" }, airDates: { kr: "2010-09-22", jp: "" }, note: "" },
    { no: "6화", season: "metal-fight-2", titles: { kr: "세계를 향해 날개를 펴라!", jp: "" }, airDates: { kr: "2010-09-22", jp: "" }, note: "" },
    { no: "7화", season: "metal-fight-2", titles: { kr: "베이의 소림사!", jp: "" }, airDates: { kr: "2010-09-23", jp: "" }, note: "" },
    { no: "8화", season: "metal-fight-2", titles: { kr: "제3의 사나이", jp: "" }, airDates: { kr: "2010-09-23", jp: "" }, note: "" },
    { no: "9화", season: "metal-fight-2", titles: { kr: "개막! 세계 대회!", jp: "" }, airDates: { kr: "2010-09-29", jp: "" }, note: "" },
    { no: "10화", season: "metal-fight-2", titles: { kr: "라체르타의 의지!", jp: "" }, airDates: { kr: "2010-09-29", jp: "" }, note: "" },
    { no: "11화", season: "metal-fight-2", titles: { kr: "4천년의 다짐", jp: "" }, airDates: { kr: "2010-09-30", jp: "" }, note: "" },
    { no: "12화", season: "metal-fight-2", titles: { kr: "용사의 이름을 가진 베이", jp: "" }, airDates: { kr: "2010-09-30", jp: "" }, note: "" },
    { no: "13화", season: "metal-fight-2", titles: { kr: "극한의 땅 러시아!", jp: "" }, airDates: { kr: "2010-10-06", jp: "" }, note: "" },
    { no: "14화", season: "metal-fight-2", titles: { kr: "공포의 쇠그물 대결!", jp: "" }, airDates: { kr: "2010-10-06", jp: "" }, note: "" },
    { no: "15화", season: "metal-fight-2", titles: { kr: "출동, 리브라!", jp: "" }, airDates: { kr: "2010-10-07", jp: "" }, note: "" },
    { no: "16화", season: "metal-fight-2", titles: { kr: "전사의 축제", jp: "" }, airDates: { kr: "2010-10-07", jp: "" }, note: "" },
    { no: "17화", season: "metal-fight-2", titles: { kr: "다시 만난 왕호단", jp: "" }, airDates: { kr: "2010-10-13", jp: "" }, note: "" },
    { no: "18화", season: "metal-fight-2", titles: { kr: "작렬하는 사자", jp: "" }, airDates: { kr: "2010-10-13", jp: "" }, note: "" },
    { no: "19화", season: "metal-fight-2", titles: { kr: "충격의 와일드팡!", jp: "" }, airDates: { kr: "2010-10-14", jp: "" }, note: "" },
    { no: "20화", season: "metal-fight-2", titles: { kr: "호르세우스 대 유니콘!", jp: "" }, airDates: { kr: "2010-10-14", jp: "" }, note: "" },
    { no: "21화", season: "metal-fight-2", titles: { kr: "영원한 라이벌", jp: "" }, airDates: { kr: "2010-10-20", jp: "" }, note: "" },
    { no: "22화", season: "metal-fight-2", titles: { kr: "벼랑 끝에 선 3회전!", jp: "" }, airDates: { kr: "2010-10-20", jp: "" }, note: "" },
    { no: "23화", season: "metal-fight-2", titles: { kr: "사투의 끝!", jp: "" }, airDates: { kr: "2010-10-21", jp: "" }, note: "" },
    { no: "24화", season: "metal-fight-2", titles: { kr: "다가오는 어둠!", jp: "" }, airDates: { kr: "2010-10-21", jp: "" }, note: "" },
    { no: "25화", season: "metal-fight-2", titles: { kr: "파괴의 도끼!", jp: "" }, airDates: { kr: "2010-10-27", jp: "" }, note: "" },
    { no: "26화", season: "metal-fight-2", titles: { kr: "다시 만난 엘드라고!", jp: "" }, airDates: { kr: "2011-02-23", jp: "" }, note: "" },
    { no: "27화", season: "metal-fight-2", titles: { kr: "한계를 넘어라!", jp: "" }, airDates: { kr: "2011-02-24", jp: "" }, note: "" },
    { no: "28화", season: "metal-fight-2", titles: { kr: "다크 아쿠이라!", jp: "" }, airDates: { kr: "2011-02-25", jp: "" }, note: "" },
    { no: "29화", season: "metal-fight-2", titles: { kr: "그라비티 페르세우스!", jp: "" }, airDates: { kr: "2011-03-02", jp: "" }, note: "" },
    { no: "30화", season: "metal-fight-2", titles: { kr: "한낮의 스트리트 파이트!", jp: "" }, airDates: { kr: "2011-03-03", jp: "" }, note: "" },
    { no: "31화", season: "metal-fight-2", titles: { kr: "브라질리언 트랩!", jp: "" }, airDates: { kr: "2011-03-04", jp: "" }, note: "" },
    { no: "32화", season: "metal-fight-2", titles: { kr: "토네이도 배틀!", jp: "" }, airDates: { kr: "2011-03-09", jp: "" }, note: "" },
    { no: "33화", season: "metal-fight-2", titles: { kr: "돌진, 레이 킬!", jp: "" }, airDates: { kr: "2011-03-10", jp: "" }, note: "" },
    { no: "34화", season: "metal-fight-2", titles: { kr: "장군이의 친구 제오!", jp: "" }, airDates: { kr: "2011-03-11", jp: "" }, note: "" },
    { no: "35화", season: "metal-fight-2", titles: { kr: "세계 최강의 꿈!", jp: "" }, airDates: { kr: "2011-03-16", jp: "" }, note: "" },
    { no: "36화", season: "metal-fight-2", titles: { kr: "움직이기 시작한 음모", jp: "" }, airDates: { kr: "2011-03-17", jp: "" }, note: "" },
    { no: "37화", season: "metal-fight-2", titles: { kr: "운명의 나침반", jp: "" }, airDates: { kr: "2011-03-18", jp: "" }, note: "" },
    { no: "38화", season: "metal-fight-2", titles: { kr: "광기의 비폴", jp: "" }, airDates: { kr: "2011-03-23", jp: "" }, note: "" },
    { no: "39화", season: "metal-fight-2", titles: { kr: "지옥의 경비견", jp: "" }, airDates: { kr: "2011-03-24", jp: "" }, note: "" },
    { no: "40화", season: "metal-fight-2", titles: { kr: "황당한 디제이 대결!", jp: "" }, airDates: { kr: "2011-03-25", jp: "" }, note: "" },
    { no: "41화", season: "metal-fight-2", titles: { kr: "파이널 카운트 다운", jp: "" }, airDates: { kr: "2011-03-30", jp: "" }, note: "" },
    { no: "42화", season: "metal-fight-2", titles: { kr: "용왕의 강림", jp: "" }, airDates: { kr: "2011-03-31", jp: "" }, note: "" },
    { no: "43화", season: "metal-fight-2", titles: { kr: "혼신의 마지막 대결", jp: "" }, airDates: { kr: "2011-04-01", jp: "" }, note: "" },
    { no: "44화", season: "metal-fight-2", titles: { kr: "승부! 강타 vs 데미안", jp: "" }, airDates: { kr: "2011-04-06", jp: "" }, note: "" },
    { no: "45화", season: "metal-fight-2", titles: { kr: "놀라운 스파이럴 포스!", jp: "" }, airDates: { kr: "2011-04-07", jp: "" }, note: "" },
    { no: "46화", season: "metal-fight-2", titles: { kr: "하데스 시티로 가자!", jp: "" }, airDates: { kr: "2011-04-08", jp: "" }, note: "" },
    { no: "47화", season: "metal-fight-2", titles: { kr: "타락한 황제!", jp: "" }, airDates: { kr: "2011-04-13", jp: "" }, note: "" },
    { no: "48화", season: "metal-fight-2", titles: { kr: "비폴의 함정!", jp: "" }, airDates: { kr: "2011-04-14", jp: "" }, note: "" },
    { no: "49화", season: "metal-fight-2", titles: { kr: "우리를 벗어난 야수!", jp: "" }, airDates: { kr: "2011-04-15", jp: "" }, note: "" },
    { no: "50화", season: "metal-fight-2", titles: { kr: "호로지움의 폭주!", jp: "" }, airDates: { kr: "2011-04-20", jp: "" }, note: "" },
    { no: "51화", season: "metal-fight-2", titles: { kr: "갤럭시 하트!", jp: "" }, airDates: { kr: "2011-04-21", jp: "" }, note: "" },
    { no: "1화", season: "metal-fight-4d", titles: { kr: "별의 조각", jp: "" }, airDates: { kr: "2011-09-19", jp: "" }, note: "" },
    { no: "2화", season: "metal-fight-4d", titles: { kr: "전설의 블레이더!", jp: "" }, airDates: { kr: "2011-09-20", jp: "" }, note: "" },
    { no: "3화", season: "metal-fight-4d", titles: { kr: "도둑고양이 링크스!", jp: "" }, airDates: { kr: "2011-09-20", jp: "" }, note: "" },
    { no: "4화", season: "metal-fight-4d", titles: { kr: "엘드라고 디스트로이", jp: "" }, airDates: { kr: "2011-09-26", jp: "" }, note: "" },
    { no: "5화", season: "metal-fight-4d", titles: { kr: "깨어난 아누비우스!", jp: "" }, airDates: { kr: "2011-09-27", jp: "" }, note: "" },
    { no: "6화", season: "metal-fight-4d", titles: { kr: "전사의 자격!", jp: "" }, airDates: { kr: "2011-09-27", jp: "" }, note: "" },
    { no: "7화", season: "metal-fight-4d", titles: { kr: "노아의 결심!", jp: "" }, airDates: { kr: "2011-10-03", jp: "" }, note: "" },
    { no: "8화", season: "metal-fight-4d", titles: { kr: "진홍빛 섬광!", jp: "" }, airDates: { kr: "2011-10-04", jp: "" }, note: "" },
    { no: "9화", season: "metal-fight-4d", titles: { kr: "최강 태그전, 등용문!", jp: "" }, airDates: { kr: "2011-10-04", jp: "" }, note: "" },
    { no: "10화", season: "metal-fight-4d", titles: { kr: "새로운 울부짖음!", jp: "" }, airDates: { kr: "2011-10-10", jp: "" }, note: "" },
    { no: "11화", season: "metal-fight-4d", titles: { kr: "빅뱅 토네이도!", jp: "" }, airDates: { kr: "2011-10-11", jp: "" }, note: "" },
    { no: "12화", season: "metal-fight-4d", titles: { kr: "토성의 신, 크로노스!", jp: "" }, airDates: { kr: "2011-10-11", jp: "" }, note: "" },
    { no: "13화", season: "metal-fight-4d", titles: { kr: "대결, 바벨의 탑!", jp: "" }, airDates: { kr: "2011-10-17", jp: "" }, note: "" },
    { no: "14화", season: "metal-fight-4d", titles: { kr: "신생! 던전 팀", jp: "" }, airDates: { kr: "2011-10-18", jp: "" }, note: "" },
    { no: "15화", season: "metal-fight-4d", titles: { kr: "스피어 360", jp: "" }, airDates: { kr: "2011-10-18", jp: "" }, note: "" },
    { no: "16화", season: "metal-fight-4d", titles: { kr: "완성! 새로운 유니콘!", jp: "" }, airDates: { kr: "2011-10-24", jp: "" }, note: "" },
    { no: "17화", season: "metal-fight-4d", titles: { kr: "내가 바로 챔피언!", jp: "" }, airDates: { kr: "2011-10-25", jp: "" }, note: "" },
    { no: "18화", season: "metal-fight-4d", titles: { kr: "미스트 마운틴의 미궁!", jp: "" }, airDates: { kr: "2011-10-25", jp: "" }, note: "" },
    { no: "19화", season: "metal-fight-4d", titles: { kr: "사자의 자존심!", jp: "" }, airDates: { kr: "2011-10-31", jp: "" }, note: "" },
    { no: "20화", season: "metal-fight-4d", titles: { kr: "신전의 수호자 듀나미스!", jp: "" }, airDates: { kr: "2011-11-01", jp: "" }, note: "" },
    { no: "21화", season: "metal-fight-4d", titles: { kr: "네메시스 부활의 전설!", jp: "" }, airDates: { kr: "2011-11-01", jp: "" }, note: "" },
    { no: "22화", season: "metal-fight-4d", titles: { kr: "사계의 전사!", jp: "" }, airDates: { kr: "2012-03-19", jp: "" }, note: "" },
    { no: "23화", season: "metal-fight-4d", titles: { kr: "베이스타 섬의 대결!", jp: "" }, airDates: { kr: "2012-03-19", jp: "" }, note: "" },
    { no: "24화", season: "metal-fight-4d", titles: { kr: "운명을 건 대결!", jp: "" }, airDates: { kr: "2012-03-20", jp: "" }, note: "" },
    { no: "25화", season: "metal-fight-4d", titles: { kr: "보이지 않는 블레이더!", jp: "" }, airDates: { kr: "2012-03-26", jp: "" }, note: "" },
    { no: "26화", season: "metal-fight-4d", titles: { kr: "오리온의 행방", jp: "" }, airDates: { kr: "2012-03-26", jp: "" }, note: "" },
    { no: "27화", season: "metal-fight-4d", titles: { kr: "황야를 달리는 사자", jp: "" }, airDates: { kr: "2012-03-27", jp: "" }, note: "" },
    { no: "28화", season: "metal-fight-4d", titles: { kr: "금성의 신! 케찰코아틀", jp: "" }, airDates: { kr: "2012-04-02", jp: "" }, note: "" },
    { no: "29화", season: "metal-fight-4d", titles: { kr: "파괴의 신 부활!?", jp: "" }, airDates: { kr: "2012-04-02", jp: "" }, note: "" },
    { no: "30화", season: "metal-fight-4d", titles: { kr: "네메시스의 숭배자", jp: "" }, airDates: { kr: "2012-04-03", jp: "" }, note: "" },
    { no: "31화", season: "metal-fight-4d", titles: { kr: "네 개의 마음!", jp: "" }, airDates: { kr: "2012-04-09", jp: "" }, note: "" },
    { no: "32화", season: "metal-fight-4d", titles: { kr: "집결! 전설의 블레이더", jp: "" }, airDates: { kr: "2012-04-09", jp: "" }, note: "" },
    { no: "33화", season: "metal-fight-4d", titles: { kr: "디아블로 네메시스", jp: "" }, airDates: { kr: "2012-04-10", jp: "" }, note: "" },
    { no: "34화", season: "metal-fight-4d", titles: { kr: "결전의 땅!", jp: "" }, airDates: { kr: "2012-04-16", jp: "" }, note: "" },
    { no: "35화", season: "metal-fight-4d", titles: { kr: "잃어버린 왕국", jp: "" }, airDates: { kr: "2012-04-16", jp: "" }, note: "" },
    { no: "36화", season: "metal-fight-4d", titles: { kr: "사라진 사계의 별자리", jp: "" }, airDates: { kr: "2012-04-17", jp: "" }, note: "" },
    { no: "37화", season: "metal-fight-4d", titles: { kr: "플래시 사지타리오!", jp: "" }, airDates: { kr: "2012-04-23", jp: "" }, note: "" },
    { no: "38화", season: "metal-fight-4d", titles: { kr: "하데스의 집념", jp: "" }, airDates: { kr: "2012-04-23", jp: "" }, note: "" },
    { no: "39화", season: "metal-fight-4d", titles: { kr: "희망의 빛!", jp: "" }, airDates: { kr: "2012-04-24", jp: "" }, note: "" },
    { no: "1화", season: "metal-fight-zerog", titles: { kr: "새로운 시대의 시작", jp: "" }, airDates: { kr: "2013-03-25", jp: "" }, note: "" },
    { no: "2화", season: "metal-fight-zerog", titles: { kr: "지옥의 맹훈련", jp: "" }, airDates: { kr: "2013-03-26", jp: "" }, note: "" },
    { no: "3화", season: "metal-fight-zerog", titles: { kr: "대결! 복수혈전", jp: "" }, airDates: { kr: "2013-04-01", jp: "" }, note: "" },
    { no: "4화", season: "metal-fight-zerog", titles: { kr: "리바이저의 도전", jp: "" }, airDates: { kr: "2013-04-02", jp: "" }, note: "" },
    { no: "5화", season: "metal-fight-zerog", titles: { kr: "새로운 도전자", jp: "" }, airDates: { kr: "2013-04-08", jp: "" }, note: "" },
    { no: "6화", season: "metal-fight-zerog", titles: { kr: "매의 눈으로 보라", jp: "" }, airDates: { kr: "2013-04-09", jp: "" }, note: "" },
    { no: "7화", season: "metal-fight-zerog", titles: { kr: "공포의 여름 해변", jp: "" }, airDates: { kr: "2013-04-15", jp: "" }, note: "" },
    { no: "8화", season: "metal-fight-zerog", titles: { kr: "수수께끼 블레이더의 습격", jp: "" }, airDates: { kr: "2013-04-16", jp: "" }, note: "" },
    { no: "9화", season: "metal-fight-zerog", titles: { kr: "가고일의 도전", jp: "" }, airDates: { kr: "2013-04-22", jp: "" }, note: "" },
    { no: "10화", season: "metal-fight-zerog", titles: { kr: "철벽 수비의 골렘", jp: "" }, airDates: { kr: "2013-04-23", jp: "" }, note: "" },
    { no: "11화", season: "metal-fight-zerog", titles: { kr: "뜨거운 우정의 대결", jp: "" }, airDates: { kr: "2013-04-29", jp: "" }, note: "" },
    { no: "12화", season: "metal-fight-zerog", titles: { kr: "비정한 베기라도스", jp: "" }, airDates: { kr: "2013-04-30", jp: "" }, note: "" },
    { no: "13화", season: "metal-fight-zerog", titles: { kr: "싱크롬 베이 대격돌", jp: "" }, airDates: { kr: "2013-05-06", jp: "" }, note: "" },
    { no: "14화", season: "metal-fight-zerog", titles: { kr: "악의 유전자", jp: "" }, airDates: { kr: "2013-05-07", jp: "" }, note: "" },
    { no: "15화", season: "metal-fight-zerog", titles: { kr: "8강을 가려라!", jp: "" }, airDates: { kr: "2013-05-13", jp: "" }, note: "" },
    { no: "16화", season: "metal-fight-zerog", titles: { kr: "불타는 결선 대회", jp: "" }, airDates: { kr: "2013-05-14", jp: "" }, note: "" },
    { no: "17화", season: "metal-fight-zerog", titles: { kr: "우정의 맹세", jp: "" }, airDates: { kr: "2013-05-20", jp: "" }, note: "" },
    { no: "18화", season: "metal-fight-zerog", titles: { kr: "공포의 파괴왕 바함디아", jp: "" }, airDates: { kr: "2013-05-21", jp: "" }, note: "" },
    { no: "19화", season: "metal-fight-zerog", titles: { kr: "마지막 결투", jp: "" }, airDates: { kr: "2013-05-27", jp: "" }, note: "" },
    { no: "20화", season: "metal-fight-zerog", titles: { kr: "새로운 전쟁", jp: "" }, airDates: { kr: "2013-05-28", jp: "" }, note: "" },
    { no: "21화", season: "metal-fight-zerog", titles: { kr: "전설과 악마의 융합!", jp: "" }, airDates: { kr: "2013-06-03", jp: "" }, note: "" },
    { no: "22화", season: "metal-fight-zerog", titles: { kr: "다크문의 요새", jp: "" }, airDates: { kr: "2013-06-04", jp: "" }, note: "" },
    { no: "23화", season: "metal-fight-zerog", titles: { kr: "수수께끼의 함정", jp: "" }, airDates: { kr: "2013-06-04", jp: "" }, note: "" },
    { no: "24화", season: "metal-fight-zerog", titles: { kr: "백호의 포효", jp: "" }, airDates: { kr: "2013-06-10", jp: "" }, note: "" },
    { no: "25화", season: "metal-fight-zerog", titles: { kr: "필사의 공중전", jp: "" }, airDates: { kr: "2013-06-11", jp: "" }, note: "" },
    { no: "26화", season: "metal-fight-zerog", titles: { kr: "미래로 가는 다리", jp: "" }, airDates: { kr: "2013-06-11", jp: "" }, note: "" },
    { no: "1화", season: "burst", titles: { kr: "가자 발키리!", jp: "" }, airDates: { kr: "2016-06-06", jp: "" }, note: "" },
    { no: "2화", season: "burst", titles: { kr: "지옥의 파수꾼! 케르베우스!!", jp: "" }, airDates: { kr: "2016-06-06", jp: "" }, note: "" },
    { no: "3화", season: "burst", titles: { kr: "작렬, 러시 슛!", jp: "" }, airDates: { kr: "2016-06-13", jp: "" }, note: "" },
    { no: "4화", season: "burst", titles: { kr: "베이블레이드 동아리를 만들자!", jp: "" }, airDates: { kr: "2016-06-20", jp: "" }, note: "" },
    { no: "5화", season: "burst", titles: { kr: "사신강림! 칠흑같은 데스사이저!", jp: "" }, airDates: { kr: "2016-06-27", jp: "" }, note: "" },
    { no: "6화", season: "burst", titles: { kr: "버텨! 이게 특훈이야!", jp: "" }, airDates: { kr: "2016-07-04", jp: "" }, note: "" },
    { no: "7화", season: "burst", titles: { kr: "초고속! 플래쉬 슛!", jp: "" }, airDates: { kr: "2016-07-11", jp: "" }, note: "" },
    { no: "8화", season: "burst", titles: { kr: "강적! 천공의 호루스드!", jp: "" }, airDates: { kr: "2016-07-18", jp: "" }, note: "" },
    { no: "9화", season: "burst", titles: { kr: "앞을 가로막는 와이번!", jp: "" }, airDates: { kr: "2016-07-25", jp: "" }, note: "" },
    { no: "10화", season: "burst", titles: { kr: "발키리를 믿고 뛰어 넘어라!", jp: "" }, airDates: { kr: "2016-08-01", jp: "" }, note: "" },
    { no: "11화", season: "burst", titles: { kr: "절망의 스프리건!", jp: "" }, airDates: { kr: "2016-08-08", jp: "" }, note: "" },
    { no: "12화", season: "burst", titles: { kr: "놀라운 실드 크러시!", jp: "" }, airDates: { kr: "2016-08-15", jp: "" }, note: "" },
    { no: "13화", season: "burst", titles: { kr: "슈의 시련", jp: "" }, airDates: { kr: "2016-08-22", jp: "" }, note: "" },
    { no: "14화", season: "burst", titles: { kr: "약속의 결승전!", jp: "" }, airDates: { kr: "2016-07-25", jp: "" }, note: "" },
    { no: "15화", season: "burst", titles: { kr: "격돌! 발키리 대 스프리건", jp: "" }, airDates: { kr: "2016-08-01", jp: "" }, note: "" },
    { no: "16화", season: "burst", titles: { kr: "공포의 경기장 샤키 스페셜!", jp: "" }, airDates: { kr: "2016-09-12", jp: "" }, note: "" },
    { no: "17화", season: "burst", titles: { kr: "호걸 엑스칼리버!", jp: "" }, airDates: { kr: "2016-09-19", jp: "" }, note: "" },
    { no: "18화", season: "burst", titles: { kr: "불꽃 튀는 단체전 배틀!", jp: "" }, airDates: { kr: "2016-09-26", jp: "" }, note: "" },
    { no: "19화", season: "burst", titles: { kr: "라그나로크 대 유니콘!", jp: "" }, airDates: { kr: "2016-10-03", jp: "" }, note: "" },
    { no: "20화", season: "burst", titles: { kr: "네 차례야! 체인 슛!", jp: "" }, airDates: { kr: "2016-10-10", jp: "" }, note: "" },
    { no: "21화", season: "burst", titles: { kr: "우정의 배틀!", jp: "" }, airDates: { kr: "2016-09-12", jp: "" }, note: "" },
    { no: "22화", season: "burst", titles: { kr: "발키리 깨어나다!", jp: "" }, airDates: { kr: "2016-09-19", jp: "" }, note: "" },
    { no: "23화", season: "burst", titles: { kr: "고독한 데스사이저", jp: "" }, airDates: { kr: "2016-09-26", jp: "" }, note: "" },
    { no: "24화", season: "burst", titles: { kr: "진지하게 가는 거야!", jp: "" }, airDates: { kr: "2016-10-03", jp: "" }, note: "" },
    { no: "25화", season: "burst", titles: { kr: "의문의 베이블레이드 가면!", jp: "" }, airDates: { kr: "2016-10-10", jp: "" }, note: "" },
    { no: "26화", season: "burst", titles: { kr: "전국출전 결전의 날!", jp: "" }, airDates: { kr: "2016-11-21", jp: "" }, note: "" },
    { no: "27화", season: "burst", titles: { kr: "합숙훈련! 바이킹 경기장!", jp: "" }, airDates: { kr: "2016-11-28", jp: "" }, note: "" },
    { no: "28화", season: "burst", titles: { kr: "산 그리고 강! 폭풍 속의 대모험!", jp: "" }, airDates: { kr: "2016-12-05", jp: "" }, note: "" },
    { no: "29화", season: "burst", titles: { kr: "목표는 1등이야!", jp: "" }, airDates: { kr: "2016-12-12", jp: "" }, note: "" },
    { no: "30화", season: "burst", titles: { kr: "뱀의 날개! 케찰콰틀!", jp: "" }, airDates: { kr: "2016-12-19", jp: "" }, note: "" },
    { no: "31화", season: "burst", titles: { kr: "전설의 아마테리우스!", jp: "" }, airDates: { kr: "2016-12-26", jp: "" }, note: "" },
    { no: "32화", season: "burst", titles: { kr: "충격의 듀얼스핀 스태디움!", jp: "" }, airDates: { kr: "2017-01-02", jp: "" }, note: "" },
    { no: "33화", season: "burst", titles: { kr: "폭발하는 더블 임팩트!", jp: "" }, airDates: { kr: "2017-01-09", jp: "" }, note: "" },
    { no: "34화", season: "burst", titles: { kr: "이빨을 드러내는 비스트!", jp: "" }, airDates: { kr: "2017-01-16", jp: "" }, note: "" },
    { no: "35화", season: "burst", titles: { kr: "야수! 베히모스!", jp: "" }, airDates: { kr: "2017-01-23", jp: "" }, note: "" },
    { no: "36화", season: "burst", titles: { kr: "라이드아웃의 위협!", jp: "" }, airDates: { kr: "2017-01-30", jp: "" }, note: "" },
    { no: "37화", season: "burst", titles: { kr: "우리들의 결승전!", jp: "" }, airDates: { kr: "2017-02-06", jp: "" }, note: "" },
    { no: "38화", season: "burst", titles: { kr: "사투! 롱기누스와의 대결!", jp: "" }, airDates: { kr: "2017-02-13", jp: "" }, note: "" },
    { no: "39화", season: "burst", titles: { kr: "데스 스파이럴 작렬!", jp: "" }, airDates: { kr: "2017-02-20", jp: "" }, note: "" },
    { no: "40화", season: "burst", titles: { kr: "전국 1등을 향하여!", jp: "" }, airDates: { kr: "2017-02-27", jp: "" }, note: "" },
    { no: "41화", season: "burst", titles: { kr: "넵튠의 덫!", jp: "" }, airDates: { kr: "2017-03-06", jp: "" }, note: "" },
    { no: "42화", season: "burst", titles: { kr: "독사! 요르문간드!", jp: "" }, airDates: { kr: "2017-03-13", jp: "" }, note: "" },
    { no: "43화", season: "burst", titles: { kr: "질풍의 제트 슛!", jp: "" }, airDates: { kr: "2017-03-20", jp: "" }, note: "" },
    { no: "44화", season: "burst", titles: { kr: "표효하는 야수! 비스트 배틀!", jp: "" }, airDates: { kr: "2017-03-27", jp: "" }, note: "" },
    { no: "45화", season: "burst", titles: { kr: "스프리건 대 와이번!", jp: "" }, airDates: { kr: "2017-04-03", jp: "" }, note: "" },
    { no: "46화", season: "burst", titles: { kr: "뜨거운 대결! 강산 대 샤카!", jp: "" }, airDates: { kr: "2017-04-10", jp: "" }, note: "" },
    { no: "47화", season: "burst", titles: { kr: "스타 배틀!", jp: "" }, airDates: { kr: "2017-04-17", jp: "" }, note: "" },
    { no: "48화", season: "burst", titles: { kr: "초고속 회전 대 초고속 질주!", jp: "" }, airDates: { kr: "2017-04-24", jp: "" }, note: "" },
    { no: "49화", season: "burst", titles: { kr: "사천왕의 대결! 루이 대 슈!", jp: "" }, airDates: { kr: "2017-05-01", jp: "" }, note: "" },
    { no: "50화", season: "burst", titles: { kr: "널 꺾겠어 절대왕자!", jp: "" }, airDates: { kr: "2017-05-08", jp: "" }, note: "" },
    { no: "51화", season: "burst", titles: { kr: "가자, 발키리!", jp: "" }, airDates: { kr: "2017-05-15", jp: "" }, note: "" },
    { no: "1화", season: "burst-god", titles: { kr: "세계를 향해서! 발키리, 진화!", jp: "" }, airDates: { kr: "2017-06-26", jp: "" }, note: "" },
    { no: "2화", season: "burst-god", titles: { kr: "진짜 사나이! 블레이즈 라그나로크!", jp: "" }, airDates: { kr: "2017-07-03", jp: "" }, note: "" },
    { no: "3화", season: "burst-god", titles: { kr: "충격의 드레인 파브닐!", jp: "" }, airDates: { kr: "2017-07-10", jp: "" }, note: "" },
    { no: "4화", season: "burst-god", titles: { kr: "변신! 토네이도 와이번!", jp: "" }, airDates: { kr: "2017-07-17", jp: "" }, note: "" },
    { no: "5화", season: "burst-god", titles: { kr: "크라이스 사탄의 역습!", jp: "" }, airDates: { kr: "2017-07-24", jp: "" }, note: "" },
    { no: "6화", season: "burst-god", titles: { kr: "뜻밖의 신입!", jp: "" }, airDates: { kr: "2017-07-31", jp: "" }, note: "" },
    { no: "7화", season: "burst-god", titles: { kr: "목표는 퍼스트팀!", jp: "" }, airDates: { kr: "2017-08-07", jp: "" }, note: "" },
    { no: "8화", season: "burst-god", titles: { kr: "유럽리그 개막!", jp: "" }, airDates: { kr: "2017-08-14", jp: "" }, note: "" },
    { no: "9화", season: "burst-god", titles: { kr: "시간의 신! 알타 크로노스", jp: "" }, airDates: { kr: "2017-08-21", jp: "" }, note: "" },
    { no: "10화", season: "burst-god", titles: { kr: "강산과 프리", jp: "" }, airDates: { kr: "2017-08-28", jp: "" }, note: "" },
    { no: "11화", season: "burst-god", titles: { kr: "흔들리는 BC 솔!", jp: "" }, airDates: { kr: "2017-09-04", jp: "" }, note: "" },
    { no: "12화", season: "burst-god", titles: { kr: "돌아온 데스사이저!", jp: "" }, airDates: { kr: "2017-09-11", jp: "" }, note: "" },
    { no: "13화", season: "burst-god", titles: { kr: "두 개의 낫, 더블 스트라이크!", jp: "" }, airDates: { kr: "2017-09-18", jp: "" }, note: "" },
    { no: "14화", season: "burst-god", titles: { kr: "플라잉 맥시멈 가루다!", jp: "" }, airDates: { kr: "2017-09-25", jp: "" }, note: "" },
    { no: "15화", season: "burst-god", titles: { kr: "초인 블레이더 카셈", jp: "" }, airDates: { kr: "2017-10-02", jp: "" }, note: "" },
    { no: "16화", season: "burst-god", titles: { kr: "슈를 찾아라!", jp: "" }, airDates: { kr: "2017-10-09", jp: "" }, note: "" },
    { no: "17화", season: "burst-god", titles: { kr: "마의 장소, 스네이크 핏!", jp: "" }, airDates: { kr: "2017-10-16", jp: "" }, note: "" },
    { no: "18화", season: "burst-god", titles: { kr: "미궁 속의 블랙 던전!", jp: "" }, airDates: { kr: "2017-10-23", jp: "" }, note: "" },
    { no: "19화", season: "burst-god", titles: { kr: "최강의 레드아이", jp: "" }, airDates: { kr: "2017-10-30", jp: "" }, note: "" },
    { no: "20화", season: "burst-god", titles: { kr: "변화하는 BC 솔!", jp: "" }, airDates: { kr: "2017-11-06", jp: "" }, note: "" },
    { no: "21화", season: "burst-god", titles: { kr: "조슈아 대 우주 닌자 군단!", jp: "" }, airDates: { kr: "2017-11-13", jp: "" }, note: "" },
    { no: "22화", season: "burst-god", titles: { kr: "폭풍을 부르는 블라스트 지니어스", jp: "" }, airDates: { kr: "2017-11-20", jp: "" }, note: "" },
    { no: "23화", season: "burst-god", titles: { kr: "도전! 무한 스핀 베이 스타디움", jp: "" }, airDates: { kr: "2017-11-27", jp: "" }, note: "" },
    { no: "24화", season: "burst-god", titles: { kr: "격동의 월드 리그", jp: "" }, airDates: { kr: "2017-12-04", jp: "" }, note: "" },
    { no: "25화", season: "burst-god", titles: { kr: "투혼의 지크 엑스칼리버", jp: "" }, airDates: { kr: "2017-12-11", jp: "" }, note: "" },
    { no: "26화", season: "burst-god", titles: { kr: "작렬하는 갓 리부트", jp: "" }, airDates: { kr: "2017-12-18", jp: "" }, note: "" },
    { no: "27화", season: "burst-god", titles: { kr: "서울 배틀! 선베트 대 리오스", jp: "" }, airDates: { kr: "2017-12-25", jp: "" }, note: "" },
    { no: "28화", season: "burst-god", titles: { kr: "드라큘라! 딥 카오스!", jp: "" }, airDates: { kr: "2018-01-01", jp: "" }, note: "" },
    { no: "29화", season: "burst-god", titles: { kr: "철벽! 쉘터 레귤루스", jp: "" }, airDates: { kr: "2018-01-08", jp: "" }, note: "" },
    { no: "30화", season: "burst-god", titles: { kr: "가자! 결승을 향한 슛!", jp: "" }, airDates: { kr: "2018-01-15", jp: "" }, note: "" },
    { no: "31화", season: "burst-god", titles: { kr: "빅5의 벽을 넘어라!", jp: "" }, airDates: { kr: "2018-01-22", jp: "" }, note: "" },
    { no: "32화", season: "burst-god", titles: { kr: "천하무적! 트리플 임팩트", jp: "" }, airDates: { kr: "2018-01-29", jp: "" }, note: "" },
    { no: "33화", season: "burst-god", titles: { kr: "결승! BC솔 대 뉴욕 불즈", jp: "" }, airDates: { kr: "2018-02-05", jp: "" }, note: "" },
    { no: "34화", season: "burst-god", titles: { kr: "가자! 바운드 어택!", jp: "" }, airDates: { kr: "2018-02-12", jp: "" }, note: "" },
    { no: "35화", season: "burst-god", titles: { kr: "우리의 결승전", jp: "" }, airDates: { kr: "2018-02-19", jp: "" }, note: "" },
    { no: "36화", season: "burst-god", titles: { kr: "결투! 롱기누스 대 스프리건", jp: "" }, airDates: { kr: "2018-02-26", jp: "" }, note: "" },
    { no: "37화", season: "burst-god", titles: { kr: "가자! 갓 블레이더스 컵", jp: "" }, airDates: { kr: "2018-03-05", jp: "" }, note: "" },
    { no: "38화", season: "burst-god", titles: { kr: "흉기! 스프리건 레퀴엠", jp: "" }, airDates: { kr: "2018-03-12", jp: "" }, note: "" },
    { no: "39화", season: "burst-god", titles: { kr: "지하 배틀의 황제, 커츠", jp: "" }, airDates: { kr: "2018-03-19", jp: "" }, note: "" },
    { no: "40화", season: "burst-god", titles: { kr: "폭군! 비트 쿠쿨칸", jp: "" }, airDates: { kr: "2018-03-26", jp: "" }, note: "" },
    { no: "41화", season: "burst-god", titles: { kr: "해머! 트윈 네메시스", jp: "" }, airDates: { kr: "2018-04-02", jp: "" }, note: "" },
    { no: "42화", season: "burst-god", titles: { kr: "비씨 솔! 치열한 싸움", jp: "" }, airDates: { kr: "2018-04-09", jp: "" }, note: "" },
    { no: "43화", season: "burst-god", titles: { kr: "라이벌들의 대격돌!", jp: "" }, airDates: { kr: "2018-04-16", jp: "" }, note: "" },
    { no: "44화", season: "burst-god", titles: { kr: "끝없는 진화! 스트라이크 갓 발키리!", jp: "" }, airDates: { kr: "2018-04-23", jp: "" }, note: "" },
    { no: "45화", season: "burst-god", titles: { kr: "파괴의 신 스프리건!", jp: "" }, airDates: { kr: "2018-04-30", jp: "" }, note: "" },
    { no: "46화", season: "burst-god", titles: { kr: "극한의 대결! 프리 대 루이!", jp: "" }, airDates: { kr: "2018-05-07", jp: "" }, note: "" },
    { no: "47화", season: "burst-god", titles: { kr: "얼티메이트 배틀!", jp: "" }, airDates: { kr: "2018-05-14", jp: "" }, note: "" },
    { no: "48화", season: "burst-god", titles: { kr: "우정! 결승을 위한 배틀!", jp: "" }, airDates: { kr: "2018-05-21", jp: "" }, note: "" },
    { no: "49화", season: "burst-god", titles: { kr: "준결승! 숙명의 배틀!", jp: "" }, airDates: { kr: "2018-05-28", jp: "" }, note: "" },
    { no: "50화", season: "burst-god", titles: { kr: "최종 결전 돌입!", jp: "" }, airDates: { kr: "2018-06-04", jp: "" }, note: "" },
    { no: "51화", season: "burst-god", titles: { kr: "강산 대 슈!", jp: "" }, airDates: { kr: "2018-06-11", jp: "" }, note: "" },
    { no: "1화", season: "beyblade-x", titles: { kr: "X[엑스]", jp: "" }, airDates: { kr: "2024-02-05", jp: "" }, note: "" },
    { no: "2화", season: "beyblade-x", titles: { kr: "일곱 빛깔 자객", jp: "" }, airDates: { kr: "2024-02-12", jp: "" }, note: "" },
    { no: "3화", season: "beyblade-x", titles: { kr: "팀 페르소나!", jp: "" }, airDates: { kr: "2024-02-19", jp: "" }, note: "" },
    { no: "4화", season: "beyblade-x", titles: { kr: "베이 후원사", jp: "" }, airDates: { kr: "2024-02-26", jp: "" }, note: "" },
    { no: "5화", season: "beyblade-x", titles: { kr: "가자, X타워!", jp: "" }, airDates: { kr: "2024-03-04", jp: "" }, note: "" },
    { no: "6화", season: "beyblade-x", titles: { kr: "라이언즈 정글!", jp: "" }, airDates: { kr: "2024-03-11", jp: "" }, note: "" },
    { no: "7화", season: "beyblade-x", titles: { kr: "팀 쥬가닉!", jp: "" }, airDates: { kr: "2024-03-18", jp: "" }, note: "" },
    { no: "8화", season: "beyblade-x", titles: { kr: "가면과 사자왕!", jp: "" }, airDates: { kr: "2024-03-25", jp: "" }, note: "" },
    { no: "9화", season: "beyblade-x", titles: { kr: "베이장인!", jp: "" }, airDates: { kr: "2024-04-01", jp: "" }, note: "" },
    { no: "10화", season: "beyblade-x", titles: { kr: "프로의 세계", jp: "" }, airDates: { kr: "2024-04-08", jp: "" }, note: "" },
    { no: "11화", season: "beyblade-x", titles: { kr: "카이의 시험", jp: "" }, airDates: { kr: "2024-04-15", jp: "" }, note: "" },
    { no: "12화", season: "beyblade-x", titles: { kr: "마지막 배틀!", jp: "" }, airDates: { kr: "2024-04-22", jp: "" }, note: "" },
    { no: "13화", season: "beyblade-x", titles: { kr: "1호팬", jp: "" }, airDates: { kr: "2024-04-29", jp: "" }, note: "" },
    { no: "14화", season: "beyblade-x", titles: { kr: "엑스의 체력 훈련!", jp: "" }, airDates: { kr: "2024-05-06", jp: "" }, note: "" },
    { no: "15화", season: "beyblade-x", titles: { kr: "수수께끼와 베이", jp: "" }, airDates: { kr: "2024-05-13", jp: "" }, note: "" },
    { no: "16화", season: "beyblade-x", titles: { kr: "노블레스 오블리주", jp: "" }, airDates: { kr: "2024-05-20", jp: "" }, note: "" },
    { no: "17화", season: "beyblade-x", titles: { kr: "베이 패러다임 시프트!", jp: "" }, airDates: { kr: "2024-05-27", jp: "" }, note: "" },
    { no: "18화", season: "beyblade-x", titles: { kr: "블레이더의 긍지!", jp: "" }, airDates: { kr: "2024-06-03", jp: "" }, note: "" },
    { no: "19화", season: "beyblade-x", titles: { kr: "최후의 승자?", jp: "" }, airDates: { kr: "2024-06-10", jp: "" }, note: "" },
    { no: "20화", season: "beyblade-x", titles: { kr: "초밥의 추억!", jp: "" }, airDates: { kr: "2024-06-17", jp: "" }, note: "" },
    { no: "21화", season: "beyblade-x", titles: { kr: "인기 블레이더!", jp: "" }, airDates: { kr: "2024-06-24", jp: "" }, note: "" },
    { no: "22화", season: "beyblade-x", titles: { kr: "블랙 앤드 화이트", jp: "" }, airDates: { kr: "2024-07-01", jp: "" }, note: "" },
    { no: "23화", season: "beyblade-x", titles: { kr: "진실한 속마음", jp: "" }, airDates: { kr: "2024-07-08", jp: "" }, note: "" },
    { no: "24화", season: "beyblade-x", titles: { kr: "초고속의 등장", jp: "" }, airDates: { kr: "2024-07-15", jp: "" }, note: "" },
    { no: "25화", season: "beyblade-x", titles: { kr: "엑스의 의미!", jp: "" }, airDates: { kr: "2024-07-22", jp: "" }, note: "" },
    { no: "26화", season: "beyblade-x", titles: { kr: "초대!", jp: "" }, airDates: { kr: "2024-07-29", jp: "" }, note: "" },
    { no: "27화", season: "beyblade-x", titles: { kr: "최후의 투혼!", jp: "" }, airDates: { kr: "2024-08-05", jp: "" }, note: "" },
    { no: "28화", season: "beyblade-x", titles: { kr: "킹과 피닉스!", jp: "" }, airDates: { kr: "2024-08-12", jp: "" }, note: "" },
    { no: "29화", season: "beyblade-x", titles: { kr: "가면과 고기만두!", jp: "" }, airDates: { kr: "2024-08-19", jp: "" }, note: "" },
    { no: "30화", season: "beyblade-x", titles: { kr: "수수께끼와 인기!", jp: "" }, airDates: { kr: "2024-08-26", jp: "" }, note: "" },
    { no: "31화", season: "beyblade-x", titles: { kr: "친구", jp: "" }, airDates: { kr: "2024-09-02", jp: "" }, note: "" },
    { no: "32화", season: "beyblade-x", titles: { kr: "새로운 파트너", jp: "" }, airDates: { kr: "2024-09-09", jp: "" }, note: "" },
    { no: "33화", season: "beyblade-x", titles: { kr: "소중한 약속", jp: "" }, airDates: { kr: "2024-09-16", jp: "" }, note: "" },
    { no: "34화", season: "beyblade-x", titles: { kr: "뜻밖의 손님", jp: "" }, airDates: { kr: "2024-09-23", jp: "" }, note: "" },
    { no: "35화", season: "beyblade-x", titles: { kr: "꿈의 경연", jp: "" }, airDates: { kr: "2024-09-30", jp: "" }, note: "" },
    { no: "36화", season: "beyblade-x", titles: { kr: "블레이더 정신", jp: "" }, airDates: { kr: "2024-10-07", jp: "" }, note: "" },
    { no: "37화", season: "beyblade-x", titles: { kr: "예측불가", jp: "" }, airDates: { kr: "2024-10-14", jp: "" }, note: "" },
    { no: "38화", season: "beyblade-x", titles: { kr: "여왕의 귀환", jp: "" }, airDates: { kr: "2024-10-21", jp: "" }, note: "" },
    { no: "39화", season: "beyblade-x", titles: { kr: "최고의 블레이더", jp: "" }, airDates: { kr: "2024-10-28", jp: "" }, note: "" },
    { no: "40화", season: "beyblade-x", titles: { kr: "또 하나의 가면", jp: "" }, airDates: { kr: "2024-11-04", jp: "" }, note: "" },
    { no: "41화", season: "beyblade-x", titles: { kr: "세 개의 가면", jp: "" }, airDates: { kr: "2024-11-11", jp: "" }, note: "" },
    { no: "42화", season: "beyblade-x", titles: { kr: "X, Y, Z", jp: "" }, airDates: { kr: "2024-11-18", jp: "" }, note: "" },
    { no: "43화", season: "beyblade-x", titles: { kr: "그날의 펜드래곤", jp: "" }, airDates: { kr: "2024-11-25", jp: "" }, note: "" },
    { no: "44화", season: "beyblade-x", titles: { kr: "그날의 가족", jp: "" }, airDates: { kr: "2024-12-02", jp: "" }, note: "" },
    { no: "45화", season: "beyblade-x", titles: { kr: "그날의 너", jp: "" }, airDates: { kr: "2024-12-09", jp: "" }, note: "" },
    { no: "46화", season: "beyblade-x", titles: { kr: "휴식", jp: "" }, airDates: { kr: "2024-12-16", jp: "" }, note: "" },
    { no: "47화", season: "beyblade-x", titles: { kr: "정상 대결!", jp: "" }, airDates: { kr: "2024-12-23", jp: "" }, note: "" },
    { no: "48화", season: "beyblade-x", titles: { kr: "자매 대결!", jp: "" }, airDates: { kr: "2024-12-30", jp: "" }, note: "" },
    { no: "49화", season: "beyblade-x", titles: { kr: "보이지 않는 것", jp: "" }, airDates: { kr: "2025-01-06", jp: "" }, note: "" },
    { no: "50화", season: "beyblade-x", titles: { kr: "두 명의 X", jp: "" }, airDates: { kr: "2025-01-13", jp: "" }, note: "" },
    { no: "51화", season: "beyblade-x", titles: { kr: "최고의 놀이", jp: "" }, airDates: { kr: "2025-01-20", jp: "" }, note: "" },
    { no: "1화", season: "beyblade-x-2", titles: { kr: "다시 시작", jp: "" }, airDates: { kr: "2025-04-04", jp: "" }, note: "" },
    { no: "2화", season: "beyblade-x-2", titles: { kr: "다가오는 새 시대", jp: "" }, airDates: { kr: "2025-04-11", jp: "" }, note: "" },
    { no: "3화", season: "beyblade-x-2", titles: { kr: "나의 길", jp: "" }, airDates: { kr: "2025-04-18", jp: "" }, note: "" },
    { no: "4화", season: "beyblade-x-2", titles: { kr: "새로운 베이 패러다임 시프트", jp: "" }, airDates: { kr: "2025-04-25", jp: "" }, note: "" },
    { no: "5화", season: "beyblade-x-2", titles: { kr: "별의 음모", jp: "" }, airDates: { kr: "2025-05-02", jp: "" }, note: "" },
    { no: "6화", season: "beyblade-x-2", titles: { kr: "삼파전", jp: "" }, airDates: { kr: "2025-05-09", jp: "" }, note: "" },
    { no: "7화", season: "beyblade-x-2", titles: { kr: "트리플 배틀", jp: "" }, airDates: { kr: "2025-05-16", jp: "" }, note: "" },
    { no: "8화", season: "beyblade-x-2", titles: { kr: "가면 S", jp: "" }, airDates: { kr: "2025-05-23", jp: "" }, note: "" },
    { no: "9화", season: "beyblade-x-2", titles: { kr: "다운의 시련", jp: "" }, airDates: { kr: "2025-05-30", jp: "" }, note: "" },
    { no: "10화", season: "beyblade-x-2", titles: { kr: "필승불패", jp: "" }, airDates: { kr: "2025-06-09", jp: "" }, note: "" },
    { no: "11화", season: "beyblade-x-2", titles: { kr: "사립 베이 아카데미", jp: "" }, airDates: { kr: "2025-06-16", jp: "" }, note: "" },
    { no: "12화", season: "beyblade-x-2", titles: { kr: "퀸의 일가", jp: "" }, airDates: { kr: "2025-06-23", jp: "" }, note: "" },
    { no: "13화", season: "beyblade-x-2", titles: { kr: "형체 없는 그림자", jp: "" }, airDates: { kr: "2025-06-30", jp: "" }, note: "" },
    { no: "14화", season: "beyblade-x-2", titles: { kr: "시작의 날개", jp: "" }, airDates: { kr: "2025-07-07", jp: "" }, note: "" },
    { no: "15화", season: "beyblade-x-2", titles: { kr: "하고 싶은 것", jp: "" }, airDates: { kr: "2025-07-14", jp: "" }, note: "" },
    { no: "16화", season: "beyblade-x-2", titles: { kr: "은랑", jp: "" }, airDates: { kr: "2025-07-21", jp: "" }, note: "" },
    { no: "17화", season: "beyblade-x-2", titles: { kr: "빛과 어둠", jp: "" }, airDates: { kr: "2025-07-28", jp: "" }, note: "" },
    { no: "18화", season: "beyblade-x-2", titles: { kr: "어둠의 세계", jp: "" }, airDates: { kr: "2025-08-04", jp: "" }, note: "" },
    { no: "19화", season: "beyblade-x-2", titles: { kr: "흑룡", jp: "" }, airDates: { kr: "2025-08-11", jp: "" }, note: "" },
    { no: "20화", season: "beyblade-x-2", titles: { kr: "그곳으로", jp: "" }, airDates: { kr: "2025-08-18", jp: "" }, note: "" },
    { no: "21화", season: "beyblade-x-2", titles: { kr: "공포의 수수께끼집", jp: "" }, airDates: { kr: "2025-08-25", jp: "" }, note: "" },
    { no: "22화", season: "beyblade-x-2", titles: { kr: "스타 배틀", jp: "" }, airDates: { kr: "2025-09-01", jp: "" }, note: "" },
    { no: "23화", season: "beyblade-x-2", titles: { kr: "저주", jp: "" }, airDates: { kr: "2025-09-08", jp: "" }, note: "" },
    { no: "24화", season: "beyblade-x-2", titles: { kr: "기사의 귀환", jp: "" }, airDates: { kr: "2025-09-15", jp: "" }, note: "" },
    { no: "25화", season: "beyblade-x-2", titles: { kr: "새로운 팀원", jp: "" }, airDates: { kr: "2025-09-22", jp: "" }, note: "" },
    { no: "26화", season: "beyblade-x-2", titles: { kr: "청룡과 흑룡", jp: "" }, airDates: { kr: "2025-09-29", jp: "" }, note: "" },
    { no: "27화", season: "beyblade-x-2", titles: { kr: "커스터마이징", jp: "" }, airDates: { kr: "2025-10-13", jp: "" }, note: "" },
    { no: "28화", season: "beyblade-x-2", titles: { kr: "퀸 vs 킹", jp: "" }, airDates: { kr: "2025-10-20", jp: "" }, note: "" },
    { no: "29화", season: "beyblade-x-2", titles: { kr: "가장 느린 자", jp: "" }, airDates: { kr: "2025-10-27", jp: "" }, note: "" },
    { no: "30화", season: "beyblade-x-2", titles: { kr: "올인", jp: "" }, airDates: { kr: "2025-11-03", jp: "" }, note: "" },
    { no: "31화", season: "beyblade-x-2", titles: { kr: "다운의 도전", jp: "" }, airDates: { kr: "2025-11-10", jp: "" }, note: "" },
    { no: "32화", season: "beyblade-x-2", titles: { kr: "새 친구", jp: "" }, airDates: { kr: "2025-11-17", jp: "" }, note: "" },
    { no: "33화", season: "beyblade-x-2", titles: { kr: "대리전", jp: "" }, airDates: { kr: "2025-11-24", jp: "" }, note: "" },
    { no: "34화", season: "beyblade-x-2", titles: { kr: "인기 대 저주", jp: "" }, airDates: { kr: "2025-12-01", jp: "" }, note: "" },
    { no: "35화", season: "beyblade-x-2", titles: { kr: "불새의 대결", jp: "" }, airDates: { kr: "2025-12-08", jp: "" }, note: "" },
    { no: "36화", season: "beyblade-x-2", titles: { kr: "어둠 속으로", jp: "" }, airDates: { kr: "2025-12-15", jp: "" }, note: "" },
    { no: "37화", season: "beyblade-x-2", titles: { kr: "베이혼", jp: "" }, airDates: { kr: "2025-12-22", jp: "" }, note: "" },
    { no: "38화", season: "beyblade-x-2", titles: { kr: "이루고 싶은 일", jp: "" }, airDates: { kr: "2025-12-29", jp: "" }, note: "" },
    { no: "39화", season: "beyblade-x-2", titles: { kr: "구미호", jp: "" }, airDates: { kr: "2026-01-05", jp: "" }, note: "" },
    { no: "40화", season: "beyblade-x-2", titles: { kr: "드림 매치", jp: "" }, airDates: { kr: "2026-01-12", jp: "" }, note: "" },
    { no: "41화", season: "beyblade-x-2", titles: { kr: "페르세우스의 사자", jp: "" }, airDates: { kr: "2026-01-19", jp: "" }, note: "" },
    { no: "42화", season: "beyblade-x-2", titles: { kr: "최정상 도전자 결정전", jp: "" }, airDates: { kr: "2026-01-26", jp: "" }, note: "" },
    { no: "43화", season: "beyblade-x-2", titles: { kr: "끝나지 않은 대결", jp: "" }, airDates: { kr: "2026-02-02", jp: "" }, note: "" },
    { no: "44화", season: "beyblade-x-2", titles: { kr: "뛰는 여우 위에 나는 너구리", jp: "" }, airDates: { kr: "2026-02-09", jp: "" }, note: "" },
    { no: "45화", season: "beyblade-x-2", titles: { kr: "그날의 천성류", jp: "" }, airDates: { kr: "2026-02-16", jp: "" }, note: "" },
    { no: "46화", season: "beyblade-x-2", titles: { kr: "스타배틀 최강전", jp: "" }, airDates: { kr: "2026-02-23", jp: "" }, note: "" },
    { no: "47화", season: "beyblade-x-2", titles: { kr: "절대로 지지 않아", jp: "" }, airDates: { kr: "2026-03-02", jp: "" }, note: "" },
    { no: "48화", season: "beyblade-x-2", titles: { kr: "초신성", jp: "" }, airDates: { kr: "2026-03-09", jp: "" }, note: "" },
    { no: "49화", season: "beyblade-x-2", titles: { kr: "별을 삼키는 자", jp: "" }, airDates: { kr: "2026-03-16", jp: "" }, note: "" }
  ]
};
const animeSeasonOrder = [
  "topblade",
  "topblade-v",
  "gblade",
  "metal-fight",
  "metal-fight-2",
  "metal-fight-4d",
  "metal-fight-zerog",
  "burst",
  "burst-god",
  "burst-cho-z",
  "burst-gachi",
  "burst-superking",
  "burst-db",
  "beyblade-x",
  "beyblade-x-2",
  "beyblade-x-3"
];
const animeSeasonLabels = {
  topblade: "탑블레이드",
  "topblade-v": "탑블레이드 V",
  gblade: "팽이대전 G블레이드",
  "metal-fight": "메탈베이블레이드",
  "metal-fight-2": "메탈베이블레이드 2",
  "metal-fight-4d": "메탈베이블레이드 4D",
  "metal-fight-zerog": "메탈베이블레이드 제로G",
  burst: "베이블레이드 버스트",
  "burst-god": "베이블레이드 버스트 갓",
  "burst-cho-z": "베이블레이드 버스트 초제트",
  "burst-gachi": "베이블레이드 버스트 진검",
  "burst-superking": "베이블레이드 버스트 슈퍼킹",
  "burst-db": "베이블레이드 버스트 DB",
  "beyblade-x": "베이블레이드 X",
  "beyblade-x-2": "베이블레이드 X 2",
  "beyblade-x-3": "베이블레이드 X 3"
};
const animeSeasonEntries = () => animeSeasonOrder.map(value => [value, animeSeasonLabels[value]]).filter(([, label]) => label);
const latestAnimeSeason = () => animeSeasonOrder[animeSeasonOrder.length - 1] || "metal-fight";
const defaultAnimeSeason = () => [...animeSeasonOrder].reverse().find(season =>
  animeInfo.episodes.some(episode => episode.season === season)
) || latestAnimeSeason();
const normalizeAnimeSeason = season => animeSeasonLabels[season] ? season : defaultAnimeSeason();
const animeDisplayRegion = "kr";
let activeAnimeSeason = defaultAnimeSeason();
let activeAnimeEpisodeQuery = "";
const animeEpisodeControls = () => `<div class="table-list-controls release-dropdowns anime-episode-controls" data-anime-controls aria-label="방영목록 필터">
  <details class="catalog-dropdown release-dropdown">
    <summary><b class="catalog-dropdown-value">${animeSeasonLabels[activeAnimeSeason] || ""}</b></summary>
    <div class="catalog-dropdown-menu">
      ${releaseDropdownOptions(animeSeasonEntries(), activeAnimeSeason, "data-anime-season")}
    </div>
  </details>
  <div class="search-box release-search-box" role="search">
    <span class="search-icon" aria-hidden="true"></span>
    <input id="animeEpisodeSearchInput" type="search" placeholder="검색어를 입력해주세요." value="${escapeAttributeValue(activeAnimeEpisodeQuery)}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" aria-autocomplete="none" />
  </div>
</div>`;

const animeCharacterCardMarkup = character => {
  const name = character?.name || character?.title || "";
  const beys = Array.isArray(character?.beys) ? character.beys.filter(Boolean).join(" / ") : "";
  const detail = character?.desc || character?.role || character?.season || "";
  return `<article class="category-card anime-character-card">
    <strong>${escapeHtml(name)}</strong>
    ${beys ? `<small>${escapeHtml(beys)}</small>` : ""}
    ${detail ? `<p>${escapeHtml(detail)}</p>` : ""}
  </article>`;
};
const animeCharacterSearchFields = character => [
  ...searchFieldsFromValues("primaryName", [character?.name, character?.title]),
  ...searchFieldsFromValues("alias", [character?.jpName, character?.en]),
  ...searchFieldsFromValues("category", [character?.season]),
  ...searchFieldsFromValues("composition", [Array.isArray(character?.beys) ? character.beys.join(" ") : ""]),
  ...searchFieldsFromValues("description", [character?.desc, character?.role])
];
const animeCharacterSearchRecord = (character, index) =>
  createSearchRecord("anime-character", character, animeCharacterSearchFields(character), index);
const visibleAnimeCharacters = () => {
  const characters = Array.isArray(animeInfo.characters) ? animeInfo.characters : [];
  const query = prepareCatalogSearchQuery(animeSearchQuery());
  return characters
    .map((character, index) => {
      const record = animeCharacterSearchRecord(character, index);
      const match = matchSearchRecord(record, query);
      return match.matched ? { character, index, score: match.score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => query.isEmpty ? a.index - b.index : b.score - a.score || a.index - b.index)
    .map(entry => entry.character);
};
const categoryCollectionConfigs = {
  catalog: {
    key: "catalog",
    gridSelector: "#catalogGrid",
    pageSize: CATALOG_PAGE_SIZE,
    getVisibleItems: visibleCatalogItems,
    renderKey: catalogRenderKey,
    syncRenderPage: syncCatalogRenderPage,
    getCurrentPage: () => currentCatalogPage,
    setCurrentPage: page => { currentCatalogPage = page; },
    cardTemplate: catalogCard,
    emptyMarkup: () => `<p class="catalog-empty search-empty">검색결과가 없습니다.</p>`,
    afterRender: updateCatalogCount,
    renderPagination: renderCatalogPagination
  },
  animeCharacters: {
    key: "animeCharacters",
    gridSelector: "#animeCharacterGrid",
    countSelector: "#animeCount",
    pageSize: ANIME_PAGE_SIZE,
    getVisibleItems: visibleAnimeCharacters,
    renderKey: animeRenderKey,
    syncRenderPage: syncAnimeRenderPage,
    getCurrentPage: () => currentAnimePage,
    setCurrentPage: page => { currentAnimePage = page; },
    cardTemplate: animeCharacterCardMarkup,
    emptyMarkup: () => `<p class="anime-page-empty panel-empty-state">${animeSearchQuery() ? "검색결과가 없습니다." : "등록된 등장인물 및 베이 정보가 없습니다."}</p>`,
    renderPagination: renderAnimePagination
  }
};

function renderAnimePage() {
  renderCategoryCollection(categoryCollectionConfigs.animeCharacters);
}

const animeEpisodeHashPrefixes = {
  topblade: "TOPBLADE-EPISODE",
  "topblade-v": "TOPBLADE-V-EPISODE",
  gblade: "GBLADE-EPISODE",
  "metal-fight": "METAL-FIGHT-EPISODE",
  "metal-fight-2": "METAL-FIGHT-2-EPISODE",
  "metal-fight-4d": "METAL-FIGHT-4D-EPISODE",
  "metal-fight-zerog": "METAL-FIGHT-ZEROG-EPISODE",
  burst: "BURST-EPISODE",
  "burst-god": "BURST-GOD-EPISODE",
  "beyblade-x": "BEYBLADE-X-EPISODE",
  "beyblade-x-2": "BEYBLADE-X-2-EPISODE"
};
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
const isAnimeEpisodeHash = id => Object.values(animeEpisodeHashPrefixes).some(prefix => String(id || "").startsWith(`${prefix}-`));
const episodeIndexFromHash = id => {
  const source = String(id || "");
  const prefixEntry = Object.entries(animeEpisodeHashPrefixes).find(([, prefix]) => source.startsWith(`${prefix}-`));
  if (!prefixEntry) return -1;
  const [season, prefix] = prefixEntry;
  const match = source.slice(prefix.length + 1).match(/^\d+$/);
  if (!match) return -1;
  const seasonIndex = Number(match[0]);
  if (!Number.isInteger(seasonIndex) || seasonIndex < 1) return -1;
  const matchingEpisodes = animeInfo.episodes
    .map((episode, index) => ({ episode, index }))
    .filter(({ episode }) => episode.season === season);
  return matchingEpisodes[seasonIndex - 1]?.index ?? -1;
};
const animeEpisodeTitle = (episode, region = animeDisplayRegion) => {
  const title = episode?.titles?.[region] || episode?.titles?.kr || "";
  return [episode?.no || "", title].filter(Boolean).join(" ");
};

const animeEpisodeSearchText = episode => [
  episode.no || "",
  episode.titles?.[animeDisplayRegion] || "",
  animeAirDateLabel(episode.airDates?.[animeDisplayRegion] || ""),
  episode.note || ""
].join(" ");
const animeEpisodeDisplayInitialSearchText = episode => episode.titles?.[animeDisplayRegion] || "";

const visibleAnimeEpisodes = () => {
  const query = activeAnimeEpisodeQuery.trim();
  return animeInfo.episodes
    .map((episode, index) => ({ episode, index }))
    .filter(({ episode }) => episode.season === activeAnimeSeason)
    .filter(({ episode }) => matchesSearchText(animeEpisodeSearchText(episode), query, animeEpisodeDisplayInitialSearchText(episode)));
};

const animeEpisodeRowsMarkup = visibleRows => {
  const rows = visibleRows.map(({ episode, index }) => {
    const airDate = episode.airDates?.[animeDisplayRegion] || "";
    return `<tr class="table-list-row anime-episode-row" role="button" tabindex="0" data-anime-episode-index="${index}">
    <td>${escapeHtml(episode.no || "")}</td>
    <td><span class="release-product-link">${escapeHtml(episode.titles?.[animeDisplayRegion] || "")}</span></td>
    <td>${responsiveDateSpans("anime-air-date-full", "anime-air-date-compact", animeAirDateLabel(airDate), animeAirDateCompactLabel(airDate))}</td>
  </tr>`;
  }).join("");
  return rows || `<tr class="table-list-empty-row release-empty-row"><td colspan="3">등록된 방영목록이 없습니다.</td></tr>`;
};

const animeEpisodesMarkup = () => {
  const visibleRows = visibleAnimeEpisodes();
  const tableMode = visibleRows.length > 8 ? "scroll" : "fit";
  const tableMarkup = tableListTableMarkup({
    scrollClass: "anime-episode-table-scroll",
    tableClass: "anime-episode-table",
    head: `<thead>
      <tr>
        <th>회차</th>
        <th>제목</th>
        <th>방영일</th>
      </tr>
    </thead>`,
    body: animeEpisodeRowsMarkup(visibleRows)
  });
  return tableListPageMarkup({
    className: "category-anime-episodes anime-episode-list-page",
    attrs: `data-anime-table-mode="${tableMode}"`,
    controlsMarkup: animeEpisodeControls(),
    tableMarkup
  });
};
const animeEpisodesPageRoot = () => document.querySelector("[data-anime-episodes-page-content]");

function rememberAnimeModalContext() {
  rememberModalContext("category-anime-episodes", "anime-episode", {
    animeSeason: activeAnimeSeason,
    animeQuery: activeAnimeEpisodeQuery
  });
}

function bindAnimeEpisodesContent(root = document) {
  const animePanel = root.querySelector(".category-anime-episodes");
  if (!animePanel) return;
  animePanel.querySelectorAll("[data-anime-season]").forEach(button => button.addEventListener("click", event => {
    activeAnimeSeason = normalizeAnimeSeason(event.currentTarget.dataset.animeSeason);
    event.currentTarget.closest(".catalog-dropdown")?.removeAttribute("open");
    rememberAnimeModalContext();
    renderAnimeEpisodesPage();
  }));
  const animeSearch = animePanel.querySelector("#animeEpisodeSearchInput");
  bindSearchInput(animeSearch, ".release-search-box", { onInput: searchInput => {
    activeAnimeEpisodeQuery = searchInput.value.trim();
    rememberAnimeModalContext();
    renderAnimeEpisodesPage();
    const nextInput = animeEpisodesPageRoot()?.querySelector("#animeEpisodeSearchInput");
    nextInput?.focus();
    nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length);
  } });
  animePanel.querySelectorAll("[data-anime-episode-index]").forEach(animeRow => {
    const openEpisode = () => {
      const index = Number(animeRow.dataset.animeEpisodeIndex);
      openAnimeEpisodeDetail(index, {
        fromAnimeList: true,
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

function renderAnimeEpisodesPage() {
  const root = animeEpisodesPageRoot();
  if (!root) return;
  root.innerHTML = animeEpisodesMarkup();
  bindAnimeEpisodesContent(root);
}

function openAnimeEpisodeDetail(indexOrId, options = {}) {
  const index = typeof indexOrId === "number" ? indexOrId : episodeIndexFromHash(indexOrId);
  const episode = animeInfo.episodes[index];
  if (!episode) return;
  const id = episodeHashId(index);
  if (!id) return;
  if (options.updateHash !== false && !applyingRoute) {
    navigateToRoute({ type: "detail", id, options });
    return;
  }
  cleanupModelViewer();
  const backAnimeSeason = normalizeAnimeSeason(options.animeSeason || episode.season || activeAnimeSeason);
  const backAnimeQuery = typeof options.animeQuery === "string" ? options.animeQuery : activeAnimeEpisodeQuery;
  const content = document.querySelector("#modalContent");
  if (!content || !modal) return;
  const backButton = options.fromAnimeList
    ? modalBackButtonMarkup({ label: "방영목록으로 돌아가기", animeEpisodes: true })
    : "";
  content.innerHTML = `<div class="modal-inner category-anime-modal">
    <div class="modal-info category-anime-info">
      ${backButton}
      <div class="overview-title-row anime-episode-title-row">
        <h3 class="category-title">${escapeHtml(animeEpisodeTitle(episode))}</h3>
      </div>
    </div>
  </div>`;
  content.querySelector("[data-back-anime-episodes]")?.addEventListener("click", () => {
    openCategoryAnimeEpisodesDetail({
      animeSeason: backAnimeSeason,
      animeQuery: backAnimeQuery
    });
  });
  rememberModalContext("metal-fight-episode", id, {
    fromAnimeList: options.fromAnimeList,
    animeSeason: backAnimeSeason,
    animeQuery: backAnimeQuery
  });
  openModal();
}

function openCategoryAnimeEpisodesDetail(options = {}) {
  if (options.updateHash !== false && !applyingRoute) {
    navigateToRoute({ type: "category-anime-episodes", options });
    return;
  }
  const preserveSearch = options.preserveSearch === true;
  if (options.animeSeason || !preserveSearch) activeAnimeSeason = normalizeAnimeSeason(options.animeSeason || activeAnimeSeason);
  if (typeof options.animeQuery === "string") activeAnimeEpisodeQuery = options.animeQuery;
  else if (!preserveSearch) activeAnimeEpisodeQuery = "";
  cleanupModelViewer();
  activatePrimarySection("anime-episodes", { preserveSearch });
  renderAnimeEpisodesPage();
  rememberAnimeModalContext();
}

const categoryReleaseMenuRoute = () => {
  const region = "kr";
  return { type: "category-release", options: { region, series: defaultReleaseSeries(region) } };
};
const openCategoryCatalog = ({ scope = "all", updateHash = true, replace = false, preserveSearch = false } = {}) => {
  const normalizedScope = normalizeCatalogRouteScope(scope);
  if (updateHash && !applyingRoute) {
    navigateToRoute({ type: "catalog", scope: normalizedScope }, { replace });
    return;
  }
  activatePrimarySection(normalizedScope === "all" ? "catalog" : normalizedScope, { preserveSearch });
};
const openCategoryAnimePage = ({ updateHash = true, replace = false, preserveSearch = false } = {}) => {
  if (updateHash && !applyingRoute) {
    navigateToRoute({ type: "category-anime" }, { replace });
    return;
  }
  activatePrimarySection("anime", { preserveSearch });
  renderAnimePage();
};
const categoryRouteTriggers = [
  { selector: "[data-category-release-open]", route: categoryReleaseMenuRoute },
  { selector: "[data-category-anime-episodes-open]", route: { type: "category-anime-episodes" } },
  { selector: "[data-category-anime-open]", route: { type: "category-anime" } },
  { selector: "[data-category-catalog-open]", route: { type: "catalog", scope: "all" } }
];
const categoryRouteFromTrigger = target => {
  if (!target?.closest) return null;
  for (const { selector, route } of categoryRouteTriggers) {
    const trigger = target.closest(selector);
    if (!trigger) continue;
    return {
      trigger,
      route: typeof route === "function" ? route(trigger) : route
    };
  }
  return null;
};
const handleCategoryRouteClick = (event, { closeSearchHelp = false, closeMobileMenu = true } = {}) => {
  const match = categoryRouteFromTrigger(event.target);
  if (!match) return false;
  if (event.currentTarget?.contains && !event.currentTarget.contains(match.trigger)) return false;
  event.preventDefault();
  if (closeSearchHelp) closeSearchHelpPopovers();
  navigateToRoute(match.route);
  if (closeMobileMenu) setMobileMenuOpen(false);
  return true;
};

document.querySelector(".overview-panel")?.addEventListener("click", event => {
  handleCategoryRouteClick(event);
});
const activeAppPanelName = () => activeAppPanel()?.dataset.appPanel || "";
let searchHashUpdateTimer = 0;
const updateGlobalSearchHash = () => {
  if (searchHashUpdateTimer) clearTimeout(searchHashUpdateTimer);
  searchHashUpdateTimer = 0;
  if (activeAppPanelName() !== "all") return;
  navigateToRoute({ type: "search", query: globalSearchQuery(), scope: globalSearchScopeValue() }, { replace: true, apply: false });
};
const scheduleGlobalSearchHashUpdate = () => {
  if (searchHashUpdateTimer) clearTimeout(searchHashUpdateTimer);
  searchHashUpdateTimer = setTimeout(updateGlobalSearchHash, SEARCH_HASH_UPDATE_DELAY);
};
const refreshGlobalSearchResults = ({ deferHash = true } = {}) => {
  renderGlobalCards();
  if (deferHash) scheduleGlobalSearchHashUpdate();
  else updateGlobalSearchHash();
};
const createSearchRenderTask = render => ({ render, timer: 0, frame: 0 });
const searchRenderTasks = {
  global: createSearchRenderTask(() => refreshGlobalSearchResults()),
  catalog: createSearchRenderTask(() => {
    renderCatalogItems();
    syncCatalogScopeState({ updateCount: false });
    renderCatalogFilterChips();
  }),
  anime: createSearchRenderTask(() => renderAnimePage())
};
const cancelSearchRenderTask = task => {
  if (task.timer) clearTimeout(task.timer);
  if (task.frame) cancelAnimationFrame(task.frame);
  task.timer = 0;
  task.frame = 0;
};
const cancelPendingSearchRenderTasks = () => {
  Object.values(searchRenderTasks).forEach(cancelSearchRenderTask);
  if (searchHashUpdateTimer) clearTimeout(searchHashUpdateTimer);
  searchHashUpdateTimer = 0;
};
const scheduleSearchRender = task => {
  cancelSearchRenderTask(task);
  task.timer = setTimeout(() => {
    task.timer = 0;
    task.frame = requestAnimationFrame(() => {
      task.frame = 0;
      task.render();
    });
  }, SEARCH_RENDER_DELAY);
};
const scheduleGlobalSearchResultsRefresh = () => scheduleSearchRender(searchRenderTasks.global);
const scheduleCatalogSearchResultsRefresh = () => scheduleSearchRender(searchRenderTasks.catalog);
const scheduleAnimeSearchResultsRefresh = () => scheduleSearchRender(searchRenderTasks.anime);
const openSearchResults = ({ replace = false, updateHash = true } = {}) => {
  if (updateHash && !applyingRoute) {
    navigateToRoute({ type: "search", query: globalSearchQuery(), scope: globalSearchScopeValue() }, { replace });
    return;
  }
  cancelPendingSearchRenderTasks();
  closeAllSearchPreviews();
  activateAppPanel("all");
  syncSidebarActiveState("all");
  renderGlobalCards();
  setMobileMenuOpen(false);
};
const bindSearchInput = (input, containerSelector, { onInput, onSubmit = onInput } = {}) => {
  if (!input) return;
  const root = input.closest(containerSelector);
  let clearButton = root?.querySelector(".search-clear");
  const runSearch = handler => {
    syncSearchInputState(input);
    handler?.(input);
  };
  if (root && !clearButton) {
    clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.className = "search-clear";
    clearButton.hidden = true;
    clearButton.setAttribute("aria-label", "검색어 지우기");
    clearButton.setAttribute("title", "검색어 지우기");
    input.insertAdjacentElement("afterend", clearButton);
    clearButton.addEventListener("click", () => {
      setSearchInputValue(input, "");
      input.focus();
      runSearch(onInput);
      refreshSearchPreview(input, { resetActive: true });
    });
  }
  input.addEventListener("input", () => {
    runSearch(onInput);
    refreshSearchPreview(input, { resetActive: true });
  });
  input.addEventListener("keydown", event => {
    if (handleSearchPreviewKeydown(input, event)) return;
    if (event.key !== "Enter") return;
    event.preventDefault();
    runSearch(onSubmit);
  });
  root?.querySelector(".search-icon")?.addEventListener("click", () => runSearch(onSubmit));
  syncSearchInputState(input);
};
const syncOverviewSearchToGlobal = () => {
  if (globalSearch && overviewSearch) setSearchInputValue(globalSearch, overviewSearch.value);
  setGlobalSearchScope(overviewSearchScopeValue());
};
const refreshSearchPanel = () => {
  const panel = activeAppPanelName();
  if (panel === "all") {
    scheduleGlobalSearchResultsRefresh();
    return;
  }
  if (panel === "catalog") {
    scheduleCatalogSearchResultsRefresh();
    return;
  }
  if (panel === "anime") {
    scheduleAnimeSearchResultsRefresh();
  }
};
bindSearchInput(globalSearch, ".search-box", {
  onInput: refreshSearchPanel,
  onSubmit: openSearchResults
});
bindSearchPreview(globalSearch, ".search-box");
bindSearchInput(catalogSearch, ".catalog-search-box", {
  onInput: input => {
    normalizeCatalogSearchInput(input);
    scheduleCatalogSearchResultsRefresh();
  },
  onSubmit: input => {
    normalizeCatalogSearchInput(input);
    scheduleCatalogSearchResultsRefresh();
  }
});
bindSearchInput(animeSearch, ".anime-search-box", {
  onInput: scheduleAnimeSearchResultsRefresh,
  onSubmit: scheduleAnimeSearchResultsRefresh
});
bindSearchInput(overviewSearch, ".overview-search", {
  onInput: () => {
    syncOverviewSearchToGlobal();
    refreshSearchPanel();
  },
  onSubmit: () => {
    syncOverviewSearchToGlobal();
    openSearchResults();
  }
});
bindSearchPreview(overviewSearch, ".overview-search");
const bindSearchScopeControls = ({ dropdown, dataAttr, setScope = () => {}, afterChange }) => {
  dropdown?.addEventListener("click", event => {
    const button = event.target.closest(`button[${dataAttr}]`);
    if (!button || !dropdown.contains(button)) return;
    event.preventDefault();
    setScope(button.getAttribute(dataAttr) || "all");
    afterChange?.(button);
  });
};
bindSearchScopeControls({
  dropdown: overviewSearchScope,
  dataAttr: "data-overview-search-scope",
  setScope: setOverviewSearchScope,
  afterChange: () => {
    if (activeAppPanelName() === "all") {
      syncOverviewSearchToGlobal();
      openSearchResults({ replace: true });
    }
    refreshSearchPreview(overviewSearch, { resetActive: true });
  }
});
bindSearchScopeControls({
  dropdown: globalSearchScope,
  dataAttr: "data-global-search-scope",
  setScope: setGlobalSearchScope,
  afterChange: () => {
    if (activeAppPanelName() === "all") openSearchResults({ replace: true });
    else refreshSearchPanel();
    refreshSearchPreview(globalSearch, { resetActive: true });
  }
});
bindSearchScopeControls({
  dropdown: catalogSeriesFilter,
  dataAttr: "data-catalog-series",
  setScope: series => setCatalogSeries(series),
  afterChange: () => closeSearchHelpPopovers()
});
bindSearchScopeControls({
  dropdown: catalogSearchScope,
  dataAttr: "data-catalog-search-scope",
  afterChange: button => {
    closeSearchHelpPopovers();
    navigateToRoute(
      { type: "catalog", scope: button.getAttribute("data-catalog-search-scope") || "all" },
      { preserveSearch: true, preserveScroll: true }
    );
  }
});
const setDropdownOption = button => {
  const attr = filterButtonAttr(button);
  if (!attr) return;
  const dropdown = button.closest(".catalog-dropdown");
  if (!dropdown) return;
  dropdown.querySelectorAll(`button[${attr}]`).forEach(option => {
    option.classList.toggle("active", option === button);
  });
  const label = dropdown.querySelector(".catalog-dropdown-value");
  if (label) label.textContent = dropdownSummaryText(button);
  dropdown.removeAttribute("open");
};
const filterButtonAttrs = ["data-release-series", "data-anime-season"];
const filterButtonAttr = button => filterButtonAttrs.find(attr => button.hasAttribute(attr));
const refreshCatalogResults = () => {
  renderCatalogItems();
  syncCatalogScopeState({ updateCount: false });
};
const refreshCatalogState = () => {
  refreshCatalogResults();
  renderCatalogFilterChips();
};
const resetCatalogFilters = () => {
  selectedCatalogKind = "";
};
const setCatalogSeries = (series, { refresh = true } = {}) => {
  selectedCatalogSeries = normalizeCatalogSeries(series);
  setCatalogSeriesFilter(selectedCatalogSeries);
  if (refresh) refreshCatalogState();
};
const setCatalogScope = scope => {
  if (scope === "bey" || scope === "parts" || scope === "tools") {
    selectedCatalogKind = scope;
  } else {
    selectedCatalogKind = "";
  }
  setCatalogSearchScope(selectedCatalogKind || "all");
  refreshCatalogState();
};
const resetCatalogFilter = (scope, key) => {
  if (scope !== "catalog" || !catalogSearch) return;
  let removed = false;
  const nextTerms = catalogSearchQueryTerms(catalogSearchQuery()).filter(term => {
    if (!removed && term === key) {
      removed = true;
      return false;
    }
    return true;
  });
  setSearchInputValue(catalogSearch, nextTerms.join(" "));
  refreshCatalogState();
};
const activeFilterChips = scope => {
  if (scope !== "catalog") return [];
  const seen = new Set();
  return catalogSearchQueryTerms(catalogSearchQuery())
    .map(term => {
      const candidate = catalogAttributeChipForTerm(term);
      if (!candidate || seen.has(candidate.key)) return null;
      seen.add(candidate.key);
      return { scope, key: term, label: candidate.label };
    })
    .filter(Boolean);
};
const catalogFilterChipMarkup = chip =>
  `<button type="button" class="ui-chip-button catalog-filter-chip" data-filter-chip-scope="${escapeAttributeValue(chip.scope)}" data-filter-chip-key="${escapeAttributeValue(chip.key)}">${escapeHtml(chip.label)}<span aria-hidden="true">×</span></button>`;
const catalogFilterResetMarkup = scope =>
  `<button type="button" class="ui-chip-button catalog-filter-reset" data-filter-reset-scope="${escapeAttributeValue(scope)}">초기화</button>`;
const renderCatalogFilterChips = () => {
  ["catalog"].forEach(scope => {
    const root = document.querySelector(`[data-catalog-filter-chips="${scope}"]`);
    if (!root) return;
    const chips = activeFilterChips(scope);
    root.hidden = false;
    root.classList.toggle("is-empty", chips.length === 0);
    root.setAttribute("aria-hidden", String(chips.length === 0));
    root.innerHTML = chips.length ? `
      ${chips.map(catalogFilterChipMarkup).join("")}
      ${catalogFilterResetMarkup(scope)}
    ` : "";
  });
};
const positionSearchHelpPopover = (button, popover) => {
  if (!button || !popover || popover.hidden) return;
  const margin = 12;
  const gap = 8;
  const viewport = window.visualViewport;
  const viewportLeft = viewport?.offsetLeft || 0;
  const viewportTop = viewport?.offsetTop || 0;
  const viewportWidth = viewport?.width || window.innerWidth;
  const viewportHeight = viewport?.height || window.innerHeight;
  const topbarRect = document.querySelector(".topbar")?.getBoundingClientRect();
  const topbarBottom = topbarRect && topbarRect.height > 0 ? topbarRect.bottom : viewportTop;
  const minLeft = viewportLeft + margin;
  const maxLeft = viewportLeft + viewportWidth - margin;
  const minTop = Math.max(viewportTop + margin, topbarBottom + margin);
  const maxTop = viewportTop + viewportHeight - margin;
  const buttonRect = button.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  let left = buttonRect.left;
  let top = buttonRect.bottom + gap;
  const rightmostLeft = Math.max(minLeft, maxLeft - popoverRect.width);
  const lowestTop = Math.max(minTop, maxTop - popoverRect.height);
  if (top + popoverRect.height > maxTop) {
    const flippedTop = buttonRect.top - popoverRect.height - gap;
    top = flippedTop >= minTop ? flippedTop : minTop;
  }
  left = Math.min(Math.max(left, minLeft), rightmostLeft);
  top = Math.min(Math.max(top, minTop), lowestTop);
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
};
const createSearchHelpPopoverController = ({ button, popover }) => {
  const controller = {
    button,
    popover,
    isOpen: () => Boolean(popover && !popover.hidden),
    position: () => positionSearchHelpPopover(button, popover),
    close: () => {
      if (!popover) return;
      popover.hidden = true;
      button?.setAttribute("aria-expanded", "false");
    },
    open: () => {
      if (!popover) return;
      popover.hidden = false;
      button?.setAttribute("aria-expanded", "true");
      controller.position();
    },
    toggle: () => {
      if (controller.isOpen()) controller.close();
      else controller.open();
    },
    containsEventTarget: event => Boolean(
      button && event.target.closest(`#${button.id}`)
      || popover && event.target.closest(`#${popover.id}`)
    )
  };
  button?.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    controller.toggle();
  });
  popover?.addEventListener("click", event => {
    event.stopPropagation();
  });
  return controller;
};
const searchHelpPopovers = [
  createSearchHelpPopoverController({ button: catalogSearchHelpButton, popover: catalogSearchHelpPopover }),
  createSearchHelpPopoverController({ button: animeSearchHelpButton, popover: animeSearchHelpPopover })
];
const anySearchHelpPopoverIsOpen = () => searchHelpPopovers.some(controller => controller.isOpen());
const closeSearchHelpPopovers = () => searchHelpPopovers.forEach(controller => controller.close());
const positionSearchHelpPopovers = () => searchHelpPopovers.forEach(controller => controller.position());
document.querySelectorAll(".catalog-filter-chips").forEach(root => root.addEventListener("click", event => {
  const chip = event.target.closest("[data-filter-chip-scope][data-filter-chip-key]");
  const reset = event.target.closest("[data-filter-reset-scope]");
  if (chip) {
    resetCatalogFilter(chip.dataset.filterChipScope, chip.dataset.filterChipKey);
    return;
  }
  if (reset) {
    if (reset.dataset.filterResetScope === "catalog") {
      setSearchInputValue(catalogSearch, "");
    }
    refreshCatalogState();
  }
}));
const bindPaginationControls = ({ rootSelector, dataAttr, setPage, render, scroll }) => {
  document.querySelector(rootSelector)?.addEventListener("click", event => {
    const pageButton = event.target.closest(`[${dataAttr}]`);
    if (!pageButton || pageButton.disabled) return;
    event.preventDefault();
    setPage(Number(pageButton.getAttribute(dataAttr)) || 1);
    render();
    scroll();
  });
};
bindPaginationControls({
  rootSelector: "#catalogPagination",
  dataAttr: "data-catalog-page",
  setPage: page => { currentCatalogPage = page; },
  render: renderCatalogItems,
  scroll: scrollCatalogGridIntoView
});
bindPaginationControls({
  rootSelector: "#animePagination",
  dataAttr: "data-anime-page",
  setPage: page => { currentAnimePage = page; },
  render: renderAnimePage,
  scroll: scrollAnimeGridIntoView
});
document.addEventListener("toggle", event => {
  const dropdown = event.target.closest?.(".catalog-dropdown");
  if (!dropdown?.open) return;
  document.querySelectorAll(".catalog-dropdown[open]").forEach(openDropdown => {
    if (openDropdown !== dropdown) openDropdown.removeAttribute("open");
  });
}, true);
document.addEventListener("click", event => {
  if (!event.target.closest(".search-box") && !event.target.closest(".overview-search")) closeAllSearchPreviews();
  if (!event.target.closest(".catalog-dropdown")) {
    document.querySelectorAll(".catalog-dropdown[open]").forEach(dropdown => {
      dropdown.removeAttribute("open");
    });
  }
});
const updateToTop = () => {
  if (!toTop) return;
  toTop.classList.toggle("show", window.scrollY > 420);
};
const syncCatalogStickySearchState = () => {
  const activeCatalogControl = document.querySelector(".catalog-panel.active .catalog-control-bar");
  document.querySelectorAll(".catalog-control-bar.is-stuck").forEach(control => {
    if (control !== activeCatalogControl) control.classList.remove("is-stuck");
  });
  if (!activeCatalogControl) return;
  const topbarRect = document.querySelector(".topbar")?.getBoundingClientRect();
  const stickyTop = topbarRect && topbarRect.height > 0 ? topbarRect.bottom : 0;
  const controlTop = activeCatalogControl.getBoundingClientRect().top;
  activeCatalogControl.classList.toggle("is-stuck", controlTop <= stickyTop + 1 && window.scrollY > 0);
};
window.addEventListener("scroll", () => {
  updateToTop();
  syncCatalogStickySearchState();
  positionSearchHelpPopovers();
}, { passive: true });
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateToTop();
syncCatalogStickySearchState();

const modal = document.querySelector("#detailModal");
let modalScrollY = 0;
let pendingModalScrollY = null;
let modalViewportSyncFrame = 0;
const getModalViewportSize = () => {
  const visualViewport = window.visualViewport;
  const width = Math.round(visualViewport?.width || window.innerWidth || document.documentElement.clientWidth || 0);
  const height = Math.round(visualViewport?.height || window.innerHeight || document.documentElement.clientHeight || 0);
  return { width, height };
};
const getModalLockWidth = () => {
  const clientWidth = document.documentElement.clientWidth || 0;
  const innerWidth = window.innerWidth || 0;
  return Math.round(clientWidth || innerWidth || getModalViewportSize().width || 0);
};
const cancelModalViewportSync = () => {
  if (!modalViewportSyncFrame) return;
  cancelAnimationFrame(modalViewportSyncFrame);
  modalViewportSyncFrame = 0;
};
const clearModalLockStyles = () => {
  document.documentElement.classList.remove("is-modal-open");
  document.body.classList.remove("is-modal-open");
  document.body.style.removeProperty("--modal-lock-left");
  document.body.style.removeProperty("--modal-lock-width");
  document.body.style.removeProperty("--modal-viewport-width");
  document.body.style.removeProperty("--modal-viewport-height");
  document.body.style.removeProperty("--modal-scroll-lock-top");
};
function syncModalViewportMetrics() {
  if (!modal?.open) return;
  const { width, height } = getModalViewportSize();
  document.body.style.setProperty("--modal-viewport-width", `${width}px`);
  document.body.style.setProperty("--modal-viewport-height", `${height}px`);
  document.body.style.setProperty("--modal-lock-width", `${getModalLockWidth()}px`);
}
function scheduleModalViewportSync() {
  if (!modal?.open) return;
  syncModalViewportMetrics();
  cancelModalViewportSync();
  modalViewportSyncFrame = requestAnimationFrame(() => {
    modalViewportSyncFrame = 0;
    syncModalViewportMetrics();
  });
}
function openModal() {
  if (!modal || modal.open) return;
  if (pendingModalScrollY !== null) {
    modalScrollY = validScrollY(pendingModalScrollY);
    pendingModalScrollY = null;
  } else {
    modalScrollY = currentPageScrollY();
  }
  const bodyRect = document.body.getBoundingClientRect();
  document.body.style.setProperty("--modal-lock-left", `${bodyRect.left}px`);
  document.body.style.setProperty("--modal-lock-width", `${getModalLockWidth()}px`);
  document.body.style.setProperty("--modal-scroll-lock-top", `${modalScrollY * -1}px`);
  document.documentElement.classList.add("is-modal-open");
  document.body.classList.add("is-modal-open");
  modal.showModal();
  syncModalViewportMetrics();
}
function closeModal() {
  const targetScrollY = validScrollY(modalScrollY);
  if (modal?.open) modal.close();
  cancelModalViewportSync();
  restorePageScroll(targetScrollY);
  clearModalLockStyles();
  restorePageScroll(targetScrollY);
}
function closeModalSession({ clearContext = true, clearOrigin = true } = {}) {
  closeModalTagPopover();
  cleanupModelViewer();
  if (clearContext) {
    clearModalContext();
    clearActiveDetailModalContext();
  }
  const shouldRestoreModalScroll = Boolean(modalOriginRoute);
  if (clearOrigin) clearModalOriginRoute();
  if (modal?.open) closeModal();
  else if (shouldRestoreModalScroll) restorePageScroll(modalScrollY);
}
const statProfiles = {
  "metal fight": {
    stats: [
      { key: "attack", label: "공격력" },
      { key: "defense", label: "방어력" },
      { key: "stamina", label: "지구력" }
    ],
    normalize: value => normalizedMetalFightStat(value),
    fillPercent: value => Math.min(100, value * 20)
  }
};
function statProfileFor(item) {
  return statProfiles[item.statProfile] || statProfiles[item.series] || null;
}
function normalizedMetalFightStat(value) {
  if (value <= 0) return 0;
  return Math.min(7, Math.max(0.5, Math.round(value / 5) / 2));
}
function statValue(stats, entry, index) {
  if (Array.isArray(stats)) return stats[index];
  return stats?.[entry.key];
}
function normalizedStat(rawValue, profile) {
  const value = Number(rawValue);
  if (!Number.isFinite(value)) return 0;
  return profile.normalize ? profile.normalize(value) : value;
}
function statFillPercent(value, profile) {
  if (profile.fillPercent) return profile.fillPercent(value);
  return Math.max(0, Math.min(100, value));
}
function statRow(name, rawValue, profile) {
  const value = normalizedStat(rawValue, profile);
  return `
    <div class="stat-row"><span>${name}</span><div class="stat-track"><div class="stat-fill" style="width:${statFillPercent(value, profile)}%"></div></div><b>${value}</b></div>`;
}
function statRows(item, stats, extraStats = []) {
  const profile = statProfileFor(item);
  if (!profile) return "";
  const baseStats = (profile.stats || [])
    .map((entry, index) => {
      const value = statValue(stats, entry, index);
      return value == null ? "" : statRow(entry.label, value, profile);
    })
    .filter(Boolean);
  const additionalStats = (extraStats || []).map(stat => statRow(stat.name, stat.value, profile));
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
  return partItems.indexOf(item) >= zeroGBottomStartIndex;
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
  const note = zeroGStadiumNote(item);
  if (!item.modes) {
    const rows = statRows(item, item.stats, item.extraStats);
    return rows ? `<div class="stat-block">${rows}${note}</div>` : "";
  }
  const modeStats = item.modes
    .map(mode => {
      const rows = statRows(item, mode.stats, mode.extraStats);
      return rows ? `<section><p class="mode-title">${mode.name}</p>${rows}</section>` : "";
    })
    .filter(Boolean)
    .join("");
  return modeStats ? `<div class="stat-block"><div class="mode-stats">${modeStats}</div>${note}</div>` : "";
}
const modalBackButtonMarkup = ({ backId = "", backProductId = "", backRelease = false, region = "", label = "돌아가기", animeEpisodes = false } = {}) => {
  const releaseBackAttr = backRelease ? ` data-back-release="true"` : "";
  const regionBackAttr = region ? ` data-back-region="${escapeAttributeValue(region)}"` : "";
  const backIdAttr = backId ? ` data-back-id="${escapeAttributeValue(backId)}"` : "";
  const productAttr = backProductId ? ` data-back-product-id="${escapeAttributeValue(backProductId)}"` : "";
  const animeBackAttr = animeEpisodes ? " data-back-anime-episodes" : "";
  return `<button class="ui-icon-button modal-back icon-back-button" type="button"${backIdAttr}${productAttr}${releaseBackAttr}${regionBackAttr}${animeBackAttr} aria-label="${escapeAttributeValue(label)}">←</button>`;
};
const detailBackButton = (backId, backProductId, backRelease, backRegion) => {
  if (backId) {
    return modalBackButtonMarkup({ backId, backProductId, backRelease, region: backRegion, label: "베이로 돌아가기" });
  }
  return productBackButton({ backProductId, backRelease, region: backRegion });
};
const productBackButton = ({ backProductId, backRelease = false, region = "" } = {}) => {
  if (!backProductId) return "";
  return modalBackButtonMarkup({ backProductId, backRelease, region, label: "제품으로 돌아가기" });
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
      openProductEntry(backButton.dataset.backProductId, backOptions);
      return;
    }
    if (backButton.dataset.backRelease) openCategoryReleaseDetail({ region: backOptions.region || activeReleaseRegion });
  });
}
const modalStepButtonMarkup = ({ direction, targetId, kind, label }) =>
  `<button class="ui-icon-button modal-step modal-step-${direction}" type="button" data-modal-kind="${escapeAttributeValue(kind)}" data-modal-target="${escapeAttributeValue(targetId)}" aria-label="${escapeAttributeValue(label)}"></button>`;
function modalStepButtons(list, currentId, kind) {
  const index = list.findIndex(entry => entry.id === currentId);
  if (index < 0 || list.length < 2) return "";
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  return [
    modalStepButtonMarkup({ direction: "prev", targetId: prev.id, kind, label: "전 항목" }),
    modalStepButtonMarkup({ direction: "next", targetId: next.id, kind, label: "후 항목" })
  ].join("");
}
function bindModalStepButtons(options = {}) {
  document.querySelectorAll(".modal-step").forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const targetId = button.dataset.modalTarget;
    const kind = button.dataset.modalKind || "item";
    openDetailByKind(kind, targetId, options[kind] || (kind === "item" ? options.item : {}) || {});
  }));
}
function openDetailByKind(kind, targetId, options = {}) {
  if (!targetId) return;
  if (isAnimeEpisodeHash(targetId)) openAnimeEpisodeDetail(targetId, options);
  else if (kind === "product-lineup") openProductLineupDetail(targetId, options);
  else if (kind === "product" || targetId.startsWith("PRODUCT-")) openProductEntry(targetId, options);
  else if (kind === "tools" || targetId.startsWith("TOOLS-")) openToolsDetail(targetId, options);
  else if (kind === "book" || targetId.startsWith("BOOK-")) openBookDetail(targetId, options);
  else if (kind === "game" || targetId.startsWith("GAME-")) openGameDetail(targetId, options);
  else openDetail(targetId, options);
}
function modalTitle(text, extraClass = "") {
  const className = extraClass ? `modal-name ${extraClass}` : "modal-name";
  return `<h3 class="${className}">${text}</h3>`;
}
function detailHeading(item, options = {}) {
  if (["track", "bottom", "4dbottom", "disk", "coredisk", "frame", "dbdisk", "dbarmor", "driver"].includes(item.type)) {
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
  const item = catalogCoreItemsById.get(id);
  if (!item) return;
  if (options.updateHash !== false && !applyingRoute) {
    navigateToRoute({ type: "detail", id, options });
    return;
  }
  closeModalTagPopover();
  cleanupModelViewer();
  const slot = item.type === "bey"
    ? modalInfoSlot(item.desc || "", beyModalTags(item), "single-line-info-slot")
    : modalInfoSlot(item.desc || "", partModalTags(item));
  const body = item.type === "bey" ? beyDetailSections(item, options.region) : partStats(item);
  const visibleCoreItems = visibleCatalogCoreItems();
  const stepItems = visibleCoreItems.some(entry => entry.id === item.id) ? visibleCoreItems : catalogCoreItems;
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
  openModal();
  if (item.model) requestAnimationFrame(initModelViewer);
}
function productHeader(item, region = activeReleaseRegion) {
  return modalTitle(productDisplayName(item, region), "product-modal-name");
}
function productMetaSlot() {
  return `<div class="product-empty-info-slot"></div>`;
}
const productLineupTitle = product => product.lineupTitle || "등장 베이";
const productLineupComposition = (product, part) => {
  const lineupIds = productLineupIds(product);
  if (!lineupIds.length) return false;
  if (part.lineup) return true;
  return Boolean(part.target && lineupIds.includes(part.target) && /무작위|레벨별/.test(part.name || compositionItemLabel(part)));
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
const compositionDisplayName = name => (name || "").replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
function productComposition(item, region = activeReleaseRegion) {
  const composition = productCompositionItems(item, region);
  if (!composition.length) return "";
  return `<section class="modal-section product-composition"><p class="mounted-title">구성</p><div class="modal-section-scroll product-composition-list">${composition.map(part => {
    const name = compositionDisplayName(part.name || "");
    const quantity = part.quantity || part.qty || "1개";
    if (productLineupComposition(item, part)) return `<button class="ui-list-link product-composition-item product-lineup-trigger" type="button" data-product-id="${item.id}" data-target-id="${part.target || ""}"><span>${name} ${quantity}</span><b>→</b></button>`;
    if (!part.target) return `<div class="ui-list-link product-composition-item"><span>${name} ${quantity}</span><b>→</b></div>`;
    const target = findCatalogItemById(part.target);
    const displayName = name || compositionDisplayName(target?.name || "");
    return `<a class="ui-list-link product-composition-item composition-link" href="#${part.target}" data-target-id="${part.target}"><span>${displayName} ${quantity}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
const productLineupItemName = (item, region = activeReleaseRegion) => {
  if (productItemsById.has(item.id)) return productDisplayName(item, region);
  const combo = item.type === "bey" ? partCategory(item) : "";
  const name = itemDisplayName(item, region);
  return combo ? `${name} ${combo}` : name;
};
function productLineup(item, region = activeReleaseRegion) {
  const lineupIds = productLineupIds(item);
  if (!lineupIds.length) return "";
  const lineupItems = lineupIds
    .map(id => findCatalogItemById(id))
    .filter(Boolean);
  if (!lineupItems.length) return "";
  return `<section class="modal-section product-composition"><p class="mounted-title">${productLineupTitle(item)}</p><div class="modal-section-scroll product-composition-list">${lineupItems.map(lineupItem => {
    const name = productLineupItemName(lineupItem, region);
    return `<a class="ui-list-link product-composition-item composition-link" href="#${lineupItem.id}" data-target-id="${lineupItem.id}"><span>${name}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
function bindProductCompositionLinks(product, root = document, options = {}) {
  root.querySelectorAll(".product-composition-list").forEach(compositionList => compositionList.addEventListener("click", event => {
    const lineupButton = event.target.closest(".product-lineup-trigger");
    if (lineupButton && compositionList.contains(lineupButton)) {
      event.preventDefault();
      openProductLineupDetail(lineupButton.dataset.productId, options);
      return;
    }
    const link = event.target.closest(".composition-link");
    if (!link || !compositionList.contains(link)) return;
    event.preventDefault();
    const targetId = link.dataset.targetId;
    const backOptions = { backProductId: product.id };
    if (options.backRelease) backOptions.backRelease = true;
    if (options.region) backOptions.region = options.region;
    openDetailByKind("", targetId, backOptions);
  }));
}
function openProductLineupDetail(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  if (options.updateHash !== false && !applyingRoute) {
    navigateToRoute({ type: "detail", id, options });
    return;
  }
  const requestedRegion = releaseRegionLabels[options.region] ? options.region : (releaseRegionLabels[activeReleaseRegion] ? activeReleaseRegion : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  activeReleaseRegion = region;
  cleanupModelViewer();
  const backButton = options.backProductId
    ? productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region })
    : options.backRelease
      ? modalBackButtonMarkup({ backRelease: true, region, label: "발매목록으로 돌아가기" })
      : "";
  const modalContentRoot = document.querySelector("#modalContent");
  modalContentRoot.innerHTML = `<div class="modal-inner">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot()}
    <div class="modal-body-block">${productLineup(item, region)}</div>`)}
    ${backButton}</div></div>`;
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindProductCompositionLinks(item, modalContentRoot, { ...options, region });
  rememberModalContext("product-lineup", item.id, { ...options, region });
  openModal();
}
function openProductEntry(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  if (item.lineupPool?.length) openProductLineupDetail(id, options);
  else openProductDetail(id, options);
}
function openProductDetail(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  if (options.updateHash !== false && !applyingRoute) {
    navigateToRoute({ type: "detail", id, options });
    return;
  }
  const requestedRegion = releaseRegionLabels[options.region] ? options.region : (releaseRegionLabels[activeReleaseRegion] ? activeReleaseRegion : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  const stepRegion = requestedRegion === "kr" ? "kr" : region;
  activeReleaseRegion = region;
  cleanupModelViewer();
  const backButton = options.backProductId
    ? productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region })
    : options.backRelease
      ? modalBackButtonMarkup({ backRelease: true, region, label: "발매목록으로 돌아가기" })
      : "";
  const productStepSource = productItems.filter(entry => !entry.lineupOnly).sort((a, b) => productSerialNumber(a, stepRegion) - productSerialNumber(b, stepRegion));
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
  openModal();
}
function openSimpleCatalogDetail({ item, options = {}, kind, stepItems, tags = "" }) {
  if (options.updateHash !== false && !applyingRoute) {
    navigateToRoute({ type: "detail", id: item.id, options });
    return;
  }
  cleanupModelViewer();
  const backButton = productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region: options.region });
  const modalContentRoot = document.querySelector("#modalContent");
  modalContentRoot.innerHTML = `${modalStepButtons(stepItems, item.id, kind)}<div class="modal-inner">
    <div class="modal-art"></div>
    <div class="modal-info part-modal-info">${modalScrollArea(`${modalTitle(itemDisplayName(item, options.region))}
    ${modalInfoSlot(item.desc || "", tags)}<div class="modal-body-block"></div>`)}${backButton}</div></div>`;
  bindModalStepButtons({ [kind]: options });
  bindCatalogModalBack(modalContentRoot);
  rememberModalContext(kind, item.id, options);
  openModal();
}
const compareItemsByKoreanName = (a, b) => a.name.localeCompare(b.name, "ko");
const simpleCatalogDetailConfigs = {
  tools: {
    itemsById: toolsItemsById,
    stepItems: item => {
      const visibleItems = visibleToolsItems();
      return visibleItems.some(entry => entry.id === item.id) ? visibleItems : toolsItems.slice().sort(compareToolsItemsByFirstRelease);
    }
  },
  book: {
    itemsById: bookItemsById,
    stepItems: () => bookItems.slice().sort(compareItemsByKoreanName),
    tags: item => modalTagGroup(`<span>${item.category || "도서"}</span>`)
  },
  game: {
    itemsById: gameItemsById,
    stepItems: () => gameItems.slice().sort(compareItemsByKoreanName)
  }
};
function openConfiguredSimpleCatalogDetail(kind, id, options = {}) {
  const config = simpleCatalogDetailConfigs[kind];
  const item = config?.itemsById.get(id);
  if (!item) return;
  openSimpleCatalogDetail({
    item,
    options,
    kind,
    stepItems: config.stepItems(item),
    tags: config.tags?.(item) || ""
  });
}
function openToolsDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("tools", id, options);
}
function openBookDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("book", id, options);
}
function openGameDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("game", id, options);
}
function closeDetail() {
  const targetRoute = getModalCloseRoute();
  const targetScrollY = validScrollY(modalScrollY);
  closeModalSession();
  navigateToRoute(targetRoute, { replace: true, preserveScroll: true, preserveSearch: true });
  restorePageScroll(targetScrollY);
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
  cancelModalViewportSync();
  clearModalLockStyles();
});

const activateAppPanel = section => {
  document.querySelectorAll(".app-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.appPanel === section));
  document.body.dataset.activePanel = section;
  document.body.classList.toggle("is-overview", section === "overview");
  closeAllSearchPreviews();
  syncCatalogStickySearchState();
};
const syncSidebarActiveState = section => {
  const currentSection = normalizedSidebarSection(section);
  getSidebarRoots().forEach(root => {
    root.querySelectorAll(sidebarCurrentButtonSelector).forEach(button => {
      setSidebarButtonCurrent(button, sidebarSectionForButton(button) === currentSection);
    });
  });
};
const setMobileMenuOpen = open => {
  document.body.classList.toggle("menu-open", open);
  [menuButton, desktopSidebarToggle].forEach(button => {
    button?.setAttribute("aria-expanded", String(open));
    button?.setAttribute("aria-label", open ? "메뉴 열림" : "메뉴 열기");
    button?.setAttribute("title", open ? "메뉴 열림" : "메뉴 열기");
  });
  mobileDrawer?.setAttribute("aria-hidden", String(!open));
  if (open) {
    const panel = activeAppPanel()?.dataset.appPanel || "overview";
    syncSidebarActiveState(panel);
  }
};
const currentMenuTrigger = () => window.matchMedia("(min-width: 100rem)").matches ? desktopSidebarToggle || menuButton : menuButton || desktopSidebarToggle;
const clearPrimaryViewLocks = () => {
  if (document.body.classList.contains("menu-open")) setMobileMenuOpen(false);
  if (modal?.open) return;
  cancelModalViewportSync();
  clearModalLockStyles();
};
const activatePrimarySection = (section, { preserveSearch = false } = {}) => {
  cancelPendingSearchRenderTasks();
  clearPrimaryViewLocks();
  if (section === "product") section = "overview";
  const isCatalogSection = ["catalog", "bey", "parts", "tools"].includes(section);
  const catalogScope = section === "catalog" ? "all" : section;
  const panelSection = isCatalogSection ? "catalog" : section;
  if (!preserveSearch) clearSearchInputs();
  syncSidebarActiveState(panelSection);
  activateAppPanel(panelSection);
  if (section === "overview") setGlobalSearchScope("all");
  if (isCatalogSection) {
    resetCatalogFilters();
    if (!preserveSearch) setCatalogSeries(defaultCatalogSeries(), { refresh: false });
    setCatalogScope(catalogScope);
    setGlobalSearchScope(catalogScope === "bey" || catalogScope === "tools" ? catalogScope : "all");
  }
  if (panelSection === "anime") renderAnimePage();

  setMobileMenuOpen(false);
};
function closeDetailModalForPrimaryRoute() {
  closeModalSession();
}
function routeApplyOptions(route = {}) {
  return { ...(route.options || {}), updateHash: false };
}
const restorePagedSearchOrigin = ({ originState, queryKey, pageKey, input, setPage, render, refresh = render }) => {
  if (typeof originState?.[queryKey] === "string") setSearchInputValue(input, originState[queryKey]);
  refresh();
  const page = Number(originState?.[pageKey]);
  if (Number.isFinite(page) && page > 1) {
    setPage(Math.floor(page));
    render();
  }
};
const restoreStoredCatalogOrigin = originState => {
  setCatalogSeries(originState?.catalogSeries || "all", { refresh: false });
  restorePagedSearchOrigin({
    originState,
    queryKey: "catalogQuery",
    pageKey: "catalogPage",
    input: catalogSearch,
    setPage: page => { currentCatalogPage = page; },
    render: renderCatalogItems,
    refresh: refreshCatalogState
  });
};
const restoreStoredAnimeOrigin = originState => restorePagedSearchOrigin({
  originState,
  queryKey: "animeQuery",
  pageKey: "animePage",
  input: animeSearch,
  setPage: page => { currentAnimePage = page; },
  render: renderAnimePage
});
function restoreDetailOriginPanel(context) {
  const originRoute = routeSnapshot(context?.originRoute);
  if (!originRoute || !isPrimaryRoute(originRoute)) return false;
  const originState = context?.originState || {};
  modalOriginRoute = routeSnapshot(originRoute);
  rememberPrimaryRoute(originRoute);
  if (originRoute.type === "catalog") {
    openCategoryCatalog({ scope: originRoute.scope || "all", updateHash: false, preserveSearch: true });
    restoreStoredCatalogOrigin(originState);
  } else if (originRoute.type === "search") {
    const scope = originState.globalScope || originRoute.scope || "all";
    const query = typeof originState.globalQuery === "string" ? originState.globalQuery : originRoute.query || "";
    setSearchInputValue(globalSearch, query);
    setSearchInputValue(overviewSearch, query);
    setGlobalSearchScope(scope);
    setOverviewSearchScope(scope);
    openSearchResults({ replace: true, updateHash: false });
  } else if (originRoute.type === "category-release") {
    openCategoryReleaseDetail({
      ...(originRoute.options || {}),
      region: originState.releaseRegion || originRoute.options?.region,
      series: originState.releaseSeries || originRoute.options?.series,
      releaseQuery: typeof originState.releaseQuery === "string" ? originState.releaseQuery : originRoute.options?.releaseQuery,
      releaseSort: originState.releaseSort || originRoute.options?.releaseSort,
      updateHash: false,
      preserveSearch: true
    });
  } else if (originRoute.type === "category-anime") {
    openCategoryAnimePage({ updateHash: false, preserveSearch: true });
    restoreStoredAnimeOrigin(originState);
  } else if (originRoute.type === "category-anime-episodes") {
    openCategoryAnimeEpisodesDetail({
      ...(originRoute.options || {}),
      animeSeason: originState.animeSeason || originRoute.options?.animeSeason,
      animeQuery: typeof originState.animeQuery === "string" ? originState.animeQuery : originRoute.options?.animeQuery,
      updateHash: false,
      preserveSearch: true
    });
  } else {
    activatePrimarySection("overview", { preserveSearch: true });
  }
  modalScrollY = validScrollY(originState.scrollY);
  pendingModalScrollY = modalScrollY;
  restorePageScroll(modalScrollY);
  return true;
}
function applyRoute(route = parseRouteFromHash(), { preserveScroll = false, preserveSearch = false } = {}) {
  const normalizedRoute = normalizeRoute(route || { type: "overview" });
  const normalizedRouteKey = appliedRouteKey(normalizedRoute);
  const preservePrimaryReturn = Boolean(isPrimaryRoute(normalizedRoute) && (modal?.open || modalOriginRoute));
  const shouldPreserveScroll = preserveScroll || preservePrimaryReturn;
  const shouldPreserveSearch = preserveSearch || preservePrimaryReturn;
  applyingRoute = true;
  try {
    if (isPrimaryRoute(normalizedRoute)) {
      rememberPrimaryRoute(normalizedRoute);
      closeDetailModalForPrimaryRoute();
    } else if (isDetailRoute(normalizedRoute)) {
      syncModalOriginRoute(normalizedRoute);
    }
    if (normalizedRoute.type === "overview") {
      activatePrimarySection("overview", { preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "search") {
      setSearchInputValue(globalSearch, normalizedRoute.query || "");
      setSearchInputValue(overviewSearch, normalizedRoute.query || "");
      setGlobalSearchScope(normalizedRoute.scope || "all");
      setOverviewSearchScope(normalizedRoute.scope || "all");
      openSearchResults({ replace: true, updateHash: false });
    } else if (normalizedRoute.type === "catalog") {
      openCategoryCatalog({ scope: normalizedRoute.scope || "all", updateHash: false, preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-release") {
      openCategoryReleaseDetail({ ...routeApplyOptions(normalizedRoute), preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-anime") {
      openCategoryAnimePage({ updateHash: false, preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-anime-episodes") {
      openCategoryAnimeEpisodesDetail({ ...routeApplyOptions(normalizedRoute), preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "detail" && normalizedRoute.id) {
      const hashId = normalizedRoute.id;
      const restoredContext = restoredModalContext(hashId);
      const restoredOriginRoute = routeSnapshot(restoredContext?.originRoute);
      if (restoredOriginRoute && isPrimaryRoute(restoredOriginRoute) && (!modalOriginRoute || (modalOriginRoute.type === "overview" && restoredOriginRoute.type !== "overview"))) {
        restoreDetailOriginPanel(restoredContext);
      }
      const restoredOptions = { ...(restoredContext?.options || {}), ...routeApplyOptions(normalizedRoute) };
      openDetailByKind(restoredContext?.kind || "", hashId, restoredOptions);
    }
  } finally {
    applyingRoute = false;
    lastAppliedRouteKey = normalizedRouteKey;
  }
  if (isPrimaryRoute(normalizedRoute)) {
    if (shouldPreserveScroll) restorePageScroll(modalScrollY);
    else stabilizePrimaryRouteScroll();
  }
}
document.querySelectorAll(".topbar > .brand, [data-sidebar-home]").forEach(brand => brand.addEventListener("click", event => {
  event.preventDefault();
  navigateToRoute({ type: "overview" }, { replace: true });
  setMobileMenuOpen(false);
}));
desktopSidebarToggle?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  setMobileMenuOpen(!document.body.classList.contains("menu-open"));
});
menuButton?.addEventListener("click", event => {
  event.stopPropagation();
  setMobileMenuOpen(!document.body.classList.contains("menu-open"));
});
mobileDrawerClose?.addEventListener("click", event => {
  event.preventDefault();
  setMobileMenuOpen(false);
  currentMenuTrigger()?.focus();
});
mobileDrawer?.addEventListener("click", event => {
  handleCategoryRouteClick(event);
});
desktopSidebar?.addEventListener("click", event => {
  if (handleCategoryRouteClick(event, { closeMobileMenu: false })) setMobileMenuOpen(false);
});
window.addEventListener("resize", () => {
  syncCatalogStickySearchState();
  positionSearchHelpPopovers();
  if (modal?.open) scheduleModalViewportSync();
  if (!activeModalTagButton) return;
  if (!modal?.open || !document.body.contains(activeModalTagButton)) {
    closeModalTagPopover();
    return;
  }
  positionModalTagPopover(activeModalTagButton);
});
window.visualViewport?.addEventListener("resize", scheduleModalViewportSync);
window.visualViewport?.addEventListener("scroll", scheduleModalViewportSync);
window.visualViewport?.addEventListener("resize", positionSearchHelpPopovers);
window.visualViewport?.addEventListener("scroll", positionSearchHelpPopovers);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && activeSearchPreview) {
    closeAllSearchPreviews();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && anySearchHelpPopoverIsOpen()) {
    closeSearchHelpPopovers();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && activeModalTagButton) {
    closeModalTagPopover();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) setMobileMenuOpen(false);
});
document.addEventListener("click", event => {
  searchHelpPopovers.forEach(controller => {
    if (controller.isOpen() && !controller.containsEventTarget(event)) controller.close();
  });
  if (activeModalTagButton && !event.target.closest(".modal-tag-info") && !event.target.closest(".modal-tag-popover")) closeModalTagPopover();
  if (!event.target.closest(".topbar") && !event.target.closest(".mobile-drawer") && !event.target.closest(".desktop-sidebar")) setMobileMenuOpen(false);
});

syncCatalogScopeState();
renderCatalogFilterChips();
const applyCurrentHashRoute = () => {
  const route = parseRouteFromHash();
  const canonicalHash = serializeRoute(route);
  const canonicalRouteKey = `${currentPathWithSearch()}${canonicalHash}`;
  try {
    if (canonicalRouteKey === lastAppliedRouteKey) return;
    if (window.location.hash !== canonicalHash) {
      try {
        history.replaceState(null, "", canonicalRouteKey);
      } catch {
        // URL canonicalization is best-effort; route application is the source of truth here.
      }
    }
    applyRoute(route);
  } finally {
    document.documentElement.classList.remove("route-booting");
  }
};
try {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
} catch {
  // Some embedded browsers can deny history mutations; routing still works.
}
applyCurrentHashRoute();
syncCatalogStickySearchState();
window.addEventListener("hashchange", applyCurrentHashRoute);
window.addEventListener("popstate", applyCurrentHashRoute);
