const findPairs = (nums, k) => {
    if (k < 0) return 0;
    
    const numSet = new Set(nums);
    let count = 0;
    
    if (k === 0) {
        const freq = new Map();
        for (const num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
        
        for (const [num, frequency] of freq) {
            if (frequency > 1) count++;
        }
    } else {
        for (const num of numSet) {
            if (numSet.has(num + k)) count++;
        }
    }
    
    return count;
};