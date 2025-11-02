function lengthOfLongestSubstringTwoDistinct(s: string): number {
    const charCount = new Map<string, number>();
    let left = 0;
    let maxLen = 0;
    
    for (let right = 0; right < s.length; right++) {
        // Add current character to window
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
        
        // Shrink window if more than 2 distinct characters
        while (charCount.size > 2) {
            const leftChar = s[left];
            charCount.set(leftChar, charCount.get(leftChar)! - 1);
            
            if (charCount.get(leftChar) === 0) {
                charCount.delete(leftChar);
            }
            
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}