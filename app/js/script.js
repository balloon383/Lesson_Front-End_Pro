let categoryField = document.querySelector(".main__container");
let getShoppingCart = () => JSON.parse(localStorage.getItem("shoppingCart")) ?? [];
let getLoggedUser = () => JSON.parse(localStorage.getItem("loggedUser")) ?? [];
let cartCount = document.querySelector(".header__shoppingcart--counter");
let userName = document.querySelector('.header__nav--user')
let userLogout = document.querySelector(".header__logout");
let shoppingCart = document.querySelector(".header__shoppingcart--link");
getCategories();
checkLoggedUser()
function checkLoggedUser() {
  let user = getLoggedUser()
  console.log(user)
  if (user.status === 'true') {
    console.log('user logged')
    userName.innerText = user.name
    userName.href = "./pages/account-page/index.html";
    userLogout.classList.add("header__logout-logged");
    userLogout.addEventListener('click', () => { logOut() })
    shoppingCart.href = ('./pages/shopping-cart/index.html')
  }
}
async function logOut() {
  localStorage.clear()
  location.reload()
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
    
    for (let i = 0; i < productsCategory.length; i++){
        createCategory(productsCategory[i], products);
        
    }
}

function createCategory(categoryName, products) {
    let category = document.createElement('section')
    category.classList.add(`main__category--${categoryName}`);
    category.classList.add(`main__category`);
    category.innerHTML = `
        <h2 class="main__category--name">${categoryName}</h2>
            <section class="main__category--content">
            </section>
    `;
    categoryField.append(category)
    fillCategory(category, categoryName, products);
}

function fillCategory(categories, categoryName, products) {
    let category = categories.querySelector(`.main__category--content`);
    let categoryArr = []
    for (let i = 0; i < products.length; i++){
        if (products[i].category == categoryName) {
            categoryArr.push(products[i]);
            let el = document.createElement('section')
            el.dataset.id = products[i].id;
            if (!products[i].sale) {
                el.innerHTML = `
                <section class="main__category--card">
                    <img src="./img/products/${products[i].img}.png" alt="cabriolet" width="150px" class="main__category--card-img" >
                    <h3 class="main__category--card-header">${products[i].title}</h3>
                    <ul class="main__category--card-ul">
                        <li class="main__category--card-li">$${products[i].price}</li>
                        <li class="main__category--card-li main__category--card-li-button"><img src="./img/shopping-cart.png" alt="shopping cart" width="25px" height="25px"></li>
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
                        <li class="main__category--card-li main__category--card-li-button"><img class="main__category--card-li-img" src="./img/shopping-cart.png" alt="shopping cart" width="25px" height="25px"></li>
                    </ul>
                </section>
            `;
            }
            category.append(el)
            let toCartButton = document.querySelector(
              `section[data-id="${products[i].id}"] .main__category--card-li-button`
            );
            toCartButton.addEventListener('click', (el) => {
                if (toCartButton.classList.contains("main__category--card-li-button-in")) {
                    toCartButton.classList.remove(
                      "main__category--card-li-button-in"
                    );
                    removeFromCart(products[i]);
                } else {
                    toCartButton.classList.add(
                      "main__category--card-li-button-in"
                    );
                    addToCart(products[i]);
                }
                
            })
        }
    }
}

let addToCart = (goods, store) => {
    store = getShoppingCart();
    store.push({ ...goods });
    localStorage.setItem("shoppingCart", JSON.stringify(store));
    changeCartCounter();
};

let removeFromCart = (goods, store) => {
    store = getShoppingCart();
    updatedStore = store.filter(el => el.id !== goods.id)
    localStorage.setItem("shoppingCart", JSON.stringify(updatedStore));
    changeCartCounter();
};

function changeCartCounter() {
    store = getShoppingCart();
    cartCount.innerText = store.length;
}

