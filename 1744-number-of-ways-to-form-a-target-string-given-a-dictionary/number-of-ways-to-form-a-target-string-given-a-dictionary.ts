function numWays(words, target) {
    const MOD = 1e9 + 7;
    const m = words[0].length;
    const n = target.length;
    
    const freq = Array(m).fill(null).map(() => Array(26).fill(0));
    for (const word of words) {
        for (let i = 0; i < m; i++) {
            freq[i][word.charCodeAt(i) - 97]++;
        }
    }
    
    const dp = Array(n + 1).fill(null).map(() => Array(m + 1).fill(0));
    
    for (let j = 0; j <= m; j++) {
        dp[0][j] = 1;
    }
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            dp[i][j] = dp[i][j - 1];
            
            const charIndex = target.charCodeAt(i - 1) - 97;
            const count = freq[j - 1][charIndex];
            
            if (count > 0) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - 1] * count) % MOD;
            }
        }
    }
    
    return dp[n][m];
}