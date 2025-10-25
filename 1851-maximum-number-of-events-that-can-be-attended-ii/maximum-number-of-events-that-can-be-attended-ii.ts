var maxValue = function(events, k) {
    events.sort((a, b) => a[1] - b[1]);
    
    const n = events.length;
    const dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        const [start, end, value] = events[i - 1];
        
        let left = 0, right = i - 1, lastNonOverlap = 0;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (events[mid][1] < start) {
                lastNonOverlap = mid + 1;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        for (let j = 1; j <= k; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[lastNonOverlap][j - 1] + value);
        }
    }
    
    return dp[n][k];
};