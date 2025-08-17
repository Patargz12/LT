function shortestBridge(grid) {
    const n = grid.length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const queue = [];
    
    function dfs(r, c) {
        if (r < 0 || r >= n || c < 0 || c >= n || grid[r][c] !== 1) return;
        
        grid[r][c] = 2;
        queue.push([r, c, 0]);
        
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc);
        }
    }
    
    let found = false;
    for (let i = 0; i < n && !found; i++) {
        for (let j = 0; j < n && !found; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j);
                found = true;
            }
        }
    }
    
    while (queue.length > 0) {
        const [r, c, dist] = queue.shift();
        
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            
            if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
                if (grid[nr][nc] === 1) {
                    return dist;
                }
                if (grid[nr][nc] === 0) {
                    grid[nr][nc] = 2;
                    queue.push([nr, nc, dist + 1]);
                }
            }
        }
    }
    
    return -1;
}