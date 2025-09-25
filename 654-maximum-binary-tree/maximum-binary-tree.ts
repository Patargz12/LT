const constructMaximumBinaryTree = (nums) => {
    const build = (left, right) => {
        if (left > right) return null;
        
        // Find max value and its index in current range
        let maxIdx = left;
        for (let i = left + 1; i <= right; i++) {
            if (nums[i] > nums[maxIdx]) {
                maxIdx = i;
            }
        }
        
        const root = new TreeNode(nums[maxIdx]);
        root.left = build(left, maxIdx - 1);
        root.right = build(maxIdx + 1, right);
        
        return root;
    };
    
    return build(0, nums.length - 1);
};

// Optimized stack-based solution O(n) average case
const constructMaximumBinaryTreeStack = (nums) => {
    const stack = [];
    
    for (const num of nums) {
        const curr = new TreeNode(num);
        
        // Pop smaller elements and make the last popped as left child
        while (stack.length && stack[stack.length - 1].val < num) {
            curr.left = stack.pop();
        }
        
        // If stack not empty, current becomes right child of stack top
        if (stack.length) {
            stack[stack.length - 1].right = curr;
        }
        
        stack.push(curr);
    }
    
    return stack[0];
};