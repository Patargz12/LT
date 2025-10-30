function closestNode(n: number, edges: number[][], query: number[][]): number[] {
    const g: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    const LOG = 11;
    const up = Array.from({ length: n }, () => Array(LOG).fill(-1));
    const depth = Array(n).fill(0);

    const dfs = (u: number, p: number) => {
        up[u][0] = p;
        for (let i = 1; i < LOG; i++) {
            const prev = up[u][i - 1];
            if (prev !== -1) up[u][i] = up[prev][i - 1];
        }
        for (const v of g[u]) {
            if (v === p) continue;
            depth[v] = depth[u] + 1;
            dfs(v, u);
        }
    };
    dfs(0, -1);

    const lca = (a: number, b: number): number => {
        if (depth[a] < depth[b]) [a, b] = [b, a];
        let diff = depth[a] - depth[b];
        for (let i = 0; i < LOG; i++) if (diff >> i & 1) a = up[a][i];
        if (a === b) return a;
        for (let i = LOG - 1; i >= 0; i--) {
            if (up[a][i] !== up[b][i]) {
                a = up[a][i];
                b = up[b][i];
            }
        }
        return up[a][0];
    };

    const dist = (a: number, b: number): number => {
        const c = lca(a, b);
        return depth[a] + depth[b] - 2 * depth[c];
    };

    const moveUp = (u: number, k: number): number => {
        for (let i = 0; i < LOG && u !== -1; i++) {
            if (k >> i & 1) u = up[u][i];
        }
        return u;
    };

    const kthOnPath = (a: number, b: number, k: number): number => {
        const c = lca(a, b);
        const len1 = depth[a] - depth[c];
        if (k <= len1) return moveUp(a, k);
        const len2 = depth[b] - depth[c];
        const remain = len1 + len2 - k;
        return moveUp(b, remain);
    };

    const ans: number[] = [];
    for (const [a, b, c] of query) {
        const da = dist(a, c);
        const db = dist(b, c);
        const ab = dist(a, b);
        const proj = (depth[a] + depth[b] - 2 * depth[lca(a, b)]) / 2;
        const x = (da + ab - db) / 2;
        let k = Math.round(x);
        if (k < 0) k = 0;
        if (k > ab) k = ab;
        const node = kthOnPath(a, b, k);
        ans.push(node);
    }
    return ans;
}
