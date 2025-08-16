function eventualSafeNodes(graph) {
    const n = graph.length;
    const color = new Array(n).fill(0);
    const result = [];
    
    const dfs = (node) => {
        if (color[node] !== 0) return color[node] === 2;
        
        color[node] = 1;
        
        for (const neighbor of graph[node]) {
            if (!dfs(neighbor)) {
                return false;
            }
        }
        
        color[node] = 2;
        return true;
    };
    
    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            result.push(i);
        }
    }
    
    return result;
}