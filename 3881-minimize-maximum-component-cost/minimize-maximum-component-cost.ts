function minCost(n: number, edges: number[][], k: number): number {
    if (edges.length === 0) return 0;
    edges.sort((a, b) => a[2] - b[2]);
    let left = 0;
    let right = edges[edges.length - 1][2];
    let ans = right;

    const can = (maxCost: number): boolean => {
        const parent = new Array<number>(n);
        for (let i = 0; i < n; i++) parent[i] = i;
        const rank = new Array<number>(n).fill(0);
        let components = n;

        const find = (x: number): number => {
            if (parent[x] !== x) parent[x] = find(parent[x]);
            return parent[x];
        };

        const union = (a: number, b: number): void => {
            const ra = find(a);
            const rb = find(b);
            if (ra === rb) return;
            if (rank[ra] < rank[rb]) parent[ra] = rb;
            else if (rank[ra] > rank[rb]) parent[rb] = ra;
            else { parent[rb] = ra; rank[ra]++; }
            components--;
        };

        for (const [u, v, w] of edges) {
            if (w <= maxCost) union(u, v);
        }

        return components <= k;
    };

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (can(mid)) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return ans;
}
