/*
 * isArray(value) returns boolean
 */

export const isArray = arr => ({}.toString.call(arr) === '[object Array]')
