function componentFile(componentName, snakeCasedcomponentName) {
  return `import { classNames } from '@utils'
import * as React from 'react'

export const ${componentName} = ({ className, componentClassName, ...rest }) => (
  <div className={classNames(componentClassName, className)} {...rest} />
)

${componentName}.defaultProps = {
  componentClassName: '${snakeCasedcomponentName}',
}

${componentName}.propTypes = {}
`
}
exports = componentFile

module.exports = componentFile
