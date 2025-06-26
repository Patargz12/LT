function sortedListToBST(head: ListNode | null): TreeNode | null {
  const values: number[] = [];

  // Convert linked list to array
  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  // Recursive function to build BST
  function buildBST(left: number, right: number): TreeNode | null {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(values[mid]);

    node.left = buildBST(left, mid - 1);
    node.right = buildBST(mid + 1, right);

    return node;
  }

  return buildBST(0, values.length - 1);
}
