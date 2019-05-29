import * as React from 'react'
import { BoxProps } from './props'
import { StyledFlexBox } from './styled'

const defaultProps: BoxProps = {
  element: 'div',
}

const Box: React.FunctionComponent<BoxProps> & { defaultProps: Partial<BoxProps> } = ({
  element,
  children,
  className,
  ...rest
}) => (
  <StyledFlexBox className={className} as={element} {...rest}>
    {children}
  </StyledFlexBox>
)

Box.defaultProps = defaultProps

export { Box }
