import { routerReady } from "#app/router";
import { loadSearchFeature } from "#app/feature-loaders";

await routerReady;

const lazySearchSelector = ".topbar-search, .overview-search, .mobile-drawer-search";
let searchFeatureReady = false;
const searchInteractionTarget = target => target?.closest?.(lazySearchSelector) || null;
const prepareInteraction = async target => {
  if (!searchInteractionTarget(target)) return;
  await loadSearchFeature();
  searchFeatureReady = true;
};
const primeSearchInteraction = event => {
  if (!searchFeatureReady && searchInteractionTarget(event.target)) void prepareInteraction(event.target);
};
const replaySearchEventAfterLoad = (event, replay) => {
  if (searchFeatureReady || !searchInteractionTarget(event.target)) return false;
  const target = event.target;
  event.preventDefault();
  event.stopImmediatePropagation();
  void prepareInteraction(target).then(() => replay(target));
  return true;
};

document.addEventListener("pointerdown", primeSearchInteraction, true);
document.addEventListener("focusin", primeSearchInteraction, true);
document.addEventListener("click", event => {
  replaySearchEventAfterLoad(event, target => target.click());
}, true);
document.addEventListener("input", event => {
  replaySearchEventAfterLoad(event, target => target.dispatchEvent(new Event("input", { bubbles: true })));
}, true);
document.addEventListener("keydown", event => {
  if (!searchInteractionTarget(event.target)) return;
  const init = {
    key: event.key,
    code: event.code,
    bubbles: true,
    cancelable: true,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    altKey: event.altKey,
    metaKey: event.metaKey
  };
  replaySearchEventAfterLoad(event, target => target.dispatchEvent(new window.KeyboardEvent("keydown", init)));
}, true);

export const appReady = true;
export { prepareInteraction };
