const arrangeCoins = n => {
    let left = 0, right = n;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const coinsNeeded = (mid * (mid + 1)) / 2;
        
        if (coinsNeeded === n) return mid;
        if (coinsNeeded < n) left = mid + 1;
        else right = mid - 1;
    }
    
    return right;
};