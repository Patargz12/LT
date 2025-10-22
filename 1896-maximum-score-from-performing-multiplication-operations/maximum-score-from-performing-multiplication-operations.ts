function maximumScore(nums, multipliers) {
    const n = nums.length;
    const m = multipliers.length;
    const memo = new Map();
    
    function dp(i, left) {
        if (i === m) return 0;
        
        const key = i * 1000 + left;
        if (memo.has(key)) return memo.get(key);
        
        const right = n - 1 - (i - left);
        
        const pickLeft = nums[left] * multipliers[i] + dp(i + 1, left + 1);
        const pickRight = nums[right] * multipliers[i] + dp(i + 1, left);
        
        const result = Math.max(pickLeft, pickRight);
        memo.set(key, result);
        
        return result;
    }
    
    return dp(0, 0);
}