const { VUELIDATE_PROPERTY_REGEX } = require('../index');
const {
  MigrateableVuelidatePropertyNames,
  NonMigrateableVuelidatePropertyNames,
} = require('./testData');

describe('test VUELIDATE_PROPERTY_REGEX', () => {
  test.each(MigrateableVuelidatePropertyNames)('VUELIDATE_PROPERTY_REGEX should pass with strings containing valid Vue2 $v property [case %s]', async (caseString) => {
    expect(caseString.match(VUELIDATE_PROPERTY_REGEX)?.length).toBeGreaterThan(0);
  });

  test.each(NonMigrateableVuelidatePropertyNames)('VUELIDATE_PROPERTY_REGEX should not pass with strings not containing valid Vue2 $v property [case %s]', async (caseString) => {
    expect(caseString.match(VUELIDATE_PROPERTY_REGEX)).toBe(null);
  });
});
