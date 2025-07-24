const rob = (root) => {
    const dfs = (node) => {
        if (!node) return [0, 0];
        
        const [leftRob, leftNotRob] = dfs(node.left);
        const [rightRob, rightNotRob] = dfs(node.right);
        
        const robCurrent = node.val + leftNotRob + rightNotRob;
        const notRobCurrent = Math.max(leftRob, leftNotRob) + Math.max(rightRob, rightNotRob);
        
        return [robCurrent, notRobCurrent];
    };
    
    const [robRoot, notRobRoot] = dfs(root);
    return Math.max(robRoot, notRobRoot);
};