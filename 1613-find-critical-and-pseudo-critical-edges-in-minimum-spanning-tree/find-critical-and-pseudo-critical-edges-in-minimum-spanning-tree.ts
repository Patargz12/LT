function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
    const edgesWithIndex = edges.map((edge, i) => [...edge, i]);
    edgesWithIndex.sort((a, b) => a[2] - b[2]);
    
    function findMST(mustInclude: number, mustExclude: number): number {
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
            if (px === py) return false;
            parent[px] = py;
            return true;
        }
        
        let weight = 0;
        let edgesUsed = 0;
        
        if (mustInclude !== -1) {
            const [u, v, w] = edgesWithIndex[mustInclude];
            union(u, v);
            weight += w;
            edgesUsed++;
        }
        
        for (let i = 0; i < edgesWithIndex.length; i++) {
            if (i === mustExclude) continue;
            
            const [u, v, w] = edgesWithIndex[i];
            if (union(u, v)) {
                weight += w;
                edgesUsed++;
                if (edgesUsed === n - 1) break;
            }
        }
        
        return edgesUsed === n - 1 ? weight : Infinity;
    }
    
    const mstWeight = findMST(-1, -1);
    const critical: number[] = [];
    const pseudoCritical: number[] = [];
    
    for (let i = 0; i < edgesWithIndex.length; i++) {
        const originalIndex = edgesWithIndex[i][3];
        
        if (findMST(-1, i) > mstWeight) {
            critical.push(originalIndex);
        } else if (findMST(i, -1) === mstWeight) {
            pseudoCritical.push(originalIndex);
        }
    }
    
    return [critical, pseudoCritical];
}