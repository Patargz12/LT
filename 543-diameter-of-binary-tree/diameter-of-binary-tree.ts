function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0;
    
    function dfs(node: TreeNode | null): number {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        diameter = Math.max(diameter, left + right);
        
        return Math.max(left, right) + 1;
    }
    
    dfs(root);
    return diameter;
}