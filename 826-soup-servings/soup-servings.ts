function soupServings(n: number): number {
    if (n >= 4800) return 1;
    
    n = Math.ceil(n / 25);
    
    const memo = new Map<string, number>();
    
    function dp(a: number, b: number): number {
        if (a <= 0 && b <= 0) return 0.5;
        if (a <= 0) return 1;
        if (b <= 0) return 0;
        
        const key = `${a},${b}`;
        if (memo.has(key)) return memo.get(key)!;
        
        const result = 0.25 * (
            dp(a - 4, b) +
            dp(a - 3, b - 1) +
            dp(a - 2, b - 2) +
            dp(a - 1, b - 3)
        );
        
        memo.set(key, result);
        return result;
    }
    
    return dp(n, n);
}