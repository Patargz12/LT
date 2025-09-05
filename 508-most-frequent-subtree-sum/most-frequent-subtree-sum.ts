function findFrequentTreeSum(root: TreeNode | null): number[] {
    const sumCount = new Map<number, number>();
    let maxFreq = 0;
    
    function getSubtreeSum(node: TreeNode | null): number {
        if (!node) return 0;
        
        const sum = node.val + getSubtreeSum(node.left) + getSubtreeSum(node.right);
        const count = (sumCount.get(sum) || 0) + 1;
        sumCount.set(sum, count);
        maxFreq = Math.max(maxFreq, count);
        
        return sum;
    }
    
    getSubtreeSum(root);
    
    const result: number[] = [];
    for (const [sum, count] of sumCount) {
        if (count === maxFreq) {
            result.push(sum);
        }
    }
    
    return result;
}