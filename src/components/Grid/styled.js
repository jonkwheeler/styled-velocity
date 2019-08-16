import styled, { createGlobalStyle } from 'styled-components'
// import { createStyle, convertValue } from '@utils'

import {
  appearanceProps,
  cssProps,
  dimensionProps,
  displayMode,
  gridLines,
  gridProps,
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
  ${gridLines};
  ${gridProps};
  ${displayMode};
  ${positionProps};
  ${cssProps};
`

const GlobalGridStyle = createGlobalStyle`
  :root {
    --grid-columns: ${props => (props.gridColumnsRoot ? props.gridColumnsRoot : 40)};
    --grid-cell-size: ${props => 100 / (props.gridColumnsRoot ? props.gridColumnsRoot : 40)}vw;

    @media(min-width: 2000px){
      --grid-cell-size: ${props => 2000 / (props.gridColumnsRoot ? props.gridColumnsRoot : 40)}px;
    }
  }
`

export { StyledGrid, GlobalGridStyle }
