import { PropsAvailablePropTypes } from '@propTypes'
import { appearancePropsAvailable } from '@sharedProps'
import { createStyle } from '@utils'
import { css } from 'styled-components'

export const appearanceProps = css`
  ${props =>
    appearancePropsAvailable
      .map(({ prop, property }: PropsAvailablePropTypes) =>
        props[prop] ? createStyle({ property, value: props[prop] }) : null,
      )
      .filter(item => item !== null)};
  ${props => props.lightCss && `@media (prefers-color-scheme: light) {${props.lightCss}}`};
  ${props => props.darkCss && `@media (prefers-color-scheme: dark) {${props.darkCss}}`};
`
