import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'
import { StyledSection, StyledSectionItem } from './styled'

export interface SectionProps extends SharedPropsPropTypes, React.HTMLProps<HTMLElement> {
  /**
   * The children of the Section component.
   * @type React.ReactNode
   */
  children?: React.ReactNode

  /**
   * The className of the Section component.
   * @type string
   */
  className?: string

  /**
   * Define the html element being output
   * @type string
   * @defaultValue 'section'
   * @example
   * element="div"
   * element="span"
   */
  element?: string

  /**
   * The id of the Section component.
   * @type string
   */
  id: string
}

const defaultProps: Partial<SectionProps> = {
  element: 'section',
}

const Section: React.FunctionComponent<SectionProps> & {
  defaultProps: Partial<SectionProps>
  Item: any
} = React.forwardRef(({ className, children, element, gridLines, id, ...rest }, ref) => (
  <StyledSection id={id} className={className} as={element} ref={ref} {...rest}>
    <StyledSectionItem className={'section-item'} gridLines={gridLines}>
      {children}
    </StyledSectionItem>
  </StyledSection>
))

Section.Item = StyledSectionItem
Section.defaultProps = defaultProps
Section.displayName = 'Section'

export { Section }
