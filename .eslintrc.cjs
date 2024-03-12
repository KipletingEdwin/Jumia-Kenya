module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { 
    // Update the React version to 18.2.0
    react: { version: '18.2' /* Update with your React version */ } 
  },
  plugins: [],
  rules: {
    // You can add any additional rules or overrides here
    "react/no-unescaped-entities": 0, // Disable the react/no-unescaped-entities rule
  },
};
