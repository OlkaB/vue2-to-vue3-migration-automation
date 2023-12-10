const MigrateableAttributeSync = [
  `<UserName
    :first-name.sync="first"
    :last-name.sync="last"
  />`,
  `<Component
    :name.sync="name"
    :other-attribute="ok"
    :vip-user-surname.sync="surname"
  />`,
  `<SomeForm :age.sync="user.age"  v-model="category"   :address.sync="user.address"
  >...</SomeForm>`,
];

const NonMigrateableAttributeSync = [
  `<UserName
    :first-name.syncs="first"
    :last-name="last"
  />`,
  `<Component
    :name="name"
    surname.sync="surname"
  />`,
  `<SomeForm
    :age.number="user.age"
    :address="user.address"
  >...</SomeForm>`,
  '',
];

module.exports = {
  MigrateableAttributeSync,
  NonMigrateableAttributeSync,
};
