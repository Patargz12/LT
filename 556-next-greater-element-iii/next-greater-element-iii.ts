function nextGreaterElement(n) {
    const digits = n.toString().split('');
    const len = digits.length;
    
    let i = len - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }
    
    if (i < 0) return -1;
    
    let j = len - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }
    
    [digits[i], digits[j]] = [digits[j], digits[i]];
    
    const left = digits.slice(0, i + 1);
    const right = digits.slice(i + 1).reverse();
    
    const result = parseInt(left.concat(right).join(''));
    
    return result > 2147483647 ? -1 : result;
}