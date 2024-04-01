const VUELIDATE_PROPERTY_REGEX = /[^a-zA-Z0-9](\$v)[^a-zA-Z0-9]/g; // needs improvement - works under control and dev checks
const NEW_VUELIDATE_PROPERTY_SYNTAX = 'v$';

const migrateVuelidatePropertyName = (fileContent) => {
  if (typeof fileContent !== 'string' || !VUELIDATE_PROPERTY_REGEX.test(fileContent)) {
    return fileContent;
  }
  return fileContent
    .replace(VUELIDATE_PROPERTY_REGEX, (match, group1) => match
      .replace(group1, NEW_VUELIDATE_PROPERTY_SYNTAX));
};

module.exports = {
  VUELIDATE_PROPERTY_REGEX,
  migrateVuelidatePropertyName,
};
