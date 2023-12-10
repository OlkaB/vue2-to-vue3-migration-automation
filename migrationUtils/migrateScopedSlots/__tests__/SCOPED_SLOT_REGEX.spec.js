const { SCOPED_SLOT_REGEX } = require('../index');
const { MigrateableStrings, NonMigrateableStrings } = require('./testData');

describe('test SCOPED_SLOT_REGEX', () => {
  test.each(MigrateableStrings)('SCOPED_SLOT_REGEX should pass with valid scoped slot strings', async (validString) => {
    expect(SCOPED_SLOT_REGEX.test(validString)).toBe(true);
  });

  test.each(NonMigrateableStrings)('SCOPED_SLOT_REGEX should fail with invalid scoped slot strings', async (invalidString) => {
    expect(SCOPED_SLOT_REGEX.test(invalidString)).toBe(false);
  });
});
