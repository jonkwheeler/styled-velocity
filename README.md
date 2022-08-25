# Tis a bit old 👴

While you can still use this package, I recommend giving my `emotion` based package called [`styled-velocity-emotion`](https://github.com/jonkwheeler/styled-velocity-emotion) a shot. I'll update this one when I have time. It's smaller, faster, better.

# Styled-Velocity

Styled-Velocity, a React-based styled prop and UI library to increase your velocity and help build your Design System.

## Install

```js
yarn add styled-velocity
```

or

```js
npm install styled-velocity
```

## sharedProps

Import example:

```js
import { appearanceProps, cssProps, dimensionProps } from 'styled-velocity'
```

- Overview - [docs](https://github.com/jonkwheeler/styled-velocity/blob/master/src/shared-props/docs/shared-props.md)

## Components

**All of the following have access to the sharedProps.**

Import example:

```js
import { Element } 'styled-velocity'
```

- `Element` - [docs](https://github.com/jonkwheeler/styled-velocity/blob/master/src/components/Element/docs/element.md)
- `Flex` - [docs](https://github.com/jonkwheeler/styled-velocity/blob/master/src/components/Flex/docs/flex.md)
- `Main` - [docs](https://github.com/jonkwheeler/styled-velocity/blob/master/src/components/Main/docs/main.md)
- `Section` - [docs](https://github.com/jonkwheeler/styled-velocity/blob/master/src/components/Section/docs/section.md)

## createStyle

- Overview - [docs](https://github.com/jonkwheeler/styled-velocity/blob/master/src/utilities/style/createStyle/docs/create-style.md)

## Available sharedProps

| import            | prop            | css property               | conversionType     |
| ----------------- | --------------- | -------------------------- | ------------------ |
| `appearanceProps` | `bg`            | background                 |                    |
| ""                | `bgImage`       | background-image           |                    |
| ""                | `bgSize`        | background-size            |                    |
| ""                | `borderRadius`  | border-radius              |                    |
| ""                | `boxShadow`     | box-shadow                 |                    |
| `cssProps`        | `css`           | any css                    |                    |
| `dimensionProps`  | `m`             | margin                     | percentageOrPixel  |
| ""                | `mt`            | margin-top                 | ""                 |
| ""                | `mb`            | margin-bottom              | ""                 |
| ""                | `ml`            | margin-left                | ""                 |
| ""                | `mr`            | margin-right               | ""                 |
| ""                | `mx`            | `ml` and `mr`              | ""                 |
| ""                | `my`            | `mt` and `mb`              | ""                 |
| ""                | `p`             | padding                    | ""                 |
| ""                | `pt`            | padding-top                | ""                 |
| ""                | `pb`            | padding-bottom             | ""                 |
| ""                | `pl`            | padding-left               | ""                 |
| ""                | `pr`            | padding-right              | ""                 |
| ""                | `px`            | `pl` and `pr`              | ""                 |
| ""                | `py`            | `pt` and `pb`              | ""                 |
| ""                | `h`             | height                     | ""                 |
| ""                | `w`             | width, flex-basis          | ""                 |
| ""                | `minh`          | min-height                 | ""                 |
| ""                | `minw`          | min-width                  | ""                 |
| ""                | `maxh`          | max-height                 | ""                 |
| ""                | `maxw`          | max-width                  | ""                 |
| ""                | `c`             | `cw` and `ch`              | getCells           |
| ""                | `cw`            | cells wide                 | ""                 |
| ""                | `ch`            | cells height (cells tall)  | ""                 |
| ""                | `cm`            | cells margin               | ""                 |
| ""                | `cml`           | cells margin-left          | ""                 |
| ""                | `cmr`           | cells margin-right         | ""                 |
| ""                | `cmt`           | cells margin-top           | ""                 |
| ""                | `cmb`           | cells margin-bottom        | ""                 |
| ""                | `cmx`           | `cml` and `cmr`            | ""                 |
| ""                | `cmy`           | `cmt` and `cmb`            | ""                 |
| ""                | `cp`            | cells padding              | ""                 |
| ""                | `cpl`           | cells padding-left         | ""                 |
| ""                | `cpr`           | cells padding-right        | ""                 |
| ""                | `cpt`           | cells padding-top          | ""                 |
| ""                | `cpb`           | cells padding-bottom       | ""                 |
| ""                | `cpx`           | `cpl` and `cpr`            | ""                 |
| ""                | `cpy`           | `cpt` and `cpb`            | ""                 |
| ""                | `ctransform`    | cells transform            | getCellsTranslate  |
| `displayMode`     | `displayMode`   | outputs bounding box color |                    |
| `flexProps`       | `direction`     | flex-direction             | getFlexProperty    |
| ""                | `wrap`          | flex-wrap                  | ""                 |
| ""                | `align`         | justify-content            | ""                 |
| ""                | `valign`        | align-items                | ""                 |
| ""                | `valignContent` | align-content              | ""                 |
| `gridLines`       | `gridLines`     | outputs grid lines         |                    |
| `growShrinkProps` | `grow`          | flex-grow                  | booleanToIntString |
| ""                | `shrink`        | flex-shrink                | ""                 |
| `positionProps`   | `t`             | top                        | percentageOrPixel  |
| ""                | `b`             | bottom                     | ""                 |
| ""                | `l`             | left                       | ""                 |
| ""                | `r`             | right                      | ""                 |
| ""                | `x`             | `r` and `l`                | ""                 |
| ""                | `y`             | `t` and `b`                | ""                 |
| ""                | `ct`            | cells top                  | getCells           |
| ""                | `cb`            | cells bottom               | ""                 |
| ""                | `cl`            | cells left                 | ""                 |
| ""                | `cr`            | cells right                | ""                 |
| ""                | `cx`            | `cr` and `cl`              | ""                 |
| ""                | `cy`            | `ct` and `cb`              | ""                 |
| ""                | `position`      | position                   |                    |
| ""                | `z`             | z-index                    |                    |
| `textProps`       | `color`         | color                      |                    |
| ""                | `textAlign`     | text-align                 |                    |
| ""                | `textTransform` | text-transform             |                    |
| ""                | `fontFamily`    | font-family                |                    |
| ""                | `fontSize`      | font-size                  | percentageOrPixel  |
| ""                | `fontWeight`    | font-weight                |                    |
| ""                | `lineHeight`    | line-height                |                    |

## Breakpoints

### About

All of the sharedProps can take a single value, or an object of Breakpoints. You have all the choices you could possibly use for creating style within breakpoints. This system is _mobile first_, but there's several ways to mix it up.

### Example

Let's using the `width` css property for the following examples...

##### No breakpoint

```js
w={50}
```

##### Mobile: 50, Tablet: 100, Desktop: 150

If you want to create a breakpoint, supply an object, and use the key as the breakpoint. Make sure to give the lowest a `0`, if it's min-width 0, it won't wrap it in a media query.

```js
w={{ 0: 50, 768: 100, 1024: 150 }}
```

returns

```css
width: 50px;

@media (min-width: 768px) {
  width: 100px;
}
@media (min-width: 1024px) {
  width: 150px;
}
```

##### Mobile: 50, Tablet: 100, Desktop

If you want to create a breakpoint that has min and max, supply a key that is a string like so...

```js
w={{ '768-1024': 100 }}
```

returns

```css
@media (min-width: 768px) and (max-width: 1024px) {
  width: 100px;
}
```

Pretty cool, eh?

### Scaling Font Sizes

This min-max string key is how the scaling pixel values work. If you wanted to scale anything from one pixel value to another, like `font-size` for instance, you can do this...

```js
fontSize={{
  0: 12,
  '414-1023': { min: 12, max: 36 },
  1024: 36
}}
```

returns

```css
font-size: 12px;

@media (min-width: 414px) and (max-width: 1023px) {
  A css formula to scale the font-size from 12px to 36px based on screen width
}

@media (min-width: 1024px) {
  font-size: 36px;
}
```

## conversionType

Notice the `conversionType`? This should clue you into what is possible for the given prop.

### percentageOrPixel

You can pass is an `int` like `50` and it'll convert to `50px`. You can pass it a fraction, like `1 / 2` and it'll convert to a `50%`. You can also just pass a string like `50em`.

### booleanToIntString

Used for grow and shrink, if you pass `true`, it'll convert to `1` for css purposes. And `false` to `0`.

### getCells

This takes an `int` and converts it to the cells width (or height). Thus `cw={2}` makes the element 2 cells wide (based on your grid config).

### getCellsTranslate

Similar to `getCells`, but takes an object. `ctransform={{ 0: {x: 0.5, y: 0} }}` would offset the x coords of the element by 1/2 cells width.

### getFlexProperty

Flex has some pretty unintuitive properties. For instance, `valign="top"` refers to the vertical alignment an element (assuming you staying with direction=row). You can of course pass the original css flex properties as well if you are used to them.

| input	| output 	|
|---	|---	|
| top 	| flex-start	|
| left 	| flex-start	|
| start 	| flex-start	|
| bottom 	| flex-end	|
| right 	| flex-end	|
| end 	| flex-end	|
| middle 	| center	|
| center 	| center	|


## Polyfill

In order to use this package on IE, you'll need a polyfill for `String.prototype.includes`. You can do this with loading a polyfill script from https://polyfill.io/, such as 

```<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.includes" async></script>```

### Using Next.js?

With Next.js you can load polyfills another way. See https://github.com/zeit/next.js/blob/canary/examples/with-polyfills/client/polyfills.js.

Add following to `client/polyfills.js`

~~~js
/*
 * This files runs at the very beginning (even before React and Next.js core)
 * https://github.com/zeit/next.js/blob/canary/examples/with-polyfills/client/polyfills.js
 */

/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import stringIncludes from 'core-js/library/fn/string/virtual/includes'

// Add your polyfills
String.prototype.includes = stringIncludes
~~~

And then modify the `next.config.js`

~~~js
// next.config.js

const nextConfig = {
  webpack(config) {

    /*
     * Add polyfills
     * https://github.com/zeit/next.js/blob/canary/examples/with-polyfills/next.config.js
     */

    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        entries['main.js'].unshift('./client/polyfills.js')
      }

      return entries
    }

    return config
  },
}

module.exports = nextConfig
~~~
