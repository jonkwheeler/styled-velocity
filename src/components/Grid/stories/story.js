import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid } from '../Grid'

import notes from '../docs/grid.md'

storiesOf('Grid', module).add(
  'Example',
  () => (
    <div>
      <Grid bgColor="lightgrey" vcmy={5} displayMode>
        <Grid.Item bgColor="red" gcw={40} vcp={2}>
          Hello World
        </Grid.Item>
      </Grid>
    </div>
  ),
  {
    notes: { markdown: notes },
  },
)
