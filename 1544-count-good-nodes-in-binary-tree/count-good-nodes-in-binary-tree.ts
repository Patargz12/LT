function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;
    
    const dfs = (node: TreeNode | null, maxSoFar: number): number => {
        if (!node) return 0;
        
        let count = node.val >= maxSoFar ? 1 : 0;
        const newMax = Math.max(maxSoFar, node.val);
        
        count += dfs(node.left, newMax);
        count += dfs(node.right, newMax);
        
        return count;
    };
    
    return dfs(root, root.val);
}