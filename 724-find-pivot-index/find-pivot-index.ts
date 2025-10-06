function pivotIndex(nums: number[]): number {
    let total = nums.reduce((a, b) => a + b, 0)
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (left === total - left - nums[i]) return i
        left += nums[i]
    }
    return -1
}
