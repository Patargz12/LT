var shortestPathLength = function(graph) {
    const n = graph.length;
    const target = (1 << n) - 1;
    const queue = [];
    const visited = new Set();
    
    for (let i = 0; i < n; i++) {
        const state = (i << n) | (1 << i);
        queue.push([i, 1 << i, 0]);
        visited.add(state);
    }
    
    while (queue.length > 0) {
        const [node, mask, dist] = queue.shift();
        
        if (mask === target) return dist;
        
        for (const neighbor of graph[node]) {
            const newMask = mask | (1 << neighbor);
            const state = (neighbor << n) | newMask;
            
            if (!visited.has(state)) {
                visited.add(state);
                queue.push([neighbor, newMask, dist + 1]);
            }
        }
    }
    
    return 0;
};