import { expect } from "@playwright/test";

const X_ASSET_CACHE_VERSION = "20260819-x-bey-canonical-image-paths";

const consoleErrors = page => {
  const errors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", error => errors.push(error.message));
  return errors;
};

const injectRegionalProductPreviewImages = async page => {
  await page.route("**/assets/images/beys/storm-pegasis*.png", route => route.fulfill({
    status: 200,
    contentType: "image/svg+xml",
    body: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="#94a3b8"/></svg>'
  }));
  await page.route("**/data/runtime/series/metal-fight.json*", async route => {
    const response = await route.fetch();
    const payload = await response.json();
    const product = payload.productItems?.find(item => item.id === "PRODUCT-METAL-FIGHT-BB-28");
    if (product?.releases?.kr && product?.releases?.jp) {
      product.releases.kr.image = "assets/images/beys/storm-pegasis.png";
      product.releases.jp.image = "assets/images/beys/storm-pegasis-stardust.png";
    }
    await route.fulfill({ response, json: payload });
  });
};

const expectFocusIndicator = async locator => {
  const readIndicator = element => {
    const style = getComputedStyle(element);
    return {
      boxShadow: style.boxShadow,
      outlineStyle: style.outlineStyle,
      outlineWidth: style.outlineWidth,
      focusVisible: element.matches(":focus-visible")
    };
  };
  const before = await locator.evaluate(readIndicator);
  await locator.press("Tab");
  await locator.focus();
  await expect(locator).toBeFocused();
  const after = await locator.evaluate(readIndicator);
  const visibleOutline = after.outlineStyle !== "none" && Number.parseFloat(after.outlineWidth) > 0;
  expect(after.focusVisible).toBe(true);
  expect(after.boxShadow !== before.boxShadow || visibleOutline).toBe(true);
};

const expectActionRowFocusIndicator = async row => {
  const action = row.locator(".table-list-row-action");
  const before = await row.evaluate(element => getComputedStyle(element).outlineWidth);
  await action.focus();
  await expect(action).toBeFocused();
  const after = await row.evaluate(element => ({
    outlineStyle: getComputedStyle(element).outlineStyle,
    outlineWidth: getComputedStyle(element).outlineWidth,
    focusVisible: element.matches(":has(.table-list-row-action:focus-visible)")
  }));
  expect(after.focusVisible).toBe(true);
  expect(after.outlineStyle).not.toBe("none");
  expect(Number.parseFloat(after.outlineWidth)).toBeGreaterThan(Number.parseFloat(before));
};

const expectModalBackAtShellTopLeft = async backButton => {
  await expect(backButton).toBeVisible();
  const geometry = await backButton.evaluate(button => {
    const shell = button.closest(".modal-inner");
    const rect = button.getBoundingClientRect();
    return {
      compact: window.matchMedia("(max-width: 39.999rem)").matches,
      parentIsShell: button.parentElement === shell,
      offsetParentIsShell: button.offsetParent === shell,
      left: Math.round(button.offsetLeft),
      top: Math.round(button.offsetTop),
      viewportLeft: Math.round(rect.left),
      viewportTop: Math.round(rect.top),
      position: getComputedStyle(button).position
    };
  });
  if (geometry.compact) {
    expect(geometry.parentIsShell).toBe(true);
    expect(geometry.offsetParentIsShell).toBe(true);
    expect(geometry.position).toBe("absolute");
    expect(geometry.left).toBe(11);
    expect(geometry.top).toBe(11);
    expect(Math.abs(geometry.viewportLeft - 19)).toBeLessThanOrEqual(2);
    expect(Math.abs(geometry.viewportTop - 19)).toBeLessThanOrEqual(2);
    return;
  }
  expect(geometry).toMatchObject({
    compact: false,
    parentIsShell: true,
    offsetParentIsShell: true,
    left: 18,
    top: 18,
    position: "absolute"
  });
};

const animeLayoutSnapshot = page => page.evaluate(() => {
  const snapshot = selector => {
    const element = document.querySelector(selector);
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return {
      display: style.display,
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      backgroundColor: style.backgroundColor,
      borderTopStyle: style.borderTopStyle,
      columnGap: style.columnGap,
      gridTemplateColumns: style.gridTemplateColumns
    };
  };
  return {
    control: snapshot(".anime-control-bar"),
    collection: snapshot(".anime-combined"),
    section: snapshot(".anime-subsection"),
    query: snapshot(".anime-query-row"),
    grid: snapshot("#animeCharacterGrid"),
    card: snapshot("#animeCharacterGrid .anime-character-card")
  };
});

const tableListTitleSnapshot = (page, selector) => page.locator(selector).first().evaluate(element => {
  const rounded = value => Math.round(value * 100) / 100;
  const rect = element.getBoundingClientRect();
  const cellRect = element.closest("td")?.getBoundingClientRect();
  const rowRect = element.closest("tr")?.getBoundingClientRect();
  const style = getComputedStyle(element);
  return {
    display: style.display,
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
    color: style.color,
    overflow: style.overflow,
    textOverflow: style.textOverflow,
    whiteSpace: style.whiteSpace,
    width: rounded(rect.width),
    height: rounded(rect.height),
    cellWidth: rounded(cellRect?.width || 0),
    rowHeight: rounded(rowRect?.height || 0)
  };
});

const expectTableListTitleSnapshot = (actual, expected) => {
  const { rowHeight: actualRowHeight, ...actualStable } = actual;
  const { rowHeight: expectedRowHeight, ...expectedStable } = expected;
  expect(actualStable).toEqual(expectedStable);
  expect(Math.abs(actualRowHeight - expectedRowHeight)).toBeLessThanOrEqual(.02);
};

export {
  X_ASSET_CACHE_VERSION,
  animeLayoutSnapshot,
  consoleErrors,
  expectActionRowFocusIndicator,
  expectFocusIndicator,
  expectModalBackAtShellTopLeft,
  expectTableListTitleSnapshot,
  injectRegionalProductPreviewImages,
  tableListTitleSnapshot
};
