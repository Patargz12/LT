function countElements(arr: number[]): number {
    const set = new Set(arr);
    let count = 0;
    
    for (const num of arr) {
        if (set.has(num + 1)) {
            count++;
        }
    }
    
    return count;
}