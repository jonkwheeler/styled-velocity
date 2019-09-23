import { PropsAvailablePropTypes } from '@propTypes'
import { flexPropsAvailable } from '@sharedProps'
import { convertValue, createStyle } from '@utils'
import { css } from 'styled-components'
export const flexProps = css`
  ${props =>
    flexPropsAvailable
      .map(({ prop, property, conversionType }: PropsAvailablePropTypes) =>
        props[prop]
          ? createStyle({
              property,
              value: conversionType ? convertValue(props[prop], conversionType) : props[prop],
            })
          : null,
      )
      .filter(item => item !== null)};
`
