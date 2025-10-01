function findRedundantConnection(edges: number[][]): number[] {
    const n = edges.length;
    const parent = Array.from({ length: n + 1 }, (_, i) => i);
    
    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    function union(x: number, y: number): boolean {
        const rootX = find(x);
        const rootY = find(y);
        
        if (rootX === rootY) {
            return false;
        }
        
        parent[rootX] = rootY;
        return true;
    }
    
    for (const [u, v] of edges) {
        if (!union(u, v)) {
            return [u, v];
        }
    }
    
    return [];
}