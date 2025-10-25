var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;
    const dp = Array(n + 1).fill(-Infinity);
    dp[n] = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = 0; j < 3 && i + j < n; j++) {
            sum += stoneValue[i + j];
            dp[i] = Math.max(dp[i], sum - dp[i + j + 1]);
        }
    }
    
    if (dp[0] > 0) return "Alice";
    if (dp[0] < 0) return "Bob";
    return "Tie";
};