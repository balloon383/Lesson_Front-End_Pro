let randomJokeSelector = document.querySelector(".jokes__radio");
let categoriesJokeSelector = document.querySelectorAll(".jokes__categories--category");
let searchJokeSelector = document.querySelector(".jokes__search--input");
let sendButtonSelector = document.querySelector(".jokes__get--button");
let jokesForm = document.querySelector(".jokes__form");
sendButtonSelector.addEventListener("click", (event) => {
  console.log(randomJokeSelector.checked);
  let categoriesJoke = [...categoriesJokeSelector].filter((el) => {
    if (el.checked) {
      return el;
    }
  });
  console.log(categoriesJokeSelector[0].value);
  console.log(searchJokeSelector.value);
  event.preventDefault();
  jokesForm.reset();
});
