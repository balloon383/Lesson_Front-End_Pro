const BURGER_SMALL = `small`;
const BURGER_LARGE = `large`;
const STUFFING_CHEESE = `cheese`;
const STUFFING_SALAD = `salad`;
const STUFFING_POTATO = `potato`;
const TOPPING_MAYO = `mayo`;
const TOPPING_SPICES = `spices`;
let userName = document.querySelector(`.input1`);
let burgerSize = document.querySelector(`.input2`);
let burgerStuffing = document.querySelectorAll(`.input3`);
let burgerTopping = document.querySelectorAll(`.input4`);
let burgerInfo = document.querySelector(`.input5`);
let orderButton = document.querySelector(`.mac__button`);
let orderField = document.querySelector(`.mac__list`);
let macForm = document.querySelector(`.mac__form`)

function formValidation() {
  let nameValidation = false
  let stuffingValidation = false
  if (userName.value.length >= 1) {
    nameValidation = true;
  } else {
    nameValidation = false;
  }
  stuffingValidation = [...burgerStuffing].filter((el) => {
    if (el.checked) {
      return stuffingValidation = true
    }
  });
  if (nameValidation && stuffingValidation.length > 0) return true;
}

orderButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  
  if (formValidation()) {
    defineProperties(burgerSize, burgerStuffing, burgerTopping);
  } else {
    alert(`Validate order form`)
  }
  macForm.reset()
});
function defineProperties(size, stuffing, topping) {
  let defineSize;
  let defineStuffing;
  let defineTopping;
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

  if (size.value === `large`) {
    defineSize = BURGER_LARGE;
  } else {
    defineSize = BURGER_SMALL;
  }
  if (addBurgerStuffing[0].value === `cheese`) {
    defineStuffing = STUFFING_CHEESE;
  } else if (addBurgerStuffing[0].value === `potato`) {
    defineStuffing = STUFFING_POTATO;
  } else {
    defineStuffing = STUFFING_SALAD;
  }

  defineTopping = addBurgerTopping.map((el) => {
    return el.value;
  });

  makeOrder(defineSize, defineStuffing, defineTopping);
}

class Hamburger {
  constructor(Hamburger) {
    this.size = Hamburger.size;
    this.type = Hamburger.type;
    this.topping = Hamburger.topping;
  }
  set addTopping(topping) {
    this.topping = topping;
  }

  getPrice() {
    let price = this.#burgerPrice;
    return price;
  }
  getCalories() {
    let calories = this.#burgerCalories;
    return calories;
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
      for (let i = 0; i < this.topping.length; i++) {
        if (this.topping[i] == `mayo`) {
          totalPrice = totalPrice + 20;
        } else if (this.topping[i] == `spices`) {
          totalPrice = totalPrice + 15;
        }
      }
    }

    return totalPrice;
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
    return totalCalories;
  }
}

function makeOrder(size, stuffing, topping) {
  let burger = new Hamburger({
    size: size,
    type: stuffing,
    topping: topping,
  });
  orderLog(
    userName.value,
    burger.size,
    burger.type,
    burger.topping,
    burger.getPrice(),
    burger.getCalories()
  );
}

function orderLog(name, size, stuffing, topping, price, calories) {
  let randomValue = (Math.random() * 10).toFixed(1);
  let message = document.createElement(`div`);
  if (burgerInfo.value.length === 0) {
    message.innerHTML = `<div class = 'mac__order'>
        Привет ${name}
        <br>
        Ваш заказ ${size} бургер с ${stuffing} и ${topping} будет готов в течении ${randomValue} минут.
        <br>
        Стоимость заказа: ${price} ( ${calories} calories)
      </div>`;
  } else if (burgerInfo.value.length >= 1) {
    message.innerHTML = `<div class = 'mac__order'>
        Привет ${name}
        <br>
        Ваш заказ ${size} бургер с ${stuffing} и ${topping} будет готов в течении ${randomValue} минут.
        <br>
        Стоимость заказа: ${price} ( ${calories} calories)
        Дополнительная информация к заказу: ${burgerInfo.value}
      </div>`;
  }
    
  orderField.appendChild(message);
}
