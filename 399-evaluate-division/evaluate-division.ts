var calcEquation = function(equations, values, queries) {
    const graph = {};
    
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];
        
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        
        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }
    
    const dfs = (start, end, visited) => {
        if (!(start in graph) || !(end in graph)) return -1;
        if (start === end) return 1;
        
        visited.add(start);
        
        for (const [next, val] of graph[start]) {
            if (!visited.has(next)) {
                const res = dfs(next, end, visited);
                if (res !== -1) return val * res;
            }
        }
        
        return -1;
    };
    
    return queries.map(([c, d]) => dfs(c, d, new Set()));
};