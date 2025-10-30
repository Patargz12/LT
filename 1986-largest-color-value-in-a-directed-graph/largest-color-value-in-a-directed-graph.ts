function largestPathValue(colors: string, edges: number[][]): number {
  const n = colors.length;
  const graph: number[][] = Array.from({ length: n }, () => []);
  const inDegree = new Array(n).fill(0);
  
  for (const [a, b] of edges) {
    graph[a].push(b);
    inDegree[b]++;
  }
  
  const dp: number[][] = Array.from({ length: n }, () => new Array(26).fill(0));
  const queue: number[] = [];
  
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
      const colorIdx = colors.charCodeAt(i) - 97;
      dp[i][colorIdx] = 1;
    }
  }
  
  let processed = 0;
  let maxValue = 0;
  
  while (queue.length > 0) {
    const node = queue.shift()!;
    processed++;
    
    maxValue = Math.max(maxValue, ...dp[node]);
    
    for (const neighbor of graph[node]) {
      const colorIdx = colors.charCodeAt(neighbor) - 97;
      
      for (let c = 0; c < 26; c++) {
        dp[neighbor][c] = Math.max(dp[neighbor][c], dp[node][c] + (c === colorIdx ? 1 : 0));
      }
      
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  
  return processed === n ? maxValue : -1;
}