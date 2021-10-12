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

  if (isObject(value)) {
    /*
     * Convert all the keys
     */
    Object.keys(value).forEach(key => (convertedValues[key] = getValue(value[key])))
  } else convertedValues['0'] = getValue(value)

  return convertedValues
}
