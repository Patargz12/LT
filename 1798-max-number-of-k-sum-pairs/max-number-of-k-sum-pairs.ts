function maxOperations(nums: number[], k: number): number {
    const freq = new Map<number, number>();
    let operations = 0;
    
    for (const num of nums) {
        const complement = k - num;
        
        if (freq.get(complement) > 0) {
            operations++;
            freq.set(complement, freq.get(complement) - 1);
        } else {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
    }
    
    return operations;
}