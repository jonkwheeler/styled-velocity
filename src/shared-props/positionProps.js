import { css } from 'styled-components'
import { createStyle, convertValue, isNullOrUndefined } from '@utils'

// t: top
// b: bottom
// l: left
// r: right
// x: left and right
// y: top and bottom
const directionPropsAvailable = [
  {
    prop: 't',
    property: 'top',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'b',
    property: 'bottom',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'l',
    property: 'left',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'r',
    property: 'right',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'x',
    property: 'left',
    propertyTwo: 'right',
    conversionType: 'percentageOrPixel',
  },
  {
    prop: 'y',
    property: 'top',
    propertyTwo: 'bottom',
    conversionType: 'percentageOrPixel',
  },
]

// cl : cells left
// cr : cells right
// ct : cells top
// cb : cells bottom
// cx: cells left and cells right
// cy: cells top and cells bottom
const cellDirectionPropsAvailable = [
  {
    prop: 'ct',
    property: 'top',
    conversionType: 'getCells',
  },
  {
    prop: 'cb',
    property: 'bottom',
    conversionType: 'getCells',
  },
  {
    prop: 'cl',
    property: 'left',
    conversionType: 'getCells',
  },
  {
    prop: 'cr',
    property: 'right',
    conversionType: 'getCells',
  },
  {
    prop: 'cx',
    property: 'left',
    propertyTwo: 'right',
    conversionType: 'getCells',
  },
  {
    prop: 'cy',
    property: 'top',
    propertyTwo: 'bottom',
    conversionType: 'getCells',
  },
]

const layerPropsAvailable = [
  {
    prop: 'position',
    property: 'position',
  },
  {
    prop: 'z',
    property: 'z-index',
  },
]

export const positionPropsAvailable = [
  ...directionPropsAvailable,
  ...cellDirectionPropsAvailable,
  ...layerPropsAvailable,
]

export const positionProps = css`
  ${props =>
    positionPropsAvailable.map(({ prop, property, propertyTwo, propertyThree, conversionType }) => {
      if (isNullOrUndefined(props[prop])) return
      const value = conversionType ? convertValue(props[prop], conversionType) : props[prop]

      let style = createStyle({ property: property, value: value })

      /*
       * See if there's a second or third prop, EG: mx: margin-left and margin-right
       */
      if (propertyTwo) style += createStyle({ property: propertyTwo, value: value })
      if (propertyThree) style += createStyle({ property: propertyThree, value: value })
      return style
    })};
`
