// @ts-check

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // global ignores
  {
    ignores: ["dist", "node_modules", "eslint.config.mjs", "jest.config.js"],
  },

  // apply configs
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,

  // other configs
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
          allowBoolean: false,
          allowAny: false,
          allowNullish: false,
        },
      ],
    },
  },

  // disable type-checked linting
  {
    files: ["**/*.spec.ts"],
    extends: [tseslint.configs.disableTypeChecked],
  },

  // eslint prettier config
  eslintConfigPrettier,
);
