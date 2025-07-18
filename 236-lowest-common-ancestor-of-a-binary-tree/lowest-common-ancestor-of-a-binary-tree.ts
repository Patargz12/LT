const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) {
        return root;
    }
    
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    
    if (left && right) {
        return root;
    }
    
    return left || right;
};

const lowestCommonAncestorIterative = (root, p, q) => {
    const parent = new Map();
    const stack = [root];
    parent.set(root, null);
    
    while (!parent.has(p) || !parent.has(q)) {
        const node = stack.pop();
        
        if (node.left) {
            parent.set(node.left, node);
            stack.push(node.left);
        }
        
        if (node.right) {
            parent.set(node.right, node);
            stack.push(node.right);
        }
    }
    
    const ancestors = new Set();
    while (p) {
        ancestors.add(p);
        p = parent.get(p);
    }
    
    while (!ancestors.has(q)) {
        q = parent.get(q);
    }
    
    return q;
};