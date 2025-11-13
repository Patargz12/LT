function countLetters(s: string): number {
    let count = 0;
    let i = 0;
    
    while (i < s.length) {
        let j = i;
        while (j < s.length && s[j] === s[i]) {
            j++;
        }
        const length = j - i;
        count += (length * (length + 1)) / 2;
        i = j;
    }
    
    return count;
}