import { BeystadiumDataStore } from "./data-store.js";

try {
  await BeystadiumDataStore.initialize();
  await import("./app-runtime.js?v=20260713-esm-runtime");
} catch (error) {
  document.documentElement.classList.remove("route-booting");
  console.error(error);
}
