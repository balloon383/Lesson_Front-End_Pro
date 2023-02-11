const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47,]; 
// .forEach .map .filter .reduce

// 1 Знайти суму та кількість позитивних елементів.
let positiveArr = arr.filter((el) => {
    return el > 0
})
let sumPositiveArr = positiveArr.reduce((a, b) => {
    return a + b;
});
console.log(positiveArr, sumPositiveArr);
// 2 Знайти мінімальний елемент масиву та його порядковий номер.
let arrId;
let arrMin = arr.reduce((a, b) => {
    return Math.min(a, b) 
})
let idMin = arr.indexOf(arrMin)
console.log(arrMin, idMin);
// 3 Знайти максимальний елемент масиву та його порядковий номер.
let arrMax = arr.reduce((a, b) => {
    return Math.max(a, b);
});
let idMax = arr.indexOf(arrMax);
console.log(arrMax, idMax);
// 4 Визначити кількість негативних елементів.
let negativeArr = arr.filter((el) => {
    return el < 0 
})
console.log(negativeArr)
// 5 Знайти кількість непарних позитивних елементів.
let oddPosArr = arr.filter((el) => {
    return el % 2 > 0
})
console.log(oddPosArr);
// 6 Знайти кількість парних позитивних елементів.
let pairArr = arr.filter((el) => {
    return (el % 2 == 0)
});
let pairPosArr = pairArr.filter((el) => {
    return el > 0
})
console.log(pairPosArr);
// 7 Знайти суму парних позитивних елементів.
let sumPairPosArr = pairPosArr.reduce((a, b) => {
    return a + b
})
console.log(sumPairPosArr);
// 8 Знайти суму непарних позитивних елементів.
let sumOddPosArr = oddPosArr.reduce((a, b) => {
    return a + b
})
console.log(sumOddPosArr);
// 9 Знайти добуток позитивних елементів.
let multiplyPosArr = positiveArr.reduce((a, b) => {
    return a * b 
})
console.log(multiplyPosArr);
// 10 Знайти найбільший серед елементів масиву, решту обнулити.
let resetArr = arr.map((el) => {
    if (el < arrMax) {
        return 0
    } else {
        return arrMax
    }
})
console.log(resetArr)