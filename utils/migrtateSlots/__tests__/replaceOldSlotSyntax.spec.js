const { SlotProvideRegex, SlotInjectRegex, replaceOldSlotSyntax } = require('../migrtateSlots');
const {
  ValidInjectSlots,
  InvalidInjectSlots,
  ValidProvidedSlots,
  InvalidProvidedSlots
 } = require('./testData');


describe('test replaceOldSlotSyntax', () => {
  test.each([
    [ValidInjectSlots[0], `<template
    v-if="title || $slots['card__title']"
    #card__title
  >`],
    [ValidInjectSlots[1], '<template   v-if="title || $slots[\'slot123\']"    #slot123   >'],
    [ValidInjectSlots[2], '<template #slotName>'],
  ])('replace ValidInjectSlots syntax', async (stringInput, stringOutput) => {
    expect(replaceOldSlotSyntax(stringInput, SlotInjectRegex)).toEqual(stringOutput);
  });

  test.each([
    [ValidProvidedSlots[0], `<slot
    v-if="title || $slots['card__title']"
    #card__title   >`],
    [ValidProvidedSlots[1], '<slot   v-if="title || $slots[\'card__title\']"    #slot123   >'],
  ])('replace ValidProvidedSlots syntax', async (stringInput, stringOutput) => {
    expect(replaceOldSlotSyntax(stringInput, SlotProvideRegex)).toEqual(stringOutput);
  });

  test.each(InvalidInjectSlots)('replaceOldSlotSyntax should return unchanged provided string', async (stringInput) => {
    expect(replaceOldSlotSyntax(stringInput, SlotInjectRegex)).toEqual(stringInput);
  });

  test.each(InvalidProvidedSlots)('replaceOldSlotSyntax should return unchanged provided string', async (stringInput) => {
    expect(replaceOldSlotSyntax(stringInput, SlotProvideRegex)).toEqual(stringInput);
  });
});
