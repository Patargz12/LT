function findRotateSteps(ring: string, key: string): number {
    const n = ring.length;
    const m = key.length;
    
    const charPositions = new Map<string, number[]>();
    for (let i = 0; i < n; i++) {
        if (!charPositions.has(ring[i])) {
            charPositions.set(ring[i], []);
        }
        charPositions.get(ring[i])!.push(i);
    }
    
    let dp = new Map<number, number>();
    dp.set(0, 0);
    
    for (let i = 0; i < m; i++) {
        const nextDp = new Map<number, number>();
        const char = key[i];
        const positions = charPositions.get(char)!;
        
        for (const [currentPos, currentSteps] of dp) {
            for (const targetPos of positions) {
                const clockwise = (targetPos - currentPos + n) % n;
                const anticlockwise = (currentPos - targetPos + n) % n;
                const minRotation = Math.min(clockwise, anticlockwise);
                const totalSteps = currentSteps + minRotation + 1;
                
                if (!nextDp.has(targetPos) || nextDp.get(targetPos)! > totalSteps) {
                    nextDp.set(targetPos, totalSteps);
                }
            }
        }
        dp = nextDp;
    }
    
    return Math.min(...dp.values());
}