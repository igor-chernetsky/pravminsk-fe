import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import tsEslint from '@typescript-eslint/eslint-plugin';

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    plugins: {
      "@typescript-eslint": tsEslint,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Treat 'any' as warning

      // Treat unused variables as warnings (for both JS/TS)
      'no-unused-vars': 'off',
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "warn", // Warn on unsafe unknown assignments
      "@typescript-eslint/no-unsafe-member-access": "warn", // Warn on unsafe unknown access
      "@typescript-eslint/no-unused-vars": 'off',
    },
  },
]);
