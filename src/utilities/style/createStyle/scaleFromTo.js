import { createStyleFromTo, isEmptyObject, arrayOfKeys, isArray } from '@utils'

/*
 * Created for the Text variants

scaleFromTo({
  cssProperties: ['font-size', 'letter-spacing'],
  scale: { 400: text['sm'], 800: text['md'], 1600: text['lg'] },
}),

generates an object

{
  'font-size': { 
    '0': '24px',
    '400-799': { min: 24, max: 64 },
    '800-1599': { min: 64, max: 104 }, 
    '1600': '104px',
  },
  'letter-spacing': {
    '0': '0.15px',
    '400-799': { min: 0.15, max: -0.25 },
    '800-1599': { min: -0.25, max: -1 },
    '1600': '-1px',
  },
}

*/

export const scaleFromTo = ({ cssProperties = null, scale = {} }) => {
  if (!cssProperties || isEmptyObject(scale)) return
  const cssPropertiesArr = isArray(cssProperties) ? cssProperties : [cssProperties]
  const breakpoints = arrayOfKeys(scale)
  let styleProperties = {}

  cssPropertiesArr.forEach(function(property) {
    let style = {}

    breakpoints.forEach(function(breakpoint) {
      style[breakpoint] = scale[breakpoint][property]
    })

    styleProperties[property] = createStyleFromTo(style)
  })

  return styleProperties
}
