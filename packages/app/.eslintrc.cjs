module.exports = {
  extends: ["@qwasm/eslint-config"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname
  }
};
