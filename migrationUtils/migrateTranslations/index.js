const TRANSLATIONS_VIA_INSTANCE_REGEX = /[^global.]\.(t|tc)\('/;
const TRANSLATION_CHUNK_TO_ADD = 'global.';

function migrateTranslations(fileContent) {
  if (typeof fileContent !== 'string') return fileContent;

  let fileContentModified = fileContent;
  if (TRANSLATIONS_VIA_INSTANCE_REGEX.test(fileContent)) {
    fileContentModified = replaceOldTranslationsSyntax(
      fileContent,
      TRANSLATIONS_VIA_INSTANCE_REGEX,
    );
  }
  return fileContentModified;
}

function replaceOldTranslationsSyntax(fileContent, regex) {
  return fileContent.replaceAll(new RegExp(regex, 'gm'), (match, group1) => match.replace(group1, `${TRANSLATION_CHUNK_TO_ADD}${group1}`));
}

module.exports = {
  migrateTranslations,
  TRANSLATIONS_VIA_INSTANCE_REGEX,
};
