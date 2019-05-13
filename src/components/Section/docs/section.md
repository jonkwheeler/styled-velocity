# Section

## Usage 🔌

~~~js
import { Section } from 'styled-velocity';
~~~

## About

Each "section" you create *should* be wrapped in this component. This component helps keep your content centered, while allowing full bleeds. Try expanding the browser past the 2000px max-width (set in your config file), and see what happens (use dev tools "Responsive" mode if you have to). Notice that the child stops growing at 2000px, but the section continues onward, stretching 100% of the page. This give you the power to keep the content centered, but giving the section a color to bleed to the edge of the page.

**Note:** `sharedProps` can be applied here, however `gridLines` is applied to the child to maintain the 2000px max-width.

## Examples

~~~js
<Section bg='grey' gridLines>
  <h1>Hello World</h1>
</Section>
~~~