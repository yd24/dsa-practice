import { test, describe, expect } from 'vitest';
import { validateBST } from './validateBST';
import { TreeNode, BinaryTree, BinarySearchTree } from './bst';

describe('Testing function that checks if a binary tree is a valid BST', () => {
  test('Test that a valid BST returns true', () => {
    let bst = new BinarySearchTree();
    bst.add(2);
    bst.add(1);
    bst.add(3);

    let valid = validateBST(bst.root);
    expect(valid).toBeTruthy();
  });

  test('Test that an invalid BST returns false', () => {
    let bst = new BinaryTree();
    bst.root = new TreeNode(2);
    bst.root.left = new TreeNode(5);
    bst.root.right = new TreeNode(3);

    let valid = validateBST(bst.root);
    expect(valid).toBeFalsy();
  });

  test('Second test for invalid BST, should return false', () => {
    let bst = new BinaryTree();
    bst.root = new TreeNode(5);
    bst.root.left = new TreeNode(1);
    bst.root.right = new TreeNode(4);
    bst.root.right.left = new TreeNode(3);
    bst.root.right.right = new TreeNode(6);

    let valid = validateBST(bst.root);
    expect(valid).toBeFalsy();
  });

  test('Test that an unbalanced valid BST returns true', () => {
    let bst = new BinaryTree();
    bst.root = new TreeNode(2);
    bst.root.left = new TreeNode(1);
    bst.root.left.left = new TreeNode(0);
    bst.root.left.left.left = new TreeNode(-1);

    let valid = validateBST(bst.root);
    expect(valid).toBeTruthy();
  });

  test('Test that an empty BST return true', () => {
    let bst = new BinaryTree();
    let valid = validateBST(bst.root);
    expect(valid).toBeTruthy();
  });

  test('Test that a BST with duplicate values returns false', () => {
    let bst = new BinaryTree();
    bst.root = new TreeNode(2);
    bst.root.left = new TreeNode(2);
    bst.root.right = new TreeNode(2);
    let valid = validateBST(bst.root);

    expect(valid).toBeFalsy();
  });
});