import { defineConfig } from 'eslint/config';

export default defineConfig([{
  rules: {
    // babel inserts `'use strict';` for us
    strict: ['error', 'never'],
  },
}]);
