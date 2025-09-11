function checkRecord(n) {
    const MOD = 1000000007;
    
    // dp[i][j][k] = number of valid records of length i
    // j = number of A's (0 or 1)
    // k = consecutive L's at end (0, 1, or 2)
    const dp = Array(n + 1).fill(null).map(() =>
        Array(2).fill(null).map(() => Array(3).fill(0))
    );
    
    dp[0][0][0] = 1;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 3; k++) {
                // Add P
                dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % MOD;
                
                // Add A (only if j == 0)
                if (j === 0) {
                    dp[i][1][0] = (dp[i][1][0] + dp[i - 1][j][k]) % MOD;
                }
                
                // Add L (only if k < 2)
                if (k < 2) {
                    dp[i][j][k + 1] = (dp[i][j][k + 1] + dp[i - 1][j][k]) % MOD;
                }
            }
        }
    }
    
    let result = 0;
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 3; k++) {
            result = (result + dp[n][j][k]) % MOD;
        }
    }
    
    return result;
}