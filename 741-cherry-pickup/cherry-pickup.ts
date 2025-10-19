const cherryPickup = (grid: number[][]): number => {
    const n = grid.length;
    const memo = new Map<string, number>();
    
    const dp = (r1: number, c1: number, r2: number): number => {
        const c2 = r1 + c1 - r2;
        
        if (r1 >= n || c1 >= n || r2 >= n || c2 >= n || 
            grid[r1][c1] === -1 || grid[r2][c2] === -1) {
            return -Infinity;
        }
        
        if (r1 === n - 1 && c1 === n - 1) {
            return grid[r1][c1];
        }
        
        const key = `${r1},${c1},${r2}`;
        if (memo.has(key)) return memo.get(key)!;
        
        let cherries = grid[r1][c1];
        if (r1 !== r2) {
            cherries += grid[r2][c2];
        }
        
        const max = Math.max(
            dp(r1 + 1, c1, r2 + 1),
            dp(r1 + 1, c1, r2),
            dp(r1, c1 + 1, r2 + 1),
            dp(r1, c1 + 1, r2)
        );
        
        cherries += max;
        memo.set(key, cherries);
        return cherries;
    };
    
    return Math.max(0, dp(0, 0, 0));
};