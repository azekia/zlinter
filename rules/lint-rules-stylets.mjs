import stylistic from '@stylistic/eslint-plugin';

export default {
  plugins: {
    '@stylistic': stylistic,
  },
  files: ['**/*.ts'],
  rules: {
    // TypeScript Type Annotations: "name: type"
    '@stylistic/type-annotation-spacing': ['error', {
      before: false,
      after: true,
    }],
    // Object Literal Keys: "key: value"
    '@stylistic/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    // Switch Cases: "case X:"
    '@stylistic/switch-colon-spacing': ['error', {
      before: false,
      after: true,
    }],
  },
};
