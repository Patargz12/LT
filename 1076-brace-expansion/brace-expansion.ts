function expand(s: string): string[] {
    const groups: string[][] = [];
    let i = 0;
    
    while (i < s.length) {
        if (s[i] === '{') {
            const closingIndex = s.indexOf('}', i);
            const options = s.substring(i + 1, closingIndex).split(',');
            groups.push(options);
            i = closingIndex + 1;
        } else {
            groups.push([s[i]]);
            i++;
        }
    }
    
    const results: string[] = [];
    
    const backtrack = (index: number, path: string) => {
        if (index === groups.length) {
            results.push(path);
            return;
        }
        
        for (const option of groups[index]) {
            backtrack(index + 1, path + option);
        }
    };
    
    backtrack(0, '');
    results.sort();
    return results;
}