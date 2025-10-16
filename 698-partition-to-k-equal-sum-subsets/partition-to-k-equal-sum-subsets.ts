function canPartitionKSubsets(nums: number[], k: number): boolean {
    const total = nums.reduce((sum, num) => sum + num, 0);
    if (total % k !== 0) return false;
    
    const target = total / k;
    nums.sort((a, b) => b - a);
    
    if (nums[0] > target) return false;
    
    const used = new Array(nums.length).fill(false);
    
    function backtrack(k: number, currentSum: number, start: number): boolean {
        if (k === 1) return true;
        if (currentSum === target) return backtrack(k - 1, 0, 0);
        
        for (let i = start; i < nums.length; i++) {
            if (used[i] || currentSum + nums[i] > target) continue;
            
            used[i] = true;
            if (backtrack(k, currentSum + nums[i], i + 1)) return true;
            used[i] = false;
        }
        
        return false;
    }
    
    return backtrack(k, 0, 0);
}