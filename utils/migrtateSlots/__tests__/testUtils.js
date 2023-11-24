
/** ignore new lines as they're not important and harder to test */
const NEW_LINE_REGEX = /[\n\r\s]+/gm;
const getWhiteSpaceCleanedString = (string) => {
  return typeof string === 'string'
    ? string.replace(NEW_LINE_REGEX, ' ')
    : string
};

module.exports = {
  getWhiteSpaceCleanedString
}