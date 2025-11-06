function closestKValues(root: TreeNode | null, target: number, k: number): number[] {
    const sorted: number[] = [];
    
    const inorder = (node: TreeNode | null) => {
        if (!node) return;
        inorder(node.left);
        sorted.push(node.val);
        inorder(node.right);
    };
    
    inorder(root);
    
    let left = 0;
    let right = sorted.length - 1;
    
    while (right - left >= k) {
        if (Math.abs(sorted[left] - target) > Math.abs(sorted[right] - target)) {
            left++;
        } else {
            right--;
        }
    }
    
    return sorted.slice(left, right + 1);
}