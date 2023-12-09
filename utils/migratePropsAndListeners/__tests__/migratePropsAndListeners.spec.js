const { migratePropsAndListeners, PROPS_LISTENERS_REGEX } = require('../index');
const {
  MigrateableStrings,
  NonMigrateableStrings,
} = require('./testData');

describe('test migratePropsAndListeners', () => {
  test.each([
    [MigrateableStrings[0], ['v-bind="$attrs.$props"', 'v-on="$attrs.$listeners"']],
    [MigrateableStrings[1], ["$emit('remove', this.$attrs.$props)", 'this.$attrs.$listeners[listener]']],
    [MigrateableStrings[2], ['...this.$attrs.$listeners', '$attrs.$props.config: {']],
    [MigrateableStrings[3], ['omit(this.$attrs.$props.param']],
    [MigrateableStrings[4], ['wrapper.vm.$attrs.$props.label;']],
    [MigrateableStrings[5], ['v-bind="{...$attrs.$props, otherProp}"', 'v-on="$attrs.$listeners"', "if (!this.$attrs.$listeners['tertiary-click']"]],
  ])('migratePropsAndListeners should replace every $props & $listeners syntax with $attrs.$props or $attrs.$listeners', async (fileContent, expectedTranslationsChunks) => {
    const modifiedContent = migratePropsAndListeners(fileContent);
    const hasAllExpectedChunks = expectedTranslationsChunks
      .every((chunk) => modifiedContent.includes(chunk));

    expect(modifiedContent).not.toEqual(fileContent);
    expect(PROPS_LISTENERS_REGEX.test(modifiedContent)).toBe(false);
    expect(hasAllExpectedChunks).toBe(true);
  });

  test.each(NonMigrateableStrings)('migratePropsAndListeners should not change file content if it doesn\'t contain translations via translation instance', async (fileContent) => {
    const modifiedContent = migratePropsAndListeners(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});
