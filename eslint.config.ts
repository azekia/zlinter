import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import rulesBestPractices from './rules/best-practices.ts';
import rulesEs6 from './rules/es6.ts';
import rulesErrors from './rules/errors.ts';
import rulesNode from './rules/node.ts';
import rulesStrict from './rules/strict.ts';
import rulesStyle from './rules/style.ts';
import rulesVariables from './rules/variables.ts';
import rulesZenon from './rules/zenon.ts';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      // ecmaVersion: 2022,
      // sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jquery,
        console: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        beforeEach: 'readonly',
        after: 'readonly',
        afterEach: 'readonly',
      },
    },
  },
  tseslint.configs.recommended,
  rulesBestPractices,
  rulesEs6,
  rulesErrors,
  rulesNode,
  rulesStrict,
  rulesStyle,
  rulesVariables,
  rulesZenon,
]);
