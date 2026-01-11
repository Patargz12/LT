function projectionArea(grid: number[][]): number {
    const n = grid.length;
    let total = 0;
    
    for (let i = 0; i < n; i++) {
        let maxRow = 0;
        let maxCol = 0;
        
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) total++;
            maxRow = Math.max(maxRow, grid[i][j]);
            maxCol = Math.max(maxCol, grid[j][i]);
        }
        
        total += maxRow + maxCol;
    }
    
    return total;
}