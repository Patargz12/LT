function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    
    const bucket: number[][] = Array(nums.length + 1).fill(null).map(() => []);
    
    for (const [num, count] of freq) {
        bucket[count].push(num);
    }
    
    const result: number[] = [];
    
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }
    
    return result.slice(0, k);
}