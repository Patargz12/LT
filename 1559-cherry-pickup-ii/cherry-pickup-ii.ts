function cherryPickup(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const memo = new Array(rows).fill(null).map(() => 
        new Array(cols).fill(null).map(() => 
            new Array(cols).fill(-1)
        )
    );
    
    function dp(row, col1, col2) {
        if (col1 < 0 || col1 >= cols || col2 < 0 || col2 >= cols) {
            return -Infinity;
        }
        
        if (row === rows - 1) {
            return col1 === col2 ? grid[row][col1] : grid[row][col1] + grid[row][col2];
        }
        
        if (memo[row][col1][col2] !== -1) {
            return memo[row][col1][col2];
        }
        
        let cherries = grid[row][col1];
        if (col1 !== col2) {
            cherries += grid[row][col2];
        }
        
        let maxFuture = 0;
        for (let move1 = -1; move1 <= 1; move1++) {
            for (let move2 = -1; move2 <= 1; move2++) {
                maxFuture = Math.max(maxFuture, dp(row + 1, col1 + move1, col2 + move2));
            }
        }
        
        memo[row][col1][col2] = cherries + maxFuture;
        return memo[row][col1][col2];
    }
    
    return dp(0, 0, cols - 1);
}