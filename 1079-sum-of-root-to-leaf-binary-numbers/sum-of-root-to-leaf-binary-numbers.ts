function sumRootToLeaf(root: TreeNode | null): number {
    let sum = 0;
    
    const dfs = (node: TreeNode | null, currentVal: number): void => {
        if (!node) return;
        
        currentVal = (currentVal << 1) | node.val;
        
        if (!node.left && !node.right) {
            sum += currentVal;
            return;
        }
        
        dfs(node.left, currentVal);
        dfs(node.right, currentVal);
    };
    
    dfs(root, 0);
    return sum;
}