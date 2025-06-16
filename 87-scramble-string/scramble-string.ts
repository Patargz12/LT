/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    
    const memo = new Map();
    
    const solve = (str1, str2) => {
        if (str1 === str2) return true;
        if (str1.length !== str2.length) return false;
        
        const key = str1 + '#' + str2;
        if (memo.has(key)) return memo.get(key);
        
        // Check if both strings have same character frequency
        const count = new Array(26).fill(0);
        for (let i = 0; i < str1.length; i++) {
            count[str1.charCodeAt(i) - 97]++;
            count[str2.charCodeAt(i) - 97]--;
        }
        if (count.some(c => c !== 0)) {
            memo.set(key, false);
            return false;
        }
        
        const n = str1.length;
        
        // Try all possible split positions
        for (let i = 1; i < n; i++) {
            // Case 1: No swap - s1[0:i] matches s2[0:i] and s1[i:] matches s2[i:]
            if (solve(str1.slice(0, i), str2.slice(0, i)) && 
                solve(str1.slice(i), str2.slice(i))) {
                memo.set(key, true);
                return true;
            }
            
            // Case 2: Swap - s1[0:i] matches s2[n-i:] and s1[i:] matches s2[0:n-i]
            if (solve(str1.slice(0, i), str2.slice(n - i)) && 
                solve(str1.slice(i), str2.slice(0, n - i))) {
                memo.set(key, true);
                return true;
            }
        }
        
        memo.set(key, false);
        return false;
    };
    
    return solve(s1, s2);
};