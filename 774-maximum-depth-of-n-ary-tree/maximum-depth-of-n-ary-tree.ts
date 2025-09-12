function maxDepth(root: Node | null): number {
    if (!root) return 0
    let depth = 0
    for (let child of root.children) {
        depth = Math.max(depth, maxDepth(child))
    }
    return depth + 1
}