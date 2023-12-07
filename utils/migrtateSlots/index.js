/**
 * Match slot syntax without dynamic or scoped slots
 */

const SLOT_PROVIDE_REGEX = /<slot[^>]*[^:](name="([\w+\d+-_]+)")/;
const SLOT_INJECT_REGEX = /<template[^>]*[^:](slot="([\w+\d+-_]+)")/;

function migrateSlots(fileContent) {
  if(typeof fileContent !== 'string') return fileContent;

  let fileContentModified = fileContent;
  if (providesOldSlots(fileContent)) {
    fileContentModified = replaceOldSlotSyntax(fileContent, SLOT_PROVIDE_REGEX);
  }

  if (injectsOldSlots(fileContent)) {
    fileContentModified = replaceOldSlotSyntax(fileContent, SLOT_INJECT_REGEX);
  }

  return fileContentModified;
}

function providesOldSlots(content) {
  return SLOT_PROVIDE_REGEX.test(content);
}
function injectsOldSlots(content) {
  return SLOT_INJECT_REGEX.test(content);
}

function replaceOldSlotSyntax(fileContent, regex) {
  return fileContent.replaceAll(new RegExp(regex, "gm"), (match, group1, group2) =>
    match.replace(group1, `#${group2}`)
  );
}

module.exports = {
  SLOT_PROVIDE_REGEX,
  SLOT_INJECT_REGEX,
  replaceOldSlotSyntax,
  migrateSlots,
};
