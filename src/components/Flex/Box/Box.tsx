import * as React from 'react'
import { BoxProps } from './props'
import { StyledFlexBox } from './styled'

export const Box = ({ element = 'div', children, className, ...rest }: BoxProps) => (
  <StyledFlexBox className={className} as={element} {...rest}>
    {children}
  </StyledFlexBox>
)
