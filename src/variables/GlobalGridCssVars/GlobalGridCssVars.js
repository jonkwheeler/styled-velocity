import { createGlobalStyle } from 'styled-components'

const GlobalGridCssVars = createGlobalStyle`
  :root {
    --grid-columns: ${props => (props.gridColumnsRoot ? props.gridColumnsRoot : 40)};
    --grid-cell-size: ${props => 100 / (props.gridColumnsRoot ? props.gridColumnsRoot : 40)}vw;

    @media(min-width: 2000px){
      --grid-cell-size: ${props => 2000 / (props.gridColumnsRoot ? props.gridColumnsRoot : 40)}px;
    }
  }
`

export { GlobalGridCssVars }
