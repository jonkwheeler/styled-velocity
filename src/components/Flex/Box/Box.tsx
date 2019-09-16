import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'
import { StyledFlexBox } from './styled'

export interface BoxProps extends SharedPropsPropTypes {
  /**
   * The children of the Flex.Box component (aka Flex.Item).
   * @type React.ReactNode
   */
  children?: React.ReactNode

  /**
   * The className of the Flex.Box component (aka Flex.Item).
   * @type string
   */
  className?: string

  /**
   * Define the html element being output
   * @type string
   * @defaultValue 'div'
   * @example
   * element="div"
   * element="span"
   */
  element?: string

  /**
   * Pass a ref to the Styled-Component
   * @example
   * const myRef = React.createRef();
   * <Box forwardRef={myRef} />
   */
  forwardRef?: any
}

const defaultProps: BoxProps = {
  element: 'div',
}

const Box: React.FunctionComponent<BoxProps> & { defaultProps: Partial<BoxProps> } = ({
  element,
  children,
  className,
  forwardRef,
  ...rest
}) => (
  <StyledFlexBox className={className} as={element} ref={forwardRef} {...rest}>
    {children}
  </StyledFlexBox>
)

Box.defaultProps = defaultProps
Box.displayName = 'Box'

export { Box }
