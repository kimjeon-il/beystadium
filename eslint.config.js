import js from "@eslint/js";

export default [
  {
    ignores: [
      "data/**/*.js",
      "data/**/*.json",
      "styles.css"
    ]
  },
  js.configs.recommended,
  {
    files: ["scripts/**/*.mjs", "tests/**/*.mjs", "src/**/*.js", "*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        Event: "readonly",
        window: "readonly",
        history: "readonly",
        location: "readonly",
        navigator: "readonly",
        CustomEvent: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        requestAnimationFrame: "readonly",
        ResizeObserver: "readonly",
        cancelAnimationFrame: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        Element: "readonly",
        getComputedStyle: "readonly",
        HTMLDialogElement: "readonly",
        IntersectionObserver: "readonly",
        matchMedia: "readonly",
        MutationObserver: "readonly",
        Node: "readonly",
        performance: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        console: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }]
    }
  }
];
