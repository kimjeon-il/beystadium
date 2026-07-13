(() => {
  const scripts = [
    "./src/ui-core.js?v=20260713-lazy-data-v2",
    "./src/release-core.js?v=20260713-lazy-data-v2",
    "./src/catalog-core.js?v=20260713-lazy-data-v2",
    "./src/release-page.js?v=20260713-lazy-data-v2",
    "./src/anime.js?v=20260713-lazy-data-v2",
    "./src/router.js?v=20260713-lazy-data-v2"
  ];
  const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Script load failed: ${src}`));
    document.body.append(script);
  });
  const start = async () => {
    await window.BeystadiumDataStore.initialize();
    for (const src of scripts) await loadScript(src);
  };
  start().catch(error => {
    document.documentElement.classList.remove("route-booting");
    console.error(error);
  });
})();
