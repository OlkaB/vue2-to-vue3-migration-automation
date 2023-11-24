const { SLOT_PROVIDE_REGEX } = require('../migrtateSlots');
const { ValidProvidedSlots, InvalidProvidedSlots } = require('./testData');

describe('test SLOT_PROVIDE_REGEX', () => {
  test.each(ValidProvidedSlots)('SLOT_PROVIDE_REGEX should pass with valid slot strings', async (validString) => {
    expect(SLOT_PROVIDE_REGEX.test(validString)).toBe(true);
  });

  test.each(InvalidProvidedSlots)('SLOT_PROVIDE_REGEX should fail with invalid slot strings', async (invalidString) => {
    expect(SLOT_PROVIDE_REGEX.test(invalidString)).toBe(false);
  });

  test.each([
    [ValidProvidedSlots[0], 'name="card__title"', 'card__title'],
    [ValidProvidedSlots[1], 'name="slot123"', 'slot123'],
  ])('SLOT_PROVIDE_REGEX should extract slot syntax to be replaced and slot name as part of new syntax', async (validString, syntaxToReplace, slotNameToKeep) => {
    const [, slotSyntax, slotName] = validString?.match(SLOT_PROVIDE_REGEX, 'm') || [];
    expect(slotSyntax).toEqual(syntaxToReplace);
    expect(slotNameToKeep).toEqual(slotName);
  });
});
