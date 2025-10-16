function findLength(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    let maxLen = 0;
    
    // dp[i][j] = length of common subarray ending at nums1[i-1] and nums2[j-1]
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }
    
    return maxLen;
}