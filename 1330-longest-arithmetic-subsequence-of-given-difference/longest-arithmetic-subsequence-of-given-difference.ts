const longestSubsequence = (arr, difference) => {
    const dp = new Map();
    let maxLen = 1;
    
    for (const num of arr) {
        const prev = num - difference;
        const currentLen = (dp.get(prev) || 0) + 1;
        dp.set(num, currentLen);
        maxLen = Math.max(maxLen, currentLen);
    }
    
    return maxLen;
};