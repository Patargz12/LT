function plusOne(head) {
    if (!head) return head;
    
    function helper(node) {
        if (!node) return 1;
        
        const carry = helper(node.next);
        const sum = node.val + carry;
        node.val = sum % 10;
        return Math.floor(sum / 10);
    }
    
    const carry = helper(head);
    
    if (carry === 1) {
        const newHead = { val: 1, next: head };
        return newHead;
    }
    
    return head;
}