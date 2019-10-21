module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, `plugin:react/recommended`, `plugin:prettier/recommended`],
  plugins: [`prettier`],
  rules: {
    "prettier/prettier": "error",
  },
}
