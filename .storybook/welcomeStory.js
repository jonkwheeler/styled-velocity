import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Section, Flex, Element } from '@components'

storiesOf('Hello There', module).add('Welcome', () => (
  <Section id="welcome-to-styled-velocity">
    <Flex align="center" valign="center" bgColor="lightblue">
      <Element bgColor="grey" ctransform={{ x: 1, y: 3 }}>
        Welcome to{' '}
        <Element element="span" color="black">
          Styled Velocity
        </Element>{' '}
        👨‍🚀
      </Element>
    </Flex>
  </Section>
))
