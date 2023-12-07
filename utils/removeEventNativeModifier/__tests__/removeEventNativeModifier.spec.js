const { removeEventNativeModifier, EVENT_NATIVE_REGEXP } = require('../index');
const {
  MigrateableEventNative,
  NonMigrateableEventNative
 } = require('./testData');

 describe('test removeEventNativeModifier', () => {
  test.each(MigrateableEventNative)('removeEventNativeModifier should remove .native modifier', async (fileContent) => {
    const modifiedContent = removeEventNativeModifier(fileContent);

    expect(modifiedContent).not.toEqual(fileContent);
    expect(EVENT_NATIVE_REGEXP.test(modifiedContent)).toEqual(false);
  });

  test.each(NonMigrateableEventNative)('removeEventNativeModifier should not change file content ', async (fileContent) => {
    const modifiedContent = removeEventNativeModifier(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});