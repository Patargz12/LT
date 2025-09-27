function findLengthOfLCIS(nums: number[]): number {
  let maxLen = 1
  let currLen = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currLen++
      maxLen = Math.max(maxLen, currLen)
    } else {
      currLen = 1
    }
  }
  return maxLen
}
