import {TreeNode} from '../../common/bst';

export function findLeaves(root: TreeNode | null): number {
  if (root) {
    return findLeavesHelper(root, 0);
  } else {
    return 0;
  }
}

export function findLeavesHelper(current: TreeNode, counter: number): number {
  if (!current.left && !current.right) {
    return 1;
  }

  let currentCounter = counter;

  if (current.left) {
    counter += findLeavesHelper(current.left, currentCounter);
  }

  if (current.right) {
    counter += findLeavesHelper(current.right, currentCounter);
  }

  return counter;
}