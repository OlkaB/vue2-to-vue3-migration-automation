
/** ignore mix of white spaces as they're harder to match in tests (when there are multilines) and are not important for the process */
const NEW_LINE_REGEX = /[\n\r\s]+/gm;
const getWhiteSpaceCleanedString = (string) => {
  return typeof string === 'string'
    ? string.replace(NEW_LINE_REGEX, ' ')
    : string
};

module.exports = {
  getWhiteSpaceCleanedString
}