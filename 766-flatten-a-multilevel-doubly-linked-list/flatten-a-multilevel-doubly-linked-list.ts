const flatten = (head) => {
    if (!head) return head;
    
    const stack = [];
    let curr = head;
    
    while (curr) {
        if (curr.child) {
            if (curr.next) {
                stack.push(curr.next);
            }
            
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        }
        
        if (!curr.next && stack.length) {
            const next = stack.pop();
            curr.next = next;
            next.prev = curr;
        }
        
        curr = curr.next;
    }
    
    return head;
};