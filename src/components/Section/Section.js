import * as React from 'react'
import { classNames } from '@utils'
import { StyledSection, StyledSectionItem } from './styled'
import { sectionProps } from './props'

export const Section = ({ className, componentClassName, children, element, gridLines, ...rest }) => (
  <StyledSection className={classNames(componentClassName, className)} as={element} {...rest}>
    <StyledSectionItem className={classNames('section-item')} gridLines={gridLines}>
      {children}
    </StyledSectionItem>
  </StyledSection>
)

Section.Item = StyledSectionItem

Section.defaultProps = {
  componentClassName: 'section',
}

Section.propTypes = sectionProps
