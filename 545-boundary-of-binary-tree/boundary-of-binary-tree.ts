function boundaryOfBinaryTree(root: TreeNode | null): number[] {
  if (!root) return [];
  
  const result: number[] = [];
  const isLeaf = (node: TreeNode | null): boolean => 
    !!node && !node.left && !node.right;
  
  if (!isLeaf(root)) result.push(root.val);
  
  const addLeftBoundary = (node: TreeNode | null) => {
    let curr = node;
    while (curr) {
      if (!isLeaf(curr)) result.push(curr.val);
      curr = curr.left || curr.right;
    }
  };
  
  const addLeaves = (node: TreeNode | null) => {
    if (!node) return;
    if (isLeaf(node)) {
      result.push(node.val);
      return;
    }
    addLeaves(node.left);
    addLeaves(node.right);
  };
  
  const addRightBoundary = (node: TreeNode | null) => {
    const temp: number[] = [];
    let curr = node;
    while (curr) {
      if (!isLeaf(curr)) temp.push(curr.val);
      curr = curr.right || curr.left;
    }
    result.push(...temp.reverse());
  };
  
  addLeftBoundary(root.left);
  addLeaves(root);
  addRightBoundary(root.right);
  
  return result;
}