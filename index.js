const path = require('path');
const { migrateToVue3 } = require('./utils/index');

const FILES_TO_MIGRATE_PATH = path.join(__dirname, 'testFiles');
migrateToVue3(FILES_TO_MIGRATE_PATH);
