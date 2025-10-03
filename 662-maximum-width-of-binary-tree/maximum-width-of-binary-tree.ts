var widthOfBinaryTree = function(root) {
    if (!root) return 0;
    
    let maxWidth = 0;
    const queue = [[root, 0]]; // [node, position]
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const firstPos = queue[0][1];
        let leftmost = firstPos;
        let rightmost = firstPos;
        
        for (let i = 0; i < levelSize; i++) {
            const [node, pos] = queue.shift();
            rightmost = pos;
            
            // Normalize position to prevent overflow
            const normalizedPos = pos - firstPos;
            
            if (node.left) {
                queue.push([node.left, 2 * normalizedPos]);
            }
            if (node.right) {
                queue.push([node.right, 2 * normalizedPos + 1]);
            }
        }
        
        maxWidth = Math.max(maxWidth, rightmost - leftmost + 1);
    }
    
    return maxWidth;
};