const { migrateLifecycleHooks, LIFECYCLE_HOOKS_REGEX } = require('../index');
const {
  MigrateableStrings,
  NonMigrateableStrings,
} = require('./testData');

describe('test migrateLifecycleHooks', () => {
  test.each([
    [MigrateableStrings[0], ['beforeUnmount']],
    [MigrateableStrings[1], ['unmounted']],
    [MigrateableStrings[2], ['beforeUnmount', 'unmounted']],
  ])('migrateLifecycleHooks should replace migrateable hooks with new ones', async (fileContent, expectedTranslationsChunks) => {
    const modifiedContent = migrateLifecycleHooks(fileContent);
    const hasAllExpectedChunks = expectedTranslationsChunks
      .every((chunk) => modifiedContent.includes(chunk));

    expect(modifiedContent).not.toEqual(fileContent);
    expect(LIFECYCLE_HOOKS_REGEX.test(modifiedContent)).toBe(false);
    expect(hasAllExpectedChunks).toBe(true);
  });

  test.each(NonMigrateableStrings)('migrateLifecycleHooks should not change file content if it doesn\'t contain migrateable hooks', async (fileContent) => {
    const modifiedContent = migrateLifecycleHooks(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});
