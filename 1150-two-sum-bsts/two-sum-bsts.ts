function twoSumBSTs(root1: TreeNode | null, root2: TreeNode | null, target: number): boolean {
    const set = new Set<number>();
    
    const addToSet = (node: TreeNode | null) => {
        if (!node) return;
        set.add(node.val);
        addToSet(node.left);
        addToSet(node.right);
    };
    
    const search = (node: TreeNode | null): boolean => {
        if (!node) return false;
        if (set.has(target - node.val)) return true;
        return search(node.left) || search(node.right);
    };
    
    addToSet(root1);
    return search(root2);
}