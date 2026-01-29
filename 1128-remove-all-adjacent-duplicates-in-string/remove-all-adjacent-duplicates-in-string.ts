function removeDuplicates(s: string): string {
    const stack: string[] = [];
    
    for (const char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
}