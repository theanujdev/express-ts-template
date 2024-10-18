// @ts-check

import eslint from "@eslint/js";
import prettier from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // global ignores
  {
    ignores: ["dist/", "node_modules/"],
  },

  // applies to everything
  eslint.configs.recommended,

  // applies only to ts files
  {
    name: "tseslint",
    files: ["src/**/*.ts"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
    ],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        // projectService: true,
        // tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
        },
      ],
      "no-console": "warn",
    },
  },

  // global variables, applies to everything
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // prettier config
  prettier
);
