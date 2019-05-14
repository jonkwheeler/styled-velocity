import { PropsAvailablePropTypes } from '@propTypes'
import { growShrinkPropsAvailable } from '@sharedProps'
import { convertValue, createStyle } from '@utils'
import { css } from 'styled-components'

export const growShrinkProps = css`
  ${props =>
    growShrinkPropsAvailable.map(
      ({ prop, property, conversionType }: PropsAvailablePropTypes) =>
        props[prop] &&
        createStyle({
          property,
          value: conversionType ? convertValue(props[prop], conversionType) : props[prop],
        }),
    )};
`
