const arr = []
let result
let arrayLength = +prompt('enter array length');

arrayLength = Math.abs(arrayLength);
arrayLength = Math.round(arrayLength);

while (arrayLength > 10 || arrayLength < 2) {
    arrayLength = +prompt("array length must be but shorter than 10 but longer than 2");
}

for (a = 0; arrayLength > a; a++){
    arr.push(Math.round(Math.random() * 10));
    console.log(arr);
}
console.log(arr);
result = arr.reduce((a, b) => {
    return a + b;
})
console.log(result)