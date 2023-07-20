import {BinarySearchTree} from '../../common/bst';
import {describe, test, expect} from 'vitest';
import {findLeaves} from './findLeaves';

describe('Testing function to get total number of leaves in a valid BST', () => {
  test('Valid BST should return the expected number of leaves', () => {
    let bst = new BinarySearchTree();
    bst.add(4);
    bst.add(2);
    bst.add(8);
    bst.add(1);
    bst.add(3);
    bst.add(5);
    bst.add(9);

    let count = findLeaves(bst.root);
    expect(count).toEqual(4);
  });

  test('Valid BST with only 2 children should return 2', () => {
    let bst = new BinarySearchTree();
    bst.add(4);
    bst.add(2);
    bst.add(8);

    let count = findLeaves(bst.root);
    expect(count).toEqual(2);
  });

  test('Valid BST with only 1 element should return 1', () => {
    let bst = new BinarySearchTree();
    bst.add(4);

    let count = findLeaves(bst.root);
    expect(count).toEqual(1);
  });

  test('BST with no elements should return 0', () => {
    let bst = new BinarySearchTree();

    let count = findLeaves(bst.root);
    expect(count).toEqual(0);
  });

  test('Unbalanced BST should still return the proper count', () => {
    let bst = new BinarySearchTree();
    bst.add(5);
    bst.add(4);
    let count = findLeaves(bst.root);
    expect(count).toEqual(1);

    bst.add(3);
    bst.add(2);

    count = findLeaves(bst.root);
    expect(count).toEqual(1);
  });
});