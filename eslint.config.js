import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    name: "app/custom-rules",
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      indent: ["error", 2],
    },
  },

  {
    name: "app/ignores",
    ignores: ["dist/", "build/", "node_modules/"],
  },
];
