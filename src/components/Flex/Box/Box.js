import * as React from 'react'
import { StyledFlexBox } from './styled'
import { classNames } from '@utils'
import { boxProps } from './props'

export const Box = ({ element, children, className, componentClassName, ...rest }) =>
  React.createElement(
    StyledFlexBox,
    {
      className: classNames(componentClassName, className),
      as: element,
      ...rest,
    },
    children,
  )

Box.defaultProps = {
  componentClassName: 'box',
  element: 'div',
}

Box.propTypes = boxProps
