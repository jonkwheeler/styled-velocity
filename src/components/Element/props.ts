import * as React from 'react'

import { SharedPropsPropTypes } from '@propTypes'

export interface ElementProps extends SharedPropsPropTypes {
  children?: React.ReactNode
  className?: string
  element?: string
  role?: string
  id?: string
}
