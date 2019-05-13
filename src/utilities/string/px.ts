import { isNumber } from '@utils'

/*
 * px Example:
 * px(100) => '100px'
 */
export const px = (value: number) => (isNumber(value) ? value + 'px' : value)
