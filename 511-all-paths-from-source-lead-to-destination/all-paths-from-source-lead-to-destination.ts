function leadsToDestination(n: number, edges: number[][], source: number, destination: number): boolean {
    const graph = new Map<number, number[]>();
    
    for (const [from, to] of edges) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from)!.push(to);
    }
    
    if (graph.has(destination)) {
        return false;
    }
    
    const state = new Array(n).fill(0);
    
    function dfs(node: number): boolean {
        if (state[node] === 1) {
            return false;
        }
        
        if (state[node] === 2) {
            return true;
        }
        
        if (!graph.has(node)) {
            return node === destination;
        }
        
        state[node] = 1;
        
        for (const neighbor of graph.get(node)!) {
            if (!dfs(neighbor)) {
                return false;
            }
        }
        
        state[node] = 2;
        return true;
    }
    
    return dfs(source);
}