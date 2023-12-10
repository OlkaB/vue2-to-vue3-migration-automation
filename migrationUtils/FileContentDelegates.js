const { FILE_TYPES_FOR_MIGRATION } = require('./FilesToMigrate');

const { migrateScopedSlots } = require('./migrateScopedSlots/index');
const { addEmits } = require('./addEmits/index');
const { migrateTranslations } = require('./migrateTranslations/index');
const { removeEventNativeModifier } = require('./removeEventNativeModifier/index');
const { migrateAttributeSync } = require('./migrateAttributeSync/index');
const { migrateLifecycleHooks } = require('./migrateLifecycleHooks/index');

const DEFAULT_MIGRATION_FILES_TYPES = [
  FILE_TYPES_FOR_MIGRATION.vue,
  FILE_TYPES_FOR_MIGRATION.js, // includes mixins
];

exports.FILE_CONTENT_DELEGATES = {
  migrateScopedSlots: {
    migrateMethod: migrateScopedSlots,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  addEmits: {
    migrateMethod: addEmits,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  migrateTranslations: {
    migrateMethod: migrateTranslations,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  removeEventNativeModifier: {
    migrateMethod: removeEventNativeModifier,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  migrateAttributeSync: {
    migrateMethod: migrateAttributeSync,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  migrateLifecycleHooks: {
    migrateMethod: migrateLifecycleHooks,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
};
