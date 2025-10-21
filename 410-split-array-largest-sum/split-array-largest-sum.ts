function splitArray(nums: number[], k: number): number {
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let splits = 1;
        let currentSum = 0;
        
        for (const num of nums) {
            if (currentSum + num > mid) {
                splits++;
                currentSum = num;
            } else {
                currentSum += num;
            }
        }
        
        if (splits <= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}