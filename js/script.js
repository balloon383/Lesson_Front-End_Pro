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

class vegetable {
  constructor(obj) {
    this.type = `Vegetables`;
    this.seasonKoef = 1.3;
    this.name = obj.name;
    this.icon = obj.icon;
    this.price = obj.price;
    this.season = obj.season;
  }
  getPrice() {
    let total;
    if (this.season == true) {
      total = this.price * this.seasonKoef;
    }
  }
  getInfo() {
    if (this.season == true) {
        document.write(`
    Type: Vegetable. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}. Season: true
    `);
    } else if (vegetable.season == false) {
        document.write(`
    Type: Vegetable. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}.
    `);
    }
  }
}

let objArray = vegetables.map((el) => new vegetable({ ...el }));
console.log(objArray);
for(let i = 0; i < objArray.length; i++){
    document.write(`
    <ul>
        <li>${i.getInfo()}</li>
    </ul>`)
}