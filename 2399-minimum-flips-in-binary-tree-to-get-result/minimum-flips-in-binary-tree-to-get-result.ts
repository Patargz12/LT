function minimumFlips(root: TreeNode | null, result: boolean): number {
    function dfs(node: TreeNode | null): [number, number] {
        if (!node) return [0, 0]
        if (node.val <= 1) {
            return node.val === 1 ? [0, 1] : [1, 0]
        }
        if (node.val === 5) {
            const [t, f] = dfs(node.left ?? node.right)
            return [f, t]
        }
        const [lt, lf] = dfs(node.left)
        const [rt, rf] = dfs(node.right)
        if (node.val === 2) {
            return [Math.min(lt + rt, lt + rf, lf + rt), lf + rf]
        }
        if (node.val === 3) {
            return [lt + rt, Math.min(lf + rt, lt + rf, lf + rf)]
        }
        return [Math.min(lt + rf, lf + rt), Math.min(lt + rt, lf + rf)]
    }
    const [t, f] = dfs(root)
    return result ? t : f
}