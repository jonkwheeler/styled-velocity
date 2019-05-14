import * as React from 'react'

import { classNames } from '@utils'
import { ElementProps } from './props'
import { StyledElement } from './styled'

export const Element = ({
  className,
  componentClassName = 'element',
  children,
  element = 'div',
  ...rest
}: ElementProps) => (
  <StyledElement as={element} className={classNames(componentClassName, className)} {...rest}>
    {children}
  </StyledElement>
)
