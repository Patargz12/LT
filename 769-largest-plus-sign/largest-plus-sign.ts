function orderOfLargestPlusSign(n: number, mines: number[][]): number {
    const grid = Array.from({ length: n }, () => Array(n).fill(n));
    
    for (const [x, y] of mines) {
        grid[x][y] = 0;
    }
    
    for (let i = 0; i < n; i++) {
        let left = 0, right = 0, up = 0, down = 0;
        
        for (let j = 0, k = n - 1; j < n; j++, k--) {
            left = grid[i][j] === 0 ? 0 : left + 1;
            grid[i][j] = Math.min(grid[i][j], left);
            
            right = grid[i][k] === 0 ? 0 : right + 1;
            grid[i][k] = Math.min(grid[i][k], right);
            
            up = grid[j][i] === 0 ? 0 : up + 1;
            grid[j][i] = Math.min(grid[j][i], up);
            
            down = grid[k][i] === 0 ? 0 : down + 1;
            grid[k][i] = Math.min(grid[k][i], down);
        }
    }
    
    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            max = Math.max(max, grid[i][j]);
        }
    }
    
    return max;
}