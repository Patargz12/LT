function lastStoneWeight(stones: number[]): number {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);
        const diff = stones[0] - stones[1];
        stones.splice(0, 2);
        if (diff > 0) stones.push(diff);
    }
    return stones[0] ?? 0;
}