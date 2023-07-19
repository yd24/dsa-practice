import {TreeNode} from './bst';

export function commonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): number {
  let current = root;
  let LCA;
  while (current) {
    if (p.value > current.value && q.value > current.value) {
      current = current.right;
    } else if (p.value < current.value && q.value < current.value) {
      current = current.left;
    } else {
      LCA = current.value;
      break;
    }
  }
  return LCA;
}

export function commonAncestorRecursive(root: TreeNode | null, p: TreeNode, q: TreeNode): number | null {
  let commonAncestor = commonAncestorRecursHelper(root, p, q);
  let LCA = commonAncestor?.value;
  if (commonAncestor) {
    return commonAncestor.value;
  } else {
    return null;
  }
}

export function commonAncestorRecursHelper(current: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  if (current) {
    if (p.value > current.value && q.value > current.value) {
      return commonAncestorRecursHelper(current.right, p, q);
    } else if (p.value < current.value && q.value < current.value) {
      return commonAncestorRecursHelper(current.left, p, q);
    } else {
      return current;
    }
  } else {
    return current;
  }
}