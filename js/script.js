let jokesRadio = document.querySelectorAll(".jokes__radio");
let randomJokeSelector = document.querySelector(".jokes__radio--random");
let categoriesJokeSelector = document.querySelectorAll(
  ".jokes__categories--category"
);
let searchJokeSelector = document.querySelector(".jokes__search--input");
let sendButtonSelector = document.querySelector(".jokes__get--button");
let jokesForm = document.querySelector(".jokes__form");
sendButtonSelector.addEventListener("click", (event) => {
  let chosenValue = [...jokesRadio].filter((el) => {
    if (el.checked) {
      return el;
    }
  });
  valueValidation(chosenValue);
  event.preventDefault();
});

function valueValidation(value) {
  let getterValue;
  if (value[0].value === "random") {
    getterValue = "random";
  } else if (value[0].value === "categories") {
    getterValue = [...categoriesJokeSelector].filter((el) => {
      if (el.checked) {
        return el;
      }
    });
    getterValue = getterValue[0].value;
  } else if (value[0].value === "search") {
    getterValue = searchJokeSelector.value;
  }
  getJokes(value, getterValue);
  jokesForm.reset();
}
let getJokes = (value, keyWord) => {
  let newJoke;
  if (value[0].value === "random") {
    fetch(`https://api.chucknorris.io/jokes/random`).then((result) => {
      console.log(result);
    });
  } else if (value[0].value === "categories") {
    fetch(`https://api.chucknorris.io/jokes/random?category=${keyWord}`).then(
      (result) => {
        console.log(result);
      }
    );
  } else if (value[0].value === "search") {
    fetch(`https://api.chucknorris.io/jokes/search?query=${keyWord}`).then(
      (result) => {
        console.log(result);
      }
    );
  }
};
function createJoke(joke) {
  let jokeBlock = document.createElement("div");
  jokeBlock.innerText;
}
