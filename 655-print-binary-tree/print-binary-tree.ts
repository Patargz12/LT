const printTree = (root) => {
    const getHeight = (node) => {
        if (!node) return 0;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
    };
    
    const height = getHeight(root);
    const cols = (1 << height) - 1;
    const res = Array(height).fill(null).map(() => Array(cols).fill(""));
    
    const fill = (node, row, col) => {
        if (!node) return;
        res[row][col] = node.val.toString();
        if (node.left) fill(node.left, row + 1, col - (1 << (height - row - 2)));
        if (node.right) fill(node.right, row + 1, col + (1 << (height - row - 2)));
    };
    
    fill(root, 0, Math.floor(cols / 2));
    return res;
};