const { FILE_TYPES_FOR_MIGRATION } = require('./FilesToMigrate.js');
const { migrateSlots } = require('./migrtateSlots/index.js');
const { addEmits } = require('./addEmits/index.js');
const { migrateTranslations } = require('./migrateTranslations/index.js');
const { migrateAttributeSync } = require('./migrateAttributeSync/index.js');


exports.FILE_CONTENT_DELEGATES = {
  migrateSlots: {
    migrateMethod: migrateSlots,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue]
  },
  addEmits: {
    migrateMethod: addEmits,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue]
  },
  migrateTranslations: {
    migrateMethod: migrateTranslations,
    migrateFileTypes: [
      FILE_TYPES_FOR_MIGRATION.vue,
      FILE_TYPES_FOR_MIGRATION.js
    ]
  },
  migrateAttributeSync: {
    migrateMethod: migrateAttributeSync,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue]
  }
};