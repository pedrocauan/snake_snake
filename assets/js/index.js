
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


canvas.width = window.screen.width / 2
canvas.height = window.screen.height / 2

const snake = new Snake(0,0, 25, 25, "green")
const animate = () => {
    window.requestAnimationFrame(animate)
    snake.draw()
}

animate()