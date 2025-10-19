const networkDelayTime = (times: number[][], n: number, k: number): number => {
    const graph = new Map<number, [number, number][]>();
    
    for (const [u, v, w] of times) {
        if (!graph.has(u)) graph.set(u, []);
        graph.get(u)!.push([v, w]);
    }
    
    const dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;
    
    const minHeap: [number, number][] = [[0, k]];
    
    while (minHeap.length > 0) {
        minHeap.sort((a, b) => a[0] - b[0]);
        const [time, node] = minHeap.shift()!;
        
        if (time > dist[node]) continue;
        
        const neighbors = graph.get(node) || [];
        for (const [neighbor, weight] of neighbors) {
            const newTime = time + weight;
            if (newTime < dist[neighbor]) {
                dist[neighbor] = newTime;
                minHeap.push([newTime, neighbor]);
            }
        }
    }
    
    let maxTime = 0;
    for (let i = 1; i <= n; i++) {
        if (dist[i] === Infinity) return -1;
        maxTime = Math.max(maxTime, dist[i]);
    }
    
    return maxTime;
};