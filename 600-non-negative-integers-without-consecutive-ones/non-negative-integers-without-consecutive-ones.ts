const findIntegers = (n) => {
    const bits = n.toString(2);
    const len = bits.length;
    
    const fib = new Array(len + 2);
    fib[0] = 1;
    fib[1] = 2;
    for (let i = 2; i < len + 2; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    let result = 0;
    let prevBit = 0;
    
    for (let i = 0; i < len; i++) {
        if (bits[i] === '1') {
            result += fib[len - i - 1];
            
            if (prevBit === 1) {
                return result;
            }
            
            prevBit = 1;
        } else {
            prevBit = 0;
        }
    }
    
    return result + 1;
};