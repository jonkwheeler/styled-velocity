import { configure } from '@storybook/react'

const req = require.context('../src', true, /story.(js|jsx|ts|tsx)$|stories\/*.(js|jsx|ts|tsx)/)

function loadStories() {
  require('./welcomeStory')
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
