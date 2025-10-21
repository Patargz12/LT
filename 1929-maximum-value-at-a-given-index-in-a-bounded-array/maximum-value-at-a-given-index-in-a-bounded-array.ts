function maxValue(n: number, index: number, maxSum: number): number {
    let left = 1;
    let right = maxSum;
    
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        
        if (getSum(mid) <= maxSum) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
    
    function getSum(peak: number): number {
        let sum = peak;
        
        const leftCount = index;
        if (peak > leftCount) {
            sum += (peak - 1 + peak - leftCount) * leftCount / 2;
        } else {
            sum += (peak - 1) * peak / 2 + (leftCount - peak + 1);
        }
        
        const rightCount = n - index - 1;
        if (peak > rightCount) {
            sum += (peak - 1 + peak - rightCount) * rightCount / 2;
        } else {
            sum += (peak - 1) * peak / 2 + (rightCount - peak + 1);
        }
        
        return sum;
    }
}