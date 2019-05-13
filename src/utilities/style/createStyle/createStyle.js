import { isObject } from '@utils'
import { cssProperty } from './cssProperty'
import { makeMediaQuery } from './makeMediaQuery'
import { scalePxValues } from './scalePxValues'

export const createStyle = ({ property, value }) => {
  /*
   * If an object full of custom breakpoints already, use it
   * Else if a single value just return the cssProperty
   */

  let returnedStyle = ''
  if (isObject(value)) {
    /*
     * Here's where we loop over the style
     */

    Object.keys(value).map(breakpoint => {
      let style = value[breakpoint]

      if (isObject(style) && 'min' in style) {
        /* If the style is a min and max object, let's do a scaling style */
        style = scalePxValues({ breakpoint: breakpoint, ...style })
      }
      return (returnedStyle += `${makeMediaQuery(breakpoint, cssProperty(property, style))}`)
    })
  } else {
    returnedStyle = cssProperty(property, value)
  }

  return returnedStyle
}
