const EVENT_NATIVE_REGEXP = /@[^"'>]*(\.native\b)[^"'>]*/


function removeEventNativeModifier (fileContent) {
  if(typeof fileContent !== 'string') return fileContent;

  let fileContentModified = fileContent;
  if(EVENT_NATIVE_REGEXP.test(fileContent)) {
    fileContentModified = removeModifier(
      fileContent,
      EVENT_NATIVE_REGEXP
    );
  }
  return fileContentModified
};

function removeModifier (fileContent, regex) {
  return fileContent.replaceAll(
    new RegExp(regex, "gm"),
    ''
  );
}

module.exports = {
  EVENT_NATIVE_REGEXP,
  removeEventNativeModifier
}