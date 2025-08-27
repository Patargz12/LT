function maxEnvelopes(envelopes: number[][]): number {
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    
    const heights = envelopes.map(env => env[1]);
    const tails: number[] = [];
    
    for (const height of heights) {
        let left = 0, right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < height) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        if (left === tails.length) {
            tails.push(height);
        } else {
            tails[left] = height;
        }
    }
    
    return tails.length;
}