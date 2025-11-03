function largestUniqueNumber(nums: number[]): number {
    const count = new Map<number, number>();
    
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    let max = -1;
    for (const [num, freq] of count) {
        if (freq === 1 && num > max) {
            max = num;
        }
    }
    
    return max;
}