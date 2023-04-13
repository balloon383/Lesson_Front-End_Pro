let heroName = document.querySelector(".hero__name--input");
let heroUniverse = document.querySelector(".hero__select");
let heroFavourite = document.querySelector("#hero__checkbox");
let heroButtonPut = document.querySelector('.hero__form--submit')
let heroField = document.querySelector('.hero__cards--container');
let heroCreationForm = document.querySelector(".hero__creation--form");

heroButtonPut.addEventListener('click', (event) => {
  event.preventDefault()
  heroCreationForm.reset()
  let newHero = {
    name: heroName.value,
    comics: heroUniverse.value,
    favourite: heroFavourite.checked,
  };
  console.log(newHero)
  createHero(newHero);
})

async function createHero(hero) {
  let res = await fetch(
    "https://63693f7228cd16bba71904e4.mockapi.io/universes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hero),
    }
  ).then((res) => res.json());
  console.log(res)
  getHero(res);
}

function renderUniverse(hero) {
  let chosen;
  if (hero.comics === `Marvel`) {
    chosen = `
  <select name="universe--card" class="hero__card--select">
      <option value="DC">DC</option>
      <option value="Marvel" selected>Marvel</option>
  </select>
  `;
  } else {
    chosen = `
  <select name="universe--card" class="hero__card--select">
      <option value="DC" selected>DC</option>
      <option value="Marvel">Marvel</option>
  </select>
  `;
  }
  return chosen;
}

function renderFavorite(hero) {
  let favourite;
  if (hero.favourite === true) {
    favourite = `<input type="checkbox" name="hero__card--checkbox" id="hero__card--checkbox" checked></input>`;
  } else {
    favourite = `<input type="checkbox" name="hero__card--checkbox" id="hero__card--checkbox"></input>`;
  }
  return favourite;
}

async function getHero(hero) {
  let res = await fetch(
    `https://63693f7228cd16bba71904e4.mockapi.io/universes/${hero.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  console.log(res)
  createHeroCard(res);
}
function createHeroCard(hero) {
  let newCard = document.createElement("div");
  newCard.classList.add("hero__card");
  newCard.dataset.id = hero.id;
  newCard.innerHTML = `
    <form action="" class="hero__card--form">
        <label for="" class="hero__card--name-label">
            Name:
            <input type="text" class="hero__card--name-input" value="${
              hero.name
            }">
        </label>
        <label for="universe--card">
            Comics:
              ${renderUniverse(hero)}
        </label>
        <label for="hero__card--checkbox">
            Favourite:
            ${renderFavorite(hero)}
        </label>
        <button type="submit" class="hero__card--delete">Delete</button>
        <button type="submit" class="hero__card--update">Update</button>
    </form>
  `;
  heroField.appendChild(newCard);
  bindButtons(newCard);
  console.log(newCard);
}

async function bindButtons(newCard) {
  let localDelete = document;
  console.log(localDelete);
}