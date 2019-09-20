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

        const properties = [property, propertyTwo, propertyThree]
        const fallbacks = ['getCells', 'getCellsTranslate']
        const value = conversionType ? convertValue(props[prop], conversionType) : props[prop]

        let style = ''

        /*
         * See if there's a second or third prop, EG: mx: margin-left and margin-right
         */

        for (let propIdx = 0; propIdx < properties.length; propIdx++) {
          if (!isNullOrUndefined(properties[propIdx])) {
            /*
             * If we're converting cells, let's add a legit fallback
             */
            for (let fbIdx = 0; fbIdx < fallbacks.length; fbIdx++) {
              if (conversionType === fallbacks[fbIdx]) {
                style += createStyle({
                  property: properties[propIdx],
                  value: convertValue(props[prop], fallbacks[fbIdx] + 'Fallback'),
                })
              }
            }

            style += createStyle({ property: properties[propIdx], value })
          }
        }

        return style
      },
    )};
`
