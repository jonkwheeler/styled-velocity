import * as React from 'react'
import { ElementProps } from './props'
import { StyledElement } from './styled'

export const Element = ({ className, children, element = 'div', ...rest }: ElementProps) => (
  <StyledElement as={element} className={className} {...rest}>
    {children}
  </StyledElement>
)
