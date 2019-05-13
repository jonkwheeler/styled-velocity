import { isObject } from '@utils'

export const mergeObjects = (target: {}, source: {}): {} => {
  const output = Object.assign({}, target)

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] })
        } else if (isObject(target[key])) {
          output[key] = mergeObjects(target[key], source[key])
        } else {
          output[key] = source[key]
        }
      } else {
        Object.assign(output, { [key]: source[key] })
      }
    })
  }

  return output
}
