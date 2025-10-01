function judgePoint24(cards: number[]): boolean {
    const eps = 1e-6;
    
    function backtrack(nums: number[]): boolean {
        if (nums.length === 1) {
            return Math.abs(nums[0] - 24) < eps;
        }
        
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;
                
                const next: number[] = [];
                for (let k = 0; k < nums.length; k++) {
                    if (k !== i && k !== j) {
                        next.push(nums[k]);
                    }
                }
                
                const a = nums[i];
                const b = nums[j];
                
                const operations = [
                    a + b,
                    a - b,
                    a * b,
                    b !== 0 ? a / b : NaN
                ];
                
                for (const result of operations) {
                    if (isNaN(result)) continue;
                    next.push(result);
                    if (backtrack(next)) return true;
                    next.pop();
                }
            }
        }
        
        return false;
    }
    
    return backtrack(cards);
}