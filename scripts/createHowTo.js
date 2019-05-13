/*

In the package.json

"scripts": {
  "create:how-to": "node ./scripts/createHowTo.js",
}

*/

const fs = require('fs')
const parseArgs = require('minimist')
const howToDoc = require('./helpers/howToDoc')
const howToStories = require('./helpers/howToStories')
const snakeCase = require('./helpers/snakeCase')
const uppercaseFirst = require('./helpers/uppercaseFirst')

function init() {
  //eslint-disable-next-line
  var argv = parseArgs(process.argv.slice(2))

  let howToName = argv['n'] || argv['name'] || null

  if (howToName === null || howToName.length === 0) {
    //eslint-disable-next-line
    console.log('/*\n *Don\'t forget to enter a how-to name after the command! "-n Be Awesome"\n*/')
  }

  howToName = uppercaseFirst(howToName).replace(/-/g, ' ')

  const howToDir = './src/how-to/'
  const snakeCasedhowToName = snakeCase(howToName)
  const howToPath = howToDir + snakeCasedhowToName

  if (fs.existsSync(howToPath)) {
    //eslint-disable-next-line
    console.error(`A how-to with the name "${snakeCasedhowToName}" already existed homie. Switch it up.`)

    return
  }

  function makeFiles() {
    fs.mkdirSync(howToPath)

    fs.writeFileSync(`${howToPath}/${snakeCasedhowToName}.md`, howToDoc(howToName))
    fs.writeFileSync(`${howToPath}/story.js`, howToStories(howToName, snakeCasedhowToName))
    //eslint-disable-next-line
    console.log(`/*
 * ${snakeCasedhowToName} was added to '${howToPath}' 
*/`)
  }

  makeFiles()
}

init()
