const { SLOT_PROVIDE_REGEX, SLOT_INJECT_REGEX, replaceOldSlotSyntax } = require('../index');
const {
  ValidInjectSlots,
  InvalidInjectSlots,
  ValidProvidedSlots,
  InvalidProvidedSlots
 } = require('./testData');
 const { getWhiteSpaceCleanedString } = require('./testUtils');



const testString = ({stringInput, stringOutput, testRegex}) =>  expect(getWhiteSpaceCleanedString(replaceOldSlotSyntax(stringInput, testRegex))).toEqual(getWhiteSpaceCleanedString(stringOutput));

describe('test replaceOldSlotSyntax', () => {
  test.each([
    [ValidInjectSlots[0], `<template
    v-if="title || $slots['card__title']"
    #card__title
  >`],
    [ValidInjectSlots[1], '<template   v-if="title || $slots[\'slot123\']"    #slot123   >'],
    [ValidInjectSlots[2], '<template #slotName>'],
  ])('replace ValidInjectSlots syntax', async (stringInput, stringOutput) => {
    testString({stringInput, stringOutput, testRegex: SLOT_INJECT_REGEX})
  });

  test.each([
    [ValidProvidedSlots[0], `<slot
    v-if="title || $slots['card__title']"
    #card__title   >`],
    [ValidProvidedSlots[1], '<slot   v-if="title || $slots[\'card__title\']"    #slot123   >'],
  ])('replace ValidProvidedSlots syntax', async (stringInput, stringOutput) => {
    testString({stringInput, stringOutput, testRegex: SLOT_PROVIDE_REGEX});
  });

  test.each(InvalidInjectSlots)('replaceOldSlotSyntax should return unchanged provided string', async (stringInput) => {
    testString({stringInput, stringOutput: stringInput, testRegex: SLOT_INJECT_REGEX});
  });

  test.each(InvalidProvidedSlots)('replaceOldSlotSyntax should return unchanged provided string', async (stringInput) => {
    testString({stringInput, stringOutput: stringInput, testRegex: SLOT_PROVIDE_REGEX});
  });
});
