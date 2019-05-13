export const gridVars = {
  cells: 40,
  get cellSize() {
    return (100 / this.cells).toFixed(3)
  },
  get cellSizeCss() {
    return this.cellSize + 'vw'
  },
  maxCellSize: 50,
  get maxCellSizeCss() {
    return this.maxCellSize + 'px'
  },
}
