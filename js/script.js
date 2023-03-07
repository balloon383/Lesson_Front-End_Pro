const BURGER_SMALL = `small`
const BURGER_LARGE = `large`
const STUFFING_CHEESE = `cheese`
const STUFFING_SALAD = `salad`
const STUFFING_POTATO = `potato`
const TOPPING_MAYO = `mayo`
const TOPPING_SPICES = `spices`


class hamburger {
  constructor(options) {
    this.size = options.size;
    this.type = options.type;
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
const burger = new hamburger({
  size: BURGER_LARGE,
  type: STUFFING_POTATO,
});
console.log(burger);



class Hello{
  constructor() {
    this.type = `word`,
    this.count = 5,
    this.bool = true
  }
  set newType(newOne) {
    this.topping = newOne;
  }
}
const newObj = new Hello()
newObj.newType = `mayo`;
console.log(newObj)