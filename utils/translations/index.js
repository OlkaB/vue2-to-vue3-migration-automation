const GLOBAL_TRANSLATIONS_REGEX = /\.(t|tc)\('/;
const TRANSLATION_CHUNK_TO_ADD = 'global.'

function migrateTranslations (fileContent) {
  let fileContentModified = fileContent;
  if(GLOBAL_TRANSLATIONS_REGEX.test(fileContent)) {
    fileContentModified = replaceOldTranslationsSyntax(
      fileContent,
      GLOBAL_TRANSLATIONS_REGEX
    );
  }
  return fileContentModified
};

function replaceOldTranslationsSyntax (fileContent, regex) {
  return fileContent.replaceAll(new RegExp(regex, "gm"), (match, group1) =>
    match.replace(group1, `${TRANSLATION_CHUNK_TO_ADD}${group1}`)
  );
}

module.exports = {
  migrateTranslations,
  GLOBAL_TRANSLATIONS_REGEX
}