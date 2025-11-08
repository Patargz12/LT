function diameter(root: _Node | null): number {
    let maxDiameter = 0;
    
    function dfs(node: _Node | null): number {
        if (!node) return 0;
        
        const childDepths: number[] = [];
        for (const child of node.children) {
            childDepths.push(dfs(child));
        }
        
        childDepths.sort((a, b) => b - a);
        
        const diameterThroughNode = (childDepths[0] || 0) + (childDepths[1] || 0);
        maxDiameter = Math.max(maxDiameter, diameterThroughNode);
        
        return (childDepths[0] || 0) + 1;
    }
    
    dfs(root);
    return maxDiameter;
}