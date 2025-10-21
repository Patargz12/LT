function maxProbability(n: number, edges: number[][], succProb: number[], start_node: number, end_node: number): number {
    const graph: number[][][] = Array(n).fill(0).map(() => []);
    
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        const prob = succProb[i];
        graph[u].push([v, prob]);
        graph[v].push([u, prob]);
    }
    
    const maxProb = new Array(n).fill(0);
    maxProb[start_node] = 1;
    
    const queue = [start_node];
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        
        for (const [neighbor, prob] of graph[node]) {
            const newProb = maxProb[node] * prob;
            
            if (newProb > maxProb[neighbor]) {
                maxProb[neighbor] = newProb;
                queue.push(neighbor);
            }
        }
    }
    
    return maxProb[end_node];
}