import { generate } from "multiple-cucumber-html-reporter";
import { readFileSync } from "fs";

const data = readFileSync("cypress/results/test-data.json", {
  encoding: "utf8",
  flag: "r",
});

const testData = JSON.parse(data);

generate({
  jsonDir: "cypress/results/json/",
  reportPath: "cypress/reports/cucumber/",
  openReportInBrowser: true,
  useCDN: false,
  metadata: {
    browser: {
      name:
        testData.browserName === "chromium" ? "chrome" : testData.browserName,
      version: testData.browserVersion,
    },
    platform: {
      name: testData.osName,
      version: testData.osVersion,
    },
  },
  customData: {
    title: "Test Info",
    data: [
      { label: "Project", value: "Sample " },
      { label: "Release", value: "1.0.0" },
      { label: "Cypress Version", value: testData["cypressVersion"] },
      { label: "Node Version", value: testData["nodeVersion"] },
      { label: "Execution Start Time", value: testData["startedTestsAt"], },
      { label: "Execution End Time", value: testData["endedTestsAt"], },
    ],
  },
  pageTitle: "Sample",
  reportName: "Sample",
  displayDuration: true,
  displayReportTime: true,
});
