const ATTRIBUTE_SYNC_REGEX = /:([\w-]+)\.sync="([^"']*)"/
const NEW_SYNC_SYNTAX_START_CHUNK = 'v-model:'


function migrateAttributeSync (fileContent) {
  if(typeof fileContent !== 'string') return '';

  let fileContentModified = fileContent;
  if(ATTRIBUTE_SYNC_REGEX.test(fileContent)) {
    fileContentModified = replaceOldAttributeSyncSyntax(
      fileContent,
      ATTRIBUTE_SYNC_REGEX
    );
  }
  return fileContentModified
};

function replaceOldAttributeSyncSyntax (fileContent, regex) {
  return fileContent.replaceAll(
    new RegExp(regex, "gm"),
    (_, group1, group2) => {
      return `${NEW_SYNC_SYNTAX_START_CHUNK}${group1}="${group2}"`
    }
  );
}

module.exports = {
  migrateAttributeSync,
  ATTRIBUTE_SYNC_REGEX
}