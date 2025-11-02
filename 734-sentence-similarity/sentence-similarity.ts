function areSentencesSimilar(
    sentence1: string[],
    sentence2: string[],
    similarPairs: string[][]
): boolean {
    if (sentence1.length !== sentence2.length) return false;
    
    const similarSet = new Set<string>();
    
    for (const [word1, word2] of similarPairs) {
        similarSet.add(`${word1}-${word2}`);
        similarSet.add(`${word2}-${word1}`);
    }
    
    for (let i = 0; i < sentence1.length; i++) {
        const word1 = sentence1[i];
        const word2 = sentence2[i];
        
        if (word1 === word2) continue;
        
        if (!similarSet.has(`${word1}-${word2}`)) {
            return false;
        }
    }
    
    return true;
}