import * as React from 'react'

import { SharedPropsPropTypes } from '@propTypes'

export interface SectionProps extends SharedPropsPropTypes, React.HTMLAttributes {
  children?: React.ReactNode
  className?: string
  element?: string
  id: string
}
