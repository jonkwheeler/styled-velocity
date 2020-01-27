/*
 * This is only used to scale PX values
 */

export const scalePxValues = ({ min = 0, max = 0, breakpoint }) => {
  let small, large

  if (breakpoint.indexOf('-') > -1) {
    const splitBp = breakpoint.split('-')

    small = splitBp[0]
    large = splitBp[1]
  } else {
    // eslint-disable-next-line
    throw new Error("In order to use scaling values, you need a breakpoint which has small and large. EG: '800-1599'")
  }

  return `calc(${min}px + ${max - min} * (100vw - ${small}px) / ${large - small + 1})`
}
