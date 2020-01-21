import styled from 'styled-components'

import {
  appearanceProps,
  cssProps,
  dimensionProps,
  displayMode,
  gridLines,
  gridProps,
  cssVarProps,
  flexProps,
  textProps,
  positionProps,
} from '@sharedProps'

/* Flexbox is 1 dimensional (row), Grid is 2 dimensional (row, column) */
/* justify-* is row axis */
/* align-* is column axis */
/* grid-template-rows: repeat(var(--grid-columns), var(--grid-cell-size)); */

const StyledGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(
    ${props => (props.gridColumns ? props.gridColumns : 'var(--grid-columns)')},
    var(--grid-cell-size)
  );

  > * {
    position: relative;
    max-width: 100%;
  }

  ${appearanceProps};
  ${dimensionProps};
  ${textProps};
  ${flexProps};
  ${cssVarProps};
  ${gridLines};
  ${gridProps};
  ${displayMode};
  ${positionProps};
  ${cssProps};
`

export { StyledGrid }
