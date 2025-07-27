function maxRotateFunction(nums) {
    const n = nums.length;
    let sum = 0;
    let f = 0;
    
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        f += i * nums[i];
    }
    
    let max = f;
    
    for (let k = 1; k < n; k++) {
        f = f + sum - n * nums[n - k];
        max = Math.max(max, f);
    }
    
    return max;
}