import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Section, Flex, Element } from '@components'

storiesOf('Hello There', module).add('Welcome', () => (
  <Section id="welcome-to-styled-velocity">
    <Flex align="center" valign="center" fullscreen cpx={4}>
      <Element element="h1" color="grey">
        Welcome to{' '}
        <Element element="span" color="black">
          Styled Velocity
        </Element>{' '}
        👨‍🚀
      </Element>
    </Flex>
  </Section>
))
