function repeatedSubstringPattern(s: string): boolean {
    const n = s.length;
    
    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const pattern = s.substring(0, len);
            let isValid = true;
            
            for (let i = len; i < n; i += len) {
                if (s.substring(i, i + len) !== pattern) {
                    isValid = false;
                    break;
                }
            }
            
            if (isValid) return true;
        }
    }
    
    return false;
}