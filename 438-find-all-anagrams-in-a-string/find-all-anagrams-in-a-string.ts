const findAnagrams = (s, p) => {
    if (s.length < p.length) return [];
    
    const result = [];
    const pCount = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    
    for (const char of p) {
        pCount[char.charCodeAt(0) - 97]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        windowCount[s.charCodeAt(i) - 97]++;
        
        if (i >= p.length) {
            windowCount[s.charCodeAt(i - p.length) - 97]--;
        }
        
        if (i >= p.length - 1 && arraysEqual(pCount, windowCount)) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
};

const arraysEqual = (a, b) => {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
};