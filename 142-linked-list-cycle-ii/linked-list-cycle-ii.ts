function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
        
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next!;
                fast = fast.next!;
            }
            return slow;
        }
    }
    
    return null;
}