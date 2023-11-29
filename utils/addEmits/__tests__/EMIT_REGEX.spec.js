const { EMIT_REGEX } = require('../index');
const {
  CasesWithEmits,
  CasesWithoutEmits
 } = require('./testData');

describe('test EMIT_REGEX', () => {
  test.each(CasesWithEmits)('EMIT_REGEX should pass with strings containing emits', async (caseString) => {
    expect(EMIT_REGEX.test(caseString)).toBe(true);
  });

  test.each(CasesWithoutEmits)('EMIT_REGEX should fail with strings not containing emits', async (caseString) => {
    expect(EMIT_REGEX.test(caseString)).toBe(false);
  });

  test.each([
    [CasesWithEmits[0], "'multiple-file-upload'"],
    [CasesWithEmits[1], "'change'"],
    [CasesWithEmits[2], "'accordion-toggled'"],
    [CasesWithEmits[3], "'update:search-query'"]
  ])('EMIT_REGEX should extract emit name correctly', async (caseString, expectedEmitName) => {
    const [, emitName] = caseString.match(EMIT_REGEX) || [];
    expect(emitName).toEqual(expectedEmitName);
  });
});