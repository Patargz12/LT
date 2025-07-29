const splitArray = (nums, k) => {
    const canSplit = (maxSum) => {
        let splits = 1;
        let currentSum = 0;
        
        for (const num of nums) {
            if (currentSum + num > maxSum) {
                splits++;
                currentSum = num;
            } else {
                currentSum += num;
            }
        }
        
        return splits <= k;
    };
    
    let left = Math.max(...nums);
    let right = nums.reduce((sum, num) => sum + num, 0);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (canSplit(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};