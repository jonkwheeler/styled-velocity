# Flex

## Usage 🔌

~~~js
import { Flex } from 'styled-velocity';
~~~

## About

The `Flex` component is a quick way to make any layout you wish. To use it, you should also use `Flex.Box` or `Flex.Item` (same thing) as you can apply extra flex properties to those children. These also have access to the `sharedProps` library.

## Examples

Changing columns from mobile: 1 column, tablet: 2 column, and desktop: 3 column

~~~js
<Flex cw={40} columns={{ 0: 1, 768: 2, 1280: 3 }}>
	<Flex.Item />
	<Flex.Item />
	<Flex.Item />
</Flex>
~~~

Have the first first child full width on mobile, but on desktop 12 columns wide. Have the second child take up the rest of the space.

~~~js
<Flex cw={20}>
	<Flex.Item cw={{0: 20, 1024: 12}} />
	<Flex.Item cw={{0: 20, 1024: 8}} />
</Flex>
~~~

Or try using grow.

~~~js
<Flex cw={20}>
	<Flex.Item cw={{0: 20, 1024: 12}} />
	<Flex.Item grow />
</Flex>
~~~
