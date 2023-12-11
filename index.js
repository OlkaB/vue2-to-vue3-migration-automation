const path = require('path');
const { migrateToVue3 } = require('./migrationUtils/index');
const { MigrationDelegatesNames } = require('./migrationUtils/MigrationDelegatesNames');

const FILES_TO_MIGRATE_PATH = path.join(__dirname, 'testFiles');
migrateToVue3({
  filesToMigratePath: FILES_TO_MIGRATE_PATH,
  migrationMethods: Object.values(MigrationDelegatesNames),
});
