const MigrateableEventNative = [
  `<Component @click.native="dsdsd" @mouseovernative="dsdsds" @hover.native=""></Component>`,
  `<Component @click.prevent.native="dsdsd"@click.stop.native.prevent></Component>`
];

const NonMigrateableEventNative = [
  `<Component @click:native="dsdsd" @mouseovernative="dsdsds" @hover-native=""></Component>`,
  `<Form :user="country.native"></Form>`,
  `function() {
    const placeholder = object.native
  }`
];

module.exports = {
  MigrateableEventNative,
  NonMigrateableEventNative
};