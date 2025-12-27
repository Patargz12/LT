function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const getLength = (node: ListNode | null): number => {
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    };
    
    const reverse = (start: ListNode, end: ListNode): ListNode => {
        let prev: ListNode | null = null;
        let curr: ListNode | null = start;
        
        while (curr !== end) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev!;
    };
    
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;
    const length = getLength(head);
    const groups = Math.floor(length / k);
    
    for (let i = 0; i < groups; i++) {
        let start = curr;
        let end = curr;
        
        for (let j = 0; j < k; j++) {
            end = end!.next;
        }
        
        const newStart = reverse(start!, end!);
        prev.next = newStart;
        start!.next = end;
        prev = start!;
        curr = end;
    }
    
    return dummy.next;
}