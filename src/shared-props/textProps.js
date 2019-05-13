import { css } from 'styled-components'
import { createStyle, isNullOrUndefined, convertValue } from '@utils'

export const textPropsAvailable = [
  {
    prop: 'color',
    property: 'color',
  },
  {
    prop: 'textAlign',
    property: 'text-align',
  },
  {
    prop: 'textTransform',
    property: 'text-transform',
  },
  {
    prop: 'fontFamily',
    property: 'font-family',
  },
  {
    prop: 'fontSize',
    property: 'font-size',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'fontWeight',
    property: 'font-weight',
  },
  {
    prop: 'lineHeight',
    property: 'line-height',
  },
]

export const textProps = css`
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    textPropsAvailable.map(({ prop, property, conversionType }) => {
      if (isNullOrUndefined(props[prop])) return
      const value = conversionType ? convertValue(props[prop], conversionType) : props[prop]

      let style = createStyle({ property: property, value: value })

      return style
    })};
`
