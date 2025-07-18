const kthSmallest = (root, k) => {
    let count = 0;
    let result = null;
    
    const inorder = (node) => {
        if (!node || result !== null) return;
        
        inorder(node.left);
        
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        
        inorder(node.right);
    };
    
    inorder(root);
    return result;
};

const kthSmallestIterative = (root, k) => {
    const stack = [];
    let current = root;
    let count = 0;
    
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        count++;
        
        if (count === k) {
            return current.val;
        }
        
        current = current.right;
    }
};