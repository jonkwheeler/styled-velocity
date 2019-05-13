import PropTypes from 'prop-types'
import { childrenPropTypes, classNamePropTypes } from '@propTypes'

const horizontalProps = ['left', 'center', 'middle', 'right', 'space-between', 'space-around']
const verticalProps = ['top', 'middle', 'center', 'bottom', 'baseline', 'stretch', 'space-between', 'space-around']

export const flexProps = {
  ...childrenPropTypes,
  ...classNamePropTypes,
  align: PropTypes.oneOf(horizontalProps),
  autoWidthColumns: PropTypes.bool,
  columns: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  direction: PropTypes.oneOf(['row', 'column']),
  element: PropTypes.oneOf(['div', 'ol', 'ul', 'span', 'a']),
  valign: PropTypes.oneOf(verticalProps),
  valignContent: PropTypes.oneOf(verticalProps),
  wrap: PropTypes.oneOf(['wrap', 'nowrap']),
}
