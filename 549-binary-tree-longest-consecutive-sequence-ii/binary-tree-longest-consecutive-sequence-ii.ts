function longestConsecutive(root: TreeNode | null): number {
    let res = 0
    function dfs(node: TreeNode | null): [number, number] {
        if (!node) return [0, 0]
        let inc = 1, dec = 1
        if (node.left) {
            const [lInc, lDec] = dfs(node.left)
            if (node.val === node.left.val + 1) dec = Math.max(dec, lDec + 1)
            if (node.val === node.left.val - 1) inc = Math.max(inc, lInc + 1)
        }
        if (node.right) {
            const [rInc, rDec] = dfs(node.right)
            if (node.val === node.right.val + 1) dec = Math.max(dec, rDec + 1)
            if (node.val === node.right.val - 1) inc = Math.max(inc, rInc + 1)
        }
        res = Math.max(res, inc + dec - 1)
        return [inc, dec]
    }
    dfs(root)
    return res
}
