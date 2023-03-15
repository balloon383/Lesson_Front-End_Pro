// Singly linked list
const SINGLE_LIST_HEAD = {
  value: 5,
  next: null,
};
let singleList = [SINGLE_LIST_HEAD,];


function funSingleList(values, link = null) {
  let SINGLE_LIST_OBJECT = {
    value: values,
    next: link,
  };
  singleList.forEach((el) => {
    if (el.next == null) {
      el.next = SINGLE_LIST_OBJECT;
      return el.next
    }
  })
  singleList.push(SINGLE_LIST_OBJECT)
}
funSingleList(1)
funSingleList(true)
funSingleList(() => console.log('hello'))
console.log(singleList)
console.log(SINGLE_LIST_HEAD.next.value)
SINGLE_LIST_HEAD.next.next.next.value()
