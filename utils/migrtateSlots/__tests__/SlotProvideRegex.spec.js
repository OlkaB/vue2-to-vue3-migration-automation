const { SlotProvideRegex } = require('../migrtateSlots');
const { ValidProvidedSlots, InvalidProvidedSlots } = require('./testData');


describe('test SlotProvideRegex', () => {
  test.each(ValidProvidedSlots)('SlotProvideRegex should pass with valid slot strings', async (validString) => {
    expect(SlotProvideRegex.test(validString)).toBe(true);
  });

  test.each(InvalidProvidedSlots)('SlotProvideRegex should fail with invalid slot strings', async (invalidString) => {
    expect(SlotProvideRegex.test(invalidString)).toBe(false);
  });

  test.each([
    [ValidProvidedSlots[0], 'name="card__title"', 'card__title'],
    [ValidProvidedSlots[1], 'name="slot123"', 'slot123'],
  ])('SlotProvideRegex should extract slot syntax to be replaced and slot name as part of new syntax', async (validString, syntaxToReplace, slotNameToKeep) => {
    const [, slotSyntax, slotName] = validString?.match(SlotProvideRegex, 'gm') || [];
    expect(slotSyntax).toEqual(syntaxToReplace);
    expect(slotNameToKeep).toEqual(slotName);
  });
});
