const codedPartNameTypes = new Set(["track", "bottom", "4dbottom", "disk", "coredisk", "frame", "dbdisk", "dbarmor", "driver", "bit", "superkingchassis"]);
const codedXBladeRoles = new Set(["assistBlade", "overBlade"]);
const isCodedPartName = item => codedPartNameTypes.has(item?.type) || (
  item?.series === "x" && codedXBladeRoles.has(item?.xBladeRole)
);
const partKoName = item => {
  if (!isCodedPartName(item)) return "";
  const detail = item.sub || "";
  return detail.includes("높이") ? "" : detail;
};

// One canonical name for both part detail headings and Bey relation badges.
const partDetailDisplayName = (item, region = "kr") => {
  const displayName = region === "jp" ? item.jpName || item.name || "" : item.name || "";
  const numericTrack = item.type === "track" && /^\d+$/.test(item.name);
  if (!isCodedPartName(item) || numericTrack) return displayName;
  return region === "jp" && item.jpName ? displayName : partKoName(item);
};

export { isCodedPartName, partKoName, partDetailDisplayName };
