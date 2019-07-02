import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'
import { StyledElement } from './styled'

export interface ElementProps extends SharedPropsPropTypes, React.HTMLProps<HTMLElement> {
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
   * The id of the Element component.
   * @type string
   */
  id?: string
}

const defaultProps: ElementProps = {
  element: 'div',
}

const Element: React.FunctionComponent<ElementProps> & { defaultProps: Partial<ElementProps> } = React.forwardRef(
  ({ className, children, element, ...rest }, ref) => (
    <StyledElement as={element} className={className} ref={ref} {...rest}>
      {children}
    </StyledElement>
  ),
)

Element.defaultProps = defaultProps
Element.displayName = 'Element'

export { Element }
