let snitch = document.querySelector(".snitch");
let windowWidth = document.body.clientWidth;
console.log(windowWidth)
let windowHeight = document.body.clientHeight;
console.log(windowHeight);
let color
let posX
let posY

function colorRandomizer() {
    color = (Math.random() * 1000000).toFixed()
    return color
}
function positionRandomizerX() {
    posX = (Math.random() * windowWidth).toFixed();
    if (posX > windowWidth - 100) {
        positionRandomizerX()
    } else {
        return posX;
    }
}

function positionRandomizerY() {
    posY = (Math.random() * windowHeight).toFixed();
    if (posY > windowHeight - 100) {
        positionRandomizerY();
        console.log(windowHeight)
    } else {
        return posY;
    }
}

setInterval(() => {
    snitch.style.backgroundColor = `#` + colorRandomizer()
    snitch.style.left = positionRandomizerX() + `px`;
    snitch.style.top = positionRandomizerY() + `px`;
}, 2000)   

