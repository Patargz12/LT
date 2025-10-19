const dominantIndex = (nums: number[]): number => {
    let maxIdx = 0;
    let max = nums[0];
    let secondMax = -1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
            maxIdx = i;
        } else if (nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }
    
    return max >= 2 * secondMax ? maxIdx : -1;
};