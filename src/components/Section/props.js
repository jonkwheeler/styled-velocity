import PropTypes from 'prop-types'
import { childrenPropTypes, classNamePropTypes, elementPropTypes, idRequiredPropTypes } from '@propTypes'

export const sectionProps = {
  ...childrenPropTypes,
  ...classNamePropTypes,
  ...elementPropTypes,
  ...idRequiredPropTypes,
  gridLines: PropTypes.bool,
}
