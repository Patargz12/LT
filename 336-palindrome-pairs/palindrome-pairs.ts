function palindromePairs(words: string[]): number[][] {
    const wordMap = new Map<string, number>();
    const result: number[][] = [];
    
    for (let i = 0; i < words.length; i++) {
        const reversed = words[i].split('').reverse().join('');
        wordMap.set(reversed, i);
    }
    
    const isPalindrome = (s: string, start: number, end: number): boolean => {
        while (start < end) {
            if (s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true;
    };
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        for (let j = 0; j <= word.length; j++) {
            if (isPalindrome(word, j, word.length - 1)) {
                const prefix = word.substring(0, j);
                const idx = wordMap.get(prefix);
                if (idx !== undefined && idx !== i) {
                    result.push([i, idx]);
                }
            }
            
            if (j < word.length && isPalindrome(word, 0, j)) {
                const suffix = word.substring(j + 1);
                const idx = wordMap.get(suffix);
                if (idx !== undefined && idx !== i) {
                    result.push([idx, i]);
                }
            }
        }
    }
    
    return result;
}