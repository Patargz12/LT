function halvesAreAlike(s: string): boolean {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const mid = s.length / 2;
    let count = 0;

    for (let i = 0; i < mid; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[mid + i])) count--;
    }

    return count === 0;
}