const { FILE_TYPES_FOR_MIGRATION } = require('./FilesToMigrate');
const { MigrationDelegatesNames } = require('./MigrationDelegatesNames');

const { migrateScopedSlots } = require('./migrateScopedSlots/index');
const { addEmits } = require('./addEmits/index');
const { migrateTranslations } = require('./migrateTranslations/index');
const { removeEventNativeModifier } = require('./removeEventNativeModifier/index');
const { migrateAttributeSync } = require('./migrateAttributeSync/index');
const { migrateLifecycleHooks } = require('./migrateLifecycleHooks/index');
const { removeEmits } = require('./removeEmits/index');
const { migrateUid } = require('./migrateUid/index');
const { migrateVuelidatePropertyName } = require('./migrateVuelidatePropertyName/index');

const DEFAULT_MIGRATION_FILES_TYPES = [
  FILE_TYPES_FOR_MIGRATION.vue,
  FILE_TYPES_FOR_MIGRATION.js, // includes mixins
];

exports.FILE_CONTENT_DELEGATES = {
  [MigrationDelegatesNames.SCOPED_SLOTS]: {
    migrateMethod: migrateScopedSlots,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  [MigrationDelegatesNames.ADD_EMITS]: {
    migrateMethod: addEmits,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  [MigrationDelegatesNames.TRANSLATIONS]: {
    migrateMethod: migrateTranslations,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  [MigrationDelegatesNames.EVENT_NATIVE_MODIFIER]: {
    migrateMethod: removeEventNativeModifier,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  [MigrationDelegatesNames.ATTRIBUTE_SYNC]: {
    migrateMethod: migrateAttributeSync,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  [MigrationDelegatesNames.LIFECYCLE_HOOKS]: {
    migrateMethod: migrateLifecycleHooks,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  [MigrationDelegatesNames.REMOVE_EMITS]: {
    migrateMethod: removeEmits,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
  [MigrationDelegatesNames.UID]: {
    migrateMethod: migrateUid,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue],
  },
  [MigrationDelegatesNames.VUELIDATE]: {
    migrateMethod: migrateVuelidatePropertyName,
    migrateFileTypes: DEFAULT_MIGRATION_FILES_TYPES,
  },
};
