import { PropsAvailablePropTypes } from '@propTypes'
import { positionPropsAvailable } from '@sharedProps'
import { convertValue, createStyle, isNullOrUndefined } from '@utils'
import { css } from 'styled-components'

export const positionProps = css`
  ${props =>
    positionPropsAvailable.map(
      ({ prop, property, propertyTwo, propertyThree, conversionType }: PropsAvailablePropTypes) => {
        if (isNullOrUndefined(props[prop])) {
          return
        }
        const value = conversionType ? convertValue(props[prop], conversionType) : props[prop]

        let style = createStyle({ property, value })

        /*
         * See if there's a second or third prop, EG: mx: margin-left and margin-right
         */
        if (propertyTwo) {
          style += createStyle({ property: propertyTwo, value })
        }
        if (propertyThree) {
          style += createStyle({ property: propertyThree, value })
        }
        return style
      },
    )};
`
