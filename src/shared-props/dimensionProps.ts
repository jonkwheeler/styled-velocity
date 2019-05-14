import { PropsAvailablePropTypes } from '@propTypes'
import { dimensionPropsAvailable } from '@sharedProps'
import { convertValue, createStyle, isNullOrUndefined } from '@utils'
import { css } from 'styled-components'
export const dimensionProps = css`
  ${props => props.centered && 'margin: auto;'};
  ${props => props.fullscreen && 'height: 100vh; @media (max-height: 568px){ height: 568px; }'};
  ${props => props.noMargin && 'margin: 0;'};

  ${props =>
    dimensionPropsAvailable.map(
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
