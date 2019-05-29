import { Element } from '@components'
import * as React from 'react'
import { MainProps } from './props'

const defaultProps: MainProps = {
  id: 'main',
  role: 'main',
}

const Main: React.FunctionComponent<MainProps> & { defaultProps: Partial<MainProps> } = ({
  className,
  children,
  id,
  role,
  ...rest
}) => (
  <Element element="main" role={role} id={id} className={className} position="relative" {...rest}>
    {children}
  </Element>
)

Main.defaultProps = defaultProps

export { Main }
