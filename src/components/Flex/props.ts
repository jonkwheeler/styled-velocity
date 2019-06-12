import * as React from 'react'

import { SharedPropsPropTypes } from '@propTypes'

export interface FlexProps extends SharedPropsPropTypes {
  children?: React.ReactNode
  className?: string
  element?: string
  Box?: any
  Item?: any
}
