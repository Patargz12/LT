function maxValueOfCoins(piles: number[][], k: number): number {
  const n = piles.length;
  const dp: number[] = Array(k + 1).fill(0);
  
  for (let i = 0; i < n; i++) {
    const pile = piles[i];
    const newDp = [...dp];
    
    let sum = 0;
    for (let j = 0; j < Math.min(pile.length, k); j++) {
      sum += pile[j];
      
      for (let coins = j + 1; coins <= k; coins++) {
        newDp[coins] = Math.max(newDp[coins], dp[coins - j - 1] + sum);
      }
    }
    
    dp.splice(0, dp.length, ...newDp);
  }
  
  return dp[k];
}