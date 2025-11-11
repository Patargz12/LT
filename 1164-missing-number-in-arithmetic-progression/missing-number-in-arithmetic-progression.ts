function missingNumber(arr) {
    const n = arr.length;
    const diff = Math.floor((arr[n - 1] - arr[0]) / n);
    
    for (let i = 1; i < n; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return arr[i - 1] + diff;
        }
    }
    
    return arr[0] + diff;
}