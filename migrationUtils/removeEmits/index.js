const EMIT_ENTRY_REGEX = /\s*emits\s*:\s*\[[^\]]*\],/g;

const removeEmits = (fileContent) => {
  if (typeof fileContent !== 'string' || !EMIT_ENTRY_REGEX.test(fileContent)) {
    return fileContent;
  }
  return fileContent.replace(EMIT_ENTRY_REGEX, '');
};

module.exports = {
  removeEmits,
};
