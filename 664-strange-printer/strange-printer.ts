function strangePrinter(s: string): number {
    const n = s.length
    const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0))

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = dp[i + 1][j] + 1
            for (let k = i + 1; k <= j; k++) {
                if (s[i] === s[k]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i + 1][k - 1] + dp[k][j])
                }
            }
        }
    }
    return dp[0][n - 1]
}
