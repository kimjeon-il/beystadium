import { Buffer } from "node:buffer";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { xImageReview } from "../data/source/x-image-review.mjs";
import { xCatalogImagePath } from "./x-image-paths.mjs";

const SPECIAL_PRODUCT_IDS = {
  "bx00-es": "PRODUCT-X-BX-00-XTREME-STADIUM-LIGHT-PACKAGE",
  "bx00-ds": "PRODUCT-X-BX-00-DRANZER-SPIRAL-3-80T",
  "bx00-hc": "PRODUCT-X-BX-00-HELLS-SCYTHE-4-60T-GOLD",
  "bx00-lc": "PRODUCT-X-BX-00-LEON-CLAW-5-60P-GOLD",
  "bx00-se": "PRODUCT-X-BX-00-SHARK-EDGE-5-60GF-BLUE",
  "bx00-cg": "PRODUCT-X-BX-00-CUSTOM-GRIP-CLEAR-BLACK",
  "bx00-st01": "PRODUCT-X-BX-00-BEYBLADE-STICKER-01",
  "bx00-st02": "PRODUCT-X-BX-00-BEYBLADE-STICKER-02",
  "bx00-st03": "PRODUCT-X-BX-00-BEYBLADE-STICKER-03",
  "bx00-bit01": "PRODUCT-X-BX-00-F-T-B-N-BIT-SET-GOLD-BLACK",
  "bx00-dd": "PRODUCT-X-BX-00-DRAN-DAGGER-2-80GP-BLACK-GIANTS",
  "bx00-ds3": "PRODUCT-X-BX-00-DRANZER-SPIRAL-3-80T-BLACK",
  "bxa02": "PRODUCT-X-UX-00-ASIA-SPECIAL-DRAN-DECK-SET",
  "bx00-cdr": "PRODUCT-X-BX-00-COBALT-DRAKE-4-60F-CLEAR",
  "bx00-cc": "PRODUCT-X-UX-00-DRAN-BUSTER-1-60A",
  "bx00-mt": "PRODUCT-X-BX-00-MAMMOTH-TUSK-2-80E-BLACK",
  "bx00-drsh": "PRODUCT-X-BX-00-DRACIEL-SHIELD-7-60D",
  "ux00-db_bc": "PRODUCT-X-UX-00-DRAN-BUSTER-1-60A-FC-BARCELONA",
  "ux00-hs_bc": "PRODUCT-X-UX-00-BEY-KICKOFF-SET-FC-BARCELONA",
  "bx00-pw": "PRODUCT-X-BX-00-PHOENIX-SOAR-9-60GF-TATSUYA-KITANI",
  "bx00-25set": "PRODUCT-X-BX-00-BEYBLADE-25TH-ANNIVERSARY-SET",
  "bx00-drs": "PRODUCT-X-BX-00-DRIGER-SLASH-4-80P",
  "bx00-hch": "PRODUCT-X-BX-00-HELLS-CHAIN-5-60HT-BLACK",
  "bx00-cd": "PRODUCT-X-BX-00-COBALT-DRAGOON-2-60C-BLACK",
  "bx00-ld": "PRODUCT-X-BX-00-LIGHTNING-L-DRAGO-1-60F",
  "bx00-xc": "PRODUCT-X-BX-00-XENO-XCALIBUR-3-60GF",
  "bx00-mit": "PRODUCT-X-BX-00-IRON-MAN-4-80B-THANOS-4-60P",
  "bx00-msv": "PRODUCT-X-BX-00-SPIDER-MAN-3-60F-VENOM-3-80N",
  "bx00-sld": "PRODUCT-X-BX-00-LUKE-SKYWALKER-4-80B-DARTH-VADER-4-60P",
  "bx00-smm": "PRODUCT-X-BX-00-MANDALORIAN-3-60F-MOFF-GIDEON-3-80N",
  "bx00-tom": "PRODUCT-X-BX-00-OPTIMUS-PRIME-4-60P-MEGATRON-4-80B",
  "bx00-tos": "PRODUCT-X-BX-00-OPTIMUS-PRIMAL-3-60F-STARSCREAM-3-80N",
  "ux00-nm": "PRODUCT-X-UX-00-KNIGHT-MAIL-3-85BS-NAVY",
  "bx00-jtm": "PRODUCT-X-BX-00-T-REX-MOSASAURUS",
  "bx00-jsq": "PRODUCT-X-BX-00-SPINOSAURUS-QUETZALCOATLUS",
  "bx00-rl": "PRODUCT-X-BX-00-ROCK-LEONE-6-80GN",
  "cx00-pb": "PRODUCT-X-CX-00-PEGASUS-BLAST-A-TR-RED",
  "cx00-wa": "PRODUCT-X-CX-00-WIZARD-ARC-R-4-55LO-BLACK",
  "bx00-bit_silver_white": "PRODUCT-X-BX-00-F-T-B-N-BIT-SET-SILVER-WHITE",
  "bx00-emb": "PRODUCT-X-BX-00-BEY-EMBLEM-STICKER-01",
  "bx00-drgs": "PRODUCT-X-BX-00-DRAGOON-STORM-4-60RA",
  "ux00-ap_red": "PRODUCT-X-UX-00-AERO-PEGASUS-3-70A-RED",
  "bx00-ds_black": "PRODUCT-X-BX-00-DRAN-SWORD-1-60V-J-LEAGUE",
  "bx00-cd_white": "PRODUCT-X-BX-00-COBALT-DRAGOON-9-60F-J-LEAGUE",
  "bx00-sl": "PRODUCT-X-BX-00-STRING-LAUNCHER-B4-STORE-LIMITED-COLOR",
  "bx00-ss": "PRODUCT-X-BX-00-STORM-SPRIGGAN-2-70M",
  "ux00-ss": "PRODUCT-X-UX-00-SCORPIO-SPEAR-0-70Z-MAGENTA",
  "cx00-db": "PRODUCT-X-CX-00-DRAN-BRAVE-S-6-60V-BLACK",
  "ux00-samurai": "PRODUCT-X-UX-00-WARRIOR-SABER-5-60K-JAPAN-NATIONAL-FOOTBALL-TEAM",
  "cx00-ba": "PRODUCT-X-CX-00-BUGS-ANTLERS-B-2-60D-ORANGE",
  "cx00-kw": "PRODUCT-X-CX-00-KRAKEN-RIGGLE-S-3-70O-BLUE",
  "cx00-hf": "PRODUCT-X-CX-00-HORNET-PORT-R-7-60T-YELLOW",
  "cx00-drb": "PRODUCT-X-CX-00-DRAKE-BRAVE-G-4-70I-BLUE",
  "bx00-sp": "PRODUCT-X-BX-00-STORM-PEGASIS-3-70RA",
  "cx00-eva": "PRODUCT-X-CX-00-EVANGELION-DECK-SET",
  "cx00-tiga": "PRODUCT-X-CX-00-TIGA-RAGE-FT-3-60T"
};

const SOURCE_OVERRIDES = {
  "BEY-X-BX-00-DRAGOON-STORM-4-60RA": "02_product_components/077_bx00-25set/02_BXG00_02@1.png",
  "BEY-X-BX-00-STORM-PEGASIS-3-70RA": "02_product_components/077_bx00-25set/04_BXG00_04@1.png",
  "BEY-X-BX-00-VICTORY-VALKYRIE-2-60RA": "02_product_components/077_bx00-25set/06_BXG00_06@1.png",
  "BEY-X-BX-00-DRAN-SWORD-3-60F": "02_product_components/077_bx00-25set/08_BXG00_08@1.png",
  "PART-X-BLADE-VICTORY-VALKYRIE": "02_product_components/077_bx00-25set/05_BXG00_05@1.png"
};

const SOURCE_CLEAR_POINTS = {
  "PART-X-BLADE-OVER-BLADE-BRAKE": [[293, 354]],
  "PART-X-BLADE-OVER-BLADE-FLOW": [[293, 354]],
  "PART-X-BLADE-OVER-BLADE-GUARD": [[293, 354]],
  "PART-X-BLADE-OVER-BLADE-OUTER": [[293, 354]],
  "PART-X-BLADE-OVER-BLADE-PEAK": [[293, 354]]
};

const OFFICIAL_SOURCE_OVERRIDES = {
  "BEY-X-BX-00-DRAN-DAGGER-2-80GP": {
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG09_01@1.png",
    crop: [36, 146, 500, 532],
    excludeRects: [[385, 275, 464, 386]]
  },
  "BEY-X-CX-00-VALKYRIE-BOLT-S-4-70V": {
    url: "https://beyblade.takaratomy.co.jp/beyblade-x/news/_image/news250715_3@1x.webp",
    crop: [244, 0, 500, 250]
  }
};

const UNAVAILABLE_REASONS = {
  "BEY-X-BX-00-HELLS-SCYTHE-3-80F": "타카라토미·한국 공식 출처에 단독 제품 사진이 공개되지 않았다.",
  "BEY-X-BX-00-NINJA-KNIFE-4-60LF": "공식 게임 특전 홍보 이미지에는 패키지와 합성된 사진만 있다.",
  "BEY-X-BX-00-CROCO-CRUNCH-2-60Q": "타카라토미 공식 목록에는 출시 정보만 있고 단독 제품 사진이 없다.",
  "BEY-X-UX-00-WARRIOR-SABER-2-70L": "공식 특장판 홍보 이미지에는 문자·책 표지와 합성된 사진만 있다.",
  "PART-X-BLADE-NINJA-KNIFE": "공식 게임 특전 홍보 이미지에 개별 블레이드 사진이 없다.",
  "PART-X-BLADE-CROCO-CRUNCH": "타카라토미 공식 출처에 개별 블레이드 사진이 없다.",
  "PART-X-BLADE-WARRIOR-STEEL": "연결된 공식 제품 상세와 개별 부품 사진이 없다.",
  "PART-X-BLADE-LOCK-CHIP-RHINO": "공식 랜덤부스터 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-LOCK-CHIP-LEON": "연결된 공식 제품 상세와 개별 부품 사진이 없다.",
  "PART-X-BLADE-LOCK-CHIP-WHALE": "공식 랜덤부스터 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-LOCK-CHIP-VALKYRIE": "공식 한정판 홍보 이미지에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-LOCK-CHIP-BUGS": "공식 한정판 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-LOCK-CHIP-KRAKEN": "공식 한정판 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-LOCK-CHIP-HORNET": "공식 한정판 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-LOCK-CHIP-DRAKE": "공식 한정판 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-MAIN-BLADE-FANG": "연결된 공식 제품 상세와 개별 부품 사진이 없다.",
  "PART-X-BLADE-MAIN-BLADE-BOLT": "공식 한정판 홍보 이미지에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-MAIN-BLADE-ANTLERS": "공식 한정판 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-MAIN-BLADE-RIGGLE": "공식 한정판 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-MAIN-BLADE-PORT": "공식 한정판 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-ASSIST-BLADE-CHARGE": "공식 랜덤부스터 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-ASSIST-BLADE-GRAVITY": "공식 한정판 상세에 조립된 블레이드 사진만 있다.",
  "PART-X-BLADE-ASSIST-BLADE-MASSIVE": "공식 랜덤부스터 상세에 조립된 블레이드 사진만 있다."
};

const SOURCE_INDEX_OVERRIDES = {
  "BEY-X-UX-12-03-LEON-CLAW-0-80E": ["ux12", 5],
  "BEY-X-UX-12-04-PHOENIX-FEATHER-2-60N": ["ux12", 6],
  "BEY-X-UX-12-05-NINJA-SHADOW-3-80F": ["ux12", 4],

  "BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F": ["bx00-ld", 1],
  "BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F": ["bx00-ld", 3],
  "PART-X-BLADE-LIGHTNING-L-DRAGO-UPPER": ["bx00-ld", 2],
  "PART-X-BLADE-LIGHTNING-L-DRAGO-BARRAGE": ["bx00-ld", 4],

  "BEY-X-BX-00-IRON-MAN-4-80B": ["bx00-mit", 3],
  "BEY-X-BX-00-THANOS-4-60P": ["bx00-mit", 6],
  "PART-X-BLADE-IRON-MAN": ["bx00-mit", 3],
  "PART-X-BLADE-THANOS": ["bx00-mit", 6],
  "BEY-X-BX-00-SPIDER-MAN-3-60F": ["bx00-msv", 3],
  "BEY-X-BX-00-VENOM-3-80N": ["bx00-msv", 6],
  "PART-X-BLADE-SPIDER-MAN": ["bx00-msv", 3],
  "PART-X-BLADE-VENOM": ["bx00-msv", 6],
  "BEY-X-BX-00-LUKE-SKYWALKER-4-80B": ["bx00-sld", 3],
  "BEY-X-BX-00-DARTH-VADER-4-60P": ["bx00-sld", 6],
  "PART-X-BLADE-LUKE-SKYWALKER": ["bx00-sld", 3],
  "PART-X-BLADE-DARTH-VADER": ["bx00-sld", 6],
  "BEY-X-BX-00-THE-MANDALORIAN-3-60F": ["bx00-smm", 3],
  "BEY-X-BX-00-MOFF-GIDEON-3-80N": ["bx00-smm", 6],
  "PART-X-BLADE-THE-MANDALORIAN": ["bx00-smm", 3],
  "PART-X-BLADE-MOFF-GIDEON": ["bx00-smm", 6],
  "BEY-X-BX-00-OPTIMUS-PRIME-4-60P": ["bx00-tom", 3],
  "BEY-X-BX-00-MEGATRON-4-80B": ["bx00-tom", 6],
  "PART-X-BLADE-OPTIMUS-PRIME": ["bx00-tom", 3],
  "PART-X-BLADE-MEGATRON": ["bx00-tom", 6],
  "BEY-X-BX-00-OPTIMUS-PRIMAL-3-60F": ["bx00-tos", 3],
  "BEY-X-BX-00-STARSCREAM-3-80N": ["bx00-tos", 6],
  "PART-X-BLADE-OPTIMUS-PRIMAL": ["bx00-tos", 3],
  "PART-X-BLADE-STARSCREAM": ["bx00-tos", 6],
  "BEY-X-BX-00-T-REX-1-80GB": ["bx00-jtm", 3],
  "BEY-X-BX-00-MOSASAURUS-9-60U": ["bx00-jtm", 6],
  "PART-X-BLADE-T-REX": ["bx00-jtm", 3],
  "PART-X-BLADE-MOSASAURUS": ["bx00-jtm", 6],
  "BEY-X-BX-00-SPINOSAURUS-3-85A": ["bx00-jsq", 3],
  "BEY-X-BX-00-QUETZALCOATLUS-4-55D": ["bx00-jsq", 6],
  "PART-X-BLADE-SPINOSAURUS": ["bx00-jsq", 3],
  "PART-X-BLADE-QUETZALCOATLUS": ["bx00-jsq", 6],

  "BEY-X-UX-15-SHARK-SCALE-4-50UF": ["ux15", 2],
  "BEY-X-UX-15-TYRANNO-ROAR-1-70L": ["ux15", 6],
  "BEY-X-UX-15-HELLS-BRAVE-J-3-60GF": ["ux15", 10],
  "PART-X-BLADE-SHARK-SCALE": ["ux15", 3],
  "PART-X-BLADE-TYRANNO-ROAR": ["ux15", 7],
  "PART-X-RATCHET-1-70": ["ux15", 8],
  "PART-X-BIT-UF": ["ux15", 5],

  "BEY-X-BX-35-04-WIZARD-ROD-1-60R": ["bx35", 7],
  "BEY-X-BX-35-06-VIPER-TAIL-5-70D": ["bx35", 5],

  "BEY-X-BX-46-GORE-TACKLE-7-70T": ["bx46", 4],
  "BEY-X-BX-46-COBALT-DRAKE-9-60R": ["bx46", 3],
  "BEY-X-BX-37-BEAR-SCRATCH-5-60F": ["bx37", 3],
  "PART-X-BLADE-BEAR-SCRATCH": ["bx37", 4],
  "PART-X-BLADE-GORE-TACKLE": ["bx46", 3],
  "PART-X-RATCHET-7-70": ["ux10", 10],
  "PART-X-BIT-R": ["bx20", 5],

  "BEY-X-BX-48-02-SHARK-EDGE-4-70E": ["bx48", 4],
  "BEY-X-BX-48-03-MAMMOTH-TUSK-7-60S": ["bx48", 3],
  "BEY-X-BX-48-04-HELLS-SCYTHE-3-85GB": ["bx48", 6],
  "BEY-X-BX-48-05-DRAN-BUSTER-2-80Q": ["bx48", 5],

  "BEY-X-CX-11-EMPEROR-MIGHT-H-OP": ["cx11", 1],
  "BEY-X-CX-11-SHARK-GILL-5-60FB": ["cx11", 8],
  "BEY-X-CX-11-GOLEM-ROCK-M-85HN": ["cx11", 12],
  "PART-X-BLADE-LOCK-CHIP-EMPEROR": ["cx11", 4],
  "PART-X-BLADE-MAIN-BLADE-MIGHT": ["cx11", 5],
  "PART-X-BLADE-ASSIST-BLADE-HEAVY": ["cx11", 6],
  "PART-X-BIT-OP": ["cx11", 7],
  "PART-X-BLADE-SHARK-GILL": ["cx11", 8],

  "BEY-X-CX-05-01-HELLS-REAPER-T-4-70K": ["cx05", 2],
  "BEY-X-UX-16-01-CLOCK-MIRAGE-9-65B": ["ux16", 2],

  "BEY-X-CX-00-EVA-ARC-B-0-70E": ["cx00-eva", 1],
  "BEY-X-CX-00-EVA-BRAVE-A-1-70V": ["cx00-eva", 8],
  "BEY-X-CX-00-EVA-BRUSH-T-2-70A": ["cx00-eva", 15],
  "PART-X-BLADE-LOCK-CHIP-EVA": ["cx00-eva", 3],

  "PART-X-BLADE-DRAN-DAGGER": ["bx20", 3],
  "PART-X-BLADE-PHOENIX-FEATHER": ["ux12", 5],
  "PART-X-BLADE-PTERA-SWING": ["ux10", 6],
  "PART-X-BLADE-PHOENIX-RUDDER": ["ux07", 3],
  "PART-X-BIT-G": ["ux07", 5],
  "PART-X-RATCHET-3-85": ["ux10", 4],
  "PART-X-BIT-BS": ["ux10", 5],

  "PART-X-BLADE-VIPER-TAIL": ["bx16", 5],
  "PART-X-RATCHET-5-80": ["bx16", 6],
  "PART-X-BIT-O": ["bx16", 7],
  "PART-X-BLADE-WYVERN-GALE": ["bx24", 7],
  "PART-X-BIT-GB": ["bx24", 8],
  "PART-X-BLADE-SPHINX-COWL": ["bx27", 5],
  "PART-X-BLADE-TYRANNO-BEAT": ["bx31", 7],
  "PART-X-BIT-Q": ["bx31", 9],
  "PART-X-BLADE-BLACK-TURTLE": ["bx35", 8],
  "PART-X-BIT-D": ["bx35", 9],
  "PART-X-BLADE-WHALE-WAVE": ["bx36", 5],
  "PART-X-BLADE-SHELTER-DRAKE": ["bx39", 5],
  "PART-X-RATCHET-7-80": ["bx39", 6],
  "PART-X-BIT-GP": ["bx39", 7],
  "PART-X-BLADE-NINJA-SHADOW": ["ux05", 5],
  "PART-X-RATCHET-1-80": ["ux05", 6],
  "PART-X-BIT-MN": ["ux05", 7],
  "PART-X-BLADE-GHOST-CIRCLE": ["ux12", 8],
  "PART-X-RATCHET-0-80": ["ux12", 9],
  "PART-X-BLADE-CLOCK-MIRAGE": ["ux16", 5],
  "PART-X-RATCHET-9-65": ["ux16", 6],
  "PART-X-BLADE-MUMMY-CURSE": ["ux18", 8],
  "PART-X-RATCHET-7-55": ["ux18", 9],

  "PART-X-BLADE-LOCK-CHIP-HELLS": ["cx05", 9],
  "PART-X-BLADE-MAIN-BLADE-REAPER": ["cx05", 10],
  "PART-X-BLADE-LOCK-CHIP-FOX": ["cx06", 6],
  "PART-X-BLADE-MAIN-BLADE-BRUSH": ["cx06", 7],
  "PART-X-BLADE-ASSIST-BLADE-JAGI": ["cx06", 8],
  "PART-X-RATCHET-9-70": ["ux07", 4],
  "PART-X-BIT-GR": ["cx06", 10],
  "PART-X-BLADE-LOCK-CHIP-KERBEROS": ["cx08", 9],
  "PART-X-BLADE-MAIN-BLADE-FLAME": ["cx08", 10],
  "PART-X-BLADE-ASSIST-BLADE-WHEEL": ["cx08", 11],
  "PART-X-BIT-WB": ["cx08", 12],
  "PART-X-BLADE-LOCK-CHIP-UNICORN": ["cx17", 9],
  "PART-X-BLADE-MAIN-BLADE-DELTA": ["cx17", 10],
  "PART-X-BLADE-OVER-BLADE-PEAK": ["cx17", 11],
  "PART-X-BLADE-ASSIST-BLADE-ODD": ["cx17", 12],
  "PART-X-BIT-GU": ["cx17", 13],
  "PART-X-BLADE-LOCK-CHIP-BRACHIO": ["cx18", 6],
  "PART-X-BLADE-MAIN-BLADE-WHIP": ["cx18", 7],
  "PART-X-BLADE-OVER-BLADE-OUTER": ["cx18", 8],
  "PART-X-BIT-NR": ["cx18", 11],
  "PART-X-BLADE-HEAVENS-RING": ["bx50", 8],
  "PART-X-BIT-DS": ["bx50", 10],

  "PART-X-BLADE-LOCK-CHIP-SOL": ["cx09", 6],
  "PART-X-BLADE-MAIN-BLADE-ECLIPSE": ["cx09", 7],
  "PART-X-BLADE-ASSIST-BLADE-DUAL": ["cx09", 8],
  "PART-X-RATCHET-5-70": ["ux03", 3],
  "PART-X-BIT-TK": ["cx09", 11]
};

const TOP_FIRST_LINEUP_SLUGS = new Set(["bx14", "bx24", "bx31"]);

const ROOT_ARG = process.argv.find(argument => argument.startsWith("--source="));
const WRITE = process.argv.includes("--write");
const EMIT_SOURCE = process.argv.includes("--emit-source");
const SOURCE_ROOT = path.resolve(
  ROOT_ARG?.slice("--source=".length)
  || process.env.BEYSTADIUM_X_IMAGE_SOURCE
  || "D:/베이블레이드/1. 완구/자료/4. 베이블레이드 엑스/beyblade_x_downloader_no_python/beyblade_x_images"
);
const OUTPUT_PATH = path.resolve(".cache/x-image-map-candidates.json");
const SOURCE_OUTPUT_PATH = path.resolve("data/source/x-images.mjs");
const SOURCE_PARTS_DIR = path.join(SOURCE_ROOT, "02_product_components");
const SUPPLEMENT_DIR = path.resolve(".cache/x-official-supplement");

const xBeys = beyItems.filter(item => item.series === "x");
const xParts = partItems.filter(item => item.series === "x");
const itemById = new Map([...xBeys, ...xParts].map(item => [item.id, item]));
const productById = new Map(productItems.filter(item => item.series === "x").map(item => [item.id, item]));
const reviewedById = new Map(xImageReview.map(entry => [entry.id, entry]));
if (reviewedById.size !== xImageReview.length) {
  throw new Error("Duplicate reviewed X image mapping IDs");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted) {
      if (character === "\"" && text[index + 1] === "\"") {
        field += "\"";
        index += 1;
      } else if (character === "\"") {
        quoted = false;
      } else {
        field += character;
      }
    } else if (character === "\"") {
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }
  if (field || row.length) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }
  const [headers, ...values] = rows.filter(current => current.some(Boolean));
  return values.map(current => Object.fromEntries(headers.map((header, index) => [header, current[index] || ""])));
}

function standardProductId(slug) {
  const match = slug.match(/^(bx|ux|cx)(\d{2})$/i);
  if (!match) return "";
  return `PRODUCT-X-${match[1].toUpperCase()}-${match[2]}`;
}

function productIdForSlug(slug) {
  return SPECIAL_PRODUCT_IDS[slug] || standardProductId(slug);
}

function imageGroupName(fileName) {
  const stem = path.basename(fileName, path.extname(fileName)).replace(/^\d+_/, "").replace(/@1$/, "");
  return stem.replace(/_\d+$/, "");
}

function sourceRelative(filePath) {
  return path.relative(SOURCE_ROOT, filePath).split(path.sep).join("/");
}

function outputRelative(item) {
  return xCatalogImagePath(item);
}

async function sha256(filePath) {
  const bytes = await readFile(filePath);
  return createHash("sha256").update(bytes).digest("hex");
}

async function downloadOfficialSource(id, url) {
  const extension = path.extname(new URL(url).pathname) || ".img";
  const filePath = path.join(SUPPLEMENT_DIR, `${id.toLowerCase()}${extension}`);
  try {
    await stat(filePath);
    return filePath;
  } catch {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Official image download failed (${response.status}): ${url}`);
    }
    await mkdir(SUPPLEMENT_DIR, { recursive: true });
    await writeFile(filePath, Buffer.from(await response.arrayBuffer()));
    return filePath;
  }
}

function pageBeyIds(product) {
  if (Array.isArray(product?.lineupPool) && product.lineupPool.length) {
    return product.lineupPool.filter(id => id.startsWith("BEY-X-"));
  }
  return (product?.releases?.jp?.composition || [])
    .map(entry => entry.target)
    .filter(id => id?.startsWith("BEY-X-"));
}

function pageToolCount(product) {
  return (product?.releases?.jp?.composition || [])
    .filter(entry => entry.target?.startsWith("TOOLS-X-"))
    .reduce((total, entry) => total + (Number.parseInt(entry.quantity, 10) || 1), 0);
}

function isLimitedPage(row) {
  return /限定|Ver\.|メタルコート|カラー|記念|コラボ|代表/.test(row.title);
}

function partFilesForSingleBey(files, bey, product) {
  if (!bey) return [];
  if ((product?.releases?.jp?.composition || []).some(entry => entry.target?.startsWith("PART-X-"))) {
    return [];
  }
  const parts = bey.parts || [];
  const isCustom = parts.some(id => itemById.get(id)?.xBladeRole);
  const start = isCustom ? 2 : 1;
  return parts.map((id, index) => ({ id, file: files[start + index] })).filter(entry => entry.file);
}

function mapLineupFiles(files, beyIds, slug) {
  if (!beyIds.length || !files.length) return { beys: [], parts: [] };
  const topFirst = TOP_FIRST_LINEUP_SLUGS.has(slug);
  const beys = topFirst
    ? beyIds.map((id, index) => ({ id, file: files[index] }))
    : [
        { id: beyIds[0], file: files[0] },
        ...beyIds.slice(1).map((id, index) => ({ id, file: files[index + 2] }))
      ];
  return { beys: beys.filter(entry => entry.file), parts: [] };
}

function mapSetBeyFiles(files, beyIds, product) {
  if (!beyIds.length) return [];
  if (beyIds.length === 1) return files[0] ? [{ id: beyIds[0], file: files[0] }] : [];

  const grouped = new Map();
  for (const file of files) {
    const group = imageGroupName(file);
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group).push(file);
  }
  const groups = [...grouped.values()];
  if (groups.length === beyIds.length) {
    return beyIds.map((id, index) => ({ id, file: groups[index]?.[0] })).filter(entry => entry.file);
  }

  const toolCount = pageToolCount(product);
  if (files.length <= beyIds.length + toolCount + 3) {
    return beyIds.map((id, index) => ({ id, file: files[index] })).filter(entry => entry.file);
  }

  let cursor = 0;
  const result = [];
  for (const id of beyIds) {
    const bey = itemById.get(id);
    const blockSize = 1 + (bey?.parts?.length || 3);
    if (files[cursor]) result.push({ id, file: files[cursor] });
    cursor += blockSize;
  }
  return result;
}

async function main() {
  const manifestText = await readFile(path.join(SOURCE_ROOT, "manifest.csv"), "utf8");
  const manifest = parseCsv(manifestText);
  const folders = await readdir(SOURCE_PARTS_DIR, { withFileTypes: true });
  const folderBySlug = new Map(
    folders.filter(entry => entry.isDirectory()).map(entry => [entry.name.replace(/^\d+_/, ""), entry.name])
  );
  const candidates = [];
  const pages = [];

  for (const row of manifest) {
    const productId = productIdForSlug(row.slug);
    const product = productById.get(productId);
    const folder = folderBySlug.get(row.slug);
    const folderPath = folder ? path.join(SOURCE_PARTS_DIR, folder) : "";
    const files = folderPath
      ? (await readdir(folderPath)).filter(name => /\.png$/i.test(name)).sort().map(name => path.join(folderPath, name))
      : [];
    const beyIds = pageBeyIds(product);
    let pageCandidates = { beys: [], parts: [] };

    if (product?.lineupPool?.length) {
      pageCandidates = mapLineupFiles(files, beyIds, row.slug);
    } else {
      pageCandidates.beys = mapSetBeyFiles(files, beyIds, product);
      if (beyIds.length === 1) {
        pageCandidates.parts = partFilesForSingleBey(files, itemById.get(beyIds[0]), product);
      }
    }

    for (const entry of [...pageCandidates.beys, ...pageCandidates.parts]) {
      const item = itemById.get(entry.id);
      if (!item || !entry.file) continue;
      candidates.push({
        id: entry.id,
        kind: item.type === "bey" ? "bey" : "part",
        productId,
        slug: row.slug,
        limited: isLimitedPage(row),
        source: sourceRelative(entry.file),
        sourceSha256: await sha256(entry.file),
        image: outputRelative(item)
      });
    }

    pages.push({
      slug: row.slug,
      status: row.status,
      productId,
      productFound: Boolean(product),
      sourceFolder: folder || "",
      fileCount: files.length,
      beyIds,
      mappedBeys: pageCandidates.beys.map(entry => entry.id),
      mappedParts: pageCandidates.parts.map(entry => entry.id)
    });
  }

  const selected = new Map();
  for (const candidate of candidates) {
    const current = selected.get(candidate.id);
    if (!current || (current.limited && !candidate.limited)) selected.set(candidate.id, candidate);
  }
  for (const [id, source] of Object.entries(SOURCE_OVERRIDES)) {
    const item = itemById.get(id);
    if (!item) throw new Error(`Unknown SOURCE_OVERRIDES item: ${id}`);
    const filePath = path.join(SOURCE_ROOT, ...source.split("/"));
    await stat(filePath);
    selected.set(id, {
      id,
      kind: item.type === "bey" ? "bey" : "part",
      productId: "",
      slug: "manual-override",
      limited: false,
      source,
      sourceSha256: await sha256(filePath),
      image: outputRelative(item)
    });
  }
  for (const [id, [slug, oneBasedIndex]] of Object.entries(SOURCE_INDEX_OVERRIDES)) {
    const item = itemById.get(id);
    if (!item) throw new Error(`Unknown SOURCE_INDEX_OVERRIDES item: ${id}`);
    const folder = folderBySlug.get(slug);
    if (!folder) throw new Error(`Unknown SOURCE_INDEX_OVERRIDES slug: ${slug}`);
    const folderPath = path.join(SOURCE_PARTS_DIR, folder);
    const files = (await readdir(folderPath)).filter(name => /\.png$/i.test(name)).sort();
    const fileName = files[oneBasedIndex - 1];
    if (!fileName) throw new Error(`Missing SOURCE_INDEX_OVERRIDES file: ${slug} #${oneBasedIndex}`);
    const filePath = path.join(folderPath, fileName);
    selected.set(id, {
      id,
      kind: item.type === "bey" ? "bey" : "part",
      productId: "",
      slug: "manual-index-override",
      limited: false,
      source: sourceRelative(filePath),
      sourceSha256: await sha256(filePath),
      image: outputRelative(item)
    });
  }
  for (const [id, override] of Object.entries(OFFICIAL_SOURCE_OVERRIDES)) {
    const item = itemById.get(id);
    if (!item) throw new Error(`Unknown OFFICIAL_SOURCE_OVERRIDES item: ${id}`);
    const filePath = await downloadOfficialSource(id, override.url);
    selected.set(id, {
      id,
      kind: item.type === "bey" ? "bey" : "part",
      productId: "",
      slug: "official-source-override",
      limited: true,
      source: override.url,
      sourceFile: filePath,
      sourceCrop: override.crop,
      sourceExcludeRects: override.excludeRects,
      keepLargestComponent: override.keepLargestComponent,
      sourceSha256: await sha256(filePath),
      image: outputRelative(item)
    });
  }
  for (const review of xImageReview) {
    const item = itemById.get(review.id);
    if (!item) throw new Error(`Unknown reviewed X image item: ${review.id}`);
    const expectedImage = review.sourceKind === "user-approved-generated-front"
      ? `assets/images/x/beys/${review.id.toLowerCase()}/front.webp`
      : outputRelative(item);
    if (review.image !== expectedImage) {
      throw new Error(`${review.id}: reviewed output path changed`);
    }
    const source = review.sourcePath || review.sourceUrl;
    if (!source) throw new Error(`${review.id}: reviewed source is missing`);
    const filePath = review.sourcePath
      ? (review.sourcePath.startsWith("data/source/")
        ? path.resolve(review.sourcePath)
        : path.join(SOURCE_ROOT, ...review.sourcePath.split("/")))
      : await downloadOfficialSource(review.id, review.sourceUrl);
    await stat(filePath);
    const sourceSha256 = await sha256(filePath);
    if (sourceSha256 !== review.sourceSha256) {
      throw new Error(`${review.id}: reviewed source SHA-256 changed`);
    }
    selected.set(review.id, {
      id: review.id,
      kind: item.type === "bey" ? "bey" : "part",
      productId: "",
      slug: "reviewed-source",
      limited: false,
      source,
      ...(review.sourceUrl ? { sourceFile: filePath } : {}),
      sourceSha256,
      image: review.image,
      ...(review.sourceCrop ? { sourceCrop: review.sourceCrop } : {}),
      ...(review.sourceExcludeRects ? { sourceExcludeRects: review.sourceExcludeRects } : {}),
      ...(review.sourceClearPoints ? { sourceClearPoints: review.sourceClearPoints } : {}),
      ...(review.keepLargestComponent ? { keepLargestComponent: true } : {}),
      ...(review.sourceKind ? { sourceKind: review.sourceKind } : {}),
      ...(review.backgroundRemoval ? { backgroundRemoval: review.backgroundRemoval } : {}),
      ...(review.backgroundThreshold ? { backgroundThreshold: review.backgroundThreshold } : {}),
      ...(review.backgroundChroma ? { backgroundChroma: review.backgroundChroma } : {}),
      ...(review.foregroundErode ? { foregroundErode: review.foregroundErode } : {}),
      ...(review.targetForegroundSize ? { targetForegroundSize: review.targetForegroundSize } : {}),
      ...(review.normalizationInput ? { normalizationInput: review.normalizationInput } : {}),
      ...(review.preserveSourcePixels ? { preserveSourcePixels: true } : {})
    });
  }
  const selectedEntries = [...selected.values()]
    .map(entry => {
      const sourceClearPoints = entry.sourceClearPoints
        ?? SOURCE_CLEAR_POINTS[entry.id]
        ?? (entry.id.startsWith("PART-X-RATCHET-") ? [[293, 354]] : undefined);
      return {
        ...entry,
        ...(sourceClearPoints ? { sourceClearPoints } : {})
      };
    })
    .sort((left, right) => left.id.localeCompare(right.id));
  const mappedIds = new Set(selectedEntries.map(entry => entry.id));
  const unreviewedIds = selectedEntries
    .filter(entry => !reviewedById.has(entry.id))
    .map(entry => entry.id);
  const missingBeys = xBeys.filter(item => !mappedIds.has(item.id)).map(item => item.id);
  const missingParts = xParts.filter(item => !mappedIds.has(item.id)).map(item => item.id);
  const report = {
    sourceRoot: SOURCE_ROOT,
    totals: {
      beys: xBeys.length,
      parts: xParts.length,
      mappedBeys: selectedEntries.filter(entry => entry.kind === "bey").length,
      mappedParts: selectedEntries.filter(entry => entry.kind === "part").length,
      reviewedMappings: selectedEntries.length - unreviewedIds.length,
      unreviewedMappings: unreviewedIds.length,
      missingBeys: missingBeys.length,
      missingParts: missingParts.length
    },
    selected: selectedEntries,
    unreviewedIds,
    missingBeys,
    missingParts,
    pages
  };

  if (WRITE) {
    await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await writeFile(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  }
  if (EMIT_SOURCE) {
    if (unreviewedIds.length) {
      throw new Error(`Unreviewed X image mappings: ${unreviewedIds.join(", ")}`);
    }
    const unavailable = [...missingBeys, ...missingParts].map(id => {
      const reason = UNAVAILABLE_REASONS[id];
      if (!reason) throw new Error(`Missing unavailable-image reason: ${id}`);
      return { id, reason };
    });
    const mappings = selectedEntries.map(entry => ({
      id: entry.id,
      image: entry.image,
      ...(entry.source.startsWith("http")
        ? { sourceUrl: entry.source }
        : { sourcePath: entry.source }),
      sourceSha256: entry.sourceSha256,
      ...(entry.sourceCrop ? { sourceCrop: entry.sourceCrop } : {}),
      ...(entry.sourceExcludeRects ? { sourceExcludeRects: entry.sourceExcludeRects } : {}),
      ...(entry.sourceClearPoints ? { sourceClearPoints: entry.sourceClearPoints } : {}),
      ...(entry.keepLargestComponent ? { keepLargestComponent: true } : {}),
      ...(entry.sourceKind ? { sourceKind: entry.sourceKind } : {}),
      ...(entry.backgroundRemoval ? { backgroundRemoval: entry.backgroundRemoval } : {}),
      ...(entry.backgroundThreshold ? { backgroundThreshold: entry.backgroundThreshold } : {}),
      ...(entry.backgroundChroma ? { backgroundChroma: entry.backgroundChroma } : {}),
      ...(entry.foregroundErode ? { foregroundErode: entry.foregroundErode } : {}),
      ...(entry.targetForegroundSize ? { targetForegroundSize: entry.targetForegroundSize } : {}),
      ...(entry.normalizationInput ? { normalizationInput: entry.normalizationInput } : {}),
      ...(entry.preserveSourcePixels ? { preserveSourcePixels: true } : {})
    }));
    const moduleSource = `const xImageMappings = ${JSON.stringify(mappings, null, 2)};\n\n`
      + `const xImageUnavailable = ${JSON.stringify(unavailable, null, 2)};\n\n`
      + `function applyXImages(items) {\n`
      + `  const imageById = new Map(xImageMappings.map(entry => [entry.id, entry.image]));\n`
      + `  for (const item of items) {\n`
      + `    const image = imageById.get(item.id);\n`
      + `    if (image) item.image = image;\n`
      + `  }\n`
      + `}\n\n`
      + `export { xImageMappings, xImageUnavailable, applyXImages };\n`;
    await writeFile(SOURCE_OUTPUT_PATH, moduleSource);
  }
  process.stdout.write(`${JSON.stringify(report.totals, null, 2)}\n`);
  if (!WRITE) {
    process.stdout.write(`Use --write to save ${OUTPUT_PATH}\n`);
  }
}

await stat(SOURCE_ROOT);
await main();
