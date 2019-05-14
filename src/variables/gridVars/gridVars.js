import { config } from '@config'

export const gridVars = {
  cells: config.gridCells,
  get cellSize() {
    return parseFloat((100 / this.cells).toFixed(3))
  },
  get cellSizeCss() {
    return this.cellSize + 'vw'
  },
  maxCellSize: parseFloat(config.sectionMaxWidth / config.gridCells),
  get maxCellSizeCss() {
    return this.maxCellSize + 'px'
  },
}
