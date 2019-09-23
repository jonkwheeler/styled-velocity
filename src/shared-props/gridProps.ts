import { PropsAvailablePropTypes } from '@propTypes'
import { gridPropsAvailable } from '@sharedProps'
import { convertValue, createStyle } from '@utils'
import { css } from 'styled-components'

export const gridProps = css`
  ${props =>
    gridPropsAvailable
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
