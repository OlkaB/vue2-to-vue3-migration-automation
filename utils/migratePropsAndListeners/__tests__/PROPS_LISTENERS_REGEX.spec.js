const { PROPS_LISTENERS_REGEX } = require('../index');
const {
  MigrateableProps,
  MigrateableListeners,
  NonMigrateableProps,
  NonMigrateableListeners,
} = require('./testData');

describe('test PROPS_LISTENERS_REGEX', () => {
  test.each(MigrateableProps)('PROPS_LISTENERS_REGEX should pass with strings containing $props syntax)', async (caseString) => {
    expect(PROPS_LISTENERS_REGEX.test(caseString)).toBe(true);
  });

  test.each(MigrateableListeners)('PROPS_LISTENERS_REGEX should pass with strings containing $listeners syntax', async (caseString) => {
    expect(PROPS_LISTENERS_REGEX.test(caseString)).toBe(true);
  });

  test.each(NonMigrateableProps)('PROPS_LISTENERS_REGEX should not pass with strings not containing $props syntax', async (caseString) => {
    expect(PROPS_LISTENERS_REGEX.test(caseString)).toBe(false);
  });

  test.each(NonMigrateableListeners)('PROPS_LISTENERS_REGEX should not pass with strings not containing $listeners syntax', async (caseString) => {
    expect(PROPS_LISTENERS_REGEX.test(caseString)).toBe(false);
  });
});
