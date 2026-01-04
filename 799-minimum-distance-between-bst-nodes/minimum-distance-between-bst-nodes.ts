function minDiffInBST(root: TreeNode | null): number {
    let minDiff = Infinity;
    let prev: number | null = null;
    
    function inorder(node: TreeNode | null): void {
        if (!node) return;
        
        inorder(node.left);
        
        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }
        prev = node.val;
        
        inorder(node.right);
    }
    
    inorder(root);
    return minDiff;
}