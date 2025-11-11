function missingElement(nums, k) {
    const missing = (idx) => nums[idx] - nums[0] - idx;
    
    const n = nums.length;
    if (k > missing(n - 1)) {
        return nums[n - 1] + k - missing(n - 1);
    }
    
    let left = 0;
    let right = n - 1;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        
        if (missing(mid) < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return nums[left - 1] + k - missing(left - 1);
}