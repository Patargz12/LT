function insert(head, insertVal) {
    const newNode = { val: insertVal, next: null };
    
    if (!head) {
        newNode.next = newNode;
        return newNode;
    }
    
    if (head.next === head) {
        head.next = newNode;
        newNode.next = head;
        return head;
    }
    
    let curr = head;
    let next = head.next;
    
    while (next !== head) {
        if (curr.val <= insertVal && insertVal <= next.val) {
            break;
        }
        if (curr.val > next.val) {
            if (insertVal >= curr.val || insertVal <= next.val) {
                break;
            }
        }
        curr = next;
        next = next.next;
    }
    
    curr.next = newNode;
    newNode.next = next;
    return head;
}