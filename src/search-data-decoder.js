const chunkNames = { m: "metal-fight", b: "burst", x: "x", a: "anime", o: "common" };
const compactValue = value => value === "" || value === null ? undefined : value;
const compactRelease = values => values ? {
  status: compactValue(values[0]),
  no: compactValue(values[1]),
  name: compactValue(values[2]),
  sale: compactValue(values[3]),
  kind: compactValue(values[4]),
  releaseDate: compactValue(values[5]),
  price: values[6] ?? ""
} : undefined;
const cleanObject = value => Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined));
const decodeSearchEntry = values => {
  if (!Array.isArray(values)) return values;
  const kind = values[0];
  if (kind === "c") return {
    kind: "catalog-item",
    chunk: chunkNames[values[1]] || values[1],
    item: cleanObject({
      id: values[2], series: values[3], type: values[4], structure: compactValue(values[5]),
      name: values[6], jpName: compactValue(values[7]), en: compactValue(values[8]), sub: compactValue(values[9]),
      no: compactValue(values[10]), productNo: compactValue(values[11]), category: compactValue(values[12]),
      battleType: compactValue(values[13]), spin: compactValue(values[14]), xLine: compactValue(values[15]),
      xBladeRole: compactValue(values[16]), searchTags: compactValue(values[17]), _order: values[18]
    })
  };
  if (kind === "t") return {
    kind: "tools",
    chunk: chunkNames[values[1]] || values[1],
    item: cleanObject({
      id: values[2], series: values[3], type: compactValue(values[4]), name: values[5], jpName: compactValue(values[6]),
      en: compactValue(values[7]), no: compactValue(values[8]), productNo: compactValue(values[9]),
      category: compactValue(values[10]), desc: compactValue(values[11]), _order: values[12]
    })
  };
  if (kind === "p") return {
    kind: "product",
    chunk: chunkNames[values[1]] || values[1],
    item: cleanObject({
      id: values[2], series: values[3], no: compactValue(values[4]), name: compactValue(values[5]), _order: values[6],
      releases: cleanObject({ kr: compactRelease(values[7]), jp: compactRelease(values[8]) }),
      _compositionSearchText: compactValue(values[9])
    })
  };
  if (kind === "a") return {
    id: values[1], kind: "anime", chunk: "anime", index: values[2],
    item: {
      no: values[3], season: values[4], titles: { kr: values[5], jp: values[6] },
      airDates: { kr: values[7], jp: values[8] }, note: values[9]
    }
  };
  if (kind === "k" || kind === "g") return {
    kind: kind === "k" ? "book" : "game",
    chunk: "common",
    item: { id: values[1], name: values[2], en: values[3], category: values[4], desc: values[5], _order: values[6] }
  };
  return null;
};

export { decodeSearchEntry };
