function validTree(n: number, edges: number[][]): boolean {
    if (edges.length !== n - 1) {
        return false;
    }
    
    const parent: number[] = Array.from({length: n}, (_, i) => i);
    
    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }
    
    function union(x: number, y: number): boolean {
        const px = find(x);
        const py = find(y);
        if (px === py) {
            return false;
        }
        parent[px] = py;
        return true;
    }
    
    for (const [a, b] of edges) {
        if (!union(a, b)) {
            return false;
        }
    }
    
    return true;
}