const EMIT_REGEX = /\$emit\(('[^']*')/;
const VUE_COMPONENT_INSTANCE_START_STRING = 'export default {';
const START_STRING_LENGTH = VUE_COMPONENT_INSTANCE_START_STRING.length;
const ADDED_LINES_FORMATTING_CONNECTOR = `\n  `;
const EMIT_NAME_LINE_FORMATTING_CONNECTOR = `${ADDED_LINES_FORMATTING_CONNECTOR}  `;
const HAS_EMITS_REGEX = /\s*emits\s*:\s*\[[^\]]*\]/g;

function addEmits(fileContent, filePath) {
  if (typeof fileContent !== 'string' || HAS_EMITS_REGEX.test(fileContent)) {
    return fileContent;
  }

  let fileContentModified = fileContent;
  const emitsNames = getAllEmitsNames(fileContent);

  if (Array.isArray(emitsNames) && emitsNames.length > 0 && !HAS_EMITS_REGEX.test(fileContent)) {
    fileContentModified = addEmitsToComponent({ fileContent, emitsNames, filePath });
  }

  return fileContentModified;
}

function getAllEmitsNames(fileContent) {
  if (typeof fileContent !== 'string') return null;
  let match;
  const regex = new RegExp(EMIT_REGEX, 'g');
  const emitNames = new Set();

  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(fileContent)) !== null) {
    emitNames.add(match[1]);
  }

  return Array.from(emitNames);
}

function wrapEmitNamesInEmitsSyntax(emitNames) {
  return `emits: [${EMIT_NAME_LINE_FORMATTING_CONNECTOR}${emitNames.join(`,${EMIT_NAME_LINE_FORMATTING_CONNECTOR}`)}${ADDED_LINES_FORMATTING_CONNECTOR}],`;
}

function addEmitsToComponent({ fileContent, emitsNames, filePath }) {
  const emitsSyntaxToInsert = wrapEmitNamesInEmitsSyntax(emitsNames);
  const index = fileContent.indexOf(VUE_COMPONENT_INSTANCE_START_STRING);

  if (index === -1) {
    console.error(`Couldn't add emits entry to component instance. No '${VUE_COMPONENT_INSTANCE_START_STRING}' string found in `, filePath);
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
