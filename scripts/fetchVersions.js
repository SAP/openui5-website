const fetch = require("node-fetch");
const { writeFileSync } = require("fs");
const path = require("path");

const FILE_PATH = path.resolve(__dirname, "../data/pages/releases/versions.json");
const VERSIONS_URL = "https://openui5versiontracker.cfapps.eu10.hana.ondemand.com/OpenUI5ReleasesInfo";

(async () => {
  try {
    const response = await fetch(VERSIONS_URL);
    const json = await response.json();
    writeFileSync(FILE_PATH, JSON.stringify(json, null, 2));
    console.log(`File with latest versions information is successfuly saved in ${FILE_PATH}`);
  } catch (e) {
    console.error("Cannot fetch versions from the remote server!");
    console.error("Error: ", e);
    process.exit(1);
  }
})();
