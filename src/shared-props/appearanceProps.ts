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
`
