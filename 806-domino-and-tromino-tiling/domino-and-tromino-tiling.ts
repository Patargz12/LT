const numTilings = (n) => {
    const MOD = 1000000007;
    
    if (n <= 2) return n;
    
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD;
    }
    
    return dp[n];
};