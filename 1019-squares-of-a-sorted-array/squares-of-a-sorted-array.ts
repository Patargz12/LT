function sortedSquares(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let pos = n - 1;
    
    while (left <= right) {
        const leftSq = nums[left] * nums[left];
        const rightSq = nums[right] * nums[right];
        
        if (leftSq > rightSq) {
            result[pos] = leftSq;
            left++;
        } else {
            result[pos] = rightSq;
            right--;
        }
        pos--;
    }
    
    return result;
}