function decodeString(s: string): string {
    const stack: string[] = [];
    const countStack: number[] = [];
    let currentStr = '';
    let k = 0;
    
    for (const char of s) {
        if (char >= '0' && char <= '9') {
            k = k * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push(currentStr);
            countStack.push(k);
            currentStr = '';
            k = 0;
        } else if (char === ']') {
            const repeatCount = countStack.pop()!;
            const prevStr = stack.pop()!;
            currentStr = prevStr + currentStr.repeat(repeatCount);
        } else {
            currentStr += char;
        }
    }
    
    return currentStr;
}