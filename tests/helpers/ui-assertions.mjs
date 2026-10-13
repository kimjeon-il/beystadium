import { expect } from "@playwright/test";

const consoleErrors = page => {
  const errors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", error => errors.push(error.message));
  return errors;
};

const injectRegionalProductPreviewImages = async page => {
  await page.route(/\/assets\/images\/beys\/storm-pegasis[^/?]*\.png(?:\?.*)?$/, route => route.fulfill({
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

const waitForAnimations = async (locator, { subtree = true } = {}) => {
  await expect(locator).toBeVisible();
  await locator.evaluate(async (element, includeDescendants) => {
    const runningAnimations = () => element.getAnimations({ subtree: includeDescendants }).filter(animation =>
      animation.playState === "running" && Number.isFinite(animation.effect?.getComputedTiming().endTime)
    );
    let animations = runningAnimations();
    while (animations.length) {
      await Promise.all(animations.map(animation => animation.finished.catch(() => {})));
      await new Promise(resolve => requestAnimationFrame(resolve));
      animations = runningAnimations();
    }
  }, subtree);
};
const waitForModalAnimations = waitForAnimations;

const findPaginatedItem = async (page, item, { pagination = "#animePagination" } = {}) => {
  await expect.poll(async () => await item.isVisible() || await page.locator(pagination).isVisible()).toBe(true);
  const visited = new Set(await page.locator(`${pagination} [data-anime-page][aria-current="page"]`).evaluateAll(buttons => buttons.map(button => Number(button.dataset.animePage))));
  const pages = () => page.locator(`${pagination} [data-anime-page]:not(:disabled):visible`);
  const initial = await page.locator(`${pagination} [data-anime-page]`).evaluateAll(buttons => buttons.map(button => Number(button.dataset.animePage)));
  const lastPage = Math.max(1, ...initial);
  while (!(await item.isVisible())) {
    const candidates = await pages().evaluateAll(buttons => buttons.map(button => Number(button.dataset.animePage)));
    const next = candidates.find(number => Number.isInteger(number) && number > 0 && number <= lastPage && !visited.has(number));
    if (next === undefined) throw new Error(`Paginated item not found: ${item}`);
    visited.add(next);
    await page.locator(`${pagination} [data-anime-page="${next}"]:not(:disabled):visible`).first().click();
  }
  return item;
};

const expectVersionedAsset = async (image, expectedPath) => {
  const documentBase = await image.evaluate(element => element.ownerDocument.baseURI);
  const base = /^https?:/.test(documentBase) ? documentBase : "https://asset.invalid/";
  const expected = new URL(expectedPath, base);
  await expect.poll(async () => {
    const source = await image.getAttribute("src");
    if (!source) return null;
    const actual = new URL(source, base);
    return { origin: actual.origin, path: actual.pathname, versioned: Boolean(actual.searchParams.get("v")?.trim()) };
  }).toEqual({ origin: expected.origin, path: expected.pathname, versioned: true });
};

const waitForDetail = async (page, id) => {
  const modal = page.locator("#detailModal");
  await expect(modal).toHaveAttribute("data-detail-id", id);
  await expect(modal).toBeVisible();
  return modal;
};

const expectCurrentNavigation = async button => {
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
  await expect(button).toHaveAttribute("aria-current", "page");
  const bounds = await button.boundingBox();
  expect(bounds.width, "primary navigation target width").toBeGreaterThanOrEqual(44);
  expect(bounds.height, "primary navigation target height").toBeGreaterThanOrEqual(44);
};

const expectContainedInViewport = async locator => {
  await waitForAnimations(locator, { subtree: false });
  const bounds = await locator.evaluate(element => {
    const rect = element.getBoundingClientRect();
    return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height, viewportWidth: window.innerWidth, viewportHeight: window.innerHeight };
  });
  expect(bounds.width).toBeGreaterThan(0);
  expect(bounds.height).toBeGreaterThan(0);
  expect(bounds.left).toBeGreaterThanOrEqual(-1);
  expect(bounds.top).toBeGreaterThanOrEqual(-1);
  expect(bounds.right).toBeLessThanOrEqual(bounds.viewportWidth + 1);
  expect(bounds.bottom).toBeLessThanOrEqual(bounds.viewportHeight + 1);
};

const expectNavigationUnderline = async button => {
  await expect(button).toHaveAttribute("aria-current", "page");
  await expect(button).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await expect.poll(() => button.evaluate(element => {
    const marker = getComputedStyle(element, "::after");
    const probe = document.createElement("i");
    probe.style.color = "var(--ui-accent)";
    document.body.append(probe);
    const accent = getComputedStyle(probe).color;
    probe.remove();
    return marker.opacity === "1" && Number.parseFloat(marker.width) > 0
      && Number.parseFloat(marker.height) === 3 && Number.parseFloat(marker.borderRadius) > 0
      && marker.backgroundColor === accent && getComputedStyle(element).color === accent;
  })).toBe(true);
};

const expectFocusIndicator = async (locator, surface = locator) => {
  const readIndicator = element => {
    const style = getComputedStyle(element);
    return {
      boxShadow: style.boxShadow,
      borderColor: style.borderColor,
      borderWidth: style.borderWidth,
      borderStyle: style.borderStyle,
      outlineStyle: style.outlineStyle,
      outlineWidth: style.outlineWidth,
      outlineColor: style.outlineColor,
      focusVisible: element.matches(":focus-visible")
    };
  };
  await surface.scrollIntoViewIfNeeded();
  await locator.page().mouse.move(0, 0);
  await locator.evaluate(element => element.blur());
  await waitForAnimations(surface, { subtree: false });
  const before = await surface.evaluate(readIndicator);
  await locator.press("Tab");
  await locator.focus();
  await expect(locator).toBeFocused();
  await expect.poll(() => locator.evaluate(element => element.matches(":focus-visible"))).toBe(true);
  await expect.poll(async () => {
    const after = await surface.evaluate(readIndicator);
    const transparent = color => color === "transparent" || /^rgba\([^)]*,\s*0(?:\.0+)?\)$/.test(color) || /\/\s*0(?:\.0+)?\s*\)$/.test(color);
    const visibleOutline = after.outlineStyle !== "none" && Number.parseFloat(after.outlineWidth) > 0
      && !transparent(after.outlineColor)
      && ["outlineStyle", "outlineWidth", "outlineColor"].some(key => after[key] !== before[key]);
    const visibleBorder = after.borderStyle !== "none" && after.borderWidth.split(" ").some(width => Number.parseFloat(width) > 0)
      && !transparent(after.borderColor)
      && ["borderStyle", "borderWidth", "borderColor"].some(key => after[key] !== before[key]);
    const shadowColors = after.boxShadow.match(/(?:rgba?|color|oklch|lab|lch)\([^)]*\)/g) || [];
    const visibleShadow = after.boxShadow !== before.boxShadow && shadowColors.some(color => !transparent(color));
    return visibleShadow || visibleBorder || visibleOutline;
  }).toBe(true);
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
  await waitForModalAnimations(backButton.locator("xpath=ancestor::dialog"));
  const geometry = await backButton.evaluate(button => {
    const shell = button.closest(".modal-inner");
    const rect = button.getBoundingClientRect();
    const shellRect = shell.getBoundingClientRect();
    return {
      contained: rect.left >= shellRect.left - 1 && rect.top >= shellRect.top - 1
        && rect.right <= shellRect.right + 1 && rect.bottom <= shellRect.bottom + 1,
      inTopLeft: rect.left + rect.width / 2 < shellRect.left + shellRect.width / 2
        && rect.top + rect.height / 2 < shellRect.top + shellRect.height / 2,
      width: rect.width,
      height: rect.height
    };
  });
  expect(geometry.contained).toBe(true);
  expect(geometry.inTopLeft).toBe(true);
  expect(geometry.width).toBeGreaterThanOrEqual(44);
  expect(geometry.height).toBeGreaterThanOrEqual(44);
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
  animeLayoutSnapshot,
  consoleErrors,
  expectActionRowFocusIndicator,
  expectFocusIndicator,
  expectCurrentNavigation,
  expectContainedInViewport,
  expectVersionedAsset,
  findPaginatedItem,
  expectModalBackAtShellTopLeft,
  expectNavigationUnderline,
  expectTableListTitleSnapshot,
  injectRegionalProductPreviewImages,
  tableListTitleSnapshot,
  waitForAnimations,
  waitForDetail,
  waitForModalAnimations
};
