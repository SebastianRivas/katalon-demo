import { defineConfig } from "cypress";
import { writeFileSync } from "fs";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin, afterRunHandler, } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  on("after:run", async (results) => {
    if (results) {
      await afterRunHandler(config);
      writeFileSync("cypress/results/test-data.json", JSON.stringify(results));
    }
  });

  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://katalon-demo-cura.herokuapp.com",
    chromeWebSecurity: false,
    video: false,
    setupNodeEvents,
  },
});
