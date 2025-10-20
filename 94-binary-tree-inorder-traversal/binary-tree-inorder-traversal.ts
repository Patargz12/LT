function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  
  function traverse(node: TreeNode | null): void {
    if (!node) return;
    
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }
  
  traverse(root);
  return result;
}