import styled from 'styled-components'
import { appearanceProps, cssProps, cssVarProps, dimensionProps, textProps, gridLines, displayMode } from '@sharedProps'

export const StyledSection = styled.section`
  width: 100%;
  position: relative;
  z-index: 100;

  ${appearanceProps};
  ${dimensionProps};
  ${textProps};
  ${cssProps};
  ${cssVarProps};
  ${displayMode};
`

export const StyledSectionItem = styled.div`
  position: relative;
  width: 100%;
  max-width: 2000px;
  margin: auto;

  ${gridLines};
`
