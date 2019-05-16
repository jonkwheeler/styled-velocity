import { isEmptyObject, isArray } from '@utils'

/*
 * Created for the Text scaling properties

scaleProportionally({
    cssProperties: ['font-size', 'letter-spacing'],
    value: {
      'font-size': 64,
      'letter-spacing': -0.25,
    },
  }),

generates an object scaling downward proportionally

if you want to scale upward, do direction = "up"

{
  'font-size': { '200-375': { min: 34.133, max: 64 } },
  'letter-spacing': { '200-375': { min: -0.133, max: -0.25 } },
}

*/

export const scaleProportionally = ({ cssProperties = null, value = {}, direction = 'down', from = 200, to = 375 }) => {
  if (!cssProperties || isEmptyObject(value)) return

  const cssPropertiesArr = isArray(cssProperties) ? cssProperties : [cssProperties]

  let styleProperties = {}

  cssPropertiesArr.forEach(function(property) {
    let style = {}

    style[`${from}-${to}`] = {
      min: direction === 'down' ? parseFloat(((value[property] * from) / to).toFixed(3)) : value[property],
      max: direction === 'down' ? value[property] : parseFloat(((value[property] * to) / from).toFixed(3)),
    }

    styleProperties[property] = style
  })

  return styleProperties
}
