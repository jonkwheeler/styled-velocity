import { css } from 'styled-components'

import { createStyle, convertValue } from '@utils'

export const growShrinkPropsAvailable = [
  {
    prop: 'grow',
    property: 'flex-grow',
    conversionType: 'booleanToIntString',
  },
  {
    prop: 'shrink',
    property: 'flex-shrink',
    conversionType: 'booleanToIntString',
  },
]

export const growShrinkProps = css`
  ${props =>
    growShrinkPropsAvailable.map(
      ({ prop, property, conversionType }) =>
        props[prop] &&
        createStyle({
          property: property,
          value: conversionType ? convertValue(props[prop], conversionType) : props[prop],
        }),
    )};
`
