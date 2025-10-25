var predictTheWinner = function(nums) {
    const n = nums.length;
    const memo = Array.from({ length: n }, () => Array(n).fill(null));
    
    const maxDiff = (left, right) => {
        if (left === right) return nums[left];
        
        if (memo[left][right] !== null) return memo[left][right];
        
        const pickLeft = nums[left] - maxDiff(left + 1, right);
        const pickRight = nums[right] - maxDiff(left, right - 1);
        
        memo[left][right] = Math.max(pickLeft, pickRight);
        return memo[left][right];
    };
    
    return maxDiff(0, n - 1) >= 0;
};