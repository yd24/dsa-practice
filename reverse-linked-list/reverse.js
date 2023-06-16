const { Node, LinkedList } = require('./LinkedList');

function reverseLinkedList(list) {
  let current = list.head;
  let reversed = new LinkedList();
  while (current !== null) {
    let temp = current;
    current = current.next;
    reversed.prepend(temp.value);
  }
  return reversed;
}

//need to draw out and fix
function reverseLinkedListInPlace(list) {
  let current = list.head;
  while (current.next !== null) {
    let temp = current;
    list.head.next = current.next;
    temp.next = list.head;
    list.head = temp;
    current = current.next;
  }
  return list;
}

module.exports = {
  reverseLinkedList,
  reverseLinkedListInPlace,
};