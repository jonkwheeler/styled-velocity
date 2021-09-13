import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'
import { StyledSection, StyledSectionItem } from './styled'

export interface SectionProps extends SharedPropsPropTypes {
   /**
   * The content after the section-item
   * @type React.ReactNode
   */
    afterContent?: React.ReactNode

    /**
     * The content before the section-item
     * @type React.ReactNode
     */
    beforeContent?: React.ReactNode

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
   * Pass a ref to the Styled-Component
   * @example
   * const myRef = React.createRef();
   * <Section forwardRef={myRef} />
   */
  forwardRef?: any

  /**
   * The id of the Section component.
   * @type string
   */
  id?: string | null
}

const defaultProps: Partial<SectionProps> = {
  element: 'section',
}

const Section: React.FunctionComponent<SectionProps> & {
  defaultProps: Partial<SectionProps>
  Item: any
} = ({ afterContent, beforeContent, className, children, element, forwardRef, gridLines, id, ...rest }) => (
  <StyledSection id={id} className={className} as={element} ref={forwardRef} {...rest}>
    {beforeContent}

    <StyledSectionItem className="section-item" gridLines={gridLines}>
      {children}
    </StyledSectionItem>

    {afterContent}
  </StyledSection>
)

Section.Item = StyledSectionItem
Section.defaultProps = defaultProps
Section.displayName = 'Section'

export { Section }
