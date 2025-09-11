function diameterOfBinaryTree(root) {
    let maxDiameter = 0;
    
    function depth(node) {
        if (!node) return 0;
        
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        return Math.max(leftDepth, rightDepth) + 1;
    }
    
    depth(root);
    return maxDiameter;
}