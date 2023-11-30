const { GLOBAL_TRANSLATIONS_REGEX } = require('../index');
const {
  MigrateableTranslations,
  NotMigrateableTranslations
 } = require('./testData');

describe('test GLOBAL_TRANSLATIONS_REGEX', () => {
  test.each(MigrateableTranslations)('GLOBAL_TRANSLATIONS_REGEX should pass with strings containing translations outside vue instance (not referenced via "this")', async (caseString) => {
    expect(GLOBAL_TRANSLATIONS_REGEX.test(caseString)).toBe(true);
  });

  test.each(NotMigrateableTranslations)('GLOBAL_TRANSLATIONS_REGEX should not pass with strings not containing translations from outside vue instance', async (caseString) => {
    expect(GLOBAL_TRANSLATIONS_REGEX.test(caseString)).toBe(false);
  });
});