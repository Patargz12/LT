const distanceK = (root, target, k) => {
    const parentMap = new Map();
    
    const buildParentMap = (node, parent) => {
        if (!node) return;
        parentMap.set(node, parent);
        buildParentMap(node.left, node);
        buildParentMap(node.right, node);
    };
    
    buildParentMap(root, null);
    
    const result = [];
    const visited = new Set();
    const queue = [[target, 0]];
    visited.add(target);
    
    while (queue.length) {
        const [node, dist] = queue.shift();
        
        if (dist === k) {
            result.push(node.val);
            continue;
        }
        
        const neighbors = [node.left, node.right, parentMap.get(node)];
        
        for (const neighbor of neighbors) {
            if (neighbor && !visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, dist + 1]);
            }
        }
    }
    
    return result;
};