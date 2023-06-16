//simple Node implementation
class Node {
  constructor(value=null) {
    this.value = value;
    this.next = null;
  }
}

//simple LinkedList implementation
class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    let current = this.head;
    if (current === null) {
      this.head = new Node(value);
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
}

module.exports = {
  LinkedList,
  Node
};