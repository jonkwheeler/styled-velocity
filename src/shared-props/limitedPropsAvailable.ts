import { appearancePropsAvailable } from './appearancePropsAvailable'
import { dimensionPropsAvailable } from './dimensionPropsAvailable'
import { flexPropsAvailable } from './flexPropsAvailable'
import { positionPropsAvailable } from './positionPropsAvailable'
import { textPropsAvailable } from './textPropsAvailable'

export const limitedPropsAvailable = [
  ...appearancePropsAvailable,
  ...dimensionPropsAvailable,
  ...flexPropsAvailable,
  ...positionPropsAvailable,
  ...textPropsAvailable,
]
