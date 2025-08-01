function find132pattern(nums) {
    const stack = [];
    let third = -Infinity;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < third) return true;
        
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            third = stack.pop();
        }
        
        stack.push(nums[i]);
    }
    
    return false;
}