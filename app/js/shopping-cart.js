import { getLoggedUser, logOut } from "./get-modules.js";
let userName = document.querySelector(".header__nav--user");
let userLogout = document.querySelector(".header__logout");
let shoppingCart = document.querySelector(".header__shoppingcart--link");
let cartCount = document.querySelector(".header__shoppingcart--counter");
let tableArea = document.querySelector(".main__shoppingcart--tbody");
let orderButton = document.querySelector(".main__order--complete");
let orderTotalCounter = document.querySelector(".main__order--total-number");
checkLoggedUser()
checkCart()
orderButton.addEventListener('click', () => {
    makeOrder()
})
function checkCart() {
    let goods = getLoggedUser()
    let goodsArr = goods.shoppingCart
    changeCartCounter(goodsArr)
    renderCart(goodsArr)
}
function checkLoggedUser() {
  let user = getLoggedUser();
  if (user.status) {
    userName.innerText = user.name;
    userName.href = "#";
    userLogout.classList.add("header__logout-logged");
    userLogout.addEventListener("click", () => {
        logOut();
        window.location.replace("../../index.html");
    });
    shoppingCart.href = "#";
  }
}
function changeCartCounter(storeCounter) {
  cartCount.innerText = storeCounter.length;
}
function renderCart(goodsArr) {
    for (let i = 0; i < goodsArr.length; i++){
        let component = document.createElement("tr");
        component.dataset.id = goodsArr[i].id
        if (goodsArr[i].sales == 'true') {
            component.innerHTML = `
            <tr class="main__shoppingcart--tr-body main__shoppingcart--tr-{$item}">
                <td class="main__shoppingcart--img-box" ><img class="main__shoppingcart--img" src="../../img/products/${goodsArr[i].img}.png" width="150px" height="150px" alt="${goodsArr[i].title}">${goodsArr[i].title}</td>
                <td class="main__shoppingcart--price">$${goodsArr[i].price}</td>
                <td class="main__shoppingcart--sale"><p class="main__shoppingcart--sale-number">-${goodsArr[i].salePercent}%</p></td>
                <td><input type="text" class="main__shoppingcart--quantity" value="1"></td>
                <td class="main__shoppingcart--total">$2000</td>
                <td><img src="../../img/delete.png" class="main__shoppingcart--delete" width="35px" height="35px" alt="delete"></td>
            </tr>
        `;
        } else {
            component.innerHTML = `
            <tr class="main__shoppingcart--tr-body main__shoppingcart--tr-{$item}">
                <td class="main__shoppingcart--img-box" ><img class="main__shoppingcart--img" src="../../img/products/${goodsArr[i].img}.png" width="150px" height="150px" alt="${goodsArr[i].title}">${goodsArr[i].title}</td>
                <td class="main__shoppingcart--price">$${goodsArr[i].price}</td>
                <td class="main__shoppingcart--sale"><p>-</p></td>
                <td><input type="text" class="main__shoppingcart--quantity" value="1"></td>
                <td class="main__shoppingcart--total">$${goodsArr[i].price}</td>
                <td><img src="../../img/delete.png" class="main__shoppingcart--delete${goodsArr[i].id}" width="35px" height="35px" alt="delete"></td>
            </tr>
        `;
        }
        tableArea.append(component)
        let itemDeleteButton = document.querySelector(
          `.main__shoppingcart--delete${goodsArr[i].id}`
        );
        let quantity = document.querySelector(
          `tr[data-id="${goodsArr[i].id}"] .main__shoppingcart--quantity`
        );
        itemDeleteButton.addEventListener('click', () => {
            deleteItem(goodsArr[i], goodsArr[i].id);
        })
        quantity.addEventListener("input", () => {
            let totalPrice = document.querySelector(
              `tr[data-id="${goodsArr[i].id}"] .main__shoppingcart--total`
            );
            totalPrice.innerText = `$${goodsArr[i].price * quantity.value}`;
        });
    }
}
function deleteItem(delItem, id) {
    let item = document.querySelector(`tr[data-id="${id}"]`);
    let store = getLoggedUser();
    let updatedStore = store.shoppingCart.filter((el) => el.id !== delItem.id);
    store.shoppingCart = updatedStore;
    localStorage.setItem("loggedUser", JSON.stringify(store));
    item.remove();
    changeCartCounter(store.shoppingCart);
}
function makeOrder() {
    
}
checkTotal()
function checkTotal() {
let orderTotalElements = document.querySelectorAll(".main__shoppingcart--total");
    for (let i = 0; i < orderTotalElements.length; i++) {
        
    } 
}

