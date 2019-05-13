# aspectRatio

## Usage 🔌

~~~js
import { aspectRatio, paddingTop } from 'styled-velocity'
~~~

## About

These are css helpers, but you could use it elsewhere. The famous padding-top trick.

## Examples

For all these examples, let's assume we want to maintain an aspect ratio of 1000:800 (height:width).

Here the height is 80% of the width.

~~~js
aspectRatio(1000, 800) => 80.000
~~~

This just creates a string from aspectRatio and adds the %

~~~js
paddingTop(1000, 800) => '80.000%'
~~~

If you're trying to maintain an aspect ratio for an element, this is helpful. You'll need `paddingTop`, which is compability will everything.

~~~js
const StyledDiv = styled.div`
  &:before{
    content: '';
    display: block;
    padding-top: ${paddingTop(1000, 800)};
  }
`
~~~

**OR** to make your life easier (see story)...

This will output the `before` psuedo css from the block above.

~~~js
<Element css={paddingTopCss(1000, 800)} />
~~~
