
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


canvas.width = window.screen.width / 2
canvas.height = window.screen.height / 2

ctx.fillStyle = "red"
ctx.fillRect(0,0, canvas.width, canvas.height)