const findMaximumXOR = (nums) => {
    let maxXor = 0;
    let mask = 0;
    
    for (let i = 30; i >= 0; i--) {
        mask |= (1 << i);
        const prefixes = new Set();
        
        for (const num of nums) {
            prefixes.add(num & mask);
        }
        
        const candidate = maxXor | (1 << i);
        
        for (const prefix of prefixes) {
            const prefixNum = prefix as number;
            const target = candidate ^ prefixNum;
            if (prefixes.has(target)) {
                maxXor = candidate;
                break;
            }
        }
    }
    
    return maxXor;
};