module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.module.scss$": "<rootDir>/src/__mocks__/scssMapper.js",
  },
};
