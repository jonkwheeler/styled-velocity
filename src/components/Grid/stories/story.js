import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid } from '../Grid'

import notes from '../docs/grid.md'

storiesOf('Grid', module).add(
  'Example',
  () => (
    <div>
      <Grid bgColor="lightgrey" vcmy={5}>
        <Grid.Item bgColor="red" gcw={2}>
          Hello World
        </Grid.Item>
        <Grid.Item bgColor="blue" gcw={26} vch={10}>
          Hello World
        </Grid.Item>
        <Grid.Item bgColor="grey" gcw={2}>
          Hello World
        </Grid.Item>
      </Grid>
    </div>
  ),
  {
    notes: { markdown: notes },
  },
)
