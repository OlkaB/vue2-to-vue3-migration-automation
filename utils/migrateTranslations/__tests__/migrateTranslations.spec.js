const { migrateTranslations } = require('../index');
const {
  MigrateableFilesContent,
  NotMigrateableTranslations,
} = require('./testData');

describe('test migrateTranslations', () => {
  test.each([
    [MigrateableFilesContent[0], ["vueI18n.global.t('global.download')", "VueI18n.global.t('components.widget.federateItem'"]],
    [MigrateableFilesContent[1], ["i18n.global.tc('global.copyItem', 1)", "VueI18n.global.t('components.widget.largePreview')"]],
    [MigrateableFilesContent[2], ["VueI18n.global.t('global.pleaseWaitLoading', { itemName: i18n.global.tc('global.option', 2)"]],
  ])('migrateTranslations should replace translations via translation instance', async (fileContent, expectedTranslationsChunks) => {
    const modifiedContent = migrateTranslations(fileContent);
    const hasAllExpectedTranslationChunks = expectedTranslationsChunks
      .every((chunk) => modifiedContent.includes(chunk));
    expect(modifiedContent).not.toEqual(fileContent);
    expect(hasAllExpectedTranslationChunks).toBe(true);
  });

  test.each(NotMigrateableTranslations)('migrateTranslations should not change file content if it doesn\'t contain translations via translation instance', async (fileContent) => {
    const modifiedContent = migrateTranslations(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});
