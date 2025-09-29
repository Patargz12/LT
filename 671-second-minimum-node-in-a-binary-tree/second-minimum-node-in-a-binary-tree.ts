const findSecondMinimumValue = (root) => {
    const min = root.val;
    let secondMin = Infinity;
    
    const dfs = (node) => {
        if (!node) return;
        
        if (node.val > min && node.val < secondMin) {
            secondMin = node.val;
        }
        
        if (node.val === min) {
            dfs(node.left);
            dfs(node.right);
        }
    };
    
    dfs(root);
    
    return secondMin === Infinity ? -1 : secondMin;
};