import { Element } from '@components'
import { classNames } from '@utils'
import * as React from 'react'
import { MainProps } from './props'

export const Main = ({
  className,
  componentClassName = 'main',
  children,
  id = 'main',
  role = 'main',
  ...rest
}: MainProps) => (
  <Element
    element="main"
    role={role}
    id={id}
    className={classNames(componentClassName, className)}
    position="relative"
    {...rest}>
    {children}
  </Element>
)
