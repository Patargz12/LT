function smallestDistancePair(nums, k) {
    nums.sort((a, b) => a - b);
    
    let left = 0;
    let right = nums[nums.length - 1] - nums[0];
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const count = countPairs(nums, mid);
        
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

function countPairs(nums, maxDistance) {
    let count = 0;
    let left = 0;
    
    // For each right pointer, count pairs with distance <= maxDistance
    for (let right = 0; right < nums.length; right++) {
        while (nums[right] - nums[left] > maxDistance) {
            left++;
        }
        count += right - left;
    }
    
    return count;
}