function longestUnivaluePath(root: TreeNode | null): number {
    let maxPath = 0

    function dfs(node: TreeNode | null): number {
        if (!node) return 0

        const left = dfs(node.left)
        const right = dfs(node.right)

        let leftPath = 0
        let rightPath = 0

        if (node.left && node.left.val === node.val) {
            leftPath = left + 1
        }

        if (node.right && node.right.val === node.val) {
            rightPath = right + 1
        }

        maxPath = Math.max(maxPath, leftPath + rightPath)
        return Math.max(leftPath, rightPath)
    }

    dfs(root)
    return maxPath
}
