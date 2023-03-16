// Singly linked list
const SINGLE_LIST_HEAD = {
  value: 5,
  next: null,
};
const DEFAULT_PARAMETRS = [1, "two", () => console.log("hello"), true];

function objCreator(values, link = null) {
  nextObj = {
    value: values,
    next: link,
  }
  findNull(SINGLE_LIST_HEAD, nextObj);
}

function findNull(item, object) {
  if (item.next === null) {
    item.next = object;
  } else {
    while (item.next !== null) {
      item = item.next
    }
    findNull(item, object)
  }
}

for (let i = 0; i < DEFAULT_PARAMETRS.length; i++) {
  objCreator(DEFAULT_PARAMETRS[i]);
} 
console.log(SINGLE_LIST_HEAD.next.value)
console.log(SINGLE_LIST_HEAD.next.next.next.value());