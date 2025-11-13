function findStrobogrammatic(n: number): string[] {
    const pairs: [string, string][] = [['0', '0'], ['1', '1'], ['6', '9'], ['8', '8'], ['9', '6']];
    
    const helper = (remaining: number, length: number): string[] => {
        if (remaining === 0) return [''];
        if (remaining === 1) return ['0', '1', '8'];
        
        const midResults = helper(remaining - 2, length);
        const results: string[] = [];
        
        for (const mid of midResults) {
            for (const [left, right] of pairs) {
                if (remaining !== length || left !== '0') {
                    results.push(left + mid + right);
                }
            }
        }
        
        return results;
    };
    
    return helper(n, n);
}