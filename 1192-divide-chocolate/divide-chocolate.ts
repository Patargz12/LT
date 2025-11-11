function maximizeSweetness(sweetness: number[], k: number): number {
    let left = Math.min(...sweetness);
    let right = sweetness.reduce((a, b) => a + b, 0);
    
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        let pieces = 0;
        let currentSum = 0;
        
        for (const sweet of sweetness) {
            currentSum += sweet;
            if (currentSum >= mid) {
                pieces++;
                currentSum = 0;
            }
        }
        
        if (pieces >= k + 1) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}