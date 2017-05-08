const square = document.querySelector('.square')
let squarePosition = 0
let verticalPosition = 0


function move(e) {
    if (e.key === 'ArrowRight') {
        squarePosition += 10
        square.style.left = squarePosition + 'px'
    } else if (e.key === 'ArrowLeft') {
        squarePosition -= 10
        square.style.left = squarePosition + 'px'
    } else if (e.key === 'ArrowUp') {
        verticalPosition -= 10
        square.style.top = verticalPosition + 'px'
    } else if (e.key === 'ArrowDown') {
        verticalPosition += 10
        square.style.top = verticalPosition + 'px'
    }

    if (e.keyCode === 32) {
        jump()
    }

}

function jump() {
    const jumpHeight = 100
    const currentPosition = {
        x: square.offsetLeft,
        y: square.offsetTop
    }

    console.log(currentPosition.y)
    console.log(currentPosition.y - jumpHeight)

    if (currentPosition.y >= (currentPosition.y - jumpHeight)) {
        console.log('entra')
        squarePosition -= 10
        square.style.top = squarePosition + 'px'
    }

    setTimeout(jump, 20)
}

document.addEventListener('keydown', move)