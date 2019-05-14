import { classNames } from '@utils'
import * as React from 'react'
import { Box } from './Box'
import { FlexProps } from './props'
import { StyledFlex } from './styled'

export const Flex = ({
  align = 'left',
  autoWidthColumns = false,
  children,
  className,
  columns,
  componentClassName = 'flex',
  direction = 'row',
  element = 'div',
  valign = 'top',
  valignContent,
  wrap = 'wrap',
  ...rest
}: FlexProps) =>
  React.createElement(
    StyledFlex,
    {
      as: element,
      className: classNames(componentClassName, className),
      align,
      valign,
      valignContent,
      direction,
      wrap,
      itemCount: React.Children.count(children),
      autoWidthColumns: columns === undefined && autoWidthColumns,
      columns,
      get columnCount() {
        return this.autoWidth ? this.itemCount : this.columns
      },
      ...rest,
    },
    children,
  )

Flex.Item = Box
Flex.Box = Box
