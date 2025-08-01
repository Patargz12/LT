function findSubstringInWraproundString(s) {
    const maxLen = new Array(26).fill(0);
    let length = 1;
    
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1 || 
                      s.charCodeAt(i - 1) - s.charCodeAt(i) === 25)) {
            length++;
        } else {
            length = 1;
        }
        
        const idx = s.charCodeAt(i) - 97;
        maxLen[idx] = Math.max(maxLen[idx], length);
    }
    
    return maxLen.reduce((sum, len) => sum + len, 0);
}