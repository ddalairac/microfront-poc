module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-inferrable-types': 'off',

    /** airbnb Rules:*/
    /** needed for vision */
    // ? Forbid the import of external modules that are not declared in the package.json */
    'import/no-extraneous-dependencies': ['error', { 'peerDependencies': true }], 

    /** needed for Service Locator */
    // ? Enforces that class methods utilize this 
    'class-methods-use-this': 'off', 
    // ? Ensures that there is no resolvable path back to this module via its dependencies 
    'import/no-cycle': 'off',

    /** needed for Backend DTO */
    'no-underscore-dangle': 'off', 
    'camelcase': 'off', 

    /* annoying */
    // ? Requires an empty line between class members
    'lines-between-class-members': 'off', 
    // ? Disallows the use of variables before they are defined.
    'no-use-before-define': 'off',
    // ? Enforce a convention in the order
    'import/order': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
