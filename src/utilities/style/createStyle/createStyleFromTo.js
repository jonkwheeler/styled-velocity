import { arrayOfKeys, px } from '@utils'

/*
 * Created for the Text variants

createStyleFromTo({ '400': 24, '800': 64, '1600': 104 })

generates an object

{ '0': '24px', '400-799': { min: 24, max: 64 }, '800-1599': { min: 64, max: 104 }, '1600': '104px' }

*/

export const createStyleFromTo = (fromToStyles = {}) => {
  let style = {}

  const breakpoints = arrayOfKeys(fromToStyles)

  breakpoints.forEach(function(value, index) {
    /*
     * create first
     */
    if (index === 0) {
      style[0] = px(fromToStyles[breakpoints[0]])

      /*
       * return here bc there is no previous breakpoint
       */
      return
    }

    const previousBreakpoint = breakpoints[index - 1]
    const currentBreakpoint = breakpoints[index]

    style[`${previousBreakpoint}-${currentBreakpoint - 1}`] = {
      min: fromToStyles[previousBreakpoint],
      max: fromToStyles[currentBreakpoint],
    }

    /*
     * create last
     */
    if (index === breakpoints.length - 1) {
      style[currentBreakpoint] = px(fromToStyles[currentBreakpoint])
    }
  })

  return style
}
