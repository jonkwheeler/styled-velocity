import { SharedPropsPropTypes } from '@propTypes'
import { GlobalGridCssVars } from '@vars'
import * as React from 'react'
import { GridItem } from './GridItem'
import { StyledGrid } from './styled'

export interface GridProps extends SharedPropsPropTypes {
  /**
   * The children of the Grid component.
   * @type React.ReactNode
   */
  children?: React.ReactNode

  /**
   * The className of the Grid component.
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
   * <Grid forwardRef={myRef} />
   */
  forwardRef?: any

  /**
   * Define the number of grid columns
   * @type number
   * @defaultValue 40
   * @example 40
   */
  gridColumnsRoot?: number
}

const defaultProps: GridProps = {
  element: 'div',
  gridColumnsRoot: 40,
}

const Grid: React.FunctionComponent<GridProps> & {
  defaultProps: Partial<GridProps>
  Item: typeof GridItem
  Box: typeof GridItem
} = ({ children, element, forwardRef, gridColumnsRoot, ...rest }) => (
  <React.Fragment>
    <StyledGrid ref={forwardRef} as={element} {...rest}>
      {children}
    </StyledGrid>
    <GlobalGridCssVars gridColumnsRoot={gridColumnsRoot} />
  </React.Fragment>
)

Grid.Item = GridItem
Grid.Box = GridItem

Grid.defaultProps = defaultProps
Grid.displayName = 'Grid'

export { Grid }
