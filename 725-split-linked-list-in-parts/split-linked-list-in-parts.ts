function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    
    const baseSize = Math.floor(length / k);
    const extra = length % k;
    
    const result: Array<ListNode | null> = [];
    current = head;
    
    for (let i = 0; i < k; i++) {
        result.push(current);
        const partSize = baseSize + (i < extra ? 1 : 0);
        
        for (let j = 0; j < partSize - 1; j++) {
            if (current) current = current.next;
        }
        
        if (current) {
            const next = current.next;
            current.next = null;
            current = next;
        }
    }
    
    return result;
}