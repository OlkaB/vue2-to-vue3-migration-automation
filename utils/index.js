const fs = require("fs");
const path = require("path");
const { FILES_TO_MIGRATE_EXTENSIONS, EXTENSION_PER_FILE_TYPE } = require("./FilesToMigrate.js");
const { FILE_CONTENT_DELEGATES } = require("./FileContentDelegates");

const FILE_ENCODING = 'utf8';
let SummaryLog = {};

function checkCanUseMigrateMethodOnFile(fileExtension, delegateMigrateFileTypes) {
  return delegateMigrateFileTypes.find(
    (migrateFileType) => EXTENSION_PER_FILE_TYPE[migrateFileType] === fileExtension,
  );
}

// TODO drop pure function in favour of speedy not drilling SummaryLog down
function saveDataToSummaryLog (filePath, delegateId) {
  SummaryLog[filePath] = [...(SummaryLog[filePath] || []), delegateId];
}

function migrateFileContent(filePath, fileExtension) {
  const fileContent = fs.readFileSync(filePath, FILE_ENCODING);

  const fileContentToSave = Object.entries(FILE_CONTENT_DELEGATES).reduce(
    (updatedFileContent, [delegateId, { migrateMethod, migrateFileTypes }]) => {
      const canUseMigrateMethod = checkCanUseMigrateMethodOnFile(fileExtension, migrateFileTypes);
      if (!canUseMigrateMethod) return updatedFileContent;

      const { isApplied, fileContentModified } = migrateMethod(updatedFileContent);
      if (isApplied) {
        saveDataToSummaryLog(filePath, delegateId)
      }
      return fileContentModified;
    },
    fileContent,
  );

  fs.writeFileSync(filePath, fileContentToSave, FILE_ENCODING);
}

function migrateFilesContent(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const filePathMetaData = fs.statSync(filePath);
    const isDirectory = filePathMetaData.isDirectory();

    if (isDirectory) {
      return migrateFilesContent(filePath);
    }
    const fileExtension = path.extname(filePath);
    if (FILES_TO_MIGRATE_EXTENSIONS.includes(fileExtension)) {
      migrateFileContent(filePath, fileExtension);
    }
  });
}

const migrateToVue3 = (filesToMigratePath) => {
  if (
    typeof filesToMigratePath !== "string" ||
    filesToMigratePath === path.basename(filesToMigratePath)
  ) {
    console.error("Invalid files path", { filesToMigratePath });
    return;
  }
  console.log("\x1b[35m Migration starting \x1b[0m");

  migrateFilesContent(filesToMigratePath);

  fs.writeFile("migration-summary.json", JSON.stringify(SummaryLog, null, 2), (err) => {
    if (err) throw err;
    console.log("\x1b[31m Migration summary saved to a file. \x1b[0m");
  });

  console.log("\x1b[32m Migration ended \x1b[0m", SummaryLog);
};

module.exports = { migrateToVue3 };
