function countComponents(n: number, edges: number[][]): number {
    const parent = Array.from({ length: n }, (_, i) => i);
    
    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    function union(x: number, y: number): void {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }
    
    for (const [a, b] of edges) {
        union(a, b);
    }
    
    const components = new Set<number>();
    for (let i = 0; i < n; i++) {
        components.add(find(i));
    }
    
    return components.size;
}