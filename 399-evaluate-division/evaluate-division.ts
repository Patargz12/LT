function calcEquation(
    equations: string[][], 
    values: number[], 
    queries: string[][]
): number[] {
    const graph = new Map<string, Map<string, number>>();
    
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const value = values[i];
        
        if (!graph.has(a)) graph.set(a, new Map());
        if (!graph.has(b)) graph.set(b, new Map());
        
        graph.get(a)!.set(b, value);
        graph.get(b)!.set(a, 1 / value);
    }
    
    const dfs = (start: string, end: string, visited: Set<string>): number => {
        if (!graph.has(start) || !graph.has(end)) return -1;
        if (start === end) return 1;
        
        visited.add(start);
        
        for (const [neighbor, value] of graph.get(start)!) {
            if (visited.has(neighbor)) continue;
            
            const result = dfs(neighbor, end, visited);
            if (result !== -1) return value * result;
        }
        
        return -1;
    };
    
    return queries.map(([c, d]) => dfs(c, d, new Set()));
}