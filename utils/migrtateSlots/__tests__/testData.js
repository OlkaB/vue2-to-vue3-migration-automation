const ValidProvidedSlots = [
  `<slot
v-if="title || $slots['card__title']"
name="card__title"   >`,
  '<slot   v-if="title || $slots[\'card__title\']"    name="slot123"   >',
];

const InvalidProvidedSlots = [
  '',
  'true',
  '123',
  `<slot
v-if="title || $slots['card__title']"
   > name="card__title"`,
];

const ValidInjectSlots = [
  `<template
    v-if="title || $slots['card__title']"
    slot="card__title"
  >`,
  '<template   v-if="title || $slots[\'slot123\']"    slot="slot123"   >',
  '<template slot="slotName">',
 ];

 const InvalidInjectSlots = [
  '',
  'true',
  '123',
  `<template
 v-if="title || $slots['card__title']"
   > slot="card__title"`,
  '<template   v-if="title || $slots[\'card__title\']"    name="card__title"   >',
  '<template #slotName>',
 ];

 module.exports = {
  ValidProvidedSlots,
  InvalidProvidedSlots,
  ValidInjectSlots,
  InvalidInjectSlots
 }