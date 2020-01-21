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
        .sync('./src/components/**/*.{jsx,tsx}')
        .filter(removeUnwanted)
        .filter(item => !/sharedProps|propTypes/.test(item)),
      stringReturn: function(name, dir) {
        return `export { ${name}, ${name}Props } from '${dir.replace('/src/components', '')}/${name}'\n`
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
      title: '@props',
      files: glob.sync('./src/components/**/index.ts'),
      stringReturn(name, dir, entry) {
        // eslint-disable-next-line

        /*
         * Need to output the following example:
         * import { MyType } from './a'
         * export type MyType = MyType
         */

        const str = fs.readFileSync(entry, 'utf8')

        if (!str.includes('export type')) {
          return ''
        }

        const regex = /^export\stype\s(.*)\s=/gm
        let m
        const props = []

        while ((m = regex.exec(str)) !== null) {
          // This is necessary to avoid infinite loops with zero-width matches
          if (m.index === regex.lastIndex) {
            regex.lastIndex += 1
          }

          const type = m[1]
          props.push(type)
        }

        return props.reduce((acc, prop) => {
          return (acc += `import { ${prop} as _${prop} } from '${dir.replace(
            '/src',
            '.',
          )}'\nexport type ${prop} = _${prop}\n`)
        }, '')
      },
      exportPath: './src/props/index.ts',
      extraDisclaimer: `
/* Importing Type seperately is needed for export for the package build process. Do not remove.
 * Getting the type requires cross file reference. isolatedModules prevents that.
 * isolatedModules is needed for Babel.
 * Reference here: https://github.com/babel/babel-loader/issues/603#issuecomment-399293448
 */\n`,
    },
    {
      title: '@propTypes',
      files: glob.sync('./src/prop-types/*.{js,ts}').filter(removeUnwanted),
      stringReturn: function(name, dir) {
        return `export { ${name} } from '${dir.replace('/src/prop-types', '')}/${name}'\n`
      },
      exportPath: './src/prop-types/index.ts',
    },
    {
      title: '@config',
      files: glob.sync('./src/config/*.{js,ts}').filter(removeUnwanted),
      stringReturn: function(name, dir) {
        return `export { ${name} } from '${dir.replace('/src/config', '')}/${name}'\n`
      },
      exportPath: './src/config/index.ts',
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

      selfIndexStr += stringReturn(name, dir, entry)
    })
    //eslint-disable-next-line
    fs.writeFileSync(path.join(process.cwd(), exportPath), selfIndexStr)
    //eslint-disable-next-line
    console.log(`${title} exported to ${exportPath}`)
  })
}

init()
