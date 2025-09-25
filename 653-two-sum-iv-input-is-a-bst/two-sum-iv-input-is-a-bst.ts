const findTarget = (root, k) => {
    const values = [];
    
    // In-order traversal to get sorted array
    const inOrder = (node) => {
        if (!node) return;
        inOrder(node.left);
        values.push(node.val);
        inOrder(node.right);
    };
    
    inOrder(root);
    
    // Two-pointer technique on sorted array
    let left = 0;
    let right = values.length - 1;
    
    while (left < right) {
        const sum = values[left] + values[right];
        if (sum === k) return true;
        if (sum < k) left++;
        else right--;
    }
    
    return false;
};

// Alternative O(n) space with Set approach
const findTargetSet = (root, k) => {
    const seen = new Set();
    
    const dfs = (node) => {
        if (!node) return false;
        
        const complement = k - node.val;
        if (seen.has(complement)) return true;
        
        seen.add(node.val);
        
        return dfs(node.left) || dfs(node.right);
    };
    
    return dfs(root);
};