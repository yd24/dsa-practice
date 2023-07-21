import { binarySearch } from "./binarySearch";
import { describe, test, expect } from "vitest";

describe("Testing binary search function", () => {
  test("Tests that we can find the index of a value in a sorted array", () => {
    let sortedArr = [2, 4, 6, 8, 10];
    let value = 4;
    let index = binarySearch(sortedArr, value);
    expect(index).toEqual(1);

    sortedArr = [3, 4, 5, 12, 14, 41, 45, 120];
    value = 14;
    index = binarySearch(sortedArr, value);
    expect(index).toEqual(4);

    value = 45;
    index = binarySearch(sortedArr, value);
    expect(index).toEqual(6);
  });

  test("Tests that we can find the index of a value in a sorted array, if value is on the ends", () => {
    let sortedArr = [2, 4, 6, 8, 10];
    let value = 10;
    let index = binarySearch(sortedArr, value);
    expect(index).toEqual(4);

    value = 2;
    index = binarySearch(sortedArr, value);
    expect(index).toEqual(0);

    sortedArr = [3, 4, 5, 12, 14, 41, 45, 120];
    value = 14;
    index = binarySearch(sortedArr, value);
    expect(index).toEqual(4);

    value = 45;
    index = binarySearch(sortedArr, value);
    expect(index).toEqual(6);
  });

  test("Tests that we can find the index of a value in a sorted array, if there is only one value", () => {
    let sortedArr = [2];
    let value = 2;
    let index = binarySearch(sortedArr, value);
    expect(index).toEqual(0);
  });

  test("Tests that we get -1 if the value is not in the array", () => {
    let sortedArr = [3, 4, 5, 12, 14, 41, 45, 120];
    let value = 21;
    let index = binarySearch(sortedArr, value);
    expect(index).toEqual(-1);

    sortedArr = [2, 3, 4, 5];
    value = 6;
    index = binarySearch(sortedArr, value);
    expect(index).toEqual(-1);

    sortedArr = [2];
    index = binarySearch(sortedArr, value);
    expect(index).toEqual(-1);
  });

  test("Tests that we get -1 if array is empty", () => {
    let sortedArr = [];
    let value = 5;
    let index = binarySearch(sortedArr, value);
    expect(index).toEqual(-1);
  });
});
