function countUnivalSubtrees(root: TreeNode | null): number {
  let count = 0;
  
  const isUnivalue = (node: TreeNode | null): boolean => {
    if (!node) return true;
    
    const leftUni = isUnivalue(node.left);
    const rightUni = isUnivalue(node.right);
    
    // Check if current subtree is univalue
    if (leftUni && rightUni) {
      if (node.left && node.left.val !== node.val) return false;
      if (node.right && node.right.val !== node.val) return false;
      
      count++;
      return true;
    }
    
    return false;
  };
  
  isUnivalue(root);
  return count;
}