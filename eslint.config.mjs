import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // rules: {
    //   "@typescript-eslint/strict-boolean-expressions": "error",
    //   "@typescript-eslint/no-unnecessary-condition": "error"
    // },
    ignores: ["zzz.js", "*.config.*", "dist/**/*", "node_modules/**/*"]
  }
);