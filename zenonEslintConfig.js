/* eslint-disable import/no-unresolved */
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

import es6LintRules from './rules/lint-rules-es6.mjs';
import bestPracticesLintRules from './rules/lint-rules-best-practices.mjs';
import importLintRules from './rules/lint-rules-imports.mjs';
import variablesLintRules from './rules/lint-rules-variables.mjs';
import errorsLintRules from './rules/lint-rules-errors.mjs';
import styleLintRules from './rules/lint-rules-style.mjs';
import nodeLintRules from './rules/lint-rules-node.mjs';
import zenonLintRules from './rules/lint-rules-zenon.mjs';
import styleTsLintRules from './rules/lint-rules-stylets.mjs';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
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
  {
    files: ['**/*.cjs'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: { sourceType: 'module' },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      parser: tsparser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  es6LintRules,
  bestPracticesLintRules,
  importLintRules,
  variablesLintRules,
  errorsLintRules,
  styleLintRules,
  nodeLintRules,
  zenonLintRules,
  styleTsLintRules,
];
