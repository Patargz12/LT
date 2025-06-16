const partition = (head, x) => {
    const smallerHead = { next: null };
    const greaterHead = { next: null };
    
    let smaller = smallerHead;
    let greater = greaterHead;
    
    while (head) {
        if (head.val < x) {
            smaller.next = head;
            smaller = smaller.next;
        } else {
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }
    
    greater.next = null;
    smaller.next = greaterHead.next;
    
    return smallerHead.next;
};