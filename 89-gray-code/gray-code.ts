const grayCode = (n) => {
    const result = [0];
    
    for (let i = 0; i < n; i++) {
        const size = result.length;
        const bit = 1 << i;
        
        for (let j = size - 1; j >= 0; j--) {
            result.push(result[j] | bit);
        }
    }
    
    return result;
};