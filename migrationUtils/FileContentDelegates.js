const { FILE_TYPES_FOR_MIGRATION } = require('./FilesToMigrate');
const { addEmits } = require('./addEmits/index');
const { migrateTranslations } = require('./migrateTranslations/index');
const { removeEventNativeModifier } = require('./removeEventNativeModifier/index');
const { migrateAttributeSync } = require('./migrateAttributeSync/index');
const { migratePropsAndListeners } = require('./migratePropsAndListeners/index');
const { migrateLifecycleHooks } = require('./migrateLifecycleHooks/index');

exports.FILE_CONTENT_DELEGATES = {
  addEmits: {
    migrateMethod: addEmits,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue],
  },
  migrateTranslations: {
    migrateMethod: migrateTranslations,
    migrateFileTypes: [
      FILE_TYPES_FOR_MIGRATION.vue,
      FILE_TYPES_FOR_MIGRATION,
    ],
  },
  removeEventNativeModifier: {
    migrateMethod: removeEventNativeModifier,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue],
  },
  migrateAttributeSync: {
    migrateMethod: migrateAttributeSync,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue],
  },
  migratePropsAndListeners: {
    migrateMethod: migratePropsAndListeners,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue],
  },
  migrateLifecycleHooks: {
    migrateMethod: migrateLifecycleHooks,
    migrateFileTypes: [
      FILE_TYPES_FOR_MIGRATION.vue,
      FILE_TYPES_FOR_MIGRATION,
    ],
  },
};
