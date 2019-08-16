import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'
import { GridItem } from './GridItem'
import { GlobalGridStyle, StyledGrid } from './styled'

export interface GridProps extends SharedPropsPropTypes, React.HTMLProps<HTMLElement> {
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
   * Define the number of grid columns
   * @type number
   * @defaultValue 40
   * @example 40
   */
  gridColumns?: number

  /**
   * The complimentary child component to <Grid>
   * @example
   * <Grid>
   *   <Grid.Box>Sup</Grid.Box>
   * </Grid>
   */
  Box?: any

  /**
   * The complimentary child component to <Grid>
   * @example
   * <Grid>
   *   <Grid.Item>Sup</Grid.Item>
   * </Grid>
   */
  Item?: any
}

const defaultProps: GridProps = {
  align: 'left',
  autoWidthColumns: false,
  direction: 'row',
  element: 'div',
  valign: 'top',
  wrap: 'wrap',
}

const Grid: React.FunctionComponent<GridProps> & {
  defaultProps: Partial<GridProps>
  Item: any
  Box: any
  BoxProps: any
} = React.forwardRef(
  (
    {
      align,
      autoWidthColumns,
      children,
      className,
      columns,
      direction,
      element,
      gridColumns,
      valign,
      valignContent,
      wrap,
      ...rest
    },
    ref,
  ) => (
    <React.Fragment>
      <StyledGrid ref={ref} {...rest}>
        {children}
      </StyledGrid>
      <GlobalGridStyle gridColumns={gridColumns} />
    </React.Fragment>
  ),
)

Grid.Item = GridItem
Grid.Box = GridItem

Grid.defaultProps = defaultProps
Grid.displayName = 'Grid'

export { Grid }
