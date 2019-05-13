/*

In the package.json

"scripts": {
  "build:export-indexes": "node ./scripts/exportIndexes.js",
}

*/

const path = require('path')
const glob = require('glob')
const fs = require('fs')
const disclaimer = require('./helpers/disclaimer')
//eslint-disable-next-line
const filename = path.basename(__filename)

function init() {
  const removeUnwanted = item => !/index|.md|stories/.test(item)

  const folders = [
    {
      title: '@components',
      files: glob
        .sync('./src/components/*')
        .filter(removeUnwanted)
        .filter(item => !/sharedProps|propTypes/.test(item)),
      stringReturn: function(name, dir) {
        return `export { ${name} } from '${dir.replace('/src/components', '')}/${name}'\n`
      },
      exportPath: './src/components/index.ts',
    },
    {
      title: '@vars',
      files: glob.sync('./src/variables/**/*.{js,ts}').filter(removeUnwanted),
      stringReturn: function(name, dir) {
        return `export { ${name} } from '${dir.replace('/src/variables', '')}/${name}'\n`
      },
      exportPath: './src/variables/index.ts',
    },
    {
      title: '@utils',
      files: glob.sync('./src/utilities/**/*.{js,ts}').filter(removeUnwanted),
      stringReturn: function(name, dir) {
        return `export { ${name} } from '${dir.replace('/src/utilities', '')}/${name}'\n`
      },
      exportPath: './src/utilities/index.ts',
    },
    {
      title: '@sharedProps',
      files: glob.sync('./src/shared-props/*.{js,ts}').filter(removeUnwanted),
      stringReturn: function(name, dir) {
        return `export { ${name} } from '${dir.replace('/src/shared-props', '')}/${name}'\n`
      },
      exportPath: './src/shared-props/index.ts',
    },
    {
      title: '@propTypes',
      files: glob.sync('./src/prop-types/*.{js,ts}').filter(removeUnwanted),
      stringReturn: function(name, dir) {
        return `export { ${name} } from '${dir.replace('/src/prop-types', '')}/${name}'\n`
      },
      exportPath: './src/prop-types/index.ts',
    },
  ]

  folders.forEach(({ title, files, stringReturn, exportPath }) => {
    let selfIndexStr = disclaimer(filename)

    files.forEach((entry, index) => {
      const pathParse = path.parse(entry)
      const dir = pathParse.dir
      const name = pathParse.name

      if (index === 0) {
        selfIndexStr += `\n/* ${title} */\n`
      }

      selfIndexStr += stringReturn(name, dir)
    })
    //eslint-disable-next-line
    fs.writeFileSync(path.join(process.cwd(), exportPath), selfIndexStr)
    //eslint-disable-next-line
    console.log(`${title} exported to ${exportPath}`)
  })
}

init()
