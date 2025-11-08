function numIslands2(m: number, n: number, positions: number[][]): number[] {
    const parent = new Map<string, string>();
    const result: number[] = [];
    let count = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    function find(x: string): string {
        if (parent.get(x) !== x) {
            parent.set(x, find(parent.get(x)!));
        }
        return parent.get(x)!;
    }
    
    function union(x: string, y: string): void {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent.set(rootX, rootY);
            count--;
        }
    }
    
    for (const [r, c] of positions) {
        const key = `${r},${c}`;
        
        if (parent.has(key)) {
            result.push(count);
            continue;
        }
        
        parent.set(key, key);
        count++;
        
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            const neighborKey = `${nr},${nc}`;
            
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && parent.has(neighborKey)) {
                union(key, neighborKey);
            }
        }
        
        result.push(count);
    }
    
    return result;
}