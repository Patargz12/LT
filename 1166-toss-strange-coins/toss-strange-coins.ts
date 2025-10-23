function probabilityOfHeads(prob: number[], target: number): number {
    const n = prob.length;
    const dp: number[] = Array(target + 1).fill(0);
    dp[0] = 1;
    
    for (let i = 0; i < n; i++) {
        for (let j = Math.min(i + 1, target); j >= 1; j--) {
            dp[j] = dp[j] * (1 - prob[i]) + dp[j - 1] * prob[i];
        }
        dp[0] *= (1 - prob[i]);
    }
    
    return dp[target];
}