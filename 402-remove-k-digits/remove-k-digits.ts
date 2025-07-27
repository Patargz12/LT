var removeKdigits = function(num, k) {
    const stack = [];
    let toRemove = k;
    
    for (const digit of num) {
        while (stack.length && stack[stack.length - 1] > digit && toRemove > 0) {
            stack.pop();
            toRemove--;
        }
        stack.push(digit);
    }
    
    while (toRemove > 0) {
        stack.pop();
        toRemove--;
    }
    
    let result = stack.join('').replace(/^0+/, '');
    return result || '0';
};