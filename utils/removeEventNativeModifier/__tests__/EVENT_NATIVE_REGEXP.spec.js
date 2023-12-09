const { EVENT_NATIVE_REGEXP } = require('../index');
const {
  MigrateableEventNative,
  NonMigrateableEventNative,
} = require('./testData');

describe('test EVENT_NATIVE_REGEXP', () => {
  test.each(MigrateableEventNative)('EVENT_NATIVE_REGEXP should pass with strings containing valid @event... .native syntax', async (caseString) => {
    expect(EVENT_NATIVE_REGEXP.test(caseString)).toBe(true);
  });

  test.each(NonMigrateableEventNative)('EVENT_NATIVE_REGEXP should not pass with strings not containing valid @event... .native syntax', async (caseString) => {
    expect(EVENT_NATIVE_REGEXP.test(caseString)).toBe(false);
  });
});
