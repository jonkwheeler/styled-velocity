import { PropsAvailablePropTypes } from '@propTypes'
import { gridPropsAvailable } from '@sharedProps'
import { convertValue, createStyle, isNullOrUndefined } from '@utils'
import { css } from 'styled-components'

export const gridProps = css`
  ${props =>
    gridPropsAvailable.map(({ prop, property, propertyTwo, conversionType }: PropsAvailablePropTypes) => {
      if (isNullOrUndefined(props[prop])) {
        return
      }
      const value = conversionType ? convertValue(props[prop], conversionType) : props[prop]

      let style = createStyle({ property, value })

      /*
       * See if there's a second or third prop, EG: gmx: grid margin-left and grid margin-right
       */
      if (propertyTwo) {
        style += createStyle({ property: propertyTwo, value })
      }

      return style
    })};
`
