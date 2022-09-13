module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
    "\\.webp$": "<rootDir>/src/__mocks__/webpMapper.js",
  },
};
