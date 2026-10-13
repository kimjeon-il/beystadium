/**
 * Preview-only theme switch for the Sport-Tech Archive design branch.
 * The query parameter is shareable: ?theme=light or ?theme=dark.
 * No application state, data source, or hash route is changed.
 */
const root = document.documentElement;
const allowed = new Set(["light", "dark"]);
const selected = allowed.has(root.dataset.sportTheme) ? root.dataset.sportTheme : "light";

const switcher = document.createElement("div");
switcher.className = "sport-theme-switch";
switcher.setAttribute("role", "group");
switcher.setAttribute("aria-label", "UI 시안 테마 선택");
switcher.innerHTML = [
  '<span class="sport-theme-switch__label">UI 시안</span>',
  '<button type="button" data-preview-mode="light">라이트</button>',
  '<button type="button" data-preview-mode="dark">다크</button>'
].join("");

const syncPressed = theme => {
  switcher.querySelectorAll("[data-preview-mode]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.previewMode === theme));
  });
};

const applyTheme = theme => {
  if (!allowed.has(theme)) return;
  root.dataset.sportTheme = theme;
  syncPressed(theme);
  const url = new URL(window.location.href);
  url.searchParams.set("theme", theme);
  window.history.replaceState(window.history.state, "", url);
};

switcher.addEventListener("click", event => {
  const button = event.target.closest("[data-preview-mode]");
  if (button) applyTheme(button.dataset.previewMode);
});

syncPressed(selected);
document.body.append(switcher);
