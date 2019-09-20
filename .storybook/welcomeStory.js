import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Section, Flex, Element } from '@components'

storiesOf('Hello There', module).add('Welcome', () => (
  <Section id="welcome-to-styled-velocity">
    <Flex align="center" valign="center" bgColor="lightblue">
      <Element bgColor="grey" ctransform={{ 0: { x: 1, y: 3 }, 600: { x: 3, y: 6 } }}>
        Welcome to{' '}
        <Element element="span" color="black">
          Styled Velocity
        </Element>{' '}
        👨‍🚀
      </Element>
    </Flex>
  </Section>
))

/*

transform: translate(calc(var(--cel, 2.5vw) * 1), calc(var(--cel, 7.5vw) * 3));
@media(min-width: 600px){
  transform: translate(calc(var(--cel, 7.5vw) * 3), calc(var(--cel, 15vw) * 6));
}
@media(min-width: 2000px){
  transform: translate(150px, 300px);
}

*/
