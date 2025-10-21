function minCostToSupplyWater(n: number, wells: number[], pipes: number[][]): number {
    const parent: number[] = Array.from({length: n + 1}, (_, i) => i);
    
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
        edges.push([0, i + 1, wells[i]]);
    }
    
    for (const [house1, house2, cost] of pipes) {
        edges.push([house1, house2, cost]);
    }
    
    edges.sort((a, b) => a[2] - b[2]);
    
    let totalCost = 0;
    
    for (const [house1, house2, cost] of edges) {
        if (union(house1, house2)) {
            totalCost += cost;
        }
    }
    
    return totalCost;
}