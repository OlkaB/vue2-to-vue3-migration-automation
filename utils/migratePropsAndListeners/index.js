const PROPS_LISTENERS_REGEX = /(?<=this\.|wrapper.vm.|\s|['"`]|=>)(\$props\b|\$listeners\b)[^\w]*/;

function migratePropsAndListeners() {
  // TODO
}

module.exports = {
  PROPS_LISTENERS_REGEX,
  migratePropsAndListeners,
};
