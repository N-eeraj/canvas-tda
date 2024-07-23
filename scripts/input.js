const keyPressed = {}
const validKeyPress = [
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
]

const handleKeypress = ({ key }) => {
  if (validKeyPress.includes(key)) {
    keyPressed.value = key
  }
}

document.addEventListener('keydown', handleKeypress)
document.addEventListener('keyup', () => keyPressed.value = null)

export default keyPressed
