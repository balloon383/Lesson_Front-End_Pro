const BURGER_SMALL = `small`
const BURGER_LARGE = `large`
const STUFFING_CHEESE = `cheese`
const STUFFING_SALAD = `salad`
const STUFFING_POTATO = `potato`
const TOPPING_MAYO = `mayo`
const TOPPING_SPICES = `spices`


class hamburger {
  constructor(size, type) {
    this.size = size;
    this.type = type;
    this.price = this.burgerPrice;
    this.calories = this.burgerCalories;
  }

  get burgerPrice() {
    let totalPrice
    if (this.size == `small`) {
      totalPrice = 50
    } else {
      totalPrice = 100
    }
    
    if (this.type == `cheese`) {
      totalPrice = totalPrice + 10;
    } else if (this.type == `salad`) {
      totalPrice = totalPrice + 20;
    } else if (this.type == `potato`) {
      totalPrice = totalPrice + 15;
    }
    return totalPrice
  }

  get burgerCalories() {
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
    return totalCalories;
  }
}
const burger = new hamburger(BURGER_LARGE, STUFFING_POTATO);
console.log(burger);

class addTopping extends hamburger {
  constructor(size, type, topping) {
    super(size, type);
    this.topping = topping;
    this.price = this.toppingPrice;
    this.calories = this.toppingCalories;
  }
  get toppingPrice() {
    let totalPrice;
    if (this.topping == `mayo`) {
      totalPrice = this.price + 20;
    } else {
      totalPrice = this.price + 15;
    }
    return totalPrice
  } 
  get toppingCalories() {
    let totalCalories;
    if (this.topping == `mayo`) {
      totalCalories = this.calories + 5;
    } else {
      totalCalories = this.calories + 0;
    }
    return totalCalories;
  } 
}

const burgerWithTopping = new addTopping(BURGER_LARGE, STUFFING_POTATO, TOPPING_MAYO);
console.log(burgerWithTopping);
