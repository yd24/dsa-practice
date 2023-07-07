function maxSumSubArray(nums) {
  let globalMax = nums[0];
  let localMax = nums[0];
  if (nums.length > 1) {
    for (let i = 1;  i < nums.length; i++) {
      localMax = Math.max(localMax + nums[i], nums[i]);
      if (localMax > globalMax) {
        globalMax = localMax;
      }
    }
  }
  return globalMax;
}

module.exports = maxSumSubArray;