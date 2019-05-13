import PropTypes from 'prop-types'
import { childrenPropTypes, classNamePropTypes, elementPropTypes } from '@propTypes'

export const mainProps = {
  ...childrenPropTypes,
  ...classNamePropTypes,
  ...elementPropTypes,
  id: PropTypes.string,
  role: PropTypes.string,
}
