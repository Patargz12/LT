const addOneRow = (root, val, depth) => {
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }
    
    const queue = [{node: root, level: 1}];
    
    while (queue.length > 0) {
        const {node, level} = queue.shift();
        
        if (level === depth - 1) {
            const newLeft = new TreeNode(val, node.left, null);
            const newRight = new TreeNode(val, null, node.right);
            node.left = newLeft;
            node.right = newRight;
        } else if (level < depth - 1) {
            if (node.left) queue.push({node: node.left, level: level + 1});
            if (node.right) queue.push({node: node.right, level: level + 1});
        }
    }
    
    return root;
};

const addOneRowDFS = (root, val, depth) => {
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }
    
    const dfs = (node, currentDepth) => {
        if (!node) return;
        
        if (currentDepth === depth - 1) {
            node.left = new TreeNode(val, node.left, null);
            node.right = new TreeNode(val, null, node.right);
        } else {
            dfs(node.left, currentDepth + 1);
            dfs(node.right, currentDepth + 1);
        }
    };
    
    dfs(root, 1);
    return root;
};