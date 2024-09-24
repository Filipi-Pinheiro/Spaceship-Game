class Player {
  constructor(canvasWidth, canvasHeight) {
    this.width = 100
    this.height = 100
    this.position = {
      x: canvasWidth / 2 - this.width / 2,
      y: canvasHeight - this.height - 30,
    }
    this.velocity = 6
  }

  moveLeft() {
    this.position -= this.velocity
  }

  moveRight() {
    this.position += this.velocity
  }

  draw(ctx) {
      ctx.fillStyle = "red"
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height
      )
  }
}

export default Player
