function componentDoc(componentName) {
  return `# ${componentName}

## Usage 🔌

~~~js
import { ${componentName} } from 'styled-velocity';
~~~

## About

The ${componentName} component is awesome because ...

## Examples

~~~js
<${componentName} />
~~~
`
}
exports = componentDoc

module.exports = componentDoc
