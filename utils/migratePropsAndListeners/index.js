const PROPS_LISTENERS_REGEX = /(?<=this\.|\.{3}|wrapper.vm.|\s|['"`]|=>)(\$props\b|\$listeners\b)[^\w]*/;

const ATTRS_CHUNK_TO_ADD = '$attrs.';

function migratePropsAndListeners(fileContent) {
  if (typeof fileContent !== 'string') return fileContent;

  let fileContentModified = fileContent;
  if (PROPS_LISTENERS_REGEX.test(fileContent)) {
    fileContentModified = replaceOldPropsAndListenersSyntax(
      fileContent,
      PROPS_LISTENERS_REGEX,
    );
  }
  return fileContentModified;
}

function replaceOldPropsAndListenersSyntax(fileContent, regex) {
  return fileContent.replaceAll(new RegExp(regex, 'gm'), (match, group1) => match.replace(group1, `${ATTRS_CHUNK_TO_ADD}${group1}`));
}

module.exports = {
  PROPS_LISTENERS_REGEX,
  migratePropsAndListeners,
};
