module.exports = {
  extends: ['eslint-config-qwasm'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  }
}
