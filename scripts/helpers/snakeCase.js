function snakeCase(str) {
  return str
    .replace(/([a-zA-Z])(?=[A-Z])/g, '$1-')
    .toLowerCase()
    .replace(/ /g, '-')
}
exports = snakeCase

module.exports = snakeCase
