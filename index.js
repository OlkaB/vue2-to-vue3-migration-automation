const path = require('path');
const { migrateToVue3 } = require('./migrationUtils/index');
const { MigrationDelegatesNames } = require('./migrationUtils/MigrationDelegatesNames');

const FILES_TO_MIGRATE_PATH = path.join(__dirname, '../../KOPE/Vue3__kope-frontend/apps/kope-marketplace-webapp/src');

/**
 * triggers automated migration of Vue2 syntax to Vue3
 * @param {String} filesToMigratePath path to the folder with files that needs migration
 * @param {Array<valueof MigrationDelegatesNames>} migrationMethods list of migration methods
 *         that you'd like to apply
 */
migrateToVue3({
  filesToMigratePath: FILES_TO_MIGRATE_PATH,
  migrationMethods: [MigrationDelegatesNames.VUELIDATE],
});
