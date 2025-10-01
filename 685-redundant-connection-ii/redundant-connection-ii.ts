function findRedundantDirectedConnection(edges: number[][]): number[] {
    const n = edges.length;
    const parent = Array(n + 1).fill(0);
    let candidate1: number[] | null = null;
    let candidate2: number[] | null = null;
    
    for (const [u, v] of edges) {
        if (parent[v] !== 0) {
            candidate1 = [parent[v], v];
            candidate2 = [u, v];
            break;
        }
        parent[v] = u;
    }
    
    const uf = Array.from({ length: n + 1 }, (_, i) => i);
    
    function find(x: number): number {
        if (uf[x] !== x) {
            uf[x] = find(uf[x]);
        }
        return uf[x];
    }
    
    function union(x: number, y: number): boolean {
        const rootX = find(x);
        const rootY = find(y);
        
        if (rootX === rootY) {
            return false;
        }
        
        uf[rootX] = rootY;
        return true;
    }
    
    for (const [u, v] of edges) {
        if (candidate2 && u === candidate2[0] && v === candidate2[1]) {
            continue;
        }
        
        if (!union(u, v)) {
            return candidate1 ? candidate1 : [u, v];
        }
    }
    
    return candidate2!;
}