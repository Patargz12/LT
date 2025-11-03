function longestConsecutive(root) {
    let maxLength = 0;
    
    function dfs(node, parentVal, length) {
        if (!node) return;
        
        length = (node.val === parentVal + 1) ? length + 1 : 1;
        maxLength = Math.max(maxLength, length);
        
        dfs(node.left, node.val, length);
        dfs(node.right, node.val, length);
    }
    
    if (root) {
        dfs(root, root.val - 1, 0);
    }
    
    return maxLength;
}