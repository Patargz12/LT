function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;
    
    function dfs(node: TreeNode | null): number {
        if (!node) return 0;
        
        const leftMax = Math.max(0, dfs(node.left));
        const rightMax = Math.max(0, dfs(node.right));
        
        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);
        
        return node.val + Math.max(leftMax, rightMax);
    }
    
    dfs(root);
    return maxSum;
}