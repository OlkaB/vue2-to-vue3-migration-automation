const EMIT_REGEX = /\$emit\(('[^']*')/;
const VUE_COMPONENT_INSTANCE_START_STRING = "export default {";
const START_STRING_LENGTH = VUE_COMPONENT_INSTANCE_START_STRING.length;

function addEmits(fileContent) {
  let fileContentModified = fileContent;
  const emitsNames = getAllEmitsNames(fileContent);

  if (Array.isArray(emitsNames) && emitsNames.length > 0) {
    fileContentModified = addEmitsToComponent(fileContent, emitsNames);
  }

  return fileContentModified;
}

function getAllEmitsNames(fileContent) {
  if (typeof fileContent !== "string") return null;
  let match;
  const regex = new RegExp(EMIT_REGEX, 'g');
  const emitNames = [];

  while ((match = regex.exec(fileContent)) !== null) {
    emitNames.push(match[1]);
  }

  return emitNames;
}

function wrapEmitNamesInEmitsSyntax(emitNames) {
  return `emits: [${emitNames.join(', ')}],`;
}

function addEmitsToComponent(fileContent, emitsNames) {
  const emitsSyntaxToInsert = wrapEmitNamesInEmitsSyntax(emitsNames);
  const index = fileContent.indexOf(VUE_COMPONENT_INSTANCE_START_STRING);

  if (index === -1) {
    return fileContent;
  }

  const before = fileContent.substring(0, index + START_STRING_LENGTH);
  const after = fileContent.substring(index + START_STRING_LENGTH);

  // place insertion in its own new line
  return `${before}\n  ${emitsSyntaxToInsert}${after}`;
}

module.exports = {
  addEmits,
  EMIT_REGEX,
};
