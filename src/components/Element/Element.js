import * as React from 'react'

import { classNames } from '@utils'
import { elementProps } from './props'
import { StyledElement } from './styled'

export const Element = ({ className, componentClassName, children, element, ...rest }) => (
  <StyledElement as={element} className={classNames(componentClassName, className)} {...rest}>
    {children}
  </StyledElement>
)

Element.defaultProps = {
  componentClassName: 'element',
  element: 'div',
}

Element.propTypes = elementProps
