function topKFrequent(words: string[], k: number): string[] {
    const freq = new Map<string, number>();
    for (const word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }
    
    const sorted = Array.from(freq.entries())
        .sort((a, b) => {
            if (a[1] !== b[1]) return b[1] - a[1];
            return a[0].localeCompare(b[0]);
        });
    
    return sorted.slice(0, k).map(entry => entry[0]);
}