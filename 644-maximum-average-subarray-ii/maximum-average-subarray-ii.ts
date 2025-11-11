function findMaxAverage(nums, k) {
    const canAchieve = (target) => {
        let sum = 0;
        let prevSum = 0;
        let minPrevSum = 0;
        
        for (let i = 0; i < k; i++) {
            sum += nums[i] - target;
        }
        
        if (sum >= 0) return true;
        
        for (let i = k; i < nums.length; i++) {
            sum += nums[i] - target;
            prevSum += nums[i - k] - target;
            minPrevSum = Math.min(minPrevSum, prevSum);
            
            if (sum - minPrevSum >= 0) return true;
        }
        
        return false;
    };
    
    let left = Math.min(...nums);
    let right = Math.max(...nums);
    
    while (right - left > 1e-5) {
        const mid = (left + right) / 2;
        
        if (canAchieve(mid)) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    return left;
}