import { describe, test, expect } from 'vitest';
import { TreeNode, BinarySearchTree } from '../../common/bst';
import { commonAncestor, commonAncestorRecursive } from './commonAncestor';

describe('Testing function to find common ancestor in binary search tree', () => {
  test('Can create a binary search tree and add elements to it', () => {
    let bst = new BinarySearchTree();
    bst.add(6);
    bst.add(2);
    bst.add(8);
    bst.add(0);
    bst.add(4);
    bst.add(7);
    bst.add(9);
    bst.add(3);
    bst.add(5);

    let order = bst.inOrder();
    let post = bst.postOrder();
    let pre = bst.preOrder();

    expect(order).toEqual([0, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(post).toEqual([0, 3, 5, 4, 2, 7, 9, 8, 6]);
    expect(pre).toEqual([6, 2, 0, 4, 3, 5, 8, 7, 9]);
  });

  test('Can find the lowest common ancestor in regular BST', () => {
    let bst = new BinarySearchTree();
    bst.add(6);
    bst.add(2);
    bst.add(8);
    bst.add(0);
    bst.add(4);
    bst.add(7);
    bst.add(9);
    bst.add(3);
    bst.add(5);

    let p = new TreeNode(2);
    let q = new TreeNode(8);

    let LCA = commonAncestor(bst.root, p, q);
    expect(LCA).toEqual(6);
  });

  test('Can find the lowest common ancestor in BST with only two elements', () => {
    let bst = new BinarySearchTree();
    bst.add(6);
    bst.add(2);

    let p = new TreeNode(2);
    let q = new TreeNode(6);

    let LCA = commonAncestor(bst.root, p, q);
    expect(LCA).toEqual(6);
  });

  test('Can find the lowest common ancestor in BST with p/q as its own ancestor', () => {
    let bst = new BinarySearchTree();
    bst.add(6);
    bst.add(2);
    bst.add(8);
    bst.add(0);
    bst.add(4);
    bst.add(7);
    bst.add(9);
    bst.add(3);
    bst.add(5);

    let p = new TreeNode(2);
    let q = new TreeNode(4);

    let LCA = commonAncestor(bst.root, p, q);
    expect(LCA).toEqual(2);
  });

  test('Can find the lowest common ancestor in BST with recursive solution', () => {
    let bst = new BinarySearchTree();
    bst.add(6);
    bst.add(2);
    bst.add(8);
    bst.add(0);
    bst.add(4);
    bst.add(7);
    bst.add(9);
    bst.add(3);
    bst.add(5);

    let p = new TreeNode(2);
    let q = new TreeNode(4);

    let LCA = commonAncestorRecursive(bst.root, p, q);
    expect(LCA).toEqual(2);
  });
});