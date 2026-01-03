function makeLargestSpecial(s: string): string {
    if (s.length <= 2) return s;
    
    const subs: string[] = [];
    let count = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        count += s[i] === '1' ? 1 : -1;
        if (count === 0) {
            subs.push('1' + makeLargestSpecial(s.substring(start + 1, i)) + '0');
            start = i + 1;
        }
    }
    
    subs.sort((a, b) => b.localeCompare(a));
    
    return subs.join('');
}