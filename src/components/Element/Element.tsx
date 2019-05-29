import * as React from 'react'
import { ElementProps } from './props'
import { StyledElement } from './styled'

const defaultProps: ElementProps = {
  element: 'div',
}

const Element: React.FunctionComponent<ElementProps> & { defaultProps: Partial<ElementProps> } = ({
  className,
  children,
  element,
  ...rest
}) => (
  <StyledElement as={element} className={className} {...rest}>
    {children}
  </StyledElement>
)

Element.defaultProps = defaultProps

export { Element }
