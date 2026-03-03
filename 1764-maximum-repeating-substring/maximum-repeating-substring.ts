function maxRepeating(sequence: string, word: string): number {
    let k = 0;
    while (sequence.includes(word.repeat(k + 1))) k++;
    return k;
}