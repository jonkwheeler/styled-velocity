function componentIndex(componentName) {
  return `export { ${componentName} } from './${componentName}'`
}
exports = componentIndex

module.exports = componentIndex
