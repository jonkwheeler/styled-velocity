import * as React from 'react'
import { SectionProps } from './props'
import { StyledSection, StyledSectionItem } from './styled'

const Section: React.FunctionComponent<SectionProps> = ({ className, children, element, gridLines, id, ...rest }) => (
  <StyledSection id={id} className={className} as={element} {...rest}>
    <StyledSectionItem className={'section-item'} gridLines={gridLines}>
      {children}
    </StyledSectionItem>
  </StyledSection>
)

// @ts-ignore
Section.Item = StyledSectionItem

export { Section }
