import styled from 'styled-components'
import {
  appearanceProps,
  cssProps,
  dimensionProps,
  displayMode,
  flexProps,
  gridLines,
  positionProps,
  textProps,
} from '@sharedProps'

export const StyledElement = styled.div`
  ${props => !props.position && 'position: relative;'}
  ${appearanceProps};
  ${dimensionProps};
  ${textProps};
  ${flexProps};

  ${gridLines};
  ${displayMode};
  ${positionProps};
  ${cssProps};
`
