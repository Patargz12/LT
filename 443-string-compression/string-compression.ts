const compress = chars => {
    let write = 0;
    let i = 0;
    
    while (i < chars.length) {
        const char = chars[i];
        let count = 1;
        
        while (i + count < chars.length && chars[i + count] === char) {
            count++;
        }
        
        chars[write++] = char;
        
        if (count > 1) {
            const countStr = count.toString();
            for (const digit of countStr) {
                chars[write++] = digit;
            }
        }
        
        i += count;
    }
    
    return write;
};