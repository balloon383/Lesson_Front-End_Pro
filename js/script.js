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

let checker = confirm(`Want to check your card balance?`);
const balanceCheck = new Promise((res, rej) => {
  setTimeout(() => {
    if (checker) {
      res(`confirmed`);
    } else {
      rej(`rejected`);
    }
  }, 1000);
});

balanceCheck
  .then((res) => {
    console.log(res);
    let askCurrency = prompt(`Enter your currency`).toUpperCase();
    while (!Object.keys(userData).includes(askCurrency)) {
      askCurrency = prompt(`Enter your currency`).toUpperCase();
    }
    console.log(`${userData[askCurrency]} ${askCurrency}`);
    rej();
  })
  .catch(() => {
    let chooseCurrency = prompt(
      `Choose currency you want to withdraw`
    ).toUpperCase();
    while (
      !Object.keys(bankData).includes(chooseCurrency) ||
      !Object.keys(userData).includes(chooseCurrency)
    ) {
      chooseCurrency = prompt(
        `${chooseCurrency} is not avalible now, choose another currency`
      ).toUpperCase();
    }
    return chooseCurrency;
  })
  .then((res) => {
    let currencyAmount = prompt(`How much ${res} you want to withdraw?`);
    if (currencyAmount < bankData[res].min) {
      console.log(
        `The amount entered is less than the available amount. Minimum withdrawal amount: ${bankData[res].min}`
      );
    } else if (currencyAmount > bankData[res].max) {
      console.log(
        `The amount entered is higher than the available amount. Maximum withdrawal amount: ${bankData[res].max}`
      );
    } else {
      console.log(`Here's your ${currencyAmount} ${res} ${bankData[res].img}`);
    }
  })
  .finally(() => {
    console.log(`Thank you, have a nice day 😊`);
  });
