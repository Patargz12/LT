const longestPalindrome = (s) => {
    const charCount = new Map();
    
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let length = 0;
    let hasOdd = false;
    
    for (const count of charCount.values()) {
        length += Math.floor(count / 2) * 2;
        if (count % 2 === 1) {
            hasOdd = true;
        }
    }
    
    return hasOdd ? length + 1 : length;
};