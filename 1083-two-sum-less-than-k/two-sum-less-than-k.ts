function twoSumLessThanK(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let maxSum = -1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum < k) {
            maxSum = Math.max(maxSum, sum);
            left++;
        } else {
            right--;
        }
    }
    
    return maxSum;
}