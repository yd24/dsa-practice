const { Node, LinkedList } = require('./LinkedList');

function reverseLinkedList(head) {
  let current = head;
  if (current?.next === null) {
    let list = new LinkedList();
    list.append(head.value);
    return list;
  }
  let reversed = new LinkedList();
  while (current !== null) {
    let temp = reversed.head;
    let newCurrent = current.next;
    reversed.head = current;
    reversed.head.next = temp;
    current = newCurrent;
  }
  return reversed;
}

//need to draw out and fix
/*function reverseLinkedListInPlace(list) {
  let current = list.head;
  while (current.next !== null) {
    let temp = current;
    list.head.next = current.next;
    temp.next = list.head;
    list.head = temp;
    current = current.next;
  }
  return list;
}*/

module.exports = {
  reverseLinkedList
};