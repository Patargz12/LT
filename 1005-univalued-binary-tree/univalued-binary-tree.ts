function isUnivalTree(root: TreeNode | null): boolean {
    if (!root) return true;
    
    const val = root.val;
    
    const dfs = (node: TreeNode | null): boolean => {
        if (!node) return true;
        if (node.val !== val) return false;
        return dfs(node.left) && dfs(node.right);
    };
    
    return dfs(root);
}