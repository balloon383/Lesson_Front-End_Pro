let jokesRadio = document.querySelectorAll(".jokes__radio");
let randomJokeSelector = document.querySelector(".jokes__radio--random");
let categoriesJokeSelector = document.querySelectorAll(
  ".jokes__categories--category"
);
let searchJokeRadio = document.querySelector("jokes__search");
let searchJokeSelector = document.querySelector(".jokes__search--input");
let sendButtonSelector = document.querySelector(".jokes__get--button");
let jokesForm = document.querySelector(".jokes__form");
let jokesField = document.querySelector(".jokes__last");
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
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((res) => createJoke(res));
  } else if (value[0].value === "categories") {
    fetch(`https://api.chucknorris.io/jokes/random?category=${keyWord}`)
      .then((res) => res.json())
      .then((res) => createJoke(res));
  } else if (value[0].value === "search") {
    fetch(`https://api.chucknorris.io/jokes/search?query=${keyWord}`)
      .then((res) => res.json())
      .then((res) => createJoke(res.result[0]))
      .catch((error) => console.log(`Error: No jokes found`));
  }
};
function createJoke(joke) {
  console.log(joke);
  let jokeBlock = document.createElement("div");
  jokeBlock.innerHTML = `
  <div class='jokes__field'>
    <svg class="jokes__svg">
      <use xlink:href="../img/message.svg"></use>
    </svg>
    <a href="#" class="jokes__id">ID: ${joke.id}</a>
    <p class="jokes__joke">${joke.value}</p>
    <p class="jokes__timer"></p>
    <p class="jokes__category"></p>
  </div>`;
  jokesField.appendChild(jokeBlock)
}
