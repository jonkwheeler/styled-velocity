import PropTypes from 'prop-types'
import { childrenPropTypes, classNamePropTypes } from '@propTypes'

export const boxProps = {
  ...childrenPropTypes,
  ...classNamePropTypes,
  alignSelf: PropTypes.oneOf(['top', 'bottom', 'center', 'middle', 'stretch']),
  element: PropTypes.oneOf(['div', 'li', 'span']),
}
