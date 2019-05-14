import { classNames } from '@utils'
import * as React from 'react'
import { SectionProps } from './props'
import { StyledSection, StyledSectionItem } from './styled'

export const Section = ({
  className,
  componentClassName = 'section',
  children,
  element,
  gridLines,
  ...rest
}: SectionProps) => (
  <StyledSection className={classNames(componentClassName, className)} as={element} {...rest}>
    <StyledSectionItem className={classNames('section-item')} gridLines={gridLines}>
      {children}
    </StyledSectionItem>
  </StyledSection>
)

Section.Item = StyledSectionItem
