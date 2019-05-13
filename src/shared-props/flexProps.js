import { css } from 'styled-components'
import { createStyle, convertValue } from '@utils'

export const flexPropsAvailable = [
  {
    prop: 'direction',
    property: 'flex-direction',
    conversionType: 'getFlexProperty',
  },
  {
    prop: 'wrap',
    property: 'flex-wrap',
    conversionType: 'getFlexProperty',
  },
  {
    prop: 'align',
    property: 'justify-content',
    conversionType: 'getFlexProperty',
  },
  {
    prop: 'valign',
    property: 'align-items',
    conversionType: 'getFlexProperty',
  },
  {
    prop: 'valignContent',
    property: 'align-content',
    conversionType: 'getFlexProperty',
  },
]

export const flexProps = css`
  ${props =>
    flexPropsAvailable.map(
      ({ prop, property, conversionType }) =>
        props[prop] &&
        createStyle({
          property: property,
          value: conversionType ? convertValue(props[prop], conversionType) : props[prop],
        }),
    )};
`
