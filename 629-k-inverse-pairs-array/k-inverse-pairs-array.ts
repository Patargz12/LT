function kInversePairs(n: number, k: number): number {
    const MOD = 1e9 + 7
    const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0))
    dp[0][0] = 1

    for (let i = 1; i <= n; i++) {
        let prefix = new Array(k + 1).fill(0)
        prefix[0] = dp[i - 1][0]
        for (let j = 1; j <= k; j++) {
            prefix[j] = (prefix[j - 1] + dp[i - 1][j]) % MOD
        }
        for (let j = 0; j <= k; j++) {
            let val = prefix[j]
            if (j - i >= 0) {
                val = (val - prefix[j - i] + MOD) % MOD
            }
            dp[i][j] = val
        }
    }

    return dp[n][k]
}
