function findRoot(tree: _Node[]): _Node | null {
    const children = new Set<_Node>();
    
    for (const node of tree) {
        for (const child of node.children) {
            children.add(child);
        }
    }
    
    for (const node of tree) {
        if (!children.has(node)) return node;
    }
    
    return null;
}