const findMaxForm = (strs, m, n) => {
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    for (const str of strs) {
        const zeros = str.split('0').length - 1;
        const ones = str.length - zeros;
        
        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
            }
        }
    }
    
    return dp[m][n];
};