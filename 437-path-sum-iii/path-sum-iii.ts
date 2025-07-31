const pathSum = (root, targetSum) => {
    const prefixSumCount = new Map([[0, 1]]);
    
    const dfs = (node, currentSum) => {
        if (!node) return 0;
        
        currentSum += node.val;
        const pathCount = prefixSumCount.get(currentSum - targetSum) || 0;
        
        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
        
        const result = pathCount + dfs(node.left, currentSum) + dfs(node.right, currentSum);
        
        prefixSumCount.set(currentSum, prefixSumCount.get(currentSum) - 1);
        
        return result;
    };
    
    return dfs(root, 0);
};