const invertTree = require('./invertTree');
import { TreeNode, BinaryTree } from '../../common/bst';
import {describe, test, expect} from 'vitest';

describe('Testing function to invert a binary tree', () => {
  test('Function can invert a binary tree', () => {
    //set up tree
    let root = new TreeNode(5);
    let left = new TreeNode(3);
    let right = new TreeNode(7);
    left.left = new TreeNode(1);
    left.right = new TreeNode(4);
    right.left = new TreeNode(6);
    right.right = new TreeNode(8);
    root.left = left;
    root.right = right;
    let tree1 = new BinaryTree(root);

    //check tree is correctly initialized
    let arr = tree1.breadthFirst(tree1.root);
    expect(arr).toEqual([5, 3, 7, 1, 4, 6, 8]);

    //invert tree
    let inverted = invertTree(tree1.root);
    let arr2 = tree1.breadthFirst(inverted);
    expect(arr2).toEqual([5, 7, 3, 8, 6, 4, 1]);
  });

  test('Function can invert a small binary tree', () => {
    //set up tree
    let root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    let tree = new BinaryTree(root);

    //check tree is correctly initialized
    let arr = tree.breadthFirst(tree.root);
    expect(arr).toEqual([2, 1, 3]);

    //invert tree
    let inverted = invertTree(tree.root);
    let arr2 = tree.breadthFirst(inverted);
    expect(arr2).toEqual([2, 3, 1]);
  });

  test('Function can invert a binary tree with one element', () => {
    //set up tree
    let root = new TreeNode(2);
    let tree = new BinaryTree(root);

    //check tree is correctly initialized
    let arr = tree.breadthFirst(tree.root);
    expect(arr).toEqual([2]);

    //invert tree
    let inverted = invertTree(tree.root);
    let arr2 = tree.breadthFirst(inverted);
    expect(arr2).toEqual([2]);
  });

  test('Function returns null if null is passed in', () => {
    //invert tree
    let inverted = invertTree(null);
    expect(inverted).toBeFalsy;
  });
});