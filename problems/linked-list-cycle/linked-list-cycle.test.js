const detectCycle = require("./linked-list-cycle");
const { LinkedList, Node } = require("../../common/LinkedList");
import { describe, test, expect } from "vitest";

describe("Testing linked list cycle detect function", () => {
  test("Testing that a linked list cycle can be detected", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    let loop = list.head.next;
    list.append(5);
    list.append(6);
    //before loop is made
    let cycle = detectCycle(list.head);
    expect(cycle).toBeFalsy();

    let end = list.head.next.next.next;
    end.next = loop;

    //after loop is made
    let cycle2 = detectCycle(list.head);
    expect(cycle2).toBeTruthy();
  });

  test("Testing that a linked list cycle can be detected when there are only 2 elements", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(3);
    let loop = list.head.next;
    let end = list.head.next;

    let cycle = detectCycle(list.head);
    expect(cycle).toBeFalsy();

    end.next = list.head;
    let cycle2 = detectCycle(list.head);
    expect(cycle2).toBeTruthy();
  });

  test("Testing that a linked list cycle can be detected when there is only 1 element", () => {
    let list = new LinkedList();
    list.append(1);

    let cycle = detectCycle(list.head);
    expect(cycle).toBeFalsy();

    list.head.next = list.head;
    let cycle2 = detectCycle(list.head);
    expect(cycle2).toBeTruthy();
  });

  test("Testing that an empty linked list returns false", () => {
    let list = new LinkedList();
    let cycle = detectCycle(list.head);
    expect(cycle).toBeFalsy();
  });
});
