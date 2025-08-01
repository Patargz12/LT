function minMoves2(nums) {
    nums.sort((a, b) => a - b);
    const median = nums[Math.floor(nums.length / 2)];
    return nums.reduce((moves, num) => moves + Math.abs(num - median), 0);
}