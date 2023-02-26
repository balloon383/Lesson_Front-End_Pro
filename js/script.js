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
let yourName = prompt(`What is your name`)
let yourPosition = prompt(`What is your position`)
let yourSalary = prompt(`What is your salary`)
let newWorker
let isValide

validation(yourPosition, yourSalary) 


function validation(position, salary) {
  for (let value of Object.values(ITCompany.vacancies)) {
  let posIsValide
  let salaryIsValide
  if (position == Object.keys(value)) {
    posIsValide = true;
  }
  for (let key of Object.values(value)) {
    for (let salaryValue of Object.values(key)) {
      if (salary == salaryValue) {
        salaryIsValide = true;
      }
    }
  }
  if (posIsValide && salaryIsValide) {
    isValide = true
  } else {
    console.log(`not ok`)
  }
  }
  return isValide
}


const createObject = function (name, pos, salary) {
  newWorker = Object.create(ITCompany)
  newWorker.workerName = name;
  newWorker.workerPosition = pos;
  newWorker.workerSalary = salary;
  newWorker.greeting = function () {
    console.log(`hello my name is ${name}, I am ${pos} developer in ${this.сompanyName}`);
  }
  newWorker.greeting(yourName, yourPosition, yourSalary);
}

if (isValide) {
  createObject(yourName, yourPosition, yourSalary);
}