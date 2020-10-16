import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Flex } from '../Flex'

import notes from '../docs/flex.md'

storiesOf('Flex', module).add(
  'Example',
  () => {
    return (
      <div>
        <Flex
          bgColor="lightgrey"
          displayMode
          fullscreen
          valign="middle"
          valignContent="middle"
          columns={{ 0: 1, 768: 2 }}>
          <Flex.Item bgColor={{ 0: 'red', '400-800': 'blue' }} ch={10}>
            Hello World
          </Flex.Item>
          <Flex.Item bgColor="red" ch={10}>
            Hello World
          </Flex.Item>
        </Flex>
      </div>
    )
  },
  {
    notes: { markdown: notes },
  },
)
