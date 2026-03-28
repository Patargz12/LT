function longestNiceSubstring(s: string): string {
    if (s.length < 2) return "";

    const charSet = new Set(s);

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const opposite = char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase();

        
        if (!charSet.has(opposite)) {
            const left  = longestNiceSubstring(s.slice(0, i));
            const right = longestNiceSubstring(s.slice(i + 1));

       
            return left.length >= right.length ? left : right;
        }
    }


    return s;
}