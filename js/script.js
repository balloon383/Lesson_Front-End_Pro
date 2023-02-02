const yourName = prompt("what is your name?")
const yourSecondName = prompt("what is your second name?")
const yourYearOfBirth = +prompt('What is your year of birth?');
const yourAge = 2023 - yourYearOfBirth;

console.log(`User bio: ${yourName} ${yourSecondName}, ${yourAge} years old`)