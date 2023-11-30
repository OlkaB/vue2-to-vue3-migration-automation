const { addEmits } = require('../index');
const { FilesContentWithEmits, FilesContentWithoutEmits } = require('./testData');

describe('test addEmits', () => {
  test.each([
    [FilesContentWithEmits[0], `emits: ['close-panel'],`],
    [FilesContentWithEmits[1], `emits: ['close', 'update:is-closed'],`]
  ])('addEmits should add component emitted event names as Vue3 emits syntax', async (fileContent, expectedEmitsSyntax) => {
    const modifiedContent = addEmits(fileContent);
    expect(modifiedContent).not.toEqual(fileContent);
    expect(modifiedContent).toContain(expectedEmitsSyntax);
  });

  test.each(FilesContentWithoutEmits)('addEmits should not change file content if it doesnt contain emitted events', async (fileContent) => {
    const modifiedContent = addEmits(fileContent);
    expect(modifiedContent).toEqual(fileContent);
  });
});