import insertInterval, { mergeIntervals } from './insertInterval';
import { describe, test, expect } from 'vitest';

describe('Testing function that inserts and merges overlapping intervals', () => {
  test('Tests that function can merge overlapping intervals', () => {
    let arr = [[1, 2], [4, 10], [4, 6], [8, 12]];
    let merged = mergeIntervals(arr);
    console.log(merged);
    expect(merged).toEqual([[1, 2], [4, 12]]);

    let arr2 = [[1, 2], [2, 6], [3, 8], [10, 12]];
    let merged2 = mergeIntervals(arr2);
    expect(merged2).toEqual([[1, 8], [10, 12]]);
  });
});