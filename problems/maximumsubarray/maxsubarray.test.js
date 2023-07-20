const maxSumSubArray = require('./maxsubarray');
import {describe, test, expect} from 'vitest';

//assuming that the function is passed in an array of numbers that is at least length of 1.
describe('Testing function to find maximum sum from subarrays in an array', () => {
  test('General test case with a standard array of values', () => {
    let arr = [5, 4, -1, 7];
    let sum = maxSumSubArray(arr);
    expect(sum).toEqual(15);

    let arr2 = [-2,1,-3,4,-1,2,1,-5,4];
    let sum2 = maxSumSubArray(arr2);
    expect(sum2).toEqual(6);
  });

  test('Test case with a small number of values', () => {
    let arr = [-1, -4];
    let sum = maxSumSubArray(arr);
    expect(sum).toEqual(-1);
  });

  test('Testing with an array of length 1', () => {
    let arr = [3];
    let sum = maxSumSubArray(arr);
    expect(sum).toEqual(3);
  });
});