export class TreeNode {
  public value: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  public root: TreeNode | null;

  constructor(root?: TreeNode) {
    this.root = root || null;
  }

  public inOrder() {
    return this.inOrderHelper(this.root, []);
  }

  public postOrder() {
    return this.postOrderHelper(this.root, []);
  }

  public preOrder() {
    return this.preOrderHelper(this.root, []);
  }

  private inOrderHelper(node: TreeNode | null, arr: number[]): number[] {
    if (node) {
      if (node.left) {
        this.inOrderHelper(node.left, arr);
      }
      arr.push(node.value);
      if (node.right) {
        this.inOrderHelper(node.right, arr);
      }
    }
    return arr;
  }

  private postOrderHelper(node: TreeNode | null, arr: number[]): number[] {
    if (node) {
      if (node.left) {
        this.postOrderHelper(node.left, arr);
      }
      if (node.right) {
        this.postOrderHelper(node.right, arr);
      }
      arr.push(node.value);
    }
    return arr;
  }

  private preOrderHelper(node: TreeNode | null, arr: number[]): number[] {
    if (node) {
      arr.push(node.value);
      if (node.left) {
        this.preOrderHelper(node.left, arr);
      }
      if (node.right) {
        this.preOrderHelper(node.right, arr);
      }
    }
    return arr;
  }
}

export class BinarySearchTree extends BinaryTree {
  public add(value: number): void {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      this.root = this.addToTree(this.root, value);
    }
  }

  private addToTree(node: TreeNode | null, value: number): TreeNode {
    if (node === null) {
      node = new TreeNode(value);
    } else {
      if (value > node.value) {
        node.right = this.addToTree(node.right, value);
      } else {
        node.left = this.addToTree(node.left, value);
      }
    }
    return node;
  }
}