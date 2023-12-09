const { migrateAttributeSync } = require('../index');
const {
  MigrateableAttributeSync,
  NonMigrateableAttributeSync,
} = require('./testData');

// TODO add tests for non strings

describe('test migrateAttributeSync', () => {
  test.each([
    [MigrateableAttributeSync[0], ['v-model:first-name="first"', 'v-model:last-name="last"']],
    [MigrateableAttributeSync[1], ['v-model:name="name"', 'v-model:vip-user-surname="surname"']],
    [MigrateableAttributeSync[2], ['v-model:age="user.age"', 'v-model:address="user.address"']],
  ])('migrateAttributeSync should replace :attribute.sync binding with newer syntax', async (fileContent, migratedChunks) => {
    const modifiedContent = migrateAttributeSync(fileContent);
    const hasAllExpectedChunks = migratedChunks
      .every((chunk) => modifiedContent.includes(chunk));
    expect(modifiedContent).not.toEqual(fileContent);
    expect(hasAllExpectedChunks).toBe(true);
  });

  test.each(NonMigrateableAttributeSync)('migrateAttributeSync should not change file content if it doesn\'t contain valid :attribute.sync binding', async (fileContent) => {
    const modifiedContent = migrateAttributeSync(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});
