const { migrateSlots } = require('./migrtateSlots/index.js');
const { FILE_TYPES_FOR_MIGRATION } = require('./FilesToMigrate.js');

exports.FILE_CONTENT_DELEGATES = {
  migrateSlots: {
    migrateMethod: migrateSlots,
    migrateFileTypes: [FILE_TYPES_FOR_MIGRATION.vue]
  },
};