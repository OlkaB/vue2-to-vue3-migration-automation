const { SlotInjectRegex } = require('../migrtateSlots');
const { ValidInjectSlots, InvalidInjectSlots } = require('./testData');

describe('test SlotInjectRegex', () => {
  test.each(ValidInjectSlots)('SlotInjectRegex should pass with valid slot strings', async (validString) => {
    expect(SlotInjectRegex.test(validString)).toBe(true);
  });

  test.each(InvalidInjectSlots)('SlotInjectRegex should fail with invalid slot strings', async (invalidString) => {
    expect(SlotInjectRegex.test(invalidString)).toBe(false);
  });

  test.each([
    [ValidInjectSlots[0], 'slot="card__title"', 'card__title'],
    [ValidInjectSlots[1], 'slot="slot123"', 'slot123'],
    [ValidInjectSlots[2], 'slot="slotName"', 'slotName'],
  ])('SlotInjectRegex should extract template slot syntax to be replace and template slot name as part of new syntax', async (validString, syntaxToReplace, slotNameToKeep) => {
    const [, slotSyntax, slotName] = validString?.match(SlotInjectRegex, 'gm') || [];
    expect(slotSyntax).toEqual(syntaxToReplace);
    expect(slotNameToKeep).toEqual(slotName);
  });
});
