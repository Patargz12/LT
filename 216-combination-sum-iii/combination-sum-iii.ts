function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = [];
    
    function backtrack(start: number, current: number[], sum: number) {
        if (current.length === k) {
            if (sum === n) {
                result.push([...current]);
            }
            return;
        }
        
        for (let i = start; i <= 9; i++) {
            if (sum + i > n) break;
            current.push(i);
            backtrack(i + 1, current, sum + i);
            current.pop();
        }
    }
    
    backtrack(1, [], 0);
    return result;
}