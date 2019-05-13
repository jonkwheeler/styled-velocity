# Element

## Usage 🔌

~~~js
import { Element } from 'styled-velocity';
~~~

## About

This `Element` component has access to all the `sharedProps` used for styling your element and can really speed up your workflow. 

## Examples

Give an element `padding: 50px`.

~~~js
<Element p={50}>
~~~

Give an element 2 cells worth of margin.

~~~js
<Element cm={2}>
~~~

Give a `<main>` element 5 cells worth of padding on top and bottom.

~~~js
<Element element="main" cpy={5}>
~~~

Give an element absolute positioning, and position it 3 cells width from the top, and 6 cells width from the left.

~~~js
<Element position="absolute" ct={3} cl={6}>
~~~

Give an element an offset by a 1/2 cells width using `ctransform`.

~~~js
<Element ctransform={{x: 0.5}}>
~~~

