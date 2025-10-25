var maxScore = function(nums) {
    const n = nums.length;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    
    const dp = new Map();
    
    const dfs = (mask, op) => {
        if (op > n / 2) return 0;
        
        if (dp.has(mask)) return dp.get(mask);
        
        let max = 0;
        
        for (let i = 0; i < n; i++) {
            if ((mask & (1 << i)) !== 0) continue;
            
            for (let j = i + 1; j < n; j++) {
                if ((mask & (1 << j)) !== 0) continue;
                
                const newMask = mask | (1 << i) | (1 << j);
                const score = op * gcd(nums[i], nums[j]) + dfs(newMask, op + 1);
                max = Math.max(max, score);
            }
        }
        
        dp.set(mask, max);
        return max;
    };
    
    return dfs(0, 1);
};