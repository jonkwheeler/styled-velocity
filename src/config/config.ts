const fs = require('fs')
const path = require('path')

const defaultConfig = {
  gridCells: 40,
  sectionMaxWidth: 2000,
  classNamePrefix: '_sv__',
}

let rootConfig = {}

const pathName = '.svconfig.js'

const file = path.resolve(path.join(__dirname, pathName))

try {
  if (fs.existsSync(file)) {
    // file exists
    rootConfig = require(file)
  }
} catch (err) {
  console.error(err)
}

export const config = {
  ...defaultConfig,
  ...rootConfig,
}
