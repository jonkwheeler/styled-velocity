import { createStyleFromTo } from '@utils'

/*
 * Created for the Text variants

...getPropertiesFromTo(['font-size', 'letter-spacing'], [headline[500], headline[800], headline[1000]]),

generates an object

get 'font-size'() {
  return createStyleFromTo({
    mobile: headline[500]['font-size'],
    tablet: headline[800]['font-size'],
    desktop: headline[1000]['font-size'],
  })
},
get 'letter-spacing'() {
  return createStyleFromTo({
    mobile: headline[500]['letter-spacing'],
    tablet: headline[800]['letter-spacing'],
    desktop: headline[1000]['letter-spacing'],
  })
},
 */

export const getPropertiesFromTo = (
  properties = [],
  variants = [],
  breakpoints = ['mobile', 'tablet', 'desktop', 'super'],
) => {
  let styleProperties = {}

  properties.forEach(function(property) {
    let style = {}

    variants.forEach(function(variant, index) {
      style[breakpoints[index]] = variant[property]
    })

    styleProperties[property] = createStyleFromTo(style)
  })

  return styleProperties
}
