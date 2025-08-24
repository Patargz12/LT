function hIndex(citations: number[]): number {
    const n = citations.length;
    let left = 0;
    let right = n - 1;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const papersFromMid = n - mid;
        
        if (citations[mid] >= papersFromMid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return n - left;
}