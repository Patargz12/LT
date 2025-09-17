function preorder(root: Node | null): number[] {
    let result: number[] = []
    
    function dfs(node: Node | null) {
        if (!node) return
        result.push(node.val)
        for (let child of node.children) {
            dfs(child)
        }
    }
    
    dfs(root)
    return result
}