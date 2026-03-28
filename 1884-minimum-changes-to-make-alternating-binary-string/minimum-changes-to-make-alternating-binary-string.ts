function minOperations(s: string): number {
    let mismatchesWithPatternA = 0;

    for (let i = 0; i < s.length; i++) {
        const expectedChar = i % 2 === 0 ? '0' : '1';
        if (s[i] !== expectedChar) mismatchesWithPatternA++;
    }

    const mismatchesWithPatternB = s.length - mismatchesWithPatternA;

    return Math.min(mismatchesWithPatternA, mismatchesWithPatternB);
}