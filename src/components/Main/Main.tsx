import { Element } from '@components'
import * as React from 'react'
import { MainProps } from './props'

const defaultProps: MainProps = {
  id: 'main',
  role: 'main',
}

const Main: React.FunctionComponent<MainProps> & { defaultProps: Partial<MainProps> } = React.forwardRef(
  ({ className, children, id, role, ...rest }, ref) => (
    <Element element="main" role={role} id={id} className={className} position="relative" ref={ref} {...rest}>
      {children}
    </Element>
  ),
)

Main.defaultProps = defaultProps

export { Main }
