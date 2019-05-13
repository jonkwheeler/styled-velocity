/*
 * snakeCase Example:
 * snakeCase('helloWorld') => 'hello-world'
 */
export const snakeCase = (str: string): string => str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
