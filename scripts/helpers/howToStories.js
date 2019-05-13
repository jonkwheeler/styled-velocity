function howToStories(howToName, snakeCasedhowToName) {
  return `import * as React from 'react'
import { storiesOf } from '@storybook/react'

import notes from './${snakeCasedhowToName}.md'

storiesOf('How To|Replace This', module)
  .add('${howToName}', () => <span>Check out the Notes tab (top left)</span>, {
    notes: { markdown: notes },
  })
`
}
exports = howToStories

module.exports = howToStories
