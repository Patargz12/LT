function orangesRotting(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const queue: [number, number][] = [];
    let fresh = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            if (grid[i][j] === 1) fresh++;
        }
    }
    
    if (fresh === 0) return 0;
    
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let minutes = 0;
    
    while (queue.length > 0) {
        const size = queue.length;
        let rotted = false;
        
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()!;
            
            for (const [dr, dc] of dirs) {
                const newRow = row + dr;
                const newCol = col + dc;
                
                if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) continue;
                if (grid[newRow][newCol] !== 1) continue;
                
                grid[newRow][newCol] = 2;
                queue.push([newRow, newCol]);
                fresh--;
                rotted = true;
            }
        }
        
        if (rotted) minutes++;
    }
    
    return fresh === 0 ? minutes : -1;
}