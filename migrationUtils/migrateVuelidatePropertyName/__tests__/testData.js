const MigrateableVuelidatePropertyNames = [
  'if (this.$v.$validate()) return',
  '@blur="$v[fieldName]?.$touch()"',
  'stepFieldNames.every((fieldName) => !$v[fieldName].$invalid);',
  `:route-props="{
    formValidation: $v,
    shortenedDataModel: hasShortenedDrawingTemplateData
  }"`,
  '@blur="$v.name.$touch()"',
  'return this.$v.$dirty && this.$v.agreeDisableCache.checked === false;',
  `:invalid-message="hasUploadedFiles ? '' : getInvalidMessage('selectedFiles', undefined, $v)"`,
  `watch: {
    $v: {
      immediate: true,
      deep: true,
      async handler() {`,
  `{
      paramName,
      $v: this.$v.selectedAccreditation,
      translationsPath: 'components.forms'
    }`,
];

const NonMigrateableVuelidatePropertyNames = [
  'if (this.$validate) return',
  ':some-attr="ds$v"',
  '',
];

module.exports = {
  MigrateableVuelidatePropertyNames,
  NonMigrateableVuelidatePropertyNames,
};
