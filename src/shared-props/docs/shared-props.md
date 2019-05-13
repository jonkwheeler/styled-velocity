# sharedProps

## Usage 🔌

~~~js
import { appearanceProps, cssProps, dimensionProps, displayMode, flexProps, gridLines, growShrink, positionProps, textProps } from 'styled-velocity'
~~~

This folder is for possible shared items across components.

Add import them to your components like...

~~~js
export const StyledDiv = styled.div`
  ${gridLines};
  ${displayMode};
  ${appearanceProps};
  ${dimensionProps};
  ${flexProps};
  ${positionProps};
  ${cssProps};
`
~~~

Note: I'd put `css` last so you can use it to override anything above it.

### conversionType

Notice the `conversionType`? This should clue you into what is possible for the given prop.

| conversionType	| result 	|
|---	|---	|
| percentageOrPixel 	| You can pass is an `int` like `50` and it'll convert to `50px`. You can pass it a fraction, like `1 / 2` and it'll convert to a `50%`. You can also just pass a string like `50em`.	|
| getCells	| This takes an `int` and converts it to the cells width (or height). Thus `cw={2}` makes the element 2 cells wide. 	|
| getCellTranslate 	| Similar to `getCells`, but takes an object. `ctransform={{x: 0.5, y: 0}}` would offset the x coords of the element by 1/2 cells width. 	|
| getFlexProperty 	| Flex has some pretty unintuitive properties. For instance, `valign="top"` refers to the vertical alignment an element (assuming you staying with direction=row). You can of course pass the original css flex properties as well if you are used to them.	|

### getFlexProperty

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

