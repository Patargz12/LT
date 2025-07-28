const sumOfLeftLeaves = (root) => {
    if (!root) return 0;
    
    let sum = 0;
    
    const dfs = (node, isLeft) => {
        if (!node) return;
        
        if (!node.left && !node.right && isLeft) {
            sum += node.val;
            return;
        }
        
        dfs(node.left, true);
        dfs(node.right, false);
    };
    
    dfs(root, false);
    return sum;
};

const sumOfLeftLeavesIterative = (root) => {
    if (!root) return 0;
    
    let sum = 0;
    const stack = [[root, false]];
    
    while (stack.length) {
        const [node, isLeft] = stack.pop();
        
        if (!node.left && !node.right && isLeft) {
            sum += node.val;
        }
        
        if (node.right) stack.push([node.right, false]);
        if (node.left) stack.push([node.left, true]);
    }
    
    return sum;
};