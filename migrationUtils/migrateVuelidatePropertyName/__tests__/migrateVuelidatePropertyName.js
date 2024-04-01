const { migrateVuelidatePropertyName, VUELIDATE_PROPERTY_REGEX } = require('../index');
const {
  MigrateableVuelidatePropertyNames,
  NonMigrateableVuelidatePropertyNames,
} = require('./testData');

describe('test migrateVuelidatePropertyName', () => {
  test.each([
    [MigrateableVuelidatePropertyNames[0], ['if (this.v$.$validate()) return']],
    [MigrateableVuelidatePropertyNames[1], ['v$[fieldName]?.$touch()']],
    [MigrateableVuelidatePropertyNames[2], ['stepFieldNames.every((fieldName) => !v$[fieldName].$invalid);']],
    [MigrateableVuelidatePropertyNames[3], ['formValidation: v$,']],
    [MigrateableVuelidatePropertyNames[4], ['@blur="v$.name.$touch()"']],
    [MigrateableVuelidatePropertyNames[5], ['return this.v$.$dirty && this.v$.agreeDisableCache.checked === false;']],
    [MigrateableVuelidatePropertyNames[6], [`:invalid-message="hasUploadedFiles ? '' : getInvalidMessage('selectedFiles', undefined, v$)"`]],
    [MigrateableVuelidatePropertyNames[7], ['v$: {']],
    [MigrateableVuelidatePropertyNames[8], ['v$: this.v$.selectedAccreditation,']],
  ])('migrateVuelidatePropertyName should replace $v property with newer syntax [case %s]', async (fileContent, migratedChunks) => {
    const modifiedContent = migrateVuelidatePropertyName(fileContent);
    const hasAllExpectedChunks = migratedChunks
      .every((chunk) => modifiedContent.includes(chunk));

    expect(modifiedContent).not.toEqual(fileContent);
    expect(VUELIDATE_PROPERTY_REGEX.test(modifiedContent)).toBe(false);
    expect(hasAllExpectedChunks).toBe(true);
  });

  test.each(NonMigrateableVuelidatePropertyNames)('migrateVuelidatePropertyName should not change file content if it doesn\'t contain valid $v property [case %s]', async (fileContent) => {
    const modifiedContent = migrateVuelidatePropertyName(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});
