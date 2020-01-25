import { createStyle } from './createStyle'
import { snakeCase, isArray } from '@utils'

export const returnStyle = (styleObject, cssProperty) => {
  return createStyle({
    /* the object key can be both fontSize and 'font-size' with this usage */
    property: snakeCase(cssProperty),
    value: styleObject[cssProperty],
  })
}

export const createStyleFromObject = (styleObject, join = false) => {
  const value = Object.keys(styleObject)
    .map(cssProperty => returnStyle(styleObject, cssProperty))
    .join('')

  return join ? (isArray(value) ? value.join('') : value) : value
}
