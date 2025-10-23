function maxProduct(root: TreeNode | null): number {
    const mod = 1e9 + 7
    const sums: number[] = []
    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0
        const sum = node.val + dfs(node.left) + dfs(node.right)
        sums.push(sum)
        return sum
    }
    const total = dfs(root)
    let maxProd = 0
    for (const s of sums) {
        maxProd = Math.max(maxProd, s * (total - s))
    }
    return maxProd % mod
}