function maxLen(n: number, edges: number[][], label: string): number {
    const g: number[][] = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    }

    if (n === 0) return 0;

    const NN = n * n;
    const visited = new Set<number>();
    const q: Array<[number, number, number, number]> = [];
    let best = 1;

    for (let i = 0; i < n; i++) {
        const mask = 1 << i;
        const key = mask * NN + i * n + i;
        visited.add(key);
        q.push([mask, i, i, 1]);
    }

    for (const [u, v] of edges) {
        if (label[u] === label[v]) {
            const mask = (1 << u) | (1 << v);
            const key1 = mask * NN + u * n + v;
            if (!visited.has(key1)) {
                visited.add(key1);
                q.push([mask, u, v, 2]);
                best = Math.max(best, 2);
            }
            const key2 = mask * NN + v * n + u;
            if (!visited.has(key2)) {
                visited.add(key2);
                q.push([mask, v, u, 2]);
                best = Math.max(best, 2);
            }
        }
    }

    let qi = 0;
    while (qi < q.length) {
        const [mask, u, v, len] = q[qi++];

        for (const nu of g[u]) {
            if (mask & (1 << nu)) continue;
            for (const nv of g[v]) {
                if (nv === nu) continue;
                if (mask & (1 << nv)) continue;
                if (label[nu] !== label[nv]) continue;
                const newMask = mask | (1 << nu) | (1 << nv);
                const key = newMask * NN + nu * n + nv;
                if (!visited.has(key)) {
                    visited.add(key);
                    const newLen = len + 2;
                    if (newLen > best) best = newLen;
                    q.push([newMask, nu, nv, newLen]);
                }
            }
        }
    }

    return best;
}
