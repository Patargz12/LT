function numWays(n: number, k: number): number {
    if (n === 1) return k;
    if (n === 2) return k * k;
    
    let same = k;
    let diff = k * (k - 1);
    
    for (let i = 3; i <= n; i++) {
        const newSame = diff;
        const newDiff = (same + diff) * (k - 1);
        same = newSame;
        diff = newDiff;
    }
    
    return same + diff;
}