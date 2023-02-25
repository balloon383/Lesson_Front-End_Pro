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
/* let newObj = {}
convert(obj)
function convert(obj) {
  let key
  let value
  for (key of Object.keys(obj)) {
    for (value of Object.values(obj)) {
      if (typeof value == `object`) {
        newObj = { ...newObj, ...value };
      } else if (typeof value !== `object`) {
        newObj[key] = value
      }
    }
  }
  console.log(newObj);
}
 */

convert(obj);
function convert(obj) {
  for (let value of Object.values(obj)) {
  if (typeof value == `object`) {
    newObj = { ...newObj, ...value };
  } else {
    for (let key of Object.keys(obj)) {
    }
    newObj.y = value
  }
} 
  console.log(newObj);
}


