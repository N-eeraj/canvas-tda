import { GAME_TILE } from './gameConfig.js'

const characterAssets = {}
const characterCount = 10

export const CHARACTER_SIZE = 32

for (let i = 1; i <= characterCount; i++) {
  characterAssets[i] = document.getElementById(`character${String(i).padStart(2, '0')}`)
}

export default class Character {
  constructor({ ctx, id, x, y, keysPressed }) {
    this.ctx = ctx
    this.id = id
    this.x = x
    this.y = y
    this.frame = {
      col: 0,
      row: 0,
      maxFrame: 4,
      time: 0,
      maxTime: 800,
      currentStep: 0,
      direction: null,
    }
    this.keysPressed = keysPressed
  }

  draw() {
    this.ctx.drawImage(
      characterAssets[this.id],
      this.frame.col * CHARACTER_SIZE + GAME_TILE /2,
      this.frame.row * CHARACTER_SIZE,
      GAME_TILE,
      CHARACTER_SIZE,
      this.x * GAME_TILE,
      this.y * GAME_TILE,
      GAME_TILE,
      GAME_TILE * 2,
    )
  }

  update(deltaTime) {
    if (this.keysPressed.value || this.frame.time) {
      this.frame.time += deltaTime
      if (this.frame.time >= this.frame.maxTime) {
        this.frame.time = 0
      }
      const step = Math.floor(this.frame.time / (this.frame.maxTime / this.frame.maxFrame))
      if (!step) {
        if (!this.frame.direction && this.keysPressed.value)
          this.frame.direction = this.keysPressed.value
        switch (this.keysPressed.value) {
          case 'ArrowDown':
            this.frame.row = 0
            break
          case 'ArrowLeft':
            this.frame.row = 1
            break
          case 'ArrowRight':
              this.frame.row = 2
              break
          case 'ArrowUp':
            this.frame.row = 3
            break
        }
      }
      if (this.frame.currentStep !== step) {
        this.frame.currentStep = step
        this.frame.col = step
        switch (this.frame.direction) {
          case 'ArrowDown':
            this.y += 0.25
            if (Number.isInteger(this.y)) {
              this.frame.direction = null
            }
            break
          case 'ArrowLeft':
            this.x -= 0.25
            if (Number.isInteger(this.x)) {
              this.frame.direction = null
            }
            break
          case 'ArrowRight':
            this.x += 0.25
            if (Number.isInteger(this.x)) {
              this.frame.direction = null
            }
            break
          case 'ArrowUp':
            this.y -= 0.25
            if (Number.isInteger(this.y)) {
              this.frame.direction = null
            }
            break
        }
      }
    }
  }
}
