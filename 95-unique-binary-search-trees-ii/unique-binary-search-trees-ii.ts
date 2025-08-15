const generateTrees = (n) => {
    if (n === 0) return [];
    
    const generate = (start, end) => {
        if (start > end) return [null];
        
        const result = [];
        
        for (let i = start; i <= end; i++) {
            const leftTrees = generate(start, i - 1);
            const rightTrees = generate(i + 1, end);
            
            for (const left of leftTrees) {
                for (const right of rightTrees) {
                    const root = new TreeNode(i, left, right);
                    result.push(root);
                }
            }
        }
        
        return result;
    };
    
    return generate(1, n);
};