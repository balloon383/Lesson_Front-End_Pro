import { getLoggedUser, logOut } from "./get-modules.js";
let categoryField = document.querySelector(".main__container");
let cartCount = document.querySelector(".header__shoppingcart--counter");
let userName = document.querySelector(".header__nav--user");
let userLogout = document.querySelector(".header__logout");
let shoppingCart = document.querySelector(".header__shoppingcart--link");
changeCartCounter();
checkLoggedUser();
export function checkLoggedUser() {
  let user = getLoggedUser();
  if (user.status) {
    userName.innerText = user.name;
    userName.href = "./pages/account-page/index.html";
    userLogout.classList.add("header__logout-logged");
    userLogout.addEventListener("click", () => {
      logOut();
    });
    shoppingCart.href = "./pages/shopping-cart/index.html";
  }
}

async function getCategories() {
  let productsCategory = [];

  const products = await fetch(
    "https://634e9f834af5fdff3a625f84.mockapi.io/products"
  ).then((res) => res.json());

  for (let i = 0; i < products.length; i++) {
    productsCategory.push(products[i].category);
  }

  productsCategory = productsCategory.filter((el, i, self) => {
    return i === self.indexOf(el);
  });

  for (let i = 0; i < productsCategory.length; i++) {
    await createCategory(productsCategory[i], products);
  }
}

async function createCategory(categoryName, products) {
  let category = document.createElement("section");
  category.classList.add(`main__category--${categoryName}`);
  category.classList.add(`main__category`);
  category.innerHTML = `
        <h2 class="main__category--name">${categoryName}</h2>
            <section class="main__category--content">
            </section>
    `;
  categoryField.append(category);
  await fillCategory(category, categoryName, products);
}

async function fillCategory(categories, categoryName, products) {
  let category = categories.querySelector(`.main__category--content`);
  let categoryArr = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == categoryName) {
      categoryArr.push(products[i]);
      let el = document.createElement("section");
      el.dataset.id = products[i].id;
      if (!products[i].sale) {
        el.innerHTML = `
                <section class="main__category--card">
                    <img src="./img/products/${products[i].img}.png" alt="cabriolet" width="150px" class="main__category--card-img" >
                    <h3 class="main__category--card-header">${products[i].title}</h3>
                    <ul class="main__category--card-ul">
                        <li class="main__category--card-li">$${products[i].price}</li>
                        <li class="main__category--card-li main__category--card-li-button main__category--card-li-button-in"><img src="./img/shopping-cart.png" alt="shopping cart" width="25px" height="25px"></li>
                    </ul>
                </section>
            `;
      } else {
        el.innerHTML = `
                <section class="main__category--card">
                    <img src="./img/products/${
                      products[i].img
                    }.png" alt="cabriolet" width="150px" class="main__category--card-img" >
                    <h3 class="main__category--card-header">${
                      products[i].title
                    }</h3>
                    <ul class="main__category--card-ul">
                        <li class="main__category--card-li"><span class='main__category--card-li-sale'>$${
                          products[i].price
                        }
                            </span>$${
                              products[i].price -
                              (products[i].price * products[i].salePercent) /
                                100
                            }
                            <span class='main__category--card-li-salePercent'>-${
                              products[i].salePercent
                            }%</span>
                        </li>
                        <li class="main__category--card-li main__category--card-li-button main__category--card-li-button-in"><img class="main__category--card-li-img" src="./img/shopping-cart.png" alt="shopping cart" width="25px" height="25px"></li>
                    </ul>
                </section>
            `;
      }
      category.append(el);
      let toCartButton = document.querySelector(
        `section[data-id="${products[i].id}"] .main__category--card-li-button`
      );
      toCartButton.classList.remove("main__category--card-li-button-in");
      toCartButton.addEventListener("click", (el) => {
        let checker = getLoggedUser();
        if (checker.length == 0) {
          window.location.replace("./pages/login-page/index.html");
        } else if (checker.length == undefined) {
          if (
            toCartButton.classList.contains("main__category--card-li-button-in")
          ) {
            toCartButton.classList.remove("main__category--card-li-button-in");
            removeFromCart(products[i]);
          } else {
            toCartButton.classList.add("main__category--card-li-button-in");
            addToCart(products[i]);
          }
        }
      });
    }
  }
}

let addToCart = (goods, store) => {
  store = getLoggedUser();
  goods.quantity = "1";
  store.shoppingCart.push({ ...goods });
  localStorage.setItem("loggedUser", JSON.stringify(store));
  changeCartCounter(store);
};

let removeFromCart = (goods) => {
  let store = getLoggedUser();
  let updatedStore = store.shoppingCart.filter((el) => el.id !== goods.id);
  store.shoppingCart = updatedStore;
  localStorage.setItem("loggedUser", JSON.stringify(store));
  changeCartCounter(store);
};
async function changeCartCounter(storeCounter = getLoggedUser()) {
  await getCategories();
  cartCount.innerText = storeCounter.shoppingCart.length;
  for (let i = 0; i < storeCounter.shoppingCart.length; i++) {
    let selectedItems = document.querySelector(
      `section[data-id="${storeCounter.shoppingCart[i].id}"] .main__category--card-li-button`
    );
    selectedItems.classList.add("main__category--card-li-button-in");
  }
}
