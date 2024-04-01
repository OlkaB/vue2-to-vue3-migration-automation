const { NATIVE_UID_REGEX } = require('../index');
const {
  MigrateableUid,
  NonMigrateableUid,
} = require('./testData');

describe('test NATIVE_UID_REGEX', () => {
  test.each(MigrateableUid)('NATIVE_UID_REGEX should pass with strings containing valid Vue2 _uid property [case %s]', async (caseString) => {
    expect(caseString.match(NATIVE_UID_REGEX)?.length).toBeGreaterThan(0);
  });

  test.each(NonMigrateableUid)('NATIVE_UID_REGEX should not pass with strings not containing valid Vue2 _uid property [case %s]', async (caseString) => {
    expect(caseString.match(NATIVE_UID_REGEX)).toBe(null);
  });
});
