function findTilt(root: TreeNode | null): number {
    let totalTilt = 0
    function dfs(node: TreeNode | null): number {
        if (!node) return 0
        const leftSum = dfs(node.left)
        const rightSum = dfs(node.right)
        totalTilt += Math.abs(leftSum - rightSum)
        return node.val + leftSum + rightSum
    }
    dfs(root)
    return totalTilt
}