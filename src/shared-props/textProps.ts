import { PropsAvailablePropTypes } from '@propTypes'
import { textPropsAvailable } from '@sharedProps'
import { convertValue, createStyle, isNullOrUndefined } from '@utils'
import { css } from 'styled-components'
export const textProps = css`
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    textPropsAvailable.map(({ prop, property, conversionType }: PropsAvailablePropTypes) => {
      if (isNullOrUndefined(props[prop])) {
        return
      }
      const value = conversionType ? convertValue(props[prop], conversionType) : props[prop]

      const style = createStyle({ property, value })

      return style
    })};
`
