const the = document.querySelector('section')
let allps = document.querySelectorAll('p')
let section2 = document.querySelector('.section2')
const square = document.querySelector('.square')
let squarePosition = 0
let verticalPosition = 0

function moveSquare(e) {
    if (section2.classList.contains('move')) {
        section2.classList.remove('move')
    } else {
        section2.classList.add('move')

    }
}

function move(e) {
    if (e.key === 'ArrowRight') {
        squarePosition += 10
        square.style.left = squarePosition + 'px'
        console.log('clickint right', squarePosition)
    } else if (e.key === 'ArrowLeft') {
        squarePosition -= 10
        square.style.left = squarePosition + 'px'
        console.log('left')
    } else if (e.key === 'ArrowUp') {
        verticalPosition -= 10
        square.style.top = verticalPosition + 'px'
        console.log('top')
    } else if (e.key === 'ArrowDown') {
        verticalPosition += 10
        square.style.top = verticalPosition + 'px'
        console.log('down')
    }

}

the.addEventListener('click', moveSquare)
document.addEventListener('keydown', move)