const { reverseLinkedList } = require('./reverse');
const { LinkedList } = require('./LinkedList');
import { describe, test, expect } from 'vitest';

describe('Testing function that reverses a Linked List', () => {
  test('Test that a Linked List can be reversed', () => {
    let list = new LinkedList();
    list.append(6);
    list.append(5);
    list.append(12);
    list.append(3);
    expect(list.head.value).toEqual(6);
    expect(list.head.next.next.value).toEqual(12);
    expect(list.head.next.next.next.value).toEqual(3);

    let reversed = reverseLinkedList(list.head);
    expect(reversed.head.value).toEqual(3);
    expect(reversed.head.next.next.value).toEqual(5);
    expect(reversed.head.next.next.next.value).toEqual(6);
    expect(reversed.head.next.next.next.next).toBeFalsy();
  });

  test('Test that a Linked List with two elements can be reversed', () => {
    let list = new LinkedList();
    list.append(6);
    list.append(5);

    let reversed = reverseLinkedList(list.head);
    expect(reversed.head.value).toEqual(5);
    expect(reversed.head.next.value).toEqual(6);
  });

  test('Test that a Linked List with one element is the same', () => {
    let list = new LinkedList();
    list.append(6);

    let reversed = reverseLinkedList(list.head);
    expect(reversed.head.value).toEqual(6);
  });

  test('Test that an empty Linked List is the same when reversed', () => {
    let list = new LinkedList();
    let reversed = reverseLinkedList(list.head);
    expect(reversed.head).toBeFalsy();
  });
});