function allPossibleFBT(n: number): TreeNode[] {
    if (n % 2 === 0) return []
    const memo = new Map<number, TreeNode[]>()
    const dfs = (nodes: number): TreeNode[] => {
        if (memo.has(nodes)) return memo.get(nodes)!
        if (nodes === 1) return [new TreeNode(0)]
        const res: TreeNode[] = []
        for (let left = 1; left < nodes; left += 2) {
            const right = nodes - 1 - left
            for (const l of dfs(left)) {
                for (const r of dfs(right)) {
                    res.push(new TreeNode(0, l, r))
                }
            }
        }
        memo.set(nodes, res)
        return res
    }
    return dfs(n)
}