import { css } from 'styled-components'

export const cssProps = css`
  ${props => props.css && props.css};
`
