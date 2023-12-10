const MigrateableEventNative = [
  `<Component @click.native="dsdsd" @mouseovernative="dsdsds" @hover.native=""></Component>`,
  `<Component @click.prevent.native="dsdsd"@click.stop.native.prevent></Component>`,
  `<Component @click.prevent.native />`,
  `<Component @click.native.prevent />`,
];

const NonMigrateableEventNative = [
  `<Component @click:native="dsdsd" @mouseovernative="dsdsds" @hover-native=""></Component>`,
  `<Form @click :user="country.native" @click.natives=""></Form>`,
  `function() {
    const placeholder = object.native
  }`,
];

module.exports = {
  MigrateableEventNative,
  NonMigrateableEventNative,
};
