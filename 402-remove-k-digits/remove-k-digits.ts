function removeKdigits(num: string, k: number): string {
    const stack: string[] = [];
    let toRemove = k;
    
    for (const digit of num) {
        while (stack.length > 0 && stack[stack.length - 1] > digit && toRemove > 0) {
            stack.pop();
            toRemove--;
        }
        stack.push(digit);
    }
    
    while (toRemove > 0) {
        stack.pop();
        toRemove--;
    }
    
    let result = stack.join('');
    let i = 0;
    while (i < result.length && result[i] === '0') {
        i++;
    }
    result = result.slice(i);
    
    return result === '' ? '0' : result;
}