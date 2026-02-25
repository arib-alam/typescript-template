import eslint from "@eslint/js";
import * as tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import { configs as tsConfigs } from "typescript-eslint";

const eslintConfig = defineConfig([
  eslint.configs.recommended,
  tsConfigs.recommended,

  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,

  eslintConfigPrettier,

  globalIgnores([
    "**/.DS_Store",
    ".ignore/**",
    "build/**",
    "dist/**",
    "node_modules/**",
    "out/**",
    "public/**",
  ]),

  {
    plugins: {
      "unused-imports": unusedImports,
    },
  },

  {
    settings: {
      "import/resolver": { typescript: true, node: true },
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    },
  },

  {
    languageOptions: {
      globals: {
        ...Object.fromEntries(
          Object.entries(globals.browser).map(([key]) => [key, "off"])
        ),

        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },

  {
    rules: {
      "no-console": "warn",

      "no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",

      "@typescript-eslint/consistent-type-imports": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_.*?$",
        },
      ],

      "import/no-duplicates": "warn",
      "import/no-dynamic-require": "warn",
      "import/order": [
        "warn",
        {
          alphabetize: { order: "asc", caseInsensitive: true },

          pathGroups: [
            { pattern: "@/types/**", group: "type" },
            { pattern: "@/**", group: "internal", position: "after" },
          ],

          groups: [
            "type",
            "builtin",
            "object",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
          ],

          "newlines-between": "always",
        },
      ],

      "unused-imports/no-unused-imports": "warn",
    },
  },
]);

export default eslintConfig;
