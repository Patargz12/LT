const maxPathSum = (root) => {
    let maxSum = -Infinity;
    
    const dfs = (node) => {
        if (!node) return 0;
        
        const left = Math.max(0, dfs(node.left));
        const right = Math.max(0, dfs(node.right));
        
        const currentPathSum = node.val + left + right;
        maxSum = Math.max(maxSum, currentPathSum);
        
        return node.val + Math.max(left, right);
    };
    
    dfs(root);
    return maxSum;
};