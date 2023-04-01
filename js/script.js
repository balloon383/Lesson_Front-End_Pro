let randomJoke = document.querySelector(".jokes__radio");
let categoriesJoke = document.querySelector(".jokes__categories");
let searchJoke = document.querySelector(".jokes__search--value");
let sendButton = document.querySelector(".jokes__get--button");
sendButton.addEventListener('click', () => {
    console.log(randomJoke.ariaChecked, categoriesJoke, searchJoke);
})
