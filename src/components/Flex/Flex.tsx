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
      className,
      align,
      valign,
      valignContent,
      direction,
      wrap,
      itemCount: React.Children.count(children),
      autoWidthColumns: columns === undefined && autoWidthColumns,
      columns,
      get columnCount() {
        return this.autoWidthColumns ? this.itemCount : this.columns
      },
      ...rest,
    },
    children,
  )

// @ts-ignore
Flex.Item = Box

// @ts-ignore
Flex.Box = Box
