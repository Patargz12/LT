function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    
    const mid = getMid(head);
    const left = sortList(head);
    const right = sortList(mid);
    
    return merge(left, right);
}

function getMid(head: ListNode): ListNode {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }
    
    if (prev) prev.next = null;
    return slow!;
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let curr = dummy;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    curr.next = l1 || l2;
    return dummy.next;
}