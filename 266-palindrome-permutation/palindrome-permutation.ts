function canPermutePalindrome(s: string): boolean {
    const charCount = new Map<string, number>();
    
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let oddCount = 0;
    
    for (const count of charCount.values()) {
        if (count % 2 === 1) {
            oddCount++;
        }
    }
    
    return oddCount <= 1;
}