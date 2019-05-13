# createStyle

## Usage 🔌

```js
import { createStyleFromObject } from 'styled-velocity'
```

## Examples

```js
const styleObject = {
  color: 'black',
  'font-family': 'Arial',
  'font-weight': 300,
  'font-size': {
    '0-799': { min: 48, max: 64 },
    '800-1599': { min: 64, max: 124 },
    '1600-1999': { min: 124, max: 156 },
    2000: '28px',
  },
}

const myDiv = styled.div`
  ${createStyleFromObject(styleObject)}
`
```

If you want to be scale values from start to finish, you can use `createStyleFromTo` to achieve the same thing, but less value input

```js
import { createStyleFromTo } from 'styled-velocity'
```

```js
const styleObject = {

	// this is the same as...
	'font-size': {
		'0-799': { min: 48, max: 64 },
		'800-1599': { min: 64, max: 124 },
		'1600-1999': { min: 124, max: 156 },
		2000: '28px'
	}

	// this...
	get 'font-size'() {
		return createStyleFromTo({
			mobile: 48,
			tablet: 64,
			desktop: 124,
			super: 156,
		})
	}
}
```
