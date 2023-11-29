const { SLOT_INJECT_REGEX } = require('../index');
const { ValidInjectSlots, InvalidInjectSlots } = require('./testData');

describe('test SLOT_INJECT_REGEX', () => {
  test.each(ValidInjectSlots)('SLOT_INJECT_REGEX should pass with valid slot strings', async (validString) => {
    expect(SLOT_INJECT_REGEX.test(validString)).toBe(true);
  });

  test.each(InvalidInjectSlots)('SLOT_INJECT_REGEX should fail with invalid slot strings', async (invalidString) => {
    expect(SLOT_INJECT_REGEX.test(invalidString)).toBe(false);
  });

  test.each([
    [ValidInjectSlots[0], 'slot="card__title"', 'card__title'],
    [ValidInjectSlots[1], 'slot="slot123"', 'slot123'],
    [ValidInjectSlots[2], 'slot="slotName"', 'slotName'],
  ])('SLOT_INJECT_REGEX should extract template slot syntax to be replace and template slot name as part of new syntax', async (validString, syntaxToReplace, slotNameToKeep) => {
    const [, slotSyntax, slotName] = validString?.match(SLOT_INJECT_REGEX, 'm') || [];
    expect(slotSyntax).toEqual(syntaxToReplace);
    expect(slotNameToKeep).toEqual(slotName);
  });
});
