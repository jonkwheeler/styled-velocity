import styled from 'styled-components'
import { appearanceProps, cssProps, dimensionProps, flexProps, textProps, growShrinkProps } from '@sharedProps'
import { createStyle, convertValue } from '@utils'

export const StyledFlexBox = styled.div`
  ${props =>
    props.alignSelf &&
    createStyle({
      property: 'align-self',
      value: convertValue(props.alignSelf, 'getFlexProperty'),
    })};

  ${props =>
    props.order &&
    createStyle({
      property: 'order',
      value: props.order,
    })};

  ${appearanceProps};
  ${dimensionProps};
  ${flexProps};
  ${growShrinkProps};
  ${textProps};
  ${cssProps};
`
