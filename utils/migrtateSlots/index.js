/**
 * Match slot syntax without dynamic or scoped slots
 */

const SLOT_PROVIDE_REGEX = /<slot[^>]*[^:](name="([\w+\d+-_]+)")/;
const SLOT_INJECT_REGEX = /<template[^>]*[^:](slot="([\w+\d+-_]+)")/;

const providesOldSlots = (content) => SLOT_PROVIDE_REGEX.test(content);
const injectsOldSlots = (content) => SLOT_INJECT_REGEX.test(content);

const replaceOldSlotSyntax = (fileContent, regex) => fileContent.replaceAll(
  new RegExp(regex, 'gm'),
  (match, group1, group2) => match.replace(group1, `#${group2}`),
);

const migrateSlots = (fileContent) => {
  let isApplied = false;
  if (providesOldSlots(fileContent)) {
    replaceOldSlotSyntax(fileContent, SLOT_PROVIDE_REGEX);
    isApplied = true;
  }

  if (injectsOldSlots(fileContent)) {
    replaceOldSlotSyntax(fileContent, SLOT_INJECT_REGEX);
    isApplied = true;
  }

  return { isApplied, fileContent };
};

module.exports = {
  SLOT_PROVIDE_REGEX,
  SLOT_INJECT_REGEX,
  replaceOldSlotSyntax,
  migrateSlots,
};
