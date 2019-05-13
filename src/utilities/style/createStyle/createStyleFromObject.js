import { createStyle } from './createStyle'
import { snakeCase } from '@utils'

export const returnStyle = (styleObject, cssProperty) => {
  return createStyle({
    /* the object key can be both fontSize and 'font-size' with this usage */
    property: snakeCase(cssProperty),
    value: styleObject[cssProperty],
  })
}

export const createStyleFromObject = styleObject =>
  Object.keys(styleObject).map(cssProperty => returnStyle(styleObject, cssProperty))
