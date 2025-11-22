function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;
    
    const freq1 = new Map<string, number>();
    const freq2 = new Map<string, number>();
    
    for (const char of word1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }
    
    for (const char of word2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }
    
    const keys1 = [...freq1.keys()].sort().join('');
    const keys2 = [...freq2.keys()].sort().join('');
    if (keys1 !== keys2) return false;
    
    const counts1 = [...freq1.values()].sort((a, b) => a - b);
    const counts2 = [...freq2.values()].sort((a, b) => a - b);
    
    return counts1.every((val, i) => val === counts2[i]);
}