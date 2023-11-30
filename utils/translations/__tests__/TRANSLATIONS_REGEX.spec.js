const { TRANSLATIONS_REGEX } = require('../index');
const {
  MigrateableTranslations,
  NotMigrateableTranslations
 } = require('./testData');

describe('test TRANSLATIONS_REGEX', () => {
  test.each(MigrateableTranslations)('TRANSLATIONS_REGEX should pass with strings containing translations outside vue instance (not referenced via "this")', async (caseString) => {
    expect(TRANSLATIONS_REGEX.test(caseString)).toBe(true);
  });

  test.each(NotMigrateableTranslations)('TRANSLATIONS_REGEX should not pass with strings not containing translations from outside vue instance', async (caseString) => {
    expect(TRANSLATIONS_REGEX.test(caseString)).toBe(false);
  });
});