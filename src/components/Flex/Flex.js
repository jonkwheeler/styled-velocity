import * as React from 'react'
import { StyledFlex } from './styled'
import { Box } from './Box'
import { classNames } from '@utils'
import { flexProps } from './props'

export const Flex = ({
  align,
  autoWidthColumns,
  children,
  className,
  columns,
  componentClassName,
  direction,
  element,
  valign,
  valignContent,
  wrap,
  ...rest
}) =>
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
      columns: columns,
      get columnCount() {
        return this.autoWidth ? this.itemCount : this.columns
      },
      ...rest,
    },
    children,
  )

Flex.Item = Box
Flex.Box = Box

Flex.defaultProps = {
  align: 'left',
  autoWidthColumns: false,
  componentClassName: 'flex',
  direction: 'row',
  element: 'div',
  valign: 'top',
  wrap: 'wrap',
}

Flex.propTypes = flexProps
