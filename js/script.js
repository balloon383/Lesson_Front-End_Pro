const userData = {
  USD: 1000,
  EUR: 900,
  UAH: 15000,
  BIF: 20000,
  AOA: 100,
};


const bankData = {
  USD: {
    max: 3000,
    min: 100,
    img: "💵",
  },
  EUR: {
    max: 1000,
    min: 50,
    img: "💶",
  },
  UAH: {
    max: 0,
    min: 0,
    img: "💴",
  },
  GBP: {
    max: 10000,
    min: 100,
    img: "💷",
  },
};

let checker = confirm(`Want to check your card balance?`)
const balanceCheck = new Promise((res, rej) => {
  setTimeout(() => {
    if (checker) {
      res(`confirmed`);
    } else {
      rej(`rejected`)
    }
  }, 1000)
})

balanceCheck
  .then((res) => {
    console.log(res);
    let askCurrency = prompt(`Enter your currency`).toUpperCase();
    while (!Object.keys(userData).includes(askCurrency)) {
      askCurrency = prompt(`Enter your currency`).toUpperCase();
    }
    return askCurrency
  })
  .then((res) => {
    console.log(`${userData[res]} ${res}`)
    rej()
  })
  .catch((error) => {
    let chooseCurrency = prompt(`Choose currency you want to withdraw`).toUpperCase()
    while (!Object.keys(bankData).includes(chooseCurrency)) {
      chooseCurrency = prompt(`${chooseCurrency} is not avalible now, choose another currency`).toUpperCase();
    }
    return chooseCurrency;
  }).then((res) => {
    let currencyAmount = prompt(`How much ${res} you want to withdraw?`)
    if (currencyAmount < bankData[res].min) {
      console.log(
        `Введена сума меньша за доступну. Мінімальна сума зняття: ${bankData[res].min}`
      );
    } else if (currencyAmount > bankData[res].max) {
      console.log(`Введена сума більша за доступну. Максимальна сума зняття: ${bankData[res].max}`);
    } else {
      console.log(`От ваші ${currencyAmount} ${res} ${bankData[res].img}`);
    }
  }).finally(() => {
    console.log(`Дякую, гарного дня 😊`);
  })