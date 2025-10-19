const shortestCompletingWord = (licensePlate: string, words: string[]): string => {
    const getFreq = (s: string): Map<string, number> => {
        const freq = new Map<string, number>();
        for (const char of s.toLowerCase()) {
            if (char >= 'a' && char <= 'z') {
                freq.set(char, (freq.get(char) || 0) + 1);
            }
        }
        return freq;
    };
    
    const isCompleting = (word: string, plateFreq: Map<string, number>): boolean => {
        const wordFreq = getFreq(word);
        for (const [char, count] of plateFreq) {
            if ((wordFreq.get(char) || 0) < count) {
                return false;
            }
        }
        return true;
    };
    
    const plateFreq = getFreq(licensePlate);
    let result = "";
    
    for (const word of words) {
        if (isCompleting(word, plateFreq)) {
            if (result === "" || word.length < result.length) {
                result = word;
            }
        }
    }
    
    return result;
};