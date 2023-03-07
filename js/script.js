const BURGER_SMALL = `small`
const BURGER_LARGE = `large`
const STUFFING_CHEESE = `cheese`
const STUFFING_SALAD = `salad`
const STUFFING_POTATO = `potato`
const TOPPING_MAYO = `mayo`
const TOPPING_SPICES = `spices`


class Hamburger {
  constructor(Hamburger) {
    this.size = Hamburger.size;
    this.type = Hamburger.type;
  }
  set addTopping(topping) {
    this.topping = topping
  }
  burgerPrice() {
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
    if (this.topping == true) {
      if (this.topping == `mayo`) {
        totalPrice = totalPrice + 20
      } else {
        totalPrice = totalPrice + 15;
      }
    }

    console.log(`Price: ${totalPrice}`)
  }

  burgerCalories() {
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

    if (this.topping == true) {
      if (this.topping == `mayo`) {
        totalCalories = totalCalories + 5;
      } else {
        totalCalories = totalCalories + 0;
      }
    }
    console.log(`Calories: ${totalCalories}`);
  }
}
const burger = new Hamburger({
  size: BURGER_LARGE,
  type: STUFFING_POTATO,
});
console.log(burger);
burger.burgerPrice()
burger.burgerCalories()
burger.addTopping = TOPPING_MAYO;
console.log(burger);
burger.burgerPrice();
burger.burgerCalories();

