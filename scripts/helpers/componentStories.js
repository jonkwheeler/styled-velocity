function componentStories(componentName, snakeCasedcomponentName) {
  return `import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { ${componentName} } from '@components'
import notes from '../docs/${snakeCasedcomponentName}.md'

storiesOf('New Component', module)
  .addDecorator(storyFn => <div style={{ padding: '20px' }}>{storyFn()}</div>)
  .add(
    '${componentName}',
    () => (
      <${componentName} />
    ),
    {
      notes: { markdown: notes },
    },
  )

`
}
exports = componentStories

module.exports = componentStories
