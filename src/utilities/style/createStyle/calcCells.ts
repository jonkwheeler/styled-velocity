export const calcCells = (property: string, cells: number) =>
  `${property}: calc(var(--cel,2.5vw) * ${cells});`
