import Player from "./classes/Player.js"

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const player = new Player(canvas.width, canvas.height)

const keys = {
  left: false,
  right: false
}


const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if(keys.left) {
    player.moveLeft
  }

  if(keys.right) {
    player.moveRight
  }
  
  player.draw(ctx)

  requestAnimationFrame(gameLoop)
}

addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase()

  if( key === "a") keys.left = true
  if( key === "d") keys.right = true
  
}) 

addEventListener("keyup", (event) => {
  const key = event.key.toLowerCase()

  if( key === "a" && player.position >= 0) keys.left = false
  
  if( key === "d" && player.position <= canvas.width - player.width ) keys.right = false
  
}) 

gameLoop()
