function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }
    
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;
    
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    let left = head;
    let right = prev;
    
    while (right) {
        if (left!.val !== right.val) return false;
        left = left!.next;
        right = right.next;
    }
    
    return true;
}