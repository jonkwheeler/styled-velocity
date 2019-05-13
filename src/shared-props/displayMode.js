import { css } from 'styled-components'

export const displayMode = css`
  ${props =>
    props.displayMode &&
    `
    box-shadow: inset 0 0 5px 1px rgba(255,0,0,0.25); 
    > * { box-shadow: inset 0 0 5px 1px rgba(0,0,255,0.25); }
  `};
`
