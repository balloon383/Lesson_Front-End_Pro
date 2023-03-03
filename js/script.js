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
      alert(total);
    } else {
      total = this.price;
      alert(total)
    }
  }
  getInfo() {
    let info
    if (this.season == true) {
      info = (`
      <ul>
        <li>Type: Vegetable. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price * this.seasonKoef}. Season: true</li>
      </ul>
      `);
      document.write(info)
    } else {
      info = `
      <ul>
        <li>Type: Vegetable. SeasonKoef: ${this.seasonKoef}. Name: ${this.name}. Icon: ${this.icon}. Price: ${this.price}.</li>
      </ul>
      `;
      document.write(info);
    }
  }
}
let objArray = vegetables.map((el) => new vegetable({ ...el }));
console.log(objArray);

objArray[0].getInfo()
objArray[1].getInfo()
objArray[2].getInfo()