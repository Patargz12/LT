function findMinMoves(machines: number[]): number {
    const n = machines.length;
    const total = machines.reduce((sum, val) => sum + val, 0);
    
    if (total % n !== 0) return -1;
    
    const target = total / n;
    let maxMoves = 0;
    let flow = 0;
    
    for (let i = 0; i < n; i++) {
        const diff = machines[i] - target;
        flow += diff;
        
        maxMoves = Math.max(maxMoves, Math.abs(flow), diff);
    }
    
    return maxMoves;
}