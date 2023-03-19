let snitch = document.querySelector(".snitch");
snitch.style.top = 0;
snitch.style.left = 0;
let windowWidth = document.body.clientWidth;
console.log(windowWidth/2);
let windowHeight = document.body.clientHeight;
console.log(windowHeight/2);
const collectorY = limitsY();
const collectorX = limitsX();
function movement(event) {
  if (event.charCode === 119 || event.charCode === 1094) {
      snitch.style.top = parseInt(snitch.style.top) - 10 + `px`;
      collectorY(-10);
    console.log(`move to top`);
  } else if (
    event.charCode === 115 ||
    event.charCode === 1110 ||
    event.charCode === 1099
  ) {
      snitch.style.top = parseInt(snitch.style.top) + 10 + `px`;
      collectorY(10);
    console.log(`move to bottom`);
  } else if (event.charCode === 97 || event.charCode === 1092) {
      snitch.style.left = parseInt(snitch.style.left) - 10 + `px`;
      collectorX(-10);
    console.log(`move to left`);
  } else if (event.charCode === 100 || event.charCode === 1074) {
      snitch.style.left = parseInt(snitch.style.left) + 10 + `px`;
      collectorX(10);
    console.log(`move to right`);
  } else if (event.charCode === 32) {
    snitch.style.top = parseInt(snitch.style.top) - 10 + `px`;    
    setTimeout(() => {snitch.style.top = parseInt(snitch.style.top) + 10 + `px`}, 400);
    console.log(`jump`);
  } else if (event.keyCode === 17) {
      console.log(`crouch`)
  }
}
function limitsX(){
    let limsX = 0
    
    function moveX(number){
        limsX += number
        console.log(`current posX: ${limsX}`)
        if (limsX >= 910) {
            limsX -= number;
            setTimeout(() => {snitch.style.left = parseInt(snitch.style.left) - 10 + `px`;}, 300)
            console.log(`current posX: ${limsX}`);
        } else if (limsX <= -910) {
            limsX -= number;
            setTimeout(() => {snitch.style.left = parseInt(snitch.style.left) + 10 + `px`;}, 300)
            console.log(`current posX: ${limsX}`);
        }
    }
    return moveX
}
function limitsY(){
    let limsY = 0
    
    function moveX(number){
        limsY += number
        console.log(`current pos: ${limsY}`)
        if (limsY >= 490) {
            limsY -= number;
            snitch.style.top = parseInt(snitch.style.top) - 10 + `px`;
            setTimeout(() => {snitch.style.top = parseInt(snitch.style.top) - 10 + `px`;}, 300)
            console.log(`current posX: ${limsY}`);
        } else if (limsY <= -490) {
            limsY -= number;
            setTimeout(() => {snitch.style.top = parseInt(snitch.style.top) + 10 + `px`;}, 300)
            console.log(`current posX: ${limsY}`);
        }
    }
    return moveX
}


document.addEventListener(`keypress`, (event) => movement(event));
document.addEventListener(`keypress`, (event) => console.log(event));


