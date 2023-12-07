const { ATTRIBUTE_SYNC_REGEX } = require('../index');
const {
  MigrateableAttributeSync,
  NonMigrateableAttributeSync,
} = require('./testData');

describe('test ATTRIBUTE_SYNC_REGEX', () => {
  test.each(MigrateableAttributeSync)('ATTRIBUTE_SYNC_REGEX should pass with strings containing valid :attribute.sync binding', async (caseString) => {
    expect(ATTRIBUTE_SYNC_REGEX.test(caseString)).toBe(true);
  });

  test.each(NonMigrateableAttributeSync)('ATTRIBUTE_SYNC_REGEX should not pass with strings not containing valid :attribute.sync binding', async (caseString) => {
    expect(ATTRIBUTE_SYNC_REGEX.test(caseString)).toBe(false);
  });
});