const monotoneIncreasingDigits = (n: number): number => {
    const digits = Array.from(String(n), Number);
    let mark = digits.length;
    
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i - 1] > digits[i]) {
            mark = i;
            digits[i - 1]--;
        }
    }
    
    for (let i = mark; i < digits.length; i++) {
        digits[i] = 9;
    }
    
    return Number(digits.join(''));
};