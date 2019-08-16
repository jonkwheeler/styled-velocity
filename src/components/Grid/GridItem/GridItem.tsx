import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'
import { StyledGridItem } from './styled'

export interface GridItemProps extends SharedPropsPropTypes {
  /**
   * The children of the Grid.Item component (aka Grid.Box).
   * @type React.ReactNode
   */
  children?: React.ReactNode

  /**
   * The className of the Grid.Item component (aka Grid.Box).
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
}

const defaultProps: GridItemProps = {
  element: 'div',
}

const GridItem: React.FunctionComponent<GridItemProps> & { defaultProps: Partial<GridItemProps> } = React.forwardRef(
  ({ element, children, className, ...rest }, ref) => (
    <StyledGridItem className={className} as={element} ref={ref} {...rest}>
      {children}
    </StyledGridItem>
  ),
)

GridItem.defaultProps = defaultProps
GridItem.displayName = 'GridItem'

export { GridItem }
