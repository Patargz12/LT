function getFactors(n: number): number[][] {
    const results: number[][] = [];
    
    const backtrack = (remaining: number, start: number, path: number[]) => {
        if (remaining === 1) {
            if (path.length > 1) {
                results.push([...path]);
            }
            return;
        }
        
        for (let i = start; i <= remaining; i++) {
            if (remaining % i === 0) {
                path.push(i);
                backtrack(remaining / i, i, path);
                path.pop();
            }
        }
    };
    
    backtrack(n, 2, []);
    return results;
}