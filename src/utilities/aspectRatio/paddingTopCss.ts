import { paddingTop } from '@utils'

export const paddingTopCss = (width: number, height: number) => `
	&:before {
		content: '';
		display: block;
		padding-top: ${paddingTop(width, height)};
	}
`
