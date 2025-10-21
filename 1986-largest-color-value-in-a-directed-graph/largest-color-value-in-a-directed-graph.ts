function largestPathValue(colors: string, edges: number[][]): number {
    const n = colors.length;
    const graph = Array(n).fill(0).map(() => []);
    const indegree = Array(n).fill(0);
    
    for (const [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;
    }
    
    const queue: number[] = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    
    const dp = Array(n).fill(0).map(() => Array(26).fill(0));
    let processed = 0;
    let result = 0;
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        processed++;
        
        const colorIndex = colors.charCodeAt(node) - 97;
        dp[node][colorIndex]++;
        
        result = Math.max(result, dp[node][colorIndex]);
        
        for (const next of graph[node]) {
            for (let i = 0; i < 26; i++) {
                dp[next][i] = Math.max(dp[next][i], dp[node][i]);
            }
            
            indegree[next]--;
            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }
    
    return processed === n ? result : -1;
}