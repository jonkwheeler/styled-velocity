import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Grid } from '../Grid'

import notes from '../docs/grid.md'

storiesOf('Grid', module).add(
  'Example',
  () => (
    <div>
      <Grid bgColor="lightgrey">
        <Grid.Item gcs={10} gcw={20} gch={5} bgColor="red" gcp={2}>
          Hello World
        </Grid.Item>
      </Grid>
    </div>
  ),
  {
    notes: { markdown: notes },
  },
)
