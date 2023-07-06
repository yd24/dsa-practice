function maxSumSubArray(nums) {
  let maxSum = nums[0];
  let sum;
  for (let i = 0;  i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}

module.exports = maxSumSubArray;