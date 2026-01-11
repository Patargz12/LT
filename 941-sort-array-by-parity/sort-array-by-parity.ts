function sortArrayByParity(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] % 2 === 1 && nums[right] % 2 === 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } else if (nums[left] % 2 === 0) {
            left++;
        } else {
            right--;
        }
    }
    
    return nums;
}