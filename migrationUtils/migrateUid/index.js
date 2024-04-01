const NATIVE_UID_REGEX = /[^a-zA-Z0-9](_uid)[^a-zA-Z0-9]/g; // needs improvement - works under control and dev checks
const NEW_UID_SYNTAX = '$.uid';

const migrateUid = (fileContent) => {
  if (typeof fileContent !== 'string' || !NATIVE_UID_REGEX.test(fileContent)) {
    return fileContent;
  }
  return fileContent
    .replace(NATIVE_UID_REGEX, (match, group1) => match.replace(group1, NEW_UID_SYNTAX));
};

module.exports = {
  NATIVE_UID_REGEX,
  migrateUid,
};
