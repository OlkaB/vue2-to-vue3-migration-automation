const ValidProvidedSlots = [
  `<slot
v-if="title || $slots['card__title']"
name="card__title"   >`,
  '<slot   v-if="title || $slots[\'card__title\']"    name="slot123"   >',
];

const InvalidProvidedSlots = [
  "",
  "true",
  "123",
  `<slot
v-if="title || $slots['card__title']"
   > name="card__title"`,
  '<slot :name="noDataConfig.slotName">',
];

const ValidInjectSlots = [
  `<template
    v-if="title || $slots['card__title']"
    slot="card__title"
  >`,
  '<template   v-if="title || $slots[\'slot123\']"    slot="slot123"   >',
  '<template slot="slotName">',
  '<template   v-if="title || $slots[\'slot123\']"  :attribute="ok"  slot="slot123"   >',
];

const InvalidInjectSlots = [
  "",
  "true",
  "123",
  `<template
 v-if="title || $slots['card__title']"
   > slot="card__title"`,
  '<template   v-if="title || $slots[\'card__title\']"    name="card__title"   >',
  "<template #slotName>",
  '<template   v-if="title || $slots[\'card__title\']"    :slot="card__title"   >',
  `<template
 v-if="title || $slots['card__title']"
   > slot="card__title">`
];

module.exports = {
  ValidProvidedSlots,
  InvalidProvidedSlots,
  ValidInjectSlots,
  InvalidInjectSlots,
};
