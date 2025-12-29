function minWindow(s: string, t: string): string {
    const need = new Map<string, number>();
    const window = new Map<string, number>();
    
    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }
    
    let left = 0;
    let right = 0;
    let valid = 0;
    let start = 0;
    let minLen = Infinity;
    
    while (right < s.length) {
        const char = s[right];
        right++;
        
        if (need.has(char)) {
            window.set(char, (window.get(char) || 0) + 1);
            if (window.get(char) === need.get(char)) {
                valid++;
            }
        }
        
        while (valid === need.size) {
            if (right - left < minLen) {
                start = left;
                minLen = right - left;
            }
            
            const leftChar = s[left];
            left++;
            
            if (need.has(leftChar)) {
                if (window.get(leftChar) === need.get(leftChar)) {
                    valid--;
                }
                window.set(leftChar, window.get(leftChar)! - 1);
            }
        }
    }
    
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}