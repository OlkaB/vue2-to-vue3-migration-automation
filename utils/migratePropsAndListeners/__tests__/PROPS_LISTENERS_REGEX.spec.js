const { PROPS_LISTENERS_REGEX } = require('../index');
const {
  MigrateableStrings,
  NonMigrateableStrings,
} = require('./testData');

describe('test PROPS_LISTENERS_REGEX', () => {
  test.each(MigrateableStrings)('PROPS_LISTENERS_REGEX should pass with strings containing $props syntax)', async (caseString) => {
    expect(PROPS_LISTENERS_REGEX.test(caseString)).toBe(true);
  });

  test.each(NonMigrateableStrings)('PROPS_LISTENERS_REGEX should not pass with strings not containing $props syntax', async (caseString) => {
    expect(PROPS_LISTENERS_REGEX.test(caseString)).toBe(false);
  });
});
