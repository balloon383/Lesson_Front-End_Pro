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
    this.topping = []
  }
  set addTopping(topping) {
  this.topping.push(topping)
  }
  get getPrice() {
    
  }
  get getCalories(){
    
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
    

    console.log(`Price: ${totalPrice}`);
  }

  burgerCalories() {
    let totalCalories;
    if (this.size == `small`) {
      totalCalories = 20;
    } else {
      totalCalories = 40;
    }

    if (typeof this.topping == `string`) {
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
    console.log(`Calories: ${totalCalories}`);
  }
}
const burger = new Hamburger({
  size: BURGER_LARGE,
  type: STUFFING_POTATO,
});
console.log(burger);
burger.addTopping = TOPPING_MAYO;
console.log(burger);
burger.addTopping = TOPPING_SPICES;
console.log(burger);
burger.burgerPrice();
burger.burgerCalories();

