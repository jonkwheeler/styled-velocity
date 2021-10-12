import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'
import { StyledElement } from './styled'

export interface ElementProps extends SharedPropsPropTypes {
  /**
   * The children of the Section component.
   * @type React.ReactNode
   */
  children?: React.ReactNode

  /**
   * The className of the Section component.
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
   * <Element forwardRef={myRef} />
   */
  forwardRef?: any

  /**
   * The id of the Element component.
   * @type string
   */
  id?: string | null
}

const defaultProps: ElementProps = {
  element: 'div',
}

const Element: React.FunctionComponent<ElementProps> & { defaultProps: Partial<ElementProps> } = ({
  className,
  children,
  element,
  forwardRef,
  ...rest
}) => (
  <StyledElement as={element} className={className} ref={forwardRef} {...rest}>
    {children}
  </StyledElement>
)

Element.defaultProps = defaultProps
Element.displayName = 'Element'

export { Element }
