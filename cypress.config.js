const { defineConfig } = require("cypress");

module.exports = defineConfig({
  downloadsFolder	: "cypress/downloads",
  fixturesFolder : "cypress/fixtures",
  screenshotsFolder :	"cypress/screenshots",
  videosFolder: "cypress/videos",
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
