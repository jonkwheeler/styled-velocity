export { Main } from './Main'

/* Importing Type seperately is needed for export. Do not remove.
 * Getting the type requires cross file reference. isolatedModules prevents that.
 * isolatedModules is needed for Babel.
 * Reference here: https://github.com/babel/babel-loader/issues/603#issuecomment-399293448
 */
import { MainProps as _MainProps } from './Main'
export type MainProps = _MainProps
