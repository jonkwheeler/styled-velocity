import * as React from 'react'
import { SectionProps } from './props'
import { StyledSection, StyledSectionItem } from './styled'

export const Section = ({ className, children, element, gridLines, id, ...rest }: SectionProps) => (
  <StyledSection id={id} className={className} as={element} {...rest}>
    <StyledSectionItem className={'section-item'} gridLines={gridLines}>
      {children}
    </StyledSectionItem>
  </StyledSection>
)

// @ts-ignore
Section.Item = StyledSectionItem
