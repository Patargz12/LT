function findBottomLeftValue(root: TreeNode | null): number {
    const queue: TreeNode[] = [root!];
    let leftmost: number = root!.val;
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            
            if (i === 0) {
                leftmost = node.val;
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return leftmost;
}