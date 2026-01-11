function uncommonFromSentences(s1: string, s2: string): string[] {
    const count = new Map<string, number>();
    
    for (const word of s1.split(' ')) {
        count.set(word, (count.get(word) || 0) + 1);
    }
    
    for (const word of s2.split(' ')) {
        count.set(word, (count.get(word) || 0) + 1);
    }
    
    return Array.from(count.entries())
        .filter(([_, freq]) => freq === 1)
        .map(([word]) => word);
}