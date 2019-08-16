import styled from 'styled-components'
import {
  appearanceProps,
  cssProps,
  dimensionProps,
  flexProps,
  cssVarProps,
  gridProps,
  growShrinkProps,
  textProps,
} from '@sharedProps'
// import { createStyle, convertValue } from '@utils'

export const StyledGridItem = styled.div`
  ${appearanceProps};
  ${dimensionProps};
  ${flexProps};
  ${gridProps};
  ${cssVarProps};
  ${growShrinkProps};
  ${textProps};
  ${cssProps};
`
