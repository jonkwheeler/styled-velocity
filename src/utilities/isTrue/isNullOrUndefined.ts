import { isNull, isUndefined } from '@utils'

/*
 * isNullOrUndefined(value) returns boolean
 */
export const isNullOrUndefined = value => isNull(value) || isUndefined(value)
