import * as React from 'react'
import { SectionProps } from './props'
import { StyledSection, StyledSectionItem } from './styled'

const Section: React.FunctionComponent<SectionProps> & { Item: any } = React.forwardRef(
  ({ className, children, element, gridLines, id, ...rest }, ref) => (
    <StyledSection id={id} className={className} as={element} ref={ref} {...rest}>
      <StyledSectionItem className={'section-item'} gridLines={gridLines}>
        {children}
      </StyledSectionItem>
    </StyledSection>
  ),
)

Section.Item = StyledSectionItem
Section.displayName = 'Section'

export { Section }
