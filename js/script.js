let randomValue = Math.round(Math.random() * 10);
console.log(randomValue)
const arr = []
let arrayLength = +prompt('enter array length');

while (arrayLength > 2 && arrayLength < 10) {
    arrayLength = +prompt('array length must be longer than 2')
}
while (arrayLength > 10) {
    arrayLength = +prompt("array length must be but shorter than 10");
}
arrayLength = Math.abs(arrayLength);
arrayLength = Math.round(arrayLength)
for (a = 0; arrayLength > a; a++){
    arr.push(Math.round(Math.random() * 10));
    console.log(arr);
}
console.log(arr);
let result = arr.reduce((a, b) => {
    return a + b;
})
console.log(result)