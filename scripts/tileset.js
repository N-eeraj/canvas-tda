import { GAME_COLS } from './gameConfig.js'

export const TILE_SET = document.getElementById('tileset')
export const TILE_SIZE = 16

const TILES_COUNT = {
  cols: 52,
  rows: 25,
}

export const getTile = (layout, col, row) => {
  const tileNumber = layout[row * GAME_COLS + col]
  const sx = (tileNumber - 1) % TILES_COUNT.cols
  const sy = Math.floor((tileNumber - 1) / TILES_COUNT.cols)
  return [ sx, sy ]
}
