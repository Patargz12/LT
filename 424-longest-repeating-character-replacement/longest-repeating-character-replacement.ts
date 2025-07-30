const characterReplacement = (s, k) => {
    let left = 0, maxCount = 0, maxLength = 0;
    const count = {};
    
    for (let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;
        maxCount = Math.max(maxCount, count[s[right]]);
        
        if (right - left + 1 - maxCount > k) {
            count[s[left]]--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};