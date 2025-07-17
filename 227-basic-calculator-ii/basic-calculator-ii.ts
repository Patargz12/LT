function calculate(s) {
    const stack = [];
    let number = 0;
    let operation = '+';
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char >= '0' && char <= '9') {
            number = number * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0));
        }
        
        if (char === '+' || char === '-' || char === '*' || char === '/' || i === s.length - 1) {
            if (operation === '+') {
                stack.push(number);
            } else if (operation === '-') {
                stack.push(-number);
            } else if (operation === '*') {
                stack.push(stack.pop() * number);
            } else if (operation === '/') {
                const prev = stack.pop();
                stack.push(prev >= 0 ? Math.floor(prev / number) : Math.ceil(prev / number));
            }
            
            operation = char;
            number = 0;
        }
    }
    
    return stack.reduce((sum, num) => sum + num, 0);
}
