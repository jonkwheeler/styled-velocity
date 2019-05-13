/*
 * classNames Example:
 * classNames('hello-world', 'custom-class') => '__ds_hello-world custom-class'
 */
export const classNames = (componentName = '', customClass = '', prefix = '__sv_') =>
  (prefix + componentName + ' ' + customClass).trim()
