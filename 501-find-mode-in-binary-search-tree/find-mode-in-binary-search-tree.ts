const findMode = (root) => {
    let maxCount = 0;
    let currentCount = 0;
    let prevVal = null;
    const modes = [];
    
    const inorder = (node) => {
        if (!node) return;
        
        inorder(node.left);
        
        if (prevVal === node.val) {
            currentCount++;
        } else {
            currentCount = 1;
            prevVal = node.val;
        }
        
        if (currentCount > maxCount) {
            maxCount = currentCount;
            modes.length = 0;
            modes.push(node.val);
        } else if (currentCount === maxCount) {
            modes.push(node.val);
        }
        
        inorder(node.right);
    };
    
    inorder(root);
    return modes;
};