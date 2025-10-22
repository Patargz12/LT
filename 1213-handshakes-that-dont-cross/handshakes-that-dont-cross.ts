function numberOfWays(numPeople) {
    const n = numPeople / 2;
    const MOD = 1e9 + 7;
    
    const dp = new Array(n + 1).fill(0n);
    dp[0] = 1n;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] = (dp[i] + dp[j] * dp[i - 1 - j]) % BigInt(MOD);
        }
    }
    
    return Number(dp[n]);
}