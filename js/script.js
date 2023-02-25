const obj = {
  x: 10,
  y: 20,
  inner: {
    x: 20,
    z: 30,
  },
  foo2: {
    k: 23,
    p: 13,
  },
};
let newObj = {}
convert(obj)
function convert(obj) {
  let key;
  let value;
  for (key of Object.keys(obj)) {
    for (value of Object.values(obj)) {
      if (Object.values(obj[key]).length >= 1) {
        newObj = { ...newObj, ...value };
      } else if (Object.values(obj[key]).length == 0) {
        newObj[key] = obj[key]
      }
    } 
  }
}
console.log(newObj);


