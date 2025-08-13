const findNumberOfLIS = (nums) => {
    const n = nums.length;
    const lengths = Array(n).fill(1);
    const counts = Array(n).fill(1);
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (lengths[j] + 1 > lengths[i]) {
                    lengths[i] = lengths[j] + 1;
                    counts[i] = counts[j];
                } else if (lengths[j] + 1 === lengths[i]) {
                    counts[i] += counts[j];
                }
            }
        }
    }
    
    const maxLen = Math.max(...lengths);
    return lengths.reduce((sum, len, i) => 
        len === maxLen ? sum + counts[i] : sum, 0
    );
};