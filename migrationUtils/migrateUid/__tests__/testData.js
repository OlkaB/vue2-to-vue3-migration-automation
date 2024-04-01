const MigrateableUid = [
  'if (!viewType || Number(mapId) !== this._uid) return',
  ':some-attr="_uid"',
  ':some-attr="_uid + index"',
];

const NonMigrateableUid = [
  'if (!viewType || Number(mapId) !== dsad_uid) return',
  ':some-attr="_uidAe"',
  '',
];

module.exports = {
  MigrateableUid,
  NonMigrateableUid,
};
