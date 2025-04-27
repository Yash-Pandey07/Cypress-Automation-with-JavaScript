const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 3000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
  browser: {
    name: "chrome",
    channel: "stable",
    path: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  },
  chromeWebSecurity: false,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
