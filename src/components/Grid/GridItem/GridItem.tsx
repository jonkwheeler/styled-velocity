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

  /**
   * Pass a ref to the Styled-Component
   * @example
   * const myRef = React.createRef();
   * <GridItem forwardRef={myRef} />
   */
  forwardRef?: any
}

const defaultProps: GridItemProps = {
  element: 'div',
}

const GridItem: React.FunctionComponent<GridItemProps> & { defaultProps: Partial<GridItemProps> } = ({
  element,
  children,
  className,
  forwardRef,
  ...rest
}) => (
  <StyledGridItem className={className} as={element} ref={forwardRef} {...rest}>
    {children}
  </StyledGridItem>
)

GridItem.defaultProps = defaultProps
GridItem.displayName = 'GridItem'

export { GridItem }
