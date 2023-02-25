const ITCompany = {
  id: 12332129,
  сompanyName: "Playtika",
  type: "product",
  vacancies: [
    {
      frontEnd: {
        salary: 1200,
      },
    },
    {
      backEnd: {
        salary: 1500,
      },
    },
    {
      scramMaster: {
        salary: 500,
      },
    },
    {
      tester: {
        salary: 600,
      },
    },
  ],
};
//let yourName = prompt(`What is your name`)
let yourPosition = prompt(`What is your position`)
//let yourSalary = prompt(`What is your salary`)

const createObject = function (name = `default`, pos = `default`, salary = `default`) {
  let newWorker = Object.create(ITCompany)
  for (let i = 0; i < newWorker.vacancies.length; i++){
    debugger
    console.log(newWorker.vacancies[i])
    if (pos == Object.keys.newWorker[i]) {
      console.log(newWorker.vacancies[i]);
    }
  }
}
createObject(`def`, yourPosition, `def`)


/* document.write(`hello my name is ${workerName} I am ${workerPosition} dev in ${companyName}` */