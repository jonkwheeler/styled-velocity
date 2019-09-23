import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex'

import notes from '../docs/flex.md'

storiesOf('Flex', module).add(
  'Example',
  () => (
    <div>
      <Flex bgColor="lightgrey" displayMode h={2000}>
        <Flex.Item bgColor="red" cw={20} ch={10} wrap={true}>
          Hello World
        </Flex.Item>
        <Flex.Item bgColor="red" cw={20} ch={10}>
          Hello World
        </Flex.Item>
      </Flex>
    </div>
  ),
  {
    notes: { markdown: notes },
  },
)
