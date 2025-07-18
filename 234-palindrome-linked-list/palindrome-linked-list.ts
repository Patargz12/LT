const isPalindrome = (head) => {
    if (!head || !head.next) return true;
    
    const findMiddle = (node) => {
        let slow = node;
        let fast = node;
        
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow;
    };
    
    const reverseList = (node) => {
        let prev = null;
        let current = node;
        
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        return prev;
    };
    
    const middle = findMiddle(head);
    const secondHalf = reverseList(middle.next);
    
    let p1 = head;
    let p2 = secondHalf;
    
    while (p2) {
        if (p1.val !== p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    
    return true;
};