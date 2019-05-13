import { css } from 'styled-components'
import { createStyle } from '@utils'

export const appearancePropsAvailable = [
  {
    prop: 'bg',
    property: 'background',
  },
  {
    prop: 'bgImage',
    property: 'background-image',
  },
  {
    prop: 'bgSize',
    property: 'background-size',
  },
  {
    prop: 'borderRadius',
    property: 'border-radius',
  },
  {
    prop: 'boxShadow',
    property: 'box-shadow',
  },
]

export const appearanceProps = css`
  ${props =>
    appearancePropsAvailable.map(
      ({ prop, property }) => props[prop] && createStyle({ property: property, value: props[prop] }),
    )};
`
