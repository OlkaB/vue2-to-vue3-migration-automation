const { migrateScopedSlots, SCOPED_SLOT_REGEX } = require('../index');
const {
  MigrateableStrings,
  NonMigrateableStrings,
} = require('./testData');

describe('test migrateScopedSlots', () => {
  test.each([
    [MigrateableStrings[0], ['!!this.$slots.option', '!!this.$slots.config']],
    [MigrateableStrings[1], [`v-if="$slots['range-text']"`, `v-if="$slots['of-n-pages']"`]],
    [MigrateableStrings[2], ['this.$slots[prop]', '&& this.$slots[prop](options)']],
  ])('migrateScopedSlots should replace $scopedSlots syntax with $slots one', async (fileContent, expectedTranslationsChunks) => {
    const modifiedContent = migrateScopedSlots(fileContent);
    const hasAllExpectedChunks = expectedTranslationsChunks
      .every((chunk) => modifiedContent.includes(chunk));

    expect(modifiedContent).not.toEqual(fileContent);
    expect(SCOPED_SLOT_REGEX.test(modifiedContent)).toBe(false);
    expect(hasAllExpectedChunks).toBe(true);
  });

  test.each(NonMigrateableStrings)('migrateScopedSlots should not change file content if it doesn\'t contain $scopedSlots syntax', async (fileContent) => {
    const modifiedContent = migrateScopedSlots(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});
