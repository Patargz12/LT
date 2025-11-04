function maximumAverageSubtree(root: TreeNode | null): number {
  let maxAvg = 0;
  
  const dfs = (node: TreeNode | null): [number, number] => {
    if (!node) return [0, 0];
    
    const [leftSum, leftCount] = dfs(node.left);
    const [rightSum, rightCount] = dfs(node.right);
    
    const sum = leftSum + rightSum + node.val;
    const count = leftCount + rightCount + 1;
    const avg = sum / count;
    
    maxAvg = Math.max(maxAvg, avg);
    
    return [sum, count];
  };
  
  dfs(root);
  return maxAvg;
}