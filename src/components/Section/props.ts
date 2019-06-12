import * as React from 'react'

import { SharedPropsPropTypes } from '@propTypes'

export interface SectionProps extends SharedPropsPropTypes {
  children?: React.ReactNode
  className?: string
  element?: string
  id: string
}
