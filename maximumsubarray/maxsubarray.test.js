const maxSumSubArray = require('./maxsubarray');

describe('Testing function to find maximum sum from subarrays in an array', () => {
  test('General test case with a standard array of values', () => {
    let arr = [5, 4, -1, 7];
    let sum = maxSumSubArray(arr);
    expect(sum).toEqual(15);
  });
});