function minCostConnectPoints(points: number[][]): number {
    const n = points.length;
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
    
    const edges: [number, number, number][] = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const cost = Math.abs(points[i][0] - points[j][0]) + 
                        Math.abs(points[i][1] - points[j][1]);
            edges.push([i, j, cost]);
        }
    }
    
    edges.sort((a, b) => a[2] - b[2]);
    
    let totalCost = 0;
    let edgesUsed = 0;
    
    for (const [i, j, cost] of edges) {
        if (union(i, j)) {
            totalCost += cost;
            edgesUsed++;
            if (edgesUsed === n - 1) {
                break;
            }
        }
    }
    
    return totalCost;
}