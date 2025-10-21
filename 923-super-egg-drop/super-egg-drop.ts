function superEggDrop(k: number, n: number): number {
    const memo = new Map<string, number>();
    
    function dp(eggs: number, floors: number): number {
        if (floors <= 1) return floors;
        if (eggs === 1) return floors;
        
        const key = `${eggs},${floors}`;
        if (memo.has(key)) return memo.get(key)!;
        
        let left = 1;
        let right = floors;
        let result = floors;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const breakCase = dp(eggs - 1, mid - 1);
            const noBreakCase = dp(eggs, floors - mid);
            
            result = Math.min(result, 1 + Math.max(breakCase, noBreakCase));
            
            if (breakCase < noBreakCase) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        memo.set(key, result);
        return result;
    }
    
    return dp(k, n);
}