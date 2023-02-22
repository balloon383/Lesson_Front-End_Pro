// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
console.log(`1. ---------------------------------------`);
const someArr = ['asd', 5, ['sda'], 6, 4, 'qrtr', 22, 1, undefined,]
let arrNumbers
let arrNumbersArith
function findNum(arr, numsArith) {
arrNumbers = arr.filter((el) => {
    if (typeof el === 'number') {
    return el;
    }
});
numsArith();
}
function numsArith() {
    let arrNumbersSum = arrNumbers.reduce((a, b) => {
        return a + b;
    });
    arrNumbersArith = arrNumbersSum / arrNumbers.length
    console.log(arrNumbersArith);
}
findNum(someArr, numsArith);

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
console.log(`2. ---------------------------------------`);
let x = +prompt('Write X')
let znak = prompt('Write Znak')
let y = +prompt('Write Y')
doMath(x, y, znak) 
function doMath(x, y, znak) {
    if (typeof x !== 'number') {
        result = 'Write a NUMBER, X';
    }
    if (typeof y !== 'number') {
        result = 'Write a NUMBER, Y';
    }
    if (znak === '+') {
        result = x + y;
    } else if (znak === '-') {
        result = x - y;
    } else if (znak === '*') {
        result = x * y;
    } else if (znak === '/') {
        result = x / y;
    } else if (znak === '%') {
        result = x % y;
    } else if (znak === '^') {
        result = x ** y;
    } else {
        result =  'Wrong command';
    }
    return result
}
alert(result) 
// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивіНаписати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
console.log(`3. ---------------------------------------`);
let mainArr = []
let mainArrLength = +prompt("enter main array length");
let innerArrLength = +prompt("enter inner arrays length");
validation()
function validation() {
    while (mainArrLength <= 0) {
        mainArrLength = prompt('enter valid mainArrLength')
        console.log(typeof mainArrLength)
        return
    }
    while (innerArrLength <= 0) {
        innerArrLength = prompt('enter valid mainArrLength')
        console.log(typeof innerArrLength)
        return
    }
    creation(mainArrLength)
}; 
function creation(length) {
    for (a = 0; a < length; a++){
        mainArr.push([])
    }
    addInfo()
}
function addInfo() {
    for (let i = 0; i < mainArrLength; i++){
        for (let j = 0; j < innerArrLength; j++){
            let info = prompt(`add info to element number ${j + 1} of array number ${i + 1}`);
            mainArr[i].push(info)
        }
    }
}
console.log(mainArr)

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали після другого аргумента. 'func("hello world", 'l', 'd')' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
// Також забезпечити логіку, при котрій після першого елементу ми можемо передати будь яким аргументом функцію, яка щось достать до нашого рядка, ГОЛОВНЕ щоб функція виконувалася після того як ми проведемо попередні маніпуляції (тобто видалимо символи).
// Можливо додавати будь яку логіку в цю кастомну функцію.
console.log(`4. ---------------------------------------`)
let text = prompt(`enter some text`);
let firstSymbol = prompt(`enter first symbol that you want to delete`)
let secondSymbol = prompt(`enter second symbol that you want to delete`)
let newText
function toUpper(f) {
    debugger
    let upperText =  f.toUpperCase();
    return upperText
}
deleteSymbol(text, firstSymbol, secondSymbol, toUpper)
function deleteSymbol(str, symbolOne, symbolTwo, func) {
    str = str.toLowerCase();
    symbolOne = symbolOne.toLowerCase();
    symbolTwo = symbolTwo.toLowerCase();
    console.log(symbolOne, symbolTwo);
    const regexSymbolOne = new RegExp(`[${symbolOne}]`, `g`);
    const regexSymbolTwo = new RegExp(`[${symbolTwo}]`, `g`);
    newText = str.replace(regexSymbolOne, "");
    newText = newText.replace(regexSymbolTwo, "");

    askFun();

    function askFun() {
        let answer = confirm(`Want to add something to your text?`)
        if (answer == true) {
            let whereToAdd = confirm(`want to add text from the start?`)
            if (whereToAdd == true) {
                addFromStart()
            } else {
                addFromEnd()
            }
        } else {    
            alert(`nothing will be added`)
        }
    } 
    
    function addFromStart() {
        console.log(newText, `start`)
        let addText = prompt(`enter what you want to add from the start`)
        newText = `${addText} ${newText}`
        console.log(newText)
    }

    function addFromEnd() {
        console.log(newText, `end`)
        let addText = prompt(`enter what you want to add from the end`);
        newText = `${newText} ${addText}`
    }
    newText = toUpper(newText)
    return newText
}

console.log(newText)