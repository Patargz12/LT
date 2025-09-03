function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    
    const phoneMap: Record<string, string> = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const result: string[] = [];
    
    const backtrack = (index: number, path: string) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        
        const letters = phoneMap[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, path + letter);
        }
    };
    
    backtrack(0, '');
    return result;
}