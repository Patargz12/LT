function maxProduct(nums: number[]): number {
    let maxProd = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const temp = currentMax;
        currentMax = Math.max(nums[i], currentMax * nums[i], currentMin * nums[i]);
        currentMin = Math.min(nums[i], temp * nums[i], currentMin * nums[i]);
        maxProd = Math.max(maxProd, currentMax);
    }
    
    return maxProd;
}