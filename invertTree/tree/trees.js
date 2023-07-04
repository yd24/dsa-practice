'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value) {
    this.value = value;
    this.children = null;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node;
  }

  preOrder(node, arr) {
    arr.push(node.value);
    if (node.left) {
      this.preOrder(node.left, arr);
    }
    if (node.right) {
      this.preOrder(node.right, arr);
    }
    return arr;
  }

  inOrder(node, arr) {
    if (node.left) {
      this.inOrder(node.left, arr);
    }
    arr.push(node.value);
    if (node.right) {
      this.inOrder(node.right, arr);
    }
    return arr;
  }

  postOrder(node, arr) {
    if (node.left) {
      this.postOrder(node.left, arr);
    }
    if (node.right) {
      this.postOrder(node.right, arr);
    }
    arr.push(node.value);
    return arr;
  }

  breadthFirst(node) {
    let visited = []
    let arr = [];
    visited.push(node);
    while (visited.length > 0) {
      let current = visited.shift();
      arr.push(current.value);
      if (current.left) {
        visited.push(current.left);
      }
      if (current.right) {
        visited.push(current.right);
      }
    }
    return arr;
  }

  findMax() {
    let node = this.root;
    let max = -1;

    let visited = [];
    visited.push(node);
    while (visited.length > 0) {
      let current = visited.shift();
      if (current !== null) {
        if (current.value > max) {
          max = current.value;
        }
        if (current.left) {
          visited.push(current.left);
        }
        if (current.right) {
          visited.push(current.right);
        }
      }
    }
    return max;
  }
}

class KaryTree {
  constructor(node) {
    this.root = node;
  }

  fizzBuzzTree(node) {
    let root = this.helperFizz(node);
    return new KaryTree(root);
  }

  helperFizz(node) {
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    } else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else {
      node.value = node.value.toString();
    }

    if (node.children !== null) {
      for (let i = 0; i < node.children.length; i++) {
        this.helperFizz(node.children[i]);
      }
    }
    return node;
  }

  breadthFirstKary(node) {
    let visited = [];
    let arr = [];
    visited.push(node);
    while (visited.length > 0) {
      let current = visited.shift();
      arr.push(current.value);
      if (current.children) {
        for (let i = 0; i < current.children.length; i++) {
          visited.push(current.children[i]);
        }
      }
    }
    return arr;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(node) {
    super(node);
  }

  add(value) {
    this.root = this.addToTree(this.root, value);
  }

  addToTree(node, value) {
    if (node === null) {
      node = new Node(value);
      return node;
    }
    if (value > node.value) {
      node.right = this.addToTree(node.right, value);
    } else if (value < node.value) {
      node.left = this.addToTree(node.left, value);
    }
    return node;
  }

  contains(value) {
    return this.containsInTree(this.root, value);
  }

  containsInTree(node, value) {
    if (node === null) {
      return false;
    } else {
      if (value > node.value) {
        return this.containsInTree(node.right, value);
      } else if (value < node.value) {
        return this.containsInTree(node.left, value);
      }
      return true;
    }
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
  KaryNode,
  KaryTree,
};
