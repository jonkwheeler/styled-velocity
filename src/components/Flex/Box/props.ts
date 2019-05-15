import * as React from 'react'

import { SharedPropsPropTypes } from '@propTypes'

export interface BoxProps extends SharedPropsPropTypes, React.HTMLAttributes {
  children?: React.ReactNode
  className?: string
  element?: string
  Box?: any
  Item?: any
}
