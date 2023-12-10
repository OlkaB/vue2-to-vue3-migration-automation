const { LIFECYCLE_HOOKS_REGEX } = require('../index');
const {
  MigrateableStrings,
  NonMigrateableStrings,
} = require('./testData');

describe('test LIFECYCLE_HOOKS_REGEX', () => {
  test.each(MigrateableStrings)('LIFECYCLE_HOOKS_REGEX should pass with strings containing migrateable slot syntax)', async (caseString) => {
    expect(LIFECYCLE_HOOKS_REGEX.test(caseString)).toBe(true);
  });

  test.each(NonMigrateableStrings)('LIFECYCLE_HOOKS_REGEX should not pass with strings not containing migrateable slot syntax', async (caseString) => {
    expect(LIFECYCLE_HOOKS_REGEX.test(caseString)).toBe(false);
  });
});
