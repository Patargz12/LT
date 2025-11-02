function numKLenSubstrNoRepeats(s: string, k: number): number {
    if (k > s.length) return 0;
    
    let count = 0;
    
    for (let i = 0; i <= s.length - k; i++) {
        const charSet = new Set<string>();
        
        for (let j = i; j < i + k; j++) {
            charSet.add(s[j]);
        }
        
        if (charSet.size === k) {
            count++;
        }
    }
    
    return count;
}