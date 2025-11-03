function findPermutation(s) {
    const n = s.length + 1;
    const result = [];
    let stack = [];
    
    for (let i = 0; i <= s.length; i++) {
        stack.push(i + 1);
        
        if (i === s.length || s[i] === 'I') {
            while (stack.length) {
                result.push(stack.pop());
            }
        }
    }
    
    return result;
}