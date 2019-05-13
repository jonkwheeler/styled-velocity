const makeMinWidth = (breakpoint, style) => `@media(min-width: ${breakpoint}px){${style}}`
const makeMaxWidth = (breakpoint, style) => `@media(max-width: ${breakpoint}px){${style}}`

export const makeMinWidthMaxWidth = (breakpoint, style) => {
  const splitBp = breakpoint.split('-')
  const small = parseInt(splitBp[0])
  const large = parseInt(splitBp[1])

  return small === 0
    ? makeMaxWidth(large, style)
    : `@media(min-width: ${small}px) and (max-width: ${large}px){${style}}`
}

export const makeMediaQuery = (breakpoint, style) => {
  if (breakpoint.includes('-')) {
    /* If the breakpoint key is 0, just return the style without a media query */
    return makeMinWidthMaxWidth(breakpoint, style)
  } else if (parseInt(breakpoint) === 0) {
    /* If the breakpoint key contains a hyphen, it must be a min-width and max-width media query, such as '800-1599 */
    return style
  } else {
    /* If the breakpoint key does not contain a hyphen, and is not equal to 0, return a min-width media query */
    return makeMinWidth(breakpoint, style)
  }
}
