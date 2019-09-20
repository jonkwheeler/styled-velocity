import { isObject, hasKey } from '@utils'
import { conversionTypes, toCellsMax } from '../conversionTypes'

export const convertValue = (value, conversionType) => {
  const getValue = x => {
    /*
     * If we have a convertor function, let's convert, otherwise just return the value
     */
    if (hasKey(conversionTypes, conversionType)) return conversionTypes[conversionType](x)
    else return x
  }

  let convertedValues = {}

  /*
   * If we're dealing with cells, make sure to give it a max-width
   */
  if (conversionType === 'getCells' && !hasKey(convertedValues, '2000')) {
    let lastItem

    if (isObject(value)) {
      /*
       * If it's an object full of breakpoints, just reference the last breakpoint
       */
      const valuesArray = Object.values(value)
      lastItem = valuesArray[valuesArray.length - 1]
    } else {
      lastItem = value
    }

    convertedValues['2000'] = toCellsMax(lastItem)
  }

  if (conversionType === 'getCellsTranslate' && !hasKey(convertedValues, '2000')) {
    const valuesArray = Object.values(value)
    const lastItem = valuesArray[valuesArray.length - 1]

    convertedValues['2000'] = conversionTypes.getCellsTranslate({ x: toCellsMax(lastItem.x), y: toCellsMax(lastItem.y) })
  }

  if (isObject(value)) {
    /*
     * Convert all the keys
     */
    Object.keys(value).forEach(key => (convertedValues[key] = getValue(value[key])))
  } else convertedValues['0'] = getValue(value)

  return convertedValues
}
