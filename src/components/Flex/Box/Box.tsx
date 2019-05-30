import * as React from 'react'
import { BoxProps } from './props'
import { StyledFlexBox } from './styled'

const defaultProps: BoxProps = {
  element: 'div',
}

const Box: React.FunctionComponent<BoxProps> & { defaultProps: Partial<BoxProps> } = React.forwardRef(
  ({ element, children, className, ...rest }, ref) => (
    <StyledFlexBox className={className} as={element} ref={ref} {...rest}>
      {children}
    </StyledFlexBox>
  ),
)

Box.defaultProps = defaultProps
Box.displayName = 'Box'

export { Box }
