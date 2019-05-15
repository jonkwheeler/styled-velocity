import { Element } from '@components'
import * as React from 'react'
import { MainProps } from './props'

export const Main = ({ className, children, id = 'main', role = 'main', ...rest }: MainProps) => (
  <Element element="main" role={role} id={id} className={className} position="relative" {...rest}>
    {children}
  </Element>
)
