const path = require('path');
const { migrateToVue3 } = require('./migrationUtils/index');
const { MigrationDelegatesNames } = require('./migrationUtils/MigrationDelegatesNames');

const FILES_TO_MIGRATE_PATH = path.join(__dirname, '../../KOPE/Vue3__kope-frontend/packages/kope--components');
migrateToVue3({
  filesToMigratePath: FILES_TO_MIGRATE_PATH,
  migrationMethods: [MigrationDelegatesNames.REMOVE_EMITS],
});
