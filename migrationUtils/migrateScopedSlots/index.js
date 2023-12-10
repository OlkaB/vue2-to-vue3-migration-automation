/**
 * Match slot syntax without dynamic or scoped slots
 */

const SCOPED_SLOT_REGEX = /(?<=this\.|\.{3}|wrapper.vm.|\s|['"`]|=>)(\$scopedSlots\b)[^\w]*/;
const REPLACEMENT_CHUNK = '$slots';

function migrateScopedSlots(fileContent) {
  if (typeof fileContent !== 'string') return fileContent;

  let fileContentModified = fileContent;
  if (SCOPED_SLOT_REGEX.test(fileContent)) {
    fileContentModified = replaceScopedSlotSyntax(fileContent, SCOPED_SLOT_REGEX);
  }

  return fileContentModified;
}

function replaceScopedSlotSyntax(fileContent, regex) {
  return fileContent.replaceAll(
    new RegExp(regex, 'gm'),
    (match, group1) => match.replace(group1, REPLACEMENT_CHUNK),
  );
}

module.exports = {
  SCOPED_SLOT_REGEX,
  migrateScopedSlots,
};
