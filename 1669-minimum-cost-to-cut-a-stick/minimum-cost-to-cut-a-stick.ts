function minCost(n, cuts) {
    cuts.push(0);
    cuts.push(n);
    cuts.sort((a, b) => a - b);
    
    const m = cuts.length;
    const dp = Array(m).fill(null).map(() => Array(m).fill(0));
    
    for (let len = 2; len < m; len++) {
        for (let i = 0; i + len < m; i++) {
            const j = i + len;
            dp[i][j] = Infinity;
            
            for (let k = i + 1; k < j; k++) {
                const cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    
    return dp[0][m - 1];
}