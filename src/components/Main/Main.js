import * as React from 'react'
import { classNames } from '@utils'
import { Element } from '@components'
import { mainProps } from './props'

export const Main = ({ className, componentClassName, children, id, role, ...rest }) => (
  <Element
    element="main"
    role={role}
    id={id}
    className={classNames(componentClassName, className)}
    position="relative"
    {...rest}>
    {children}
  </Element>
)

Main.defaultProps = {
  componentClassName: 'main',
  id: 'main',
  role: 'main',
}

Main.propTypes = mainProps
