import * as React from 'react'

import { SharedPropsPropTypes } from '@propTypes'

export interface ElementProps extends SharedPropsPropTypes, React.HTMLAttributes {
  children?: React.ReactNode
  className?: string
  element?: string
}
