import {
  GAME_WIDTH,
  GAME_HEIGHT,
  GAME_TILE,
  GAME_ROWS,
  GAME_COLS,
} from './gameConfig.js'

import {
  TILE_SET,
  TILE_SIZE,
  getTile,
} from './tileset.js'

import Character from './character.js'

import layout1 from '../layouts/001.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT

let debug = false

for (let row = 0; row < GAME_ROWS; row++) {
  for (let col = 0; col < GAME_COLS; col++) {
    const [ sx, sy ] = getTile(layout1, col, row)
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

const player = new Character({
  ctx,
  id: 1,
  x: 2,
  y: 3,
})

player.draw()
