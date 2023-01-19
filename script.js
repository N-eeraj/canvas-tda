let scene, car
const carImgUrl = 'https://b.kisscc0.com/20180705/elq/kisscc0-sports-car-bmw-z-auto-racing-download-red-racing-car-top-view-5b3dedf3f2f7c7.3560132915307852679952.png'

const setUpScene = () => {
    scene = new Scene()
    scene.setSize(1200, 800)
    scene.setBG('#0A5')
}

const setupCarSprite = () => {
    car = new Sprite(scene, carImgUrl, 150, 75)
    car.setSpeed(0)
    car.setImgAngle(0)
    car.setMoveAngle(0)
}

const init = () => {
    setUpScene()
    setupCarSprite()
    scene.start()
}

const updateCarSpeed = () => {
    const carSpeed = car.getSpeed()
    if (carSpeed > 0) car.changeSpeedBy(-0.5) // drag
    if (keysDown[K_UP]) car.changeSpeedBy(2)
    if (keysDown[K_DOWN] && carSpeed) car.changeSpeedBy(-1)
    if (carSpeed > 30) car.setSpeed(30)
}

const updateCarAngle = () => {
    const carSpeed = car.getSpeed()
    let angle = 0
    if (keysDown[K_RIGHT]) angle = 1
    if (keysDown[K_LEFT]) angle = -1
    angle *= carSpeed
    if (angle > 15) angle = 15
    else if (angle < -15) angle = -15
    car.changeAngleBy(angle)
}

const checkCarMovement = () => {
    updateCarSpeed()
    updateCarAngle()
}

const update = () => {
    scene.clear()
    checkCarMovement()
    car.update()
}

document.body.addEventListener('load', init())