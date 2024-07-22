import {
  GAME_WIDTH,
  GAME_HEIGHT,
} from './gameConfig.js'

import { drawTiles} from './tileset.js'

import Character from './character.js'

import layout1 from '../layouts/001.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = GAME_WIDTH
canvas.height = GAME_HEIGHT

let debug = false
const debugEl = document.getElementById('debug')
debugEl.addEventListener('change', () => debug = !debug)

const player = new Character({
  ctx,
  id: 1,
  x: 2,
  y: 0,
})

const animate = () => {
  drawTiles(ctx, layout1, debug)
  player.draw()

  requestAnimationFrame(animate)
}

animate()

