import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'
import { StyledFlexBox } from './styled'

export interface BoxProps extends SharedPropsPropTypes, React.HTMLProps<HTMLElement> {
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
}

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
