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
let favoriteBox = document.querySelector(".history__flex");
let getStore = () => JSON.parse(localStorage.getItem("favorite")) ?? [];
checkFavourite()

function timer(time) {
  const startDate = new Date(time);
  const now = new Date();
  const elapsedTime = now.getTime() - startDate.getTime();
  return (elapsedTime / 1000 / 60 / 60).toFixed();
}

let addFavorite = (joke, store) => {
  store.push({ ...joke, like: true });

  localStorage.setItem("favorite", JSON.stringify(store));

  createJoke({ ...joke, like: true });
};

let removeFavorite = (joke, store) => {
  let updatedStore = store.filter((el) => el.id !== joke.id);
  localStorage.setItem("favorite", JSON.stringify(updatedStore));
  favoriteBox.querySelector(`div[data-id="${joke.id}"]`).remove();
  
};

function clickHeart(joke) {
  let heart = document.querySelector(`div[data-id="${joke.id}"] .jokes__heart`);
  let store = getStore();
  if (heart.src.includes("heart")) {
    heart.src = "./img/Vector.svg";
    removeFavorite(joke, store);
  } else {
    heart.src = "./img/heart.svg";
    addFavorite(joke, store);
  }
}

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
let markFavorite = (joke, img) => {
  let store = getStore();
  store.findIndex((el) => el.id === joke.id) >= 0 &&
    (img.src = "./img/heart.svg");
};


function createJoke(joke) {
  let jokeBlock = document.createElement("div");
  let jokeLike = document.createElement("img");
  jokeLike.src = "./img/Vector.svg";
  jokeLike.classList.add("jokes__heart");
  jokesField.innerHTML = "";
  if (joke.categories[0]) {
    jokeBlock.innerHTML = `
  <div class='jokes__field'>
    <span class='jokes__id--svg'>
      <img class='jokes__img' src = './img/message.svg'>
      <a href="#" class="jokes__id">ID: <span class='jokes__id--id'>${
        joke.id
      }</span></a>
      <img src = './img/link.svg'>
    </span>
    <p class="jokes__joke">${joke.value}</p>
    <span class='jokes__info'>
      <p class="jokes__timer">Last update: ${timer(
        joke.created_at
      )} hours ago</p>
      <p class="jokes__category">${joke.categories[0]}</p>
    </span>
    <p class='jokes__heart--box'></p>
  </div>`;
  } else {
    jokeBlock.innerHTML = `
  <div class='jokes__field'>
    <span class='jokes__id--svg'>
      <img class='jokes__img' src = './img/message.svg'>
      <a href="#" class="jokes__id">ID: <span class='jokes__id--id'>${
        joke.id
      }</span></a>
      <img src = './img/link.svg'>
    </span>
    <p class="jokes__joke">${joke.value}</p>
    <span class='jokes__info'>
      <p class="jokes__timer">Last update:  ${timer(
        joke.created_at
      )} hours ago</p>
    </span>
    <p class='jokes__heart--box'></p>
  </div>`;
  }
  jokeBlock.dataset.id = joke.id;
  jokeLike.addEventListener("click", () => {
    clickHeart(joke);
  });
  if (joke.like) {
    jokeLike.src = "./img/heart.svg";
    favoriteBox.append(jokeBlock);
  } else {
    markFavorite(joke, jokeLike);
    jokesField.append(jokeBlock);
  }
  let jokesLikeBox = document.querySelector(`div[data-id="${joke.id}"] .jokes__heart--box`);
  jokesLikeBox.appendChild(jokeLike);
}

function checkFavourite() {
  let store = getStore();
  store.forEach((joke) => createJoke(joke));
}


