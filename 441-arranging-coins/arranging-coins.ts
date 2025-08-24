function arrangeCoins(n: number): number {
    let left = 1;
    let right = n;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const coinsNeeded = Math.floor(mid * (mid + 1) / 2);
        
        if (coinsNeeded === n) {
            return mid;
        } else if (coinsNeeded < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
}