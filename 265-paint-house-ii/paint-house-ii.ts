function minCostII(costs: number[][]): number {
  if (costs.length === 0) return 0;
  
  const n = costs.length;
  const k = costs[0].length;
  
  let prev = [...costs[0]];
  
  for (let i = 1; i < n; i++) {
    const curr = Array(k).fill(0);
    
    for (let j = 0; j < k; j++) {
      let minCost = Infinity;
      for (let p = 0; p < k; p++) {
        if (p !== j) {
          minCost = Math.min(minCost, prev[p]);
        }
      }
      curr[j] = costs[i][j] + minCost;
    }
    
    prev = curr;
  }
  
  return Math.min(...prev);
}