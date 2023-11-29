const FILE_TYPES_FOR_MIGRATION = {
  vue: 'vue',
  js: 'js'
};

const EXTENSION_PER_FILE_TYPE = {
  [FILE_TYPES_FOR_MIGRATION.vue]: '.vue',
  [FILE_TYPES_FOR_MIGRATION.js]: '.js'
};

const FILES_TO_MIGRATE_EXTENSIONS = Object.values(EXTENSION_PER_FILE_TYPE);

module.exports = {
  FILES_TO_MIGRATE_EXTENSIONS,
  EXTENSION_PER_FILE_TYPE,
  FILE_TYPES_FOR_MIGRATION
};