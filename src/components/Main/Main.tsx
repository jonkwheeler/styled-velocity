import { Element } from '@components'
import { SharedPropsPropTypes } from '@propTypes'
import * as React from 'react'

export interface MainProps extends SharedPropsPropTypes {
  /**
   * The children of the Main component.
   * @type React.ReactNode
   */
  children?: React.ReactNode

  /**
   * The className of the Main component.
   * @type string
   */
  className?: string

  /**
   * Pass a ref to the Styled-Component
   * @example
   * const myRef = React.createRef();
   * <Main forwardRef={myRef} />
   */
  forwardRef?: any

  /**
   * The id of the Main component.
   * @type string
   * @defaultValue 'main'
   */
  id: string

  /**
   * The role of the Main component.
   * @type string
   * @defaultValue 'main'
   */
  role: string
}

const defaultProps: MainProps = {
  id: 'main',
  role: 'main',
}

const Main: React.FunctionComponent<MainProps> & { defaultProps: Partial<MainProps> } = ({
  className,
  children,
  forwardRef,
  id,
  role,
  ...rest
}) => (
  <Element element="main" role={role} id={id} className={className} position="relative" ref={forwardRef} {...rest}>
    {children}
  </Element>
)

Main.defaultProps = defaultProps
Main.displayName = 'Main'

export { Main }
