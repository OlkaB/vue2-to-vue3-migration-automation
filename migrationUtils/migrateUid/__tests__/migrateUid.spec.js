const { migrateUid, NATIVE_UID_REGEX } = require('../index');
const {
  MigrateableUid,
  NonMigrateableUid,
} = require('./testData');

describe('test migrateUid', () => {
  test.each([
    [MigrateableUid[0], ['if (!viewType || Number(mapId) !== this.$.uid) return']],
    [MigrateableUid[1], [':some-attr="$.uid"']],
    [MigrateableUid[2], [':some-attr="$.uid + index"']],
  ])('migrateUid should replace _uid property with newer syntax [case %s]', async (fileContent, migratedChunks) => {
    const modifiedContent = migrateUid(fileContent);
    const hasAllExpectedChunks = migratedChunks
      .every((chunk) => modifiedContent.includes(chunk));

    expect(modifiedContent).not.toEqual(fileContent);
    expect(NATIVE_UID_REGEX.test(modifiedContent)).toBe(false);
    expect(hasAllExpectedChunks).toBe(true);
  });

  test.each(NonMigrateableUid)('migrateUid should not change file content if it doesn\'t contain valid _uid property [case %s]', async (fileContent) => {
    const modifiedContent = migrateUid(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});
