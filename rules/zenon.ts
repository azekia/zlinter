// zenon.ts ============================================================
import { defineConfig } from 'eslint/config';

export default defineConfig([{
  rules: {
    'no-param-reassign': ['off'],
    'linebreak-style': ['off', 'unix'],
    // 'import/extensions': ['error', 'ignorePackages', { '': 'never' }],    <<<<<<<< not supported for eslint v10
    // 'import/no-absolute-path': ['error'], <<<<<<<< not supported for eslint v10
    'no-console': ['warn', { allow: ['log', 'warn', 'error', 'time', 'timeEnd'] }],
    'no-plusplus': 'off',
    'class-methods-use-this': ['off'],
    'max-len': [
      'error',
      { code: 150, tabWidth: 2, ignoreTrailingComments: true },
    ],
    'prefer-destructuring': ['off'],
    'lines-between-class-members': [
      'warn',
      {
        enforce: [{ blankLine: 'always', prev: 'method', next: '*' }],
      },
    ],
  },
}]);
