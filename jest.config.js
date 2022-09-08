module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.scss$": "<rootDir>/src/__mocks__/scssMapper.js",
  },
};
