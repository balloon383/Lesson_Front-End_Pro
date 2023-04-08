let jokesRadio = document.querySelectorAll(".jokes__radio");
let randomJokeSelector = document.querySelector(".jokes__radio--random");
let categoriesJokeSelector = document.querySelectorAll(
  ".jokes__categories--category"
);
let searchJokeRadio = document.querySelector(".jokes__search");
let searchJokeSelector = document.querySelector(".jokes__search--input");
let sendButtonSelector = document.querySelector(".jokes__get--button");
let jokesForm = document.querySelector(".jokes__form");
let jokesField = document.querySelector(".jokes__last");
let favouriteBox = document.querySelector(".history__flex")
let getStore = () => JSON.parse(localStorage.getItem('favourite')) ?? []


function clickheart(joke) {
  console.log(joke);
  let heart = document.querySelector(".jokes__heart");
  heart.src = "./img/heart.svg";
  let store = getStore()
  console.log(store)
  store.push({...joke, like: true})
  localStorage.setItem("favourite", JSON.stringify(store));
  createJoke({...joke, like: true})
}

function checkFavourite() {
  let store = JSON.parse(localStorage.getItem("favourite")) ?? [];
  store.forEach((joke) => createJoke(joke));
}

function addFavourite() {}
function removeFavourite() { }



searchJokeSelector.style.display = "none";
searchJokeRadio.addEventListener("change", () => {
  if (searchJokeRadio.checked) {
    searchJokeSelector.style.display = "block";
  } else if (!searchJokeRadio.checked) {
    searchJokeSelector.style.display = "none";
  }
});

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
  let jokeBlock = document.createElement("div");
  let heart = document.createElement("img")
  jokeBlock.innerHTML = `
  <div class='jokes__field'>
    <span class='jokes__id--svg'>
      <img class='jokes__img' src = './img/message.svg'>
      <a href="#" class="jokes__id">ID: <span class='jokes__id--id'>${joke.id}</span></a>
      <img src = './img/link.svg'>
    </span>
    <p class="jokes__joke">${joke.value}</p>
    <span class='jokes__info'>
      <p class="jokes__timer">Last update:  hours ago</p>
      <p class="jokes__category">CAT</p>
    </span>
    <span class='jokes__heart--container'></span>
  </div>`;
  heart.src = "./img/Vector.svg";
  heart.classList.add(`jokes__heart`); 
  jokesField.appendChild(jokeBlock)
  let likeButtonContainer = document.querySelector(".jokes__heart--container");
  likeButtonContainer.appendChild(heart);
  jokeBlock.dataset.id = joke.id
  heart.addEventListener('click', () => {
    clickheart(joke)
  })

  if (joke.like) {
    favouriteBox.append(jokeBlock);
    img.src = "./images/heart.svg";
  } else {
    markIfFavorite(joke, img);
    content.append(p);
  }
}

