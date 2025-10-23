function new21Game(n: number, k: number, maxPts: number): number {
    if (k === 0 || n >= k + maxPts - 1) return 1;
    
    const dp: number[] = Array(n + 1).fill(0);
    dp[0] = 1;
    let windowSum = 1;
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        dp[i] = windowSum / maxPts;
        
        if (i < k) {
            windowSum += dp[i];
        } else {
            result += dp[i];
        }
        
        if (i - maxPts >= 0) {
            windowSum -= dp[i - maxPts];
        }
    }
    
    return result;
}