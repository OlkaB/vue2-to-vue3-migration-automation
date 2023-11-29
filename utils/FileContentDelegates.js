const { FILE_TYPES_FOR_MIGRATION } = require('./FilesToMigrate.js');
const { migrateSlots } = require('./migrtateSlots/index.js');
const { addEmits } = require('./addEmits/index.js');

exports.FILE_CONTENT_DELEGATES = {
  migrateSlots: {
    migrateMethod: migrateSlots,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue]
  },
  addEmits: {
    migrateMethod: addEmits,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue]
  }
};