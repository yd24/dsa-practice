const { reverseLinkedList, reverseLinkedListInPlace } = require('./reverse');
const { LinkedList } = require('./LinkedList');

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

    let reversed = reverseLinkedList(list);
    expect(reversed.head.value).toEqual(3);
    expect(reversed.head.next.next.value).toEqual(5);
    expect(reversed.head.next.next.next.value).toEqual(6);
    expect(reversed.head.next.next.next.next).toBeFalsy();

    //test with in place method
    let original = reverseLinkedListInPlace(reversed);
    expect(original.head.value).toEqual(6);
    expect(original.head.next.next.value).toEqual(12);
    expect(original.head.next.next.next.value).toEqual(3);

  });

  test('Test that a Linked List with two elements can be reversed', () => {
    let list = new LinkedList();
    list.append(6);
    list.append(5);

    let reversed = reverseLinkedList(list);
    expect(reversed.head.value).toEqual(5);
    expect(reversed.head.next.value).toEqual(6);
  });

  test('Test that a Linked List with one element is the same', () => {
    let list = new LinkedList();
    list.append(6);

    let reversed = reverseLinkedList(list);
    expect(reversed.head.value).toEqual(6);
  });
});