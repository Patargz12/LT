function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const aliceSum = aliceSizes.reduce((a, b) => a + b, 0);
    const bobSum = bobSizes.reduce((a, b) => a + b, 0);
    const diff = (aliceSum - bobSum) / 2;
    
    const bobSet = new Set(bobSizes);
    
    for (const a of aliceSizes) {
        const b = a - diff;
        if (bobSet.has(b)) {
            return [a, b];
        }
    }
    
    return [];
}