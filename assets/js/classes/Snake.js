function Snake(posX, posY, width, height, color) {
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
    this.color = color

    this.draw = () => {    
        ctx.fillStyle = color
        ctx.fillRect(0,0, this.width, this.height)
    }
}