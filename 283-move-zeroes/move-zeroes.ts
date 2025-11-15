function moveZeroes(nums: number[]): void {
    let writePos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writePos++] = nums[i];
        }
    }
    
    while (writePos < nums.length) {
        nums[writePos++] = 0;
    }
}