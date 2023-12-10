const { TRANSLATIONS_VIA_INSTANCE_REGEX } = require('../index');
const {
  MigrateableTranslations,
  NotMigrateableTranslations,
} = require('./testData');

describe('test TRANSLATIONS_VIA_INSTANCE_REGEX', () => {
  test.each(MigrateableTranslations)('TRANSLATIONS_VIA_INSTANCE_REGEX should pass with strings containing translations outside vue instance (not referenced via "this")', async (caseString) => {
    expect(TRANSLATIONS_VIA_INSTANCE_REGEX.test(caseString)).toBe(true);
  });

  test.each(NotMigrateableTranslations)('TRANSLATIONS_VIA_INSTANCE_REGEX should not pass with strings not containing translations from outside vue instance', async (caseString) => {
    expect(TRANSLATIONS_VIA_INSTANCE_REGEX.test(caseString)).toBe(false);
  });
});
