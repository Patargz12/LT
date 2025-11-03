function parseTernary(expression) {
    const stack = [];
    
    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression[i];
        
        if (stack.length && stack[stack.length - 1] === '?') {
            stack.pop();
            const first = stack.pop();
            stack.pop();
            const second = stack.pop();
            
            if (char === 'T') {
                stack.push(first);
            } else {
                stack.push(second);
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack[0];
}