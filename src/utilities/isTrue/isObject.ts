/*
 * isObject(value) returns boolean
 */
export const isObject = x => typeof x === 'object' && !Array.isArray(x) && x !== null
