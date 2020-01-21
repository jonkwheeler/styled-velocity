/*

In the package.json

"scripts": {
  "build:export-src-index": "node ./scripts/exportSrcIndex.js",
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
      title: 'Components',
      files: glob.sync('./src/components/**/*.{jsx,tsx}').filter(removeUnwanted),
    },
    {
      title: 'Shared props for styled-components',
      files: glob.sync('./src/shared-props/*.{js,ts}').filter(removeUnwanted),
    },
    {
      title: 'Shared propTypes',
      files: glob.sync('./src/prop-types/*.{js,ts}').filter(removeUnwanted),
    },
    {
      title: 'Variables',
      files: glob.sync('./src/variables/**/*.{js,ts}').filter(removeUnwanted),
    },
    {
      title: 'Utilities',
      files: glob.sync('./src/utilities/**/*.{js,ts}').filter(removeUnwanted),
    },
    {
      title: 'Config',
      files: glob.sync('./src/config/**/*.{js,ts}').filter(removeUnwanted),
    },
  ]

  let srcIndexStr =
    disclaimer(filename) +
    "/* These exports are what will be read by the 'styled-velocity' module on npm. */\n/* If it's not exported here, you can't import it via 'styled-velocity' */\n"

  folders.forEach(({ title, files }) => {
    files.forEach((entry, index) => {
      const pathParse = path.parse(entry)
      const dir = pathParse.dir
      const name = pathParse.name

      let exportedName = name

      // if (title === 'Components') {
      //   exportedName = name
      // }

      if (index === 0) {
        srcIndexStr += `\n/* ${title} */\n`
      }

      srcIndexStr += `export { ${exportedName} } from '${dir.replace('/src', '')}/${name}'\n`
    })
  })

  function commentTitle(title) {
    return `\n/* ${title} */\n`
  }

  function addProps() {
    let propsIndex = fs.readFileSync('./src/props/index.ts', 'utf8')
    propsIndex = propsIndex
      /*
       * Remove multi-line comments, like these
       */
      .replace(/\/*(.|\n)*\*\//gm, '')
      /*
       * Change
       * '../components/Element'
       * to
       * './components/Element'
       */
      .replace(/\.\.\//gm, './')
      .trim()

    srcIndexStr += commentTitle('Props') + propsIndex
  }

  addProps()

  //eslint-disable-next-line
  console.log('-- all files exported to ./src/index --')
  //eslint-disable-next-line
  fs.writeFileSync(path.join(process.cwd(), './src/index.ts'), srcIndexStr)
}

init()
