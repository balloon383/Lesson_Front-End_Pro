const vegetables = [
  {
    name: `tomato`,
    icon: `🍅`,
    price: 2.3,
  },
  {
    name: `carrot`,
    icon: `🥕`,
    price: 1.5,
  },
  {
    name: `corn`,
    icon: `🌽`,
    price: 2.78,
    season: true,
  },
];


class vegetable{
  constructor(obj) {
    this.type = `Vegetables`
    this.seasonKoef = 1.3
    this.name = Object.values({...obj})
  }
  getPrice() {
    let total
    if (vegetable.season == true) {
      total = this.price * this.seasonKoef
    }
  }
  getInfo() {
    if (vegetable.season == true) {
      document.write(`
    Type: Vegetable. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}. Season: true
    `)
    } else if (vegetable.season == false) {
      document.write(`
    Type: Vegetable. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}.
      `);
    }
  }
}

let obj = vegetables.map(el => new vegetable({ ...el }, console.log(el)))
console.log(obj)