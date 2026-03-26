function sumOfUnique(nums: number[]): number {
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);

    let sum = 0;
    for (const [n, count] of freq) if (count === 1) sum += n;
    return sum;
}