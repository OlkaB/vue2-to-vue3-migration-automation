const MigrateableStrings = [
  `
  this.hasCustomOptions = !!this.$scopedSlots.option;
  this.hasCustomConfig = !!this.$scopedSlots.config;
  `,

  `
  <template v-slot:range-text="{ scope }">
  <slot
    v-if="$scopedSlots['range-text']"
    name="range-text"
    :scope="scope"
  />
</template>

<template v-slot:of-n-pages="{ scope }">
  <slot
    v-if="$scopedSlots['of-n-pages']"
    name="of-n-pages"
    :scope="scope"
  />
</template>
`,

  `return this.$scopedSlots[prop] && execute && this.$scopedSlots[prop](options) || this.$slots[prop] || undefined;`,
];

const NonMigrateableStrings = [
  `
  this.hasCustomOptions = !!this.scopedSlots.option;
  this.hasCustomConfig = !!$scopedSlots.config;
  this.hasCustomConfig = !!this.$scopedSlotss.config;
  `,
  `
  <template v-slot:range-text="{ scope }">
  <slot
    v-if="scopedSlots['range-text']"
    name="range-text"
    :scope="scope"
  />
</template>

<template v-slot:of-n-pages="{ scope }">
  <slot
    v-if="object.$scopedSlots['of-n-pages']"
    name="of-n-pages"
    :scope="scope"
  />
</template>
`,

  `return instance.$scopedSlots[prop] && execute && instance.$scopedSlots[prop](options) || instance.$scopedSlots[prop] || instance.$slots[prop] || undefined;`,
];

module.exports = {
  MigrateableStrings,
  NonMigrateableStrings,
};
