import * as React from 'react'
import { ElementProps } from './props'
import { StyledElement } from './styled'

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

export { Element }
