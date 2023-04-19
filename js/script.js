let heroName = document.querySelector(".hero__name--input");
let heroUniverse = document.querySelector(".hero__select");
let heroFavourite = document.querySelector("#hero__checkbox");
let heroButtonPut = document.querySelector('.hero__form--submit')
let heroField = document.querySelector('.hero__cards--container');
let heroCreationForm = document.querySelector(".hero__creation--form");
heroButtonPut.addEventListener('click', (event) => {
  let hero = {
    name: heroName.value,
    comics: heroUniverse.value,
    favourite: heroFavourite.checked,
  };
  getNames(hero)
  event.preventDefault();
  heroCreationForm.reset();
})
async function getNames(hero) {
  const heroes = await fetch("https://63693f7228cd16bba71904e4.mockapi.io/heroes").then(res => res.json());
  
  const heroNames = heroes.map(el => el.name);
  
  if (!heroNames.includes(hero.name)) {
    createHero(hero);
  }
}
async function createHero(hero) {
  let res = await fetch(
    " https://63693f7228cd16bba71904e4.mockapi.io/heroes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hero),
    }
  ).then((res) => res.json());
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
    `https://63693f7228cd16bba71904e4.mockapi.io/heroes/${hero.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
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
            <input type="text" class="hero__card--name-input" value="${hero.name
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
  let deleteBtn = document.querySelector(
    `div[data-id="${hero.id}"] .hero__card--delete`
  );
  let updateBtn = document.querySelector(
    `div[data-id="${hero.id}"] .hero__card--update`
  );
  deleteBtn.addEventListener(`click`, (e) => {
    e.preventDefault()
    console.log(`clicked delete`);
    deleteElement(hero);
  })
  updateBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    console.log(`clicked update`);
    updateElement(hero);
  });
}

async function deleteElement(hero) {
  console.log(hero)
  let element = await fetch(
    ` https://63693f7228cd16bba71904e4.mockapi.io/heroes/${hero.id}`,
    {
      method: "DELETE",
    }
  ).then((res) => res.json());
  renderCards();
}
async function updateElement(hero) {
  let newName = document.querySelector(
    `div[data-id="${hero.id}"] .hero__card--name-input`
  );
  let newUniverse = document.querySelector(
    `div[data-id="${hero.id}"] .hero__card--select`
  );
  let newFavourite = document.querySelector(
    `div[data-id="${hero.id}"] #hero__card--checkbox`
  );
  let newHero = {
    name: newName.value,
    comics: newUniverse.value,
    favourite: newFavourite.checked,
  };
  let element = await fetch(
    `https://63693f7228cd16bba71904e4.mockapi.io/heroes/${hero.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHero),
    }
  ).then((res) => res.json());
  renderCards();
}

async function renderCards() {
  heroField.innerHTML = ``
  let render = await fetch("https://63693f7228cd16bba71904e4.mockapi.io/heroes").then(res => res.json());
  for (let i = 0; i < 20; i++){
    if (render[i]) createHeroCard(render[i]);
  }
}
async function getUniverses() {
  let render = await fetch(" https://63693f7228cd16bba71904e4.mockapi.io/universes").then(res => res.json());
  
  return render
}


renderCards()

