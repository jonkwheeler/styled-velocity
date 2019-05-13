import { childrenPropTypes, classNamePropTypes, elementPropTypes } from '@propTypes'

export const elementProps = {
  ...childrenPropTypes,
  ...classNamePropTypes,
  ...elementPropTypes,
}
