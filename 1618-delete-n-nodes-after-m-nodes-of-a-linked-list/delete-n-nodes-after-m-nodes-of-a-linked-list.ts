function deleteNodes(head, m, n) {
    if (!head) return head;
    
    let current = head;
    
    while (current) {
        for (let i = 1; i < m && current; i++) {
            current = current.next;
        }
        
        if (!current) break;
        
        let temp = current;
        for (let i = 0; i <= n && temp; i++) {
            temp = temp.next;
        }
        
        current.next = temp;
        current = temp;
    }
    
    return head;
}