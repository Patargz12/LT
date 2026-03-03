function countConsistentStrings(allowed: string, words: string[]): number {
    const set = new Set(allowed);
    return words.filter(w => w.split('').every(c => set.has(c))).length;
}