import { classNames } from '@utils'
import * as React from 'react'
import { BoxProps } from './props'
import { StyledFlexBox } from './styled'

export const Box = ({ element = 'div', children, className, componentClassName = 'box', ...rest }: BoxProps) =>
  React.createElement(
    StyledFlexBox,
    {
      className: classNames(componentClassName, className),
      as: element,
      ...rest,
    },
    children,
  )
