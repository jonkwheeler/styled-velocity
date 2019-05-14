import { dirname, resolve } from 'path'

const defaultConfig = {
  gridCells: 40,
  sectionMaxWidth: 2000,
  classNamePrefix: '_sv__',
}

const rootConfig = resolve(dirname('.svconfig.js')) || {}

export const config = {
  ...rootConfig,
  ...defaultConfig,
}
