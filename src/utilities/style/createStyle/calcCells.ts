export const calcCells = (property: string, cells: number) =>
  `${property}: ${2.5 *
    cells}vw; ${property}: calc(var(--cel,2.5vw) * ${cells}); @media (min-width: 2000px){ ${property}: ${50 *
    cells}px;}`
