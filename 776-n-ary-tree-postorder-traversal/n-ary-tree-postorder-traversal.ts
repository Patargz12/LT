function postorder(root: Node | null): number[] {
    let result: number[] = []
    
    function dfs(node: Node | null) {
        if (!node) return
        for (let child of node.children) {
            dfs(child)
        }
        result.push(node.val)
    }
    
    dfs(root)
    return result
}