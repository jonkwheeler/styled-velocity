import { arrayOfKeys, px } from '@utils'

/*
 * Created for the Text variants

createStyleFromTo({
	mobile: headline[500]['font-size'],
	tablet: headline[800]['font-size'],
	desktop: headline[1000]['font-size'],
})

generates an object

{
	0: "24px"
	375-767: {min: 24, max: 64}
	768-1439: {min: 64, max: 104}
	1440: "104px"
}
 */

export const createStyleFromTo = (
  fromToStyles = {},
  breakpoints = {
    mobile: 375,
    tablet: 768,
    desktop: 1440,
    super: 2000,
  },
) => {
  let style = {}

  const keys = arrayOfKeys(fromToStyles)

  keys.forEach(function(value, index) {
    // create first
    if (index === 0) {
      style[0] = px(fromToStyles[keys[0]])
      return // return here bc there is no previous breakpoint
    }

    const previousBreakpoint = keys[index - 1]
    const currentBreakpoint = keys[index]

    // create last
    if (index === keys.length - 1) {
      style[breakpoints[currentBreakpoint]] = px(fromToStyles[keys[keys.length - 1]])
    }

    style[`${breakpoints[previousBreakpoint]}-${breakpoints[currentBreakpoint] - 1}`] = {
      min: fromToStyles[previousBreakpoint],
      max: fromToStyles[currentBreakpoint],
    }
  })

  return style
}
