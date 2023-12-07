const { removeEventNativeModifier, EVENT_NATIVE_REGEXP } = require('../index');
const {
  MigrateableEventNative,
  NonMigrateableEventNative
 } = require('./testData');

 describe('test removeEventNativeModifier', () => {
  test.each([
    [MigrateableEventNative[0], ['@click="dsdsd"', '@mouseovernative="dsdsds"', '@hover=""']],
    [MigrateableEventNative[1], ['@click.prevent="dsdsd"', '@click.stop.prevent']],
    [MigrateableEventNative[2], ['@click.prevent />']],
    [MigrateableEventNative[3], ['@click.prevent />']],
  ])('removeEventNativeModifier should remove .native modifier', async (fileContent, expectedChunks) => {
    const modifiedContent = removeEventNativeModifier(fileContent);
    const hasAllExpectedChunks = expectedChunks
      .every((chunk) => modifiedContent.includes(chunk));

    expect(modifiedContent).not.toEqual(fileContent);
    expect(EVENT_NATIVE_REGEXP.test(modifiedContent)).toEqual(false);
    expect(hasAllExpectedChunks).toBe(true);
  });

  test.each(NonMigrateableEventNative)('removeEventNativeModifier should not change file content ', async (fileContent) => {
    const modifiedContent = removeEventNativeModifier(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});