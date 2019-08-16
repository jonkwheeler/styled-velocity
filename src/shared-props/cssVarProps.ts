import { PropsAvailablePropTypes } from '@propTypes'
import { cssVarPropsAvailable } from '@sharedProps'
import { convertValue, createStyle, isNullOrUndefined } from '@utils'
import { css } from 'styled-components'

export const cssVarProps = css`
  ${props =>
    cssVarPropsAvailable.map(({ prop, property, propertyTwo, conversionType }: PropsAvailablePropTypes) => {
      if (isNullOrUndefined(props[prop])) {
        return
      }
      const value = conversionType ? convertValue(props[prop], conversionType) : props[prop]

      let style = createStyle({ property, value })

      /*
       * See if there's a second or third prop, EG: vcmx: var cells margin-left and var cells margin-right
       */
      if (propertyTwo) {
        style += createStyle({ property: propertyTwo, value })
      }

      return style
    })};
`
