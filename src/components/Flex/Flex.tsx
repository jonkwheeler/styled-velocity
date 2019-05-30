import * as React from 'react'
import { Box } from './Box'
import { FlexProps } from './props'
import { StyledFlex } from './styled'

const defaultProps: FlexProps = {
  align: 'left',
  autoWidthColumns: false,
  direction: 'row',
  element: 'div',
  valign: 'top',
  wrap: 'wrap',
}

const Flex: React.FunctionComponent<FlexProps> & {
  defaultProps: Partial<FlexProps>
  Item: any
  Box: any
} = React.forwardRef(
  (
    { align, autoWidthColumns, children, className, columns, direction, element, valign, valignContent, wrap, ...rest },
    ref,
  ) =>
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
        ref,
        get columnCount() {
          return this.autoWidthColumns ? this.itemCount : this.columns
        },
        ...rest,
      },
      children,
    ),
)

Flex.Item = Box
Flex.Box = Box

Flex.defaultProps = defaultProps
Flex.displayName = 'Flex'

export { Flex }
