const maxSlidingWindow = (nums, k) => {
    const deque = [];
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};

const maxSlidingWindowBruteForce = (nums, k) => {
    const result = [];
    
    for (let i = 0; i <= nums.length - k; i++) {
        let max = nums[i];
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, nums[j]);
        }
        result.push(max);
    }
    
    return result;
};