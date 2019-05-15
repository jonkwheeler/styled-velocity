import * as React from 'react'
import { SectionProps } from './props'
import { StyledSection, StyledSectionItem } from './styled'

export const Section = ({ className, children, element, gridLines, ...rest }: SectionProps) => (
  <StyledSection className={className} as={element} {...rest}>
    <StyledSectionItem className={'section-item'} gridLines={gridLines}>
      {children}
    </StyledSectionItem>
  </StyledSection>
)

Section.Item = StyledSectionItem
