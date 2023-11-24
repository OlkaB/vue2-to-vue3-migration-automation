const SlotProvideRegex = /<slot[^>]*(name="([\w+\d+-_]+)")/;
const SlotInjectRegex = /<template[^>]*(slot="([\w+\d+-_]+)")/;

const providesOldSlots = (content) => SlotProvideRegex.test(content);
const injectsOldSlots = (content) => SlotInjectRegex.test(content);

const replaceOldSlotSyntax = (fileContent, regex) => fileContent.replaceAll(
  new RegExp(regex, 'gm'),
  (match, group1, group2) => match.replace(group1, `#${group2}`),
);

const MigrateSlots = (fileContent) => {
  if (providesOldSlots(fileContent)) {
    replaceOldSlotSyntax(fileContent, SlotProvideRegex);
  }

  if (injectsOldSlots(fileContent)) {
    replaceOldSlotSyntax(fileContent, SlotInjectRegex);
  }

  return fileContent;
};

module.exports = {
  SlotProvideRegex,
  SlotInjectRegex,
  replaceOldSlotSyntax,
  MigrateSlots,
};
