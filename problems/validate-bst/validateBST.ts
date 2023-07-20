import { TreeNode } from '../../common/bst';

export function validateBST(root: TreeNode | null): boolean {
  return validateBSTHelper(root, -Infinity, Infinity);
}

function validateBSTHelper(current: TreeNode | null, minBoundary: number, maxBoundary: number): boolean {
  //if tree or subtree is empty
  if (!current) {
    return true;
  }

  //check if current is on the invalid "side" of all subtrees
  if (current.value <= minBoundary || current.value >= maxBoundary) {
    return false;
  }

  //if both left and right sides return true, it is valid. else it is invalid.
  return (
    validateBSTHelper(current.left, minBoundary, current.value)
    &&
    validateBSTHelper(current.right, current.value, maxBoundary)
  );
}