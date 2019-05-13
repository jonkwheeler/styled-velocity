import { css } from 'styled-components'

export const gridLines = css`
  ${props =>
    props.gridLines &&
    `
    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0.175;
      pointer-events: none;
    }
    /* base this on cells prop */
    &:before { 
      background: repeating-linear-gradient(to right, green, white 2.5vw);
      @media(min-width: 2000px){ background: repeating-linear-gradient(to bottom, green, white 50px); }
    }
    &:after { 
      background: repeating-linear-gradient(to bottom, red, white 2.5vw);
      @media(min-width: 2000px){ background: repeating-linear-gradient(to bottom, red, white 50px); }
    }

    `};
`
