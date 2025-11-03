function groupStrings(strings: string[]): string[][] {
    const map = new Map<string, string[]>();
    
    for (const str of strings) {
        const key = getKey(str);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(str);
    }
    
    return Array.from(map.values());
}

function getKey(str: string): string {
    if (str.length === 1) return '1,';
    
    const diffs: number[] = [];
    for (let i = 1; i < str.length; i++) {
        let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
        if (diff < 0) diff += 26;
        diffs.push(diff);
    }
    
    return str.length + ',' + diffs.join(',');
}