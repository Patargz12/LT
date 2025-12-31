function decodeString(s: string): string {
    const stack: string[] = [];
    
    for (const char of s) {
        if (char !== ']') {
            stack.push(char);
        } else {
            let str = '';
            while (stack[stack.length - 1] !== '[') {
                str = stack.pop() + str;
            }
            stack.pop();
            
            let num = '';
            while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
                num = stack.pop() + num;
            }
            
            stack.push(str.repeat(Number(num)));
        }
    }
    
    return stack.join('');
}