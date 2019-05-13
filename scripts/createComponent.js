/*

In the package.json

"scripts": {
  "create:component": "node ./scripts/createComponent.js",
}

*/

const fs = require('fs')
const parseArgs = require('minimist')
const componentDoc = require('./helpers/componentDoc')
const componentStories = require('./helpers/componentStories')
const componentIndex = require('./helpers/componentIndex')
const componentFile = require('./helpers/componentFile')
const snakeCase = require('./helpers/snakeCase')
const uppercaseFirst = require('./helpers/uppercaseFirst')

function init() {
  //eslint-disable-next-line
  var argv = parseArgs(process.argv.slice(2))

  let componentName = argv['n'] || argv['name'] || null
  let extension = argv['x'] || argv['ext'] || 'js'
  extension = extension.toLowerCase()

  if (componentName.length === 0) {
    //eslint-disable-next-line
    console.log('Don\'t forget to enter a component name after the command! "-n ComponentName"')
  }

  componentName = uppercaseFirst(componentName)
  const componentDir = './src/components/'
  const componentPath = componentDir + componentName

  if (fs.existsSync(componentPath)) {
    //eslint-disable-next-line
    console.error(`A component with the name "${componentName}" already existed homie. Switch it up.`)

    return
  }

  const snakeCasedcomponentName = snakeCase(componentName)
  const docsPath = componentPath + '/docs'
  const storiesPath = componentPath + '/stories'

  function makeFiles() {
    fs.mkdirSync(componentPath)
    fs.mkdirSync(docsPath)
    fs.mkdirSync(storiesPath)

    fs.writeFileSync(`${docsPath}/${snakeCasedcomponentName}.md`, componentDoc(componentName))
    fs.writeFileSync(`${storiesPath}/story.js`, componentStories(componentName, snakeCasedcomponentName))
    fs.writeFileSync(`${componentPath}/index.${extension}`, componentIndex(componentName))
    fs.writeFileSync(
      `${componentPath}/${componentName}.${extension}x`,
      componentFile(componentName, snakeCasedcomponentName),
    )
    //eslint-disable-next-line
    console.log(`/*
 * ${componentName} was added to '${componentPath}' using .${extension} and .${extension}x where appropriate
*/`)
  }

  makeFiles()
}

init()
