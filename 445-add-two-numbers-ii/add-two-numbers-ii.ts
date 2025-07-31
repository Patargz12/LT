const addTwoNumbers = (l1, l2) => {
    const stack1 = [];
    const stack2 = [];
    
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let carry = 0;
    let result = null;
    
    while (stack1.length || stack2.length || carry) {
        const sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry;
        carry = Math.floor(sum / 10);
        
        const newNode = { val: sum % 10, next: result };
        result = newNode;
    }
    
    return result;
};