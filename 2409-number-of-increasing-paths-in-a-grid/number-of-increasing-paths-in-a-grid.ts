function countPaths(grid: number[][]): number {
    const MOD = 1e9 + 7;
    const m = grid.length;
    const n = grid[0].length;
    
    // Memoization table to store the number of paths starting from each cell
    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));
    
    // Four directions: up, down, left, right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // DFS with memoization to count paths starting from (i, j)
    function dfs(i: number, j: number): number {
        // If already computed, return the cached result
        if (dp[i][j] !== -1) {
            return dp[i][j];
        }
        
        // Base case: at least one path (the cell itself)
        let paths = 1;
        
        // Explore all 4 directions
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            
            // Check bounds and strictly increasing condition
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] > grid[i][j]) {
                paths = (paths + dfs(ni, nj)) % MOD;
            }
        }
        
        dp[i][j] = paths;
        return paths;
    }
    
    // Count paths starting from every cell
    let totalPaths = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            totalPaths = (totalPaths + dfs(i, j)) % MOD;
        }
    }
    
    return totalPaths;
}

