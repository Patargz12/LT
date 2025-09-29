const findKthNumber = (m, n, k) => {
    let left = 1, right = m * n;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        let count = 0;
        for (let i = 1; i <= m; i++) {
            count += Math.min(Math.floor(mid / i), n);
        }
        
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};