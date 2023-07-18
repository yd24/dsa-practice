import {TreeNode} from './bst';

export function commonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): number {
  let current = root;
  while (current) {
    if (p.value > current.value && q.value > current.value) {
      current = current.right;
    } else if (p.value < current.value && q.value < current.value) {
      current = current.left;
    } else {
      return current.value;
    }
  }
}

export function commonAncestorRecursive(root: TreeNode, p: TreeNode, q: TreeNode): number {
  let commonAncestor = commonAncestorRecursHelper(root, p, q);
  return commonAncestor.value;
}

export function commonAncestorRecursHelper(current: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
  if (p.value > current.value && q.value > current.value) {
    return commonAncestorRecursHelper(current.right, p, q);
  } else if (p.value < current.value && q.value < current.value) {
    return commonAncestorRecursHelper(current.left, p, q);
  } else {
    return current;
  }
}