module.exports = new Proxy(
  {},
  {
    get: (target, key) => {
      return key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);
    },
  }
);
