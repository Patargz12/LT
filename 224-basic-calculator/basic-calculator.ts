function calculate(s: string): number {
    const stack: number[] = [];
    let result = 0;
    let number = 0;
    let sign = 1;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char >= '0' && char <= '9') {
            number = number * 10 + (char.charCodeAt(0) - '0'.charCodeAt(0));
        } else if (char === '+') {
            result += sign * number;
            number = 0;
            sign = 1;
        } else if (char === '-') {
            result += sign * number;
            number = 0;
            sign = -1;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * number;
            number = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }
    
    return result + sign * number;
}