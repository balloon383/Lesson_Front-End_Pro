const BURGER_SMALL = `small`
const BURGER_LARGE = `large`
const STUFFING_CHEESE = `cheese`
const STUFFING_SALAD = `salad`
const STUFFING_POTATO = `potato`
const TOPPING_MAYO = `mayo`
const TOPPING_SPICES = `spices`
let userName = document.querySelector(`.input1`);
let burgerSize = document.querySelector(`.input2`);
let burgerStuffing = document.querySelectorAll(`.input3`);
let burgerTopping = document.querySelectorAll(`.input4`);
let burgerInfo = document.querySelector(`.input5`);
let orderButton = document.querySelector(`.mac__button`);
let orderField = document.querySelector(`.mac__list`)
orderButton.addEventListener(`click`, (event) => {
  event.preventDefault()
  defineProperties(burgerStuffing, burgerTopping);
});

function defineProperties(stuffing, topping){
  const addBurgerStuffing = [...stuffing].filter((el) => {
    if (el.checked) {
      return el.value;
    }
  });
  const addBurgerTopping = [...topping].filter((el) => {
    if (el.checked) {
      return el.value;
    }
  });
  makeOrder(burgerSize.value, addBurgerStuffing[0].value, addBurgerTopping);
}


class Hamburger {
  constructor(Hamburger) {
    this.size = Hamburger.size;
    this.type = Hamburger.type;
    this.topping = Hamburger.topping;
  }
  set addTopping(topping) {
    this.topping = topping
  }

  getPrice() {
    let price = this.#burgerPrice
    return price
  }
  getCalories() {
    let calories = this.#burgerCalories
    return calories
  }
  get #burgerPrice() {
    let totalPrice;
    if (this.size == `small`) {
      totalPrice = 50;
    } else {
      totalPrice = 100;
    }

    if (this.type == `cheese`) {
      totalPrice = totalPrice + 10;
    } else if (this.type == `salad`) {
      totalPrice = totalPrice + 20;
    } else if (this.type == `potato`) {
      totalPrice = totalPrice + 15;
    }

    if (this.topping.length == 1) {
      if (this.topping[0] == `mayo`) {
        totalPrice = totalPrice + 20;
      } else if (this.topping[0] == `spices`) {
        totalPrice = totalPrice + 15;
      }
    } else if (this.topping.length >= 2) {
      for (let i = 0; i < this.topping.length; i++){
        if (this.topping[i] == `mayo`) {
          totalPrice = totalPrice + 20;
        } else if (this.topping[i] == `spices`) {
          totalPrice = totalPrice + 15;
        }
      }
    }
    
    return totalPrice
  }

  get #burgerCalories() {
    let totalCalories;
    if (this.size == `small`) {
      totalCalories = 20;
    } else {
      totalCalories = 40;
    }

    if (this.type == `cheese`) {
      totalCalories = totalCalories + 20;
    } else if (this.type == `salad`) {
      totalCalories = totalCalories + 5;
    } else if (this.type == `potato`) {
      totalCalories = totalCalories + 10;
    }

    if (this.topping.length == 1) {
      if (this.topping[0] == `mayo`) {
        totalCalories = totalCalories + 5;
      } else if (this.topping[0] == `spices`) {
        totalCalories = totalCalories + 0;
      }
    } else if (this.topping.length >= 2) {
      for (let i = 0; i < this.topping.length; i++) {
        if (this.topping[i] == `mayo`) {
          totalCalories = totalCalories + 5;
        } else if (this.topping[i] == `spices`) {
          totalCalories = totalCalories + 0;
        }
      }
    }
    return totalCalories
  }
}


function makeOrder(size, stuffing, topping,) {
  let burgerSize
  let burgerStuffing
  let burgerTopping
  if (size === `large`) {
    burgerSize = BURGER_LARGE;
  } else {
    burgerSize = BURGER_SMALL;
  }

  if (stuffing === `cheese`) {
    burgerStuffing = STUFFING_CHEESE
  } else if (stuffing === `potato`) {
    burgerStuffing = STUFFING_POTATO;
  } else {
    burgerStuffing = STUFFING_SALAD;
  }

  burgerTopping = topping.map((el) => {
    return el.value
  })
  let burger = new Hamburger({
    size: burgerSize,
    type: burgerStuffing,
    topping: burgerTopping
  });
  orderLog(userName.value, burger.size, burger.type, burger.topping, burger.getPrice(), burger.getCalories());
}


function orderLog(name, size, stuffing, topping, price, calories) {
  let randomValue = (Math.random() * 10).toFixed(1)
  let message = document.createElement(`div`)
  message.innerHTML = 
      `<div class = 'mac__order'>
        Привет ${name}
        <br>
        Ваш заказ ${size} бургер с ${stuffing} и ${topping} будет готов в течении ${randomValue} минут.
        <br>
        Стоимость заказа: ${price} ( ${calories} calories)
      </div>`;
  orderField.appendChild(message)    
}


