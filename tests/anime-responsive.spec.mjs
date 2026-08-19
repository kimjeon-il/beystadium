import { expect, test } from "@playwright/test";
import { X_ASSET_CACHE_VERSION, consoleErrors, expectModalBackAtShellTopLeft } from "./helpers/ui-assertions.mjs";

test("진검 방영목록은 52개 회차와 교정된 검색·상세 주소를 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "진검 방영목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  const seasonDropdownSummary = page.locator(".anime-episode-controls .table-list-dropdown summary");
  await expect(seasonDropdownSummary).toBeVisible();
  await seasonDropdownSummary.evaluate(summary => {
    summary.closest("details").open = true;
  });
  await page.locator('[data-anime-season="burst-gachi"]').click();

  const rows = page.locator(".anime-episode-row");
  await expect(rows).toHaveCount(52);
  await expect(rows.first().locator("td").nth(0)).toHaveText("1화");
  await expect(rows.first().locator(".anime-episode-title")).toHaveText("진검 베이! 에이스 드래곤!");
  await expect(rows.first().locator(".anime-air-date-full")).toHaveText("2019년 6월 24일");
  await expect(rows.last().locator("td").nth(0)).toHaveText("52화");
  await expect(rows.last().locator(".anime-episode-title")).toHaveText("진검승부! 데미안 대 로니!");
  await expect(rows.last().locator(".anime-air-date-full")).toHaveText("2020년 6월 15일");

  await page.locator("#animeEpisodeSearchInput").fill("중량급, 츠바이 롱기누스!");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-title")).toHaveText("중량급, 츠바이 롱기누스!");

  await page.locator("#animeEpisodeSearchInput").fill("");
  await page.locator(".anime-episode-row").first().click();
  await expect(page).toHaveURL(/#BURST-GACHI-EPISODE-1$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("1화 진검 베이! 에이스 드래곤!");
  await page.locator("#detailModal .modal-back[data-back-anime-episodes]").click();
  await expect(page.locator('[data-anime-season="burst-gachi"].active')).toHaveCount(1);
  await expect(page.locator(".anime-episode-row")).toHaveCount(52);
  expect(errors).toEqual([]);
});

test("버스트 방영목록은 수정된 14화부터 25화까지의 한국 방영일을 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "버스트 방영일은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  await page.locator('[data-anime-season="burst"]').evaluate(button => button.click());

  const rows = page.locator(".anime-episode-row");
  const expectedDates = [
    [13, "2016년 8월 29일"],
    [14, "2016년 9월 5일"],
    [20, "2016년 10월 17일"],
    [21, "2016년 10월 24일"],
    [22, "2016년 10월 31일"],
    [23, "2016년 11월 7일"],
    [24, "2016년 11월 14일"]
  ];

  await expect(rows).toHaveCount(51);
  for (const [index, date] of expectedDates) {
    await expect(rows.nth(index).locator(".anime-air-date-full")).toHaveText(date);
  }
  expect(errors).toEqual([]);
});

test("슈퍼킹 방영목록은 52개 한국판 제목과 검색·상세 주소를 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "슈퍼킹 방영목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  await page.locator('[data-anime-season="burst-superking"]').evaluate(button => button.click());

  const rows = page.locator(".anime-episode-row");
  await expect(rows).toHaveCount(52);
  await expect(rows.first().locator("td").nth(0)).toHaveText("1화");
  await expect(rows.first().locator(".anime-episode-title")).toHaveText("베이블레이드 혁명!");
  await expect(rows.first().locator(".anime-air-date-full")).toHaveText("2020년 7월 1일");
  await expect(rows.nth(1).locator(".anime-episode-title")).toHaveText("태양의 베이! 하이페리온! 헬리오스!");
  await expect(rows.nth(15).locator(".anime-air-date-full")).toHaveText("2020년 10월 21일");
  await expect(rows.nth(45).locator("td").nth(0)).toHaveText("46화");
  await expect(rows.nth(45).locator(".anime-episode-title")).toHaveText("몰아치는 레이징 템페스트!");
  await expect(rows.nth(45).locator(".anime-air-date-full")).toHaveText("2021년 5월 19일");
  await expect(rows.last().locator("td").nth(0)).toHaveText("52화");
  await expect(rows.last().locator(".anime-episode-title")).toHaveText("한계돌파! 우리들의 플레어!");
  await expect(rows.last().locator(".anime-air-date-full")).toHaveText("2021년 6월 30일");

  await page.locator("#animeEpisodeSearchInput").fill("하이페리온! 헬리오스! 한계돌파!");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-title")).toHaveText("하이페리온! 헬리오스! 한계돌파!");

  await page.locator("#animeEpisodeSearchInput").fill("추석 연휴 휴방");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-row td").nth(0)).toHaveText("14화");

  await page.locator("#animeEpisodeSearchInput").fill("");
  await rows.nth(45).evaluate(row => row.click());
  await expect(page).toHaveURL(/#BURST-SUPERKING-EPISODE-46$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("46화 몰아치는 레이징 템페스트!");
  await page.locator("#detailModal .modal-back[data-back-anime-episodes]").evaluate(button => button.click());
  await expect(page.locator('[data-anime-season="burst-superking"].active')).toHaveCount(1);
  await expect(page.locator(".anime-episode-row")).toHaveCount(52);

  await page.locator(".anime-episode-row").first().evaluate(row => row.click());
  await expect(page).toHaveURL(/#BURST-SUPERKING-EPISODE-1$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("1화 베이블레이드 혁명!");
  expect(errors).toEqual([]);
});

test("DB 방영목록은 52개 한국판 제목과 검색·상세 주소를 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "DB 방영목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  await page.locator('[data-anime-season="burst-db"]').evaluate(button => button.click());

  const rows = page.locator(".anime-episode-row");
  await expect(rows).toHaveCount(52);
  await expect(rows.first().locator("td").nth(0)).toHaveText("1화");
  await expect(rows.first().locator(".anime-episode-title")).toHaveText("마왕! 다이너마이트 벨리알!");
  await expect(rows.first().locator(".anime-air-date-full")).toHaveText("2021년 7월 7일");
  await expect(rows.nth(45).locator(".anime-episode-title")).toHaveText("격돌! 패왕 대 불사조!");
  await expect(rows.nth(45).locator(".anime-air-date-full")).toHaveText("2022년 6월 8일");
  await expect(rows.nth(46).locator(".anime-air-date-full")).toHaveText("2022년 6월 8일");
  await expect(rows.nth(47).locator(".anime-air-date-full")).toHaveText("2022년 6월 15일");
  await expect(rows.last().locator("td").nth(0)).toHaveText("52화");
  await expect(rows.last().locator(".anime-episode-title")).toHaveText("폭발! 파이널 배틀!");
  await expect(rows.last().locator(".anime-air-date-full")).toHaveText("2022년 7월 13일");

  await page.locator("#animeEpisodeSearchInput").fill("역전의 역전! 바사라의 역습!");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-title")).toHaveText("역전의 역전! 바사라의 역습!");

  await page.locator("#animeEpisodeSearchInput").fill("지방선거일 휴방");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-row td").nth(0)).toHaveText("46화");

  await page.locator("#animeEpisodeSearchInput").fill("46화와 연속 방영");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-row td").nth(0)).toHaveText("47화");

  await page.locator("#animeEpisodeSearchInput").fill("");
  await rows.nth(32).evaluate(row => row.click());
  await expect(page).toHaveURL(/#BURST-DB-EPISODE-33$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("33화 역전의 역전! 바사라의 역습!");
  await page.locator("#detailModal .modal-back[data-back-anime-episodes]").evaluate(button => button.click());
  await expect(page.locator('[data-anime-season="burst-db"].active')).toHaveCount(1);
  await expect(page.locator(".anime-episode-row")).toHaveCount(52);

  await page.locator(".anime-episode-row").first().evaluate(row => row.click());
  await expect(page).toHaveURL(/#BURST-DB-EPISODE-1$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("1화 마왕! 다이너마이트 벨리알!");
  expect(errors).toEqual([]);
});

test("episode modal matches the rare bey get shell and preserves contextual back navigation", async ({ page }, testInfo) => {
  const errors = consoleErrors(page);
  const shellGeometry = async () => {
    await page.locator("#detailModal .modal-stage").evaluate(stage =>
      Promise.all(stage.getAnimations({ subtree: true }).map(animation => animation.finished.catch(() => {})))
    );
    const shell = await page.locator("#detailModal .modal-inner--rare-bey-get-list").boundingBox();
    const title = await page.locator("#detailModal .product-modal-name").boundingBox();
    return { shell, title };
  };

  await page.goto("/#rare-bey-get-list?region=jp&series=x");
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect(page.locator("#detailModal .rare-bey-get-list")).toBeVisible();
  const rareGeometry = await shellGeometry();
  if (testInfo.project.name === "desktop") {
    expect(Math.abs(rareGeometry.shell.width - 720)).toBeLessThanOrEqual(1);
    expect(Math.abs(rareGeometry.shell.height - 620)).toBeLessThanOrEqual(1);
  }

  await page.goto("/#anime-episode");
  const episodeRow = page.locator(".anime-episode-row").first();
  await expect(episodeRow).toBeVisible();
  await episodeRow.click();
  await expect(page).toHaveURL(/#.*EPISODE-\d+$/);
  await expect(page.locator("#detailModal")).toBeVisible();

  const episodeShell = page.locator("#detailModal .modal-inner--rare-bey-get-list");
  const episodeTitle = page.locator("#detailModal .product-modal-name");
  const episodeArt = page.locator("#detailModal .product-modal-art");
  const backButton = page.locator("#detailModal .modal-back[data-back-anime-episodes]");
  await expect(episodeShell).toBeVisible();
  await expect(episodeTitle).toBeVisible();
  await expect(episodeArt).toHaveCSS("display", "none");
  await expectModalBackAtShellTopLeft(backButton);
  await expect(episodeShell.locator(".modal-body-block, .modal-section, .product-composition, .rare-bey-get-list")).toHaveCount(0);

  const episodeGeometry = await shellGeometry();
  if (testInfo.project.name === "desktop") {
    for (const key of ["x", "y", "width", "height"]) {
      expect(Math.abs(episodeGeometry.shell[key] - rareGeometry.shell[key])).toBeLessThanOrEqual(1);
    }
    for (const key of ["x", "y", "width"]) {
      expect(Math.abs(episodeGeometry.title[key] - rareGeometry.title[key])).toBeLessThanOrEqual(1);
    }
  } else {
    const mobileScrollLayout = await page.locator("#detailModal").evaluate(modal => {
      const stage = modal.querySelector(".modal-stage");
      const shell = modal.querySelector(".modal-inner");
      const scrollArea = modal.querySelector(".modal-scroll-area");
      return {
        stageOverflowY: getComputedStyle(stage).overflowY,
        shellOverflowY: getComputedStyle(shell).overflowY,
        scrollAreaOverflowY: getComputedStyle(scrollArea).overflowY
      };
    });
    const viewport = page.viewportSize();
    const rightGap = viewport.width - episodeGeometry.shell.x - episodeGeometry.shell.width;
    expect(episodeGeometry.shell.x).toBeGreaterThanOrEqual(8);
    expect(episodeGeometry.shell.x).toBeLessThanOrEqual(12);
    expect(rightGap).toBeGreaterThanOrEqual(8);
    expect(rightGap).toBeLessThanOrEqual(12);
    expect(episodeGeometry.shell.height).toBeGreaterThanOrEqual(viewport.height - 24);
    expect(episodeGeometry.shell.height).toBeLessThanOrEqual(viewport.height - 16);
    expect(mobileScrollLayout).toEqual({
      stageOverflowY: "visible",
      shellOverflowY: "hidden",
      scrollAreaOverflowY: "auto"
    });
  }

  const backBox = await backButton.boundingBox();
  if (testInfo.project.name === "desktop") {
    expect(episodeGeometry.title.y - (backBox.y + backBox.height)).toBeGreaterThanOrEqual(7.5);
  } else {
    expect(episodeGeometry.title.y).toBeGreaterThanOrEqual(56);
  }
  const viewport = page.viewportSize();
  const closeBox = await page.locator("#detailModal .modal-close").boundingBox();
  expect(episodeGeometry.shell.x).toBeGreaterThanOrEqual(0);
  expect(episodeGeometry.shell.y).toBeGreaterThanOrEqual(0);
  expect(episodeGeometry.shell.x + episodeGeometry.shell.width).toBeLessThanOrEqual(viewport.width + 1);
  if (testInfo.project.name === "desktop") {
    expect(episodeGeometry.shell.y + episodeGeometry.shell.height).toBeLessThanOrEqual(viewport.height + 1);
  }
  expect(closeBox.x).toBeGreaterThanOrEqual(0);
  expect(closeBox.y).toBeGreaterThanOrEqual(0);
  expect(closeBox.x + closeBox.width).toBeLessThanOrEqual(viewport.width + 1);
  expect(closeBox.y + closeBox.height).toBeLessThanOrEqual(viewport.height + 1);

  const episodeHash = new URL(page.url()).hash;
  const episodeTitleText = await episodeTitle.textContent();
  await page.evaluate(() => sessionStorage.removeItem("beyArchiveModalContext"));
  await page.goto(`/index.html${episodeHash}`);
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText(episodeTitleText);
  await expect(page.locator("#detailModal .modal-back")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("modal tag popovers follow the active pointer type", async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === "mobile";
  if (!mobile) {
    await page.addInitScript(() => {
      const nativeMatchMedia = window.matchMedia.bind(window);
      window.matchMedia = query => {
        const result = nativeMatchMedia(query);
        if (query !== "(hover: none), (pointer: coarse)") return result;
        return {
          matches: true,
          media: result.media,
          onchange: result.onchange,
          addListener: result.addListener.bind(result),
          removeListener: result.removeListener.bind(result),
          addEventListener: result.addEventListener.bind(result),
          removeEventListener: result.removeEventListener.bind(result),
          dispatchEvent: result.dispatchEvent.bind(result)
        };
      };
    });
  }

  await page.goto("/#BEY-X-BX-03-WIZARD-ARROW-4-80B");
  await expect(page.locator("#detailModal")).toBeVisible();
  const tag = page.locator('.modal-tag-info[data-tag-label="스태미나형"]');
  await expect(tag).toHaveCount(1);
  const popover = page.locator(".modal-tag-popover");

  if (mobile) {
    await tag.tap();
    await expect(popover).toBeVisible();
    await expect(tag).toHaveAttribute("aria-expanded", "true");
    await tag.tap();
    await expect(popover).toHaveCount(0);
    await expect(tag).toHaveAttribute("aria-expanded", "false");
    return;
  }

  await tag.hover();
  await expect(popover).toBeVisible();
  await expect(tag).toHaveAttribute("aria-expanded", "true");
  await expect(tag).toHaveAttribute("aria-describedby", /modal-tag-popover-/);

  await page.locator(".modal-name").hover();
  await expect(popover).toHaveCount(0);
  await expect(tag).toHaveAttribute("aria-expanded", "false");

  await tag.click();
  await expect(popover).toBeVisible();
  await page.locator(".modal-name").hover();
  await expect(popover).toBeVisible();
  await tag.click();
  await expect(popover).toHaveCount(0);

  await page.locator("#modalClose").focus();
  await tag.focus();
  await expect(popover).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(popover).toHaveCount(0);
});

test("modal tags use one free horizontal scroll row when space is narrow", async ({ page }, testInfo) => {
  const narrowWidth = testInfo.project.name === "mobile" ? 352 : 360;
  await page.setViewportSize({ width: narrowWidth, height: 800 });
  await page.goto("/#PART-X-BLADE-DRAN-SWORD");
  await expect(page.locator("#detailModal")).toBeVisible();
  await page.evaluate(async () => { await document.fonts?.ready; });

  const slot = page.locator("#detailModal .modal-slot-tags");
  const tags = slot.locator(".modal-tags > *");
  await expect(tags).toHaveCount(4);
  const narrowLayout = await slot.evaluate(element => {
    const bounds = node => {
      const rect = node.getBoundingClientRect();
      return { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom };
    };
    const style = getComputedStyle(element);
    const tagRoot = element.querySelector(".modal-tags");
    return {
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
      overflowX: style.overflowX,
      overflowY: style.overflowY,
      overscrollX: style.overscrollBehaviorX,
      scrollbarWidth: style.scrollbarWidth,
      boxShadow: style.boxShadow,
      flexWrap: getComputedStyle(tagRoot).flexWrap,
      slot: bounds(element),
      tags: [...tagRoot.children].map(node => ({ ...bounds(node), width: node.getBoundingClientRect().width }))
    };
  });
  expect(narrowLayout.scrollWidth).toBeGreaterThan(narrowLayout.clientWidth);
  expect(narrowLayout.overflowX).toBe("auto");
  expect(narrowLayout.overflowY).toBe("hidden");
  expect(narrowLayout.overscrollX).toBe("contain");
  expect(narrowLayout.scrollbarWidth).toBe("none");
  expect(narrowLayout.boxShadow).toBe("none");
  expect(narrowLayout.flexWrap).toBe("nowrap");
  expect(narrowLayout.tags.some(tag => tag.width < 96)).toBe(true);
  expect(new Set(narrowLayout.tags.map(tag => Math.round(tag.top))).size).toBe(1);
  expect(new Set(narrowLayout.tags.map(tag => Math.round(tag.bottom))).size).toBe(1);
  expect(narrowLayout.tags.every(tag => tag.top >= narrowLayout.slot.top - 1 && tag.bottom <= narrowLayout.slot.bottom + 1)).toBe(true);

  const smoothWheelBehavior = await slot.evaluate(element => new Promise(resolve => {
    const positions = [];
    const onScroll = () => positions.push(element.scrollLeft);
    element.scrollLeft = 0;
    element.addEventListener("scroll", onScroll);
    const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 120 });
    const dispatched = element.dispatchEvent(event);
    const immediate = element.scrollLeft;
    const waitForEndpoint = deadline => {
      const maxScrollLeft = element.scrollWidth - element.clientWidth;
      if (Math.abs(maxScrollLeft - element.scrollLeft) <= 1 || performance.now() >= deadline) {
        element.removeEventListener("scroll", onScroll);
        resolve({
          defaultPrevented: event.defaultPrevented,
          dispatched,
          immediate,
          maxScrollLeft,
          positions,
          settled: element.scrollLeft
        });
        return;
      }
      requestAnimationFrame(() => waitForEndpoint(deadline));
    };
    requestAnimationFrame(() => waitForEndpoint(performance.now() + 1_000));
  }));
  expect(smoothWheelBehavior.defaultPrevented).toBe(true);
  expect(smoothWheelBehavior.dispatched).toBe(false);
  expect(smoothWheelBehavior.immediate).toBeLessThan(smoothWheelBehavior.maxScrollLeft);
  expect(Math.abs(smoothWheelBehavior.maxScrollLeft - smoothWheelBehavior.settled)).toBeLessThanOrEqual(1);
  expect(smoothWheelBehavior.positions.some(position => position > 0 && position < smoothWheelBehavior.maxScrollLeft)).toBe(true);

  const repeatedWheelTarget = await slot.evaluate(element => new Promise(resolve => {
    element.scrollLeft = 0;
    const targets = [];
    const originalScrollTo = element.scrollTo.bind(element);
    element.scrollTo = options => {
      targets.push(options.left);
      originalScrollTo(options);
    };
    const dispatchWheel = () => element.dispatchEvent(new window.WheelEvent("wheel", {
      bubbles: true,
      cancelable: true,
      deltaY: 30
    }));
    const waitForFirstScrollFrame = deadline => {
      if (element.scrollLeft > 0 || performance.now() >= deadline) {
        dispatchWheel();
        element.scrollTo = originalScrollTo;
        resolve({ targets });
        return;
      }
      requestAnimationFrame(() => waitForFirstScrollFrame(deadline));
    };
    dispatchWheel();
    requestAnimationFrame(() => waitForFirstScrollFrame(performance.now() + 1_000));
  }));
  expect(repeatedWheelTarget.targets).toHaveLength(2);
  expect(repeatedWheelTarget.targets[1]).toBeGreaterThan(repeatedWheelTarget.targets[0]);
  await expect.poll(async () => {
    const position = await slot.evaluate(element => element.scrollLeft);
    return Math.abs(repeatedWheelTarget.targets[1] - position);
  }, { timeout: 1_000 }).toBeLessThanOrEqual(1);

  const horizontalWheelBehavior = await slot.evaluate(element => {
    element.scrollLeft = 0;
    const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaX: 30 });
    const dispatched = element.dispatchEvent(event);
    return { defaultPrevented: event.defaultPrevented, dispatched, scrollLeft: element.scrollLeft };
  });
  expect(horizontalWheelBehavior).toEqual({ defaultPrevented: true, dispatched: false, scrollLeft: 30 });

  await page.emulateMedia({ reducedMotion: "reduce" });
  const reducedMotionWheelBehavior = await slot.evaluate(element => {
    element.scrollLeft = 0;
    const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 120 });
    const dispatched = element.dispatchEvent(event);
    return {
      defaultPrevented: event.defaultPrevented,
      dispatched,
      maxScrollLeft: element.scrollWidth - element.clientWidth,
      scrollLeft: element.scrollLeft
    };
  });
  expect(reducedMotionWheelBehavior).toEqual(expect.objectContaining({
    defaultPrevented: true,
    dispatched: false
  }));
  expect(Math.abs(reducedMotionWheelBehavior.maxScrollLeft - reducedMotionWheelBehavior.scrollLeft)).toBeLessThanOrEqual(1);
  await page.emulateMedia({ reducedMotion: "no-preference" });

  const edgeWheelBehavior = await slot.evaluate(element => {
    element.scrollLeft = element.scrollWidth;
    const atEnd = element.scrollLeft;
    const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 120 });
    const dispatched = element.dispatchEvent(event);
    return { defaultPrevented: event.defaultPrevented, dispatched, atEnd, afterOutward: element.scrollLeft };
  });
  expect(edgeWheelBehavior.defaultPrevented).toBe(false);
  expect(edgeWheelBehavior.dispatched).toBe(true);
  expect(edgeWheelBehavior.afterOutward).toBe(edgeWheelBehavior.atEnd);

  if (narrowWidth >= 640) {
    await slot.evaluate(element => { element.scrollLeft = 0; });
    await slot.hover();
    await page.mouse.wheel(0, 120);
    await expect.poll(async () => slot.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);

    const modalScrollArea = page.locator("#detailModal .modal-scroll-area");
    await page.setViewportSize({ width: narrowWidth, height: 500 });
    await expect.poll(async () => modalScrollArea.evaluate(element => element.scrollHeight - element.clientHeight)).toBeGreaterThan(0);
    await modalScrollArea.evaluate(element => { element.scrollTop = 0; });
    await slot.evaluate(element => { element.scrollLeft = element.scrollWidth; });
    await slot.hover();
    await page.mouse.wheel(0, 120);
    await expect.poll(async () => modalScrollArea.evaluate(element => element.scrollTop)).toBeGreaterThan(0);
    await page.setViewportSize({ width: narrowWidth, height: 800 });
    await modalScrollArea.evaluate(element => { element.scrollTop = 0; });
  }

  await slot.evaluate(element => { element.scrollLeft = element.scrollWidth; });
  await expect.poll(async () => slot.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
  const lastTagVisible = await slot.evaluate(element => {
    const slotRect = element.getBoundingClientRect();
    const tagRect = element.querySelector(".modal-tags > :last-child").getBoundingClientRect();
    return tagRect.left >= slotRect.left - 1 && tagRect.right <= slotRect.right + 1;
  });
  expect(lastTagVisible).toBe(true);

  await slot.evaluate(element => { element.scrollLeft = 0; });
  await tags.last().focus();
  await expect.poll(async () => slot.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
  await expect(page.locator(".modal-tag-popover")).toBeVisible();
  const focusedTagVisible = await slot.evaluate(element => {
    const slotRect = element.getBoundingClientRect();
    const tagRect = element.querySelector(".modal-tags > :last-child").getBoundingClientRect();
    return tagRect.left >= slotRect.left - 1 && tagRect.right <= slotRect.right + 1;
  });
  expect(focusedTagVisible).toBe(true);

  await page.reload();
  await expect(page.locator("#detailModal")).toBeVisible();
  const reloadedSlot = page.locator("#detailModal .modal-slot-tags");
  const firstTag = reloadedSlot.locator(".modal-tag-info").first();
  await firstTag.click();
  await expect(page.locator(".modal-tag-popover")).toBeVisible();
  await reloadedSlot.evaluate(element => {
    element.scrollLeft = 0;
    element.dispatchEvent(new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 30 }));
  });
  await expect.poll(async () => reloadedSlot.evaluate(element => element.scrollLeft)).toBe(30);
  await expect.poll(async () => page.evaluate(() => {
    const tag = document.querySelector("#detailModal .modal-tag-info");
    const popover = document.querySelector(".modal-tag-popover");
    if (!tag || !popover) return Number.POSITIVE_INFINITY;
    return Math.abs(parseFloat(popover.style.left) - Math.max(14, tag.getBoundingClientRect().left));
  })).toBeLessThanOrEqual(1);

  if (testInfo.project.name === "desktop") {
    const popoverLayout = () => page.evaluate(() => {
      const tag = document.querySelector("#detailModal .modal-tag-info");
      const popover = document.querySelector(".modal-tag-popover");
      if (!tag || !popover) return null;
      const margin = 14;
      const gap = 8;
      const viewport = window.visualViewport;
      const viewportLeft = viewport?.offsetLeft || 0;
      const viewportTop = viewport?.offsetTop || 0;
      const viewportWidth = viewport?.width || window.innerWidth;
      const viewportHeight = viewport?.height || window.innerHeight;
      const tagRect = tag.getBoundingClientRect();
      const popoverRect = popover.getBoundingClientRect();
      const minLeft = viewportLeft + margin;
      const minTop = viewportTop + margin;
      const maxLeft = viewportLeft + viewportWidth - margin - popoverRect.width;
      const maxTop = viewportTop + viewportHeight - margin - popoverRect.height;
      let expectedLeft = Math.min(tagRect.left, maxLeft);
      let expectedTop = tagRect.bottom + gap;
      if (expectedTop > maxTop) expectedTop = tagRect.top - popoverRect.height - gap;
      expectedLeft = Math.max(minLeft, Math.min(expectedLeft, maxLeft));
      expectedTop = Math.max(minTop, Math.min(expectedTop, maxTop));
      return {
        expanded: tag.getAttribute("aria-expanded"),
        describedBy: tag.getAttribute("aria-describedby") || "",
        leftError: Math.abs(parseFloat(popover.style.left) - expectedLeft),
        topError: Math.abs(parseFloat(popover.style.top) - expectedTop),
        withinViewport: popoverRect.left >= minLeft - 1
          && popoverRect.right <= viewportLeft + viewportWidth - margin + 1
          && popoverRect.top >= minTop - 1
          && popoverRect.bottom <= viewportTop + viewportHeight - margin + 1
      };
    });

    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator("#detailModal")).toBeVisible();
    await expect.poll(async () => (await popoverLayout())?.leftError ?? Number.POSITIVE_INFINITY).toBeLessThanOrEqual(1);
    await expect.poll(async () => (await popoverLayout())?.topError ?? Number.POSITIVE_INFINITY).toBeLessThanOrEqual(1);
    const resizedPopover = await popoverLayout();
    expect(resizedPopover).toEqual(expect.objectContaining({
      expanded: "true",
      withinViewport: true
    }));
    expect(resizedPopover.describedBy).toMatch(/^modal-tag-popover-/);
    await expect.poll(async () => page.locator("#detailModal .modal-slot-tags").evaluate(element => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
      scrollLeft: element.scrollLeft
    }))).toEqual(expect.objectContaining({ scrollLeft: 0 }));
    const wideLayout = await page.locator("#detailModal .modal-slot-tags").evaluate(element => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth
    }));
    expect(wideLayout.scrollWidth).toBeLessThanOrEqual(wideLayout.clientWidth + 1);
    const wideWheelBehavior = await page.locator("#detailModal .modal-slot-tags").evaluate(element => {
      const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 120 });
      const dispatched = element.dispatchEvent(event);
      return { defaultPrevented: event.defaultPrevented, dispatched, scrollLeft: element.scrollLeft };
    });
    expect(wideWheelBehavior).toEqual({ defaultPrevented: false, dispatched: true, scrollLeft: 0 });

    await page.setViewportSize({ width: narrowWidth, height: 720 });
    await expect.poll(async () => (await popoverLayout())?.leftError ?? Number.POSITIVE_INFINITY).toBeLessThanOrEqual(1);
    await expect.poll(async () => (await popoverLayout())?.topError ?? Number.POSITIVE_INFINITY).toBeLessThanOrEqual(1);
    expect(await popoverLayout()).toEqual(expect.objectContaining({
      expanded: "true",
      withinViewport: true
    }));
  }
});

test("modal tags follow the shared category-first order and use terminal punctuation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "shared tag order only needs one browser");
  const cases = [
    {
      id: "BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF",
      labels: ["하이브리드 시스템", "공격형", "우회전"]
    },
    {
      id: "PART-METAL-FIGHT-CLEARWHEEL-PEGASIS",
      labels: ["클리어휠", "공격형", "우회전"]
    },
    {
      id: "PART-BURST-SUPERKINGCHASSIS-1S",
      labels: ["슈퍼킹레이어", "섀시", "스태미나형"],
      plainLabels: ["슈퍼킹레이어"]
    },
    {
      id: "PART-BURST-FRAME-VORTEX",
      labels: ["코어디스크 대응", "프레임"],
      plainLabels: ["코어디스크 대응"]
    },
    {
      id: "PART-X-BLADE-DRAN-SWORD",
      labels: ["베이직라인", "블레이드", "어택형", "우회전"]
    },
    {
      id: "PART-X-BLADE-LOCK-CHIP-DRAN",
      labels: ["커스텀라인", "락칩", "우회전"]
    }
  ];

  for (const { id, labels, plainLabels = [] } of cases) {
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal")).toBeVisible();
    await expect(page.locator("#detailModal .modal-tags > *")).toHaveText(labels);
    const descriptions = await page.locator("#detailModal .modal-tag-info").evaluateAll(tags => tags.map(tag => tag.dataset.tagDescription));
    expect(descriptions.length).toBeGreaterThan(0);
    expect(descriptions.every(description => /[.!?]$/u.test(description))).toBe(true);
    for (const label of plainLabels) {
      await expect(page.locator("#detailModal .modal-tags > span").filter({ hasText: label })).toHaveCount(1);
      await expect(page.locator(`#detailModal .modal-tag-info[data-tag-label="${label}"]`)).toHaveCount(0);
    }
  }

  await page.goto("/#BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  await expect(page.locator('.modal-tag-info[data-tag-label="공격형"]')).toHaveAttribute("data-tag-description", "높은 공격력으로 상대를 튕겨낸다!");
});

test("part classification tags expose their shared descriptions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "shared copy only needs one browser");
  const cases = [
    {
      id: "PART-BURST-EVOLUTIONGEAR-F",
      label: "진화기어",
      description: "벨리알의 성능을 올려준다."
    },
    {
      id: "PART-X-BLADE-LOCK-CHIP-DRAN",
      label: "락칩",
      description: "CX 블레이드의 각 파츠를 결합해 고정한다."
    },
    {
      id: "PART-X-BLADE-MAIN-BLADE-BRAVE",
      label: "메인블레이드",
      description: "상대와 직접 부딪치며, 형태와 무게에 따라 블레이드의 기본 성능을 결정한다."
    },
    {
      id: "PART-X-BLADE-ASSIST-BLADE-SLASH",
      label: "어시스트블레이드",
      description: "메인블레이드와 조합하여 블레이드의 성능을 보조하고 조정한다."
    },
    {
      id: "PART-X-BLADE-OVER-BLADE-BRAKE",
      label: "오버블레이드",
      description: "메탈블레이드와 어시스트블레이드 사이에 추가되어 CX 블레이드를 4파트 구조로 확장한다."
    },
    {
      id: "PART-X-BLADE-MAIN-BLADE-BLITZ",
      label: "메탈블레이드",
      description: "금속 소재의 중량과 형태로 블레이드의 기본 성능을 결정한다."
    }
  ];

  for (const { id, label, description } of cases) {
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal")).toBeVisible();
    const tag = page.locator(`.modal-tag-info[data-tag-label="${label}"]`);
    await expect(tag).toHaveCount(1);
    await expect(tag).toHaveAttribute("data-tag-description", description);

    await tag.click();
    const popover = page.locator(".modal-tag-popover");
    await expect(popover.locator("strong")).toHaveText(label);
    await expect(popover.locator("p")).toHaveText(description);
    await tag.click();
    await expect(popover).toHaveCount(0);
  }
});

test("open detail modal follows viewport resize in both directions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "viewport resize coverage only needs one browser");
  const errors = consoleErrors(page);
  const snapshotModalLayout = () => page.evaluate(() => {
    const rect = element => {
      const bounds = element.getBoundingClientRect();
      return {
        left: Math.round(bounds.left),
        top: Math.round(bounds.top),
        width: Math.round(bounds.width),
        height: Math.round(bounds.height),
        right: Math.round(bounds.right),
        bottom: Math.round(bounds.bottom)
      };
    };
    const dialog = document.querySelector("#detailModal");
    const inner = dialog.querySelector(".modal-inner");
    const bodyStyle = getComputedStyle(document.body);
    const viewport = window.visualViewport;
    return {
      viewportWidth: Math.round(viewport?.width || window.innerWidth),
      viewportHeight: Math.round(viewport?.height || window.innerHeight),
      storedViewportWidth: Math.round(parseFloat(bodyStyle.getPropertyValue("--modal-viewport-width"))),
      storedViewportHeight: Math.round(parseFloat(bodyStyle.getPropertyValue("--modal-viewport-height"))),
      storedLockWidth: Math.round(parseFloat(bodyStyle.getPropertyValue("--modal-lock-width"))),
      dialog: rect(dialog),
      overlay: rect(dialog.querySelector(".modal-overlay")),
      stage: rect(dialog.querySelector(".modal-stage")),
      inner: rect(inner),
      columnCount: getComputedStyle(inner).gridTemplateColumns.split(" ").filter(Boolean).length,
      title: dialog.querySelector(".modal-name")?.textContent.trim() || ""
    };
  });
  const expectViewportFit = layout => {
    expect(layout.storedViewportWidth).toBe(layout.viewportWidth);
    expect(layout.storedViewportHeight).toBe(layout.viewportHeight);
    expect(layout.storedLockWidth).toBe(layout.viewportWidth);
    for (const [name, layer] of [["dialog", layout.dialog], ["overlay", layout.overlay], ["stage", layout.stage]]) {
      expect(Math.abs(layer.width - layout.viewportWidth), `${name}: ${JSON.stringify(layout)}`).toBeLessThanOrEqual(1);
      expect(Math.abs(layer.height - layout.viewportHeight), `${name}: ${JSON.stringify(layout)}`).toBeLessThanOrEqual(1);
    }
    expect(layout.inner.left).toBeGreaterThanOrEqual(0);
    expect(layout.inner.top).toBeGreaterThanOrEqual(0);
    expect(layout.inner.right).toBeLessThanOrEqual(layout.viewportWidth);
    expect(layout.inner.bottom).toBeLessThanOrEqual(layout.viewportHeight);
    expect(Math.abs((layout.inner.left + layout.inner.right) / 2 - layout.viewportWidth / 2)).toBeLessThanOrEqual(1);
  };

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#BEY-X-CX-09-SOL-ECLIPSE-D-5-70TK");
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect.poll(async () => (await snapshotModalLayout()).stage.width).toBe(1440);
  const initialUrl = page.url();
  const initialTitle = await page.locator(".modal-name").textContent();

  const wideLayout = await snapshotModalLayout();
  expectViewportFit(wideLayout);
  expect(wideLayout.columnCount).toBe(1);
  expect(wideLayout.inner.width).toBe(720);

  await page.setViewportSize({ width: 900, height: 800 });
  await expect.poll(async () => (await snapshotModalLayout()).storedViewportWidth).toBe(900);
  const compactLayout = await snapshotModalLayout();
  expectViewportFit(compactLayout);
  expect(compactLayout.columnCount).toBe(1);
  await expect(page.locator("#detailModal")).toBeVisible();
  expect(page.url()).toBe(initialUrl);
  expect(compactLayout.title).toBe(initialTitle?.trim());

  await page.setViewportSize({ width: 1440, height: 900 });
  await expect.poll(async () => (await snapshotModalLayout()).storedViewportWidth).toBe(1440);
  const restoredLayout = await snapshotModalLayout();
  expectViewportFit(restoredLayout);
  expect(restoredLayout.columnCount).toBe(1);
  expect(restoredLayout.inner.width).toBe(720);
  expect(page.url()).toBe(initialUrl);
  expect(restoredLayout.title).toBe(initialTitle?.trim());

  await page.locator("#modalClose").click();
  await expect(page.locator("#detailModal")).not.toBeVisible();
  const lockState = await page.evaluate(() => ({
    htmlOpen: document.documentElement.classList.contains("is-modal-open"),
    bodyOpen: document.body.classList.contains("is-modal-open"),
    viewportWidth: document.body.style.getPropertyValue("--modal-viewport-width"),
    viewportHeight: document.body.style.getPropertyValue("--modal-viewport-height"),
    lockWidth: document.body.style.getPropertyValue("--modal-lock-width")
  }));
  expect(lockState).toEqual({
    htmlOpen: false,
    bodyOpen: false,
    viewportWidth: "",
    viewportHeight: "",
    lockWidth: ""
  });
  expect(errors).toEqual([]);
});

test("mobile bottom navigation exposes the five primary destinations", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only behavior");
  const errors = consoleErrors(page);
  await page.goto("/");
  const navigation = page.locator(".mobile-bottom-nav");
  await expect(navigation).toBeVisible();
  await expect(navigation.locator(":scope > button")).toHaveCount(5);
  await expect(navigation.locator("[data-sidebar-home]")).toHaveClass(/active/);
  await navigation.locator("[data-category-catalog-open]").click();
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await expect(navigation.locator("[data-category-catalog-open]")).toHaveClass(/active/);
  await expect(page.locator("#mobileDrawer")).toBeHidden();
  expect(errors).toEqual([]);
});

test("responsive routes preserve hidden states and viewport bounds", async ({ page }) => {
  const errors = consoleErrors(page);
  for (const hash of ["#toy-catalog?scope=bey&series=x", "#toy-release", "#PRODUCT-X-BX-01"]) {
    await page.goto(`/${hash}`);
    await expect(page.locator("html")).not.toHaveClass(/route-booting/);

    const layout = await page.evaluate(() => ({
      hiddenLeaks: [...document.querySelectorAll("[hidden]")]
        .filter(element => getComputedStyle(element).display !== "none")
        .map(element => element.id || element.className || element.tagName),
      inactivePanelLeaks: [...document.querySelectorAll(".app-panel:not(.active)")]
        .filter(element => getComputedStyle(element).display !== "none")
        .map(element => element.dataset.appPanel || element.id),
      viewportWidth: document.documentElement.clientWidth,
      documentWidth: document.documentElement.scrollWidth
    }));

    expect(layout.hiddenLeaks).toEqual([]);
    expect(layout.inactivePanelLeaks).toEqual([]);
    expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
  }
  expect(errors).toEqual([]);
});

test("table date labels switch once at the responsive breakpoint", async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === "mobile";
  for (const [hash, fullSelector, compactSelector, rowSelector] of [
    ["#toy-release", ".release-date-full", ".release-date-compact", ".release-product-row"],
    ["#anime-episode", ".anime-air-date-full", ".anime-air-date-compact", ".anime-episode-row"]
  ]) {
    await page.goto(`/${hash}`);
    await expect(page.locator(rowSelector).first()).toBeVisible();
    await expect(page.locator(fullSelector).first()).toHaveCSS("display", mobile ? "none" : "inline");
    await expect(page.locator(compactSelector).first()).toHaveCSS("display", mobile ? "inline" : "none");
  }
});

test("reduced motion disables route and control transitions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "motion coverage only needs one browser");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

  const catalogMotion = await page.evaluate(() => ({
    panelAnimation: getComputedStyle(document.querySelector(".app-panel.active")).animationName,
    cardTransition: getComputedStyle(document.querySelector(".catalog-card")).transitionDuration,
    dropdownTransition: getComputedStyle(document.querySelector("#catalogSeriesFilter > summary"), "::after").transitionDuration,
    toTopTransition: getComputedStyle(document.querySelector("#toTop")).transitionDuration
  }));
  expect(catalogMotion.panelAnimation).toBe("none");
  expect(catalogMotion.cardTransition).toBe("0.001s");
  expect(catalogMotion.dropdownTransition).toBe("0.001s");
  expect(catalogMotion.toTopTransition).toBe("0.001s");

  await page.goto("/#PRODUCT-X-BX-01");
  await expect(page.locator("#detailModal")).toBeVisible();
  const modalAnimation = await page.locator(".modal-stage").evaluate(
    element => getComputedStyle(element).animationName
  );
  expect(modalAnimation).toBe("none");
});

test("failed route stylesheet exposes a retry that recovers the page", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "stylesheet recovery only needs one browser");
  let shouldFail = true;
  await page.route("**/styles/catalog.css*", async route => {
    if (shouldFail) {
      shouldFail = false;
      await route.abort("failed");
      return;
    }
    await route.continue();
  });

  await page.goto("/#toy-catalog?scope=bey&series=x");
  const status = page.locator("#dataLoadStatus");
  await expect(status).toBeVisible();
  await expect(status.locator("[data-load-message]")).toHaveText("화면 스타일을 불러오지 못했습니다.");
  await status.locator("[data-load-retry]").click();

  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await expect(status).toBeHidden();
});

test("X catalog cards use top-view primary images without adding a detail art pane", async ({ page }) => {
  test.setTimeout(60_000);
  const failedImages = [];
  page.on("response", response => {
    if (response.url().includes("/assets/images/x/") && !response.ok()) {
      failedImages.push(`${response.status()} ${response.url()}`);
    }
  });

  await page.goto(`/#toy-catalog?scope=bey&series=x&q=${encodeURIComponent("드랜소드 3-60F")}`);
  const card = page.locator('#catalogGrid .catalog-card[data-id="BEY-X-BX-01-DRAN-SWORD-3-60F"]');
  await expect(card).toBeVisible();
  const cardImage = card.locator(".bey-image");
  await expect(cardImage).toHaveAttribute("loading", "lazy");
  await expect(cardImage).toHaveAttribute("decoding", "async");
  await expect(cardImage).toHaveAttribute(
    "src",
    `assets/images/x/beys/bey-x-bx-01-dran-sword-3-60f/bey-x-bx-01-dran-sword-3-60f.webp?v=${X_ASSET_CACHE_VERSION}`
  );
  await cardImage.evaluate(image => {
    image.scrollIntoView({ block: "center" });
    image.loading = "eager";
  });
  await expect.poll(() => cardImage.evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true);
  const imageGeometry = await cardImage.evaluate(image => {
    return {
      naturalWidth: image.naturalWidth,
      naturalHeight: image.naturalHeight
    };
  });
  expect(imageGeometry.naturalWidth).toBe(448);
  expect(imageGeometry.naturalHeight).toBe(448);
  const renderedGeometry = await cardImage.evaluate(image => {
    const rect = image.getBoundingClientRect();
    return { width: Math.round(rect.width), height: Math.round(rect.height) };
  });
  expect(renderedGeometry.width).toBe(renderedGeometry.height);
  expect(renderedGeometry.width).toBeGreaterThan(0);
  expect(renderedGeometry.width).toBeLessThanOrEqual(112);

  await card.locator(".catalog-card-action").evaluate(button => button.click());
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect(page.locator("#detailModal .modal-inner--content")).toBeVisible();
  await expect(page.locator("#detailModal .modal-art")).toHaveCount(0);

  const primaryImages = [
    [
      "BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F",
      "라이트닝 엘드라고 1-60F (어퍼형)",
      "assets/images/x/beys/bey-x-bx-00-01-lightning-l-drago-upper-1-60f/bey-x-bx-00-01-lightning-l-drago-upper-1-60f.webp"
    ],
    [
      "BEY-X-BX-50-01-HEAVENS-RING-0-80DS",
      "헤븐즈링 0-80DS",
      "assets/images/x/beys/bey-x-bx-50-01-heavens-ring-0-80ds/bey-x-bx-50-01-heavens-ring-0-80ds.webp"
    ],
    [
      "BEY-X-BX-31-01-TYRANNO-BEAT-4-70Q",
      "티라노비트 4-70Q",
      "assets/images/x/beys/bey-x-bx-31-01-tyranno-beat-4-70q/bey-x-bx-31-01-tyranno-beat-4-70q.webp"
    ],
    [
      "BEY-X-CX-11-EMPEROR-MIGHT-H-OP",
      "엠퍼러 마이트H Op",
      "assets/images/x/beys/bey-x-cx-11-emperor-might-h-op/bey-x-cx-11-emperor-might-h-op.webp"
    ],
    [
      "BEY-X-CX-00-VALKYRIE-BOLT-S-4-70V",
      "발키리언 볼트S 4-70V",
      "assets/images/x/beys/bey-x-cx-00-valkyrie-bolt-s-4-70v/bey-x-cx-00-valkyrie-bolt-s-4-70v.webp"
    ],
    [
      "BEY-X-CX-01-DRAN-BRAVE-S-6-60V",
      "드랜 브레이브S 6-60V",
      "assets/images/x/beys/bey-x-cx-01-dran-brave-s-6-60v/bey-x-cx-01-dran-brave-s-6-60v.webp"
    ],
    [
      "BEY-X-BX-00-DRAN-DAGGER-2-80GP",
      "드란대거 2-80GP",
      "assets/images/x/beys/bey-x-bx-00-dran-dagger-2-80gp/bey-x-bx-00-dran-dagger-2-80gp.webp"
    ],
    [
      "BEY-X-BX-17-DRAN-SWORD-3-60F",
      "드랜소드 3-60F",
      "assets/images/x/beys/bey-x-bx-17-dran-sword-3-60f/bey-x-bx-17-dran-sword-3-60f.webp"
    ],
    [
      "BEY-X-UX-04-DRAN-BUSTER-1-60A",
      "드랜버스터 1-60A",
      "assets/images/x/beys/bey-x-ux-04-dran-buster-1-60a/bey-x-ux-04-dran-buster-1-60a.webp"
    ],
    [
      "BEY-X-BX-48-01-COBALT-DRAGOON-9-80F",
      "코발트드래군 9-80F",
      "assets/images/x/beys/bey-x-bx-48-01-cobalt-dragoon-9-80f/bey-x-bx-48-01-cobalt-dragoon-9-80f.webp"
    ],
    [
      "BEY-X-UX-00-DRAN-SWORD-4-80DB",
      "드랜소드 4-80DB",
      "assets/images/x/beys/bey-x-ux-00-dran-sword-4-80db/bey-x-ux-00-dran-sword-4-80db.webp"
    ]
  ];
  for (const [id, query, image] of primaryImages) {
    await page.goto(`/#toy-catalog?scope=bey&series=x&q=${encodeURIComponent(query)}`);
    await expect(page.locator(`#catalogGrid .catalog-card[data-id="${id}"] .bey-image`)).toHaveAttribute("src", `${image}?v=${X_ASSET_CACHE_VERSION}`);
  }
  expect(failedImages).toEqual([]);
});
