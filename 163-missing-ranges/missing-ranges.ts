function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
  const result: number[][] = [];
  let prev = lower - 1;
  
  for (let i = 0; i <= nums.length; i++) {
    const curr = i < nums.length ? nums[i] : upper + 1;
    
    if (curr - prev >= 2) {
      result.push([prev + 1, curr - 1]);
    }
    
    prev = curr;
  }
  
  return result;
}