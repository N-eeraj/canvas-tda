import { GAME_TILE } from './gameConfig.js'

const characterAssets = {}
const characterCount = 10

export const CHARACTER_SIZE = 32

for (let i = 1; i <= characterCount; i++) {
  characterAssets[i] = document.getElementById(`character${String(i).padStart(2, '0')}`)
}

export default class Character {
  constructor({ ctx, id, x, y }) {
    this.ctx = ctx
    this.id = id
    this.x = x
    this.y = y
  }

  draw() {
    this.ctx.drawImage(
      characterAssets[this.id],
      0 * CHARACTER_SIZE + GAME_TILE /2,
      0 * CHARACTER_SIZE,
      GAME_TILE,
      CHARACTER_SIZE,
      this.x * GAME_TILE,
      this.y * GAME_TILE,
      GAME_TILE,
      GAME_TILE * 2,
    )
  }
}
