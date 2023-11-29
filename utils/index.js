const fs = require("fs");
const path = require("path");
const { migrateSlots } = require("./utils/migrtateSlots/index.js");

const FILES_TO_MIGRATE_PATH = "./testFiles";
const FILE_CONTENT_DELEGATES = {
  migrateSlots,
};
let SummaryLog = {};

function migrateFileContent(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");

  const fileContentToSave = Object.entries(FILE_CONTENT_DELEGATES).reduce(
    (updatedFileContent, [delegateId, delegateMethod]) => {
      const { isApplied, fileContentModified } = delegateMethod(updatedFileContent);
      if (isApplied) {
        SummaryLog[filePath] = [...(SummaryLog[filePath] || []), delegateId];
      }
      return fileContentModified;
    },
    fileContent,
  );

  fs.writeFileSync(filePath, fileContentToSave, "utf8");
}

function migrateFilesContent(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const filePathMetaData = fs.statSync(filePath);

    if (filePathMetaData.isDirectory()) {
      findVueFiles(filePath);
    } else if (path.extname(filePath) === ".vue") {
      migrateFileContent(filePath);
    }
  });
}

const migrateToVue3 = (filesToMigratePath = FILES_TO_MIGRATE_PATH) => {
  console.log("\x1b[35m Migration starting \x1b[0m");

  migrateFilesContent(filesToMigratePath);

  fs.writeFile("migration-summary.json", JSON.stringify(SummaryLog, null, 2), (err) => {
    if (err) throw err;
    console.log("\x1b[31m Migration summary saved to a file. \x1b[0m");
  });

  console.log("\x1b[32m Migration ended \x1b[0m", SummaryLog);
};

module.exports = { migrateToVue3 };
