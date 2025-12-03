function guessNumber(n: number): number {
    let left = 1;
    let right = n;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const result = guess(mid);
        
        if (result === 0) {
            return mid;
        } else if (result === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
}