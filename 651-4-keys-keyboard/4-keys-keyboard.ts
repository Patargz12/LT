function maxA(n: number): number {
  const dp: number[] = Array(n + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    
    for (let j = 1; j <= i - 3; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
  }
  
  return dp[n];
}