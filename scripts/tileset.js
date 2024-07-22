import {
  GAME_TILE,
  GAME_ROWS,
  GAME_COLS,
} from './gameConfig.js'

const TILE_SET = document.getElementById('tileset')
const TILE_SIZE = 16

const TILES_COUNT = {
  cols: 52,
  rows: 25,
}

const getTile = (layout, col, row) => {
  const tileNumber = layout[row * GAME_COLS + col]
  const sx = (tileNumber - 1) % TILES_COUNT.cols
  const sy = Math.floor((tileNumber - 1) / TILES_COUNT.cols)
  return [ sx, sy ]
}

export const drawTiles = (ctx, layout, debug) => {
  for (let row = 0; row < GAME_ROWS; row++) {
    for (let col = 0; col < GAME_COLS; col++) {
      const [ sx, sy ] = getTile(layout, col, row)
      ctx.drawImage(
        TILE_SET,
        sx * TILE_SIZE,
        sy * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE,
        col * GAME_TILE,
        row * GAME_TILE,
        GAME_TILE,
        GAME_TILE
      )
      if (debug) {
        ctx.strokeStyle = 'red'
        ctx.strokeRect(
          col * TILE_SIZE,
          row * TILE_SIZE,
          GAME_TILE,
          GAME_TILE
        )
      }
    }
  }
}
