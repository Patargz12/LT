function reachNumber(target: number): number {
    target = Math.abs(target);
    
    let n = 0;
    let sum = 0;
    
    while (sum < target || (sum - target) % 2 !== 0) {
        n++;
        sum += n;
    }
    
    return n;
}